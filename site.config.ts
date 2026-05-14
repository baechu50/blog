import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://your-blog.vercel.app',
  title: '기록하는 개발 블로그',
  titleTemplate: '%s',
  description: '개발하며 배운 점을 한국어로 정리하는 개인 기술 블로그',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  lang: 'ko',
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
  bio: {
    name: 'Your Name',
    avatar: '/avatar.avif',
    description:
      '프론트엔드와 웹 생태계를 탐구하며 배운 내용을 차근차근 기록합니다.',
    links: [
      {
        label: 'mail',
        url: 'mailto:hello@example.com',
      },
      {
        label: 'github',
        url: 'https://github.com/your-github-id',
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/your-linkedin-id',
      },
      {
        label: 'x',
        url: 'https://x.com/your-x-id',
      },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/your-instagram-id',
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
