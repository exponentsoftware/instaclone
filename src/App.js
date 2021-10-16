
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './component/Route';
function App() {
  return (
<Router>
  
    <ChakraProvider>
     <Navigation/>
     <Routes/>    
    </ChakraProvider>
</Router>
  );
}

export default App;
