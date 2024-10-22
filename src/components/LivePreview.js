import React, { forwardRef } from "react";

const LivePreview = forwardRef(({ data }, ref) => {
    return (
        <div className="container mt-5">
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className='card-body'>
                    <h5 className='box-title'>Live preview</h5>
                    <h5>Selected Page:</h5><span><p>{data?.selectedPage}</p></span>
                    <h5>This is your SEO meta description: </h5>
                    <p ref={ref}>{data?.metaDescription}</p>
                    <p className='card-text '>Meta Data:</p>
                    <h6>{data?.metaData}</h6>
                    <p className='card.text'>Meta keywords</p>
                    <h6>{data?.metaKeyword}</h6>
                </div>
            </div>
        </div>
    );
});

export default LivePreview;
