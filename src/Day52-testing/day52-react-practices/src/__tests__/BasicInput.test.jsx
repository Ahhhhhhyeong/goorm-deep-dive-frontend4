import { render, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { useInput } from '../hooks/useInputChange';
import { act } from 'react';
import { wait } from '@testing-library/user-event/dist/cjs/utils/index.js';

describe('기본 입력값 훅 페이지 테스트', () => {
  let result;
  // custom hook render
  beforeEach(() => {
    ({ result } = renderHook(() => useInput()));
  });

  it('초기값은 빈 값이어야 한다', () => {
    expect(result.current.value).toBe('');
  });

  it('값을 입력할 때, 값이 변해야한다.', () => {
    // 입력
    act(() => {
      result.current.handleInputChange({ target: { value: '홍길동' } });
    });

    expect(result.current.value).toBe('홍길동');
  });

  it('리셋을 작동 시, value값이 초기화 되어야한다.', () => {
    act(() => {
      result.current.resetValue();
    });

    expect(result.current.value).toBe('');
  });
});
