import React, { useState } from 'react';
import { medicalTests } from './AllObject';

const Test = () => {
    const [selectedTestIndex, setSelectedTestIndex] = useState(null);

    const handleTestSelection = (e) => {
        setSelectedTestIndex(e.target.value !== "" ? parseInt(e.target.value, 10) : null);
    };

    return (
        <div className='container'>
            <h2>Medical Test Selection</h2>
            <label htmlFor="testSelect">Select a Medical Test:</label>
            <select
                id="testSelect"
                className="form-select"
                value={selectedTestIndex !== null ? selectedTestIndex : ""}
                onChange={handleTestSelection}
            >
                <option value="">Select a test</option>
                {medicalTests.map((item, index) => (
                    <option key={index} value={index}>
                        {item.category}
                    </option>
                ))}
            </select>

            {selectedTestIndex !== null && (
                <div>
                    <h3 style={{ textAlign: 'center' }}>{medicalTests[selectedTestIndex].category}</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>investigation</th>
                                <th>Result</th>
                                <th>Reference Value</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicalTests[selectedTestIndex].tests.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.testName}</td>
                                    <td>{item.result}</td>
                                    <td>{item.testRefValue}</td>
                                    {/* <td>{item.testRefValueF}</td> */}
                                    <td>{item.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Test;
