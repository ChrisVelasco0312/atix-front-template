import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Atix Front Template
        </h1>

        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Welcome to Vite + React
          </h2>

          <div className="text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </div>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Edit{" "}
            <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
