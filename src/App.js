import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import PatientInfo from './components/PatientInfo';
//import Test from './components/Test';
//import Medi from './components/Medi';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import DbData from './components/DbData';
//import Home from './components/Home';
import AllData from './components/AllData';
// import DbData from './components/DbData';

function App() {
    return (
        <>
        <AllData />
            {/*<Router> */}
                {/*<Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dbdata' element={<DbData />} />
                </Routes>*/}
            {/* </Router>*/}
        </>
    );
}

export default App;
