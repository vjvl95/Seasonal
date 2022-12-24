import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const { REACT_APP_GOOGLE_KEY } = process.env;

const gaTrackingId = REACT_APP_GOOGLE_KEY; // 환경 변수에 저장된 추적ID 가져오기
export default function trackingPage() {
  const history = createBrowserHistory();
  ReactGA.initialize(gaTrackingId); // react-ga 초기화 및 debug 사용

  history.listen((response) => {
    ReactGA.set({ page: response.location.pathname });
    ReactGA.pageview(response.location.pathname);
  });
}
