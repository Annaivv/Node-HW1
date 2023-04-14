const path = require("path");

const getContactLink = () => {
  const dataLink = path.join(__dirname, "contacts.json");
  //   console.log(dataLink);
  return dataLink;
};

module.exports = {
  getContactLink,
};
