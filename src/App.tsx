import './App.css';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className=''>
    <Header />
    <div className='Route'>
      <Outlet />
    </div>
    </div>
  );
}

export default App;
