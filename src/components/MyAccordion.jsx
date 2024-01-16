// <<<<<<< HEAD
// import React, { useState } from 'react';
// import { Accordion } from 'react-bootstrap';
// import { medicalTests } from './AllObject';

// const MyAccordion = ({ resultTexts }) => {
//     console.log("This is resultTexts=>", resultTexts)
//     // const [selectedTestIndex, setSelectedTestIndex] = useState(null);
//     return (
//         <div>
//             <Accordion>
//                 {resultTexts.map((category, index) => (
//                     <Accordion.Item key={index} eventKey={index.toString()}>
//                         <Accordion.Header>
//                             <p>{category.category}</p>
//                         </Accordion.Header>
//                         <Accordion.Body>
//                             <table className='table'>
//                                 <thead>
//                                     <tr>
//                                         <th>Investigation</th>
//                                         <th>Result</th>
//                                         <th>Reference Value</th>
//                                         <th>Unit</th>
//                                     </tr>
//                                 </thead>
//                             </table>
//                             {/* {medicalTests[selectedTestIndex].tests.map((item, index) => ( */}
//                             <ul>
//                                 {category.results.map((result, resultIndex) => (
//                                     // <li key={resultIndex}>{result}</li>
//                                     result ? <li key={resultIndex}>{result}</li> : null
//                                 ))}
//                             </ul>
//                             {/* ))}; */}

//                         </Accordion.Body>
//                     </Accordion.Item>
//                 ))}
//             </Accordion>
//         </div>
//     );
// =======
import React from "react";
import { Accordion } from "react-bootstrap";

const MyAccordion = (props) => {
//   console.log("Props Data=>", props.resultData);
  const resultTestData = props?.resultData?.filter((data) => data);
  return (
    <div>
      <Accordion>
        {resultTestData.map((item, index) => {
        //   console.log("item=>", item);

          return (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>
                <p>{item.category}</p>
              </Accordion.Header>
              <Accordion.Body>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Investigation</th>
                      <th>Result</th>
                      <th>Reference Value</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(item).map((test, testIndex) => {
                    //   console.log("test=>", Object.keys(test))
                      return (
                       ( Object.keys(test) !== "category") && <tr key={testIndex}>
                          <td>{test.investigation}</td>
                          <td>{test.result}</td>
                          <td>{test.referenceValue}</td>
                          <td>{item.unit}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
// >>>>>>> 3dd9dec1fa2eb9fdef8faf2ab0ff35ceb35f3590
};

export default MyAccordion;
