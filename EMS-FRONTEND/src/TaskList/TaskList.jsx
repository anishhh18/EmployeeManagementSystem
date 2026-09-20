const TaskList = () => {
  const tasks = [
    {
      priority: "High",
      date: "20 Sept 2026",
      title: "Make a YouTube video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?",
      styles: "border-red-500/40 bg-red-500/10 text-red-400",
    },
    {
      priority: "High",
      date: "20 Sept 2026",
      title: "Make a YouTube video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?",
      styles: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    },
    {
      priority: "High",
      date: "20 Sept 2026",
      title: "Make a YouTube video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?",
      styles: "border-green-500/40 bg-green-500/10 text-green-400",
    },
    {
      priority: "High",
      date: "20 Sept 2026",
      title: "Make a YouTube video",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?",
      styles: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    },
  ];

  return (
    <div
      id="taskList"
      className="mt-10 flex min-h-65 w-full gap-5 overflow-x-auto pb-4"
    >
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex w-80 shrink-0 flex-col rounded-xl border bg-slate-900 p-5 shadow-lg transition hover:-translate-y-1 ${task.styles}`}
        >
          <div className="flex items-center justify-between gap-3">
            <h3
              className={`rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide ${task.styles}`}
            >
              {task.priority}
            </h3>

            <h4 className="text-xs text-slate-400">{task.date}</h4>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-white">
            {task.title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {task.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;