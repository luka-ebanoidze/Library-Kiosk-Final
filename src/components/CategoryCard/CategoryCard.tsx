import LinkButton from "../LinkButton";

interface CategoryProps {
  category: string;
}

const CategoryCard = ({ category }: CategoryProps): React.ReactElement => (
  <LinkButton
    className="w-52 h-52 flex justify-center items-center border-secondary border-4 rounded-3xl hover:cursor-pointer hover:bg-primary max-s1:w-36 max-s1:h-36"
    path={`/books/${category}`}
  >
    {category}
  </LinkButton>
);

export default CategoryCard;
