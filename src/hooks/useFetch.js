import axios from 'axios'
import React, { useState } from 'react'

const useFetch = () => {
    const [infoApi, setInfoApi] = useState()

    const getAPi = (url) => {
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(error => console.log(error))
    }




    return [infoApi, getAPi]
}

export default useFetch