import React from "react";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";

const ProfileCard = () => {
  const ProfileMenu = [
    {
      label: "Manage Account",
      path: "/account/manage",
      icon: (className:string)=><FiUser className={className} />,
    },
    {
      label: "My Orders",
      path: "/account/orders",
      icon: (className:string)=><FiShoppingBag className={className} />,
    },

    {
      label: "My Cancellations",
      path: "/account/cancellations",
      icon: (className:string)=><MdOutlineCancel className={className} />,
    },
    {
      label: "My Reviews",
      path: "/account/reviews",
      icon: (className:string)=><FiStar className={className} />,
    },
    {
      label: "LogOut",
      path: "sign-out",
      icon: (className:string)=><TbLogout2 className={className} />,
    },
  ];
  return (
    <div className="text-white flex flex-col ">
      {ProfileMenu.map((item) => {
        return (
          <Link  href={item.path} key={item.label} className="Align hover:bg-gray-100/10" >
            <span>
              {item.icon("h-6 w-6")}
            </span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileCard;
