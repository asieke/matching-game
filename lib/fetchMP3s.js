const sdk = require('microsoft-cognitiveservices-speech-sdk');
const { Buffer } = require('buffer');
const { PassThrough } = require('stream');
const fs = require('fs');

const textToSpeech = async (key, region, text, filename) => {
  // convert callback function to promise
  return new Promise((resolve, reject) => {
    const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    speechConfig.speechSynthesisOutputFormat = 5; // mp3
    speechConfig.speechSynthesisVoiceName = 'en-US-JaneNeural';
    speechConfig.speechSynthesisRate = 0.9;

    let audioConfig = null;

    if (filename) {
      audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
    }

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    synthesizer.speakTextAsync(
      text,
      (result) => {
        const { audioData } = result;

        synthesizer.close();

        if (filename) {
          // return stream from file
          const audioFile = fs.createReadStream(filename);
          resolve(audioFile);
        } else {
          // return stream from memory
          const bufferStream = new PassThrough();
          bufferStream.end(Buffer.from(audioData));
          resolve(bufferStream);
        }
      },
      (error) => {
        synthesizer.close();
        reject(error);
      }
    );
  });
};

const fetchMP3s = async (cards) => {
  const key = process.env.MSFT_KEY;
  const region = 'eastus';

  for (let i = 0; i < cards.length; i++) {
    const text = cards[i];
    const filename = `./public/card-sounds/${text}.mp3`;

    if (!fs.existsSync(filename)) {
      await textToSpeech(key, region, text, filename);
    }
  }
};

module.exports = fetchMP3s;
