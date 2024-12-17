# Testing Streaming SolidStart via AWS Lambda

## Setup

Install dependencies:

```bash
bun install && bun run sst install
```

## Development

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

In order to deploy the app, you need to run the following command:

```bash
bun run sst deploy --stage production
```

This will build and deploy the app to the `production` stage.

- using aws-lambda preset
- `app.config.ts` is configured to use:

```ts
  server: {
    preset: "aws-lambda",
    compatibilityDate: "2024-11-23",
    awsLambda: {
      streaming: true,
    },
  },
```

URL: [https://solidstart-streaming-test.oetzi.dev](https://solidstart-streaming-test.oetzi.dev)
