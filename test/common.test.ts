import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { AWSManagedPolicies, LambdaArmFunction } from '../src/index';

test('Has Role Attach Managed Role', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  const role = new iam.Role(stack, 'iamrole', {
    assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
  });
  role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE));

  const runtimeList = [lambda.Runtime.PYTHON_3_8,
    lambda.Runtime.PYTHON_3_9, lambda.Runtime.JAVA_8_CORRETTO, lambda.Runtime.JAVA_11,
    lambda.Runtime.RUBY_2_7];
  const bk = new s3.Bucket(stack, 'thebucket');
  runtimeList.forEach((runtime, index) => {
    new LambdaArmFunction(stack, `aaa${index}`, {
      runtime: runtime,
      handler: 'index.handler',
      code: lambda.Code.fromBucket(bk, 'test' ),
    });
  });

  assertions.Template.fromStack(stack).findResources('AWS::S3::Bucket');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
  });
});
