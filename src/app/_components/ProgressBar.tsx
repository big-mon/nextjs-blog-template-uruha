"use client";

import cn from "classnames";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // ドキュメント全体の高さ
      const documentHeight = document.documentElement.scrollHeight;
      // ウィンドウの高さ
      const windowHeight = window.innerHeight;
      // スクロールされた量
      const scrolled = window.scrollY;

      // スクロール位置の割合を計算 (0-100)
      const progress = (scrolled / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress))); // 0-100の範囲に制限
    };

    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数 (コンポーネントがアンマウントされたときにイベントリスナーを削除)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空の依存配列 [] を指定することで、コンポーネントのマウント時のみ実行

  return (
    <div className={cn("bg-background fixed top-0 left-0 z-50 h-1 w-full")}>
      <div
        style={{ width: `${scrollProgress}%` }}
        className={cn("bg-secondary h-full ease-in-out")}
      />
    </div>
  );
};

export default ProgressBar;
