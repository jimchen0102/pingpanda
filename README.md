<div align="center">
  <a href="http://pingpanda-six.vercel.app/" target="_blank">
    <img src="https://github.com/joschan21/pingpanda/blob/main/public/thumbnail.png" alt="PingPanda">
  </a>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn&logoColor=white" alt="shadcn/ui"/>
  <img src="https://img.shields.io/badge/Clerk-512CFB?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
</div>

<h3 align="center">PingPanda - 事件監控平台</h3>

## 📋 <a name="table">目錄</a>
1. 🤖 [專案介紹](#introduction)
2. ⚙️ [技術棧](#tech-stack)
4. 🤸 [專案設定](#quick-start)

## <a name="introduction">🤖 專案介紹</a>

PingPanda 是一個事件監控平台，開發者可以透過 API 發送事件通知，將自己的應用和 Discord 做整合。

## <a name="tech-stack">⚙️ 技術棧</a>

- Next.js 14
- TypeScript
- TailwindCSS
- ShadCN
- Clerk

## <a name="quick-start">🤸 專案設定</a>

**git clone 專案**
```bash
git clone https://github.com/jimchen0102/pingpanda.git
cd pingpanda
```
**安裝**

使用 npm 安裝專案的依賴項：

```bash
npm install
```

**設置環境變數**

在專案根目錄下建立一個名為 `.env.local` 的新文件，並加入以下內容：

```env
NEXT_PUBLIC_APP_URL=
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DISCORD_BOT_TOKEN=
```

**執行專案**

```bash
npm run dev
```
打開瀏覽器並訪問 [http://localhost:3000](http://localhost:3000) 來查看專案。
