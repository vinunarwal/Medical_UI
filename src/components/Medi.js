import '../App.css';
import PrintComponent from './PrintComponent';
import Hero from './Hero';
import Report from '../components/Report';
import Foot from './Foot';


function Medi() {
    return (
        <div>
            <PrintComponent>
                <div>
                    <Hero />
                </div>
                <div>
                    <Report />
                </div>
                <div>
                <Foot />
                </div>
            </PrintComponent>
        </div>
    );
}

export default Medi;