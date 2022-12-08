import { imgFileLeft, imgFileRight, category, slot } from 'component/common/const';

export default function findIndex(selectCategory) {
  const select = slot.filter((v) => {
    if (v[3] === selectCategory) return v;
  });
  console.log(select);
  const randomNumber = Math.trunc(Math.random() * select.length);
  console.log(randomNumber);
  const slotIndex = slot
    .map((v, i) => {
      if (
        select[randomNumber][0] === v[0] &&
        select[randomNumber][1] === v[1] &&
        select[randomNumber][2] === v[2]
      ) {
        return i;
      }
    })
    .filter((v) => v !== undefined);

  console.log(slotIndex[0]);
  console.log(slot[slotIndex[0]]);
  const index = slot[slotIndex[0]]
    .map((v, i) => {
      if (i === 0) {
        return -imgFileLeft.indexOf(v);
      }
      if (i === 1) {
        return -imgFileRight.indexOf(v);
      }
      if (i === 2) {
        return -category.indexOf(v);
      }
    })
    .filter((v) => v !== undefined);
  console.log(index);
  return index;
}
