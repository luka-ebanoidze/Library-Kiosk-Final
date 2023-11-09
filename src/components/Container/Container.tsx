interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): React.ReactElement => (
  <div className="w-full max-lg flex justify-center flex-wrap gap-10">
    {children}
  </div>
);

export default Container;
