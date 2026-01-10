import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const CategoryList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
  {
    name: "Tennis",
    imgUrl: "category-running-1.png",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.png",
  },
  {
    name: "Football",
    imgUrl: "category-football.png",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.png",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.png",
  },
];

const CategorySection = () => {
  return (
    <section id="category-section" className="container mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary">
          See All Categories <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="flex justify-between flex-wrap mt-8 ">
        {CategoryList.map((category, index) => (
          <div
            className="w-[200px] rounded-[12px] bg-gradient-to-r from-[#F7F7F7] to-[#F1F1F1] aspect-square flex justify-center"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/category/${category.imgUrl}`}
                alt={category.name}
                width={86}
                height={86}
                className="flex mx-auto items-center bg-cover mb-[10px]"
              ></Image>
              <div className="flex mx-auto text-primary font-medium text-xl">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategorySection;
