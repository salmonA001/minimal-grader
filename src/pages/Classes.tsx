import { MoreVertical, Folder } from 'lucide-react';

const classes = [
  { id: 1, name: 'Algorithm Design', code: 'CS301', section: 'Sec 1', instructor: 'Dr. Turing', color: 'bg-blue-600', assignments: 3 },
  { id: 2, name: 'Data Structures', code: 'CS201', section: 'Sec 2', instructor: 'Prof. Lovelace', color: 'bg-indigo-600', assignments: 1 },
  { id: 3, name: 'Competitive Programming', code: 'CP101', section: 'Camp 1', instructor: 'Coach', color: 'bg-emerald-600', assignments: 5 },
];

export default function Classes() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-zinc-800 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Classes</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Courses you are currently enrolled in.</p>
        </div>
        <div className="mt-4 sm:ml-4 sm:mt-0">
          <button type="button" className="inline-flex items-center rounded-md bg-white dark:bg-zinc-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700">
            Join Class
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <div key={cls.id} className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:shadow-md cursor-pointer">
            <div className={`${cls.color} h-24 p-4 text-white flex justify-between items-start`}>
              <div>
                <h3 className="text-lg font-bold hover:underline truncate w-48">{cls.name}</h3>
                <p className="text-sm font-medium opacity-90">{cls.section}</p>
              </div>
              <button className="p-1 hover:bg-black/10 rounded-full transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4 flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">{cls.instructor}</p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
                  <Folder className="h-3 w-3" />
                  {cls.assignments} Active Tasks
                </span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/50 px-4 py-3 text-right">
              <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400">View assignments &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
