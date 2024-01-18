import React from 'react';

import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';

import TagManager from 'react-gtm-module';

const gtmConfig = {
  gtmId: 'GTM-N87ZBFJ7',
  dataLayer: {
      event: 'pageview',
      path:"/"
    }
};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  TagManager.initialize(gtmConfig)
}

export default function App() {

  return (
    <>
        <Header />
        <MainContent />
    </>
  )
}
