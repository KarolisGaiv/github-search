import './styles/main.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserProfile from './components/UserProfile/UserProfile';
import { useEffect, useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('octocat');
  const [userData, setUserData] = useState({});
  const [backgroundTheme, setBackgroundTheme] = useState('light');

  useEffect(() => {
    fetchData();
    setTheme();
  }, [searchQuery, backgroundTheme]);

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchQuery}`);
    const data = await response.json();
    setUserData(data);
  };

  function setTheme() {
    backgroundTheme === 'light'
      ? (document.body.className = '--light')
      : (document.body.className = '--dark');
  }

  return (
    <div className='content'>
      <Header
        setBackgroundTheme={setBackgroundTheme}
        currentTheme={backgroundTheme}
      />
      <SearchBar
        setSearchQuery={setSearchQuery}
        currentTheme={backgroundTheme}
      />
      <UserProfile userData={userData} currentTheme={backgroundTheme} />
    </div>
  );
}

export default App;
