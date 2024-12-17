# Testing Streaming SolidStart via AWS Lambda

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
