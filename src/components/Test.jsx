import React, { useState } from 'react';
import { medicalTests } from './AllObject';
import MyAccordion from './MyAccordion';

const Test = () => {
    const [formData, setFormData] = useState({
        gender: '',
        resultText: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [selectedTestIndex, setSelectedTestIndex] = useState(null);
    const [resultTexts, setResultTexts] = useState([]);

    const handleTestSelection = (e) => {
        setSelectedTestIndex(e.target.value !== "" ? parseInt(e.target.value, 10) : null);
    };
    const handleSaveResult = () => {
        if (selectedTestIndex !== null && formData.resultText.trim() !== "") {
            const category = medicalTests[selectedTestIndex].category;
            const existingCategoryIndex = resultTexts.findIndex(result => result.category === category);

            if (existingCategoryIndex !== -1) {
                // If category already exists, update the existing category
                const updatedResultTexts = [...resultTexts];
                updatedResultTexts[existingCategoryIndex].results.push(formData.resultText);
                setResultTexts(updatedResultTexts);
            } else {
                // If category does not exist, create a new category
                setResultTexts([...resultTexts, { category, results: [formData.resultText] }]);
            }

            setFormData({ ...formData, resultText: '' });
        }
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
                                            <td>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    // value={formData.resultText}
                                                    onChange={(e) => setFormData({ ...formData, resultText: e.target.value })}
                                                />
                                                {item.result}
                                            </td>
                                            <td>{formData.gender === 'male' ? item.testRefValueM : item.testRefValueF}</td>
                                            <td>{item.unit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="btn btn-primary" onClick={handleSaveResult}>
                                Save Result
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <MyAccordion resultTexts={resultTexts} />
        </div>
    );
};

export default Test;
