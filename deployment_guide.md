# Deployment Guide: GitHub, Vercel, & GoDaddy

Follow these steps to deploy your Qertex website.

## Phase 1: Push Code to GitHub

Your project currently has uncommitted changes and your local branch has diverged from the remote. We need to sync them.

1.  **Open your terminal** (in VS Code or external).
2.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "Finalize Qertex branding and features"
    ```
3.  **Push to GitHub**:
    Since your branches have diverged, you have two options:
    *   **Option A (Safe - Merge):** Try to merge remote changes.
        ```bash
        git pull origin main --rebase
        git push origin main
        ```
    *   **Option B (Overwrite - Force):** If you are sure your local version is the correct one and you don't care about the 4 commits on the server:
        ```bash
        git push origin main --force
        ```

## Phase 2: Deploy on Vercel

1.  Go to [vercel.com](https://vercel.com) and Log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your GitHub repository (`iqon` or `qertex` depending on what you named it).
4.  **Configure Project**:
    *   **Framework Preset**: Next.js (Should auto-detect).
    *   **Root Directory**: `./` (Default).
    *   **Environment Variables**: If you have any (check your `.env.local` file), add them here.
5.  Click **"Deploy"**.
    *   Vercel will build your site. Wait for the confetti!

## Phase 3: Connect GoDaddy Domain

Once your site is live on Vercel:

1.  **In Vercel Dashboard**:
    *   Go to your Project Settings -> **Domains**.
    *   Enter your domain (e.g., `qertex.com`) and click **Add**.
    *   Vercel will provide you with DNS records (usually an **A Record** and a **CNAME**).

2.  **In GoDaddy**:
    *   Log in and go to your **Domain Portfolio**.
    *   Click the **three dots** next to your domain -> **Edit DNS**.
    *   **Add/Edit A Record**:
        *   **Type**: A
        *   **Name**: @
        *   **Value**: `76.76.21.21` (Vercel's IP - double check what Vercel tells you!)
        *   **TTL**: 600 seconds (or 1 Hour)
    *   **Add/Edit CNAME Record** (for www):
        *   **Type**: CNAME
        *   **Name**: www
        *   **Value**: `cname.vercel-dns.com.`
        *   **TTL**: 1 Hour
    *   *Delete any other existing A records for '@' or CNAME records for 'www' to avoid conflicts.*

3.  **Wait for Propagation**:
    *   It can take anywhere from a few minutes to 24 hours for the domain to connect globally. Vercel will show a "Valid Configuration" checkmark when it's done.

## Phase 4: Verify

Visit your domain (e.g., `https://qertex.com`) and check that:
*   The SSL certificate (padlock) is active.
*   The "Synaptic Sentinel" logo pulses correctly.
*   All pages load fast.
