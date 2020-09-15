module.exports = function check(str, bracketsConfig) {
  arr = str.split('');
  brr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0]) {
        if (brr.length > 0 && brr[brr.length-1] == bracketsConfig[j][0] && brr[brr.length-1] == bracketsConfig[j][1]) {
          brr.pop();
        } else brr.push(arr[i]);
        
      } else if (arr[i] == bracketsConfig[j][1]) {
        if (brr.length > 0 && brr[brr.length-1] == bracketsConfig[j][0]) {
          brr.pop();
        } else return false;
      }
    }
  }

  return (brr.length == 0);
}
