import { calculate } from "../src/mock-function";
import { calculateAndReturn } from "../src/sum";
test("test calculate", () => {
  const callback = jest.fn(); // mock function adalah
  //   fungsi yang bisa kita buat untuk menggantikan fungsi asli yang ada di aplikasi kita.
  // Dengan mock function, kita bisa memastikan bahwa fungsi tersebut dipanggil, berapa kali dipanggil,
  // dan dengan parameter seperti apa dipanggilnya.

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30); // parameter pertama dari pemanggilan pertama,
  expect(callback.mock.calls[1][0]).toBe(30);
});

test("test calculate without mock return value", () => {
  const logging = (total) => {
    console.info(`Total is ${total}`);
  };
  calculate([10, 10, 10], logging);
  calculate([10, 10, 10, 10, 10], logging);
});

test("test mock return value", () => {
  const callback = jest.fn();

  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(80);

  expect(callback.mock.result[0]).toBe(40);
  expect(callback.mock.result[1]).toBe(80);

  test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => total * 2);

    expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
    expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

    expect(callback.mock.result[0]).toBe(60);
    expect(callback.mock.result[1]).toBe(100);
  });
});
