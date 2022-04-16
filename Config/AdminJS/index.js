import { User,Role,Company } from '../../Models/index.js'

const userOptions = {
  resource: User, //Liên kết với model
  options: {
    // listProperties: ['role'], //Các trường được phép hiển thị khi view list/edit/filter/show
    navigation: {
      name:"Quản lý công nhân viên"
    }, //Nhóm trên thanh sidebar
    properties: { //Chỉ đích danh và setting từng trường một
      role: {
        isVisible: { list: true, filter: false, show: true, edit: true }, //Hiển thị theo chức năng
        // isTitle:true, //Hiển thị là cột đầu tiên       
        // type: 'richtext', //Override kiểu form input default
       
        availableValues: [     //Render thành select + option
          {value: 'male', label: 'Male'},
          {value: 'female', label: 'Female'},
        ],
        // components :  { //Custom componnt cho từng chức năng (list/ filter/show/edit) của cột cho bảng
        //   list: AdminJS.bundle('./city-content-in-list'), 
        // },   
      },
    }
  }
};






export const adminJsOptions = {
  resources: [userOptions,Role,Company],
  rootPath: '/admin',
  branding: {
    companyName: 'Quản trị hệ thống',
    softwareBrothers:false,
    logo:false
  },
  locale: {
    translations: {
      labels: {
        User: 'Quản lý người dùng', //Đổi tên labels trên side bar
        navigation: '',
      },
     
    }
  },
}