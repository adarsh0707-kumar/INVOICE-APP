
import '../Login/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div
      className='login'>

      <div
        className="login__container">

        <h2>Login</h2>

        <form
          className='login__container__form'>


          <input
            className='login__container__form__input'
            type="email"
            required
            placeholder='Email' />

          <input
            className='login__container__form__input'
            required
            type="password"
            placeholder='Password' />

          <input
            className='login__container__form__btn'
            type="submit"
            value='Login' />


          <h4

            style={{textAlign: 'center' }}
          >
            Don’t have an account?
            <Link
              style={{ marginLeft: '5px' }}
              to='/register'>
              Register an Acount
            </Link>
          </h4>

        </form>





      </div>



    </div>
  )
}

export default Login;
