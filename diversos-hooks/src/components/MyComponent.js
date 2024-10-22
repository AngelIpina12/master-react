import React, { useId } from 'react'

export const MyComponent = () => {
    const id = useId();
    const secondId = useId();
  return (
    <div>MyComponent {id} {secondId}</div>
  )
}
