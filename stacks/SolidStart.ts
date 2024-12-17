import { cf, domain } from "./Domain";

export const solidStartApp = new sst.aws.SolidStart(`SolidStartApp`, {
  path: "packages/web",
  server: {
    runtime: "nodejs22.x",
  },
  domain: {
    name: domain,
    dns: cf,
  },
  invalidation: {
    paths: "all",
    wait: true,
  },
});
