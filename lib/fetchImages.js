const { Configuration, OpenAIApi } = require('openai');
const cloudinary = require('cloudinary').v2;
const { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } = require('remove.bg');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY || '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',
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dkit4ixkx',
  api_key: process.env.CLOUDINARY_API_KEY || '622458834833342',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'UxzpIj_U3Bi2_2ImHfoQmEiGbSI',
});

const openai = new OpenAIApi(configuration);

const fetchImage = async (name) => {
  const response = await openai.createImage({
    prompt: `High quality realistic drawing of a ${name}, digital art.  For a children's book.  In frame.  Wide angle.`,
    n: 1,
    size: '256x256',
  });

  const image_url = response.data.data[0].url;

  const outputFile = `public/card-images/${name}.png`;

  const result = await removeBackgroundFromImageUrl({
    url: image_url,
    apiKey: process.env.REMOVE_BG_KEY || 'bJGDfM2W2XT8isdHpz3JyqYg',
  });

  //upload the base64 image to cloudinary

  try {
    const res = await cloudinary.uploader.upload(
      `data:image/png;charset=utf-8;base64,${result.base64img}`,
      {
        resource_type: 'image',
        public_id: `${name}_image`,
        tags: `${name}_image`,
        folder: 'match-game',
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const images = [
  'Apple',
  'Balloon',
  'Caterpillar',
  'Dinosaur',
  'Elephant',
  'Frog',
  'Giraffe',
  'Horse',
  'Ice Cream',
  'Jaguar',
  'Kite',
  'Lion',
  'Monkey',
  'Nest',
  'Owl',
  'Parrot',
  'Queen',
  'Rocket',
  'Sun',
  'Table',
  'Umbrella',
  'Volcano',
  'Warthog',
  'Xylophone',
  'Yoga',
  'Zebra',
];

const main = async () => {
  for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
    await fetchImage(images[i]);
  }
};

main();
