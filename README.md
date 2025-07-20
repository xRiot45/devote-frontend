# 🗳️ Devote Frontend

**Devote Frontend** is the user interface for the decentralized voting platform **Devote**, built with **Next.js**, **React**, and **TypeScript**. This frontend connects both to a **blockchain-based smart contract** (via Hardhat & Solidity) and a backend API for off-chain features.

Users authenticate using **MetaMask**, receive a **JWT token** upon successful login, and can interact with voting proposals — casting votes and viewing results — all in a sleek, responsive interface.

---

## 🚀 Features

- 🔐 **Login with MetaMask** and JWT-based authentication
- 🧾 **Proposal listing** and details
- 🗳️ **Blockchain voting** integrated with smart contracts
- 📊 **Real-time voting result charts**
- 🧱 **Role-based access** (e.g., admin/user)
- ⚙️ Type-safe and scalable with TypeScript

---

## 🛠️ Tech Stack

| Layer      | Tools                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org/), React, TypeScript                                                           |
| Styling    | [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)                               |
| Blockchain | [ethers.js](https://docs.ethers.io/), [wagmi](https://wagmi.sh/), [RainbowKit](https://www.rainbowkit.com/) |
| Charting   | [Chart.js](https://www.chartjs.org/)                                                                        |
| Auth       | MetaMask + JWT (via backend API)                                                                            |

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/xRiot45/devote-frontend
cd devote-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file at the root of the project and define the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_CONTRACT_ADDRESS=<your_contract_address>
```

> Replace values accordingly based on your development setup.

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [wagmi](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [ethers.js](https://docs.ethers.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
