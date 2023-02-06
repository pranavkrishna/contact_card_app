import React from "react";
import "./Footer.css"
import {FaInstagramSquare} from "react-icons/fa";
import {FaWhatsappSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";


export default function Footer() {
    return (
        <div className="Footer">
            <a href="https://www.instagram.com/_.pranavkrishna._/"
                className="Instagram">
                <FaInstagramSquare size="40px" />
            </a>
            <a href="https://wa.me/918606599466"
                className="WhatsApp">
                <FaWhatsappSquare size="40px"/>
            </a>
            <a href="https://github.com/pranavkrishna"
                className="GitHub">
                <FaGithubSquare size="40px"/>
            </a>
            <a href="https://www.facebook.com/pranavkrishna1996/"
                className="Facebook">
                <FaFacebookSquare size="40px"/>
            </a>
        </div>
    );
}