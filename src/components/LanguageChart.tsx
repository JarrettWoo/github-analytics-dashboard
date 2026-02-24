import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import type { Languages } from '../types/github'

interface LanguageChartProps {
  languages: Languages
}

export default function LanguageChart({ languages }: LanguageChartProps) {
  // Transform the languages object into chart data
  const chartData = Object.entries(languages).map(([name, value]) => ({
    name,
    value,
  }))

  // Define colors for the pie slices
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Languages</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            // labelLine={false}
            // label={({ name, percent }) => `${name} ${(percent || 0 * 100).toFixed(1)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}