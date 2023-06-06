# 👪 HOBBY'IT - 온라인 취미 공유 플랫폼

![logo](docs/img/logo.png)

## ⌛️ 프로젝트 진행 기간

2023.01.09(월) ~ 2023.02.17(금) (40일간 진행)<br>

## ✨ HOBBY'IT 서비스 개요

### 기획 배경

- 온라인 소모임, 취미 활동에 대한 수요 증가
- 비대면 문화와 시장 확대
- 비용과 사용자 경험을 동시에 만족시킬 수 있는 서비스 필요

### 기존 서비스 분석

1. Naver BAND
   - 중장년층에 인기
   - 커뮤니티 기능이 있음
   - **오프라인 모임 위주의 성향**
   - **화상 회의를 즐길 수 있는 감성과 흥미 컨텐츠가 부족**
2. Discord
   - 비용 발생이 적음
   - **기능이 너무 많고, 버그 발생이 잦음**
   - **소모임 관리의 어려움**
   - **어려운 UI 특징**
3. Webex
   - 안정적인 회의 진행 기능 지원
   - **시간 및 참여 인원에 제한이 있고, 과금이 필요함**
   - **커뮤니티 기능이 없음**
   - **화상 회의 이외의 컨텐츠가 없음**
4. ZOOM
   - **원격 제어와 투표 기능이 지원됨**
   - **시간 및 참여 인원에 제한이 있고, 과금이 필요함**
   - **흥미 요소가 적거나 많은 비용이 발생함**

## 🏃 HOBBY'IT 의 이용 목적

혼자보단 둘,
둘보단 다 같이! 👪

관심 있는 모임에 들어가거나,
동료들을 구해보는 건 어떨까요?<br>
다함께 취미생활을 기록하고 공유하세요.
혼자보단 분명 더욱 즐거울 겁니다!

24/7 즐기는 취미생활
사진 공유, 방명록, 화상채팅까지!
언제 어디서든 추억을 쌓아갈 수 있습니다.

내가 속한 모임별로 특별한 추억들로
채워 가보세요 :)

## 🌞 팀원 소개

### 유쾌한 반란

호방한 사람들이 될 유쾌한 반란 팀

- 박귀렬 - BackEnd, 팀장
- 이인재 - BackEnd
- 강은진 - BackEnd
- 김수빈 - FrontEnd
- 이정범 - FrontEnd
- 서철원 - FrontEnd

## ✔️ 아키텍처 구성도

![architecture](docs/img/architecture.png)

## ✔️ 주요 기능

### 1) 모임 구성원 간의 화상 통화와 채팅 기능 - WebRTC

- WebRTC 기술을 사용하여, 웹상에서 빠른 속도로 화상 통화와 채팅이 가능
- 개인 카메라와 오디오 설정
- 화상 통화 도중에도 캔버스 페인팅 가능
- 채팅에 '다이나믹 스크롤'을 통한 UX 제공

### 2) JWT 토큰과 Spring Security 로그인 및 Redis 저장소 활용

- Redis 저장소를 활용해 메모리상에서 빠르게 토큰을 검사하여 회원 정보를 조회

### 3) 모임 관리자의 가입 신청 회원 및 모임 활동 관리

- 모임을 처음 생성한 사람은 해당 모임의 소유자가 됨
- 모임 소유자는 새로 가입 신청한 회원들을 관리(관리자 권한 부여 등)

### 4) 모임 게시판을 통한 모임 커뮤니티 활성화

- 최대 10장의 사진과 512글자의 내용을 작성할 수 있는 모임 게시판
- '무한 스크롤'을 통한 UX 제공

### 5) 모임 방명록을 통한 캔버스 페인팅

- 하루에 한 번 캔버스 다이어리 작성
- 하루 전 날짜의 작성일을 가진 방명록들만 조회 가능
- 모임 활동에 대한 기대와 관심, 동기 부여를 위해 익일부터 조회할 수 있도록 설정
  ![sample_canvas.png](/docs/img/sample_canvas.png)

### 6) MZ스러운 디자인과 친절한 이용 가이드

- GSAP 애니메이션 효과와 다크모드 디자인, 짙은 보랏빛 컬러
- 사용자를 위한 이용가이드 페이지 제공
  ![sample_guideline.png](/docs/img/sample_guideline.png)

## ✔️ 주요 기술

### 1) WebRTC

- P2P(Peer-to-Peer Network)로 브라우저나 단말 간에 데이터를 주고받는 기술의 웹 표준
- 웹에서 실시간 미디어 스트림을 송수신할 수 있는 유일한 표준이고 또 유일한 P2P 표준

### 2) JWT 토큰과 Spring Security 로그인 및 Redis 저장소 활용

- JWT 토큰을 통해 사용자 정보를 암호화하여 보안성을 높임
- Spring Security를 통해 로그인한 사용자의 정보를 편하게 인가 받음
- Redis 저장소에 key-value 형태로 memberId-RefreshToken 정보를 저장함
- 메모리상에서 빠르게 토큰을 검사하여 회원 정보를 조회

### 3) canvas 페인팅

- Canvas 태그와 바닐라 JS를 이용한 페인팅 기능
- 웹 소켓 기술을 활용하여 같은 세션에 있는 사용자에게 그림판을 공유할 수 있는 기능

## ✔️ 프로젝트 파일 구조

```
Repository
 ├─ README.md
 │
 ├─ docs
 │     │
 │     ├── DB
 │     │    ├── ...
 │     │
 │     ├── Jira
 │     │    ├── ...
 │     │
 │     ├── img
 │          ├── ...
 │
 │
 ├─ backend
 │     │
 │     ├── gradle
 │     │     ├──wrapper
 │     │     	   ├── gradle-wrapper.jar
 │     │     	   ├── gradle-wrapper.properties
 │     │
 │     ├── src
 │     │     ├── main
 │     │     	    ├── generated
 │     │     	    ├── resources
 │     │     	    │           ├── static
 │     │     	    │                ├── img
 │     │     	    │	                    ├── ...
 │     │     	    ├── java
 │     │                ├── com
 │     │     	               ├── a505
 │     │                           ├── hobby
 │     │                                 ├── article
 │     │     	                           ├── common
 │     │     	                           ├── hobby
 │     │     	                           ├── hobbyarticle
 │     │     	                           ├── hobbyarticlecomment
 │     │     	                           ├── hobbyarticleimg
 │     │     	                           ├── hobbyarticlelike
 │     │     	                           ├── hobbymember
 │     │     	                           ├── hobbypostit
 │     │     	                           ├── hobbypostitrecord
 │     │     	                           ├── item
 │     │     	                           ├── jwt
 │     │     	                           ├── member
 │     │     	                           ├── pending
 │     │     	                           ├── security
 │     │     	                           ├── HobbyitApplication.java
 │     │
 │     ├── .gitignore
 │     ├── build.gradle
 │     ├── gradlew
 │     ├── gradlew.bat
 │     ├── settings.gradle
 │
 │
 ├─ HobbyIT(FE)
 │     ├─ README.md
 │     │
 │     ├─ public
 │     │      ├─ assets
 │     │              ├─ fonts
 │     │              │    ├─ ...
 │     │              │
 │     │              ├─ gif
 │     │              │    ├─ ...
 │     │              │
 │     │              ├─ postit
 │     │              │    ├─ ...
 │     │              │
 │     │              ├─ ...
 │     │
 │     ├── src
 │     │       ├── api
 │     │       │       ├── common
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── ...
 │     │       │
 │     │       ├── components
 │     │       │       ├── VideoChat
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── modals
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── no-content
 │     │       │       │      ├── ...
 │     │       │       │
 │     │       │       ├── ...
 │     │       │
 │     │       ├── layouts
 │     │       │       ├── default
 │     │       │              ├── ...
 │     │       │
 │     │       ├── plugins
 │     │       │       ├── index.js
 │     │       │       ├── vuetify.js
 │     │       │       ├── webfontloader.js
 │     │       │
 │     │       ├── router
 │     │       │       ├── index.js
 │     │       │
 │     │       ├── store
 │     │       │       ├── app.js
 │     │       │       ├── index.js
 │     │       │       ├── message.js
 │     │       │       ├── user.js
 │     │       │
 │     │       ├── styles
 │     │       │       ├── settings.scss
 │     │       │
 │     │       ├── views
 │     │       │       ├── ...
 │     │       │
 │     │       ├── App.vue
 │     │       ├── main.js
 │     │
 │     ├── ...
 │     │
```

## ✔️ 협업 툴

- GitLab
- Notion
- Figma
- JIRA
- MatterMost
- Webex

## ✔️ 협업 환경

- GitLab
  - 코드의 버전 관리
  - 개발 이슈 관리 및 해결을 위한 회의
  - MR과 팀원의 코드리뷰
- Notion
  - 기획 단계에서 도출된 아이디어 정리
  - 회의록과 팀미팅을 기록하여 의견과 해결사항을 정리
  - 팀 그라운드 룰을 정리
  - Jira 일정 계획 수립
  - Git Commit 컨벤션 정리
  - 참고자료 정리
  - Back-end, Front-end별 개발 이슈 정리
  - API 상태 코드 정리
  - [유쾌한 반란의 NOTION](https://chipped-cart-851.notion.site/f58b19c1a8bc453e945bc57df8147355)
- Figma
  - UI/UX에 초점을 둔 실시간 협업
  - HOBBY'IT 만의 디자인과 메인 컬러 지정
  - 애니메이션, gif 이미지 활용
  - 목업과 와이어프레임 정리
  - [유쾌한 반란의 FIGMA](https://www.figma.com/file/mKMpSGZU6zQK7NP3aRWG8O/%EC%9C%A0%EC%BE%8C%ED%95%9C%EB%B0%98%EB%9E%80-Hobby'It?node-id=0%3A1&t=WKgF5Q8oLOynJk9c-1)
- Jira

  - 일주일 단위로 프로젝트 일정 관리
  - 23.01.10 ~ 23.02.17 기간의 일정 관리
  - 기획, 설계, 개발, 발표, 회의 등

  <details>
  <summary>번다운 차트</summary>
  <div markdown="1">

  - 1주차 (23.01.09 ~ 23.01.13)
    ![week1](/docs/Jira/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8_week1.png)
  - 2주차 (23.01.16 ~ 23.01.20)
    ![week2](/docs/Jira/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8_week2.png)
  - 3주차 (23.01.25 ~ 23.01.27)
    ![week3](/docs/Jira/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8_week3.png)
  - 4주차 (23.01.30 ~ 23.02.03)
    ![week4](/docs/Jira/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8_week4.png)
  - 5주차 (23.02.06 ~ 23.02.10)
    ![week5](/docs/Jira/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8_week5.png)
  - 6주차 (23.02.13 ~ 23.02.17)

  </div>
  </details>

## ✔️ 프로젝트 산출물

[유쾌한 반란의 Google Docs - 요구사항 정의서, 기능 정의서, API 명세서](https://docs.google.com/spreadsheets/d/1xG0EUURGoz_C6ZEwFpiaMvZAMSl8EonA/edit?usp=sharing&ouid=102396324034139789583&rtpof=true&sd=true)

- 요구사항 정의서
- 기능 정의서
- [API 명세서](https://github.com/ejk9658/HobbyIT/blob/main/docs/img/API_LIST.png)
- [와이어 프레임](https://www.figma.com/file/mKMpSGZU6zQK7NP3aRWG8O/%EC%9C%A0%EC%BE%8C%ED%95%9C%EB%B0%98%EB%9E%80-Hobby'It?node-id=0%3A1&t=WKgF5Q8oLOynJk9c-1)
- [ER-Diagram](https://github.com/ejk9658/HobbyIT/blob/main/docs/img/ER-Diagram.png)

## ✔️ 프로젝트 결과물

- [포팅메뉴얼](https://chipped-cart-851.notion.site/Hobby-IT-bbd259f62a2949499a83e84f4fdb4b6a?pvs=4)
- [중간발표 자료](https://github.com/ejk9658/HobbyIT/tree/main/docs/서울_5반_A505_중간발표자료.pptx)
- [최종 발표 자료](https://github.com/ejk9658/HobbyIT/tree/main/docs/서울_5반_A505_발표자료.pptx)
- [시연 영상 녹화본](https://github.com/ejk9658/HobbyIT/tree/main/docs/A505시연.mp4)

## ✔️ 총평

### 아쉬운 점

- API Docs의 부재로 인한 백엔드-프론트엔드 간의 불필요한 소통
    - 각 API마다 다른 변수 및 전송 형태에 대해 질문을 하는 경우 다수
- 프론트엔드 디렉토리 정리
    - 많은 컴포넌트로 인해 개발이 진행될 수록 원하는 파일을 찾는데 걸리는 시간이 증가함
- 일부에만 적용된 반응형 & 기기(데스크탑, 태블릿, 모바일)마다 다른 UI/UX 구현 실패
- 익숙하지 않은 JIRA 사용에 의한 관리 미숙

### 배운 점

- 원활한 소통을 위한 직관적인 명세서 정리의 필요성
- 프론트엔드 Axios 연결을 위한 interceptor 파일을 따로 구현
    - 헤더와 같이 중복될 수 있는 axios 내의 코드를 생략가능
- 프로젝트 기획을 최대한 세분화해야 함
- 브라우저 렌더링 및 lazy loading

## 👪 HOBBY'IT 서비스 화면

### 1) 회원가입 및 로그인

![회원가입](docs/page_img/회원가입.PNG)

#### 회원가입

![로그인](docs/page_img/로그인.PNG)

#### 로그인

![비밀번호찾기](docs/page_img/비밀번호찾기.PNG)

#### 비밀번호 찾기

### 2) 이용가이드 살펴보기

![소개해](docs/page_img/소개해.PNG)

#### 이용가이드 (정적 페이지)

### 3) 홍보 게시판

![홍보일반](docs/page_img/홍보일반.PNG)

#### 모임 관리자의 권한이 없는 회원은 홍보 게시판 작성 불가능

![홍보방장](docs/page_img/홍보방장.PNG)

#### 모임 관리자인 경우 홍보 게시판에 게시글 작성 가능

### 4) 새로운 모임 생성하기

![모임생성1](docs/page_img/모임생성1.PNG)

#### 모임 생성 1단계 : 모임 이름, 카테고리 설정

![모임생성2](docs/page_img/모임생성2.PNG)

#### 모임 생성 2단계 : 모임 소개 설정

![모임생성3](docs/page_img/모임생성3.PNG)

#### 모임 생성 3단계 : 모임 최대 활동 인원, 모임 가입 신청 유형 설정

### 5) 기존 모임에 가입하기

![자유가입신청성공](docs/page_img/자유가입신청성공.PNG)

#### 자유 모임 가입 신청 페이지

![가입신청팝송1](docs/page_img/가입신청팝송1.PNG)

#### 비자유 모임 가입 신청 페이지

![가입신청팝송2](docs/page_img/가입신청팝송2.PNG)

#### 비자유 모임 가입 신청 메시지 보내기

![모임탈퇴](docs/page_img/모임탈퇴.PNG)

#### 모임 탈퇴 페이지

### 6) 모임 살펴보기

![카테고리검색기능](docs/page_img/카테고리검색기능.PNG)

#### 모임 카테고리 검색 기능 (사진에서는 '음악' 카테고리 검색 결과를 보여줌)

![카테고리없음](docs/page_img/카테고리없음.PNG)

#### 모임 카테고리 검색 기능 (사진에서는 모임이 없는 카테고리의 검색 결과를 보여줌)

![등산검색](docs/page_img/등산검색.PNG)

#### 모임 키워드 검색 기능 (사진에서는 '등산' 키워드 검색 결과를 보여줌)

### 7) 모임 회원 관리하기

![회원목록일반입장](docs/page_img/회원목록일반입장.PNG)

#### 모임 내 회원 리스트 확인

![회원권한변경전](docs/page_img/회원권한변경전.PNG)

#### 모임 내 회원 권한 변경 전 (관리자 기능)

![회원권한변경후](docs/page_img/회원권한변경후.PNG)

#### 모임 내 회원 권한 변경 후 (관리자 기능 : 관리자는 일반 회원을 매니저로 권한을 올릴 수 있음)

![강퇴기능](docs/page_img/강퇴기능.PNG)

#### 모임 내 회원 강퇴 기능 (관리자 기능)

### 8) 모임 내 게시판에 글 등록하기

![게시판글쓰기](docs/page_img/게시판글쓰기.PNG)

#### 참여중인 모임 내에서 게시글 작성 (사진은 최대 10장까지 추가 가능)

![댓글](docs/page_img/댓글.PNG)

#### 모임 내 게시글의 댓글 작성, 조회, 수정, 삭제 기능

### 9) 모임 내 방명록에 그림 그리기

![방명록작성](docs/page_img/방명록작성.PNG)

#### 방명록 캔버스 모달 작성

### 10) 모임 내 화상 통화 및 채팅 참여하기

![화상통화채팅](docs/page_img/화상통화채팅.PNG)

#### 화상 통화 화면과 채팅

![화상통화방명록](docs/page_img/화상통화방명록.PNG)

#### 화상 통화 도중 캔버스 실시간으로 공유 가능

![화상통화](docs/page_img/화상통화.jpg)

#### 유쾌한 반란 6인의 화상 통화 화면

<hr>
