import React from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const getHome = () => {
    navigate(`/home`);
  };
  const getTalent = () => {
    navigate(`/talents`);
  };
  const getPostJobs = () => {
    navigate(`/post-jobs`);
  };
  const getStats = () => {
    navigate(`/stats`);
  };
  const Login = () => {
    navigate(`/sign-in`);
  };
  const Register = () => {
    navigate(`/register`);
  };
  return (
    <div className=" bg-white flex justify-between w-screen py-6 px-11 border">
      <div
        onClick={getHome}
        className="flex justify-center items-center gap-3 hover:cursor-pointer"
      >
        <p className="bg-black text-white rounded h-7 w-7 text-center">IT</p>
        <p className="text-black">
          <strong>kerja-IT.com</strong>
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button variant="ghost" onClick={getStats}>
          📊 Stats
        </Button>
        <Button variant="ghost" onClick={getTalent}>
          🏹 Talents
        </Button>
        <Button variant="ghost" onClick={getPostJobs}>
          📢 Post Jobs
        </Button>
        <Button variant="ghost">📧 Get Jobs Alert</Button>
        <Button variant="ghost" onClick={Login}>
          ☁️ Sign In
        </Button>
        <Button variant="outline" onClick={Register}>
          ✨ Register
        </Button>
      </div>
    </div>
  );
};

export default Header;
