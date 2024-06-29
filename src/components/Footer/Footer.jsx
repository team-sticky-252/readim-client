import OptimizedSiteLink from "./OptimizedSiteLink";
import OPTIMIZED_SITE_LIST from "../../utils/optimizedSiteList";
import GradientPatchCheckIcon from "../shared/GradientPatchCheckIcon";

function Footer() {
  const READIM_INFO = {
    href: "https://github.com/team-sticky-252",
    faviconSrc: "/readimFavicon.png",
    siteName: "Readim",
  };

  return (
    <footer className="bottom-0 w-full mt-auto text-sm font-thin tracking-normal text-center pt-36 h-80 bg-gradient-to-t from-white">
      <p className="flex items-center justify-center">
        <span className="font-bold text-transparent bg-gradient-to-r from-pastel-purple via-blush-pink to-sunset-orange bg-clip-text">
          Readim
        </span>
        은 다음 사이트에 최적화
        <span>
          <GradientPatchCheckIcon />
        </span>
        &nbsp;되어 있어요.
        {OPTIMIZED_SITE_LIST.map(({ href, faviconSrc, siteName }) => (
          <OptimizedSiteLink
            key={siteName}
            href={href}
            faviconSrc={faviconSrc}
            siteName={siteName}
          />
        ))}
      </p>
      {/* <p className="flex items-center justify-center">
        가 표시되지 않은 사이트들은 정확도가 떨어질 수 있어요!
      </p> */}
      <div className="mt-1">
        피드백이 있으시다면
        <a href="mailto:teamsticky252@gmail.com" className="ml-1 underline">
          여기
        </a>
        로 제안해주세요.
      </div>
      <p className="flex items-center justify-center mt-6">
        Copyright © 2024
        <OptimizedSiteLink
          key={READIM_INFO.siteName}
          href={READIM_INFO.href}
          faviconSrc={READIM_INFO.faviconSrc}
          siteName={READIM_INFO.siteName}
        />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
