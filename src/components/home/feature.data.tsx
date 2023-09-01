import React, { ReactNode } from 'react'
import LocalCafeIcon from '@mui/icons-material/LocalCafe'
import SavingsIcon from '@mui/icons-material/Savings'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'

import LocalShippingIcon from '@mui/icons-material/LocalShipping'
interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Hương Vị Độc Đáo',
    description:
      'BOH Teh Tarik - Sự kết hợp tinh tế của trà và sữa, tạo nên một hương vị độc đáo, đậm đà của Malaysia.',
    icon: <LocalCafeIcon />,
  },
  {
    title: 'Tiết Kiệm Hơn',
    description:
      'Khám phá BOH Teh Tarik với mức giá hợp lý và chất lượng vượt trội, đảm bảo bạn tiết kiệm hơn mỗi lần thưởng thức.',
    icon: <SavingsIcon />,
  },
  {
    title: 'Trải Nghiệm Dễ Dàng',
    description:
      'Tận hưởng sự tiện lợi và dễ dàng khi thưởng thức BOH Teh Tarik. Đặt hàng và nhận ngay tại cửa nhà bạn.',
    icon: <LocalShippingIcon />,
  },
  {
    title: 'Hỗ Trợ 24/7',
    description:
      'Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7 để đảm bảo bạn có trải nghiệm tuyệt vời nhất với sản phẩm của chúng tôi.',
    icon: <ConnectWithoutContactIcon />,
  },
]
