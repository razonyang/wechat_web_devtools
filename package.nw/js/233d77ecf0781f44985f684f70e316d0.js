'use strict';!function(require,directRequire){const a=require('request'),b=require('./437e6043fc662374e4f1c2330516ac40.js'),{CGI_DOMAIN:c,MP_DOMAIN:d,OPEN_DOMAIN:e}=require('./f171257bbcaef547a3cf27266ccb0db2.js'),f='darwin'===process.platform?'darwin':'win',g=global.appVersion,h={SELF_SIGNED_CERT_IN_CHAIN:!0,UNABLE_TO_VERIFY_LEAF_SIGNATURE:!0};var i=!0;module.exports=function(j,k){let{url:l}=j;(0===l.indexOf(c)||0===l.indexOf(d)||0===l.indexOf(e))&&(j.url=-1===l.indexOf('?')?`${l}?os=${f}&clientversion=${g}`:`${l}&os=${f}&clientversion=${g}`);let m=b.getProxyForURL(l);j.proxy=m,j.tunnel=i;return a(j,(b,c,d)=>{return b&&h[b.code]&&(i=!confirm(`当前系统代理不是安全代理，是否信任？`),!i)?(j.tunnel=i,a(j,k)):void('function'==typeof k&&k(b,c,d))})}}(require('lazyload'),require);