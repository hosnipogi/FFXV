import React from 'react'
import { useRouter } from 'next/router'

const Sku = () => {
  const { query } = useRouter()
  return <div>SKU# {query.sku}</div>
}

export default Sku
