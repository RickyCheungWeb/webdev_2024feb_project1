export enum SelectedPage {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Resource = 'resource',
  Connect = 'connect',
  Chinese = 'chinese',
  ContactUs = 'contactus',
}

export interface AboutType {
  image: React.ReactElement;
  title: string;
  description: string;
  link: string;
}

export interface ConnectType {
  title: string;
  description?: string;
  image?: string;
}
