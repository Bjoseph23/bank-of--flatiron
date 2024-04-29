import './App.css';
import 'boxicons/css/boxicons.min.css'
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import InputForm from './components/InputForm';

import { useState } from 'react';
import SearchBar from './components/SearchBar'



function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const result = () =>
    transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  const handleClick = () => {
    setTransactions(result);
  };
  return (
    <div>
      <div className="search-bar">
      <SearchBar/>
      </div>
      <div style={{ padding: 10 }}>
      </div>
      <InputForm onAddTransaction={addTransaction}/>
      <div className="table-card">
      <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <Header/> 
      
      <Transaction/>
    </div>
  );
}

export default App;
