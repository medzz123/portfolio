import { LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import Link from 'next/link';
import React from 'react';

import {
  Container,
  HeaderWrapper,
  List,
  Logo,
  Menu,
  ThemeButton,
} from './Header.styles';

const nav = [
  { title: 'my projects', path: '/projects' },
  { title: 'my posts', path: '/posts' },
];

const Header: React.FC<{ toggleDarkMode: () => void; dark: boolean }> = ({
  toggleDarkMode,
}) => {
  return (
    <HeaderWrapper>
      <MaxContainer>
        <Container>
          <Link href="/">
            <a>
              <Logo>Medz.</Logo>
            </a>
          </Link>
          <List>
            {nav.map((e, i) => (
              <li key={`navItem-${i}`}>
                <Link href={e.path} passHref>
                  <a>
                    <LinkHighlight>{e.title}</LinkHighlight>
                  </a>
                </Link>
              </li>
            ))}
            <ThemeButton type="button" onClick={toggleDarkMode}>
              <LinkHighlight>toggle theme</LinkHighlight>
            </ThemeButton>
          </List>
          <Menu>
            <div />
            <div />
            <div />
          </Menu>
        </Container>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
