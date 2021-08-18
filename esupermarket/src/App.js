import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { configStore } from './state/store/configStore';
import './App.css';
import {Home} from "./Component/Home.jsx"

function App() {
  const localStore = configStore ();
  return (
    <div >
      <Provider store={localStore}>
        <Home/>
        </Provider>
    </div>
  );
}

export default App;
