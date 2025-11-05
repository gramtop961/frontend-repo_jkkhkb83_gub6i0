import React from 'react';
import { LayoutDashboard, Briefcase, Users, Calendar, Settings, Building2, Wrench, FileText } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Projects', icon: Briefcase },
  { label: 'Clients', icon: Users },
  { label: 'Calendar', icon: Calendar },
  { label: 'Documents', icon: FileText },
  { label: 'Resources', icon: Wrench },
  { label: 'Company', icon: Building2 },
  { label: 'Settings', icon: Settings },
];

export default function SidebarNav({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={`fixed z-50 inset-y-0 left-0 w-72 bg-white border-r border-slate-200 shadow-sm transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:z-auto ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center gap-2 px-5 border-b border-slate-200">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500" />
          <div className="flex flex-col">
            <span className="text-slate-900 font-semibold leading-tight">Rumah Arsitek</span>
            <span className="text-xs text-slate-500">ERP Konstruksi</span>
          </div>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}

          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <p className="text-sm font-medium text-emerald-700">Pro Tip</p>
            <p className="mt-1 text-xs text-emerald-700/80">
              Atur proyek, tim, dan dokumen dalam satu tempat. Tingkatkan visibilitas dan kontrol biaya.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}
