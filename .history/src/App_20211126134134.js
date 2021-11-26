import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          polygon: {
              enable: true,
              type: 'inside',
              move: {
                  radius: 10
              },
              url: 'path/to/svg.svg'
          }
      }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
