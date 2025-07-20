import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { isAuthenticated, getUser, logout } from '@/utils/auth'

export const Route = createFileRoute('/(private)/dashboard/')({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const user = getUser()

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome to the dashboard</h1>
              <p className="text-foreground/60">Welcome back, {user?.username}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-background bg-foreground hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground/50 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Card */}
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-foreground">Profile</h3>
                  <p className="text-foreground/60">Manage your account</p>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-foreground">Analytics</h3>
                  <p className="text-foreground/60">View your stats</p>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-foreground">Settings</h3>
                  <p className="text-foreground/60">Configure your preferences</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="mt-8">
            <div className="bg-background border border-foreground/10 rounded-lg p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-foreground/5">
                  <div>
                    <p className="text-foreground font-medium">Successfully logged in</p>
                    <p className="text-foreground/60 text-sm">Authentication completed</p>
                  </div>
                  <span className="text-foreground/40 text-sm">Just now</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-foreground/5">
                  <div>
                    <p className="text-foreground font-medium">Dashboard accessed</p>
                    <p className="text-foreground/60 text-sm">Viewing main dashboard</p>
                  </div>
                  <span className="text-foreground/40 text-sm">Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
