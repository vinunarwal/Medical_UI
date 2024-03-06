import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DbData from './components/DbData';
import Home from './components/Home';
import AllData from './components/AllData';

function App() {
    return (
        <>
            <AllData />
            <Routes>
                {/*<Route path='/' element={<Home />} />*/}
                <Route path='/dbData' element = { <DbData /> } />
            </Routes>
        </>
    );
}

export default App;
