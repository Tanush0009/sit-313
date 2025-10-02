import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName: fname,
        lastName: lname,
        email: email
      });
      navigate("/");
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="auth-container signup-bg">
      <div className="auth-card">
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
          <input type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
