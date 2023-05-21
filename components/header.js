import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <div className="jsx-3927383352 base-layout-segment-component base-layout-segment-component-0">
      <div className="jsx-3173110700 regular-header-component">
        <div className="jsx-308082724 base-header-component">
          <div className="jsx-308082724 desktop-wrapper">
            <header className="jsx-2928970979 base-header-desktop-component">
              <div className="jsx-2776966822 basic-header-component">
                <div className="jsx-2776966822 basic-header-content-wrapper">
                  <div className="jsx-2776966822 basic-header-content">
                    <div className="jsx-2776966822 main-logo-wrapper">
                      <a href="/" target="_self">
                        <picture className="jsx-4212101279 picture-component">
                          <img
                            alt="monday.com logo"
                            className="jsx-4212101279 base-header-monday-logo-image"
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
                          />
                        </picture>
                      </a>
                    </div>
                    <nav
                      aria-label="Main"
                      className="jsx-2008225623 base-header-desktop-content"
                    >
                      <div className="jsx-2008225623 left-side-header-links">
                        <div
                          role="list"
                          className="jsx-2008225623 absolute-main-links"
                        >
                          <div
                            className="link-item-with-menu-component-wrapper"
                            role="listitem"
                          >
                            <div
                              role="link"
                              tabIndex={0}
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="jsx-4115554422 link-item-with-menu-component"
                            >
                              <span className="jsx-4115554422 link-item-with-menu-title">
                                Products
                              </span>
                              <svg
                                width={256}
                                height={256}
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                className="link-item-with-menu-icon"
                              >
                                <path
                                  d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                  fill="#000"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </div>
                          <div />
                          <div
                            className="link-item-with-menu-component-wrapper"
                            role="listitem"
                          >
                            <div
                              role="link"
                              tabIndex={0}
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="jsx-4115554422 link-item-with-menu-component"
                            >
                              <span className="jsx-4115554422 link-item-with-menu-title">
                                Teams
                              </span>
                              <svg
                                width={256}
                                height={256}
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                className="link-item-with-menu-icon"
                              >
                                <path
                                  d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                  fill="#000"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </div>
                          <div />
                          <div
                            className="link-item-with-menu-component-wrapper"
                            role="listitem"
                          >
                            <div
                              role="link"
                              tabIndex={0}
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="jsx-4115554422 link-item-with-menu-component"
                            >
                              <span className="jsx-4115554422 link-item-with-menu-title">
                                Platform
                              </span>
                              <svg
                                width={256}
                                height={256}
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                className="link-item-with-menu-icon"
                              >
                                <path
                                  d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                  fill="#000"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </div>
                          <div />
                          <div
                            className="link-item-with-menu-component-wrapper"
                            role="listitem"
                          >
                            <div
                              role="link"
                              tabIndex={0}
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="jsx-4115554422 link-item-with-menu-component"
                            >
                              <span className="jsx-4115554422 link-item-with-menu-title">
                                Resources
                              </span>
                              <svg
                                width={256}
                                height={256}
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                                className="link-item-with-menu-icon"
                              >
                                <path
                                  d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                                  fill="#000"
                                  fillRule="nonzero"
                                />
                              </svg>
                            </div>
                          </div>
                          <div />
                        </div>
                      </div>
                      <div className="jsx-2008225623 right-side-header-links">
                        <div className="jsx-2008225623 link-item-component-wrapper">
                          <a
                            href="/pricing"
                            tabIndex={0}
                            className="jsx-2138693134 link-item-component"
                          >
                            Pricing
                          </a>
                        </div>
                        <div
                          className="link-item-component-wrapper"
                          role="listitem"
                        >
                          <a
                            href="/sales/contact-us?from=header&source=Website%20-%20Contact%20Sales"
                            tabIndex={0}
                            className="jsx-2138693134 link-item-component"
                          >
                            Contact sales
                          </a>
                        </div>
                        <div className="jsx-2008225623 link-item-component-wrapper">
                          <a
                            href="//auth.monday.com/login"
                            tabIndex={0}
                            className="jsx-2138693134 link-item-component"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                      <div className="jsx-2008225623 header-button-wrapper">
                        <div className="jsx-2396283946 button">
                          <div className="jsx-2347587978 signup-button">
                            <div className="jsx-875249827 error-handling-component">
                              <div className="jsx-1473421095 shake stop">
                                <div className="jsx-1336934735 signup-form-core-component-wrapper jsx-2396283946">
                                  <form
                                    action="//auth.monday.com/users/sign_up_new?source=web_main&origin=hp_fullbg_page_header"
                                    data-origin="hp_fullbg_page_header"
                                    method="POST"
                                    noValidate
                                    className="jsx-1336934735 signup-form"
                                  >
                                    <div className="jsx-1336934735 signup-button-wrapper button-with-arrow">
                                      <button
                                        className="ladda-button signup-button workos-iris xs disable-animation has-arrow"
                                        data-style="zoom-in"
                                        data-size="xl"
                                        type="button"
                                        data-button-color="workos-iris"
                                      >
                                        <span className="ladda-label">
                                          <span className="jsx-1336934735 signup-text">
                                            Get Started
                                          </span>
                                          <span className="jsx-2730172878 arrow-wrapper xs signup">
                                            <svg
                                              width={10}
                                              height={14}
                                              viewBox="0 0 9 7"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                                              />
                                            </svg>
                                          </span>
                                        </span>
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="jsx-308082724 mobile-wrapper">
            <header className="jsx-2770025641 base-header-mobile-component">
              <div className="jsx-2776966822 basic-header-component mobile-basic-header">
                <div className="jsx-2776966822 basic-header-content-wrapper">
                  <div className="jsx-2776966822 basic-header-content">
                    <div className="jsx-2776966822 main-logo-wrapper">
                      <a href="/" target="_self">
                        <picture className="jsx-4212101279 picture-component">
                          <img
                            alt="monday.com logo"
                            className="jsx-4212101279 base-header-monday-logo-image"
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
                          />
                        </picture>
                      </a>
                    </div>
                    <div className="jsx-2770025641 mobile-menu-right-section">
                      <div
                        aria-label="Main menu"
                        role="navigation"
                        className="jsx-2770025641 mobile-header-content"
                      >
                        <div
                          tabIndex={0}
                          aria-label="Open Menu"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          role="button"
                          className="jsx-2683879663 hamburger-menu"
                        >
                          <span className="jsx-2683879663 hamburger-menu-line" />
                          <span className="jsx-2683879663 hamburger-menu-line" />
                          <span className="jsx-2683879663 hamburger-menu-line" />
                          <span className="jsx-2683879663 hamburger-menu-line" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jsx-2770025641 header-menu-component-wrapper">
                <div className="jsx-1474266031 header-menu-mobile-component">
                  <div className="jsx-393647336 link-with-menu-mobile-component">
                    <div
                      tabIndex={0}
                      aria-label="Products"
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="jsx-393647336 link-with-menu-title-wrapper"
                    >
                      <span className="jsx-393647336 link-with-menu-title-text">
                        Products
                      </span>
                      <svg
                        width={256}
                        height={256}
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="link-with-menu-title-icon"
                      >
                        <path
                          d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                          fill="#000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                    <div
                      style={{ overflow: "hidden", height: 0 }}
                      className="jsx-393647336 link-with-menu-links-wrapper"
                    >
                      <div className="jsx-393647336">
                        <div className="section-wrapper">
                          <div className="section-link">
                            Tailored to your teams' needs
                          </div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/work-management"
                              target="_self"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                              >
                                <path
                                  d="M15.436 2.592c0-1.421-1.097-2.573-2.45-2.573-1.354 0-2.45 1.152-2.45 2.573v2.829c0 1.421 1.096 2.574 2.45 2.574 1.353 0 2.45-1.153 2.45-2.574V2.592z"
                                  fill="url(#paint0_linear_1860_128182)"
                                />
                                <path
                                  d="M5.846 6.202c-1.288-.44-2.67.3-3.089 1.65-.418 1.352.287 2.803 1.575 3.243l2.562.874c1.288.439 2.67-.3 3.09-1.651.417-1.352-.288-2.803-1.575-3.242l-2.563-.874z"
                                  fill="url(#paint1_linear_1860_128182)"
                                />
                                <path
                                  d="M6.148 16.894c-.796 1.15-.553 2.759.541 3.594 1.095.835 2.628.58 3.424-.57l1.584-2.289c.796-1.15.553-2.759-.542-3.594-1.095-.835-2.627-.58-3.423.57l-1.584 2.289z"
                                  fill="url(#paint2_linear_1860_128182)"
                                />
                                <path
                                  d="M15.93 19.889c.796 1.15 2.329 1.405 3.424.57 1.094-.835 1.337-2.444.54-3.594l-1.583-2.289c-.796-1.15-2.329-1.405-3.423-.57-1.095.835-1.338 2.444-.542 3.594l1.584 2.289z"
                                  fill="url(#paint3_linear_1860_128182)"
                                />
                                <path
                                  d="M13.01 13.86c1.342 0 2.43-1.143 2.43-2.553s-1.088-2.552-2.43-2.552c-1.343 0-2.432 1.142-2.432 2.552 0 1.41 1.089 2.553 2.431 2.553zM5.077 11.206c1.35 0 2.445-1.15 2.445-2.566 0-1.418-1.094-2.567-2.445-2.567-1.35 0-2.444 1.15-2.444 2.567 0 1.417 1.094 2.566 2.444 2.566zM12.986 5.142c1.353 0 2.449-1.151 2.449-2.571C15.435 1.15 14.339 0 12.986 0c-1.353 0-2.449 1.151-2.449 2.57 0 1.42 1.096 2.572 2.45 2.572zM8.129 20.986c1.355 0 2.453-1.153 2.453-2.576 0-1.422-1.098-2.575-2.453-2.575-1.355 0-2.453 1.153-2.453 2.575 0 1.423 1.098 2.576 2.453 2.576zM17.92 20.959c1.352 0 2.448-1.15 2.448-2.57s-1.095-2.57-2.447-2.57-2.448 1.15-2.448 2.57 1.096 2.57 2.448 2.57z"
                                  fill="#6161FF"
                                />
                                <path
                                  d="M20.154 6.201c1.288-.439 2.67.3 3.089 1.651.418 1.352-.287 2.803-1.575 3.242l-2.562.874c-1.288.44-2.671-.3-3.09-1.65-.417-1.352.288-2.803 1.575-3.243l2.563-.874z"
                                  fill="url(#paint4_linear_1860_128182)"
                                />
                                <path
                                  d="M20.923 11.206c-1.35 0-2.445-1.15-2.445-2.567 0-1.417 1.095-2.566 2.445-2.566 1.35 0 2.444 1.149 2.444 2.566 0 1.418-1.094 2.567-2.444 2.567z"
                                  fill="#6161FF"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1860_128182"
                                    x1="12.97"
                                    y1="-4.924"
                                    x2="13.029"
                                    y2="8.508"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset=".411"
                                      stopColor="#6C6CFF"
                                      stopOpacity=".9"
                                    />
                                    <stop
                                      offset={1}
                                      stopColor="#6C6CFF"
                                      stopOpacity=".1"
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1860_128182"
                                    x1="-1.726"
                                    y1="6.341"
                                    x2="10.566"
                                    y2="10.092"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset=".411"
                                      stopColor="#6C6CFF"
                                      stopOpacity=".9"
                                    />
                                    <stop
                                      offset={1}
                                      stopColor="#6C6CFF"
                                      stopOpacity=".1"
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint2_linear_1860_128182"
                                    x1="3.935"
                                    y1="24.497"
                                    x2="11.898"
                                    y2="13.963"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset=".411"
                                      stopColor="#6C6CFF"
                                      stopOpacity=".9"
                                    />
                                    <stop
                                      offset={1}
                                      stopColor="#6C6CFF"
                                      stopOpacity=".1"
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint3_linear_1860_128182"
                                    x1="22.134"
                                    y1="24.448"
                                    x2="14.085"
                                    y2="13.987"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset=".411"
                                      stopColor="#6C6CFF"
                                      stopOpacity=".9"
                                    />
                                    <stop
                                      offset={1}
                                      stopColor="#6C6CFF"
                                      stopOpacity=".1"
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint4_linear_1860_128182"
                                    x1="27.726"
                                    y1="6.341"
                                    x2="15.434"
                                    y2="10.091"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop
                                      offset=".411"
                                      stopColor="#6C6CFF"
                                      stopOpacity=".9"
                                    />
                                    <stop
                                      offset={1}
                                      stopColor="#6C6CFF"
                                      stopOpacity=".1"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                              monday work management
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/crm"
                              target="_self"
                            >
                              <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.646 12.818a.563.563 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.458 8.458 0 0 0 1.87 4.743 8.32 8.32 0 0 0 4.817 2.914 8.264 8.264 0 0 0 5.554-.832 8.385 8.385 0 0 0 3.77-4.2c.739-1.798.836-3.8.276-5.662a8.408 8.408 0 0 0-3.345-4.553 8.272 8.272 0 0 0-7.124-1.032 8.295 8.295 0 0 0-1.691.747 8.374 8.374 0 0 1 3.079 3.131l.002-.036.017.03a8.472 8.472 0 0 1 1.067 3.56z"
                                  fill="#00A0A0"
                                />
                                <ellipse
                                  cx="8.333"
                                  cy="13.414"
                                  rx="8.333"
                                  ry="8.413"
                                  fill="#fff"
                                />
                                <ellipse
                                  cx="8.333"
                                  cy="13.414"
                                  rx="8.333"
                                  ry="8.413"
                                  fill="url(#paint0_linear_1_20)"
                                />
                                <path
                                  d="M12.502 20.7a8.425 8.425 0 0 0 4.165-7.287c.007-.34-.021-.595-.021-.595a.568.568 0 0 1-.572.595H8.926a.563.563 0 0 0-.572.595 8.459 8.459 0 0 0 1.87 4.743 8.353 8.353 0 0 0 2.277 1.95z"
                                  fill="url(#paint1_linear_1_20)"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_20"
                                    x1="2.538"
                                    y1="8.363"
                                    x2="16.723"
                                    y2="15.544"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00D2D2" />
                                    <stop
                                      offset={1}
                                      stopColor="#00D2D2"
                                      stopOpacity=".29"
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1_20"
                                    x1="17.571"
                                    y1="17.755"
                                    x2="4.308"
                                    y2="15.018"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00A0A0" />
                                    <stop offset={1} stopColor="#00D2D2" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              monday sales CRM
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/dev"
                              target="_self"
                            >
                              <svg
                                width={25}
                                height={25}
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1_22)">
                                  <path
                                    d="M13.319 8.717l-.045-5.75c-.488-.052-.976-.029-1.464.011-4.337.407-7.685 3.951-7.594 8.186.074 3.428 2.281 5.681 4.007 6.92 2.458 1.763 5.356 2.494 8.334 2.81 1.754.185 3.602.27 4.904.241l1.483-.03a.567.567 0 0 0 .451-.237l1.645-2.311a.565.565 0 0 0-.012-.673l-1.714-2.23a.567.567 0 0 0-.46-.22l-1.515.029c-.99.021-2.572-.045-4.119-.21-1.925-.203-3.833-.563-5.431-1.71-1.04-.746-1.622-1.57-1.642-2.506-.024-1.124.774-2.083 1.866-2.35a2.435 2.435 0 0 1 1.306.03z"
                                    fill="url(#paint0_linear_1_22)"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.514 8.05c.006.312.268.553.575.614 1.103.22 1.942 1.144 1.966 2.268.02.937-.526 1.784-1.532 2.574-1.565 1.228-3.422 1.653-5.354 1.942-1.538.23-3.115.364-4.106.385l-1.445.022a.567.567 0 0 0-.529.387L.563 20.82a.566.566 0 0 0 .548.744l2.128-.037.946-.02c1.303-.028 3.145-.192 4.89-.452 1.592-.238 3.515-.613 4.836-1.207l.004-.001a13.844 13.844 0 0 0 3.365-1.956c1.67-1.311 3.78-3.657 3.706-7.085-.092-4.26-3.63-7.672-8.015-7.857a.54.54 0 0 0-.555.56l.098 4.541z"
                                    fill="url(#paint1_linear_1_22)"
                                  />
                                  <path
                                    opacity=".6"
                                    d="M19.6 15.433a40.316 40.316 0 0 1-2.38-.18c-1.583-.167-3.153-.44-4.55-1.17-1.37.796-2.91 1.127-4.5 1.365-.81.12-1.63.215-2.37.28.742 1.009 1.633 1.789 2.423 2.356 1.428 1.024 3.005 1.7 4.66 2.15a9.734 9.734 0 0 0 1.028-.387l.004-.001a13.843 13.843 0 0 0 3.364-1.956c.766-.6 1.623-1.418 2.32-2.457z"
                                    fill="#019152"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_1_22"
                                    x1="8.643"
                                    y1="10.43"
                                    x2="13.867"
                                    y2="19.303"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00C875" />
                                    <stop offset={1} stopColor="#2EAE67" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_1_22"
                                    x1="14.134"
                                    y1="11.595"
                                    x2="-2.952"
                                    y2="22.154"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00CA72" />
                                    <stop offset={1} stopColor="#C0FFE5" />
                                  </linearGradient>
                                  <clipPath id="clip0_1_22">
                                    <path fill="#fff" d="M0 0h25v25H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                              monday dev
                            </a>
                          </div>
                        </div>
                        <div className="section-wrapper">
                          <div className="section-link">More by monday.com</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="https://workforms.monday.com"
                              target="_blank"
                            >
                              WorkForms
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="//workcanvas.com"
                              target="_blank"
                            >
                              Canvas
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-393647336 link-with-menu-mobile-component">
                    <div
                      tabIndex={0}
                      aria-label="Use cases"
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="jsx-393647336 link-with-menu-title-wrapper"
                    >
                      <span className="jsx-393647336 link-with-menu-title-text">
                        Use cases
                      </span>
                      <svg
                        width={256}
                        height={256}
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="link-with-menu-title-icon"
                      >
                        <path
                          d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                          fill="#000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                    <div
                      style={{ overflow: "hidden", height: 0 }}
                      className="jsx-393647336 link-with-menu-links-wrapper"
                    >
                      <div className="jsx-393647336">
                        <div className="section-wrapper">
                          <div className="section-link">By team</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/work-management/marketing"
                              target="_self"
                            >
                              Marketing
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/dev"
                              target="_self"
                            >
                              Developers
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/operations"
                              target="_self"
                            >
                              Operations
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/use-cases/hr-management-software"
                              target="_self"
                            >
                              HR
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/crm"
                              target="_self"
                            >
                              Sales
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/project-management"
                              target="_self"
                            >
                              PMO
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/use-cases/it-operations"
                              target="_self"
                            >
                              IT
                            </a>
                          </div>
                        </div>
                        <div className="section-wrapper">
                          <div className="section-link">By business size</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/enterprise"
                              target="_self"
                            >
                              Enterprise
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/smb"
                              target="_self"
                            >
                              Small business
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/nonprofits"
                              target="_self"
                            >
                              Nonprofit
                            </a>
                          </div>
                        </div>
                        <div className="section-wrapper">
                          <div className="section-link">By workflow</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/project-management"
                              target="_self"
                            >
                              Project management
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/use-cases/remote-work"
                              target="_self"
                            >
                              Remote work
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/inventory-tracking"
                              target="_self"
                            >
                              Inventory tracking
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/enterprise-agile"
                              target="_self"
                            >
                              Enterprise agility &amp; OKR
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/templates"
                              target="_self"
                            >
                              200+ workflows
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-393647336 link-with-menu-mobile-component">
                    <div
                      tabIndex={0}
                      aria-label="Features"
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="jsx-393647336 link-with-menu-title-wrapper"
                    >
                      <span className="jsx-393647336 link-with-menu-title-text">
                        Features
                      </span>
                      <svg
                        width={256}
                        height={256}
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="link-with-menu-title-icon"
                      >
                        <path
                          d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                          fill="#000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                    <div
                      style={{ overflow: "hidden", height: 0 }}
                      className="jsx-393647336 link-with-menu-links-wrapper"
                    >
                      <div className="jsx-393647336">
                        <div className="section-wrapper">
                          <div className="section-link">Key features</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/features/dashboards"
                              target="_self"
                            >
                              Dashboards
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/integrations"
                              target="_self"
                            >
                              Integrations
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/features/automations"
                              target="_self"
                            >
                              Automations
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/features/gantt"
                              target="_self"
                            >
                              Gantt
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/features/kanban"
                              target="_self"
                            >
                              Kanban
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/workdocs"
                              target="_self"
                            >
                              Docs
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/features/files"
                              target="_self"
                            >
                              Files
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/features/forms"
                              target="_self"
                            >
                              Forms
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-393647336 link-with-menu-mobile-component">
                    <div
                      tabIndex={0}
                      aria-label="Resources"
                      role="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="jsx-393647336 link-with-menu-title-wrapper"
                    >
                      <span className="jsx-393647336 link-with-menu-title-text">
                        Resources
                      </span>
                      <svg
                        width={256}
                        height={256}
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="link-with-menu-title-icon"
                      >
                        <path
                          d="M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z"
                          fill="#000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </div>
                    <div
                      style={{ overflow: "hidden", height: 0 }}
                      className="jsx-393647336 link-with-menu-links-wrapper"
                    >
                      <div className="jsx-393647336">
                        <div className="section-wrapper">
                          <div className="section-link">Learn</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/helpcenter/"
                              target="_self"
                            >
                              Help center
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/p/about/"
                              target="_self"
                            >
                              About us
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="//monday.com/blog"
                              target="_self"
                            >
                              Blog
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/p/certificate/"
                              target="_self"
                            >
                              Certifications
                            </a>
                          </div>
                        </div>
                        <div className="section-wrapper">
                          <div className="section-link">Connect</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/helpcenter/"
                              target="_self"
                            >
                              24/7 support
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/partnership"
                              target="_self"
                            >
                              Partners
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/p/events-hub/"
                              target="_self"
                            >
                              Global events
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="//community.monday.com"
                              target="_self"
                            >
                              Community
                            </a>
                          </div>
                        </div>
                        <div className="section-wrapper">
                          <div className="section-link">Build</div>
                          <div>
                            <a
                              className="header-link subsection-link"
                              href="/appdeveloper"
                              target="_self"
                            >
                              App development
                            </a>
                            <a
                              className="header-link subsection-link"
                              href="/templates"
                              target="_self"
                            >
                              Template center
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/pricing"
                    className="jsx-3792945056 link-mobile-component"
                  >
                    Pricing
                  </a>
                  <a
                    href="/sales/contact-us?from=header&source=Website%20-%20Contact%20Sales"
                    className="jsx-3792945056 link-mobile-component"
                  >
                    Contact sales
                  </a>
                  <a
                    href="//auth.monday.com/login"
                    className="jsx-3792945056 link-mobile-component"
                  >
                    Log in
                  </a>
                  <div className="jsx-1474266031 download-mobile-app-component-wrapper">
                    <div className="jsx-862816351 download-mobile-app-component">
                      <picture className="jsx-4212101279 picture-component">
                        <img
                          alt="Download on the App Store Badge US UK RGB blk 092917 1"
                          className="jsx-4212101279 download-mobile-app-image"
                          src="https://dapulse-res.cloudinary.com/image/upload/mobile_menu/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_1.png"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="jsx-1474266031 monday-link-wrapper">
                    <picture className="jsx-4212101279 picture-component">
                      <img
                        alt="Monday"
                        className="jsx-4212101279"
                        src="https://dapulse-res.cloudinary.com/image/upload/mobile_menu/Monday.png"
                      />
                    </picture>
                    <div className="jsx-1474266031 monday-link-text-wrapper">
                      <div className="jsx-3504695916 secondary-button">
                        <a
                          href="/"
                          target="_self"
                          className="jsx-3504695916 with-underline"
                        >
                          <span className="jsx-3504695916 secondary-button-text">
                            Go to homepage
                          </span>
                          <span className="jsx-3504695916 arrow-wrapper">
                            <svg
                              width={10}
                              height={14}
                              viewBox="0 0 9 7"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
