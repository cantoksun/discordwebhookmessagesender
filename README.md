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

## ⚙️ setup

### 1️⃣ clone the repository
```bash
git clone https://github.com/cantoksun/discordwebhookmessagesender.git
cd discordwebhookmessagesender
```

### 2️⃣ install modules
```bash
npm install dotenv
npm install discord.js
```

### 3️⃣ create a file named .env in the project root and fill
```bash
token=
webhook_id=
webhook_token=
```

example webhook url:
```
https://discord.com/api/webhooks/123456789012345678/AbCdEfGhIjKlMnOpQrStUv
```
→ `webhook_id = 123456789012345678`  
→ `webhook_token = AbCdEfGhIjKlMnOpQrStUv`

---

## ▶️ run the bot
```bash
node index.js
```

when you see:
```
logged in as yourbotname!
```
the bot is online 🎉

---

## 💬 usage
in discord:
```
!mesaj @user hello there!
```
or
```
!mesaj 123456789012345678 hello there!
```

the bot will:
- find the mentioned user or id
- send the message via webhook using their name and avatar
- delete your command automatically
- not send any reply (fully silent)

---

## ⚠️ disclaimer
this bot is for **educational and roleplay purposes only**.  
using it to impersonate users without permission violates discord’s [terms of service](https://discord.com/terms).  
use responsibly.

---

## 🧑‍💻 author
**[cantoksun](https://github.com/cantoksun)**  
📦 `discordwebhookmessagesender`
