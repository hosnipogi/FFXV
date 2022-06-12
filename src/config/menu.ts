export enum Links {
  HOME = 'Home',
  FAQ = 'FAQ',
}

const Nav = [
  {
    label: Links.HOME,
    href: `/`,
    icon: 'Home',
  },
  {
    label: Links.FAQ,
    href: `/faq`,
    icon: 'Quiz',
  },
]

export default Nav
