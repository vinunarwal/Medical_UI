import React from 'react';
import '../index.css';
import { Repdata } from '../data/Reportdata';

const Report = () => {
   return (
      <div className='container'>
         <div className='report mt-2 text-sm'>
            <div className='font-bold text-xl text-center border-t-2 py-1'>
               <h2>Complete Blood Count (CBC)</h2>
            </div>
            <div className='border-b-2 border-t-2 py-1'>
               <div className='row heading font-bold'>
                  <div className='col-sm-4'><p>Investigation</p></div>
                  <div className='col-sm-2'><p>Result</p></div>
                  <div className='col-sm-3'><p>Value</p></div>
                  <div className='col-sm-3'><p>Unit</p></div>
               </div>
            </div>
            {Repdata.map((item, index) => (
               <div key={index} className='row pt-1'>
                  <div className='col-sm-4 testname'>
                     <p className={`${item.investigation === 'RBC COUNT' || item.investigation === 'WBC COUNT' || item.investigation === 'HEMOGLOBIN' || item.investigation === 'BLOOD INDICIES' || item.investigation === 'DIFFERENTIAL WBC COUNT' || item.investigation === 'PLATELET COUNT' ? 'font-bold' : ''}`}>
                        {item.investigation} <span className='block text-xs textt'>{item.measure}</span>
                     </p>
                     
                  </div>
                  <div className='col-sm-2 result'>
                     <p>{item.result}</p>
                  </div>
                  <div className='col-sm-3 value'>
                     <p>{item.value}</p>
                  </div>
                  <div className='col-sm-3 unit'>
                     <p>{item.unit}</p>
                  </div>
               </div>
            ))}
            <div className='instruments pt-4'>
               <p>
                  <span className='font-semibold'> Instruments:</span> Fully automated cell counter-Mindray300
               </p>
               <p>
                  <span className='font-semibold'>Interpretation:</span> Further confirm for Anemia
               </p>
            </div>
            <hr className='mt-2' />

            <div className='Foott flex justify-between pt-2'>
               <div className='col-sm-5 text-lg flex'>
                  <div className='text-center'>
                     <p>Thanks for Reference</p>
                  </div>
               </div>
               <div className='col-sm-7'>
                  <p> ****End of Report****</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Report;
