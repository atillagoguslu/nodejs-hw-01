import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const readContacts = async () => {
  fs.readFile(PATH_DB, (err, fileContent) => {
    try {
      console.log("Non-parsed file content:", fileContent);
      const parsedContacts = JSON.parse(fileContent);
      console.log("Parsed file content:", parsedContacts);
      return parsedContacts;
    } catch (error) {
      console.log(error);
    }
  });
};
