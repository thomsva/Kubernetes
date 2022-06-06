const randomString = Math.random().toString(16).substr(2, 16);
const interval = 5000;

const outputRandomString = () => {
  console.log(new Date(Date.now()), randomString);
  setTimeout(outputRandomString, interval);
};

outputRandomString();
