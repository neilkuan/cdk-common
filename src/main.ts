import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
export interface LambdaArmFunctionProps extends lambda.FunctionProps {

}

export class LambdaArmFunction extends Construct {
  public readonly lambdaFunction: lambda.Function;
  constructor(scope: Construct, id: string, props:LambdaArmFunctionProps) {
    super(scope, id);

    const runtimeWarnings = new Map<lambda.Runtime, string>([
      [lambda.Runtime.NODEJS_22_X, 'You are using Node.js 22.x at ARM'],
      [lambda.Runtime.NODEJS_20_X, 'You are using Node.js 20.x at ARM'],
      [lambda.Runtime.NODEJS_18_X, 'You are using Node.js 18.x at ARM'],
      [lambda.Runtime.PYTHON_3_13, 'You are using Python 3.13 at ARM'],
      [lambda.Runtime.PYTHON_3_12, 'You are using Python 3.12 at ARM'],
      [lambda.Runtime.PYTHON_3_11, 'You are using Python 3.11 at ARM'],
      [lambda.Runtime.PYTHON_3_10, 'You are using Python 3.10 at ARM'],
      [lambda.Runtime.JAVA_21, 'You are using Java 21 at ARM'],
      [lambda.Runtime.JAVA_17, 'You are using Java 17 at ARM'],
      [lambda.Runtime.DOTNET_8, 'You are using .NET 8 at ARM'],
      [lambda.Runtime.RUBY_3_4, 'You are using Ruby 3.4 at ARM'],
      [lambda.Runtime.RUBY_3_3, 'You are using Ruby 3.3 at ARM'],
    ]);

    const warning = runtimeWarnings.get(props.runtime);
    if (warning) {
      cdk.Annotations.of(this).addWarning(warning);
    } else {
      throw new Error(`Invalid Runtime ${props.runtime} at ARM, See https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html?icmpid=docs_lambda_rss`);
    }

    this.lambdaFunction = new lambda.Function(this, 'LambdaFunction', {
      architecture: props.architecture ?? lambda.Architecture.ARM_64,
      ...props,
    });
  }
}
