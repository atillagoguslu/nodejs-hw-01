import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const writeContacts = async (updatedContacts) => {
  console.log("Updated contacts received by writeContacts:", updatedContacts);
  const stringifiedContacts = JSON.stringify(updatedContacts, null, 2);
  await fs.writeFile(PATH_DB, stringifiedContacts, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Contacts written successfully.");
    }
  });
};
