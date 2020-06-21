import {cube} from './math';

function cubeTest() {
  document.body.innerHTML = '<h1>Hello, ts-webpack-template!</h1>';
  console.log('cube>>>', cube(2))
  console.log('>>>', 'Hello, ts-webpack-template!');
}

cubeTest();