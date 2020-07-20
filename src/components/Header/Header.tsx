import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import {
  Hamburger,
  HeaderWrapper,
  Item,
  Logo,
  Menu,
  MenuLink,
  Navigation,
} from './Header.styles';

const nav = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
  { title: 'Posts', path: '/posts' },
];

const Header: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const theme = React.useContext(ThemeContext);

  const { pathname } = useRouter();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <Menu open={open}>
        {nav.map((n) => (
          <Link href={n.path} key={`${n.path}-mobile`}>
            <MenuLink active={pathname === n.path}>{n.title}</MenuLink>
          </Link>
        ))}
      </Menu>
      <HeaderWrapper>
        <Link href="/">
          <Logo />
        </Link>
        {open ? (
          <Hamburger onClick={() => setOpen(false)}>
            <FaTimes size="35" color={theme.secondary.contrastText} />
          </Hamburger>
        ) : (
          <Hamburger onClick={() => setOpen(true)}>
            <FaBars size="25" color={theme.secondary.contrastText} />
          </Hamburger>
        )}
        <Navigation>
          {nav.map((d) => (
            <Item key={`${d.path}-desktop`} active={pathname === d.path}>
              <Link href={d.path}>{d.title}</Link>
            </Item>
          ))}
        </Navigation>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
