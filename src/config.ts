import * as dotenv from 'dotenv';

dotenv.config();

export default {
  test: process.env.ENV_TEST,
};
