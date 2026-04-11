# 💰 Expense Tracker App

A modern Expense Tracker web application built with React and Firebase that allows users to manage their income and expenses efficiently.

---

## 🚀 Features

* 🔐 User Authentication (Email & Google Sign-In)
* ➕ Add Income and Expenses
* 📊 Real-time data storage using Firebase Firestore
* 🔍 Search transactions
* 🔄 Toggle between Income and Expense views
* 📱 Responsive UI using Tailwind CSS
* 📃 update and Delete

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **Backend / Database:** Firebase Firestore
* **Authentication:** Firebase Auth

---



---

## ⚙️ Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/deekshith2607/Expense-Tracker.git
cd expense-tracker
```

2. Install dependencies

```bash
npm install
```

3. Setup Firebase

* Create a Firebase project
* Enable Authentication (Email/Google)
* Enable Firestore Database
* Add your Firebase config in:

  ```js
  src/utilities/firebaseConfig.js
  ```

4. Start the development server

```bash
npm run dev
```

---

## 🔥 Firebase Data Structure

```
users (collection)
 └── userId (document)
      └── transactions (subcollection)
           ├── transactionId
           │    ├── amount
           │    ├── type (income/expense)
           │    ├── category
           │    ├── date
           │    └── description
```

## 🎯 Future Improvements

* 📈 Charts & Analytics
* 🧾 Export data (PDF/CSV)
* 🌙 Dark mode
* 💡 Budget tracking

---

## 👨‍💻 Author

**Deekshith Rao**

---

⭐ If you like this project, give it a star on GitHub!
