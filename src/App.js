import './styles/main.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <UserProfile />
    </div>
  );
}

export default App;
