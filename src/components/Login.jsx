import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  const provider = new GoogleAuthProvider();

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn} className="border p-2 mt-8 mr-4">
        Login
      </button>
      <button onClick={handleGoogleSignOut} className="border p-2 mt-8">
        Log out
      </button> */}
      {user ? (
        <button onClick={handleGoogleSignOut} className="border p-2 mt-8">
          Log out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="border p-2 mt-8 mr-4">
          Login
        </button>
      )}

      {user && (
        <div>
          <h2> {user.displayName} </h2>
          <h2> {user.email} </h2>
          <h2> {user.providerId} </h2>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
