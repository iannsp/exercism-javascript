const delay = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
  }, 2000);
});

const asyncCall = async () => {
  try {
    const val = await delay();
    console.log(`Promise has been ${val}`);
  } catch(err) {
    console.error(err);
  }  
};
asyncCall();
asyncCall();
asyncCall();
asyncCall();
