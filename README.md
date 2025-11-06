# discordwebhookmessagesender

a simple and safe discord bot that sends messages through a **webhook** using a specified user's name and avatar.  
it supports both **@mention** and **user id** input, and automatically deletes the original command message.

---

## 🚀 features
- sends messages via a discord **webhook**
- works with both **user mentions** (`@username`) and **user ids**
- automatically deletes the command message after sending
- sends no response messages (fully silent)
- secure and tos-compliant when used responsibly

---

## 🧩 requirements
- [node.js](https://nodejs.org/) v16 or newer  
- a discord bot token  
- a discord channel **webhook**

---

## ⚙️ Setup

### 1️⃣ clone the repository
```bash
git clone https://github.com/cantoksun/discordwebhookmessagesender.git
cd discordwebhookmessagesender

### 2️⃣ install modules
npm install dotenv
npm install discord.js
