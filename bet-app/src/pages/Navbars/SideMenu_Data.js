
import { MdAdminPanelSettings, MdFeedback, MdOutlineWorkHistory, MdPerson } from 'react-icons/md';
import { FiUser  } from 'react-icons/fi';
import { FaStreetView } from "react-icons/fa";
import { AiOutlineIssuesClose } from 'react-icons/ai';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { IoIosStar, IoMdNotifications } from 'react-icons/io';
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiMoneyWithdraw } from 'react-icons/bi';






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
  {
    "id": 5,
    "label": "Notification",
    "parent_id": null,
    "icon": <IoMdNotifications size={20}  />,
    "order_index": 5,
    "url": "/",
    "style": { color: 'white' },
    "children": [
      {
        "id": 6,
        "label": "General",
        "parent_id": null,
        "icon": <IoPersonCircleSharp size={20}/>,
        "order_index":1,
        "url": "/admin/general"
      },
      {
        "id": 7,
        "label": "Individual",
        "parent_id": null,
        "icon":<MdPerson size={20}/>,
        "order_index": 2,
        "url": "/admin/individual"
      }
      ,
      {
        "id": 8,
        "label": "Group",
        "parent_id": null,
        "icon":<HiMiniUserGroup size={20}/>,
        "order_index": 3,
        "url": "/admin/group-notification"
      }
    ]
  }, 
  {
    "id": 6,
    "label": "Withdraw request",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 7,
    "label": "Ratings",
    "parent_id": null,
    "icon":<IoIosStar   size={20}/>,
    "order_index": 8,
    "url": "/admin/ratings",
  },
  {
    "id": 8,
    "label": "Transaction history",
    "parent_id": null,
    "icon":<MdOutlineWorkHistory  size={20}/>,
    "order_index": 7,
    "url": "/admin/transaction-history",
  },
];
