import { useFormik } from "formik";
import {
  EmailIcon,
  PasswordIcon,
  Toast,
  Buttons,
  Input,
} from "../../Components";
const Login = () => {
  const loading = true;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    
  });
  return (
    <div className="h-screen flex mobile:flex-col ">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center mobile:w-full mobile:h-80">
        <div className="mobile: p-10">
          <h1 className="text-white font-bold text-4xl font-inherit">
            Acharya ERP
          </h1>
          <p className="text-white mt-1 w-auto">
            This is the minimal Acharya ERP, where acharyan's can access all the
            perks in there fingertip.
          </p>
          <button className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
            Read More
          </button>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white mobile:w-full">
        <form
          className="bg-white w-80 max-w-sm mobile:max-w-full mobile:p-10 mobile:w-full"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-gray-800 font-bold text-xl mb-1">
            Welcome Acharyan !
          </h1>
          <p className="text-sm font-normal text-gray-600 text-xl mb-5">
            Enter your AUID and password, to get started.
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <EmailIcon />
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Enter AUID"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <PasswordIcon />
            <Input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              id=""
              placeholder="Enter Password"
            />
          </div>
          <Buttons loading={loading} type="submit">
            Login
          </Buttons>
        </form>
      </div>
    </div>
  );
};

export { Login };
