function bar(num) {
  const arr1 = [];

  for (let i = 0; i < num; i += 1) {
    const arr2 = [];
    for (let j = 0; j < num; j += 1) {
      if (i === j || i + j + 1 === num) {
        arr2.push(2);
      } else if ((j > i && i + j + 1 < num) || (j < i && i + j + 1 > num)) {
        arr2.push(1);
      } else arr2.push(0);
    }
    arr1.push(arr2);
  }

  console.log(arr1);
}

bar(5);
bar(4);
bar(8);
