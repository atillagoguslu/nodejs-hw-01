import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const contacts = await readContacts();
  console.log("Contacts:", contacts);
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    console.log("Generated contact:", contact, typeof contact);
    contacts.push(contact);
  };
  await writeContacts(contacts);
};

generateContacts(5);
