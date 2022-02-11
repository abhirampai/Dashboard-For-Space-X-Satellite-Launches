import Filters from "./common/Filters";
import Header from "./common/Header";
import DashboardTable from "./dashboardtable";

const Main = () => {
  return (
    <>
      <Header />
      <div className="px-32 mt-5 space-y-4">
        <Filters />
        <DashboardTable />
      </div>
    </>
  );
};

export default Main;
