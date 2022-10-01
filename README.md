# yourggassignment

yourgg 리그오브레전드 전적 api를 활용한 롤 전적 애플리케이션.

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/Next.js-61DAFB?style=for-the-badge&logo=next.js&logoColor=black">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=TypeScript&logoColor=white">
    <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
     <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white">
</div>

## 데모 영상

![yourgg](https://user-images.githubusercontent.com/97820540/193232580-aa01e528-0943-46ad-917f-7b43e3edffdf.gif)

<br />
<br />
 
## 1. 실행
### 실행 방법

```bash
npm run dev
# or
yarn dev
```

## 2.과제 달성 사항 및 해결 방법

### 2.1. 필수

- 왼쪽 디자인 100% 구현 (폰트, 간격, 사이즈 등)
- 매치 카테고리 변경
  <img width="152" alt="스크린샷 2022-10-01 오전 9 28 11" src="https://user-images.githubusercontent.com/97820540/193375771-a2d31de2-0079-4729-b982-9992bbc2b535.png">
  <img width="340" alt="스크린샷 2022-10-01 오전 9 31 17" src="https://user-images.githubusercontent.com/97820540/193375870-dc4bc69a-7690-4713-8e3f-f1fbae3aa348.png">

기존 select 태그 사용시 옵션부분 스타일링이 불가하여. div 태그와 ul, li 태그를 사용하여 모달창 형식으로 구현.
<img width="340" alt="스크린샷 2022-10-01 오전 9 31 17" src="https://user-images.githubusercontent.com/97820540/193375870-dc4bc69a-7690-4713-8e3f-f1fbae3aa348.png">

- 하단 챔피언(라인) 선택
  <img width="329" alt="image" src="https://user-images.githubusercontent.com/97820540/193376057-d4b5ca0d-ee26-4b9c-83cc-1b9f72fe5f8e.png">

<img width="472" alt="image" src="https://user-images.githubusercontent.com/97820540/193376073-0d118bed-ded1-4c00-98d0-4ba4b6da9af8.png">

data의 mostLanes, mostChampions 두 개의 컴포넌트로 분류하여 리스트로 구성.
라인, 챔피언 클릭시 해당 값 파라미터로 전달하여 api 호출.

- 1, 2 변경시마다 browser history에 쌓기 (새로고침시 현재 선택된 1, 2 필터들 유지하기)

- 최초 API 로딩 / 매치 카테고리 변경시 우측의 로딩 UI 표현하기

<img width="472" alt="image" src="https://user-images.githubusercontent.com/97820540/193378132-c0e8e019-0d86-4ee0-9f34-7eaec27d9afb.png">

<img width="472" alt="image" src="https://user-images.githubusercontent.com/97820540/193378148-a4354519-8173-4047-a99f-74b4633ccbec.png">

![image](https://user-images.githubusercontent.com/97820540/193378294-2153cc61-9713-4cd1-b9dc-0dcbeb4bea33.png)

react query 라이브러리 사용하여 isLoading이 true 일시 로딩 컴포넌트 실행.
