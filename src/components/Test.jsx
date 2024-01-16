import React, { useState } from 'react';
import { medicalTests } from './AllObject';
import MyAccordion from './MyAccordion';
import { useSelector } from 'react-redux';

const Test = () => {
    const gender = useSelector(state => state.gender);
    console.log("gender from store =>", gender.gender);
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
    const [resultTestData, setResultTestData] = useState();
    const [testResults, setTestResults] = useState([]);
    // const [testItem, setTestItem] = useState([]);

    const handleTestSelection = (e) => {
        setSelectedTestIndex(e.target.value !== "" ? parseInt(e.target.value, 10) : null);
        // setTestResults([]); // Clear testResults when a new test is selected
    };

    // <<<<<<< HEAD
    //     const handleTestResultChange = (testIndex, result) => {
    //         console.log("testIndex, result", testIndex, result)
    //         const updatedResults = [...testResults];
    //         updatedResults[testIndex] = result;
    //         // const kuchb = { ...updatedResults, [testIndex]: result };
    // =======
    const handleTestResultChange = (testIndex, result, item, selectedTestIndex, refValue, category) => {
        // console.log("item index=>",item, testIndex, selectedTestIndex, refValue)
        const updatedResults = [...testResults];

        if (updatedResults) {
            // console.log("updatedResults[selectedTestIndex]=>",updatedResults[selectedTestIndex]);
            updatedResults[selectedTestIndex] = {
                ...(updatedResults[selectedTestIndex] ? updatedResults[selectedTestIndex] : {}),
                [item.testName]: {
                    "result": result,
                    "investigation": item.testName,
                    "referenceValue": refValue,
                    "unit": item.unit,
                },
                "category": category
            };
        }
        //  updatedResults.filter(item => item)
        // console.log("updated Results=>", updatedResults)
        // >>>>>>> 3dd9dec1fa2eb9fdef8faf2ab0ff35ceb35f3590
        setTestResults(updatedResults);
        console.log("This is updateResults", updatedResults)
    };



    const handleSaveResult = () => {
        // <<<<<<< HEAD
        //         if (selectedTestIndex !== null && testResults.length > 0) {
        //             console.log('This is medicaTest', medicalTests);
        //             const category = medicalTests[selectedTestIndex].category;

        //             const updatedResultTexts = [...resultTexts];
        //             const existingCategoryIndex = updatedResultTexts.findIndex(result => result.category === category);

        //             if (existingCategoryIndex !== -1) {
        //                 // If category already exists, update the existing category
        //                 updatedResultTexts[existingCategoryIndex].results.push(...testResults);
        //             } else {
        //                 // If category does not exist, create a new category
        //                 updatedResultTexts.push({ category, results: [...testResults] });
        //             }

        //             setResultTexts(updatedResultTexts);
        //             setTestResults([]); // Clear testResults after saving

        //             // Clear input fields for the next selection
        //             setFormData({ ...formData, resultText: '' });
        //         }
        // =======
        setResultTestData(testResults)
        // >>>>>>> 3dd9dec1fa2eb9fdef8faf2ab0ff35ceb35f3590
    };
    const extractNumericPart = (value) => {
        // Check if value is defined before applying the regular expression
        if (value !== undefined) {
            const numericPart = value.match(/\d+/);
            return numericPart ? numericPart[0] : '';
        }

        return ''; // Return an empty string if value is undefined
    };

    return (
        (gender !== "NA") && <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2>Medical Test Selection</h2>
                    {/* <div>
              <label className="form-label">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
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
                  checked={formData.gender === "female"}
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
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </div> */}
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

                    {/* <<<<<<< HEAD
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
                                                    value={testResults[index] || ''}
                                                    onChange={(e) => handleTestResultChange(index, e.target.value)}
                                                />
                                                {item.result}
                                            </td>
                                            <td>
                                                {extractNumericPart(formData.gender === 'male' ? item.testRefValueM : item.testRefValueF)}
                                                {' - '}
                                                {extractNumericPart(formData.gender === 'female' ? item.testRefValueM : item.testRefValueF)}
                                            </td>
                                            <td>{item.unit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="btn btn-primary" onClick={handleSaveResult}>
                                Save Result
                            </button>
                        </div>
======= */}
                    {selectedTestIndex !== null && (
                        <div>
                            <h3 style={{ textAlign: "center" }}>
                                {medicalTests[selectedTestIndex].category}
                            </h3>
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
                                    {medicalTests[selectedTestIndex].tests.map(
                                        (item, index) => {
                                            const result = testResults && testResults[selectedTestIndex] && testResults[selectedTestIndex][item?.testName]?.result;
                                            const refValue = ((gender.gender === 'male' ? item.testRefValueM : item.testRefValueF) || item.testRefValue);
                                            console.log('f',item.testRefValueF);
                                            console.log('m',item.testRefValueM);
                                            console.log('u',item.testRefValue);
                                            console.log('u',item.refValue);
                                            return (
                                                <tr key={index}>
                                                    <td>{item.testName}</td>
                                                    <td>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            // testResults && testResults[selectedTestIndex] && testResults[selectedTestIndex][item?.testName]?.result
                                                            value={result || ''}
                                                            onChange={(e) =>
                                                                handleTestResultChange(
                                                                    index,
                                                                    e.target.value,
                                                                    item,
                                                                    selectedTestIndex,
                                                                    refValue,
                                                                    medicalTests[selectedTestIndex].category
                                                                )
                                                            }
                                                        />
                                                        {item.result}
                                                    </td>
                                                    <td>
                                                        {refValue}
                                                    </td>
                                                    <td>{item.unit}</td>
                                                </tr>
                                            );
                                        }
                                        // >>>>>>> 3dd9dec1fa2eb9fdef8faf2ab0ff35ceb35f3590
                                    )}
                                </tbody>
                            </table>
                            <button className="btn btn-primary" onClick={handleSaveResult}>
                                Save Result
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {resultTestData && <MyAccordion resultData={resultTestData} />}
        </div>
    );
};

export default Test;
