# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### LambdaArmFunction <a name="cdk-common.LambdaArmFunction"></a>

#### Initializers <a name="cdk-common.LambdaArmFunction.Initializer"></a>

```typescript
import { LambdaArmFunction } from 'cdk-common'

new LambdaArmFunction(scope: Construct, id: string, props: LambdaArmFunctionProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-common.LambdaArmFunction.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-common.LambdaArmFunction.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-common.LambdaArmFunction.parameter.props"></a>

- *Type:* [`cdk-common.LambdaArmFunctionProps`](#cdk-common.LambdaArmFunctionProps)

---



#### Properties <a name="Properties"></a>

##### `lambdaFunction`<sup>Required</sup> <a name="cdk-common.LambdaArmFunction.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: Function;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Function`](#aws-cdk-lib.aws_lambda.Function)

---


## Structs <a name="Structs"></a>

### LambdaArmFunctionProps <a name="cdk-common.LambdaArmFunctionProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LambdaArmFunctionProps } from 'cdk-common'

const lambdaArmFunctionProps: LambdaArmFunctionProps = { ... }
```

##### `maxEventAge`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IDestination`](#aws-cdk-lib.aws_lambda.IDestination)
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* `number`
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* [`aws-cdk-lib.aws_lambda.AdotInstrumentationConfig`](#aws-cdk-lib.aws_lambda.AdotInstrumentationConfig)
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> https://aws-otel.github.io/docs/getting-started/lambda

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* `boolean`
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* `string`
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* [`aws-cdk-lib.aws_lambda.ICodeSigningConfig`](#aws-cdk-lib.aws_lambda.ICodeSigningConfig)
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.VersionOptions`](#aws-cdk-lib.aws_lambda.VersionOptions)
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue)
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* [`aws-cdk-lib.aws_sns.ITopic`](#aws-cdk-lib.aws_sns.ITopic)
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* [`aws-cdk-lib.aws_kms.IKey`](#aws-cdk-lib.aws_kms.IKey)
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* [`aws-cdk-lib.Size`](#aws-cdk-lib.Size)
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.IEventSource`](#aws-cdk-lib.aws_lambda.IEventSource)[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* [`aws-cdk-lib.aws_lambda.FileSystem`](#aws-cdk-lib.aws_lambda.FileSystem)
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* `string`
- *Default:* AWS CloudFormation generates a unique physical ID and uses that
ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* [`aws-cdk-lib.aws_iam.PolicyStatement`](#aws-cdk-lib.aws_iam.PolicyStatement)[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LambdaInsightsVersion`](#aws-cdk-lib.aws_lambda.LambdaInsightsVersion)
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html

---

##### `layers`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logFormat`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* `string`
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* [`aws-cdk-lib.aws_logs.ILogGroup`](#aws-cdk-lib.aws_logs.ILogGroup)
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* [`aws-cdk-lib.aws_logs.RetentionDays`](#aws-cdk-lib.aws_logs.RetentionDays)
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.LogRetentionRetryOptions`](#aws-cdk-lib.aws_lambda.LogRetentionRetryOptions)
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* `number`
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* [`aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion`](#aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion)
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html

---

##### `profiling`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* `boolean`
- *Default:* No profiling.

Enable profiling.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `profilingGroup`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* [`aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup`](#aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup)
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* `number`
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html

---

##### `role`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* A unique role will be generated for this lambda function.
Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* [`aws-cdk-lib.aws_lambda.RuntimeManagementMode`](#aws-cdk-lib.aws_lambda.RuntimeManagementMode)
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.ISecurityGroup`](#aws-cdk-lib.aws_ec2.ISecurityGroup)[]
- *Default:* If the function is placed within a VPC and a security group is
not specified, either by this or securityGroup prop, a dedicated security
group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* [`aws-cdk-lib.aws_lambda.SnapStartConf`](#aws-cdk-lib.aws_lambda.SnapStartConf)
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### `systemLogLevel`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* `string`
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Tracing`](#aws-cdk-lib.aws_lambda.Tracing)
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="cdk-common.LambdaArmFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `code`<sup>Required</sup> <a name="cdk-common.LambdaArmFunctionProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Code`](#aws-cdk-lib.aws_lambda.Code)

The source code of your Lambda function.

You can point to a file in an
Amazon Simple Storage Service (Amazon S3) bucket or specify your source
code as inline text.

---

##### `handler`<sup>Required</sup> <a name="cdk-common.LambdaArmFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* `string`

The name of the method within your code that Lambda calls to execute your function.

The format includes the file name. It can also include
namespaces and other qualifiers, depending on the runtime.
For more information, see https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html.

Use `Handler.FROM_IMAGE` when defining a function from a Docker image.

NOTE: If you specify your source code as inline text by specifying the
ZipFile property within the Code property, specify index.function_name as
the handler.

---

##### `runtime`<sup>Required</sup> <a name="cdk-common.LambdaArmFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Runtime`](#aws-cdk-lib.aws_lambda.Runtime)

The runtime environment for the Lambda function that you are uploading.

For valid values, see the Runtime property in the AWS Lambda Developer
Guide.

Use `Runtime.FROM_IMAGE` when defining a function from a Docker image.

---



## Enums <a name="Enums"></a>

### AWSManagedPolicies <a name="AWSManagedPolicies"></a>

#### `ADMINISTRATOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.ADMINISTRATOR_ACCESS"></a>

---


#### `POWER_USER_ACCESS` <a name="cdk-common.AWSManagedPolicies.POWER_USER_ACCESS"></a>

---


#### `READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.READ_ONLY_ACCESS"></a>

---


#### `AWSCLOUD_FORMATION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_FRONT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_FRONT_FULL_ACCESS"></a>

---


#### `AWSCLOUD_HSM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_FULL_ACCESS"></a>

---


#### `AWSCLOUD_HSM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_READ_ONLY_ACCESS"></a>

---


#### `RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS"></a>

---


#### `RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_FRONT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_FRONT_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_SEARCH_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_SEARCH_FULL_ACCESS"></a>

---


#### `CLOUD_SEARCH_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_SEARCH_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_WATCH_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_WATCH_LOGS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_LOGS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_READ_ONLY_ACCESS"></a>

---


#### `AWSDIRECT_CONNECT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_FULL_ACCESS"></a>

---


#### `AWSDIRECT_CONNECT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_APP_STREAM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_FULL_ACCESS"></a>

---


#### `AMAZON_APP_STREAM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_DYNAMO_DB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESS"></a>

---


#### `AMAZON_DYNAMO_DB_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE` <a name="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE"></a>

---


#### `AMAZON_E_C2_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_FULL_ACCESS"></a>

---


#### `AMAZON_E_C2_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ELASTI_CACHE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_FULL_ACCESS"></a>

---


#### `AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_GLACIER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GLACIER_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_GLACIER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GLACIER_FULL_ACCESS"></a>

---


#### `AMAZON_KINESIS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FULL_ACCESS"></a>

---


#### `AMAZON_KINESIS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_READ_ONLY_ACCESS"></a>

---


#### `AWSMARKETPLACEREAD_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACEREAD_ONLY"></a>

---


#### `AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS"></a>

---


#### `AMAZON_MOBILE_ANALYTICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FULL_ACCESS"></a>

---


#### `AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS"></a>

---


#### `AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS"></a>

---


#### `AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS"></a>

---


#### `IAMFULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.IAMFULL_ACCESS"></a>

---


#### `IAMREAD_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.IAMREAD_ONLY_ACCESS"></a>

---


#### `AWSKEY_MANAGEMENT_SERVICE_POWER_USER` <a name="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_POWER_USER"></a>

---


#### `AMAZON_WORK_MAIL_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_FULL_ACCESS"></a>

---


#### `AMAZON_WORK_MAIL_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_READ_ONLY_ACCESS"></a>

---


#### `AWSIMPORT_EXPORT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_READ_ONLY_ACCESS"></a>

---


#### `AWSIMPORT_EXPORT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_FULL_ACCESS"></a>

---


#### `AWSLAMBDA_EXECUTE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_EXECUTE"></a>

---


#### `AWSLAMBDAINVOCATION_DYNAMODB` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDAINVOCATION_DYNAMODB"></a>

---


#### `AMAZON_REDSHIFT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_FULL_ACCESS"></a>

---


#### `AMAZON_REDSHIFT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_RDS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_FULL_ACCESS"></a>

---


#### `AMAZON_RDS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_FULL_ACCESS"></a>

---


#### `AMAZON_ROUTE53_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_DOMAINS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_FULL_ACCESS"></a>

---


#### `AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_S3_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_S3_FULL_ACCESS"></a>

---


#### `AMAZON_S3_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_S3_READ_ONLY_ACCESS"></a>

---


#### `SECURITY_AUDIT` <a name="cdk-common.AWSManagedPolicies.SECURITY_AUDIT"></a>

---


#### `AMAZON_SES_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SES_FULL_ACCESS"></a>

---


#### `AMAZON_SES_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SES_READ_ONLY_ACCESS"></a>

---


#### `SIMPLE_WORKFLOW_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.SIMPLE_WORKFLOW_FULL_ACCESS"></a>

---


#### `AMAZON_SNS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SNS_FULL_ACCESS"></a>

---


#### `AMAZON_SNS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SNS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_SQS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SQS_FULL_ACCESS"></a>

---


#### `AMAZON_SQS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SQS_READ_ONLY_ACCESS"></a>

---


#### `AWSSTORAGE_GATEWAY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_FULL_ACCESS"></a>

---


#### `AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS"></a>

---


#### `AWSSUPPORT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_ACCESS"></a>

---


#### `AWSDIRECTORY_SERVICE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_FULL_ACCESS"></a>

---


#### `AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ZOCALO_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_FULL_ACCESS"></a>

---


#### `AMAZON_ZOCALO_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_VPC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_FULL_ACCESS"></a>

---


#### `AMAZON_VPC_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_READ_ONLY_ACCESS"></a>

---


#### `AWSACCOUNT_ACTIVITY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSACCOUNT_ACTIVITY_ACCESS"></a>

---


#### `AWSACCOUNT_USAGE_REPORT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSACCOUNT_USAGE_REPORT_ACCESS"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_ROLE"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE"></a>

---


#### `AUTO_SCALING_NOTIFICATION_ACCESS_ROLE` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_NOTIFICATION_ACCESS_ROLE"></a>

---


#### `AWSCLOUD_HSM_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_ROLE"></a>

---


#### `AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE"></a>

---


#### `AMAZON_ELASTIC_TRANSCODER_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_TRANSCODER_ROLE"></a>

---


#### `AWSLAMBDA_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_ROLE"></a>

---


#### `RDSCLOUD_HSM_AUTHORIZATION_ROLE` <a name="cdk-common.AWSManagedPolicies.RDSCLOUD_HSM_AUTHORIZATION_ROLE"></a>

---


#### `AMAZON_SNS_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_SNS_ROLE"></a>

---


#### `AWSCONNECTOR` <a name="cdk-common.AWSManagedPolicies.AWSCONNECTOR"></a>

---


#### `AWSMARKETPLACE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_FULL_ACCESS"></a>

---


#### `AWSCONFIG_USER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_USER_ACCESS"></a>

---


#### `AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE"></a>

---


#### `AMAZON_COGNITO_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_READ_ONLY"></a>

---


#### `AMAZON_COGNITO_POWER_USER` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_POWER_USER"></a>

---


#### `AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES"></a>

---


#### `AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS"></a>

---


#### `AWSLAMBDA_BASIC_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_BASIC_EXECUTION_ROLE"></a>

---


#### `AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE"></a>

---


#### `AWSLAMBDA_KINESIS_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_KINESIS_EXECUTION_ROLE"></a>

---


#### `AMAZON_E_C2_CONTAINER_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_ROLE"></a>

---


#### `AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_FULL_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS"></a>

---


#### `AWSCODE_DEPLOY_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE"></a>

---


#### `AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY"></a>

---


#### `AWSCODE_DEPLOY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_FULL_ACCESS"></a>

---


#### `AWSCODE_DEPLOY_DEPLOYER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_DEPLOYER_ACCESS"></a>

---


#### `AWSCODE_DEPLOY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_SSM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_FULL_ACCESS"></a>

---


#### `AMAZON_SSM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_E_C2_ROLEFOR_SS_M` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_SS_M"></a>

---


#### `CLOUD_WATCH_ACTIONS_E_C2_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_ACTIONS_E_C2_ACCESS"></a>

---


#### `AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS"></a>

---


#### `AWSCODE_COMMIT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_FULL_ACCESS"></a>

---


#### `AWSCODE_COMMIT_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_READ_ONLY"></a>

---


#### `AWSCODE_COMMIT_POWER_USER` <a name="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_POWER_USER"></a>

---


#### `IAMUSER_SSH_KEYS` <a name="cdk-common.AWSManagedPolicies.IAMUSER_SSH_KEYS"></a>

---


#### `AMAZON_API_GATEWAY_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_ADMINISTRATOR"></a>

---


#### `AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS"></a>

---


#### `AWSDEVICE_FARM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_FULL_ACCESS"></a>

---


#### `AMAZON_DRSVPC_MANAGEMENT` <a name="cdk-common.AWSManagedPolicies.AMAZON_DRSVPC_MANAGEMENT"></a>

---


#### `VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR` <a name="cdk-common.AWSManagedPolicies.VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR"></a>

---


#### `AMAZON_WORK_SPACES_ADMIN` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_ADMIN"></a>

---


#### `AMAZON_ES_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ES_FULL_ACCESS"></a>

---


#### `AMAZON_ES_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ES_READ_ONLY_ACCESS"></a>

---


#### `AWSWAFREAD_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSWAFREAD_ONLY_ACCESS"></a>

---


#### `AWSWAFFULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSWAFFULL_ACCESS"></a>

---


#### `AMAZON_INSPECTOR_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_INSPECTOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_FULL_ACCESS"></a>

---


#### `AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_KINESIS_FIREHOSE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_FULL_ACCESS"></a>

---


#### `AWSIO_T_RULE_ACTIONS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_RULE_ACTIONS"></a>

---


#### `AWSIO_T_LOGGING` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_LOGGING"></a>

---


#### `AWSIO_T_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_FULL_ACCESS"></a>

---


#### `AWSIO_T_DATA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DATA_ACCESS"></a>

---


#### `AWSIO_T_CONFIG_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_ACCESS"></a>

---


#### `AWSIO_T_CONFIG_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_READ_ONLY_ACCESS"></a>

---


#### `AWSQUICK_SIGHT_DESCRIBE_RD_S` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_RD_S"></a>

---


#### `AWSQUICK_SIGHT_DESCRIBE_REDSHIFT` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_REDSHIFT"></a>

---


#### `AWSQUICK_SIGHT_LIST_IA_M` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_LIST_IA_M"></a>

---


#### `AMAZON_RDS_ENHANCED_MONITORING_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_ENHANCED_MONITORING_ROLE"></a>

---


#### `AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS` <a name="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS"></a>

---


#### `AMAZON_DMSVPC_MANAGEMENT_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_DMSVPC_MANAGEMENT_ROLE"></a>

---


#### `AMAZON_MECHANICAL_TURK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_FULL_ACCESS"></a>

---


#### `AMAZON_MECHANICAL_TURK_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_READ_ONLY"></a>

---


#### `AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY"></a>

---


#### `AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER"></a>

---


#### `AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS"></a>

---


#### `AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE"></a>

---


#### `CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS"></a>

---


#### `CLOUD_WATCH_EVENTS_INVOCATION_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_INVOCATION_ACCESS"></a>

---


#### `CLOUD_WATCH_EVENTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_FULL_ACCESS"></a>

---


#### `AWSCERTIFICATE_MANAGER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_FULL_ACCESS"></a>

---


#### `AWSCERTIFICATE_MANAGER_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_READ_ONLY"></a>

---


#### `AWSELASTIC_BEANSTALK_WEB_TIER` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WEB_TIER"></a>

---


#### `AWSELASTIC_BEANSTALK_WORKER_TIER` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WORKER_TIER"></a>

---


#### `AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER"></a>

---


#### `AWSELASTIC_BEANSTALK_ENHANCED_HEALTH` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ENHANCED_HEALTH"></a>

---


#### `AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE"></a>

---


#### `AMAZON_RDS_DIRECTORY_SERVICE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_DIRECTORY_SERVICE_ACCESS"></a>

---


#### `AWSMARKETPLACE_METERING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_FULL_ACCESS"></a>

---


#### `AWSCONFIG_RULES_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_RULES_EXECUTION_ROLE"></a>

---


#### `AWSELASTIC_BEANSTALK_SERVICE` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE"></a>

---


#### `AMAZON_DMS_REDSHIFT_S3_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_DMS_REDSHIFT_S3_ROLE"></a>

---


#### `AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS"></a>

---


#### `AWSAPPLICATION_DISCOVERY_AGENT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENT_ACCESS"></a>

---


#### `AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE"></a>

---


#### `AWSOPS_WORKS_INSTANCE_REGISTRATION` <a name="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_INSTANCE_REGISTRATION"></a>

---


#### `AWSCODE_PIPELINE_APPROVER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_APPROVER_ACCESS"></a>

---


#### `AWSAGENTLESS_DISCOVERY_SERVICE` <a name="cdk-common.AWSManagedPolicies.AWSAGENTLESS_DISCOVERY_SERVICE"></a>

---


#### `AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE"></a>

---


#### `AMAZON_KINESIS_ANALYTICS_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_READ_ONLY"></a>

---


#### `AMAZON_KINESIS_ANALYTICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_FULL_ACCESS"></a>

---


#### `SERVER_MIGRATION_CONNECTOR` <a name="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_CONNECTOR"></a>

---


#### `VIEW_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.VIEW_ONLY_ACCESS"></a>

---


#### `SUPPORT_USER` <a name="cdk-common.AWSManagedPolicies.SUPPORT_USER"></a>

---


#### `SYSTEM_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.SYSTEM_ADMINISTRATOR"></a>

---


#### `DATABASE_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.DATABASE_ADMINISTRATOR"></a>

---


#### `DATA_SCIENTIST` <a name="cdk-common.AWSManagedPolicies.DATA_SCIENTIST"></a>

---


#### `NETWORK_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.NETWORK_ADMINISTRATOR"></a>

---


#### `BILLING` <a name="cdk-common.AWSManagedPolicies.BILLING"></a>

---


#### `IAMUSER_CHANGE_PASSWORD` <a name="cdk-common.AWSManagedPolicies.IAMUSER_CHANGE_PASSWORD"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE"></a>

---


#### `AMAZON_APP_STREAM_SERVICE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_SERVICE_ACCESS"></a>

---


#### `AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE"></a>

---


#### `AWSOPS_WORKS_CM_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_SERVICE_ROLE"></a>

---


#### `AMAZON_REKOGNITION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_FULL_ACCESS"></a>

---


#### `AMAZON_REKOGNITION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ATHENA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ATHENA_FULL_ACCESS"></a>

---


#### `AMAZON_POLLY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_POLLY_FULL_ACCESS"></a>

---


#### `AMAZON_POLLY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_POLLY_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_SSM_MAINTENANCE_WINDOW_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_MAINTENANCE_WINDOW_ROLE"></a>

---


#### `AWSXRAY_WRITE_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSXRAY_WRITE_ONLY_ACCESS"></a>

---


#### `AWSXRAY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSXRAY_READ_ONLY_ACCESS"></a>

---


#### `AWSXRAY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSXRAY_FULL_ACCESS"></a>

---


#### `AWSCODE_BUILD_DEVELOPER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_DEVELOPER_ACCESS"></a>

---


#### `AWSCODE_BUILD_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_READ_ONLY_ACCESS"></a>

---


#### `AWSCODE_BUILD_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_ADMIN_ACCESS"></a>

---


#### `AMAZON_SSM_AUTOMATION_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_ROLE"></a>

---


#### `AWSLAMBDA_ENI_MANAGEMENT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_ENI_MANAGEMENT_ACCESS"></a>

---


#### `AWSHEALTH_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSHEALTH_FULL_ACCESS"></a>

---


#### `AWSBATCH_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBATCH_FULL_ACCESS"></a>

---


#### `AWSBATCH_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_ROLE"></a>

---


#### `AWSQUICKSIGHT_ATHENA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_ATHENA_ACCESS"></a>

---


#### `IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS` <a name="cdk-common.AWSManagedPolicies.IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS"></a>

---


#### `AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS"></a>

---


#### `AWSSTEP_FUNCTIONS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_FULL_ACCESS"></a>

---


#### `AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS"></a>

---


#### `AUTO_SCALING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_FULL_ACCESS"></a>

---


#### `AUTO_SCALING_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_READ_ONLY_ACCESS"></a>

---


#### `AUTO_SCALING_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_FULL_ACCESS"></a>

---


#### `AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AWSDATAPIPELINE_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_FULLACCESS"></a>

---


#### `AWSDATAPIPELINE_POWERUSER` <a name="cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_POWERUSER"></a>

---


#### `APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS` <a name="cdk-common.AWSManagedPolicies.APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS"></a>

---


#### `AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY"></a>

---


#### `AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE"></a>

---


#### `AMAZON_CLOUD_DIRECTORY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_FULL_ACCESS"></a>

---


#### `AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS"></a>

---


#### `AWSMARKETPLACE_GET_ENTITLEMENTS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_GET_ENTITLEMENTS"></a>

---


#### `AWSOPS_WORKS_CLOUD_WATCH_LOGS` <a name="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CLOUD_WATCH_LOGS"></a>

---


#### `AMAZON_LEX_RUN_BOTS_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_RUN_BOTS_ONLY"></a>

---


#### `AMAZON_LEX_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_READ_ONLY"></a>

---


#### `AMAZON_LEX_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_FULL_ACCESS"></a>

---


#### `AWSCODE_STAR_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSCODE_STAR_SERVICE_ROLE"></a>

---


#### `AWSCODE_STAR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_STAR_FULL_ACCESS"></a>

---


#### `AWSGREENGRASS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGREENGRASS_FULL_ACCESS"></a>

---


#### `AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE"></a>

---


#### `QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY"></a>

---


#### `AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE"></a>

---


#### `AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS"></a>

---


#### `AMAZON_SSM_AUTOMATION_APPROVER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_APPROVER_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_DISCOVERY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DISCOVERY_ACCESS"></a>

---


#### `AWSGLUE_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_ROLE"></a>

---


#### `AWSGLUE_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSGLUE_SERVICE_NOTEBOOK_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_NOTEBOOK_ROLE"></a>

---


#### `AWSMIGRATION_HUB_SMS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_SMS_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_DMS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DMS_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_FULL_ACCESS"></a>

---


#### `AMAZON_MACIE_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE"></a>

---


#### `AMAZON_MACIE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACIE_FULL_ACCESS"></a>

---


#### `AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY"></a>

---


#### `AWSEC2_SPOT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSEC2_SPOT_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY"></a>

---


#### `AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY"></a>

---


#### `AMAZON_EMR_CLEANUP_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EMR_CLEANUP_POLICY"></a>

---


#### `LEX_CHANNEL_POLICY` <a name="cdk-common.AWSManagedPolicies.LEX_CHANNEL_POLICY"></a>

---


#### `LEX_BOT_POLICY` <a name="cdk-common.AWSManagedPolicies.LEX_BOT_POLICY"></a>

---


#### `AWSLAMBDA_REPLICATOR` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_REPLICATOR"></a>

---


#### `AWSORGANIZATIONS_SERVICE_TRUST_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_SERVICE_TRUST_POLICY"></a>

---


#### `AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES"></a>

---


#### `AMAZON_ECS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ECS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY"></a>

---


#### `APIGATEWAY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.APIGATEWAY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY"></a>

---


#### `AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY"></a>

---


#### `AMAZON_CHIME_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_READ_ONLY"></a>

---


#### `AMAZON_CHIME_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_FULL_ACCESS"></a>

---


#### `AMAZON_CHIME_USER_MANAGEMENT` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_USER_MANAGEMENT"></a>

---


#### `CLOUD_HSM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_HSM_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZONECS_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZONECS_FULLACCESS"></a>

---


#### `DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SSM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY"></a>

---


#### `CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_INSPECTOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_SERVICE_ROLE_POLICY"></a>

---


#### `AWSPRICE_LIST_SERVICE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPRICE_LIST_SERVICE_FULL_ACCESS"></a>

---


#### `AWSCODE_DEPLOY_ROLE_FOR_LAMBDA` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA"></a>

---


#### `AMAZON_MQ_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MQ_FULL_ACCESS"></a>

---


#### `AMAZON_MQ_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MQ_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_GUARD_DUTY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_GUARD_DUTY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_FULL_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_READ_ONLY"></a>

---


#### `AMAZON_SAGE_MAKER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FULL_ACCESS"></a>

---


#### `AMAZON_FREE_RTOS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOS_FULL_ACCESS"></a>

---


#### `AWSDEEP_LENS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_LENS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY"></a>

---


#### `AMAZON_REKOGNITION_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_SERVICE_ROLE"></a>

---


#### `AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS"></a>

---


#### `COMPREHEND_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.COMPREHEND_FULL_ACCESS"></a>

---


#### `COMPREHEND_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.COMPREHEND_READ_ONLY"></a>

---


#### `GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS` <a name="cdk-common.AWSManagedPolicies.GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS"></a>

---


#### `TRANSLATE_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.TRANSLATE_READ_ONLY"></a>

---


#### `AWSCLOUD9_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD9_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCLOUD9_USER` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD9_USER"></a>

---


#### `AWSCLOUD9_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD9_ADMINISTRATOR"></a>

---


#### `AWSCLOUD9_ENVIRONMENT_MEMBER` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD9_ENVIRONMENT_MEMBER"></a>

---


#### `ALEXA_FOR_BUSINESS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_FULL_ACCESS"></a>

---


#### `ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS"></a>

---


#### `ALEXA_FOR_BUSINESS_DEVICE_SETUP` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_DEVICE_SETUP"></a>

---


#### `ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION"></a>

---


#### `AWSIO_T_THINGS_REGISTRATION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_THINGS_REGISTRATION"></a>

---


#### `AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS"></a>

---


#### `AWSSSOSERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSSOSERVICE_ROLE_POLICY"></a>

---


#### `ELASTI_CACHE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.ELASTI_CACHE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSIO_TOTA_UPDATE` <a name="cdk-common.AWSManagedPolicies.AWSIO_TOTA_UPDATE"></a>

---


#### `AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS"></a>

---


#### `AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY"></a>

---


#### `AMAZON_RDS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_SERVICE_ROLE_POLICY"></a>

---


#### `AUTO_SCALING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AUTO_SCALING_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY"></a>

---


#### `AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS"></a>

---


#### `AWSSERVICE_CATALOG_END_USER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_FULL_ACCESS"></a>

---


#### `AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ES_COGNITO_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ES_COGNITO_ACCESS"></a>

---


#### `AWSBATCH_SERVICE_EVENT_TARGET_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_EVENT_TARGET_ROLE"></a>

---


#### `DAXSERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.DAXSERVICE_ROLE_POLICY"></a>

---


#### `AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_AGENT_ADMIN_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_ADMIN_POLICY"></a>

---


#### `CLOUD_WATCH_AGENT_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_SERVER_POLICY"></a>

---


#### `AWSRESOURCE_GROUPS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_GROUPS_READ_ONLY_ACCESS"></a>

---


#### `AWSELEMENTAL_MEDIA_STORE_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_READ_ONLY"></a>

---


#### `AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS"></a>

---


#### `AWSCONFIG_ROLE_FOR_ORGANIZATIONS` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_ROLE_FOR_ORGANIZATIONS"></a>

---


#### `AWSAPP_SYNC_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_ADMINISTRATOR"></a>

---


#### `AWSAPP_SYNC_SCHEMA_AUTHOR` <a name="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SCHEMA_AUTHOR"></a>

---


#### `AWSAPP_SYNC_INVOKE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_INVOKE_FULL_ACCESS"></a>

---


#### `AWSEC2_FLEET_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSEC2_FLEET_SERVICE_ROLE_POLICY"></a>

---


#### `FMSSERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.FMSSERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_TRANSCRIBE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_TRANSCRIBE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_FULL_ACCESS"></a>

---


#### `SECRETS_MANAGER_READ_WRITE` <a name="cdk-common.AWSManagedPolicies.SECRETS_MANAGER_READ_WRITE"></a>

---


#### `AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS"></a>

---


#### `AWSARTIFACT_ACCOUNT_SYNC` <a name="cdk-common.AWSManagedPolicies.AWSARTIFACT_ACCOUNT_SYNC"></a>

---


#### `AMAZONELASTICTRANSCODER_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_FULLACCESS"></a>

---


#### `AMAZON_RDS_BETA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_BETA_SERVICE_ROLE_POLICY"></a>

---


#### `AWSFMADMIN_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFMADMIN_FULL_ACCESS"></a>

---


#### `AWSFMADMIN_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFMADMIN_READ_ONLY_ACCESS"></a>

---


#### `AWSFMMEMBER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFMMEMBER_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T1_CLICK_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T1_CLICK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_FULL_ACCESS"></a>

---


#### `AMAZON_EKS_CLUSTER_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_CLUSTER_POLICY"></a>

---


#### `AMAZONEKS_CNI_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZONEKS_CNI_POLICY"></a>

---


#### `AMAZON_EKS_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_POLICY"></a>

---


#### `AMAZON_EKS_WORKER_NODE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_WORKER_NODE_POLICY"></a>

---


#### `NEPTUNE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.NEPTUNE_READ_ONLY_ACCESS"></a>

---


#### `NEPTUNE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.NEPTUNE_FULL_ACCESS"></a>

---


#### `AWSCONFIG_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY"></a>

---


#### `AWSSHIELD_DRT_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSHIELD_DRT_ACCESS_POLICY"></a>

---


#### `AMAZONELASTICTRANSCODER_READONLYACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_READONLYACCESS"></a>

---


#### `AMAZONELASTICTRANSCODER_JOBSSUBMITTER` <a name="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_JOBSSUBMITTER"></a>

---


#### `AWSCLOUD_FRONT_LOGGER` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_FRONT_LOGGER"></a>

---


#### `AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE"></a>

---


#### `AWSIO_T_ANALYTICS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T_ANALYTICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_FULL_ACCESS"></a>

---


#### `NEPTUNE_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.NEPTUNE_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_MACIE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY"></a>

---


#### `AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS"></a>

---


#### `AWSSSOREAD_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSSSOREAD_ONLY"></a>

---


#### `AWSSSOMASTER_ACCOUNT_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSSSOMASTER_ACCOUNT_ADMINISTRATOR"></a>

---


#### `AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR"></a>

---


#### `AMAZON_MACIE_HANDSHAKE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACIE_HANDSHAKE_ROLE"></a>

---


#### `AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_AUDIT` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_AUDIT"></a>

---


#### `AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS"></a>

---


#### `AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY"></a>

---


#### `APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY"></a>

---


#### `WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY"></a>

---


#### `WAFLOGGING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.WAFLOGGING_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_FREE_RTOSOTA_UPDATE` <a name="cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOSOTA_UPDATE"></a>

---


#### `AWSXRAY_DAEMON_WRITE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSXRAY_DAEMON_WRITE_ACCESS"></a>

---


#### `AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `ELASTIC_LOAD_BALANCING_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_READ_ONLY"></a>

---


#### `ELASTIC_LOAD_BALANCING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_FULL_ACCESS"></a>

---


#### `LIGHTSAIL_EXPORT_ACCESS` <a name="cdk-common.AWSManagedPolicies.LIGHTSAIL_EXPORT_ACCESS"></a>

---


#### `AMAZON_REDSHIFT_QUERY_EDITOR` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR"></a>

---


#### `AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS"></a>

---


#### `AMAZON_CONNECT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_READ_ONLY_ACCESS"></a>

---


#### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR"></a>

---


#### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER"></a>

---


#### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS"></a>

---


#### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY"></a>

---


#### `CLOUD_TRAIL_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_TRAIL_SERVICE_ROLE_POLICY"></a>

---


#### `AWSGREENGRASS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGREENGRASS_READ_ONLY_ACCESS"></a>

---


#### `AWSSSODIRECTORY_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_READ_ONLY"></a>

---


#### `AWSSSODIRECTORY_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_ADMINISTRATOR"></a>

---


#### `AWSORGANIZATIONS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_FULL_ACCESS"></a>

---


#### `AWSORGANIZATIONS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_READ_ONLY_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE"></a>

---


#### `AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY"></a>

---


#### `KAFKA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.KAFKA_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE"></a>

---


#### `AMAZON_RDS_DATA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_DATA_FULL_ACCESS"></a>

---


#### `AWSROBO_MAKER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_READ_ONLY_ACCESS"></a>

---


#### `AWSROBO_MAKER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSROBO_MAKER_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_POLICY"></a>

---


#### `AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY"></a>

---


#### `AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY"></a>

---


#### `SERVER_MIGRATION_SERVICE_LAUNCH_ROLE` <a name="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_LAUNCH_ROLE"></a>

---


#### `GLOBAL_ACCELERATOR_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_READ_ONLY_ACCESS"></a>

---


#### `GLOBAL_ACCELERATOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_FULL_ACCESS"></a>

---


#### `AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS"></a>

---


#### `COMPREHEND_MEDICAL_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.COMPREHEND_MEDICAL_FULL_ACCESS"></a>

---


#### `AWSCODE_DEPLOY_ROLE_FOR_EC_S` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_EC_S"></a>

---


#### `AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED"></a>

---


#### `TRANSLATE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.TRANSLATE_FULL_ACCESS"></a>

---


#### `AWSSECURITY_HUB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSECURITY_HUB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_FULL_ACCESS"></a>

---


#### `AWSSECURITY_HUB_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_F_SX_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_F_SX_SERVICE_ROLE_POLICY"></a>

---


#### `FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS` <a name="cdk-common.AWSManagedPolicies.FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS"></a>

---


#### `AMAZON_F_SX_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_F_SX_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_F_SX_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_F_SX_FULL_ACCESS"></a>

---


#### `AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_F_SX_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_TEXTRACT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_FULL_ACCESS"></a>

---


#### `AMAZON_TEXTRACT_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_SERVICE_ROLE"></a>

---


#### `AWSCLOUD_MAP_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_READ_ONLY_ACCESS"></a>

---


#### `AWSCLOUD_MAP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_FULL_ACCESS"></a>

---


#### `AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS"></a>

---


#### `AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS"></a>

---


#### `WELL_ARCHITECTED_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_FULL_ACCESS"></a>

---


#### `WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSIO_T_SITE_WISE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_FULL_ACCESS"></a>

---


#### `AWSIO_T_SITE_WISE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_PERSONALIZE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_PERSONALIZE_FULL_ACCESS"></a>

---


#### `CLIENT_VPN_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_MQ_API_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MQ_API_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_MQ_API_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MQ_API_FULL_ACCESS"></a>

---


#### `AMAZON_DOC_DB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_FULL_ACCESS"></a>

---


#### `AMAZON_DOC_DB_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_DOC_DB_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP"></a>

---


#### `AWSIO_T_EVENTS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T_EVENTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_FULL_ACCESS"></a>

---


#### `AWSELASTIC_BEANSTALK_MAINTENANCE` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MAINTENANCE"></a>

---


#### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES"></a>

---


#### `AWSTRANSFER_LOGGING_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRANSFER_LOGGING_ACCESS"></a>

---


#### `AMAZON_MSK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MSK_FULL_ACCESS"></a>

---


#### `AMAZON_MSK_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MSK_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_FORECAST_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_FORECAST_FULL_ACCESS"></a>

---


#### `AWSDATA_SYNC_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_READ_ONLY_ACCESS"></a>

---


#### `AWSDATA_SYNC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_FULL_ACCESS"></a>

---


#### `WORK_LINK_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.WORK_LINK_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEEP_RACER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY"></a>

---


#### `AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY"></a>

---


#### `COMPREHEND_DATA_ACCESS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.COMPREHEND_DATA_ACCESS_ROLE_POLICY"></a>

---


#### `ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY"></a>

---


#### `AMAZON_SSM_MANAGED_INSTANCE_CORE` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE"></a>

---


#### `AMAZON_SSM_DIRECTORY_SERVICE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_DIRECTORY_SERVICE_ACCESS"></a>

---


#### `AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY"></a>

---


#### `AWSIQFULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIQFULL_ACCESS"></a>

---


#### `AWSGLOBAL_ACCELERATOR_SLR_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSGLOBAL_ACCELERATOR_SLR_POLICY"></a>

---


#### `AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_MESH_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_FULL_ACCESS"></a>

---


#### `AWSAPP_MESH_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_READ_ONLY"></a>

---


#### `AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS"></a>

---


#### `AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS"></a>

---


#### `AWSDENY_ALL` <a name="cdk-common.AWSManagedPolicies.AWSDENY_ALL"></a>

---


#### `AWSCONTROL_TOWER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ROUTE53_RESOLVER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_FULL_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSAPP_MESH_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_SERVICE_ROLE_POLICY"></a>

---


#### `AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS"></a>

---


#### `MIGRATION_HUB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MIGRATION_HUB_SERVICE_ROLE_POLICY"></a>

---


#### `MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY"></a>

---


#### `MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY"></a>

---


#### `AWSOPSWORKSREGISTERCLI_ONPREMISES` <a name="cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_ONPREMISES"></a>

---


#### `AWSOPSWORKSREGISTERCLI_EC2` <a name="cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_EC2"></a>

---


#### `AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER` <a name="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER"></a>

---


#### `LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY"></a>

---


#### `IAMACCESS_ADVISOR_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.IAMACCESS_ADVISOR_READ_ONLY"></a>

---


#### `SERVICE_QUOTAS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_SERVICE_ROLE_POLICY"></a>

---


#### `SERVICE_QUOTAS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_READ_ONLY_ACCESS"></a>

---


#### `SERVICE_QUOTAS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_FULL_ACCESS"></a>

---


#### `AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS"></a>

---


#### `EC2_INSTANCE_CONNECT` <a name="cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT"></a>

---


#### `AMAZON_WORK_SPACES_SERVICE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SERVICE_ACCESS"></a>

---


#### `AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS"></a>

---


#### `AWSMARKETPLACE_SELLER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_FULL_ACCESS"></a>

---


#### `AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS"></a>

---


#### `AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY"></a>

---


#### `AWSAPP_MESH_ENVOY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_ENVOY_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_FULL_ACCESS"></a>

---


#### `CLOUDWATCH_CROSSACCOUNTACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUDWATCH_CROSSACCOUNTACCESS"></a>

---


#### `CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS"></a>

---


#### `CONFIG_CONFORMS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CONFIG_CONFORMS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCLOUD_FORMATION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_FULL_ACCESS"></a>

---


#### `ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS"></a>

---


#### `AWSAPP_MESH_PREVIEW_ENVOY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_ENVOY_ACCESS"></a>

---


#### `AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSERVICE_ROLE_FOR_SM_S` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_SM_S"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION"></a>

---


#### `AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION"></a>

---


#### `AWSLAKE_FORMATION_DATA_ADMIN` <a name="cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_DATA_ADMIN"></a>

---


#### `AWSIQCONTRACT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIQCONTRACT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSIQPERMISSION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIQPERMISSION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_QLDB_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_QLDB_READ_ONLY"></a>

---


#### `AMAZON_QLDB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_QLDB_FULL_ACCESS"></a>

---


#### `AMAZON_QLDB_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_QLDB_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_CHIME_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY"></a>

---


#### `ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY"></a>

---


#### `AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY"></a>

---


#### `AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS"></a>

---


#### `AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS"></a>

---


#### `AWSPRIVATE_MARKETPLACE_REQUESTS` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_REQUESTS"></a>

---


#### `AWSFOR_WORD_PRESS_PLUGIN_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSFOR_WORD_PRESS_PLUGIN_POLICY"></a>

---


#### `AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSAVINGS_PLANS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_READ_ONLY_ACCESS"></a>

---


#### `AWSSAVINGS_PLANS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_FULL_ACCESS"></a>

---


#### `WAFV2_LOGGING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.WAFV2_LOGGING_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP"></a>

---


#### `AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD"></a>

---


#### `AWSDATA_EXCHANGE_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_READ_ONLY"></a>

---


#### `AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS"></a>

---


#### `AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS"></a>

---


#### `AWSDATA_EXCHANGE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_FULL_ACCESS"></a>

---


#### `AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY"></a>

---


#### `DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSBACKUP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_FULL_ACCESS"></a>

---


#### `AWSBACKUP_OPERATOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_OPERATOR_ACCESS"></a>

---


#### `AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMARKETPLACE_METERING_REGISTER_USAGE` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_REGISTER_USAGE"></a>

---


#### `AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY"></a>

---


#### `AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY"></a>

---


#### `CLOUD_WATCH_SYNTHETICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_IMAGE_BUILDER` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IMAGE_BUILDER"></a>

---


#### `EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER` <a name="cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER"></a>

---


#### `IAMACCESS_ANALYZER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_FULL_ACCESS"></a>

---


#### `IAMACCESS_ANALYZER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_READ_ONLY_ACCESS"></a>

---


#### `ACCESS_ANALYZER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.ACCESS_ANALYZER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS"></a>

---


#### `COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CODE_GURU_PROFILER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_FULL_ACCESS"></a>

---


#### `AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_MCS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MCS_FULL_ACCESS"></a>

---


#### `AMAZON_MCS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MCS_READ_ONLY_ACCESS"></a>

---


#### `AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_KENDRA_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KENDRA_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_KENDRA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KENDRA_FULL_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS"></a>

---


#### `AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS"></a>

---


#### `AMAZON_AUGMENTED_AI_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_FULL_ACCESS"></a>

---


#### `AWSNETWORK_MANAGER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_READ_ONLY_ACCESS"></a>

---


#### `AWSNETWORK_MANAGER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_FULL_ACCESS"></a>

---


#### `AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY"></a>

---


#### `AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS"></a>

---


#### `AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY"></a>

---


#### `CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY"></a>

---


#### `HEALTH_ORGANIZATIONSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.HEALTH_ORGANIZATIONSSERVICEROLEPOLICY"></a>

---


#### `AWSIMAGE_BUILDER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_READ_ONLY_ACCESS"></a>

---


#### `AWSIMAGE_BUILDER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_FULL_ACCESS"></a>

---


#### `EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS"></a>

---


#### `AMAZON_WORK_DOCS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS"></a>

---


#### `AWSQUICK_SIGHT_SAGE_MAKER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_SAGE_MAKER_POLICY"></a>

---


#### `AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CHIME_SD_K` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SD_K"></a>

---


#### `AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS"></a>

---


#### `AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS"></a>

---


#### `AMAZON_EKS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_ROLE_POLICY"></a>

---


#### `COMPUTE_OPTIMIZER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_READ_ONLY_ACCESS"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY"></a>

---


#### `ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS"></a>

---


#### `GAME_LIFT_GAME_SERVER_GROUP_POLICY` <a name="cdk-common.AWSManagedPolicies.GAME_LIFT_GAME_SERVER_GROUP_POLICY"></a>

---


#### `AWSWAFCONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_FULL_ACCESS"></a>

---


#### `AWSWAFCONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_WORK_DOCS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_FULL_ACCESS"></a>

---


#### `AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS"></a>

---


#### `AMAZON_KEYSPACES_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_FULL_ACCESS"></a>

---


#### `AMAZON_KEYSPACES_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_DETECTIVE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_FULL_ACCESS"></a>

---


#### `AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY"></a>

---


#### `SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST"></a>

---


#### `AMAZON_SSM_PATCH_ASSOCIATION` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_PATCH_ASSOCIATION"></a>

---


#### `AWSCLOUD9_SSM_INSTANCE_PROFILE` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD9_SSM_INSTANCE_PROFILE"></a>

---


#### `AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION"></a>

---


#### `AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS"></a>

---


#### `AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY"></a>

---


#### `AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY"></a>

---


#### `AWSTHINKBOX_ASSET_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_ASSET_SERVER_POLICY"></a>

---


#### `AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY"></a>

---


#### `AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY"></a>

---


#### `AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY"></a>

---


#### `AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY"></a>

---


#### `AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY"></a>

---


#### `AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP"></a>

---


#### `AMAZON_APP_FLOW_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_APP_FLOW_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_FULL_ACCESS"></a>

---


#### `ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY"></a>

---


#### `ELEMENTAL_ACTIVATIONS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_FULL_ACCESS"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_SN_S` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_SN_S"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_RD_S` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_RD_S"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_EC_S` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_EC_S"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_CORE` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CORE"></a>

---


#### `AWSELASTIC_BEANSTALK_ROLE_CW_L` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CW_L"></a>

---


#### `AWSCODE_ARTIFACT_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_ADMIN_ACCESS"></a>

---


#### `AWSBACKUP_ORGANIZATION_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_ORGANIZATION_ADMIN_ACCESS"></a>

---


#### `AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3"></a>

---


#### `AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_HONEYCODE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_FULL_ACCESS"></a>

---


#### `AMAZON_HONEYCODE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS"></a>

---


#### `AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS"></a>

---


#### `CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCODE_ARTIFACT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_READ_ONLY_ACCESS"></a>

---


#### `AWSSERVICEROLEFORCODEGURU_PROFILER` <a name="cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCODEGURU_PROFILER"></a>

---


#### `AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELEMENTAL_MEDIA_LIVE_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_READ_ONLY"></a>

---


#### `AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION"></a>

---


#### `SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION` <a name="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION"></a>

---


#### `AWSCODEPIPELINE_READONLYACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_READONLYACCESS"></a>

---


#### `AWSCODEPIPELINE_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_FULLACCESS"></a>

---


#### `AMAZON_BRAKET_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_SERVICE_ROLE_POLICY"></a>

---


#### `AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER` <a name="cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER"></a>

---


#### `AMAZON_BRAKET_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_FULL_ACCESS"></a>

---


#### `AWSLAMBDA_MSK_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_MSK_EXECUTION_ROLE"></a>

---


#### `AWSCOMPROMISED_KEY_QUARANTINE` <a name="cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE"></a>

---


#### `SERVERMIGRATION_SERVICEROLE` <a name="cdk-common.AWSManagedPolicies.SERVERMIGRATION_SERVICEROLE"></a>

---


#### `AMAZON_EKSVPC_RESOURCE_CONTROLLER` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKSVPC_RESOURCE_CONTROLLER"></a>

---


#### `ROUTE53_RESOLVER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.ROUTE53_RESOLVER_SERVICE_ROLE_POLICY"></a>

---


#### `CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY"></a>

---


#### `AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED` <a name="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED"></a>

---


#### `AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED` <a name="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY"></a>

---


#### `AWSTRANSFER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRANSFER_READ_ONLY_ACCESS"></a>

---


#### `AWSBILLING_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBILLING_READ_ONLY_ACCESS"></a>

---


#### `ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS"></a>

---


#### `ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES"></a>

---


#### `ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS"></a>

---


#### `AWSQUICK_SIGHT_ELASTICSEARCH_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ELASTICSEARCH_POLICY"></a>

---


#### `AMAZON_REDSHIFT_DATA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_DATA_FULL_ACCESS"></a>

---


#### `AWSROBOMAKER_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSROBOMAKER_FULLACCESS"></a>

---


#### `AWS_CONFIGROLE` <a name="cdk-common.AWSManagedPolicies.AWS_CONFIGROLE"></a>

---


#### `MEDIA_PACKAGE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MEDIA_PACKAGE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMARKETPLACE_AMI_INGESTION` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_AMI_INGESTION"></a>

---


#### `AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY"></a>

---


#### `AMAZON_ELASTIC_FILE_SYSTEMS_UTILS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEMS_UTILS"></a>

---


#### `EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS` <a name="cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS"></a>

---


#### `AWSQUICK_SIGHT_TIMESTREAM_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_TIMESTREAM_POLICY"></a>

---


#### `AMAZON_TIMESTREAM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_TIMESTREAM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_FULL_ACCESS"></a>

---


#### `AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_S3_OUTPOSTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_FULL_ACCESS"></a>

---


#### `AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS"></a>

---


#### `AWSDEEP_RACER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY"></a>

---


#### `AWSCLOUDTRAIL_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_FULLACCESS"></a>

---


#### `AWSSUPPORT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSBUDGETS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBUDGETS_READ_ONLY_ACCESS"></a>

---


#### `AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS"></a>

---


#### `AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT` <a name="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT"></a>

---


#### `AMAZON_MQ_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_MQ_SERVICE_ROLE_POLICY"></a>

---


#### `AWSOUTPOSTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSOUTPOSTS_SERVICE_ROLE_POLICY"></a>

---


#### `AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY"></a>

---


#### `DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS"></a>

---


#### `AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS"></a>

---


#### `AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY"></a>

---


#### `AWSLAMBDA_READONLYACCESS` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_READONLYACCESS"></a>

---


#### `AWSLAMBDA_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSLAMBDA_FULLACCESS"></a>

---


#### `AMAZON_HONEYCODE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_SERVICE_ROLE_POLICY"></a>

---


#### `S3_STORAGE_LENS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.S3_STORAGE_LENS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS"></a>

---


#### `AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS"></a>

---


#### `AMAZONCONNECT_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZONCONNECT_FULLACCESS"></a>

---


#### `AMAZON_MWAA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_MWAA_SERVICE_ROLE_POLICY"></a>

---


#### `CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS"></a>

---


#### `CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS"></a>

---


#### `ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS"></a>

---


#### `AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY"></a>

---


#### `AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY"></a>

---


#### `AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY"></a>

---


#### `AWSPANORAMA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_FULL_ACCESS"></a>

---


#### `AWSPANORAMA_APPLIANCE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_ROLE_POLICY"></a>

---


#### `AWSPANORAMA_SAGE_MAKER_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_SAGE_MAKER_ROLE_POLICY"></a>

---


#### `AWSPANORAMA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER"></a>

---


#### `AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS"></a>

---


#### `AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_DEV_OPS_GURU_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_FULL_ACCESS"></a>

---


#### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS"></a>

---


#### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY"></a>

---


#### `ADMINISTRATORACCESS_AMPLIFY` <a name="cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AMPLIFY"></a>

---


#### `AWSSERVICE_ROLE_FOR_MONITRON_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_MONITRON_POLICY"></a>

---


#### `AMAZON_MONITRON_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MONITRON_FULL_ACCESS"></a>

---


#### `AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSGLUE_DATA_BREW_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSGLUE_DATA_BREW_SERVICE_ROLE"></a>

---


#### `ECRREPLICATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.ECRREPLICATION_SERVICE_ROLE_POLICY"></a>

---


#### `IVSRECORD_TO_S3` <a name="cdk-common.AWSManagedPolicies.IVSRECORD_TO_S3"></a>

---


#### `AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY"></a>

---


#### `AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY"></a>

---


#### `AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY"></a>

---


#### `EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS` <a name="cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS"></a>

---


#### `AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS"></a>

---


#### `AWSTRANSFER_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRANSFER_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSTRANSFER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRANSFER_FULL_ACCESS"></a>

---


#### `AWSIO_T_FLEET_HUB_FEDERATION_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_FLEET_HUB_FEDERATION_ACCESS"></a>

---


#### `AWSIO_T_WIRELESS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_ACCESS"></a>

---


#### `AWSIO_T_WIRELESS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_READ_ONLY_ACCESS"></a>

---


#### `AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS"></a>

---


#### `AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER"></a>

---


#### `AWSIO_T_WIRELESS_DATA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_DATA_ACCESS"></a>

---


#### `AWSIO_T_WIRELESS_LOGGING` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_LOGGING"></a>

---


#### `AWSCLOUD_SHELL_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUD_SHELL_FULL_ACCESS"></a>

---


#### `AMAZON_PROMETHEUS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_FULL_ACCESS"></a>

---


#### `AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_PROMETHEUS_QUERY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_QUERY_ACCESS"></a>

---


#### `AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS"></a>

---


#### `AMAZON_FIS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_FIS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_LEX_V2_BOT_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_V2_BOT_POLICY"></a>

---


#### `AMAZON_LEX_CHANNELS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_CHANNELS_ACCESS"></a>

---


#### `AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSOPSWORKS_FULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSOPSWORKS_FULLACCESS"></a>

---


#### `AWSELASTIC_BEANSTALK_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_READ_ONLY"></a>

---


#### `ADMINISTRATORACCESS_AWSELASTICBEANSTALK` <a name="cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AWSELASTICBEANSTALK"></a>

---


#### `AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS"></a>

---


#### `AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_HEALTH_LAKE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_FULL_ACCESS"></a>

---


#### `AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS"></a>

---


#### `AWSPROTON_DEVELOPER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_DEVELOPER_ACCESS"></a>

---


#### `AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSPROTON_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_FULL_ACCESS"></a>

---


#### `AWSPROTON_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_READ_ONLY_ACCESS"></a>

---


#### `AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT` <a name="cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT"></a>

---


#### `AWSGRAFANA_ACCOUNT_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AWSGRAFANA_ACCOUNT_ADMINISTRATOR"></a>

---


#### `AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY"></a>

---


#### `BATCH_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.BATCH_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZONEMRSERVICEPOLICY_V2` <a name="cdk-common.AWSManagedPolicies.AMAZONEMRSERVICEPOLICY_V2"></a>

---


#### `AMAZONEMRREADONLYACCESSPOLICY_V2` <a name="cdk-common.AWSManagedPolicies.AMAZONEMRREADONLYACCESSPOLICY_V2"></a>

---


#### `AMAZONEMRFULLACCESSPOLICY_V2` <a name="cdk-common.AWSManagedPolicies.AMAZONEMRFULLACCESSPOLICY_V2"></a>

---


#### `AWSSECURITY_HUB_ORGANIZATIONS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_ORGANIZATIONS_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY"></a>

---


#### `AWSAPPLICATION_MIGRATION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_FULL_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_AGENT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_POLICY"></a>

---


#### `AWSAPPLICATION_MIGRATION_E_C2_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_E_C2_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_MGH_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_MGH_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY"></a>

---


#### `AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS"></a>

---


#### `AWSCOMPROMISED_KEY_QUARANTINE_V2` <a name="cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE_V2"></a>

---


#### `AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY"></a>

---


#### `AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER` <a name="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER"></a>

---


#### `AMAZONNIMBLESTUDIO_STUDIOADMIN` <a name="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOADMIN"></a>

---


#### `AMAZONNIMBLESTUDIO_STUDIOUSER` <a name="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOUSER"></a>

---


#### `AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_METRICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_FULL_ACCESS"></a>

---


#### `AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSINCIDENT_MANAGER_RESOLVER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_RESOLVER_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_VISION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_FULL_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS"></a>

---


#### `APP_RUNNER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.APP_RUNNER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS"></a>

---


#### `AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY"></a>

---


#### `AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSBUG_BUST_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSBUG_BUST_SERVICE_ROLE_POLICY"></a>

---


#### `AWSBUG_BUST_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBUG_BUST_FULL_ACCESS"></a>

---


#### `AWSBUG_BUST_PLAYER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBUG_BUST_PLAYER_ACCESS"></a>

---


#### `ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS"></a>

---


#### `AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSLICENSE_MANAGER_CONSUMPTION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_CONSUMPTION_POLICY"></a>

---


#### `MEMORY_DB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MEMORY_DB_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY"></a>

---


#### `AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS"></a>

---


#### `AWSBACKUP_AUDIT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_AUDIT_ACCESS"></a>

---


#### `AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS"></a>

---


#### `AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY"></a>

---


#### `AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY"></a>

---


#### `KAFKA_CONNECT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.KAFKA_CONNECT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSQUICKSIGHT_OPEN_SEARCH_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_OPEN_SEARCH_POLICY"></a>

---


#### `AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS"></a>

---


#### `AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS"></a>

---


#### `AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_MSK_CONNECT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MSK_CONNECT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS"></a>

---


#### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING"></a>

---


#### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING"></a>

---


#### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING"></a>

---


#### `AMAZON_CONNECT_VOICE_ID_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_VOICE_ID_FULL_ACCESS"></a>

---


#### `AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY"></a>

---


#### `AWSACCOUNT_MANAGEMENT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_FULL_ACCESS"></a>

---


#### `AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_MEMORY_DB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_FULL_ACCESS"></a>

---


#### `AMAZON_MEMORY_DB_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_STRATEGY_COLLECTOR` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_COLLECTOR"></a>

---


#### `AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS"></a>

---


#### `AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS"></a>

---


#### `AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY"></a>

---


#### `AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY"></a>

---


#### `AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS"></a>

---


#### `AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY"></a>

---


#### `AWSSHIELD_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSHIELD_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_GRAFANA_ATHENA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_ATHENA_ACCESS"></a>

---


#### `AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS"></a>

---


#### `AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY"></a>

---


#### `AWSPROTON_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_BRAKET_JOBS_EXECUTION_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_JOBS_EXECUTION_POLICY"></a>

---


#### `AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY"></a>

---


#### `AMAZON_GRAFANA_REDSHIFT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_REDSHIFT_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS"></a>

---


#### `AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS"></a>

---


#### `AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS"></a>

---


#### `AMAZON_INSPECTOR2_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_FULL_ACCESS"></a>

---


#### `AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_WORK_SPACES_WEB_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_READ_ONLY"></a>

---


#### `AWSIPAMSERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIPAMSERVICE_ROLE_POLICY"></a>

---


#### `AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS"></a>

---


#### `EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_RUNNER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_FULL_ACCESS"></a>

---


#### `APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_INSPECTOR2_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_READ_ONLY_ACCESS"></a>

---


#### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE"></a>

---


#### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPP_RUNNER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_READ_ONLY_ACCESS"></a>

---


#### `AWSIDENTITY_SYNC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_FULL_ACCESS"></a>

---


#### `AWSIDENTITY_SYNC_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EBSCSI_DRIVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EBSCSI_DRIVER_POLICY"></a>

---


#### `AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY"></a>

---


#### `ROSAMANAGE_SUBSCRIPTION` <a name="cdk-common.AWSManagedPolicies.ROSAMANAGE_SUBSCRIPTION"></a>

---


#### `AWSBILLING_CONDUCTOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_FULL_ACCESS"></a>

---


#### `AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS"></a>

---


#### `AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE"></a>

---


#### `AWS_GLUE_SESSION_USER_RESTRICTED_POLICY` <a name="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_POLICY"></a>

---


#### `AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY` <a name="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY"></a>

---


#### `AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE` <a name="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE"></a>

---


#### `AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN"></a>

---


#### `AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY"></a>

---


#### `MONITRON_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MONITRON_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM` <a name="cdk-common.AWSManagedPolicies.AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY"></a>

---


#### `AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2"></a>

---


#### `AWSM2_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSM2_SERVICE_POLICY"></a>

---


#### `AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY"></a>

---


#### `AWSCLOUDTRAIL_READONLYACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_READONLYACCESS"></a>

---


#### `AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY"></a>

---


#### `AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSROLES_ANYWHERE_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSROLES_ANYWHERE_SERVICE_POLICY"></a>

---


#### `AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS"></a>

---


#### `AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY"></a>

---


#### `AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS"></a>

---


#### `AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY"></a>

---


#### `AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS"></a>

---


#### `AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS"></a>

---


#### `AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS"></a>

---


#### `AWSSUPPORT_APP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_FULL_ACCESS"></a>

---


#### `AWSSUPPORT_APP_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS"></a>

---


#### `AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY"></a>

---


#### `GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS"></a>

---


#### `AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS"></a>

---


#### `AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDEVICE_FARM_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_SERVICE_ROLE_POLICY"></a>

---


#### `AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSUPPORT_PLANS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_READ_ONLY_ACCESS"></a>

---


#### `AWSSUPPORT_PLANS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_FULL_ACCESS"></a>

---


#### `APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_APP_STREAM_PCA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_PCA_ACCESS"></a>

---


#### `AWSREFACTORING_TOOLKIT_SIDECAR_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_SIDECAR_POLICY"></a>

---


#### `AWSREFACTORING_TOOLKIT_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_FULL_ACCESS"></a>

---


#### `AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS"></a>

---


#### `AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS"></a>

---


#### `AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS"></a>

---


#### `AWSRESOURCE_EXPLORER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_FULL_ACCESS"></a>

---


#### `AMAZON_WORKSPACES_PCA_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_WORKSPACES_PCA_ACCESS"></a>

---


#### `AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS"></a>

---


#### `AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS"></a>

---


#### `AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A"></a>

---


#### `AWSBACKUP_DATA_TRANSFER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_DATA_TRANSFER_ACCESS"></a>

---


#### `AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS"></a>

---


#### `AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_MIGRATION_SSM_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SSM_ACCESS"></a>

---


#### `OAMREAD_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.OAMREAD_ONLY_ACCESS"></a>

---


#### `OAMFULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.OAMFULL_ACCESS"></a>

---


#### `AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="cdk-common.AWSManagedPolicies.AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


#### `CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


#### `CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


#### `CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY"></a>

---


#### `AWSWICKR_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSWICKR_FULL_ACCESS"></a>

---


#### `AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_OMICS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OMICS_READ_ONLY_ACCESS"></a>

---


#### `SECURITY_LAKE_SERVICE_LINKED_ROLE` <a name="cdk-common.AWSManagedPolicies.SECURITY_LAKE_SERVICE_LINKED_ROLE"></a>

---


#### `AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY"></a>

---


#### `AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS"></a>

---


#### `AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE"></a>

---


#### `AMAZONDOCDB_ELASTICSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AMAZONDOCDB_ELASTICSERVICEROLEPOLICY"></a>

---


#### `AWSVPC_LATTICE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSVPC_LATTICE_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY"></a>

---


#### `AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC` <a name="cdk-common.AWSManagedPolicies.AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC"></a>

---


#### `AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY"></a>

---


#### `AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY"></a>

---


#### `AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2` <a name="cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2"></a>

---


#### `RESOURCE_GROUPS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.RESOURCE_GROUPS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSCLEAN_ROOMS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_READ_ONLY_ACCESS"></a>

---


#### `AWSCLEAN_ROOMS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS"></a>

---


#### `AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING` <a name="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING"></a>

---


#### `AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY"></a>

---


#### `AMAZON_DETECTIVE_MEMBER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_MEMBER_ACCESS"></a>

---


#### `AMAZON_DETECTIVE_INVESTIGATOR_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_INVESTIGATOR_ACCESS"></a>

---


#### `EC2_INSTANCE_CONNECT_ENDPOINT` <a name="cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT_ENDPOINT"></a>

---


#### `AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES"></a>

---


#### `AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY"></a>

---


#### `AWSPRIVATE_CA_USER` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_USER"></a>

---


#### `AWSPRIVATE_CA_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_FULL_ACCESS"></a>

---


#### `AWSPRIVATE_CA_PRIVILEGED_USER` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_PRIVILEGED_USER"></a>

---


#### `AWSPRIVATE_CA_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_READ_ONLY"></a>

---


#### `AWSPRIVATE_CA_AUDITOR` <a name="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_AUDITOR"></a>

---


#### `AMAZON_OMICS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OMICS_FULL_ACCESS"></a>

---


#### `AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS"></a>

---


#### `AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS"></a>

---


#### `AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY"></a>

---


#### `AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY"></a>

---


#### `CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY"></a>

---


#### `MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY"></a>

---


#### `AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY"></a>

---


#### `AMAZON_GRAFANA_CLOUD_WATCH_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_CLOUD_WATCH_ACCESS"></a>

---


#### `AWSGROUND_STATION_AGENT_INSTANCE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSGROUND_STATION_AGENT_INSTANCE_POLICY"></a>

---


#### `VPCLATTICE_SERVICES_INVOKE_ACCESS` <a name="cdk-common.AWSManagedPolicies.VPCLATTICE_SERVICES_INVOKE_ACCESS"></a>

---


#### `VPCLATTICE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.VPCLATTICE_READ_ONLY_ACCESS"></a>

---


#### `VPCLATTICE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.VPCLATTICE_FULL_ACCESS"></a>

---


#### `AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS"></a>

---


#### `AWSMEDIA_CONNECT_SERVICE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMEDIA_CONNECT_SERVICE_POLICY"></a>

---


#### `AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS"></a>

---


#### `AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY"></a>

---


#### `AMAZON_CODE_CATALYST_SUPPORT_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_SUPPORT_ACCESS"></a>

---


#### `AMAZON_CODE_CATALYST_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_CODE_CATALYST_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_FULL_ACCESS"></a>

---


#### `ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY"></a>

---


#### `ROSAWORKER_INSTANCE_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAWORKER_INSTANCE_POLICY"></a>

---


#### `ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY"></a>

---


#### `ROSAINGRESS_OPERATOR_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAINGRESS_OPERATOR_POLICY"></a>

---


#### `ROSACONTROL_PLANE_OPERATOR_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSACONTROL_PLANE_OPERATOR_POLICY"></a>

---


#### `AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS"></a>

---


#### `AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY"></a>

---


#### `ROSAKUBE_CONTROLLER_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAKUBE_CONTROLLER_POLICY"></a>

---


#### `ROSAKMSPROVIDER_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAKMSPROVIDER_POLICY"></a>

---


#### `ROSAIMAGE_REGISTRY_OPERATOR_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAIMAGE_REGISTRY_OPERATOR_POLICY"></a>

---


#### `AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY"></a>

---


#### `KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS"></a>

---


#### `AMAZON_CODE_GURU_SECURITY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_FULL_ACCESS"></a>

---


#### `AWSFIN_SPACE_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSFIN_SPACE_SERVICE_ROLE_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY"></a>

---


#### `AWSDMSSERVERLESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSDMSSERVERLESS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SECURITY_LAKE_ADMINISTRATOR` <a name="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_ADMINISTRATOR"></a>

---


#### `ROSASRESUPPORT_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSASRESUPPORT_POLICY"></a>

---


#### `AMAZON_DOC_DB_ELASTIC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_FULL_ACCESS"></a>

---


#### `AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY"></a>

---


#### `ROSAINSTALLER_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSAINSTALLER_POLICY"></a>

---


#### `AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS"></a>

---


#### `ROSANODE_POOL_MANAGEMENT_POLICY` <a name="cdk-common.AWSManagedPolicies.ROSANODE_POOL_MANAGEMENT_POLICY"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY"></a>

---


#### `AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY"></a>

---


#### `AMAZON_MACIE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_MACIE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY"></a>

---


#### `EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L` <a name="cdk-common.AWSManagedPolicies.EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L"></a>

---


#### `AWSAPP_FABRIC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_SERVICE_ROLE_POLICY"></a>

---


#### `AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY"></a>

---


#### `AWSAPP_FABRIC_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_FULL_ACCESS"></a>

---


#### `AWSAPP_FABRIC_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY"></a>

---


#### `AMAZON_EFSCSI_DRIVER_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_EFSCSI_DRIVER_POLICY"></a>

---


#### `AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS"></a>

---


#### `AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY"></a>

---


#### `AWSHEALTH_IMAGING_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_FULL_ACCESS"></a>

---


#### `AWSHEALTH_IMAGING_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_READ_ONLY_ACCESS"></a>

---


#### `CLOUD_WATCH_FULL_ACCESS_V2` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS_V2"></a>

---


#### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY"></a>

---


#### `AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY"></a>

---


#### `AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS"></a>

---


#### `AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS"></a>

---


#### `AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS"></a>

---


#### `AWSARTIFACT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSARTIFACT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY"></a>

---


#### `AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2` <a name="cdk-common.AWSManagedPolicies.AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2"></a>

---


#### `AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY"></a>

---


#### `AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY"></a>

---


#### `AMAZONKEYSPACESREADONLYACCESS_V2` <a name="cdk-common.AWSManagedPolicies.AMAZONKEYSPACESREADONLYACCESS_V2"></a>

---


#### `AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_ACCESS"></a>

---


#### `AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_FULL_USER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_USER_ACCESS"></a>

---


#### `AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY"></a>

---


#### `AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS"></a>

---


#### `AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS"></a>

---


#### `AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS"></a>

---


#### `AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS"></a>

---


#### `AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT` <a name="cdk-common.AWSManagedPolicies.AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT"></a>

---


#### `CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY"></a>

---


#### `PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION` <a name="cdk-common.AWSManagedPolicies.PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION"></a>

---


#### `AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING"></a>

---


#### `AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS"></a>

---


#### `AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS"></a>

---


#### `AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY"></a>

---


#### `AWSGIT_SYNC_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSGIT_SYNC_SERVICE_ROLE_POLICY"></a>

---


#### `EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY` <a name="cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY"></a>

---


#### `AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY"></a>

---


#### `COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY"></a>

---


#### `AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY"></a>

---


#### `AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2` <a name="cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2"></a>

---


#### `AMAZON_ONE_ENTERPRISE_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_FULL_ACCESS"></a>

---


#### `AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS"></a>

---


#### `AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS"></a>

---


#### `AMAZON_Q_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_Q_FULL_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY"></a>

---


#### `AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY"></a>

---


#### `AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS"></a>

---


#### `AWSCLEAN_ROOMS_ML_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_FULL_ACCESS"></a>

---


#### `NEPTUNE_GRAPH_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.NEPTUNE_GRAPH_READ_ONLY_ACCESS"></a>

---


#### `IVSREAD_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.IVSREAD_ONLY_ACCESS"></a>

---


#### `AWSMSKREPLICATOR_EXECUTION_ROLE` <a name="cdk-common.AWSManagedPolicies.AWSMSKREPLICATOR_EXECUTION_ROLE"></a>

---


#### `AMAZON_BEDROCK_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_FULL_ACCESS"></a>

---


#### `AMAZON_BEDROCK_READ_ONLY` <a name="cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_READ_ONLY"></a>

---


#### `COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS"></a>

---


#### `IVSFULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.IVSFULL_ACCESS"></a>

---


#### `COST_OPTIMIZATION_HUB_ADMIN_ACCESS` <a name="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_ADMIN_ACCESS"></a>

---


#### `CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY"></a>

---


#### `AWSARTIFACT_REPORTS_READ_ONLY_ACCESS` <a name="cdk-common.AWSManagedPolicies.AWSARTIFACT_REPORTS_READ_ONLY_ACCESS"></a>

---


#### `AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2` <a name="cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2"></a>

---


#### `AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES` <a name="cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES"></a>

---


#### `AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY` <a name="cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY"></a>

---


#### `AMAZON_SECURITY_LAKE_METASTORE_MANAGER` <a name="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_METASTORE_MANAGER"></a>

---


#### `AMAZON_INSPECTOR2_MANAGED_CIS_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_MANAGED_CIS_POLICY"></a>

---


#### `AMAZON_LEX_REPLICATION_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_LEX_REPLICATION_POLICY"></a>

---


#### `AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS"></a>

---


#### `AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY"></a>

---


#### `AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY"></a>

---


#### `AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS` <a name="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS"></a>

---


#### `AWSEC2_VSS_SNAPSHOT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSEC2_VSS_SNAPSHOT_POLICY"></a>

---


#### `AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY"></a>

---


#### `AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY` <a name="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY"></a>

---


#### `AWSDEADLINECLOUD_USERACCESSFARMS` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFARMS"></a>

---


#### `AWSDEADLINECLOUD_USERACCESSFLEETS` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFLEETS"></a>

---


#### `AWSDEADLINECLOUD_USERACCESSJOBS` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSJOBS"></a>

---


#### `AWSDEADLINECLOUD_USERACCESSQUEUES` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSQUEUES"></a>

---


#### `AWSDEADLINECLOUD_FLEETWORKER` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_FLEETWORKER"></a>

---


#### `AWSDEADLINECLOUD_WORKERHOST` <a name="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_WORKERHOST"></a>

---


#### `SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY"></a>

---


#### `AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY"></a>

---


#### `AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY` <a name="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY"></a>

---

