import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import getTokenConfig from '../utils/getTokenConfig'
import PurchasesCard from '../components/PurchasesPage/PurchasesCard'

const PurchasesPage = () => {

    const [purchases, getPurchases] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        getPurchases(url, getTokenConfig())
    }, [third])


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