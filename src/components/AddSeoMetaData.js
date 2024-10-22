import React, { useState } from "react";
import LivePreview from "./LivePreview";
import LivePreviewLink from './LivePreviewLink';
import {useSeoContext} from '../context/seo_context';

function AddSeoMetaData() {

    const {
        saveSeo
    } = useSeoContext();

    const [selectedPage, setSelectedPage] = useState('');
    const [metaData, setMetaData] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [afterSubmissionError, setAfterSubmissionError] = useState('');

    const handleSaveButtonClick = async () => {
        if (!selectedPage || !metaData || !metaDescription || !metaKeywords) {
            setAfterSubmissionError('Please provide all details');
            return;
        }
        setAfterSubmissionError('');
            const select_page=  selectedPage;
            const meta_title= metaData;
            const meta_description= metaDescription;
            const meta_keywords= metaKeywords
        const response = await saveSeo(select_page, meta_title, meta_description, meta_keywords)
        if(response.success) {
            setAfterSubmissionError('New Seo save successfully');
        } 
    };

    const seoData = {
        selectedPage,
        metaDescription,
        metaKeyword: metaKeywords,
        metaData,
    };

    return (
        <>
            <div className="m-2 p-4">
                <p className="text-start fs-6">Add SEO meta data</p>
                <select className="form-select" aria-label="Default select example" onChange={(e) => {
                    setSelectedPage(e.target.value);
                }}>
                    <option value="">Select page</option>
                    <option value="home">Home screen</option>
                    <option value="about">About screen</option>
                    <option value="contact">Contact screen</option>
                </select>
                <div className='mb-3'>
                    <label className="form-label">Meta Data</label>
                    <input type="text" className='form-control' placeholder="Meta data" onChange={(e) => {
                        setMetaData(e.target.value);
                    }} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Meta Description</label>
                    <input type="text" className="form-control" placeholder="Meta description" onChange={(e) => { 
                        setMetaDescription(e.target.value) 
                    }} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Meta Keywords</label>
                    <input type="text" className="form-control" placeholder="Meta keywords" onChange={(e) => { 
                        setMetaKeywords(e.target.value) 
                    }} />
                </div>
                <div className='mb-3'>
                    <label className='form-label text-danger'>{afterSubmissionError}</label>
                </div>
                <button className='btn btn-primary' onClick={handleSaveButtonClick}>Save meta data</button>
            </div>
            <LivePreview data={seoData} />
            <LivePreviewLink data={seoData} />
        </>
    );
}

export default AddSeoMetaData;
