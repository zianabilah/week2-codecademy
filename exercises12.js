function konversiMenit(menit) {
  var second = menit%60;
  var minutes = (menit-second)/60;
  if (String(second).length === 1){
    return minutes+ ":"+ "0" + second;
  }else{
    return minutes + ":" + second;
  }
  // you can only write your code here!
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00