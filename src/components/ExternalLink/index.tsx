import { LinkHighlight } from '@components/Highlight';
import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  display: inline-block;
  font-weight: bold;
  word-break: break-all;
`;

const ExternalLink: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Anchor href={href} target="blank">
      <LinkHighlight>{children}</LinkHighlight>
    </Anchor>
  );
};

export const LinkSpacer = styled.div`
  a {
    margin-bottom: 10px;
    display: block;
  }
`;

export default ExternalLink;
