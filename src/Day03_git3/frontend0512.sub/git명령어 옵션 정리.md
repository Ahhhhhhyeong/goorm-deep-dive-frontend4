# Git에서 자주 사용하는 명령어들

### 기본 설정 관련 명령어

- git config --global [user.name](http://user.name/) "이름"
- git config --global user.email "이메일주소"
- git config --list

### 저장소 초기화 및 상태 확인

- git init              : 새로운 git 저장소 생성
- git status            : git 상태 확인
- git log               : 깃 이력(히스토리) 확인
    - git log --oneline : 로그 한 줄만 보기

### 파일 추적 및 커밋

- git add 
    - git add [파일명]            : 입력한 파일만 스테이징 영역에 추가
    - git add .                 : 수정한 모든 파일을 스테이징 영역에 추가
- git commit                    : 스테이징(add) 된 파일을 하나의 변경 이력으로 기록
    - git commit -m "커밋 메시지"  : 변경 사항에 메시지를 추가 
    - git commit -am "메시지"     : add와 commit을 동시에 진행
- git reset                     : 스테이징 영역에서 파일 제거
    - git reset [파일명]          : 입력한 파일만 스테이징 영역에서 제거
    - git reset --hard          : 이전 커밋 상태로 완전히 되돌림(모든 파일 스테이징 영역에서 제거)

### 브랜치 관리

- git branch
    - git branch -a             : 로컬+원격 모든 브랜치 확인
    - git branch [브랜치명]       : 새 브랜치 생성
    - git branch -d [브랜치명]    : 브랜치 삭제
    - git branch -M main        : 강제 이동 또는 강제 이름 변경
- git checkout [브랜치명]         : 입력한 브랜치로 이동
    - git checkout -b [브랜치명]  : 브랜치 생성 후 이동
- git switch [브랜치명]           : 입력한 브랜치 전환(checkout보다 명확함)
    - git switch -c [브랜치명]    : 브랜치 생성 후 전환
- git merge [브랜치명]            : 브랜치 병합



### 원격 저장소 관리

- git remote
    - git remote add origin [URL]   : 원격 저장소(origin) 연결
    - git remote -v                 : 연결된 원격 저장소 확인 (fetch/push 주소)
- git push
    - git push -u origin [브랜치명]   : 브랜치를 원격 저장소에 처음 푸시 할 때 origin을 기억
    - git push --force              : 강제 푸시 (⚠️주의⚠️)
- git pull                          : 원격 저장소의 최신 변경사항을 가져와 병합

### 히스토리 확인 및 되돌리기

- git diff                  : 워킹 디렉토리의 변경 내용 확인
    - git diff --staged     : 스테이징된 변경 사항 확인
- git reset HEAD            : 스테이징된 파일을 스테이징 해제 
- git revert [커밋 해시]      : 지정한 커밋을 취소하는 새 커밋 생성 (이력 보존)

### 기타 명령어

- git stash             : 현재 작업 중인 변경사항을 임시 저장 (커밋하지 않고 작업 저장)
- git rebase --abort    : 리베이스 도중 충돌 발생 시, 리베이스 중단 및 이전 상태로 복구