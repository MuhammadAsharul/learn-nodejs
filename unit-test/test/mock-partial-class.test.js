import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock partial class fincById", () => {
  const user = {
    id: 1,
    name: "User Mock",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  const result = service.findById(1);
  expect(result).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository, findById).toHaveBeenCalled();
  expect(repository, findById).toHaveBeenCalledWith(1);
});

test.failing("mock partial class findAll", () => {
  service.findAll();
});
