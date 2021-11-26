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
          number:{
            value:30,
            de
          }
        }
       }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
