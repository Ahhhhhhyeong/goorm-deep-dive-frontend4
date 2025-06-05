class algorithmInput {
  /** arr: 배열,  N : 아이템 개수, M : 배수 */
  constructor(arr, N, M) {
    this.arr = arr;
    this.N = N;
    this.M = M;
  }

  calc() {
    const tempArr = this.arr;
    tempArr.sort();
    let answer = 0;
    for (let i = this.M; i < this.N; i++) {
      if (i % this.M == 0) {
        answer += tempArr[i];
      }
    }
    console.log(answer);
  }
}

const solution = () => {
  let inputValue = new algorithmInput([7, 6, 5, 4, 3, 2, 1], 7, 3);
  let inputValue2 = new algorithmInput([4, 2, 1, 3, 9, 5, 6], 7, 3);
  let inputValue3 = new algorithmInput([8, 6, 3, 3, 4, 1, 5, 7], 8, 2);
  inputValue3.calc();
  inputValue2.calc();
  inputValue.calc();
};

console.log('-------알고리즘-------');
solution();
