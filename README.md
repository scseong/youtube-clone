# Youtube 클론코딩

## 소개

유튜브 클론코딩

### 개발 목표

- 단순화한 개발 프로세스 적용
- 개발 생산성을 높이기 위해 프론트엔드 개발 환경을 구축
- `git, github`를 이용해 버전관리와 협업 등의 전반적인 과정을 이해하고 적용
- API 개발

  - mocking으로 생산성 높이기(msw)
  - react query를 사용해 비동기 관련 로직과 상태 관리하기

- 개발에서 배포까지

  - 항상 배포할 수 있도록 브랜치 전략 수립
  - 배포 자동화(netlify)

## 화면

| 메인 페이지                                                                                                           | 상세 페이지                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![youtubehome](https://user-images.githubusercontent.com/82589401/232793731-6d48bd32-77df-4da8-8d09-1fb4464024e3.png) | ![youtubedetails](https://user-images.githubusercontent.com/82589401/232793963-f818b4d7-78bb-4e3c-9624-2ff206580a5d.png) |

| 검색 페이지                                                                                                             | 채널 페이지                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![youtubesearch](https://user-images.githubusercontent.com/82589401/232793872-0c5e8bb8-91e8-4ef7-a748-103720fbb325.png) | ![youtubechannel](https://user-images.githubusercontent.com/82589401/232794931-e01ea9ed-6453-40d0-a2d5-d79cdde37f7e.png) |

## 구현 기능

- 메인페이지

  - 추천 영상
    - 썸네일, 영상 길이, 제목, 채널이미지, 채널명, 조회수, 게시일 표시
    - 마우스 올리면 영상 재생
    - 클릭하면 상세페이지 이동
  - 피드 필터
    - 전체, 뉴스, 음악, 게임, 실시간, 요리 등

- 상세페이지

  - 영상 재생, 비디오 컨트롤러
  - 제목, 채널 정보, 영상 설명, 댓글, 추천 영상 등

- (+) 채널페이지

  - 대문 이미지, 채널 이미지, 채널명, 구독자 수, 영상 개수, 채널 소개 등
  - tbd.

- 검색

  - 채널명, 제목, 키워드에 의한 관련 영상 표시
  - (+) 음성으로 검색 (Android/Desktop Chrome 브라우저만 지원)

- 다크모드/라이트모드

## 사용 기술

- **React** | 사용자와의 상호작용이 많은 웹 페이지를 효율적으로 구현하고 관리
- **Typescript** | 컴파일 단계에서 오류를 미리 찾아 코드 안정성을 높이고 코드 가이드 및 자동 완성으로 개발 생산성 향상
- **MSW((Mock Service Worker)** | API 개발에 대한 의존성을 낮추고 네트워크 수준에서 Mocking
- **React query**| 비동기 관련 로직과 상태를 관리. API 응답 데이터를 캐싱하여 서버의 부하 감소
- **PostCSS** | CSS를 모듈화하여 스타일을 관리. 고유한 클래스명을 생성하여 CSS 네이밍 규칙이 간소화

## 개발 중점 사항

### 프로젝트 초기 셋업

- **CRA(Create-React-App)** | React 프로젝트 개발 초기 세팅에 필요한 여러 가지 라이브러리나 패키지의 설치 및 설정 없이 간편하게 시작할 수 있도록 환경을 제공
- **Typescript** |자바스크립트(JavaScript)를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어
- **Eslint** | 자바스크립트 문법 유효성 검사 도구로써 프로그램 실행 전에 문법 오류를 알려줌
- **Prettier** | 코드 자동 정렬 도구로써 코드 스타일을 통일하고 교정

#### 디자인 관련

- CSS 초기화
- 전역 CSS 변수 설정
- 웹 폰트 적용

#### 디렉토리 구조

```
📦youtube-clone
 ┣ 📂public
 ┃ ┣ 📜index.html
 ┃ ┣ 📜mockServiceWorker.js
 ┃ ┗ 📜...
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂hooks
 ┃ ┣ 📂mocks
 ┃ ┣ 📂pages
 ┃ ┣ 📂reducer
 ┃ ┣ 📂typing
 ┃ ┣ 📂utils
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.tsx
 ┣ 📜README.md
 ┗ 📜*.json
```

- components: 페이지에 들어갈 컴포넌트
- hooks: 리액트 커스텀 훅
- mocks: 요청 핸들러 목록, 브라우저 및 서버별 설정
- pages: 페이지 단위 컴포넌트
- reducer: context API
- typing: 타입 정의 파일
- utils: 공통적으로 사용되는 함수

### API 개발 생산성 높이기

#### Mocking

프로젝트에서 프론트엔드와 백엔드를 병행하여 개발하게 되는 경우 프론트엔드 개발자는 해당 API 부분이 완성되기 전까지 개발을 진행할 수 없다. API 개발에 시간이 더 소요된다면 그 시간만큼 프론트엔드 개발자가 개발을 진행하지 못하는 상황도 발생한다. API가 필요한 시점에 실제로 존재하는 것처럼 가정해 Mock Data를 만들어 API 개발을 진행한다.

> **MSW란?** Mock Service Worker는 Service Worker API를 사용하여 실제 요청을 가로채는 API 목킹 라이브러리 [Introduction - Mock Service Worker Docs](https://mswjs.io/docs)

MSW는 실제 API를 사용하는 것처럼 네트워크 수준에서 Mocking할 수 있다. 의존성이 없고, Mocking 코드 또한 별도의 파일로 관리되어 API endpoint를 실제 API의 것으로 사용할 수 있다.

Youtube Data API은 하루 할당량이 정해져 있어 자유롭게 API 요청을 보내며 개발하기에는 제한이 있다. 따라서, Mock Data를 생성하여 API를 호출하고 응답에 따라 개발을 진행.

### Github

#### CI/CD

**Continuos Integration (지속적 통합)**

git-flow: 5가지의 브랜치를 이용해 운영하는 브랜치 전략. 그 중 4가지 브랜치 사용

- main: 배포 가능한 브랜치
- develop: 개발한 기능이 모여있는 브랜치
- feature: 기능을 개발하는 브랜치 (develop 에서 분기)
- hotfix: 오류 수정하는 브랜치

**Continuous distribution (지속적 배포)**

Netlify를 이용. Github 저장소와 연결하여 빌드, 테스트 및 배포 단계를 자동화

#### Github 관련 컨벤션

Github Wiki에 기록 [컨벤션 · scseong/youtube-clone Wiki · GitHub](https://github.com/scseong/youtube-clone/wiki/%EC%BB%A8%EB%B2%A4%EC%85%98)
