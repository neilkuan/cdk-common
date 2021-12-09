[![NPM version](https://badge.fury.io/js/cdk-common.svg)](https://badge.fury.io/js/cdk-common)
[![PyPI version](https://badge.fury.io/py/cdk-common.svg)](https://badge.fury.io/py/cdk-common)
[![release](https://github.com/neilkuan/cdk-common/actions/workflows/release.yml/badge.svg)](https://github.com/neilkuan/cdk-common/actions/workflows/release.yml)

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
![npm](https://img.shields.io/npm/dt/cdk-common?label=npm&color=orange)
![PyPI](https://img.shields.io/pypi/dm/cdk-common?label=pypi&color=blue)

# Welcome to `cdk-common`
This Constructs Library will collection of useful `function` and `class` for AWS CDK.

## !!! Usage Note !!!
cdk-common before version: 0.0.68, support aws-cdk version: 1.xxx.xxx.

cdk-common start at version: 2.x.x, support aws-cdk version: 2.xxx.xxx.

### AWS Managed Policies `enum`
```ts
import * as cdk from 'aws-cdk-lib';
import { AWSManagedPolicies } from 'cdk-common';
import { Construct } from 'constructs';
const app = new cdk.App();

const stack = new cdk.Stack(app, 'integ-default', { env });

export class IntegDefault extends Construct {
  constructor(scope: Construct, id: string ) {
    super(scope, id);

    const role = new iam.Role(this, 'iamrole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });
    // Use this way.
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE));

    // Not this way.
    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
  }
}

```