
import './App.css';
import Car from './components/Car';





function App() {

  const cars = [
    {id:1, modelo:"SANDERO", ano:2010, km: "13990"    },
    {id:2, modelo:"GOL", ano:2013, km:"1390"    },
    {id:3, modelo:"PALIO", ano:2019, km:"1599"    },
    {id:4, modelo:"CRONOS", ano:2022, km:"0"    },
  
  ]

  return (
    <div className="App">
       
      <h1 className='titulo'>RELAÇÃO DE CARROS</h1>

      <div className="car-container">
        {cars.map((car) =>(
        <Car key={car.id} modelo={car.modelo} ano={car.ano} km={car.ano}/>  
        ))}
      </div>
      
      
    </div>
  );
}

export default App;
