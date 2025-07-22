import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import TodoForm from '../components/TodoForm';

describe('투두 리스트 통합 테스트', () => {
  test('todo리스트 추가 + UI 상태 변환 확인', async () => {
    render(<TodoForm />);

    // 첫화면 체크
    expect(screen.getByText('할 일이 없습니다.')).toBeInTheDocument();

    //투두 리스트 추가 과정
    fireEvent.change(screen.getByPlaceholderText('할 일 입력'), {
      target: { value: '잠자기' },
    });
    fireEvent.click(screen.getByText('추가'));

    //추가 후 상태 확인
    await waitFor(() => {
      expect(screen.getByText('할 일 목록')).toBeInTheDocument();
    });
  });
});
