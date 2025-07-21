import { render, screen } from '@testing-library/react';
import LoginStatus from './LoginStatus';
import { expect } from 'vitest';

test('로그인 상태일  때 로그인 됨 이라고 보여야함', () => {
  render(<LoginStatus isLoginedIn={true} />);
  expect(screen.getByText('로그인 됨')).toBeInTheDocument();
});

test('로그인 상태 아닐 때 로그인 됨 이라고 보여야함', () => {
  render(<LoginStatus isLoginedIn={false} />);
  expect(screen.getByText('로그아웃')).toBeInTheDocument();
});
