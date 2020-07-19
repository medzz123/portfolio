export interface CTAStylesProps {
  variant: 'primary' | 'secondary' | 'ghost';
  contained: boolean;
}

export type ButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
} & Partial<CTAStylesProps> & { ctaType: 'button' };

export type AnchorProps = { href?: string; target?: string } & Partial<
  CTAStylesProps
> & { ctaType: 'anchor' };

export type CTAProps = ButtonProps | AnchorProps;
