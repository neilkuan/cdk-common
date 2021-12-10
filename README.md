[![NPM version](https://badge.fury.io/js/cdk-common.svg)](https://badge.fury.io/js/cdk-common)
[![PyPI version](https://badge.fury.io/py/cdk-common.svg)](https://badge.fury.io/py/cdk-common)
[![release](https://github.com/neilkuan/cdk-common/actions/workflows/release.yml/badge.svg)](https://github.com/neilkuan/cdk-common/actions/workflows/release.yml)

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
![npm](https://img.shields.io/npm/dt/cdk-common?label=npm&color=orange)
![PyPI](https://img.shields.io/pypi/dm/cdk-common?label=pypi&color=blue)

# Welcome to `cdk-common`
This Constructs Library will collection of useful `function` and `class` for AWS CDK.

## Install
```bash
Use the npm dist tag to opt in CDKv1 or CDKv2:

// for CDKv2
npm install cdk-common
or
npm install cdk-common@latest

// for CDKv1
npm install cdk-common@cdkv1
```

### AWS Managed Policies `enum`
```ts
import * as cdk from '@aws-cdk/core';
import { AWSManagedPolicies } from 'cdk-common';
const app = new cdk.App();

const stack = new cdk.Stack(app, 'integ-default', { env });

export class IntegDefault extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string ) {
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