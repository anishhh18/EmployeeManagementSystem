const CreateTask = () => {
  return (
    <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8">
      <form className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="task-title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Task title
            </label>

            <input
              id="task-title"
              type="text"
              placeholder="Make a UI design"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="task-date"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Date
            </label>

            <input
              id="task-date"
              type="date"
              className="scheme-dark w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="assigned-to"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Assign to
            </label>

            <input
              id="assigned-to"
              type="text"
              placeholder="Assign to?"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Category
            </label>

            <input
              id="category"
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Description
          </label>

          <textarea
            id="description"
            rows={8}
            placeholder="Add a short description..."
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />

          <button
            type="submit"
            className="mt-5 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 active:scale-[0.98]"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;