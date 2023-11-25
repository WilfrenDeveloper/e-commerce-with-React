import axios from "axios"

const useAuth = () => {

    const registerUser = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, user)
    }



  return {registerUser}
}

export default useAuth