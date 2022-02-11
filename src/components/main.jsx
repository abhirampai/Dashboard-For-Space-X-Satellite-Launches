import Filters from "./common/Filters";
import Header from "./common/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="w-11/12 px-32 mt-5">
        <Filters />
      </div>
    </>
  );
};

export default Main;
