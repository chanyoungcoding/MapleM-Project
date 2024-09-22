// metadata.ts
import { Metadata } from 'next';

export const commonMetadata: Metadata = {
  metadataBase: new URL('https://maple-m-project-bnrjra7cu-chanyoungcodings-projects.vercel.app/'),
  title: {
    template: '%s | MapleM Info',
    default: 'Loading...',
  },
  description: 'MapleM information check site',

  generator: 'Next.js',
  applicationName: 'MapleM Info',
  referrer: 'origin-when-cross-origin',
  keywords: ['MapleM', 'MapleM information', '메이플 모바일 정보 사이트', '메이플 모바일'],
  authors: [{name: 'Chan'}],
  creator: 'Chan',
  publisher: 'Chan',

  openGraph: {
    title: 'MapleM Info',
    description: '메이플 모바일에서 캐릭터의 정보, 공지사항 등을 확인해 보세요.',
    url: "https://maple-m-project-bnrjra7cu-chanyoungcodings-projects.vercel.app/",
    siteName: 'MapleM Info',
    images: [
      {
        url: "/maplepet.png",
        width: 500,
        height: 500
      }
    ],
    locale: 'ko-KR',
    type: 'website'
  }
};
