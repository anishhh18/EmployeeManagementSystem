const AllTasks = () => {
  const tasks = [
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-red-500/40 bg-red-500/10 text-red-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-green-500/40 bg-green-500/10 text-green-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-purple-500/40 bg-purple-500/10 text-purple-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    },
    {
      name: "Anish",
      title: "Make a UI",
      status: "status",
      color: "border-purple-500/40 bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <div
      id="taskList"
      className="mt-5 max-h-64 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl"
    >
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 items-center rounded-lg border px-4 py-3 text-sm transition hover:bg-slate-800 ${task.color}`}
          >
            <h2 className="font-semibold text-white">{task.name}</h2>
            <h3 className="text-center text-slate-300">{task.title}</h3>
            <h5 className="text-right text-xs font-medium uppercase tracking-wide">
              {task.status}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;