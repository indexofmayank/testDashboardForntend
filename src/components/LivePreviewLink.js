import React from "react";

function LivePreviewLink({data}) {

    const base_url = 'http://parchar.in/';

    return(
        <div class='container mt-5'>
            <div class='card shadow p-3 mb-5'>
                <div class='card-body'>
                    <h5 class='box-title'>Live link</h5>
                    <a href="#">{data?.selectedPage ? (base_url+data?.selectedPage) : (base_url)}</a>
                </div>
            </div>
        </div>
    );
}

export default LivePreviewLink;