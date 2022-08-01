const googleAuth = () => {
  const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");
  const credentials = require("../credentials/credentials");

  const { private_key, client_email } = credentials;

  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
    credentials: { private_key, client_email },
  });

  const service = google.drive({ version: "v3", auth });
  return service;
};
module.exports = googleAuth;
