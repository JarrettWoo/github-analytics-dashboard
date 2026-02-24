import type { Repository } from '../types/github'

interface RepoOverviewProps {
  repo: Repository
}

export default function RepoOverview({ repo }: RepoOverviewProps) {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-2">{repo.full_name}</h2>
      <p className="text-gray-300 mb-4">{repo.description}</p>
      <div className="flex gap-6">
        <div>⭐ {repo.stargazers_count.toLocaleString()}</div>
        <div>🍴 {repo.forks_count.toLocaleString()}</div>
        <div>👀 {repo.watchers_count.toLocaleString()}</div>
        <div>🐛 {repo.open_issues_count.toLocaleString()} issues</div>
      </div>
    </div>
  )
}