import React from 'react';

function Hero() {
   return (
      <>
         <div className='container'>
            <div className='row hero_section flex justify-around mt-32'>
               <div className='col-sm-3 patient text-base'>

                  <div className='patient_details'>
                     <h1 className='patient_name font-bold text-xl'>Yash M. Patel</h1>
                     <p>Age : 21 Years</p>
                     <p>Sex : Male</p>
                     <p>PID : 555</p>
                  </div>
               </div>

               <div className='col-sm-4 samples border-r-2 border-l-2'>
                  <p className='font-bold text-lg'>Sample Collected At :</p>
                  <p>125, Shivam, Bungalow, S G Road,<span>Mumbai</span></p>
                  <h2 className='text-lg pt-1'>Ref. By: <span className='font-bold'> Dr. Hiren Shah</span></h2>
               </div>

               <div className='col-sm-5 test_dates'>

                  <div className='report'>
                     <div className='report_detail text-sm'>
                        <p><span className='font-bold'>Registered on:</span> 02:31 PM 02 Dec, 22</p>
                        <p><span className='font-bold'>Collected on:</span> 03:11 PM 02 Dec, 22</p>
                        <p><span className='font-bold'>Reported on:</span> 04:35 PM 02 Dec, 22</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}

export default Hero;
