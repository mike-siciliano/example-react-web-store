import { signInWithGooglePopup, createUserDocumenFromAuth } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumenFromAuth(user);
  }
  return (
    <div>
      <h1>Signed In</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google 
      </button>
    </div>
  );
}

export default SignIn;