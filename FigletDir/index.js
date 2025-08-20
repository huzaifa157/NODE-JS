var figlet = require("figlet");

figlet("MS PRETTY UNZILA BEGUM I LOVE YOU ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});