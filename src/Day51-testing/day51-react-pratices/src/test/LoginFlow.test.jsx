import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import LoginForm from '../components/LoginForm';
import { useLoginStore } from '../stores/useLoginStore';

describe('로그인 흐름 통합 테스트', () => {
  test('login 테스트 + UI 상태 반영 확인', async () => {
    render(<LoginForm />);

    // 초기 UI 상태
    expect(screen.getByText('실패')).toBeInTheDocument();

    // 로그인 과정
    fireEvent.change(screen.getByPlaceholderText('id'), {
      target: { value: 'test@email.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('password'), {
      target: { value: '12345' },
    });
    fireEvent.click(screen.getByText('로그인'));

    // 로그인 후 상태 확인
    await waitFor(() => {
      expect(screen.getByText('성공')).toBeInTheDocument();
      expect(useLoginStore.getState().isLogin).toBe(true);
      expect(useLoginStore.getState().id).toBe('test@email.com');
    });
  });
});
