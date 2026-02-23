import axios from 'axios'
import type { Repository, CommitActivity, Contributor, Languages } from '../types/github'

const GITHUB_API_BASE = 'https://api.github.com'

export async function getRepository(owner: string, repo: string): Promise<Repository> {
  const response = await axios.get<Repository>(`${GITHUB_API_BASE}/repos/${owner}/${repo}`)
  return response.data
}

export async function getCommitActivity(owner: string, repo: string): Promise<CommitActivity[]> {
  const response = await axios.get<CommitActivity[]>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/stats/commit_activity`
  )
  return response.data
}

export async function getLanguages(owner: string, repo: string): Promise<Languages> {
  const response = await axios.get<Languages>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`)
  return response.data
}

export async function getContributors(owner: string, repo: string): Promise<Contributor[]> {
  const response = await axios.get<Contributor[]>(
    `${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors?per_page=10`
  )
  return response.data
}