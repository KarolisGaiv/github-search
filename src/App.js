import './styles/main.scss';
import { ReactComponent as Moon } from './assets/icon-moon.svg';

function App() {
  return (
    <div className='content'>
      <header className='header'>
        <h1 className='header__title'>devfinder</h1>
        <button className='header__page-style-button'>
          <h4 className='header__page-style-name'>dark</h4>
          <span className='header__icon-container'>
            <Moon />
          </span>
        </button>
      </header>
    </div>
  );
}

export default App;
