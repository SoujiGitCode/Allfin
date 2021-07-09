import React from "react";
import { Link } from "react-router-dom";

// image
import logo from "../../images/af-logo-full.png";

const Login = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Ingrese sus datos de Acceso</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Correo Electrónico</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="hello@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Contraseña</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Recordarme
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <Link className="" to="page-forgot-password">
                           Olvidé mi contraseña
                          </Link>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        ¿No esta Registrado?{" "}
                        <Link className="text-primary" to="./page-register">
                          Solicitud de Registro
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
