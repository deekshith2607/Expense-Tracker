import React from 'react'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Go Home
      </button>
    </div>
  )
}

export default NotFound
