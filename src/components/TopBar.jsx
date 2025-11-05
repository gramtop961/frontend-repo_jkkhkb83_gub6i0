import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

export default function TopBar({ onMenu }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50"
          onClick={onMenu}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <div className="hidden md:flex items-center gap-2 text-slate-900 font-semibold">
          <span>Dashboard</span>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-4 hidden md:block">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            className="w-full pl-9 pr-3 h-10 rounded-lg border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            placeholder="Cari proyek, klien, atau dokumen..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] px-1 rounded-full bg-emerald-500 text-white text-[10px] leading-5 text-center">3</span>
        </button>
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white grid place-items-center font-semibold">
          RA
        </div>
      </div>
    </header>
  );
}
