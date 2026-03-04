import { useState } from 'react'
import { getContributors, getLanguages, getRepository, getCommitActivity } from './services/githubAPI'
import type { CommitActivity, Contributor, Languages, Repository } from './types/github'
import RepoSearch from './components/RepoSearch'
import RepoOverview from './components/RepoOverview'
import LoadingSpinner from './components/LoadingSpinner'
import LanguageChart from './components/LanguageChart'
import ContributorList from './components/ContributorList'
import CommitChart from './components/CommitChart'



function App() {
  const [repo, setRepo] = useState<Repository | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [languages, setLanguages] = useState<Languages | null>(null)
  const [contributors, setContributors] = useState<Contributor[] | null>(null)
  const [commitActivity, setCommitActivity] = useState<CommitActivity[] | null>(null)

  const handleSearch = async (owner: string, repo: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const data = await getRepository(owner, repo)
      setRepo(data)

      const languages = await getLanguages(owner, repo)
      setLanguages(languages)

      const contributors = await getContributors(owner, repo)
      setContributors(contributors)

      const commitActivity = await getCommitActivity(owner, repo)
      setCommitActivity(commitActivity)
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
      
      {loading && <LoadingSpinner />}
      
      {error && <div className="text-center text-red-400">{error}</div>}
      
      {repo && <RepoOverview repo={repo} />}
      {languages && <LanguageChart languages={languages} />}
      {contributors && <ContributorList contributors={contributors} />}
      {commitActivity && <CommitChart commitActivity={commitActivity} />}
    </div>
  )
}

export default App