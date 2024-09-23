import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const BusinessFormSchema = Yup.object().shape({
  businessAddress: Yup.string().required('Required'),
  businessType: Yup.string().required('Required'),
  addressLine1: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
});

const RepresentativeFormSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
});

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="steps mb-8">
        <div className={`step ${step >= 1 ? 'step-primary' : ''}`}>Business Structure</div>
        <div className={`step ${step >= 2 ? 'step-primary' : ''}`}>Bank Details</div>
        <div className={`step ${step >= 3 ? 'step-primary' : ''}`}>2 Step Auth</div>
        <div className={`step ${step >= 4 ? 'step-primary' : ''}`}>Overview</div>
      </div>

      {step === 1 && (
        <Formik
          initialValues={{
            businessAddress: '',
            businessType: '',
            addressLine1: '',
            city: '',
            zip: '',
          }}
          validationSchema={BusinessFormSchema}
          onSubmit={nextStep}
        >
          {({ errors, touched }) => (
            <Form className="form bg-white p-6 rounded-lg shadow space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Business Address</span>
                </label>
                <Field name="businessAddress" type="text" className="input input-bordered w-full" />
                {errors.businessAddress && touched.businessAddress ? <div className="text-red-500">{errors.businessAddress}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type of Business</span>
                </label>
                <Field name="businessType" as="select" className="select select-bordered w-full">
                  <option value="">Select Type</option>
                  <option value="LLC">LLC</option>
                  <option value="Corporation">Corporation</option>
                </Field>
                {errors.businessType && touched.businessType ? <div className="text-red-500">{errors.businessType}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address Line 1</span>
                </label>
                <Field name="addressLine1" type="text" className="input input-bordered w-full" />
                {errors.addressLine1 && touched.addressLine1 ? <div className="text-red-500">{errors.addressLine1}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <Field name="city" type="text" className="input input-bordered w-full" />
                {errors.city && touched.city ? <div className="text-red-500">{errors.city}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Zip</span>
                </label>
                <Field name="zip" type="text" className="input input-bordered w-full" />
                {errors.zip && touched.zip ? <div className="text-red-500">{errors.zip}</div> : null}
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">Continue</button>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Formik
          initialValues={{
            firstName: '',
            email: '',
            phone: '',
          }}
          validationSchema={RepresentativeFormSchema}
          onSubmit={nextStep}
        >
          {({ errors, touched }) => (
            <Form className="form bg-white p-6 rounded-lg shadow space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <Field name="firstName" type="text" className="input input-bordered w-full" />
                {errors.firstName && touched.firstName ? <div className="text-red-500">{errors.firstName}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Field name="email" type="email" className="input input-bordered w-full" />
                {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <Field name="phone" type="text" className="input input-bordered w-full" />
                {errors.phone && touched.phone ? <div className="text-red-500">{errors.phone}</div> : null}
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">Continue</button>
            </Form>
          )}
        </Formik>
      )}

      {step > 1 && (
        <button onClick={prevStep} className="btn btn-outline w-full mt-4">Go Back</button>
      )}
    </div>
  );
};

export default App;
