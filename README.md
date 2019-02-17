# react-hooks 연습.

## Hooks의 사용 규칙
1. Hooks를 컴포넌트의 Top-level 에서만 사용 할 것.
  - Hooks 는 반복문이나, 조건문이나, 감싸진 함수에선 사용하면 안된다.
2. 리액트 함수에서만 사용 할 것
  - Hooks는 리액트 함수형 컴포넌트 내부에서만 사용해야 한다. 일반 JS 함수에서는 사용하면 안된다. 🙅‍♂️ 하지만 Custom Hook에서는 사용 가능하다.
  