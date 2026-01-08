System.register("chunks:///_virtual/MultiLanguage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,r,e,i,o;return{setters:[function(n){t=n.inheritsLoose,r=n.createClass},function(n){e=n.cclegacy,i=n._decorator,o=n.Component}],execute:function(){var a,u;e._RF.push({},"9a848kkozpCxLQ/C3LpYcys","MultiLanguage",void 0);var l=i.ccclass,c=(i.property,n("LanguageEnum",function(n){return n[n.EN=0]="EN",n[n.ZH=1]="ZH",n[n.amount=2]="amount",n}({})));n("MultiLanguage",l("MultiLanguage")(((u=function(n){function e(){for(var t,r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];return(t=n.call.apply(n,[this].concat(e))||this).en="",t.zh="",t}return t(e,n),e.getTipString=function(){var n,t=null==(n=this.lyrics)?void 0:n.LoadingTips;return null!=t&&t.length?this.getString(t[Math.floor(t.length*Math.random())]):""},e.getTimeStringByNumber=function(n){var t=Math.floor(n/3600);n-=3600*t;var r=Math.floor(n/60);n-=60*r;var e=Math.floor(n),i="";return t&&(i+=t.toString()+":"),i+=(r<10?"0":"")+r.toString()+":",i+=(e<10?"0":"")+e.toString()},e.getNumberWithThousandComma=function(n){for(var t=Math.round(n),r=[];t>0;)r.push(t%1e3),t=Math.floor(t/1e3);var e="";return 0==Math.round(n)?e="0":r.reverse().forEach((function(n,t){for(var i=n.toString();0!=t&&i.length<3;)i="0"+i;e+=i,t!=r.length-1&&(e+=",")})),e},e.getStringAndGraghicalLength=function(n){var t=this.getString(n),r=1;return this.currentLanguage==c.ZH&&(r=3.1),{str:t,length:t.length*r}},e.getString=function(n,t){var r,i;if(!n)return"";switch(e.currentLanguage){case c.EN:return null==n||null==(r=n.en)?void 0:r.concat();case c.ZH:return null==n||null==(i=n.zh)?void 0:i.concat()}return n.en},e.getDirectQuote=function(n){return n?e.getStringByPropsWithoutTricks("DirectQuote",n):""},e.getStringByProps=function(){for(var n=this.lyrics,t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.forEach((function(t){n[t]&&(n=n[t])})),this.getString(n)},e.getStringByPropsWithoutTricks=function(){for(var n=this.lyrics,t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return r.forEach((function(t){n[t]&&(n=n[t])})),n?this.getString(n,!1):""},e.getWorldMapLyrics=function(n){var t=this.lyrics.WorldMapScene.World.Default,r=this.lyrics.WorldMapScene.World[n];return null!=r&&r.Name&&(t.Name=r.Name),null!=r&&r.EndlessZoneName&&(t.EndlessZoneName=r.EndlessZoneName),null!=r&&r.EndlessZoneMiniGameName&&(t.EndlessZoneMiniGameName=r.EndlessZoneMiniGameName),null!=r&&r.Description&&(t.Description=r.Description),t},r(e,null,[{key:"isWhiteList",get:function(){return!0}}]),e}(o)).currentLanguage=1,u.lyrics=void 0,u.camelGamingTime=0,u.bilibiliNumber=null,u.bilibiliNumberWhiteList=["31415926535897932384626","3.1415926535897932384626","DWJwe","Sharkfin085","442366357","350607092","21143967","47465141","2718222","miling2024","1583106389","244157289","3537122373929163","1588559528","66425694","86191635","3494363426457846","482398217","3493079061367345","200622073","51202546","323339071","347433548","123602899","Locutus0310"],a=u))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MultiLanguage.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});