enum Links {
  HOME = 'Home',
  STORE = 'Store',
  ABOUT = 'FAQ',
  PACK = 'Pack',
}

const Nav = [
  {
    label: Links.HOME,
    href: `/`,
    icon: 'Home',
  },
  {
    label: Links.ABOUT,
    href: `/faq`,
    icon: 'Quiz',
  },
]

export default Nav
