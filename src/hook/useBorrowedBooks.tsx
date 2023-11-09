import { useQuery } from "react-query";
import axios from "axios";

const useBorrowedBooks = (userId: any) => {
  return useQuery(["borrowedBooks", userId], async () => {
    const { data } = await axios.get(`http://localhost:3000/user/${userId}`);

    return data.books || [];
  });
};

export default useBorrowedBooks;
