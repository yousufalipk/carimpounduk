import './App.css';
import { useUser } from './context/index';

// Components Import
import CustomLoader from './components/Loader/Loader';

// Pages import 
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  const { isAuth, loader, mainLoader } = useUser();

  if (mainLoader) {
    return (
      <div className='relative w-full h-[100vh] flex justify-center items-center bg-purple-300'>
        <div className='absolute z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-center'>
          <CustomLoader />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='relative w-full h-[100vh]'>
        {/* Loader */}
        {loader && (
          <div className='absolute z-50 w-full h-full bg-black bg-opacity-70 flex justify-center items-center'>
            <CustomLoader />
          </div>
        )}

        {false ? (
          <>
            <div className='w-full h-full flex justify-center items-center'>
              {/* Authorized User */}

            </div>
          </>
        ) : (
          <>
            <div className='w-full h-full flex justify-center items-center'>
              {/* Unauthorized User */}
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </div >
          </>
        )}
      </div>
    </>
  );
}

export default App;
