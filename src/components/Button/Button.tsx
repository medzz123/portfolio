import Link from 'next/link';
import React from 'react';

import { Border, Span, StyledButton } from './Button.styles';

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

export default Button;
