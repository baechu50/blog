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
