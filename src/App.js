import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Pages from './pages/pages';
import Categories from './components/categories';
import { GlobalProvider } from './context/globalState';


function App() {
  return (
    <div className="App">
       
      <GlobalProvider>
      <BrowserRouter>
      <Categories />
      <Pages />
      </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
