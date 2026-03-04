import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import type { CommitActivity } from '../types/github'

interface CommitChartProps {
  commitActivity: CommitActivity[]
}

export default function CommitChart({ commitActivity }: CommitChartProps) {
  // Transform data for Recharts
  const chartData = commitActivity.map((week, index) => ({
    week: index,  // Just use week number (0-51)
    commits: week.total
  }))

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Commit Activity (Last 52 Weeks)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="week" 
            stroke="#9CA3AF"
            label={{ value: 'Week', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }}
          />
          <YAxis 
            stroke="#9CA3AF"
            label={{ value: 'Commits', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
            labelStyle={{ color: '#9CA3AF' }}
          />
          <Line 
            type="monotone" 
            dataKey="commits" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}