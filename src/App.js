import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import AddSeoMetaData from './components/AddSeoMetaData';
import LivePreview from './components/LivePreview';
import LivePreviewLink from './components/LivePreviewLink';
import { useSeoContext } from "./context/seo_context";
import SeoTable from './components/SeoTable';

function App() {
  
  const {
    seoList,
    fetchSeoList
  } = useSeoContext();

 
  return (
    <div className="row">
      <AddSeoMetaData />
      <SeoTable />
    </div>
  );
}

export default App;
