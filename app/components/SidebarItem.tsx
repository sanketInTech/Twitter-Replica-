"use client";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (href) {
      router.push(href);
    }
  }, [router, onClick, href]);


  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
      className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
      "
      onClick={onClick}
    >
      <Icon size={28} color="white" />
      </div>
      {/* Icon */}
      <div
        className="
          relative
          lg:flex 
          items-center 
          justify-center 
          gap-4
          p-4
          h-14 
          w-14 
          rounded-full 
          hover:bg-slate-300 
          hover:bg-opacity-10 
          cursor-pointer
        "
      >
        <Icon size={28} color="white" />
           
      {/* Label */}
      <p className="text-white text-xl">{label}</p>
    </div>
  </div> 
  );
};

export default SidebarItem;
