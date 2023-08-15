import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between py-6 px-9 w-screen border text-sm">
      <div className="flex justify-center gap-4">
        <p>Copyright 2023 Kerja IT</p>
        <a href="https://github.com/afrieirham/mytechjobs">Open-Source</a>
      </div>
      <div className="flex justify-center gap-4">
        <p>Email</p>
        <p>Twitter</p>
      </div>
    </div>
  );
};

export default Footer;
