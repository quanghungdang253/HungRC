


// --- Import ảnh sản phẩm (Xe) ---
import xeBaGac from '../../../assets/img-products/xe-ba-gac.jpg';
import xeBenBanhXich from '../../../assets/img-products/xe-ben-banh-xich.jpg';
import xeBenDauKeo  from '../../../assets/img-products/xe-ben-dau-keo.jpg';
import xeBen from '../../../assets/img-products/xe-ben.png';
import xeCuuHo from '../../../assets/img-products/xe-cuu-ho.jpg';
import xeF1 from '../../../assets/img-products/xe-f1.jpg';
import xeoto from '../../../assets/img-products/xe-oto.jpg';
import xeXangCap from '../../../assets/img-products/xe-xang-cap.jpg';
import xeNangHang from "../../../assets/img-products/xe-nang-hang.png";
import xeCanCau from "../../../assets/img-products/xe-can-cau.png";
import xechiendau from "../../../assets/img-products/xe-chien-dau.png";

// --- Import ảnh linh kiện ---
import imgBolapghep from '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgmotor550 from     '../../../assets/img-electronic-components/motor-550.png';
import imgKhungNha from   '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgBangXich from   '../../../assets/img-electronic-components/bo-lap-ghep.png';
import imgMachRC from     '../../../assets/img-electronic-components/bo-lap-ghep.png';
import pinlion from "../../../assets/img-electronic-components/pin-li-on.png";
import congtacbapbenh from "../../../assets/img-electronic-components/cong-tac-bap-benh.png";
import tuavit from "../../../assets/img-electronic-components/tua-vit.png";
import motorMini from "../../../assets/img-electronic-components/motor-mini.png";
import keo502Max from "../../../assets/img-electronic-components/keo-502-max.png";
import DCgiamtoc from '../../../assets/img-electronic-components/dong-co-giam-toc.png';
import congtac6chan from '../../../assets/img-electronic-components/cong-tac-6-chan.png';

const data = [
  {
    name: 'Xe Ben Bánh Xích Điều Khiển',
    image: xeBenBanhXich,
    description: 'Mô hình xe ben bánh xích điều khiển',
    features: ['+ Chở hàng hóa vượt đường địa hình', '+ nâng hạ thùng ben đổ hàng', '+ Hệ thống tới cứu hộ'],
    purchaseUrl: '/cart/add/xe-ben-xich',
    videoUrl: '/assembly-model',
    parts: [
      { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
      { name: 'Motor 550 RS550', qty: 1, img: imgmotor550, purchaseUrl: 'https://s.shopee.vn/7Ac1cR7upZ' },
      { name: 'CELL Pin 18650 dung lượng cao 4200mAh 3.7V', qty: 1, img: pinlion, purchaseUrl: 'https://s.shopee.vn/8AUYqGJrvN' }, 
         { name: 'Công tắc bập bênh KDC1-101 6A-250V Kích Thước 21*15mm Công Tắc ON/OFF Đỏ Đen', qty: 1, img: congtacbapbenh, purchaseUrl: 'https://s.shopee.vn/gOXzVFg20' },
     { name: 'Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml', qty: 1, img: keo502Max, purchaseUrl: 'https://s.shopee.vn/9pcn5ByoaK' },

               { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },

    ]
  },
  {
    name: 'Xe Ben Đầu Kéo',
    image: xeBenDauKeo,
    description:'Mô hình xe ben đầu kéo không điều khiển có thể nâng hạ thùng để đổ hàng',
    features: ['+ Chở hàng hóa,vật liệu', '+ nâng hạ thùng để đổ hàng'],
    purchaseUrl: '/cart/add/xe-ben-dau-keo',
    videoUrl: '/assembly-model',
    parts: [
    { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },

      { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },
    
    ]
  },
  {
    name: 'Xe Ba Gác Điều Khiển',
    image: xeBaGac,
    description: 'Mô hình xe ba gác điều khiển siêu khỏe.',
    features: ['+ Chở hàng hóa', '+ Nâng hạ thùng để đổ hàng','+ Hệ thống tời cứu hộ'],
    purchaseUrl: '/cart/add/xe-ba-gac',
    videoUrl: '/assembly-model', 
    parts: [
    { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },

      { name: 'Động Cơ Mini V2 3VDC-9VDC', qty: 1, img: motorMini, purchaseUrl: 'https://s.shopee.vn/W57ubRzcX' },
       { name: 'CELL Pin 18650 dung lượng cao 4200mAh 3.7V', qty: 1, img: pinlion, purchaseUrl: 'https://s.shopee.vn/8AUYqGJrvN' }, 
         { name: 'Công tắc bập bênh KDC1-101 6A-250V Kích Thước 21*15mm Công Tắc ON/OFF Đỏ Đen', qty: 1, img: congtacbapbenh, purchaseUrl: 'https://s.shopee.vn/gOXzVFg20' },
              { name: 'Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml', qty: 1, img: keo502Max, purchaseUrl: 'https://s.shopee.vn/9pcn5ByoaK' },

                        { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },

    ]
  },
  {
    name: 'Xe Nâng Hàng ',
    image: xeNangHang,
    description: 'Mô hình xe nâng hàng được lắp ráp từ hai bộ lắp ghép mô hình kỹ thuật',
    features: ['+ Di chuyển vật liệu', '+ Nâng hạ hàng hóa'],
    purchaseUrl: '/cart/add/xe-ben-thuy-luc',
    videoUrl: '/assembly-model',
    parts: [
    { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
                   { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },


     
    ]
  },
  {
    name: 'Xe Cứu Hộ Giao Thông',
    image: xeCuuHo,
    description: 'Mô hình xe cứu hộ được trang bị càng kéo xe bị hư hỏng',
    features: ['+ Di chuyển xe bị hư', '+ Hệ thống càng kéo có thể nâng lên và hạ xuống'],
    purchaseUrl: '/cart/add/xe-cuu-ho',
    videoUrl: '/assembly-model',
    parts: [
{ name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
                   { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },

     
    ]
  },
  {
    name: 'Xe Cần Cẩu Điều Khiển',
    image: xeCanCau,
    description: 'Mô hình xe cẩu mô dùng để nâng, hạ và di chuyển vật nặng.',
    features: ['+ Nâng hạ, Di chuyển vật nặng', '+ Xoay 360 độ '],
    purchaseUrl: '/cart/add/xe-f1',
    videoUrl: '/assembly-model',
    parts: [
   { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 2, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
      { name: 'Motor 550 RS550', qty: 1, img: imgmotor550, purchaseUrl: 'https://s.shopee.vn/7Ac1cR7upZ' },
            { name: 'Động cơ vàng giảm tốc 1 trục', qty: 1, img: DCgiamtoc, purchaseUrl: 'https://s.shopee.vn/9AN6LlZwSP' },

      { name: 'CELL Pin 18650 dung lượng cao 4200mAh 3.7V', qty: 2, img: pinlion, purchaseUrl: 'https://s.shopee.vn/8AUYqGJrvN' }, 
      { name: 'Công tắc gạt, 6 chân 3 nấc HÀNG ĐẸP', qty: 2, img: congtac6chan, purchaseUrl: 'https://s.shopee.vn/4qE77OPudN' },
           { name: 'Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml', qty: 1, img: keo502Max, purchaseUrl: 'https://s.shopee.vn/9pcn5ByoaK' },

      { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },
  
    ]
  },
    {
    name: 'Xe Chiến Đấu',
    image: xechiendau,
    description: 'Mô hình chiến đấu bắn bằng dây thun',
    features: ['+ Di chuyển linh hoạt','+ Lực bắn siêu mạnh'],
    purchaseUrl: '/cart/add/xe-oto',
    videoUrl: '/assembly-model',
    parts: [
              { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 1, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
                { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },
    ]
  },
  {
    name: 'Xe Xáng Cạp',
    image: xeXangCap,
    description: 'Mô hình xe xáng cạp',
    features: ['+ Di chuyển đào, múc và xúc đất đá','+ Xoay 360 độ'],
    purchaseUrl: '/cart/add/xe-xang-cap',
    videoUrl: '/assembly-model',
    parts: [
         { name: 'Bộ lắp ghép mô hình kĩ thuật', qty: 1, img: imgBolapghep, purchaseUrl: 'https://s.shopee.vn/4fugbEP3c6' },
         { name: '(Mua thêm) Tua vít hỗ trợ lắp ráp', qty: 1, img: tuavit, purchaseUrl: 'https://s.shopee.vn/AKZ3X20hjl' },


    ]

  }
];

export default data;