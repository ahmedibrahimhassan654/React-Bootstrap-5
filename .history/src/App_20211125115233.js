import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            color: {
              value: "#000000",
            },
            line_linked: {
              color: {
                value: "#000000",
              },
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
