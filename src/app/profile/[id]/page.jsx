'use client'

import React from 'react'

const page = ({params}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold text-gray-900">Page {params.id}</h1>
    </div>

  )
}

export default page