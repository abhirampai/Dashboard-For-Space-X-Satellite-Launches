export const COLUMNS = [
  {
    Header: "No.",
    accessor: "flight_number",
  },
  {
    Header: "Launched(UTC)",
    accessor: "launch_date_utc",
  },
  {
    Header: "Location",
    accessor: "launch_site.site_name",
  },
  {
    Header: "Mission",
    accessor: "mission_name",
  },
  {
    Header: "Orbit",
    accessor: "rocket.second_stage.payloads[0].orbit",
  },
  {
    Header: "Launch Status",
    accessor: "launch_success_label",
  },
  {
    Header: "Rocket",
    accessor: "rocket.rocket_name",
  },
];

export const predict_success_failure_or_upcoming = (launch) => {
  if (launch.upcoming) {
    return (
      <div class="bg-yellow-300 text-gray-600 px-2 py-1 rounded-xl">
        Upcoming
      </div>
    );
  }
  return launch.launch_success ? (
    <div class="bg-green-300 text-gray-600 px-5 py-1 rounded-xl">Success</div>
  ) : (
    <div class="bg-red-300 text-gray-600 px-5 py-1 rounded-xl">Failed</div>
  );
};
