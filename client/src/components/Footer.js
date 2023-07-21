import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-black">
          © {new Date().getFullYear()} Typing App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
