import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'


export const ContactForm = ({addConacts }) => {
    
    return (
        <Formik
            
            initialValues={{
                name: '',
                number: ''

            }}

            onSubmit={(values, actions) => { 
                values.id = nanoid()
                addConacts(values)
                actions.resetForm(true)

            }}
          
        >
            <Form>
                <label htmlFor="name">Name</label>
                <br />
                <Field id="name" name="name" placeholder="Name" />
                <br />
                <label htmlFor="number">Number</label>
                <br />
                <Field id="number" name="number" placeholder="Number" />
                <br />
                <button type="submit">Submit</button>
            </Form>

        </Formik>
    )
} 