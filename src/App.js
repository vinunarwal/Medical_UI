// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PatientInfo from './components/PatientInfo';
import Test from './components/Test';

function App() {
    return (
        <div className="App">
            <PatientInfo/>
            <Test/>
        </div>
    );
}

export default App;
