import React, { useMemo, useState } from "react";
import {
  MinusIcon,
  PlusIcon,
  // BackIcon,
  // CheckmarkIcon,
  // CopyrightIcon,
  // ExpandIcon,
  FacebookIcon,
  // ForwardIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  PlayIcon,
  // SendIcon,
  TikTokIcon,
  TwitterIcon,
  FacebookHoverIcon,
  InstagramHoverIcon,
  LinkedinHoverIcon,
  MediumHoverIcon,
  TikTokHoverIcon,
  TwitterHoverIcon,
  // LogoIconDarkIcon,
  // CrossIcon,
  // ForwardWhiteIcon,
} from "src/assets/icons";

export type IconName =
  | "minus"
  | "plus"
  // | "back"
  // | "checkmark"
  // | "copyright"
  // | "expand"
  | "facebook"
  // | "forward"
  | "instagram"
  | "linkedin"
  | "medium"
  | "play"
  // | "send"
  | "tiktok"
  | "twitter";
// | "logo"
// | "cross"
// | "forward-white";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: IconName;
  color?: string;
  /**
   * Pass in the name of a globalConstant fontSize value or a css value. Defaults to `bodyBig` size.
   */
  size?: string;
  hover?: boolean;
}

const NAME_TO_ICON_MAP: Record<IconName, string> = {
  minus: MinusIcon,
  plus: PlusIcon,
  // back: BackIcon,
  // checkmark: CheckmarkIcon,
  // copyright: CopyrightIcon,
  // expand: ExpandIcon,
  facebook: FacebookIcon,
  // forward: ForwardIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  play: PlayIcon,
  // send: SendIcon,
  tiktok: TikTokIcon,
  twitter: TwitterIcon,
  // logo: LogoIconDarkIcon,
  // cross: CrossIcon,
  // "forward-white": ForwardWhiteIcon,
};

const NAME_TO_HOVER_ICON_MAP: Record<IconName, string> = {
  minus: MinusIcon,
  plus: PlusIcon,
  // back: BackIcon,
  // checkmark: CheckmarkIcon,
  // copyright: CopyrightIcon,
  // expand: ExpandIcon,
  facebook: FacebookHoverIcon,
  // forward: ForwardIcon,
  instagram: InstagramHoverIcon,
  linkedin: LinkedinHoverIcon,
  medium: MediumHoverIcon,
  play: PlayIcon,
  // send: SendIcon,
  tiktok: TikTokHoverIcon,
  twitter: TwitterHoverIcon,
  // logo: LogoIconDarkIcon,
  // cross: CrossIcon,
  // "forward-white": ForwardWhiteIcon,
};

const Icon: React.FC<IconProps> = ({ name, color, hover, ...rest }) => {
  const IconSVG = useMemo(() => NAME_TO_ICON_MAP[name], [name]);
  const HoverIcon = useMemo(() => NAME_TO_HOVER_ICON_MAP[name], [name]);

  if (!IconSVG) console.warn(`Invalid icon name: ${name}`);

  const [icon, setIcon] = useState(<IconSVG />);

  if (hover && IconSVG) {
    return (
      <i
        onMouseEnter={() => setIcon(<HoverIcon />)}
        onMouseLeave={() => setIcon(<IconSVG />)}
      >
        {icon}
      </i>
    );
  }

  return IconSVG ? (
    <i>
      <IconSVG fill={color} {...rest} />
    </i>
  ) : null;
};

export default Icon;
