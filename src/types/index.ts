export type TService = {
  _id?: string;
  title: string;
  img?: string;
  description: string;
  facilities: string[];
  isDeleted: boolean;
}

export type TEvent = {
  _id?: string;
  title: string;
  img?: string;
  bgColor?: string;
  isDeleted: boolean;
}

export type TRecentEvent = {
  _id?: string;
  title: string;
  img?: string;
  owner: string;
  isDeleted: boolean;
}