import React from 'react'
// import Packs from 'components/Packs'
import IconWithLabel from 'components/IconWithLabel'
import StorefrontIcon from '@mui/icons-material/Storefront'

const Store = () => {
  return (
    <>
      <IconWithLabel
        iconComponent={
          <StorefrontIcon sx={{ marginRight: 1 }} color="warning" />
        }
        label="Store"
      />
      {/* <Packs /> */}
      will delete
    </>
  )
}

export default Store
