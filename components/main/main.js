import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logIn } from '../actions/actions'
import { updaters } from '../actions/actions'
import { store } from "../../index";


export const Main = () => {
  
  const history = useHistory()
  let login = useSelector(state => state.login)
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  
  const nameValid = value.length < 8 ? false : true
  const passwordValid = password.length < 6 ? false : true
  

  const setValueValue = (e) => {
    setValue(e.target.value);
    console.log(nameValid);
  };
  const setPasswordValue = (e) => {
    setPassword(e.target.value);
    console.log(passwordValid);
  };
  
  const toProfile = () => {
      history.push('/profile')
      store.dispatch({type: 'LOG_IN', payload: value})
      console.log(login);
  }
  
  

  
      
      
  


  return (
    <>
      <div className="main">
        <div className="mainLogin">
          <input
            type="text"
            placeholder="Type login"
            value={value}
            onChange={setValueValue}
          />
          <input
            type="password"
            placeholder="Type password"
            value={password}
            onChange={setPasswordValue}
          />
          <button type="button" disabled={passwordValid && nameValid ? false : true} onClick={toProfile}>
              Log in
          </button>
        </div>
      </div>
    </>
  );
};
