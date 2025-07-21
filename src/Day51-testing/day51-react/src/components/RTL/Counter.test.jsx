import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Counter from './Counter';

//IDLE에서 자동으로 import를 하는 경우가 있음
test('버튼 클릭 시 카운트 증가해야함', () => {
  // 1. 테스트 할 컴포넌트 가져오기
  render(<Counter />);
  // 2. 화면에서 특정 요소 찾기 (텍스트로 찾아서 글이 완전같아야함)
  const btn = screen.getByText('Add');
  // 3. 해당 버튼을 클릭하면 동작하는 시뮬레이션
  fireEvent.click(btn);
  // 만약 렌더링된 DOM구조를 확인하고싶을 때
  screen.debug();
  /* 4. 화면에서 'Counter Test : 1' 이라는 텍스트가 보여야 성공! */
  expect(screen.getByText('Counter Test : 1')).toBeInTheDocument();
});
