import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import InputBox from './InputBox';

test('입력한 텍스트가 반영이 되어야 함', () => {
  // 1. connect components to render
  render(<InputBox />);

  //2. find element
  const input = screen.getByPlaceholderText('텍스트 입력');

  // 3. input요소에 'hello' 값을 입력하면 시뮬레이터돌려서 확인
  fireEvent.change(input, { target: { value: 'hello' } });

  // 4. 입력한 결과가 화면에 보여에 테스트 통과
  expect(screen.getByText('입력된 값: hello')).toBeInTheDocument();
});
