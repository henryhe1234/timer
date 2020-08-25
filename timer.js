const getArguments = () => {
  const args = process.argv.slice(2);
  return args.map(ele => Number(ele));
};

const timer = (arr) => {
  if(!arr){
    return console.log("no argument");
  }
  let finalArr = arr.filter(x => x > 0);
  for (i = 0; i < finalArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\x07`);

    }, finalArr[i] * 1000)
  };
}
timer(getArguments());