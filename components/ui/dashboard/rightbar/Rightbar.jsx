import { MdPlayCircleFilled, MdReadMore, MdFlashOn, MdRocketLaunch } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="sticky top-6 flex flex-col gap-6">
      
      {/* Item 1 */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-sm overflow-hidden">
        <div className="relative z-10 flex flex-col gap-4">
          <span className="flex items-center gap-1 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <MdFlashOn size={16} /> Available Now
          </span>
          <h3 className="text-white font-bold text-lg leading-tight">
            Master the new Analytics Engine with our Quick Start Guide
          </h3>
          <span className="text-slate-400 text-xs font-medium">
            ⏱️ 4 minute walkthrough
          </span>
          <p className="text-slate-300 text-sm leading-relaxed">
            Learn how to build custom reports and export real-time data using our updated filtering system.
          </p>
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors w-max">
            <MdPlayCircleFilled size={20} />
            Watch Tutorial
          </button>
        </div>
      </div>

      {/* Item 2 */}
      <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm">
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-1 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <MdRocketLaunch size={16} /> Feature Update
          </span>
          <h3 className="text-slate-800 font-bold text-lg leading-tight">
            Automated Backups & Advanced Security Protocols
          </h3>
          <span className="text-slate-500 text-xs font-medium">
            Boost system reliability
          </span>
          <p className="text-slate-500 text-sm leading-relaxed">
            We've integrated daily snapshots and multi-factor authentication for all administrative accounts.
          </p>
          <button className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors w-max">
            <MdReadMore size={20} />
            Read Docs
          </button>
        </div>
      </div>

    </div>
  );
};

export default Rightbar;
