import { APIResponse, defineConfig, expect } from '@playwright/test';
import Ajv from 'ajv';

const ajv = new Ajv({
  strict: false
});

expect.extend({
  async toMatchSchema(received: APIResponse, schema: object) {
    const response = await received.json();

    const validate = ajv.compile(schema);

    if (validate(response)) {
      return {
        message: () => 'schema matched',
        pass: true
      };
    } else {
      return {
        message: () => 'Result does not match schema. Details: \n' + JSON.stringify(validate.errors, null, 2),
        pass: false
      };
    }
  }
});

export default defineConfig({
  reporter: 'html',
  use: {
    baseURL: 'https://gorest.co.in/public/v2/',
    extraHTTPHeaders: {
      Authorization: `Bearer d33928bd79dc87b8318c777d86be70e40aec6242e9346e030b2b2431648b753c`
    },
    trace: 'on-first-retry'
  }
});
