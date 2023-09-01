import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'Trà sữa BOH Teh Tarik Vị Truyền Thống',
    path: '#',
  },
  {
    label: 'Trà sữa BOH Teh Tarik Vị Gừng',
    path: '#',
  },
  {
    label: 'Trà sữa BOH Teh Tarik Vị Trà sữa Mix Cà Phê',
    path: '#',
  },
  {
    label: 'Trà sữa BOH Teh Tarik Vị Matcha Latte',
    path: '#',
  },

  {
    label: 'Trà trái cây BOH Vị Đào',
    path: '#',
  },
  {
    label: 'Trà trái cây BOH Vị Chanh',
    path: '#',
  },
  {
    label: 'Trà trái cây BOH Vị Trái Cây Nhiệt Đới',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Liên hệ với chúng tôi', path: '#' },
  { label: 'Chính sách bảo mật', path: '#' },
  { label: 'Điều khoản & Điều kiện', path: '#' },
  { label: 'Câu hỏi thường gặp', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Sản phẩm" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Về chúng tôi" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
