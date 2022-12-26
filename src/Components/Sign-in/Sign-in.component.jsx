import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
  return (
    <div>
        <h1>Sign In page</h1>
        <button onClick={logGoogleUser}>Sign in With Google popup</button>
    </div>
  )
}

export default SignIn