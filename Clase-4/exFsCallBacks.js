// ejemplo fs con promesas y async/await 

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'files', 'file.txt');

const readFile = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

const writeFile = async () => {
    try {
        await fs.writeFile(filePath, 'Hola mundo');
    } catch (error) {
        console.error(error);
    }
};

const deleteFile = async () => {
    try {
        await fs.unlink(filePath);
    } catch (error) {
        console.error(error);
    }
};

const renameFile = async () => {
    try {
        await fs.rename(filePath, path.join(__dirname, 'files', 'file2.txt'));
    } catch (error) {
        console.error(error);
    }
};

const copyFile = async () => {
    try {
        await fs.copyFile(filePath, path.join(__dirname, 'files', 'file3.txt'));
    } catch (error) {
        console.error(error);
    }
};

const createDir = async () => {
    try {
        await fs.mkdir(path.join(__dirname, 'files', 'newDir'));
    } catch (error) {
        console.error(error);
    }
};

const readDir = async () => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'files'));
        console.log(files);
    } catch (error) {
        console.error(error);
    }
};

const deleteDir = async () => {
    try {
        await fs.rmdir(path.join(__dirname, 'files', 'newDir'));
    } catch (error) {
        console.error(error);
    }
};

readFile();
writeFile();
// deleteFile();
renameFile();
copyFile();
// createDir();
// readDir();
