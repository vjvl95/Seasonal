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
      return moneyBackground;
    case '건강운':
      return healthyBackground;
    case '애정운':
      return loveBackground;
    case '학업운':
      return workBackground;
    case '행운':
      return luckyBackground;
    case '직장운':
      return studyBackground;
    default:
  }
}
