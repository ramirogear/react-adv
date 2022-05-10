
import '../styles/styles.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
   
    return (
      <div>
          <h1>Register Formik Page</h1>
          <Formik initialValues={{ name: '', email: '',password1: '', password2: '' }} 
              onSubmit={ (values) => {
                console.log(values)
              }} 
              validationSchema={ Yup.object({
                name:Yup.string().min(2, 'Debe de tener minimo 2 caracteres').max(15,'Debe de ser maximo de 15 caracteres').required('requerido'),
                email:Yup.string().email('Email no tiene formato valido').required('requerido'),
                password1:Yup.string().min(6, 'Debe de tener minimo 6 caracteres').required('requerido'),
                password2:Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales').required('requerido')
              })}>
          
          {
          ({ handleReset }) => (
          <Form>
              <MyTextInput label={'Nombre'} name={'name'} />

              <MyTextInput label={'Email'} name={'email'} type={'email'} />

              <MyTextInput label={'Password'} name={'password1'} type={'password'} />
              <MyTextInput label={'Confirmar password'} name={'password2'} type={'password'} />
  
              <button type="submit">Create</button>
              <button type="button" onClick={ handleReset }>Reset</button>
              
          </Form>
          )
          }
          </Formik>
      </div>
    )
  }