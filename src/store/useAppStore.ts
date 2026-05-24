import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'
import { mockUser } from '@/lib/mock-data'

interface AppState {
  user: User | null
  isDark: boolean
  draftCode: Record<string, string>
  setUser: (user: User | null) => void
  toggleDark: () => void
  setDraftCode: (problemId: string, code: string) => void
  login: (email: string, role?: User['role']) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      isDark: false,
      draftCode: {},
      setUser: (user) => set({ user }),
      toggleDark: () =>
        set((s) => {
          const next = !s.isDark
          document.documentElement.classList.toggle('dark', next)
          return { isDark: next }
        }),
      setDraftCode: (problemId, code) =>
        set((s) => ({
          draftCode: { ...s.draftCode, [problemId]: code },
        })),
      login: (email, role = 'student') =>
        set({
          user: {
            ...mockUser,
            email,
            role,
            name: email.split('@')[0] ?? 'User',
          },
        }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'minimal-grader',
      partialize: (s) => ({
        user: s.user,
        isDark: s.isDark,
        draftCode: s.draftCode,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.isDark) {
          document.documentElement.classList.add('dark')
        }
      },
    },
  ),
)
