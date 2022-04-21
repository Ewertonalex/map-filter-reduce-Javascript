function somaNumerosArray(arr) {
  return arr.reduce(function(prev, current) {
    console.log({prev});
    console.log({current});
    return prev + current;
  })
}

const arr = [1, 2];

console.log(somaNumerosArray(arr));