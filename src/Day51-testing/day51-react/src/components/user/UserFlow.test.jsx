/* 통합 테스트 */
import { describe, expect, test } from 'vitest';
import UserForm from './UserForm';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useUserStore } from '../../stores/userStore';
import UserDisplay from './UserDisplay';

/* describe(): 
  - 관련된 테스트를 그룹으로 묶어서 테스트하는 함수
  - 테스트 설명 단위를 명확하게, 가독성을 높임
  - 내부 test() 또는 'it()' 등을 포함
*/

describe('사용자 등록 흐름 통합 테스트', () => {
  test('이름 입력후 상태가 반영되야한다.', async () => {
    render(
      <>
        <UserForm />
        <UserDisplay />
      </>
    );
    // 1. 이름입력
    const input = screen.getByPlaceholderText('이름을 입력하세요');
    fireEvent.change(input, { target: { value: 'Seohee' } });

    // 2. 버튼 클릭
    fireEvent.click(screen.getByText('확인'));

    // 3. 상태 반영 기다린 후 확인
    await waitFor(() => {
      expect(screen.getByText('입력된 이름: Seohee')).toBeInTheDocument();
    });
  });
});

// describe('사용자 등록 흐름 테스트', () => {
//   test('이름 입력 후 저장되면 상태에 반영 되어야 함', () => {
//     render(<UserForm />);
//     fireEvent.change(screen.getByPlaceholderText('이름을 입력하세요'), {
//       target: { value: 'Jisoo' },
//     });
//     fireEvent.click(screen.getByText('확인'));
//     expect(useUserStore.getState().name).toBe('Jisoo');
//   });

//   test('입력이 없이 제출하면 아무일도 안일어남', () => {
//     render(<UserForm />);
//     fireEvent.click(screen.getByText('확인'));
//     expect(useUserStore.getState().name).toBe('');
//   });
// });

/*
expect(값).toBe(기대값)
- 값 자체를 비교
- 두 값이 정확히 같음(===)을 비교
- 단순 비교(숫자, 문자열, 불리언)

expect(값).toBeInTheDocument(기대값)
- 화면에 **존재**하는지 검사
- DOM요소가 존재 하는지 여부만 확인
- 살제 화면에 렌더링 된 요소를 확인할 때 사용
- setUpTests.js 안에 jest-dom이 import 되어있어야 함
---
예시 
expect(1).toBe(1)  => true
expect(1+1).toBe(2)  => true
expect(true).toBe(true) =>> true

*/
