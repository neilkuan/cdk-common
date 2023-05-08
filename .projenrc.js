const constant = require('case').constant;
const { awscdk, SourceCode, FileBase } = require('projen');

const PROJECT_NAME = 'cdk-common';
const PROJECT_DESCRIPTION = 'Common AWS CDK librarys.';

const project = new awscdk.AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.12.0',
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  /**
    * we also release the cdkv1 branch with major version 1.
    */
  releaseBranches: {
    cdkv1: { npmDistTag: 'cdkv1', majorVersion: 1 },
  },
  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/neilkuan/cdk-common.git',
  keywords: ['aws', 'common', 'lib', 'aws-cdk'],
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  compat: true,
  stability: 'experimental',
  autoDetectBin: false,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  publishToPypi: {
    distName: 'cdk-common',
    module: 'cdk_common',
  },
  deps: [
    'sync-request',
    'case',
  ],
  bundledDeps: [
    '@aws-cdk/assert',
    'sync-request',
    'case',
  ],
  workflowNodeVersion: '^16.20.0',
  typescriptVersion: '^4.9',
});


const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);

project.npmignore.exclude(...common_exclude, 'image');

function ts(path) {
  const src = new SourceCode(project, path);
  src.line(`// ${FileBase.PROJEN_MARKER}`);
  return src;
}

const policy = ts('src/managed-policies.ts');
policy.line('export enum AWSManagedPolicies {');
async function run() {
  const request = require('sync-request');
  var policies = request('GET', 'https://raw.githubusercontent.com/neilkuan/aws-somethings/main/policies.json').getBody('utf-8');
  var policiesList = JSON.parse(policies);

  return policiesList;
};

void run().then( final => {
  final.forEach(p => {
    policy.line(`  '${constant(p)}' = '${p}',`);
  });
  policy.open('};');
  project.synth();
});