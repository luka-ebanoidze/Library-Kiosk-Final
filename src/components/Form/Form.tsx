import LinkButton from "../../components/LinkButton";

interface ActionConfig {
  name: string;
  path: string;
}

interface AuthFormProps {
  title: string;
  onSubmit: (_: any) => any;
  children?: React.ReactNode;
  actionText?: string;
  actionConfig?: ActionConfig;
}

const Form = ({
  title,
  onSubmit,
  children,
  actionText,
  actionConfig,
}: AuthFormProps): React.ReactElement => (
  <div className="min-w-[300px] max-w-[900px] mx-4 w-full flex justify-center">
    <form
      className="w-2/4 h-[500px] bg-primary flex flex-col items-center justify-around px-20 border-secondary border-4 rounded-3xl max-2xl:w-3/4  max-md:w-[350px] max-md:px-10 max-sm:px-5 max-sm:w-[300px] max-s1:px-1 max-s1:w-full max-s1:h-[450px] max-s1:rounded-none max-s1:border-x-0"
      onSubmit={onSubmit}
    >
      <p className="w-full flex justify-center font-bold text-white text-3xl">
        {title}
      </p>
      <div className="w-full min-w-[300px] flex flex-col gap-2">{children}</div>
      <button
        className="border-[#c98444] bg-white px-20 py-5 rounded-[50px] text-[#F6A04F] font-bold border-[5px] hover:bg-white hover:text-[#c98444] max-s1:px-10"
        type="submit"
      >
        Submit
      </button>
      {actionConfig && (
        <div className="flex justify-center mt-5 gap-5 max-s2:flex-col max-s2:text-center">
          <p>{actionText}</p>
          <LinkButton
            className="text-blue font-bold hover:cursor-pointer hover:text-[#5f5fe2]"
            path={actionConfig.path}
          >
            {actionConfig.name}
          </LinkButton>
        </div>
      )}
    </form>
  </div>
);

export default Form;
