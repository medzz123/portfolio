import styled, { css } from 'styled-components';

import { CTAStylesProps } from './CTA.models';

const SharedStyles = css<CTAStylesProps>`
  user-select: none;
  cursor: pointer;
  transition: all 200ms ease;
  text-align: center;
  box-shadow: ${(p) =>
    p.variant === 'secondary'
      ? `inset 0px 0px 0px 1px ${p.theme.primary.main}, 0px 8px 15px rgba(0, 0, 0, 0.1)`
      : '0px 8px 15px rgba(0, 0, 0, 0.1)'};
  background-color: ${(p) =>
    p.variant === 'primary' ? p.theme.primary.main : 'transparent'};
  color: ${(p) =>
    p.variant === 'primary' ? p.theme.text.contrast : p.theme.primary.main};
  padding: ${(p) => p.variant !== 'ghost' && '20px 60px'};
  font-size: 16px;
  font-family: 'Space Mono', sans-serif;
  ${(p) =>
    p.contained && p.variant !== 'ghost'
      ? css`
          min-width: 250px;
        `
      : css`
          width: 100%;
        `}
  &:hover {
    background-color: ${(p) => p.variant !== 'ghost' && p.theme.action.hover};
    color: ${(p) =>
      ['primary', 'secondary'].includes(p.variant) && p.theme.text.contrast};
    text-decoration: ${(p) => p.variant === 'ghost' && 'underline'};
    box-shadow: ${(p) =>
      p.variant === 'secondary'
        ? `inset 0px 0px 0px 1px ${p.theme.action.hover}, 0px 8px 15px rgba(0, 0, 0, 0.1)`
        : '0px 8px 15px rgba(0, 0, 0, 0.1)'};
  }
`;

export const StyledButton = styled.button<CTAStylesProps>`
  ${SharedStyles}
  display: block;

  &:disabled {
    background-color: ${(p) => p.theme.action.disabledBackground};
    color: ${(p) => p.theme.action.disabled};
    cursor: default;
  }
`;

export const StyledAnchor = styled.a<CTAStylesProps>`
  ${SharedStyles}
  display: inline-block;
`;
