import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import trackingPage from './util/trackingPage';

trackingPage();
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
