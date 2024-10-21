import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "firebase/auth";

function Home() {
  return (
    <div>
      <SignInButton />
    </div>
  );
}

export default Home;

//Sign in with Google
function SignInButton() {
  const signInWithGoogle = () => {
    //Sign in with Google by firebase
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}
