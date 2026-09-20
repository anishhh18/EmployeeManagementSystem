const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5  mt-10">
      <div className="py-9 px-9 rounded-xl w-[45%] bg-red-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="py-9 px-9 rounded-xl w-[45%] bg-blue-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="py-9 px-9 rounded-xl w-[45%] bg-green-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="py-9 px-9 rounded-xl w-[45%] bg-yellow-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
