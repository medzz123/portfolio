import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  background-color: ${(p) =>
    p.variant === 'primary' ? p.theme.primary.main : 'transparent'};
  color: ${(p) => p.theme.text.contrast};
  padding: 10px 45px;
  font-size: 16px;
  box-shadow: none;
  border: none;
  font-family: 'Space Mono', sans-serif;
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

type ButtonTypes = 'button' | 'submit' | 'reset';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = 'button', variant = 'primary' } = props;
  return (
    <StyledButton type={type as ButtonTypes} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
