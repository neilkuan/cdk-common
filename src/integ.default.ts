import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import { AWSManagedPolicies } from './index';

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const app = new cdk.App();

const stack = new cdk.Stack(app, 'integ-default', { env });

export class IntegDefault extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string ) {
    super(scope, id);

    const role = new iam.Role(this, 'iamrole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });

    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE));
  }
}

new IntegDefault(stack, 'IntegDefault');

app.synth();