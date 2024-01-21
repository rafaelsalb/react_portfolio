import Navbar from './components/Navbar.jsx';
import { useEffect, useState } from 'react';
import { Home } from './pages/home/Home.jsx';
import { Donate } from './pages/donate/Donate.jsx';

function App(props) {
  const PAGES = {
    'Home': <Home />,
    'Donate': <Donate />
  }

  // let prevPage = String(window.localStorage.getItem('page'));
  // let [page, setPage] = useState(prevPage !== 'null' && prevPage !== 'undefined' ? prevPage : 'Home');

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
