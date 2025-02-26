import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Display-only social icons
  const socialIcons = [
    { id: 1, name: 'Facebook', icon: FaFacebook },
    { id: 2, name: 'Twitter', icon: FaTwitter },
    { id: 3, name: 'Instagram', icon: FaInstagram },
    { id: 4, name: 'LinkedIn', icon: FaLinkedin },
    { id: 5, name: 'GitHub', icon: FaGithub },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
          <div className="flex flex-col mt-[-6px] hover:cursor-pointer">
              <h2 className="text-custom-blue font-bold font-mono w-32 text-2xl">
                accredian
              </h2>
              <p className="text-[10px] mt-[-8px] opacity-60 ml-1">
                Credentials that matter
              </p>
            </div>
            <p className="mt-2 text-gray-400">
              Creating amazing digital experiences
            </p>
          </div>
          <div className="flex space-x-4">
            {socialIcons.map((social) => (
              <div
                key={social.id}
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Simple link categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold mb-2">Products</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">Product 1</li>
              <li className="text-gray-400 text-sm">Product 2</li>
              <li className="text-gray-400 text-sm">Product 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">About</li>
              <li className="text-gray-400 text-sm">Team</li>
              <li className="text-gray-400 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">Blog</li>
              <li className="text-gray-400 text-sm">Documentation</li>
              <li className="text-gray-400 text-sm">Help Center</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">Privacy</li>
              <li className="text-gray-400 text-sm">Terms</li>
              <li className="text-gray-400 text-sm">Cookies</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;