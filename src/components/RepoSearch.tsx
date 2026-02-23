import { useState } from "react";

interface RepoSearchProps {
    onSearch: (owner: string, repo: string) => void;
}

export default function RepoSearch({ onSearch }: RepoSearchProps) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const parts = input.trim().split("/");
        if (parts.length === 2) {
            onSearch(parts[0], parts[1]);
        }
    };

    return (<form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter repo (owner/repo)"
                    className="flex-1 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-6 py-3 rounded bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Search
                </button>
            </div>
        </form>)
}