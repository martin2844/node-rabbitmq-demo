import amqp from "amqplib";

export interface Job {
  id: number;
  description: string;
}

const publish = async (job: Job): Promise<void> => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    //assertQueue makes sure queue exists, and if not it creates it
    await channel.assertQueue("jobs");
    //sendToQueue("Which queue", buffer has to be sent)
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(job)));
    console.log("\x1b[36m%s\x1b[0m", "Job sent successfully");
  } catch (error) {
    console.log(error);
  }
};

export default publish;
