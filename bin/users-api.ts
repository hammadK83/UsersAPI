#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DynamoDBStack } from '../lib/dynamodb-stack';
import { UsersApiStack } from '../lib/users-api-stack';

const app = new cdk.App();

// Create DynamoDB stack
const dynamodbStack = new DynamoDBStack(app, 'DynamoDBStack');

// Create Lambda stack with table name
const userApiStack = new UsersApiStack(app, 'UsersApiStack', { dynamodbStack });

userApiStack.addDependency(dynamodbStack);