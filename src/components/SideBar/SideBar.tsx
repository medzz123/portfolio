import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { Line, Positioner, Social } from './SideBar.styles';

const SideBar: React.FunctionComponent = () => {
  return (
    <Positioner>
      <IconContext.Provider value={{ size: '20' }}>
        <Social href="https://www.linkedin.com/in/mahedihs1997/" target="blank">
          <FaLinkedin />
        </Social>
        <Social href="https://github.com/mahedihs1997" target="blank">
          <FaGithub />
        </Social>
        <Social href="https://twitter.com/medzz123" target="blank">
          <FaTwitter />
        </Social>
      </IconContext.Provider>
      <Line />
    </Positioner>
  );
};

export default SideBar;
