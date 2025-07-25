import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import BasicTogglePage from '../pages/BasicTogglePage';
import userEvent from '@testing-library/user-event';

test('기본 토글 동작 테스트', async () => {
  const user = userEvent.setup();
  render(<BasicTogglePage />);

  // 열기/닫기 버튼 클릭
  const toggleBtn = screen.getByText('열기/닫기');
  await user.click(toggleBtn);

  expect(screen.getByText('모달 열림b')).toBeInTheDocument();
});
