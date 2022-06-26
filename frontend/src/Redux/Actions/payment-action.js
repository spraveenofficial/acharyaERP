import axios from "axios";
import baseUrl from "../../Utils/baseurl";
import { headerConfig } from "../../Utils/headerConfig";

export const initPayment = async (payload) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${baseUrl}/payment/init`,
      headers: headerConfig(),
      data: payload,
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
