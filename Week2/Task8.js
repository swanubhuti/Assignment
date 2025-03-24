function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function example() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
      await sleep(1000); // Pause for 1 second (1000ms)
    }
    console.log("Loop complete");
  }

  example();