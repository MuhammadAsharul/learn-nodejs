import { UserRepository } from "../src/user-repository";

jest.mock("../src/user-repository");

const repository = new UserRepository();
const service = new UserService(repository);

test("mock class save", () => {
  const user = {
    id: 1,
    name: "User Mock",
  };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("mock class findById", () => {
  const user = {
    id: 1,
    name: "User Mock",
  };

  repository.findById.mockReturnValueOnce(user);

  const result = service.findById(1);

  expect(result).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test("mock class findAll", () => {
  const users = [
    {
      id: 1,
      name: "User Mock",
    },
    {
      id: 2,
      name: "User Mock",
    },
  ];

  repository.findAll.mockReturnValue(users);

  const result = service.findAll();

  expect(result).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
