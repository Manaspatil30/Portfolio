import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <>
  <div className="app__social">
    <div>
      <FaXTwitter />
    </div>
    <div>
      <FaLinkedin />
    </div>
  </div>
  </>
);

export default SocialMedia;