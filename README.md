# :passport_control: Travel Axis(client)

![Project Banner](https://i.ibb.co.com/6nYPp2H/banner3.png)

---

## Live site :- [Travel-Axis](https://travel-axis-780d3.web.app/)

## :memo: Project Overview

The **Travel Axis Client** is a user-friendly Visa Navigator Portal designed to simplify the process of checking visa requirements, applying for visas online, and tracking applications. The portal provides a dynamic and intuitive interface with robust functionality to deliver a seamless user experience throughout the entire visa application process.

## :sparkles: Key Features

- **Visa Requirements Checker:** Quickly determine visa requirements for your destination with an interactive lookup tool.
- **Online Visa Application:** Submit visa applications online with guided forms that streamline data entry.
- **Application Tracking:** Monitor the status of your visa applications in real time.
- **Dynamic User Interface:** Enjoy a responsive and engaging user experience across devices.
- **Secure and Efficient:** Benefit from robust security measures and efficient data handling powered by modern web technologies.

## 🛠 Tech Stack

The project leverages a suite of modern technologies to ensure performance, reliability, and a smooth user experience:

- **Frontend Framework:**
  - React
  - React Router DOM
- **UI & Styling:**
  - Tailwind CSS
  - Material Tailwind
  - DaisyUI
- **Animations & Interactions:**
  - AOS (Animate on Scroll)
  - Pure React Carousel
  - React Simple Typewriter
  - React Slick & Slick Carousel
- **Backend & Authentication:**
  - Firebase
- **Notifications & Alerts:**
  - React Toastify
  - SweetAlert2
- **Other Libraries:**
  - React Dropdown
  - React Icons
  - React Tooltip
    - Moment

## ⚙️ Installation & Setup

To set up the Travel Axis Client project locally, follow these steps:

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your system.

### Clone the Repository

````sh
git clone https://github.com/Rakib383/travel-axis-client.git
cd travel-axis-client

### Install Dependencies

```sh
npm install
````

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```sh
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_PAYMENT_GATEWAY_PK=your_stripe_public_key
```

### Run the Development Server

```sh
npm run dev
```

This will start the application in development mode.

### Build for Production

```sh
npm run build
```
