import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import Formulario from './components/Formulario'
import './style.css'

function App() {
  return (
    <Container>
      <h1 className="text-center bg-primary text-white my-5 py-3">Formulario</h1>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;