// Require the cloudinary library
import { v2 as cloudinary } from "cloudinary";

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: "dt2lzqwdz",
  api_key: "411469548255835",
  api_secret: "-nE7SckkFFLnFsxVAIhAmrQrg68",
  secure: true,
});

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    transformation: [{ crop: "thumb" }],
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};

//////////////////
//
// Main function
//
//////////////////
(async () => {
  await uploadImage("https://res.cloudinary.com/dtsydvdw8/image/upload/v1706421894/auvld2cvnhr6k6loaln1.png");
})();
