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
            number: {
                value: 30,
                des: [
                    {src: 'path/to/first/image.svg', height: 20, width: 20},
                    {src: 'path/to/second/image.jpg', height: 20, width: 20},
                ]
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
