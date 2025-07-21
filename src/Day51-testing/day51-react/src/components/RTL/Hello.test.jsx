import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Hello from './Hello';

// test(이름/설명, 실제 테스트하는 코드)
test('hello 컴포넌트가 바르게 렌더링 되어야함', () => {
  render(<Hello />);
  /* 렌더링 된 화면에 괄호안의 텍스트가 있는지 확인 */
  expect(screen.getByText('Hello, React + vitest')).toBeInTheDocument();
  // 해당 요소가 정말 DOM 안에 존재하는지 확인
});
/* 컴포넌트가 가짜 DOM에 마운트되는 함수
 => 화면에 리엑트 컴포넌트를 실제 그려주는 함수 */
