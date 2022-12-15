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
      return [moneyBackground, '#EBF387'];
    case '건강운':
      return [healthyBackground, '#FFC56F'];
    case '애정운':
      return [loveBackground, '#F38DE9'];
    case '학업운':
      return [workBackground, '#8DE1F3'];
    case '행운':
      return [luckyBackground, '#FF9797'];
    case '직장운':
      return [studyBackground, '#9D9BFF'];
    default:
  }
}
