const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(element) {
return element.reduce((acc, cur) => {
  console.log(acc)
  return acc.concat(cur)
}, [])
  }
  console.log(flatten(arrays))

