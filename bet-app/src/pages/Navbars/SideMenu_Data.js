
import { MdAdminPanelSettings } from 'react-icons/md';
import { FiUser  } from 'react-icons/fi';
import { FaStreetView } from "react-icons/fa";





export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "parent_id": null,
    "icon":<MdAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/admin/dashboard"
  },
  {
    "id": 2,
    "label": "User List",
    "parent_id": null,
    "icon":<FiUser  size={20}/>,
    "order_index": 2,
    "url": "/admin/user-list",
  },
  {
    "id": 2,
    "label": "Post",
    "parent_id": null,
    "icon":<FaStreetView  size={20}/>,
    "order_index": 2,
    "url": "/admin/post",
  },
   
];
