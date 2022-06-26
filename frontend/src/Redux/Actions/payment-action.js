import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import { headerConfig } from "../../Utils/headerConfig";

export const initPayment = async (params) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/payment/init`,
      headers: headerConfig(),
      params: params,
    });
    console.log(data);
    if (!data.success) {
      return data.message;
    }
    return data.data;
  } catch (error) {
    return error.message;
  }
};
