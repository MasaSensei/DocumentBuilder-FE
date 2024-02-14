import axios from "axios";

const ServiceForgotPassword = async (requsetData: any) => {
  const url = `${process.env.DEV_LOCAL}/api/v1/forgot-password`;
  const { data } = await axios.post(url, requsetData);
  return data;
};

export { ServiceForgotPassword };
