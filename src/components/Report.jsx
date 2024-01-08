import React from 'react';
import '../index.css';
import { Repdata } from '../components/data/Reportdata';

const Report = () => {
   return (
      <div className='container'>
         <div className='report'>
            <div className='text-xl font-bold text-center border-b-2'>
               Complete Blood Count (CBC)
            </div>
            {Repdata.map((item, index) => (
               <div key={index} className='row'>
                  <div className='col-sm-3 testname'>
                     <p className={`${item.investigation === 'Investigation' || item.investigation === 'RBC COUNT' || item.investigation === 'WBC COUNT' || item.investigation === 'HEMOGLOBIN' || item.investigation === 'BLOOD INDICES' || item.investigation === 'DIFFERENTIAL WBC COUNT' || item.investigation === 'PLATELET COUNT' ? 'font-bold' : ''}`}>
                        {item.investigation}
                     </p>
                  </div>
                  <div className={`col-sm-3 result ${item.result === 'Result' ? 'font-bold' : ''}`}>
                     <p>{item.result}</p>
                  </div>
                  <div className={`col-sm-3 value ${item.value === 'Value' ? 'font-bold' : ''}`}>
                     <p>{item.value}</p>
                  </div>
                  <div className={`col-sm-3 unit ${item.unit === 'Unit' ? 'font-bold' : ''}`}>
                     <p>{item.unit}</p>
                  </div>
               </div>
            ))}
            <div className='pt-4'>
               <p>
                  <span className='font-semibold'>Instruments:</span> Fully automated cell counter-Mindray300
               </p>
               <p>
                  <span className='font-semibold'>Interpretation:</span> Further confirm for Anemia
               </p>
            </div>
         </div>
      </div>
   );
};

export default Report;
