const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center text-light bg-byour">
        <div className="mb-5 pb-5">
          <h1 className="text-center">Todo List</h1>
          <div className="d-flex flex-column jsutify-content-center align-items-center gap-2">
            {/* start input Todo */}
            <div className="d-flex flex-row gap-1">
              <input></input>
              <button>Add</button>
            </div>
            {/* end input Todo */}
            <div className="d-flex flex-row gap-1">
              <li>Membuat Aplikasi</li>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
