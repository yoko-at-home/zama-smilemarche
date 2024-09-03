"use client";
import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";
import { TitleH1 } from "@/components/Titles/TitleH1";

const ServicePage = () => {
  return (
    <div>
      <SmileBlissImage />
      <div className="mt-48 mx-auto w-72 lg:max-w-96">
        <TitleH1 text="smile座間の想い" />
        <div className="border mx-auto py-8 px-3 w-72 sm:w-96">
          <p className="mb-3">
            Smile座間は、ハンドメイド作家として活動していく中でたくさんの作家さんと出会い、「ハンドメイドで座間をもっと盛り上げたい！」と想い、座間で活動している作家を中心に販売イベントを始めました。
          </p>
          <p className="mb-3">
            第1回は座間駅前の小さなサロンをお借りして、地元作家9名で開催。
            その際、お客様アンケートで「ぜひ定期的に開催を！」、「もっと広い所でやってほしい」との声が多く、第2回からは芹沢公園で開催しています。
          </p>
          第2回は無謀とも思える8月の開催でしたが、出店者さまは全部で37ブース集まり、ご来場者さまは500～600人もの方々にお越しいただく事ができました。
          <p className="mb-3">
            第3回も皆さまに楽しんで頂き、もっと座間を好きになるキッカケが作れたら･･･と思っております。
            これまでマルシェ開催を通じて、様々な分野のご縁を繋ぐお手伝いをしてきました。
            <br />
            御社の活動などをたくさんの方々に知って頂けるよう、ぜひご協力させていただきます。
          </p>
        </div>
      </div>
      <style jsx>{`
        .border {
          background: linear-gradient(145deg, #ffffff, #c7c9cc);
          border-radius: 1%;
          box-shadow: inset 7.51px 7.51px 34px #a8a9ac,
            inset -7.51px -7.51px 34px #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ServicePage;
