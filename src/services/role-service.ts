import axios from "axios";

const GetRoles = async () => {
  const url = `${process.env.DEV_LOCAL}/api/v1/roles`;
  const { data } = await axios.get(url);
  return data;
};

export { GetRoles };
