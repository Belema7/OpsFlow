const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-8 p-6 dark:bg-(--color-soft) dark:text-(--color-text) rounded-xl shadow-sm text-slate-500">
      <div className="font-bold dark:text-(--color-text) tracking-tight">
        Belema <span className="text-blue-600">(Admin)</span>
      </div>
      <div className="text-xs md:text-sm font-medium">
        Built by <span className="text-slate-800 dark:text-gray-300">Belema</span> using
        <span className="text-sky-500 mx-1">Next.js</span> &
        <span className="text-teal-500 ml-1">Tailwind CSS</span>
        <span className="ml-2">© All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
