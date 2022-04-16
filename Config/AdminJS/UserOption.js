import { User} from '../../Models/index.js'
import uploadFeature from '@adminjs/upload';
import passwordFeature from '@adminjs/passwords';
import argon2 from 'argon2'

export default {
    resource: User, 
    features: [
        uploadFeature({
        provider: { local: { bucket: 'public/uploads' } },
        properties: {
            key: 'avatar',
            // mimeTypes: 'image'
          },
          validation:{
            // mimeTypes:'image'
          }
      }),
      passwordFeature({
        // PasswordsOptions
        properties: {
          // to this field will save the hashed password
          encryptedPassword: 'password'
        },
        hash: argon2.hash,
      })
    ],

    options: {
      navigation: {
        name:"Quản lý công nhân viên"
      }, 
      listProperties:['username','name','email','phone','address','status','company'],
      filterProperties:['name','address','email','phone','children','married','gender','status','company','birth_day','work_year'],
      showProperties:['username','name','email','phone','address','file','status','children','married','gender','birth_day','work_year','role','permission','company'],
      editProperties:['username','name','email','phone','address','file','status','children','married','gender','birth_day','work_year','role','permission'],
      properties: { 
       name:{
        isTitle:true,
        position:0
       },
       email:{
           isTitle:false,
       },
        phone:{
            type:'number'
        },
        gender:{
            availableValues:[
            {value: 'male', label: 'Nam'},
            {value: 'famale', label: 'Nữ'},    
            ]
        },
      }
    }
  };




// export default userOptions = {
//     resource: User, //Liên kết với model
//     options: {
//       // listProperties: ['role'], //Các trường được phép hiển thị khi view list/edit/filter/show
//       navigation: {
//         name:"Quản lý công nhân viên"
//       }, //Nhóm trên thanh sidebar
//       properties: { //Chỉ đích danh và setting từng trường một
//         role: {
//           isVisible: { list: true, filter: false, show: true, edit: true }, //Hiển thị theo chức năng
//           // isTitle:true, //Hiển thị là cột đầu tiên       
//           // type: 'richtext', //Override kiểu form input default
         
//           availableValues: [     //Render thành select + option
//             {value: 'male', label: 'Male'},
//             {value: 'female', label: 'Female'},
//           ],
//           // components :  { //Custom componnt cho từng chức năng (list/ filter/show/edit) của cột cho bảng
//           //   list: AdminJS.bundle('./city-content-in-list'), 
//           // },   
//         },
//       }
//     }
//   };