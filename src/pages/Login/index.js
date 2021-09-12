
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setAccount } from '../../stores/account'
import { useHistory } from 'react-router-dom'

function Login () {
  const [form, setForm] = useState({
    user: "",
    password: "",
  });
  const dispatch = useDispatch()
  const history = useHistory()


  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (form.user && form.password) {
      dispatch(setAccount(form))
      history.push('/')
    }
    e.preventDefault();
  }
  
  return (
    <form
      className="login-page"
      onSubmit={handleSubmit}
    >
      <h3>Sign In</h3>
      <div className="form-group">
        <label>User name</label>
        <input
          name="user"
          className="form-control"
          onChange={(e)=>handleOnChange(e)}
          placeholder="Enter user"
          
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e)=>handleOnChange(e)}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-2">Submit</button>
    </form>
  )
}

export default Login;

