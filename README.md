# Serverless Users API (AWS CDK)

A simple serverless Users API built with **AWS CDK**, **API Gateway**, **AWS Lambda**, and **DynamoDB**.

This project demonstrates how to use AWS CDK to provision cloud infrastructure and implement a Http API that performs CRUD operations on a Users table.

---

## Architecture Overview


- **API Gateway (HTTP API)** receives incoming HTTP requests
- **Lambda** handles request routing and business logic
- **DynamoDB** stores user data using a simple key-based schema
- **AWS CDK** is used to define and deploy all infrastructure

---

## Features

- Create a user
- Update a user
- Delete a user
- Get a single user
- Get all users
- Fully serverless and scalable
- Pay-per-request DynamoDB billing
- Infrastructure defined as code using AWS CDK

---

## Tech Stack

- **AWS CDK**
- **AWS Lambda**
- **Amazon API Gateway**
- **Amazon DynamoDB**
- **TypeScript**

---

## API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| POST   | `/users`        | Create a user         |
| GET    | `/users`        | Get all users         |
| GET    | `/users/{id}`   | Get a single user     |
| PUT    | `/users/{id}`   | Update a user         |
| DELETE | `/users/{id}`   | Delete a user         |

---

## DynamoDB Schema

- **Table Name:** `UsersTable`
- **Partition Key:** `id` (string)

Each item represents a single user record.