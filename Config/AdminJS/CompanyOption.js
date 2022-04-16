import { Company} from '../../Models/index.js'

export default {
    resource: Company, //Liên kết với model
    options: {
      // listProperties: ['role'], //Các trường được phép hiển thị khi view list/edit/filter/show
      navigation: {
        name:"Quản lý hệ thống"
      }, //Nhóm trên thanh sidebar
      properties: { //Chỉ đích danh và setting từng trường một
            
      }
    }
  };

