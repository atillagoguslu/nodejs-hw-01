import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf-8');
    console.log("Non-parsed file content:", fileContent);
    const parsedContacts = JSON.parse(fileContent);
    console.log("Parsed file content:", parsedContacts);
    return parsedContacts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
