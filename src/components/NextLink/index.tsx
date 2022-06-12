import React, { forwardRef } from 'react'
// import styled from '@emotion/styled'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

// react-router-dom LinkProps types
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: any
  replace?: boolean
  innerRef?: React.Ref<HTMLAnchorElement>
  // next
  prefetch?: boolean
}

// eslint-disable-next-line react/display-name
const NextLinkFromReactRouter = forwardRef<any, LinkProps>(
  ({ to, replace, children, prefetch, onClick, ...props }, ref) => (
    <NextLink
      href={to as string}
      replace={replace}
      passHref
      prefetch={prefetch}
    >
      <Link
        ref={ref}
        {...props}
        underline="none"
        onClick={onClick}
        sx={{
          '&:hover': { color: 'facebook.default', textDecoration: 'underline' },
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
)

export default NextLinkFromReactRouter
