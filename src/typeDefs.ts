const path = require('path');
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './schemas'));

export default mergeTypes(typesArray, { all: true });
