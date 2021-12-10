import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
export interface LambdaArmFunctionProps extends lambda.FunctionProps {

}

export class LambdaArmFunction extends cdk.Construct {
  public readonly lambdaFunction: lambda.Function;
  constructor(scope: cdk.Construct, id: string, props:LambdaArmFunctionProps) {
    super(scope, id);

    if (props.runtime === lambda.Runtime.NODEJS_12_X) {
      cdk.Annotations.of(this).addWarning('You are using Node.js 12.x at ARM');
    } else if (props.runtime === lambda.Runtime.NODEJS_14_X) {
      cdk.Annotations.of(this).addWarning('You are using Node.js 14.x at ARM');
    } else if (props.runtime === lambda.Runtime.PYTHON_3_8) {
      cdk.Annotations.of(this).addWarning('You are using Python 3.8 at ARM');
    } else if (props.runtime === lambda.Runtime.PYTHON_3_9) {
      cdk.Annotations.of(this).addWarning('You are using Python 3.9 at ARM');
    } else if (props.runtime === lambda.Runtime.JAVA_8_CORRETTO) {
      cdk.Annotations.of(this).addWarning('You are using Java 8 on al2 at ARM');
    } else if (props.runtime === lambda.Runtime.JAVA_11) {
      cdk.Annotations.of(this).addWarning('You are using Java 11 at ARM');
    } else if (props.runtime === lambda.Runtime.DOTNET_CORE_3_1) {
      cdk.Annotations.of(this).addWarning('You are using DOTNET CORE 3.1 at ARM');
    } else if (props.runtime === lambda.Runtime.RUBY_2_7) {
      cdk.Annotations.of(this).addWarning('You are using RUBY 2.7 at ARM');
    } else {
      throw new Error(`Invalid Runtime ${props.runtime} at ARM, See https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html?icmpid=docs_lambda_rss`);
    }

    this.lambdaFunction = new lambda.Function(this, 'LambdaFunction', { architecture: lambda.Architecture.ARM_64, ...props });
  }
}