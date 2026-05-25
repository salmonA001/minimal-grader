import { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Clock, AlertTriangle } from 'lucide-react';

interface Submission {
  id: string;
  user: string;
  problemId: string;
  problemTitle: string;
  language: string;
  status: string;
  scoring?: string;
  time: string;
  mem: string;
  date: string;
}

const defaultSubmissions: Submission[] = [
  { id: '98412', user: 'student_01', problemId: '1000', problemTitle: 'A+B Problem', language: 'C++17', status: 'Accepted', scoring: 'PPPPPPPPPP', time: '12ms', mem: '3.4MB', date: '2 นาทีที่แล้ว' },
  { id: '98411', user: 'student_01', problemId: '1004', problemTitle: 'Traveling Salesman', language: 'Python 3', status: 'Time Limit Exceeded', scoring: 'PPPPPP-TT-', time: '2001ms', mem: '14.2MB', date: '15 นาทีที่แล้ว' },
  { id: '98410', user: 'student_42', problemId: '1002', problemTitle: 'Shortest Path', language: 'Java', status: 'Wrong Answer', scoring: 'P--P--P--P', time: '45ms', mem: '21.0MB', date: '1 ชั่วโมงที่แล้ว' },
  { id: '98409', user: 'student_01', problemId: '1000', problemTitle: 'A+B Problem', language: 'C++17', status: 'Compilation Error', scoring: 'C', time: '-', mem: '-', date: '1 ชั่วโมงที่แล้ว' },
  { id: '98408', user: 'student_19', problemId: '1001', problemTitle: 'Reverse String', language: 'Python 3', status: 'Accepted', scoring: 'PPPPPPPPPP', time: '34ms', mem: '6.8MB', date: '2 ชั่วโมงที่แล้ว' },
];

export default function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('submissions');
    const localList: Submission[] = saved ? JSON.parse(saved) : [];
    
    // Combine local storage submissions with static mock submissions
    setSubmissions([...localList, ...defaultSubmissions]);
  }, []);

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-zinc-800 pb-5">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">สถานะการส่ง</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">ประวัติการส่งซอร์สโค้ดและสถานะการตรวจคะแนนในระบบ</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-800">
          <thead className="bg-gray-50 dark:bg-zinc-800/50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6 w-24">รหัสส่ง</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-28">เวลาส่ง</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">ผู้ส่ง</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">โจทย์</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-24">ภาษา</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">ผลการตรวจ</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-36">เวลา/หน่วยความจำ</th>
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
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {sub.user}
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 dark:text-gray-100">
                  <span className="font-mono text-xs text-gray-400 dark:text-zinc-600 mr-2 bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                    {sub.problemId}
                  </span>
                  <span className="font-medium">{sub.problemTitle}</span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {sub.language}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                  <div className="flex flex-col">
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${
                      sub.status === 'Accepted' ? 'text-green-600 dark:text-green-500' :
                      sub.status === 'Wrong Answer' ? 'text-red-600 dark:text-red-500' :
                      sub.status === 'Time Limit Exceeded' ? 'text-orange-600 dark:text-orange-500' :
                      'text-gray-500 dark:text-gray-400'
                    }`}>
                      {sub.status === 'Accepted' && <CheckCircle2 className="h-4 w-4" />}
                      {sub.status === 'Wrong Answer' && <XCircle className="h-4 w-4" />}
                      {sub.status === 'Time Limit Exceeded' && <Clock className="h-4 w-4" />}
                      {sub.status === 'Compilation Error' && <AlertTriangle className="h-4 w-4" />}
                      {sub.status === 'Accepted' ? 'ผ่าน (Passed)' : 
                       sub.status === 'Wrong Answer' ? 'คำตอบผิด (Wrong Answer)' :
                       sub.status === 'Time Limit Exceeded' ? 'เกินเวลาที่กำหนด (TLE)' : 'คอมไพล์ไม่ผ่าน (CE)'}
                    </span>
                    {sub.scoring && (
                      <span className="text-xs font-mono text-gray-400 dark:text-zinc-500 mt-0.5 select-all">
                        [{sub.scoring}]
                      </span>
                    )}
                  </div>
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
