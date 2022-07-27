import React from 'react'

export default function Pre({ data }: { data: object }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
