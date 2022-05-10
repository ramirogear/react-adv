
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";

import { FormikAbtraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForms } from '../03-forms/pages'
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
                    <li>
                        <NavLink to="/formik-register" className={ ({isActive}) => isActive ? 'nav-active': '' }>Register Formik</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dynamic" className={ ({isActive}) => isActive ? 'nav-active': '' }>Dynamic Form</NavLink>
                    </li>
                </ul>

            </nav>

            <Routes>
                <Route path="formik-basic" element={ <FormikBasicPage /> } />
                <Route path="formik-yup" element={ <FormikYupPage /> } />
                <Route path="register" element={ <RegisterPage/> } />
                <Route path="formik-comp" element={ <FormikComponents/> } />
                <Route path="formik-abstraction" element={ <FormikAbtraction/> } />
                <Route path="formik-register" element={ <RegisterFormikPage/> } />
                <Route path="dynamic" element={ <DynamicForms/> } />

                <Route path="/*" element={ <Navigate to="/register" replace/> } />
            </Routes>

            

        </div>

    </BrowserRouter>
  )
}
