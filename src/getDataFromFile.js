import fs from 'fs';

const inputFile = process.argv.splice(2)[0];

const readDatafromFile = () => {
  fs.readFileSync(inputFile).toString();
};

export default readDatafromFile;
