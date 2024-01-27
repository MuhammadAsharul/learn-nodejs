import { sayHello } from "../src/sayHello.js";

test("Say Hello Eko success", () => {
  expect(sayHello("Eko")).toBe("Hello Eko!");
});

test.failing("Say Hello Eko failed", () => {
  sayHello(null);
});
