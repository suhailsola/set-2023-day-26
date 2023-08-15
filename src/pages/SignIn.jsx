import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";

const SignIn = () => {
  return (
    <div>
      <Header />
      <form className="m-auto flex flex-col justify-center items-center border bg-white w-[400px] p-9">
        <div>
          <h2>Sign In</h2>
          <p>Not registered yet?Sign Up</p>
        </div>
        <div className="flex flex-col justify-center" action="" method="post">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <div>
          <Button>Sign In</Button>
          <p>Forgot password?</p>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default SignIn;
