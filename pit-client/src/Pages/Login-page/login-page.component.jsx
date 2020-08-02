import React, {useState, useEffect, useRef} from "react";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import {loginEndpoint} from "../../utilities/vars";
import useLoginFetch from "../../Custom Hooks/fetchHook"
import {clearDataAction} from "../../redux_actions"
import Styles from "./login-page.module.scss";

//IMAGES
import Logo from "../../Assets/logo.png";
import Loading from "../../Assets/loading/loading.svg"

const LoginPage = () => {
    let passwordInput = useRef(null)
    let idNumberInput = useRef(null)
    const dispatch = useDispatch();
    const {loginFetch, data}  = useLoginFetch()
    const [input, setInput] = useState({
      userId: "",
      password: ""
    })
    const [loadingState, setLoadingState] = useState(false)

    const onInput = (e) =>{
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const onLogin = async (e) => {
      e.preventDefault();
      resetStyle()
      if ( input.userId === ""){
        onIdNumberError()
      }else if( input.password === ""){
        onPasswordError()
      }else{
        setLoadingState(true)
        loginFetch(loginEndpoint,input)
      }
     
    }
    const resetStyle = () =>{
      idNumberInput.style = "border: none"
      passwordInput.style = "border: none"
    }
    
    const onIdNumberError = () =>{
      idNumberInput.style = "border: 3px solid red"
      setInput({
        ...input,
        userId: ""
      })
    }
    const onPasswordError = () =>{
      passwordInput.style = "border: 3px solid red"
      setInput({
        ...input,
        password: ""
      })
    }
    
    useEffect(() =>{
      if (data.status === "failed"){
        onPasswordError()
      }else if(data.status === "id number failed"){
        onIdNumberError()
      }
      setLoadingState(false)
      
    },[data])
    
    useEffect(()=>{
      dispatch(clearDataAction())
    },[])

  return (
    <div className={Styles.screen}>
      <div className={Styles.row1}>
        <div className={Styles.headerWrapper}>
          <h1 className={Styles.headerH1}>PALOMPON INSTITUTE OF TECHNOLOGY</h1>
          <p className={Styles.headerP}>A Charter State College since 1972</p>
        </div>
      </div>
      <div className={Styles.row2}>
        <form autoComplete="off" className={Styles.form}>
          <div className={Styles.logoContainer}>
            <img
              src={Logo}
              alt="Palompon institute of technology Logo"
              className={Styles.logo}
            />
          </div>
          {/* <div className={Styles.formBody}> */}
                <div className={Styles.formRow}>
                    <label htmlFor="userId" className={Styles.label}>User Id</label>
                    <input ref={el => idNumberInput = el} value={input.userId} autoComplete="off" onChange={onInput} name="userId" type="text" className={Styles.input}/>
                </div>
                <div className={Styles.formRow}>
                    <label htmlFor="password" className={Styles.label}>Password</label>
                    <input  ref={el => passwordInput = el} value={input.password} onChange={onInput} name="password" type="password" className={Styles.input}/>
                </div>
                
          {/* </div> */}
            {(loadingState) 
            ? (
              <div className={Styles.loadingContainer}>
                <img src={Loading} alt="loading" className={Styles.loading}/> 
              </div>
            )
            
            : (<div className={Styles.formBtnContainer}>
                  <Link to="/enrollment">
                    <button type="button" className={Styles.enrollmentBtn}>Enrollment</button>
                  </Link>
                  <button onClick={onLogin} type="submit" className={Styles.submitBtn}>Login</button>
                </div>)
             }
          
        </form>
      </div>
      <div className={Styles.row3}></div>
    </div>
  );
};

export default LoginPage;
