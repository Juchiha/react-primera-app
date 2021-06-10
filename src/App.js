import './App.css';
import Saludar from './components/Saludar/Saludar';
import Formulario from './components/Formulario';
import LayoutBasic from './components/LayoutBasic';
import Car from './components/Car';
function App() {

  /*const enviarsaludo = (nombre) =>{
    console.log("Hola "+nombre);
  } */
  
  /*const data = {
    nombre: "Jose David",
    apellido: "Giron",
    edad : 31,
    ciudad:"Barranquilla"
  }*/

  /*return (
        <LayoutBasic>
            <h2 className="nombre">Hola Mundo</h2>
            <Saludar data={data}/>
        </LayoutBasic>
  );*/
  return(
    <div>
      <h2>Hooks</h2>
      <Car/>
    </div>
  );
}

export default App;
