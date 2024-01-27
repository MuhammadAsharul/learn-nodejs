import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Asharul");
  expect(result).toBe("Hello Asharul");
});

test("test async matcher", async () => {
  await expect(sayHelloAsync("Asharul")).resolves.toBe("Hello Asharul");
  await expect(sayHelloAsync()).rejects.toBe("name is empty");
});
