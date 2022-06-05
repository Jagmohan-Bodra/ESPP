export const swiperScrollbarStyle = `
.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}
`;
export const swiperNavigationStyle = `
:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(-1 * var(--swiper-navigation-size)/ 2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}
`;
export const swiperBundleStyle = `
:not(pre) > code {
  font-family: monospace;
  background-color: #eee;
  padding: 3px;
}

blockquote {
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
}

.image-default {
  display: block;
  max-width: 100%;
  max-height: 20em;
  pointer-events: none;
}
.swiper-container {
  width: 100%;
  height: 300px;
}
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');
  font-weight: 400;
  font-style: normal;
}
:root {
  --swiper-theme-color: #007aff;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
}
.swiper-container-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-container-multirow > .swiper-wrapper {
  flex-wrap: wrap;
}
.swiper-container-multirow-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}
.swiper-container-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-container-pointer-events {
  touch-action: pan-y;
}
.swiper-container-pointer-events.swiper-container-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}
.swiper-container-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
/* 3D Effects */
.swiper-container-3d {
  perspective: 1200px;
}
.swiper-container-3d .swiper-wrapper,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
/* CSS Mode */
.swiper-container-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  text-transform: none;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 10px;
  right: auto;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: 'next';
}
.swiper-button-prev.swiper-button-white,
.swiper-button-next.swiper-button-white {
  --swiper-navigation-color: #ffffff;
}
.swiper-button-prev.swiper-button-black,
.swiper-button-next.swiper-button-black {
  --swiper-navigation-color: #000000;
}
.swiper-button-lock {
  display: none;
}
:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}
.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}
.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progressbar,
.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-vertical > .swiper-pagination-progressbar,
.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-white {
  --swiper-pagination-color: #ffffff;
}
.swiper-pagination-black {
  --swiper-pagination-color: #000000;
}
.swiper-pagination-lock {
  display: none;
}
/* Scrollbar */
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
}
.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}
.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > img,
.swiper-zoom-container > svg,
.swiper-zoom-container > canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.swiper-slide-zoomed {
  cursor: move;
}
/* Preloader */
:root {
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  */
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  animation: swiper-preloader-spin 1s infinite linear;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  100% {
    transform: rotate(360deg);
  }
}
/* a11y */
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube {
  overflow: visible;
}
.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-cube.swiper-container-rtl .swiper-slide {
  transform-origin: 100% 0;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-prev,
.swiper-container-cube .swiper-slide-next + .swiper-slide {
  pointer-events: auto;
  visibility: visible;
}
.swiper-container-cube .swiper-slide-shadow-top,
.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 0;
}
.swiper-container-cube .swiper-cube-shadow:before {
  content: '';
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  -webkit-filter: blur(50px);
  filter: blur(50px);
}
.swiper-container-flip {
  overflow: visible;
}
.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  z-index: 1;
}
.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-flip .swiper-slide-shadow-top,
.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right {
  z-index: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
`;

export const editStyle = `
.empty-component {
  width: 100%;
  min-height: 500px;
  border: 1px solid #4b4b4b;
  background-color: #4b4b4b70;
}
.h-10p {
  height: 100%;
}
.component-selected {
  position: relative;
}

.craft_edit_enabled .craft-block {
  position: relative;
  display: block;
  width: 100%;
   }
  .craft_edit_enabled .craft-block:hover::before {
    content: " ";
    position: absolute;
    border: 1px solid #9e9;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    height: 100%;
    text-align: left;
    color: black;
    font-size: 12px;
  }
  .craft_edit_enabled .craft-block > .handle-select-node {
    display : none;
  }
  .craft_edit_enabled .selected:hover > .handle-select-node{
    display : none !important;
  }
  .craft_edit_enabled .craft-block:hover > .handle-select-node{
    position: absolute;
    display : block;
    right: 0;
    top:0;
    z-index: 100;
  }
  .craft_edit_enabled .craft-block.selected::before {
    border: 1px solid #e99;
    text-align: left;
    color: black;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    height: 100%;
    z-index: 0;
    font-size: 12px; }

.craft_edit_enabled .btn-mod-edit {
  margin: 0;
  position: absolute;
  top: 6px;
  height: 0px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; }
  .craft_edit_enabled .btn-mod-edit button {
    display: flex;
    justify-content: center;
    height: 15px;
    font-size: 12px;
    line-height: 0.5em;
    color: wheat; }
    .craft_edit_enabled .btn-mod-edit button.mobile-m {
      width: 375px; }
    .craft_edit_enabled .btn-mod-edit button.tablet {
      width: 768px; }
    .craft_edit_enabled .btn-mod-edit button.laptop {
      width: 1024px; }
    .craft_edit_enabled .btn-mod-edit button.pc {
      width: 1440px; }
    .craft_edit_enabled .btn-mod-edit button.bg-b {
      background-color: #1ba1e2; }

.craft_edit_enabled .center-flex {
  width: 100%; }
  .craft_edit_enabled .center-flex .center-div {
    margin: auto;
    height: 100vh; }
    .craft_edit_enabled .center-flex .center-div.mobile-m {
      width: 375px; }
    .craft_edit_enabled .center-flex .center-div.tablet {
      width: 768px; }
    .craft_edit_enabled .center-flex .center-div.laptop {
      width: 1024px; }
    .craft_edit_enabled .center-flex .center-div.pc {
      width: 1440px; }
      .editor_layout {
        position: absolute;
        box-sizing: border-box;
        z-index: 1000;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
      }
      
      .editor_layout_menu {
        position: absolute;
        box-sizing: border-box;
        z-index: 1000;
        margin: 0;
        padding: 0;
        bottom: 0;
        left: 0;
      }
`;

export const defaultStyle = `
.page_container {
  padding-bottom: 50px !important;
}
code {
  font-family: monospace;
}

[data-slate-editor] > * + * {
  margin-top: 1em;
}
pre {
  padding: 10px;
  background-color: #eee;
  white-space: pre-wrap;
}

pre {
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0px;
}

.payment-form label {
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #666;
  display: inline-block;
  margin-bottom: .5rem;
}

.payment-form .ant-select {
  margin-right: 25px;
}

.payment-box-form-address {
  display: flex;
  justify-content: space-between;
}

.payment-box-form-address .payment-input-address {
  margin-right: 25px;
  width: 100%;
}

.payment-box-form-address .payment-input-postal-code {
  max-width: 200px;
}

.payment-form .form-children {
  margin: 55px 0;
  padding: 20px 40px;
  background-color: white;
  box-shadow: 0px 0px 7px #AAA;
}

.btn-payment-content {
  padding-top: 100px;
  text-align: center;
}

.btn-payment-content button {
  background-color: #f2dfd2;
  width: 250px;
  border-radius: 30px;
  border: 0;
  color: #666;
  font-weight: 800;
  font-size: 20px;
  padding: 15px;
  box-shadow: 5px 6px 6px 0px rgba(0, 0, 0, 0.2);
  height: 50px;
}

.form-check-label a {
  color: blue;
  margin: 5px;
}

.block-page-payment .payment-form label {
  font-weight: 700;
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: inherit;
  line-height: inherit;
}


.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-group {
  margin-bottom: 1rem;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.block-page-payment .btn-payment-content {
  padding-top: 100px;
  text-align: center;
}

.ant-select.form-control {
  height: auto;
  padding: 0;
  .ant-select-selector {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
}

.block-page-payment .payment-box-form-date {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
}

.ant-menu-root .ant-menu-item .icon {
  margin-right: 7px;
}

.ant-menu-horizontal {
  background: transparent;
}

.ant-menu-horizontal {
  border-bottom: unset;
}

.ant-menu-submenu-title {
  border-bottom: 0px solid #1890ff !important;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
  color: #1890ff;
  border-bottom: 0px solid #1890ff !important;
}
.flex-div {
  display: flex;
  width: 100%;
  height: 100%;
}

.flex-div .middle-flex-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.default-craft {
  min-height: 100px;
}

.padding-default {
  padding: 10px;
}

.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.form-checkbox-agree {
  display: flex;
}
.checkbox-agree {
  margin: 5px 10px 0px 0px;
}

@media (min-width: 576px) {
  .container {
      max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
      max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
      max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

`;
export const joditStyle = `
 .jodit-wysiwyg{outline:0}.jodit-wysiwyg::-moz-selection, 
 .jodit-wysiwyg ::-moz-selection{background:#b5d6fd;color:#4c4c4c}
 .jodit-wysiwyg::selection,.jodit-wysiwyg ::selection{background:#b5d6fd;color:#4c4c4c}
 .jodit-container:not(.jodit_inline) 
 .jodit-wysiwyg{position:relative;padding:8px;margin:0;outline:0;overflow-x:auto}
 .jodit-container:not(.jodit_inline) .jodit-wysiwyg img{position:relative;max-width:100%}.jodit-container:not(.jodit_inline) 
 .jodit-wysiwyg jodit-media{position:relative}.jodit-container:not(.jodit_inline) .jodit-wysiwyg jodit-media *{position:relative;z-index:0}.jodit-container:not(.jodit_inline) .jodit-wysiwyg jodit-media:before{position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;content:""}.jodit-form{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;color:#4c4c4c}.jodit-form.jodit_error{border-color:#ff3b3b;-webkit-box-shadow:inset 0 0 3px 0 hsla(0,0%,74.1%,.3);box-shadow:inset 0 0 3px 0 hsla(0,0%,74.1%,.3)}@media (max-width:768px){.jodit-form{min-width:150px}}.jodit-form button{height:36px;padding:8px;border:none;margin-top:8px;margin-bottom:8px;background:#d6d6d6;color:#4c4c4c;cursor:pointer;font-size:16px;line-height:1;outline:none;text-decoration:none;-webkit-transition:background .2s ease 0s;-o-transition:background .2s ease 0s;transition:background .2s ease 0s}.jodit-form button:hover{background-color:#ecebe9;color:#4c4c4c}.jodit-form button:active{background:#ecebe9;color:#4c4c4c}.jodit-form label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:8px;text-align:left;white-space:nowrap}.jodit-form label:last-child{margin-bottom:0}.jodit-form .jodit-form__center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit .jodit-input{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;border:1px solid #dadada;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none}.jodit .jodit-select{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;border:1px solid #dadada;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none}.jodit .jodit-textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;border:1px solid #dadada;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none}.jodit .jodit-input[disabled]{background-color:#f0f0f0;color:#dadada}.jodit .jodit-select[disabled]{background-color:#f0f0f0;color:#dadada}.jodit .jodit-textarea[disabled]{background-color:#f0f0f0;color:#dadada}.jodit .jodit-input_has-error_true{border-color:#ff3b3b}.jodit .jodit-select_has-error_true{border-color:#ff3b3b}.jodit .jodit-textarea_has-error_true{border-color:#ff3b3b}.jodit .jodit-input:focus{border-color:#66afe9;outline:0}.jodit-checkbox{position:relative;z-index:2;width:16px;height:16px;padding:0;border:0;margin:0 calc(8px/2) 0 0;cursor:pointer;outline:none}.jodit-select{padding-right:calc(8px*2);background-image:url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6IzQ0NH08L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQuOTV2MTBIMHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xLjQxIDQuNjdsMS4wNy0xLjQ5IDEuMDYgMS40OUgxLjQxek0zLjU0IDUuMzNMMi40OCA2LjgyIDEuNDEgNS4zM2gyLjEzeiIvPjwvc3ZnPg==);background-position:98% 50%;background-repeat:no-repeat}.jodit-textarea{height:auto}.jodit-form__group{min-width:180px}.jodit-textarea{min-width:180px}.jodit-form__group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:8px}.jodit-button{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:auto;height:calc(8px*4);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 8px;border:0;margin:0;background-color:rvar(--jd-color-gray);border-radius:.25rem;color:#4c4c4c;cursor:pointer;line-height:1;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit-button svg{display:inline-block;width:24px;height:24px}.jodit-button svg+span{margin-left:calc(8px/2)}.jodit-button:active,.jodit-button:focus{outline:0}.jodit-button.disabled{opacity:.7}.jodit-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px}.jodit-button .jodit_icon,.jodit-button svg,.jodit-dialog__header 
 .jodit_icon,.jodit-dialog__header svg{display:inline-block;width:16px;height:16px;vertical-align:middle}.jodit-button-group{display:-webkit-box;display:-ms-flexbox;display:flex}.jodit-button-group input{display:none}.jodit-button-group button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.jodit-button-group button+button{margin-left:-1px}.jodit-button-group button:first-child,.jodit-button-group input:first-child+button{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}.jodit-button-group button:last-child,.jodit-button-group input:last-child+button{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.jodit-button-group input[type=checkbox]:checked+button,.jodit-button-group input[type=checkbox]:not(:checked)+button+button{background-image:none;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,.3),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 2px 4px rgba(0,0,0,.3),0 1px 2px rgba(0,0,0,.05)}.jodit_text_icons .jodit_icon{width:auto;font-size:14px}.jodit_text_icons .jodit_icon:first-letter{text-transform:uppercase}.jodit_text_icons .jodit-tabs .jodit-tabs__buttons>a{width:auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}
 .jodit_text_icons .jodit-tabs .jodit-tabs__buttons>a i{width:auto}.jodit_text_icons.jodit-dialog .jodit-button{width:auto;padding:8px;color:rgba(0,0,0,0.75);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.jodit_text_icons.jodit-dialog .jodit-dialog__header a{width:auto;padding:8px;color:rgba(0,0,0,0.75);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}.jodit_text_icons.jodit-dialog .jodit-button .jodit_icon,.jodit_text_icons.jodit-dialog .jodit-dialog__header a .jodit_icon{width:auto}.jodit-grid{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.jodit-grid.jodit-grid_column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media (max-width:480px){.jodit-grid.jodit-grid_xs-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.jodit-grid [class*=jodit_col-]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.jodit-grid .jodit_col-lg-5-5{width:100%}.jodit-grid .jodit_col-lg-4-5{width:80%}.jodit-grid .jodit_col-lg-3-5{width:60%}.jodit-grid .jodit_col-lg-2-5{width:40%}.jodit-grid .jodit_col-lg-1-5{width:20%}.jodit-grid .jodit_col-lg-4-4{width:100%}.jodit-grid .jodit_col-lg-3-4{width:75%}.jodit-grid .jodit_col-lg-2-4{width:50%}.jodit-grid .jodit_col-lg-1-4{width:25%}@media (max-width:992px){.jodit-grid .jodit_col-md-5-5{width:100%}.jodit-grid .jodit_col-md-4-5{width:80%}.jodit-grid .jodit_col-md-3-5{width:60%}.jodit-grid .jodit_col-md-2-5{width:40%}.jodit-grid .jodit_col-md-1-5{width:20%}.jodit-grid .jodit_col-md-4-4{width:100%}.jodit-grid .jodit_col-md-3-4{width:75%}.jodit-grid .jodit_col-md-2-4{width:50%}.jodit-grid .jodit_col-md-1-4{width:25%}}@media (max-width:768px){.jodit-grid .jodit_col-sm-5-5{width:100%}.jodit-grid .jodit_col-sm-4-5{width:80%}.jodit-grid .jodit_col-sm-3-5{width:60%}.jodit-grid .jodit_col-sm-2-5{width:40%}.jodit-grid .jodit_col-sm-1-5{width:20%}.jodit-grid .jodit_col-sm-4-4{width:100%}.jodit-grid .jodit_col-sm-3-4{width:75%}.jodit-grid .jodit_col-sm-2-4{width:50%}.jodit-grid .jodit_col-sm-1-4{width:25%}}@media (max-width:480px){.jodit-grid .jodit_col-xs-5-5{width:100%}.jodit-grid .jodit_col-xs-4-5{width:80%}
 .jodit-grid .jodit_col-xs-3-5{width:60%}.jodit-grid .jodit_col-xs-2-5{width:40%}.jodit-grid .jodit_col-xs-1-5{width:20%}.jodit-grid .jodit_col-xs-4-4{width:100%}.jodit-grid .jodit_col-xs-3-4{width:75%}.jodit-grid .jodit_col-xs-2-4{width:50%}.jodit-grid .jodit_col-xs-1-4{width:25%}}@-webkit-keyframes a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jodit-icon_loader{background:url("data:image/png;base64,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") no-repeat 50%;background-size:100% 100%;width:48px;height:48px;display:inline-block;vertical-align:middle;will-change:transform;-webkit-animation:a 2s ease-out 0s infinite;animation:a 2s ease-out 0s infinite}.jodit-icon{width:14px;height:14px;fill:#4c4c4c;-webkit-transform-origin:0 0!important;-ms-transform-origin:0 0!important;transform-origin:0 0!important;overflow:visible;background:50% no-repeat;background-size:contain}.jodit-icon{stroke:#4c4c4c}.jodit-icon_close{stroke:#4c4c4c}svg.jodit-icon{isolation:isolate;height:auto}.jodit-icon_text{font-size:14px}.jodit,.jodit *,.jodit-container,.jodit-container *{-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-container .jodit-workplace,.jodit .jodit-workplace{position:relative;overflow:auto}.jodit-container .jodit-workplace .jodit-wysiwyg,.jodit-container .jodit-workplace .jodit-wysiwyg_iframe,.jodit .jodit-workplace .jodit-wysiwyg,.jodit .jodit-workplace .jodit-wysiwyg_iframe{width:100%;height:100%}.jodit-container:not(.jodit_inline){border:1px solid #dadada;background-color:#fff;border-radius:3px}.jodit-container:not(.jodit_inline) .jodit-workplace{max-height:100%;border:0 solid #dadada}.jodit-container:not(.jodit_inline).jodit_disabled{background:rvar(--jd-color-gray)}.jodit-container:not(.jodit_inline).jodit_disabled .jodit-workplace{opacity:.4}.jodit_disabled{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.jodit_hidden{display:none!important}.jodit_vertical_middle{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-box{position:static;width:auto;max-width:none;height:auto;padding:0;border:0;margin:0;background:0 0;float:none;outline:0}.jodit-dialog_theme_dark .jodit-toolbar-collection_mode_horizontal:after{background-color:#6b6b6b}.jodit-dialog_theme_dark .jodit-toolbar-editor-collection_mode_horizontal:after{background-color:#6b6b6b}.jodit_theme_dark .jodit-toolbar-collection_mode_horizontal:after{background-color:#6b6b6b}.jodit_theme_dark .jodit-toolbar-editor-collection_mode_horizontal:after{background-color:#6b6b6b}.jodit-dialog_theme_dark.jodit-container{background-color:#575757}.jodit-dialog_theme_dark.jodit-container.jodit_disabled{background-color:#575757}.jodit_theme_dark.jodit-container{background-color:#575757}
 .jodit_theme_dark.jodit-container.jodit_disabled{background-color:#575757}.jodit-dialog_theme_dark.jodit-container:not(.jodit_inline) .jodit-workplace{border-color:#575757}.jodit_theme_dark.jodit-container:not(.jodit_inline) .jodit-workplace{border-color:#575757}.jodit-dialog_theme_dark .jodit-popup__content{background:#575757}.jodit_theme_dark .jodit-popup__content{background:#575757}.jodit-dialog_theme_dark .jodit-toolbar-button__text{color:#d1cccc}.jodit-dialog_theme_dark .jodit-ui-button__text{color:#d1cccc}.jodit_theme_dark .jodit-toolbar-button__text{color:#d1cccc}.jodit_theme_dark .jodit-ui-button__text{color:#d1cccc}.jodit-dialog_theme_dark .jodit-toolbar-button:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-toolbar-button__button:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-toolbar-button__trigger:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-ui-button:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-ui-button__button:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-ui-button__trigger:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-toolbar-button:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-toolbar-button__button:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-toolbar-button__trigger:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-ui-button:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-ui-button__button:hover:not([disabled]){background-color:#787878}.jodit_theme_dark .jodit-ui-button__trigger:hover:not([disabled]){background-color:#787878}.jodit-dialog_theme_dark .jodit-status-bar,.jodit_theme_dark .jodit-status-bar{border-color:rgba(95,92,92,.8);background-color:rgba(95,92,92,.8)}.jodit-dialog_theme_dark .jodit-status-bar{color:#d1cccc}.jodit-dialog_theme_dark .jodit-status-bar .jodit-status-bar__item span{color:#d1cccc}.jodit_theme_dark .jodit-status-bar{color:#d1cccc}.jodit_theme_dark .jodit-status-bar .jodit-status-bar__item span{color:#d1cccc}.jodit-dialog_theme_dark .jodit-toolbar__box:not(:empty){background:#5f5c5c}.jodit_theme_dark .jodit-toolbar__box:not(:empty){background:#5f5c5c}.jodit-dialog_theme_dark .jodit-icon{fill:silver;stroke:silver}.jodit-dialog_theme_dark .jodit-toolbar-button .jodit-toolbar-button__trigger{fill:silver;stroke:silver}.jodit-dialog_theme_dark .jodit__upload-button svg{fill:silver;stroke:silver}.jodit_theme_dark .jodit-icon{fill:silver;stroke:silver}.jodit_theme_dark .jodit-toolbar-button .jodit-toolbar-button__trigger{fill:silver;stroke:silver}.jodit_theme_dark .jodit__upload-button svg{fill:silver;stroke:silver}.jodit-dialog_theme_dark .jodit-icon-close{stroke:silver}.jodit_theme_dark .jodit-icon-close{stroke:silver}.jodit-dialog_theme_dark .jodit-wysiwyg{background-color:#575757;color:#d1cccc}.jodit-dialog_theme_dark .jodit-wysiwyg_iframe{background-color:#575757;color:#d1cccc}.jodit_theme_dark .jodit-wysiwyg{background-color:#575757;color:#d1cccc}.jodit_theme_dark .jodit-wysiwyg_iframe{background-color:#575757;color:#d1cccc}.jodit-dialog_theme_dark .jodit-form input[type=text]{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit-dialog_theme_dark .jodit-form input[type=url]{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit-dialog_theme_dark .jodit-form textarea{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit_theme_dark .jodit-form input[type=text]{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit_theme_dark .jodit-form input[type=url]{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit_theme_dark .jodit-form textarea{border-color:#686767;background-color:rgba(81,81,81,0.41);color:#d1cccc}.jodit-dialog_theme_dark .jodit-form button{background-color:rgba(104,103,103,0.75);color:#d1cccc}.jodit_theme_dark .jodit-form button{background-color:rgba(104,103,103,0.75);color:#d1cccc}.jodit-dialog_theme_dark .jodit-placeholder{color:hsla(0,5.2%,81%,0.8)}.jodit_theme_dark .jodit-placeholder{color:hsla(0,5.2%,81%,0.8)}.jodit-dialog_theme_dark .jodit-drag-and-drop__file-box{color:#d1cccc}.jodit-dialog_theme_dark .jodit_uploadfile_button{color:#d1cccc}.jodit_theme_dark .jodit-drag-and-drop__file-box{color:#d1cccc}.jodit_theme_dark .jodit_uploadfile_button{color:#d1cccc}.jodit-dialog_theme_dark .jodit-drag-and-drop__file-box:hover{background-color:rgba(104,103,103,0.75)}.jodit-dialog_theme_dark .jodit_uploadfile_button:hover{background-color:rgba(104,103,103,0.75)}.jodit_theme_dark .jodit-drag-and-drop__file-box:hover{background-color:rgba(104,103,103,0.75)}.jodit_theme_dark .jodit_uploadfile_button:hover{background-color:rgba(104,103,103,0.75)}.jodit-dialog_theme_dark .jodit-add-new-line:before{border-top-color:#686767}.jodit_theme_dark .jodit-add-new-line:before{border-top-color:#686767}.jodit-dialog_theme_dark .jodit-add-new-line span{border-color:#686767;background:rgba(104,103,103,0.75)}.jodit_theme_dark .jodit-add-new-line span{border-color:#686767;background:rgba(104,103,103,0.75)}.jodit-dialog_theme_dark .jodit-add-new-line span svg{fill:#d1cccc}.jodit_theme_dark .jodit-add-new-line span svg{fill:#d1cccc}.jodit-dialog_theme_dark .jodit-resizer>i{border-color:silver;background:rgba(104,103,103,0.75)}.jodit_theme_dark .jodit-resizer>i{border-color:silver;background:rgba(104,103,103,0.75)}.jodit-dialog_theme_dark .jodit-input{border-color:#444;background-color:#787878;color:#444}.jodit-dialog_theme_dark .jodit-select{border-color:#444;background-color:#787878;color:#444}.jodit_theme_dark .jodit-input{border-color:#444;background-color:#787878;color:#444}.jodit_theme_dark .jodit-select{border-color:#444;background-color:#787878;color:#444}.jodit-dialog_theme_dark.jodit-dialog{background-color:#575757}.jodit_theme_dark.jodit-dialog{background-color:#575757}.jodit-dialog_theme_dark.jodit-dialog .jodit-dialog__header{border-color:#444}.jodit-dialog_theme_dark.jodit-dialog .jodit-filebrowser__files.active .jodit-filebrowser__files-item{border-color:#444}.jodit_theme_dark.jodit-dialog .jodit-dialog__header{border-color:#444}.jodit_theme_dark.jodit-dialog .jodit-filebrowser__files.active .jodit-filebrowser__files-item{border-color:#444}.jodit-dialog_theme_dark.jodit-dialog .jodit-filebrowser__files.active .jodit-filebrowser__files-item-info{background-color:#d1cccc}.jodit_theme_dark.jodit-dialog .jodit-filebrowser__files.active .jodit-filebrowser__files-item-info{background-color:#d1cccc}.jodit-ui-button-icon-text__icon{display:none}.jodit-ui-button-icon-text__icon:not(:empty){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jodit-ui-button-icon-text__text{display:none}.jodit-ui-button-icon-text__text:not(:empty){font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit-ui-button-icon-text_context_menu .jodit-ui-button-icon-text__text{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;padding-left:8px;position:relative}.jodit-ui-button-icon-text_context_menu .jodit-ui-button-icon-text__text:before{content:"";position:absolute;border-left:1px solid #dadada;height:35px;top:calc(8px*-1);left:0}.jodit-ui-button-icon-text__icon:not(:empty)+.jodit-ui-button-icon-text__text:not(:empty){margin-left:8px}.jodit-ui-button-icon-text__icon:empty+.jodit-ui-button-icon-text__text:not(:empty){padding:0 8px}.jodit-ui-button_clear{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;position:relative;text-align:center;background:0 0;text-transform:none;font-style:normal;-webkit-box-shadow:none;box-shadow:none;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;outline:0}.jodit-ui-button-sizes{min-width:34px;height:34px}.jodit-ui-button-sizes .jodit-icon{width:14px;height:14px}.jodit-ui-button-sizes button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:34px;height:34px}.jodit-ui-button-sizes_size_tiny{min-width:16px;height:16px}.jodit-ui-button-sizes_size_tiny .jodit-icon{width:8px;height:8px}.jodit-ui-button-sizes_size_tiny button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:16px;height:16px}.jodit-ui-button-sizes_size_xsmall{min-width:22px;height:22px}.jodit-ui-button-sizes_size_xsmall .jodit-icon{width:10px;height:10px}.jodit-ui-button-sizes_size_xsmall button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:22px;height:22px}.jodit-ui-button-sizes_size_small{min-width:28px;height:28px}.jodit-ui-button-sizes_size_small .jodit-icon{width:12px;height:12px}.jodit-ui-button-sizes_size_small button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:28px;height:28px}.jodit-ui-button-sizes_size_large{min-width:40px;height:40px}.jodit-ui-button-sizes_size_large .jodit-icon{width:16px;height:16px}.jodit-ui-button-sizes_size_large button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:40px;height:40px}.jodit-ui-button-statuses_status_default{background-color:#d8d8d8;color:#212529}.jodit-ui-button-statuses_status_default svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_default [disabled]{opacity:.7}.jodit-ui-button-statuses_status_default:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-ui-button-statuses_status_default:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_default:active:not([disabled]){background-color:#dae0e5;color:#212529}
 .jodit-ui-button-statuses_status_default:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_default:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-ui-button-statuses_status_primary{background-color:#007bff;color:#fff}.jodit-ui-button-statuses_status_primary svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_primary [disabled]{opacity:.7}.jodit-ui-button-statuses_status_primary:hover:not([disabled]){background-color:#0069d9;color:#fff}.jodit-ui-button-statuses_status_primary:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_primary:active:not([disabled]){background-color:#0062cc;color:#fff}.jodit-ui-button-statuses_status_primary:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_primary:focus:not([disabled]){outline:1px dashed #0062cc}.jodit-ui-button-statuses_status_secondary{background-color:#d8d8d8;color:#212529;border-radius:0}.jodit-ui-button-statuses_status_secondary svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_secondary [disabled]{opacity:.7}.jodit-ui-button-statuses_status_secondary:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-ui-button-statuses_status_secondary:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_secondary:active:not([disabled]){background-color:#dae0e5;color:#212529}.jodit-ui-button-statuses_status_secondary:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button-statuses_status_secondary:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-ui-button-statuses_status_success{background-color:#28a745;color:#fff}.jodit-ui-button-statuses_status_success svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_success [disabled]{opacity:.7}.jodit-ui-button-statuses_status_success:hover:not([disabled]){background-color:#218838;color:#fff}.jodit-ui-button-statuses_status_success:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_success:active:not([disabled]){background-color:#1e7e34;color:#fff}.jodit-ui-button-statuses_status_success:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_success:focus:not([disabled]){outline:1px dashed #1e7e34}.jodit-ui-button-statuses_status_danger{background-color:#dc3545;color:#fff}.jodit-ui-button-statuses_status_danger svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_danger [disabled]{opacity:.7}.jodit-ui-button-statuses_status_danger:hover:not([disabled]){background-color:#c82333;color:#fff}.jodit-ui-button-statuses_status_danger:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_danger:active:not([disabled]){background-color:#bd2130;color:#fff}.jodit-ui-button-statuses_status_danger:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button-statuses_status_danger:focus:not([disabled]){outline:1px dashed #bd2130}.jodit-ui-button-style{padding:0 8px;border-radius:3px}.jodit-ui-button,.jodit-ui-button-style{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-ui-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;position:relative;text-align:center;background:0 0;text-transform:none;font-style:normal;-webkit-box-shadow:none;box-shadow:none;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;outline:0;padding:0 8px;border-radius:3px;min-width:34px;height:34px}.jodit-ui-button:hover:not([disabled]){background-color:#dcdcdc;outline:0;opacity:1}.jodit-ui-button:active:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-ui-button[aria-pressed=true]:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-ui-button[aria-pressed=true]:hover:not([disabled]){background-color:hsla(0,0%,86.3%,0.6)}.jodit-ui-button[disabled]{opacity:.3;pointer-events:none}.jodit-ui-button .jodit-icon{width:14px;height:14px}.jodit-ui-button button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:34px;height:34px}.jodit-ui-button_size_tiny{min-width:16px;height:16px}.jodit-ui-button_size_tiny .jodit-icon{width:8px;height:8px}.jodit-ui-button_size_tiny button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:16px;height:16px}.jodit-ui-button_size_xsmall{min-width:22px;height:22px}.jodit-ui-button_size_xsmall .jodit-icon{width:10px;height:10px}.jodit-ui-button_size_xsmall button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:22px;height:22px}.jodit-ui-button_size_small{min-width:28px;height:28px}.jodit-ui-button_size_small .jodit-icon{width:12px;height:12px}.jodit-ui-button_size_small button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:28px;height:28px}.jodit-ui-button_size_large{min-width:40px;height:40px}.jodit-ui-button_size_large .jodit-icon{width:16px;height:16px}.jodit-ui-button_size_large button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:40px;height:40px}.jodit-ui-button__icon{display:none}.jodit-ui-button__icon:not(:empty){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jodit-ui-button__text{display:none}.jodit-ui-button__text:not(:empty){font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit-ui-button_context_menu .jodit-ui-button__text{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;padding-left:8px;position:relative}.jodit-ui-button_context_menu .jodit-ui-button__text:before{content:"";position:absolute;border-left:1px solid #dadada;height:35px;top:calc(8px*-1);left:0}.jodit-ui-button__icon:not(:empty)+.jodit-ui-button__text:not(:empty){margin-left:8px}.jodit-ui-button__icon:empty+.jodit-ui-button__text:not(:empty){padding:0 8px}.jodit-ui-button:focus:not([disabled]){outline:1px dashed #b5d6fd}.jodit-ui-button_status_default{background-color:#d8d8d8;color:#212529}.jodit-ui-button_status_default svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_default [disabled]{opacity:.7}.jodit-ui-button_status_default:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-ui-button_status_default:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_default:active:not([disabled]){background-color:#dae0e5;color:#212529}.jodit-ui-button_status_default:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_default:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-ui-button_status_primary{background-color:#007bff;color:#fff}.jodit-ui-button_status_primary svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_primary [disabled]{opacity:.7}.jodit-ui-button_status_primary:hover:not([disabled]){background-color:#0069d9;color:#fff}.jodit-ui-button_status_primary:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_primary:active:not([disabled]){background-color:#0062cc;color:#fff}.jodit-ui-button_status_primary:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_primary:focus:not([disabled]){outline:1px dashed #0062cc}.jodit-ui-button_status_secondary{background-color:#d8d8d8;color:#212529;border-radius:0}.jodit-ui-button_status_secondary svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_secondary [disabled]{opacity:.7}.jodit-ui-button_status_secondary:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-ui-button_status_secondary:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_secondary:active:not([disabled]){background-color:#dae0e5;color:#212529}.jodit-ui-button_status_secondary:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-ui-button_status_secondary:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-ui-button_status_success{background-color:#28a745;color:#fff}.jodit-ui-button_status_success svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_success [disabled]{opacity:.7}.jodit-ui-button_status_success:hover:not([disabled]){background-color:#218838;color:#fff}.jodit-ui-button_status_success:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_success:active:not([disabled]){background-color:#1e7e34;color:#fff}.jodit-ui-button_status_success:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_success:focus:not([disabled]){outline:1px dashed #1e7e34}.jodit-ui-button_status_danger{background-color:#dc3545;color:#fff}.jodit-ui-button_status_danger svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_danger [disabled]{opacity:.7}.jodit-ui-button_status_danger:hover:not([disabled]){background-color:#c82333;color:#fff}.jodit-ui-button_status_danger:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_danger:active:not([disabled]){background-color:#bd2130;color:#fff}.jodit-ui-button_status_danger:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-ui-button_status_danger:focus:not([disabled]){outline:1px dashed #bd2130}.jodit-ui-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.jodit-ui-list_mode_vertical .jodit-ui-group{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:transparent;border:0}.jodit-ui-list_mode_vertical .jodit-toolbar-button{height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-ui-list_mode_vertical 
 .jodit-toolbar-button__button{width:100%;height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-ui-list_mode_vertical .jodit-toolbar-button__text:not(:empty){-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.jodit-ui-separator{border-left:0;border-right:1px solid #dadada;padding:0;margin:2px;cursor:default}.jodit-ui-break{-ms-flex-preferred-size:100%;flex-basis:100%;width:0;border-top:1px solid #dadada;height:0!important}.jodit-ui-group{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}.jodit-ui-group_separated_true:not(:last-child):after{content:"";border-left:0;border-right:1px solid #dadada;padding:0;margin:2px;cursor:default}.jodit-ui-group:last-child{border-bottom:0}.jodit-ui-button-group{margin-bottom:8px}.jodit-ui-button-group__label{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-button-group__options{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.jodit-ui-button-group .jodit-ui-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.jodit-ui-button-group .jodit-ui-button+.jodit-ui-button{border-top-left-radius:0;border-bottom-left-radius:0;border-left:1px solid hsla(0,0%,86.3%,0.4)}.jodit-ui-button-group .jodit-ui-button[aria-pressed=true]:not([disabled]){background-color:#dcdcdc;color:#4c4c4c;-webkit-box-shadow:inset 0 0 3px 0 #4c4c4c;box-shadow:inset 0 0 3px 0 #4c4c4c;outline:0;border-left:0}.jodit-ui-button-group .jodit-ui-button[aria-pressed=true]:not([disabled])+.jodit-ui-button{border:0}.jodit-popup{position:static;width:auto;max-width:none;height:auto;padding:0;border:0;margin:0;background:0 0;float:none;outline:0;position:fixed;display:inline-block;z-index:10000001;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 4px 1px -2px rgba(76,76,76,0.2),0 3px 3px 0 rgba(76,76,76,0.15),0 1px 4px 0 rgba(76,76,76,0.13);box-shadow:0 4px 1px -2px rgba(76,76,76,0.2),0 3px 3px 0 rgba(76,76,76,0.15),0 1px 4px 0 rgba(76,76,76,0.13)}.jodit-popup__content{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;padding:8px;background:#fff;overflow-scrolling:touch;overflow:auto;max-height:300px}.jodit-popup_padding_false .jodit-popup__content{padding:0}.jodit-popup_max-height_false .jodit-popup__content{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.jodit-ui-label{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-input{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:8px}.jodit-ui-input__input{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none;border:0}.jodit-ui-input__input[disabled]{background-color:#f0f0f0;color:#dadada}.jodit-ui-input__input_has-error_true{border-color:#ff3b3b}.jodit-ui-input__input:focus{outline:0}.jodit-ui-input_theme_dark .jodit-ui-input__input{background-color:#dadada}.jodit-ui-input_has-error_true .jodit-ui-input__input{border-color:#ff3b3b}.jodit-ui-input__error{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-input__label{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-input__error{color:#ff3b3b}.jodit-ui-input_has-error_true .jodit-ui-input__label{color:#ff3b3b}.jodit-ui-input__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #dadada;min-width:200px}@media (max-width:480px){.jodit-ui-input__wrapper{min-width:140px}}.jodit-ui-input_theme_dark .jodit-ui-input__wrapper{background-color:#dadada;border-color:#dadada}.jodit-ui-input_focused_true .jodit-ui-input__wrapper{-webkit-box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25);box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25)}.jodit-ui-input__icon:not(:empty){padding:0 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-ui-input__icon:not(:empty) svg{width:16px;height:16px;fill:#dadada}.jodit-ui-input__icon:not(:empty)+.jodit-ui-input__input{padding-left:0}.jodit-ui-input__clear{padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:.8}.jodit-ui-input__clear:active{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:1}.jodit-ui-input__clear svg{width:12px;height:12px;fill:#dadada}.jodit-ui-input_theme_dark .jodit-ui-input__clear svg{fill:#4c4c4c}.jodit-ui-input_theme_dark .jodit-ui-input__icon svg{fill:#4c4c4c}.jodit-ui-block .jodit-ui-input{margin-bottom:0}.jodit-ui-text-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:8px;width:100%}.jodit-ui-text-area__input{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none;border:0}.jodit-ui-text-area__input[disabled]{background-color:#f0f0f0;color:#dadada}.jodit-ui-text-area__input_has-error_true{border-color:#ff3b3b}.jodit-ui-text-area__input:focus{outline:0}.jodit-ui-text-area_theme_dark .jodit-ui-text-area__input{background-color:#dadada}.jodit-ui-text-area_has-error_true .jodit-ui-text-area__input{border-color:#ff3b3b}.jodit-ui-text-area__error{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-text-area__label{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-text-area__error{color:#ff3b3b}.jodit-ui-text-area_has-error_true .jodit-ui-text-area__label{color:#ff3b3b}.jodit-ui-text-area__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #dadada;min-width:200px}@media (max-width:480px){.jodit-ui-text-area__wrapper{min-width:140px}}.jodit-ui-text-area_theme_dark 
 .jodit-ui-text-area__wrapper{background-color:#dadada;border-color:#dadada}.jodit-ui-text-area_focused_true .jodit-ui-text-area__wrapper{-webkit-box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25);box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25)}.jodit-ui-text-area__icon:not(:empty){padding:0 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-ui-text-area__icon:not(:empty) svg{width:16px;height:16px;fill:#dadada}.jodit-ui-text-area__icon:not(:empty)+.jodit-ui-text-area__input{padding-left:0}.jodit-ui-text-area__clear{padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:.8}.jodit-ui-text-area__clear:active{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:1}.jodit-ui-text-area__clear svg{width:12px;height:12px;fill:#dadada}.jodit-ui-text-area_theme_dark .jodit-ui-text-area__clear svg{fill:#4c4c4c}.jodit-ui-text-area_theme_dark .jodit-ui-text-area__icon svg{fill:#4c4c4c}.jodit-ui-text-area__input{min-height:60px}.jodit-ui-checkbox{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:8px}.jodit-ui-checkbox__input{margin-right:8px}.jodit-ui-block .jodit-ui-checkbox{margin-bottom:0}.jodit-ui-select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:8px}.jodit-ui-select__input{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;width:100%;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-radius:0;line-height:32px;outline:none;border:0}.jodit-ui-select__input[disabled]{background-color:#f0f0f0;color:#dadada}.jodit-ui-select__input_has-error_true{border-color:#ff3b3b}.jodit-ui-select__input:focus{outline:0}.jodit-ui-select_theme_dark .jodit-ui-select__input{background-color:#dadada}.jodit-ui-select_has-error_true .jodit-ui-select__input{border-color:#ff3b3b}.jodit-ui-select__error{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-select__label{display:block;color:#a5a5a5;font-size:.8em;margin-bottom:calc(8px/4)}.jodit-ui-select__error{color:#ff3b3b}.jodit-ui-select_has-error_true .jodit-ui-select__label{color:#ff3b3b}.jodit-ui-select__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border:1px solid #dadada;min-width:200px}@media (max-width:480px){.jodit-ui-select__wrapper{min-width:140px}}.jodit-ui-select_theme_dark .jodit-ui-select__wrapper{background-color:#dadada;border-color:#dadada}.jodit-ui-select_focused_true .jodit-ui-select__wrapper{-webkit-box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25);box-shadow:0 0 0 0.05rem rgba(0,123,255,0.25)}.jodit-ui-select__icon:not(:empty){padding:0 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-ui-select__icon:not(:empty) svg{width:16px;height:16px;fill:#dadada}.jodit-ui-select__icon:not(:empty)+.jodit-ui-select__input{padding-left:0}.jodit-ui-select__clear{padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:.8}.jodit-ui-select__clear:active{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:1}.jodit-ui-select__clear svg{width:12px;height:12px;fill:#dadada}.jodit-ui-select_theme_dark .jodit-ui-select__clear svg{fill:#4c4c4c}.jodit-ui-select_theme_dark .jodit-ui-select__icon svg{fill:#4c4c4c}.jodit-ui-select__input{padding-right:calc(8px*2);background-image:url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6IzQ0NH08L3N0eWxlPjwvZGVmcz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQuOTV2MTBIMHoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xLjQxIDQuNjdsMS4wNy0xLjQ5IDEuMDYgMS40OUgxLjQxek0zLjU0IDUuMzNMMi40OCA2LjgyIDEuNDEgNS4zM2gyLjEzeiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-position:98% 50%}.jodit-ui-file-input{position:relative;overflow:hidden}.jodit-ui-file-input__input{cursor:pointer;position:absolute;right:0;top:0;bottom:0;margin:0 calc(8px*-1) 0 0;padding:0;opacity:0;font-size:400px}.jodit-ui-block{margin-bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-ui-block_width_full{width:100%}.jodit-ui-block_align_full{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.jodit-ui-block_align_right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.jodit-ui-block_padding_true{padding:8px}@-webkit-keyframes b{30%{opacity:.6}60%{opacity:0}to{opacity:.6}}@keyframes b{30%{opacity:.6}60%{opacity:0}to{opacity:.6}}.jodit-progress-bar{position:absolute;top:0;left:0;height:2px;z-index:2147483647;border-radius:1px;opacity:.7}.jodit-progress-bar div{position:relative;background:#b91f1f;height:2px;-webkit-transition:width .5s ease-out,opacity .5s linear;-o-transition:width .5s ease-out,opacity .5s linear;transition:width .5s ease-out,opacity .5s linear;will-change:width,opacity}.jodit-progress-bar div:after{-webkit-animation:b 2s ease-out 0s infinite;animation:b 2s ease-out 0s infinite;content:"";display:inline-block;position:absolute;top:0;height:2px;-webkit-box-shadow:#b91f1f 1px 0 6px 1px;box-shadow:#b91f1f 1px 0 6px 1px;border-radius:100%;opacity:.6}.jodit-progress-bar div:before{-webkit-animation:b 2s ease-out 0s infinite;animation:b 2s ease-out 0s infinite;content:"";display:inline-block;position:absolute;top:0;height:2px;-webkit-box-shadow:#b91f1f 1px 0 6px 1px;box-shadow:#b91f1f 1px 0 6px 1px;border-radius:100%;opacity:.6}.jodit-progress-bar div:before{width:180px;right:-80px;clip:rect(-6px,90px,14px,-6px)}.jodit-progress-bar div:after{width:20px;right:0;clip:rect(-6px,22px,14px,8px)}.jodit-context-menu{position:static;width:auto;max-width:none;height:auto;padding:0;border:0;margin:0;background:0 0;float:none;outline:0;position:fixed;display:inline-block;z-index:10000001;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 4px 1px -2px rgba(76,76,76,0.2),0 3px 3px 0 rgba(76,76,76,0.15),0 1px 4px 0 rgba(76,76,76,0.13);box-shadow:0 4px 1px -2px rgba(76,76,76,0.2),0 3px 3px 0 rgba(76,76,76,0.15),0 1px 4px 0 rgba(76,76,76,0.13);z-index:30000005}.jodit-context-menu__content{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;padding:8px;background:#fff;overflow-scrolling:touch;overflow:auto;max-height:300px}.jodit-context-menu_padding_false .jodit-context-menu__content{padding:0}.jodit-context-menu_max-height_false .jodit-context-menu__content{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content}.jodit-context-menu .jodit-ui-button{display:-webkit-box;display:-ms-flexbox;display:flex}.jodit-context-menu__actions{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px}.jodit-context-menu__actions button{width:100%}.jodit-context-menu_theme_dark .jodit-context-menu__content{background-color:#575757}.jodit-dialog{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;position:absolute;display:none;width:0;height:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:0;will-change:left,top,width,height}.jodit-dialog_moved_true{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit-dialog *{-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-dialog .jodit_elfinder,.jodit-dialog .jodit_elfinder *{-webkit-box-sizing:initial;box-sizing:initial}.jodit-dialog__overlay{position:fixed;z-index:20000003;top:0;left:0;display:none;overflow:auto;width:100%;height:100%;background-color:rgba(0,0,0,.5);text-align:center;white-space:nowrap}.jodit-dialog_static_true .jodit-dialog__overlay{display:none}.jodit-dialog_active_true,.jodit-dialog_modal_true .jodit-dialog__overlay{display:block}.jodit-dialog__panel{position:fixed;z-index:20000004;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;min-width:200px;max-width:100%;min-height:100px;max-height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;background-color:#fff;-webkit-box-shadow:0 8px calc(8px*2) rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,.23);box-shadow:0 8px calc(8px*2) rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,.23);text-align:left;white-space:normal}@media (max-width:480px){.jodit-dialog__panel{top:0!important;left:0!important;width:100%!important;max-width:100%;height:100%!important}}.jodit-dialog_static_true{position:static;display:block;width:auto;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-dialog_static_true .jodit-dialog__panel{position:relative;top:auto!important;left:auto!important;width:100%!important}.jodit-dialog_theme_dark{background-color:#353535;color:#fff}.jodit-dialog_theme_dark .jodit-dialog__panel{background-color:#353535;color:#fff}
 .jodit-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;min-height:50px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #dadada;cursor:move;text-align:left}@media (max-width:480px){.jodit-dialog__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.jodit-dialog__header-title{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:3;flex-shrink:3;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;margin:0;font-size:18px;font-weight:400;line-height:48px;vertical-align:top}.jodit-dialog__header-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:3;flex-shrink:3;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;margin:0;font-size:18px;font-weight:400;line-height:48px;vertical-align:top}@media (max-width:480px){.jodit-dialog__header-toolbar{padding-left:0}}.jodit-dialog__header-button{height:48px;-ms-flex-preferred-size:48px;flex-basis:48px;color:#222;font-size:28px;line-height:48px;text-align:center;text-decoration:none;-webkit-transition:background-color .2s ease 0s;-o-transition:background-color .2s ease 0s;transition:background-color .2s ease 0s}.jodit-dialog__header-button:hover{background-color:#ecebe9}.jodit-dialog__header .jodit_toolbar{border:0;background:transparent;-webkit-box-shadow:none;box-shadow:none}.jodit-dialog__header .jodit_toolbar>li.jodit-toolbar-button .jodit-input{width:auto;padding-left:8px}.jodit-dialog_theme_dark .jodit-dialog__header{border-color:#4c4c4c}.jodit-dialog_fullsize_true .jodit-dialog__header{cursor:default}.jodit-dialog__content{overflow:auto;min-height:100px;-webkit-box-flex:1;-ms-flex:1;flex:1}.jodit-dialog__content .jodit-form__group{padding:0 8px;margin-bottom:calc(8px*1.5)}.jodit-dialog__content .jodit-form__group:first-child{margin-top:8px}.jodit-dialog__content .jodit-form__group label+.jodit-grid{margin-top:calc(8px/2)}.jodit-dialog__content .jodit-form__group label+.jodit-input_group{margin-top:calc(8px/2)}.jodit-dialog__content .jodit-form__group label+.jodit-select{margin-top:calc(8px/2)}.jodit-dialog__content .jodit-form__group label+input{margin-top:calc(8px/2)}.jodit-dialog__content .jodit-form__group .jodit-input_group{display:table;width:100%;border-collapse:separate}.jodit-dialog__content .jodit-form__group .jodit-input_group>*{display:table-cell;height:34px;vertical-align:middle}.jodit-dialog__content .jodit-form__group .jodit-input_group>input{margin:0!important}.jodit-dialog__content .jodit-form__group .jodit-input_group>input:not([class*=col-]){width:100%}.jodit-dialog__content .jodit-form__group .jodit-input_group-buttons{width:1%;font-size:0;vertical-align:middle;white-space:nowrap}.jodit-dialog__content .jodit-form__group .jodit-input_group-buttons>.jodit-button{height:34px;border:1px solid #dadada;margin-left:-1px;border-radius:0;line-height:34px}.jodit-dialog__footer{display:none;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:8px}.jodit-dialog__footer button{margin-right:calc(8px/2)}.jodit-dialog__footer button:last-child{margin-right:0}.jodit-dialog__column{display:-webkit-box;display:-ms-flexbox;display:flex}.jodit-dialog__resizer{position:absolute;right:0;bottom:0;display:inline-block;width:0;height:0;border-right:0 solid transparent;border-bottom:10px solid #dadada;border-left:10px solid transparent;cursor:se-resize;opacity:1}.jodit-dialog__resizer:hover{border-bottom-color:rgba(0,0,0,.6)}@media (max-width:480px){.jodit-dialog__resizer{display:none}}.jodit-dialog_prompt{min-width:200px;max-width:300px;padding:8px;word-break:break-all}.jodit-dialog_prompt label{display:block;margin-bottom:calc(8px/2)}.jodit-dialog_alert{min-width:200px;max-width:300px;padding:8px;word-break:break-all}.jodit-dialog_footer_true .jodit-dialog__footer{display:-webkit-box;display:-ms-flexbox;display:flex}.jodit_fullsize .jodit-dialog__panel{top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important}.jodit_fullsize .jodit-dialog__panel .jodit-dialog__resizer{display:none}.jodit-toolbar__box:not(:empty){background-color:#f9f9f9;overflow:hidden;border-radius:3px 3px 0 0;border-bottom:1px solid #dadada}.jodit-toolbar-collection,.jodit-toolbar-editor-collection{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.jodit-toolbar-collection_mode_horizontal{position:relative;background-image:-o-repeating-linear-gradient(transparent,transparent calc(calc(14px + calc(14px*2 - 8px) + 2px*2) - 1px),#dadada calc(14px + calc(14px*2 - 8px) + 2px*2));background-image:repeating-linear-gradient(transparent,transparent calc(calc(14px + calc(14px*2 - 8px) + 2px*2) - 1px),#dadada calc(14px + calc(14px*2 - 8px) + 2px*2))}.jodit-toolbar-editor-collection_mode_horizontal{position:relative;background-image:-o-repeating-linear-gradient(transparent,transparent calc(calc(14px + calc(14px*2 - 8px) + 2px*2) - 1px),#dadada calc(14px + calc(14px*2 - 8px) + 2px*2));background-image:repeating-linear-gradient(transparent,transparent calc(calc(14px + calc(14px*2 - 8px) + 2px*2) - 1px),#dadada calc(14px + calc(14px*2 - 8px) + 2px*2))}.jodit-toolbar-collection_mode_horizontal:after{position:absolute;bottom:0;left:0;display:block;width:100%;height:1px;background-color:#fff;content:""}.jodit-toolbar-editor-collection_mode_horizontal:after{position:absolute;bottom:0;left:0;display:block;width:100%;height:1px;background-color:#fff;content:""}.jodit-toolbar-collection_size_tiny.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 19px,#dadada 20px);background-image:repeating-linear-gradient(transparent,transparent 19px,#dadada 20px)}.jodit-toolbar-collection_size_tiny.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 19px,#dadada 20px);background-image:repeating-linear-gradient(transparent,transparent 19px,#dadada 20px)}.jodit-toolbar-editor-collection_size_tiny.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 19px,#dadada 20px);background-image:repeating-linear-gradient(transparent,transparent 19px,#dadada 20px)}.jodit-toolbar-editor-collection_size_tiny.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 19px,#dadada 20px);background-image:repeating-linear-gradient(transparent,transparent 19px,#dadada 20px)}.jodit-toolbar-collection_size_xsmall.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 25px,#dadada 26px);background-image:repeating-linear-gradient(transparent,transparent 25px,#dadada 26px)}.jodit-toolbar-collection_size_xsmall.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 25px,#dadada 26px);background-image:repeating-linear-gradient(transparent,transparent 25px,#dadada 26px)}.jodit-toolbar-editor-collection_size_xsmall.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 25px,#dadada 26px);background-image:repeating-linear-gradient(transparent,transparent 25px,#dadada 26px)}.jodit-toolbar-editor-collection_size_xsmall.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 25px,#dadada 26px);background-image:repeating-linear-gradient(transparent,transparent 25px,#dadada 26px)}.jodit-toolbar-collection_size_small.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 31px,#dadada 32px);background-image:repeating-linear-gradient(transparent,transparent 31px,#dadada 32px)}.jodit-toolbar-collection_size_small.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 31px,#dadada 32px);background-image:repeating-linear-gradient(transparent,transparent 31px,#dadada 32px)}.jodit-toolbar-editor-collection_size_small.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 31px,#dadada 32px);background-image:repeating-linear-gradient(transparent,transparent 31px,#dadada 32px)}.jodit-toolbar-editor-collection_size_small.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 31px,#dadada 32px);background-image:repeating-linear-gradient(transparent,transparent 31px,#dadada 32px)}.jodit-toolbar-collection_size_middle.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 37px,#dadada 38px);background-image:repeating-linear-gradient(transparent,transparent 37px,#dadada 38px)}.jodit-toolbar-collection_size_middle.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 37px,#dadada 38px);background-image:repeating-linear-gradient(transparent,transparent 37px,#dadada 38px)}.jodit-toolbar-editor-collection_size_middle.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 37px,#dadada 38px);background-image:repeating-linear-gradient(transparent,transparent 37px,#dadada 38px)}.jodit-toolbar-editor-collection_size_middle.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 37px,#dadada 38px);background-image:repeating-linear-gradient(transparent,transparent 37px,#dadada 38px)}.jodit-toolbar-collection_size_large
 .jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 43px,#dadada 44px);background-image:repeating-linear-gradient(transparent,transparent 43px,#dadada 44px)}.jodit-toolbar-collection_size_large.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 43px,#dadada 44px);background-image:repeating-linear-gradient(transparent,transparent 43px,#dadada 44px)}.jodit-toolbar-editor-collection_size_large.jodit-toolbar-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 43px,#dadada 44px);background-image:repeating-linear-gradient(transparent,transparent 43px,#dadada 44px)}.jodit-toolbar-editor-collection_size_large.jodit-toolbar-editor-collection_mode_horizontal{background-image:-o-repeating-linear-gradient(transparent,transparent 43px,#dadada 44px);background-image:repeating-linear-gradient(transparent,transparent 43px,#dadada 44px)}.jodit-toolbar-collection_mode_vertical .jodit-ui-group,.jodit-toolbar-editor-collection_mode_vertical .jodit-ui-group{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:transparent;border:0}.jodit-toolbar-collection_mode_vertical .jodit-toolbar-button{height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-toolbar-editor-collection_mode_vertical .jodit-toolbar-button{height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-toolbar-collection_mode_vertical .jodit-toolbar-button__button{width:100%;height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-toolbar-editor-collection_mode_vertical .jodit-toolbar-button__button{width:100%;height:auto;min-height:calc(14px + calc(14px*2 - 8px) + 2px*2)}.jodit-toolbar-collection_mode_vertical .jodit-toolbar-button__text:not(:empty),.jodit-toolbar-editor-collection_mode_vertical .jodit-toolbar-button__text:not(:empty){-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.jodit-toolbar-collection .jodit-toolbar-button{padding:0;margin:2px 1px}.jodit-toolbar-collection .jodit-toolbar-content{padding:0;margin:2px 1px}.jodit-toolbar-editor-collection .jodit-toolbar-button{padding:0;margin:2px 1px}.jodit-toolbar-editor-collection .jodit-toolbar-content{padding:0;margin:2px 1px}.jodit-dialog .jodit-toolbar-collection_mode_horizontal,.jodit-dialog .jodit-toolbar-editor-collection_mode_horizontal{background-image:none}.jodit-toolbar-button{border:1px solid transparent;border-radius:3px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:34px;height:34px}.jodit-toolbar-button__icon{display:none}.jodit-toolbar-button__icon:not(:empty){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jodit-toolbar-button__text{display:none}.jodit-toolbar-button__text:not(:empty){font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit-toolbar-button_context_menu .jodit-toolbar-button__text{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;padding-left:8px;position:relative}.jodit-toolbar-button_context_menu .jodit-toolbar-button__text:before{content:"";position:absolute;border-left:1px solid #dadada;height:35px;top:calc(8px*-1);left:0}.jodit-toolbar-button__icon:not(:empty)+.jodit-toolbar-button__text:not(:empty){margin-left:8px}.jodit-toolbar-button__icon:empty+.jodit-toolbar-button__text:not(:empty){padding:0 8px;padding:0}.jodit-toolbar-button .jodit-icon{width:14px;height:14px}.jodit-toolbar-button button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:34px;height:34px}.jodit-toolbar-button_size_tiny{min-width:16px;height:16px}.jodit-toolbar-button_size_tiny .jodit-icon{width:8px;height:8px}.jodit-toolbar-button_size_tiny button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:16px;height:16px}.jodit-toolbar-button_size_xsmall{min-width:22px;height:22px}.jodit-toolbar-button_size_xsmall .jodit-icon{width:10px;height:10px}.jodit-toolbar-button_size_xsmall button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:22px;height:22px}.jodit-toolbar-button_size_small{min-width:28px;height:28px}.jodit-toolbar-button_size_small .jodit-icon{width:12px;height:12px}.jodit-toolbar-button_size_small button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:28px;height:28px}.jodit-toolbar-button_size_large{min-width:40px;height:40px}.jodit-toolbar-button_size_large .jodit-icon{width:16px;height:16px}.jodit-toolbar-button_size_large button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:40px;height:40px}.jodit-toolbar-button__button{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;position:relative;text-align:center;background:0 0;text-transform:none;font-style:normal;-webkit-box-shadow:none;box-shadow:none;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;outline:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;border-radius:3px}.jodit-toolbar-button__button:hover:not([disabled]){background-color:#dcdcdc;outline:0;opacity:1}.jodit-toolbar-button__button:active:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-button__button[aria-pressed=true]:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-button__button[aria-pressed=true]:hover:not([disabled]){background-color:hsla(0,0%,86.3%,0.6)}.jodit-toolbar-button__button[disabled]{opacity:.3;pointer-events:none}.jodit-toolbar-button__trigger{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:0 3px 3px 0;opacity:.4;height:100%;width:14px}.jodit-toolbar-button__trigger:hover:not([disabled]){background-color:#dcdcdc;outline:0;opacity:1}.jodit-toolbar-button__trigger:active:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-button__trigger[aria-pressed=true]:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-button__trigger[aria-pressed=true]:hover:not([disabled]){background-color:hsla(0,0%,86.3%,0.6)}.jodit-toolbar-button__trigger[disabled]{opacity:.3;pointer-events:none}.jodit-toolbar-button__trigger svg{width:10px}.jodit-toolbar-button_size_tiny .jodit-toolbar-button__trigger{width:8px}.jodit-toolbar-button_size_tiny .jodit-toolbar-button__trigger svg{width:4px}.jodit-toolbar-button_size_xsmall .jodit-toolbar-button__trigger{width:10px}.jodit-toolbar-button_size_xsmall .jodit-toolbar-button__trigger svg{width:6px}.jodit-toolbar-button_size_small .jodit-toolbar-button__trigger{width:12px}.jodit-toolbar-button_size_small .jodit-toolbar-button__trigger svg{width:8px}.jodit-toolbar-button_size_large .jodit-toolbar-button__trigger{width:16px}.jodit-toolbar-button_size_large .jodit-toolbar-button__trigger svg{width:12px}.jodit-toolbar-button_with-trigger_true .jodit-toolbar-button__button{border-radius:3px 0 0 3px}.jodit-toolbar-button_with-trigger_true:hover:not([disabled]){border-color:#dadada}.jodit-toolbar-content{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;text-align:center;background:0 0;text-transform:none;font-style:normal;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;outline:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:3px;min-width:34px;height:34px;border:1px solid transparent;padding:0}.jodit-toolbar-content:hover:not([disabled]){background-color:#dcdcdc}.jodit-toolbar-content:active:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-content[aria-pressed=true]:not([disabled]){background-color:hsla(0,0%,86.3%,0.4);outline:0}.jodit-toolbar-content[aria-pressed=true]:hover:not([disabled]){background-color:hsla(0,0%,86.3%,0.6)}.jodit-toolbar-content[disabled]{opacity:.3;pointer-events:none}.jodit-toolbar-content .jodit-icon{width:14px;height:14px}.jodit-toolbar-content button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:34px;height:34px}.jodit-toolbar-content_size_tiny{min-width:16px;height:16px}.jodit-toolbar-content_size_tiny .jodit-icon{width:8px;height:8px}.jodit-toolbar-content_size_tiny button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:16px;height:16px}.jodit-toolbar-content_size_xsmall{min-width:22px;height:22px}.jodit-toolbar-content_size_xsmall .jodit-icon{width:10px;height:10px}.jodit-toolbar-content_size_xsmall button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:22px;height:22px}.jodit-toolbar-content_size_small{min-width:28px;height:28px}.jodit-toolbar-content_size_small .jodit-icon{width:12px;height:12px}.jodit-toolbar-content_size_small button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:28px;height:28px}.jodit-toolbar-content_size_large{min-width:40px;height:40px}.jodit-toolbar-content_size_large 
 .jodit-icon{width:16px;height:16px}.jodit-toolbar-content_size_large button{-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:40px;height:40px}.jodit-toolbar-content__icon{display:none}.jodit-toolbar-content__icon:not(:empty){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jodit-toolbar-content__text{display:none}.jodit-toolbar-content__text:not(:empty){font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit-toolbar-content_context_menu .jodit-toolbar-content__text{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;padding-left:8px;position:relative}.jodit-toolbar-content_context_menu .jodit-toolbar-content__text:before{content:"";position:absolute;border-left:1px solid #dadada;height:35px;top:calc(8px*-1);left:0}.jodit-toolbar-content__icon:not(:empty)+.jodit-toolbar-content__text:not(:empty){margin-left:8px}.jodit-toolbar-content__icon:empty+.jodit-toolbar-content__text:not(:empty){padding:0 8px}.jodit-toolbar-content:focus:not([disabled]){outline:1px dashed #b5d6fd}.jodit-toolbar-content_status_default{background-color:#d8d8d8;color:#212529}.jodit-toolbar-content_status_default svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_default [disabled]{opacity:.7}.jodit-toolbar-content_status_default:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-toolbar-content_status_default:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_default:active:not([disabled]){background-color:#dae0e5;color:#212529}.jodit-toolbar-content_status_default:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_default:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-toolbar-content_status_primary{background-color:#007bff;color:#fff}.jodit-toolbar-content_status_primary svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_primary [disabled]{opacity:.7}.jodit-toolbar-content_status_primary:hover:not([disabled]){background-color:#0069d9;color:#fff}.jodit-toolbar-content_status_primary:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_primary:active:not([disabled]){background-color:#0062cc;color:#fff}.jodit-toolbar-content_status_primary:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_primary:focus:not([disabled]){outline:1px dashed #0062cc}.jodit-toolbar-content_status_secondary{background-color:#d8d8d8;color:#212529;border-radius:0}.jodit-toolbar-content_status_secondary svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_secondary [disabled]{opacity:.7}.jodit-toolbar-content_status_secondary:hover:not([disabled]){background-color:#c9cdd1;color:#212529}.jodit-toolbar-content_status_secondary:hover:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_secondary:active:not([disabled]){background-color:#dae0e5;color:#212529}.jodit-toolbar-content_status_secondary:active:not([disabled]) svg{fill:#212529;stroke:#212529}.jodit-toolbar-content_status_secondary:focus:not([disabled]){outline:1px dashed #dae0e5}.jodit-toolbar-content_status_success{background-color:#28a745;color:#fff}.jodit-toolbar-content_status_success svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_success [disabled]{opacity:.7}.jodit-toolbar-content_status_success:hover:not([disabled]){background-color:#218838;color:#fff}.jodit-toolbar-content_status_success:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_success:active:not([disabled]){background-color:#1e7e34;color:#fff}.jodit-toolbar-content_status_success:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_success:focus:not([disabled]){outline:1px dashed #1e7e34}.jodit-toolbar-content_status_danger{background-color:#dc3545;color:#fff}.jodit-toolbar-content_status_danger svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_danger [disabled]{opacity:.7}.jodit-toolbar-content_status_danger:hover:not([disabled]){background-color:#c82333;color:#fff}.jodit-toolbar-content_status_danger:hover:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_danger:active:not([disabled]){background-color:#bd2130;color:#fff}.jodit-toolbar-content_status_danger:active:not([disabled]) svg{fill:#fff;stroke:#fff}.jodit-toolbar-content_status_danger:focus:not([disabled]){outline:1px dashed #bd2130}.jodit-toolbar-content:hover:not([disabled]){background-color:transparent;outline:0;opacity:1}.jodit-filebrowser{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.jodit-filebrowser_no_files{padding:8px}@media (max-width:480px){.jodit-filebrowser{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-flow:column-reverse;flex-flow:column-reverse}}.jodit-filebrowser__loader{height:100%;width:100%;position:absolute;top:0;left:0}.jodit-filebrowser__loader i{position:absolute;top:50%;left:50%;margin-top:calc(48px/-2);margin-left:calc(48px/-2);font-style:normal;opacity:.7}.jodit-filebrowser__status{position:absolute;font-size:12px;padding:6px;text-align:right;border-top:1px solid hsla(0,0%,49.8%,.4);left:0;right:0;bottom:0;background-color:#4a4a4a;visibility:hidden;opacity:0;-webkit-transition:opacity .3s linear;-o-transition:opacity .3s linear;transition:opacity .3s linear;color:#b38888;word-break:break-all}.jodit-filebrowser__status.jodit-filebrowser_success{color:#c5c5c5}.jodit-filebrowser__status.jodit-filebrowser_active{visibility:visible;opacity:1}.jodit-filebrowser__files,.jodit-filebrowser__tree{display:none;vertical-align:top;height:100%;position:relative;overflow-anchor:auto}.jodit-filebrowser__files .jodit-button,.jodit-filebrowser__tree .jodit-button{border-radius:0}.jodit-filebrowser__files.jodit-filebrowser_active,.jodit-filebrowser__tree.jodit-filebrowser_active{display:-webkit-box;display:-ms-flexbox;display:flex}.jodit-filebrowser__files::-webkit-scrollbar{width:calc(8px/2)}.jodit-filebrowser__tree::-webkit-scrollbar{width:calc(8px/2)}.jodit-filebrowser__files::-webkit-scrollbar-track,.jodit-filebrowser__tree::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit-filebrowser__files::-webkit-scrollbar-thumb,.jodit-filebrowser__tree::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid #708090}.jodit-filebrowser__tree.jodit-filebrowser_active{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:31%;min-width:200px;max-width:290px;z-index:2;background-color:#3f3f3f;overflow-y:auto}@media (max-width:480px){.jodit-filebrowser__tree.jodit-filebrowser_active{max-width:100%;width:auto;height:100px}}.jodit-filebrowser__tree.jodit-filebrowser_active::-webkit-scrollbar{width:calc(8px/2)}.jodit-filebrowser__tree.jodit-filebrowser_active::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.jodit-filebrowser__tree.jodit-filebrowser_active::-webkit-scrollbar-thumb{background-color:hsla(0,0%,49.8%,.5);outline:1px solid #708090}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__source-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;padding:2px 4px;color:#969696;border-bottom:1px solid #484848;position:relative;word-break:break-all;background:#5a5a5a;font-size:12px}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:38px;padding:calc(8px/2) 8px;text-decoration:none;color:#b1b1b1;-webkit-transition:background-color .2s ease 0s;-o-transition:background-color .2s ease 0s;transition:background-color .2s ease 0s;border-bottom:1px solid #474747;position:relative;word-break:break-all}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item-title{-webkit-box-flex:1;-ms-flex:1;flex:1}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item .jodit-icon_folder{margin-left:calc(8px/2);width:calc(12px + 4px);height:calc(12px + 4px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:.3}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item .jodit-icon_folder svg{width:12px;height:12px;stroke:#b1b1b1!important;fill:#b1b1b1!important}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item .jodit-icon_folder:hover{background:#696969}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item:hover{color:#222;background-color:#ecebe9}.jodit-filebrowser__tree.jodit-filebrowser_active .jodit-filebrowser__tree-item:hover i.jodit-icon_folder{opacity:.6}.jodit-filebrowser__files.jodit-filebrowser_active{width:100%;overflow-y:auto;padding:calc(8px/2);-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:start;align-content:flex-start}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__source-title{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:calc(8px*-1);margin-bottom:0;display:block;padding:8px;position:relative;word-break:break-all;background:#5a5a5a;font-size:16px;color:#969696}.jodit-filebrowser__files.jodit-filebrowser_active a+.jodit-filebrowser__source-title{margin-top:8px}.jodit-filebrowser__files.jodit-filebrowser_active 
 .jodit-filebrowser__files-item{width:150px;height:150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;border:1px solid #dadada;margin:calc(8px/2);font-size:0;overflow:hidden;-webkit-transition:border .1s linear,bottom .1s linear;-o-transition:border .1s linear,bottom .1s linear;transition:border .1s linear,bottom .1s linear;position:relative}@media (max-width:480px){.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item{width:calc(50% - 8px)}}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item img{max-width:100%}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item:hover{border-color:#433b5c}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item_active_true{border-color:#1e88e5;background-color:#b5b5b5}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item_active_true .jodit-filebrowser__files-item-info{background-color:#b5b5b5;color:#fff;text-shadow:none}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item-info{position:absolute;right:0;left:0;bottom:0;white-space:normal;opacity:.85;overflow:visible;padding:.3em .6em;-webkit-transition:opacity .4s ease;-o-transition:opacity .4s ease;transition:opacity .4s ease;background-color:#e9e9e9;color:#333;text-shadow:#eee 0 1px 0;font-size:14px;line-height:16px;text-align:left}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item-info>span{display:block;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.75em}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item-info>span.jodit-filebrowser__files-item-info-filename{font-weight:700;font-size:.9em}.jodit-filebrowser__files.jodit-filebrowser_active .jodit-filebrowser__files-item:hover:not(.jodit-filebrowser__files-item_active_true) .jodit-filebrowser__files-item-info{bottom:-100px}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list{scroll-behavior:smooth}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a{display:block;width:100%;height:26px;line-height:26px;margin:0;border-width:0 0 1px;text-align:left;white-space:nowrap}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a img{min-width:16px;max-width:16px;vertical-align:middle;display:inline-block;margin-left:4px}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a .jodit-filebrowser__files-item-info{padding:0;position:static;display:inline-block;width:calc(100% - 20px);margin-left:4px;background-color:transparent;height:100%;line-height:inherit;vertical-align:middle;font-size:0}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a .jodit-filebrowser__files-item-info>span{display:inline-block;height:100%;font-size:12px}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a .jodit-filebrowser__files-item-info>span.jodit-filebrowser__files-item-info-filename{width:50%}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a .jodit-filebrowser__files-item-info>span.jodit-filebrowser__files-item-info-filechanged,.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a .jodit-filebrowser__files-item-info>span.jodit-filebrowser__files-item-info-filesize{width:25%}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a:hover{background-color:#433b5c}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a:hover .jodit-filebrowser__files-item-info{color:#fff;text-shadow:none}.jodit-filebrowser__files.jodit-filebrowser_active.jodit-filebrowser__files_view_list a:before{height:100%;content:"";vertical-align:middle;display:inline-block}.jodit_draghover{background-color:#ecebe9}.jodit-dialog .jodit-dialog__header-title.jodit-filebrowser__title-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:8px}.jodit-filebrowser_preview{text-align:center;min-width:600px;max-width:1000px;min-height:700px;max-height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:768px){.jodit-filebrowser_preview{max-width:100%;max-height:100%;min-width:auto;min-height:auto;height:100%}}.jodit-filebrowser_preview_box{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-filebrowser_preview_navigation{position:absolute;top:0;height:100%;left:0}.jodit-filebrowser_preview_navigation-next{left:auto;right:0}.jodit-filebrowser_preview_navigation svg{width:45px;height:45px;position:relative;top:50%;margin-top:-22px;-webkit-transition:fill .3s linear;-o-transition:fill .3s linear;transition:fill .3s linear;fill:#9e9ba7}.jodit-filebrowser_preview_navigation:hover svg{fill:#000}.jodit-filebrowser_preview img{max-width:100%;max-height:100%}.jodit-image-editor{width:100%;height:100%;padding:8px;overflow:hidden}@media (max-width:768px){.jodit-image-editor{height:auto}}.jodit-image-editor>div,.jodit-image-editor>div>div{height:100%}@media (max-width:768px){.jodit-image-editor>div,.jodit-image-editor>div>div{height:auto;min-height:200px}}.jodit-image-editor *{-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-image-editor .jodit-image-editor__slider-title{text-shadow:#f3f3f3 0 1px 0;color:#333;border-bottom:1px solid hsla(0,0%,62%,.31);background-color:#f9f9f9;padding:.8em 1em;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:700;line-height:1em}.jodit-image-editor .jodit-image-editor__slider-title svg{margin-right:8px;width:16px;display:inline-block;vertical-align:middle}.jodit-image-editor .jodit-image-editor__slider-content{display:none}.jodit-image-editor .jodit-image-editor__slider.jodit-image-editor_active .jodit-image-editor__slider-title{background-color:#5d5d5d;color:#fff;text-shadow:#000 0 1px 0}.jodit-image-editor .jodit-image-editor__slider.jodit-image-editor_active .jodit-image-editor__slider-title svg{fill:#fff}.jodit-image-editor .jodit-image-editor__slider.jodit-image-editor_active .jodit-image-editor__slider-content{display:block}.jodit-image-editor__area{width:100%;background-color:#eee;background-image:-o-linear-gradient(45deg,#dadada 25%,transparent 0,transparent 75%,#dadada 0,#dadada),-o-linear-gradient(45deg,#dadada 25%,transparent 0,transparent 75%,#dadada 0,#dadada);background-image:linear-gradient(45deg,#dadada 25%,transparent 0,transparent 75%,#dadada 0,#dadada),linear-gradient(45deg,#dadada 25%,transparent 0,transparent 75%,#dadada 0,#dadada);background-size:30px 30px;background-position:0 0,15px 15px;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none}.jodit-image-editor__area.jodit-image-editor_active{display:block}.jodit-image-editor__area .jodit-image-editor__box{overflow:hidden;position:relative;z-index:1;pointer-events:none;height:100%}.jodit-image-editor__area .jodit-image-editor__box img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;max-width:100%;max-height:100%}.jodit-image-editor__area .jodit-image-editor__croper{z-index:2;width:100px;height:100px;position:absolute;-webkit-box-shadow:0 0 11px #000;box-shadow:0 0 11px #000;border:1px solid #fff;background-repeat:no-repeat;top:8px;left:20px;pointer-events:none}.jodit-image-editor__area .jodit-image-editor__resizer{z-index:2;width:100px;height:100px;position:absolute;-webkit-box-shadow:0 0 11px #000;box-shadow:0 0 11px #000;border:1px solid #fff;background-repeat:no-repeat;top:8px;left:20px;pointer-events:none}.jodit-image-editor__area .jodit-image-editor__croper i.jodit_bottomright{position:absolute;display:inline-block;border:1px solid #383838;z-index:4;background-color:#8c7878;cursor:se-resize;border-radius:50%;height:20px;width:20px;right:calc(8px*-1);bottom:calc(8px*-1);-webkit-box-shadow:0 0 11px #000;box-shadow:0 0 11px #000;pointer-events:all}.jodit-image-editor__area .jodit-image-editor__resizer i.jodit_bottomright{position:absolute;display:inline-block;border:1px solid #383838;z-index:4;background-color:#8c7878;cursor:se-resize;border-radius:50%;height:20px;width:20px;right:calc(8px*-1);bottom:calc(8px*-1);-webkit-box-shadow:0 0 11px #000;box-shadow:0 0 11px #000;pointer-events:all}.jodit-image-editor__area .jodit-image-editor__croper i.jodit_bottomright:active,.jodit-image-editor__area .jodit-image-editor__resizer i.jodit_bottomright:active{border:1px solid #ff0}.jodit-image-editor__area.jodit-image-editor__area_crop{height:100%;background:#eee;text-align:center;line-height:100%;position:relative}.jodit-image-editor__area.jodit-image-editor__area_crop .jodit-image-editor__box{height:100%;overflow:visible;pointer-events:all;text-align:left;line-height:100%}.jodit-image-editor__area.jodit-image-editor__area_crop .jodit-image-editor__box img{max-width:100%;max-height:100%;width:100%;height:100%}.jodit-image-editor__area.jodit-image-editor__area_crop .jodit-image-editor__box:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;background:hsla(0,0%,100%,.3);z-index:1}.jodit-image-editor__area.jodit-image-editor__area_crop 
 .jodit-image-editor__box .jodit-image-editor__croper{pointer-events:all;cursor:move}.jodit-image-editor__area.jodit-image-editor__area_crop .jodit-image-editor__box .jodit-image-editor__croper i.jodit-image-editor__sizes{font-size:12px;white-space:pre;position:absolute;bottom:-30px;left:100%;text-align:center;color:#fff;text-shadow:none;background:rgba(0,0,0,.2);border-radius:.4em;padding:9px 6px;display:block}.jodit-image-editor__area.jodit-image-editor__area_crop.jodit-image-editor_active{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-status-bar{font-size:11px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f9f9f9;padding:0 calc(8px/2);overflow:hidden;border-radius:0 0 3px 3px}.jodit-status-bar:before{content:"";-webkit-box-flex:1;-ms-flex:auto;flex:auto;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.jodit-status-bar .jodit-status-bar__item{line-height:1.57142857em;margin:0 8px 0 0;padding:0;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.jodit-status-bar .jodit-status-bar__item{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;font-size:11px}.jodit-status-bar .jodit-status-bar__item>span{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;font-size:11px}.jodit-status-bar .jodit-status-bar__item.jodit-status-bar__item-right{margin:0 0 0 8px;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.jodit-status-bar .jodit-status-bar__item a{text-decoration:none;cursor:default;border-radius:3px}.jodit-status-bar .jodit-status-bar__item a:hover{background-color:rvar(--jd-color-gray);text-decoration:none;color:#222}.jodit-workplace+.jodit-status-bar:not(:empty){border-top:1px solid #dadada}.jodit_disabled .jodit-status-bar{opacity:.4}.jodit-drag-and-drop__file-box{position:relative;overflow:hidden;width:100%;padding:25px 0;border:1px dashed #dadada;margin:8px 0;text-align:center}.jodit_uploadfile_button{position:relative;overflow:hidden;width:100%;padding:25px 0;border:1px dashed #dadada;margin:8px 0;text-align:center}.jodit-drag-and-drop__file-box:hover{background-color:#ecebe9}.jodit_uploadfile_button:hover{background-color:#ecebe9}.jodit-drag-and-drop__file-box input,.jodit_uploadfile_button input{position:absolute;top:0;right:0;bottom:0;left:0;padding:0;margin:0;cursor:pointer;font-size:400px;opacity:0}@media (max-width:768px){.jodit-drag-and-drop__file-box{width:auto;min-width:180px;max-width:100%}}.jodit-add-new-line{z-index:1;position:fixed;height:1px;top:0;outline:none;display:block}.jodit-add-new-line,.jodit-add-new-line *{-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-add-new-line:after{content:"";background-color:#6b6b6b;height:1px;display:block;width:calc(100% - 30px)}.jodit-add-new-line span{position:absolute;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:30px;height:calc(8px*2);background:rgba(236,235,233,0.3);border:1px solid #6b6b6b;cursor:pointer}.jodit-add-new-line span:hover{background:#ecebe9}.jodit-add-new-line_after span{bottom:0}.jodit-add-new-line svg{width:16px;fill:#6b6b6b}.jodit-source__mode .jodit-add-new-line{display:none!important}.jodit-about{padding:20px}.jodit-about a{color:#459ce7;text-decoration:none}.jodit-about a:focus,.jodit-about a:hover{color:#23527c;text-decoration:underline;outline:0}.jodit-about div{margin-bottom:calc(8px/2)}.jodit-paste-storage{padding:8px;max-width:600px}@media (max-width:768px){.jodit-paste-storage{max-width:100%}}.jodit-paste-storage>div{max-width:100%;max-height:300px;border:1px solid #dadada}.jodit-paste-storage>div:first-child{margin-bottom:8px}.jodit-paste-storage>div:first-child a{outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;max-width:100%;white-space:pre;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding:calc(8px/2);margin:0;border:1px solid transparent;text-decoration:none;color:#4c4c4c}.jodit-paste-storage>div:first-child a.jodit_active{color:#fff;background-color:#575757}.jodit-paste-storage>div:first-child a:focus{outline:none}.jodit-paste-storage>div:last-child{padding:8px;overflow:auto}.jodit-paste-storage>div:last-child li,.jodit-paste-storage>div:last-child ul{margin:0}.jodit-color-picker{text-align:left;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit-color-picker .jodit-color-picker__group{margin-bottom:calc(8px/2);white-space:normal;max-width:calc(24px*10);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.jodit-color-picker a{width:24px;height:24px;display:block;text-decoration:none;vertical-align:middle;text-align:center;border:1px solid transparent}.jodit-color-picker a:hover{border-color:#000}.jodit-color-picker a.jodit_active{border:2px solid #1e88e5}.jodit-color-picker a:active{border:2px solid #1e88e5}.jodit-color-picker__native svg{width:16px;height:16px;display:inline-block;margin-right:4px}.jodit-color-picker__native input{width:18px;height:18px;padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.jodit-color-picker__native input[type=color]::-webkit-color-swatch-wrapper{padding:0}.jodit-color-picker__native input input[type=color]::-webkit-color-swatch{border:none}.jodit-tabs{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px}.jodit-tabs .jodit-tabs__buttons{line-height:18px;margin-bottom:calc(8px/2);margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jodit-tabs .jodit-tabs__buttons>*{margin-left:calc(8px/2)}.jodit-tabs .jodit-tabs__buttons>:only-of-type{width:100%}.jodit-tabs .jodit-tabs__buttons>:first-child{margin-left:0}@media (max-width:480px){.jodit-tabs .jodit-tabs__buttons{display:block}.jodit-tabs .jodit-tabs__buttons>*{width:100%;margin-left:0}}.jodit-tabs__button{min-width:80px}.jodit-tabs__button_columns_3{width:100%/3}.jodit-tabs__button_columns_2{width:50%}.jodit-tabs .jodit-tabs__wrapper .jodit-tab{display:none}.jodit-tabs .jodit-tabs__wrapper .jodit-tab.jodit-tab_active{display:block}.jodit-tabs .jodit-tabs__wrapper .jodit-tab.jodit-tab_empty{min-width:220px;min-height:100px}.jodit_error_box_for_messages{position:absolute;right:0;bottom:0;width:0;height:0;overflow:visible;z-index:3}.jodit_error_box_for_messages>*{position:absolute;right:calc(8px/2);bottom:0;display:block;-webkit-transition:opacity .1s linear,bottom .3s linear;-o-transition:opacity .1s linear,bottom .3s linear;transition:opacity .1s linear,bottom .3s linear;opacity:0;background:rgba(255,0,0,.29);color:#e02b2b;padding:2px 7px;border:1px solid rgba(226,117,117,.44);font-size:14px;white-space:pre}.jodit_error_box_for_messages>.active{opacity:1}.jodit_error_box_for_messages>.info{background:rgba(204,229,247,.71);color:#776565;border:1px solid hsla(0,0%,60.4%,.44)}.jodit_error_box_for_messages>.success{background:rgba(77,236,112,.29);color:#5d5a5a;border:1px solid hsla(0,0%,58%,.44)}.jodit_fullsize-box_true{z-index:100000!important;position:static!important;overflow:visible!important}body.jodit_fullsize-box_true,html.jodit_fullsize-box_true{height:0!important;width:0!important;overflow:initial!important}html.jodit_fullsize-box_true{position:fixed!important}.jodit_fullsize{position:absolute;top:0;left:0;right:0;bottom:0;z-index:100000;max-width:none!important}.jodit_fullsize .toolbar{width:100%!important}.jodit_fullsize .jodit__area,.jodit_fullsize .jodit_editor{height:100%}.jodit-properties__lock>svg,.jodit-properties__unlock>svg{font-style:normal;display:inline-block;width:14px;height:14px;line-height:14px;font-size:8px;overflow:hidden;vertical-align:middle;fill:#222;-webkit-transform-origin:0 0!important;-ms-transform-origin:0 0!important;transform-origin:0 0!important}.jodit-properties .jodit-properties_view_box{padding:8px}.jodit-properties .jodit-properties_view_box .jodit-properties_image_view{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:150px;padding:0;margin:0 0 8px;background-color:#f6f6f6}.jodit-properties .jodit-properties_view_box .jodit-properties_image_view img{max-width:100%;max-height:100%}.jodit-properties .jodit-properties_view_box .jodit-properties_image_sizes.jodit-form__group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0!important;margin:0!important;min-width:auto}.jodit-properties .jodit-properties_view_box .jodit-properties_image_sizes.jodit-form__group a{display:inline-block;cursor:pointer}.jodit-properties 
 .jodit-properties_view_box .jodit-properties_image_sizes.jodit-form__group .jodit-input{width:calc(50% - 8px)!important}.jodit-popup-inline__container{z-index:1300;min-width:700px}.jodit-placeholder{width:100%;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;top:0;left:0;display:block;position:absolute;padding:8px;color:#a5a5a5;z-index:1;pointer-events:none}[data-jodit_iframe_wrapper]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}[data-jodit_iframe_wrapper]:after{position:absolute;content:"";z-index:1;top:0;left:0;right:0;bottom:0;cursor:pointer;display:block;background:transparent}.jodit-resizer{width:100px;height:100px;position:absolute;border:1px solid #4c4c4c;top:0;left:0;pointer-events:none;font-size:0}.jodit-resizer *{-webkit-box-sizing:border-box;box-sizing:border-box}.jodit-resizer>span{left:50%;top:50%;width:70px;height:24px;margin-left:calc(70px/-2);margin-top:calc(24px/-2);line-height:24px;font-size:12px;text-align:center;color:#fff;background-color:#a5a5a5;opacity:0;-webkit-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear;overflow:visible}.jodit-resizer>i,.jodit-resizer>span{position:absolute;display:inline-block}.jodit-resizer>i{z-index:4;pointer-events:all;border:1px solid #4c4c4c;background-color:rvar(--jd-color-gray);width:8px;height:8px}.jodit-resizer>i:hover{background-color:#f8f8f8}.jodit-resizer>i:first-child{left:calc(8px/-2);top:calc(8px/-2);cursor:nw-resize}.jodit-resizer>i:nth-child(2){right:calc(8px/-2);top:calc(8px/-2);cursor:ne-resize}.jodit-resizer>i:nth-child(3){right:calc(8px/-2);bottom:calc(8px/-2);cursor:se-resize}.jodit-resizer>i:nth-child(4){left:calc(8px/-2);bottom:calc(8px/-2);cursor:sw-resize}.jodit-search{visibility:hidden;position:absolute;top:0;right:0;width:0;height:0}.jodit-search_sticky{position:fixed}.jodit-search.jodit-search_active{visibility:visible}.jodit-search .jodit-search__box{width:320px;max-width:100vw;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;right:0;background-color:#f9f9f9;border:solid #dadada;border-width:0 0 1px 1px;padding:calc(8px/2)}.jodit-search .jodit-search__box input{margin:0;width:100%;height:100%;border:0;background-color:transparent;outline:none;padding:0 8px}.jodit-search .jodit-search__box input[data-ref=replace]{display:none}.jodit-search .jodit-search__box input:not(:focus)+input:not(:focus){border-top:1px solid #dadada}.jodit-search .jodit-search__box .jodit-search__buttons{height:30px}.jodit-search .jodit-search__box .jodit-search__counts{height:30px}.jodit-search .jodit-search__box .jodit-search__inputs{height:30px}.jodit-search .jodit-search__box .jodit-search__inputs{width:60%;padding-right:calc(8px/2)}.jodit-search .jodit-search__box .jodit-search__counts{width:15%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#dadada;border-left:1px solid #dadada}.jodit-search .jodit-search__box .jodit-search__buttons{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jodit-search .jodit-search__box .jodit-search__buttons button{width:32%;margin-right:1%;height:100%;border:1px solid transparent;background-color:transparent}.jodit-search .jodit-search__box .jodit-search__buttons button[data-ref=replace-btn]{width:100%;border:1px solid #dadada;margin-top:2px;display:none}.jodit-search .jodit-search__box .jodit-search__buttons button:hover{background-color:#ecebe9}.jodit-search .jodit-search__box .jodit-search__buttons button:focus{border:1px solid rgba(181,214,253,0.5)}.jodit-search .jodit-search__box .jodit-search__buttons button:active{border:1px solid #b5d6fd;-webkit-transform:scale(0.95,0.95);-ms-transform:scale(0.95,0.95);transform:scale(0.95,0.95)}.jodit-search.jodit-search_replace .jodit-search__counts{height:calc(30px*2)}.jodit-search.jodit-search_replace .jodit-search__inputs{height:calc(30px*2)}.jodit-search.jodit-search_replace .jodit-search__counts input{height:50%;-webkit-transition:background-color 0.1s linear;-o-transition:background-color 0.1s linear;transition:background-color 0.1s linear}.jodit-search.jodit-search_replace .jodit-search__inputs input{height:50%;-webkit-transition:background-color 0.1s linear;-o-transition:background-color 0.1s linear;transition:background-color 0.1s linear}.jodit-search.jodit-search_replace .jodit-search__counts input:focus{-webkit-box-shadow:inset 0 0 3px 0 #dadada;box-shadow:inset 0 0 3px 0 #dadada}.jodit-search.jodit-search_replace .jodit-search__inputs input:focus{-webkit-box-shadow:inset 0 0 3px 0 #dadada;box-shadow:inset 0 0 3px 0 #dadada}.jodit-search.jodit-search_replace .jodit-search__buttons{-ms-flex-wrap:wrap;flex-wrap:wrap}.jodit-search.jodit-search_replace .jodit-search__buttons button[data-ref=replace-btn],.jodit-search.jodit-search_replace .jodit-search__inputs input[data-ref=replace]{display:block}.jodit-container:not(.jodit_inline){min-height:100px}.jodit-container:not(.jodit_inline) .jodit-workplace{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto;min-height:50px;overflow:hidden}.jodit-container:not(.jodit_inline) .jodit-editor__resize{position:relative}.jodit-container:not(.jodit_inline) .jodit-editor__resize a{position:absolute;bottom:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;height:0;overflow:hidden;border-left:0 dashed transparent;border-bottom:0 dashed transparent;border-right:7px solid #dadada;border-top:7px dashed transparent;cursor:se-resize}.jodit-source{display:none;position:relative;background-color:#323232;-webkit-box-flex:1;-ms-flex:auto;flex:auto;overflow:auto}.jodit-source,.jodit-source .jodit-source__mirror-fake{min-height:100%}.jodit-source *{font:12px/normal Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace}.jodit-container.jodit-source__mode .jodit-wysiwyg,.jodit-container.jodit-source__mode .jodit-wysiwyg_iframe{display:none!important}.jodit-container.jodit-source__mode .jodit-source{display:block!important}.jodit-container.jodit_split_mode .jodit-workplace{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.jodit-container.jodit_split_mode .jodit-source,.jodit-container.jodit_split_mode .jodit-wysiwyg,.jodit-container.jodit_split_mode .jodit-wysiwyg_iframe{display:block!important;width:50%;-webkit-box-flex:1;-ms-flex:1;flex:1}.jodit-source__mirror{border:0;width:100%;height:100%;background:#323232;margin:0;resize:none;-webkit-box-sizing:border-box;box-sizing:border-box;color:#f0f0f0;outline:none;font:12px/normal Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace;line-height:1.5;-webkit-box-shadow:none;box-shadow:none;overflow:auto;z-index:2;padding:8px;white-space:pre-wrap;-moz-tab-size:2em;-o-tab-size:2em;tab-size:2em;min-height:100%}.jodit-source__mirror::-moz-selection{background:#bdbdbd}.jodit-source__mirror::selection{background:#bdbdbd}.jodit_sticky-dummy_toolbar{display:none}.jodit_sticky>.jodit-toolbar__box{position:fixed;position:-webkit-sticky;position:sticky;z-index:3;top:0;left:auto;border-bottom:1px solid #dadada}.jodit_sticky .jodit_sticky-dummy_toolbar{display:block}.jodit-symbols{width:460px;padding:8px}.jodit-symbols .jodit-symbols__container_preview,.jodit-symbols .jodit-symbols__container_table{display:inline-block;vertical-align:top}.jodit-symbols .jodit-symbols__container_table{width:88%}.jodit-symbols .jodit-symbols__container_preview{width:12%}.jodit-symbols .jodit-symbols__container_preview .jodit-symbols__preview{font-size:34px;text-align:center;padding:20px 0;border:1px solid #dadada}.jodit-symbols table{border:0;border-spacing:0;table-layout:fixed}.jodit-symbols table td{padding:0}.jodit-symbols table td a{font-size:16px;text-decoration:none;color:#4c4c4c;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(18px*1.2);height:calc(18px*1.2);border:1px solid transparent;text-align:center;line-height:calc(18px*1.2);vertical-align:top}.jodit-symbols table td a:focus{outline:2px solid #dadada}.jodit-symbols table td a:hover{outline:2px solid #dadada}.jodit-table-resizer{cursor:col-resize;position:absolute;z-index:3;padding-left:calc(8px/2);padding-right:calc(8px/2);margin-left:calc(8px/-2)}.jodit-table-resizer:after{content:"";display:block;height:100%;width:0;border:0}.jodit-table-resizer_moved{background-color:#b5d6fd;z-index:2}.jodit-table-resizer_moved:after{border-right:1px solid moved}.jodit-wysiwyg table{border:none;border-collapse:collapse;table-layout:fixed;empty-cells:show;max-width:100%}.jodit-wysiwyg table tr{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jodit-wysiwyg table tr td,.jodit-wysiwyg table tr th{border:1px solid #ddd;vertical-align:middle;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.jodit-form__inserter .jodit-form__table-creator-box{display:-webkit-box;display:-ms-flexbox;display:flex}@media (max-width:768px){.jodit-form__inserter .jodit-form__table-creator-box{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.jodit-form__inserter .jodit-form__table-creator-box 
 .jodit-form__container{padding:0;margin:0;min-width:180px;font-size:0}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__container>div>span{width:18px;height:18px;display:inline-block;vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #dadada;margin-left:2px;margin-bottom:2px}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__container>div>span:first-child{margin-left:0}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__container>div>span.jodit_hovered{background:#7a450f;border-color:#7a450f}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__options{font-size:14px}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__options label{text-align:left;padding-top:0}.jodit-form__inserter .jodit-form__table-creator-box .jodit-form__options label input{margin-right:8px}.jodit-form__inserter label{text-align:center;font-size:14px;padding:8px;margin:0}.jodit-tooltip{position:fixed;background:#727171;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:14px;font-size:11px;line-height:1.4;white-space:normal;padding:calc(8px/4) calc(8px/2);z-index:10000002;max-width:120px;border-radius:2px;width:auto;-webkit-transition:opacity .2s ease 0s;-o-transition:opacity .2s ease 0s;transition:opacity .2s ease 0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-clip:padding-box;text-rendering:optimizeLegibility;opacity:0}@media (max-width:768px){.jodit-tooltip{display:none}}.jodit-tooltip.jodit-tooltip_visible{opacity:1}.jodit-xpath{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:calc(8px/-2)}.jodit-xpath__item{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:calc(11px - 1px);height:11px}.jodit-xpath__item a{font-size:11px;color:#4c4c4c;padding:0 3px;margin-left:2px;outline:0}
`;
export const antdStyle = ``;
