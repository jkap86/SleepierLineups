import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingIcon from './modules/COMMON/components/LoadingIcon';


const Layout = lazy(() => import('./modules/COMMON/components/Layout'));
const Lineups = lazy(() => import('./modules/Lineups'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/lineups'>
        <Suspense fallback={<LoadingIcon />}>
          <Routes>
            <Route path='/:username' element={<Layout display={<Lineups />} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
