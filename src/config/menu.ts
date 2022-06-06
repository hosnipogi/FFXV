enum Links {
  HOME = 'Home',
  STORE = 'Store',
  ABOUT = 'About',
  PACK = 'Pack',
}

const Nav = [
  {
    label: Links.HOME,
    href: `/`,
    icon: 'Home',
  },
  {
    label: Links.STORE,
    href: `/store`,
    icon: 'Home',
  },
  {
    label: Links.ABOUT,
    href: `/about`,
    icon: 'Home',
  },
]

export const Pack = Links.PACK.toLowerCase()
export default Nav
