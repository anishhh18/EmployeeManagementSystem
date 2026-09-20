const TaskList = () => {
  return (
    <div id="taskList" className="h-[50%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto p-3">
      <div className="h-full w-75 bg-red-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 bg-red-500 rounded text-sm">High</h3>
          <h4 className="text-sm">20 sept 2026</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video </h2>
        <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?</p>
      </div>
      <div className="h-full w-75 bg-blue-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 bg-blue-500 rounded text-sm">High</h3>
          <h4 className="text-sm">20 sept 2026</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video </h2>
        <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?</p>
      </div>
      <div className="h-full w-75 bg-green-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 bg-green-500 rounded text-sm">High</h3>
          <h4 className="text-sm">20 sept 2026</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video </h2>
        <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?</p>
      </div>
      <div className="h-full w-75 bg-yellow-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="px-3 py-1 bg-yellow-500 rounded text-sm">High</h3>
          <h4 className="text-sm">20 sept 2026</h4>
        </div>
        <h2 className=" mt-5 text-2xl font-semibold">Make a youtube video </h2>
        <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt inventore, sed quod vero dolorum?</p>
      </div>
    </div>
  )
}
export default TaskList
