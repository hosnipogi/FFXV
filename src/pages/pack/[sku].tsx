import React from 'react'
import { useRouter } from 'next/router'

const Sku = () => {
  const { query } = useRouter()
  return <div>{query.sku}</div>
}

export default Sku
