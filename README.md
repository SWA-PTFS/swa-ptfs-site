# ✈️ SWA PTFS Website

Official website for **SWA PTFS**, a professional Roblox PTFS airline.

This site provides:
- Live flight board
- Flight signup page
- Admin-controlled flight management
- Discord integration links
- GitHub Pages deployment

---

## 🌐 Live Website
Hosted using **GitHub Pages**

https://swa-ptfs.github.io/swa-ptfs-site/

yaml
Copy code

---

## 📁 Project Structure
swa-ptfs-site/
│
├── index.html # Home page
├── flights.html # Live flight board
├── signup.html # Flight signup form
│
├── admin/
│ ├── login.html # Admin login
│ ├── dashboard.html # Flight control panel
│ └── admin.js # Admin authentication
│
├── css/
│ └── style.css # Global styles
│
├── js/
│ └── flights.js # Public flight board logic
│
├── images/
│ ├── logo.png
│ ├── hero.jpg
│ └── aircraft.png
│
└── README.md


---

## 🔐 Admin System
Admins can:
- Log in via `/admin/login.html`
- Add, remove, and update flights
- Control what appears on the live flight board

⚠️ **Note:**  
This is a frontend-only admin system designed for PTFS and GitHub Pages.  
For full security, a backend (Firebase, Supabase, or Discord OAuth) is recommended.

---

## ✈️ Live Flight Board
- Displays active flights
- Syncs automatically with admin dashboard
- Data stored using browser localStorage

---

## 📝 Flight Signup
Pilots can:
- Enter Roblox username
- Select flight number and role
- Submit signup (Discord bot integration planned)

---

## 🚀 Deployment (GitHub Pages)
1. Upload all files to your GitHub repository
2. Go to **Settings → Pages**
3. Set source to:
   - Branch: `main`
   - Folder: `/root`
4. Save — your site is live 🎉

---

## 🔗 Discord
Join our Discord server for:
- Flight scheduling
- Pilot rewards
- Announcements

🔗 **Discord Invite:**  
https://discord.gg/vFTNcVvf

---

## 🛠️ Planned Features
- Discord bot flight syncing
- rewards system
- Roblox account verification
- Real-time flight updates
- Secure admin authentication
- Admin logs and permissions

---

## 📄 License
This project is for **SWA PTFS** use only.  
Unauthorized redistribution is not permitted.

---

© 2025 SWA PTFS
