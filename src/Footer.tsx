import React from "react";
import "./Footer.css";

/**
 * Footer
 */
export const Footer = () => {
  return (
    <footer>
      <div className="app-footer">
        <ul>
          <li>
            <a href="">About JAL</a>
          </li>
          <li>
            <a href="">Company Profile and Corporate Policy</a>
          </li>
          <li>
            <a href="">Safety and Quality</a>
          </li>
          <li>
            <a href="">Sustainability</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Press Release</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Travel tips and extra</a>
          </li>
          <li>
            <a href="">JAL Guide to Japan</a>
          </li>
          <li>
            <a href="">Inflight health tips</a>
          </li>
          <li>
            <a href="">Hotel, cars and more</a>
          </li>
        </ul>
      </div>
      <div id="horizontal-links">
        <ul>
          <li>
            <a href="">Copyright © Japan Airlines. All rights reserved.</a>
          </li>
          <li>
            <a href="">System Maintenance</a>
          </li>
          <li>
            <a href="">Website Policy</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Conditions of Carriage</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
