import { Helmet } from "react-helmet";

const Developers = () => {
  return (
    <div className="py-20 dark:bg-[#23314d]">
      <Helmet>
        <title>Developers - Acharya ERP</title>
        <meta name="description" content="This is the developer page." />
      </Helmet>
      <div className="container mx-auto px-6 desktop:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-2xl font-[Acharya-bold] text-gray-900 dark:text-white font-bold desktop:text-4xl">
            Person Behind This Project
          </h2>
          <p className="text-gray-600 lg:w-8/12 lg:mx-auto dark:text-white">
            This project is developed by
            <a
              href="https://github.com/spraveenofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {" "}
              Praveen Kumar Singh{" "}
            </a>
            of AIGS, Bengaluru from department of Computer Application. Who are
            working on the project as a part of their final year project.
          </p>
        </div>
        {/* desktop:grid-cols-3 needs to be added */}
        <div className="grid gap-12 items-center ">
          {/* <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl desktop:w-40 desktop:h-40 lg:w-64 lg:h-64"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
              alt="woman"
              loading="lazy"
              width={640}
              height={805}
            />
            <div>
              <h4 className="text-2xl">Hentoni Doe</h4>
              <span className="block text-sm text-gray-500">CEO-Founder</span>
            </div>
          </div> */}
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl desktop:w-48 desktop:h-64 lg:w-64 lg:h-80"
              src="https://avatars.githubusercontent.com/u/56352591?v=4"
              alt="Praveen Kumar Singh"
              loading="lazy"
              width={1000}
              height={667}
            />
            <div>
              <h4 className="text-2xl">Praveen Kr. Singh</h4>
              <span className="dark:text-white block text-sm text-gray-500">
                SDE - 1 (MERN Stack)
              </span>
            </div>
          </div>
          {/* <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl desktop:w-40 desktop:h-40 lg:w-64 lg:h-64"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
              alt="woman"
              loading="lazy"
              width={1000}
              height={667}
            />
            <div>
              <h4 className="text-2xl">Anabelle Doe</h4>
              <span className="block text-sm text-gray-500">
                Chief Operations Officer
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { Developers };
