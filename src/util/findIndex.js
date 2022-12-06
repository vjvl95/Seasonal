import { imgFileLeft, imgFileRight, category, slot } from 'component/common/const';

export default function findIndex() {
  const randomNumber = Math.trunc(Math.random() * 50) + 1;
  console.log(randomNumber);
  const index = slot[randomNumber].map((v, i) => {
    if (i === 0) {
      return -imgFileLeft.indexOf(v);
    }
    if (i === 1) {
      return -imgFileRight.indexOf(v);
    }
    return -category.indexOf(v);
  });
  return index;
}
