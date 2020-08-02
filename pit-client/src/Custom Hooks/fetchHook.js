import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDataAction } from "../redux_actions";
import { useHistory } from "react-router-dom";

const useLoginFetch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    status: null,
    counter: ""
  });


  const loginFetch = (loginEndpoint, obj) => {
    fetch(loginEndpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          //successs
          dispatch(userDataAction(data.data));
          history.push("/home");
        } else if (data.status === "id number failed") {
          //wrong id number
          setData({
            status: data.status,
            counter: Math.random()
          });
        } else if (data.status === "failed") {
          //wrong password
          setData({
            status: data.status,
            counter: Math.random()
          });
        }
      });
  };
  return {
    loginFetch,
    data,
  };
};

export default useLoginFetch;
