import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
    <Particles></Particles>
      <Navbar />
      <Header />
      </Particles>
    </>
  );
}

export default App;
