const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "z1ok3YKR#4ilwalNP9evRWwagsxFLfsNk16-FQro2odg5BOQ5sOo",
  MONGODB: process.env.MONGODB || "mongodb://mongo:LdNcceIKnuRDrTChlUJRskWnBHlmHpAj@ballast.proxy.rlwy.net:44304",
  OWNER_NUM: process.env.OWNER_NUM || "94785321998",
};
