const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

// Куда будет финальный редирект
const FINAL_URL = 'https://claritycheck.com/';

// Заголовки, которые помогают Instagram WebView "вылететь" в Safari
const REDIRECT_HEADERS = {
  'Content-Length': '0',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Connection': 'close',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  // Первый редирект: на поддомен (или просто другой домен)
  if (path === '/r1') {
    fetch("https://start.trustcheck.club/trustcheck_1week_3dt_st3m_add_dc_sp_bb?ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_3+_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_2+_Event-WebPurchase_ex-tier(en)_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_3&media_source=facebook&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "priority": "u=0, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          "cookie": "_fbp=fb.1.1760468914974.320724291192167549; _ga=GA1.1.1751617569.1760468915; _fbc=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw; _ga_T8BFXESGL8=GS2.1.s1760468914$o1$g1$t1760474041$j55$l0$h0"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "upgrade-insecure-requests": "1"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://region1.google-analytics.com/g/collect?v=2&tid=G-T8BFXESGL8&gtm=45je5a90v9206876461za200zd9206876461&_p=1760474041792&gcd=13l3l3l2l1l1&npa=1&dma_cps=syphamo&dma=1&cid=1751617569.1760468915&ul=en-gb&sr=1728x1117&uaa=arm&uab=64&uafvl=Google%2520Chrome%3B141.0.7390.77%7CNot%253FA_Brand%3B8.0.0.0%7CChromium%3B141.0.7390.77&uamb=0&uam=&uap=macOS&uapv=26.0.1&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115834636~115834638~115868795~115868797~115995680~115995682&sid=1760468914&sct=1&seg=1&dl=https%3A%2F%2Fsub.trustcheck.club%2Ftrustcheck%2F%3Fbb%3Dtrue%26plan%3Dtck_weekly_3dtrial%26skip_trial_plan%3Dtck_3month_plan%26ult_pack%3Dtck_ultimate_pack_otp%26ult_pack_s%3Dtck_ultimate_pack_sale_otp%26unlimited_pdf%3Dtck_pdf_report_otp%26unlimited_pdf_s%3Dtck_pdf_report_sale_otp%26unlimited_pdf_s2%3Dtck_pdf_report_sale2_otp%26avoid_scam%3Dtck_guide_otp%26avoid_scam_s%3Dtck_guide_sale_otp%26avoid_scam_s2%3Dtck_guide_sale2_otp%26sex_offender%3Dtck_sex_offender_sale_otp%26sex_offender_s%3Dtck_sex_offender_sale2_otp%26vault%3Dpayrails%26additional_offer_dc%3Dfalse%26sure_popup%3Dtrue%26light_payment%3Dtrue%26media_source%3Dfacebook%26fb%3D3385266718274455%26payby%3D9%26ad_id%3D120234661887290401%26adset_id%3D120234661887280401%26campaign_id%3D120234661887270401%26ad_name%3DTRUS_342_9x16_az%26adset_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_2%2B_Event-WebPurchase_ex-tier%2528en%2529_30.07.2025_VH_1%26campaign_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%26utm_medium%3Dpaid%26utm_source%3Dig%26utm_id%3D120234661887270401%26utm_content%3D120234661887290401%26utm_term%3D120234661887280401%26utm_campaign%3D120234661887270401%26fbclid%3DPAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%26_c%3DPL%26_i%3D2a02%253Aa310%253Ac0dd%253A3000%253Af572%253Aeccb%253A212e%253Ae9f7%26config%3Dtrustcheck_1week_3dt_st3m_add_dc_sp_bb&dt=TrustCheck&tfd=548331", {
        "headers": {
          "content-type": "text/plain;charset=UTF-8",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "en=user_engagement&_et=12187",
        "method": "POST"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/main.bc60f4a7.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/css/main.ebac702c.css", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://www.googletagmanager.com/gtag/js?id=G-T8BFXESGL8", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "script",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-storage-access": "active",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://connect.facebook.net/en_US/fbevents.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://o4509486007844864.ingest.us.sentry.io/api/4509487538438144/envelope/?sentry_version=7&sentry_key=8933b9f7f0991040607bbdf7303cf2fd&sentry_client=sentry.javascript.react%2F9.30.0", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "{\"sent_at\":\"2025-10-14T20:43:10.030Z\",\"sdk\":{\"name\":\"sentry.javascript.react\",\"version\":\"9.30.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"bb6168d7d19645b486397b384318ffb1\",\"init\":true,\"started\":\"2025-10-14T20:43:10.030Z\",\"timestamp\":\"2025-10-14T20:43:10.030Z\",\"status\":\"ok\",\"errors\":0,\"attrs\":{\"release\":\"trustcheck@0.1.6.8\",\"environment\":\"PROD\",\"ip_address\":\"{{auto}}\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36\"}}",
        "method": "POST"
      }); ;
      fetch("https://o4509486007844864.ingest.us.sentry.io/api/4509487538438144/envelope/?sentry_version=7&sentry_key=8933b9f7f0991040607bbdf7303cf2fd&sentry_client=sentry.javascript.react%2F9.30.0", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "{\"sent_at\":\"2025-10-14T20:43:10.031Z\",\"sdk\":{\"name\":\"sentry.javascript.react\",\"version\":\"9.30.0\"}}\n{\"type\":\"session\"}\n{\"sid\":\"bb6168d7d19645b486397b384318ffb1\",\"init\":false,\"started\":\"2025-10-14T20:43:10.030Z\",\"timestamp\":\"2025-10-14T20:43:10.030Z\",\"status\":\"ok\",\"errors\":0,\"attrs\":{\"release\":\"trustcheck@0.1.6.8\",\"environment\":\"PROD\",\"ip_address\":\"{{auto}}\",\"user_agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36\"}}",
        "method": "POST"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/media/avenirnextcyrregular.e4c3688a18585638ddff.woff2", {
        "referrer": "",
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/media/avenirnextcyrdemi.f033b66b803cabbd66b5.woff2", {
        "referrer": "",
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/media/avenirnextcyrbold.cfcf1bcacc4a11980205.woff2", {
        "referrer": "",
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/579.67301d80.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/960.06058dc0.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/735.76abc7c1.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/522.503a3238.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/772.3dd4ae27.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/532.2d28133c.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/24.a46ecefc.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/874.35bdabd1.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/static/js/705.55d73db8.chunk.js", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://www.cloudflare.com/cdn-cgi/trace", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Ava_01.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Ava_02.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Ava_03.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/logos_grid.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/main.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/phone_map.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/Dropdown.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/logo.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/logo_sign.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/france.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/portugal.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_1.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_2.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_3.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_4.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_5.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_6.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/reveals_7.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/review_decor.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/review_stars.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/spain.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/trust_list_1.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/trust_list_2.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/trust_list_3.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/trust_list_4.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/main/trust_list_5.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/review_stars.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/1.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/10.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/11.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/12.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/13.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/14.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/15.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/16.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/17.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/18.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/19.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/2.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/20.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/3.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/4.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/5.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/6.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/7.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/8.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Avatars/9.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/Head_Image.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/Quiz/million.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/image_1.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/image_2.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/image_3.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/image_4.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/offer_1.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/offer_2.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/img/offer_3.webp", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/apple-logo.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/apple_pay.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/checked_icon_green.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/close.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/credit_card.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/fire.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/google-logo.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/green_shield.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/logo-with-bottom-text.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/logo_subs.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/mail.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/offer/p1.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/offer/p2.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/offer/p3.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/offer/p4.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/offers_question.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/pack_arrow.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/shield.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/step_icon.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/checkmark.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/phone_bg.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/rel_1.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/rel_2.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/rel_3.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/rel_4.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_1.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_2.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_3.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_4.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_5.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_6.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_7.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/svg/subs/results_8.svg", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://www.cloudflare.com/cdn-cgi/trace", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://connect.facebook.net/signals/config/3385266718274455?v=2.9.235&r=stable&domain=sub.trustcheck.club&hme=17acfb61045d3371dfae695fa3b5ad6946c5e7b0f340bb5dc12b59e9cfc87854&ex_m=88%2C149%2C129%2C19%2C123%2C62%2C42%2C124%2C69%2C61%2C136%2C77%2C13%2C87%2C27%2C118%2C109%2C67%2C70%2C117%2C133%2C96%2C138%2C7%2C3%2C4%2C6%2C5%2C2%2C78%2C86%2C139%2C215%2C161%2C56%2C220%2C217%2C218%2C49%2C176%2C26%2C66%2C224%2C223%2C164%2C29%2C55%2C8%2C58%2C82%2C83%2C84%2C89%2C113%2C28%2C25%2C116%2C112%2C111%2C130%2C68%2C132%2C131%2C44%2C114%2C54%2C106%2C12%2C135%2C39%2C205%2C207%2C171%2C22%2C23%2C24%2C16%2C17%2C38%2C34%2C36%2C35%2C73%2C79%2C81%2C94%2C122%2C125%2C40%2C95%2C20%2C18%2C100%2C63%2C32%2C127%2C126%2C128%2C119%2C21%2C31%2C53%2C93%2C134%2C64%2C15%2C30%2C186%2C157%2C266%2C203%2C147%2C189%2C182%2C91%2C115%2C72%2C104%2C48%2C41%2C102%2C103%2C108%2C52%2C14%2C110%2C101%2C59%2C43%2C97%2C47%2C50%2C46%2C85%2C137%2C0%2C107%2C11%2C105%2C9%2C1%2C51%2C80%2C57%2C60%2C99%2C76%2C75%2C45%2C120%2C74%2C71%2C65%2C98%2C90%2C37%2C121%2C33%2C92%2C10%2C140", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://mpc-prod-18-s6uit34pua-uc.a.run.app/events/546dd45e7f8da33a68c10baa744715bffb502ab60f35bfeb3920def6a7468e89", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-storage-access": "active",
          "cookie": "cee=JdLcaXDeh57HIdKMfCgEdwcO2Slz3Za3JJw8miqXkLI%3D.%7B%7D; browser_tags=6zYdaYwmNIW2j0DWkSHKwQX3sJ2roooLeNsdNjZRTbQ%3D.%7B%22fbclid%22%3A%22fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%22%7D",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "{\"event_name\":\"PageView\",\"fb.dynamic_product_ads\":{},\"custom_data\":{},\"event_id\":\"ob3_plugin-set_09a1a4d5c7d17524e438afae8825de8c4de808e4dbc5b7eceab45927fa52e10a\",\"fb.pixel_id\":\"3385266718274455\",\"fb.advanced_matching\":{},\"website_context\":{\"location\":\"https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb\",\"referrer\":\"\",\"isInIFrame\":false},\"fb.fbp\":\"fb.1.1760468914974.320724291192167549\",\"fb.clickID\":\"fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw\",\"event_meta_info\":{\"experiment_detail\":{\"name\":\"CEE_STRONG_PII\",\"is_exposed\":false,\"is_in_control\":true,\"is_in_treatment\":false}}}",
        "method": "POST"
      }); ;
      fetch("https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=3385266718274455&ev=PageView&dl=https%3A%2F%2Fsub.trustcheck.club%2Ftrustcheck%2F%3Fbb%3Dtrue%26plan%3Dtck_weekly_3dtrial%26skip_trial_plan%3Dtck_3month_plan%26ult_pack%3Dtck_ultimate_pack_otp%26ult_pack_s%3Dtck_ultimate_pack_sale_otp%26unlimited_pdf%3Dtck_pdf_report_otp%26unlimited_pdf_s%3Dtck_pdf_report_sale_otp%26unlimited_pdf_s2%3Dtck_pdf_report_sale2_otp%26avoid_scam%3Dtck_guide_otp%26avoid_scam_s%3Dtck_guide_sale_otp%26avoid_scam_s2%3Dtck_guide_sale2_otp%26sex_offender%3Dtck_sex_offender_sale_otp%26sex_offender_s%3Dtck_sex_offender_sale2_otp%26vault%3Dpayrails%26additional_offer_dc%3Dfalse%26sure_popup%3Dtrue%26light_payment%3Dtrue%26media_source%3Dfacebook%26fb%3D3385266718274455%26payby%3D9%26ad_id%3D120234661887290401%26adset_id%3D120234661887280401%26campaign_id%3D120234661887270401%26ad_name%3DTRUS_342_9x16_az%26adset_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_2%2B_Event-WebPurchase_ex-tier%2528en%2529_30.07.2025_VH_1%26campaign_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%26utm_medium%3Dpaid%26utm_source%3Dig%26utm_id%3D120234661887270401%26utm_content%3D120234661887290401%26utm_term%3D120234661887280401%26utm_campaign%3D120234661887270401%26fbclid%3DPAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%26_c%3DPL%26_i%3D_removed_%26config%3Dtrustcheck_1week_3dt_st3m_add_dc_sp_bb&rl=&if=false&ts=1760474590167&sw=1728&sh=1117&v=2.9.235&r=stable&ec=0&o=4126&fbc=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&fbcs=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&fbp=fb.1.1760468914974.320724291192167549&eid=ob3_plugin-set_09a1a4d5c7d17524e438afae8825de8c4de808e4dbc5b7eceab45927fa52e10a&ler=empty&cdl=API_unavailable&pmd[title]=TrustCheck&pmd[description]=Phone%20Number%20Validator%20Lookup&pmd[contents]=%5B%5D&plt=691.3000000044703&it=1760474590132&coo=false&up_url=_i&dlc=1&cf=1&expv2[0]=pl0&expv2[1]=el3&expv2[2]=bc1&rqm=FGET", {
        "headers": {
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "attribution-reporting-eligible": "event-source=navigation-source, trigger",
          "attribution-reporting-support": "web=os",
          "priority": "i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "image",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-storage-access": "active",
          "cookie": "datr=uSruaD7lae1xEla-jrs_GJAV; sb=uSruaIX2wSZajZwjRNjgLdI0",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://www.facebook.com/tr/", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "priority": "u=0, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "iframe",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "cross-site",
          "sec-fetch-storage-access": "active",
          "upgrade-insecure-requests": "1",
          "cookie": "datr=uSruaD7lae1xEla-jrs_GJAV; sb=uSruaIX2wSZajZwjRNjgLdI0",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "id=3385266718274455&ev=PageView&dl=https%3A%2F%2Fsub.trustcheck.club%2Ftrustcheck%2F%3Fbb%3Dtrue%26plan%3Dtck_weekly_3dtrial%26skip_trial_plan%3Dtck_3month_plan%26ult_pack%3Dtck_ultimate_pack_otp%26ult_pack_s%3Dtck_ultimate_pack_sale_otp%26unlimited_pdf%3Dtck_pdf_report_otp%26unlimited_pdf_s%3Dtck_pdf_report_sale_otp%26unlimited_pdf_s2%3Dtck_pdf_report_sale2_otp%26avoid_scam%3Dtck_guide_otp%26avoid_scam_s%3Dtck_guide_sale_otp%26avoid_scam_s2%3Dtck_guide_sale2_otp%26sex_offender%3Dtck_sex_offender_sale_otp%26sex_offender_s%3Dtck_sex_offender_sale2_otp%26vault%3Dpayrails%26additional_offer_dc%3Dfalse%26sure_popup%3Dtrue%26light_payment%3Dtrue%26media_source%3Dfacebook%26fb%3D3385266718274455%26payby%3D9%26ad_id%3D120234661887290401%26adset_id%3D120234661887280401%26campaign_id%3D120234661887270401%26ad_name%3DTRUS_342_9x16_az%26adset_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_2%2B_Event-WebPurchase_ex-tier%2528en%2529_30.07.2025_VH_1%26campaign_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%26utm_medium%3Dpaid%26utm_source%3Dig%26utm_id%3D120234661887270401%26utm_content%3D120234661887290401%26utm_term%3D120234661887280401%26utm_campaign%3D120234661887270401%26fbclid%3DPAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%26_c%3DPL%26_i%3D_removed_%26config%3Dtrustcheck_1week_3dt_st3m_add_dc_sp_bb&rl=&if=false&ts=1760474590167&sw=1728&sh=1117&v=2.9.235&r=stable&ec=0&o=4126&fbc=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&fbcs=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&fbp=fb.1.1760468914974.320724291192167549&eid=ob3_plugin-set_09a1a4d5c7d17524e438afae8825de8c4de808e4dbc5b7eceab45927fa52e10a&ler=empty&cdl=API_unavailable&pmd%5Btitle%5D=TrustCheck&pmd%5Bdescription%5D=Phone+Number+Validator+Lookup&pmd%5Bcontents%5D=%5B%5D&plt=691.3000000044703&it=1760474590132&coo=false&up_url=_i&dlc=1&cf=1&expv2%5B0%5D=pl0&expv2%5B1%5D=el3&expv2%5B2%5D=bc1&rqm=formPOST",
        "method": "POST"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/manifest.json", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://sub.trustcheck.club/trustcheck/favicon-196x196.png", {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "Referer": "https://sub.trustcheck.club/trustcheck/?bb=true&plan=tck_weekly_3dtrial&skip_trial_plan=tck_3month_plan&ult_pack=tck_ultimate_pack_otp&ult_pack_s=tck_ultimate_pack_sale_otp&unlimited_pdf=tck_pdf_report_otp&unlimited_pdf_s=tck_pdf_report_sale_otp&unlimited_pdf_s2=tck_pdf_report_sale2_otp&avoid_scam=tck_guide_otp&avoid_scam_s=tck_guide_sale_otp&avoid_scam_s2=tck_guide_sale2_otp&sex_offender=tck_sex_offender_sale_otp&sex_offender_s=tck_sex_offender_sale2_otp&vault=payrails&additional_offer_dc=false&sure_popup=true&light_payment=true&media_source=facebook&fb=3385266718274455&payby=9&ad_id=120234661887290401&adset_id=120234661887280401&campaign_id=120234661887270401&ad_name=TRUS_342_9x16_az&adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_2+_Event-WebPurchase_ex-tier%28en%29_30.07.2025_VH_1&campaign_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18+_Event-WebPurchase_ex-tier%28en%29_2.10.2025_VH_3&utm_medium=paid&utm_source=ig&utm_id=120234661887270401&utm_content=120234661887290401&utm_term=120234661887280401&utm_campaign=120234661887270401&fbclid=PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&_c=PL&_i=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&config=trustcheck_1week_3dt_st3m_add_dc_sp_bb"
        },
        "body": null,
        "method": "GET"
      }); ;
      fetch("https://region1.google-analytics.com/g/collect?v=2&tid=G-T8BFXESGL8&gtm=45je5ad0h2v9206876461za200zd9206876461&_p=1760474589986&gcd=13l3l3l2l1l1&npa=1&dma_cps=syphamo&dma=1&cid=1751617569.1760468915&ul=en-gb&sr=1728x1117&uaa=arm&uab=64&uafvl=Google%2520Chrome%3B141.0.7390.77%7CNot%253FA_Brand%3B8.0.0.0%7CChromium%3B141.0.7390.77&uamb=0&uam=&uap=macOS&uapv=26.0.1&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&tag_exp=101509157~103116026~103200004~103233427~104527907~104528501~104684208~104684211~104948813~115480710~115616985~115834636~115834638~115868795~115868797~115995680~115995682&sid=1760468914&sct=1&seg=1&dl=https%3A%2F%2Fsub.trustcheck.club%2Ftrustcheck%2F%3Fbb%3Dtrue%26plan%3Dtck_weekly_3dtrial%26skip_trial_plan%3Dtck_3month_plan%26ult_pack%3Dtck_ultimate_pack_otp%26ult_pack_s%3Dtck_ultimate_pack_sale_otp%26unlimited_pdf%3Dtck_pdf_report_otp%26unlimited_pdf_s%3Dtck_pdf_report_sale_otp%26unlimited_pdf_s2%3Dtck_pdf_report_sale2_otp%26avoid_scam%3Dtck_guide_otp%26avoid_scam_s%3Dtck_guide_sale_otp%26avoid_scam_s2%3Dtck_guide_sale2_otp%26sex_offender%3Dtck_sex_offender_sale_otp%26sex_offender_s%3Dtck_sex_offender_sale2_otp%26vault%3Dpayrails%26additional_offer_dc%3Dfalse%26sure_popup%3Dtrue%26light_payment%3Dtrue%26media_source%3Dfacebook%26fb%3D3385266718274455%26payby%3D9%26ad_id%3D120234661887290401%26adset_id%3D120234661887280401%26campaign_id%3D120234661887270401%26ad_name%3DTRUS_342_9x16_az%26adset_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_2%2B_Event-WebPurchase_ex-tier%2528en%2529_30.07.2025_VH_1%26campaign_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%26utm_medium%3Dpaid%26utm_source%3Dig%26utm_id%3D120234661887270401%26utm_content%3D120234661887290401%26utm_term%3D120234661887280401%26utm_campaign%3D120234661887270401%26fbclid%3DPAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%26_c%3DPL%26_i%3D2a02%253Aa310%253Ac0dd%253A3000%253Af572%253Aeccb%253A212e%253Ae9f7%26config%3Dtrustcheck_1week_3dt_st3m_add_dc_sp_bb&dt=TrustCheck&_s=1&tfd=6096", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "text/plain;charset=UTF-8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-site": "cross-site",
          "sec-fetch-storage-access": "active",
          "Referer": "https://sub.trustcheck.club/"
        },
        "body": "en=page_view&_ee=1\r\nen=Intro%20shown&_ee=1&ep.userAgent=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F141.0.0.0%20Safari%2F537.36&ep.event=Intro%20shown&ep.project=trustcheck&ep.adset_id=120234661887280401&ep.adset_name=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%20_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_3%20_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_2%20_Event-WebPurchase_ex-tier(en)_30.07.2025_VH_1&ep.ad_id=120234661887290401&ep.media_source=facebook&ep.config=trustcheck_1week_3dt_st3m_add_dc_sp_bb&ep.ad_name=TRUS_342_9x16_az&ep.fbc=fb.1.1760470391434.PAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw&ep.fbp=fb.1.1760474590371.3520600181&ep.event_source_url=https%3A%2F%2Fsub.trustcheck.club%2Ftrustcheck%2F%3Fbb%3Dtrue%26plan%3Dtck_weekly_3dtrial%26skip_trial_plan%3Dtck_3month_plan%26ult_pack%3Dtck_ultimate_pack_otp%26ult_pack_s%3Dtck_ultimate_pack_sale_otp%26unlimited_pdf%3Dtck_pdf_report_otp%26unlimited_pdf_s%3Dtck_pdf_report_sale_otp%26unlimited_pdf_s2%3Dtck_pdf_report_sale2_otp%26avoid_scam%3Dtck_guide_otp%26avoid_scam_s%3Dtck_guide_sale_otp%26avoid_scam_s2%3Dtck_guide_sale2_otp%26sex_offender%3Dtck_sex_offender_sale_otp%26sex_offender_s%3Dtck_sex_offender_sale2_otp%26vault%3Dpayrails%26additional_offer_dc%3Dfalse%26sure_popup%3Dtrue%26light_payment%3Dtrue%26media_source%3Dfacebook%26fb%3D3385266718274455%26payby%3D9%26ad_id%3D120234661887290401%26adset_id%3D120234661887280401%26campaign_id%3D120234661887270401%26ad_name%3DTRUS_342_9x16_az%26adset_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_2%2B_Event-WebPurchase_ex-tier%2528en%2529_30.07.2025_VH_1%26campaign_name%3DTRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%2B_Event-WebPurchase_ex-tier%2528en%2529_2.10.2025_VH_3%26utm_medium%3Dpaid%26utm_source%3Dig%26utm_id%3D120234661887270401%26utm_content%3D120234661887290401%26utm_term%3D120234661887280401%26utm_campaign%3D120234661887270401%26fbclid%3DPAdGRleANbf9lleHRuA2FlbQEwAGFkaWQBqyjJ1EkigQGnzgKN4wuQ67Lebnh-otj8QXvlUC-rkxsd6TJoqUOIwXmLwx9fFlXt8Q6J3HI_aem_0sp_BApmLbbWLjW-Zy5hTw%26_c%3DPL%26_i%3D2a02%253Aa310%253Ac0dd%253A3000%253Af572%253Aeccb%253A212e%253Ae9f7%26config%3Dtrustcheck_1week_3dt_st3m_add_dc_sp_bb&ep.client_user_agent=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F141.0.0.0%20Safari%2F537.36&ep.campaignId=120234661887270401&ep.campaign=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%20_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_3&ep.ip=2a02%3Aa310%3Ac0dd%3A3000%3Af572%3Aeccb%3A212e%3Ae9f7&ep.country=PL&_et=2&ci=120234661887270401&cn=TRUST_WEB_Appy_CKW_iOS_test342_trustcheck_1week_3dt_st3m_add_dc_sp_bb_18%20_Event-WebPurchase_ex-tier(en)_2.10.2025_VH_3",
        "method": "POST"
      });
    const nextHop = FINAL_URL; // ← обязательно абсолютный URL!
    res.writeHead(302, {
      'Location': nextHop,
      ...REDIRECT_HEADERS
    });
    return res.end();
  }

  // Любой другой путь — просто сообщение
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK — use /r1 or /r2 for redirect');
});

server.listen(PORT, () => {
  console.log(`Redirect server running on http://localhost:${PORT}`);
});
