import Link from 'next/link'
import Card from 'components/Card'
import Divider from '@mui/material/Divider'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import StorefrontIcon from '@mui/icons-material/Storefront'
import IconWithLabel from 'components/IconWithLabel'

// import Packs from '../../contents/packs.json'
import Packs from 'components/Packs'
import Featured from '../../contents/home.featured.json'
import { PACKLINK } from 'config/'

const Home = () => {
  const featuredLink = `/${PACKLINK}/${Featured.sku}`

  return (
    <>
      <IconWithLabel
        iconComponent={<WhatshotIcon sx={{ marginRight: 1 }} color="warning" />}
        label="Featured"
      />
      <Link href={featuredLink} passHref>
        <a href={featuredLink} style={{ textDecoration: 'none' }}>
          <Card content={Featured} variant="featured" />
        </a>
      </Link>
      <Divider variant="middle" sx={{ marginY: 10 }} />
      <IconWithLabel
        iconComponent={
          <StorefrontIcon sx={{ marginRight: 1 }} color="warning" />
        }
        label="Store"
      />
      <Packs />
    </>
  )
}

export default Home
