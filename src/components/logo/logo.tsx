import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        '& img': { width: 44, height: 'auto' },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          display: 'inline-block',
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
        }}
      >
        Trà sữa <span>Maylaysia</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
