import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Particles
       params={{
        particles:{
          
        }
       }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
