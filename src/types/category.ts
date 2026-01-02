// already existing
export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
   title?: string;
}

// your new type
export type ProCategory = {
  id: number;
  title: string;
  icon: string;
  link: string;
};
