import React, { Fragment, useState } from "react";
import Metadata from "../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
    const [email, setEmail] = useState(""); 
    const alert = useAlert(); 
    const dispatch = useDispatch(); 
    const {errores, message, loading} = useSelector(state => state.ForgotPassword); 
    
  return (
    <Fragment>
      <Metadata />
      <div classname="row wrapper">
        <div classname="col-10 col-lg-5">
          <form classname="shadow-lg">
            <h1 classname="mb-3">Resetear Clave</h1>
            <div classname="form-group">
              <label for="email_field">Ingresa Email</label>
              <input
                type="email"
                id="email_field"
                classname="form-control"
                value=""
              />
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              classname="btn btn-block py-3"
            >
              Enviar Email
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
