import { sayHelloAsync } from "../src/async.js";
// menjalankan test secara concurrent (berjalan bersamaan)
// gunakan test.concurrent
test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("Eko")).resolves.toBe("Hello Eko");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Eko")).resolves.toBe("Hello Eko");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Eko")).resolves.toBe("Hello Eko");
});

// max current adalah pengaturan jumlah maksimal test yang berjalan bersamaan
