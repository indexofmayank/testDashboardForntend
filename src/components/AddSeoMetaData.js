import React, { useEffect, useState } from "react";
import LivePreview from "./LivePreview";
import LivePreviewLink from './LivePreviewLink';


function AddSeoMetaData() {
    const [selectedPage, setSelectedPage] = useState('');
    const [metaData, setMetaData] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeyowrds] = useState('');
    const [afterSubmissionError, setAfterSubmissionError] = useState('');
    const [seoData, setSeoData] = useState([]);

    const handleSaveButtonClick = () => {
        if(
            !selectedPage ||
            !metaData ||
            !metaDescription ||
            !metaKeywords
        ) {
            setAfterSubmissionError('Please Provide all details');
            return
        }
        setAfterSubmissionError('');
        const data = [{
            'selectedPage': selectedPage,
            'metaDescription' : metaDescription,
            'metaKeyword' : metaKeywords,
            'metaData' : metaData
        }];
        setSeoData(data);
    }


    return (
        <>
            <div class="m-2 p-4">
                <p class="text-start fs-6">Add Seo meta data</p>
                <select class="form-select" aria-label="Default select example" onChange={(e) => {
                    setSelectedPage(e.target.value);
                }}>
                    <option selected >Select page</option>
                    <option value="home/offers">Offer screen</option>
                    <option value="home/details">Detail screen</option>
                    <option value="home/aboutus">About screen</option>
                </select>
                <div class='mb-3'>
                    <label class="form-label">Meta Data</label>
                    <input type="text" class='form-control' placeholder="Meta data" onChange={(e) => {
                        setMetaData(e.target.value);
                    }} />
                </div>
                <div class='mb-3'>
                    <label class="form-label">Meta Description</label>
                    <input type="text" class="form-control" placeholder="Meta description" onChange={(e) => { setMetaDescription(e.target.value) }} />
                </div>
                <div class='mb-3'>
                    <label class='form-label'>Meta keywords</label>
                    <input type="text" class="form-control" placeholder="Meta title" onChange={(e) => { setMetaKeyowrds(e.target.value) }} />
                </div>
                <div class='mb-3'>
                    <label class='form-label'>{afterSubmissionError}</label>
                </div>
                <button class='btn btn-primary' onClick={handleSaveButtonClick}>Save meta data</button>
            </div>
            <LivePreview data={seoData[0]}/>
            <LivePreviewLink data={seoData[0]} />
        </>
    )

}

export default AddSeoMetaData;