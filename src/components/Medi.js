import "../App.css";
import PrintComponent from "./PrintComponent";
import Hero from "./Hero";
import Report from "../components/Report";
import Foot from "./Foot";

function Medi() {
  return (
    <div>
      <PrintComponent>
        <div className="flex flex-column justify-content-around">
          <Hero />
          <Report />
          <Foot />
        </div>
      </PrintComponent>
    </div>
  );
}

export default Medi;
