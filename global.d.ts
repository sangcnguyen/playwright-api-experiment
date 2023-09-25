export {};

declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> {
      toMatchSchema(schema: object): R;
    }
  }
}
