import ListPhones from './components/Phones/Phones'
import Messages from './components/Messages/Messages';
import MyNewButton from './components/MyNewButton/MyNewButton'
import './App.css'; 


const showAlert1 = () => {
  alert("Eyyyy!!");
}
const showAlert2 = () => {
  alert("Que tal!!");
}

function App() {
  return (
    <div className="App">
      <ListPhones></ListPhones>

      <h1 className="HeaderMessage">Mensajes</h1>
      <Messages name="Nekane"></Messages>
      <Messages name="Oscar"></Messages>

      <h1 className="Header">Botones</h1>
      <MyNewButton handleClick={showAlert1} text="Dale!"></MyNewButton>
      <MyNewButton handleClick={showAlert2} text="Ok"></MyNewButton>
    </div>
  );
}

export default App;
