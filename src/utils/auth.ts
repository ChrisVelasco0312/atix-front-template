export interface User {
  username: string
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('isAuthenticated') === 'true'
}

export function getUser(): User | null {
  const userString = localStorage.getItem('user')
  if (!userString) return null
  
  try {
    return JSON.parse(userString) as User
  } catch {
    return null
  }
}

export function logout(): void {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('user')
} 