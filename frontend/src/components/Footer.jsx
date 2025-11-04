import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-3 text-center border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Disclaimer - REDUCING mb-4 to mb-3, and gap-y-2 to gap-y-1 */}
                <div className="mb-3 p-3 bg-white rounded-lg">
                    <h4 className="font-bold text-sm text-gray-700 mb-1">
                        ⚖️ Disclaimer – InternSaathi
                    </h4>
                    {/* Key Change: gap-y-1 for tighter vertical spacing between paragraphs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-700 leading-snug">
                        <p><strong>📌 Platform Role:</strong> A connecting platform, not an employer.</p>
                        <p><strong>👥 User Responsibility:</strong> Users must verify all details.</p>
                        <p><strong>📊 No Guarantee:</strong> We do not guarantee any outcomes.</p>
                        <p><strong>🛡️ Liability:</strong> Not responsible for contracts or disputes.</p>
                        <p><strong>🔒 Safety First:</strong> Share personal details with caution.</p>
                        <p><strong>🚫 No Misuse:</strong> Fraud may lead to account suspension.</p>
                    </div>
                </div> 

                {/* Copyright - Reduced padding on footer itself 
                <p className="text-gray-600 text-sm"> 
                    &copy; {new Date().getFullYear()} InternSaathi. All rights reserved. 
                </p> 
*/}
                {/* Powered by Section - Reduced mt-2 to mt-1 
                <div className="flex flex-col md:flex-row justify-center items-center gap-1 mt-1"> 
                    <span className="text-gray-600 text-sm">Powered by</span> 
                    <a 
                        href="https://www.sunsysglobal.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > 
                        {/* Reduced height from h-12 to h-10 for tighter fit *
                        <img src="/logo2.jpg" alt="Sunsys Logo" className="h-10 w-16" /> 
                    </a> 
                    <a 
                        href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-blue-700 transition-colors duration-300" 
                    > 
                        <FaLinkedin size={18} /> 
                    </a> 
                </div> 

                {/* Social Media Links - Reduced mt-3 to mt-1 and mb-1 to mb-0 */}
                <div className="mt-1"> 
                    <p className="text-gray-600 font-medium text-sm mb-0">Follow us on</p> 
                    <div className="flex justify-center items-center space-x-4"> 
                        <a 
                            href="https://www.linkedin.com/company/internsaathi" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-300" 
                        > 
                            <FaLinkedin size={20} /> 
                        </a> 
                        <a 
                            href="https://www.instagram.com/intern.saathi?igsh=MTNzaXE0eHFtOXNyZw%3D%3D&utm_source=ig_contact_invite" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 hover:text-pink-400 transition-colors duration-300" 
                        > 
                            <FaInstagram size={20} /> 
                        </a> 
                        <a 
                            href="https://x.com/InternSaathi?t=p1eTe0LJEppzSsF_mxMmjg&s=09" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 hover:text-sky-500 transition-colors duration-300" 
                        > 
                            <FaTwitter size={20} /> 
                        </a> 
                    </div> 
                </div> 
            </div> 
        </footer>
    );
};

export default Footer;