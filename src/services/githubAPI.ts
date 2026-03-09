import axios from 'axios'
import type { Repository, CommitActivity, Contributor, Languages } from '../types/github'

const GITHUB_API_BASE = 'https://api.github.com'

// Get GitHub token from environment variable
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

// Create axios config with auth header if token exists
const getConfig = () => {
  if (GITHUB_TOKEN) {
    return {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    }
  }
  return {}
}

export async function getRepository(owner: string, repo: string): Promise<Repository> {
  const response = await axios.get<Repository>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}`,
    getConfig()
  )
  return response.data
}

export async function getCommitActivity(owner: string, repo: string): Promise<CommitActivity[]> {
  const response = await axios.get<CommitActivity[]>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/stats/commit_activity`,
    getConfig()
  )
  return response.data
}

export async function getLanguages(owner: string, repo: string): Promise<Languages> {
  const response = await axios.get<Languages>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
    getConfig()
  )
  return response.data
}

export async function getContributors(owner: string, repo: string): Promise<Contributor[]> {
  const response = await axios.get<Contributor[]>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors?per_page=10`,
    getConfig()
  )
  return response.data
}