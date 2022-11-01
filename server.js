function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Make this for travis
async function main() {
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
