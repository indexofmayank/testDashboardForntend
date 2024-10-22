import React, { useState, useEffect, useRef } from "react";
import LivePreview from "./LivePreview";
import LivePreviewLink from './LivePreviewLink';
import { useSeoContext } from '../context/seo_context';

function AddSeoMetaData() {
    const { saveSeo } = useSeoContext();
    const [selectedPage, setSelectedPage] = useState('');
    const [metaData, setMetaData] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState('');
    const [afterSubmissionError, setAfterSubmissionError] = useState('');

    const metaDescriptionRef = useRef(null);
    const livePreviewRef = useRef(null);
    const [metaDescriptionWidth, setMetaDescriptionWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (livePreviewRef.current) {
                setMetaDescriptionWidth(livePreviewRef.current.getBoundingClientRect().width);
            }
        };

        updateWidth(); 
        window.addEventListener('resize', updateWidth); 

        return () => {
            window.removeEventListener('resize', updateWidth); 
        };
    }, [metaDescription]);

    useEffect(() => {
        if((metaDescription.match(/[a-zA-Z]/g) || []).length > 170)
        {
            setAfterSubmissionError('you have reached the limit for meta description')
        }
    }, [metaDescription]);

    useEffect(() => {
        if(metaData.match(/[a-zA-z]/g) || [].length > 70){
            setAfterSubmissionError('you have reached the limit for meta data')
        }
    }, [metaData])

    const handleSaveButtonClick = async () => {
        if (!selectedPage || !metaData || !metaDescription || !metaKeywords) {
            setAfterSubmissionError('Please provide all details');
            return;
        }
        setAfterSubmissionError('');
        const response = await saveSeo(selectedPage, metaData, metaDescription, metaKeywords);
        if (response.success) {
            setAfterSubmissionError('New SEO saved successfully');
        } 
    };

    const seoData = {
        selectedPage,
        metaDescription,
        metaKeyword: metaKeywords,
        metaData,
    };

    const countAlphabeticCharacters = (str) => {
        return (str.match(/[a-zA-Z]/g) || []).length;
    };

    const alphabeticCount = countAlphabeticCharacters(metaDescription);

    return (
        <div className="row">
            <div className="col-6 m-2 p-4">
                <p className="text-start fs-6">Add SEO meta data</p>
                <div className="mb-3">
                <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setSelectedPage(e.target.value)}>
                    <option value="">Select page</option>
                    <option value="home">Home screen</option>
                    <option value="about">About screen</option>
                    <option value="contact">Contact screen</option>
                </select>

                </div>
                <div className='mb-3'>
                    <label className="form-label">Meta Data</label>
                    <input type="text" className='form-control' placeholder="Meta data" onChange={(e) => setMetaData(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Meta Description</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Meta description"
                        onChange={(e) => setMetaDescription(e.target.value)}
                        ref={metaDescriptionRef}
                    />
                    <small>{`Alphabets: ${alphabeticCount}, Width: ${metaDescriptionWidth.toFixed(2)}px`}</small>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Meta Keywords</label>
                    <input type="text" className="form-control" placeholder="Meta keywords" onChange={(e) => setMetaKeywords(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label text-danger'>{afterSubmissionError}</label>
                </div>
                <button className='btn btn-primary' onClick={handleSaveButtonClick}>Save meta data</button>
            </div>
            <div className="col-6 m-2 p-4">
                <LivePreview data={seoData} ref={livePreviewRef} />
                <LivePreviewLink data={seoData} />
            </div>
        </div>
    );
}

export default AddSeoMetaData;
