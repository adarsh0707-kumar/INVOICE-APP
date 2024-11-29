import  { useRef, useState } from 'react';
import '../Registor/Register.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password, name);

    axios.post('http://www.localhost:3001/Invoice/User', {
      CompanyName: name,
      email: email,
      password: password,
      imageUrl: selectedFile
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error(error.message);
        }
      });

  }


  return (
    <div
      className='register'>

      <div
        className="register__container">

        <h2>Register</h2>

        <form
          onSubmit={submitHandler}
          className='register__container__form'>


          <input
            className='register__container__form__input'
            type="text"
            required
            onChange={
              (e) => {
                setName(e.target.value)
              }}
            placeholder='Company Name' />

          <input
            className='register__container__form__input'
            type="email"
            required
            onChange={
              (e) => {
                setEmail(e.target.value)
              }}
            placeholder='Email' />

          <input
            className='register__container__form__input'
            required
            type="password"
            onChange={
              (e) => {
                setPassword(e.target.value)
              }}
            placeholder='Password' />

          <input
            className='register__container__form__input'
            type="file"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
            required />

          <input
            className='register__container__form__btn'
            type="button"
            style={{ background: '#e7e2e293' }}
            onClick={handleFileSelect}
            value={selectedFile ? selectedFile.name : 'Select your logo'} />

          <input
            className='register__container__form__btn'
            type="submit"
            value='Register' />

          <h4

            style={{ textAlign: 'center' }}
          >
            Already have an account?
            <Link
              style={{ marginLeft: '5px', textAlign:'center' }}
              to='/login'>
              Login
            </Link>
          </h4>

        </form>



      </div>



    </div>
  )
}

export default Register;