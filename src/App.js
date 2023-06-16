import './App.css';
import { Routes, Route } from 'react-router';
import NavBar from './components/Navbar';
import UsersPage from './components/UsersPage';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<UsersPage />}></Route>
          <Route path="/users" element={<UsersPage />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
