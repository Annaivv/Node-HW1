const path = require("path");

const getContactLink = () => {
  const dataLink = path.join(__dirname, "contacts.json");
  return dataLink;
};

module.exports = {
  getContactLink,
};
