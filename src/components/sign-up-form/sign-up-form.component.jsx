import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumenFromAuth } from "../../utils/firebase/firebase.utils";
import {Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles";


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
    <SignUpContainer>
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

        <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUpForm;