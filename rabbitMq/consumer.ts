import amqp from "amqplib";

const consume = async (): Promise<void> => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("jobs");
    channel.consume("jobs", (message) => {
      if (message?.content) {
        const content: Buffer = message?.content;
        console.log("Job content: ", JSON.parse(content.toString()));
        channel.ack(message);
        console.log("\x1b[35m%s\x1b[0m", "Message Acknowledged");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default consume;
