import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Header from './Componants/Header';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage/> } />
          <Route path='/src/Pages/HomePage.jsx' element={ <HomePage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
