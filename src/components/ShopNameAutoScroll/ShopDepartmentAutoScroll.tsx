/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { ShopProps } from "@/types";
import ShopNameList from "./ShopNameList";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

const animation = { duration: 5000, easing: (t: number) => t };

type ShopDepartmentProps = {
  shops: ShopProps["shops"];
  category: string;
};

export const ShopDepartmentAutoScroll = ({
  shops,
  category,
}: ShopDepartmentProps) => {
  // shops が存在しない場合は空配列を渡す
  const filteredShops = useCategoryFilter(shops ?? [], category);

  if (filteredShops.length === 0) {
    return <p>項目がありません。</p>;
  }

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
    if (slider) {
      const timer = setInterval(() => {
        if (slider.current && slider.current.track?.details) {
          slider.current.next();
        }
      }, 10000); // 10秒ごとに次のスライドに移動

      // コンポーネントがアンマウントされる際にタイマーをクリア
      return () => clearInterval(timer);
    }
  }, [slider]);

  return (
    <ul ref={sliderRef} className="keen-slider">
      {filteredShops.map((shop) => (
        <ShopNameList shop={shop} key={shop.id} />
      ))}
    </ul>
  );
};
