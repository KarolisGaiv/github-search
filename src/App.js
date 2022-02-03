import './styles/main.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserProfile from './components/UserProfile/UserProfile';
import { useEffect, useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('octocat');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchQuery}`);
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <UserProfile userData={userData} />
    </div>
  );
}

export default App;
