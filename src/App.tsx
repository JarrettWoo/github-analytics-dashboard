import { useEffect, useState } from 'react'
import { getRepository } from './services/githubAPI'
import type { Repository } from './types/github'
import RepoSearch from './components/RepoSearch'

function App() {
  const [repo, setRepo] = useState<Repository | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (owner: string, repo: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const data = await getRepository(owner, repo)
      setRepo(data)
    } catch (err) {
      setError('Repository not found. Please check the owner/repo name.')
      setRepo(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">GitHub Analytics Dashboard</h1>
      
      <RepoSearch onSearch={handleSearch} />
      
      {loading && <div className="text-center">Loading...</div>}
      
      {error && <div className="text-center text-red-400">{error}</div>}
      
      {repo && (
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
      )}
    </div>
  )
}

export default App