;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wechat" viewBox="0 0 1280 1024">' +
    '' +
    '<path d="M644.1984 315.1872c31.6416 0 52.736-21.1456 52.736-52.6848 0-31.8464-21.0944-52.48-52.736-52.48-31.6416 0-63.3856 20.6336-63.3856 52.48 0 31.5392 31.7952 52.736 63.3856 52.736zM349.3376 210.0224c-31.5904 0-63.5392 20.6336-63.5392 52.48 0 31.5392 31.9488 52.736 63.5392 52.736 31.488 0 52.5824-21.1968 52.5824-52.736 0-31.8464-21.0944-52.48-52.5824-52.48z m925.1328 442.4704c0-166.656-154.624-308.6848-344.3712-323.4304a18.9952 18.9952 0 0 0-0.1024-6.4C891.9552 145.2544 701.1328 11.52 486.1952 11.52 243.3024 11.52 45.6704 180.8896 45.6704 389.12c0 111.6672 56.9856 212.3264 165.0688 291.6864L173.056 794.112a19.3024 19.3024 0 0 0 18.2784 25.2416 19.3536 19.3536 0 0 0 8.5504-2.048l141.4656-70.7584 17.408 3.584c43.52 8.9088 81.152 16.6912 127.488 16.6912 13.568 0 51.0976-5.0176 54.272-9.0112 50.9952 127.6416 191.5392 219.7504 356.9152 219.7504 42.3424 0 85.248-10.24 123.7504-19.8656l109.0048 59.5968a19.3024 19.3024 0 0 0 21.248-1.8944 19.1488 19.1488 0 0 0 6.2976-20.4288l-27.8016-92.5696c93.3376-73.728 144.5376-161.9968 144.5376-249.856z m-751.7696 62.8736c-12.0832 1.024-24.2688 1.536-36.4032 1.536-40.9088 0-75.52-7.0656-115.5072-15.36l-23.2448-4.6592a17.8688 17.8688 0 0 0-11.8784 1.536l-102.1952 51.2 26.5216-79.7696a18.5344 18.5344 0 0 0-6.9632-21.0432C150.3744 577.2288 98.304 489.984 98.304 389.632c0-180.3776 174.08-327.168 387.9936-327.168 189.0816 0 356.5056 114.9952 391.0656 268.032-198.2976 2.56-358.7072 141.9776-358.7072 313.1904 0 24.8832 3.7888 48.9984 10.1376 72.2944a18.432 18.432 0 0 0-6.144-0.6656z m563.712 153.8048a18.2784 18.2784 0 0 0-6.5024 19.8656l17.3056 57.3952-70.912-38.7584a18.2272 18.2272 0 0 0-13.2096-1.6896c-37.9904 9.6256-77.312 19.5072-115.6608 19.5072-177.8688 0-322.56-122.2144-322.56-272.4864s144.64-272.4864 322.56-272.4864c174.5408 0 321.9968 124.7744 321.9968 272.4864 0 74.9056-47.2576 151.7056-133.0176 216.1664z m-305.152-353.6896c-21.0944 0-42.1888 21.248-42.1888 42.2912 0 21.1968 21.0944 42.1376 42.1888 42.1376 31.6416 0 52.5824-20.9408 52.5824-42.1376 0-21.0944-20.9408-42.2912-52.5824-42.2912z m231.5776 0c-20.736 0-41.8304 21.248-41.8304 42.2912 0 21.1968 21.0944 42.1376 41.8304 42.1376 31.5904 0 52.8896-20.9408 52.8896-42.1376 0-21.0944-21.248-42.2912-52.8896-42.2912z" fill="#11CD6E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M506.054591 880.192733c0 43.505863-63.615876 78.773088-142.089136 78.773088s-142.089136-35.268248-142.089135-78.773088 63.615876-78.773088 142.089135-78.773088 142.089136 35.268248 142.089136 78.773088z m153.385413-78.773088c-78.474282 0-142.089136 35.268248-142.089136 78.773088s63.615876 78.773088 142.089136 78.773088 142.089136-35.268248 142.089135-78.773088-63.615876-78.773088-142.089135-78.773088z" fill="#FFC817" ></path>' +
    '' +
    '<path d="M825.904293 502.377852s-10.752902-11.024078-22.294772-21.221324V355.234607c0-161.052023-130.558521-291.610544-291.610544-291.610544S220.389456 194.182584 220.389456 355.234607v125.921921c-11.540847 10.197246-22.294772 21.221324-22.294772 21.221324-19.024286 28.53694-64.207347 102.256942-64.207348 171.815157s19.024286 81.449034 26.158777 82.043575c6.616698 0.551562 31.131021-6.063089 60.262502-50.654681 39.425941 131.09985 154.970514 226.037083 291.393603 226.037083 136.639007 0 252.337075-95.236038 291.583938-226.658229 29.309536 45.151339 54.020334 51.829436 60.667731 51.275827 7.134491-0.594541 26.158776-12.485359 26.158777-82.043575S844.928578 530.914792 825.904293 502.377852z" fill="#37474F" ></path>' +
    '' +
    '<path d="M297.454646 552.317241a375.358947 375.358947 0 0 0-3.473101 51.128471c0 159.245887 99.199303 288.340057 221.567281 288.340057s221.567281-129.09417 221.567281-288.340057a375.522676 375.522676 0 0 0-3.473101-51.128471H297.454646zM435.307294 197.390649c-32.506345 0-58.857503 35.733852-58.857503 79.81379 0 44.079938 26.351158 79.81379 58.857503 79.813791s58.857503-35.733852 58.857502-79.813791c0-44.079938-26.352181-79.81379-58.857502-79.81379z m9.809413 112.660896c-11.82021 0-21.402449-14.639418-21.402449-32.698726s9.582239-32.698726 21.402449-32.698726c11.82021 0 21.402449 14.639418 21.402449 32.698726s-9.582239 32.698726-21.402449 32.698726zM590.476329 197.390649c-32.506345 0-58.857503 35.733852-58.857503 79.81379 0 44.079938 26.351158 79.81379 58.857503 79.813791s58.857503-35.733852 58.857503-79.813791c-0.001023-44.079938-26.352181-79.81379-58.857503-79.81379z m9.93221 82.787518l-0.030699 0.005117c0.001023 0.021489 0.023536 0.033769 0.023536 0.055258 0 0.896416-0.726547 1.622964-1.622964 1.622964-0.738827 0-1.25969-0.544399-1.455141-1.218758l-0.062422 0.00921v0.149403c-3.748371-9.331529-10.383488-15.635095-18.079774-15.635096-7.693216 0-14.325263 6.296403-18.074657 15.620769l-0.059352-0.036839-0.055258-0.012279c-0.264013 0.557702-0.722454 1.00284-1.380441 1.00284a1.647523 1.647523 0 0 1-1.648546-1.648547c0-0.016373 0.017396-0.025583 0.017396-0.040932l-0.035815-0.008186c-0.058328-0.895393-0.166799-1.768273-0.166799-2.688226 0-18.059308 9.582239-32.698726 21.402449-32.698726s21.402449 14.639418 21.402449 32.698726c0 0.966001-0.110517 1.883907-0.173962 2.823302z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M281.18817 536.26566c-5.350868 26.753317-16.646122 146.845463-11.296277 173.59878s27.855418 22.285562 60.046585 22.591531c31.211862 0.296759 67.774593 8.918114 68.369133-30.320563 0.594541-39.237653 0.594541-116.5249 9.512655-145.06184 8.91709-28.53694-126.632095-20.807908-126.632096-20.807908z" fill="#FF3B30" ></path>' +
    '' +
    '<path d="M274.071076 593.588203l125.538181 40.585347c1.089821-30.820959 3.295046-61.368696 8.211009-77.101005 8.918114-28.53694-126.632095-20.807908-126.632096-20.807908-1.948375 9.739828-4.683672 31.851429-7.117094 57.323566z" fill="#DD2C00" ></path>' +
    '' +
    '<path d="M512.594541 467.895503c97.846492 0 177.166025-35.671431 177.166025-57.668421 0-16.646122-79.319533-33.887808-177.166025-33.887808-97.845469 0-177.166025 15.458063-177.166026 33.887808 0 20.808932 79.319533 57.668421 177.166026 57.668421z" fill="#FFC817" ></path>' +
    '' +
    '<path d="M514.378164 489.298975s112.363114 1.189082 202.13572-36.860512c89.771583-38.048571 88.880283-42.358737 98.689696-42.358737 9.809413 0 21.402449 14.123672 26.307156 39.61116 4.904707 25.487487 10.701736 45.552475-10.255575 58.037834-20.956288 12.484336-158.290119 93.190449-313.012993 93.190449h-7.729032c-154.722874 0-292.056706-80.706113-313.012993-93.190449s-15.160281-32.549324-10.255575-58.037834c4.904707-25.487487 16.497743-39.61116 26.307156-39.61116s8.918114 4.310166 98.689696 42.358737 202.136743 36.860513 202.136744 36.860512z" fill="#FF3B30" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)