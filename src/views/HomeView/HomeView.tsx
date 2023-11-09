import { AiFillBook } from "react-icons/ai";
import { ROUTES_CONFIG } from "../../config/routes";
import LinkButton from "../../components/LinkButton";

const { BORROW_BOOK, RETURN_BOOK } = ROUTES_CONFIG;

const className =
  "py-6 px-20 bg-primary border-secondary border-4 text-white text-xl text-center rounded-3xl hover:bg-white hover:text-secondary";

const HomeView = () => (
  <div className="flex flex-col items-center gap-20">
    <div className="flex justify-center items-center">
      <h1 className="text:lg font-bold tracking-widest sm:text-2xl md:text-4xl">
        Welcome to Library Kiosk
      </h1>
      <AiFillBook
        size={50}
        style={{
          color: "orange",
        }}
      />
    </div>
    <LinkButton path={BORROW_BOOK.path} className={className}>
      {BORROW_BOOK.name}
    </LinkButton>
    <LinkButton path={RETURN_BOOK.path} className={className}>
      {RETURN_BOOK.name}
    </LinkButton>
  </div>
);

export default HomeView;
