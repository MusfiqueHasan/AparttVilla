import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const useProperties = (options) => {

    const [propertyInfo, setPropertyInfo] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/properties')
            .then(res => {
                setPropertyInfo(res.data)
            })

    }, [])
    return options ? [propertyInfo.slice(0, 6)] : [propertyInfo, setPropertyInfo]
};

export default useProperties;