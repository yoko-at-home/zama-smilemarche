"use client";
import ShopNameListItem from "./ShopNameListItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { ShopProps } from "@/types";

const animation = { duration: 5000, easing: (t: number) => t };

export default function ShopNameListItemAutoScroll({ articles }: ShopProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      if (s.track?.details) {
        s.moveToIdx(1, true, animation);
      }
    },
    updated(s) {
      if (s.track?.details) {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }
    },
    animationEnded(s) {
      if (s.track?.details && s.track.details.abs !== null) {
        s.moveToIdx(s.track.details.abs + 1, true, animation);
      }
    },
  });

  // 自動スクロール機能を追加する
  useEffect(() => {
    if (slider.current) {
      const timer = setInterval(() => {
        if (slider.current && slider.current.track?.details) {
          slider.current.next();
        }
      }, 10000); // 5秒ごとに次のスライドに移動

      // コンポーネントがアンマウントされる際にタイマーをクリア
      return () => clearInterval(timer);
    }
  }, [slider]);

  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return null;
  }

  return (
    <ul ref={sliderRef} className="keen-slider">
      {articles.map((article) => (
        <ShopNameListItem key={article.id} shop={article} />
      ))}
    </ul>
  );
}
