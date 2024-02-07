export type TService = {
  title: string;
  img?: string;
  description: string;
  facilities: string[];
  isDeleted: boolean;
}

export type TEvent = {
  title: string;
  img?: string;
  bgColor?: string;
  isDeleted: boolean;
}

export type TRecentEvent = {
  title: string;
  img?: string;
  owner: string;
  isDeleted: boolean;
}