import React from "react";
import BookCard from "../../components/BookCard";
import LinkButton from "../../components/LinkButton";

import useUser from "../../hook/useUser";
import useBorrowedBooks from "../../hook/useBorrowedBooks";

import { ROUTES_CONFIG } from "../../config/routes";

const { RETURN_BOOK } = ROUTES_CONFIG;

const sharedStyles =
  "text-center border-solid font-bold border-4 py-2 hover:cursor-pointer rounded-full border-secondary hover:text-secondary";

const BorrowedBooksView = (): React.ReactElement => {
  const { getUser } = useUser();

  const { data: borrowedBooks } = useBorrowedBooks(getUser()?.id);

  return (
    <div className="mt-20  flex flex-col items-center">
      {borrowedBooks?.length ? (
        <div className="flex flex-col gap-10 py-5">
          {borrowedBooks.map((book: any) => (
            <div
              className=" bg-white py-5 rounded-xl flex justify-around items-center gap-10 max-xl:flex-col-reverse max-lg:items-center max-lg:gap-5 "
              key={book.id}
            >
              <BookCard key={book.id} book={book} />
              <div className="flex w-72 h-28 justify-between flex-col max-sm:w-36">
                <h1 className="text-center">id: {book.id}</h1>
                <LinkButton className={sharedStyles} path={RETURN_BOOK.path}>
                  Return
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No books</h1>
      )}
    </div>
  );
};

export default BorrowedBooksView;
