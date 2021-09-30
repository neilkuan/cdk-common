import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
import '@aws-cdk/assert/jest';
import { AWSManagedPolicies } from '../src/managed-policies';

test('Has Role Attach Managed Role', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'testing-stack');
  const role = new iam.Role(stack, 'iamrole', {
    assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
  });
  role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName(AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE));
  expect(stack).not.toHaveResourceLike('AWS::S3::Bucket');
});