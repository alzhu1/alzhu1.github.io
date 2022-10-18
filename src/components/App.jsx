import { Outlet } from 'react-router-dom';
import Header from './Header';

import '../stylesheets/App.css';

export default function App() {
  return (
    <div className="App">
      <Header></Header>

      <div className="body-content">
        <Outlet />
      </div>
    </div>
  );
}