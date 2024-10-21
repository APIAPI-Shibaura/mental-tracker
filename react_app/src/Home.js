import React from "react";

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
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}
