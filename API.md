# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaArmFunction <a name="LambdaArmFunction" id="cdk-common.LambdaArmFunction"></a>

#### Initializers <a name="Initializers" id="cdk-common.LambdaArmFunction.Initializer"></a>

```typescript
import { LambdaArmFunction } from 'cdk-common'

new LambdaArmFunction(scope: Construct, id: string, props: LambdaArmFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-common.LambdaArmFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-common.LambdaArmFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-common.LambdaArmFunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-common.LambdaArmFunctionProps">LambdaArmFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-common.LambdaArmFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-common.LambdaArmFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-common.LambdaArmFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-common.LambdaArmFunctionProps">LambdaArmFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-common.LambdaArmFunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-common.LambdaArmFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-common.LambdaArmFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-common.LambdaArmFunction.isConstruct"></a>

```typescript
import { LambdaArmFunction } from 'cdk-common'

LambdaArmFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-common.LambdaArmFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-common.LambdaArmFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-common.LambdaArmFunction.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-common.LambdaArmFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="cdk-common.LambdaArmFunction.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

---


## Structs <a name="Structs" id="Structs"></a>

### LambdaArmFunctionProps <a name="LambdaArmFunctionProps" id="cdk-common.LambdaArmFunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-common.LambdaArmFunctionProps.Initializer"></a>

```typescript
import { LambdaArmFunctionProps } from 'cdk-common'

const lambdaArmFunctionProps: LambdaArmFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.code">code</a></code> | <code>aws-cdk-lib.aws_lambda.Code</code> | The source code of your Lambda function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the method within your code that Lambda calls to execute your function. |
| <code><a href="#cdk-common.LambdaArmFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment for the Lambda function that you are uploading. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="cdk-common.LambdaArmFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-common.LambdaArmFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="cdk-common.LambdaArmFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="cdk-common.LambdaArmFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="cdk-common.LambdaArmFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-common.LambdaArmFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="cdk-common.LambdaArmFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="cdk-common.LambdaArmFunctionProps.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-common.LambdaArmFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="cdk-common.LambdaArmFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="cdk-common.LambdaArmFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-common.LambdaArmFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="cdk-common.LambdaArmFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-common.LambdaArmFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-common.LambdaArmFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-common.LambdaArmFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="cdk-common.LambdaArmFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="cdk-common.LambdaArmFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="cdk-common.LambdaArmFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="cdk-common.LambdaArmFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdk-common.LambdaArmFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="cdk-common.LambdaArmFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="cdk-common.LambdaArmFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="cdk-common.LambdaArmFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="cdk-common.LambdaArmFunctionProps.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="cdk-common.LambdaArmFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-common.LambdaArmFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
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

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="cdk-common.LambdaArmFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="cdk-common.LambdaArmFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="cdk-common.LambdaArmFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="cdk-common.LambdaArmFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="cdk-common.LambdaArmFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="cdk-common.LambdaArmFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="cdk-common.LambdaArmFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-common.LambdaArmFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="cdk-common.LambdaArmFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-common.LambdaArmFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="cdk-common.LambdaArmFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="cdk-common.LambdaArmFunctionProps.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-common.LambdaArmFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="cdk-common.LambdaArmFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-common.LambdaArmFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-common.LambdaArmFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `code`<sup>Required</sup> <a name="code" id="cdk-common.LambdaArmFunctionProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* aws-cdk-lib.aws_lambda.Code

The source code of your Lambda function.

You can point to a file in an
Amazon Simple Storage Service (Amazon S3) bucket or specify your source
code as inline text.

---

##### `handler`<sup>Required</sup> <a name="handler" id="cdk-common.LambdaArmFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

The name of the method within your code that Lambda calls to execute your function.

The format includes the file name. It can also include
namespaces and other qualifiers, depending on the runtime.
For more information, see https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html.

Use `Handler.FROM_IMAGE` when defining a function from a Docker image.

NOTE: If you specify your source code as inline text by specifying the
ZipFile property within the Code property, specify index.function_name as
the handler.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-common.LambdaArmFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime environment for the Lambda function that you are uploading.

For valid values, see the Runtime property in the AWS Lambda Developer
Guide.

Use `Runtime.FROM_IMAGE` when defining a function from a Docker image.

---



## Enums <a name="Enums" id="Enums"></a>

### AWSManagedPolicies <a name="AWSManagedPolicies" id="cdk-common.AWSManagedPolicies"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-common.AWSManagedPolicies.ADMINISTRATOR_ACCESS">ADMINISTRATOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.POWER_USER_ACCESS">POWER_USER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.READ_ONLY_ACCESS">READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_READ_ONLY_ACCESS">AWSCLOUD_FORMATION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_FRONT_FULL_ACCESS">CLOUD_FRONT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_FULL_ACCESS">AWSCLOUD_HSM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_READ_ONLY_ACCESS">AWSCLOUD_HSM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS">RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS">RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_FRONT_READ_ONLY_ACCESS">CLOUD_FRONT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_SEARCH_FULL_ACCESS">CLOUD_SEARCH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_SEARCH_READ_ONLY_ACCESS">CLOUD_SEARCH_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS">CLOUD_WATCH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_READ_ONLY_ACCESS">CLOUD_WATCH_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_FULL_ACCESS">CLOUD_WATCH_LOGS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_READ_ONLY_ACCESS">CLOUD_WATCH_LOGS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_FULL_ACCESS">AWSDIRECT_CONNECT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_READ_ONLY_ACCESS">AWSDIRECT_CONNECT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_FULL_ACCESS">AMAZON_APP_STREAM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_READ_ONLY_ACCESS">AMAZON_APP_STREAM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESS">AMAZON_DYNAMO_DB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_READ_ONLY_ACCESS">AMAZON_DYNAMO_DB_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE">AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_FULL_ACCESS">AMAZON_E_C2_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_READ_ONLY_ACCESS">AMAZON_E_C2_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_FULL_ACCESS">AMAZON_ELASTI_CACHE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS">AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS">AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS">AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GLACIER_READ_ONLY_ACCESS">AMAZON_GLACIER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GLACIER_FULL_ACCESS">AMAZON_GLACIER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FULL_ACCESS">AMAZON_KINESIS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_READ_ONLY_ACCESS">AMAZON_KINESIS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACEREAD_ONLY">AWSMARKETPLACEREAD_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS">AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FULL_ACCESS">AMAZON_MOBILE_ANALYTICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS">AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS">AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS">AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMFULL_ACCESS">IAMFULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMREAD_ONLY_ACCESS">IAMREAD_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_POWER_USER">AWSKEY_MANAGEMENT_SERVICE_POWER_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_FULL_ACCESS">AMAZON_WORK_MAIL_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_READ_ONLY_ACCESS">AMAZON_WORK_MAIL_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_READ_ONLY_ACCESS">AWSIMPORT_EXPORT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_FULL_ACCESS">AWSIMPORT_EXPORT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_EXECUTE">AWSLAMBDA_EXECUTE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDAINVOCATION_DYNAMODB">AWSLAMBDAINVOCATION_DYNAMODB</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_FULL_ACCESS">AMAZON_REDSHIFT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_READ_ONLY_ACCESS">AMAZON_REDSHIFT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_FULL_ACCESS">AMAZON_RDS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_READ_ONLY_ACCESS">AMAZON_RDS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_FULL_ACCESS">AMAZON_ROUTE53_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_READ_ONLY_ACCESS">AMAZON_ROUTE53_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_FULL_ACCESS">AMAZON_ROUTE53_DOMAINS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS">AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_S3_FULL_ACCESS">AMAZON_S3_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_S3_READ_ONLY_ACCESS">AMAZON_S3_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SECURITY_AUDIT">SECURITY_AUDIT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SES_FULL_ACCESS">AMAZON_SES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SES_READ_ONLY_ACCESS">AMAZON_SES_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SIMPLE_WORKFLOW_FULL_ACCESS">SIMPLE_WORKFLOW_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SNS_FULL_ACCESS">AMAZON_SNS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SNS_READ_ONLY_ACCESS">AMAZON_SNS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SQS_FULL_ACCESS">AMAZON_SQS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SQS_READ_ONLY_ACCESS">AMAZON_SQS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_FULL_ACCESS">AWSSTORAGE_GATEWAY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS">AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_ACCESS">AWSSUPPORT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_FULL_ACCESS">AWSDIRECTORY_SERVICE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS">AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_FULL_ACCESS">AMAZON_ZOCALO_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_READ_ONLY_ACCESS">AMAZON_ZOCALO_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_FULL_ACCESS">AMAZON_VPC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_READ_ONLY_ACCESS">AMAZON_VPC_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSACCOUNT_ACTIVITY_ACCESS">AWSACCOUNT_ACTIVITY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSACCOUNT_USAGE_REPORT_ACCESS">AWSACCOUNT_USAGE_REPORT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_ROLE">AMAZON_ELASTIC_MAP_REDUCE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE">AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_NOTIFICATION_ACCESS_ROLE">AUTO_SCALING_NOTIFICATION_ACCESS_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_ROLE">AWSCLOUD_HSM_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE">AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_TRANSCODER_ROLE">AMAZON_ELASTIC_TRANSCODER_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_ROLE">AWSLAMBDA_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.RDSCLOUD_HSM_AUTHORIZATION_ROLE">RDSCLOUD_HSM_AUTHORIZATION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SNS_ROLE">AMAZON_SNS_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONNECTOR">AWSCONNECTOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_FULL_ACCESS">AWSMARKETPLACE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_USER_ACCESS">AWSCONFIG_USER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE">AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_READ_ONLY">AMAZON_COGNITO_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_POWER_USER">AMAZON_COGNITO_POWER_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES">AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS">AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_BASIC_EXECUTION_ROLE">AWSLAMBDA_BASIC_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE">AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_KINESIS_EXECUTION_ROLE">AWSLAMBDA_KINESIS_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_ROLE">AMAZON_E_C2_CONTAINER_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS">AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS">AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_FULL_ACCESS">AMAZON_MACHINE_LEARNING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS">AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS">AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS">AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE">AWSCODE_DEPLOY_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY">AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_FULL_ACCESS">AWSCODE_DEPLOY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_DEPLOYER_ACCESS">AWSCODE_DEPLOY_DEPLOYER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_READ_ONLY_ACCESS">AWSCODE_DEPLOY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS">AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS">AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_FULL_ACCESS">AMAZON_SSM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_READ_ONLY_ACCESS">AMAZON_SSM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_SS_M">AMAZON_E_C2_ROLEFOR_SS_M</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_ACTIONS_E_C2_ACCESS">CLOUD_WATCH_ACTIONS_E_C2_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS">AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_FULL_ACCESS">AWSCODE_COMMIT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_READ_ONLY">AWSCODE_COMMIT_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_POWER_USER">AWSCODE_COMMIT_POWER_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMUSER_SSH_KEYS">IAMUSER_SSH_KEYS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_ADMINISTRATOR">AMAZON_API_GATEWAY_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS">AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_FULL_ACCESS">AWSDEVICE_FARM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DRSVPC_MANAGEMENT">AMAZON_DRSVPC_MANAGEMENT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR">VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_ADMIN">AMAZON_WORK_SPACES_ADMIN</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ES_FULL_ACCESS">AMAZON_ES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ES_READ_ONLY_ACCESS">AMAZON_ES_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWAFREAD_ONLY_ACCESS">AWSWAFREAD_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWAFFULL_ACCESS">AWSWAFFULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_READ_ONLY_ACCESS">AMAZON_INSPECTOR_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_FULL_ACCESS">AMAZON_INSPECTOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS">AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_FULL_ACCESS">AMAZON_KINESIS_FIREHOSE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_RULE_ACTIONS">AWSIO_T_RULE_ACTIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_LOGGING">AWSIO_T_LOGGING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_FULL_ACCESS">AWSIO_T_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DATA_ACCESS">AWSIO_T_DATA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_ACCESS">AWSIO_T_CONFIG_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_READ_ONLY_ACCESS">AWSIO_T_CONFIG_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_RD_S">AWSQUICK_SIGHT_DESCRIBE_RD_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_REDSHIFT">AWSQUICK_SIGHT_DESCRIBE_REDSHIFT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_LIST_IA_M">AWSQUICK_SIGHT_LIST_IA_M</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_ENHANCED_MONITORING_ROLE">AMAZON_RDS_ENHANCED_MONITORING_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS">AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DMSVPC_MANAGEMENT_ROLE">AMAZON_DMSVPC_MANAGEMENT_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_FULL_ACCESS">AMAZON_MECHANICAL_TURK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_READ_ONLY">AMAZON_MECHANICAL_TURK_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY">AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER">AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS">AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE">AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS">CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS">CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_INVOCATION_ACCESS">CLOUD_WATCH_EVENTS_INVOCATION_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_FULL_ACCESS">CLOUD_WATCH_EVENTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_FULL_ACCESS">AWSCERTIFICATE_MANAGER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_READ_ONLY">AWSCERTIFICATE_MANAGER_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WEB_TIER">AWSELASTIC_BEANSTALK_WEB_TIER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WORKER_TIER">AWSELASTIC_BEANSTALK_WORKER_TIER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER">AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ENHANCED_HEALTH">AWSELASTIC_BEANSTALK_ENHANCED_HEALTH</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE">AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_DIRECTORY_SERVICE_ACCESS">AMAZON_RDS_DIRECTORY_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_FULL_ACCESS">AWSMARKETPLACE_METERING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_RULES_EXECUTION_ROLE">AWSCONFIG_RULES_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE">AWSELASTIC_BEANSTALK_SERVICE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DMS_REDSHIFT_S3_ROLE">AMAZON_DMS_REDSHIFT_S3_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS">AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENT_ACCESS">AWSAPPLICATION_DISCOVERY_AGENT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE">AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPS_WORKS_INSTANCE_REGISTRATION">AWSOPS_WORKS_INSTANCE_REGISTRATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_APPROVER_ACCESS">AWSCODE_PIPELINE_APPROVER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAGENTLESS_DISCOVERY_SERVICE">AWSAGENTLESS_DISCOVERY_SERVICE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE">AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_READ_ONLY">AMAZON_KINESIS_ANALYTICS_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_FULL_ACCESS">AMAZON_KINESIS_ANALYTICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVER_MIGRATION_CONNECTOR">SERVER_MIGRATION_CONNECTOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.VIEW_ONLY_ACCESS">VIEW_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SUPPORT_USER">SUPPORT_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SYSTEM_ADMINISTRATOR">SYSTEM_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DATABASE_ADMINISTRATOR">DATABASE_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DATA_SCIENTIST">DATA_SCIENTIST</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.NETWORK_ADMINISTRATOR">NETWORK_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.BILLING">BILLING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMUSER_CHANGE_PASSWORD">IAMUSER_CHANGE_PASSWORD</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE">AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_SERVICE_ACCESS">AMAZON_APP_STREAM_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE">AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_SERVICE_ROLE">AWSOPS_WORKS_CM_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_FULL_ACCESS">AMAZON_REKOGNITION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_READ_ONLY_ACCESS">AMAZON_REKOGNITION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ATHENA_FULL_ACCESS">AMAZON_ATHENA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_POLLY_FULL_ACCESS">AMAZON_POLLY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_POLLY_READ_ONLY_ACCESS">AMAZON_POLLY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_MAINTENANCE_WINDOW_ROLE">AMAZON_SSM_MAINTENANCE_WINDOW_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSXRAY_WRITE_ONLY_ACCESS">AWSXRAY_WRITE_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSXRAY_READ_ONLY_ACCESS">AWSXRAY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSXRAY_FULL_ACCESS">AWSXRAY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_BUILD_DEVELOPER_ACCESS">AWSCODE_BUILD_DEVELOPER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_BUILD_READ_ONLY_ACCESS">AWSCODE_BUILD_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_BUILD_ADMIN_ACCESS">AWSCODE_BUILD_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_ROLE">AMAZON_SSM_AUTOMATION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_ENI_MANAGEMENT_ACCESS">AWSLAMBDA_ENI_MANAGEMENT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSHEALTH_FULL_ACCESS">AWSHEALTH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBATCH_FULL_ACCESS">AWSBATCH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_ROLE">AWSBATCH_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_ATHENA_ACCESS">AWSQUICKSIGHT_ATHENA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS">IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS">AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_FULL_ACCESS">AWSSTEP_FUNCTIONS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS">AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_FULL_ACCESS">AUTO_SCALING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_READ_ONLY_ACCESS">AUTO_SCALING_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_FULL_ACCESS">AUTO_SCALING_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS">AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_FULLACCESS">AWSDATAPIPELINE_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_POWERUSER">AWSDATAPIPELINE_POWERUSER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS">APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY">AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE">AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_FULL_ACCESS">AMAZON_CLOUD_DIRECTORY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS">AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_GET_ENTITLEMENTS">AWSMARKETPLACE_GET_ENTITLEMENTS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CLOUD_WATCH_LOGS">AWSOPS_WORKS_CLOUD_WATCH_LOGS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_RUN_BOTS_ONLY">AMAZON_LEX_RUN_BOTS_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_READ_ONLY">AMAZON_LEX_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_FULL_ACCESS">AMAZON_LEX_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_STAR_SERVICE_ROLE">AWSCODE_STAR_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_STAR_FULL_ACCESS">AWSCODE_STAR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGREENGRASS_FULL_ACCESS">AWSGREENGRASS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE">AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY">QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE">AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY">AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS">AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_APPROVER_ACCESS">AMAZON_SSM_AUTOMATION_APPROVER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DISCOVERY_ACCESS">AWSMIGRATION_HUB_DISCOVERY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_ROLE">AWSGLUE_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_FULL_ACCESS">AWSGLUE_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_NOTEBOOK_ROLE">AWSGLUE_SERVICE_NOTEBOOK_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_SMS_ACCESS">AWSMIGRATION_HUB_SMS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DMS_ACCESS">AWSMIGRATION_HUB_DMS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_FULL_ACCESS">AWSMIGRATION_HUB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE">AMAZON_MACIE_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACIE_FULL_ACCESS">AMAZON_MACIE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY">AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSEC2_SPOT_SERVICE_ROLE_POLICY">AWSEC2_SPOT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY">AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY">AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY">AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY">AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EMR_CLEANUP_POLICY">AMAZON_EMR_CLEANUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.LEX_CHANNEL_POLICY">LEX_CHANNEL_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.LEX_BOT_POLICY">LEX_BOT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_REPLICATOR">AWSLAMBDA_REPLICATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_SERVICE_TRUST_POLICY">AWSORGANIZATIONS_SERVICE_TRUST_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES">AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ECS_SERVICE_ROLE_POLICY">AMAZON_ECS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY">AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APIGATEWAY_SERVICE_ROLE_POLICY">APIGATEWAY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY">AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY">AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY">AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY">AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY">AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY">AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_READ_ONLY">AMAZON_CHIME_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_FULL_ACCESS">AMAZON_CHIME_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_USER_MANAGEMENT">AMAZON_CHIME_USER_MANAGEMENT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_HSM_SERVICE_ROLE_POLICY">CLOUD_HSM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONECS_FULLACCESS">AMAZONECS_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY">DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_SERVICE_ROLE_POLICY">AMAZON_SSM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY">AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY">CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_SERVICE_ROLE_POLICY">AMAZON_INSPECTOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRICE_LIST_SERVICE_FULL_ACCESS">AWSPRICE_LIST_SERVICE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA">AWSCODE_DEPLOY_ROLE_FOR_LAMBDA</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MQ_FULL_ACCESS">AMAZON_MQ_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MQ_READ_ONLY_ACCESS">AMAZON_MQ_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY">AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_READ_ONLY_ACCESS">AMAZON_GUARD_DUTY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_FULL_ACCESS">AMAZON_GUARD_DUTY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_READ_ONLY">AMAZON_SAGE_MAKER_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FULL_ACCESS">AMAZON_SAGE_MAKER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOS_FULL_ACCESS">AMAZON_FREE_RTOS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_LENS_SERVICE_ROLE_POLICY">AWSDEEP_LENS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY">AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_SERVICE_ROLE">AMAZON_REKOGNITION_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS">AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPREHEND_FULL_ACCESS">COMPREHEND_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPREHEND_READ_ONLY">COMPREHEND_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS">GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.TRANSLATE_READ_ONLY">TRANSLATE_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD9_SERVICE_ROLE_POLICY">AWSCLOUD9_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD9_USER">AWSCLOUD9_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD9_ADMINISTRATOR">AWSCLOUD9_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD9_ENVIRONMENT_MEMBER">AWSCLOUD9_ENVIRONMENT_MEMBER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_FULL_ACCESS">ALEXA_FOR_BUSINESS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS">ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_DEVICE_SETUP">ALEXA_FOR_BUSINESS_DEVICE_SETUP</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION">ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_THINGS_REGISTRATION">AWSIO_T_THINGS_REGISTRATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS">AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS">AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSOSERVICE_ROLE_POLICY">AWSSSOSERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELASTI_CACHE_SERVICE_ROLE_POLICY">ELASTI_CACHE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_TOTA_UPDATE">AWSIO_TOTA_UPDATE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS">AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY">AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_SERVICE_ROLE_POLICY">AMAZON_RDS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AUTO_SCALING_SERVICE_ROLE_POLICY">AUTO_SCALING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS">AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS">AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY">AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS">AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_FULL_ACCESS">AWSSERVICE_CATALOG_END_USER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY">AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ES_COGNITO_ACCESS">AMAZON_ES_COGNITO_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_EVENT_TARGET_ROLE">AWSBATCH_SERVICE_EVENT_TARGET_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DAXSERVICE_ROLE_POLICY">DAXSERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS">AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_ADMIN_POLICY">CLOUD_WATCH_AGENT_ADMIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_SERVER_POLICY">CLOUD_WATCH_AGENT_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_GROUPS_READ_ONLY_ACCESS">AWSRESOURCE_GROUPS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_READ_ONLY">AWSELEMENTAL_MEDIA_STORE_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS">AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_ROLE_FOR_ORGANIZATIONS">AWSCONFIG_ROLE_FOR_ORGANIZATIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_SYNC_ADMINISTRATOR">AWSAPP_SYNC_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SCHEMA_AUTHOR">AWSAPP_SYNC_SCHEMA_AUTHOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_SYNC_INVOKE_FULL_ACCESS">AWSAPP_SYNC_INVOKE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSEC2_FLEET_SERVICE_ROLE_POLICY">AWSEC2_FLEET_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.FMSSERVICE_ROLE_POLICY">FMSSERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_READ_ONLY_ACCESS">AMAZON_TRANSCRIBE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_FULL_ACCESS">AMAZON_TRANSCRIBE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SECRETS_MANAGER_READ_WRITE">SECRETS_MANAGER_READ_WRITE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS">AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSARTIFACT_ACCOUNT_SYNC">AWSARTIFACT_ACCOUNT_SYNC</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_FULLACCESS">AMAZONELASTICTRANSCODER_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_BETA_SERVICE_ROLE_POLICY">AMAZON_RDS_BETA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFMADMIN_FULL_ACCESS">AWSFMADMIN_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFMADMIN_READ_ONLY_ACCESS">AWSFMADMIN_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFMMEMBER_READ_ONLY_ACCESS">AWSFMMEMBER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_READ_ONLY_ACCESS">AWSIO_T1_CLICK_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_FULL_ACCESS">AWSIO_T1_CLICK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_CLUSTER_POLICY">AMAZON_EKS_CLUSTER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONEKS_CNI_POLICY">AMAZONEKS_CNI_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_POLICY">AMAZON_EKS_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_WORKER_NODE_POLICY">AMAZON_EKS_WORKER_NODE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.NEPTUNE_READ_ONLY_ACCESS">NEPTUNE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.NEPTUNE_FULL_ACCESS">NEPTUNE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_SERVICE_ROLE_POLICY">AWSCONFIG_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY">AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY">AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSHIELD_DRT_ACCESS_POLICY">AWSSHIELD_DRT_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_READONLYACCESS">AMAZONELASTICTRANSCODER_READONLYACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_JOBSSUBMITTER">AMAZONELASTICTRANSCODER_JOBSSUBMITTER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_FRONT_LOGGER">AWSCLOUD_FRONT_LOGGER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE">AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_READ_ONLY_ACCESS">AWSIO_T_ANALYTICS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_FULL_ACCESS">AWSIO_T_ANALYTICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.NEPTUNE_CONSOLE_FULL_ACCESS">NEPTUNE_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE_POLICY">AMAZON_MACIE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY">AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS">AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSOREAD_ONLY">AWSSSOREAD_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSOMASTER_ACCOUNT_ADMINISTRATOR">AWSSSOMASTER_ACCOUNT_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR">AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACIE_HANDSHAKE_ROLE">AMAZON_MACIE_HANDSHAKE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE">AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_AUDIT">AWSIO_T_DEVICE_DEFENDER_AUDIT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS">AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY">AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY">APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY">AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY">WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WAFLOGGING_SERVICE_ROLE_POLICY">WAFLOGGING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOSOTA_UPDATE">AMAZON_FREE_RTOSOTA_UPDATE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSXRAY_DAEMON_WRITE_ACCESS">AWSXRAY_DAEMON_WRITE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY">AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_READ_ONLY">ELASTIC_LOAD_BALANCING_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_FULL_ACCESS">ELASTIC_LOAD_BALANCING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.LIGHTSAIL_EXPORT_ACCESS">LIGHTSAIL_EXPORT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR">AMAZON_REDSHIFT_QUERY_EDITOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS">AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CONNECT_READ_ONLY_ACCESS">AMAZON_CONNECT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR">AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER">AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS">AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY">AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_TRAIL_SERVICE_ROLE_POLICY">CLOUD_TRAIL_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGREENGRASS_READ_ONLY_ACCESS">AWSGREENGRASS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_READ_ONLY">AWSSSODIRECTORY_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_ADMINISTRATOR">AWSSSODIRECTORY_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_FULL_ACCESS">AWSORGANIZATIONS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_READ_ONLY_ACCESS">AWSORGANIZATIONS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE">AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY">AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY">AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.KAFKA_SERVICE_ROLE_POLICY">KAFKA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE">AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_DATA_FULL_ACCESS">AMAZON_RDS_DATA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSROBO_MAKER_READ_ONLY_ACCESS">AWSROBO_MAKER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_ROLE_POLICY">AWSROBO_MAKER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_POLICY">AWSROBO_MAKER_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY">AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY">AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY">AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY">AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_LAUNCH_ROLE">SERVER_MIGRATION_SERVICE_LAUNCH_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_READ_ONLY_ACCESS">GLOBAL_ACCELERATOR_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_FULL_ACCESS">GLOBAL_ACCELERATOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS">AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPREHEND_MEDICAL_FULL_ACCESS">COMPREHEND_MEDICAL_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_EC_S">AWSCODE_DEPLOY_ROLE_FOR_EC_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED">AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.TRANSLATE_FULL_ACCESS">TRANSLATE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_SERVICE_ROLE_POLICY">AWSSECURITY_HUB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_FULL_ACCESS">AWSSECURITY_HUB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_READ_ONLY_ACCESS">AWSSECURITY_HUB_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_F_SX_SERVICE_ROLE_POLICY">AMAZON_F_SX_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS">FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_F_SX_READ_ONLY_ACCESS">AMAZON_F_SX_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_F_SX_FULL_ACCESS">AMAZON_F_SX_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS">AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_FULL_ACCESS">AMAZON_F_SX_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_FULL_ACCESS">AMAZON_TEXTRACT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_SERVICE_ROLE">AMAZON_TEXTRACT_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_READ_ONLY_ACCESS">AWSCLOUD_MAP_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_FULL_ACCESS">AWSCLOUD_MAP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS">AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS">AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_FULL_ACCESS">WELL_ARCHITECTED_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS">WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY">CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_FULL_ACCESS">AWSIO_T_SITE_WISE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_READ_ONLY_ACCESS">AWSIO_T_SITE_WISE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PERSONALIZE_FULL_ACCESS">AMAZON_PERSONALIZE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_ROLE_POLICY">CLIENT_VPN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MQ_API_READ_ONLY_ACCESS">AMAZON_MQ_API_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MQ_API_FULL_ACCESS">AMAZON_MQ_API_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_FULL_ACCESS">AMAZON_DOC_DB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_READ_ONLY_ACCESS">AMAZON_DOC_DB_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_CONSOLE_FULL_ACCESS">AMAZON_DOC_DB_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP">AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_READ_ONLY_ACCESS">AWSIO_T_EVENTS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_FULL_ACCESS">AWSIO_T_EVENTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MAINTENANCE">AWSELASTIC_BEANSTALK_MAINTENANCE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES">AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRANSFER_LOGGING_ACCESS">AWSTRANSFER_LOGGING_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MSK_FULL_ACCESS">AMAZON_MSK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MSK_READ_ONLY_ACCESS">AMAZON_MSK_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_FORECAST_FULL_ACCESS">AMAZON_FORECAST_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_SYNC_READ_ONLY_ACCESS">AWSDATA_SYNC_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_SYNC_FULL_ACCESS">AWSDATA_SYNC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WORK_LINK_SERVICE_ROLE_POLICY">WORK_LINK_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_SERVICE_ROLE_POLICY">AWSDEEP_RACER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY">AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY">AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPREHEND_DATA_ACCESS_ROLE_POLICY">COMPREHEND_DATA_ACCESS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY">ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE">AMAZON_SSM_MANAGED_INSTANCE_CORE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_DIRECTORY_SERVICE_ACCESS">AMAZON_SSM_DIRECTORY_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY">AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIQFULL_ACCESS">AWSIQFULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLOBAL_ACCELERATOR_SLR_POLICY">AWSGLOBAL_ACCELERATOR_SLR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY">AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_FULL_ACCESS">AWSAPP_MESH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_READ_ONLY">AWSAPP_MESH_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS">AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS">AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS">AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDENY_ALL">AWSDENY_ALL</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_SERVICE_ROLE_POLICY">AWSCONTROL_TOWER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_FULL_ACCESS">AMAZON_ROUTE53_RESOLVER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS">AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS">AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_SERVICE_ROLE_POLICY">AWSAPP_MESH_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS">AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MIGRATION_HUB_SERVICE_ROLE_POLICY">MIGRATION_HUB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY">MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY">MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY">AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_ONPREMISES">AWSOPSWORKSREGISTERCLI_ONPREMISES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_EC2">AWSOPSWORKSREGISTERCLI_EC2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY">AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY">AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER">AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY">LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMACCESS_ADVISOR_READ_ONLY">IAMACCESS_ADVISOR_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_SERVICE_ROLE_POLICY">SERVICE_QUOTAS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_READ_ONLY_ACCESS">SERVICE_QUOTAS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_FULL_ACCESS">SERVICE_QUOTAS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS">AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT">EC2_INSTANCE_CONNECT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SERVICE_ACCESS">AMAZON_WORK_SPACES_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS">AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_FULL_ACCESS">AWSMARKETPLACE_SELLER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS">AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY">AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_ENVOY_ACCESS">AWSAPP_MESH_ENVOY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS">AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_FULL_ACCESS">AMAZON_EVENT_BRIDGE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUDWATCH_CROSSACCOUNTACCESS">CLOUDWATCH_CROSSACCOUNTACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS">CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CONFIG_CONFORMS_SERVICE_ROLE_POLICY">CONFIG_CONFORMS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_FULL_ACCESS">AWSCLOUD_FORMATION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS">ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_ENVOY_ACCESS">AWSAPP_MESH_PREVIEW_ENVOY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY">AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_SM_S">AWSSERVICE_ROLE_FOR_SM_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION">AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_DATA_ADMIN">AWSLAKE_FORMATION_DATA_ADMIN</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIQCONTRACT_SERVICE_ROLE_POLICY">AWSIQCONTRACT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIQPERMISSION_SERVICE_ROLE_POLICY">AWSIQPERMISSION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_QLDB_READ_ONLY">AMAZON_QLDB_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_QLDB_FULL_ACCESS">AMAZON_QLDB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_QLDB_CONSOLE_FULL_ACCESS">AMAZON_QLDB_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY">AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_SERVICE_ROLE_POLICY">AMAZON_CHIME_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY">AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY">ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY">AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY">AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS">AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS">AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_REQUESTS">AWSPRIVATE_MARKETPLACE_REQUESTS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFOR_WORD_PRESS_PLUGIN_POLICY">AWSFOR_WORD_PRESS_PLUGIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY">AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY">AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_READ_ONLY_ACCESS">AWSSAVINGS_PLANS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_FULL_ACCESS">AWSSAVINGS_PLANS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.WAFV2_LOGGING_SERVICE_ROLE_POLICY">WAFV2_LOGGING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP">AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD">AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_READ_ONLY">AWSDATA_EXCHANGE_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS">AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS">AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_FULL_ACCESS">AWSDATA_EXCHANGE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY">AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY">AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY">DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY">AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_FULL_ACCESS">AWSBACKUP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_OPERATOR_ACCESS">AWSBACKUP_OPERATOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY">AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_REGISTER_USAGE">AWSMARKETPLACE_METERING_REGISTER_USAGE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY">AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY">AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY">AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_FULL_ACCESS">CLOUD_WATCH_SYNTHETICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS">CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY">AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS">AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS">AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IMAGE_BUILDER">AWSSERVICE_ROLE_FOR_IMAGE_BUILDER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER">EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_FULL_ACCESS">IAMACCESS_ANALYZER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_READ_ONLY_ACCESS">IAMACCESS_ANALYZER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ACCESS_ANALYZER_SERVICE_ROLE_POLICY">ACCESS_ANALYZER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY">AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS">AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY">COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS">AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_FULL_ACCESS">AMAZON_CODE_GURU_PROFILER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS">AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MCS_FULL_ACCESS">AMAZON_MCS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MCS_READ_ONLY_ACCESS">AMAZON_MCS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY">AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KENDRA_READ_ONLY_ACCESS">AMAZON_KENDRA_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KENDRA_FULL_ACCESS">AMAZON_KENDRA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS">AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS">AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_FULL_ACCESS">AMAZON_AUGMENTED_AI_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_READ_ONLY_ACCESS">AWSNETWORK_MANAGER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_FULL_ACCESS">AWSNETWORK_MANAGER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY">AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS">AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS">AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY">CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY">CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.HEALTH_ORGANIZATIONSSERVICEROLEPOLICY">HEALTH_ORGANIZATIONSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_READ_ONLY_ACCESS">AWSIMAGE_BUILDER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_FULL_ACCESS">AWSIMAGE_BUILDER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY">EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS">AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_READ_ONLY_ACCESS">AMAZON_WORK_DOCS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS">AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS">AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS">AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_SAGE_MAKER_POLICY">AWSQUICK_SIGHT_SAGE_MAKER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY">AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SERVICE_ROLE_POLICY">AWSAPP_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_SD_K">AMAZON_CHIME_SD_K</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS">AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS">AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_ROLE_POLICY">AMAZON_EKS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_READ_ONLY_ACCESS">COMPUTE_OPTIMIZER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY">AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS">ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GAME_LIFT_GAME_SERVER_GROUP_POLICY">GAME_LIFT_GAME_SERVER_GROUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_FULL_ACCESS">AWSWAFCONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_READ_ONLY_ACCESS">AWSWAFCONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_FULL_ACCESS">AMAZON_WORK_DOCS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS">AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_FULL_ACCESS">AMAZON_KEYSPACES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_READ_ONLY_ACCESS">AMAZON_KEYSPACES_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_FULL_ACCESS">AMAZON_DETECTIVE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY">AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS">SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST">AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_PATCH_ASSOCIATION">AMAZON_SSM_PATCH_ASSOCIATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD9_SSM_INSTANCE_PROFILE">AWSCLOUD9_SSM_INSTANCE_PROFILE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION">AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS">AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY">AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY">AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_ASSET_SERVER_POLICY">AWSTHINKBOX_ASSET_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY">AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY">AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY">AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY">AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY">AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP">AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_READ_ONLY_ACCESS">AMAZON_APP_FLOW_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_FULL_ACCESS">AMAZON_APP_FLOW_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY">ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_FULL_ACCESS">ELEMENTAL_ACTIVATIONS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER">AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_SN_S">AWSELASTIC_BEANSTALK_ROLE_SN_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_RD_S">AWSELASTIC_BEANSTALK_ROLE_RD_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_EC_S">AWSELASTIC_BEANSTALK_ROLE_EC_S</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CORE">AWSELASTIC_BEANSTALK_ROLE_CORE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CW_L">AWSELASTIC_BEANSTALK_ROLE_CW_L</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_ADMIN_ACCESS">AWSCODE_ARTIFACT_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_ORGANIZATION_ADMIN_ACCESS">AWSBACKUP_ORGANIZATION_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3">AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS">AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS">AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_FULL_ACCESS">AMAZON_HONEYCODE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_READ_ONLY_ACCESS">AMAZON_HONEYCODE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS">AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS">AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY">CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_READ_ONLY_ACCESS">AWSCODE_ARTIFACT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCODEGURU_PROFILER">AWSSERVICEROLEFORCODEGURU_PROFILER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY">AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_READ_ONLY">AWSELEMENTAL_MEDIA_LIVE_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS">AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION">AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION">SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_READONLYACCESS">AWSCODEPIPELINE_READONLYACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_FULLACCESS">AWSCODEPIPELINE_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BRAKET_SERVICE_ROLE_POLICY">AMAZON_BRAKET_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER">AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BRAKET_FULL_ACCESS">AMAZON_BRAKET_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_MSK_EXECUTION_ROLE">AWSLAMBDA_MSK_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE">AWSCOMPROMISED_KEY_QUARANTINE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SERVERMIGRATION_SERVICEROLE">SERVERMIGRATION_SERVICEROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKSVPC_RESOURCE_CONTROLLER">AMAZON_EKSVPC_RESOURCE_CONTROLLER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROUTE53_RESOLVER_SERVICE_ROLE_POLICY">ROUTE53_RESOLVER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY">CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED">AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED">AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY">AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRANSFER_READ_ONLY_ACCESS">AWSTRANSFER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBILLING_READ_ONLY_ACCESS">AWSBILLING_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS">ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES">ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS">ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ELASTICSEARCH_POLICY">AWSQUICK_SIGHT_ELASTICSEARCH_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_DATA_FULL_ACCESS">AMAZON_REDSHIFT_DATA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSROBOMAKER_FULLACCESS">AWSROBOMAKER_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_CONFIGROLE">AWS_CONFIGROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MEDIA_PACKAGE_SERVICE_ROLE_POLICY">MEDIA_PACKAGE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_AMI_INGESTION">AWSMARKETPLACE_AMI_INGESTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY">AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEMS_UTILS">AMAZON_ELASTIC_FILE_SYSTEMS_UTILS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS">EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_TIMESTREAM_POLICY">AWSQUICK_SIGHT_TIMESTREAM_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_READ_ONLY_ACCESS">AMAZON_TIMESTREAM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_FULL_ACCESS">AMAZON_TIMESTREAM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS">AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY">AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_FULL_ACCESS">AMAZON_S3_OUTPOSTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS">AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_FULL_ACCESS">AWSDEEP_RACER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY">CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_FULLACCESS">AWSCLOUDTRAIL_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_SERVICE_ROLE_POLICY">AWSSUPPORT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUDGETS_READ_ONLY_ACCESS">AWSBUDGETS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS">AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT">AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MQ_SERVICE_ROLE_POLICY">AMAZON_MQ_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOUTPOSTS_SERVICE_ROLE_POLICY">AWSOUTPOSTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY">AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY">DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS">AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS">AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY">AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_READONLYACCESS">AWSLAMBDA_READONLYACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLAMBDA_FULLACCESS">AWSLAMBDA_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_SERVICE_ROLE_POLICY">AMAZON_HONEYCODE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.S3_STORAGE_LENS_SERVICE_ROLE_POLICY">S3_STORAGE_LENS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS">AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS">AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONCONNECT_FULLACCESS">AMAZONCONNECT_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MWAA_SERVICE_ROLE_POLICY">AMAZON_MWAA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS">CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS">CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS">ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY">AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY">AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY">AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_FULL_ACCESS">AWSPANORAMA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_ROLE_POLICY">AWSPANORAMA_APPLIANCE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_SAGE_MAKER_ROLE_POLICY">AWSPANORAMA_SAGE_MAKER_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_ROLE_POLICY">AWSPANORAMA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER">AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS">AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS">AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_FULL_ACCESS">AMAZON_DEV_OPS_GURU_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS">AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY">AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AMPLIFY">ADMINISTRATORACCESS_AMPLIFY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_MONITRON_POLICY">AWSSERVICE_ROLE_FOR_MONITRON_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MONITRON_FULL_ACCESS">AMAZON_MONITRON_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY">AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGLUE_DATA_BREW_SERVICE_ROLE">AWSGLUE_DATA_BREW_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ECRREPLICATION_SERVICE_ROLE_POLICY">ECRREPLICATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IVSRECORD_TO_S3">IVSRECORD_TO_S3</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY">AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY">AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY">AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY">AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS">EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS">AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRANSFER_CONSOLE_FULL_ACCESS">AWSTRANSFER_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRANSFER_FULL_ACCESS">AWSTRANSFER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_FLEET_HUB_FEDERATION_ACCESS">AWSIO_T_FLEET_HUB_FEDERATION_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_ACCESS">AWSIO_T_WIRELESS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_READ_ONLY_ACCESS">AWSIO_T_WIRELESS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS">AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER">AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_DATA_ACCESS">AWSIO_T_WIRELESS_DATA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_LOGGING">AWSIO_T_WIRELESS_LOGGING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_SHELL_FULL_ACCESS">AWSCLOUD_SHELL_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_FULL_ACCESS">AMAZON_PROMETHEUS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS">AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_QUERY_ACCESS">AMAZON_PROMETHEUS_QUERY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS">AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_FIS_SERVICE_ROLE_POLICY">AMAZON_FIS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_V2_BOT_POLICY">AMAZON_LEX_V2_BOT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_CHANNELS_ACCESS">AMAZON_LEX_CHANNELS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY">AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOPSWORKS_FULLACCESS">AWSOPSWORKS_FULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_READ_ONLY">AWSELASTIC_BEANSTALK_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AWSELASTICBEANSTALK">ADMINISTRATORACCESS_AWSELASTICBEANSTALK</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS">AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS">AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS">AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY">AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_FULL_ACCESS">AMAZON_HEALTH_LAKE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS">AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_DEVELOPER_ACCESS">AWSPROTON_DEVELOPER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY">AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_FULL_ACCESS">AWSPROTON_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_READ_ONLY_ACCESS">AWSPROTON_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS">AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT">AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGRAFANA_ACCOUNT_ADMINISTRATOR">AWSGRAFANA_ACCOUNT_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY">AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.BATCH_SERVICE_ROLE_POLICY">BATCH_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONEMRSERVICEPOLICY_V2">AMAZONEMRSERVICEPOLICY_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONEMRREADONLYACCESSPOLICY_V2">AMAZONEMRREADONLYACCESSPOLICY_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONEMRFULLACCESSPOLICY_V2">AMAZONEMRFULLACCESSPOLICY_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_ORGANIZATIONS_ACCESS">AWSSECURITY_HUB_ORGANIZATIONS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY">AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY">AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_FULL_ACCESS">AWSAPPLICATION_MIGRATION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_POLICY">AWSAPPLICATION_MIGRATION_AGENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_E_C2_ACCESS">AWSAPPLICATION_MIGRATION_E_C2_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_MGH_ACCESS">AWSAPPLICATION_MIGRATION_MGH_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS">AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY">AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS">AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE_V2">AWSCOMPROMISED_KEY_QUARANTINE_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY">AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY">AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER">AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOADMIN">AMAZONNIMBLESTUDIO_STUDIOADMIN</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOUSER">AMAZONNIMBLESTUDIO_STUDIOUSER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS">AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS">AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_FULL_ACCESS">AMAZON_LOOKOUT_METRICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY">AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_RESOLVER_ACCESS">AWSINCIDENT_MANAGER_RESOLVER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS">AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_FULL_ACCESS">AMAZON_LOOKOUT_VISION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS">AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS">AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APP_RUNNER_SERVICE_ROLE_POLICY">APP_RUNNER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS">AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY">AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY">AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY">AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY">AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUG_BUST_SERVICE_ROLE_POLICY">AWSBUG_BUST_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUG_BUST_FULL_ACCESS">AWSBUG_BUST_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUG_BUST_PLAYER_ACCESS">AWSBUG_BUST_PLAYER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY">ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS">AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY">AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_CONSUMPTION_POLICY">AWSLICENSE_MANAGER_CONSUMPTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MEMORY_DB_SERVICE_ROLE_POLICY">MEMORY_DB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY">AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY">AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS">AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS">AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS">AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS">AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS">AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS">AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS">AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_AUDIT_ACCESS">AWSBACKUP_AUDIT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY">AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS">AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY">AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY">AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.KAFKA_CONNECT_SERVICE_ROLE_POLICY">KAFKA_CONNECT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_OPEN_SEARCH_POLICY">AWSQUICKSIGHT_OPEN_SEARCH_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS">AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS">AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY">AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MSK_CONNECT_READ_ONLY_ACCESS">AMAZON_MSK_CONNECT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY">AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS">AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING">AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING">AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING">AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CONNECT_VOICE_ID_FULL_ACCESS">AMAZON_CONNECT_VOICE_ID_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY">AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_FULL_ACCESS">AWSACCOUNT_MANAGEMENT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS">AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_FULL_ACCESS">AMAZON_MEMORY_DB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_READ_ONLY_ACCESS">AMAZON_MEMORY_DB_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY">AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY">AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY">AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS">AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_COLLECTOR">AWSMIGRATION_HUB_STRATEGY_COLLECTOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY">AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY">AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY">AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS">AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS">AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY">AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS">AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY">AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS">AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY">AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY">AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY">AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY">AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY">AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS">AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS">AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY">AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY">AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY">AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY">AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSHIELD_SERVICE_ROLE_POLICY">AWSSHIELD_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY">AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY">AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_ATHENA_ACCESS">AMAZON_GRAFANA_ATHENA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS">AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY">AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_SYNC_SERVICE_ROLE_POLICY">AWSPROTON_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BRAKET_JOBS_EXECUTION_POLICY">AMAZON_BRAKET_JOBS_EXECUTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY">AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_REDSHIFT_ACCESS">AMAZON_GRAFANA_REDSHIFT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY">AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS">AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS">AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS">AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS">AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS">AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_FULL_ACCESS">AMAZON_INSPECTOR2_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY">AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_READ_ONLY">AMAZON_WORK_SPACES_WEB_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIPAMSERVICE_ROLE_POLICY">AWSIPAMSERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY">AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS">AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY">EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_FULL_ACCESS">AWSAPP_RUNNER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY">APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_READ_ONLY_ACCESS">AMAZON_INSPECTOR2_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE">AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP">AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_READ_ONLY_ACCESS">AWSAPP_RUNNER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_FULL_ACCESS">AWSIDENTITY_SYNC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_READ_ONLY_ACCESS">AWSIDENTITY_SYNC_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EBSCSI_DRIVER_POLICY">AMAZON_EBSCSI_DRIVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY">AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY">AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAMANAGE_SUBSCRIPTION">ROSAMANAGE_SUBSCRIPTION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_FULL_ACCESS">AWSBILLING_CONDUCTOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS">AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE">AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_POLICY">AWS_GLUE_SESSION_USER_RESTRICTED_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY">AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE">AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY">AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN">AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS">AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY">AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MONITRON_SERVICE_ROLE_POLICY">MONITRON_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY">AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM">AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY">AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY">AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2">AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSM2_SERVICE_POLICY">AWSM2_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY">AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_READONLYACCESS">AWSCLOUDTRAIL_READONLYACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY">AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY">AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSROLES_ANYWHERE_SERVICE_POLICY">AWSROLES_ANYWHERE_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY">AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY">AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS">AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY">AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS">AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY">AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY">AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS">AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS">AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS">AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_FULL_ACCESS">AWSSUPPORT_APP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_READ_ONLY_ACCESS">AWSSUPPORT_APP_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY">AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS">AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY">AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS">GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS">GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY">AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS">AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY">AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_SERVICE_ROLE_POLICY">AWSDEVICE_FARM_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY">AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_READ_ONLY_ACCESS">AWSSUPPORT_PLANS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_FULL_ACCESS">AWSSUPPORT_PLANS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY">APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_PCA_ACCESS">AMAZON_APP_STREAM_PCA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_SIDECAR_POLICY">AWSREFACTORING_TOOLKIT_SIDECAR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_FULL_ACCESS">AWSREFACTORING_TOOLKIT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY">AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS">AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS">AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS">AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS">AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS">AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS">AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS">AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_FULL_ACCESS">AWSRESOURCE_EXPLORER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORKSPACES_PCA_ACCESS">AMAZON_WORKSPACES_PCA_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY">AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS">AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY">AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS">AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS">AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A">AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_DATA_TRANSFER_ACCESS">AWSBACKUP_DATA_TRANSFER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY">AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY">AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS">AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS">AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY">AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY">AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY">AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SSM_ACCESS">AWSAPPLICATION_MIGRATION_SSM_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.OAMREAD_ONLY_ACCESS">OAMREAD_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.OAMFULL_ACCESS">OAMFULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION">AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION">CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION">CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY">CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWICKR_FULL_ACCESS">AWSWICKR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY">AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OMICS_READ_ONLY_ACCESS">AMAZON_OMICS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SECURITY_LAKE_SERVICE_LINKED_ROLE">SECURITY_LAKE_SERVICE_LINKED_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY">AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS">AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS">AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE">AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONDOCDB_ELASTICSERVICEROLEPOLICY">AMAZONDOCDB_ELASTICSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSVPC_LATTICE_SERVICE_ROLE_POLICY">AWSVPC_LATTICE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS">AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS">AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS">AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY">AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC">AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY">AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY">AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY">AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2">AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.RESOURCE_GROUPS_SERVICE_ROLE_POLICY">RESOURCE_GROUPS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_READ_ONLY_ACCESS">AWSCLEAN_ROOMS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS">AWSCLEAN_ROOMS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING">AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY">AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_MEMBER_ACCESS">AMAZON_DETECTIVE_MEMBER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_INVESTIGATOR_ACCESS">AMAZON_DETECTIVE_INVESTIGATOR_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT_ENDPOINT">EC2_INSTANCE_CONNECT_ENDPOINT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES">AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY">AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_USER">AWSPRIVATE_CA_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_FULL_ACCESS">AWSPRIVATE_CA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_PRIVILEGED_USER">AWSPRIVATE_CA_PRIVILEGED_USER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_READ_ONLY">AWSPRIVATE_CA_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_AUDITOR">AWSPRIVATE_CA_AUDITOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OMICS_FULL_ACCESS">AMAZON_OMICS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS">AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS">AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY">AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY">AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY">CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY">AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY">MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY">AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS">AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY">AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_CLOUD_WATCH_ACCESS">AMAZON_GRAFANA_CLOUD_WATCH_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGROUND_STATION_AGENT_INSTANCE_POLICY">AWSGROUND_STATION_AGENT_INSTANCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.VPCLATTICE_SERVICES_INVOKE_ACCESS">VPCLATTICE_SERVICES_INVOKE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.VPCLATTICE_READ_ONLY_ACCESS">VPCLATTICE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.VPCLATTICE_FULL_ACCESS">VPCLATTICE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS">AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMEDIA_CONNECT_SERVICE_POLICY">AWSMEDIA_CONNECT_SERVICE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY">AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY">AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS">AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY">AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_SUPPORT_ACCESS">AMAZON_CODE_CATALYST_SUPPORT_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_READ_ONLY_ACCESS">AMAZON_CODE_CATALYST_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_FULL_ACCESS">AMAZON_CODE_CATALYST_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY">ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAWORKER_INSTANCE_POLICY">ROSAWORKER_INSTANCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY">ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAINGRESS_OPERATOR_POLICY">ROSAINGRESS_OPERATOR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSACONTROL_PLANE_OPERATOR_POLICY">ROSACONTROL_PLANE_OPERATOR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS">AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS">AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY">AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAKUBE_CONTROLLER_POLICY">ROSAKUBE_CONTROLLER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAKMSPROVIDER_POLICY">ROSAKMSPROVIDER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAIMAGE_REGISTRY_OPERATOR_POLICY">ROSAIMAGE_REGISTRY_OPERATOR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY">AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY">KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS">AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_FULL_ACCESS">AMAZON_CODE_GURU_SECURITY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSFIN_SPACE_SERVICE_ROLE_POLICY">AWSFIN_SPACE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY">AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDMSSERVERLESS_SERVICE_ROLE_POLICY">AWSDMSSERVERLESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_ADMINISTRATOR">AMAZON_SECURITY_LAKE_ADMINISTRATOR</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSASRESUPPORT_POLICY">ROSASRESUPPORT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_FULL_ACCESS">AMAZON_DOC_DB_ELASTIC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY">AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSAINSTALLER_POLICY">ROSAINSTALLER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS">AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ROSANODE_POOL_MANAGEMENT_POLICY">ROSANODE_POOL_MANAGEMENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY">AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY">AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_MACIE_READ_ONLY_ACCESS">AMAZON_MACIE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY">AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L">EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_SERVICE_ROLE_POLICY">AWSAPP_FABRIC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY">AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_FULL_ACCESS">AWSAPP_FABRIC_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_READ_ONLY_ACCESS">AWSAPP_FABRIC_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY">AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EFSCSI_DRIVER_POLICY">AMAZON_EFSCSI_DRIVER_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS">AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY">AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_FULL_ACCESS">AWSHEALTH_IMAGING_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_READ_ONLY_ACCESS">AWSHEALTH_IMAGING_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS_V2">CLOUD_WATCH_FULL_ACCESS_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY">AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS">AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS">AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS">AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSARTIFACT_SERVICE_ROLE_POLICY">AWSARTIFACT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY">AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2">AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY">AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY">AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZONKEYSPACESREADONLYACCESS_V2">AMAZONKEYSPACESREADONLYACCESS_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY">AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_ACCESS">AMAZON_DATA_ZONE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY">AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY">AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY">AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_USER_ACCESS">AMAZON_DATA_ZONE_FULL_USER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY">AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY">AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS">AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS">AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY">AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS">AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS">AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT">AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY">CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION">PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING">AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY">AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY">AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS">AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS">AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY">AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGIT_SYNC_SERVICE_ROLE_POLICY">AWSGIT_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY">EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY">AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY">COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY">AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY">AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2">AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_FULL_ACCESS">AMAZON_ONE_ENTERPRISE_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS">AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS">AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_Q_FULL_ACCESS">AMAZON_Q_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY">AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY">AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY">AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS">AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_FULL_ACCESS">AWSCLEAN_ROOMS_ML_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.NEPTUNE_GRAPH_READ_ONLY_ACCESS">NEPTUNE_GRAPH_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IVSREAD_ONLY_ACCESS">IVSREAD_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMSKREPLICATOR_EXECUTION_ROLE">AWSMSKREPLICATOR_EXECUTION_ROLE</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_FULL_ACCESS">AMAZON_BEDROCK_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_READ_ONLY">AMAZON_BEDROCK_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS">COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.IVSFULL_ACCESS">IVSFULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_ADMIN_ACCESS">COST_OPTIMIZATION_HUB_ADMIN_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY">CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY">AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSARTIFACT_REPORTS_READ_ONLY_ACCESS">AWSARTIFACT_REPORTS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2">AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES">AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY">AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_METASTORE_MANAGER">AMAZON_SECURITY_LAKE_METASTORE_MANAGER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_MANAGED_CIS_POLICY">AMAZON_INSPECTOR2_MANAGED_CIS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_LEX_REPLICATION_POLICY">AMAZON_LEX_REPLICATION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS">AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY">AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY">AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY">AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY">AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS">AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSEC2_VSS_SNAPSHOT_POLICY">AWSEC2_VSS_SNAPSHOT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY">AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY">AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFARMS">AWSDEADLINECLOUD_USERACCESSFARMS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFLEETS">AWSDEADLINECLOUD_USERACCESSFLEETS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSJOBS">AWSDEADLINECLOUD_USERACCESSJOBS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSQUEUES">AWSDEADLINECLOUD_USERACCESSQUEUES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_FLEETWORKER">AWSDEADLINECLOUD_FLEETWORKER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_WORKERHOST">AWSDEADLINECLOUD_WORKERHOST</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY">SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY">AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY">AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY">AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_AMAZON_Q_DEVELOPER">AWSSERVICE_ROLE_FOR_AMAZON_Q_DEVELOPER</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_USER_SUBSCRIPTIONS">AWSSERVICE_ROLE_FOR_USER_SUBSCRIPTIONS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.QBUSINESS_SERVICE_ROLE_POLICY">QBUSINESS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_PROFILES_READ_ONLY_ACCESS">AMAZON_ROUTE53_PROFILES_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_PROFILES_FULL_ACCESS">AMAZON_ROUTE53_PROFILES_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_DIRECT_QUERY_GLUE_CREATE_ACCESS">AMAZON_OPEN_SEARCH_DIRECT_QUERY_GLUE_CREATE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.EC2_FAST_LAUNCH_FULL_ACCESS">EC2_FAST_LAUNCH_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SES_SERVICE_ROLE_POLICY">AMAZON_SES_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_READ_ONLY_ACCESS">CLOUD_WATCH_APPLICATION_SIGNALS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_FULL_ACCESS">CLOUD_WATCH_APPLICATION_SIGNALS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSBCMDATA_EXPORTS_SERVICE_ROLE_POLICY">AWSBCMDATA_EXPORTS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.OPENSEARCH_INGESTION_SELF_MANAGED_VPCE_POLICY">OPENSEARCH_INGESTION_SELF_MANAGED_VPCE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_WORK_SPACES_POOL_POLICY">AWSAPPLICATION_AUTOSCALING_WORK_SPACES_POOL_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.ECRTEMPLATE_SERVICE_ROLE_POLICY">ECRTEMPLATE_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SECURE_BROWSER_READ_ONLY">AMAZON_WORK_SPACES_SECURE_BROWSER_READ_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.SSMQUICK_SETUP_ROLE_POLICY">SSMQUICK_SETUP_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_BASELINE_ACCESS">AWSQUICK_SETUP_PATCH_POLICY_BASELINE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ENABLE_CONFIG_RECORDING_EXECUTION_POLICY">AWSSYSTEMS_MANAGER_ENABLE_CONFIG_RECORDING_EXECUTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ENABLE_EXPLORER_EXECUTION_POLICY">AWSSYSTEMS_MANAGER_ENABLE_EXPLORER_EXECUTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DEV_OPS_GURU_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_DEV_OPS_GURU_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_PATCH_POLICY_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_SSM_HOST_MGMT_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_SSM_HOST_MGMT_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DISTRIBUTOR_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_DISTRIBUTOR_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_CFGC_PACKS_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_CFGC_PACKS_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_SCHEDULER_PERMISSIONS_BOUNDARY">AWSQUICK_SETUP_SCHEDULER_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DEPLOYMENT_ROLE_POLICY">AWSQUICK_SETUP_DEPLOYMENT_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_DEPLOYMENT_ROLE_POLICY">AWSQUICK_SETUP_PATCH_POLICY_DEPLOYMENT_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_POOL_SERVICE_ACCESS">AMAZON_WORK_SPACES_POOL_SERVICE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_Q_DEVELOPER_ACCESS">AMAZON_Q_DEVELOPER_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.APP_STUDIO_SERVICE_ROLE_POLICY">APP_STUDIO_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_THIN_CLIENT_READ_ONLY_ACCESS">AMAZON_WORK_SPACES_THIN_CLIENT_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_EMR_SERVERLESS_EXECUTION_ROLE_POLICY">AMAZON_SAGE_MAKER_CANVAS_EMR_SERVERLESS_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_STUDIO_PERMISSIONS_BOUNDARY">AMAZON_BEDROCK_STUDIO_PERMISSIONS_BOUNDARY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_THIN_CLIENT_FULL_ACCESS">AMAZON_WORK_SPACES_THIN_CLIENT_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE_V3">AWSCOMPROMISED_KEY_QUARANTINE_V3</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSPCSSERVICE_ROLE_POLICY">AWSPCSSERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_HYPER_POD_SERVICE_ROLE_POLICY">AMAZON_SAGE_MAKER_HYPER_POD_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_DATA_FULL_ACCESS">AWSDIRECTORY_SERVICE_DATA_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_DATA_READ_ONLY_ACCESS">AWSDIRECTORY_SERVICE_DATA_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.QAPPS_SERVICE_ROLE_POLICY">QAPPS_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_WORKER_NODE_MINIMAL_POLICY">AMAZON_EKS_WORKER_NODE_MINIMAL_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_PROCUREMENT_INSIGHTS_POLICY">AWSSERVICE_ROLE_FOR_PROCUREMENT_INSIGHTS_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_PULL_ONLY">AMAZON_E_C2_CONTAINER_REGISTRY_PULL_ONLY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_SYNC_SERVICE_ROLE_POLICY">AWSDATA_SYNC_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_ORGANIZATION_DISCOVERY">AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_ORGANIZATION_DISCOVERY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_LICENSE_MANAGEMENT">AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_LICENSE_MANAGEMENT</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSSOCIAL_MESSAGING_SERVICE_ROLE_POLICY">AWSSOCIAL_MESSAGING_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.RESOURCE_GROUPS_TAGGING_API_TAG_UNTAG_SUPPORTED_RESOURCES">RESOURCE_GROUPS_TAGGING_API_TAG_UNTAG_SUPPORTED_RESOURCES</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VERIFIED_PERMISSIONS_FULL_ACCESS">AMAZON_VERIFIED_PERMISSIONS_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_VERIFIED_PERMISSIONS_READ_ONLY_ACCESS">AMAZON_VERIFIED_PERMISSIONS_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_LAMBDA_APPLICATION_SIGNALS_EXECUTION_ROLE_POLICY">CLOUD_WATCH_LAMBDA_APPLICATION_SIGNALS_EXECUTION_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_FULL_ACCESS">CLOUD_WATCH_INTERNET_MONITOR_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_DATA_GRANT_OWNER_FULL_ACCESS">AWSDATA_EXCHANGE_DATA_GRANT_OWNER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_DATA_GRANT_RECEIVER_FULL_ACCESS">AWSDATA_EXCHANGE_DATA_GRANT_RECEIVER_FULL_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AWSCLOUD_FRONT_VPC_ORIGIN_SERVICE_ROLE_POLICY">AWSCLOUD_FRONT_VPC_ORIGIN_SERVICE_ROLE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_NETWORKING_POLICY">AMAZON_EKS_NETWORKING_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_LOAD_BALANCING_POLICY">AMAZON_EKS_LOAD_BALANCING_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_BLOCK_STORAGE_POLICY">AMAZON_EKS_BLOCK_STORAGE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_EKS_COMPUTE_POLICY">AMAZON_EKS_COMPUTE_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.GAME_LIFT_CONTAINER_FLEET_POLICY">GAME_LIFT_CONTAINER_FLEET_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_BEDROCK_MODEL_MANAGEMENT_POLICY">AMAZON_DATA_ZONE_BEDROCK_MODEL_MANAGEMENT_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_BEDROCK_MODEL_CONSUMPTION_POLICY">AMAZON_DATA_ZONE_BEDROCK_MODEL_CONSUMPTION_POLICY</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_READ_ONLY_ACCESS">CLOUD_WATCH_INTERNET_MONITOR_READ_ONLY_ACCESS</a></code> | *No description.* |
| <code><a href="#cdk-common.AWSManagedPolicies.AMAZON_ODB_SERVICE_ROLE_POLICY">AMAZON_ODB_SERVICE_ROLE_POLICY</a></code> | *No description.* |

---

##### `ADMINISTRATOR_ACCESS` <a name="ADMINISTRATOR_ACCESS" id="cdk-common.AWSManagedPolicies.ADMINISTRATOR_ACCESS"></a>

---


##### `POWER_USER_ACCESS` <a name="POWER_USER_ACCESS" id="cdk-common.AWSManagedPolicies.POWER_USER_ACCESS"></a>

---


##### `READ_ONLY_ACCESS` <a name="READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.READ_ONLY_ACCESS"></a>

---


##### `AWSCLOUD_FORMATION_READ_ONLY_ACCESS` <a name="AWSCLOUD_FORMATION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_FRONT_FULL_ACCESS` <a name="CLOUD_FRONT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_FRONT_FULL_ACCESS"></a>

---


##### `AWSCLOUD_HSM_FULL_ACCESS` <a name="AWSCLOUD_HSM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_FULL_ACCESS"></a>

---


##### `AWSCLOUD_HSM_READ_ONLY_ACCESS` <a name="AWSCLOUD_HSM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_READ_ONLY_ACCESS"></a>

---


##### `RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS` <a name="RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_FULL_ACCESS"></a>

---


##### `RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS` <a name="RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.RESOURCE_GROUPSAND_TAG_EDITOR_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_FRONT_READ_ONLY_ACCESS` <a name="CLOUD_FRONT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_FRONT_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_SEARCH_FULL_ACCESS` <a name="CLOUD_SEARCH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_SEARCH_FULL_ACCESS"></a>

---


##### `CLOUD_SEARCH_READ_ONLY_ACCESS` <a name="CLOUD_SEARCH_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_SEARCH_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_FULL_ACCESS` <a name="CLOUD_WATCH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_LOGS_FULL_ACCESS` <a name="CLOUD_WATCH_LOGS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_LOGS_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_LOGS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_READ_ONLY_ACCESS"></a>

---


##### `AWSDIRECT_CONNECT_FULL_ACCESS` <a name="AWSDIRECT_CONNECT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_FULL_ACCESS"></a>

---


##### `AWSDIRECT_CONNECT_READ_ONLY_ACCESS` <a name="AWSDIRECT_CONNECT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_APP_STREAM_FULL_ACCESS` <a name="AMAZON_APP_STREAM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_FULL_ACCESS"></a>

---


##### `AMAZON_APP_STREAM_READ_ONLY_ACCESS` <a name="AMAZON_APP_STREAM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_DYNAMO_DB_FULL_ACCESS` <a name="AMAZON_DYNAMO_DB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESS"></a>

---


##### `AMAZON_DYNAMO_DB_READ_ONLY_ACCESS` <a name="AMAZON_DYNAMO_DB_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE` <a name="AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE" id="cdk-common.AWSManagedPolicies.AMAZON_DYNAMO_DB_FULL_ACCESSWITH_DATA_PIPELINE"></a>

---


##### `AMAZON_E_C2_FULL_ACCESS` <a name="AMAZON_E_C2_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_FULL_ACCESS"></a>

---


##### `AMAZON_E_C2_READ_ONLY_ACCESS` <a name="AMAZON_E_C2_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ELASTI_CACHE_FULL_ACCESS` <a name="AMAZON_ELASTI_CACHE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_FULL_ACCESS"></a>

---


##### `AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS` <a name="AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTI_CACHE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS` <a name="AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_FULL_ACCESS"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS` <a name="AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_GLACIER_READ_ONLY_ACCESS` <a name="AMAZON_GLACIER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GLACIER_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_GLACIER_FULL_ACCESS` <a name="AMAZON_GLACIER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GLACIER_FULL_ACCESS"></a>

---


##### `AMAZON_KINESIS_FULL_ACCESS` <a name="AMAZON_KINESIS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FULL_ACCESS"></a>

---


##### `AMAZON_KINESIS_READ_ONLY_ACCESS` <a name="AMAZON_KINESIS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_READ_ONLY_ACCESS"></a>

---


##### `AWSMARKETPLACEREAD_ONLY` <a name="AWSMARKETPLACEREAD_ONLY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACEREAD_ONLY"></a>

---


##### `AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS` <a name="AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_MANAGE_SUBSCRIPTIONS"></a>

---


##### `AMAZON_MOBILE_ANALYTICS_FULL_ACCESS` <a name="AMAZON_MOBILE_ANALYTICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FULL_ACCESS"></a>

---


##### `AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS` <a name="AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_FINANCIAL_REPORT_ACCESS"></a>

---


##### `AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS` <a name="AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS" id="cdk-common.AWSManagedPolicies.AMAZONMOBILEANALYTICSNON_FINANCIALREPORTACCESS"></a>

---


##### `AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS` <a name="AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MOBILE_ANALYTICS_WRITE_ONLY_ACCESS"></a>

---


##### `IAMFULL_ACCESS` <a name="IAMFULL_ACCESS" id="cdk-common.AWSManagedPolicies.IAMFULL_ACCESS"></a>

---


##### `IAMREAD_ONLY_ACCESS` <a name="IAMREAD_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.IAMREAD_ONLY_ACCESS"></a>

---


##### `AWSKEY_MANAGEMENT_SERVICE_POWER_USER` <a name="AWSKEY_MANAGEMENT_SERVICE_POWER_USER" id="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_POWER_USER"></a>

---


##### `AMAZON_WORK_MAIL_FULL_ACCESS` <a name="AMAZON_WORK_MAIL_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_FULL_ACCESS"></a>

---


##### `AMAZON_WORK_MAIL_READ_ONLY_ACCESS` <a name="AMAZON_WORK_MAIL_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_READ_ONLY_ACCESS"></a>

---


##### `AWSIMPORT_EXPORT_READ_ONLY_ACCESS` <a name="AWSIMPORT_EXPORT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_READ_ONLY_ACCESS"></a>

---


##### `AWSIMPORT_EXPORT_FULL_ACCESS` <a name="AWSIMPORT_EXPORT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIMPORT_EXPORT_FULL_ACCESS"></a>

---


##### `AWSLAMBDA_EXECUTE` <a name="AWSLAMBDA_EXECUTE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_EXECUTE"></a>

---


##### `AWSLAMBDAINVOCATION_DYNAMODB` <a name="AWSLAMBDAINVOCATION_DYNAMODB" id="cdk-common.AWSManagedPolicies.AWSLAMBDAINVOCATION_DYNAMODB"></a>

---


##### `AMAZON_REDSHIFT_FULL_ACCESS` <a name="AMAZON_REDSHIFT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_FULL_ACCESS"></a>

---


##### `AMAZON_REDSHIFT_READ_ONLY_ACCESS` <a name="AMAZON_REDSHIFT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_RDS_FULL_ACCESS` <a name="AMAZON_RDS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_FULL_ACCESS"></a>

---


##### `AMAZON_RDS_READ_ONLY_ACCESS` <a name="AMAZON_RDS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_FULL_ACCESS` <a name="AMAZON_ROUTE53_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_FULL_ACCESS"></a>

---


##### `AMAZON_ROUTE53_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_DOMAINS_FULL_ACCESS` <a name="AMAZON_ROUTE53_DOMAINS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_FULL_ACCESS"></a>

---


##### `AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_DOMAINS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_S3_FULL_ACCESS` <a name="AMAZON_S3_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_S3_FULL_ACCESS"></a>

---


##### `AMAZON_S3_READ_ONLY_ACCESS` <a name="AMAZON_S3_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_S3_READ_ONLY_ACCESS"></a>

---


##### `SECURITY_AUDIT` <a name="SECURITY_AUDIT" id="cdk-common.AWSManagedPolicies.SECURITY_AUDIT"></a>

---


##### `AMAZON_SES_FULL_ACCESS` <a name="AMAZON_SES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SES_FULL_ACCESS"></a>

---


##### `AMAZON_SES_READ_ONLY_ACCESS` <a name="AMAZON_SES_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SES_READ_ONLY_ACCESS"></a>

---


##### `SIMPLE_WORKFLOW_FULL_ACCESS` <a name="SIMPLE_WORKFLOW_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.SIMPLE_WORKFLOW_FULL_ACCESS"></a>

---


##### `AMAZON_SNS_FULL_ACCESS` <a name="AMAZON_SNS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SNS_FULL_ACCESS"></a>

---


##### `AMAZON_SNS_READ_ONLY_ACCESS` <a name="AMAZON_SNS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SNS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_SQS_FULL_ACCESS` <a name="AMAZON_SQS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SQS_FULL_ACCESS"></a>

---


##### `AMAZON_SQS_READ_ONLY_ACCESS` <a name="AMAZON_SQS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SQS_READ_ONLY_ACCESS"></a>

---


##### `AWSSTORAGE_GATEWAY_FULL_ACCESS` <a name="AWSSTORAGE_GATEWAY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_FULL_ACCESS"></a>

---


##### `AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS` <a name="AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_READ_ONLY_ACCESS"></a>

---


##### `AWSSUPPORT_ACCESS` <a name="AWSSUPPORT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_ACCESS"></a>

---


##### `AWSDIRECTORY_SERVICE_FULL_ACCESS` <a name="AWSDIRECTORY_SERVICE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_FULL_ACCESS"></a>

---


##### `AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS` <a name="AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ZOCALO_FULL_ACCESS` <a name="AMAZON_ZOCALO_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_FULL_ACCESS"></a>

---


##### `AMAZON_ZOCALO_READ_ONLY_ACCESS` <a name="AMAZON_ZOCALO_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ZOCALO_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_VPC_FULL_ACCESS` <a name="AMAZON_VPC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_FULL_ACCESS"></a>

---


##### `AMAZON_VPC_READ_ONLY_ACCESS` <a name="AMAZON_VPC_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_READ_ONLY_ACCESS"></a>

---


##### `AWSACCOUNT_ACTIVITY_ACCESS` <a name="AWSACCOUNT_ACTIVITY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSACCOUNT_ACTIVITY_ACCESS"></a>

---


##### `AWSACCOUNT_USAGE_REPORT_ACCESS` <a name="AWSACCOUNT_USAGE_REPORT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSACCOUNT_USAGE_REPORT_ACCESS"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCE_ROLE` <a name="AMAZON_ELASTIC_MAP_REDUCE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_ROLE"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE` <a name="AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_E_C2_ROLE"></a>

---


##### `AUTO_SCALING_NOTIFICATION_ACCESS_ROLE` <a name="AUTO_SCALING_NOTIFICATION_ACCESS_ROLE" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_NOTIFICATION_ACCESS_ROLE"></a>

---


##### `AWSCLOUD_HSM_ROLE` <a name="AWSCLOUD_HSM_ROLE" id="cdk-common.AWSManagedPolicies.AWSCLOUD_HSM_ROLE"></a>

---


##### `AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE` <a name="AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_DATA_PIPELINE_ROLE"></a>

---


##### `AMAZON_ELASTIC_TRANSCODER_ROLE` <a name="AMAZON_ELASTIC_TRANSCODER_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_TRANSCODER_ROLE"></a>

---


##### `AWSLAMBDA_ROLE` <a name="AWSLAMBDA_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_ROLE"></a>

---


##### `RDSCLOUD_HSM_AUTHORIZATION_ROLE` <a name="RDSCLOUD_HSM_AUTHORIZATION_ROLE" id="cdk-common.AWSManagedPolicies.RDSCLOUD_HSM_AUTHORIZATION_ROLE"></a>

---


##### `AMAZON_SNS_ROLE` <a name="AMAZON_SNS_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_SNS_ROLE"></a>

---


##### `AWSCONNECTOR` <a name="AWSCONNECTOR" id="cdk-common.AWSManagedPolicies.AWSCONNECTOR"></a>

---


##### `AWSMARKETPLACE_FULL_ACCESS` <a name="AWSMARKETPLACE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_FULL_ACCESS"></a>

---


##### `AWSCONFIG_USER_ACCESS` <a name="AWSCONFIG_USER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCONFIG_USER_ACCESS"></a>

---


##### `AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE` <a name="AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICEFOR_E_C2_ROLE"></a>

---


##### `AMAZON_COGNITO_READ_ONLY` <a name="AMAZON_COGNITO_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_READ_ONLY"></a>

---


##### `AMAZON_COGNITO_POWER_USER` <a name="AMAZON_COGNITO_POWER_USER" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_POWER_USER"></a>

---


##### `AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES` <a name="AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_DEVELOPER_AUTHENTICATED_IDENTITIES"></a>

---


##### `AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS` <a name="AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_APPLICATION_MANAGER_ADMIN_ACCESS"></a>

---


##### `AWSLAMBDA_BASIC_EXECUTION_ROLE` <a name="AWSLAMBDA_BASIC_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_BASIC_EXECUTION_ROLE"></a>

---


##### `AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE` <a name="AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_DYNAMO_DB_EXECUTION_ROLE"></a>

---


##### `AWSLAMBDA_KINESIS_EXECUTION_ROLE` <a name="AWSLAMBDA_KINESIS_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_KINESIS_EXECUTION_ROLE"></a>

---


##### `AMAZON_E_C2_CONTAINER_SERVICE_ROLE` <a name="AMAZON_E_C2_CONTAINER_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_ROLE"></a>

---


##### `AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS` <a name="AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_BATCH_PREDICTIONS_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS` <a name="AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_CREATE_ONLY_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_FULL_ACCESS` <a name="AMAZON_MACHINE_LEARNING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_FULL_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS` <a name="AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_MANAGE_REAL_TIME_ENDPOINT_ONLY_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS` <a name="AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS` <a name="AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_REAL_TIME_PREDICTION_ONLY_ACCESS"></a>

---


##### `AWSCODE_DEPLOY_ROLE` <a name="AWSCODE_DEPLOY_ROLE" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE"></a>

---


##### `AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY` <a name="AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY"></a>

---


##### `AWSCODE_DEPLOY_FULL_ACCESS` <a name="AWSCODE_DEPLOY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_FULL_ACCESS"></a>

---


##### `AWSCODE_DEPLOY_DEPLOYER_ACCESS` <a name="AWSCODE_DEPLOY_DEPLOYER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_DEPLOYER_ACCESS"></a>

---


##### `AWSCODE_DEPLOY_READ_ONLY_ACCESS` <a name="AWSCODE_DEPLOY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS` <a name="AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_FULL_ACCESS"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS` <a name="AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_SSM_FULL_ACCESS` <a name="AMAZON_SSM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_FULL_ACCESS"></a>

---


##### `AMAZON_SSM_READ_ONLY_ACCESS` <a name="AMAZON_SSM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_E_C2_ROLEFOR_SS_M` <a name="AMAZON_E_C2_ROLEFOR_SS_M" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_SS_M"></a>

---


##### `CLOUD_WATCH_ACTIONS_E_C2_ACCESS` <a name="CLOUD_WATCH_ACTIONS_E_C2_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_ACTIONS_E_C2_ACCESS"></a>

---


##### `AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS` <a name="AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_CUSTOM_ACTION_ACCESS"></a>

---


##### `AWSCODE_COMMIT_FULL_ACCESS` <a name="AWSCODE_COMMIT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_FULL_ACCESS"></a>

---


##### `AWSCODE_COMMIT_READ_ONLY` <a name="AWSCODE_COMMIT_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_READ_ONLY"></a>

---


##### `AWSCODE_COMMIT_POWER_USER` <a name="AWSCODE_COMMIT_POWER_USER" id="cdk-common.AWSManagedPolicies.AWSCODE_COMMIT_POWER_USER"></a>

---


##### `IAMUSER_SSH_KEYS` <a name="IAMUSER_SSH_KEYS" id="cdk-common.AWSManagedPolicies.IAMUSER_SSH_KEYS"></a>

---


##### `AMAZON_API_GATEWAY_ADMINISTRATOR` <a name="AMAZON_API_GATEWAY_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_ADMINISTRATOR"></a>

---


##### `AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS` <a name="AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_INVOKE_FULL_ACCESS"></a>

---


##### `AWSDEVICE_FARM_FULL_ACCESS` <a name="AWSDEVICE_FARM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_FULL_ACCESS"></a>

---


##### `AMAZON_DRSVPC_MANAGEMENT` <a name="AMAZON_DRSVPC_MANAGEMENT" id="cdk-common.AWSManagedPolicies.AMAZON_DRSVPC_MANAGEMENT"></a>

---


##### `VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR` <a name="VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR" id="cdk-common.AWSManagedPolicies.VMIMPORT_EXPORT_ROLE_FOR_AWS_CONNECTOR"></a>

---


##### `AMAZON_WORK_SPACES_ADMIN` <a name="AMAZON_WORK_SPACES_ADMIN" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_ADMIN"></a>

---


##### `AMAZON_ES_FULL_ACCESS` <a name="AMAZON_ES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ES_FULL_ACCESS"></a>

---


##### `AMAZON_ES_READ_ONLY_ACCESS` <a name="AMAZON_ES_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ES_READ_ONLY_ACCESS"></a>

---


##### `AWSWAFREAD_ONLY_ACCESS` <a name="AWSWAFREAD_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSWAFREAD_ONLY_ACCESS"></a>

---


##### `AWSWAFFULL_ACCESS` <a name="AWSWAFFULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSWAFFULL_ACCESS"></a>

---


##### `AMAZON_INSPECTOR_READ_ONLY_ACCESS` <a name="AMAZON_INSPECTOR_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_INSPECTOR_FULL_ACCESS` <a name="AMAZON_INSPECTOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_FULL_ACCESS"></a>

---


##### `AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS` <a name="AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_KINESIS_FIREHOSE_FULL_ACCESS` <a name="AMAZON_KINESIS_FIREHOSE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_FIREHOSE_FULL_ACCESS"></a>

---


##### `AWSIO_T_RULE_ACTIONS` <a name="AWSIO_T_RULE_ACTIONS" id="cdk-common.AWSManagedPolicies.AWSIO_T_RULE_ACTIONS"></a>

---


##### `AWSIO_T_LOGGING` <a name="AWSIO_T_LOGGING" id="cdk-common.AWSManagedPolicies.AWSIO_T_LOGGING"></a>

---


##### `AWSIO_T_FULL_ACCESS` <a name="AWSIO_T_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_FULL_ACCESS"></a>

---


##### `AWSIO_T_DATA_ACCESS` <a name="AWSIO_T_DATA_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_DATA_ACCESS"></a>

---


##### `AWSIO_T_CONFIG_ACCESS` <a name="AWSIO_T_CONFIG_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_ACCESS"></a>

---


##### `AWSIO_T_CONFIG_READ_ONLY_ACCESS` <a name="AWSIO_T_CONFIG_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_CONFIG_READ_ONLY_ACCESS"></a>

---


##### `AWSQUICK_SIGHT_DESCRIBE_RD_S` <a name="AWSQUICK_SIGHT_DESCRIBE_RD_S" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_RD_S"></a>

---


##### `AWSQUICK_SIGHT_DESCRIBE_REDSHIFT` <a name="AWSQUICK_SIGHT_DESCRIBE_REDSHIFT" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_DESCRIBE_REDSHIFT"></a>

---


##### `AWSQUICK_SIGHT_LIST_IA_M` <a name="AWSQUICK_SIGHT_LIST_IA_M" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_LIST_IA_M"></a>

---


##### `AMAZON_RDS_ENHANCED_MONITORING_ROLE` <a name="AMAZON_RDS_ENHANCED_MONITORING_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_ENHANCED_MONITORING_ROLE"></a>

---


##### `AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS` <a name="AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS" id="cdk-common.AWSManagedPolicies.AMAZON_API_GATEWAY_PUSH_TO_CLOUD_WATCH_LOGS"></a>

---


##### `AMAZON_DMSVPC_MANAGEMENT_ROLE` <a name="AMAZON_DMSVPC_MANAGEMENT_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_DMSVPC_MANAGEMENT_ROLE"></a>

---


##### `AMAZON_MECHANICAL_TURK_FULL_ACCESS` <a name="AMAZON_MECHANICAL_TURK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_FULL_ACCESS"></a>

---


##### `AMAZON_MECHANICAL_TURK_READ_ONLY` <a name="AMAZON_MECHANICAL_TURK_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_MECHANICAL_TURK_READ_ONLY"></a>

---


##### `AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY` <a name="AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_READ_ONLY"></a>

---


##### `AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER` <a name="AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_POWER_USER"></a>

---


##### `AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS` <a name="AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_FULL_ACCESS"></a>

---


##### `AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE` <a name="AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_DMS_CLOUD_WATCH_LOGS_ROLE"></a>

---


##### `CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS` <a name="CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_BUILT_IN_TARGET_EXECUTION_ACCESS"></a>

---


##### `CLOUD_WATCH_EVENTS_INVOCATION_ACCESS` <a name="CLOUD_WATCH_EVENTS_INVOCATION_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_INVOCATION_ACCESS"></a>

---


##### `CLOUD_WATCH_EVENTS_FULL_ACCESS` <a name="CLOUD_WATCH_EVENTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_FULL_ACCESS"></a>

---


##### `AWSCERTIFICATE_MANAGER_FULL_ACCESS` <a name="AWSCERTIFICATE_MANAGER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_FULL_ACCESS"></a>

---


##### `AWSCERTIFICATE_MANAGER_READ_ONLY` <a name="AWSCERTIFICATE_MANAGER_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_READ_ONLY"></a>

---


##### `AWSELASTIC_BEANSTALK_WEB_TIER` <a name="AWSELASTIC_BEANSTALK_WEB_TIER" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WEB_TIER"></a>

---


##### `AWSELASTIC_BEANSTALK_WORKER_TIER` <a name="AWSELASTIC_BEANSTALK_WORKER_TIER" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_WORKER_TIER"></a>

---


##### `AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER` <a name="AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MULTICONTAINER_DOCKER"></a>

---


##### `AWSELASTIC_BEANSTALK_ENHANCED_HEALTH` <a name="AWSELASTIC_BEANSTALK_ENHANCED_HEALTH" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ENHANCED_HEALTH"></a>

---


##### `AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE` <a name="AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_VPC_ACCESS_EXECUTION_ROLE"></a>

---


##### `AMAZON_RDS_DIRECTORY_SERVICE_ACCESS` <a name="AMAZON_RDS_DIRECTORY_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_DIRECTORY_SERVICE_ACCESS"></a>

---


##### `AWSMARKETPLACE_METERING_FULL_ACCESS` <a name="AWSMARKETPLACE_METERING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_FULL_ACCESS"></a>

---


##### `AWSCONFIG_RULES_EXECUTION_ROLE` <a name="AWSCONFIG_RULES_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSCONFIG_RULES_EXECUTION_ROLE"></a>

---


##### `AWSELASTIC_BEANSTALK_SERVICE` <a name="AWSELASTIC_BEANSTALK_SERVICE" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE"></a>

---


##### `AMAZON_DMS_REDSHIFT_S3_ROLE` <a name="AMAZON_DMS_REDSHIFT_S3_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_DMS_REDSHIFT_S3_ROLE"></a>

---


##### `AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS` <a name="AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_SERVICE_FULL_ACCESS"></a>

---


##### `AWSAPPLICATION_DISCOVERY_AGENT_ACCESS` <a name="AWSAPPLICATION_DISCOVERY_AGENT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENT_ACCESS"></a>

---


##### `AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE` <a name="AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_AUTOSCALE_ROLE"></a>

---


##### `AWSOPS_WORKS_INSTANCE_REGISTRATION` <a name="AWSOPS_WORKS_INSTANCE_REGISTRATION" id="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_INSTANCE_REGISTRATION"></a>

---


##### `AWSCODE_PIPELINE_APPROVER_ACCESS` <a name="AWSCODE_PIPELINE_APPROVER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_PIPELINE_APPROVER_ACCESS"></a>

---


##### `AWSAGENTLESS_DISCOVERY_SERVICE` <a name="AWSAGENTLESS_DISCOVERY_SERVICE" id="cdk-common.AWSManagedPolicies.AWSAGENTLESS_DISCOVERY_SERVICE"></a>

---


##### `AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE` <a name="AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_AUTOSCALE_ROLE"></a>

---


##### `AMAZON_KINESIS_ANALYTICS_READ_ONLY` <a name="AMAZON_KINESIS_ANALYTICS_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_READ_ONLY"></a>

---


##### `AMAZON_KINESIS_ANALYTICS_FULL_ACCESS` <a name="AMAZON_KINESIS_ANALYTICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_ANALYTICS_FULL_ACCESS"></a>

---


##### `SERVER_MIGRATION_CONNECTOR` <a name="SERVER_MIGRATION_CONNECTOR" id="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_CONNECTOR"></a>

---


##### `VIEW_ONLY_ACCESS` <a name="VIEW_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.VIEW_ONLY_ACCESS"></a>

---


##### `SUPPORT_USER` <a name="SUPPORT_USER" id="cdk-common.AWSManagedPolicies.SUPPORT_USER"></a>

---


##### `SYSTEM_ADMINISTRATOR` <a name="SYSTEM_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.SYSTEM_ADMINISTRATOR"></a>

---


##### `DATABASE_ADMINISTRATOR` <a name="DATABASE_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.DATABASE_ADMINISTRATOR"></a>

---


##### `DATA_SCIENTIST` <a name="DATA_SCIENTIST" id="cdk-common.AWSManagedPolicies.DATA_SCIENTIST"></a>

---


##### `NETWORK_ADMINISTRATOR` <a name="NETWORK_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.NETWORK_ADMINISTRATOR"></a>

---


##### `BILLING` <a name="BILLING" id="cdk-common.AWSManagedPolicies.BILLING"></a>

---


##### `IAMUSER_CHANGE_PASSWORD` <a name="IAMUSER_CHANGE_PASSWORD" id="cdk-common.AWSManagedPolicies.IAMUSER_CHANGE_PASSWORD"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE` <a name="AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCEFOR_AUTO_SCALING_ROLE"></a>

---


##### `AMAZON_APP_STREAM_SERVICE_ACCESS` <a name="AMAZON_APP_STREAM_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_SERVICE_ACCESS"></a>

---


##### `AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE` <a name="AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE" id="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_INSTANCE_PROFILE_ROLE"></a>

---


##### `AWSOPS_WORKS_CM_SERVICE_ROLE` <a name="AWSOPS_WORKS_CM_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CM_SERVICE_ROLE"></a>

---


##### `AMAZON_REKOGNITION_FULL_ACCESS` <a name="AMAZON_REKOGNITION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_FULL_ACCESS"></a>

---


##### `AMAZON_REKOGNITION_READ_ONLY_ACCESS` <a name="AMAZON_REKOGNITION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ATHENA_FULL_ACCESS` <a name="AMAZON_ATHENA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ATHENA_FULL_ACCESS"></a>

---


##### `AMAZON_POLLY_FULL_ACCESS` <a name="AMAZON_POLLY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_POLLY_FULL_ACCESS"></a>

---


##### `AMAZON_POLLY_READ_ONLY_ACCESS` <a name="AMAZON_POLLY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_POLLY_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_SSM_MAINTENANCE_WINDOW_ROLE` <a name="AMAZON_SSM_MAINTENANCE_WINDOW_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_MAINTENANCE_WINDOW_ROLE"></a>

---


##### `AWSXRAY_WRITE_ONLY_ACCESS` <a name="AWSXRAY_WRITE_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSXRAY_WRITE_ONLY_ACCESS"></a>

---


##### `AWSXRAY_READ_ONLY_ACCESS` <a name="AWSXRAY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSXRAY_READ_ONLY_ACCESS"></a>

---


##### `AWSXRAY_FULL_ACCESS` <a name="AWSXRAY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSXRAY_FULL_ACCESS"></a>

---


##### `AWSCODE_BUILD_DEVELOPER_ACCESS` <a name="AWSCODE_BUILD_DEVELOPER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_DEVELOPER_ACCESS"></a>

---


##### `AWSCODE_BUILD_READ_ONLY_ACCESS` <a name="AWSCODE_BUILD_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_READ_ONLY_ACCESS"></a>

---


##### `AWSCODE_BUILD_ADMIN_ACCESS` <a name="AWSCODE_BUILD_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_BUILD_ADMIN_ACCESS"></a>

---


##### `AMAZON_SSM_AUTOMATION_ROLE` <a name="AMAZON_SSM_AUTOMATION_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_ROLE"></a>

---


##### `AWSLAMBDA_ENI_MANAGEMENT_ACCESS` <a name="AWSLAMBDA_ENI_MANAGEMENT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_ENI_MANAGEMENT_ACCESS"></a>

---


##### `AWSHEALTH_FULL_ACCESS` <a name="AWSHEALTH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSHEALTH_FULL_ACCESS"></a>

---


##### `AWSBATCH_FULL_ACCESS` <a name="AWSBATCH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBATCH_FULL_ACCESS"></a>

---


##### `AWSBATCH_SERVICE_ROLE` <a name="AWSBATCH_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_ROLE"></a>

---


##### `AWSQUICKSIGHT_ATHENA_ACCESS` <a name="AWSQUICKSIGHT_ATHENA_ACCESS" id="cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_ATHENA_ACCESS"></a>

---


##### `IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS` <a name="IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS" id="cdk-common.AWSManagedPolicies.IAMSELF_MANAGE_SERVICE_SPECIFIC_CREDENTIALS"></a>

---


##### `AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS` <a name="AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_READ_ONLY_ACCESS"></a>

---


##### `AWSSTEP_FUNCTIONS_FULL_ACCESS` <a name="AWSSTEP_FUNCTIONS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_FULL_ACCESS"></a>

---


##### `AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS` <a name="AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSTEP_FUNCTIONS_CONSOLE_FULL_ACCESS"></a>

---


##### `AUTO_SCALING_FULL_ACCESS` <a name="AUTO_SCALING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_FULL_ACCESS"></a>

---


##### `AUTO_SCALING_READ_ONLY_ACCESS` <a name="AUTO_SCALING_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_READ_ONLY_ACCESS"></a>

---


##### `AUTO_SCALING_CONSOLE_FULL_ACCESS` <a name="AUTO_SCALING_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_FULL_ACCESS"></a>

---


##### `AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS` <a name="AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AWSDATAPIPELINE_FULLACCESS` <a name="AWSDATAPIPELINE_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_FULLACCESS"></a>

---


##### `AWSDATAPIPELINE_POWERUSER` <a name="AWSDATAPIPELINE_POWERUSER" id="cdk-common.AWSManagedPolicies.AWSDATAPIPELINE_POWERUSER"></a>

---


##### `APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS` <a name="APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS" id="cdk-common.AWSManagedPolicies.APPLICATION_AUTO_SCALING_FOR_AMAZON_APP_STREAM_ACCESS"></a>

---


##### `AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY` <a name="AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSGREENGRASS_RESOURCE_ACCESS_ROLE_POLICY"></a>

---


##### `AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE` <a name="AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_CUSTOM_PLATFORMFOR_E_C2_ROLE"></a>

---


##### `AMAZON_CLOUD_DIRECTORY_FULL_ACCESS` <a name="AMAZON_CLOUD_DIRECTORY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_FULL_ACCESS"></a>

---


##### `AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS` <a name="AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_DIRECTORY_READ_ONLY_ACCESS"></a>

---


##### `AWSMARKETPLACE_GET_ENTITLEMENTS` <a name="AWSMARKETPLACE_GET_ENTITLEMENTS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_GET_ENTITLEMENTS"></a>

---


##### `AWSOPS_WORKS_CLOUD_WATCH_LOGS` <a name="AWSOPS_WORKS_CLOUD_WATCH_LOGS" id="cdk-common.AWSManagedPolicies.AWSOPS_WORKS_CLOUD_WATCH_LOGS"></a>

---


##### `AMAZON_LEX_RUN_BOTS_ONLY` <a name="AMAZON_LEX_RUN_BOTS_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_RUN_BOTS_ONLY"></a>

---


##### `AMAZON_LEX_READ_ONLY` <a name="AMAZON_LEX_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_READ_ONLY"></a>

---


##### `AMAZON_LEX_FULL_ACCESS` <a name="AMAZON_LEX_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_FULL_ACCESS"></a>

---


##### `AWSCODE_STAR_SERVICE_ROLE` <a name="AWSCODE_STAR_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSCODE_STAR_SERVICE_ROLE"></a>

---


##### `AWSCODE_STAR_FULL_ACCESS` <a name="AWSCODE_STAR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_STAR_FULL_ACCESS"></a>

---


##### `AWSGREENGRASS_FULL_ACCESS` <a name="AWSGREENGRASS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGREENGRASS_FULL_ACCESS"></a>

---


##### `AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE` <a name="AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_SERVICE_EVENTS_ROLE"></a>

---


##### `QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY` <a name="QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY" id="cdk-common.AWSManagedPolicies.QUICK_SIGHT_ACCESS_FOR_S3_STORAGE_MANAGEMENT_ANALYTICS_READ_ONLY"></a>

---


##### `AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE` <a name="AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_SPOT_FLEET_TAGGING_ROLE"></a>

---


##### `AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY` <a name="AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTICSEARCH_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS` <a name="AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_CROSS_ACCOUNT_NETWORK_INTERFACE_OPERATIONS"></a>

---


##### `AMAZON_SSM_AUTOMATION_APPROVER_ACCESS` <a name="AMAZON_SSM_AUTOMATION_APPROVER_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_AUTOMATION_APPROVER_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_DISCOVERY_ACCESS` <a name="AWSMIGRATION_HUB_DISCOVERY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DISCOVERY_ACCESS"></a>

---


##### `AWSGLUE_SERVICE_ROLE` <a name="AWSGLUE_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_ROLE"></a>

---


##### `AWSGLUE_CONSOLE_FULL_ACCESS` <a name="AWSGLUE_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSGLUE_SERVICE_NOTEBOOK_ROLE` <a name="AWSGLUE_SERVICE_NOTEBOOK_ROLE" id="cdk-common.AWSManagedPolicies.AWSGLUE_SERVICE_NOTEBOOK_ROLE"></a>

---


##### `AWSMIGRATION_HUB_SMS_ACCESS` <a name="AWSMIGRATION_HUB_SMS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_SMS_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_DMS_ACCESS` <a name="AWSMIGRATION_HUB_DMS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_DMS_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_FULL_ACCESS` <a name="AWSMIGRATION_HUB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_FULL_ACCESS"></a>

---


##### `AMAZON_MACIE_SERVICE_ROLE` <a name="AMAZON_MACIE_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE"></a>

---


##### `AMAZON_MACIE_FULL_ACCESS` <a name="AMAZON_MACIE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACIE_FULL_ACCESS"></a>

---


##### `AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY` <a name="AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_SERVICE_ROLE_POLICY"></a>

---


##### `AWSEC2_SPOT_SERVICE_ROLE_POLICY` <a name="AWSEC2_SPOT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSEC2_SPOT_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY` <a name="AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY` <a name="AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_LOAD_BALANCING_CLASSIC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY` <a name="AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY" id="cdk-common.AWSManagedPolicies.AWSENHANCED_CLASSIC_NETWORKING_MANGEMENT_POLICY"></a>

---


##### `AMAZON_EMR_CLEANUP_POLICY` <a name="AMAZON_EMR_CLEANUP_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EMR_CLEANUP_POLICY"></a>

---


##### `LEX_CHANNEL_POLICY` <a name="LEX_CHANNEL_POLICY" id="cdk-common.AWSManagedPolicies.LEX_CHANNEL_POLICY"></a>

---


##### `LEX_BOT_POLICY` <a name="LEX_BOT_POLICY" id="cdk-common.AWSManagedPolicies.LEX_BOT_POLICY"></a>

---


##### `AWSLAMBDA_REPLICATOR` <a name="AWSLAMBDA_REPLICATOR" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_REPLICATOR"></a>

---


##### `AWSORGANIZATIONS_SERVICE_TRUST_POLICY` <a name="AWSORGANIZATIONS_SERVICE_TRUST_POLICY" id="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_SERVICE_TRUST_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES` <a name="AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_E_C2_SCHEDULED_INSTANCES"></a>

---


##### `AMAZON_ECS_SERVICE_ROLE_POLICY` <a name="AMAZON_ECS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ECS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_RDS_CLUSTER_POLICY"></a>

---


##### `APIGATEWAY_SERVICE_ROLE_POLICY` <a name="APIGATEWAY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APIGATEWAY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_APP_STREAM_FLEET_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_DYNAMO_DB_TABLE_POLICY"></a>

---


##### `AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY` <a name="AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSEC2_SPOT_FLEET_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_E_C2_SPOT_FLEET_REQUEST_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ECS_SERVICE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_EMR_INSTANCE_GROUP_POLICY"></a>

---


##### `AMAZON_CHIME_READ_ONLY` <a name="AMAZON_CHIME_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_READ_ONLY"></a>

---


##### `AMAZON_CHIME_FULL_ACCESS` <a name="AMAZON_CHIME_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_FULL_ACCESS"></a>

---


##### `AMAZON_CHIME_USER_MANAGEMENT` <a name="AMAZON_CHIME_USER_MANAGEMENT" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_USER_MANAGEMENT"></a>

---


##### `CLOUD_HSM_SERVICE_ROLE_POLICY` <a name="CLOUD_HSM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_HSM_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZONECS_FULLACCESS` <a name="AMAZONECS_FULLACCESS" id="cdk-common.AWSManagedPolicies.AMAZONECS_FULLACCESS"></a>

---


##### `DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY` <a name="DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.DYNAMO_DB_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SSM_SERVICE_ROLE_POLICY` <a name="AMAZON_SSM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY` <a name="AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ECS_TASK_EXECUTION_ROLE_POLICY"></a>

---


##### `CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY` <a name="CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_EVENTS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_INSPECTOR_SERVICE_ROLE_POLICY` <a name="AMAZON_INSPECTOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR_SERVICE_ROLE_POLICY"></a>

---


##### `AWSPRICE_LIST_SERVICE_FULL_ACCESS` <a name="AWSPRICE_LIST_SERVICE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPRICE_LIST_SERVICE_FULL_ACCESS"></a>

---


##### `AWSCODE_DEPLOY_ROLE_FOR_LAMBDA` <a name="AWSCODE_DEPLOY_ROLE_FOR_LAMBDA" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA"></a>

---


##### `AMAZON_MQ_FULL_ACCESS` <a name="AMAZON_MQ_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MQ_FULL_ACCESS"></a>

---


##### `AMAZON_MQ_READ_ONLY_ACCESS` <a name="AMAZON_MQ_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MQ_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY` <a name="AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_GUARD_DUTY_READ_ONLY_ACCESS` <a name="AMAZON_GUARD_DUTY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_GUARD_DUTY_FULL_ACCESS` <a name="AMAZON_GUARD_DUTY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_FULL_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_READ_ONLY` <a name="AMAZON_SAGE_MAKER_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_READ_ONLY"></a>

---


##### `AMAZON_SAGE_MAKER_FULL_ACCESS` <a name="AMAZON_SAGE_MAKER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FULL_ACCESS"></a>

---


##### `AMAZON_FREE_RTOS_FULL_ACCESS` <a name="AMAZON_FREE_RTOS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOS_FULL_ACCESS"></a>

---


##### `AWSDEEP_LENS_SERVICE_ROLE_POLICY` <a name="AWSDEEP_LENS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEEP_LENS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY` <a name="AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEEP_LENS_LAMBDA_FUNCTION_ACCESS_POLICY"></a>

---


##### `AMAZON_REKOGNITION_SERVICE_ROLE` <a name="AMAZON_REKOGNITION_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_SERVICE_ROLE"></a>

---


##### `AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS` <a name="AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_IO_T_ANALYTICS_ACCESS"></a>

---


##### `COMPREHEND_FULL_ACCESS` <a name="COMPREHEND_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.COMPREHEND_FULL_ACCESS"></a>

---


##### `COMPREHEND_READ_ONLY` <a name="COMPREHEND_READ_ONLY" id="cdk-common.AWSManagedPolicies.COMPREHEND_READ_ONLY"></a>

---


##### `GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS` <a name="GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS" id="cdk-common.AWSManagedPolicies.GREENGRASS_OTA_UPDATE_ARTIFACT_ACCESS"></a>

---


##### `TRANSLATE_READ_ONLY` <a name="TRANSLATE_READ_ONLY" id="cdk-common.AWSManagedPolicies.TRANSLATE_READ_ONLY"></a>

---


##### `AWSCLOUD9_SERVICE_ROLE_POLICY` <a name="AWSCLOUD9_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCLOUD9_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCLOUD9_USER` <a name="AWSCLOUD9_USER" id="cdk-common.AWSManagedPolicies.AWSCLOUD9_USER"></a>

---


##### `AWSCLOUD9_ADMINISTRATOR` <a name="AWSCLOUD9_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSCLOUD9_ADMINISTRATOR"></a>

---


##### `AWSCLOUD9_ENVIRONMENT_MEMBER` <a name="AWSCLOUD9_ENVIRONMENT_MEMBER" id="cdk-common.AWSManagedPolicies.AWSCLOUD9_ENVIRONMENT_MEMBER"></a>

---


##### `ALEXA_FOR_BUSINESS_FULL_ACCESS` <a name="ALEXA_FOR_BUSINESS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_FULL_ACCESS"></a>

---


##### `ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS` <a name="ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_READ_ONLY_ACCESS"></a>

---


##### `ALEXA_FOR_BUSINESS_DEVICE_SETUP` <a name="ALEXA_FOR_BUSINESS_DEVICE_SETUP" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_DEVICE_SETUP"></a>

---


##### `ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION` <a name="ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_GATEWAY_EXECUTION"></a>

---


##### `AWSIO_T_THINGS_REGISTRATION` <a name="AWSIO_T_THINGS_REGISTRATION" id="cdk-common.AWSManagedPolicies.AWSIO_T_THINGS_REGISTRATION"></a>

---


##### `AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS` <a name="AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS` <a name="AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KINESIS_VIDEO_STREAMS_FULL_ACCESS"></a>

---


##### `AWSSSOSERVICE_ROLE_POLICY` <a name="AWSSSOSERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSSOSERVICE_ROLE_POLICY"></a>

---


##### `ELASTI_CACHE_SERVICE_ROLE_POLICY` <a name="ELASTI_CACHE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ELASTI_CACHE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSIO_TOTA_UPDATE` <a name="AWSIO_TOTA_UPDATE" id="cdk-common.AWSManagedPolicies.AWSIO_TOTA_UPDATE"></a>

---


##### `AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_FULL_ACCESS"></a>

---


##### `AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_READ_ONLY"></a>

---


##### `AMAZON_RDS_SERVICE_ROLE_POLICY` <a name="AMAZON_RDS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_SERVICE_ROLE_POLICY"></a>

---


##### `AUTO_SCALING_SERVICE_ROLE_POLICY` <a name="AUTO_SCALING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AUTO_SCALING_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS` <a name="AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_FULL_ACCESS"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_SAGE_MAKER_ENDPOINT_POLICY"></a>

---


##### `AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS` <a name="AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_FULL_ACCESS"></a>

---


##### `AWSSERVICE_CATALOG_END_USER_FULL_ACCESS` <a name="AWSSERVICE_CATALOG_END_USER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_FULL_ACCESS"></a>

---


##### `AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY` <a name="AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ES_COGNITO_ACCESS` <a name="AMAZON_ES_COGNITO_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ES_COGNITO_ACCESS"></a>

---


##### `AWSBATCH_SERVICE_EVENT_TARGET_ROLE` <a name="AWSBATCH_SERVICE_EVENT_TARGET_ROLE" id="cdk-common.AWSManagedPolicies.AWSBATCH_SERVICE_EVENT_TARGET_ROLE"></a>

---


##### `DAXSERVICE_ROLE_POLICY` <a name="DAXSERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.DAXSERVICE_ROLE_POLICY"></a>

---


##### `AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_AGENT_ADMIN_POLICY` <a name="CLOUD_WATCH_AGENT_ADMIN_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_ADMIN_POLICY"></a>

---


##### `CLOUD_WATCH_AGENT_SERVER_POLICY` <a name="CLOUD_WATCH_AGENT_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AGENT_SERVER_POLICY"></a>

---


##### `AWSRESOURCE_GROUPS_READ_ONLY_ACCESS` <a name="AWSRESOURCE_GROUPS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_GROUPS_READ_ONLY_ACCESS"></a>

---


##### `AWSELEMENTAL_MEDIA_STORE_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_STORE_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_STORE_READ_ONLY"></a>

---


##### `AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS` <a name="AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_AUTO_NAMING_REGISTRANT_ACCESS"></a>

---


##### `AWSCONFIG_ROLE_FOR_ORGANIZATIONS` <a name="AWSCONFIG_ROLE_FOR_ORGANIZATIONS" id="cdk-common.AWSManagedPolicies.AWSCONFIG_ROLE_FOR_ORGANIZATIONS"></a>

---


##### `AWSAPP_SYNC_ADMINISTRATOR` <a name="AWSAPP_SYNC_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_ADMINISTRATOR"></a>

---


##### `AWSAPP_SYNC_SCHEMA_AUTHOR` <a name="AWSAPP_SYNC_SCHEMA_AUTHOR" id="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SCHEMA_AUTHOR"></a>

---


##### `AWSAPP_SYNC_INVOKE_FULL_ACCESS` <a name="AWSAPP_SYNC_INVOKE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_INVOKE_FULL_ACCESS"></a>

---


##### `AWSEC2_FLEET_SERVICE_ROLE_POLICY` <a name="AWSEC2_FLEET_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSEC2_FLEET_SERVICE_ROLE_POLICY"></a>

---


##### `FMSSERVICE_ROLE_POLICY` <a name="FMSSERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.FMSSERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_TRANSCRIBE_READ_ONLY_ACCESS` <a name="AMAZON_TRANSCRIBE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_TRANSCRIBE_FULL_ACCESS` <a name="AMAZON_TRANSCRIBE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TRANSCRIBE_FULL_ACCESS"></a>

---


##### `SECRETS_MANAGER_READ_WRITE` <a name="SECRETS_MANAGER_READ_WRITE" id="cdk-common.AWSManagedPolicies.SECRETS_MANAGER_READ_WRITE"></a>

---


##### `AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS` <a name="AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS" id="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_PUSH_TO_CLOUD_WATCH_LOGS"></a>

---


##### `AWSARTIFACT_ACCOUNT_SYNC` <a name="AWSARTIFACT_ACCOUNT_SYNC" id="cdk-common.AWSManagedPolicies.AWSARTIFACT_ACCOUNT_SYNC"></a>

---


##### `AMAZONELASTICTRANSCODER_FULLACCESS` <a name="AMAZONELASTICTRANSCODER_FULLACCESS" id="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_FULLACCESS"></a>

---


##### `AMAZON_RDS_BETA_SERVICE_ROLE_POLICY` <a name="AMAZON_RDS_BETA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_BETA_SERVICE_ROLE_POLICY"></a>

---


##### `AWSFMADMIN_FULL_ACCESS` <a name="AWSFMADMIN_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFMADMIN_FULL_ACCESS"></a>

---


##### `AWSFMADMIN_READ_ONLY_ACCESS` <a name="AWSFMADMIN_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFMADMIN_READ_ONLY_ACCESS"></a>

---


##### `AWSFMMEMBER_READ_ONLY_ACCESS` <a name="AWSFMMEMBER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFMMEMBER_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T1_CLICK_READ_ONLY_ACCESS` <a name="AWSIO_T1_CLICK_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T1_CLICK_FULL_ACCESS` <a name="AWSIO_T1_CLICK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T1_CLICK_FULL_ACCESS"></a>

---


##### `AMAZON_EKS_CLUSTER_POLICY` <a name="AMAZON_EKS_CLUSTER_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_CLUSTER_POLICY"></a>

---


##### `AMAZONEKS_CNI_POLICY` <a name="AMAZONEKS_CNI_POLICY" id="cdk-common.AWSManagedPolicies.AMAZONEKS_CNI_POLICY"></a>

---


##### `AMAZON_EKS_SERVICE_POLICY` <a name="AMAZON_EKS_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_POLICY"></a>

---


##### `AMAZON_EKS_WORKER_NODE_POLICY` <a name="AMAZON_EKS_WORKER_NODE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_WORKER_NODE_POLICY"></a>

---


##### `NEPTUNE_READ_ONLY_ACCESS` <a name="NEPTUNE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.NEPTUNE_READ_ONLY_ACCESS"></a>

---


##### `NEPTUNE_FULL_ACCESS` <a name="NEPTUNE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.NEPTUNE_FULL_ACCESS"></a>

---


##### `AWSCONFIG_SERVICE_ROLE_POLICY` <a name="AWSCONFIG_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCONFIG_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY` <a name="AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY` <a name="AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTO_SCALING_CUSTOM_RESOURCE_POLICY"></a>

---


##### `AWSSHIELD_DRT_ACCESS_POLICY` <a name="AWSSHIELD_DRT_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWSSHIELD_DRT_ACCESS_POLICY"></a>

---


##### `AMAZONELASTICTRANSCODER_READONLYACCESS` <a name="AMAZONELASTICTRANSCODER_READONLYACCESS" id="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_READONLYACCESS"></a>

---


##### `AMAZONELASTICTRANSCODER_JOBSSUBMITTER` <a name="AMAZONELASTICTRANSCODER_JOBSSUBMITTER" id="cdk-common.AWSManagedPolicies.AMAZONELASTICTRANSCODER_JOBSSUBMITTER"></a>

---


##### `AWSCLOUD_FRONT_LOGGER` <a name="AWSCLOUD_FRONT_LOGGER" id="cdk-common.AWSManagedPolicies.AWSCLOUD_FRONT_LOGGER"></a>

---


##### `AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE` <a name="AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_SQS_QUEUE_EXECUTION_ROLE"></a>

---


##### `AWSIO_T_ANALYTICS_READ_ONLY_ACCESS` <a name="AWSIO_T_ANALYTICS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T_ANALYTICS_FULL_ACCESS` <a name="AWSIO_T_ANALYTICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_ANALYTICS_FULL_ACCESS"></a>

---


##### `NEPTUNE_CONSOLE_FULL_ACCESS` <a name="NEPTUNE_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.NEPTUNE_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_MACIE_SERVICE_ROLE_POLICY` <a name="AMAZON_MACIE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_MACIE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_READ_ONLY"></a>

---


##### `AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_CONVERT_FULL_ACCESS"></a>

---


##### `AWSSSOREAD_ONLY` <a name="AWSSSOREAD_ONLY" id="cdk-common.AWSManagedPolicies.AWSSSOREAD_ONLY"></a>

---


##### `AWSSSOMASTER_ACCOUNT_ADMINISTRATOR` <a name="AWSSSOMASTER_ACCOUNT_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSSSOMASTER_ACCOUNT_ADMINISTRATOR"></a>

---


##### `AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR` <a name="AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSSSOMEMBER_ACCOUNT_ADMINISTRATOR"></a>

---


##### `AMAZON_MACIE_HANDSHAKE_ROLE` <a name="AMAZON_MACIE_HANDSHAKE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_MACIE_HANDSHAKE_ROLE"></a>

---


##### `AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE` <a name="AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_AUDIT` <a name="AWSIO_T_DEVICE_DEFENDER_AUDIT" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_AUDIT"></a>

---


##### `AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS` <a name="AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_IMAGE_BUILD_FULL_ACCESS"></a>

---


##### `AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY` <a name="AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDISCOVERY_CONTINUOUS_EXPORT_FIREHOSE_POLICY"></a>

---


##### `APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY` <a name="APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APPLICATION_DISCOVERY_SERVICE_CONTINUOUS_EXPORT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY` <a name="AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY" id="cdk-common.AWSManagedPolicies.AWSAUTO_SCALING_PLANS_E_C2_AUTO_SCALING_POLICY"></a>

---


##### `WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY` <a name="WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.WAFREGIONAL_LOGGING_SERVICE_ROLE_POLICY"></a>

---


##### `WAFLOGGING_SERVICE_ROLE_POLICY` <a name="WAFLOGGING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.WAFLOGGING_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_FREE_RTOSOTA_UPDATE` <a name="AMAZON_FREE_RTOSOTA_UPDATE" id="cdk-common.AWSManagedPolicies.AMAZON_FREE_RTOSOTA_UPDATE"></a>

---


##### `AWSXRAY_DAEMON_WRITE_ACCESS` <a name="AWSXRAY_DAEMON_WRITE_ACCESS" id="cdk-common.AWSManagedPolicies.AWSXRAY_DAEMON_WRITE_ACCESS"></a>

---


##### `AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `ELASTIC_LOAD_BALANCING_READ_ONLY` <a name="ELASTIC_LOAD_BALANCING_READ_ONLY" id="cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_READ_ONLY"></a>

---


##### `ELASTIC_LOAD_BALANCING_FULL_ACCESS` <a name="ELASTIC_LOAD_BALANCING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.ELASTIC_LOAD_BALANCING_FULL_ACCESS"></a>

---


##### `LIGHTSAIL_EXPORT_ACCESS` <a name="LIGHTSAIL_EXPORT_ACCESS" id="cdk-common.AWSManagedPolicies.LIGHTSAIL_EXPORT_ACCESS"></a>

---


##### `AMAZON_REDSHIFT_QUERY_EDITOR` <a name="AMAZON_REDSHIFT_QUERY_EDITOR" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR"></a>

---


##### `AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS` <a name="AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGLUE_CONSOLE_SAGE_MAKER_NOTEBOOK_FULL_ACCESS"></a>

---


##### `AMAZON_CONNECT_READ_ONLY_ACCESS` <a name="AMAZON_CONNECT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_READ_ONLY_ACCESS"></a>

---


##### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR` <a name="AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_AUDITOR"></a>

---


##### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER` <a name="AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_USER"></a>

---


##### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS` <a name="AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_FULL_ACCESS"></a>

---


##### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY` <a name="AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_READ_ONLY"></a>

---


##### `CLOUD_TRAIL_SERVICE_ROLE_POLICY` <a name="CLOUD_TRAIL_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_TRAIL_SERVICE_ROLE_POLICY"></a>

---


##### `AWSGREENGRASS_READ_ONLY_ACCESS` <a name="AWSGREENGRASS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGREENGRASS_READ_ONLY_ACCESS"></a>

---


##### `AWSSSODIRECTORY_READ_ONLY` <a name="AWSSSODIRECTORY_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_READ_ONLY"></a>

---


##### `AWSSSODIRECTORY_ADMINISTRATOR` <a name="AWSSSODIRECTORY_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSSSODIRECTORY_ADMINISTRATOR"></a>

---


##### `AWSORGANIZATIONS_FULL_ACCESS` <a name="AWSORGANIZATIONS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_FULL_ACCESS"></a>

---


##### `AWSORGANIZATIONS_READ_ONLY_ACCESS` <a name="AWSORGANIZATIONS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSORGANIZATIONS_READ_ONLY_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE` <a name="AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IO_T_SITE_WISE"></a>

---


##### `AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY` <a name="AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY` <a name="AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_CUSTOM_KEY_STORES_SERVICE_ROLE_POLICY"></a>

---


##### `KAFKA_SERVICE_ROLE_POLICY` <a name="KAFKA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.KAFKA_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE` <a name="AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_EDITORS_ROLE"></a>

---


##### `AMAZON_RDS_DATA_FULL_ACCESS` <a name="AMAZON_RDS_DATA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_DATA_FULL_ACCESS"></a>

---


##### `AWSROBO_MAKER_READ_ONLY_ACCESS` <a name="AWSROBO_MAKER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_READ_ONLY_ACCESS"></a>

---


##### `AWSROBO_MAKER_SERVICE_ROLE_POLICY` <a name="AWSROBO_MAKER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSROBO_MAKER_SERVICE_POLICY` <a name="AWSROBO_MAKER_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSROBO_MAKER_SERVICE_POLICY"></a>

---


##### `AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY` <a name="AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSVPCTRANSIT_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY` <a name="AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY` <a name="AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MASTER_ACCOUNT_ROLE_POLICY"></a>

---


##### `AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY` <a name="AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_MEMBER_ACCOUNT_ROLE_POLICY"></a>

---


##### `SERVER_MIGRATION_SERVICE_LAUNCH_ROLE` <a name="SERVER_MIGRATION_SERVICE_LAUNCH_ROLE" id="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_LAUNCH_ROLE"></a>

---


##### `GLOBAL_ACCELERATOR_READ_ONLY_ACCESS` <a name="GLOBAL_ACCELERATOR_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_READ_ONLY_ACCESS"></a>

---


##### `GLOBAL_ACCELERATOR_FULL_ACCESS` <a name="GLOBAL_ACCELERATOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.GLOBAL_ACCELERATOR_FULL_ACCESS"></a>

---


##### `AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS` <a name="AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_ADMIN_FULL_ACCESS"></a>

---


##### `COMPREHEND_MEDICAL_FULL_ACCESS` <a name="COMPREHEND_MEDICAL_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.COMPREHEND_MEDICAL_FULL_ACCESS"></a>

---


##### `AWSCODE_DEPLOY_ROLE_FOR_EC_S` <a name="AWSCODE_DEPLOY_ROLE_FOR_EC_S" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_EC_S"></a>

---


##### `AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED` <a name="AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_ECS_LIMITED"></a>

---


##### `TRANSLATE_FULL_ACCESS` <a name="TRANSLATE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.TRANSLATE_FULL_ACCESS"></a>

---


##### `AWSSECURITY_HUB_SERVICE_ROLE_POLICY` <a name="AWSSECURITY_HUB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSECURITY_HUB_FULL_ACCESS` <a name="AWSSECURITY_HUB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_FULL_ACCESS"></a>

---


##### `AWSSECURITY_HUB_READ_ONLY_ACCESS` <a name="AWSSECURITY_HUB_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_F_SX_SERVICE_ROLE_POLICY` <a name="AMAZON_F_SX_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_F_SX_SERVICE_ROLE_POLICY"></a>

---


##### `FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS` <a name="FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS" id="cdk-common.AWSManagedPolicies.FSX_DELETE_SERVICE_LINKED_ROLE_ACCESS"></a>

---


##### `AMAZON_F_SX_READ_ONLY_ACCESS` <a name="AMAZON_F_SX_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_F_SX_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_F_SX_FULL_ACCESS` <a name="AMAZON_F_SX_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_F_SX_FULL_ACCESS"></a>

---


##### `AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS` <a name="AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_F_SX_CONSOLE_FULL_ACCESS` <a name="AMAZON_F_SX_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_F_SX_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_TEXTRACT_FULL_ACCESS` <a name="AMAZON_TEXTRACT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_FULL_ACCESS"></a>

---


##### `AMAZON_TEXTRACT_SERVICE_ROLE` <a name="AMAZON_TEXTRACT_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_TEXTRACT_SERVICE_ROLE"></a>

---


##### `AWSCLOUD_MAP_READ_ONLY_ACCESS` <a name="AWSCLOUD_MAP_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_READ_ONLY_ACCESS"></a>

---


##### `AWSCLOUD_MAP_FULL_ACCESS` <a name="AWSCLOUD_MAP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_FULL_ACCESS"></a>

---


##### `AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS` <a name="AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_DISCOVER_INSTANCE_ACCESS"></a>

---


##### `AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS` <a name="AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_MAP_REGISTER_INSTANCE_ACCESS"></a>

---


##### `WELL_ARCHITECTED_CONSOLE_FULL_ACCESS` <a name="WELL_ARCHITECTED_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_FULL_ACCESS"></a>

---


##### `WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS` <a name="WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.WELL_ARCHITECTED_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY` <a name="CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUDWATCH_APPLICATION_INSIGHTS_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSIO_T_SITE_WISE_FULL_ACCESS` <a name="AWSIO_T_SITE_WISE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_FULL_ACCESS"></a>

---


##### `AWSIO_T_SITE_WISE_READ_ONLY_ACCESS` <a name="AWSIO_T_SITE_WISE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_PERSONALIZE_FULL_ACCESS` <a name="AMAZON_PERSONALIZE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_PERSONALIZE_FULL_ACCESS"></a>

---


##### `CLIENT_VPN_SERVICE_ROLE_POLICY` <a name="CLIENT_VPN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_MQ_API_READ_ONLY_ACCESS` <a name="AMAZON_MQ_API_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MQ_API_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_MQ_API_FULL_ACCESS` <a name="AMAZON_MQ_API_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MQ_API_FULL_ACCESS"></a>

---


##### `AMAZON_DOC_DB_FULL_ACCESS` <a name="AMAZON_DOC_DB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_FULL_ACCESS"></a>

---


##### `AMAZON_DOC_DB_READ_ONLY_ACCESS` <a name="AMAZON_DOC_DB_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_DOC_DB_CONSOLE_FULL_ACCESS` <a name="AMAZON_DOC_DB_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP` <a name="AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_BACKUP"></a>

---


##### `AWSIO_T_EVENTS_READ_ONLY_ACCESS` <a name="AWSIO_T_EVENTS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T_EVENTS_FULL_ACCESS` <a name="AWSIO_T_EVENTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_EVENTS_FULL_ACCESS"></a>

---


##### `AWSELASTIC_BEANSTALK_MAINTENANCE` <a name="AWSELASTIC_BEANSTALK_MAINTENANCE" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MAINTENANCE"></a>

---


##### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES` <a name="AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_RESTORES"></a>

---


##### `AWSTRANSFER_LOGGING_ACCESS` <a name="AWSTRANSFER_LOGGING_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRANSFER_LOGGING_ACCESS"></a>

---


##### `AMAZON_MSK_FULL_ACCESS` <a name="AMAZON_MSK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MSK_FULL_ACCESS"></a>

---


##### `AMAZON_MSK_READ_ONLY_ACCESS` <a name="AMAZON_MSK_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MSK_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_FORECAST_FULL_ACCESS` <a name="AMAZON_FORECAST_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_FORECAST_FULL_ACCESS"></a>

---


##### `AWSDATA_SYNC_READ_ONLY_ACCESS` <a name="AWSDATA_SYNC_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_READ_ONLY_ACCESS"></a>

---


##### `AWSDATA_SYNC_FULL_ACCESS` <a name="AWSDATA_SYNC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_FULL_ACCESS"></a>

---


##### `WORK_LINK_SERVICE_ROLE_POLICY` <a name="WORK_LINK_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.WORK_LINK_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEEP_RACER_SERVICE_ROLE_POLICY` <a name="AWSDEEP_RACER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY` <a name="AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_CLOUD_FORMATION_ACCESS_POLICY"></a>

---


##### `AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY` <a name="AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ROBO_MAKER_ACCESS_POLICY"></a>

---


##### `COMPREHEND_DATA_ACCESS_ROLE_POLICY` <a name="COMPREHEND_DATA_ACCESS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.COMPREHEND_DATA_ACCESS_ROLE_POLICY"></a>

---


##### `ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY` <a name="ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_NETWORK_PROFILE_SERVICE_POLICY"></a>

---


##### `AMAZON_SSM_MANAGED_INSTANCE_CORE` <a name="AMAZON_SSM_MANAGED_INSTANCE_CORE" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_INSTANCE_CORE"></a>

---


##### `AMAZON_SSM_DIRECTORY_SERVICE_ACCESS` <a name="AMAZON_SSM_DIRECTORY_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_DIRECTORY_SERVICE_ACCESS"></a>

---


##### `AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY` <a name="AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_EMAIL_SERVICE_ROLE_POLICY"></a>

---


##### `AWSIQFULL_ACCESS` <a name="AWSIQFULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIQFULL_ACCESS"></a>

---


##### `AWSGLOBAL_ACCELERATOR_SLR_POLICY` <a name="AWSGLOBAL_ACCELERATOR_SLR_POLICY" id="cdk-common.AWSManagedPolicies.AWSGLOBAL_ACCELERATOR_SLR_POLICY"></a>

---


##### `AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY` <a name="AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_EVENTS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_MESH_FULL_ACCESS` <a name="AWSAPP_MESH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_FULL_ACCESS"></a>

---


##### `AWSAPP_MESH_READ_ONLY` <a name="AWSAPP_MESH_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_READ_ONLY"></a>

---


##### `AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS` <a name="AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS` <a name="AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_FULL_ACCESS"></a>

---


##### `AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS` <a name="AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_READ_ONLY_ACCESS"></a>

---


##### `AWSDENY_ALL` <a name="AWSDENY_ALL" id="cdk-common.AWSManagedPolicies.AWSDENY_ALL"></a>

---


##### `AWSCONTROL_TOWER_SERVICE_ROLE_POLICY` <a name="AWSCONTROL_TOWER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ROUTE53_RESOLVER_FULL_ACCESS` <a name="AMAZON_ROUTE53_RESOLVER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_FULL_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RESOLVER_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS` <a name="AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSAPP_MESH_SERVICE_ROLE_POLICY` <a name="AWSAPP_MESH_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_SERVICE_ROLE_POLICY"></a>

---


##### `AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS` <a name="AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_FULL_ACCESS"></a>

---


##### `MIGRATION_HUB_SERVICE_ROLE_POLICY` <a name="MIGRATION_HUB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MIGRATION_HUB_SERVICE_ROLE_POLICY"></a>

---


##### `MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY` <a name="MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MIGRATION_HUB_DMS_ACCESS_SERVICE_ROLE_POLICY"></a>

---


##### `MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY` <a name="MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MIGRATION_HUB_SMS_ACCESS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY` <a name="AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY" id="cdk-common.AWSManagedPolicies.AWSCONFIG_MULTI_ACCOUNT_SETUP_POLICY"></a>

---


##### `AWSOPSWORKSREGISTERCLI_ONPREMISES` <a name="AWSOPSWORKSREGISTERCLI_ONPREMISES" id="cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_ONPREMISES"></a>

---


##### `AWSOPSWORKSREGISTERCLI_EC2` <a name="AWSOPSWORKSREGISTERCLI_EC2" id="cdk-common.AWSManagedPolicies.AWSOPSWORKSREGISTERCLI_EC2"></a>

---


##### `AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY` <a name="AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCONFIG_REMEDIATION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY` <a name="AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER` <a name="AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER" id="cdk-common.AWSManagedPolicies.AWSCERTIFICATE_MANAGER_PRIVATE_CA_PRIVILEGED_USER"></a>

---


##### `LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY` <a name="LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.LAKE_FORMATION_DATA_ACCESS_SERVICE_ROLE_POLICY"></a>

---


##### `IAMACCESS_ADVISOR_READ_ONLY` <a name="IAMACCESS_ADVISOR_READ_ONLY" id="cdk-common.AWSManagedPolicies.IAMACCESS_ADVISOR_READ_ONLY"></a>

---


##### `SERVICE_QUOTAS_SERVICE_ROLE_POLICY` <a name="SERVICE_QUOTAS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_SERVICE_ROLE_POLICY"></a>

---


##### `SERVICE_QUOTAS_READ_ONLY_ACCESS` <a name="SERVICE_QUOTAS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_READ_ONLY_ACCESS"></a>

---


##### `SERVICE_QUOTAS_FULL_ACCESS` <a name="SERVICE_QUOTAS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.SERVICE_QUOTAS_FULL_ACCESS"></a>

---


##### `AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS` <a name="AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PROCUREMENT_SYSTEM_ADMIN_FULL_ACCESS"></a>

---


##### `EC2_INSTANCE_CONNECT` <a name="EC2_INSTANCE_CONNECT" id="cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT"></a>

---


##### `AMAZON_WORK_SPACES_SERVICE_ACCESS` <a name="AMAZON_WORK_SPACES_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SERVICE_ACCESS"></a>

---


##### `AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS` <a name="AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SELF_SERVICE_ACCESS"></a>

---


##### `AWSMARKETPLACE_SELLER_FULL_ACCESS` <a name="AWSMARKETPLACE_SELLER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_FULL_ACCESS"></a>

---


##### `AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS` <a name="AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_FULL_ACCESS"></a>

---


##### `AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY` <a name="AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_SELLER_PRODUCTS_READ_ONLY"></a>

---


##### `AWSAPP_MESH_ENVOY_ACCESS` <a name="AWSAPP_MESH_ENVOY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_ENVOY_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS` <a name="AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_FULL_ACCESS` <a name="AMAZON_EVENT_BRIDGE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_FULL_ACCESS"></a>

---


##### `CLOUDWATCH_CROSSACCOUNTACCESS` <a name="CLOUDWATCH_CROSSACCOUNTACCESS" id="cdk-common.AWSManagedPolicies.CLOUDWATCH_CROSSACCOUNTACCESS"></a>

---


##### `CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS` <a name="CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_AUTOMATIC_DASHBOARDS_ACCESS"></a>

---


##### `CONFIG_CONFORMS_SERVICE_ROLE_POLICY` <a name="CONFIG_CONFORMS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CONFIG_CONFORMS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCLOUD_FORMATION_FULL_ACCESS` <a name="AWSCLOUD_FORMATION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_FORMATION_FULL_ACCESS"></a>

---


##### `ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS` <a name="ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_FULL_ACCESS"></a>

---


##### `AWSAPP_MESH_PREVIEW_ENVOY_ACCESS` <a name="AWSAPP_MESH_PREVIEW_ENVOY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_MESH_PREVIEW_ENVOY_ACCESS"></a>

---


##### `AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY` <a name="AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSVPCS2_S_VPN_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_SM_S` <a name="AWSSERVICE_ROLE_FOR_SM_S" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_SM_S"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ENABLE_IO_T_LOGGING_MITIGATION_ACTION"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_PUBLISH_FINDINGS_TO_SNS_MITIGATION_ACTION"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_REPLACE_DEFAULT_POLICY_MITIGATION_ACTION"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_CA_CERT_MITIGATION_ACTION"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_UPDATE_DEVICE_CERT_MITIGATION_ACTION"></a>

---


##### `AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION` <a name="AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_DEFENDER_ADD_THINGS_TO_THING_GROUP_MITIGATION_ACTION"></a>

---


##### `AWSLAKE_FORMATION_DATA_ADMIN` <a name="AWSLAKE_FORMATION_DATA_ADMIN" id="cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_DATA_ADMIN"></a>

---


##### `AWSIQCONTRACT_SERVICE_ROLE_POLICY` <a name="AWSIQCONTRACT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIQCONTRACT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSIQPERMISSION_SERVICE_ROLE_POLICY` <a name="AWSIQPERMISSION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIQPERMISSION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_QLDB_READ_ONLY` <a name="AMAZON_QLDB_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_QLDB_READ_ONLY"></a>

---


##### `AMAZON_QLDB_FULL_ACCESS` <a name="AMAZON_QLDB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_QLDB_FULL_ACCESS"></a>

---


##### `AMAZON_QLDB_CONSOLE_FULL_ACCESS` <a name="AMAZON_QLDB_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_QLDB_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_VOICE_CONNECTOR_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_CHIME_SERVICE_ROLE_POLICY` <a name="AMAZON_CHIME_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY` <a name="AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_LOG_DELIVERY_POLICY"></a>

---


##### `ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY` <a name="ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_POLY_DELEGATED_ACCESS_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_NOTEBOOKS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_LAMBDA_CONCURRENCY_POLICY"></a>

---


##### `AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY` <a name="AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ACCOUNT_DISCOVERY_SERVICE_POLICY"></a>

---


##### `AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS` <a name="AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_END_USER_READ_ONLY_ACCESS"></a>

---


##### `AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS` <a name="AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ADMIN_READ_ONLY_ACCESS"></a>

---


##### `AWSPRIVATE_MARKETPLACE_REQUESTS` <a name="AWSPRIVATE_MARKETPLACE_REQUESTS" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_MARKETPLACE_REQUESTS"></a>

---


##### `AWSFOR_WORD_PRESS_PLUGIN_POLICY` <a name="AWSFOR_WORD_PRESS_PLUGIN_POLICY" id="cdk-common.AWSManagedPolicies.AWSFOR_WORD_PRESS_PLUGIN_POLICY"></a>

---


##### `AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY` <a name="AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCODE_STAR_NOTIFICATIONS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY` <a name="AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSAVINGS_PLANS_READ_ONLY_ACCESS` <a name="AWSSAVINGS_PLANS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_READ_ONLY_ACCESS"></a>

---


##### `AWSSAVINGS_PLANS_FULL_ACCESS` <a name="AWSSAVINGS_PLANS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSAVINGS_PLANS_FULL_ACCESS"></a>

---


##### `WAFV2_LOGGING_SERVICE_ROLE_POLICY` <a name="WAFV2_LOGGING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.WAFV2_LOGGING_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP` <a name="AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_AMAZON_EKS_NODEGROUP"></a>

---


##### `AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD` <a name="AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLE_POLICY_FOR_LAUNCH_WIZARD"></a>

---


##### `AWSDATA_EXCHANGE_READ_ONLY` <a name="AWSDATA_EXCHANGE_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_READ_ONLY"></a>

---


##### `AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS` <a name="AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SUBSCRIBER_FULL_ACCESS"></a>

---


##### `AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS` <a name="AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_PROVIDER_FULL_ACCESS"></a>

---


##### `AWSDATA_EXCHANGE_FULL_ACCESS` <a name="AWSDATA_EXCHANGE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_FULL_ACCESS"></a>

---


##### `AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY` <a name="AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_COMPREHEND_ENDPOINT_POLICY"></a>

---


##### `DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY` <a name="DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.DYNAMO_DB_CLOUD_WATCH_CONTRIBUTOR_INSIGHTS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY` <a name="AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCHATBOT_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSBACKUP_FULL_ACCESS` <a name="AWSBACKUP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBACKUP_FULL_ACCESS"></a>

---


##### `AWSBACKUP_OPERATOR_ACCESS` <a name="AWSBACKUP_OPERATOR_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBACKUP_OPERATOR_ACCESS"></a>

---


##### `AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY` <a name="AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_REPORTING_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMARKETPLACE_METERING_REGISTER_USAGE` <a name="AWSMARKETPLACE_METERING_REGISTER_USAGE" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_METERING_REGISTER_USAGE"></a>

---


##### `AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY` <a name="AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY` <a name="AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_FARGATE_POD_EXECUTION_ROLE_POLICY"></a>

---


##### `AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY` <a name="AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_FOR_FARGATE_SERVICE_ROLE_POLICY"></a>

---


##### `CLOUD_WATCH_SYNTHETICS_FULL_ACCESS` <a name="CLOUD_WATCH_SYNTHETICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_SYNTHETICS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY` <a name="AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS` <a name="AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS` <a name="AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEMAS_FULL_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_IMAGE_BUILDER` <a name="AWSSERVICE_ROLE_FOR_IMAGE_BUILDER" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_IMAGE_BUILDER"></a>

---


##### `EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER` <a name="EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER" id="cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER"></a>

---


##### `IAMACCESS_ANALYZER_FULL_ACCESS` <a name="IAMACCESS_ANALYZER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_FULL_ACCESS"></a>

---


##### `IAMACCESS_ANALYZER_READ_ONLY_ACCESS` <a name="IAMACCESS_ANALYZER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.IAMACCESS_ANALYZER_READ_ONLY_ACCESS"></a>

---


##### `ACCESS_ANALYZER_SERVICE_ROLE_POLICY` <a name="ACCESS_ANALYZER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ACCESS_ANALYZER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY` <a name="AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS` <a name="AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_FULL_ACCESS"></a>

---


##### `COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY` <a name="COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS` <a name="AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_REVIEWER_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CODE_GURU_PROFILER_FULL_ACCESS` <a name="AMAZON_CODE_GURU_PROFILER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_FULL_ACCESS"></a>

---


##### `AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS` <a name="AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_MCS_FULL_ACCESS` <a name="AMAZON_MCS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MCS_FULL_ACCESS"></a>

---


##### `AMAZON_MCS_READ_ONLY_ACCESS` <a name="AMAZON_MCS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MCS_READ_ONLY_ACCESS"></a>

---


##### `AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY` <a name="AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_KENDRA_READ_ONLY_ACCESS` <a name="AMAZON_KENDRA_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KENDRA_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_KENDRA_FULL_ACCESS` <a name="AMAZON_KENDRA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KENDRA_FULL_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS` <a name="AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MECHANICAL_TURK_ACCESS"></a>

---


##### `AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS` <a name="AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_HUMAN_LOOP_FULL_ACCESS"></a>

---


##### `AMAZON_AUGMENTED_AI_FULL_ACCESS` <a name="AMAZON_AUGMENTED_AI_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_FULL_ACCESS"></a>

---


##### `AWSNETWORK_MANAGER_READ_ONLY_ACCESS` <a name="AWSNETWORK_MANAGER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_READ_ONLY_ACCESS"></a>

---


##### `AWSNETWORK_MANAGER_FULL_ACCESS` <a name="AWSNETWORK_MANAGER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_FULL_ACCESS"></a>

---


##### `AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY` <a name="AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_FRAUD_DETECTOR_FULL_ACCESS_POLICY"></a>

---


##### `AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS` <a name="AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_RESOURCE_SHARE_PARTICIPANT_ACCESS"></a>

---


##### `AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS` <a name="AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_ACCESS_MANAGER_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY` <a name="CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_MEMBER_SERVICE_ROLE_POLICY"></a>

---


##### `CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY` <a name="CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_FORMATION_STACK_SETS_ORG_ADMIN_SERVICE_ROLE_POLICY"></a>

---


##### `HEALTH_ORGANIZATIONSSERVICEROLEPOLICY` <a name="HEALTH_ORGANIZATIONSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.HEALTH_ORGANIZATIONSSERVICEROLEPOLICY"></a>

---


##### `AWSIMAGE_BUILDER_READ_ONLY_ACCESS` <a name="AWSIMAGE_BUILDER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_READ_ONLY_ACCESS"></a>

---


##### `AWSIMAGE_BUILDER_FULL_ACCESS` <a name="AWSIMAGE_BUILDER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIMAGE_BUILDER_FULL_ACCESS"></a>

---


##### `EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY` <a name="EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.EC2_FLEET_TIME_SHIFTABLE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS` <a name="AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REKOGNITION_CUSTOM_LABELS_FULL_ACCESS"></a>

---


##### `AMAZON_WORK_DOCS_READ_ONLY_ACCESS` <a name="AMAZON_WORK_DOCS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS` <a name="AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_WRITE_ACCESS"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS` <a name="AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS` <a name="AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEM_CLIENT_FULL_ACCESS"></a>

---


##### `AWSQUICK_SIGHT_SAGE_MAKER_POLICY` <a name="AWSQUICK_SIGHT_SAGE_MAKER_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_SAGE_MAKER_POLICY"></a>

---


##### `AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY` <a name="AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_MANAGED_BLOCKCHAIN_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_SYNC_SERVICE_ROLE_POLICY` <a name="AWSAPP_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPP_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CHIME_SD_K` <a name="AMAZON_CHIME_SD_K" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SD_K"></a>

---


##### `AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS` <a name="AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_FREE_RTOS_FULL_ACCESS"></a>

---


##### `AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS` <a name="AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_DEVICE_TESTER_FOR_GREENGRASS_FULL_ACCESS"></a>

---


##### `AMAZON_EKS_SERVICE_ROLE_POLICY` <a name="AMAZON_EKS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_SERVICE_ROLE_POLICY"></a>

---


##### `COMPUTE_OPTIMIZER_READ_ONLY_ACCESS` <a name="COMPUTE_OPTIMIZER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.COMPUTE_OPTIMIZER_READ_ONLY_ACCESS"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_CASSANDRA_TABLE_POLICY"></a>

---


##### `ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS` <a name="ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_APPLIANCES_SOFTWARE_READ_ONLY_ACCESS"></a>

---


##### `GAME_LIFT_GAME_SERVER_GROUP_POLICY` <a name="GAME_LIFT_GAME_SERVER_GROUP_POLICY" id="cdk-common.AWSManagedPolicies.GAME_LIFT_GAME_SERVER_GROUP_POLICY"></a>

---


##### `AWSWAFCONSOLE_FULL_ACCESS` <a name="AWSWAFCONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_FULL_ACCESS"></a>

---


##### `AWSWAFCONSOLE_READ_ONLY_ACCESS` <a name="AWSWAFCONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSWAFCONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_WORK_DOCS_FULL_ACCESS` <a name="AMAZON_WORK_DOCS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_DOCS_FULL_ACCESS"></a>

---


##### `AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS` <a name="AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_AUGMENTED_AI_INTEGRATED_API_ACCESS"></a>

---


##### `AMAZON_KEYSPACES_FULL_ACCESS` <a name="AMAZON_KEYSPACES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_FULL_ACCESS"></a>

---


##### `AMAZON_KEYSPACES_READ_ONLY_ACCESS` <a name="AMAZON_KEYSPACES_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_KEYSPACES_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_DETECTIVE_FULL_ACCESS` <a name="AMAZON_DETECTIVE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_FULL_ACCESS"></a>

---


##### `AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY` <a name="AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPURCHASE_ORDERS_SERVICE_ROLE_POLICY"></a>

---


##### `SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS` <a name="SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST` <a name="AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP_TEST"></a>

---


##### `AMAZON_SSM_PATCH_ASSOCIATION` <a name="AMAZON_SSM_PATCH_ASSOCIATION" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_PATCH_ASSOCIATION"></a>

---


##### `AWSCLOUD9_SSM_INSTANCE_PROFILE` <a name="AWSCLOUD9_SSM_INSTANCE_PROFILE" id="cdk-common.AWSManagedPolicies.AWSCLOUD9_SSM_INSTANCE_PROFILE"></a>

---


##### `AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION` <a name="AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_CLOUD_FORMATION"></a>

---


##### `AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS` <a name="AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_SITE_WISE_MONITOR_PORTAL_ACCESS"></a>

---


##### `AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY` <a name="AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_GATEWAY_POLICY"></a>

---


##### `AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY` <a name="AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_WORKER_POLICY"></a>

---


##### `AWSTHINKBOX_ASSET_SERVER_POLICY` <a name="AWSTHINKBOX_ASSET_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_ASSET_SERVER_POLICY"></a>

---


##### `AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY` <a name="AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ACCESS_POLICY"></a>

---


##### `AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY` <a name="AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_RESOURCE_TRACKER_ADMIN_POLICY"></a>

---


##### `AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY` <a name="AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_WORKER_POLICY"></a>

---


##### `AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY` <a name="AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_DEADLINE_SPOT_EVENT_PLUGIN_ADMIN_POLICY"></a>

---


##### `AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY` <a name="AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY" id="cdk-common.AWSManagedPolicies.AWSTHINKBOX_AWS_PORTAL_ADMIN_POLICY"></a>

---


##### `AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP` <a name="AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_LINKED_ROLE_POLICY_FOR_BACKUP"></a>

---


##### `AMAZON_APP_FLOW_READ_ONLY_ACCESS` <a name="AMAZON_APP_FLOW_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_APP_FLOW_FULL_ACCESS` <a name="AMAZON_APP_FLOW_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_FLOW_FULL_ACCESS"></a>

---


##### `ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY` <a name="ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.ALEXA_FOR_BUSINESS_LIFESIZE_DELEGATED_ACCESS_POLICY"></a>

---


##### `ELEMENTAL_ACTIVATIONS_FULL_ACCESS` <a name="ELEMENTAL_ACTIVATIONS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_FULL_ACCESS"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER` <a name="AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_WORKER_TIER"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_SN_S` <a name="AWSELASTIC_BEANSTALK_ROLE_SN_S" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_SN_S"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_RD_S` <a name="AWSELASTIC_BEANSTALK_ROLE_RD_S" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_RD_S"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_EC_S` <a name="AWSELASTIC_BEANSTALK_ROLE_EC_S" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_EC_S"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_CORE` <a name="AWSELASTIC_BEANSTALK_ROLE_CORE" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CORE"></a>

---


##### `AWSELASTIC_BEANSTALK_ROLE_CW_L` <a name="AWSELASTIC_BEANSTALK_ROLE_CW_L" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_ROLE_CW_L"></a>

---


##### `AWSCODE_ARTIFACT_ADMIN_ACCESS` <a name="AWSCODE_ARTIFACT_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_ADMIN_ACCESS"></a>

---


##### `AWSBACKUP_ORGANIZATION_ADMIN_ACCESS` <a name="AWSBACKUP_ORGANIZATION_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBACKUP_ORGANIZATION_ADMIN_ACCESS"></a>

---


##### `AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3` <a name="AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3" id="cdk-common.AWSManagedPolicies.AMAZON_MACHINE_LEARNING_ROLEFOR_REDSHIFT_DATA_SOURCE_V3"></a>

---


##### `AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS` <a name="AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS` <a name="AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_HONEYCODE_FULL_ACCESS` <a name="AMAZON_HONEYCODE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_FULL_ACCESS"></a>

---


##### `AMAZON_HONEYCODE_READ_ONLY_ACCESS` <a name="AMAZON_HONEYCODE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS` <a name="AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_TEAM_ASSOCIATION_FULL_ACCESS"></a>

---


##### `AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS` <a name="AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_WORKBOOK_FULL_ACCESS"></a>

---


##### `CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY` <a name="CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CERTIFICATE_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCODE_ARTIFACT_READ_ONLY_ACCESS` <a name="AWSCODE_ARTIFACT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCODE_ARTIFACT_READ_ONLY_ACCESS"></a>

---


##### `AWSSERVICEROLEFORCODEGURU_PROFILER` <a name="AWSSERVICEROLEFORCODEGURU_PROFILER" id="cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCODEGURU_PROFILER"></a>

---


##### `AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY` <a name="AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_IDP_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELEMENTAL_MEDIA_LIVE_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_LIVE_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_READ_ONLY"></a>

---


##### `AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_LIVE_FULL_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION` <a name="AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GROUND_TRUTH_EXECUTION"></a>

---


##### `SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION` <a name="SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION" id="cdk-common.AWSManagedPolicies.SERVER_MIGRATION_SERVICE_ROLE_FOR_INSTANCE_VALIDATION"></a>

---


##### `AWSCODEPIPELINE_READONLYACCESS` <a name="AWSCODEPIPELINE_READONLYACCESS" id="cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_READONLYACCESS"></a>

---


##### `AWSCODEPIPELINE_FULLACCESS` <a name="AWSCODEPIPELINE_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSCODEPIPELINE_FULLACCESS"></a>

---


##### `AMAZON_BRAKET_SERVICE_ROLE_POLICY` <a name="AMAZON_BRAKET_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_SERVICE_ROLE_POLICY"></a>

---


##### `AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER` <a name="AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER" id="cdk-common.AWSManagedPolicies.AWSLAKE_FORMATION_CROSS_ACCOUNT_MANAGER"></a>

---


##### `AMAZON_BRAKET_FULL_ACCESS` <a name="AMAZON_BRAKET_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_FULL_ACCESS"></a>

---


##### `AWSLAMBDA_MSK_EXECUTION_ROLE` <a name="AWSLAMBDA_MSK_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_MSK_EXECUTION_ROLE"></a>

---


##### `AWSCOMPROMISED_KEY_QUARANTINE` <a name="AWSCOMPROMISED_KEY_QUARANTINE" id="cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE"></a>

---


##### `SERVERMIGRATION_SERVICEROLE` <a name="SERVERMIGRATION_SERVICEROLE" id="cdk-common.AWSManagedPolicies.SERVERMIGRATION_SERVICEROLE"></a>

---


##### `AMAZON_EKSVPC_RESOURCE_CONTROLLER` <a name="AMAZON_EKSVPC_RESOURCE_CONTROLLER" id="cdk-common.AWSManagedPolicies.AMAZON_EKSVPC_RESOURCE_CONTROLLER"></a>

---


##### `ROUTE53_RESOLVER_SERVICE_ROLE_POLICY` <a name="ROUTE53_RESOLVER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ROUTE53_RESOLVER_SERVICE_ROLE_POLICY"></a>

---


##### `CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY` <a name="CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLIENT_VPN_SERVICE_CONNECTIONS_ROLE_POLICY"></a>

---


##### `AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED` <a name="AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED" id="cdk-common.AWSManagedPolicies.AWSCODE_DEPLOY_ROLE_FOR_LAMBDA_LIMITED"></a>

---


##### `AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED` <a name="AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_ROLEFOR_AWS_CODE_DEPLOY_LIMITED"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_KAFKA_CLUSTER_POLICY"></a>

---


##### `AWSTRANSFER_READ_ONLY_ACCESS` <a name="AWSTRANSFER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRANSFER_READ_ONLY_ACCESS"></a>

---


##### `AWSBILLING_READ_ONLY_ACCESS` <a name="AWSBILLING_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBILLING_READ_ONLY_ACCESS"></a>

---


##### `ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS` <a name="ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_READ_ONLY_ACCESS"></a>

---


##### `ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES` <a name="ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES" id="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_GENERATE_LICENSES"></a>

---


##### `ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS` <a name="ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_ACTIVATIONS_DOWNLOAD_SOFTWARE_ACCESS"></a>

---


##### `AWSQUICK_SIGHT_ELASTICSEARCH_POLICY` <a name="AWSQUICK_SIGHT_ELASTICSEARCH_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ELASTICSEARCH_POLICY"></a>

---


##### `AMAZON_REDSHIFT_DATA_FULL_ACCESS` <a name="AMAZON_REDSHIFT_DATA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_DATA_FULL_ACCESS"></a>

---


##### `AWSROBOMAKER_FULLACCESS` <a name="AWSROBOMAKER_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSROBOMAKER_FULLACCESS"></a>

---


##### `AWS_CONFIGROLE` <a name="AWS_CONFIGROLE" id="cdk-common.AWSManagedPolicies.AWS_CONFIGROLE"></a>

---


##### `MEDIA_PACKAGE_SERVICE_ROLE_POLICY` <a name="MEDIA_PACKAGE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MEDIA_PACKAGE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMARKETPLACE_AMI_INGESTION` <a name="AWSMARKETPLACE_AMI_INGESTION" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_AMI_INGESTION"></a>

---


##### `AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY` <a name="AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_MAP_REDUCE_PLACEMENT_GROUP_POLICY"></a>

---


##### `AMAZON_ELASTIC_FILE_SYSTEMS_UTILS` <a name="AMAZON_ELASTIC_FILE_SYSTEMS_UTILS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_FILE_SYSTEMS_UTILS"></a>

---


##### `EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS` <a name="EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS" id="cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_CROSS_ACCOUNT_DISTRIBUTION_ACCESS"></a>

---


##### `AWSQUICK_SIGHT_TIMESTREAM_POLICY` <a name="AWSQUICK_SIGHT_TIMESTREAM_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_TIMESTREAM_POLICY"></a>

---


##### `AMAZON_TIMESTREAM_READ_ONLY_ACCESS` <a name="AMAZON_TIMESTREAM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_TIMESTREAM_FULL_ACCESS` <a name="AMAZON_TIMESTREAM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_FULL_ACCESS"></a>

---


##### `AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS` <a name="AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY` <a name="AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CLOUD_WATCH_ALARMS_ACTION_SSM_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_S3_OUTPOSTS_FULL_ACCESS` <a name="AMAZON_S3_OUTPOSTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_FULL_ACCESS"></a>

---


##### `AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS` <a name="AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_S3_OUTPOSTS_READ_ONLY_ACCESS"></a>

---


##### `AWSDEEP_RACER_FULL_ACCESS` <a name="AWSDEEP_RACER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY` <a name="CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LAMBDA_INSIGHTS_EXECUTION_ROLE_POLICY"></a>

---


##### `AWSCLOUDTRAIL_FULLACCESS` <a name="AWSCLOUDTRAIL_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_FULLACCESS"></a>

---


##### `AWSSUPPORT_SERVICE_ROLE_POLICY` <a name="AWSSUPPORT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSBUDGETS_READ_ONLY_ACCESS` <a name="AWSBUDGETS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBUDGETS_READ_ONLY_ACCESS"></a>

---


##### `AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS` <a name="AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBUDGETS_ACTIONS_WITH_AWS_RESOURCE_CONTROL_ACCESS"></a>

---


##### `AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT` <a name="AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT" id="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SERVICE_ROLE_FOR_AMI_MANAGEMENT"></a>

---


##### `AMAZON_MQ_SERVICE_ROLE_POLICY` <a name="AMAZON_MQ_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_MQ_SERVICE_ROLE_POLICY"></a>

---


##### `AWSOUTPOSTS_SERVICE_ROLE_POLICY` <a name="AWSOUTPOSTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSOUTPOSTS_SERVICE_ROLE_POLICY"></a>

---


##### `AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY` <a name="AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AWS_GLUE_DATA_BREW_FULL_ACCESS_POLICY"></a>

---


##### `DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY` <a name="DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.DYNAMO_DB_KINESIS_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS` <a name="AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_FULL_ACCESS"></a>

---


##### `AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS` <a name="AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_READ_ONLY_ACCESS"></a>

---


##### `AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY` <a name="AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSNETWORK_FIREWALL_SERVICE_ROLE_POLICY"></a>

---


##### `AWSLAMBDA_READONLYACCESS` <a name="AWSLAMBDA_READONLYACCESS" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_READONLYACCESS"></a>

---


##### `AWSLAMBDA_FULLACCESS` <a name="AWSLAMBDA_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSLAMBDA_FULLACCESS"></a>

---


##### `AMAZON_HONEYCODE_SERVICE_ROLE_POLICY` <a name="AMAZON_HONEYCODE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_HONEYCODE_SERVICE_ROLE_POLICY"></a>

---


##### `S3_STORAGE_LENS_SERVICE_ROLE_POLICY` <a name="S3_STORAGE_LENS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.S3_STORAGE_LENS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS` <a name="AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_FULL_ACCESS"></a>

---


##### `AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS` <a name="AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGLUE_SCHEMA_REGISTRY_READONLY_ACCESS"></a>

---


##### `AMAZONCONNECT_FULLACCESS` <a name="AMAZONCONNECT_FULLACCESS" id="cdk-common.AWSManagedPolicies.AMAZONCONNECT_FULLACCESS"></a>

---


##### `AMAZON_MWAA_SERVICE_ROLE_POLICY` <a name="AMAZON_MWAA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_MWAA_SERVICE_ROLE_POLICY"></a>

---


##### `CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS` <a name="CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_FULL_ACCESS"></a>

---


##### `CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_INSIGHTS_READ_ONLY_ACCESS"></a>

---


##### `ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS` <a name="ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.ELEMENTAL_SUPPORT_CENTER_FULL_ACCESS"></a>

---


##### `AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY` <a name="AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AMAZONSAGEMAKERADMIN_SERVICECATALOGPRODUCTSSERVICEROLEPOLICY"></a>

---


##### `AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY` <a name="AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_SERVICE_ROLE_POLICY"></a>

---


##### `AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY` <a name="AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_GREENGRASS_GROUP_ROLE_POLICY"></a>

---


##### `AWSPANORAMA_FULL_ACCESS` <a name="AWSPANORAMA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_FULL_ACCESS"></a>

---


##### `AWSPANORAMA_APPLIANCE_ROLE_POLICY` <a name="AWSPANORAMA_APPLIANCE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_ROLE_POLICY"></a>

---


##### `AWSPANORAMA_SAGE_MAKER_ROLE_POLICY` <a name="AWSPANORAMA_SAGE_MAKER_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_SAGE_MAKER_ROLE_POLICY"></a>

---


##### `AWSPANORAMA_SERVICE_ROLE_POLICY` <a name="AWSPANORAMA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER` <a name="AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_POWER_USER"></a>

---


##### `AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS` <a name="AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_FEATURE_STORE_ACCESS"></a>

---


##### `AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS` <a name="AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_DEV_OPS_GURU_FULL_ACCESS` <a name="AMAZON_DEV_OPS_GURU_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_FULL_ACCESS"></a>

---


##### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS` <a name="AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_FULL_ACCESS"></a>

---


##### `AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY` <a name="AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_ELASTIC_CONTAINER_REGISTRY_PUBLIC_READ_ONLY"></a>

---


##### `ADMINISTRATORACCESS_AMPLIFY` <a name="ADMINISTRATORACCESS_AMPLIFY" id="cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AMPLIFY"></a>

---


##### `AWSSERVICE_ROLE_FOR_MONITRON_POLICY` <a name="AWSSERVICE_ROLE_FOR_MONITRON_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_MONITRON_POLICY"></a>

---


##### `AMAZON_MONITRON_FULL_ACCESS` <a name="AMAZON_MONITRON_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MONITRON_FULL_ACCESS"></a>

---


##### `AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY` <a name="AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_LICENSE_MANAGEMENT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSGLUE_DATA_BREW_SERVICE_ROLE` <a name="AWSGLUE_DATA_BREW_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWSGLUE_DATA_BREW_SERVICE_ROLE"></a>

---


##### `ECRREPLICATION_SERVICE_ROLE_POLICY` <a name="ECRREPLICATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ECRREPLICATION_SERVICE_ROLE_POLICY"></a>

---


##### `IVSRECORD_TO_S3` <a name="IVSRECORD_TO_S3" id="cdk-common.AWSManagedPolicies.IVSRECORD_TO_S3"></a>

---


##### `AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY` <a name="AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_CHANGE_MANAGEMENT_SERVICE_POLICY"></a>

---


##### `AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY` <a name="AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY` <a name="AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_EDGE_DEVICE_FLEET_POLICY"></a>

---


##### `AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY` <a name="AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EMR_CONTAINERS_SERVICE_ROLE_POLICY"></a>

---


##### `EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS` <a name="EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS" id="cdk-common.AWSManagedPolicies.EC2_INSTANCE_PROFILE_FOR_IMAGE_BUILDER_ECR_CONTAINER_BUILDS"></a>

---


##### `AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS` <a name="AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAUDIT_MANAGER_ADMINISTRATOR_ACCESS"></a>

---


##### `AWSTRANSFER_CONSOLE_FULL_ACCESS` <a name="AWSTRANSFER_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRANSFER_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSTRANSFER_FULL_ACCESS` <a name="AWSTRANSFER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRANSFER_FULL_ACCESS"></a>

---


##### `AWSIO_T_FLEET_HUB_FEDERATION_ACCESS` <a name="AWSIO_T_FLEET_HUB_FEDERATION_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_FLEET_HUB_FEDERATION_ACCESS"></a>

---


##### `AWSIO_T_WIRELESS_FULL_ACCESS` <a name="AWSIO_T_WIRELESS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_ACCESS"></a>

---


##### `AWSIO_T_WIRELESS_READ_ONLY_ACCESS` <a name="AWSIO_T_WIRELESS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_READ_ONLY_ACCESS"></a>

---


##### `AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS` <a name="AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_FULL_PUBLISH_ACCESS"></a>

---


##### `AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER` <a name="AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_GATEWAY_CERT_MANAGER"></a>

---


##### `AWSIO_T_WIRELESS_DATA_ACCESS` <a name="AWSIO_T_WIRELESS_DATA_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_DATA_ACCESS"></a>

---


##### `AWSIO_T_WIRELESS_LOGGING` <a name="AWSIO_T_WIRELESS_LOGGING" id="cdk-common.AWSManagedPolicies.AWSIO_T_WIRELESS_LOGGING"></a>

---


##### `AWSCLOUD_SHELL_FULL_ACCESS` <a name="AWSCLOUD_SHELL_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUD_SHELL_FULL_ACCESS"></a>

---


##### `AMAZON_PROMETHEUS_FULL_ACCESS` <a name="AMAZON_PROMETHEUS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_FULL_ACCESS"></a>

---


##### `AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS` <a name="AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_PROMETHEUS_QUERY_ACCESS` <a name="AMAZON_PROMETHEUS_QUERY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_QUERY_ACCESS"></a>

---


##### `AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS` <a name="AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_REMOTE_WRITE_ACCESS"></a>

---


##### `AMAZON_FIS_SERVICE_ROLE_POLICY` <a name="AMAZON_FIS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_FIS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CORE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_LEX_V2_BOT_POLICY` <a name="AMAZON_LEX_V2_BOT_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_V2_BOT_POLICY"></a>

---


##### `AMAZON_LEX_CHANNELS_ACCESS` <a name="AMAZON_LEX_CHANNELS_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_CHANNELS_ACCESS"></a>

---


##### `AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY` <a name="AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDIRECT_CONNECT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSOPSWORKS_FULLACCESS` <a name="AWSOPSWORKS_FULLACCESS" id="cdk-common.AWSManagedPolicies.AWSOPSWORKS_FULLACCESS"></a>

---


##### `AWSELASTIC_BEANSTALK_READ_ONLY` <a name="AWSELASTIC_BEANSTALK_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_READ_ONLY"></a>

---


##### `ADMINISTRATORACCESS_AWSELASTICBEANSTALK` <a name="ADMINISTRATORACCESS_AWSELASTICBEANSTALK" id="cdk-common.AWSManagedPolicies.ADMINISTRATORACCESS_AWSELASTICBEANSTALK"></a>

---


##### `AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS` <a name="AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS` <a name="AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_PROFILER_AGENT_ACCESS"></a>

---


##### `AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS` <a name="AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_MAIL_MESSAGE_FLOW_FULL_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY` <a name="AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_API_DESTINATIONS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_HEALTH_LAKE_FULL_ACCESS` <a name="AMAZON_HEALTH_LAKE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_FULL_ACCESS"></a>

---


##### `AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS` <a name="AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_HEALTH_LAKE_READ_ONLY_ACCESS"></a>

---


##### `AWSPROTON_DEVELOPER_ACCESS` <a name="AWSPROTON_DEVELOPER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPROTON_DEVELOPER_ACCESS"></a>

---


##### `AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY` <a name="AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSTORAGE_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSPROTON_FULL_ACCESS` <a name="AWSPROTON_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPROTON_FULL_ACCESS"></a>

---


##### `AWSPROTON_READ_ONLY_ACCESS` <a name="AWSPROTON_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPROTON_READ_ONLY_ACCESS"></a>

---


##### `AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS` <a name="AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSGRAFANA_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT` <a name="AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT" id="cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT"></a>

---


##### `AWSGRAFANA_ACCOUNT_ADMINISTRATOR` <a name="AWSGRAFANA_ACCOUNT_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AWSGRAFANA_ACCOUNT_ADMINISTRATOR"></a>

---


##### `AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY` <a name="AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_BEANSTALK_MANAGED_UPDATES_CUSTOMER_ROLE_POLICY"></a>

---


##### `BATCH_SERVICE_ROLE_POLICY` <a name="BATCH_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.BATCH_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZONEMRSERVICEPOLICY_V2` <a name="AMAZONEMRSERVICEPOLICY_V2" id="cdk-common.AWSManagedPolicies.AMAZONEMRSERVICEPOLICY_V2"></a>

---


##### `AMAZONEMRREADONLYACCESSPOLICY_V2` <a name="AMAZONEMRREADONLYACCESSPOLICY_V2" id="cdk-common.AWSManagedPolicies.AMAZONEMRREADONLYACCESSPOLICY_V2"></a>

---


##### `AMAZONEMRFULLACCESSPOLICY_V2` <a name="AMAZONEMRFULLACCESSPOLICY_V2" id="cdk-common.AWSManagedPolicies.AMAZONEMRFULLACCESSPOLICY_V2"></a>

---


##### `AWSSECURITY_HUB_ORGANIZATIONS_ACCESS` <a name="AWSSECURITY_HUB_ORGANIZATIONS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSECURITY_HUB_ORGANIZATIONS_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY` <a name="AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY` <a name="AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_CONVERSION_SERVER_POLICY"></a>

---


##### `AWSAPPLICATION_MIGRATION_FULL_ACCESS` <a name="AWSAPPLICATION_MIGRATION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_FULL_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_AGENT_POLICY` <a name="AWSAPPLICATION_MIGRATION_AGENT_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_POLICY"></a>

---


##### `AWSAPPLICATION_MIGRATION_E_C2_ACCESS` <a name="AWSAPPLICATION_MIGRATION_E_C2_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_E_C2_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_MGH_ACCESS` <a name="AWSAPPLICATION_MIGRATION_MGH_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_MGH_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS` <a name="AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_READ_ONLY_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY` <a name="AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_REPLICATION_SERVER_POLICY"></a>

---


##### `AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS` <a name="AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_FULL_ACCESS"></a>

---


##### `AWSCOMPROMISED_KEY_QUARANTINE_V2` <a name="AWSCOMPROMISED_KEY_QUARANTINE_V2" id="cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE_V2"></a>

---


##### `AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY` <a name="AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_OPS_DATA_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY` <a name="AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSCLOUDWATCHALARMS_ACTIONSSMINCIDENTSSERVICEROLEPOLICY"></a>

---


##### `AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER` <a name="AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER" id="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_LAUNCHPROFILEWORKER"></a>

---


##### `AMAZONNIMBLESTUDIO_STUDIOADMIN` <a name="AMAZONNIMBLESTUDIO_STUDIOADMIN" id="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOADMIN"></a>

---


##### `AMAZONNIMBLESTUDIO_STUDIOUSER` <a name="AMAZONNIMBLESTUDIO_STUDIOUSER" id="cdk-common.AWSManagedPolicies.AMAZONNIMBLESTUDIO_STUDIOUSER"></a>

---


##### `AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS` <a name="AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_EQUIPMENT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS` <a name="AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_METRICS_FULL_ACCESS` <a name="AMAZON_LOOKOUT_METRICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_METRICS_FULL_ACCESS"></a>

---


##### `AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY` <a name="AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSINCIDENT_MANAGER_RESOLVER_ACCESS` <a name="AWSINCIDENT_MANAGER_RESOLVER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_RESOLVER_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS` <a name="AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_VISION_FULL_ACCESS` <a name="AMAZON_LOOKOUT_VISION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_FULL_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS` <a name="AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS` <a name="AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_LOOKOUT_VISION_CONSOLE_FULL_ACCESS"></a>

---


##### `APP_RUNNER_SERVICE_ROLE_POLICY` <a name="APP_RUNNER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APP_RUNNER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS` <a name="AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_SERVICE_POLICY_FOR_ECR_ACCESS"></a>

---


##### `AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY` <a name="AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_APP_REGISTRY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY` <a name="AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_TEST_GRID_SERVICE_ROLE_POLICY"></a>

---


##### `AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY` <a name="AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSKEY_MANAGEMENT_SERVICE_MULTI_REGION_KEYS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY` <a name="AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSSMOPS_INSIGHTS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSBUG_BUST_SERVICE_ROLE_POLICY` <a name="AWSBUG_BUST_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSBUG_BUST_SERVICE_ROLE_POLICY"></a>

---


##### `AWSBUG_BUST_FULL_ACCESS` <a name="AWSBUG_BUST_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBUG_BUST_FULL_ACCESS"></a>

---


##### `AWSBUG_BUST_PLAYER_ACCESS` <a name="AWSBUG_BUST_PLAYER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBUG_BUST_PLAYER_ACCESS"></a>

---


##### `ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY` <a name="ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ROUTE53_RECOVERY_READINESS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS` <a name="AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PIPELINES_INTEGRATIONS"></a>

---


##### `AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_TRANSCRIPTION_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSLICENSE_MANAGER_CONSUMPTION_POLICY` <a name="AWSLICENSE_MANAGER_CONSUMPTION_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_CONSUMPTION_POLICY"></a>

---


##### `MEMORY_DB_SERVICE_ROLE_POLICY` <a name="MEMORY_DB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MEMORY_DB_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_ELASTI_CACHE_RG_POLICY"></a>

---


##### `AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY` <a name="AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_S3_OBJECT_LAMBDA_EXECUTION_ROLE_POLICY"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_FULL_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_FULL_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CONTROL_CONFIG_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_READINESS_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS` <a name="AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_RECOVERY_CLUSTER_FULL_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS` <a name="AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_REPORTS"></a>

---


##### `AWSBACKUP_AUDIT_ACCESS` <a name="AWSBACKUP_AUDIT_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBACKUP_AUDIT_ACCESS"></a>

---


##### `AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY` <a name="AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS` <a name="AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_COGNITO_ACCESS"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_NEPTUNE_CLUSTER_POLICY"></a>

---


##### `AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY` <a name="AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_CONNECTOR_SERVICE_ROLE_POLICY"></a>

---


##### `KAFKA_CONNECT_SERVICE_ROLE_POLICY` <a name="KAFKA_CONNECT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.KAFKA_CONNECT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSQUICKSIGHT_OPEN_SEARCH_POLICY` <a name="AWSQUICKSIGHT_OPEN_SEARCH_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICKSIGHT_OPEN_SEARCH_POLICY"></a>

---


##### `AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS` <a name="AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_FULL_ACCESS"></a>

---


##### `AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS` <a name="AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVICE_READ_ONLY_ACCESS"></a>

---


##### `AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY` <a name="AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMEDIA_TAILOR_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_MSK_CONNECT_READ_ONLY_ACCESS` <a name="AMAZON_MSK_CONNECT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MSK_CONNECT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_CAMPAIGNS_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS` <a name="AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_FULL_ACCESS"></a>

---


##### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING` <a name="AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_NO_SHARING"></a>

---


##### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING` <a name="AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_SHARING"></a>

---


##### `AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING` <a name="AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_QUERY_EDITOR_V2_READ_WRITE_SHARING"></a>

---


##### `AMAZON_CONNECT_VOICE_ID_FULL_ACCESS` <a name="AMAZON_CONNECT_VOICE_ID_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_VOICE_ID_FULL_ACCESS"></a>

---


##### `AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY` <a name="AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSEC2_CAPACITY_RESERVATION_FLEET_ROLE_POLICY"></a>

---


##### `AWSACCOUNT_MANAGEMENT_FULL_ACCESS` <a name="AWSACCOUNT_MANAGEMENT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_FULL_ACCESS"></a>

---


##### `AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS` <a name="AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSACCOUNT_MANAGEMENT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_MEMORY_DB_FULL_ACCESS` <a name="AMAZON_MEMORY_DB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_FULL_ACCESS"></a>

---


##### `AMAZON_MEMORY_DB_READ_ONLY_ACCESS` <a name="AMAZON_MEMORY_DB_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MEMORY_DB_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY` <a name="AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY` <a name="AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_PREVIEW_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY` <a name="AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS` <a name="AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_STRATEGY_COLLECTOR` <a name="AWSMIGRATION_HUB_STRATEGY_COLLECTOR" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_STRATEGY_COLLECTOR"></a>

---


##### `AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY` <a name="AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY` <a name="AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPANORAMA_APPLIANCE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY` <a name="AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_PURCHASE_ORDERS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS` <a name="AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_ACCOUNT_ADMIN_ACCESS"></a>

---


##### `AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS` <a name="AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDEEP_RACER_DEFAULT_MULTI_USER_ACCESS"></a>

---


##### `AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY` <a name="AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSCOST_AND_USAGE_REPORT_AUTOMATION_POLICY"></a>

---


##### `AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS` <a name="AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_REDSHIFT_ALL_COMMANDS_FULL_ACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY` <a name="AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_V_CENTER_CLIENT_POLICY"></a>

---


##### `AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS` <a name="AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_ORGANIZATIONS_ACCESS"></a>

---


##### `AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY` <a name="AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_RECOVERY_INSTANCE_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_AGENT_INSTALLATION_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS` <a name="AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS` <a name="AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_READ_ONLY_ACCESS"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_FAILBACK_INSTALLATION_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_REPLICATION_SERVER_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CONVERSION_SERVER_POLICY"></a>

---


##### `AWSSHIELD_SERVICE_ROLE_POLICY` <a name="AWSSHIELD_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSHIELD_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY` <a name="AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_GRAFANA_ATHENA_ACCESS` <a name="AMAZON_GRAFANA_ATHENA_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_ATHENA_ACCESS"></a>

---


##### `AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_FULL_ACCESS"></a>

---


##### `AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_TAILOR_READ_ONLY"></a>

---


##### `AWSPROTON_SYNC_SERVICE_ROLE_POLICY` <a name="AWSPROTON_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPROTON_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_BRAKET_JOBS_EXECUTION_POLICY` <a name="AMAZON_BRAKET_JOBS_EXECUTION_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_BRAKET_JOBS_EXECUTION_POLICY"></a>

---


##### `AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY` <a name="AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSECRPULLTHROUGHCACHE_SERVICEROLEPOLICY"></a>

---


##### `AMAZON_GRAFANA_REDSHIFT_ACCESS` <a name="AMAZON_GRAFANA_REDSHIFT_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_REDSHIFT_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY` <a name="AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS` <a name="AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_REFACTOR_SPACES_FULL_ACCESS"></a>

---


##### `AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS` <a name="AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS` <a name="AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_FULL_ACCESS"></a>

---


##### `AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS` <a name="AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS` <a name="AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_RUM_FULL_ACCESS"></a>

---


##### `AMAZON_INSPECTOR2_FULL_ACCESS` <a name="AMAZON_INSPECTOR2_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_FULL_ACCESS"></a>

---


##### `AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY` <a name="AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_WORK_SPACES_WEB_READ_ONLY` <a name="AMAZON_WORK_SPACES_WEB_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_WEB_READ_ONLY"></a>

---


##### `AWSIPAMSERVICE_ROLE_POLICY` <a name="AWSIPAMSERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIPAMSERVICE_ROLE_POLICY"></a>

---


##### `AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY` <a name="AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_NETWORKS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS` <a name="AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DEV_OPS_GURU_CONSOLE_FULL_ACCESS"></a>

---


##### `EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY` <a name="EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.EC2_FAST_LAUNCH_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_RUNNER_FULL_ACCESS` <a name="AWSAPP_RUNNER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_FULL_ACCESS"></a>

---


##### `APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY` <a name="APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APP_RUNNER_NETWORKING_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_INSPECTOR2_READ_ONLY_ACCESS` <a name="AMAZON_INSPECTOR2_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_READ_ONLY_ACCESS"></a>

---


##### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE` <a name="AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_RESTORE"></a>

---


##### `AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP` <a name="AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP" id="cdk-common.AWSManagedPolicies.AWSBACKUP_SERVICE_ROLE_POLICY_FOR_S3_BACKUP"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_GLUE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_PIPELINE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_EVENTS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_FIREHOSE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPP_RUNNER_READ_ONLY_ACCESS` <a name="AWSAPP_RUNNER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_RUNNER_READ_ONLY_ACCESS"></a>

---


##### `AWSIDENTITY_SYNC_FULL_ACCESS` <a name="AWSIDENTITY_SYNC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_FULL_ACCESS"></a>

---


##### `AWSIDENTITY_SYNC_READ_ONLY_ACCESS` <a name="AWSIDENTITY_SYNC_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSIDENTITY_SYNC_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CLOUDFORMATION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_CODE_BUILD_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EBSCSI_DRIVER_POLICY` <a name="AMAZON_EBSCSI_DRIVER_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EBSCSI_DRIVER_POLICY"></a>

---


##### `AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MEDIA_PIPELINES_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY` <a name="AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_READ_ONLY"></a>

---


##### `ROSAMANAGE_SUBSCRIPTION` <a name="ROSAMANAGE_SUBSCRIPTION" id="cdk-common.AWSManagedPolicies.ROSAMANAGE_SUBSCRIPTION"></a>

---


##### `AWSBILLING_CONDUCTOR_FULL_ACCESS` <a name="AWSBILLING_CONDUCTOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_FULL_ACCESS"></a>

---


##### `AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS` <a name="AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBILLING_CONDUCTOR_READ_ONLY_ACCESS"></a>

---


##### `AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE` <a name="AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_SERVICE_ROLE"></a>

---


##### `AWS_GLUE_SESSION_USER_RESTRICTED_POLICY` <a name="AWS_GLUE_SESSION_USER_RESTRICTED_POLICY" id="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_POLICY"></a>

---


##### `AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY` <a name="AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY" id="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_POLICY"></a>

---


##### `AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE` <a name="AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE" id="cdk-common.AWSManagedPolicies.AWS_GLUE_SESSION_USER_RESTRICTED_NOTEBOOK_SERVICE_ROLE"></a>

---


##### `AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY` <a name="AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN` <a name="AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_PLUGIN"></a>

---


##### `AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS` <a name="AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY` <a name="AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMIGRATION_HUB_ORCHESTRATOR_INSTANCE_ROLE_POLICY"></a>

---


##### `MONITRON_SERVICE_ROLE_POLICY` <a name="MONITRON_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MONITRON_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY` <a name="AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EMR_SERVERLESS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM` <a name="AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM" id="cdk-common.AWSManagedPolicies.AWSBUDGETSACTIONS_ROLEPOLICYFORRESOURCEADMINISTRATIONWITHSSM"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_STAGING_ACCOUNT_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_EC2_INSTANCE_POLICY"></a>

---


##### `AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2` <a name="AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2" id="cdk-common.AWSManagedPolicies.AWSAPPLICATIONMIGRATIONAGENTPOLICY_V2"></a>

---


##### `AWSM2_SERVICE_POLICY` <a name="AWSM2_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSM2_SERVICE_POLICY"></a>

---


##### `AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY` <a name="AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY" id="cdk-common.AWSManagedPolicies.AWSMANAGED_SERVICES_DEPLOYMENT_TOOLKIT_POLICY"></a>

---


##### `AWSCLOUDTRAIL_READONLYACCESS` <a name="AWSCLOUDTRAIL_READONLYACCESS" id="cdk-common.AWSManagedPolicies.AWSCLOUDTRAIL_READONLYACCESS"></a>

---


##### `AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY` <a name="AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_AGENT_INSTALLATION_POLICY"></a>

---


##### `AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY` <a name="AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_ORGANIZATIONS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSROLES_ANYWHERE_SERVICE_POLICY` <a name="AWSROLES_ANYWHERE_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSROLES_ANYWHERE_SERVICE_POLICY"></a>

---


##### `AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY` <a name="AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSNETWORK_MANAGER_CLOUD_WAN_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY` <a name="AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_GUARD_DUTY_MALWARE_PROTECTION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS` <a name="AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_FULL_ACCESS"></a>

---


##### `AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY` <a name="AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_VENDOR_READ_ONLY"></a>

---


##### `AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS` <a name="AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_FULL_ACCESS"></a>

---


##### `AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY` <a name="AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSVENDOR_INSIGHTS_ASSESSOR_READ_ONLY"></a>

---


##### `AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY` <a name="AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_USER_SUBSCRIPTIONS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS` <a name="AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_FULL_ACCESS"></a>

---


##### `AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS` <a name="AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSTRUSTED_ADVISOR_PRIORITY_READ_ONLY_ACCESS"></a>

---


##### `AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS` <a name="AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_DISCOVERY_AGENTLESS_COLLECTOR_ACCESS"></a>

---


##### `AWSSUPPORT_APP_FULL_ACCESS` <a name="AWSSUPPORT_APP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_FULL_ACCESS"></a>

---


##### `AWSSUPPORT_APP_READ_ONLY_ACCESS` <a name="AWSSUPPORT_APP_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_APP_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY` <a name="AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FORECAST_ACCESS"></a>

---


##### `AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY` <a name="AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_LOCAL_OUTPOST_CLUSTER_POLICY"></a>

---


##### `GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS` <a name="GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS` <a name="GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.GROUND_TRUTH_SYNTHETIC_CONSOLE_FULL_ACCESS"></a>

---


##### `AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY` <a name="AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SSM_MANAGED_E_C2_INSTANCE_DEFAULT_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_FULL_ACCESS"></a>

---


##### `AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY` <a name="AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CLOUD_WATCH_EVIDENTLY_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDEVICE_FARM_SERVICE_ROLE_POLICY` <a name="AWSDEVICE_FARM_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDEVICE_FARM_SERVICE_ROLE_POLICY"></a>

---


##### `AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY` <a name="AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIO_T_FLEETWISE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSUPPORT_PLANS_READ_ONLY_ACCESS` <a name="AWSSUPPORT_PLANS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_READ_ONLY_ACCESS"></a>

---


##### `AWSSUPPORT_PLANS_FULL_ACCESS` <a name="AWSSUPPORT_PLANS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPORT_PLANS_FULL_ACCESS"></a>

---


##### `APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY` <a name="APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APP_INTEGRATIONS_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_APP_STREAM_PCA_ACCESS` <a name="AMAZON_APP_STREAM_PCA_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_APP_STREAM_PCA_ACCESS"></a>

---


##### `AWSREFACTORING_TOOLKIT_SIDECAR_POLICY` <a name="AWSREFACTORING_TOOLKIT_SIDECAR_POLICY" id="cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_SIDECAR_POLICY"></a>

---


##### `AWSREFACTORING_TOOLKIT_FULL_ACCESS` <a name="AWSREFACTORING_TOOLKIT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSREFACTORING_TOOLKIT_FULL_ACCESS"></a>

---


##### `AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY` <a name="AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_SSM_ACCESS"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_RDS_ACCESS"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_NETWORK_ACCESS"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_EKS_ACCESS"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_ECS_ACCESS"></a>

---


##### `AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS` <a name="AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS" id="cdk-common.AWSManagedPolicies.AWSFAULT_INJECTION_SIMULATOR_E_C2_ACCESS"></a>

---


##### `AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS` <a name="AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_READ_ONLY_ACCESS"></a>

---


##### `AWSRESOURCE_EXPLORER_FULL_ACCESS` <a name="AWSRESOURCE_EXPLORER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_FULL_ACCESS"></a>

---


##### `AMAZON_WORKSPACES_PCA_ACCESS` <a name="AMAZON_WORKSPACES_PCA_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORKSPACES_PCA_ACCESS"></a>

---


##### `AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY` <a name="AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS` <a name="AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_BASIC_ACCESS"></a>

---


##### `AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY` <a name="AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPROTON_CODE_BUILD_PROVISIONING_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS` <a name="AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_FULL_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS` <a name="AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_SCHEDULER_READ_ONLY_ACCESS"></a>

---


##### `AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A` <a name="AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A" id="cdk-common.AWSManagedPolicies.AWSBACKUP_RESTORE_ACCESS_FOR_SAPHAN_A"></a>

---


##### `AWSBACKUP_DATA_TRANSFER_ACCESS` <a name="AWSBACKUP_DATA_TRANSFER_ACCESS" id="cdk-common.AWSManagedPolicies.AWSBACKUP_DATA_TRANSFER_ACCESS"></a>

---


##### `AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY` <a name="AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY` <a name="AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSSMFOR_SAP_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS` <a name="AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_FULL_ACCESS"></a>

---


##### `AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS` <a name="AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_FOR_SAP_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY` <a name="AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY` <a name="AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSREACHABILITY_ANALYZER_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY` <a name="AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_SERVERLESS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_MIGRATION_SSM_ACCESS` <a name="AWSAPPLICATION_MIGRATION_SSM_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SSM_ACCESS"></a>

---


##### `OAMREAD_ONLY_ACCESS` <a name="OAMREAD_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.OAMREAD_ONLY_ACCESS"></a>

---


##### `OAMFULL_ACCESS` <a name="OAMFULL_ACCESS" id="cdk-common.AWSManagedPolicies.OAMFULL_ACCESS"></a>

---


##### `AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION" id="cdk-common.AWSManagedPolicies.AWSXRAY_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


##### `CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LOGS_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


##### `CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION` <a name="CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_CROSS_ACCOUNT_SHARING_CONFIGURATION"></a>

---


##### `CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY` <a name="CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_SERVICE_ROLE_POLICY"></a>

---


##### `AWSWICKR_FULL_ACCESS` <a name="AWSWICKR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSWICKR_FULL_ACCESS"></a>

---


##### `AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY` <a name="AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSVPCVERIFIED_ACCESS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_OMICS_READ_ONLY_ACCESS` <a name="AMAZON_OMICS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OMICS_READ_ONLY_ACCESS"></a>

---


##### `SECURITY_LAKE_SERVICE_LINKED_ROLE` <a name="SECURITY_LAKE_SERVICE_LINKED_ROLE" id="cdk-common.AWSManagedPolicies.SECURITY_LAKE_SERVICE_LINKED_ROLE"></a>

---


##### `AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY` <a name="AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_PERMISSIONS_BOUNDARY"></a>

---


##### `AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS` <a name="AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_GOVERNANCE_USE_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS` <a name="AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_FULL_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE` <a name="AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_GEOSPATIAL_EXECUTION_ROLE"></a>

---


##### `AMAZONDOCDB_ELASTICSERVICEROLEPOLICY` <a name="AMAZONDOCDB_ELASTICSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AMAZONDOCDB_ELASTICSERVICEROLEPOLICY"></a>

---


##### `AWSVPC_LATTICE_SERVICE_ROLE_POLICY` <a name="AWSVPC_LATTICE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSVPC_LATTICE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS` <a name="AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_FULL_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS` <a name="AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS` <a name="AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_EVENT_BRIDGE_PIPES_OPERATOR_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY` <a name="AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_GROUND_STATION_DATAFLOW_ENDPOINT_GROUP_POLICY"></a>

---


##### `AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC` <a name="AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC" id="cdk-common.AWSManagedPolicies.AWSBACKUP_GATEWAY_SERVICE_ROLE_POLICY_FOR_VIRTUAL_MACHINE_METADATA_SYNC"></a>

---


##### `AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY` <a name="AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_DETECTIVECONTROLSCONFIG_SERVICEROLEPOLICY"></a>

---


##### `AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY` <a name="AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSLICENSE_MANAGER_LINUX_SUBSCRIPTIONS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY` <a name="AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY" id="cdk-common.AWSManagedPolicies.AWSOUTPOSTS_AUTHORIZE_SERVER_POLICY"></a>

---


##### `AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2` <a name="AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2" id="cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYSTAGINGACCOUNTPOLICY_V2"></a>

---


##### `RESOURCE_GROUPS_SERVICE_ROLE_POLICY` <a name="RESOURCE_GROUPS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.RESOURCE_GROUPS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSCLEAN_ROOMS_READ_ONLY_ACCESS` <a name="AWSCLEAN_ROOMS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_READ_ONLY_ACCESS"></a>

---


##### `AWSCLEAN_ROOMS_FULL_ACCESS` <a name="AWSCLEAN_ROOMS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS"></a>

---


##### `AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING` <a name="AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING" id="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_FULL_ACCESS_NO_QUERYING"></a>

---


##### `AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY` <a name="AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSHEALTH_EVENTPROCESSORSERVICEROLEPOLICY"></a>

---


##### `AMAZON_DETECTIVE_MEMBER_ACCESS` <a name="AMAZON_DETECTIVE_MEMBER_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_MEMBER_ACCESS"></a>

---


##### `AMAZON_DETECTIVE_INVESTIGATOR_ACCESS` <a name="AMAZON_DETECTIVE_INVESTIGATOR_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_INVESTIGATOR_ACCESS"></a>

---


##### `EC2_INSTANCE_CONNECT_ENDPOINT` <a name="EC2_INSTANCE_CONNECT_ENDPOINT" id="cdk-common.AWSManagedPolicies.EC2_INSTANCE_CONNECT_ENDPOINT"></a>

---


##### `AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES` <a name="AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UNAUTHENTICATED_IDENTITIES"></a>

---


##### `AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY` <a name="AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_EVENTSSERVICEROLEPOLICY"></a>

---


##### `AWSPRIVATE_CA_USER` <a name="AWSPRIVATE_CA_USER" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_USER"></a>

---


##### `AWSPRIVATE_CA_FULL_ACCESS` <a name="AWSPRIVATE_CA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_FULL_ACCESS"></a>

---


##### `AWSPRIVATE_CA_PRIVILEGED_USER` <a name="AWSPRIVATE_CA_PRIVILEGED_USER" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_PRIVILEGED_USER"></a>

---


##### `AWSPRIVATE_CA_READ_ONLY` <a name="AWSPRIVATE_CA_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_READ_ONLY"></a>

---


##### `AWSPRIVATE_CA_AUDITOR` <a name="AWSPRIVATE_CA_AUDITOR" id="cdk-common.AWSManagedPolicies.AWSPRIVATE_CA_AUDITOR"></a>

---


##### `AMAZON_OMICS_FULL_ACCESS` <a name="AMAZON_OMICS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OMICS_FULL_ACCESS"></a>

---


##### `AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS` <a name="AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.AWSSUPPLY_CHAIN_FEDERATION_ADMIN_ACCESS"></a>

---


##### `AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS` <a name="AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DETECTIVE_ORGANIZATIONS_ACCESS"></a>

---


##### `AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY` <a name="AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CHIME_SDK_MESSAGING_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY` <a name="AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDMSFLEET_ADVISOR_SERVICE_ROLE_POLICY"></a>

---


##### `CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY` <a name="CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CUSTOMER_PROFILES_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY` <a name="AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_DISCOVERY_SERVICE_ROLE_POLICY"></a>

---


##### `MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY` <a name="MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.MEDIA_CONNECT_GATEWAY_INSTANCE_ROLE_POLICY"></a>

---


##### `AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY` <a name="AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSMANAGEDSERVICES_CONTACTSSERVICEROLEPOLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_AI_SERVICES_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY` <a name="AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_CODE_WHISPERER_POLICY"></a>

---


##### `AMAZON_GRAFANA_CLOUD_WATCH_ACCESS` <a name="AMAZON_GRAFANA_CLOUD_WATCH_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_GRAFANA_CLOUD_WATCH_ACCESS"></a>

---


##### `AWSGROUND_STATION_AGENT_INSTANCE_POLICY` <a name="AWSGROUND_STATION_AGENT_INSTANCE_POLICY" id="cdk-common.AWSManagedPolicies.AWSGROUND_STATION_AGENT_INSTANCE_POLICY"></a>

---


##### `VPCLATTICE_SERVICES_INVOKE_ACCESS` <a name="VPCLATTICE_SERVICES_INVOKE_ACCESS" id="cdk-common.AWSManagedPolicies.VPCLATTICE_SERVICES_INVOKE_ACCESS"></a>

---


##### `VPCLATTICE_READ_ONLY_ACCESS` <a name="VPCLATTICE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.VPCLATTICE_READ_ONLY_ACCESS"></a>

---


##### `VPCLATTICE_FULL_ACCESS` <a name="VPCLATTICE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.VPCLATTICE_FULL_ACCESS"></a>

---


##### `AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS` <a name="AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS" id="cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_ENVIRONMENTSWITHOUTBRIDGESFULLACCESS"></a>

---


##### `AWSMEDIA_CONNECT_SERVICE_POLICY` <a name="AWSMEDIA_CONNECT_SERVICE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMEDIA_CONNECT_SERVICE_POLICY"></a>

---


##### `AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY` <a name="AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPROTON_SERVICE_GIT_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY` <a name="AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_CATALOG_ORGS_DATA_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS` <a name="AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_MODEL_REGISTRY_FULL_ACCESS"></a>

---


##### `AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY` <a name="AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSUSER_NOTIFICATIONS_SERVICE_LINKED_ROLE_POLICY"></a>

---


##### `AMAZON_CODE_CATALYST_SUPPORT_ACCESS` <a name="AMAZON_CODE_CATALYST_SUPPORT_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_SUPPORT_ACCESS"></a>

---


##### `AMAZON_CODE_CATALYST_READ_ONLY_ACCESS` <a name="AMAZON_CODE_CATALYST_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_CODE_CATALYST_FULL_ACCESS` <a name="AMAZON_CODE_CATALYST_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_CATALYST_FULL_ACCESS"></a>

---


##### `ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY` <a name="ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY" id="cdk-common.AWSManagedPolicies.ROSACLOUD_NETWORK_CONFIG_OPERATOR_POLICY"></a>

---


##### `ROSAWORKER_INSTANCE_POLICY` <a name="ROSAWORKER_INSTANCE_POLICY" id="cdk-common.AWSManagedPolicies.ROSAWORKER_INSTANCE_POLICY"></a>

---


##### `ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY` <a name="ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY" id="cdk-common.AWSManagedPolicies.ROSAAMAZON_EBSCSI_DRIVER_OPERATOR_POLICY"></a>

---


##### `ROSAINGRESS_OPERATOR_POLICY` <a name="ROSAINGRESS_OPERATOR_POLICY" id="cdk-common.AWSManagedPolicies.ROSAINGRESS_OPERATOR_POLICY"></a>

---


##### `ROSACONTROL_PLANE_OPERATOR_POLICY` <a name="ROSACONTROL_PLANE_OPERATOR_POLICY" id="cdk-common.AWSManagedPolicies.ROSACONTROL_PLANE_OPERATOR_POLICY"></a>

---


##### `AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS` <a name="AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS` <a name="AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_INGESTION_FULL_ACCESS"></a>

---


##### `AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY` <a name="AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSWELL_ARCHITECTED_DISCOVERY_SERVICE_ROLE_POLICY"></a>

---


##### `ROSAKUBE_CONTROLLER_POLICY` <a name="ROSAKUBE_CONTROLLER_POLICY" id="cdk-common.AWSManagedPolicies.ROSAKUBE_CONTROLLER_POLICY"></a>

---


##### `ROSAKMSPROVIDER_POLICY` <a name="ROSAKMSPROVIDER_POLICY" id="cdk-common.AWSManagedPolicies.ROSAKMSPROVIDER_POLICY"></a>

---


##### `ROSAIMAGE_REGISTRY_OPERATOR_POLICY` <a name="ROSAIMAGE_REGISTRY_OPERATOR_POLICY" id="cdk-common.AWSManagedPolicies.ROSAIMAGE_REGISTRY_OPERATOR_POLICY"></a>

---


##### `AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY` <a name="AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_PATH_COMPONENT_READ_POLICY"></a>

---


##### `KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY` <a name="KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.KEYSPACES_REPLICATION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS` <a name="AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_SCAN_ACCESS"></a>

---


##### `AMAZON_CODE_GURU_SECURITY_FULL_ACCESS` <a name="AMAZON_CODE_GURU_SECURITY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_CODE_GURU_SECURITY_FULL_ACCESS"></a>

---


##### `AWSFIN_SPACE_SERVICE_ROLE_POLICY` <a name="AWSFIN_SPACE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSFIN_SPACE_SERVICE_ROLE_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_CROSS_ACCOUNT_REPLICATION_POLICY"></a>

---


##### `AWSDMSSERVERLESS_SERVICE_ROLE_POLICY` <a name="AWSDMSSERVERLESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDMSSERVERLESS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SECURITY_LAKE_ADMINISTRATOR` <a name="AMAZON_SECURITY_LAKE_ADMINISTRATOR" id="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_ADMINISTRATOR"></a>

---


##### `ROSASRESUPPORT_POLICY` <a name="ROSASRESUPPORT_POLICY" id="cdk-common.AWSManagedPolicies.ROSASRESUPPORT_POLICY"></a>

---


##### `AMAZON_DOC_DB_ELASTIC_FULL_ACCESS` <a name="AMAZON_DOC_DB_ELASTIC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_FULL_ACCESS"></a>

---


##### `AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY` <a name="AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCONTROL_TOWER_ACCOUNT_SERVICE_ROLE_POLICY"></a>

---


##### `ROSAINSTALLER_POLICY` <a name="ROSAINSTALLER_POLICY" id="cdk-common.AWSManagedPolicies.ROSAINSTALLER_POLICY"></a>

---


##### `AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS` <a name="AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DOC_DB_ELASTIC_READ_ONLY_ACCESS"></a>

---


##### `ROSANODE_POOL_MANAGEMENT_POLICY` <a name="ROSANODE_POOL_MANAGEMENT_POLICY" id="cdk-common.AWSManagedPolicies.ROSANODE_POOL_MANAGEMENT_POLICY"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_NETWORK_REPLICATION_POLICY"></a>

---


##### `AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY` <a name="AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_REACHABILITY_ANALYZER_FULL_ACCESS_POLICY"></a>

---


##### `AMAZON_MACIE_READ_ONLY_ACCESS` <a name="AMAZON_MACIE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_MACIE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY` <a name="AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_VPC_NETWORK_ACCESS_ANALYZER_FULL_ACCESS_POLICY"></a>

---


##### `EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L` <a name="EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L" id="cdk-common.AWSManagedPolicies.EMRDESCRIBE_CLUSTER_POLICY_FOR_EMRWA_L"></a>

---


##### `AWSAPP_FABRIC_SERVICE_ROLE_POLICY` <a name="AWSAPP_FABRIC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY` <a name="AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY" id="cdk-common.AWSManagedPolicies.AWSRESILIENCE_HUB_ASSSESSMENT_EXECUTION_POLICY"></a>

---


##### `AWSAPP_FABRIC_FULL_ACCESS` <a name="AWSAPP_FABRIC_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_FULL_ACCESS"></a>

---


##### `AWSAPP_FABRIC_READ_ONLY_ACCESS` <a name="AWSAPP_FABRIC_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSAPP_FABRIC_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY` <a name="AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_COGNITO_UN_AUTHED_IDENTITIES_SESSION_POLICY"></a>

---


##### `AMAZON_EFSCSI_DRIVER_POLICY` <a name="AMAZON_EFSCSI_DRIVER_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EFSCSI_DRIVER_POLICY"></a>

---


##### `AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS` <a name="AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_FULL_ACCESS"></a>

---


##### `AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY` <a name="AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY" id="cdk-common.AWSManagedPolicies.AWSELEMENTAL_MEDIA_PACKAGE_V2_READ_ONLY"></a>

---


##### `AWSHEALTH_IMAGING_FULL_ACCESS` <a name="AWSHEALTH_IMAGING_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_FULL_ACCESS"></a>

---


##### `AWSHEALTH_IMAGING_READ_ONLY_ACCESS` <a name="AWSHEALTH_IMAGING_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSHEALTH_IMAGING_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_FULL_ACCESS_V2` <a name="CLOUD_WATCH_FULL_ACCESS_V2" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_FULL_ACCESS_V2"></a>

---


##### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_LAMBDA_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_API_GATEWAY_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_PARTNER_SERVICE_CATALOG_PRODUCTS_CLOUD_FORMATION_SERVICE_ROLE_POLICY"></a>

---


##### `AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY` <a name="AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY" id="cdk-common.AWSManagedPolicies.AWSMIGRATIONHUBREFACTORSPACES_SSMAUTOMATIONPOLICY"></a>

---


##### `AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS` <a name="AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_PERFORMANCE_INSIGHTS_FULL_ACCESS"></a>

---


##### `AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS` <a name="AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_FULL_ACCESS"></a>

---


##### `AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS` <a name="AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSENTITY_RESOLUTION_CONSOLE_READ_ONLY_ACCESS"></a>

---


##### `AWSARTIFACT_SERVICE_ROLE_POLICY` <a name="AWSARTIFACT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSARTIFACT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY` <a name="AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_MIGRATION_SERVICE_EC2_INSTANCE_POLICY"></a>

---


##### `AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2` <a name="AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2" id="cdk-common.AWSManagedPolicies.AMAZON_LAUNCH_WIZARD_FULL_ACCESS_V2"></a>

---


##### `AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY` <a name="AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICEROLEFORCLOUDWATCHMETRICS_DBPERFINSIGHTSSERVICEROLEPOLICY"></a>

---


##### `AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY` <a name="AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY"></a>

---


##### `AMAZONKEYSPACESREADONLYACCESS_V2` <a name="AMAZONKEYSPACESREADONLYACCESS_V2" id="cdk-common.AWSManagedPolicies.AMAZONKEYSPACESREADONLYACCESS_V2"></a>

---


##### `AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY` <a name="AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY" id="cdk-common.AWSManagedPolicies.AWSELASTIC_DISASTER_RECOVERY_LAUNCH_ACTIONS_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_FULL_ACCESS` <a name="AMAZON_DATA_ZONE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_ACCESS"></a>

---


##### `AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY` <a name="AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_MANAGE_ACCESS_ROLE_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY` <a name="AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_REDSHIFT_GLUE_PROVISIONING_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY` <a name="AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_GLUE_MANAGE_ACCESS_ROLE_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_FULL_USER_ACCESS` <a name="AMAZON_DATA_ZONE_FULL_USER_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_FULL_USER_ACCESS"></a>

---


##### `AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY` <a name="AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_DOMAIN_EXECUTION_ROLE_POLICY"></a>

---


##### `AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY` <a name="AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSS3_ON_OUTPOSTS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DIRECT_DEPLOY_ACCESS"></a>

---


##### `AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS` <a name="AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMPLIFY_BACKEND_DEPLOY_FULL_ACCESS"></a>

---


##### `AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY` <a name="AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_CONNECT_SYNCHRONIZATION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_DATA_PREP_FULL_ACCESS"></a>

---


##### `AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS` <a name="AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_LIFECYCLE_MANAGER_SSM_FULL_ACCESS"></a>

---


##### `AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT` <a name="AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT" id="cdk-common.AWSManagedPolicies.AWSIAMIDENTITY_CENTER_ALLOW_LIST_FOR_IDENTITY_CONTEXT"></a>

---


##### `CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY` <a name="CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_SERVICE_ROLE_POLICY"></a>

---


##### `PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION` <a name="PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION" id="cdk-common.AWSManagedPolicies.PARTNER_CENTRAL_ACCOUNT_MANAGEMENT_USER_ROLE_ASSOCIATION"></a>

---


##### `AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING` <a name="AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_POLICY_FOR_BACKUP_RESTORE_TESTING"></a>

---


##### `AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY` <a name="AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSINCIDENT_MANAGER_INCIDENT_ACCESS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY` <a name="AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSIO_T_TWIN_MAKER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS` <a name="AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRESOURCE_EXPLORER_ORGANIZATIONS_ACCESS"></a>

---


##### `AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS` <a name="AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS" id="cdk-common.AWSManagedPolicies.AWSRE_POST_PRIVATE_CLOUD_WATCH_ACCESS"></a>

---


##### `AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY` <a name="AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_DEPLOYMENT_SERVICE_ROLE_POLICY"></a>

---


##### `AWSGIT_SYNC_SERVICE_ROLE_POLICY` <a name="AWSGIT_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSGIT_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY` <a name="EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY" id="cdk-common.AWSManagedPolicies.EC2_IMAGE_BUILDER_LIFECYCLE_EXECUTION_POLICY"></a>

---


##### `AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY` <a name="AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_AGENTLESS_SERVICE_ROLE_POLICY"></a>

---


##### `COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY` <a name="COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY` <a name="AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_PROMETHEUS_SCRAPER_SERVICE_ROLE_POLICY"></a>

---


##### `AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY` <a name="AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY" id="cdk-common.AWSManagedPolicies.AWSREPOST_SPACE_SUPPORT_OPERATIONS_POLICY"></a>

---


##### `AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2` <a name="AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2" id="cdk-common.AWSManagedPolicies.AWSELASTICDISASTERRECOVERYCONSOLEFULLACCESS_V2"></a>

---


##### `AMAZON_ONE_ENTERPRISE_FULL_ACCESS` <a name="AMAZON_ONE_ENTERPRISE_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_FULL_ACCESS"></a>

---


##### `AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS` <a name="AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS` <a name="AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ONE_ENTERPRISE_INSTALLER_ACCESS"></a>

---


##### `AMAZON_Q_FULL_ACCESS` <a name="AMAZON_Q_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_Q_FULL_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY` <a name="AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_NEPTUNE_GRAPH_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CLUSTER_INSTANCE_ROLE_POLICY"></a>

---


##### `AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY` <a name="AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY" id="cdk-common.AWSManagedPolicies.AWSZONAL_AUTOSHIFT_PRACTICE_RUN_SLR_POLICY"></a>

---


##### `AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS` <a name="AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_READ_ONLY_ACCESS"></a>

---


##### `AWSCLEAN_ROOMS_ML_FULL_ACCESS` <a name="AWSCLEAN_ROOMS_ML_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSCLEAN_ROOMS_ML_FULL_ACCESS"></a>

---


##### `NEPTUNE_GRAPH_READ_ONLY_ACCESS` <a name="NEPTUNE_GRAPH_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.NEPTUNE_GRAPH_READ_ONLY_ACCESS"></a>

---


##### `IVSREAD_ONLY_ACCESS` <a name="IVSREAD_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.IVSREAD_ONLY_ACCESS"></a>

---


##### `AWSMSKREPLICATOR_EXECUTION_ROLE` <a name="AWSMSKREPLICATOR_EXECUTION_ROLE" id="cdk-common.AWSManagedPolicies.AWSMSKREPLICATOR_EXECUTION_ROLE"></a>

---


##### `AMAZON_BEDROCK_FULL_ACCESS` <a name="AMAZON_BEDROCK_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_FULL_ACCESS"></a>

---


##### `AMAZON_BEDROCK_READ_ONLY` <a name="AMAZON_BEDROCK_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_READ_ONLY"></a>

---


##### `COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS` <a name="COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_READ_ONLY_ACCESS"></a>

---


##### `IVSFULL_ACCESS` <a name="IVSFULL_ACCESS" id="cdk-common.AWSManagedPolicies.IVSFULL_ACCESS"></a>

---


##### `COST_OPTIMIZATION_HUB_ADMIN_ACCESS` <a name="COST_OPTIMIZATION_HUB_ADMIN_ACCESS" id="cdk-common.AWSManagedPolicies.COST_OPTIMIZATION_HUB_ADMIN_ACCESS"></a>

---


##### `CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY` <a name="CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_NETWORK_MONITOR_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY` <a name="AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_DASHBOARDS_SERVICE_ROLE_POLICY"></a>

---


##### `AWSARTIFACT_REPORTS_READ_ONLY_ACCESS` <a name="AWSARTIFACT_REPORTS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSARTIFACT_REPORTS_READ_ONLY_ACCESS"></a>

---


##### `AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2` <a name="AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2" id="cdk-common.AWSManagedPolicies.AWSGRAFANA_WORKSPACE_PERMISSION_MANAGEMENT_V2"></a>

---


##### `AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES` <a name="AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES" id="cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_VOLUMES"></a>

---


##### `AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY` <a name="AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY" id="cdk-common.AWSManagedPolicies.AMAZON_ECS_INFRASTRUCTURE_ROLE_POLICY_FOR_SERVICE_CONNECT_TRANSPORT_LAYER_SECURITY"></a>

---


##### `AMAZON_SECURITY_LAKE_METASTORE_MANAGER` <a name="AMAZON_SECURITY_LAKE_METASTORE_MANAGER" id="cdk-common.AWSManagedPolicies.AMAZON_SECURITY_LAKE_METASTORE_MANAGER"></a>

---


##### `AMAZON_INSPECTOR2_MANAGED_CIS_POLICY` <a name="AMAZON_INSPECTOR2_MANAGED_CIS_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_INSPECTOR2_MANAGED_CIS_POLICY"></a>

---


##### `AMAZON_LEX_REPLICATION_POLICY` <a name="AMAZON_LEX_REPLICATION_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_LEX_REPLICATION_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS` <a name="AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_BEDROCK_ACCESS"></a>

---


##### `AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY` <a name="AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_PRIVATE_MARKETPLACE_ADMIN_POLICY"></a>

---


##### `AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY` <a name="AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_RDS_CUSTOM_INSTANCE_PROFILE_ROLE_POLICY"></a>

---


##### `AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY` <a name="AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSMARKETPLACE_RESALE_AUTHORIZATION_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY` <a name="AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS` <a name="AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_TIMESTREAM_INFLUX_DB_FULL_ACCESS"></a>

---


##### `AWSEC2_VSS_SNAPSHOT_POLICY` <a name="AWSEC2_VSS_SNAPSHOT_POLICY" id="cdk-common.AWSManagedPolicies.AWSEC2_VSS_SNAPSHOT_POLICY"></a>

---


##### `AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY` <a name="AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_EXPORT_POLICY"></a>

---


##### `AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY` <a name="AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SIGHT_ASSET_BUNDLE_IMPORT_POLICY"></a>

---


##### `AWSDEADLINECLOUD_USERACCESSFARMS` <a name="AWSDEADLINECLOUD_USERACCESSFARMS" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFARMS"></a>

---


##### `AWSDEADLINECLOUD_USERACCESSFLEETS` <a name="AWSDEADLINECLOUD_USERACCESSFLEETS" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSFLEETS"></a>

---


##### `AWSDEADLINECLOUD_USERACCESSJOBS` <a name="AWSDEADLINECLOUD_USERACCESSJOBS" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSJOBS"></a>

---


##### `AWSDEADLINECLOUD_USERACCESSQUEUES` <a name="AWSDEADLINECLOUD_USERACCESSQUEUES" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_USERACCESSQUEUES"></a>

---


##### `AWSDEADLINECLOUD_FLEETWORKER` <a name="AWSDEADLINECLOUD_FLEETWORKER" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_FLEETWORKER"></a>

---


##### `AWSDEADLINECLOUD_WORKERHOST` <a name="AWSDEADLINECLOUD_WORKERHOST" id="cdk-common.AWSManagedPolicies.AWSDEADLINECLOUD_WORKERHOST"></a>

---


##### `SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY` <a name="SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.SPLIT_COST_ALLOCATION_DATA_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY` <a name="AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_ENVIRONMENT_ROLE_PERMISSIONS_BOUNDARY"></a>

---


##### `AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY` <a name="AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_PROVISIONING_ROLE_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY` <a name="AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_SAGE_MAKER_MANAGE_ACCESS_ROLE_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_AMAZON_Q_DEVELOPER` <a name="AWSSERVICE_ROLE_FOR_AMAZON_Q_DEVELOPER" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_AMAZON_Q_DEVELOPER"></a>

---


##### `AWSSERVICE_ROLE_FOR_USER_SUBSCRIPTIONS` <a name="AWSSERVICE_ROLE_FOR_USER_SUBSCRIPTIONS" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_USER_SUBSCRIPTIONS"></a>

---


##### `QBUSINESS_SERVICE_ROLE_POLICY` <a name="QBUSINESS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.QBUSINESS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_ROUTE53_PROFILES_READ_ONLY_ACCESS` <a name="AMAZON_ROUTE53_PROFILES_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_PROFILES_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ROUTE53_PROFILES_FULL_ACCESS` <a name="AMAZON_ROUTE53_PROFILES_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_ROUTE53_PROFILES_FULL_ACCESS"></a>

---


##### `AMAZON_OPEN_SEARCH_DIRECT_QUERY_GLUE_CREATE_ACCESS` <a name="AMAZON_OPEN_SEARCH_DIRECT_QUERY_GLUE_CREATE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_OPEN_SEARCH_DIRECT_QUERY_GLUE_CREATE_ACCESS"></a>

---


##### `EC2_FAST_LAUNCH_FULL_ACCESS` <a name="EC2_FAST_LAUNCH_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.EC2_FAST_LAUNCH_FULL_ACCESS"></a>

---


##### `AMAZON_SES_SERVICE_ROLE_POLICY` <a name="AMAZON_SES_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SES_SERVICE_ROLE_POLICY"></a>

---


##### `CLOUD_WATCH_APPLICATION_SIGNALS_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_APPLICATION_SIGNALS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_APPLICATION_SIGNALS_FULL_ACCESS` <a name="CLOUD_WATCH_APPLICATION_SIGNALS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_APPLICATION_SIGNALS_FULL_ACCESS"></a>

---


##### `AWSBCMDATA_EXPORTS_SERVICE_ROLE_POLICY` <a name="AWSBCMDATA_EXPORTS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSBCMDATA_EXPORTS_SERVICE_ROLE_POLICY"></a>

---


##### `OPENSEARCH_INGESTION_SELF_MANAGED_VPCE_POLICY` <a name="OPENSEARCH_INGESTION_SELF_MANAGED_VPCE_POLICY" id="cdk-common.AWSManagedPolicies.OPENSEARCH_INGESTION_SELF_MANAGED_VPCE_POLICY"></a>

---


##### `AWSAPPLICATION_AUTOSCALING_WORK_SPACES_POOL_POLICY` <a name="AWSAPPLICATION_AUTOSCALING_WORK_SPACES_POOL_POLICY" id="cdk-common.AWSManagedPolicies.AWSAPPLICATION_AUTOSCALING_WORK_SPACES_POOL_POLICY"></a>

---


##### `ECRTEMPLATE_SERVICE_ROLE_POLICY` <a name="ECRTEMPLATE_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.ECRTEMPLATE_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_WORK_SPACES_SECURE_BROWSER_READ_ONLY` <a name="AMAZON_WORK_SPACES_SECURE_BROWSER_READ_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_SECURE_BROWSER_READ_ONLY"></a>

---


##### `SSMQUICK_SETUP_ROLE_POLICY` <a name="SSMQUICK_SETUP_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.SSMQUICK_SETUP_ROLE_POLICY"></a>

---


##### `AWSQUICK_SETUP_PATCH_POLICY_BASELINE_ACCESS` <a name="AWSQUICK_SETUP_PATCH_POLICY_BASELINE_ACCESS" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_BASELINE_ACCESS"></a>

---


##### `AWSSYSTEMS_MANAGER_ENABLE_CONFIG_RECORDING_EXECUTION_POLICY` <a name="AWSSYSTEMS_MANAGER_ENABLE_CONFIG_RECORDING_EXECUTION_POLICY" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ENABLE_CONFIG_RECORDING_EXECUTION_POLICY"></a>

---


##### `AWSSYSTEMS_MANAGER_ENABLE_EXPLORER_EXECUTION_POLICY` <a name="AWSSYSTEMS_MANAGER_ENABLE_EXPLORER_EXECUTION_POLICY" id="cdk-common.AWSManagedPolicies.AWSSYSTEMS_MANAGER_ENABLE_EXPLORER_EXECUTION_POLICY"></a>

---


##### `AWSQUICK_SETUP_DEV_OPS_GURU_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_DEV_OPS_GURU_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DEV_OPS_GURU_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_PATCH_POLICY_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_PATCH_POLICY_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_SSM_HOST_MGMT_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_SSM_HOST_MGMT_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_SSM_HOST_MGMT_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_DISTRIBUTOR_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_DISTRIBUTOR_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DISTRIBUTOR_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_CFGC_PACKS_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_CFGC_PACKS_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_CFGC_PACKS_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_SCHEDULER_PERMISSIONS_BOUNDARY` <a name="AWSQUICK_SETUP_SCHEDULER_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_SCHEDULER_PERMISSIONS_BOUNDARY"></a>

---


##### `AWSQUICK_SETUP_DEPLOYMENT_ROLE_POLICY` <a name="AWSQUICK_SETUP_DEPLOYMENT_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_DEPLOYMENT_ROLE_POLICY"></a>

---


##### `AWSQUICK_SETUP_PATCH_POLICY_DEPLOYMENT_ROLE_POLICY` <a name="AWSQUICK_SETUP_PATCH_POLICY_DEPLOYMENT_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSQUICK_SETUP_PATCH_POLICY_DEPLOYMENT_ROLE_POLICY"></a>

---


##### `AMAZON_WORK_SPACES_POOL_SERVICE_ACCESS` <a name="AMAZON_WORK_SPACES_POOL_SERVICE_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_POOL_SERVICE_ACCESS"></a>

---


##### `AMAZON_Q_DEVELOPER_ACCESS` <a name="AMAZON_Q_DEVELOPER_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_Q_DEVELOPER_ACCESS"></a>

---


##### `APP_STUDIO_SERVICE_ROLE_POLICY` <a name="APP_STUDIO_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.APP_STUDIO_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_WORK_SPACES_THIN_CLIENT_READ_ONLY_ACCESS` <a name="AMAZON_WORK_SPACES_THIN_CLIENT_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_THIN_CLIENT_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_SAGE_MAKER_CANVAS_EMR_SERVERLESS_EXECUTION_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_CANVAS_EMR_SERVERLESS_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_CANVAS_EMR_SERVERLESS_EXECUTION_ROLE_POLICY"></a>

---


##### `AMAZON_BEDROCK_STUDIO_PERMISSIONS_BOUNDARY` <a name="AMAZON_BEDROCK_STUDIO_PERMISSIONS_BOUNDARY" id="cdk-common.AWSManagedPolicies.AMAZON_BEDROCK_STUDIO_PERMISSIONS_BOUNDARY"></a>

---


##### `AMAZON_WORK_SPACES_THIN_CLIENT_FULL_ACCESS` <a name="AMAZON_WORK_SPACES_THIN_CLIENT_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_WORK_SPACES_THIN_CLIENT_FULL_ACCESS"></a>

---


##### `AWSCOMPROMISED_KEY_QUARANTINE_V3` <a name="AWSCOMPROMISED_KEY_QUARANTINE_V3" id="cdk-common.AWSManagedPolicies.AWSCOMPROMISED_KEY_QUARANTINE_V3"></a>

---


##### `AWSPCSSERVICE_ROLE_POLICY` <a name="AWSPCSSERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSPCSSERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_SAGE_MAKER_HYPER_POD_SERVICE_ROLE_POLICY` <a name="AMAZON_SAGE_MAKER_HYPER_POD_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_SAGE_MAKER_HYPER_POD_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDIRECTORY_SERVICE_DATA_FULL_ACCESS` <a name="AWSDIRECTORY_SERVICE_DATA_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_DATA_FULL_ACCESS"></a>

---


##### `AWSDIRECTORY_SERVICE_DATA_READ_ONLY_ACCESS` <a name="AWSDIRECTORY_SERVICE_DATA_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDIRECTORY_SERVICE_DATA_READ_ONLY_ACCESS"></a>

---


##### `QAPPS_SERVICE_ROLE_POLICY` <a name="QAPPS_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.QAPPS_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EKS_WORKER_NODE_MINIMAL_POLICY` <a name="AMAZON_EKS_WORKER_NODE_MINIMAL_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_WORKER_NODE_MINIMAL_POLICY"></a>

---


##### `AWSSERVICE_ROLE_FOR_PROCUREMENT_INSIGHTS_POLICY` <a name="AWSSERVICE_ROLE_FOR_PROCUREMENT_INSIGHTS_POLICY" id="cdk-common.AWSManagedPolicies.AWSSERVICE_ROLE_FOR_PROCUREMENT_INSIGHTS_POLICY"></a>

---


##### `AMAZON_E_C2_CONTAINER_REGISTRY_PULL_ONLY` <a name="AMAZON_E_C2_CONTAINER_REGISTRY_PULL_ONLY" id="cdk-common.AWSManagedPolicies.AMAZON_E_C2_CONTAINER_REGISTRY_PULL_ONLY"></a>

---


##### `AWSDATA_SYNC_SERVICE_ROLE_POLICY` <a name="AWSDATA_SYNC_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSDATA_SYNC_SERVICE_ROLE_POLICY"></a>

---


##### `AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_ORGANIZATION_DISCOVERY` <a name="AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_ORGANIZATION_DISCOVERY" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_ORGANIZATION_DISCOVERY"></a>

---


##### `AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_LICENSE_MANAGEMENT` <a name="AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_LICENSE_MANAGEMENT" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_SERVICE_ROLE_POLICY_FOR_LICENSE_MANAGEMENT"></a>

---


##### `AWSSOCIAL_MESSAGING_SERVICE_ROLE_POLICY` <a name="AWSSOCIAL_MESSAGING_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSSOCIAL_MESSAGING_SERVICE_ROLE_POLICY"></a>

---


##### `RESOURCE_GROUPS_TAGGING_API_TAG_UNTAG_SUPPORTED_RESOURCES` <a name="RESOURCE_GROUPS_TAGGING_API_TAG_UNTAG_SUPPORTED_RESOURCES" id="cdk-common.AWSManagedPolicies.RESOURCE_GROUPS_TAGGING_API_TAG_UNTAG_SUPPORTED_RESOURCES"></a>

---


##### `AMAZON_VERIFIED_PERMISSIONS_FULL_ACCESS` <a name="AMAZON_VERIFIED_PERMISSIONS_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_VERIFIED_PERMISSIONS_FULL_ACCESS"></a>

---


##### `AMAZON_VERIFIED_PERMISSIONS_READ_ONLY_ACCESS` <a name="AMAZON_VERIFIED_PERMISSIONS_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.AMAZON_VERIFIED_PERMISSIONS_READ_ONLY_ACCESS"></a>

---


##### `CLOUD_WATCH_LAMBDA_APPLICATION_SIGNALS_EXECUTION_ROLE_POLICY` <a name="CLOUD_WATCH_LAMBDA_APPLICATION_SIGNALS_EXECUTION_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_LAMBDA_APPLICATION_SIGNALS_EXECUTION_ROLE_POLICY"></a>

---


##### `CLOUD_WATCH_INTERNET_MONITOR_FULL_ACCESS` <a name="CLOUD_WATCH_INTERNET_MONITOR_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_FULL_ACCESS"></a>

---


##### `AWSDATA_EXCHANGE_DATA_GRANT_OWNER_FULL_ACCESS` <a name="AWSDATA_EXCHANGE_DATA_GRANT_OWNER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_DATA_GRANT_OWNER_FULL_ACCESS"></a>

---


##### `AWSDATA_EXCHANGE_DATA_GRANT_RECEIVER_FULL_ACCESS` <a name="AWSDATA_EXCHANGE_DATA_GRANT_RECEIVER_FULL_ACCESS" id="cdk-common.AWSManagedPolicies.AWSDATA_EXCHANGE_DATA_GRANT_RECEIVER_FULL_ACCESS"></a>

---


##### `AWSCLOUD_FRONT_VPC_ORIGIN_SERVICE_ROLE_POLICY` <a name="AWSCLOUD_FRONT_VPC_ORIGIN_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AWSCLOUD_FRONT_VPC_ORIGIN_SERVICE_ROLE_POLICY"></a>

---


##### `AMAZON_EKS_NETWORKING_POLICY` <a name="AMAZON_EKS_NETWORKING_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_NETWORKING_POLICY"></a>

---


##### `AMAZON_EKS_LOAD_BALANCING_POLICY` <a name="AMAZON_EKS_LOAD_BALANCING_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_LOAD_BALANCING_POLICY"></a>

---


##### `AMAZON_EKS_BLOCK_STORAGE_POLICY` <a name="AMAZON_EKS_BLOCK_STORAGE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_BLOCK_STORAGE_POLICY"></a>

---


##### `AMAZON_EKS_COMPUTE_POLICY` <a name="AMAZON_EKS_COMPUTE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_EKS_COMPUTE_POLICY"></a>

---


##### `GAME_LIFT_CONTAINER_FLEET_POLICY` <a name="GAME_LIFT_CONTAINER_FLEET_POLICY" id="cdk-common.AWSManagedPolicies.GAME_LIFT_CONTAINER_FLEET_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_BEDROCK_MODEL_MANAGEMENT_POLICY` <a name="AMAZON_DATA_ZONE_BEDROCK_MODEL_MANAGEMENT_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_BEDROCK_MODEL_MANAGEMENT_POLICY"></a>

---


##### `AMAZON_DATA_ZONE_BEDROCK_MODEL_CONSUMPTION_POLICY` <a name="AMAZON_DATA_ZONE_BEDROCK_MODEL_CONSUMPTION_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_DATA_ZONE_BEDROCK_MODEL_CONSUMPTION_POLICY"></a>

---


##### `CLOUD_WATCH_INTERNET_MONITOR_READ_ONLY_ACCESS` <a name="CLOUD_WATCH_INTERNET_MONITOR_READ_ONLY_ACCESS" id="cdk-common.AWSManagedPolicies.CLOUD_WATCH_INTERNET_MONITOR_READ_ONLY_ACCESS"></a>

---


##### `AMAZON_ODB_SERVICE_ROLE_POLICY` <a name="AMAZON_ODB_SERVICE_ROLE_POLICY" id="cdk-common.AWSManagedPolicies.AMAZON_ODB_SERVICE_ROLE_POLICY"></a>

---

