import React from 'react';
import Navbar from '../components/Navbar';
import ResumePDF from '../components/ResumePDF';
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';


const Resume = () => {


  return (

    <div>
      <Navbar />

      <ResumePDF />

      <PDFDownloadLink document={<ResumePDF />} fileName="resume">
        {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download my Resume</button> )}
      </PDFDownloadLink>

    </div>
  );
};

export default Resume;
