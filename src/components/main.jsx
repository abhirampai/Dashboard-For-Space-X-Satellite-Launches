import { useEffect, useState } from "react";
import { launches } from "./api/launches";
import Filters from "./common/Filters";
import Header from "./common/Header";
import DashboardTable from "./dashboardtable";

const Main = () => {
  const [launchList, setLaunchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchAllLaunches = async () => {
    try {
      const { data } = await launches.list();
      setLaunchList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllLaunches();
  }, []);
  return (
    <>
      <Header />
      <div className="px-32 mt-5 space-y-4">
        <Filters />
        <DashboardTable launchList={launchList} loading={loading} />
      </div>
    </>
  );
};

export default Main;
