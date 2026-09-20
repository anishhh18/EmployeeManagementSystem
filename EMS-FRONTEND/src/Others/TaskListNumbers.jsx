const TaskListNumbers = () => {
  const taskCards = [
    {
      count: 0,
      label: "New Task",
      color: "border-red-500/40 bg-red-500/10 text-red-400",
    },
    {
      count: 0,
      label: "New Task",
      color: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    },
    {
      count: 0,
      label: "New Task",
      color: "border-green-500/40 bg-green-500/10 text-green-400",
    },
    {
      count: 0,
      label: "New Task",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {taskCards.map((task, index) => (
        <div
          key={index}
          className={`rounded-xl border p-6 shadow-lg transition hover:-translate-y-1 ${task.color}`}
        >
          <h2 className="text-4xl font-bold text-white">{task.count}</h2>
          <h3 className="mt-2 text-base font-medium text-slate-300">
            {task.label}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;