import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Header from './Componants/Header';
export default function App() {
  return (
    <div className='w-full h-dvh overflow-auto'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='home' element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
