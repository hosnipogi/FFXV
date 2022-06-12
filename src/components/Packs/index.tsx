import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from 'components/Card'
import { ContentType } from 'types'

const paginate = (array: any[], pagesize: number, pagenumber: number) => {
  return array.slice((pagenumber - 1) * pagesize, pagenumber * pagesize)
}

const itemsPerPage = 8

type Props = {
  contents: ContentType[]
}

const Packs = ({ contents }: Props) => {
  const [arr, setArr] = useState(contents)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const ar = paginate(contents, itemsPerPage, pageNumber)
    setArr(ar)
  }, [contents, pageNumber])

  const handlePaginate = (e, page) => {
    setPageNumber(page)
  }

  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        spacing={{ xs: 6, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {arr.map((item, index) => {
          return (
            <Grid item xs={12} sm={4} md={4} lg={3} key={index}>
              <Card content={item} />
            </Grid>
          )
        })}
      </Grid>
      <Stack spacing={2} mt={8} alignItems="center">
        <Pagination
          count={Math.ceil(contents.length / itemsPerPage)}
          variant="outlined"
          shape="rounded"
          onChange={handlePaginate}
        />
      </Stack>
    </Container>
  )
}

export default React.memo(Packs)
