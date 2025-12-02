# 🎬 SnapCast - Screen Recording & Video Sharing Platform

> **Record. Share. Inspire.** — The easiest way to capture and share your screen with the world.

![SnapCast Hero](public/readme/hero.jpg)

## ✨ What is SnapCast?

SnapCast is a **free, fast, and intuitive screen recording platform** that lets anyone record, edit, and share high-quality videos in seconds. No sign-ups, no complicated setup—just pure creativity.

Whether you're a content creator, educator, developer, or just someone with an idea to share, SnapCast makes it effortless.

---

## 🚀 Key Features

### 🎥 **One-Click Screen Recording**
Record your entire screen, a specific window, or just a portion. Choose what you want to capture, hit record, and you're done.

### ⚡ **Lightning-Fast Upload**
Built with [Bunny CDN](https://bunny.com/) for blazing-fast uploads and global delivery. Your videos load instantly, everywhere.

### 🎨 **Beautiful Video Gallery**
Browse, filter, and discover videos. Search by title, sort by views or date, and find exactly what you're looking for.

### 🔐 **Privacy Control**
Choose between public and private videos. Share your content with the world or keep it just for you.

### 📱 **Fully Responsive**
Works perfectly on desktop, tablet, and mobile. Record and share from anywhere.

### 🆓 **Completely Free**
No subscriptions. No hidden fees. No accounts required. Just record and share.

### 🛡️ **Security First**
Built with [Arcjet](https://arcjet.com/) for rate limiting and abuse prevention. Your content is safe.

---

## 🎯 Perfect For

- 👨‍💻 **Developers** - Create tutorials, code walkthroughs, and bug reports
- 🎓 **Educators** - Record lectures, explanations, and educational content
- 🎬 **Content Creators** - Build a video library and grow your audience
- 📊 **Professionals** - Share presentations, demos, and business updates
- 🤝 **Everyone** - Tell your story with video

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | [Next.js 15](https://nextjs.org/) + [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Database** | [PostgreSQL](https://www.postgresql.org/) via [Xata](https://xata.io/) |
| **ORM** | [Drizzle](https://orm.drizzle.team/) |
| **Authentication** | [Better Auth](https://www.better-auth.com/) (Optional - Free to use!) |
| **Video Storage** | [Bunny Stream CDN](https://bunny.com/stream) |
| **Thumbnail Storage** | [Bunny Storage](https://bunny.com/storage) |
| **Security** | [Arcjet](https://arcjet.com/) (Rate Limiting & Protection) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🎬 Getting Started

### Quick Start (2 minutes)

1. **Visit the app** → No sign-up needed
2. **Click Record** → Allow screen access
3. **Share** → Get your video link instantly

### For Developers

#### Prerequisites
- Node.js 18+
- PostgreSQL database
- Bunny.com API keys (for video storage)

#### Installation

```bash
# Clone the repository
git clone https://github.com/Kunall7890/SnapCast_Video_recording_platform.git
cd screen_recording_sharing_app-main

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Configure your .env.local with:
# - BETTER_AUTH_SECRET
# - GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET
# - DATABASE_URL_POSTGRES
# - BUNNY API keys (BUNNY_LIBRARY_ID, BUNNY_STREAM_ACCESS_KEY, etc.)
# - ARCJET_API_KEY

# Run migrations
npm run db:push

# Start development server
npm run dev
```

Visit `http://localhost:3000` and start recording! 🎉

---

## 📋 Features Roadmap

- [x] Screen recording
- [x] Video gallery with filtering
- [x] Public/private videos
- [x] Video player with streaming
- [x] Search functionality
- [ ] Video editing tools
- [ ] Custom branding for videos
- [ ] Analytics dashboard
- [ ] Team collaboration
- [ ] API access
- [ ] Mobile app

---

## 🖼️ Screenshots

### Home Page
![Home](public/readme/hero.jpg)

### Video Upload
![Upload](public/assets/icons/upload.svg)

### Video Gallery
![Gallery](public/assets/icons/video.svg)

---

## 🎯 Use Cases

### 📚 **Education**
Teachers and instructors use SnapCast to create engaging video lessons without expensive equipment or complex software.

### 💼 **Business**
Sales teams share product demos, support teams create troubleshooting guides, and managers communicate updates.

### 🎨 **Content Creation**
YouTubers, streamers, and creators capture gameplay, tutorials, and reactions instantly.

### 🐛 **Bug Reports**
Developers record bugs in action to help teams understand and fix issues faster.

### 💬 **Communication**
Sometimes a 2-minute video says more than a thousand words. Share your message visually.

---

## 🌍 Community

We'd love to hear from you!

- 🐛 **Found a bug?** [Report it on GitHub Issues](https://github.com/Kunall7890/SnapCast_Video_recording_platform/issues)
- 💡 **Have an idea?** [Start a Discussion](https://github.com/Kunall7890/SnapCast_Video_recording_platform/discussions)
- ⭐ **Love it?** [Give us a star!](https://github.com/Kunall7890/SnapCast_Video_recording_platform)

---

## 📄 License

SnapCast is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

Built by [Kunal Jaiswal](https://github.com/Kunall7890)

### Powered By
- [Vercel](https://vercel.com) - Hosting & Deployment
- [Bunny CDN](https://bunny.com) - Video Streaming & Storage
- [Xata](https://xata.io) - Database
- [Arcjet](https://arcjet.com) - Security

---

## 🎉 Ready to Record?

### **[Start Recording Now →](https://snapcast-demo.vercel.app)**

No sign-up. No credit card. Just pure video magic. ✨

---

<div align="center">

**Made with ❤️ for creators, by creators**

[GitHub](https://github.com/Kunall7890/SnapCast_Video_recording_platform) • [Twitter](#) • [Discord](#)

</div>
