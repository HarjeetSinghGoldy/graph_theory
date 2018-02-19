function lcs(X, Y, m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }

  if (X[m - 1] == Y[n - 1]) {
    return 1 + lcs(X, Y, m - 1, n - 1);
  } else {
    return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));

  }
}

function max(a, b) {
  return (a > b) ? a : b;
}

var X = "AGGTAB";
var Y = "GXTXAYB";

var m = X.length;
var n = Y.length;

console.log("Length of LCS", lcs(X, Y, m, n));
