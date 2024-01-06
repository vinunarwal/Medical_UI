import React from 'react'
import stamp from './Img/stamp.png'

function Foot() {
   return (
      <>
         <div className='Footer pt-4'>
            <div className='container'>
               <div className='row justify-center items-baseline'>
                  <div className='col-sm-5'>
                     <div className='text-center'>
                        <p className='text-base'><span className='block font-bold'>Medical Lab Technician</span>
                           (DMLT, BMLT)</p>
                     </div>
                  </div>
                  <div className='col-sm-3'>
                     <div className='text-center'>
                        <p className='text-base'><span className='block font-bold'>Dr. Payal Shah</span>
                           (MD, Pathologist)</p>
                     </div>
                  </div>
                  <div className='col-sm-4'>
                     <div className='text-center grid justify-center'>
                        <img src={stamp} alt='Not Found' className='stamp w-28'></img>
                        <p className='text-base'><span className='block font-bold'>Dr. Vimal Shah</span>
                           (MD, Pathologist)</p>
                     </div>
                  </div>
               </div>
               <hr className='mt-2' />
            </div>
         </div>
      </>
   );
}

export default Foot