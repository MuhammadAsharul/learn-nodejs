test("test toBe", () => {
  const name = "Asharul";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Asharul");
});

test("test toEqual", () => {
  let person = { id: "Asharul" };
  Object.assign(person, { name: "asharul" });

  expect(person).toEqual({ id: "Asharul", name: "asharul" });
});
