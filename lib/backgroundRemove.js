const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dkit4ixkx',
  api_key: process.env.CLOUDINARY_API_KEY || '622458834833342',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'UxzpIj_U3Bi2_2ImHfoQmEiGbSI',
});

const main = async () => {
  // read the directory of images
  fs.readdir('./public/card-images/', async (err, files) => {
    if (err) throw err;

    // loop through the files and upload each one
    for (const file of files) {
      const base = file.replace(/\.[^/.]+$/, '');
      try {
        const result = await cloudinary.uploader.upload(`./public/card-images/${file}`, {
          resource_type: 'image',
          public_id: `${base}`,
          tags: `${base}`,
          folder: 'match-game',
          background_removal: 'cloudinary_ai',
        });
        console.log(`Uploaded ${file} to Cloudinary with public ID: ${result.public_id}`);
      } catch (error) {
        console.error(`Failed to upload ${file}`, error);
      }
    }
  });
};

main();
