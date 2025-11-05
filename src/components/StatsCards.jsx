import React from 'react';
import { BarChart3, Briefcase, Users, CheckCircle2, AlertTriangle } from 'lucide-react';

const cards = [
  {
    title: 'Proyek Aktif',
    value: '18',
    change: '+3 bulan ini',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Tim Terlibat',
    value: '42',
    change: '8 arsitek • 12 mandor',
    icon: Users,
    color: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Progress Rata-rata',
    value: '67%',
    change: 'naik 5% vs bulan lalu',
    icon: BarChart3,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Issue Terbuka',
    value: '5',
    change: '2 risiko tinggi',
    icon: AlertTriangle,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ title, value, change, icon: Icon, color }) => (
        <div key={title} className="p-4 rounded-xl bg-white border border-slate-200">
          <div className="flex items-center justify-between">
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center`}>
              <Icon size={18} />
            </div>
            <CheckCircle2 className="text-emerald-500" size={18} />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500">{title}</p>
            <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{change}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
