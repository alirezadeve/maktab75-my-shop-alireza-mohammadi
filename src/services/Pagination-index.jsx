import axios from "axios";

const service = {
  getData: (from, to) => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default service;
