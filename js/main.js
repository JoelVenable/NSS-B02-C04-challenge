
function towerBuilder(n) { // n = number of floors
  var out = Array(n).fill('');
  const t = (n * 2) - 1, // total characters per row
    m = n - 1; //midpoint
  function isDot(i, j) {
    if (j < m - i || j > m + i) return " ";
    else return "*";
  }


  for (let i = 0; i < n; i++) { // floor number
    for (let j = 0; j < t; j++) { // lateral position
      out[i] += isDot(i, j);
    }
  }
  return out;
}