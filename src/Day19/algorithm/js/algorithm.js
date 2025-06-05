class algorithmInput {
  /** arr: 배열,  N : 아이템 개수, M : 배수 */
  constructor(arr, N, M) {
    this.arr = arr;
    this.N = N;
    this.M = M;
  }

  calc() {
    console.log(this.arr, this.N, this.M);
  }
}

const solution = () => {
  let inputValue = new algorithmInput([4, 2, 1, 3, 9, 5, 6], 7, 3);
  inputValue.calc();
};

console.log('-------알고리즘-------');
solution();
