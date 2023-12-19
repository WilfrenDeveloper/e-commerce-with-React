const getTokenConfig = () => ({
    headers: {
        Autorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export default getTokenConfig