import { imgFileLeft, imgFileRight, category, slot } from 'component/common/const';

export default function findIndex(selectCategory) {
  // eslint-disable-next-line array-callback-return
  const select = slot.filter((v) => {
    if (v[3] === selectCategory) return v;
  });

  const randomNumber = Math.trunc(Math.random() * select.length);
  const slotIndex = slot
    // eslint-disable-next-line array-callback-return
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
  const index = slot[slotIndex[0]]
    // eslint-disable-next-line array-callback-return
    .map((v, i) => {
      if (i === 0) {
        return -imgFileLeft.indexOf(v);
      }
      if (i === 1) {
        return -imgFileRight.indexOf(v);
      }
      if (i === 2) {
        return category.indexOf(v);
      }
    })
    .filter((v) => v !== undefined);
  return [...index, slotIndex[0]];
}
