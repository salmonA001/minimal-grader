import { Trophy, Users, BookOpen } from 'lucide-react';

export default function Home() {
  const stats = [
    { name: 'โจทย์ทั้งหมด', value: '142 ข้อ', icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'ผู้ใช้งานขณะนี้', value: '892 คน', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'ชั้นเรียนของคุณ', value: '3 ชั้นเรียน', icon: BookOpen, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 dark:border-zinc-800 pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">ยินดีต้อนรับกลับมา, นักเรียน!</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">นี่คือข้อมูลสรุปความคืบหน้าและการอัปเดตล่าสุดของคุณในระบบ Grader</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
              <dt>
                <div className={`absolute rounded-lg p-3 ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-1 sm:pb-2">
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Announcements */}
        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
          <div className="border-b border-gray-200 dark:border-zinc-800 px-6 py-4">
            <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">ประกาศล่าสุด</h2>
          </div>
          <div className="p-6 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-600" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">การแข่งขันวัดทักษะเขียนโปรแกรมครั้งที่ #{i}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">การแข่งขันรอบถัดไปจะเริ่มวันเสาร์นี้ เวลา 10:00 น. กรุณาลงทะเบียนล่วงหน้าเพื่อเตรียมพร้อมในการทดสอบ</p>
                  <p className="mt-2 text-xs text-gray-400">เมื่อ 2 วันก่อน</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
          <div className="border-b border-gray-200 dark:border-zinc-800 px-6 py-4">
            <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">งานที่ครบกำหนดส่งเร็ว ๆ นี้</h2>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-zinc-800">
            {[
              { title: 'ใบงานที่ 5: ทฤษฎีกราฟขั้นพื้นฐาน', class: 'CS301 การออกแบบอัลกอริทึม', due: 'วันนี้ เวลา 23:59 น.', color: 'text-red-600' },
              { title: 'ใบงานที่ 4: การเขียนโปรแกรมเชิงพลวัต I', class: 'CS301 การออกแบบอัลกอริทึม', due: 'พรุ่งนี้ เวลา 23:59 น.', color: 'text-orange-600' },
              { title: 'ควิซเรื่อง โครงสร้างข้อมูลขั้นสูง', class: 'CS201 โครงสร้างข้อมูล', due: 'วันศุกร์ เวลา 10:00 น.', color: 'text-gray-500' },
            ].map((assignment, idx) => (
              <li key={idx} className="flex items-center justify-between gap-x-6 px-6 py-5 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                <div className="min-w-0">
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">{assignment.title}</p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    <p className="truncate">{assignment.class}</p>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-x-4">
                  <p className={`text-xs leading-5 font-medium ${assignment.color}`}>{assignment.due}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
