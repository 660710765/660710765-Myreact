import logo from './logo.svg';
import './App.css';
import UserCard from './componnets/UserCard';
import TodoList from './componnets/TodoList';
function App() {
  return (
    <div className="App"style={{
      paddingTop: '60px'
    }} >
      <UserCard />
      <TodoList />
    </div>
  );
}

export default App;
