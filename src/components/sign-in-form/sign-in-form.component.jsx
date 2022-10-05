import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumenFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';

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
    const { user } = await signInWithGooglePopup();
    await createUserDocumenFromAuth(user);
  }

  const handelSubmit = async (event) => {
    event.preventDefault();

     try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        alert('Incorrect user or password!')
      }
    }
  }
//  
  return (
    <div className='sign-in-container'>
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
        <div className='buttons-container' >
        <Button 
          buttonType='' 
          type='submit'>
            Sign In
        </Button>
        <Button 
          buttonType='google' 
          onClick={signInWithGoogle} >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;