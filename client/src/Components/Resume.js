import React, {useState} from 'react'
import { Document, Page,  pdfjs } from "react-pdf";
import ResumePDF from '../Resume.pdf';
import Header from './Header'
import Footer from './Footer'
import '../CSS/Resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

    const [pageNumber, setPageNumber] = useState(1);

    const removeTextLayerOffset = ()=> {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }

    return (
    <div>
        <Header/>
        <div id="renderPDF">
            <Document
            file={ResumePDF}
            onLoadError={console.error}
            >
            <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset}/>
            </Document>
        </div>
        <a href={ResumePDF} download>
            <button id='download-button'>
                Download
            </button>
        </a>
        <Footer/>
      </div>
    )
}

export default Resume