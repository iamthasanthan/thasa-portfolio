import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/skills',
    text: 'Skills',
  },
  {
    id: 3,
    url: '/youtube',
    text: 'YouTube',
  },
  {
    id: 4,
    url: '/projects',
    text: 'Projects',
  },
  {
    id: 5,
    url: '/info',
    text: 'Contact',
  },
  /*{
    id: 5,
    url: '/blog',
    text: 'Blogs',
  },*/
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/codethamizhathasatech',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://mobile.twitter.com/ThamizhaCode',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/channel/UCmc1GRcWKWuxqhA5gZArasw',
    icon: <FaYoutube />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/codethamizhathasatech/',
    icon: <FaInstagram />,
  },
];
