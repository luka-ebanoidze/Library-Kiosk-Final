import { useState, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from "@mui/material";

import { Item } from "../../types/book.types";
import { ROUTES_CONFIG } from "../../config/routes";

import LinkButton from "../LinkButton";
import useUser from "../../hook/useUser";
import useUpdateUserBooks from "../../hook/useUpdateUserBooks";
import useBorrowedBooks from "../../hook/useBorrowedBooks";

interface BookCardProps {
  book: Item;
  showOnHover?: boolean;
}

const { BORROW_BOOK, RETURN_BOOK, LOGIN } = ROUTES_CONFIG;

const sharedStyles = "my-6 px-7 py-2 bg-green text-white font-bold rounded-3xl";

const BookCard = ({
  book,
  showOnHover = false,
}: BookCardProps): ReactElement => {
  const { title, img, rating } = book;

  const navigate = useNavigate();
  const { getUser } = useUser();
  const updateUserBooks = useUpdateUserBooks();
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);

  const user = getUser();
  const userId = getUser()?.id;

  const { data: borrowedBooks } = useBorrowedBooks(userId);

  const handleBookBorrow = (): void => {
    if (user) {
      toast.success("Borrowed successfully");
      setIsBorrowed(true);

      updateUserBooks.mutate({ userId, newBook: book });
    } else {
      navigate(LOGIN.path);
      setIsBorrowed(false);
    }
  };

  const handleMouseEnter = (): void => {
    setDescriptionVisibility(true);
  };

  const handleMouseleave = (): void => {
    setDescriptionVisibility(false);
  };

  const foundBook = (borrowedBooks || []).find(({ id }: any) => id === book.id);

  return (
    <div
      className="w-72 h-[380px] flex justify-center items-end border-secondary border-4 rounded-3xl overflow-hidden relative hover:cursor-pointer max-sm:w-64 max-s1:w-56 max-s1:h-[360px] max-s2:w-48 max-s2:h-[300px] max-s3:w-44"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseleave}
    >
      <img className="w-full" src={img} alt={title} />
      <div
        className={`${
          descriptionVisibility && showOnHover ? "h-[60%]" : "h-0"
        } absolute bottom-0 w-full flex flex-col justify-center gap-2 text-center overflow-hidden bg-white border-[#F6A04F] border-t-[1px] transition-all duration-300`}
      >
        <h1 className="px-5 text-lg">{title}</h1>
        <div className="w-full flex flex-col justify-evenly items-center max-s1:flex-col max-s1:gap-2">
          <Rating name="read-only" value={rating} readOnly />
          {isBorrowed || foundBook ? (
            <LinkButton
              className={`${sharedStyles} bg-primary`}
              path={RETURN_BOOK.path}
            >
              {RETURN_BOOK.name}
            </LinkButton>
          ) : (
            <button className={sharedStyles} onClick={handleBookBorrow}>
              {BORROW_BOOK.name}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
