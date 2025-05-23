# 📘 Day 4 Study - 2025.05.13  
## 🔀 Git Flow 전략 정리  

### 🧩 왜 브랜치를 나눠야 할까?
- 여러 개발자가 하나의 브랜치에서 작업하면 코드가 충돌하거나 꼬일 수 있음.
- 이를 방지하기 위해 **브랜치 분리 전략**이 필요함.
- 대표적인 전략 중 하나가 **Git Flow**.

---

### 🏗️ Git Flow 브랜치 구성  

| 브랜치 이름     | 설명                             |
|----------------|----------------------------------|
| `main`/`master` | 실제 서비스에 배포되는 코드       |
| `develop`       | 개발 중인 코드 전체의 통합 브랜치 |
| `feature/*`     | 새로운 기능 개발 시 사용하는 브랜치 |
| `release/*`     | 배포 전 테스트 및 안정화용 브랜치 |
| `hotfix/*`      | 운영 중 긴급 수정 시 사용하는 브랜치 |

- 브랜치는 작업 목적에 맞게 구분하여 생성  
- 예시: `feature/login`, `release/v1.2`, `hotfix/urgent-fix`

---

### 🌱 Trunk-Based 전략 (간소화된 브랜치 전략)
- Git Flow 전략은 브랜치가 많아 복잡할 수 있음.
- **Trunk-Based 개발**은 브랜치를 최소화하여 단순하게 운영.

#### ✅ 특징
- `main`과 `feature/*` 브랜치만 운영
- 빠른 배포에 유리하며, 소규모 프로젝트나 CI/CD가 잘 된 환경에 적합

#### ⚙️ 작업 흐름
1. `main`에서 `feature/*` 브랜치 생성 (기능 단위로 명확히 네이밍)
2. 기능 개발 완료 시 `main` 브랜치에 병합
3. 병합된 `main` 브랜치를 기반으로 서비스에 배포

---

### ✏️ 마무리 Tip
- Git Flow 전략은 **상황에 맞게 유연하게 적용**하면 됨.
- 모든 전략을 완벽히 외우기보단, **이해하고 응용**할 수 있는 수준이면 충분함.

---
***기존 정리내용을 gpt를 활용하여 가독성 높임***   
[읽어보면 좋은 gitflow관련 블로그](https://blog.jetbrains.com/space/2023/04/18/space-git-flow/)