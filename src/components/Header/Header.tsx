import { LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Container,
  HeaderWrapper,
  List,
  Logo,
  Menu,
  MenuButton,
  ThemeButton,
} from './Header.styles';

const nav = [
  { title: 'my projects', path: '/projects' },
  { title: 'my blog', path: '/blog' },
];

const Header: React.FC<{ toggleDarkMode: () => void; dark: boolean }> = ({
  toggleDarkMode,
}) => {
  const [open, setOpen] = React.useState(false);

  const { pathname } = useRouter();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

          <MenuButton open={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </MenuButton>
          <Menu open={open}>
            <List vertical>
              {nav.map((e, i) => (
                <li key={`vertical-navItem-${i}`}>
                  <Link href={e.path} passHref>
                    <a>
                      <LinkHighlight>{e.title}</LinkHighlight>
                    </a>
                  </Link>
                </li>
              ))}
              <ThemeButton type="button" onClick={toggleDarkMode} vertical>
                <LinkHighlight>toggle theme</LinkHighlight>
              </ThemeButton>
            </List>
          </Menu>
        </Container>
      </MaxContainer>
    </HeaderWrapper>
  );
};

export default Header;
