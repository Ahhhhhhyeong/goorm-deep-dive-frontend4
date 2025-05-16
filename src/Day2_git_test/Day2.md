# [05.09] 오늘 배운 내용
### git 버전 확인 명령어
- git --version

### 사용자 정보 저장
- git config --global user.email "이메일주소"
- git config --global user.name "유저이름"

## 원격저장소(gitHub)
1. git init : 새로운 git 저장소 생성
  - 원격 저장소 확인 
    - git remote -v
  - 원격 저장소 연결(추가)
    - git remote add origin va[원격 저장소 url]
  - 원격 저장소를 변경
    - git remote set-url origin [수정할 원격 저장소 url]
  - 원격 저장소를 삭제
    - git remote remove origin
  - 원격 저장소 세부 정보 확인
    - git remote show origin

2. git add 파일명 
  - git add file1 file2 : (여러개를 동시에 추가 시)
  - git add . :  작업 폴더의 모든 파일을 전부 스테이징

3. git commit

---
- git status : git 상태창
- git branch 
  - 프로젝트 복사본을 만들어서 개발!
  - 파일을 병합하는 머지(merge)

---
## git관련 기본 단어
- git => 소스코드 이력관리 툴
- gitHub => 원격 저장소 (관리, 협업, 코드리뷰, 이슈관리 등 가능)
- Repository => 프로젝트의 소스 코드와 히스토리 관리 
- Pull Request => 변경 사항을 제안하고, 코드 리뷰 및 병합하는 기능
- staging area => 커밋을 하기 전의 커밋 할 파일들을 골라놓은 임시 저장공간

## 변경 기록 확인
- 파일의 변경 된 내용을 기록
  - git log
    - log --oneline 옵션 => 로그 요약
- 변경 된 내용만 확인
  - git diff
  - git difftool 커밋id (ex: git difftool 4d8c41f)
- 변경된 내용을 그림으로 편하게 볼 수 있는 라이브러리(도구) : Git Graph

## 깃허브 동작하는 과정
  - 작업 폴더 -> 로컬(내컴퓨터) 코드 변경 -> add, commit -> push -> 원격 저장소에 반영
    - 작업폴더 -> git add -> staging area -> git commit -> 저장소
  - 팀원은 pull 명령어를 이용해서 최신코드를 받아옴
  - 코드 병합은 merge 또는 rebase를 통해 이루어진다

## 터미널에서 사용하는 명령어
- ls -la : 폴더 구조 확인(숨긴파일확인가능)
- clear : 맥에서는 화면 지우기 
- cls : 윈도우에서 화면 지우기
- cd : 이동
  - cd 폴더명 : 폴더로 이동
  - cd ../ : 상위 폴더 이동(뒤로가기)

---
### error 정리
1. error: remote origin already exists.
  - 현재 저장소에 이미 원격 저장소가 설정 되어있는데 또 추가를 하려고해서 에러가 뜸
  - `already exists` => 대부분 이미 설정이 되어있다는 안내


---
### 퀴즈 오답정리
* ✔️: 내가 선택한 답 / 🅾️: 정답

7. Git에서 git merge와 git rebase의 차이는?
A. 둘 다 동일한 기능을 한다 ✔️
  - 둘 다 브랜치를 합치는 방법 이지만, 이력이 다르게 남는다.
B. merge는 병합, rebase는 히스토리 재정렬 🅾️
  - merge는 기록을 그대로 유지하면서 합침
  - rebase는 줄을 일렬로 정렬해서 합침
C. merge는 커밋 생성, rebase는 커밋 삭제
D. merge는 브랜치 생성, rebase는 브랜치 삭제

| 비교 항목        | `merge`              | `rebase`                  |
| ------------ | -------------------- | ------------------------- |
| 히스토리 형태      | 브랜치 구조 그대로 유지        | 일렬로 다시 정렬                 |
| Merge commit | 생김 (`M`)             | 없음                        |
| 협업 적합성       | 안전 (이미 push한 커밋도 OK) | 위험 (push 후 rebase는 충돌 우려) |
| 히스토리 깔끔함     | 중첩될 수 있음             | 아주 깔끔함                    |


8. Git에서 git diff 명령어는 무엇을 확인하나요?
A. 변경된 파일 목록 ✔️=> git status or git diff --name-only (옵션을 붙어야함) 
B. 현재 브랜치 이름
C. 파일의 차이점 🅾️
D. 원격 저장소 URL
