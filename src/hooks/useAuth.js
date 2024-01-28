import axios from "axios"

const useAuth = () => {

    const registerUser = (user) => {
        const url = 'http://localhost:8080/users';
        axios.post(url, user)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }

    const loginUser = (credentials) => {
        const url = 'http://localhost:8080/users/login';
        axios.post(url, credentials)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token) //-->>> para setear un item en el localStorage
            /** localStorage.getItem('token'); para acceder a la info del locarlStorage*/
            /** localStorage.deleteItem(''token);  para eliminar un item del localStorage*/
        })
        .catch(error => console.log(error))
    }



  return {registerUser, loginUser}
}

export default useAuth