

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

import lrXef1 from "../../../assets/img-products/lr-xef1.png";
import lrXeben from "../../../assets/img-products/lr-xeben.png";

import lrXenang from "../../../assets/img-products/lr-xenang.png";

import lrXeUiDat from "../../../assets/img-products/lr-xeuidat.png";




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




// mockData.js
export const mockModelsData = {
  "with-motor": [
    {
      title: "Mô hình xe đua F1 điều khiển",
      thumbnail: xeF1, // Không cần dùng đến nữa vì đã đổi sang nền đen icon Youtube
      url: "https://youtube.com/shorts/6P3njybqNeA",
      longVideoUrl: "https://youtu.be/jBnPmfk3qYs",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
        {
          componentName: "Động Cơ Mini V2 3VDC-9VD",
          componentImage: motorMini,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/W57ubRzcX"
        },
         {
          componentName: "CELL Pin 18650 dung lượng cao 4200mAh 3.7V",
          componentImage: pinlion,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/8AUYqGJrvN"
        },
         {
          componentName: "Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml",
          componentImage: keo502Max,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/9pcn5ByoaK"
        }
      ]
    },
      {
      title: "Chế Tạo Cần Cẩu Thủy Lực Điều Khiển Từ Motor Mini",
      thumbnail: xeCanCau, // Không cần dùng đến nữa vì đã đổi sang nền đen icon Youtube
      url: "",
      longVideoUrl: "https://youtu.be/7P2Aljb9aOY",
      components: [
         {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
        {
          componentName: "Động cơ vàng giảm tốc 1 trục",
          componentImage: DCgiamtoc,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/4qE77OPudN"
        },
         {
          componentName: "Công tắc gạt, 6 chân 3 nấc HÀNG ĐẸP",
          componentImage: congtac6chan,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4qE77OPudN"
        },
         {
          componentName: "Motor 550 RS550",
          componentImage: imgmotor550,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/7Ac1cR7upZ"
        },
          {
          componentName: "CELL Pin 18650 dung lượng cao 4200mAh 3.7V",
          componentImage: pinlion,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/8AUYqGJrvN"
        },
         {
          componentName: "Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml",
          componentImage: keo502Max,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/9pcn5ByoaK"
        }
      
      ]
    },
      {
      title: "Chế tạo xe ben bánh xích điều khiển",
      thumbnail: xeBenBanhXich, // Không cần dùng đến nữa vì đã đổi sang nền đen icon Youtube
      url: "",
      longVideoUrl: "https://youtu.be/_tlHf2NREpA",
      components: [
         {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
        {
          componentName: "Motor 550 RS550",
          componentImage: imgmotor550,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/7Ac1cR7upZ"
        },
         {
          componentName: "CELL Pin 18650 dung lượng cao 4200mAh 3.7V",
          componentImage: pinlion,
          componentPrice: "1",
          shopUrl:  'https://s.shopee.vn/8AUYqGJrvN'
        },
         {
          componentName: "Công tắc bập bênh KDC1-101 6A-250V Kích Thước 21*15mm Công Tắc ON/OFF Đỏ Đen",
          componentImage: congtacbapbenh,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/gOXzVFg20"
        },
          {
          componentName: "Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml",
          componentImage: keo502Max,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/9pcn5ByoaK"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      
      ]
    },
     {
      title: "Chế tạo ô tô siêu khỏe từ motor mini",
      thumbnail: xeoto, // Không cần dùng đến nữa vì đã đổi sang nền đen icon Youtube
      url: "",
      longVideoUrl: "https://youtu.be/Mfpq1puGgDQ",
      components: [
         {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
        {
          componentName: "Động Cơ Mini V2 3VDC-9VDC",
          componentImage: motorMini,
          componentPrice: "1",
          shopUrl: 'https://s.shopee.vn/W57ubRzcX'
        },
         {
          componentName: "CELL Pin 18650 dung lượng cao 4200mAh 3.7V",
          componentImage: pinlion,
          componentPrice: "1",
          shopUrl:  'https://s.shopee.vn/8AUYqGJrvN'
        },
         {
          componentName: "Công tắc bập bênh KDC1-101 6A-250V Kích Thước 21*15mm Công Tắc ON/OFF Đỏ Đen",
          componentImage: congtacbapbenh,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/gOXzVFg20"
        },
          {
          componentName: "Keo 502 con voi loại tốt dán sắt dính chắc 30-50-100ml",
          componentImage: keo502Max,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/9pcn5ByoaK"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        },
        

      
      ]
    }
  ],
  "without-motor": [
    {
      title: "Lắp ráp mô hình xe đua F1 từ bộ lắp ghép mô hình kỹ thuật(2 bộ)",
      thumbnail: lrXef1,
      url: "",
      longVideoUrl: "https://youtu.be/DAus-gQt3-M",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      ]
    },
       {
      title: "Lắp Ráp Mô Hình Xe Chiến Đấu",
      thumbnail: xechiendau,
      url: "https://youtube.com/shorts/KzuY19Phdz0",
      longVideoUrl: "https://youtu.be/gf6ufcwDGWo",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      ]
    },
       {
      title: "Lắp Ráp Mô Hình Xe Nâng Hàng",
      thumbnail: xeNangHang,
      url: "",
      longVideoUrl: "https://youtu.be/QzwSLu3pV6w",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      ]
    },
       {
      title: "Lắp Ráp Mô Hình Ben 4 Chân",
      thumbnail: lrXeben,
      url: "",
      longVideoUrl: "https://youtu.be/legsgLKpPSY",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      ]
    },
       {
      title: "Lắp Ráp Mô Hình Xe Ủi Đất",
      thumbnail: lrXeUiDat,
      url: "",
      longVideoUrl: "https://youtu.be/CwkH6fRYUXA",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
         {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        }
      ]
    },
       {
      title: "Lắp Ráp Mô Hình Xe Xáng Cạp",
      thumbnail: xeXangCap,
      url: "",
      longVideoUrl: "https://youtu.be/wx0HY3t_Eg8",
      components: [
        {
          componentName: "Bộ lắp ghép mô hình kỹ thuật",
          componentImage: imgBolapghep,
          componentPrice: "2",
          shopUrl: "https://s.shopee.vn/4fugbEP3c6"
        },
          {
          componentName: "(Mua thêm) Tua vít hỗ trợ lắp ráp",
          componentImage: tuavit,
          componentPrice: "1",
          shopUrl: "https://s.shopee.vn/AKZ3X20hjl"
        },
      ]
    }
  ]
};