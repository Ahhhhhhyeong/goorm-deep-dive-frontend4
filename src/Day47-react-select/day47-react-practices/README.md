# ✅ 동아리 가입 신청 다단계 폼 실습용 구조 안내

> Zustand + useFormContext + Controller + React-Select + Checkboxes + 최종 미리보기

---

### 📁 패키지 구조 제안

```
/club-signup-form
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Step1_BasicInfo.jsx         // 이름, 학년, 연락처
 ┃ ┃ ┣ 📜Step2_ClubSelection.jsx     // 희망 동아리 선택 (Select + checkbox)
 ┃ ┃ ┣ 📜Step3_Introduction.jsx      // 자기소개 textarea
 ┃ ┃ ┣ 📜Step4_Preview.jsx           // 입력값 요약 미리보기
 ┃ ┃ ┗ 📜MultiStepForm.jsx           // 전체 폼 관리 및 단계 이동
 ┃ ┣ 📂stores
 ┃ ┃ ┗ 📜formStore.js                // Zustand 상태 저장소
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜main.jsx
```

---

## ✅ 핵심 구현 기능 설명

1️⃣ useFormContext

- 각 Step에서 하나의 useForm 상태 공유 가능
- 중복 없이 상태 관리가 깔끔함

2️⃣ Controller + react-select

- 희망 동아리 선택에 사용
- Select 컴포넌트를 react-hook-form에 연결 가능

3️⃣ checkbox 배열 처리

- 부가 활동 선택 (ex. 멘토링 참여, 행사 도우미 등)
- checked된 항목만 배열에 담아 상태 저장

4️⃣ Zustand

- 전체 Step에서 입력한 데이터를 전역으로 관리
- 미리보기 단계에서도 모든 데이터 접근 가능

5️⃣ Preview 단계

- 지금까지 입력한 값을 요약해서 보여주는 UI 구현
- 최종 제출 전에 확인

---

## ✅ 실습 목표

> 🎯 목표: 상태 관리 + 폼 입력 + 단계 분리 + 최종 미리보기 구현

- Step1: 이름 / 학년 / 연락처 → 기본적인 input + 유효성 검사
- Step2: 희망 동아리 1개 선택 (react-select), 부가 활동 체크박스 여러 개
- Step3: 자기소개 textarea 입력
- Step4: 지금까지의 정보 요약 출력 (상태에서 가져옴)
