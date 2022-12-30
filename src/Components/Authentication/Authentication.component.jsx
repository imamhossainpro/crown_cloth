import {signInWithGooglePopup, createUserDocumentFromAuth,} from '../../Utils/Firebase/Firebase.utils';
import SignInForm from '../Sign-in-Form/Sign-in.component';
import SignUpForm from '../Sign-up-form/Sign-up-form.component'
import './Authentication.styles.scss'

const Authentication = () => {
    const logGooglePopupUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
      
  return (
    <div className='authentication-container'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Authentication