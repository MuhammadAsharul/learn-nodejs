function samplePromise() {
  return Promise.resolve("eko");
}

// const name = await samplePromise();
// console.info(name);


async function run() {
  const name = await samplePromise();
  console.log(name);
}
run();
 