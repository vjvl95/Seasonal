import {
  moneyBackground,
  healthyBackground,
  loveBackground,
  workBackground,
  luckyBackground,
  studyBackground,
} from 'img';
export default function selectBackGround(category) {
  switch (category) {
    case '재물운':
      return [moneyBackground, '#e9ec69'];
    case '건강운':
      return [healthyBackground, '#fbceb1'];
    case '애정운':
      return [loveBackground, 'pink'];
    case '학업운':
      return [workBackground, 'skyblue'];
    case '행운':
      return [luckyBackground, 'red'];
    case '직장운':
      return [studyBackground, 'skyblue'];
    default:
  }
}
