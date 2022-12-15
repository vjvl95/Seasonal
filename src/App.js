import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const { REACT_APP_GOOGLE_KEY } = process.env;

const gaTrackingId = REACT_APP_GOOGLE_KEY; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId); // react-ga 초기화 및 debug 사용

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
