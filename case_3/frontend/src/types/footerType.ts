export type FooterLinkType = {
  name: string;
  link: string;
};

export type FooterType = {
  location: string;
  phone: string;
  socials: FooterLinkType[];
};
