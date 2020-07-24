import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";



function Login() {
    const { handleSubmit, register } = useForm();
    const onSubmit = values => login(values);
    const history = useHistory();

    const login = values => {
    axios
        .post("http://localhost:5000/api/login", {
            username: values.username,
            password: values.password,
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.payload);
            history.push("/protected");
        })
        .catch(err => console.log(err));
    };

    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
          <div> 
            <h1>Bubble Page</h1>
            <h3>Login</h3>
          </div>
          <div className="login-container">
            <label htmlFor="name">Username:</label>
            <input 
              name="username"
              placeholder="enter username"
              ref={register({
                required: "Required",
                message: "invalid email address"
              })}
            />
            <label htmlFor="name">Password:</label>
            <input 
              name="password"
              placeholder="enter password"
              ref={register({
                required: "Required"
              })}
            />
          </div>
          <button className="login-button" type="submit">Submit</button>
      </form>
    )
};   
    
export default Login;
