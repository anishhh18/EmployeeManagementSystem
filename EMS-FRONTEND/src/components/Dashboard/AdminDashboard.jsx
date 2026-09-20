import AllTasks from "../../others/AllTasks";
import CreateTask from "../../Others/CreateTask";
import Header from "../../others/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-15 ">
      <Header/>
      <CreateTask/>
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
