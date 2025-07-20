import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/features/login'

export const Route = createFileRoute('/(public)/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginForm />
}
