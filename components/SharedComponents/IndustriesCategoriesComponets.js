'use client'
import React, { useEffect, useState } from 'react'

import ConfigData from '../../config'

const IndustriesCategoriesComponets = ({ tag_id }) => {

    const [data, setData] = useState();

    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?taxonomy=category&tag_ID=${tag_id}&production_mode[]=${serverUrl}`); // Use tag_id prop for dynamic category filtering
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setData(responseData); // Update data state with fetched data
                console.log(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [siteUrl, serverUrl, tag_id]);
    return (
        <div>

        </div>
    )
}

export default IndustriesCategoriesComponets
