import styles from '../styles/Form.module.css';
import {useFormik} from 'formik'
import { IPayload } from '../interfaces';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
const Form = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const payload : IPayload = 
        {
            who_are_your_customers: '',
            are_they_any_special_requirements: '',
            what_types_of_customers_should_be_excluded: '',
            what_are_the_position_of_your_prospect: ''
        }

    const formik =  useFormik({
        initialValues: {...payload},
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const {data} = await  axios.post(`${import.meta.env.VITE_SERVICE_URL}/feedback`, values);             
                toast.success( data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

            } catch (error) {
              error instanceof AxiosError &&  toast.error( error.response?.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

            }
            setLoading(false);
            formik.resetForm();   
        }
    })
    


  return (
    <div className={styles.form_container}>
        <h2>WHAT IS YOUR <br/> AUDIENCE ?</h2>
        <form onSubmit={formik.handleSubmit} className={styles.fields_container}>
                <div className={styles.field_container}>
                  <p className={styles.questions}>WHO ARE YOUR CUSTOMERS ?</p>
                 <input 
                  type= 'text'
                  name= 'who_are_your_customers'
                  onChange={formik.handleChange}
                  value={formik.values.who_are_your_customers}
                  />
                </div>
                <div className={styles.field_container}>
                  <p className={styles.questions}>ARE THEY ANY SPECIAL REQUIREMENTS LIKE TECHNOLOGY, LOCATION ETC ?</p>
                 <input 
                  type= 'text'
                  name= 'are_they_any_special_requirements'
                  onChange={formik.handleChange}
                  value={formik.values.are_they_any_special_requirements}
                  />
                </div>
                <div className={styles.field_container}>
                  <p className={styles.questions}>WHAT TYPES OF CUSTOMERS SHOULD BE EXCLUDED ?</p>
                 <input 
                  type= 'text'
                  name= 'what_types_of_customers_should_be_excluded'
                  onChange={formik.handleChange}
                  value={formik.values.what_types_of_customers_should_be_excluded}
                  />
                </div>
                <div className={styles.field_container}>
                  <p className={styles.questions}>WHAT ARE THE POSITION OF YOUR PROSPECT ?</p>
                 <input 
                  type= 'text'
                  name= 'what_are_the_position_of_your_prospect'
                  onChange={formik.handleChange}
                  value={formik.values.what_are_the_position_of_your_prospect}
                  />
                </div>
             <button type='submit'>{loading ? 'Loading ......': 'Submit'}</button>
        </form>

    </div>
  )
}

export default Form