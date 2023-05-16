export interface Photo {
  header: string;
  description: string;
  imageUrl: string;
}
export type PhotoType = {
  photo: Photo;
};

export const photoData: Photo[] = [
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime!",
    imageUrl: "https://source.unsplash.com/random/600x300/?img=1",
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, esse?",
    imageUrl: "https://source.unsplash.com/random/400x300/?img=1",
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, non!",
    imageUrl: "https://source.unsplash.com/random/800x600/?img=1",
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsam!",
    imageUrl: "https://source.unsplash.com/random/300x200/?img=1",
  },
];
