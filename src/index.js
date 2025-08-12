import fs from 'fs';
import path from 'path';
import parse from './parsers.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

export default (filepath1, filepath2) => {
  const data1 = parse(readFile(filepath1), path.extname(filepath1));
  const data2 = parse(readFile(filepath2), path.extname(filepath2));

  return { data1, data2 };
};
