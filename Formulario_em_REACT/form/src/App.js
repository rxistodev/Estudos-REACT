
import './App.css';
import MyForm from './components/MyForm';


function App() {
  return (
    <div className="App">
      <h2>FORMS</h2>
      <MyForm user={{ name:"Rennan" , email:"rxisto170@gmail.com" }} />
    </div>
  );
}

export default App;
