(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/interop/browser/1.3.3/ceylon.interop.browser-1.3.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/interop/browser/1.3.3/ceylon.interop.browser-1.3.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'ceylon.interop.browser/1.3.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String})),m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String}))];};
function Window(window$){
EventTarget(window$);
WindowEventHandlers(window$);
GlobalEventHandlers(window$);
window$.open$defs$url=function($3xt,$3xu,$3xv,$3xw){return "about:blank";};
window$.open$defs$target=function($3xt,$3xu,$3xv,$3xw){return "_blank";};
window$.open$defs$features=function($3xt,$3xu,$3xv,$3xw){return "";};
window$.open$defs$replace=function($3xt,$3xu,$3xv,$3xw){return false;};
window$.alert$defs$message=function($3xx){return "";};
window$.confirm$defs$message=function($3xy){return "";};
window$.prompt$defs$message=function($3xz,$3y0){return "";};
window$.prompt$defs$default=function($3xz,$3y0){return "";};
}
Window.dynmem$=['window','self','document','name','location','history','locationbar','menubar','personalbar','scrollbars','statusbar','toolbar','status','close','closed','stop','focus','blur','frames','length','top','opener','parent','frameElement','open','navigator','external','applicationCache','alert','confirm','prompt','print','setInterval','clearInterval','setTimeout','clearTimeout'];Window.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()},{t:$init$WindowEventHandlers()},{t:$init$GlobalEventHandlers()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Window')];},d:['ceylon.interop.browser','Window']};};
ex$.Window=Window;
function $init$Window(){
if(Window.$$===undefined){
m$1.initTypeProtoI(Window,'ceylon.interop.browser::Window',$init$EventTarget(),$init$WindowEventHandlers(),$init$GlobalEventHandlers());
(function(window$){
window$.$prop$getWindow={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','window']};}};
window$.$prop$getSelf={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','self']};}};
window$.$prop$getDocument={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','document']};}};
window$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Window,pa:1029,d:['ceylon.interop.browser','Window','$at','name']};}};
window$.$prop$getLocation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Location()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','location']};}};
window$.$prop$getHistory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$History()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','history']};}};
window$.$prop$getLocationbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','locationbar']};}};
window$.$prop$getMenubar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','menubar']};}};
window$.$prop$getPersonalbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','personalbar']};}};
window$.$prop$getScrollbars={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','scrollbars']};}};
window$.$prop$getStatusbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','statusbar']};}};
window$.$prop$getToolbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','toolbar']};}};
window$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Window,pa:1029,d:['ceylon.interop.browser','Window','$at','status']};}};
window$.close={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','close']};}};window$.$prop$getClosed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','closed']};}};
window$.stop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','stop']};}};window$.focus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','focus']};}};window$.blur={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','blur']};}};window$.$prop$getFrames={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','frames']};}};
window$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','length']};}};
window$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','top']};}};
window$.$prop$getOpener={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},WindowProxy()]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','opener']};}};
window$.$prop$getParent={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','parent']};}};
window$.$prop$getFrameElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','frameElement']};}};
window$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),ps:[{nm:'url',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'target',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'features',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','open']};}};window$.$prop$getNavigator={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Navigator()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','navigator']};}};
window$.$prop$getExternal={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$External()}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','external']};}};
window$.$prop$getApplicationCache={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$ApplicationCache()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','applicationCache']};}};
window$.alert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','alert']};}};window$.confirm={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','confirm']};}};window$.prompt={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'default',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','prompt']};}};window$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','print']};}};window$.setInterval={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'f',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}},{nm:'millis',mt:'prm',$t:{t:m$1.Integer}},{nm:'params',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','setInterval']};}};window$.clearInterval={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'id',mt:'prm',$t:{t:m$1.Integer}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','clearInterval']};}};window$.setTimeout={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'f',mt:'prm',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}}},{nm:'millis',mt:'prm',$t:{t:m$1.Integer}},{nm:'params',mt:'prm',seq:1,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','setTimeout']};}};window$.clearTimeout={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'id',mt:'prm',$t:{t:m$1.Integer}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','clearTimeout']};}};window$.toString=function(){return this.string.valueOf();};
})(Window.$$.prototype);
}
return Window;
}
ex$.$init$Window=$init$Window;$init$Window();
function WindowProxy(){var $3y1={t:$init$Window()};$3y1.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','WindowProxy']};};return $3y1;}
ex$.WindowProxy=WindowProxy;
function window(){
return m$1.dre$$((typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'65:15-65:18','Window.ceylon'):eval)("window"),{t:$init$Window()},'Window.ceylon 65:15-65:28');
}
window.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Window()},pa:1,an:function(){return[m$1.doc("The current window.")];},d:['ceylon.interop.browser','window']};}
ex$.window=window;
var $prop$getWindow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Window()},pa:1,an:function(){return[m$1.doc("The current window.")];},d:['ceylon.interop.browser','window']};}};
ex$.$prop$getWindow=$prop$getWindow;
$prop$getWindow.get=window;
window.$crtmm$=$prop$getWindow.$crtmm$;
function Location(location$){
}
Location.dynmem$=['assign','replace','reload'];Location.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Location')];},d:['ceylon.interop.browser','Location']};};
ex$.Location=Location;
function $init$Location(){
if(Location.$$===undefined){
m$1.initTypeProtoI(Location,'ceylon.interop.browser::Location');
(function(location$){
location$.assign={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}}],$cont:Location,pa:5,an:function(){return[m$1.doc("Navigates to the given page.")];},d:['ceylon.interop.browser','Location','$m','assign']};}};location$.replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}}],$cont:Location,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Location:$m:replace')];},d:['ceylon.interop.browser','Location','$m','replace']};}};location$.reload={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Location,pa:5,an:function(){return[m$1.doc("Reloads the current page.")];},d:['ceylon.interop.browser','Location','$m','reload']};}};location$.toString=function(){return this.string.valueOf();};
})(Location.$$.prototype);
}
return Location;
}
ex$.$init$Location=$init$Location;$init$Location();
function History(history$){
history$.pushState$defs$url=function($3y2,$3y3,$3y4){return null;};
history$.replaceState$defs$url=function($3y5,$3y6,$3y7){return null;};
}
History.dynmem$=['length','state','go','back','forward','pushState','replaceState'];History.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','History']};};
ex$.History=History;
function $init$History(){
if(History.$$===undefined){
m$1.initTypeProtoI(History,'ceylon.interop.browser::History');
(function(history$){
history$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$at:length')];},d:['ceylon.interop.browser','History','$at','length']};}};
history$.$prop$getState={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:History,pa:5,an:function(){return[m$1.doc("Returns the current state object.")];},d:['ceylon.interop.browser','History','$at','state']};}};
history$.go={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'delta',mt:'prm',$t:{t:m$1.Integer}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:go')];},d:['ceylon.interop.browser','History','$m','go']};}};history$.back={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:back')];},d:['ceylon.interop.browser','History','$m','back']};}};history$.forward={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:forward')];},d:['ceylon.interop.browser','History','$m','forward']};}};history$.pushState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:'$U'},{nm:'title',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:pushState')];},d:['ceylon.interop.browser','History','$m','pushState']};}};history$.replaceState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:'$U'},{nm:'title',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:replaceState')];},d:['ceylon.interop.browser','History','$m','replaceState']};}};history$.toString=function(){return this.string.valueOf();};
})(History.$$.prototype);
}
return History;
}
ex$.$init$History=$init$History;$init$History();
function BarProp(barProp$){
}
BarProp.dynmem$=['visible'];BarProp.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:BarProp')];},d:['ceylon.interop.browser','BarProp']};};
ex$.BarProp=BarProp;
function $init$BarProp(){
if(BarProp.$$===undefined){
m$1.initTypeProtoI(BarProp,'ceylon.interop.browser::BarProp');
(function(barProp$){
barProp$.$prop$getVisible={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:BarProp,pa:1029,d:['ceylon.interop.browser','BarProp','$at','visible']};}};
barProp$.toString=function(){return this.string.valueOf();};
})(BarProp.$$.prototype);
}
return BarProp;
}
ex$.$init$BarProp=$init$BarProp;$init$BarProp();
function External(external$){
}
External.dynmem$=['AddSearchProvider','IsSearchProviderInstalled'];External.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External')];},d:['ceylon.interop.browser','External']};};
ex$.External=External;
function $init$External(){
if(External.$$===undefined){
m$1.initTypeProtoI(External,'ceylon.interop.browser::External');
(function(external$){
external$.AddSearchProvider={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'engineURL',mt:'prm',$t:{t:m$1.$_String}}],$cont:External,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External:$m:AddSearchProvider')];},d:['ceylon.interop.browser','External','$m','AddSearchProvider']};}};external$.IsSearchProviderInstalled={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'engineURL',mt:'prm',$t:{t:m$1.$_String}}],$cont:External,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External:$m:IsSearchProviderInstalled')];},d:['ceylon.interop.browser','External','$m','IsSearchProviderInstalled']};}};external$.toString=function(){return this.string.valueOf();};
})(External.$$.prototype);
}
return External;
}
ex$.$init$External=$init$External;$init$External();
function Navigator(navigator$){
}
Navigator.dynmem$=[];Navigator.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','Navigator']};};
ex$.Navigator=Navigator;
function $init$Navigator(){
if(Navigator.$$===undefined){
m$1.initTypeProtoI(Navigator,'ceylon.interop.browser::Navigator');
(function(navigator$){
navigator$.toString=function(){return this.string.valueOf();};
})(Navigator.$$.prototype);
}
return Navigator;
}
ex$.$init$Navigator=$init$Navigator;$init$Navigator();
function ApplicationCache(applicationCache$){
EventTarget(applicationCache$);
}
ApplicationCache.dynmem$=['UNCACHED','IDLE','CHECKING','DOWNLOADING','UPDATEREADY','OBSOLETE','status','update','swapCache','onchecking','onerror','onnoupdate','ondownloading','onprogress','onupdateready','oncached','onobsolete'];ApplicationCache.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,d:['ceylon.interop.browser','ApplicationCache']};};
ex$.ApplicationCache=ApplicationCache;
function $init$ApplicationCache(){
if(ApplicationCache.$$===undefined){
m$1.initTypeProtoI(ApplicationCache,'ceylon.interop.browser::ApplicationCache',$init$EventTarget());
(function(applicationCache$){
applicationCache$.$prop$getUNCACHED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','UNCACHED']};}};
applicationCache$.$prop$getIDLE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','IDLE']};}};
applicationCache$.$prop$getCHECKING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','CHECKING']};}};
applicationCache$.$prop$getDOWNLOADING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','DOWNLOADING']};}};
applicationCache$.$prop$getUPDATEREADY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','UPDATEREADY']};}};
applicationCache$.$prop$getOBSOLETE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','OBSOLETE']};}};
applicationCache$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','status']};}};
applicationCache$.update={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$m','update']};}};applicationCache$.swapCache={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$m','swapCache']};}};applicationCache$.$prop$getOnchecking={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onchecking']};}};
applicationCache$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onerror']};}};
applicationCache$.$prop$getOnnoupdate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onnoupdate']};}};
applicationCache$.$prop$getOndownloading={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','ondownloading']};}};
applicationCache$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onprogress']};}};
applicationCache$.$prop$getOnupdateready={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onupdateready']};}};
applicationCache$.$prop$getOncached={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','oncached']};}};
applicationCache$.$prop$getOnobsolete={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onobsolete']};}};
applicationCache$.toString=function(){return this.string.valueOf();};
})(ApplicationCache.$$.prototype);
}
return ApplicationCache;
}
ex$.$init$ApplicationCache=$init$ApplicationCache;$init$ApplicationCache();
function XMLHttpRequest(xMLHttpRequest$){
XMLHttpRequestEventTarget(xMLHttpRequest$);
xMLHttpRequest$.open$defs$async=function($3y8,$3y9,$3ya,$3yb,$3yc){return false;};
xMLHttpRequest$.open$defs$username=function($3y8,$3y9,$3ya,$3yb,$3yc){return null;};
xMLHttpRequest$.open$defs$password=function($3y8,$3y9,$3ya,$3yb,$3yc){return null;};
xMLHttpRequest$.send$defs$data=function($3yd){return null;};
}
XMLHttpRequest.dynmem$=['onreadystatechange','UNSENT','OPENED','HEADERS_RECEIVED','LOADING','DONE','readyState','open','setRequestHeader','timeout','withCredentials','upload','send','abort','status','statusText','getResponseHeader','getAllResponseHeaders','overrideMimeType','responseType','response','responseText','responseXml'];XMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$XMLHttpRequestEventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest')];},d:['ceylon.interop.browser','XMLHttpRequest']};};
ex$.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
if(XMLHttpRequest.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequest,'ceylon.interop.browser::XMLHttpRequest',$init$XMLHttpRequestEventTarget());
(function(xMLHttpRequest$){
xMLHttpRequest$.$prop$getOnreadystatechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:onreadystatechange')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','onreadystatechange']};}};
xMLHttpRequest$.$prop$getUNSENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("The object has been constructed.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','UNSENT']};}};
xMLHttpRequest$.$prop$getOPENED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:OPENED')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','OPENED']};}};
xMLHttpRequest$.$prop$getHEADERS_RECEIVED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:HEADERS_RECEIVED')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','HEADERS_RECEIVED']};}};
xMLHttpRequest$.$prop$getLOADING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("The response entity body is being received.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','LOADING']};}};
xMLHttpRequest$.$prop$getDONE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:DONE')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','DONE']};}};
xMLHttpRequest$.$prop$getReadyState={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the current state.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','readyState']};}};
xMLHttpRequest$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'async',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'username',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'password',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:open')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','open']};}};xMLHttpRequest$.setRequestHeader={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'header',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:setRequestHeader')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','setRequestHeader']};}};xMLHttpRequest$.$prop$getTimeout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:timeout')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','timeout']};}};
xMLHttpRequest$.$prop$getWithCredentials={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:withCredentials')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','withCredentials']};}};
xMLHttpRequest$.$prop$getUpload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequestUpload()},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:upload')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','upload']};}};
xMLHttpRequest$.send={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:send')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','send']};}};xMLHttpRequest$.abort={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Cancels any network activity.")];},d:['ceylon.interop.browser','XMLHttpRequest','$m','abort']};}};xMLHttpRequest$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the HTTP status code.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','status']};}};
xMLHttpRequest$.$prop$getStatusText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the HTTP status text.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','statusText']};}};
xMLHttpRequest$.getResponseHeader={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'header',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:getResponseHeader')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','getResponseHeader']};}};xMLHttpRequest$.getAllResponseHeaders={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:getAllResponseHeaders')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','getAllResponseHeaders']};}};xMLHttpRequest$.overrideMimeType={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'mime',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Sets the `Content-Type` header for the response to mime.")];},d:['ceylon.interop.browser','XMLHttpRequest','$m','overrideMimeType']};}};xMLHttpRequest$.$prop$getResponseType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:responseType'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.interop.browser'),XMLHttpRequestResponseType)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseType']};}};
xMLHttpRequest$.$prop$getResponse={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the response entity body.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','response']};}};
xMLHttpRequest$.$prop$getResponseText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the text response entity body.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseText']};}};
xMLHttpRequest$.$prop$getResponseXml={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Document()}]},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the document response entity body.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseXml']};}};
xMLHttpRequest$.toString=function(){return this.string.valueOf();};
})(XMLHttpRequest.$$.prototype);
}
return XMLHttpRequest;
}
ex$.$init$XMLHttpRequest=$init$XMLHttpRequest;$init$XMLHttpRequest();
function newXMLHttpRequest(){return newXMLHttpRequestInternal$internal();
};
newXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequest()},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:newXMLHttpRequest')];},d:['ceylon.interop.browser','newXMLHttpRequest']};};
ex$.newXMLHttpRequest=newXMLHttpRequest;
function XMLHttpRequestEventTarget(xMLHttpRequestEventTarget$){
EventTarget(xMLHttpRequestEventTarget$);
}
XMLHttpRequestEventTarget.dynmem$=['onloadstart','onprogress','onabort','onerror','onload','ontimeout','onloadend'];XMLHttpRequestEventTarget.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,d:['ceylon.interop.browser','XMLHttpRequestEventTarget']};};
ex$.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
if(XMLHttpRequestEventTarget.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestEventTarget,'ceylon.interop.browser::XMLHttpRequestEventTarget',$init$EventTarget());
(function(xMLHttpRequestEventTarget$){
xMLHttpRequestEventTarget$.$prop$getOnloadstart={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request starts.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onloadstart']};}};
xMLHttpRequestEventTarget$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when transmitting data.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onprogress']};}};
xMLHttpRequestEventTarget$.$prop$getOnabort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:onabort')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onabort']};}};
xMLHttpRequestEventTarget$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request has failed.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onerror']};}};
xMLHttpRequestEventTarget$.$prop$getOnload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request has successfully completed.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onload']};}};
xMLHttpRequestEventTarget$.$prop$getOntimeout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:ontimeout')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','ontimeout']};}};
xMLHttpRequestEventTarget$.$prop$getOnloadend={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:onloadend')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onloadend']};}};
xMLHttpRequestEventTarget$.toString=function(){return this.string.valueOf();};
})(XMLHttpRequestEventTarget.$$.prototype);
}
return XMLHttpRequestEventTarget;
}
ex$.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;$init$XMLHttpRequestEventTarget();
function XMLHttpRequestUpload(xMLHttpRequestUpload$){
XMLHttpRequestEventTarget(xMLHttpRequestUpload$);
}
XMLHttpRequestUpload.dynmem$=[];XMLHttpRequestUpload.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$XMLHttpRequestEventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestUpload')];},d:['ceylon.interop.browser','XMLHttpRequestUpload']};};
ex$.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
if(XMLHttpRequestUpload.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestUpload,'ceylon.interop.browser::XMLHttpRequestUpload',$init$XMLHttpRequestEventTarget());
(function(xMLHttpRequestUpload$){
xMLHttpRequestUpload$.toString=function(){return this.string.valueOf();};
})(XMLHttpRequestUpload.$$.prototype);
}
return XMLHttpRequestUpload;
}
ex$.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;$init$XMLHttpRequestUpload();
function XMLHttpRequestResponseType(xMLHttpRequestResponseType$){
}
XMLHttpRequestResponseType.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestResponseType')];},d:['ceylon.interop.browser','XMLHttpRequestResponseType']};};
ex$.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
if(XMLHttpRequestResponseType.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestResponseType,'ceylon.interop.browser::XMLHttpRequestResponseType');
(function(xMLHttpRequestResponseType$){
m$1.atr$(xMLHttpRequestResponseType$,'empty',function(){
return "";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','empty']};});
m$1.atr$(xMLHttpRequestResponseType$,'arrayBuffer',function(){
return "arraybuffer";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','arrayBuffer']};});
m$1.atr$(xMLHttpRequestResponseType$,'blob',function(){
return "blob";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','blob']};});
m$1.atr$(xMLHttpRequestResponseType$,'document',function(){
return "document";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','document']};});
m$1.atr$(xMLHttpRequestResponseType$,'json',function(){
return "json";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','json']};});
m$1.atr$(xMLHttpRequestResponseType$,'text',function(){
return "text";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','text']};});
xMLHttpRequestResponseType$.toString=function(){return this.string.valueOf();};
})(XMLHttpRequestResponseType.$$.prototype);
}
return XMLHttpRequestResponseType;
}
ex$.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;$init$XMLHttpRequestResponseType();
function DOMTokenList(dOMTokenList$){
}
DOMTokenList.dynmem$=['length','item','contains','add','remove','toggle'];DOMTokenList.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMTokenList']};};
ex$.DOMTokenList=DOMTokenList;
function $init$DOMTokenList(){
if(DOMTokenList.$$===undefined){
m$1.initTypeProtoI(DOMTokenList,'ceylon.interop.browser.dom::DOMTokenList');
(function(dOMTokenList$){
dOMTokenList$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$at','length']};}};
dOMTokenList$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','item']};}};dOMTokenList$.contains={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','contains']};}};dOMTokenList$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'tokens',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','add']};}};dOMTokenList$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'tokens',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','remove']};}};dOMTokenList$.toggle={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}},{nm:'force',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','toggle']};}};dOMTokenList$.toString=function(){return this.string.valueOf();};
})(DOMTokenList.$$.prototype);
}
return DOMTokenList;
}
ex$.$init$DOMTokenList=$init$DOMTokenList;$init$DOMTokenList();
function Node(node$){
EventTarget(node$);
node$.cloneNode$defs$deep=function($3ye){return false;};
}
Node.dynmem$=['ELEMENT_NODE','ATTRIBUTE_NODE','TEXT_NODE','CDATA_SECTION_NODE','ENTITY_REFERENCE_NODE','ENTITY_NODE','PROCESSING_INSTRUCTION_NODE','COMMENT_NODE','DOCUMENT_NODE','DOCUMENT_TYPE_NODE','DOCUMENT_FRAGMENT_NODE','NOTATION_NODE','nodeType','nodeName','baseURI','ownerDocument','parentNode','parentElement','hasChildNodes','childNodes','firstChild','lastChild','previousSibling','nextSibling','nodeValue','textContent','normalize','cloneNode','isEqualNode','DOCUMENT_POSITION_DISCONNECTED','DOCUMENT_POSITION_PRECEDING','DOCUMENT_POSITION_FOLLOWING','DOCUMENT_POSITION_CONTAINS','DOCUMENT_POSITION_CONTAINED_BY','DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC','compareDocumentPosition','contains','lookupPrefix','lookupNamespaceURI','isDefaultNamespace','insertBefore','appendChild','replaceChild','removeChild'];Node.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Node')];},d:['ceylon.interop.browser.dom','Node']};};
ex$.Node=Node;
function $init$Node(){
if(Node.$$===undefined){
m$1.initTypeProtoI(Node,'ceylon.interop.browser.dom::Node',$init$EventTarget());
(function(node$){
node$.$prop$getELEMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ELEMENT_NODE']};}};
node$.$prop$getATTRIBUTE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ATTRIBUTE_NODE']};}};
node$.$prop$getTEXT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','TEXT_NODE']};}};
node$.$prop$getCDATA_SECTION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','CDATA_SECTION_NODE']};}};
node$.$prop$getENTITY_REFERENCE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ENTITY_REFERENCE_NODE']};}};
node$.$prop$getENTITY_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ENTITY_NODE']};}};
node$.$prop$getPROCESSING_INSTRUCTION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','PROCESSING_INSTRUCTION_NODE']};}};
node$.$prop$getCOMMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','COMMENT_NODE']};}};
node$.$prop$getDOCUMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_NODE']};}};
node$.$prop$getDOCUMENT_TYPE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_TYPE_NODE']};}};
node$.$prop$getDOCUMENT_FRAGMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_FRAGMENT_NODE']};}};
node$.$prop$getNOTATION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','NOTATION_NODE']};}};
node$.$prop$getNodeType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nodeType']};}};
node$.$prop$getNodeName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nodeName']};}};
node$.$prop$getBaseURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','baseURI']};}};
node$.$prop$getOwnerDocument={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Document()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ownerDocument']};}};
node$.$prop$getParentNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','parentNode']};}};
node$.$prop$getParentElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','parentElement']};}};
node$.hasChildNodes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','hasChildNodes']};}};node$.$prop$getChildNodes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','childNodes']};}};
node$.$prop$getFirstChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','firstChild']};}};
node$.$prop$getLastChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','lastChild']};}};
node$.$prop$getPreviousSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','previousSibling']};}};
node$.$prop$getNextSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nextSibling']};}};
node$.$prop$getNodeValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:1029,d:['ceylon.interop.browser.dom','Node','$at','nodeValue']};}};
node$.$prop$getTextContent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:1029,d:['ceylon.interop.browser.dom','Node','$at','textContent']};}};
node$.normalize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','normalize']};}};node$.cloneNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'deep',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','cloneNode']};}};node$.isEqualNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','isEqualNode']};}};node$.$prop$getDOCUMENT_POSITION_DISCONNECTED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_DISCONNECTED']};}};
node$.$prop$getDOCUMENT_POSITION_PRECEDING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_PRECEDING']};}};
node$.$prop$getDOCUMENT_POSITION_FOLLOWING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_FOLLOWING']};}};
node$.$prop$getDOCUMENT_POSITION_CONTAINS={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_CONTAINS']};}};
node$.$prop$getDOCUMENT_POSITION_CONTAINED_BY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_CONTAINED_BY']};}};
node$.$prop$getDOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC']};}};
node$.compareDocumentPosition={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','compareDocumentPosition']};}};node$.contains={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','contains']};}};node$.lookupPrefix={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','lookupPrefix']};}};node$.lookupNamespaceURI={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'prefix',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','lookupNamespaceURI']};}};node$.isDefaultNamespace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','isDefaultNamespace']};}};node$.insertBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'child',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','insertBefore']};}};node$.appendChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','appendChild']};}};node$.replaceChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'child',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','replaceChild']};}};node$.removeChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'child',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','removeChild']};}};node$.toString=function(){return this.string.valueOf();};
})(Node.$$.prototype);
}
return Node;
}
ex$.$init$Node=$init$Node;$init$Node();
function ChildNode(childNode$){
}
ChildNode.dynmem$=['remove'];ChildNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','ChildNode']};};
ex$.ChildNode=ChildNode;
function $init$ChildNode(){
if(ChildNode.$$===undefined){
m$1.initTypeProtoI(ChildNode,'ceylon.interop.browser.dom::ChildNode');
(function(childNode$){
childNode$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ChildNode,pa:5,d:['ceylon.interop.browser.dom','ChildNode','$m','remove']};}};childNode$.toString=function(){return this.string.valueOf();};
})(ChildNode.$$.prototype);
}
return ChildNode;
}
ex$.$init$ChildNode=$init$ChildNode;$init$ChildNode();
function NonElementParentNode(nonElementParentNode$){
}
NonElementParentNode.dynmem$=['getElementById'];NonElementParentNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NonElementParentNode']};};
ex$.NonElementParentNode=NonElementParentNode;
function $init$NonElementParentNode(){
if(NonElementParentNode.$$===undefined){
m$1.initTypeProtoI(NonElementParentNode,'ceylon.interop.browser.dom::NonElementParentNode');
(function(nonElementParentNode$){
nonElementParentNode$.getElementById={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'elementId',mt:'prm',$t:{t:m$1.$_String}}],$cont:NonElementParentNode,pa:5,d:['ceylon.interop.browser.dom','NonElementParentNode','$m','getElementById']};}};nonElementParentNode$.toString=function(){return this.string.valueOf();};
})(NonElementParentNode.$$.prototype);
}
return NonElementParentNode;
}
ex$.$init$NonElementParentNode=$init$NonElementParentNode;$init$NonElementParentNode();
function ParentNode(parentNode$){
}
ParentNode.dynmem$=['children','firstElementChild','lastElementChild','childElementCount','querySelector','querySelectorAll'];ParentNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','ParentNode']};};
ex$.ParentNode=ParentNode;
function $init$ParentNode(){
if(ParentNode.$$===undefined){
m$1.initTypeProtoI(ParentNode,'ceylon.interop.browser.dom::ParentNode');
(function(parentNode$){
parentNode$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','children']};}};
parentNode$.$prop$getFirstElementChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','firstElementChild']};}};
parentNode$.$prop$getLastElementChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','lastElementChild']};}};
parentNode$.$prop$getChildElementCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','childElementCount']};}};
parentNode$.querySelector={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'selectors',mt:'prm',$t:{t:m$1.$_String}}],$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$m','querySelector']};}};parentNode$.querySelectorAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},ps:[{nm:'selectors',mt:'prm',$t:{t:m$1.$_String}}],$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$m','querySelectorAll']};}};parentNode$.toString=function(){return this.string.valueOf();};
})(ParentNode.$$.prototype);
}
return ParentNode;
}
ex$.$init$ParentNode=$init$ParentNode;$init$ParentNode();
function NonDocumentTypeChildNode(nonDocumentTypeChildNode$){
}
NonDocumentTypeChildNode.dynmem$=['previousElementSibling','nextElementSibling'];NonDocumentTypeChildNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode']};};
ex$.NonDocumentTypeChildNode=NonDocumentTypeChildNode;
function $init$NonDocumentTypeChildNode(){
if(NonDocumentTypeChildNode.$$===undefined){
m$1.initTypeProtoI(NonDocumentTypeChildNode,'ceylon.interop.browser.dom::NonDocumentTypeChildNode');
(function(nonDocumentTypeChildNode$){
nonDocumentTypeChildNode$.$prop$getPreviousElementSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:NonDocumentTypeChildNode,pa:5,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode','$at','previousElementSibling']};}};
nonDocumentTypeChildNode$.$prop$getNextElementSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:NonDocumentTypeChildNode,pa:5,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode','$at','nextElementSibling']};}};
nonDocumentTypeChildNode$.toString=function(){return this.string.valueOf();};
})(NonDocumentTypeChildNode.$$.prototype);
}
return NonDocumentTypeChildNode;
}
ex$.$init$NonDocumentTypeChildNode=$init$NonDocumentTypeChildNode;$init$NonDocumentTypeChildNode();
function Document(document$){
Node(document$);
NonElementParentNode(document$);
ParentNode(document$);
GlobalEventHandlers(document$);
document$.importNode$defs$deep=function($3yf,$3yg){return false;};
document$.createNodeIterator$defs$whatToShow=function($3yh,$3yi,$3yj){return 4294967295;};
document$.createNodeIterator$defs$filter=function($3yh,$3yi,$3yj){return null;};
document$.createTreeWalker$defs$whatToShow=function($3yk,$3yl,$3ym){return 4294967295;};
document$.createTreeWalker$defs$filter=function($3yk,$3yl,$3ym){return null;};
document$.open$defs$typeOrUrl=function($3yn,$3yo,$3yp,$3yq){return "text/html";};
document$.open$defs$replaceOrName=function($3yn,$3yo,$3yp,$3yq){return "";};
document$.open$defs$features=function($3yn,$3yo,$3yp,$3yq){return "";};
document$.open$defs$replace=function($3yn,$3yo,$3yp,$3yq){return false;};
document$.execCommand$defs$showUI=function($3yr,$3ys,$3yt){return false;};
document$.execCommand$defs$val=function($3yr,$3ys,$3yt){return "";};
}
Document.dynmem$=['implementation','URL','documentURI','origin','compatMode','characterSet','contentType','doctype','documentElement','getElementsByTagName','getElementsByTagNameNS','getElementsByClassName','createElement','createElementNS','createDocumentFragment','createTextNode','createComment','createProcessingInstruction','importNode','adoptNode','createEvent','createRange','createNodeIterator','createTreeWalker','location','domain','referrer','cookie','lastModified','readyState','title','dir','body','head','images','embeds','plugins','links','forms','scripts','getElementsByName','open','close','write','writeln','defaultView','activeElement','hasFocus','designMode','execCommand','queryCommandEnabled','queryCommandIndeterm','queryCommandState','queryCommandSupported','queryCommandValue','onreadystatechange'];Document.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$NonElementParentNode()},{t:$init$ParentNode()},{t:$init$GlobalEventHandlers()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Document')];},d:['ceylon.interop.browser.dom','Document']};};
ex$.Document=Document;
function $init$Document(){
if(Document.$$===undefined){
m$1.initTypeProtoI(Document,'ceylon.interop.browser.dom::Document',$init$Node(),$init$NonElementParentNode(),$init$ParentNode(),$init$GlobalEventHandlers());
(function(document$){
document$.$prop$getImplementation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DOMImplementation()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','implementation']};}};
document$.$prop$getURL={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','URL']};}};
document$.$prop$getDocumentURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','documentURI']};}};
document$.$prop$getOrigin={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','origin']};}};
document$.$prop$getCompatMode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','compatMode']};}};
document$.$prop$getCharacterSet={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','characterSet']};}};
document$.$prop$getContentType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','contentType']};}};
document$.$prop$getDoctype={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$DocumentType()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','doctype']};}};
document$.$prop$getDocumentElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','documentElement']};}};
document$.getElementsByTagName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByTagName']};}};document$.getElementsByTagNameNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByTagNameNS']};}};document$.getElementsByClassName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'classNames',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByClassName']};}};document$.createElement={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Element()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createElement']};}};document$.createElementNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Element()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'qualifiedName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createElementNS']};}};document$.createDocumentFragment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createDocumentFragment']};}};document$.createTextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createTextNode']};}};document$.createComment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createComment']};}};document$.createProcessingInstruction={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$ProcessingInstruction()},ps:[{nm:'target',mt:'prm',$t:{t:m$1.$_String}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createProcessingInstruction']};}};document$.importNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'deep',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','importNode']};}};document$.adoptNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','adoptNode']};}};document$.createEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'interface',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createEvent']};}};document$.createRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createRange']};}};document$.createNodeIterator={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeIterator()},ps:[{nm:'root',mt:'prm',$t:{t:$init$Node()}},{nm:'whatToShow',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'filter',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createNodeIterator']};}};document$.createTreeWalker={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$TreeWalker()},ps:[{nm:'root',mt:'prm',$t:{t:$init$Node()}},{nm:'whatToShow',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'filter',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createTreeWalker']};}};document$.$prop$getLocation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Location()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','location']};}};
document$.$prop$getDomain={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','domain']};}};
document$.$prop$getReferrer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','referrer']};}};
document$.$prop$getCookie={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','cookie']};}};
document$.$prop$getLastModified={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','lastModified']};}};
document$.$prop$getReadyState={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,an:function(){return[m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.interop.browser.dom'),DocumentReadyState$dom)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.interop.browser.dom','Document','$at','readyState']};}};
document$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','title']};}};
document$.$prop$getDir={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','dir']};}};
document$.$prop$getBody={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$HTMLElement()}]},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','body']};}};
document$.$prop$getHead={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$HTMLHeadElement()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','head']};}};
document$.$prop$getImages={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','images']};}};
document$.$prop$getEmbeds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','embeds']};}};
document$.$prop$getPlugins={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','plugins']};}};
document$.$prop$getLinks={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','links']};}};
document$.$prop$getForms={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','forms']};}};
document$.$prop$getScripts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','scripts']};}};
document$.getElementsByName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},ps:[{nm:'elementName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByName']};}};document$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$init$Document()},WindowProxy()]},ps:[{nm:'typeOrUrl',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replaceOrName',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'features',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Document,pa:5,an:function(){return[m$1.see("openDocument"),m$1.see("openWindow")];},d:['ceylon.interop.browser.dom','Document','$m','open']};}};document$.close={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','close']};}};document$.write={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','write']};}};document$.writeln={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','writeln']};}};document$.$prop$getDefaultView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},WindowProxy()]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','defaultView']};}};
document$.$prop$getActiveElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','activeElement']};}};
document$.hasFocus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','hasFocus']};}};document$.$prop$getDesignMode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','designMode']};}};
document$.execCommand={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}},{nm:'showUI',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'val',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','execCommand']};}};document$.queryCommandEnabled={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandEnabled']};}};document$.queryCommandIndeterm={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandIndeterm']};}};document$.queryCommandState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandState']};}};document$.queryCommandSupported={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandSupported']};}};document$.queryCommandValue={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandValue']};}};document$.$prop$getOnreadystatechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','onreadystatechange']};}};
document$.toString=function(){return this.string.valueOf();};
})(Document.$$.prototype);
}
return Document;
}
ex$.$init$Document=$init$Document;$init$Document();
function DocumentReadyState$dom(documentReadyState$){
}
DocumentReadyState$dom.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState']};};
ex$.DocumentReadyState$dom=DocumentReadyState$dom;
function $init$DocumentReadyState$dom(){
if(DocumentReadyState$dom.$$===undefined){
m$1.initTypeProtoI(DocumentReadyState$dom,'ceylon.interop.browser.dom::DocumentReadyState');
(function(documentReadyState$){
m$1.atr$(documentReadyState$,'loading',function(){
return "loading";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','loading']};});
m$1.atr$(documentReadyState$,'interactive',function(){
return "interactive";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','interactive']};});
m$1.atr$(documentReadyState$,'complete',function(){
return "complete";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','complete']};});
documentReadyState$.toString=function(){return this.string.valueOf();};
})(DocumentReadyState$dom.$$.prototype);
}
return DocumentReadyState$dom;
}
ex$.$init$DocumentReadyState$dom=$init$DocumentReadyState$dom;$init$DocumentReadyState$dom();
function document$dom(){return window().document;
};
ex$.document$dom=document$dom;
var $prop$getDocument$dom={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},pa:1,d:['ceylon.interop.browser.dom','document']};}};
ex$.$prop$getDocument$dom=$prop$getDocument$dom;
$prop$getDocument$dom.get=document$dom;
document$dom.$crtmm$=$prop$getDocument$dom.$crtmm$;
function openDocument$dom($3yu,$3yv){
if($3yu===undefined){$3yu="text/html";}
if($3yv===undefined){$3yv="";}
var $3yw;
m$1.asrt$2("",'196:4-196:59','nodes.ceylon',[m$1.is$(($3yw=document$dom().open($3yu,$3yv)),{t:$init$Document()}),'is Document doc = document.open(type, replace)']);
return $3yw;
}
ex$.openDocument$dom=openDocument$dom;
openDocument$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Document()},ps:[{nm:'type',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.dom','openDocument']};};
function openWindow$dom($3yx,$3yy,$3yz,$3z0){
if($3z0===undefined){$3z0=false;}
var $3z1;
m$1.asrt$2("",'204:4-204:77','nodes.ceylon',[m$1.is$(($3z1=document$dom().open($3yx,$3yy,$3yz,$3z0)),WindowProxy()),'is WindowProxy doc = document.open(url, name, features, replace)']);
return $3z1;
}
ex$.openWindow$dom=openWindow$dom;
openWindow$dom.$crtmm$=function(){return{mod:$CCMM$,$t:WindowProxy(),ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'features',mt:'prm',$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,d:['ceylon.interop.browser.dom','openWindow']};};
function DOMImplementation(dOMImplementation$){
dOMImplementation$.createDocument$defs$doctype=function($3z2,$3z3,$3z4){return null;};
}
DOMImplementation.dynmem$=['createDocumentType','createDocument','createHTMLDocument','hasFeature'];DOMImplementation.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMImplementation']};};
ex$.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
if(DOMImplementation.$$===undefined){
m$1.initTypeProtoI(DOMImplementation,'ceylon.interop.browser.dom::DOMImplementation');
(function(dOMImplementation$){
dOMImplementation$.createDocumentType={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentType()},ps:[{nm:'qualifiedName',mt:'prm',$t:{t:m$1.$_String}},{nm:'publicId',mt:'prm',$t:{t:m$1.$_String}},{nm:'systemId',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createDocumentType']};}};dOMImplementation$.createDocument={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$XMLDocument()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'qualifiedName',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'doctype',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$DocumentType()}]}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createDocument']};}};dOMImplementation$.createHTMLDocument={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},ps:[{nm:'title',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createHTMLDocument']};}};dOMImplementation$.hasFeature={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','hasFeature']};}};dOMImplementation$.toString=function(){return this.string.valueOf();};
})(DOMImplementation.$$.prototype);
}
return DOMImplementation;
}
ex$.$init$DOMImplementation=$init$DOMImplementation;$init$DOMImplementation();
function DocumentType(documentType$){
Node(documentType$);
ChildNode(documentType$);
}
DocumentType.dynmem$=['name','publicId','systemId'];DocumentType.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()}],pa:1,d:['ceylon.interop.browser.dom','DocumentType']};};
ex$.DocumentType=DocumentType;
function $init$DocumentType(){
if(DocumentType.$$===undefined){
m$1.initTypeProtoI(DocumentType,'ceylon.interop.browser.dom::DocumentType',$init$Node(),$init$ChildNode());
(function(documentType$){
documentType$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','name']};}};
documentType$.$prop$getPublicId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','publicId']};}};
documentType$.$prop$getSystemId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','systemId']};}};
documentType$.toString=function(){return this.string.valueOf();};
})(DocumentType.$$.prototype);
}
return DocumentType;
}
ex$.$init$DocumentType=$init$DocumentType;$init$DocumentType();
function XMLDocument(xMLDocument$){
Document(xMLDocument$);
}
XMLDocument.dynmem$=[];XMLDocument.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Document()}],pa:1,d:['ceylon.interop.browser.dom','XMLDocument']};};
ex$.XMLDocument=XMLDocument;
function $init$XMLDocument(){
if(XMLDocument.$$===undefined){
m$1.initTypeProtoI(XMLDocument,'ceylon.interop.browser.dom::XMLDocument',$init$Document());
(function(xMLDocument$){
xMLDocument$.toString=function(){return this.string.valueOf();};
})(XMLDocument.$$.prototype);
}
return XMLDocument;
}
ex$.$init$XMLDocument=$init$XMLDocument;$init$XMLDocument();
function DocumentFragment(documentFragment$){
Node(documentFragment$);
ParentNode(documentFragment$);
NonElementParentNode(documentFragment$);
}
DocumentFragment.dynmem$=[];DocumentFragment.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ParentNode()},{t:$init$NonElementParentNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:DocumentFragment')];},d:['ceylon.interop.browser.dom','DocumentFragment']};};
ex$.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
if(DocumentFragment.$$===undefined){
m$1.initTypeProtoI(DocumentFragment,'ceylon.interop.browser.dom::DocumentFragment',$init$Node(),$init$ParentNode(),$init$NonElementParentNode());
(function(documentFragment$){
documentFragment$.toString=function(){return this.string.valueOf();};
})(DocumentFragment.$$.prototype);
}
return DocumentFragment;
}
ex$.$init$DocumentFragment=$init$DocumentFragment;$init$DocumentFragment();
function CharacterData(characterData$){
Node(characterData$);
ChildNode(characterData$);
NonDocumentTypeChildNode(characterData$);
}
CharacterData.dynmem$=['data','length','substringData','appendData','insertData','deleteData','replaceData'];CharacterData.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()},{t:$init$NonDocumentTypeChildNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:CharacterData')];},d:['ceylon.interop.browser.dom','CharacterData']};};
ex$.CharacterData=CharacterData;
function $init$CharacterData(){
if(CharacterData.$$===undefined){
m$1.initTypeProtoI(CharacterData,'ceylon.interop.browser.dom::CharacterData',$init$Node(),$init$ChildNode(),$init$NonDocumentTypeChildNode());
(function(characterData$){
characterData$.$prop$getData={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:CharacterData,pa:1029,d:['ceylon.interop.browser.dom','CharacterData','$at','data']};}};
characterData$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$at','length']};}};
characterData$.substringData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','substringData']};}};characterData$.appendData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','appendData']};}};characterData$.insertData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','insertData']};}};characterData$.deleteData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','deleteData']};}};characterData$.replaceData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','replaceData']};}};characterData$.toString=function(){return this.string.valueOf();};
})(CharacterData.$$.prototype);
}
return CharacterData;
}
ex$.$init$CharacterData=$init$CharacterData;$init$CharacterData();
function Text(text$){
CharacterData(text$);
}
Text.dynmem$=['splitText','wholeText'];Text.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Text')];},d:['ceylon.interop.browser.dom','Text']};};
ex$.Text=Text;
function $init$Text(){
if(Text.$$===undefined){
m$1.initTypeProtoI(Text,'ceylon.interop.browser.dom::Text',$init$CharacterData());
(function(text$){
text$.splitText={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Text,pa:5,d:['ceylon.interop.browser.dom','Text','$m','splitText']};}};text$.$prop$getWholeText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Text,pa:5,d:['ceylon.interop.browser.dom','Text','$at','wholeText']};}};
text$.toString=function(){return this.string.valueOf();};
})(Text.$$.prototype);
}
return Text;
}
ex$.$init$Text=$init$Text;$init$Text();
function newText$dom$defs$text($3z5){return "";};
function newText$dom($3z5){if($3z5===undefined){$3z5="";}
return newTextInternal$internal($3z5);
};
newText$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Text]].")];},d:['ceylon.interop.browser.dom','newText']};};
ex$.newText$dom=newText$dom;
function Comment(comment$){
CharacterData(comment$);
}
Comment.dynmem$=[];Comment.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Comment')];},d:['ceylon.interop.browser.dom','Comment']};};
ex$.Comment=Comment;
function $init$Comment(){
if(Comment.$$===undefined){
m$1.initTypeProtoI(Comment,'ceylon.interop.browser.dom::Comment',$init$CharacterData());
(function(comment$){
comment$.toString=function(){return this.string.valueOf();};
})(Comment.$$.prototype);
}
return Comment;
}
ex$.$init$Comment=$init$Comment;$init$Comment();
function newComment$dom$defs$data($3z6){return "";};
function newComment$dom($3z6){if($3z6===undefined){$3z6="";}
return newCommentInternal$internal($3z6);
};
newComment$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Comment]].")];},d:['ceylon.interop.browser.dom','newComment']};};
ex$.newComment$dom=newComment$dom;
function ProcessingInstruction(processingInstruction$){
CharacterData(processingInstruction$);
}
ProcessingInstruction.dynmem$=['target'];ProcessingInstruction.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:ProcessingInstruction')];},d:['ceylon.interop.browser.dom','ProcessingInstruction']};};
ex$.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
if(ProcessingInstruction.$$===undefined){
m$1.initTypeProtoI(ProcessingInstruction,'ceylon.interop.browser.dom::ProcessingInstruction',$init$CharacterData());
(function(processingInstruction$){
processingInstruction$.$prop$getTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ProcessingInstruction,pa:5,d:['ceylon.interop.browser.dom','ProcessingInstruction','$at','target']};}};
processingInstruction$.toString=function(){return this.string.valueOf();};
})(ProcessingInstruction.$$.prototype);
}
return ProcessingInstruction;
}
ex$.$init$ProcessingInstruction=$init$ProcessingInstruction;$init$ProcessingInstruction();
function Element(element$){
Node(element$);
ChildNode(element$);
ParentNode(element$);
NonDocumentTypeChildNode(element$);
}
Element.dynmem$=['namespaceURI','prefix','localName','tagName','id','className','classList','attributes','getAttribute','getAttributeNS','setAttribute','setAttributeNS','removeAttribute','removeAttributeNS','hasAttribute','hasAttributeNS','getElementsByTagName','getElementsByTagNameNS','getElementsByClassName','innerHTML','outerHTML','insertAdjacentHTML','scrollTop','scrollHeight'];Element.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()},{t:$init$ParentNode()},{t:$init$NonDocumentTypeChildNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Element')];},d:['ceylon.interop.browser.dom','Element']};};
ex$.Element=Element;
function $init$Element(){
if(Element.$$===undefined){
m$1.initTypeProtoI(Element,'ceylon.interop.browser.dom::Element',$init$Node(),$init$ChildNode(),$init$ParentNode(),$init$NonDocumentTypeChildNode());
(function(element$){
element$.$prop$getNamespaceURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','namespaceURI']};}};
element$.$prop$getPrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','prefix']};}};
element$.$prop$getLocalName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','localName']};}};
element$.$prop$getTagName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','tagName']};}};
element$.$prop$getId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','id']};}};
element$.$prop$getClassName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','className']};}};
element$.$prop$getClassList={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DOMTokenList()},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','classList']};}};
element$.$prop$getAttributes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NamedNodeMap()},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','attributes']};}};
element$.getAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getAttribute']};}};element$.getAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getAttributeNS']};}};element$.setAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','setAttribute']};}};element$.setAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','setAttributeNS']};}};element$.removeAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','removeAttribute']};}};element$.removeAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','removeAttributeNS']};}};element$.hasAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','hasAttribute']};}};element$.hasAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','hasAttributeNS']};}};element$.getElementsByTagName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByTagName']};}};element$.getElementsByTagNameNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByTagNameNS']};}};element$.getElementsByClassName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'classNames',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByClassName']};}};element$.$prop$getInnerHTML={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','innerHTML']};}};
element$.$prop$getOuterHTML={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','outerHTML']};}};
element$.insertAdjacentHTML={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'position',mt:'prm',$t:{t:m$1.$_String}},{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','insertAdjacentHTML']};}};element$.$prop$getScrollTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','scrollTop']};}};
element$.$prop$getScrollHeight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','scrollHeight']};}};
element$.toString=function(){return this.string.valueOf();};
})(Element.$$.prototype);
}
return Element;
}
ex$.$init$Element=$init$Element;$init$Element();
function Attr(attr$){
}
Attr.dynmem$=['namespaceURI','prefix','localName','name','value','specified'];Attr.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Attr')];},d:['ceylon.interop.browser.dom','Attr']};};
ex$.Attr=Attr;
function $init$Attr(){
if(Attr.$$===undefined){
m$1.initTypeProtoI(Attr,'ceylon.interop.browser.dom::Attr');
(function(attr$){
attr$.$prop$getNamespaceURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','namespaceURI']};}};
attr$.$prop$getPrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','prefix']};}};
attr$.$prop$getLocalName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','localName']};}};
attr$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','name']};}};
attr$.$prop$getValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:1029,d:['ceylon.interop.browser.dom','Attr','$at','value']};}};
attr$.$prop$getSpecified={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','specified']};}};
attr$.toString=function(){return this.string.valueOf();};
})(Attr.$$.prototype);
}
return Attr;
}
ex$.$init$Attr=$init$Attr;$init$Attr();
function NamedNodeMap(namedNodeMap$){
}
NamedNodeMap.dynmem$=['getNamedItem','setNamedItem','removeNamedItem','item','length','getNamedItemNS','setNamedItemNS','removeNamedItemNS'];NamedNodeMap.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:NamedNodeMap')];},d:['ceylon.interop.browser.dom','NamedNodeMap']};};
ex$.NamedNodeMap=NamedNodeMap;
function $init$NamedNodeMap(){
if(NamedNodeMap.$$===undefined){
m$1.initTypeProtoI(NamedNodeMap,'ceylon.interop.browser.dom::NamedNodeMap');
(function(namedNodeMap$){
namedNodeMap$.getNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','getNamedItem']};}};namedNodeMap$.setNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'arg',mt:'prm',$t:{t:$init$Node()}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','setNamedItem']};}};namedNodeMap$.removeNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','removeNamedItem']};}};namedNodeMap$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','item']};}};namedNodeMap$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$at','length']};}};
namedNodeMap$.getNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'namespaceURI',mt:'prm',$t:{t:m$1.$_String}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','getNamedItemNS']};}};namedNodeMap$.setNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'arg',mt:'prm',$t:{t:$init$Node()}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','setNamedItemNS']};}};namedNodeMap$.removeNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'namespaceURI',mt:'prm',$t:{t:m$1.$_String}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','removeNamedItemNS']};}};namedNodeMap$.toString=function(){return this.string.valueOf();};
})(NamedNodeMap.$$.prototype);
}
return NamedNodeMap;
}
ex$.$init$NamedNodeMap=$init$NamedNodeMap;$init$NamedNodeMap();
function NodeList(nodeList$){
}
NodeList.dynmem$=['item','length'];NodeList.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:NodeList')];},d:['ceylon.interop.browser.dom','NodeList']};};
ex$.NodeList=NodeList;
function $init$NodeList(){
if(NodeList.$$===undefined){
m$1.initTypeProtoI(NodeList,'ceylon.interop.browser.dom::NodeList');
(function(nodeList$){
nodeList$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:NodeList,pa:5,d:['ceylon.interop.browser.dom','NodeList','$m','item']};}};nodeList$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeList,pa:5,d:['ceylon.interop.browser.dom','NodeList','$at','length']};}};
nodeList$.toString=function(){return this.string.valueOf();};
})(NodeList.$$.prototype);
}
return NodeList;
}
ex$.$init$NodeList=$init$NodeList;$init$NodeList();
function HTMLCollection(hTMLCollection$){
}
HTMLCollection.dynmem$=['length','item','namedItem'];HTMLCollection.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:HTMLCollection')];},d:['ceylon.interop.browser.dom','HTMLCollection']};};
ex$.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
if(HTMLCollection.$$===undefined){
m$1.initTypeProtoI(HTMLCollection,'ceylon.interop.browser.dom::HTMLCollection');
(function(hTMLCollection$){
hTMLCollection$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$at','length']};}};
hTMLCollection$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$m','item']};}};hTMLCollection$.namedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$m','namedItem']};}};hTMLCollection$.toString=function(){return this.string.valueOf();};
})(HTMLCollection.$$.prototype);
}
return HTMLCollection;
}
ex$.$init$HTMLCollection=$init$HTMLCollection;$init$HTMLCollection();
function HTMLElement(hTMLElement$){
Element(hTMLElement$);
GlobalEventHandlers(hTMLElement$);
}
HTMLElement.dynmem$=['title','lang','translate','dir','dataset','hidden','click','tabIndex','focus','blur','accessKey','accessKeyLabel','contentEditable','isContentEditable','spellcheck'];HTMLElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Element()},{t:$init$GlobalEventHandlers()}],pa:1,d:['ceylon.interop.browser.dom','HTMLElement']};};
ex$.HTMLElement=HTMLElement;
function $init$HTMLElement(){
if(HTMLElement.$$===undefined){
m$1.initTypeProtoI(HTMLElement,'ceylon.interop.browser.dom::HTMLElement',$init$Element(),$init$GlobalEventHandlers());
(function(hTMLElement$){
hTMLElement$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','title']};}};
hTMLElement$.$prop$getLang={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','lang']};}};
hTMLElement$.$prop$getTranslate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','translate']};}};
hTMLElement$.$prop$getDir={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','dir']};}};
hTMLElement$.$prop$getDataset={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$at','dataset']};}};
hTMLElement$.$prop$getHidden={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','hidden']};}};
hTMLElement$.click={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','click']};}};hTMLElement$.$prop$getTabIndex={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','tabIndex']};}};
hTMLElement$.focus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','focus']};}};hTMLElement$.blur={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','blur']};}};hTMLElement$.$prop$getAccessKey={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','accessKey']};}};
hTMLElement$.$prop$getAccessKeyLabel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','accessKeyLabel']};}};
hTMLElement$.$prop$getContentEditable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','contentEditable']};}};
hTMLElement$.$prop$getIsContentEditable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$at','isContentEditable']};}};
hTMLElement$.$prop$getSpellcheck={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','spellcheck']};}};
hTMLElement$.toString=function(){return this.string.valueOf();};
})(HTMLElement.$$.prototype);
}
return HTMLElement;
}
ex$.$init$HTMLElement=$init$HTMLElement;$init$HTMLElement();
function HTMLHeadElement(hTMLHeadElement$){
HTMLElement(hTMLHeadElement$);
}
HTMLHeadElement.dynmem$=[];HTMLHeadElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$HTMLElement()}],pa:1,d:['ceylon.interop.browser.dom','HTMLHeadElement']};};
ex$.HTMLHeadElement=HTMLHeadElement;
function $init$HTMLHeadElement(){
if(HTMLHeadElement.$$===undefined){
m$1.initTypeProtoI(HTMLHeadElement,'ceylon.interop.browser.dom::HTMLHeadElement',$init$HTMLElement());
(function(hTMLHeadElement$){
hTMLHeadElement$.toString=function(){return this.string.valueOf();};
})(HTMLHeadElement.$$.prototype);
}
return HTMLHeadElement;
}
ex$.$init$HTMLHeadElement=$init$HTMLHeadElement;$init$HTMLHeadElement();
function HTMLUnknownElement(hTMLUnknownElement$){
HTMLElement(hTMLUnknownElement$);
}
HTMLUnknownElement.dynmem$=[];HTMLUnknownElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$HTMLElement()}],pa:1,d:['ceylon.interop.browser.dom','HTMLUnknownElement']};};
ex$.HTMLUnknownElement=HTMLUnknownElement;
function $init$HTMLUnknownElement(){
if(HTMLUnknownElement.$$===undefined){
m$1.initTypeProtoI(HTMLUnknownElement,'ceylon.interop.browser.dom::HTMLUnknownElement',$init$HTMLElement());
(function(hTMLUnknownElement$){
hTMLUnknownElement$.toString=function(){return this.string.valueOf();};
})(HTMLUnknownElement.$$.prototype);
}
return HTMLUnknownElement;
}
ex$.$init$HTMLUnknownElement=$init$HTMLUnknownElement;$init$HTMLUnknownElement();
function Range(range$){
range$.collapse$defs$toStart=function($3z7){return false;};
}
Range.dynmem$=['startContainer','startOffset','endContainer','endOffset','collapsed','commonAncestorContainer','setStart','setEnd','setStartBefore','setStartAfter','setEndBefore','setEndAfter','collapse','selectNode','selectNodeContents','START_TO_START','START_TO_END','END_TO_END','END_TO_START','compareBoundaryPoints','deleteContents','extractContents','cloneContents','insertNode','surroundContents','cloneRange','detach','isPointInRange','comparePoint','intersectsNode','createContextualFragment'];Range.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','Range']};};
ex$.Range=Range;
function $init$Range(){
if(Range.$$===undefined){
m$1.initTypeProtoI(Range,'ceylon.interop.browser.dom::Range');
(function(range$){
range$.$prop$getStartContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','startContainer']};}};
range$.$prop$getStartOffset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','startOffset']};}};
range$.$prop$getEndContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','endContainer']};}};
range$.$prop$getEndOffset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','endOffset']};}};
range$.$prop$getCollapsed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','collapsed']};}};
range$.$prop$getCommonAncestorContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','commonAncestorContainer']};}};
range$.setStart={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStart']};}};range$.setEnd={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEnd']};}};range$.setStartBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStartBefore']};}};range$.setStartAfter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStartAfter']};}};range$.setEndBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEndBefore']};}};range$.setEndAfter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEndAfter']};}};range$.collapse={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'toStart',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','collapse']};}};range$.selectNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','selectNode']};}};range$.selectNodeContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','selectNodeContents']};}};range$.$prop$getSTART_TO_START={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','START_TO_START']};}};
range$.$prop$getSTART_TO_END={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','START_TO_END']};}};
range$.$prop$getEND_TO_END={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','END_TO_END']};}};
range$.$prop$getEND_TO_START={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','END_TO_START']};}};
range$.compareBoundaryPoints={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'how',mt:'prm',$t:{t:m$1.Integer}},{nm:'sourceRange',mt:'prm',$t:{t:$init$Range()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','compareBoundaryPoints']};}};range$.deleteContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','deleteContents']};}};range$.extractContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','extractContents']};}};range$.cloneContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','cloneContents']};}};range$.insertNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','insertNode']};}};range$.surroundContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newParent',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','surroundContents']};}};range$.cloneRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','cloneRange']};}};range$.detach={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','detach']};}};range$.isPointInRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','isPointInRange']};}};range$.comparePoint={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','comparePoint']};}};range$.intersectsNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','intersectsNode']};}};range$.createContextualFragment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[{nm:'fragment',mt:'prm',$t:{t:m$1.$_String}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','createContextualFragment']};}};range$.toString=function(){return this.string.valueOf();};
})(Range.$$.prototype);
}
return Range;
}
ex$.$init$Range=$init$Range;$init$Range();
function newRange$dom(){return newRangeInternal$internal();
};
newRange$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],pa:1,d:['ceylon.interop.browser.dom','newRange']};};
ex$.newRange$dom=newRange$dom;
function NodeIterator(nodeIterator$){
}
NodeIterator.dynmem$=['root','referenceNode','pointerBeforeReferenceNode','whatToShow','filter','nextNode','previousNode','detach'];NodeIterator.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NodeIterator']};};
ex$.NodeIterator=NodeIterator;
function $init$NodeIterator(){
if(NodeIterator.$$===undefined){
m$1.initTypeProtoI(NodeIterator,'ceylon.interop.browser.dom::NodeIterator');
(function(nodeIterator$){
nodeIterator$.$prop$getRoot={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','root']};}};
nodeIterator$.$prop$getReferenceNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','referenceNode']};}};
nodeIterator$.$prop$getPointerBeforeReferenceNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','pointerBeforeReferenceNode']};}};
nodeIterator$.$prop$getWhatToShow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','whatToShow']};}};
nodeIterator$.$prop$getFilter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','filter']};}};
nodeIterator$.nextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','nextNode']};}};nodeIterator$.previousNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','previousNode']};}};nodeIterator$.detach={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','detach']};}};nodeIterator$.toString=function(){return this.string.valueOf();};
})(NodeIterator.$$.prototype);
}
return NodeIterator;
}
ex$.$init$NodeIterator=$init$NodeIterator;$init$NodeIterator();
function NodeFilter(nodeFilter$){
}
NodeFilter.dynmem$=['FILTER_ACCEPT','FILTER_REJECT','FILTER_SKIP','SHOW_ALL','SHOW_ELEMENT','SHOW_ATTRIBUTE','SHOW_TEXT','SHOW_CDATA_SECTION','SHOW_ENTITY_REFERENCE','SHOW_ENTITY','SHOW_PROCESSING_INSTRUCTION','SHOW_COMMENT','SHOW_DOCUMENT','SHOW_DOCUMENT_TYPE','SHOW_DOCUMENT_FRAGMENT','SHOW_NOTATION','acceptNode'];NodeFilter.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NodeFilter']};};
ex$.NodeFilter=NodeFilter;
function $init$NodeFilter(){
if(NodeFilter.$$===undefined){
m$1.initTypeProtoI(NodeFilter,'ceylon.interop.browser.dom::NodeFilter');
(function(nodeFilter$){
nodeFilter$.$prop$getFILTER_ACCEPT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_ACCEPT']};}};
nodeFilter$.$prop$getFILTER_REJECT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_REJECT']};}};
nodeFilter$.$prop$getFILTER_SKIP={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_SKIP']};}};
nodeFilter$.$prop$getSHOW_ALL={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ALL']};}};
nodeFilter$.$prop$getSHOW_ELEMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ELEMENT']};}};
nodeFilter$.$prop$getSHOW_ATTRIBUTE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ATTRIBUTE']};}};
nodeFilter$.$prop$getSHOW_TEXT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_TEXT']};}};
nodeFilter$.$prop$getSHOW_CDATA_SECTION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_CDATA_SECTION']};}};
nodeFilter$.$prop$getSHOW_ENTITY_REFERENCE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ENTITY_REFERENCE']};}};
nodeFilter$.$prop$getSHOW_ENTITY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ENTITY']};}};
nodeFilter$.$prop$getSHOW_PROCESSING_INSTRUCTION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_PROCESSING_INSTRUCTION']};}};
nodeFilter$.$prop$getSHOW_COMMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_COMMENT']};}};
nodeFilter$.$prop$getSHOW_DOCUMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT']};}};
nodeFilter$.$prop$getSHOW_DOCUMENT_TYPE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT_TYPE']};}};
nodeFilter$.$prop$getSHOW_DOCUMENT_FRAGMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT_FRAGMENT']};}};
nodeFilter$.$prop$getSHOW_NOTATION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_NOTATION']};}};
nodeFilter$.acceptNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$m','acceptNode']};}};nodeFilter$.toString=function(){return this.string.valueOf();};
})(NodeFilter.$$.prototype);
}
return NodeFilter;
}
ex$.$init$NodeFilter=$init$NodeFilter;$init$NodeFilter();
function TreeWalker(treeWalker$){
}
TreeWalker.dynmem$=['root','whatToShow','filter','currentNode','parentNode','firstChild','lastChild','previousSibling','nextSibling','previousNode','nextNode'];TreeWalker.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','TreeWalker']};};
ex$.TreeWalker=TreeWalker;
function $init$TreeWalker(){
if(TreeWalker.$$===undefined){
m$1.initTypeProtoI(TreeWalker,'ceylon.interop.browser.dom::TreeWalker');
(function(treeWalker$){
treeWalker$.$prop$getRoot={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','root']};}};
treeWalker$.$prop$getWhatToShow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','whatToShow']};}};
treeWalker$.$prop$getFilter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','filter']};}};
treeWalker$.$prop$getCurrentNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:TreeWalker,pa:1029,d:['ceylon.interop.browser.dom','TreeWalker','$at','currentNode']};}};
treeWalker$.parentNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','parentNode']};}};treeWalker$.firstChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','firstChild']};}};treeWalker$.lastChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','lastChild']};}};treeWalker$.previousSibling={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','previousSibling']};}};treeWalker$.nextSibling={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','nextSibling']};}};treeWalker$.previousNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','previousNode']};}};treeWalker$.nextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','nextNode']};}};treeWalker$.toString=function(){return this.string.valueOf();};
})(TreeWalker.$$.prototype);
}
return TreeWalker;
}
ex$.$init$TreeWalker=$init$TreeWalker;$init$TreeWalker();
function EventTarget(eventTarget$){
eventTarget$.addEventListener$defs$capture=function($3z8,$3z9,$3za){return false;};
eventTarget$.removeEventListener$defs$capture=function($3zb,$3zc,$3zd){return false;};
}
EventTarget.dynmem$=['addEventListener','removeEventListener','dispatchEvent'];EventTarget.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget')];},d:['ceylon.interop.browser.dom','EventTarget']};};
ex$.EventTarget=EventTarget;
function $init$EventTarget(){
if(EventTarget.$$===undefined){
m$1.initTypeProtoI(EventTarget,'ceylon.interop.browser.dom::EventTarget');
(function(eventTarget$){
eventTarget$.addEventListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventListener()}]}},{nm:'capture',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:addEventListener')];},d:['ceylon.interop.browser.dom','EventTarget','$m','addEventListener']};}};eventTarget$.removeEventListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventListener()}]}},{nm:'capture',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:removeEventListener')];},d:['ceylon.interop.browser.dom','EventTarget','$m','removeEventListener']};}};eventTarget$.dispatchEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'event',mt:'prm',$t:{t:$init$Event()}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:dispatchEvent')];},d:['ceylon.interop.browser.dom','EventTarget','$m','dispatchEvent']};}};eventTarget$.toString=function(){return this.string.valueOf();};
})(EventTarget.$$.prototype);
}
return EventTarget;
}
ex$.$init$EventTarget=$init$EventTarget;$init$EventTarget();
function EventListener(eventListener$){
}
EventListener.dynmem$=['handleEvent'];EventListener.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventListener')];},d:['ceylon.interop.browser.dom','EventListener']};};
ex$.EventListener=EventListener;
function $init$EventListener(){
if(EventListener.$$===undefined){
m$1.initTypeProtoI(EventListener,'ceylon.interop.browser.dom::EventListener');
(function(eventListener$){
eventListener$.handleEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:$init$Event()}}],$cont:EventListener,pa:5,d:['ceylon.interop.browser.dom','EventListener','$m','handleEvent']};}};eventListener$.toString=function(){return this.string.valueOf();};
})(EventListener.$$.prototype);
}
return EventListener;
}
ex$.$init$EventListener=$init$EventListener;$init$EventListener();
function EventHandler$dom(){var $3ze={t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([{t:$init$Event()}])}};$3ze.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','EventHandler']};};return $3ze;}
ex$.EventHandler$dom=EventHandler$dom;
function Event(event$){
}
Event.dynmem$=['type','target','currentTarget','NONE','CAPTURING_PHASE','AT_TARGET','BUBBLING_PHASE','eventPhase','stopPropagation','stopImmediatePropagation','bubbles','cancelable','preventDefault','defaultPrevented','isTrusted','timeStamp','initEvent'];Event.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event')];},d:['ceylon.interop.browser.dom','Event']};};
ex$.Event=Event;
function $init$Event(){
if(Event.$$===undefined){
m$1.initTypeProtoI(Event,'ceylon.interop.browser.dom::Event');
(function(event$){
event$.$prop$getType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Event,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event:$at:type')];},d:['ceylon.interop.browser.dom','Event','$at','type']};}};
event$.$prop$getTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventTarget()}]},$cont:Event,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event:$at:target')];},d:['ceylon.interop.browser.dom','Event','$at','target']};}};
event$.$prop$getCurrentTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventTarget()}]},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','currentTarget']};}};
event$.$prop$getNONE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','NONE']};}};
event$.$prop$getCAPTURING_PHASE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','CAPTURING_PHASE']};}};
event$.$prop$getAT_TARGET={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','AT_TARGET']};}};
event$.$prop$getBUBBLING_PHASE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','BUBBLING_PHASE']};}};
event$.$prop$getEventPhase={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','eventPhase']};}};
event$.stopPropagation={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','stopPropagation']};}};event$.stopImmediatePropagation={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','stopImmediatePropagation']};}};event$.$prop$getBubbles={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','bubbles']};}};
event$.$prop$getCancelable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','cancelable']};}};
event$.preventDefault={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','preventDefault']};}};event$.$prop$getDefaultPrevented={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','defaultPrevented']};}};
event$.$prop$getIsTrusted={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','isTrusted']};}};
event$.$prop$getTimeStamp={$crtmm$:function(){return{mod:$CCMM$,$t:DOMTimeStamp$dom(),$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','timeStamp']};}};
event$.initEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'bubbles',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'cancelable',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','initEvent']};}};event$.toString=function(){return this.string.valueOf();};
})(Event.$$.prototype);
}
return Event;
}
ex$.$init$Event=$init$Event;$init$Event();
function newEvent$dom$defs$eventInitDict($3zf,$3zg){return null;};
function newEvent$dom($3zf,$3zg){if($3zg===undefined){$3zg=null;}
return newEventInternal$internal($3zf,$3zg);
};
newEvent$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'eventInitDict',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:EventInit$dom}]}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Event]].")];},d:['ceylon.interop.browser.dom','newEvent']};};
ex$.newEvent$dom=newEvent$dom;
function EventInit$dom(bubbles,cancelable,eventInit$){
$init$EventInit$dom();
if(eventInit$===undefined)eventInit$=new EventInit$dom.$$;
if(bubbles===undefined){bubbles=$init$EventInit$dom().$defs$bubbles(eventInit$,cancelable);}
eventInit$.bubbles_=bubbles;
if(cancelable===undefined){cancelable=$init$EventInit$dom().$defs$cancelable(eventInit$,bubbles);}
eventInit$.cancelable_=cancelable;
return eventInit$;
}
EventInit$dom.$defs$bubbles=function(eventInit$,cancelable){return false};EventInit$dom.$defs$cancelable=function(eventInit$,bubbles){return false};EventInit$dom.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'bubbles',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1},{nm:'cancelable',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventInit')];},d:['ceylon.interop.browser.dom','EventInit']};};
ex$.EventInit$dom=EventInit$dom;
function $init$EventInit$dom(){
if(EventInit$dom.$$===undefined){
m$1.initTypeProto(EventInit$dom,'ceylon.interop.browser.dom::EventInit',m$1.Basic);
(function(eventInit$){
m$1.atr$(eventInit$,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit$dom,pa:1,d:['ceylon.interop.browser.dom','EventInit','$at','bubbles']};});
m$1.atr$(eventInit$,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit$dom,pa:1,d:['ceylon.interop.browser.dom','EventInit','$at','cancelable']};});
eventInit$.toString=function(){return this.string.valueOf();};
})(EventInit$dom.$$.prototype);
}
return EventInit$dom;
}
ex$.$init$EventInit$dom=$init$EventInit$dom;$init$EventInit$dom();
function DOMTimeStamp$dom(){var $3zh={t:m$1.Integer};$3zh.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMTimeStamp']};};return $3zh;}
ex$.DOMTimeStamp$dom=DOMTimeStamp$dom;
function GlobalEventHandlers(globalEventHandlers$){
}
GlobalEventHandlers.dynmem$=['onabort','onblur','oncancel','oncanplay','oncanplaythrough','onchange','onclick','oncuechange','ondblclick','ondurationchange','onemptied','onended','onerror','onfocus','oninput','oninvalid','onkeydown','onkeypress','onkeyup','onload','onloadeddata','onloadedmetadata','onloadstart','onmousedown','onmouseenter','onmouseleave','onmousemove','onmouseout','onmouseover','onmouseup','onmousewheel','onpause','onplay','onplaying','onprogress','onratechange','onreset','onresize','onscroll','onseeked','onseeking','onselect','onshow','onstalled','onsubmit','onsuspend','ontimeupdate','ontoggle','onvolumechange','onwaiting'];GlobalEventHandlers.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','GlobalEventHandlers']};};
ex$.GlobalEventHandlers=GlobalEventHandlers;
function $init$GlobalEventHandlers(){
if(GlobalEventHandlers.$$===undefined){
m$1.initTypeProtoI(GlobalEventHandlers,'ceylon.interop.browser.dom::GlobalEventHandlers');
(function(globalEventHandlers$){
globalEventHandlers$.$prop$getOnabort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onabort']};}};
globalEventHandlers$.$prop$getOnblur={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onblur']};}};
globalEventHandlers$.$prop$getOncancel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncancel']};}};
globalEventHandlers$.$prop$getOncanplay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncanplay']};}};
globalEventHandlers$.$prop$getOncanplaythrough={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncanplaythrough']};}};
globalEventHandlers$.$prop$getOnchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onchange']};}};
globalEventHandlers$.$prop$getOnclick={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onclick']};}};
globalEventHandlers$.$prop$getOncuechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncuechange']};}};
globalEventHandlers$.$prop$getOndblclick={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ondblclick']};}};
globalEventHandlers$.$prop$getOndurationchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ondurationchange']};}};
globalEventHandlers$.$prop$getOnemptied={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onemptied']};}};
globalEventHandlers$.$prop$getOnended={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onended']};}};
globalEventHandlers$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},OnErrorEventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onerror']};}};
globalEventHandlers$.$prop$getOnfocus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onfocus']};}};
globalEventHandlers$.$prop$getOninput={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oninput']};}};
globalEventHandlers$.$prop$getOninvalid={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oninvalid']};}};
globalEventHandlers$.$prop$getOnkeydown={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeydown']};}};
globalEventHandlers$.$prop$getOnkeypress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeypress']};}};
globalEventHandlers$.$prop$getOnkeyup={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeyup']};}};
globalEventHandlers$.$prop$getOnload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onload']};}};
globalEventHandlers$.$prop$getOnloadeddata={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadeddata']};}};
globalEventHandlers$.$prop$getOnloadedmetadata={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadedmetadata']};}};
globalEventHandlers$.$prop$getOnloadstart={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadstart']};}};
globalEventHandlers$.$prop$getOnmousedown={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousedown']};}};
globalEventHandlers$.$prop$getOnmouseenter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseenter']};}};
globalEventHandlers$.$prop$getOnmouseleave={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseleave']};}};
globalEventHandlers$.$prop$getOnmousemove={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousemove']};}};
globalEventHandlers$.$prop$getOnmouseout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseout']};}};
globalEventHandlers$.$prop$getOnmouseover={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseover']};}};
globalEventHandlers$.$prop$getOnmouseup={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseup']};}};
globalEventHandlers$.$prop$getOnmousewheel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousewheel']};}};
globalEventHandlers$.$prop$getOnpause={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onpause']};}};
globalEventHandlers$.$prop$getOnplay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onplay']};}};
globalEventHandlers$.$prop$getOnplaying={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onplaying']};}};
globalEventHandlers$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onprogress']};}};
globalEventHandlers$.$prop$getOnratechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onratechange']};}};
globalEventHandlers$.$prop$getOnreset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onreset']};}};
globalEventHandlers$.$prop$getOnresize={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onresize']};}};
globalEventHandlers$.$prop$getOnscroll={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onscroll']};}};
globalEventHandlers$.$prop$getOnseeked={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onseeked']};}};
globalEventHandlers$.$prop$getOnseeking={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onseeking']};}};
globalEventHandlers$.$prop$getOnselect={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onselect']};}};
globalEventHandlers$.$prop$getOnshow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onshow']};}};
globalEventHandlers$.$prop$getOnstalled={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onstalled']};}};
globalEventHandlers$.$prop$getOnsubmit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onsubmit']};}};
globalEventHandlers$.$prop$getOnsuspend={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onsuspend']};}};
globalEventHandlers$.$prop$getOntimeupdate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ontimeupdate']};}};
globalEventHandlers$.$prop$getOntoggle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ontoggle']};}};
globalEventHandlers$.$prop$getOnvolumechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onvolumechange']};}};
globalEventHandlers$.$prop$getOnwaiting={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:1029,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onwaiting']};}};
globalEventHandlers$.toString=function(){return this.string.valueOf();};
})(GlobalEventHandlers.$$.prototype);
}
return GlobalEventHandlers;
}
ex$.$init$GlobalEventHandlers=$init$GlobalEventHandlers;$init$GlobalEventHandlers();
function OnErrorEventHandler$dom(){var $3zi={t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.$_String},{t:$init$Event()}]),m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]),{t:m$1.Anything}])}};$3zi.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','OnErrorEventHandler']};};return $3zi;}
ex$.OnErrorEventHandler$dom=OnErrorEventHandler$dom;
function OnBeforeUnloadEventHandler$dom(){var $3zj={t:m$1.Callable,a:{Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Arguments$Callable:m$1.mtt$([{t:$init$Event()}])}};$3zj.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','OnBeforeUnloadEventHandler']};};return $3zj;}
ex$.OnBeforeUnloadEventHandler$dom=OnBeforeUnloadEventHandler$dom;
function WindowEventHandlers(windowEventHandlers$){
}
WindowEventHandlers.dynmem$=['onafterprint','onbeforeprint','onbeforeunload','onhashchange','onmessage','onoffline','ononline','onpagehide','onpageshow','onpopstate','onstorage','onunload'];WindowEventHandlers.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','WindowEventHandlers']};};
ex$.WindowEventHandlers=WindowEventHandlers;
function $init$WindowEventHandlers(){
if(WindowEventHandlers.$$===undefined){
m$1.initTypeProtoI(WindowEventHandlers,'ceylon.interop.browser.dom::WindowEventHandlers');
(function(windowEventHandlers$){
windowEventHandlers$.$prop$getOnafterprint={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onafterprint']};}};
windowEventHandlers$.$prop$getOnbeforeprint={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onbeforeprint']};}};
windowEventHandlers$.$prop$getOnbeforeunload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},OnBeforeUnloadEventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onbeforeunload']};}};
windowEventHandlers$.$prop$getOnhashchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onhashchange']};}};
windowEventHandlers$.$prop$getOnmessage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onmessage']};}};
windowEventHandlers$.$prop$getOnoffline={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onoffline']};}};
windowEventHandlers$.$prop$getOnonline={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','ononline']};}};
windowEventHandlers$.$prop$getOnpagehide={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpagehide']};}};
windowEventHandlers$.$prop$getOnpageshow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpageshow']};}};
windowEventHandlers$.$prop$getOnpopstate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpopstate']};}};
windowEventHandlers$.$prop$getOnstorage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onstorage']};}};
windowEventHandlers$.$prop$getOnunload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onunload']};}};
windowEventHandlers$.toString=function(){return this.string.valueOf();};
})(WindowEventHandlers.$$.prototype);
}
return WindowEventHandlers;
}
ex$.$init$WindowEventHandlers=$init$WindowEventHandlers;$init$WindowEventHandlers();
function newEventInternal$internal($3zk,$3zl){
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'14:14-14:17','nativeObjects.ceylon'):eval)("Event");return m$1.dre$$(($3zm=$3zk,$3zn=$3zl,$3zo=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'15:15-15:17','nativeObjects.ceylon'):obj),$3zo.$$===undefined?new $3zo($3zm, $3zn):$3zo($3zm, $3zn)),{t:$init$Event()},'nativeObjects.ceylon 15:15-15:40');
}
ex$.newEventInternal$internal=newEventInternal$internal;
newEventInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'eventInitDict',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:EventInit$dom}]}}],pa:1,d:['ceylon.interop.browser.internal','newEventInternal']};};
function newXMLHttpRequestInternal$internal(){
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'22:14-22:17','nativeObjects.ceylon'):eval)("XMLHttpRequest");return m$1.dre$$(($3zp=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'23:15-23:17','nativeObjects.ceylon'):obj),$3zp.$$===undefined?new $3zp():$3zp()),{t:$init$XMLHttpRequest()},'nativeObjects.ceylon 23:15-23:21');
}
ex$.newXMLHttpRequestInternal$internal=newXMLHttpRequestInternal$internal;
newXMLHttpRequestInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequest()},ps:[],pa:1,d:['ceylon.interop.browser.internal','newXMLHttpRequestInternal']};};
function newTextInternal$internal($3zq){
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'29:14-29:17','nativeObjects.ceylon'):eval)("Text");return m$1.dre$$(($3zr=$3zq,$3zs=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'30:15-30:17','nativeObjects.ceylon'):obj),$3zs.$$===undefined?new $3zs($3zr):$3zs($3zr)),{t:$init$Text()},'nativeObjects.ceylon 30:15-30:25');
}
ex$.newTextInternal$internal=newTextInternal$internal;
newTextInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.internal','newTextInternal']};};
function newRangeInternal$internal(){
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'36:14-36:17','nativeObjects.ceylon'):eval)("Range");return m$1.dre$$(($3zt=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'37:15-37:17','nativeObjects.ceylon'):obj),$3zt.$$===undefined?new $3zt():$3zt()),{t:$init$Range()},'nativeObjects.ceylon 37:15-37:21');
}
ex$.newRangeInternal$internal=newRangeInternal$internal;
newRangeInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],pa:1,d:['ceylon.interop.browser.internal','newRangeInternal']};};
function newCommentInternal$internal($3zu){
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'43:14-43:17','nativeObjects.ceylon'):eval)("Comment");return m$1.dre$$(($3zv=$3zu,$3zw=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'44:15-44:17','nativeObjects.ceylon'):obj),$3zw.$$===undefined?new $3zw($3zv):$3zw($3zv)),{t:$init$Comment()},'nativeObjects.ceylon 44:15-44:25');
}
ex$.newCommentInternal$internal=newCommentInternal$internal;
newCommentInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.internal','newCommentInternal']};};
ex$.$pkg$ans$ceylon$interop$browser=function(){return[m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$interop$browser$dom=function(){return[m$1.shared()];};
ex$.$pkg$ans$ceylon$interop$browser$internal=function(){return[m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String}))];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
