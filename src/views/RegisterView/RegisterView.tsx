import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { instance } from "../../utils/axiosInstance";
import { ROUTES_CONFIG } from "../../config/routes";
import { LoginForm } from "../../types/login";

import Form from "../../components/Form";
import Input from "../../components/Form/Input";

interface RegisterForm extends LoginForm {
  confirmation: string;
}

const { LOGIN, REGISTER } = ROUTES_CONFIG;

export default function RegisterView(): React.ReactElement {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterForm>();

  const registerUser = useMutation(
    (data: RegisterForm) => instance.post("/user", data),
    {
      onSuccess: () => {
        navigate(LOGIN.path);
        toast.success("Registration successful");
      },
      onError: () => {
        toast.error("Something is wrong");
      },
    }
  );

  const onSubmit = (data: RegisterForm) => {
    if (data.password === data.confirmation) {
      registerUser.mutate(data);
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <Form
      title={REGISTER.name}
      actionText="Already a member ?"
      actionConfig={LOGIN}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Username"
        name="username"
        placeholder="Type your username..."
        register={{ ...register("username") }}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder="Type your password..."
        register={{ ...register("password") }}
      />
      <Input
        type="password"
        label="Confirm password"
        name="confirmation"
        placeholder="Confirm password..."
        register={{ ...register("confirmation") }}
      />
    </Form>
  );
}
