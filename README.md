## 설치한 패키지

- create next-app --typescript
- emotion, @emotion/babel-plugin
- axios
- eslint, prettier

</br>

## 설정한 부분

**서버 통신(axios)**

- 파일 경로: `src/api/request.ts`
- axios.create로 커스텀 axios instance생성.
- Interceptors적용 - 요청/응답 시 공통적으로 처리할 로직을 작성할 수 있도함.

**스타일**

- cdn으로 reset.css적용.
- emotion의 GlobalProvider 적용.
  - `src/styles/GlobalStyle.tsx` 파일에서 전역으로 적용할 css코드 작성하시면 됩니다.
- emotion의 ThemeProvider 프로바이더 적용.
  - `src/styles/theme.tsx` 파일에서 스타일 값들을 정의한 다음, 각 컴포넌트 파일에서 전역 값으로 사용하시면 됩니다.

**상대경로 alias적용**

- 파일 경로: `tsconfig.json`
- “./src” 를 baseUrl로 alias설정했습니다.
  ```json
  {
    "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
        "@/*": ["./*"]
      }
    }
  }
  ```
- 사용 예시 - `@/components/Button.tsx`

</br>

사용하지 않은 부분은 삭제하시고, 다른 기술 스택으로 자유롭게 변경해서 사용하시면 됩니다!!
