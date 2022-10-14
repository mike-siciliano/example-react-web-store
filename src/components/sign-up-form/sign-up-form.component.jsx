import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumenFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss';

const SignUpForm = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumenFromAuth(user, { displayName });

      resetFormFields();
      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannont create user, email already in use');
      }
      console.log(error);
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label={'Display Name:'}
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName} />

        <FormInput
          label={'Email:'}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email} />

        <FormInput
          label={'Password:'}
          type='password'
          required onChange={handleChange}
          name='password'
          minLength={8}
          value={password} />

        <FormInput
          label={'Confirm Password:'}
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          minLength={8}
          value={confirmPassword} />

        <Button buttonType='' type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;