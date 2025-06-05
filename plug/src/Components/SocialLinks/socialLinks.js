// src/components/SocialLinks.jsx
import React from "react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <a
        href="https://www.facebook.com/vryheidplugpodcast?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition text-2xl"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@vryheidplug?_t=ZM-8wjDYORo3r3&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 transition text-2xl"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.youtube.com/channel/yourchannelid"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition text-2xl"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>
  );
}
