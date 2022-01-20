import publish from "./rabbitMq/publisher";
import consume from "./rabbitMq/consumer";

(async () => {
  await publish({ id: 25, description: "randomJobDesc" });
  await publish({ id: 24, description: "randomJobDesc2" });
  await consume();
})();
