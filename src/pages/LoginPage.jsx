
import FormLogin from '../components/LoginPage.jsx/FormLogin'

const LoginPage = () => {

  const style = {
    display: "flex",
    justifyContent: "center",
    alingItems: "center"
  }

  return (
    <div style={style}>
      <FormLogin />
    </div>
  )
}

export default LoginPage