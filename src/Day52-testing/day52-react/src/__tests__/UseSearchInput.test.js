import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, test } from 'vitest';
import { useInputWithSearch } from '../hooks/useInputWithSearch';
import { act } from 'react';

describe('useSearchInputWithSearch Custom Hook', () => {
  let result;
  // 각 테스트가 실행하기 전에 먼저 실행해라!
  beforeEach(() => {
    ({ result } = renderHook(() => useInputWithSearch()));
  });

  test('초기값이 빈 문자열이어야 한다', () => {
    // 커스텀 훅의 초기값이 비어있는지 확인
    expect(result.current.inputValue).toBe('');
    expect(result.current.searchTerm).toBe('');
  });

  test('입력값을 변경하면 inputValuedhk searchTerm이 변경된다.', () => {
    /* act() => 훅 안에서 상태를 바꾸는 함수
     */
    act(() => {
      result.current.handleInputChange({ target: { value: 'react' } });
    });

    expect(result.current.inputValue).toBe('react');
    expect(result.current.searchTerm).toBe('react');
  });

  test('resetInput 호출 시, inputValue, searchTerm 초기화 되어야한다', () => {
    //hook 상태 변경
    act(() => {
      result.current.handleInputChange({ target: { value: 'react' } });
    });
    //상태 변경 체크
    expect(result.current.inputValue).toBe('react');
    expect(result.current.searchTerm).toBe('react');

    //리셋 훅 실행
    act(() => {
      result.current.resetInput();
    });

    //상태변경 체크
    expect(result.current.inputValue).toBe('');
    expect(result.current.searchTerm).toBe('');
  });
});

/**
 * renderHook() 은 리액트의 훅을 테스트할 수있도록 도와주는
             함수다!
             컴포넌트 안에서만 사용하는 훅이기 때문에 그냥
            테스트를 진행하면 동작 하지 않는다.
            그래서 renderHook()해서 마치 컴포넌트 안에서
            훅을 실행하는 것처럼 테스트 할 수있다
 * BDD 
 * 테스트를 사용자의 행위 중심으로 자연어에 가깝게 작성하는 방식
 * 약간의 문장 흐름처럼 사용한다.
describe('✅ useSearchInputWithSearch Custom Hook', () => {
  it('초기값이 빈 문자열이어야 한다', () => {

  });
});
 * 
 */
