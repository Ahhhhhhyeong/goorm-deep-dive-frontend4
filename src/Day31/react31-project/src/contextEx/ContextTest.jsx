import React from 'react'
import Parent from './Parent'

export default function ContextTest({user}) {
  return (
    <div>
      <Parent user={user} />
    </div>
  )
}
