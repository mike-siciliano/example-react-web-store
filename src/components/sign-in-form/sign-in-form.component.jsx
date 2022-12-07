import { useState } from "react";

import { 
  signInAuthUserWithEmailAndPassword, 
  signInWithGooglePopup 
} from "../../utils/firebase/firebase.utils";
import {Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const SignInForm = () => {

  const defaultFormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
  }

  const handelSubmit = async (event) => {
    event.preventDefault();

     try {
      await signInAuthUserWithEmailAndPassword(email, password);
      
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('Incorrect user or password!')
      }
    }
  }
//  
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>

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
        <SignInButtonsContainer >
        <Button 
          buttonType={BUTTON_TYPE_CLASSES.base}
          type='submit'>
            Sign In
        </Button>
        <Button 
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={signInWithGoogle} >
            Google Sign In
          </Button>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;