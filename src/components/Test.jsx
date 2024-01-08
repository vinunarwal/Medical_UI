import React, { useState } from 'react';
import { medicalTests } from './AllObject';
import MyAccordion from './MyAccordion';

const Test = () => {
    const [formData, setFormData] = useState({
        gender: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [selectedTestIndex, setSelectedTestIndex] = useState(null);

    const handleTestSelection = (e) => {
        setSelectedTestIndex(e.target.value !== "" ? parseInt(e.target.value, 10) : null);
    };

    return (
        <div className='container mt-5'>
            <div className='card'>
                <div className='card-body'>
                    <h2>Medical Test Selection</h2>
                    <div>
                        <label className="form-label">Gender</label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="other"
                                value="other"
                                checked={formData.gender === 'other'}
                                onChange={handleChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
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
                                        <th>Investigation</th>
                                        <th>Result</th>
                                        <th>Reference Value</th>
                                        <th>Unit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicalTests[selectedTestIndex].tests.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.testName}</td>
                                            <td><input className='form-control' type='text'/>{item.result}</td>
                                            <td>{formData.gender === 'male' ? item.testRefValueM : item.testRefValueF}</td>
                                            <td>{item.unit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            <MyAccordion />
        </div>
    );
};

export default Test;
