"use client";

import cn from "classnames";
import { useState } from "react";
import Link from "next/link";
import MenuOpenedIcon from "@components/icon/menuOpened";
import MenuClosedIcon from "@components/icon/menuClosed";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuList = [
    { text: "aaa", href: "/" },
    { text: "bbb", href: "/" },
    { text: "ccc", href: "/" },
    { text: "ddd", href: "/" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* PC画面用メニュー */}
      <nav className={cn("hidden w-auto md:flex")}>
        {menuList.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn("hover:text-primary mx-3 px-3 py-3 text-sm")}
          >
            {item.text}
          </Link>
        ))}
      </nav>

      {/* スマートフォン画面用ハンバーガーメニュー */}
      <div className={cn("md:hidden")}>
        <button onClick={toggleMenu} className={cn("p-2")}>
          {isOpen ? <MenuOpenedIcon /> : <MenuClosedIcon />}
        </button>
        {isOpen && (
          <nav className={cn("flex flex-col items-start")}>
            {menuList.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={cn("hover:text-primary px-3 py-3 text-sm")}
                onClick={() => setIsOpen(false)} // メニュー項目をクリックしたらメニューを閉じる
              >
                {item.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};

export default Menu;
