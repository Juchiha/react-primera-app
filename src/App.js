import './App.css';
import Saludar from './components/Saludar/Saludar';
import Formulario from './components/Formulario';
import LayoutBasic from './components/LayoutBasic';
function App() {

  const enviarsaludo = (nombre) =>{
    console.log("Hola "+nombre);
  } 
  
  const data = {
    nombre: "Jose David",
    apellido: "Giron",
    edad : 31,
    ciudad:"Barranquilla"
  }

  return (
        <LayoutBasic>
            <h2 className="nombre">Hola Mundo</h2>
            <Saludar data={data}/>
        </LayoutBasic>
  );
}

export default App;
