require("dotenv").config();
const fileId = process.env.FILE_ID;

const downloadFile = require("./common/downloadFile");
downloadFile(fileId).then((data) => console.log(data));
