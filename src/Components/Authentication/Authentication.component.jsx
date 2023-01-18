import SignInForm from '../Sign-in-Form/Sign-in.component';
import SignUpForm from '../Sign-up-form/Sign-up-form.component'
import {AuthenticationContainer} from  './Authentication.styles.jsx'

const Authentication = () => {    
  return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm/>
    </AuthenticationContainer>
  )
}

export default Authentication