import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    console.log("Updated contacts received by writeContacts:", updatedContacts);
    const stringifiedContacts = JSON.stringify(updatedContacts, null, 2);
    console.log("Stringified contacts:", stringifiedContacts);
    // Write the stringified contacts to the file with utf-8 encoding
    await fs.writeFile(PATH_DB, stringifiedContacts, { encoding: 'utf-8' });
    console.log("Contacts written successfully.");
  } catch (error) {
    console.log(error);
  }
};
