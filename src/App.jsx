import CustomHeader from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home.jsx';
import { Donate } from './pages/Donate.jsx';

function App(props) {

  const PAGES = {
    'Home': <Home />,
    'Donate': <Donate />
  }

  let prevPage = window.localStorage.getItem('page') !== 'undefined' ? window.localStorage.getItem('page') : 'Home';
  let [page, setPage] = useState(prevPage);

  useEffect(() => {
    window.localStorage.setItem('page', page);
  }, [page]);

  function change_page(page) {
    setPage(page);
  }

  return (
    <>
      <Navbar setPage={change_page} active={page}/>
      <div className="container">
        {PAGES[page]}
      </div>
    </>
  )
}

export default App
