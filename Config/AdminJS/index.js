import UserOption from './UserOption.js'
import RoleOption from './RoleOption.js'
import PermissionOption from './PermissionOption.js'
import CompanyOption from './CompanyOption.js'
import trans from './local.js'
import AdminJS from 'adminjs'




export const adminJsOptions = {
  resources: [UserOption, RoleOption, PermissionOption, CompanyOption],
  rootPath: '/admin',
  loginPath: '/admin/login',
  branding: {
    companyName: 'Quản trị hệ thống',
    softwareBrothers: false,
    logo: false
  },
  locale: trans,
}