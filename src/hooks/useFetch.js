import axios from 'axios'
import { useState } from 'react'

const useFetch = () => {
    const [infoApi, setInfoApi] = useState()

    const getAPi = (url, config = {}) => {
        axios.get(url, config)
            .then(res => setInfoApi(res.data))
            .catch(error => console.log(error))
    }

    return [infoApi, getAPi]
}

export default useFetch