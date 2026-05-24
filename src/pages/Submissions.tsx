import { CheckCircle2, XCircle, Clock } from 'lucide-react';

const submissions = [
  { id: '98412', user: 'student_01', problemId: '1000', problemTitle: 'A+B Problem', language: 'C++17', status: 'Accepted', time: '12ms', mem: '3.4MB', date: '2 mins ago' },
  { id: '98411', user: 'student_01', problemId: '1004', problemTitle: 'Traveling Salesman', language: 'Python 3', status: 'Time Limit Exceeded', time: '2001ms', mem: '14.2MB', date: '15 mins ago' },
  { id: '98410', user: 'student_42', problemId: '1002', problemTitle: 'Shortest Path', language: 'Java', status: 'Wrong Answer', time: '45ms', mem: '21.0MB', date: '1 hour ago' },
  { id: '98409', user: 'student_01', problemId: '1000', problemTitle: 'A+B Problem', language: 'C++17', status: 'Compilation Error', time: '-', mem: '-', date: '1 hour ago' },
  { id: '98408', user: 'student_19', problemId: '1001', problemTitle: 'Reverse String', language: 'Python 3', status: 'Accepted', time: '34ms', mem: '6.8MB', date: '2 hours ago' },
];

export default function Submissions() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-zinc-800 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Recent Submissions</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Live feed of code submissions across all problems.</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-800">
          <thead className="bg-gray-50 dark:bg-zinc-800/50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6 w-24">ID</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">When</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">User</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Problem</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-32">Lang</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Status</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Time/Mem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-mono text-blue-600 dark:text-blue-500 sm:pl-6 cursor-pointer hover:underline">
                  #{sub.id}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {sub.date}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  {sub.user}
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                  <span className="font-mono text-gray-500 dark:text-gray-400 mr-2">{sub.problemId}</span>
                  <span className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">{sub.problemTitle}</span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {sub.language}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                  {sub.status === 'Accepted' && <span className="text-green-600 dark:text-green-500 flex items-center gap-1"><CheckCircle2 className="h-4 w-4"/> {sub.status}</span>}
                  {sub.status === 'Wrong Answer' && <span className="text-red-600 dark:text-red-500 flex items-center gap-1"><XCircle className="h-4 w-4"/> {sub.status}</span>}
                  {sub.status === 'Time Limit Exceeded' && <span className="text-orange-600 dark:text-orange-500 flex items-center gap-1"><Clock className="h-4 w-4"/> {sub.status}</span>}
                  {sub.status === 'Compilation Error' && <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1"><XCircle className="h-4 w-4"/> {sub.status}</span>}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {sub.time} / {sub.mem}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
