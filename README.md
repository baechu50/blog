# Korean Tech Blog (Whitespace Template)

Astro 기반 `whitespace-blog-template`를 한국어 단일 블로그 운영에 맞게 구성한 프로젝트입니다.

## 1) 시작하기

```bash
bun install
bun dev
```

- 개발 서버: `http://localhost:4321`
- 프로덕션 빌드:

```bash
bun run build
bun preview
```

## 2) 콘텐츠 작성 규칙

포스트는 `src/content/posts/*.mdx`에 작성합니다.

### Frontmatter 표준

```yaml
title: '글 제목'
description: '글 요약'
date: 2026-05-14 17:30:00
updatedDate: 2026-05-14 17:30:00
tags:
  - devlog
  - book
  - etc
draft: false
```

필수/권장 키:
- `title` (필수)
- `description` (필수)
- `date` (필수)
- `updatedDate` (권장)
- `tags` (선택)
- `draft` (선택)
- `ogImage` (선택): 공유 미리보기 대표 이미지. 생략하면 `site.config.ts`의 기본 이미지를 사용합니다.

글별 대표 이미지 예시:

```yaml
ogImage: '/posts/<slug>/cover.jpg'
```

위 경로는 `public/posts/<slug>/cover.jpg` 파일을 가리킵니다. 외부 이미지의 전체 HTTPS 주소도 사용할 수 있습니다. 이 값은 Open Graph와 X 공유 이미지에 함께 적용되며 본문에 이미지를 추가하지는 않습니다.

공유용 이미지는 1200×630px의 PNG 또는 JPG로 준비하는 것을 권장합니다. 작은 미리보기에서도 알아볼 수 있도록 중요한 글자나 로고는 중앙에 배치합니다.

## 3) 이미지 업로드 규칙

이미지는 레포에 직접 저장합니다.

```text
public/images/posts/<slug>/파일명.webp
```

본문 참조 예시:

```md
![이미지 설명](/images/posts/<slug>/파일명.webp)
```

예시 포스트:
- `src/content/posts/2026-05-14-start-here.mdx`

## 4) 사이트 설정

`site.config.ts`에서 아래 항목을 수정하세요.

- `siteUrl` (초기: Vercel 기본 도메인)
- `title`, `description`
- `bio` (이름/소개/소셜 링크)
- 필요 시 `giscus` 주석 해제 후 repo 정보 입력

현재 `lang`는 한국어(`ko`)로 고정되어 있습니다.

## 5) 배포 (Vercel)

1. GitHub에 레포 푸시
2. Vercel에서 해당 레포 Import
3. PR 생성 시 Preview URL 확인
4. `main` 머지 시 Production 자동 배포

커스텀 도메인을 붙일 때는 도메인 연결 후 `site.config.ts`의 `siteUrl`을 최종 도메인으로 갱신하세요.
