import Foot from './components/Foot';
import Hero from './components/Hero';
import Report from './components/Report';
import './style/medical.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'


function App() {
  return (
    <>
      <Hero/>
      {/* <Report/> */}
      <Foot />
    </>
  );
}

export default App;
