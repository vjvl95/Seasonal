import { slot } from 'component/common/const';

export default function findSlot(location) {
  const searchURL = decodeURI(location.search).split('=');
  const userName = searchURL[1].slice(0, searchURL[1].indexOf('&'));
  const songName = location.pathname.split('/')[2];
  const returnArr = slot
    // eslint-disable-next-line array-callback-return
    .map((v) => {
      if (v[4] === songName && v[3] === searchURL[2]) return v;
    })
    .filter((v) => v !== undefined);
  return [userName, returnArr[0]];
}
