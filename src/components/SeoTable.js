import React, {useEffect, useState} from "react";
import { useSeoContext } from '../context/seo_context';

function SeoTable() {

    const [seoArrayList, setSeoArrayList] = useState([]);

    const {
        seoList,
        fetchSeoList
    } = useSeoContext();

    useEffect(() => {
        fetchSeoList()
    }, []);


    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Select page</th>
                    <th scope="col">Meta title</th>
                    <th scope="col">Meta description</th>
                    <th scope="col">Meta keywords</th>
                </tr>
            </thead>
            <tbody>
            {seoList?.data?.map((seo, index) => {
                const {select_page, meta_title, meta_description, meta_keywords} = seo;
                return (
                    <tr key={index}>
                        <td>{select_page}</td>
                        <td>{meta_title}</td>
                        <td>{meta_description}</td>
                        <td>{meta_keywords}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>);
}

export default SeoTable