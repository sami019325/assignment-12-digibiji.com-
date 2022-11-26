import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import DevPhoto from './../Resources/myProfile.jpg'
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-blue-800 text-white">
            <div>
                <img src={DevPhoto} alt='developer of the website' width="80" height="80" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current rounded-full" />
                <p className="font-bold">
                    Aajamn Sami <br />Web Software Developer- Intermediate
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/saami-ahmed-10a09720b' target='_blank' className='cursor-pointer'><BsLinkedin /></a>
                    <a href='https://www.facebook.com/profile.php?id=100009469399538' target='_blank' className='cursor-pointer'><BsFacebook /></a>
                    <a href='https://github.com/sami019325' target='_blank' className='cursor-pointer'><BsGithub /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;