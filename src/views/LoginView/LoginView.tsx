import { instance } from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

import useUser from "../../hook/useUser";

import { ROUTES_CONFIG } from "../../config/routes";

import Form from "../../components/Form";
import Input from "../../components/Form/Input";

interface LoginForm {
  username: string;
  password: string;
}

const { HOME, LOGIN, REGISTER } = ROUTES_CONFIG;

const LoginView = (): React.ReactElement => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginForm>();

  const { setUser } = useUser();

  const loginMutation = useMutation(async (loginData: LoginForm) => {
    const response = await instance.get("/user");

    const user = response.data.find(
      ({ username, password }: LoginForm) =>
        username === loginData.username && password === loginData.password
    );

    if (user) {
      setUser(user);
      navigate(HOME.path);
      toast.success("Successfully Logged in");
    } else {
      throw new Error("Username or password is not correct");
    }
  });

  const onSubmit = async (formData: LoginForm): Promise<void> => {
    loginMutation.mutate(formData);
  };

  return (
    <Form
      title={LOGIN.name}
      actionText="Not a member ?"
      actionConfig={REGISTER}
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
    </Form>
  );
};

export default LoginView;
