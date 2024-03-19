import React from 'react';
import html2pdf from 'html2pdf.js';
import '../App.css';

const PrintComponent = ({ children }) => {
    const printAction = () => {
        window.print();
    };

    const createPdfAction = () => {
        const input = document.getElementById('print-component');
        
        html2pdf(input, {
            margin: 10,
            filename: 'your_report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        }).outputPdf().then((pdf) => {
            const blob = pdf.output('blob');
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'your_report.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <>
            <thead className='d-flex justify-content-center'>
                <header className='h-32 d-flex justify-content-center align-items-center'>
                    <button className={" h-10 px-7 me-2 btn btn-primary print-preview-button print-d-none"} onClick={printAction}>Print</button>
                    <button className={" h-10 px-7 btn btn-success print-preview-button print-d-none"} onClick={createPdfAction}>Create PDF</button>
                </header>
            </thead>
            <tbody>
                <tr>
                    <td id="print-component" className='bg-white pt-4'>
                        {/* Render data here */}
                        {children}
                    </td>
                </tr>
            </tbody>
            <tfoot className="table-footer">
                {/* <Foot /> */}
            </tfoot>
            <table className="print-component"></table>
        </>
    );
};

export default PrintComponent;
