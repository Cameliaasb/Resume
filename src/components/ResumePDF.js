import React from 'react';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import Profile from './images/picture.jpg'

const styles = StyleSheet.create({})

const ResumePDF = () => {
  return (
    <Document>
      <Page>
        <Text> Resume title</Text>
        <Image src={Profile} />
        <Text> Resume goes herre</Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;
