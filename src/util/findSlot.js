import { slot } from 'component/common/const';

export default function findSlot(pathname) {
  const findName = pathname.split('/')[2];
  console.log(slot);
  const returnArr = slot
    // eslint-disable-next-line array-callback-return
    .map((v) => {
      if (v[4] === findName) return v;
    })
    .filter((v) => v !== undefined);
  console.log(returnArr);
  return returnArr[0];
}
