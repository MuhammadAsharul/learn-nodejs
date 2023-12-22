function samplePromise() {
  return Promise.resolve("eko");
}

const name = await samplePromise();
console.info(name);

