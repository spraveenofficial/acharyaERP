const Developers = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container p-10 mobile:p-4 mx-auto">
        <div className="desktop:flex desktop:items-center desktop:-mx-4">
          <div className="desktop:w-1/2 xl:mx-4 desktop:justify-start">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Team
            </h1>
            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 desktop:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Praveen Kumar Singh
              </h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Full stack developer (MERN Stack), Final Year Graduate.
              </p>
            </div>
            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Mia
              </h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Graphic Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Developers };
