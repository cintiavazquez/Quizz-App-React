import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage';
import BookmarkPage from './Components/BookmarkPage';
import CreatePage from './Components/CreatePage';
import ProfilePage from './Components/ProfilePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Bookmark" element={<BookmarkPage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>

      <footer>
        <Nav></Nav>
      </footer>
    </>
  );
}

export default App;
