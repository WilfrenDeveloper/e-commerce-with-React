import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import getTokenConfig from '../utils/getTokenConfig'
import PurchasesCard from '../components/PurchasesPage/PurchasesCard'

const PurchasesPage = () => {

    const [purchases, getPurchases] = useFetch()

    useEffect(() => {
        const url = 'http://localhost:8080/purchases'
        getPurchases(url, getTokenConfig())
    }, [])


    return (
        <div>
            <h2>My Purchases</h2>
            <div>
                {
                    purchases?.map(infoPurchases => (
                        <PurchasesCard 
                            key={infoPurchases.id}
                            purchase={infoPurchases}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PurchasesPage