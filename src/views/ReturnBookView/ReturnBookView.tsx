import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ROUTES_CONFIG } from "../../config/routes";

import useUpdateUserBooks from "../../hook/useUpdateUserBooks";
import useUser from "../../hook/useUser";
import useBorrowedBooks from "../../hook/useBorrowedBooks";
import Form from "../../components/Form";
import Input from "../../components/Form/Input";

interface ReturnBookForm {
  id: string;
  username: string;
  password: string;
}

const { BORROW_BOOK, RETURN_BOOK, LOGIN } = ROUTES_CONFIG;

const ReturnBookView = (): React.ReactElement => {
  const navigate = useNavigate();
  const { getUser } = useUser();
  const { register, handleSubmit } = useForm<ReturnBookForm>();
  const updateUserBooks = useUpdateUserBooks();

  const user = getUser();
  const userId = user?.id;

  const { data: borrowedBooks } = useBorrowedBooks(userId);

  async function onSubmit(InputData: ReturnBookForm): Promise<void> {
    try {
      const foundBook = borrowedBooks.find(
        ({ id }: ReturnBookForm) => id === InputData.id
      );

      if (user && user.password === InputData.password && foundBook) {
        updateUserBooks.mutate({ userId, newBook: foundBook });
        navigate(BORROW_BOOK.path);
        toast.success("Book returned successfully");
      } else if (!foundBook) {
        toast.error("Book id is not correct!");
      } else {
        toast.error("Password is not correct");
      }
    } catch {
      if (!userId) {
        navigate(LOGIN.path);

        toast.error("You are not loged in");
      } else {
        toast.error("Something is wrong");
      }
    }
  }

  // This function does not allow writing + and - in the input
  const handleKeyDown = (event: any): void => {
    if (event.key === "+" || event.key === "-") {
      event.preventDefault();
    }
  };

  // Allows only digits
  const handleInputChange = (event: any): void => {
    event.target.value = event.target.value.replace(/\D/g, "");
  };

  return (
    <Form title={RETURN_BOOK.name} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        label="Book id"
        name="id"
        placeholder="Type book id..."
        min={0}
        onKeyDown={handleKeyDown}
        onInput={handleInputChange}
        register={{ ...register("id") }}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder="Type your password..."
        register={{ ...register("password") }}
      />
    </Form>
  );
};

export default ReturnBookView;
