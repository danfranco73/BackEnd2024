// crea un path absoluto
import {fileURLToPath} from 'url'; // to make it work in nodejs
import {dirname} from 'path';  // to make it work in nodejs
const __filename = fileURLToPath(import.meta.url); // to make it work in nodejs
const __dirname = dirname(__filename); // to make it work in nodejs

export default __dirname;

