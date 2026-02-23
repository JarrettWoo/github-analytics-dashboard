export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    language: string | null;
    owner: {
        login: string;
        avatar_url: string;
    };
    
}
    export interface CommitActivity {
        total: number;
        week: number;
        days: number[];
    }

    export interface Contributor {
        login: string;
        avatar_url: string;
        contributions: number;
        html_url: string;
    }
    export type Languages = Record<string, number>;