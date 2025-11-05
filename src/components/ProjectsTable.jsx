import React from 'react';

const projects = [
  {
    name: 'Renovasi Vila Pantai',
    client: 'PT Nusantara Indah',
    budget: 'Rp 2,1 M',
    progress: 78,
    status: 'On Track',
  },
  {
    name: 'Perumahan Taman Asri',
    client: 'CV Sejahtera Abadi',
    budget: 'Rp 5,4 M',
    progress: 52,
    status: 'Delay',
  },
  {
    name: 'Kantor Pusat Fintech',
    client: 'TechNova',
    budget: 'Rp 8,8 M',
    progress: 36,
    status: 'Risk',
  },
  {
    name: 'Cafe Minimalis',
    client: 'Kopi Karya',
    budget: 'Rp 680 Jt',
    progress: 92,
    status: 'On Track',
  },
];

function StatusBadge({ status }) {
  const map = {
    'On Track': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Delay: 'bg-amber-50 text-amber-700 border-amber-200',
    Risk: 'bg-rose-50 text-rose-700 border-rose-200',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs border ${map[status]}`}>{status}</span>
  );
}

export default function ProjectsTable() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-slate-900">Proyek Berjalan</h3>
        <p className="text-xs text-slate-500 mt-1">Ringkasan status proyek prioritas</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-xs text-slate-500 bg-slate-50">
              <th className="px-4 py-3 font-medium">Proyek</th>
              <th className="px-4 py-3 font-medium">Klien</th>
              <th className="px-4 py-3 font-medium">Anggaran</th>
              <th className="px-4 py-3 font-medium">Progress</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {projects.map((p) => (
              <tr key={p.name} className="border-t border-slate-100 hover:bg-slate-50/50">
                <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                <td className="px-4 py-3">{p.client}</td>
                <td className="px-4 py-3">{p.budget}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-36 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-emerald-500" style={{ width: `${p.progress}%` }} />
                    </div>
                    <span className="text-xs text-slate-500">{p.progress}%</span>
                  </div>
                </td>
                <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
