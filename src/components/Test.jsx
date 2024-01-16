import React, { useState } from 'react';
import { medicalTests } from './AllObject';
import MyAccordion from './MyAccordion';
import { useSelector  } from 'react-redux';

const Test = () => {
    const gender = useSelector(state => state.gender);
    console.log("gender from store =>", gender);
    const [formData, setFormData] = useState({
        gender: '',
        resultText: ''
    });

    // const handleChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    const [selectedTestIndex, setSelectedTestIndex] = useState(null);
    const [resultTestData, setResultTestData] = useState();
    const [testResults, setTestResults] = useState([]);
    // const [testItem, setTestItem] = useState([]);

    const handleTestSelection = (e) => {
        setSelectedTestIndex(e.target.value !== "" ? parseInt(e.target.value, 10) : null);
        // setTestResults([]); // Clear testResults when a new test is selected
    };

    const handleTestResultChange = (testIndex, result, item,selectedTestIndex,refValue, category) => {
        // console.log("item index=>",item, testIndex, selectedTestIndex, refValue)
        const updatedResults = [...testResults];

        if (updatedResults) {
            // console.log("updatedResults[selectedTestIndex]=>",updatedResults[selectedTestIndex]);
          updatedResults[selectedTestIndex] = { 
           ...( updatedResults[selectedTestIndex] ? updatedResults[selectedTestIndex] : {}),
            [item.testName]: {"result": result,
            "investigation" : item.testName,
            "referenceValue": refValue,
            "unit": item.unit,
        },
        "category": category
          };
        }
        //  updatedResults.filter(item => item)
        // console.log("updated Results=>", updatedResults)
        setTestResults(updatedResults);
    };
    
    

    const handleSaveResult = () => {
        setResultTestData(testResults)
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
                        const refValue = (formData.gender === "male"? item.testRefValueM : item.testRefValueF || item.testRefValue);
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
       { resultTestData && <MyAccordion resultData={resultTestData} />}
      </div>
    );
};

export default Test;
