import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import getTokenConfig from '../utils/getTokenConfig'
import PurchasesCard from '../components/PurchasesPage/PurchasesCard'
import '../components/PurchasesPage/styles/PurchasesPage.css'

const PurchasesPage = () => {

    const [purchases, getPurchases] = useFetch()

    useEffect(() => {
        const url = 'https://ecommerce-db-n5fd.onrender.com/purchases'
        getPurchases(url, getTokenConfig())
    }, [])

    return (
        <section className='purchasespage'>
            <div className="purchasespage__return">
                <a href="/">Home</a>
                <figure> </figure>
                <p>Purchases</p>
            </div>
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
        </section>
    )
}

export default PurchasesPage