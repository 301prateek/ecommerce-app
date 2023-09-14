import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>Sign in With Google</button>
      </div>
    </>
  );
};

export default SignIn;
