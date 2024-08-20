import logo from './logo.svg';
import './App.css';
import MainBody from './components/MainBody';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
function App() {
  return (
      <Provider store={AppStore}>
      <MainBody/>
      </Provider>
  );
}

export default App;
