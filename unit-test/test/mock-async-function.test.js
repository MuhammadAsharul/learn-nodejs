import { getBalanceAsync } from "../src/async";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalanceAsync("budi", from)).resolves.toEqual({
    name: "budi",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Ups"));

  await getBalanceAsync("budi", from);
});

test("mock async function error matcher", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalanceAsync("budi", from)).rejects.toThrow("Rejected");
});
