import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div>
     <Navbar daak color='primary'>
       <div className='container'>
        <NavbarBrand >Restaurante Confusão</NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;
