import { AWSManagedPolicies } from './';
export class Hello {
  constructor(public name: string) {
    console.log(`Hello ${name} ${AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE}`);
  }
}