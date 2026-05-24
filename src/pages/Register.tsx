import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { BrandMark } from '@/components/BrandMark'
import { SiteAddress } from '@/components/SiteAddress'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppStore } from '@/store/useAppStore'

interface RegisterForm {
  name: string
  email: string
  password: string
  classCode?: string
}

export default function Register() {
  const navigate = useNavigate()
  const login = useAppStore((s) => s.login)
  const { register, handleSubmit } = useForm<RegisterForm>()

  const onSubmit = (data: RegisterForm) => {
    login(data.email)
    toast.success(data.classCode ? `Joined class ${data.classCode}` : 'Account created!')
    navigate('/app')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Link to="/" className="text-sm">
            <BrandMark />
          </Link>
          <SiteAddress className="mt-1 block" />
          <CardTitle className="pt-4">Create account</CardTitle>
          <CardDescription>Join your class with an optional class code.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" className="mt-1.5" {...register('name', { required: true })} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" className="mt-1.5" {...register('email', { required: true })} />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input id="password" type="password" className="mt-1.5" {...register('password', { required: true })} />
            </div>
            <div>
              <label htmlFor="classCode" className="text-sm font-medium">Class code (optional)</label>
              <Input id="classCode" placeholder="e.g. ALGO7X2" className="mt-1.5 font-mono" {...register('classCode')} />
            </div>
            <Button type="submit" className="w-full">Create account</Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Have an account? <Link to="/login" className="font-medium text-gray-900 dark:text-gray-100">Sign in</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
