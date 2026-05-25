import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

interface ProblemSpec {
  id: string;
  title: string;
  difficulty: string;
  timeLimit: string;
  memLimit: string;
  desc: string;
  input: string;
  output: string;
  constraints: string;
  sampleInput: string;
  sampleOutput: string;
}

const problemSpecs: Record<string, ProblemSpec> = {
  '1000': {
    id: '1000',
    title: 'A+B Problem',
    difficulty: 'ง่าย',
    timeLimit: '1.0 วินาที',
    memLimit: '64 MB',
    desc: 'เขียนโปรแกรมเพื่อคำนวณผลรวมของจำนวนเต็มสองจำนวน A และ B ที่รับเข้ามาจากแป้นพิมพ์',
    input: 'บรรทัดเดียวประกอบด้วยจำนวนเต็มสองจำนวน A และ B แยกกันด้วยช่องว่าง (-10^9 <= A, B <= 10^9)',
    output: 'แสดงผลรวมของ A และ B ออกทางหน้าจอ',
    constraints: 'ไม่มีข้อจำกัดเพิ่มเติม',
    sampleInput: '4 7',
    sampleOutput: '11',
  },
  '1001': {
    id: '1001',
    title: 'Reverse String (ย้อนกลับข้อความ)',
    difficulty: 'ง่าย',
    timeLimit: '1.0 วินาที',
    memLimit: '64 MB',
    desc: 'เขียนโปรแกรมเพื่อรับข้อความหนึ่งบรรทัด จากนั้นให้แสดงข้อความนั้นในทิศทางย้อนกลับจากหลังมาหน้า',
    input: 'บรรทัดเดียวประกอบด้วยสตริง S ที่มีความยาวไม่เกิน 1,000 ตัวอักษร ประกอบด้วยตัวอักษรภาษาอังกฤษและตัวเลข',
    output: 'แสดงสตริง S ที่ย้อนกลับแล้วออกทางหน้าจอ',
    constraints: 'สตริงไม่มีช่องว่าง',
    sampleInput: 'programming.in.th',
    sampleOutput: 'ht.ni.gnimmargorp',
  },
  '1002': {
    id: '1002',
    title: 'Shortest Path (เส้นทางสั้นที่สุด)',
    difficulty: 'ปานกลาง',
    timeLimit: '1.5 วินาที',
    memLimit: '128 MB',
    desc: 'กำหนดกราฟแบบมีทิศทางที่มีน้ำหนักบนเส้นเชื่อมและจุดเริ่มต้น S จุดสิ้นสุด T ให้หาความยาวของเส้นทางที่สั้นที่สุดจาก S ไป T',
    input: 'บรรทัดแรกระบุจำนวนจุดยอด N และจำนวนเส้นเชื่อม M\nถัดมา M บรรทัดระบุจุดเริ่มต้น u จุดสิ้นสุด v และน้ำหนัก w\nบรรทัดสุดท้ายระบุจุดเริ่มต้น S และสิ้นสุด T',
    output: 'แสดงน้ำหนักรวมสั้นที่สุด หากไม่มีเส้นทางให้แสดง -1',
    constraints: 'N <= 100,000, M <= 200,000, น้ำหนัก >= 0',
    sampleInput: '4 4\n1 2 5\n2 3 3\n1 3 10\n3 4 2\n1 4',
    sampleOutput: '10',
  },
  '1003': {
    id: '1003',
    title: 'Maximum Subarray (ช่วงผลบวกมากสุด)',
    difficulty: 'ปานกลาง',
    timeLimit: '1.0 วินาที',
    memLimit: '64 MB',
    desc: 'กำหนดอาร์เรย์ของจำนวนเต็มขนาด N ให้หาผลรวมที่มากที่สุดของซับอาร์เรย์ที่ติดต่อกันอย่างน้อย 1 ตัว',
    input: 'บรรทัดแรกระบุจำนวนเต็ม N\nบรรทัดที่สองประกอบด้วยจำนวนเต็ม N จำนวน แยกด้วยช่องว่าง',
    output: 'แสดงผลรวมที่มากที่สุดของซับอาร์เรย์',
    constraints: '1 <= N <= 200,000, -10,000 <= A[i] <= 10,000',
    sampleInput: '8\n-2 1 -3 4 -1 2 1 -5 4',
    sampleOutput: '6',
  },
  '1004': {
    id: '1004',
    title: 'Traveling Salesman (การเดินทางของพนักงานขาย)',
    difficulty: 'ยาก',
    timeLimit: '2.0 วินาที',
    memLimit: '256 MB',
    desc: 'มีเมืองอยู่ N เมือง พนักงานขายต้องการเดินทางไปเยือนทุกเมือง เมืองละหนึ่งครั้งและกลับมายังจุดเริ่มต้น โดยเสียค่าเดินทางรวมน้อยที่สุด',
    input: 'บรรทัดแรกระบุจำนวนเต็ม N (จำนวนเมือง)\nถัดมา N บรรทัด บรรทัดละ N จำนวน ระบุตารางค่าผ่านทางระหว่างเมือง',
    output: 'แสดงค่าเดินทางที่น้อยที่สุด',
    constraints: '1 <= N <= 18',
    sampleInput: '4\n0 10 15 20\n5 0 9 10\n6 13 0 12\n8 8 9 0',
    sampleOutput: '35',
  },
};

export default function ProblemDetail() {
  const { id } = useParams<{ id: string }>();
  const problem = id ? problemSpecs[id] : null;

  const [code, setCode] = useState<string>(
    `#include <iostream>\nusing namespace std;\n\nint main() {\n    // เขียนโค้ดของคุณตรงนี้\n    return 0;\n}`
  );
  const [lang, setLang] = useState('C++17');
  const [isGrading, setIsGrading] = useState(false);
  const [gradingProgress, setGradingProgress] = useState<string>('');
  const [verdict, setVerdict] = useState<string>('');

  if (!problem) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold">ไม่พบโจทย์ที่ต้องการ</h2>
        <Link to="/problemset" className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> กลับหน้าคลังโจทย์
        </Link>
      </div>
    );
  }

  const handleRunMockGrader = () => {
    setIsGrading(true);
    setVerdict('');
    setGradingProgress('');

    // Simulate real programming.in.th grading style (e.g. [P P P P P P P P P P])
    const cases = 10;
    let current = '';
    
    // Choose status based on code length/patterns
    let finalVerdict = 'Accepted';
    if (code.length < 50) {
      finalVerdict = 'Compilation Error';
    } else if (code.includes('sleep') || code.includes('while(true)')) {
      finalVerdict = 'Time Limit Exceeded';
    } else if (code.includes('wrong') || Math.random() < 0.25) {
      finalVerdict = 'Wrong Answer';
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < cases) {
        if (finalVerdict === 'Compilation Error') {
          setGradingProgress('CE');
          clearInterval(interval);
          finishGrading('Compilation Error', 'C');
        } else {
          // generate case result
          let caseResult = 'P'; // Passed
          if (finalVerdict === 'Time Limit Exceeded' && i >= 6) {
            caseResult = 'T'; // Timeout
          } else if (finalVerdict === 'Wrong Answer' && i % 3 === 0) {
            caseResult = '-'; // Wrong Answer
          }
          current += caseResult;
          setGradingProgress(current);
          i++;
        }
      } else {
        clearInterval(interval);
        finishGrading(finalVerdict, current);
      }
    }, 300);
  };

  const finishGrading = (finalVerdict: string, scoring: string) => {
    setIsGrading(false);
    setVerdict(finalVerdict);

    // Save to localStorage
    const savedSubmissions = localStorage.getItem('submissions');
    const list = savedSubmissions ? JSON.parse(savedSubmissions) : [];

    const newSub = {
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      user: 'student_01',
      problemId: problem.id,
      problemTitle: problem.title,
      language: lang,
      status: finalVerdict,
      scoring: scoring,
      time: finalVerdict === 'Accepted' ? '8ms' : finalVerdict === 'Time Limit Exceeded' ? '1000ms' : '12ms',
      mem: finalVerdict === 'Compilation Error' ? '-' : '2.8MB',
      date: 'เมื่อครู่นี้',
    };

    localStorage.setItem('submissions', JSON.stringify([newSub, ...list]));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-5">
        <div className="flex items-center gap-4">
          <Link
            to="/problemset"
            className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                {problem.id}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{problem.title}</h1>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              ข้อจำกัด: เวลา {problem.timeLimit} | หน่วยความจำ {problem.memLimit}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left pane: Specifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">รายละเอียดโจทย์</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {problem.desc}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-zinc-800" />

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">ข้อมูลนำเข้า (Input)</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {problem.input}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-zinc-800" />

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">ข้อมูลส่งออก (Output)</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {problem.output}
              </p>
            </div>

            <hr className="border-gray-200 dark:border-zinc-800" />

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">ข้อมูลเงื่อนไข (Constraints)</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {problem.constraints}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">ตัวอย่างทดสอบ</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase">Input</span>
                <pre className="mt-1 p-3 bg-gray-50 dark:bg-zinc-950 rounded-lg text-xs font-mono text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-zinc-800/80 whitespace-pre-wrap">
                  {problem.sampleInput}
                </pre>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase">Output</span>
                <pre className="mt-1 p-3 bg-gray-50 dark:bg-zinc-950 rounded-lg text-xs font-mono text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-zinc-800/80 whitespace-pre-wrap">
                  {problem.sampleOutput}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Right pane: Editor / Submit */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col h-[500px]">
            {/* Header controls */}
            <div className="border-b border-gray-200 dark:border-zinc-800 px-6 py-4 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">พื้นที่เขียนโค้ด</h3>
              <div className="flex items-center gap-3">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="rounded-md border-0 py-1.5 pl-3 pr-8 text-xs font-semibold text-gray-700 dark:text-gray-200 dark:bg-zinc-800 ring-1 ring-inset ring-gray-300 dark:ring-zinc-700 focus:ring-2 focus:ring-blue-600"
                >
                  <option value="C++17">C++17</option>
                  <option value="C">C</option>
                  <option value="Python 3">Python 3</option>
                  <option value="Java">Java</option>
                </select>
                <button
                  onClick={() => setCode('')}
                  className="p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                  title="เริ่มใหม่"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Codearea */}
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 w-full p-6 font-mono text-sm border-0 resize-none outline-none dark:bg-zinc-950 text-gray-800 dark:text-gray-200 focus:ring-0"
              spellCheck="false"
            />

            {/* Bottom Actions */}
            <div className="border-t border-gray-200 dark:border-zinc-800 px-6 py-4 bg-gray-50/50 dark:bg-zinc-900/50 flex justify-between items-center">
              <div>
                {isGrading && (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full" />
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono tracking-widest">
                      ตรวจผล: [{gradingProgress}]
                    </span>
                  </div>
                )}
                {!isGrading && verdict && (
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${
                      verdict === 'Accepted' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
                    }`}>
                      {verdict === 'Accepted' ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" />
                          ผ่านหมดทุกชุดทดสอบ (P P P P P P P P P P)
                        </>
                      ) : (
                        `ผิดพลาด (${verdict})`
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRunMockGrader}
                  disabled={isGrading || !code.trim()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none rounded-md transition-colors shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  ส่งตรวจคำตอบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
