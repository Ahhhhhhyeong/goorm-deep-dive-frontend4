# Zustand

- 리엑트 앱에서 사용하는 매우 가벼운 전역 상태 관리 라이브러리
- Redux 보다 훨씬 간단하고, Provider 없이 작동하며 Context도 필요 없다.
  -> 전역 상태의 함수 하나로 만들고 어디서든 가져다 쓰는 구조
- 저장소 하나만 만들어서 불러오면 된다!

- 다른 언어들하고의 호환성이 쉬움
- React 성능을 최적화 할 때 가장 인기있는 라이브러리
- 외부라이브러리 => `npm install zustand`

> 상태와 컴포넌트를 명확하게 분리하기 위해 app 폴더를 생성

---

## Zustand create()

> store를 담는 함수
>
> > 데이터 보관을 하는 함수

```js
export const useTodoStore = create((set) => ());
```

`set()` : 상태를 변경하는 함수
