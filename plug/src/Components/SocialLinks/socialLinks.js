import React from "react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import "./socialLinks.css";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/vryheidplugpodcast?mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-icon facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.tiktok.com/@vryheidplug?_t=ZM-8wjDYORo3r3&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="social-icon tiktok"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=vryheid+plug+podcast"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="social-icon youtube"
      >
        <FaYoutube />
      </a>
    </div>
  );
}
