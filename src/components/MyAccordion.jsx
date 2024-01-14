import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { medicalTests } from './AllObject';

const MyAccordion = ({ resultTexts }) => {
    console.log("This is resultTexts=>", resultTexts)
    // const [selectedTestIndex, setSelectedTestIndex] = useState(null);
    return (
        <div>
            <Accordion>
                {resultTexts.map((category, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>
                            <p>{category.category}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Investigation</th>
                                        <th>Result</th>
                                        <th>Reference Value</th>
                                        <th>Unit</th>
                                    </tr>
                                </thead>
                            </table>
                            {/* {medicalTests[selectedTestIndex].tests.map((item, index) => ( */}
                                <ul>
                                    {category.results.map((result, resultIndex) => (
                                        // <li key={resultIndex}>{result}</li>
                                        result ? <li key={resultIndex}>{result}</li> : null
                                    ))}
                                </ul>
                            {/* ))}; */}

                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default MyAccordion;
