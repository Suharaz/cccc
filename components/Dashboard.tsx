import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Container, TrendingUp, TrendingDown, Package, Anchor, Globe, DollarSign } from 'lucide-react';

// Mock Data relevant to Global Ex trading
const dataExports = [
  { month: 'Jan', tons: 420 },
  { month: 'Feb', tons: 450 },
  { month: 'Mar', tons: 410 },
  { month: 'Apr', tons: 480 },
  { month: 'May', tons: 520 },
  { month: 'Jun', tons: 560 },
  { month: 'Jul', tons: 590 },
];

const dataProductMix = [
  { name: 'Coffee Wood', value: 35, color: '#10b981' }, // emerald-500
  { name: 'Eucalyptus', value: 25, color: '#3b82f6' }, // blue-500
  { name: 'Ko Nia', value: 20, color: '#f59e0b' },     // amber-500
  { name: 'Sawdust', value: 20, color: '#8b5cf6' },    // violet-500
];

const StatCard = ({ title, value, change, icon, type = 'neutral' }: { title: string, value: string, change: string, icon: React.ReactNode, type?: 'positive' | 'negative' | 'neutral' }) => (
  <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-base font-medium text-zinc-400">{title}</p>
        <h3 className="mt-3 text-4xl font-bold text-white">{value}</h3>
      </div>
      <div className={`p-4 rounded-xl ${
        'bg-zinc-800 text-emerald-500'
      }`}>
        {icon}
      </div>
    </div>
    <div className="mt-6 flex items-center">
      {type === 'positive' && <TrendingUp className="h-5 w-5 text-emerald-500 mr-2" />}
      {type === 'negative' && <TrendingDown className="h-5 w-5 text-rose-500 mr-2" />}
      {type === 'neutral' && <TrendingUp className="h-5 w-5 text-zinc-400 mr-2" />}
      <span className={`text-base font-medium ${
        type === 'positive' ? 'text-emerald-500' :
        type === 'negative' ? 'text-rose-500' :
        'text-zinc-400'
      }`}>
        {change}
      </span>
      <span className="text-base text-zinc-500 ml-3">vs last month</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-zinc-950 min-h-screen">
      
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold text-white">Trading Performance</h2>
        <p className="mt-3 text-xl text-zinc-400">Real-time export data and logistics overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard 
          title="Total Exports" 
          value="3,450 T" 
          change="+12.5%" 
          icon={<Package size={28} />} 
          type="positive"
        />
        <StatCard 
          title="Active Shipments" 
          value="24" 
          change="+2" 
          icon={<Anchor size={28} />} 
          type="positive"
        />
        <StatCard 
          title="Global Partners" 
          value="48" 
          change="+3" 
          icon={<Globe size={28} />} 
          type="positive"
        />
        <StatCard 
          title="Revenue (Est)" 
          value="$1.2M" 
          change="+8.2%" 
          icon={<DollarSign size={28} />} 
          type="positive"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Export Volume Trend */}
        <div className="lg:col-span-2 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Monthly Export Volume</h3>
              <p className="text-base text-zinc-400 mt-1">Metric tons per month</p>
            </div>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataExports} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorExports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 14 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 14 }} domain={['auto', 'auto']} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: '1px solid #27272a', color: '#fff', fontSize: '14px' }}
                />
                <Area type="monotone" dataKey="tons" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorExports)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Mix */}
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Product Distribution</h3>
            <p className="text-base text-zinc-400 mt-1">Export share by wood type</p>
          </div>
          <div className="h-72 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataProductMix}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataProductMix.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: '1px solid #27272a', color: '#fff', fontSize: '14px' }} />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-bold text-white">100%</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {dataProductMix.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-base">
                <div className="flex items-center">
                  <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></span>
                  <span className="text-zinc-300">{item.name}</span>
                </div>
                <span className="font-semibold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;