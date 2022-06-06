import Link from 'next/link'
import Container from '@mui/material/Container'
import Card from 'components/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import WhatshotIcon from '@mui/icons-material/Whatshot'

// import Packs from '../../contents/packs.json'
import Packs from 'components/Packs'
import Featured from '../../contents/home.featured.json'
import { PACKLINK } from 'config/'

const Home = () => {
  const featuredLink = `/${PACKLINK}/${Featured.sku}`
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
        <WhatshotIcon sx={{ marginRight: 1 }} color="warning" />
        <Typography variant="h5">Featured</Typography>
      </Box>
      <Link href={featuredLink} passHref>
        <a href={featuredLink} style={{ textDecoration: 'none' }}>
          <Card content={Featured} variant="featured" />
        </a>
      </Link>
      <Divider variant="middle" sx={{ marginTop: 10 }} />
      <Stack spacing={6} sx={{ marginTop: 10 }}>
        <Packs />
        {/* {Packs.map((content) => (
          <Card key={content.title} content={content} />
        ))} */}
      </Stack>
    </Container>
  )
}

export default Home
