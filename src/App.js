import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AllData from './components/AllData';
import { Routes, Route } from 'react-router-dom';
import DbData from './components/DbData';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AllData />} />
                <Route path="/dbData" element={<DbData />} />
            </Routes>
            {/*<AllData />*/}
        </>
    );
}

export default App;
