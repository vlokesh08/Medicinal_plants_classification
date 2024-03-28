const { model } = require('@tensorflow/tfjs');
const OpenAI = require('openai');
const Redis = require('ioredis');

const client = new Redis({
    host: 'localhost', // Redis server host
  port: 6379,  
});
const gpt = async (req, res) => {
    const {name} = req.body;
    const storded = await client.get(name);
    if (storded) {
      res.status(200).json({ message: storded });
      return;
    }
  const openai = new OpenAI({
    apiKey: process.env.OpenAI;
  });

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `Give me the medicinal uses of plant ${name}` }],
      model: 'gpt-3.5-turbo',
    });
    const response = chatCompletion.choices[0].message.content;

    // Store the response in Redis
    

    await client.set(name, response);


    // Send the response inside the try block
    res.json({ message : chatCompletion.choices[0].message.content });
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { gpt };
