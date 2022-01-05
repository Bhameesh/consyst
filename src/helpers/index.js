export function randomNumberPick(minm = 1, maxm = 999) {
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
