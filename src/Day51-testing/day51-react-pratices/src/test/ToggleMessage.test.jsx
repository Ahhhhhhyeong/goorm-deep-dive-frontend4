import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import ToggleMessage from '../components/ToggleMessage';

test('토글 버튼 클릭 여부에 따른 글 표출', async () => {
  render(<ToggleMessage />);
  const toggle = screen.getByText('토글');
  // 처음에는 없어야함! not 명령어사용
  expect(screen.queryByText('안녕하세요')).not.toBeInTheDocument();

  // 버튼 클릭
  fireEvent.click(toggle);

  // 비동기 사용
  expect(await screen.findByText('안녕하세요')).toBeInTheDocument();

  // 다시 클릭 시 사라져야함
  fireEvent.click(toggle);
  await waitFor(() => {
    expect(screen.queryByText('안녕하세요')).not.toBeInTheDocument();
  });
});

/*
findByText(): 요소를 찾을 때까지 기다리는 비동기 함수
waitFor(): 조건이 만족될 때까지 기다리는 함수
queryByText(): 즉시 찾고, 없으면 null 반환
*/
