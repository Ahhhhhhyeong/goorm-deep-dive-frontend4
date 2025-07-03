# [Day39] 25.07.03 배운내용 정리

---

## 🧩 정렬 알고리즘

### ✅ 선택 정렬

- 가장 작은 데이터를 선택해서 앞쪽으로 순서대로 정렬하는 방식
- 배열을 처음부터 끝까지 돌면서 가장 작은 값을 찾아 현재 위치와 교환한다.

| 복잡도     | 표현식 |
| ---------- | ------ |
| 시간복잡도 | O(n^2) |
| 공간복잡도 | O(1)   |

> 비교적 간단하지만 느림!
>
> > _💡 실무에서는 잘 안사용하지만 면접에서 자주 나온다_

#### 코드 예시

```js
const arr = [5, 2, 4, 10, 8, 1, 3, 6];

// 선택정렬
const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // 위에서 가장 작은 공간의 번호를 가지고 와서 현재 i랑 위치를 교환한다.
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
};
```

---

### 📥 삽입 정렬

- 앞에서부터 차례대로 정렬된 부분에 알맞은 위치에 삽입하는 방식
- 각 숫자를 적절한 위치에 삽입하는 방식이다.
- 삽입정렬의 장점은 꼭 필요한 위치를 바꾸어 선택 정렬과 버블 정렬보다는 조금 효율적이다.
- 정렬된 데이터에 값을 추가할 때 삽입 정렬을 주로 사용한다.

| 복잡도     | 표현식       |
| ---------- | ------------ |
| 시간복잡도 | O(n), O(n^2) |
| 공간복잡도 | O(1)         |

> 이미 정렬이 되어있는 경우는 O(n)을 가지지만 무작위 또는 역순정렬의 경우 O(n^2)를 가진다.
>
> > _💡 실무에서는 소규모 알고리즘을 작성할 때 사용이 된다_

#### 코드 예시

```js
const test_array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// 값을 교체 할 때 사용할 임시 변수
let temp;

const insertSortFt = (arr) => {
  for (let i = 0; i < test_array.length; i++) {
    let j = i;

    while (test_array[j] > test_array[j + 1]) {
      console.error(`j: ${j}  j +1 :${j + 1}`);

      temp = test_array[j];
      test_array[j] = test_array[j + 1];
      test_array[j + 1] = temp;
      j--;
    }
  }
  return arr;
};
```
