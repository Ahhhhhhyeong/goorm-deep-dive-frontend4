import '@testing-library/jest-dom';

/*
vitest
  - vite 공식 테스트 러너

vitest을 사용하기 위해서 설정
globals: true
 - test,expect,discribe 같은 전역 함수들을 import 없이 
   바로 사용할 수있다.
   test() , expect().to()
   만약 false 로 가 있다면 
   import { test, expect } from 'vitest'

  environment: 'jsdom',  
   - 브라우저에서 시뮬레이션을 할 수있는 가상 DOM
   - 노드는 document , windows 브라우저 환경이 없기 때문에 jsdom
     이용해서 브라우저처럼 테스트하는 환경 제공한다


  setupFiles: './src/setupTests.js'
   - 테스트가 실행되기 전에 공통으로 설정할 코드를 여기에 넣는다
*/
