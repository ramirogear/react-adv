
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

import { FormikAbtraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from '../03-forms/pages'
//import { RegisterPage } from "../03-forms/pages/RegisterPage";

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo"/>

                <ul>
                    <li>
                        <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active': '' }>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-comp" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstraction" className={ ({isActive}) => isActive ? 'nav-active': '' }>Formik Abstraction</NavLink>
                    </li>
                </ul>

            </nav>

            <Routes>
                <Route path="formik-basic" element={ <FormikBasicPage /> } />
                <Route path="formik-yup" element={ <FormikYupPage /> } />
                <Route path="register" element={ <RegisterPage/> } />
                <Route path="formik-comp" element={ <FormikComponents/> } />
                <Route path="formik-abstraction" element={ <FormikAbtraction/> } />

                <Route path="/*" element={ <Navigate to="/register" replace/> } />
            </Routes>

            

        </div>

    </BrowserRouter>
  )
}
