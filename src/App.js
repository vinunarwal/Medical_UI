// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PatientInfo from './components/PatientInfo';
import Test from './components/Test';
import Medi from './components/Medi';

function App() {
    return (
        <div className="m-3 flex flex-row justify-around h-screen">
            <div className='flex flex-column print-d-none'>
            <PatientInfo/>
            <Test/>
            </div>
                 
            <Medi/>
        </div>
    );
}

export default App;
