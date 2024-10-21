import React from "react";

function LivePreview({data}) {
    console.log(data);
    return(
        <div class="container mt-5">
            <div class="card shadow p-3 mb-5 bg-white rounded">
                <div class='card-body'>
                    <h5 class='box-title'>Live preview</h5>
                    <h5>Selected Page:</h5><span><p>{data?.selectedPage}</p></span>
                    <h5>This is your SEO meta description: </h5><p>{data?.metaDescription}</p> 
                    <p class='card-text '>Meta Data:</p>
                    <h6>{data?.metaData}</h6>
                </div>
            </div>
        </div>
    );
}

export default LivePreview;