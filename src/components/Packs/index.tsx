import Link from 'next/link'
import React from 'react'
import Grid from '@mui/material/Grid'
import Card from 'components/Card'
import content from '../../../contents/packs.json'
import { PACKLINK } from 'config'

const Packs = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {content.map((item, index) => {
        const linkToItem = `/${PACKLINK}/${item.sku}`
        return (
          <Grid item xs={12} md={4} key={index}>
            <Link href={linkToItem} passHref>
              <a href={linkToItem} style={{ textDecoration: 'none' }}>
                <Card content={item} />
              </a>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Packs
