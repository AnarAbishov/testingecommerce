import './App.css'
import Header from './components/Header'
import RouteConfig from "./config/RouteConfig.jsx";
import {Container} from "@mui/material";
function App() {


  return (
    <>
        <Header/>
        <Container maxWidth="lg">
            <RouteConfig/>
        </Container>
    </>
  )
}

export default App
