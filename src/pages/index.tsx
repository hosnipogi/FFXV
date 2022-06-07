import path from 'path'
import fs from 'fs'

import Link from 'next/link'
import Card from 'components/Card'
import Divider from '@mui/material/Divider'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import StorefrontIcon from '@mui/icons-material/Storefront'
import IconWithLabel from 'components/IconWithLabel'

import Packs from 'components/Packs'
// import { PACKLINK } from 'config/'

function generateRandom(arr: any[]) {
  return Math.floor(Math.random() * arr.length)
}

const Home = ({ siteContents }) => {
  // const featuredLink = `/${PACKLINK}/${Featured.sku}`

  return (
    <>
      <IconWithLabel
        iconComponent={<WhatshotIcon sx={{ marginRight: 1 }} color="warning" />}
        label="Featured"
      />
      {/* <Link href={featuredLink} passHref> */}
      {/* <a href={featuredLink} style={{ textDecoration: 'none' }}> */}
      <Card
        content={siteContents[generateRandom(siteContents)]}
        variant="featured"
      />
      {/* </a> */}
      {/* </Link> */}
      <Divider variant="middle" sx={{ marginY: 10 }} />
      <IconWithLabel
        iconComponent={
          <StorefrontIcon sx={{ marginRight: 1 }} color="warning" />
        }
        label="Store"
      />
      <Packs contents={siteContents} />
    </>
  )
}

export async function getStaticProps() {
  const dir = path.resolve(process.cwd() + '/contents')
  const siteContents = []

  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    if (file.includes('sku-')) {
      const fileDir = `${dir}/${file}`
      const json = fs.readFileSync(fileDir)
      const parsed = JSON.parse(json.toString())
      siteContents.push(parsed)
    }
  })

  return {
    props: {
      siteContents,
    },
  }
}

export default Home
