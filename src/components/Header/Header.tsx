import { LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import Link from 'next/link';
import React from 'react';

import { Container, HeaderWrapper, List, Logo } from './Header.styles';

const nav = [
  { title: 'my work', path: '/projects' },
  { title: 'my posts', path: '/posts' },
];

const Header: React.FunctionComponent = () => {
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
          </List>
        </Container>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
