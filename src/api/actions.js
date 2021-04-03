import { mainInstance } from ".";

const actions = {
  initial: () =>
    mainInstance
      .get("/")
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  filter: (year, launch, land) =>
    mainInstance
      .get("/", {
        params: {
          launch_year: year,
          launch_success: launch,
          land_success: land,
        },
      })
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
};

export default actions;
