import { useFormik } from "formik";
import { EmailIcon, PasswordIcon, Buttons, Input } from "../../Components";
const Login = () => {
  const loading = false;
  const formik = useFormik({
    initialValues: {
      auid: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.auid) {
        errors.auid = "Valid AUID is required";
      } else if (values.auid.length < 5) {
        errors.auid = "Enter valid AUID";
      }
      if (!values.password) {
        errors.password = "Valid password is required";
      } else if (values.password.length < 5) {
        errors.password = "Password must contain at least 6 characters.";
      }
      return errors;
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
          {formik.touched.auid && formik.errors.auid ? (
            <p className="text-white font-semibold mt-2 mb-2 bg-red-600 p-2 rounded-xl">{formik.errors.auid}</p>
          ) : null}
          {formik.touched.password && formik.errors.password ? (
            <p className="mb-3 text-white font-semibold bg-red-600 p-2 rounded-xl">{formik.errors.password}</p>
          ) : null}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <EmailIcon />
            <Input
              type="auid"
              name="auid"
              onChange={formik.handleChange}
              value={formik.values.auid}
              onBlur={formik.handleBlur}
              placeholder="Enter AUID"
              autoComplete="off"
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
              autoComplete="off"
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
