import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import '@aws-cdk/assert/jest';
import { AWSManagedPolicies, LambdaArmFunction } from '../src/index';

test('Has Role Attach Managed Role', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  const role = new iam.Role(stack, 'iamrole', {
    assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
  });
  role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE));

  const runtimeList = [lambda.Runtime.NODEJS_12_X, lambda.Runtime.NODEJS_14_X, lambda.Runtime.PYTHON_3_8,
    lambda.Runtime.PYTHON_3_9, lambda.Runtime.JAVA_8_CORRETTO, lambda.Runtime.JAVA_11, lambda.Runtime.DOTNET_CORE_3_1,
    lambda.Runtime.RUBY_2_7];
  const bk = new s3.Bucket(stack, 'thebucket');
  runtimeList.forEach((runtime, index) => {
    new LambdaArmFunction(stack, `aaa${index}`, {
      runtime: runtime,
      handler: 'index.handler',
      code: lambda.Code.fromBucket(bk, 'test' ),
    });
  });

  expect(stack).toHaveResource('AWS::S3::Bucket');
  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
  });
});

test('fail use go runtime on arm', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  expect(()=>{
    new LambdaArmFunction(stack, 'aaa', {
      runtime: lambda.Runtime.GO_1_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
import platform
def handler(event, contexts):
    arch = platform.system()
    return { "arch": str(arch)}`),
    });
  }).toThrowError('Invalid Runtime go1.x at ARM, See https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html?icmpid=docs_lambda_rss');
});