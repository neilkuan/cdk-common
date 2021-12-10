import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import { AWSManagedPolicies, LambdaArmFunction } from '.';

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
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AWSLAMBDA_EXECUTE));


    new LambdaArmFunction(this, 'aaa', {
      runtime: lambda.Runtime.PYTHON_3_8,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
import platform
def handler(event, contexts):
    arch = platform.system()
    return { "arch": str(arch)}`),
    });

  }
}

new IntegDefault(stack, 'IntegDefault');

app.synth();