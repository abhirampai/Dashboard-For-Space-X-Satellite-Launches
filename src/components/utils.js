export const filterByStatus = (status, launches) => {
  switch (status) {
    case "All launches":
      return launches;
    case "Upcoming launches":
      return launches.filter((launch) => launch.upcoming);
    case "Failed launches":
      return launches.filter(
        (launch) => !launch.launch_success && !launch.upcoming
      );
    case "Successful launches":
      return launches.filter((launch) => launch.launch_success);
    default:
      return launches;
  }
};

const fetchSampleImplementation = async () => {
  const requestDate = new Date();

  const { headers, ok, statusText } = await fetch(window.location, {
    cache: `no-store`,
    method: `HEAD`,
  });

  if (!ok) {
    throw new Error(`Bad date sample from server: ${statusText}`);
  }

  return {
    requestDate,
    responseDate: new Date(),
    serverDate: new Date(headers.get(`Date`)),
  };
};

export const getServerDate = async (
  { fetchSample } = { fetchSample: fetchSampleImplementation }
) => {
  let best = { uncertainty: Number.MAX_VALUE };

  // Fetch 10 samples to increase the chance of getting one with low
  // uncertainty.
  for (let index = 0; index < 10; index++) {
    try {
      const { requestDate, responseDate, serverDate } = await fetchSample();

      // We don't get milliseconds back from the Date header so there's
      // uncertainty of at least half a second in either direction.
      const uncertainty = (responseDate - requestDate) / 2 + 500;

      if (uncertainty < best.uncertainty) {
        const date = new Date(serverDate.getTime() + 500);

        best = {
          date,
          offset: date - responseDate,
          uncertainty,
        };
      }
    } catch (exception) {
      // eslint-disable-next-line no-console
      console.warn(exception);
    }
  }

  return best;
};

