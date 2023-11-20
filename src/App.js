import './App.css';
import * as Yup from 'yup';
import { Formik } from 'formik';

function App() {
  const myschema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="App">
      <h1>Formik Form with YUP Validation</h1>
      <div className="form-container">
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={myschema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit} className="formik-form">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your First Name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.firstName && touched.firstName && (
                  <div className="input-feedback">{errors.firstName}</div>
                )}

                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <div className="button-container">
                  <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default App;


