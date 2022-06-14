// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'

import { 
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  // useEffect(() => {
  //   async function redirectLogin() {
  //     const response = await getRedirectResult(auth);
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   redirectLogin()
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      {/*<button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>*/}
      <SignUpForm />
    </div>
  )
}

export default SignIn