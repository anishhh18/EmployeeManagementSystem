const Header = () => {
  return (
    <header className="flex items-end justify-between border-b border-slate-800 pb-6">
      <h1 className="text-2xl font-medium leading-tight text-slate-300">
        Hello!
        <br />
        <span className="text-3xl font-semibold text-white">
          Anish 😎
        </span>
      </h1>

      <button
        type="button"
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 active:scale-[0.98]"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;