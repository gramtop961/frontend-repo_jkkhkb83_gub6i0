import React, { useState } from 'react';
import SidebarNav from './components/SidebarNav.jsx';
import TopBar from './components/TopBar.jsx';
import StatsCards from './components/StatsCards.jsx';
import ProjectsTable from './components/ProjectsTable.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <SidebarNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 md:ml-72">
          <TopBar onMenu={() => setSidebarOpen(true)} />

          <main className="p-4 md:p-6 space-y-6">
            {/* Welcome banner */}
            <section className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-semibold text-emerald-900">
                  Selamat datang di ERP Rumah Arsitek
                </h2>
                <p className="text-sm md:text-base text-emerald-800/80 mt-1">
                  Kelola proyek konstruksi, tim, anggaran, dan dokumen secara terpadu dalam satu dashboard.
                </p>
              </div>
              <div className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
            </section>

            <StatsCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ProjectsTable />
              </div>

              <section className="bg-white border border-slate-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-slate-900">Aktivitas Terbaru</h3>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-slate-700">RAB proyek Perumahan Taman Asri disetujui.</p>
                      <p className="text-xs text-slate-500">2 jam lalu</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <div>
                      <p className="text-slate-700">Penjadwalan survey site ditambahkan untuk Sabtu, 10.00.</p>
                      <p className="text-xs text-slate-500">Kemarin</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                    <div>
                      <p className="text-slate-700">Issue material semen keterlambatan 3 hari.</p>
                      <p className="text-xs text-slate-500">3 hari lalu</p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
