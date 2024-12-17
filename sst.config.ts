/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "solidstart-streaming-test-oetzidev",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-central-1",
        },
        cloudflare: true,
      },
    };
  },
  async run() {
    const solidStart = await import("./stacks/SolidStart");

    return {
      solidStartUrl: $dev ? "http://localhost:3000" : solidStart.solidStartApp.url,
    };
  },
});
