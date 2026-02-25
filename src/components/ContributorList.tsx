import type { Contributor } from '../types/github'

interface ContributorListProps {
  contributors: Contributor[]
}

export default function ContributorList({ contributors }: ContributorListProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Top Contributors</h3>
      <div className="space-y-3">
        {contributors.map((contributor) => (
          <div 
            key={contributor.login}
            className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <img 
              src={contributor.avatar_url} 
              alt={contributor.login}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <a 
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-400 hover:text-blue-300"
              >
                {contributor.login}
              </a>
              <p className="text-sm text-gray-400">
                {contributor.contributions.toLocaleString()} contributions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}