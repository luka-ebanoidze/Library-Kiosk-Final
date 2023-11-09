import { useMutation, useQueryClient } from "react-query";
import axios, { AxiosResponse } from "axios";

interface UpdateUserData {
  userId: number;
  newBook: any;
}

const useUpdateUserBooks = () => {
  const queryClient = useQueryClient();

  const updateUserBooks = async ({
    userId,
    newBook,
  }: UpdateUserData): Promise<UpdateUserData> => {
    try {
      const { data }: AxiosResponse = await axios.get(
        `http://localhost:3000/user/${userId}`
      );

      const userData = data as any;
      const userBooks = userData.books || [];

      const existBook = userBooks.find((book: any) => book.id === newBook.id);

      if (existBook) {
        const user = {
          ...userData,
          books: userBooks.filter((book: any) => book.id !== existBook.id),
        };

        await axios.put(`http://localhost:3000/user/${userId}`, user);
      } else {
        const updatedUser = {
          ...userData,
          books: [newBook, ...userBooks],
        };

        await axios.put(`http://localhost:3000/user/${userId}`, updatedUser);
      }

      return { userId, newBook };
    } catch (error) {
      throw new Error("Failed to update user");
    }
  };

  return useMutation(updateUserBooks, {
    onSuccess: (updatedData) => {
      queryClient.invalidateQueries(["user", updatedData.userId]);
    },
  });
};

export default useUpdateUserBooks;
