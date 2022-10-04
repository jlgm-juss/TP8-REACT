import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import Formulario from './components/Formulario'
import './style.css'

function App() {
  return (
    <Container>
      <h1 className="text-center my-5 py-3 Tittle">Formulario</h1>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;