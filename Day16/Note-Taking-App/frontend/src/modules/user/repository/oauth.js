// Here authentication will actually happen
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export async function oAuthWithGoogle() {
  try {
    // Creating a provider
    const provider = new GoogleAuthProvider();
    // Will do authentication.
    const auth = getAuth();
    // Will open the popup tab or window whose one more work is to take auth and provider as well.
    // It will also give us promise as well so we need to use async and await.
    const userCredentials = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(userCredentials);
    // Here we will get the data
    const user = userCredentials.user;
    return user;
  } catch (error) {
    throw error;
  }
}
