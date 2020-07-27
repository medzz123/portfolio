import { LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import Link from 'next/link';
import React from 'react';

import {
  Container,
  HeaderWrapper,
  List,
  Logo,
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
              <Link key={`navItem-${i}`} href={e.path}>
                <a>
                  <LinkHighlight>
                    <li>{e.title}</li>
                  </LinkHighlight>
                </a>
              </Link>
            ))}
            <ThemeButton type="button" onClick={toggleDarkMode}>
              <LinkHighlight>toggle theme</LinkHighlight>
            </ThemeButton>
          </List>
        </Container>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
