import photo1 from "/assets/photo1.jpg";
import photo2 from "/assets/photo2.jpg";
import photo3 from "/assets/photo3.jpg";
import photo4 from "/assets/photo4.jpg";
import photo5 from "/assets/photo5.jpg";

export interface Photo {
  header: string;
  description: string;
  image: typeof photo1;
}
export type PhotoType = {
  photo: Photo;
};

export const photoData: Photo[] = [
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, maxime!",
    image: photo1,
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, esse?",
    image: photo2,
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, non!",
    image: photo3,
  },
  {
    header: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsam!",
    image: photo4,
  },
];
