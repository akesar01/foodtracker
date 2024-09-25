import { writeFile } from 'fs';
import { stringify } from 'ini';
import { join } from 'path';
const CONFIG_FILEPATH = join(process.env.HOME || process.env.USERPROFILE, '.swiggy-analytics-config.ini');

// Specify your database file path here
const DB_FILEPATH = join(process.cwd(), 'swiggy.db');

export function saveConfig(username) {
    const config = {
        Auth: {
            Username: username
        }
    };
    const configString = stringify(config);
    writeFile(CONFIG_FILEPATH, configString, (err) => {
        if (err) {
            console.error('Error writing config file:', err);
        } else {
            console.log('Config file saved successfully.');
        }
    });
}