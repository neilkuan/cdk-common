const constant = require('case').constant;
const { awscdk, SourceCode, FileBase } = require('projen');

const PROJECT_NAME = 'cdk-common';
const PROJECT_DESCRIPTION = 'Common AWS CDK librarys.';

const project = new awscdk.AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.188.0',
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
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
  devDeps: [
    'ts-jest@29.1.2',
    'jsii-rosetta@5.0.x',
  ],
  minNodeVersion: '20.10.0',
  workflowNodeVersion: '20.10.0',
  typescriptVersion: '^5',
  jsiiVersion: '5.7.x',
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
    if (p.split('/').length >= 3 ) {
      policy.line(`  ${constant(p.split('/').slice(2))} = '${p.split('/').slice(1, 3).join('/')}',`);
    } else {
      policy.line(`  ${constant(p.split('/').slice(1))} = '${p.split('/').slice(1)}',`);
    }

  });
  policy.open('};');
  project.synth();
});