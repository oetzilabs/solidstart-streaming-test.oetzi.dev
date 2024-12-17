export const domain =
  {
    production: "solidstart-streaming-test.oetzi.dev",
    dev: "dev.solidstart-streaming-test.oetzi.dev",
  }[$app.stage] || $app.stage + ".dev.solidstart-streaming-test.oetzi.dev";

export const zone = cloudflare.getZoneOutput({
  name: "oetzi.dev",
});

export const cf = sst.cloudflare.dns({
  zone: zone.zoneId,
});
