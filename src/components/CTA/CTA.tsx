import React from 'react';

import { AnchorProps, ButtonProps, CTAProps } from './CTA.models';
import { StyledAnchor, StyledButton } from './CTA.styles';

const CTA: React.FC<CTAProps> = (props) => {
  const {
    children,
    variant = 'primary',
    ctaType = 'button',
    contained = true,
  } = props;

  if (ctaType === 'anchor') {
    const { href, target } = props as AnchorProps;
    return (
      <StyledAnchor
        variant={variant}
        contained={contained}
        target={target}
        href={href}
        {...props}
      >
        {children}
      </StyledAnchor>
    );
  }

  const { type = 'button', disabled = false } = props as ButtonProps;

  return (
    <StyledButton
      type={type}
      disabled={disabled}
      variant={variant}
      contained={contained}
    >
      {children}
    </StyledButton>
  );
};

export default CTA;
