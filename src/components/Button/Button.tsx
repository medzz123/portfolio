import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button: React.FC<{ href: string; as?: string }> = (props) => {
  const { href, as, children } = props;

  return (
    <Link href={href} as={as} passHref>
      <StyledButton>
        <Border>
          <Span>{children}</Span>
        </Border>
      </StyledButton>
    </Link>
  );
};

const Span = styled.span`
  background-color: black;
  display: inline-block;
  color: white;
  padding: 16px 38px;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 0 0 5px #000;

  transition: all 200ms ease;

  transform: translate(-12px, -12px);

  &:hover {
    transform: translate(0);
  }
`;

const Border = styled.div`
  border: 3px solid black;
  height: 100%;
  width: 100%;

  transform: translate(12px, 12px);
`;

const StyledButton = styled.a`
  display: inline-block;
  outline: none;
  font-size: 18px;

  &:focus {
    span {
      box-shadow: 0 0 0 5px blue;
    }
  }
`;

export default Button;
