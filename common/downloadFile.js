/**
 * Downloads a file
 * @param{string} realFileId file ID
 * @return{obj} file status
 * */
const downloadFile = async (realFileId) => {
  const googleAuth = require("./googleAuth");
  const service = googleAuth();
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app

  fileId = realFileId;
  try {
    const file = await service.files.get({
      fileId: fileId,
      alt: "media",
    });
    console.log(file.status);
    return file.data;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
};
module.exports = downloadFile;
