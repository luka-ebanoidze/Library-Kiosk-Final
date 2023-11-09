interface FormInputProps {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  min?: string | number;
  register: any;
  onKeyDown?: (_: any) => any;
  onInput?: (_: any) => any;
}

const Input = ({
  name,
  label,
  register,
  type = "text",
  placeholder = "",
  min = 0,
}: FormInputProps): React.ReactElement => {
  return (
    <div className="max-md:w-full mx-4 py-2 flex flex-col">
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
      <input
        className="px-2 py-2 max-md:w-[250px] flex justify-center border-[#c98444] border-[1px] focus:outline-none md:max-md:w-full"
        id={name}
        type={type}
        min={min}
        placeholder={placeholder}
        {...register}
        required
      />
    </div>
  );
};

export default Input;
