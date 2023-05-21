import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }

  render() {
    return (
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          <link rel="canonical" href="/" />
          <link
            rel="preload"
            href="https://monday.com/static/fonts/poppins/poppins-v20-latin-300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://monday.com/static/fonts/poppins/poppins-v20-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://monday.com/static/fonts/poppins/poppins-v20-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://monday.com/static/fonts/poppins/poppins-v20-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <meta name="theme-color" content="#333333" />
          <meta name="msapplication-navbutton-color" content="#333333" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />
          <link
            rel="shortcut icon"
            href="https://monday.com/static/img/favicons/favicon.ico"
          />
          <link
            rel="icon"
            sizes="16x16 32x32 64x64"
            href="https://monday.com/static/img/favicons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="https://monday.com/static/img/favicons/favicon-monday5-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://monday.com/static/img/favicons/favicon-monday5-96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="https://monday.com/static/img/favicons/favicon-monday5-60.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://monday.com/static/img/favicons/favicon-monday5-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://monday.com/static/img/favicons/favicon-monday5-16.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://monday.com/static/img/favicons/favicon-monday5-57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://monday.com/static/img/favicons/favicon-monday5-114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://monday.com/static/img/favicons/favicon-monday5-72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://monday.com/static/img/favicons/favicon-monday5-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://monday.com/static/img/favicons/favicon-monday5-60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://monday.com/static/img/favicons/favicon-monday5-120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://monday.com/static/img/favicons/favicon-monday5-76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://monday.com/static/img/favicons/favicon-monday5-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://monday.com/static/img/favicons/favicon-monday5-180.png"
          />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="https://monday.com/static/img/favicons/favicon-monday5-144.png"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="https://monday.com/static/img/favicons/favicon.ico"
          />
          <meta name="next-head-count" content={55} />
          <link
            rel="preload"
            href="https://monday.com/nhp/_next/static/css/e81d08443768f4fcb7c2.css"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://monday.com/nhp/_next/static/css/e81d08443768f4fcb7c2.css"
            data-n-g
          />
          <link
            rel="preload"
            href="https://monday.com/nhp/_next/static/css/7f8e6856d07ea56dbc7f.css"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://monday.com/nhp/_next/static/css/7f8e6856d07ea56dbc7f.css"
            data-n-p
          />
          <style
            id="__jsx-363530526"
            dangerouslySetInnerHTML={{
              __html:
                ".bypass-block-menu-component .menu-item{position:fixed;top:0;left:0;opacity:0;pointer-events:none;}.bypass-block-menu-component .menu-item:focus{opacity:1;pointer-events:auto;}"
            }}
          />
          <style
            id="__jsx-4212101279"
            dangerouslySetInnerHTML={{
              __html:
                ".picture-component.blur-image.jsx-4212101279 img.jsx-4212101279{-webkit-filter:blur(10px);filter:blur(10px);}.picture-lazy.jsx-4212101279{opacity:0;}"
            }}
          />
          <style
            id="__jsx-4115554422"
            dangerouslySetInnerHTML={{
              __html:
                ".link-item-with-menu-component{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;color:#535768;-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}.link-item-with-menu-component:hover{background-color:#F0F3FF;}.link-item-with-menu-component.is-open,.link-item-with-menu-component:hover{color:#5034FF;}.link-item-with-menu-component.is-open .link-item-with-menu-icon path,.link-item-with-menu-component:hover .link-item-with-menu-icon path{fill:#5034FF;stroke:#5034FF;}.link-item-with-menu-component.is-open .link-item-with-menu-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.link-item-with-menu-component .link-item-with-menu-title{font-size:0.875rem;margin-right:4px;}.link-item-with-menu-component .link-item-with-menu-icon{height:7px;width:10px;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;}.link-item-with-menu-component .link-item-with-menu-icon path{fill:#323338;stroke:#323338;}"
            }}
          />
          <style
            id="__jsx-2138693134"
            dangerouslySetInnerHTML={{
              __html:
                ".link-item-component{font-size:0.875rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;-webkit-text-decoration:none;text-decoration:none;color:#535768;-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}.link-item-component:hover{color:#5034FF;background-color:#F0F3FF;}"
            }}
          />
          <style
            id="__jsx-2730172878"
            dangerouslySetInnerHTML={{
              __html:
                ".arrow-wrapper{padding-left:12px;padding-right:6px;-webkit-transition:padding 0.3s ease-in-out;transition:padding 0.3s ease-in-out;}.arrow-wrapper.hover{padding-left:18px;padding-right:0px;}.arrow-wrapper svg{fill:currentColor;height:12px;width:14px;}.arrow-wrapper.sm.signup svg{width:15px;height:13px;}.arrow-wrapper.md.signup svg,.arrow-wrapper.lg.signup svg{height:12px;width:16px;}.arrow-wrapper.lg svg{width:13px;height:11px;}.arrow-wrapper.md{padding-left:10px;padding-right:5px;}.arrow-wrapper.md.hover{padding-left:15px;padding-right:0px;}.arrow-wrapper.md svg{width:12px;height:10px;}.arrow-wrapper.xs{padding-left:8px;padding-right:4px;}.arrow-wrapper.xs.hover{padding-left:12px;padding-right:0px;}.arrow-wrapper.xs svg{width:12px;height:10px;}.arrow-wrapper.sm{padding-left:8px;padding-right:4px;}.arrow-wrapper.sm.hover{padding-left:12px;padding-right:0px;}.arrow-wrapper.sm svg{width:10px;height:9px;}"
            }}
          />
          <style
            id="__jsx-4117764832"
            dangerouslySetInnerHTML={{
              __html:
                'button.ladda-button[data-button-color="workos-iris"]:not(.invert){-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;}button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover{background-color:#5151d5;-webkit-filter:unset;filter:unset;}button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover.white,button.ladda-button[data-button-color="workos-iris"]:not(.invert):hover.white-iris{background-color:#F0F3FF;}'
            }}
          />
          <style
            id="__jsx-2407656928"
            dangerouslySetInnerHTML={{
              __html:
                'button.ladda-button{padding:16px 32px;cursor:pointer;font-size:1rem;border-radius:40px;border:none;font-weight:400;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:17px;}button.ladda-button[data-style="zoom-in"]:not(:hover){-webkit-transition:0.1s ease background-color;transition:0.1s ease background-color;}button.ladda-button.disable-animation.ladda-button[data-style="zoom-out"] .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}button.ladda-button.disable-animation.ladda-button .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}button.ladda-button.has-arrow{padding:16px 32px 16px 31px;}button.ladda-button.has-arrow.sm{padding-left:29px;}button.ladda-button.invert{border-width:1px;border-style:solid;}button.ladda-button.has-paint-animation{isolation:isolate;}button.ladda-button:disabled{cursor:auto;}button.ladda-button:hover{outline:none;}button.ladda-button img{vertical-align:middle;}button.ladda-button .paint-overlay{position:absolute;display:block;width:0;height:0;border-radius:50%;background-color:var(--signup-paint-animation-color);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1;top:8px;left:calc(100% / 2);}button.ladda-button .paint-overlay.start-animating{-webkit-animation:paintAnimation 1s ease-in-out;animation:paintAnimation 1s ease-in-out;}@-webkit-keyframes paintAnimation{0%{width:0;height:0;}60%{width:405px;height:405px;}100%{opacity:0;}}@keyframes paintAnimation{0%{width:0;height:0;}60%{width:405px;height:405px;}100%{opacity:0;}}'
            }}
          />
          <style
            id="__jsx-25280166"
            dangerouslySetInnerHTML={{
              __html:
                "button.ladda-button.blue{background-color:#009AFF;color:#ffffff;}button.ladda-button.blue.invert{color:#009AFF;background-color:#ffffff;border-color:#009AFF;}button.ladda-button.blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.blue:disabled{background-color:#0584D7;}button.ladda-button.outline-blue{border-width:1px;border-style:solid;background-color:#ffffff;color:#00a9ff;}button.ladda-button.outline-blue.invert{color:#ffffff;background-color:#00a9ff;border-color:#ffffff;}button.ladda-button.outline-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-blue:disabled{background-color:#ffffff;}button.ladda-button.outline-dark-blue,button.ladda-button.outline-dark-blue-inverted-hover{border-width:1px;border-style:solid;background-color:#ffffff;color:#595AD4;}button.ladda-button.outline-dark-blue.invert,button.ladda-button.outline-dark-blue-inverted-hover.invert{color:#ffffff;background-color:#595AD4;border-color:#ffffff;}button.ladda-button.outline-dark-blue.invert:hover,button.ladda-button.outline-dark-blue-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-dark-blue:disabled,button.ladda-button.outline-dark-blue-inverted-hover:disabled{background-color:#595AD4;}button.ladda-button.outline-dark-blue-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:#ffffff;background-color:#595AD4;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover{border-width:1px;border-style:solid;background-color:#ffffff;color:#5559df;}button.ladda-button.outline-indigo-inverted-hover.invert{color:#ffffff;background-color:#5559df;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.outline-indigo-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:#ffffff;background-color:#5559df;border-color:#ffffff;}button.ladda-button.outline-indigo-inverted-hover:disabled{background-color:#5559df;}button.ladda-button.brand-pink{background-color:#ff0476;color:#ffffff;}button.ladda-button.brand-pink.invert{color:#ff0476;background-color:#ffffff;border-color:#ff0476;}button.ladda-button.brand-pink.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-pink:disabled{background-color:#b70053;}button.ladda-button.brand-blue{background-color:#009AFF;color:#ffffff;}button.ladda-button.brand-blue.invert{color:#009AFF;background-color:#ffffff;border-color:#009AFF;}button.ladda-button.brand-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-blue:disabled{background-color:#0584D7;}button.ladda-button.brand-iris{background-color:#595ad4;color:#ffffff;}button.ladda-button.brand-iris.invert{color:#595ad4;background-color:#ffffff;border-color:#595ad4;}button.ladda-button.brand-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-red{background-color:#FB275D;color:#ffffff;}button.ladda-button.brand-red.invert{color:#FB275D;background-color:#ffffff;border-color:#FB275D;}button.ladda-button.brand-red.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-red:disabled{background-color:#c12c52;}button.ladda-button.brand-green{background-color:#00CC6F;color:#ffffff;}button.ladda-button.brand-green.invert{color:#00CC6F;background-color:#ffffff;border-color:#00CC6F;}button.ladda-button.brand-green.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-green:disabled{background-color:#099655;}button.ladda-button.brand-yellow{background-color:#FFCC00;color:#ffffff;}button.ladda-button.brand-yellow.invert{color:#FFCC00;background-color:#ffffff;border-color:#FFCC00;}button.ladda-button.brand-yellow.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-yellow:disabled{background-color:#b79407;}button.ladda-button.brand-purple{background-color:#A358DF;color:#ffffff;}button.ladda-button.brand-purple.invert{color:#A358DF;background-color:#ffffff;border-color:#A358DF;}button.ladda-button.brand-purple.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-purple:disabled{background-color:#9031DC;}button.ladda-button.green{background-color:#00ca72;color:#ffffff;}button.ladda-button.green.invert{color:#00ca72;background-color:#ffffff;border-color:#00ca72;}button.ladda-button.green.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.green:disabled{background-color:#01A55E;}button.ladda-button.purple{background-color:#a358df;color:#ffffff;}button.ladda-button.purple.invert{color:#a358df;background-color:#ffffff;border-color:#a358df;}button.ladda-button.purple.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.purple:disabled{background-color:#9031DC;}button.ladda-button.iris{background-color:#595ad4;color:#ffffff;}button.ladda-button.iris.invert{color:#595ad4;background-color:#ffffff;border-color:#595ad4;}button.ladda-button.iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.iris:disabled{background-color:#3C3ED6;}button.ladda-button.yellow{background-color:#ffcb00;color:#323338;}button.ladda-button.yellow.invert{color:#ffcb00;background-color:#323338;border-color:#ffcb00;}button.ladda-button.yellow.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.yellow:disabled{background-color:#b79407;}button.ladda-button.orange{background-color:#fdab3d;color:#323338;}button.ladda-button.orange.invert{color:#fdab3d;background-color:#323338;border-color:#fdab3d;}button.ladda-button.orange.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.orange:disabled{background-color:#fdab3d;}button.ladda-button.pink{background-color:#ff0476;color:#ffffff;}button.ladda-button.pink.invert{color:#ff0476;background-color:#ffffff;border-color:#ff0476;}button.ladda-button.pink.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.pink:disabled{background-color:#DC0064;}button.ladda-button.royal{background-color:#597bfc;color:#ffffff;}button.ladda-button.royal.invert{color:#597bfc;background-color:#ffffff;border-color:#597bfc;}button.ladda-button.royal.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.royal:disabled{background-color:#305BFF;}button.ladda-button.dodger-blue{background-color:#4353FF;color:#ffffff;}button.ladda-button.dodger-blue.invert{color:#4353FF;background-color:#ffffff;border-color:#4353FF;}button.ladda-button.dodger-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.dodger-blue:disabled{background-color:#2F3AC5;}button.ladda-button.crm-dark-tint-01{background-color:#00889B;color:#ffffff;}button.ladda-button.crm-dark-tint-01.invert{color:#00889B;background-color:transparent;border-color:#00889B;}button.ladda-button.crm-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.crm-dark-tint-01:disabled{background-color:#00889B;}button.ladda-button.brand-green-dark-tint-01{background-color:#00854D;color:#ffffff;}button.ladda-button.brand-green-dark-tint-01.invert{color:#00854D;background-color:transparent;border-color:#00854D;}button.ladda-button.brand-green-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.brand-green-dark-tint-01:disabled{background-color:#00854D;}button.ladda-button.workos-iris{background-color:#6161FF;color:#ffffff;}button.ladda-button.workos-iris.invert{color:#6161FF;background-color:transparent;border-color:#6161FF;}button.ladda-button.workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.workos-iris:disabled{background-color:#6161FF;}button.ladda-button.marketing-red-dark{background-color:#CA0C6B;color:#ffffff;}button.ladda-button.marketing-red-dark.invert{color:#CA0C6B;background-color:transparent;border-color:#CA0C6B;}button.ladda-button.marketing-red-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.marketing-red-dark:disabled{background-color:#CA0C6B;}button.ladda-button.crm-green-dark{background-color:#007474;color:#ffffff;}button.ladda-button.crm-green-dark.invert{color:#007474;background-color:transparent;border-color:#007474;}button.ladda-button.crm-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.crm-green-dark:disabled{background-color:#007474;}button.ladda-button.projects-orange-dark{background-color:#F86700;color:#ffffff;}button.ladda-button.projects-orange-dark.invert{color:#F86700;background-color:transparent;border-color:#F86700;}button.ladda-button.projects-orange-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.projects-orange-dark:disabled{background-color:#F86700;}button.ladda-button.dev-green-dark{background-color:#037F4C;color:#ffffff;}button.ladda-button.dev-green-dark.invert{color:#037F4C;background-color:transparent;border-color:#037F4C;}button.ladda-button.dev-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.dev-green-dark:disabled{background-color:#037F4C;}button.ladda-button.space-blue{background-color:#0F1048;color:#ffffff;}button.ladda-button.space-blue.invert{color:#0F1048;background-color:#ffffff;border-color:#0F1048;}button.ladda-button.space-blue.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.space-blue:disabled{background-color:#02032C;}button.ladda-button.black,button.ladda-button.Black{background-color:#000000;color:#ffffff;}button.ladda-button.black.invert,button.ladda-button.Black.invert{color:#333333;background-color:#ffffff;border-color:#333333;}button.ladda-button.black.invert:hover,button.ladda-button.Black.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.black:disabled,button.ladda-button.Black:disabled{background-color:#000000;}button.ladda-button.white{background-color:#ffffff;color:#333333;}button.ladda-button.white.invert{color:#ffffff;background-color:transparent;border-color:#ffffff;}button.ladda-button.white.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white:disabled{background-color:#ffffff;}button.ladda-button.white-iris{background-color:#ffffff;color:#6161FF;}button.ladda-button.white-iris.invert{color:#ffffff;background-color:#6161FF;border-color:#ffffff;}button.ladda-button.white-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white-iris:disabled{background-color:#ffffff;}button.ladda-button.gradiant-workos-iris{background:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);color:#ffffff;}button.ladda-button.gradiant-workos-iris.invert{color:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);background:#ffffff;border-color:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);}button.ladda-button.gradiant-workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.gradiant-workos-iris:disabled{background:linear-gradient(90deg, #5034FF 25.69%, #B4B4FF 100%);}button.ladda-button.white-dodger{background-color:#ffffff;color:#4353FF;}button.ladda-button.white-dodger.invert{color:#ffffff;background-color:#4353FF;border-color:#ffffff;}button.ladda-button.white-dodger.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.white-dodger:disabled{background-color:#ffffff;}button.ladda-button.workforms-red{background-color:#C21E71;color:#ffffff;}button.ladda-button.workforms-red.invert{color:#C21E71;background-color:#ffffff;border-color:#C21E71;}button.ladda-button.workforms-red.invert:hover{box-shadow:inset 0 0 0 1px;}button.ladda-button.workforms-red:disabled{background-color:#C21E71;}button.ladda-button.with-border{border-width:1px;border-style:solid;}"
            }}
          />
          <style
            id="__jsx-3148497380"
            dangerouslySetInnerHTML={{
              __html:
                "button.ladda-button.small{font-size:0.8125rem;padding:12px 9vw;font-weight:300;}button.ladda-button.xs{font-size:0.8125rem;padding:8px 16px;font-weight:300;}button.ladda-button.sm{font-size:0.8125rem;padding:16px 32px;font-weight:300;}button.ladda-button.xl{font-size:1rem;padding:16px 120px;font-weight:400;}"
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
