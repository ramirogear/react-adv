
import {  Form, Formik } from 'formik'

import * as Yup from 'yup'
import '../styles/styles.css'

// import { MyTextInput } from '../components/MyTextInput'
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';

import { MyTextInput, MySelect, MyCheckbox } from '../components'



export const FormikAbtraction = () => {

  return (
    <div>
            <h1>Formik Abstraction</h1>

            <Formik 
              initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }} 
              onSubmit={ (values) => {
                console.log(values)
              }} 
              validationSchema={ Yup.object({
                firstName:Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('requerido'),
                lastName:Yup.string().max(15, 'Debe de tener 10 caracteres o menos').required('requerido'),
                email:Yup.string().email('Email no tiene formato valido').required('requerido'),
                terms:Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                jobType:Yup.string().notOneOf(['it-jr'],'Esta opcion no es requerida').required('requerido')
              })}>

              {
                formik => (
                  <Form>
                      <MyTextInput label={'First Name'} name={'firstName'} />

                      <MyTextInput label={'Last Name'} name={'lastName'} />

                      <MyTextInput label={'Email'} name={'email'} type={'email'} />

                      <MySelect label={'Job Type'} name={'jobType'} >
                        <option value="">Pick something</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="it-senior">IT-Senior</option>
                        <option value="it-jr">IT-Jr</option>
                      </MySelect>

                      <MyCheckbox label={'Terms and conditions'} name={'terms'} />

                      <button type='submit'>Submit</button>
                  </Form>
                )
              }

            </Formik>

            
    </div>
  )
}
