# [Day57] 2025.08.05 배운내용 정리

---

## gray-matter

> `gray-matter`는 Markdown파일에서 **frontmatter**(메타데이터)를 파싱하는 라이브러리
>
> Next.js에서 블로그나 문서 사이트를 만들 때 자주 사용 된다.

## Frontmatter 란?

- Markdown 파일 상단에 `---`로 구분 된 YAML 형태의 메타데이터

```
---
title: "내 첫 번째 블로그 포스트"
date: "2024-01-15"
author: "김개발"
tags: ["Next.js", "React"]
---

# 블로그 내용

여기는 실제 Markdown 내용입니다.
```

## gray-matter 사용법

### 1. 설치

```
npm install gray-matter
```

### 2. 기본 사용법

```javascript
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

// Markdown 파일 읽기
const filePath = path.join(process.cwd(), 'posts', 'my-post.md');
const fileContent = fs.readFileSync(filePath, 'utf8');

// gray-matter로 파싱
const { data, content } = matter(fileContent);

console.log(data); // { title: "내 첫 번째 블로그 포스트", date: "2024-01-15", ... }
console.log(content); // "# 블로그 내용\n\n여기는 실제 Markdown 내용입니다."
```

### 3. Next.js에서 활용 예시

```javascript
// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      id,
      content,
      ...data,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
```

```javascript
// pages/index.js
import { getAllPosts } from '../lib/posts';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(({ id, title, date }) => (
        <article key={id}>
          <h2>{title}</h2>
          <p>{date}</p>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
```

## 주요 특징

- **메타데이터 분리**: 블로그 포스트의 제목, 날짜, 태그 등을 체계적으로 관리
- **다양한 형식 지원**: YAML, JSON, TOML frontmatter 모두 지원
- **간단한 API**: `matter(content)`만으로 파싱 완료
- **Next.js 최적화**: SSG(Static Site Generation)와 완벽 호환

---

# Page Router & App Router

## Page Router (기존 방식)

### 구조

```
pages/
├── index.js          // /
├── about.js          // /about
├── blog/
│   ├── index.js      // /blog
│   └── [slug].js     // /blog/[slug]
└── api/
    └── users.js      // /api/users
```

### 주요 특징

```javascript
// pages/blog/[slug].js
import { GetStaticProps, GetStaticPaths } from 'next';

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// 데이터 페칭
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchPost(params.slug);
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs();
  return { paths, fallback: false };
};
```

## App Router (새로운 방식, Next.js 13+)

### 구조

```
app/
├── page.js           // /
├── layout.js         // 루트 레이아웃
├── about/
│   └── page.js       // /about
├── blog/
│   ├── page.js       // /blog
│   ├── layout.js     // /blog 레이아웃
│   └── [slug]/
│       └── page.js   // /blog/[slug]
└── api/
    └── users/
        └── route.js  // /api/users
```

### 주요 특징

```javascript
// app/blog/[slug]/page.js
async function BlogPost({ params }) {
  const post = await fetchPost(params.slug); // 서버 컴포넌트에서 직접 데이터 페칭

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;

// 메타데이터 생성
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// 정적 경로 생성
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

## 주요 차이점

### 1. 파일 구조

| Page Router            | App Router                |
| ---------------------- | ------------------------- |
| `pages/about.js`       | `app/about/page.js`       |
| `pages/blog/[slug].js` | `app/blog/[slug]/page.js` |

### 2. 데이터 페칭

```javascript
// Page Router
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

// App Router (서버 컴포넌트)
async function Page() {
  const data = await fetchData(); // 컴포넌트 내부에서 직접
  return <div>{data.title}</div>;
}
```

### 3. 레이아웃

```javascript
// Page Router - _app.js
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// App Router - layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>네비게이션</nav>
        {children}
        <footer>푸터</footer>
      </body>
    </html>
  );
}
```

### 4. API 라우트

```javascript
// Page Router - pages/api/users.js
export default function handler(req, res) {
  res.json({ users: [] });
}

// App Router - app/api/users/route.js
export async function GET() {
  return Response.json({ users: [] });
}

export async function POST(request) {
  const body = await request.json();
  return Response.json({ success: true });
}
```

## App Router의 장점

### 1. **서버 컴포넌트**

```javascript
// 서버에서만 실행되는 컴포넌트
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data'); // 서버에서 실행
  return <div>{data.title}</div>;
}
```

### 2. **스트리밍과 Suspense**

```javascript
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>페이지 제목</h1>
      <Suspense fallback={<div>로딩 중...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
```

### 3. **중첩 레이아웃**

```javascript
// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className='dashboard'>
      <aside>사이드바</aside>
      <main>{children}</main>
    </div>
  );
}
```

## 언제 어떤 것을 사용할까?

### Page Router 추천

- 기존 프로젝트 유지보수
- 안정성이 중요한 프로덕션 환경
- 복잡한 클라이언트 사이드 로직이 많은 경우

### App Router 추천

- **새 프로젝트** (강력 추천)
- 서버 컴포넌트의 이점을 활용하고 싶은 경우
- 최신 React 기능을 사용하고 싶은 경우
- SEO와 성능이 중요한 경우

---

동적 페이지

- 사용자에 따라 URL이 달라지고, 그에 맞는 내용을 보여주는 페이지
  => 페이지 자체를 동작으로 만들 수 있음
- 기존에 페이지를 직접 만들어 props로 넘기는 방식에서 변경되는 url을 변수명으로 받아 파일을 생성할 수 있음

page 생성 과정
`[변수명].js` 이렇게 대괄호를 이용하여 js파일을 만듦

`getSTaticPaths()` : Next.js에서 정적인 동적페이지를 만들 때 반드시 필요한 함수!
