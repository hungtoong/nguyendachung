var PROXY_DIRECT="DIRECT";var DIRECT="DIRECT";var BLACK="PROXY 127.0.0.1:8021";var WHITE=PROXY_DIRECT;function s(u,r){return shExpMatch(u,r);}function d(h,r){return dnsDomainIs(h,r);}function n(h,r,m){return isInNet(h,r,m);}function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];if(d(h,"2c5hck.configtest.wl.is")){return"PROXY 5.9.40.99:80";}if(d(h,"wl.is")||d(h,"weblockapp.com")){return PROXY_DIRECT;}if((s(u,"*://mesu.apple.com/*")||s(u,"*://ocsp.apple.com/*")||s(u,"*://appldnld.apple.com/*")||s(u,"*://5.2.76.189/*")||s(u,"*://2a04:52c0:101:1cd::d3c8/*")||s(u,"*://world-gen.g.aaplimg.com/*")||s(u,"*://ppg.apple.com/*")||s(u,"*://gdmf.apple.com/*")||s(u,"*://intowow.applefeed.com.tw/*")||s(u,"*://req.mobnatives.com/*")||s(u,"*://adservice.google.com/*")||s(u,"*://api.vungle.akadns.net/*")||s(u,"*://cloudmobi.net/*")||s(u,"*://api.catch.gift/*")||s(u,"*://fireupdate.lhuism.com/*")||s(u,"*://app-measurement.com/*")||s(u,"*://log.ambimob.com/*")||s(u,"*://duclick.baidu.com/*")||s(u,"*://logger.zcoup.com/*")||s(u,"*://api.zcoup.com/*")||s(u,"*://track.cpa.iqoption.com/*")||s(u,"*://apps.applift.com/*")||s(u,"*://g.symcd.com/*")||s(u,"*://isrg.trustid.ocsp.identrust.com/*")||s(u,"*://pubads.g.doubleclick.net/*")||s(u,"*://api.adthor.com/*")||s(u,"*://googleads.g.doubleclick.net/*")||s(u,"*://ads30.adcolony.com/*")||s(u,"*://a.applovin.com/*")||s(u,"*://a.applvn.com/*")||s(u,"*://www.adtilt.com/*")||s(u,"*://z.moatads.com/*")||s(u,"*://ssl.google-analytics.com/*")||s(u,"*://ads.api.vungle.com/*")||s(u,"*://wd.adcolony.com/*")||s(u,"*://events3.adcolony.com/*")||s(u,"*://events3alt.adcolony.com/*")||s(u,"*://adc3-launch.adcolony.com/*")||s(u,"*://d.applovin.com/*")||s(u,"*://rt.applovin.com/*")||s(u,"*://api.vungle.com/*")||s(u,"*://d.applvn.com/*")||s(u,"*://ads.mopub.com/*")||s(u,"*://appnext.hs.llnwd.net/*")||s(u,"*://global.appnext.com/*")||s(u,"*://securepubads.g.doubleclick.net/*"))){return BLACK;}return PROXY_DIRECT;}
