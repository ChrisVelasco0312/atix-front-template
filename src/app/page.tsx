export default function Home() {
  const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className || "w-6 h-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #1e40af 0%, rgba(30, 64, 175, 0) 40%), radial-gradient(circle at 20% 80%, #be185d 0%, rgba(190, 24, 93, 0) 30%), radial-gradient(circle at 80% 30%, #5b21b6 0%, rgba(91, 33, 182, 0) 30%)",
        }}
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-center text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-gray-200 to-gray-500">
            ATIX Front Template
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            A modern Next.js starter template with Tailwind CSS v4, TypeScript,
            and best practices baked in.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Features Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left text-lg">
              <div className="flex items-center space-x-3">
                <CheckIcon className="w-7 h-7 text-green-400" />
                <span className="text-gray-300">Next.js 15</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="w-7 h-7 text-green-400" />
                <span className="text-gray-300">Tailwind CSS v4</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="w-7 h-7 text-green-400" />
                <span className="text-gray-300">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckIcon className="w-7 h-7 text-green-400" />
                <span className="text-gray-300">ESLint + Prettier</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ChrisVelasco0312/atix-front-template"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
