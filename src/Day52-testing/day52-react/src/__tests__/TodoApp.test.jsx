import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import TodoApp from '../pages/TodoApp';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Todo 통합 테스트', () => {
  // useInputWithSearch => app => todoList 로 보내서 출력하는 흐름 테스트
  it('할일 추가 기능테스트', async () => {
    render(<App />);
  });
});

/**
 //error
 * ReferenceError: expect is not defined
 => vite.config.js 에서 global 설정 추가


// Error: Could not determine window of node. Node was [object HTMLInputElement]
//  jsdom이랑 userEvent 객체랑 연결이 제대로 안되서 에러가 발생했을 수 있다
//  userEvent?
//   - 실제 사용자 행위를 더 현실감 있게 모방 
//     fireEvent 보다 고수준 인터랙션 제공한다

//  userEvent를 왜쓰는지?
//  -  실제 사용자의 동작과 최대한 유사하게 테스트
//  - 복잡한 이벤트 체인 처리 
//  - 사용성 테스트에 적합 
 */

/*
// 단위테스트 : test()
  test('할 일 추가 및 토글 변경', async () => {
    const user = userEvent.setup();
  
    render(<TodoApp />);
  
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('추가');
  
    await user.type(input, '테스트 할 일');
    await user.click(button);
  
    expect(screen.getByText('테스트 할 일')).toBeInTheDocument();
  
    // 상태 변경(클릭시 취소선)
    await userEvent.click(screen.getByText('테스트 할 일'));
    expect(screen.getByText('테스트 할 일')).toHaveStyle('text-decoration: line-through');
  });
*/
