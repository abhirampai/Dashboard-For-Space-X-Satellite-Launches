import { useEffect, useState } from "react";
import { launches } from "./api/launches";
import Filters from "./common/Filters";
import Header from "./common/Header";
import DashboardTable from "./dashboardtable";
import { filterByStatus, getServerDate } from "./utils";

const Main = () => {
  const [launchList, setLaunchList] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All launches");
  const [filteredLaunchList, setFilteredLaunchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { offset } = getServerDate();
  const fetchAllLaunches = async () => {
    try {
      const { data } = await launches.list();
      setLaunchList(data);
      setFilteredLaunchList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllLaunches();
  }, []);

  useEffect(() => {
    setFilteredLaunchList(filterByStatus(statusFilter, launchList));
  }, [statusFilter, launchList]);

  return (
    <>
      <Header />
      <div className="px-32 mt-5 space-y-4">
        <Filters
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <DashboardTable launchList={filteredLaunchList} loading={loading} />
      </div>
      {console.log(new Date(Date.now() + offset))}
    </>
  );
};

export default Main;
