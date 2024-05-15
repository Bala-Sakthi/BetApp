
import { MdAdminPanelSettings, MdFeedback } from 'react-icons/md';
import { FiUser  } from 'react-icons/fi';
import { FaStreetView } from "react-icons/fa";
import { AiOutlineIssuesClose } from 'react-icons/ai';





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
    "id": 3,
    "label": "Issues",
    "parent_id": null,
    "icon":<AiOutlineIssuesClose   size={20}/>,
    "order_index": 8,
    "url": "/admin/issue",
  },
  {
    "id": 4,
    "label": "FeedBack",
    "parent_id": null,
    "icon":<MdFeedback   size={20}/>,
    "order_index": 8,
    "url": "/admin/feedback",
  },
  {
    "id": 5,
    "label": "Post",
    "parent_id": null,
    "icon":<FaStreetView  size={20}/>,
    "order_index": 2,
    "url": "/admin/post",
  },
   
];
