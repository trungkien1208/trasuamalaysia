import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Hương Vị Độc Đáo',
    content:
      'BOH Teh Tarik thực sự là sự kết hợp hoàn hảo giữa trà và sữa. Hương vị độc đáo và đậm đà này khiến tôi luôn muốn quay lại.',
    user: {
      id: 1,
      name: 'Nguyễn Thảo',
      professional: 'Người yêu thức uống trà',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Chất Lượng Xuất Sắc',
    content:
      'Tôi đã thử nhiều loại trà sữa, nhưng BOH Teh Tarik thực sự xuất sắc hơn cả. Hương vị và chất lượng không thể đánh bại.',
    user: {
      id: 2,
      name: 'Trần Đức Anh',
      professional: 'Designer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Hỗ Trợ Tuyệt Vời',
    content:
      'Tôi đã có một trải nghiệm mua hàng tuyệt vời với BOH Teh Tarik. Dịch vụ khách hàng và hỗ trợ rất chuyên nghiệp.',
    user: {
      id: 3,
      name: 'Phạm Văn Hoàng',
      professional: 'Nhà Kinh Doanh',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Yêu Hương Vị Này',
    content:
      'BOH Teh Tarik thực sự đã chinh phục trái tim của tôi với hương vị độc đáo và thơm ngon. Tôi không thể nào quên được nó!',
    user: {
      id: 4,
      name: 'Lê Thị Mai',
      professional: 'Nhà Nghiên Cứu',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Trà Sữa Tốt Nhất',
    content:
      'Sau khi thử nhiều loại trà sữa, tôi có thể khẳng định rằng BOH Teh Tarik là trà sữa tốt nhất mà tôi từng thưởng thức.',
    user: {
      id: 5,
      name: 'Nguyễn Minh Trí',
      professional: 'Sinh Viên',
      photo: '5.jpg',
    },
  },
]
