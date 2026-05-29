# ✦ LoreWeaver AI - Scafonix Pay Sample Store

> **Scafonix Web3 PG Integration Sample (Lite Version)**  
> This sample project demonstrates how to integrate the **Scafonix Pay** stablecoin checkout button into a modern, premium digital storefront selling AI-generated novels and digital book cover art.

---

## 🎨 Preview & Aesthetics
This project features a high-end, responsive dark-mode checkout experience with:
- **3D Book Cover Mockup**: Interactive CSS 3D rotating cover mockup of the AI novel.
- **Cybernetic Theme**: Styled with neon violet and cyber cyan color palettes suited for modern AI products.
- **Scafonix Integration**: Standard HTML button parameters that connect seamlessly with the Scafonix Pay checkout portal.

---

## 📂 Project Structure

```bash
├── index.html            # Main checkout page for GitHub Pages hosting (Root)
├── server.js             # Fastify backend server with Webhook signature verification
├── package.json          # Node.js dependencies and running scripts
├── .gitignore            # Git ignore configuration
└── public/
    ├── index.html        # Checkout page for local serving
    └── scafonix-symbol.png # Payment gateway icon assets
```

---

## 🚀 How to Run Locally

To test the page and verify Webhook integrations on your local machine:

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 2. Start the Local Server
```bash
npm start
```
The server will boot on port `3000`. Open your browser and navigate to:
👉 **[http://localhost:3000/](http://localhost:3000/)**

---

## 🛡️ Webhook Signature Verification (`server.js`)

This template includes a robust Fastify server implementation to handle payment fulfillment securely. When a customer completes their checkout:

1. **Scafonix** triggers a webhook POST request to your `/api/webhook` endpoint.
2. The server captures the raw body stream to prevent tampering.
3. Computes the HMAC SHA-256 signature using your `merchantSecretKey` (`sk_live_...`).
4. Strict checks verify that the signature matches the header `x-signature` before delivering the content to the customer.

---

## 🌐 Deploying to GitHub Pages

You can instantly deploy the frontend demo page for free using GitHub Pages:

1. Push this repository to a **Public** GitHub repository.
2. Go to repository **Settings** -> **Pages**.
3. Under **Build and deployment**, set the branch to `main` (or `master`) and folder to `/ (root)`.
4. Click **Save**. Your demo site will be live at `https://<your-username>.github.io/<repo-name>/`.
