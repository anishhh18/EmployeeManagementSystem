const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello! <br/> <span className="text-3xl font-semibold ">Anish 😎</span></h1>
      <button className="bg-red-600 text-white px-3 py-1 rounded-sm cursor-pointer text-lg font-medium">Logout</button>
    </div>
  )
}

export default Header
