import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import React from 'react';
const SocialIcons = () => {
  return (
    <div className='fixed top-0 right-0 flex flex-col items-center justify-center space-y-4 p-4 text-blue-500 ml-2'>
      <a
        href='https://www.github.com/joluro86'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub size={20} />
      </a>
      <a
        href='https://www.linkedin.com/in/joluro'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href='https://web.facebook.com/joluro86'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaFacebook size={20} />
      </a>
    </div>
  );
};

export { SocialIcons };
