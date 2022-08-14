//Parent Component
import { React } from 'react';
import MainLayouts from './components/layouts/main.layouts';
import Albums from './components/albums/main.albums';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Arrow Function
const App = () => {
  return(
    <>
      <MainLayouts> 
        <Router>
          <Routes>
            <Route path='/' element={<h1>HOMEPAGE</h1>} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/posts' element={<h1>POSTING</h1>} />
            <Route path='*' element={<h1 className='text-center text-danger'>404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  )
}

export default App;
