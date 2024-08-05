## <img src="https://github.com/user-attachments/assets/47a8cf73-e1b3-485a-8037-da1170d10176" width="24" /> Readim
<p align="center">
  <img src="https://github.com/user-attachments/assets/5fed3ed5-8464-48e1-98d2-57c1c6efadc7" width="500" />
</p>
<div align="center">
<b>Readim</b>은 사용자가 읽고 싶은 <b>아티클의 리딩 타임을 사용자별로 최적화</b>하여 알려드리는 웹 사이트입니다.

쌓여만 가는 아티클들을 효율적으로 읽어가고 싶으시다면

<b>Readim</b>과 함께 세상의 변화를 빠르게 따라가 보세요!
</div>

## 🔗 Links
  [Deployed website](https://readim.netlify.app/) | [Frontend Repository](https://github.com/team-sticky-252/readim-client) | [Backend Repository](https://github.com/team-sticky-252/readim-server/)


## 🗂️ Index
- [ Readim](#-readim)
- [🔗 Links](#links)
- [🗂️ Index](#️index)
- [🧲 Motivation](#motivation)
- [⚒️ Tech Stacks](#️tech-stacks)
  - [Client](#client)
  - [Server](#server)
  - [Test](#test)
  - [Deployment](#deployment)
  - [Third party API](#third-party-api)
- [🔍 Features](#features)
  - [1. 모달창](#1-모달창)
  - [2. 메인 페이지](#2-메인-페이지)
  - [3. 아티클 카드](#3-아티클-카드)
  - [4. Footer 콘텐츠](#4-footer-콘텐츠)
- [📈 Improvements](#improvements)
    - [reading time UI 변경](#reading-time-ui-변경)
    - [🔗 UI 선정 및 개선 과정](#-ui-선정-및-개선-과정)
    - [\<기존안\>](#기존안)
    - [\<개선안\>](#개선안)
- [🎯 Challenges](#-challenges)
  - [**1. 어떻게 단일 테스트로 다양한 사용자들의 읽기속도를 특정할 수 있을까?**](#1-어떻게-단일-테스트로-다양한-사용자들의-읽기속도를-특정할-수-있을까)
    - [1-1.  기준과 근거를 가진 기본 평균 범위 설정](#1-1--기준과-근거를-가진-기본-평균-범위-설정)
    - [1-2. 실제 사용자 테스트를 통한 유효한 범위 설정](#1-2-실제-사용자-테스트를-통한-유효한-범위-설정)
    - [1-3. 실제 사용 환경과 유사한 테스트 구현](#1-3-실제-사용-환경과-유사한-테스트-구현)
  - [2. 어떻게 시멘틱 구조의 페이지에서 본문에 해당하는 텍스트만 추출할 수 있을까?](#2-어떻게-시멘틱-구조의-페이지에서-본문에-해당하는-텍스트만-추출할-수-있을까)
    - [2-1. 시멘틱 구조에서 본문 판별하기](#2-1-시멘틱-구조에서-본문-판별하기)
    - [2-2. 불필요한 요소를 제외하자](#2-2-불필요한-요소를-제외하자)
    - [2-3. 코드 블록내의 단어는 어떻게 처리해야할까?](#2-3-코드-블록내의-단어는-어떻게-처리해야할까)
  - [**3. 시멘틱 태그가 없는 사이트의 스크래핑 방법?**](#3-시멘틱-태그가-없는-사이트의-스크래핑-방법)
- [🗓️ Schedule](#️schedule)
- [👏 Memoir](#memoir)

## 🧲 Motivation

변화가 빠른 현대 사회, 하루에도 새로 알아야만 하는 것들이 수십개는 생겨나고 있습니다.

이런 흐름에 맞춰 우리는 어제 읽기로 마음 먹은 아티클도 채 소화하기도 전에, 오늘 새롭게 읽어보고 싶은 아티클이 북마크에 추가 될 것입니다.

<br/>

 **이런 아티클이 쌓여만 가는 현상을, 효율적으로 해소할 수 없을까?**

<br/>

이런 바람을 바탕으로 저희는 Readim 프로젝트를 시작했습니다.

여러분은 이동 시간, 여가 시간 등 아티클을 읽을 수 있는 짜투리 시간에 맞는 분량의 아티클을 Readim을 통해서 선택하실 수 있습니다.

지하철 이동 시간이 5분이 걸리시나요? Readim에 등록하신 아티클 중, 5분 분량의 아티클을 읽어보세요!

## ⚒️ Tech Stacks

### Client

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![Tailwind](https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<details>
  <summary>Why TailWind CSS?</summary>

사용하지 않는 CSS를 제거하는 purgeCSS 를 통해 파일 사이즈를 줄이고 로딩 속도를 향상시킬 수 있습니다.

미리 정의된 유틸리티 클래스들을 사용하여 별도의 CSS 파일을 작성하고 관리할 필요가 없어 개발 속도가 향상됩니다.

설정 파일을 통해 색상, 간격, 글꼴 등을 한 번에 관리할 수 있기 때문에 디자인 일관성 유지가 용이합니다.
</details>

### Server

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)  ![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  ![NEST.JS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)  ![JSDOM](https://img.shields.io/badge/JSDOM-d7c146.svg?style=for-the-badge&logoColor=white)


<details>
  <summary>Why NestJS?</summary>
TypeScript 를 기본 언어로 지원합니다. 테스트 기능이 내장(jest)되어 있고 유닛, 통합 테스트를 작성할 수 있습니다.

<br/>

모듈화된 아키텍처를 강조하여 프로젝트 구조를 일관성 있게 유지할 수 있습니다.

저희는 추후 TypeScript로 마이그레이션 예정이고, 사용자가 추가로 구성해야 할 구조가 적고 러닝 커브가 낮은 점이 있어 선택하였습니다.
</details>

<details>
  <summary>Why JSDOM?</summary>
JSDOM을 선택한 주된 이유는 성능과 효율성 때문입니다.

<br/>

JSDOM은 Puppeteer에 비해 상당히 빠른 처리 속도를 제공합니다. 이는 우리 서비스의 응답 시간을 크게 개선하여 사용자 경험을 향상시킵니다.

물론, JSDOM이 클라이언트 사이드 렌더링(CSR)을 사용하는 웹사이트의 동적 콘텐츠를 처리하는 데 어려움이 있다는 점은 인지하고 있습니다.

하지만 아티클이 있는 블로그 사이트의 경우 대부분 서버 사이드 렌더링(SSR)을 하기 때문에 여러가지를 고려한 결과 JSDOM의 속도 이점이 CSR 관련 제한사항을 크게 상회한다고 판단했습니다.
</details>


### Test

![Vitest](https://img.shields.io/badge/Vitest-%2344A833.svg?style=for-the-badge&logo=vitest&logoColor=white)  ![cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)  ![jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

### Deployment

![NETLIFY](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)  ![AWS ELASTIC BEANSTALK](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)

### Third party API

![OpenAI](https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

## 🔍 Features

### 1. 모달창
<h4>1-1. Welcom모달</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/bbf05062-313f-4495-bb58-5fbdebaff461" width="600" />
</details>

- 가장 처음 방문할 시 마주할 수 있는 화면입니다.

- 환영 모달창을 통해 저희 Readim의 간단한 소개를 보실 수 있습니다.

<h4>1-2. 읽기 속도 측정 모달</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/1fae649e-784b-414c-80c2-8a7a94387a31" width="600" />
</details>

- 해당 모달을 통해 여러분 개개인의 읽기 속도를 측정할 수 있습니다.

- 사용자는 테스트 아티클을 이해하려 하지 않고, 편안하게 본인 만의 속도로 본문을 읽습니다.

- 스크롤이 아티클 끝에 닿으면 ‘완료’ 버튼을 클릭할 수 있습니다.

<h4>1-3. 읽기 속도 결과 모달</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
<img src="https://github.com/user-attachments/assets/402ee483-3302-421d-b5d0-eee471f0baff" width="600" />
</details>

- 결과 모달창에서 사용자 본인의 읽기 속도를 알 수 있습니다.

- 이 모달창에서 사용자는 본인의 읽기 속도가 빠른지, 평균인지, 조금 느린지의 세가지 척도로 확인할 수 있습니다.

- 해당 결과 모달창에 표시되는 읽기 속도(WPM)을 바탕으로 리딩 타임을 계산해 제공해드립니다.

- 테스트에 응하지 않거나, 정상 설정 범위 (20초 ~ 2분 25초)를 벗어나는 결과일 경우 기본 읽기 속도(202WPM)으로 설정됩니다.

<h4>1-4. 읽기 속도 재측정</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img width="600" alt="retry_1" src="https://github.com/user-attachments/assets/f2b3e8ef-0c2a-4e87-a138-520c2061e267"/>
</details>

- 우측 상단의 톱니바퀴 모양의 버튼을 hover할 경우, ‘읽기 속도 재측정’ 안내 문구를 보실 수 있습니다.

- 해당 버튼을 클릭함으로써 사용자는 첫 방문 시 모달창을 통해 측정했던 읽기 속도를 재측정 할 수 있습니다.

<details>
<summary>
 🖥️ 미리보기
</summary>
  <div style="display: flex; justify-content: space-around;">
    <img width="45%" alt="retry_2" src="https://github.com/user-attachments/assets/5979764e-3e6d-4fe8-95eb-5320f8035066"/>
    <img width="45%" alt="retry_3" src="https://github.com/user-attachments/assets/f529cda2-3358-44cf-8dca-65e83bdcec08"/>
  </div> 
</details>

- 사용자가 재측정 기능을 이용하는 경우는 다음과 같이 가정했습니다.

  1. 아티클들을 접하며 사용자 본인의 읽기 능력이 상승하여 속도를 다시금 보정하기 위해.
  2. 초기에 읽기 속도 측정을 하지 않아 지정된 기본 읽기 속도를 본인의 읽기 속도로 바꾸기 위해.

- 해당 재측정 기능을 통해, 사용자는 다시금 정확한 리딩 타임을 제공받을 수 있습니다.
  
<br/>

### 2. 메인 페이지

<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/1d0f85e3-1497-4868-9cb7-d3e61f48c5b6" width="600" />
</details>

- 읽기 속도 측정을 모두 마치고난 뒤, 처음으로 마주하실 수 있는 페이지입니다.

- 상단을 보시면, 사용자에게 궁극적으로 제공하고자 하는 컨셉들을 순환시키며 보여드리고 있습니다.

- 바로 하단의 URL 입력창에 사용자가 읽으려고 생각해둔 아티클의 주소를 입력하여 아티클 카드를 생성할 수 있습니다.

<br/>

### 3. 아티클 카드

<h4>3-1. URL 입력(아티클 카드 생성)</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/ba357884-93f1-4036-b8d4-d995c8c43dff" width="600" />
</details>

- 사용자는 붙여넣기, 직접 입력하기, 북마크 폴더를 가져다 놓기의 상호작용을 통해 아티클 URL을 입력할 수 있습니다.

- URL을 입력한 후, Enter 혹은 입력창 옆의 버튼을 클릭하면 Node 서버에 리딩 타임 등의 정보를 요청합니다.

- 정보가 정상적으로 수신 될 경우 해당 아티클의 리딩 타임이 카드 형태로 추가됩니다.

<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/09ab7b50-b3bf-4212-8818-86a6c0822e3f" width="600" />
</details>

- 대응할 수 없는 사이트의 URL일 경우, 우측 하단에 토스트 메시지를 팝업합니다.

<h4>3-2. 아티클 카드</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <div style="display: flex; justify-content: space-around;">
    <img width="45%" alt="article_card1" src="https://github.com/user-attachments/assets/11ac7d93-a40d-4318-b9cc-c988c9747240" />
    <img width="45%" alt="article_card2" src="https://github.com/user-attachments/assets/5dd451bd-f6eb-4a6a-bad9-bf5640176885" />
  </div>
</details>

- 등록된 url의 카드에는 다음과 같은 내용이 포함되어 있습니다.

  - 사이트 관련 정보: 사이트명, 사이트 파비콘
  - 아티클: 제목, 예상 읽기 시간
  - 버튼: 삭제 버튼, AI 요약 버튼
  - 최적화 인증 마크

- 카드 hover 시, 선택된 카드의 크기가 커지는 애니메이션이 적용됩니다.

  - 카드의 크기와 내용이 전체적으로 커집니다.
  - 삭제 버튼이 나타납니다.
  - 카드 클릭 시 아티클 페이지로 이동합니다.

<h4>3-3. 아티클 페이지 이동</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/a6037f2d-b8e3-47ec-bd05-daa414950828" width="600" />    
</details>

- 추가된 아티클 카드를 클릭할 경우 해당 아티클 페이지로 이동할 수 있습니다.

<h4>3-4. Chat GPT 요약</h4>
<details>
<summary>
  🖥️ 미리보기
</summary>
  <img src="https://github.com/user-attachments/assets/496bd3c2-6474-468a-8085-6b68a47a8060" width="600" />
</details>

- 아티클 카드 내 요약 버튼 hover 할 경우 ‘본문 요약’ 문구를 확인할 수 있습니다.
- 아티클 카드 내 요약 버튼을 클릭할 경우 Chat GPT를 통해 요약된 본문 내용을 확인할 수 있습니다.

<br/>

### 4. Footer 콘텐츠

<details>
<summary>
  🖥️ 미리보기
</summary>
  <img width="600" alt="Footer" src="https://github.com/user-attachments/assets/d96ba5dc-4de0-4e00-926c-e1939262e159">
</details>

- 페이지 하단(footer)에는 기타 정보를 표시하고 있습니다.

  1. 현재 정식적으로 대응하고 있는 6개의 사이트를 사용자에게 알려줍니다.
  2. 피드백 사항이 있을 경우 연락하실 수 있는 연락처를 표시합니다.
  3. Readim의 저작권 고지를 표시합니다.

<br/>

## 📈 Improvements

<h3>1. UI, UX 구현</h3>

#### reading time UI 변경

#### [🔗 UI 선정 및 개선 과정](https://www.notion.so/UI-6b0bb4d7e65f486b8f29636711d6eada?pvs=4)

#### <기존안>

<img src="https://github.com/user-attachments/assets/803ce74d-a4ef-4125-82ba-a511d6a1891d" width="600" />

- 기존안을 제작하면서, 제작자들의 미적 충족감만을 고려하여, 사용자를 위하지 않는 디자인을 만들었습니다.
리딩 타임의 border는 리딩 타임의 숫자에 따라 변할 것 같이 디자인 됐지만, 사실 고정 이미지로 사용자에게 오해를 불러일으켰습니다.
또한 메인 feature로 기능하는 리딩 타임이지만, 사용자에게 분 단위의 정보 밖에 전달하지 않았습니다.

#### <개선안>

<img src="https://github.com/user-attachments/assets/8ce28eeb-8f6b-46ab-81a3-a90fc4430a63" width="600" />

- 30초 단위를 보여줌으로써 사용자는 조금 더 자세한 정보를 확인할 수 있습니다.
    - 시간 단위 설정 기준
        - **30초 단위**: 대략적인 시간 확인이 필요한 상황에서 편리합니다.
        - **10초 단위**: 중간 정도의 세밀함이 필요한 상황에서 적합합니다.
        - **1초 단위**: 매우 세밀하고 정확한 시간이 필요한 상황에서 유용합니다.
    - 사용자들의 읽는 환경의 다양한 상황을 고려하여, 30초 단위로 리딩 타임을 보여줌으로써 환경 변수에 유동적으로 대응할 수 있도록 표시하였습니다.
- 리딩 타임과 타이틀을 강조한 UI를 채택함으로써 시인성을 개선했습니다.
- 또한 썸네일, 본문 요약 등을 제거하고 Favicon과 도메인을 작게 표시하여, 효율적으로 필요한 정보만을 사용자들이 쉽게 인식할 수 있도록 했습니다.

<br/>

 <h3>2. 읽기 속도 기준</h3>

> [!Important]
> ✅ **평균 리딩 타임**
> 
> 한국인이 글을 읽는데 걸리는 평균 속도입니다.
> 
> 1분 동안 읽을 수 있는 단어 수, 즉 WPM(_Words Per Minute_)으로 측정합니다.


1. 실제 주변 지인들에게 조사한 결과 대부분의 인원들은 평균 범위에 속하였지만, 일부 소수의 분들이 최소 시간을 벗어나는 경우를 발견하여, 이런 분들을 배려하기 위해 최소 시간 기준을 20초로 설정하였습니다.
최대 시간의 경우, 논문을 바탕으로 한다면 20~30대를 대상으로 고려하여, 1분 26초를 최대 범위로 정하였지만, 그 외의 대상들도 고려하기 위해 텍스트를 직접 읽는 TTS서비스를 이용한 결과 2분 25초가 나왔습니다. 비정상적인 접근을 제외한, 글을 느리게 읽는 분들의 경우에도 충분히 배려하며 속도를 반영하기 위해 보수적으로 정하였습니다.
2. 논문 차용 부분

> 이 연구에서는 노안이 없는 20-30대의 정상인을 대상으로 정상 평균 읽기 속도를 조사하였다. 문서에서 흔히 사용하는 10포인트의 글자 크기는 근거리 시력표에서 logMAR 0.5 (대 수시력 0.32)에 해당하는 크기이며, 평균 읽기 속도(reading only)는 202.3 ± 88.4 WPM, 읽기-말하기 속도(reading & speaking)는 129.7 ± 25.9 WPM이었다.
송지호⋅김재형⋅형성민(2016). 한국어 읽기 속도 측정 애플리케이션의 유효성 및 정상인의 읽기 속도에 대한 사전 연구. 대한안과학회지, [2016년 제57 권 제4 호.](http://dx.doi.org/10.3341/jkos.2016.57.4.642) 
> 

- [참고 논문](https://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=0f981f4e022986487ecd42904f0c5d65&keyword=%EC%9D%BD%EB%8A%94%20%EC%86%8D%EB%8F%84)

## 🎯 Challenges

### **1. 어떻게 단일 테스트로 다양한 사용자들의 읽기속도를 특정할 수 있을까?**
    
  저희는 한국어 평균 읽기 시간에 대한 리서치를 통해 202WPM 이라는 평균 읽기 시간을 설정하였습니다.
  
  하지만 평균 읽기 시간 기준으로 아티클 별 읽기 속도를 측정하는 것은 다음과 같은 문제들이 있었습니다.
  
  - 실제 '평균' 읽기 속도는 개인차와 읽는 내용의 난이도에 따라 속도가 크게 달라지기 때문에 근사치를 특정하기가 어렵습니다.
  - 평균 속도만 고려할 경우, 읽기속도가 빠르거나 느린 사용자의 정확한 읽기 속도를 특정하기 어렵습니다.
  - 개인의 읽기 속도가 콘텐츠에 따라 변할 수 있는 점을 반영하기 어렵습니다.
  
  이러한 문제들을 다음과 같은 과정을 통해 해결하고자 했습니다.

#### 1-1.  기준과 근거를 가진 기본 평균 범위 설정

<img width="600" src="https://github.com/user-attachments/assets/cf97f1b3-9b20-4f57-a7fe-c94014fee844" alt="평균읽기시간-1" />

먼저 정확한 읽기 시간을 제공하기 위해 평균 읽기 속도를 나타내는 수치가 필요했습니다.

리서치를 통해 한국어 평균 읽기 시간을 202WPM으로 기준값으로 설정하였고, 202단어의 테스트 글을 선택해 일관된 방법으로 사용자의 읽기 시간을 측정할 수 있도록 했습니다.

#### 1-2. 실제 사용자 테스트를 통한 유효한 범위 설정

<img width="600" src="https://github.com/user-attachments/assets/d866847f-7885-4640-9a6c-c3ae4e08c679" alt="평균읽기시간-2" />

여러 사용자들을 대상으로 실제 읽기 테스트를 진행하여 데이터를 수집했습니다.

테스트 결과와 함께 접근성을 고려하여 텍스트 음성 변환 기술을 사용하는 경우의 읽기 속도를 결과 데이터에 포함시켰습니다. 

여러 데이터를 종합적으로 분석한 결과, 

- 가장 빠른 읽기 속도는 테스트를 통해 확인된 읽기속도 25초 (WPM: 484.8)입니다.
- 가장 느린 읽기 속도는 음성 변환 기술을 사용한 읽기속도 2분 25초 (WPM: 84.2)입니다.

최종적으로 20초 ~ 2분 25초 (WPM: 484.8 ~ 84.2)의 유효 읽기 속도 범위를 설정했습니다.

#### 1-3. 실제 사용 환경과 유사한 테스트 구현

주요 서비스 대상층인 개발자들이 접하는 환경과 유사한 테스트를 구현하기 위해 다음과 같은 기준으로 테스트를 작성 및 선정했습니다.

- 설명문, 코드 예시, HTML 마크업 등 다양한 요소를 포함하여 실제 개발 문서와 유사한 구조를 만들었습니다.
- 총 202단어로 구성하여 기준값인 202WPM과 직접적으로 비교할 수 있게 했습니다.
- 테스트 글을 특징 별로 구조화 하여 실제 개발문서의 다양한 읽기 속도를 반영할 수 있도록 했습니다.

구조화한 테스트 글은 다음 항목으로 구분됩니다.

<img width="600" src="https://github.com/user-attachments/assets/6ccdc377-7b42-4d17-85ad-c3b22b72817c" alt="테스트-설명문" />    

1. **일반 글**: 일반적으로 쉽게 읽혀지는 내용으로, 대부분의 사용자가 빠르게 읽을 수 있는 부분입니다.

<br/>
<br/>

<img width="600" src="https://github.com/user-attachments/assets/fc20e2eb-70e6-45c7-9b91-0e456bf18c31" alt="테스트-코드블럭" />

2. **코드블럭**: 일반 글과는 다르게 읽히는 경향을 가지고, 코드의 복잡성이나 개인의 수준에 따라 읽기속도에 편차가 있을 수 있는 부분입니다.

<br/>
<br/>

<img width="600" src="https://github.com/user-attachments/assets/54df72a6-12d0-4faa-bdec-a9577ea78aec" alt="테스트-상세설명" />

3. **상세 설명**: 기술적인 설명이나 다양한 맥락을 고려해야하기 때문에 일반적으로 주의 깊게 읽어야 하는 부분입니다.

<br/>

이와 같은 테스트 글 구조화를 통해 다음과 같은 효과를 기대할 수 있는 테스트 글을 작성할 수 있었습니다.

- 개발자들이 실제로 접하는 문서와 유사한 형태로 읽기 속도를 측정할 수 있습니다.
- 각 섹션별 읽기 속도의 차이를 통해 개발 기술 문서의 평균 적인 읽기 속도를 평가할 수 있습니다.
- 단순한 평균 읽기 속도 측정을 넘어선 주요 대상층에 대한 유의미한 데이터를 얻을 수 있습니다.

이렇게 개발 문서의 실제 읽기 패턴 반영을 통해 더욱 정확하게 대상층의 평균 읽기속도을 특정할 수 있도록 하였습니다.

<br/>

### 2. 어떻게 시멘틱 구조의 페이지에서 본문에 해당하는 텍스트만 추출할 수 있을까?

사용자가 입력한 주소의 아티클 리딩 타임을 계산하기 위해서는 아티클의 여러 요소 중 본문 내용만을 가져와야 했습니다.

하지만 대부분의 사이트에는 아티클과 관련 없는 요소들이 함께 포함되어 있으며, 광고나 댓글과 같이 리딩 타임 계산 시 제외되어야 하는 요소가 본문 내에 포함되는 경우도 있습니다.

이런 다양한 경우를 모두 대응하기에는 복잡성이 높기 때문에, 저희는 우선 웹사이트를 크게 시멘틱 구조와 비시멘틱 구조로 나누어 문제를 해결하고자 했습니다.

> [!NOTE]
> 1. 시멘틱 구조의 특징: `<header>`, `<nav>`, `<aside>`, `<section>`, `<article>`, `<footer>` 등의 시멘틱 태그를 사용하여 구조를 명확히 파악할 수 있습니다.
> 2. 비시멘틱 구조의 특징: 일반적인 태그를 주로 사용하며, HTML 코드만으로는 구조를 파악하기 힘듭니다.

<br />

<img width="1000" alt="image" src="https://github.com/user-attachments/assets/03c3b1ed-7696-4241-8113-974928e7d793">

<br/>
<br/>


#### 2-1. 시멘틱 구조에서 본문 판별하기

시멘틱 태그는 각 태그마다 역할이 있기 때문에, 저희는 본문 내용을 추출할 태그의 기준을 만들었습니다.

- 본문으로 포함되는 태그: `<main>`, `<article>`, `<section>`

먼저 HTML DOM 트리 구조를 DFS로 순회하면서 본문 요소가 될 가능성이 있는 `<main>`, `<article>`, `<section>` 태그의 요소들을 메모리에 적재했습니다.

- 본문 태그가 없는 경우: 비시멘틱 구조 대응 로직으로 판별합니다.

<div align="center">
  <img width="400" alt="dfs" src="https://github.com/user-attachments/assets/d11e84e0-202e-4e70-844b-786f9420f990">
</div>

<br/>

#### 2-2. 불필요한 요소를 제외하자

블로그 아티클의 특성상 본문 내에 광고, 댓글, 다른 글 소개 등 본문 내용과 관련 없는 요소가 포함되는 경우가 많았습니다. 이를 제거하기 위한 로직이 필요했습니다.

저희가 필요한 최종 결과물은 리딩 타임 계산을 위한 본문 텍스트의 총 단어 수이기 때문에, 본문 텍스트와 관련 없는 태그는 제외하기로 했습니다. 같은 맥락에서, 이미지나 동영상 같이 보는 데 걸리는 시간을 파악하기 어려운 미디어 요소를 제외했습니다.

이를 위해 여러 사이트를 조사하여 본문에서 제외할 태그를 아래와 같이 결정했습니다.


|          콘텐츠 섹션 및 레이아웃           |            멀티미디어            |          인터랙티브 요소          |      스크립트 및 스타일       |      임베디드 콘텐츠       |       기타       |
|:-----------------------------------------:|:--------------------------------:|:---------------------------------:|:----------------------------:|:-------------------------:|:----------------:|
| ```<nav>```                               | ```<audio>```                    | ```<button>```                    | ```<script>```               | ```<img>```               | ```<progress>``` |
| ```<aside>```                             | ```<canvas>```                   | ```<select>```                    | ```<style>```                | ```<svg>```               |                  |
| ```<footer>```                            | ```<embed>```                    | ```<option>```                    | ```<noscript>```             | ```<meta>```              |                  |
|                                           | ```<iframe>```                   | ```<optgroup>```                  |                              |                           |                  |
|                                           | ```<object>```                   | ```<map>```                       |                              |                           |                  |
|                                           | ```<picture>```                  | ```<area>```                      |                              |                           |                  |
|                                           | ```<source>```                   |                                   |                              |                           |                  |

이러한 기준을 바탕으로 1-1 과정을 통해 가려낸 본문 요소에서 불필요한 요소를 제외하는 과정을 거쳤습니다.

<br/>

#### 2-3. 코드 블록내의 단어는 어떻게 처리해야할까?

저희 Readim에서 제공하는 예상 리딩 타임의 기준이 WPM(분당 단어 수)이기 때문에 글자 수를 정확하게 파악하는 것이 목표 중 하나였습니다. 따라서 주 타겟층인 개발자가 보는 아티클에서 자주 등장하는 코드 블록 내의 문자를 어떻게 처리할지 고민했습니다.


<img width="600" alt="codeblock" src="https://github.com/user-attachments/assets/82ed99a2-597e-4e33-9fce-92c860398803">


1. 본문 텍스트에서 특수문자는 불필요하다고 판단하여 제거했습니다.
2. `<LikeButton>` 컴포넌트처럼 **camelCase**나 **PascalCase**를 사용할 때 코드 상에서는 한 단어지만 읽을 때는 두 단어로 읽히므로, 이를 두 단어로 분리하는 작업을 진행했습니다.
3. 최종적으로 본문 요소와 하위 요소의 텍스트를 추출했습니다.
4. 추출한 텍스트의 단어 수를 구한 후 사용자별 리딩 타임을 계산했습니다.

<br/>

### **3. 시멘틱 태그가 없는 사이트의 스크래핑 방법?**
  
  **3-1. `<div>`와 `<script>` 뿐인 Velog.**
  
  <img width="600" alt="01" src="https://github.com/user-attachments/assets/1999c340-b38b-4d21-b3bc-6c0ef01b0ac1">
  
  **문제점:** 위의 사진과 같이, `<body>` 태그 내부에는 오직 `<div>` 와 `<script>` 태그만이 존재했습니다.
  
   또한, **클래스 네임 난독화(Class Name Obfuscation)** 로 인해 기존 로직으로는 Velog 사이트의 아티클 본문을 스크래핑하는 것이 불가능했습니다.
  
  **해결 방안**: 여러 개의 Velog를 조사하며, 난독화가 매번 새로운 난독화 된 코드를 생성하는 것이 아니라는 것을 발견하여 클래스 네임에서 공통점을 찾을 수 있었습니다.
  
  - 타이틀 클래스 네임
  
  <img width="600" src="https://github.com/user-attachments/assets/2b5b9b5e-de10-43a0-a1af-13bf0b67f0ce">

  <br/>
  <br/>
  
  - 메인 콘텐츠 클래스 네임
  
  <img width="600" src="https://github.com/user-attachments/assets/03c19b23-1e99-41eb-ad12-bb13e982ca5a">
  
  항상 클래스 네임에 **`TBWPX`** 를 포함한 요소는 **아티클의 타이틀** 을 나타내었으며, **`dFtzxp`** 를 포함한 요소는 **아티클의 메인 콘텐츠** 를 나타내고 있었습니다.
  
  - 함수 순서도
    
  <div align="center">
    <img width="800" alt="04" src="https://github.com/user-attachments/assets/9e06a8be-28d3-4347-9a29-56ead32b5024">
  </div>
  
  해당 클래스 네임의 공통점을 발견하여, Velog 사이트가 입력될 경우엔 해당 규칙으로 메인 콘텐츠를 분류하는 함수를 실행하게 하여 성공적으로 스크래핑을 수행할 수 있었습니다.
  
  **3-2. 유저들의 커스텀 스킨이 사용 가능한 Tistory의 경우.**
  
  **문제점**: Tistory는 다양한 유저들이 만든 커스텀 스킨과 일반 시멘틱 태그 스킨의 혼용이 가장 큰 문제였습니다.
  
  - `<div>` 태그이면서 다양한 클래스 네임을 사용한 예.


<table>
  <tr>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="05" src="https://github.com/user-attachments/assets/c1c01850-6a48-4e82-adcb-1ec61f3d257c" />
    </td>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="06" src="https://github.com/user-attachments/assets/3cc5ad45-b0d5-4b9c-8133-489c0bdf63c5" />
    </td>
    <td align="center" style="border: 10px solid black; padding: 10px;">
      <img width="300" alt="07" src="https://github.com/user-attachments/assets/a34ef152-c82c-4041-8e95-833c357038b6" />
    </td>
  </tr>
</table>

  커스텀 스킨의 경우, 시멘틱 태그를 준수하지 않으며 블로그마다 상이한 클래스 명과 무분별한 태그 사용으로 인해 본문 판별이 곤란했기 때문입니다.
  
  **해결 방안:** Tistory도 ****마찬가지로 여러 개의 블로그를 조사하며, 법칙을 찾았습니다. 
   조사 결과, 
  
  - `<main>`으로 판별할 수 있는 클래스 명
  
  `area_view`, `tt_article_useless_p_margin`, `contents_style`, `article_skin`
  
  - `<main>`으로 판별할 수 있는 ID
  
  `article-view`, `mArticle`
  
  - 본문에서 제외돼야 할 클래스 명
  
  `footer`, `summary`, `reply`, `tag` 
  
  - 함수 순서도

  <div align="center">
    <img width="800" alt="08" src="https://github.com/user-attachments/assets/1d50f854-1776-4b64-85ea-78bd647d71dd">
  </div>
  
  결과적으로, Tistory 사이트가 입력될 경우, 시멘틱 태그 대응 함수를 실행시킨 후 반환 값이 없으면 언급한 Tistory 규칙을 적용하여 메인 콘텐츠 내용을 얻을 수 있었습니다.
      

## 🗓️ Schedule

<div align="center">
  <table >
    <tr>
      <th>주차</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>1주차</td>
      <td>
        - 아이디어 수집, 선정<br>
        - 기술 스택 결정 및 학습<br>
        - Git 작업 플로우 결정<br>
        - KANBAN 작성
      </td>
    </tr>
    <tr>
      <td>2주차</td>
      <td>
        - 프로젝트 세팅<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Client: 리액트, Vitest, Cypress<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- Server: Nest.js, Jest<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- ESLint, Prettier, Husky 설정<br>
        - 페이지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 메인 페이지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 헤더 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 토스트 메시지 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 모달 구현<br>
        - 알고리즘 작성<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 본문 판별 알고리즘 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- reading time 알고리즘 구현<br>
        &nbsp;&nbsp;&nbsp;&nbsp;- 코드 블록 대응 알고리즘 구현
      </td>
    </tr>
    <tr>
      <td>3주차</td>
      <td>
        - velog, tistory 대응 본문 판별 알고리즘 구현&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
        - 세부 요소 추가 제작 및 수정<br>
        - 사용자 피드백 반영
      </td>
    </tr>
  </table>
</div>

## 👏 Memoir

<details>
<summary>이재훈</summary>
팀 프로젝트를 통해 개발자 개인의 취향을 우선하는 것이 아닌 사용자를 위한 서비스가 어떤것인지 깊게 고민해보고 분석하고 구현해내는 경험을 할 수 기회가 있어서 좋았습니다.

사용자의 필요를 우선하는 결정을 고민하고 적용하면서 서비스의 품질이 크게 향상되는 것을 느낄 수 있었습니다.

팀원들과 서로 조율하고 배려하는 것도 물론 중요했지만 때로는 의견을 내 서로 부딪히고 의견을 좁혀가는 것도 각자가 아닌 하나의 팀으로써 하나의 프로젝트를 만들어 가는 과정이라고 느꼈습니다.

프로젝트가 진행될수록 의사 결정 시간이 점점 짧아지고 팀원들과 서로 동기화되고 있다는걸 느끼는 순간들이 재밌다고 생각했고, 서로에게 많은 도움을 주고 받으며 성장한 것 같아서 즐거운 시간이었습니다.

팀 프로젝트 기간동안 기술적 성장 외에도 소통 능력에 있어서도 많은 것을 배울 수 있었고 이번 경험을 바탕으로 질적으로 성장된 개발과 협업을 할 수 있을 것 같아 앞으로가 더 기대가 됩니다.
</details>

<br/>

<details>
<summary>오지은</summary>
이번 팀 프로젝트를 진행하면서 얻은 경험과 배움이 많았습니다.

우선 팀원들과의 협업을 통해 각기 다른 의견을 조율하고 조화롭게 통합하는 법을 배웠습니다. 서로 다른 아이디어를 존중하고, 더 나은 해결책을 찾기 위해 토론하고 합의하는 과정은 매우 유익했습니다. 이러한 경험은 팀워크의 중요성을 다시 한 번 느끼게 했습니다.

또한 프로젝트를 진행하면서 기술적인 문제뿐만 아니라 시간 관리, 우선순위 설정, 사용자 중심 서비스 개발의 중요성 등 여러 가지 측면에서 배운 점이 많았습니다.

마지막으로 Git 전략, 오류 처리,  HTML 태그, nest.js 등 유용한 기술들을 익히는 데 도움이 되었고, 이를 통해 개인적으로도 성장을 이룰 수 있었습니다.
</details>

<br/>

<details>
<summary>이창호</summary>
묵묵히 진행하다보면 개발자의 취향과 의도에만 묻히게 되는 단점을 팀원들과의 대화를 통해 극복할 수 있었습니다.

기능 및 UI/UX 구현 시 항상 사용자 입장에서 생각하는 태도가 중요했습니다. 이를 위해 팀원들과 지속적으로 의견을 나누며, 사용자의 편의성과 경험을 최우선으로 고려하는 개발을 진행했습니다.

또한, 개발 과정에 막막했던 기능들을 구현할 때는 누군가 한 명이 낸 아이디어를 구체화 하여 극복하는 경험은 저에게 새로운 경험과 지식을 쌓게 해주었으며, 앞으로도 최신 기술 트렌드 및 대표적인 기술 스택의 공부해야하는 필요성을 느낄 수 있었습니다.

항시 최종적으로 만들어낼 기능에 대해 다른길로 빠지지 않도록 서로 길잡이가 되었으며, 사용자를 우선시하는 태도로 개발을 진행하는 경험은 앞으로 혼자 개발을 하게 되더라도 우선해야할 개념을 상기시킬 수 있는 자산이 된 시간이었습니다.
</details>
