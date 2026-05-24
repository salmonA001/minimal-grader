import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { BrandMark } from '@/components/BrandMark'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppStore } from '@/store/useAppStore'

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const login = useAppStore((s) => s.login)
  const { register, handleSubmit } = useForm<LoginForm>()

  const onSubmit = (data: LoginForm) => {
    login(data.email)
    toast.success('Welcome back!')
    navigate('/app')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Link to="/" className="text-sm">
            <BrandMark />
          </Link>
          <CardTitle className="pt-4">Sign in</CardTitle>
          <CardDescription>Enter your school email to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" className="mt-1.5" {...register('email', { required: true })} />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input id="password" type="password" className="mt-1.5" {...register('password', { required: true })} />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            No account?{' '}
            <Link to="/register" className="font-medium text-gray-900 dark:text-gray-100">
              Register
            </Link>
          </p>
          <p className="mt-2 text-center text-xs text-gray-400">
            <button type="button" onClick={() => { login('teacher@school.edu', 'teacher'); navigate('/admin') }} className="underline">
              Demo as teacher
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
