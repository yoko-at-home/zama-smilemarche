"use client";
import { siteMetadata } from "@/data/siteMetadata";

export const Logo = () => {
  return (
    <div className="w-36 flex justify-center">
      <div className="balloonoya border">
        {siteMetadata.title}
        <span className="balloon font-semibold whitespace-nowrap">
          🎈みんな来てね！🎈
        </span>
      </div>
      <style jsx>{`
        .border {
          padding: 5px 8px;
          box-shadow: 10px 10px 11px #aaaaaa, -10px -10px 11px #ffffff;
          color: #aaaaaa;
          background: linear-gradient(
            75deg,
            rgba(2, 9, 66, 1) 4%,
            rgba(6, 85, 92, 1) 76%
          );
        }
        .balloonoya {
          position: relative; /* 指定した分だけ相対的に移動 */
        }
        .balloonoya:hover .balloon {
          display: inline; /* インライン要素として表示 */
        }
        .balloon {
          position: absolute; /* 親要素を基準 */
          display: none; /* 要素を非表示 */
          padding: 5px 6px; /* テキストの前後の余白 */
          background-color: rgb(233, 250, 228, 0.6); /* 背景色（透明度） */
          width: 140px; /* 吹き出し全体の幅 */
          right: 40%; /* 表示位置 */
          top: 80%;
          font-size: 70%; /* 文字サイズ */
          color: rgb(2, 9, 66);
          box-shadow: 5px 5px 11px rgb(109, 112, 122),
            -5px -5px 11px rgb(109, 112, 122);
          border-radius: 9999px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
