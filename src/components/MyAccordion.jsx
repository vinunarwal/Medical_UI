import React from 'react';
import { Accordion } from 'react-bootstrap';

const MyAccordion = ({ resultTexts }) => {
    return (
        <div>
            <Accordion>
                {resultTexts.map((category, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>
                            <p>Category: {category.category}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {category.results.map((result, resultIndex) => (
                                    <li key={resultIndex}>{result}</li>
                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default MyAccordion;
