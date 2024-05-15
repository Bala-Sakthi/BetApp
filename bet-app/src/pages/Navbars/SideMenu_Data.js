
import { MdAdminPanelSettings } from 'react-icons/md';
import { FiUser  } from 'react-icons/fi';





export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "parent_id": null,
    "icon":<MdAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/admin/dashboard"
  },{
    "id": 2,
    "label": "User List",
    "parent_id": null,
    "icon":<FiUser  size={20}/>,
    "order_index": 2,
    "url": "/admin/user-list",
  },
   
];