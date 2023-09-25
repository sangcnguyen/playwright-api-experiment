## Introduction

This project demonstrates how to use Playwright to test an API and validate JSON schema.

## Prerequisites

- Node.js
- Playwright

## Installation

1. Clone the repository.
2. Install the dependencies by running `npm install`.

## Usage

1. Set the Bearer token in Playwright configuration to use your Bearer token. [Get here](https://gorest.co.in/my-account/access-tokens).
2. Run the tests using `npm run test`.

## Test Structure

The tests are organized into the following files:

- `*.test.ts`: Contains the test cases.
- `<endpoint-name>Schema.ts`: Contains the JSON schema for validating the API response.
