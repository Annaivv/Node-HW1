const fs = require("fs").promises;
const contactsPath = require("./db");
const { nanoid } = require("nanoid");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath.getContactLink(), "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(
      contactsPath.getContactLink(),
      JSON.stringify(contacts, null, 2)
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(data) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.push(newContact);
    await fs.writeFile(
      contactsPath.getContactLink(),
      JSON.stringify(contacts, null, 2)
    );
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
