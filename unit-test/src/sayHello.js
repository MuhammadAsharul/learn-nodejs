export const sayHello = (name) => {
  if (name) {
    return `Hello ${name}!`;
  } else {
    throw new Error("Missing parameter <name>");
  }
};
