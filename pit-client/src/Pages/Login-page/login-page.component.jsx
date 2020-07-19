import React, {useState} from "react";
import { Link } from "react-router-dom";
import Styles from "./login-page.module.scss";

//IMAGES
import Logo from "../../Assets/logo.png";

const LoginPage = () => {
    const [input, setInput] = useState({})

    const onInput = (e) =>{
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className={Styles.screen}>
      <div className={Styles.row1}>
        <div className={Styles.headerWrapper}>
          <h1 className={Styles.headerH1}>PALOMPON INSTITUTE OF TECHNOLOGY</h1>
          <p className={Styles.headerP}>A Charter State College since 1972</p>
        </div>
      </div>
      <div className={Styles.row2}>
        <form className={Styles.form}>
          <div className={Styles.logoContainer}>
            <img
              src={Logo}
              alt="Palompon institute of technology Logo"
              className={Styles.logo}
            />
          </div>
          <div className={Styles.formBody}>
                <div className={Styles.formRow}>
                    <label htmlFor="userId" className={Styles.label}>User Id</label>
                    <input value={input.userId} onChange={onInput} name="userId" type="text" className={Styles.input}/>
                </div>
                <div className={Styles.formRow}>
                    <label htmlFor="password" className={Styles.label}>Password</label>
                    <input value={input.password} onChange={onInput} name="password" type="password" className={Styles.input}/>
                </div>
                
          </div>
          <div className={Styles.formBtnContainer}>
              <Link to="/enrollment">
                <button className={Styles.enrollmentBtn}>Enrollment</button>
              </Link>
              <button className={Styles.submitBtn}>Login</button>
          </div>
        </form>
      </div>
      <div className={Styles.row3}></div>
    </div>
  );
};

export default LoginPage;
