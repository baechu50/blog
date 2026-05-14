import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://your-blog.vercel.app',
  title: 'Baechu Game Dev Blog',
  titleTemplate: '%s',
  description:
    '1인 인디게임 개발자로서 게임 기획, 개발, 디자인, 사업을 직접 수행하며 배운 내용을 기록합니다.',
  favicon: '/favicon-game.svg',
  ogImage: '/og.avif',
  lang: 'ko',
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
  bio: {
    name: '김다영',
    avatar: '/avatar.png',
    description: '카비게임즈 대표이자 1인 인디게임 개발자입니다.',
    links: [
      {
        label: 'mail',
        url: 'mailto:teamcabbi@gmail.com',
      },
      {
        label: 'github',
        url: 'https://github.com/baechu50',
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/baechu50',
      },
      {
        label: 'x',
        url: 'https://x.com/cabbi_games',
      },
    ],
  },
  // @see https://giscus.app/
  // giscus: {
  //   repo: 'your-account/your-repo',
  //   repoId: 'YOUR_REPO_ID',
  // },
};

export default config;
