// style
import './App.css';

// hooks
import { useState } from 'react';

// components
import MainMint from './MainMint';
import NavBar from './NavBar';

function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
