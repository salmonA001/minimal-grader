import { CheckCircle2, Circle, Clock } from 'lucide-react';

const problems = [
  { id: '1000', title: 'A+B Problem', difficulty: 'Easy', status: 'solved', successRate: '98%', tags: ['Math', 'Implementation'] },
  { id: '1001', title: 'Reverse String', difficulty: 'Easy', status: 'unsolved', successRate: '85%', tags: ['String'] },
  { id: '1002', title: 'Shortest Path', difficulty: 'Medium', status: 'attempted', successRate: '42%', tags: ['Graph', 'Dijkstra'] },
  { id: '1003', title: 'Maximum Subarray', difficulty: 'Medium', status: 'unsolved', successRate: '55%', tags: ['DP', 'Divide and Conquer'] },
  { id: '1004', title: 'Traveling Salesman', difficulty: 'Hard', status: 'unsolved', successRate: '12%', tags: ['Graph', 'NP-Hard'] },
];

export default function Problemset() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-zinc-800 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Problemset</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Practice your algorithmic skills with these challenges.</p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search problems..."
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-gray-100 dark:bg-zinc-900 ring-1 ring-inset ring-gray-300 dark:ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-800">
          <thead className="bg-gray-50 dark:bg-zinc-800/50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6 w-12">
                Status
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-24">
                ID
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Title
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-32">
                Difficulty
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-32">
                Success
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  {problem.status === 'solved' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {problem.status === 'attempted' && <Clock className="h-5 w-5 text-yellow-500" />}
                  {problem.status === 'unsolved' && <Circle className="h-5 w-5 text-gray-300 dark:text-zinc-700" />}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {problem.id}
                </td>
                <td className="px-3 py-4 text-sm">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{problem.title}</div>
                  <div className="mt-1 flex gap-2">
                    {problem.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                    'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {problem.successRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
