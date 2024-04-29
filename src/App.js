import './App.css';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import InputForm from './components/InputForm';
import items from './data/items';

console.log(items)

function App() {
  return (
    <div className="App">
      <Header/>
      <TransactionList item={items}/>
      <InputForm/>
    </div>
  );
}

export default App;
