(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('thrillon_example/client/1.0.1/thrillon_example.client-1.0.1', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('thrillon_example/client/1.0.1/thrillon_example.client-1.0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'thrillon_example.client/1.0.1');
var m$2=require('ceylon/html/1.3.3/ceylon.html-1.3.3');
m$1.$addmod$(m$2,'ceylon.html/1.3.3');
var m$3=require('herd/thrillon/1.0.1/herd.thrillon-1.0.1');
m$1.$addmod$(m$3,'herd.thrillon/1.0.1');
var m$4=require('ceylon/interop/browser/1.3.3/ceylon.interop.browser-1.3.3');
m$1.$addmod$(m$4,'ceylon.interop.browser/1.3.3');
var m$5=(m$1.run$isNode())?m$1.npm$req('highlightjs','highlightjs/highlight.pack.js',require):require('highlightjs/latest/highlightjs-latest');
m$1.$addmod$(m$5,'highlightjs/latest');
var m$6=require('ceylon/time/1.3.3/ceylon.time-1.3.3');
m$1.$addmod$(m$6,'ceylon.time/1.3.3');
var m$7=(m$1.run$isNode())?m$1.npm$req('mithrilSlider','mithril-slider/dist/mithril-slider.js',require):require('mithril-slider/latest/mithril-slider-latest');
m$1.$addmod$(m$7,'mithril-slider/latest');
var m$8=require('ceylon/collection/1.3.3/ceylon.collection-1.3.3');
m$1.$addmod$(m$8,'ceylon.collection/1.3.3');
ex$.$mod$ans$=function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'herd.thrillon/1.0.1':[],
'ceylon.collection/1.3.3':[],
'ceylon.time/1.3.3':[],
'marked/latest':[],
'highlightjs/latest':[],
'mithril-slider/latest':[]
};};
function $9(){
var attachDomDemo$=new $9.$$;m$3.Template(attachDomDemo$);
attachDomDemo$.$prop$get$p5c730$b={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.Button},$cont:$9,pa:1155,d:['thrillon_example.client','attachDomDemo','$at','button$b7mrzv']};}};
attachDomDemo$.$prop$get$p5c730$b.get=function(){return $p5c730$b};
return attachDomDemo$;
};$9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','attachDomDemo']};};
function $init$attachDomDemo(){
if($9.$$===undefined){
m$1.initTypeProto($9,'thrillon_example.client::attachDomDemo',m$1.Basic,m$3.Template);
(function(attachDomDemo$){
m$1.atr$(attachDomDemo$,'$p5c730$b',function(){if(this.$p5c730$b_===undefined)throw m$1.InitializationError('Attempt to read uninitialized attribute \u00ab$p5c730$b\u00bb');return this.$p5c730$b_;},function($c){return this.$p5c730$b_=$c;},function(){return{mod:$CCMM$,$t:{t:m$2.Button},$cont:$9,pa:1155,d:['thrillon_example.client','attachDomDemo','$at','button$b7mrzv']};});
attachDomDemo$.build=function($d){
var attachDomDemo$=this;
attachDomDemo$.$p5c730$b=($e=m$1.tpl$([m$3.attachDom(),m$3.event().click(m$1.jsc$2((function($f){
var $g=m$3.dom(attachDomDemo$.$p5c730$b);
$prop$get$g={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$4.Node}]},$cont:attachDomDemo$.build,d:['thrillon_example.client','attachDomDemo','$m','build','$at','domButton$93guh7']};}};
$prop$get$g.get=function(){return $g};
(typeof console==='undefined'||console===null?m$1.throwexc(m$1.Exception("Undefined or null reference: console"),'15:24-15:30','attachDom.ceylon'):console).log(("dom => "+($h=$g,m$1.nn$($h)?$h:"<null>").string));
var $h;
var $i;
if(m$1.is$(($i=$g),{t:m$4.HTMLElement})){
var $j=$i.getAttribute("style");
$prop$get$j={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:attachDomDemo$.build,d:['thrillon_example.client','attachDomDemo','$m','build','$at','style$juuwoq']};}};
$prop$get$j.get=function(){return $j};
var $k;
if(m$1.nn$(($k=$j))&&m$1.$eq$($k,"background-color: yellow;")){
$i.setAttribute("style","background-color: blue;");
}
else{
$i.setAttribute("style","background-color: yellow;");
}
}
}),[{nm:'evt',mt:'prm',$t:{t:m$4.Event}}],{Arguments$Callable:m$1.mtt$([{t:m$4.Event}]),Return$Callable:{t:m$1.Anything}}))]),$l=m$1.sarg$(function($m){switch($m){case 0:return "Change color";}return m$1.finished();},undefined,{}),m$2.Button(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$e,$l));
var $e,$l;
return attachDomDemo$.$p5c730$b;
};attachDomDemo$.build.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2.Node},ps:[{nm:'attrs',mt:'prm',$t:{t:m$3.Args}}],$cont:$9,pa:3,d:['thrillon_example.client','attachDomDemo','$m','build']};};
attachDomDemo$.toString=function(){return this.string.valueOf();};
})($9.$$.prototype);
}
return $9;
}
ex$.$init$attachDomDemo=$init$attachDomDemo;$init$attachDomDemo();var $n;
function attachDomDemo(){
if($n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'attachDomDemo\' before it was set"),'5:0-32:0','attachDom.ceylon');
if($n===undefined){$n=m$1.INIT$;$n=$init$attachDomDemo()();$n.$crtmm$=attachDomDemo.$crtmm$;}
return $n;
}
attachDomDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$attachDomDemo()},d:['thrillon_example.client','attachDomDemo']};};
$prop$getAttachDomDemo=attachDomDemo;
ex$.$prop$getAttachDomDemo=$prop$getAttachDomDemo;
function $o(){
var buttonDemo$=new $o.$$;m$3.Template(buttonDemo$);
buttonDemo$.$p5c730$q_=(0);
buttonDemo$.$prop$get$p5c730$q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['thrillon_example.client','buttonDemo','$at','count$pu870z']};}};
buttonDemo$.$prop$get$p5c730$q.get=function(){return $p5c730$q};
return buttonDemo$;
};$o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','buttonDemo']};};
function $init$buttonDemo(){
if($o.$$===undefined){
m$1.initTypeProto($o,'thrillon_example.client::buttonDemo',m$1.Basic,m$3.Template);
(function(buttonDemo$){
m$1.atr$(buttonDemo$,'$p5c730$q',function(){return this.$p5c730$q_;},function($r){return this.$p5c730$q_=$r;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$o,pa:1024,d:['thrillon_example.client','buttonDemo','$at','count$pu870z']};});
buttonDemo$.build=function($s){var buttonDemo$=this;
return ($t=m$1.tpl$([m$3.event().click(m$1.jsc$2((function($u){
($v=buttonDemo$.$p5c730$q,buttonDemo$.$p5c730$q=$v.successor,$v);
var $v;
}),[{nm:'evt',mt:'prm',$t:{t:m$4.Event}}],{Arguments$Callable:m$1.mtt$([{t:m$4.Event}]),Return$Callable:{t:m$1.Anything}}))]),$w=m$1.sarg$(function($x){switch($x){case 0:return (buttonDemo$.$p5c730$q.string+" clicks");}return m$1.finished();},undefined,{}),m$2.Button(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$t,$w));
var $t,$w;
};buttonDemo$.toString=function(){return this.string.valueOf();};
})($o.$$.prototype);
}
return $o;
}
ex$.$init$buttonDemo=$init$buttonDemo;$init$buttonDemo();var $y;
function buttonDemo(){
if($y===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'buttonDemo\' before it was set"),'4:0-16:0','button.ceylon');
if($y===undefined){$y=m$1.INIT$;$y=$init$buttonDemo()();$y.$crtmm$=buttonDemo.$crtmm$;}
return $y;
}
buttonDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$buttonDemo()},d:['thrillon_example.client','buttonDemo']};};
$prop$getButtonDemo=buttonDemo;
ex$.$prop$getButtonDemo=$prop$getButtonDemo;
function DemoDescription(example,title,description,demo,initialize,routes,demoDescription$){
$init$DemoDescription();
if(demoDescription$===undefined)demoDescription$=new DemoDescription.$$;
demoDescription$.example_=example;
demoDescription$.title_=title;
demoDescription$.description_=description;
demoDescription$.demo_=demo;
if(initialize===undefined){initialize=$init$DemoDescription().$defs$initialize(demoDescription$,example,title,description,demo,routes);}
demoDescription$.initialize_=initialize;
if(routes===undefined){routes=$init$DemoDescription().$defs$routes(demoDescription$,example,title,description,demo,initialize);}
demoDescription$.routes_=routes;
return demoDescription$;
}
DemoDescription.$defs$initialize=function(demoDescription$,example,title,description,demo,routes){return m$1.noop};DemoDescription.$defs$routes=function(demoDescription$,example,title,description,demo,initialize){return m$1.sarg$(function($z){switch($z){case 0:return example;}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}})};DemoDescription.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'example',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'title',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'description',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'demo',mt:'prm',$t:{t:m$3.Template},pa:1},{nm:'initialize',mt:'prm',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},pa:1},{nm:'routes',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}}},pa:1}],d:['thrillon_example.client','DemoDescription']};};
ex$.DemoDescription=DemoDescription;
function $init$DemoDescription(){
if(DemoDescription.$$===undefined){
m$1.initTypeProto(DemoDescription,'thrillon_example.client::DemoDescription',m$1.Basic);
(function(demoDescription$){
m$1.atr$(demoDescription$,'example',function(){return this.example_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','example']};});
m$1.atr$(demoDescription$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','title']};});
m$1.atr$(demoDescription$,'description',function(){return this.description_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','description']};});
m$1.atr$(demoDescription$,'demo',function(){return this.demo_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.Template},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','demo']};});
m$1.atr$(demoDescription$,'initialize',function(){return this.initialize_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','initialize']};});
m$1.atr$(demoDescription$,'routes',function(){return this.routes_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}}},$cont:DemoDescription,pa:1,d:['thrillon_example.client','DemoDescription','$at','routes']};});
demoDescription$.toString=function(){return this.string.valueOf();};
})(DemoDescription.$$.prototype);
}
return DemoDescription;
}
ex$.$init$DemoDescription=$init$DemoDescription;$init$DemoDescription();
function demoContent($10,$11,$12,$13,$14){return m$1.sarg$(function($15){switch($15){case 0:return ($16=m$1.sarg$(function($17){switch($17){case 0:return $10;}return m$1.finished();},undefined,{}),m$2.H3(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$16));case 1:return ($18=m$1.sarg$(function($19){switch($19){case 0:return $11;}return m$1.finished();},undefined,{Item$Content:{t:m$2.PhrasingCategory}}),m$2.P(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$18));case 2:return ($1a="accordion",$1b=m$1.tpl$([m$1.Entry("role","tablist",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$1c=m$1.sarg$(function($1d){switch($1d){case 0:return ($1e="card",$1f=m$1.sarg$(function($1g){switch($1g){case 0:return ($1h="card-header",$1i="sourceCodeHeader",$1j=m$1.tpl$([m$1.Entry("role","tab",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$1k=m$1.sarg$(function($1l){switch($1l){case 0:return ($1m="mb-0",$1n=m$1.sarg$(function($1o){switch($1o){case 0:return ($1p="#sourceCode",$1q=m$1.tpl$([m$1.Entry("data-toggle","collapse",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-expanded","true",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-controls","sourceCode",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$1r=m$1.sarg$(function($1s){switch($1s){case 0:return "Source code";}return m$1.finished();},undefined,{}),m$2.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1p,undefined,undefined,undefined,undefined,$1q,$1r));}return m$1.finished();},undefined,{}),m$2.H5(undefined,$1m,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1n));}return m$1.finished();},undefined,{}),m$2.Div($1i,$1h,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1j,$1k));case 1:return ($1t="collapse",$1u="sourceCode",$1v=m$1.tpl$([m$1.Entry("role","tabpanel",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-labelledby","sourceCodeHeader",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("data-parent","#accordion",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$1w=m$1.sarg$(function($1x){switch($1x){case 0:return ($1y="card-body",$1z=m$1.sarg$(function($20){switch($20){case 0:return ($21=m$1.sarg$(function($22){switch($22){case 0:return ($23="ceylon",$24=m$1.tpl$([m$3.lifecycle().create(m$1.jsc$2((function($25){
(typeof hljs==='undefined'||hljs===null?m$1.throwexc(m$1.Exception("Undefined or null reference: hljs"),'76:40-76:43','demoContent.ceylon'):hljs).highlightBlock($25.dom);
}),[{nm:'vnode',mt:'prm',$t:{t:m$3.VNode}}],{Arguments$Callable:m$1.mtt$([{t:m$3.VNode}]),Return$Callable:{t:m$1.Anything}}))]),$26=m$1.sarg$(function($27){switch($27){case 0:return $12;}return m$1.finished();},undefined,{}),m$2.Code(undefined,$23,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$24,$26));}return m$1.finished();},undefined,{}),m$2.Pre(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$21));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$1y,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1z));}return m$1.finished();},undefined,{}),m$2.Div($1u,$1t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1v,$1w));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$1e,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1f));case 1:return ($28="card",$29=m$1.sarg$(function($2a){switch($2a){case 0:return ($2b="card-header",$2c="resultHeader",$2d=m$1.tpl$([m$1.Entry("role","tab",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$2e=m$1.sarg$(function($2f){switch($2f){case 0:return ($2g="mb-0",$2h=m$1.sarg$(function($2i){switch($2i){case 0:return ($2j="#result",$2k=m$1.tpl$([m$1.Entry("data-toggle","collapse",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-expanded","true",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-controls","result",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$2l=m$1.sarg$(function($2m){switch($2m){case 0:return "Result";}return m$1.finished();},undefined,{}),m$2.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2j,undefined,undefined,undefined,undefined,$2k,$2l));}return m$1.finished();},undefined,{}),m$2.H5(undefined,$2g,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2h));}return m$1.finished();},undefined,{}),m$2.Div($2c,$2b,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2d,$2e));case 1:return ($2n="collapse show",$2o="result",$2p=m$1.tpl$([m$1.Entry("role","tabpanel",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-labelledby","resultHeader",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("data-parent","#accordion",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$2q=m$1.sarg$(function($2r){switch($2r){case 0:return ($2s="card-body",$2t=m$1.sarg$(function($2u){switch($2u){case 0:return m$3.WrappedComponent($13,m$1.jsc$2((function(){return $14;
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$3.Args}}));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$2s,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2t));}return m$1.finished();},undefined,{}),m$2.Div($2o,$2n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2p,$2q));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$28,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$29));}return m$1.finished();},undefined,{}),m$2.Div($1a,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$1b,$1c));}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$2.H3},{t:m$2.P},{t:m$2.Div}]),Absent$Iterable:{t:m$1.Nothing}});
var $16,$18,$1a,$1b,$1c,$1e,$1f,$1h,$1i,$1j,$1k,$1m,$1n,$1p,$1q,$1r,$1t,$1u,$1v,$1w,$1y,$1z,$21,$23,$24,$26,$28,$29,$2b,$2c,$2d,$2e,$2g,$2h,$2j,$2k,$2l,$2n,$2o,$2p,$2q,$2s,$2t;
};
demoContent.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.Content(),ps:[{nm:'title',mt:'prm',$t:{t:m$1.$_String}},{nm:'description',mt:'prm',$t:m$2.Content()},{nm:'sourceCode',mt:'prm',$t:{t:m$1.$_String}},{nm:'demoTemplate',mt:'prm',$t:{t:m$3.Template}},{nm:'attrs',mt:'prm',$t:{t:m$3.Args}}],d:['thrillon_example.client','demoContent']};};
function layout($2v){
var $2w=function($2x){{return ($2y=m$1.sarg$(function($2z){switch($2z){case 0:return ($30="container",$31=m$1.sarg$(function($32){switch($32){case 0:return ($33="navbar navbar-dark bg-primary",$34=m$1.sarg$(function($35){switch($35){case 0:return ($36="navbar-toggler",$37=m$2.ButtonType$c_button(),$38=m$1.tpl$([m$1.Entry("data-toggle","collapse",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("data-target","#navbarNavAltMarkup",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-controls","navbarNavAltMarkup",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-expanded","false",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}),m$1.Entry("aria-label","Toggle navigation",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$39=m$1.sarg$(function($3a){switch($3a){case 0:return ($3b="navbar-toggler-icon",m$2.Span(undefined,$3b,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined));}return m$1.finished();},undefined,{}),m$2.Button(undefined,$36,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$37,undefined,$38,$39));case 1:return ($3c="navbar-text",$3d=m$1.sarg$(function($3e){switch($3e){case 0:return ($3f=m$1.sarg$(function($3g){switch($3g){case 0:return "Demo Application - ";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3f));case 1:return "Use the menu to navigate through the examples";}return m$1.finished();},undefined,{}),m$2.H5(undefined,$3c,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3d));case 2:return ($3h="navbar-text",$3i=m$1.sarg$(function($3j){switch($3j){case 0:return ($3k="icon",$3l="https://github.com/davidfestal/herd.thrillon/tree/master/example",$3m=m$1.tpl$([m$1.Entry("role","button",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$3n=m$1.sarg$(function($3o){switch($3o){case 0:return ($3p=(32),$3q="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg",$3r="Open in GitHub",$3s="Open in GitHub",m$2.Img(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3r,undefined,$3s,undefined,$3p,undefined,undefined,$3q,undefined,undefined));}return m$1.finished();},undefined,{}),m$2.A(undefined,$3k,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3l,undefined,undefined,undefined,undefined,$3m,$3n));case 1:return ($3t="icon",$3u=("https://modules.ceylon-lang.org/repo/1/herd/thrillon/"+m$1.findModuleOrThrow$('thrillon_example.client','1.0.1').version+"/module-doc/api/index.html"),$3v=m$1.tpl$([m$1.Entry("role","button",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$3w=m$1.sarg$(function($3x){switch($3x){case 0:return ($3y=(32),$3z="http://design.jboss.org/ceylon/logo/final_ceylonherd/ceylonherd_logomark.svg",$40="Open Documentation in Ceylon Herd",$41="Open Documentation in Ceylon Herd",m$2.Img(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$40,undefined,$41,undefined,$3y,undefined,undefined,$3z,undefined,undefined));}return m$1.finished();},undefined,{}),m$2.A(undefined,$3t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3u,undefined,undefined,undefined,undefined,$3v,$3w));}return m$1.finished();},undefined,{}),m$2.Span(undefined,$3h,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$3i));case 3:return ($42="collapse navbar-collapse",$43="navbarNavAltMarkup",$44=m$1.sarg$(function($45){switch($45){case 0:return ($46="navbar-nav mr-auto mt-2 mt-lg-0",$47=m$1.sarg$(function($48){switch($48){case 0:return ($49="nav-item",$4a=m$1.sarg$(function($4b){switch($4b){case 0:return ($4c="nav-link",$4d="/",$4e=m$1.tpl$([m$3.router().$_link(true)]),$4f=m$1.sarg$(function($4g){switch($4g){case 0:return "Home";case 1:return ($4h="sr-only",$4i=m$1.sarg$(function($4j){switch($4j){case 0:return "(current)";}return m$1.finished();},undefined,{}),m$2.Span(undefined,$4h,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4i));}return m$1.finished();},undefined,{}),m$2.A(undefined,$4c,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4d,undefined,undefined,undefined,undefined,$4e,$4f));}return m$1.finished();},undefined,{}),m$2.Li(undefined,$49,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4a));}return m$1.finished();},function(){return m$1.for$(function(){
var $4k=$2v.iterator(),$4l=m$1.finished();
var n$4l=function(){return $4l=$4k.next();}
return function(){
if(n$4l()!==m$1.finished()){
var $4m=$4l,$4n=($4o="nav-item",$4p=m$1.sarg$(function($4q){switch($4q){case 0:return ($4r="nav-link",$4s=("/"+$4m.example),$4t=m$1.tpl$([m$3.router().$_link(true)]),$4u=m$1.sarg$(function($4v){switch($4v){case 0:return $4m.title;}return m$1.finished();},undefined,{}),m$2.A(undefined,$4r,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4s,undefined,undefined,undefined,undefined,$4t,$4u));}return m$1.finished();},undefined,{}),m$2.Li(undefined,$4o,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4p));
return $4n;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$2.Li},Absent$Iterable:{t:m$1.Null}});},{}),m$2.Ul(undefined,$46,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$47));}return m$1.finished();},undefined,{}),m$2.Div($43,$42,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$44));}return m$1.finished();},undefined,{}),m$2.Nav(undefined,$33,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$34));case 1:return ($4w="jumbotron",$4x=m$1.sarg$(function($4y){switch($4y){case 0:return ($4z="container",$50=m$1.sarg$(function($51){switch($51){case 0:return ($52="text-align: center",$53=m$1.sarg$(function($54){switch($54){case 0:return ($55="text-primary",$56=m$1.sarg$(function($57){switch($57){case 0:return "Thril";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,$55,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$56));case 1:return "ling web development with Cey";case 2:return ($58="text-primary",$59=m$1.sarg$(function($5a){switch($5a){case 0:return "lon";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,$58,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$59));}return m$1.finished();},undefined,{}),m$2.H2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$52,undefined,undefined,undefined,undefined,$53));case 1:return (m$2.Br(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined));case 2:return ($5b="text-muted",$5c="text-align: center",$5d=m$1.sarg$(function($5e){switch($5e){case 0:return "With ";case 1:return ($5f=m$1.sarg$(function($5g){switch($5g){case 0:return "Thrillon";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5f));case 2:return (m$2.Br(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined));case 3:return "Easily mix ";case 4:return ($5h=m$1.sarg$(function($5i){switch($5i){case 0:return "Mithril";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5h));case 5:return " and ";case 6:return ($5j=m$1.sarg$(function($5k){switch($5k){case 0:return "Ceylon Html DSL";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5j));case 7:return (m$2.Br(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined));case 8:return "And enjoy ";case 9:return ($5l=m$1.sarg$(function($5m){switch($5m){case 0:return ($5n=m$1.sarg$(function($5o){switch($5o){case 0:return "declarative";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5n));}return m$1.finished();},undefined,{}),m$2.I(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5l));case 10:return ", ";case 11:return ($5p=m$1.sarg$(function($5q){switch($5q){case 0:return ($5r=m$1.sarg$(function($5s){switch($5s){case 0:return "composable";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5r));}return m$1.finished();},undefined,{}),m$2.I(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5p));case 12:return " and ";case 13:return ($5t=m$1.sarg$(function($5u){switch($5u){case 0:return ($5v=m$1.sarg$(function($5w){switch($5w){case 0:return "typesafe";}return m$1.finished();},undefined,{}),m$2.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5v));}return m$1.finished();},undefined,{}),m$2.I(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5t));case 14:return " web development";}return m$1.finished();},undefined,{}),m$2.H4(undefined,$5b,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5c,undefined,undefined,undefined,undefined,$5d));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$4z,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$50));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$4w,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$4x));case 2:return ($5x="container",$5y=m$1.sarg$(function($5z){switch($5z){case 0:return $2x;}return m$1.finished();},undefined,{Item$Content:{t:m$2.FlowCategory}}),m$2.Div(undefined,$5x,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$5y));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$30,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$31));}return m$1.finished();},undefined,{}),m$2.Body(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$2y));
var $2y,$30,$31,$33,$34,$36,$37,$38,$39,$3b,$3c,$3d,$3f,$3h,$3i,$3k,$3l,$3m,$3n,$3p,$3q,$3r,$3s,$3t,$3u,$3v,$3w,$3y,$3z,$40,$41,$42,$43,$44,$46,$47,$49,$4a,$4c,$4d,$4e,$4f,$4h,$4i,$4o,$4p,$4r,$4s,$4t,$4u,$4w,$4x,$4z,$50,$52,$53,$55,$56,$58,$59,$5b,$5c,$5d,$5f,$5h,$5j,$5l,$5n,$5p,$5r,$5t,$5v,$5x,$5y;
}
};
$2w.$crtmm$=function(){return{ps:[{nm:'contents',mt:'prm',$t:m$2.Content()}],$t:{t:m$2.Body}};};return m$1.jsc$3(0,$2w);
};
layout.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[m$2.Content()]},Return$Callable:{t:m$2.Body}}},ps:[{nm:'demos',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:DemoDescription},Absent$Iterable:{t:m$1.Null}}}}],d:['thrillon_example.client','layout']};};
function $60(){
var watchedValueDemo$=new $60.$$;m$3.Template(watchedValueDemo$);
watchedValueDemo$.$p5c730$62_=m$3.ExistingWatchedValue(m$6.now().time(),undefined,{T$ExistingWatchedValue:{t:m$6.Time}});
watchedValueDemo$.$prop$get$p5c730$62={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3.ExistingWatchedValue,a:{T$ExistingWatchedValue:{t:m$6.Time}}},$cont:$60,d:['thrillon_example.client','watchedValueDemo','$at','currentTime$vm6a79']};}};
watchedValueDemo$.$prop$get$p5c730$62.get=function(){return $p5c730$62};
return watchedValueDemo$;
};$60.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','watchedValueDemo']};};
function $init$watchedValueDemo(){
if($60.$$===undefined){
m$1.initTypeProto($60,'thrillon_example.client::watchedValueDemo',m$1.Basic,m$3.Template);
(function(watchedValueDemo$){
m$1.atr$(watchedValueDemo$,'$p5c730$62',function(){return this.$p5c730$62_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.ExistingWatchedValue,a:{T$ExistingWatchedValue:{t:m$6.Time}}},$cont:$60,d:['thrillon_example.client','watchedValueDemo','$at','currentTime$vm6a79']};});
watchedValueDemo$.initialize=function(){
var watchedValueDemo$=this;
m$4.window().setInterval(m$1.jsc$2((function(){
watchedValueDemo$.$p5c730$62.set(m$6.now().time());
}),[],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}),300);
};watchedValueDemo$.initialize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:$60,pa:1,d:['thrillon_example.client','watchedValueDemo','$m','initialize']};};
watchedValueDemo$.build=function($63){var watchedValueDemo$=this;
return ($64="text-center",$65=m$1.sarg$(function($66){switch($66){case 0:return ("Time is : "+function(){var $67=watchedValueDemo$.$p5c730$62.$_get().string;return $67.$_substring(0,($67.size-(4)));
}());}return m$1.finished();},undefined,{}),m$2.H3(undefined,$64,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$65));
var $64,$65;
};watchedValueDemo$.toString=function(){return this.string.valueOf();};
})($60.$$.prototype);
}
return $60;
}
ex$.$init$watchedValueDemo=$init$watchedValueDemo;$init$watchedValueDemo();var $68;
function watchedValueDemo(){
if($68===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'watchedValueDemo\' before it was set"),'6:0-21:0','watchedValue.ceylon');
if($68===undefined){$68=m$1.INIT$;$68=$init$watchedValueDemo()();$68.$crtmm$=watchedValueDemo.$crtmm$;}
return $68;
}
watchedValueDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$watchedValueDemo()},d:['thrillon_example.client','watchedValueDemo']};};
$prop$getWatchedValueDemo=watchedValueDemo;
ex$.$prop$getWatchedValueDemo=$prop$getWatchedValueDemo;
function mountApplication(){
var $69;
m$1.asrt$2("",'20:2-20:38','run.ceylon',[m$1.nn$(($69=m$4.document$dom().body)),'exists root = document.body']);
var $6a=m$1.sarg$(function($6b){switch($6b){case 0:return DemoDescription("button","Event Handlers","\n##### _Automatic DOM update on events_\nThis example shows how a simple Ceylon value (`count`),\nincremented on button click,\nis *__directly__* and *__automatically__* updated and rendered\nin the HTML page DOM.\n",buttonDemo());case 1:return DemoDescription("watchedValue","Watched Values","This example shows how the displayed DOM text is updated *__automatically__*, when the current time is updated by a Javascript timer.\n\nNote that *only the text DOM node is updated*, thanks to the Virtual DOM diffing mechanism.",watchedValueDemo(),m$1.jsc$2(($6c=watchedValueDemo(),m$1.jsc$3($6c,$6c.initialize)),[],{}));case 2:return DemoDescription("list","Bidirectional input bindings","List automatically updated through a Ceylon comprehension.",listDemo());case 3:return DemoDescription("attachDom","Dom access","Access to the underlying Dom element associated to a Html node.",attachDomDemo());case 4:return DemoDescription("router","Routing","Routing example.",routerDemo(),m$1.noop,m$1.sarg$(m$1.$lai$(["router","router/:count"]),undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}},1));case 5:return DemoDescription("external","External Mithril component reuse","Embed the \'mithril-slider\' external component.",externalDemo());}return m$1.finished();},undefined,{Element$Iterable:{t:DemoDescription},Absent$Iterable:{t:m$1.Nothing}});
var $6c;
var $6d;
$6d=m$1.ndtc$((typeof marked==='undefined'||marked===null?m$1.throwexc(m$1.Exception("Undefined or null reference: marked"),'68:17-68:22','run.ceylon'):marked)(($6e=m$1.findModuleOrThrow$('herd.thrillon','1.0.1').annotations({Annotation$annotations:{t:m$1.DocAnnotation}}).$_map(m$1.jsc$2((function($6f){return $6f.description;
}),[{nm:'annot',mt:'prm',$t:{t:m$1.DocAnnotation}}],{Arguments$Callable:m$1.mtt$([{t:m$1.DocAnnotation}]),Return$Callable:{t:m$1.$_String}}),{Result$map:{t:m$1.$_String}}).first,m$1.nn$($6e)?$6e:"")),{t:m$1.$_String},'run.ceylon 68:17-69:109');
var $6e;
function $6g(){
var $6g$=new $6g.$$;m$3.Template($6g$);
return $6g$;
};$6g.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:mountApplication,sts:[{t:m$3.Template}],d:['thrillon_example.client','mountApplication','$o','homePage$5nll43']};};
function $init$$6g(){
if($6g.$$===undefined){
m$1.initTypeProto($6g,'thrillon_example.client::mountApplication.homePage',m$1.Basic,m$3.Template);
(function($6g$){
$6g$.build=function($6i){var $6g$=this;
return layout($6a)(m$2.Raw($6d));
};$6g$.toString=function(){return this.string.valueOf();};
})($6g.$$.prototype);
}
return $6g;
}
$init$$6g();var $6j;
function $6h(){
if($6j===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'homePage\' before it was set"),'72:2-74:2','run.ceylon');
if($6j===undefined){$6j=m$1.INIT$;$6j=$init$$6g()();$6j.$crtmm$=$6h.$crtmm$;}
return $6j;
}
$6h.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$6g()},$cont:mountApplication,d:['thrillon_example.client','mountApplication','$o','homePage$5nll44']};};
$prop$get$6g=$6h;
$6h();
function $6k($6l){
var $6m;
if(m$1.nn$(($6m=($6n=m$1.findModuleOrThrow$('thrillon_example.client','1.0.1').resourceByPath(("source/"+$6l+".ceylon")),m$1.nn$($6n)?$6n.uri:null)))){
if(m$4.window().location.string.startsWith("file:")){
return "";
}
else{
(typeof console==='undefined'||console===null?m$1.throwexc(m$1.Exception("Undefined or null reference: console"),'81:24-81:30','run.ceylon'):console).log($6m);
var $6o=m$4.newXMLHttpRequest();
$6o.open("GET",$6m,false);
$6o.send();
(typeof console==='undefined'||console===null?m$1.throwexc(m$1.Exception("Undefined or null reference: console"),'85:24-85:30','run.ceylon'):console).log($6o.statusText);
return $6o.responseText;
}
}
else{
return "";
}
var $6n;
};$6k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'example',mt:'prm',$t:{t:m$1.$_String}}],$cont:mountApplication,d:['thrillon_example.client','mountApplication','$m','getSourceCode$h321u4']};};
function $6p($6q){
var $6r;
$6r=m$1.ndtc$((typeof marked==='undefined'||marked===null?m$1.throwexc(m$1.Exception("Undefined or null reference: marked"),'96:23-96:28','run.ceylon'):marked)($6q),{t:m$1.$_String},'run.ceylon 96:23-96:41');
return m$2.Raw($6r);
};$6p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$2.Raw},ps:[{nm:'description',mt:'prm',$t:{t:m$1.$_String}}],$cont:mountApplication,d:['thrillon_example.client','mountApplication','$m','renderMarkdown$z4ovvh']};};
function $6s($6t,$6u){
$6u.initialize();
return m$1.for$(function(){
var $6v=$6u.routes.iterator(),$6w=m$1.finished();
var n$6w=function(){return $6w=$6v.next();}
return function(){
if(n$6w()!==m$1.finished()){
var $6x=$6w,$6y=m$1.Entry(("/"+$6x),(function(){function $6z(){
var $6z$=new $6z.$$;m$3.Template($6z$);
$6z$.$p5c730$70_=$6k($6u.example);
$6z$.$prop$get$p5c730$70={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6z,d:['thrillon_example.client','mountApplication','$at','sourceCode$6d6278']};}};
$6z$.$prop$get$p5c730$70.get=function(){return $p5c730$70};
return $6z$;
};$6z.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:$6s,sts:[{t:m$3.Template}],d:['thrillon_example.client','mountApplication']};};
function $init$$6z(){
if($6z.$$===undefined){
m$1.initTypeProto($6z,'thrillon_example.client::mountApplication.buildTemplate.anonymous#1',m$1.Basic,m$3.Template);
(function($6z$){
m$1.atr$($6z$,'$p5c730$70',function(){return this.$p5c730$70_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6z,d:['thrillon_example.client','mountApplication','$at','sourceCode$6d6278']};});
$6z$.build=function($71){var $6z$=this;
return m$1.compose(layout($6t),demoContent,{Y$compose:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.FlowCategory},{t:m$2.Node}]),{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.FlowCategory},{t:m$2.Node}])])}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.FlowCategory},{t:m$2.Node}])]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.FlowCategory},{t:m$2.Node}])]),Absent$Iterable:{t:m$1.Null}}}}},{t:m$1.Null}]),Args$compose:m$1.mtt$([{t:m$1.$_String},m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.PhrasingCategory},{t:m$2.Node}]),{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.PhrasingCategory},{t:m$2.Node}])])}},{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.PhrasingCategory},{t:m$2.Node}])]),Absent$Iterable:{t:m$1.Null}}},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$2.Raw},{t:m$2.Comment},{t:m$2.ProcessingInstruction},m$1.mit$([{t:m$2.PhrasingCategory},{t:m$2.Node}])]),Absent$Iterable:{t:m$1.Null}}}}},{t:m$1.Null}]),{t:m$1.$_String},{t:m$3.Template},{t:m$3.Args}]),X$compose:{t:m$2.Body}})($6u.title,$6p($6u.description),$6z$.$p5c730$70,$6u.demo,$71);
};$6z$.toString=function(){return this.string.valueOf();};
})($6z.$$.prototype);
}
return $6z;
}
$init$$6z();return $6z();}()),{Item$Entry:m$1.mit$([{t:m$1.Basic},{t:m$3.Template}]),Key$Entry:{t:m$1.$_String}});
return $6y;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mit$([{t:m$1.Basic},{t:m$3.Template}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}});
};$6s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'i',l:[{t:m$1.Basic},{t:m$3.Template}]},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}},ps:[{nm:'demos',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:DemoDescription},Absent$Iterable:{t:m$1.Null}}}},{nm:'demo',mt:'prm',$t:{t:DemoDescription}}],$cont:mountApplication,d:['thrillon_example.client','mountApplication','$m','buildTemplate$5ny582']};};
m$3.router().init($69,"/",m$1.sarg$(function($73){switch($73){case 0:return m$1.Entry("/",$6h(),{Item$Entry:{t:$6g},Key$Entry:{t:m$1.$_String}});}return m$1.finished();},function(){return m$1.for$(function(){
var $74=$6a.iterator(),$75=m$1.finished();
var n$75=function(){
if(($75=$74.next())!==m$1.finished()){
$76=$6s($6a,$75).iterator();
return $75;
}
return m$1.finished();
}
var $76=m$1.emptyIterator(),$77=m$1.finished();
var n$77=function(){return $77=$76.next();}
return function(){
do{
if(n$77()!==m$1.finished()){
var $78=$77,$79=$78;
return $79;
}
}while(n$75()!==m$1.finished());
return m$1.finished();
}
},{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mit$([{t:m$1.Basic},{t:m$3.Template}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}});},{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mit$([{t:m$1.Basic},{t:m$3.Template}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}));
}
ex$.mountApplication=mountApplication;
mountApplication.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],pa:1,an:function(){return[m$1.doc("Run the module `herd.thrillon`.")];},d:['thrillon_example.client','mountApplication']};};
function $7a(){
var externalDemo$=new $7a.$$;m$3.Template(externalDemo$);
externalDemo$.$prop$get$p5c730$7c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3.Component},$cont:$7a,pa:3,d:['thrillon_example.client','externalDemo','$at','theSlider$ynmxc7']};}};
externalDemo$.$p5c730$7c_=m$7.slider;
externalDemo$.$p5c730$7d_=externalDemo$.$p5c730$7e();
return externalDemo$;
};$7a.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','externalDemo']};};
function $init$externalDemo(){
if($7a.$$===undefined){
m$1.initTypeProto($7a,'thrillon_example.client::externalDemo',m$1.Basic,m$3.Template);
(function(externalDemo$){
m$1.atr$(externalDemo$,'$p5c730$7c',function(){return this.$p5c730$7c_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.Component},$cont:$7a,pa:3,d:['thrillon_example.client','externalDemo','$at','theSlider$ynmxc7']};});
function $p5c730$7e(){
var externalDemo$=this;
var $7e$=new this.$p5c730$7e.$$;$7e$.outer$=this;
m$3.Template($7e$);
return $7e$;
};$p5c730$7e.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:$7a,sts:[{t:m$3.Template}],d:['thrillon_example.client','externalDemo','$o','page$4w5571']};};
function $init$page(){
if($p5c730$7e.$$===undefined){
m$1.initTypeProto($p5c730$7e,'thrillon_example.client::externalDemo.page',m$1.Basic,m$3.Template);
$7a.$p5c730$7e=$p5c730$7e;
(function($7e$){
$7e$.build=function($7f){var $7e$=this,externalDemo$=$7e$.outer$;
return function(){var $7g=m$3.JsPath$jsutils(m$3.JsObject$jsutils($7f));return function(){var $7h,$7i;
if(m$1.nn$(($7h=$7g.$_get("data").str))&&m$1.nn$(($7i=($7j=m$1.findModuleOrThrow$('thrillon_example.client','1.0.1').resourceByPath(("images/"+$7h)),m$1.nn$($7j)?$7j.uri:null))))return ($7k=("height: 480px;\nwidth: 640px;\ntop: 0;\nfloat: left;\nbackground-image: url("+$7i+");"),m$2.Div(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$7k,undefined,undefined,undefined,undefined,undefined));else return ($7l=m$1.sarg$(function($7m){switch($7m){case 0:return "No image";}return m$1.finished();},undefined,{}),m$2.Div(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$7l))}();
var $7j,$7k,$7l;
}();
};$7e$.toString=function(){return this.string.valueOf();};
})($p5c730$7e.$$.prototype);
}
return $p5c730$7e;
}
externalDemo$.$init$page=$init$page;m$1.atr$(externalDemo$,'$p5c730$7d',function(){return this.$p5c730$7d_;},undefined,function(){return{mod:$CCMM$,$t:{t:$7a.$$.prototype.$init$page()},$cont:$7a,d:['thrillon_example.client','externalDemo','$o','page$4w5572']};});
externalDemo$.$p5c730$7e=$p5c730$7e;externalDemo$.$p5c730$7e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$7a.$$.prototype.$init$page()},$cont:$7a,d:['thrillon_example.client','externalDemo','$o','page$4w5572']};};
externalDemo$.build=function($7o){var externalDemo$=this;
return ($7p="margin: auto;\nmin-height: 480px;\nwidth: 640px;",$7q=m$1.sarg$(function($7r){switch($7r){case 0:return ($7s=externalDemo$.$p5c730$7c,$7t=m$1.jsc$2((function(){
return m$1.dre$$({pageData:(function(){return (typeof Promise==='undefined'||Promise===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Promise"),'40:24-40:30','external.ceylon'):Promise).resolve(["antelope-canyon-1192648-640x480.jpg","sun-burst-1478549-640x480.jpg"]);
}),page:(function($7u){return m$3.vnode(externalDemo$.$p5c730$7d,$7u,m$1.empty());
})},{t:m$3.JS},'external.ceylon 38:27-46:24');
}),[],{}),m$3.WrappedComponent($7s,$7t,undefined,undefined));}return m$1.finished();},undefined,{}),m$2.Div(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$7p,undefined,undefined,undefined,undefined,$7q));
var $7p,$7q,$7s,$7t;
};$init$page();
externalDemo$.toString=function(){return this.string.valueOf();};
})($7a.$$.prototype);
}
return $7a;
}
ex$.$init$externalDemo=$init$externalDemo;$init$externalDemo();var $7v;
function externalDemo(){
if($7v===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'externalDemo\' before it was set"),'6:0-51:0','external.ceylon');
if($7v===undefined){$7v=m$1.INIT$;$7v=$init$externalDemo()();$7v.$crtmm$=externalDemo.$crtmm$;}
return $7v;
}
externalDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$externalDemo()},d:['thrillon_example.client','externalDemo']};};
$prop$getExternalDemo=externalDemo;
ex$.$prop$getExternalDemo=$prop$getExternalDemo;
function $7w(){
var listDemo$=new $7w.$$;m$3.Template(listDemo$);
listDemo$.$p5c730$7y_=(m$8.ArrayList(undefined,undefined,undefined,{Element$ArrayList:m$1.mtt$([{t:m$1.$_String},{t:m$1.$_String}])}));
listDemo$.$prop$get$p5c730$7y={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$8.ArrayList,a:{Element$ArrayList:{t:'T',l:[{t:m$1.$_String},{t:m$1.$_String}]}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','persons$2ja0wg']};}};
listDemo$.$prop$get$p5c730$7y.get=function(){return $p5c730$7y};
listDemo$.$p5c730$7z_=m$3.InputTextValue(m$2.InputType$c_text(),m$3.WatchedValue(null,undefined,{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:{t:m$1.Null}}),{Exists$InputTextValue:{t:m$1.Null}});
listDemo$.$prop$get$p5c730$7z={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3.InputTextValue,a:{Exists$InputTextValue:{t:m$1.Null}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','name$pmp55h']};}};
listDemo$.$prop$get$p5c730$7z.get=function(){return $p5c730$7z};
listDemo$.$p5c730$80_=m$3.TextAreaValue(m$3.WatchedValue(null,undefined,{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:{t:m$1.Null}}),{Exists$TextAreaValue:{t:m$1.Null}});
listDemo$.$prop$get$p5c730$80={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3.TextAreaValue,a:{Exists$TextAreaValue:{t:m$1.Null}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','address$wz19sm']};}};
listDemo$.$prop$get$p5c730$80.get=function(){return $p5c730$80};
return listDemo$;
};$7w.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','listDemo']};};
function $init$listDemo(){
if($7w.$$===undefined){
m$1.initTypeProto($7w,'thrillon_example.client::listDemo',m$1.Basic,m$3.Template);
(function(listDemo$){
m$1.atr$(listDemo$,'$p5c730$7y',function(){return this.$p5c730$7y_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$8.ArrayList,a:{Element$ArrayList:{t:'T',l:[{t:m$1.$_String},{t:m$1.$_String}]}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','persons$2ja0wg']};});
m$1.atr$(listDemo$,'$p5c730$7z',function(){return this.$p5c730$7z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.InputTextValue,a:{Exists$InputTextValue:{t:m$1.Null}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','name$pmp55h']};});
m$1.atr$(listDemo$,'$p5c730$80',function(){return this.$p5c730$80_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$3.TextAreaValue,a:{Exists$TextAreaValue:{t:m$1.Null}}},$cont:$7w,d:['thrillon_example.client','listDemo','$at','address$wz19sm']};});
listDemo$.build=function($81){var listDemo$=this;
return ($82="container",$83=m$1.sarg$(function($84){switch($84){case 0:return ($85="row",$86=m$1.sarg$(function($87){switch($87){case 0:return ($88="col",$89=m$1.sarg$(function($8a){switch($8a){case 0:return ($8b=m$1.sarg$(function($8c){switch($8c){case 0:return ($8d="form-group",$8e=m$1.sarg$(function($8f){switch($8f){case 0:return ($8g=m$1.tpl$([m$1.Entry("for","nameInput",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$8h=m$1.sarg$(function($8i){switch($8i){case 0:return "Name";}return m$1.finished();},undefined,{}),m$2.Label(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8g,$8h));case 1:return ($8j="form-control",$8k="nameImput",$8l=listDemo$.$p5c730$7z.type,$8m=m$1.tpl$([listDemo$.$p5c730$7z.binder,m$1.Entry("placeholder","Enter your name",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),m$2.Input($8k,$8j,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8l,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8m));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$8d,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8e));case 1:return ($8n="form-group",$8o=m$1.sarg$(function($8p){switch($8p){case 0:return ($8q=m$1.tpl$([m$1.Entry("for","addressArea",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),$8r=m$1.sarg$(function($8s){switch($8s){case 0:return "Address";}return m$1.finished();},undefined,{}),m$2.Label(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8q,$8r));case 1:return ($8t="form-control",$8u="adressArea",$8v=m$1.tpl$([listDemo$.$p5c730$80.binder,m$1.Entry("placeholder","Enter your address",{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}})]),m$2.TextArea($8u,$8t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8v,undefined));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$8n,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8o));case 2:return ($8w="input-group input-group-lg",$8x=m$1.sarg$(function($8y){switch($8y){case 0:return ($8z="form-control",$90=m$1.sarg$(function($91){switch($91){case 0:return ($92=listDemo$.$p5c730$7z.val,m$1.nn$($92)?$92:"");}return m$1.finished();},function(){return m$1.for$(function(){
var $93;
if(m$1.nn$(($93=listDemo$.$p5c730$80.val))&&!$93.empty){
var $94=false;
return function(){
if($94) return m$1.finished();
$94=true;
return (" - "+$93)
};
}
return function(){return m$1.finished();}
},{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Null}});},{}),m$2.Label(undefined,$8z,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$90));case 1:return ($95="input-group-btn",$96=m$1.sarg$(function($97){switch($97){case 0:return ($98="btn btn-secondary",$99=m$2.ButtonType$c_button(),$9a=m$1.tpl$([m$3.event().click(m$1.jsc$2((function($9b){
var $9c,$9d;
if(m$1.nn$(($9c=listDemo$.$p5c730$7z.val))&&m$1.nn$(($9d=listDemo$.$p5c730$80.val))){
listDemo$.$p5c730$7y.add(m$1.tpl$([$9c,$9d]));
}
}),[{nm:'evt',mt:'prm',$t:{t:m$4.Event}}],{Arguments$Callable:m$1.mtt$([{t:m$4.Event}]),Return$Callable:{t:m$1.Anything}}))]),$9e=m$1.sarg$(function($9f){switch($9f){case 0:return "Create";}return m$1.finished();},undefined,{}),m$2.Button(undefined,$98,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$99,undefined,$9a,$9e));}return m$1.finished();},undefined,{}),m$2.Span(undefined,$95,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$96));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$8w,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8x));}return m$1.finished();},undefined,{}),m$2.Form(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$8b));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$88,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$89));case 1:return ($9g="col",$9h=m$1.sarg$(function($9i){switch($9i){case 0:return ($9j="table",$9k=m$1.sarg$(function($9l){switch($9l){case 0:return ($9m=m$1.sarg$(function($9n){switch($9n){case 0:return ($9o=m$1.sarg$(function($9p){switch($9p){case 0:return ($9q=m$1.sarg$(function($9r){switch($9r){case 0:return "Name";}return m$1.finished();},undefined,{}),m$2.Th(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9q));case 1:return ($9s=m$1.sarg$(function($9t){switch($9t){case 0:return "Address";}return m$1.finished();},undefined,{}),m$2.Th(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9s));}return m$1.finished();},undefined,{}),m$2.Tr(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9o));}return m$1.finished();},undefined,{}),m$2.THead(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9m));case 1:return ($9u=m$1.for$(function(){
var $9v=listDemo$.$p5c730$7y.iterator(),$9w=m$1.finished(),$9x,$9y;
var n$9w=function(){
if(($9w=$9v.next())!==m$1.finished()){
$9x=$9w.$_get(0),$9y=$9w.$_get(1);
return $9w;
}
return undefined;
}
return function(){
if(n$9w()!==undefined){
var $9z=$9w,$a1=$9x,$a2=$9y,$a0=($a3=m$1.sarg$(function($a4){switch($a4){case 0:return ($a5=m$1.sarg$(function($a6){switch($a6){case 0:return $a1;}return m$1.finished();},undefined,{}),m$2.Th(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$a5));case 1:return ($a7=m$1.sarg$(function($a8){switch($a8){case 0:return $a2;}return m$1.finished();},undefined,{}),m$2.Th(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$a7));}return m$1.finished();},undefined,{}),m$2.Tr(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$a3));
return $a0;
}
return m$1.finished();
}
},{Element$Iterable:{t:m$2.Tr},Absent$Iterable:{t:m$1.Null}}),m$2.TBody(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9u));}return m$1.finished();},undefined,{}),m$2.Table(undefined,$9j,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9k));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$9g,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$9h));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$85,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$86));}return m$1.finished();},undefined,{}),m$2.Div(undefined,$82,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$83));
var $82,$83,$85,$86,$88,$89,$8b,$8d,$8e,$8g,$8h,$8j,$8k,$8l,$8m,$8n,$8o,$8q,$8r,$8t,$8u,$8v,$8w,$8x,$8z,$90,$92,$95,$96,$98,$99,$9a,$9e,$9g,$9h,$9j,$9k,$9m,$9o,$9q,$9s,$9u,$a3,$a5,$a7;
};listDemo$.toString=function(){return this.string.valueOf();};
})($7w.$$.prototype);
}
return $7w;
}
ex$.$init$listDemo=$init$listDemo;$init$listDemo();var $a9;
function listDemo(){
if($a9===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listDemo\' before it was set"),'5:0-82:0','list.ceylon');
if($a9===undefined){$a9=m$1.INIT$;$a9=$init$listDemo()();$a9.$crtmm$=listDemo.$crtmm$;}
return $a9;
}
listDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$listDemo()},d:['thrillon_example.client','listDemo']};};
$prop$getListDemo=listDemo;
ex$.$prop$getListDemo=$prop$getListDemo;
function $aa(){
var routerDemo$=new $aa.$$;m$3.Template(routerDemo$);
routerDemo$.$prop$get$p5c730$ac={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.Button},$cont:$aa,pa:1152,d:['thrillon_example.client','routerDemo','$at','button$os8k49']};}};
routerDemo$.$prop$get$p5c730$ac.get=function(){return $p5c730$ac};
return routerDemo$;
};$aa.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:m$3.Template}],d:['thrillon_example.client','routerDemo']};};
function $init$routerDemo(){
if($aa.$$===undefined){
m$1.initTypeProto($aa,'thrillon_example.client::routerDemo',m$1.Basic,m$3.Template);
(function(routerDemo$){
m$1.atr$(routerDemo$,'$p5c730$ac',function(){if(this.$p5c730$ac_===undefined)throw m$1.InitializationError('Attempt to read uninitialized attribute \u00ab$p5c730$ac\u00bb');return this.$p5c730$ac_;},function($ad){return this.$p5c730$ac_=$ad;},function(){return{mod:$CCMM$,$t:{t:m$2.Button},$cont:$aa,pa:1152,d:['thrillon_example.client','routerDemo','$at','button$os8k49']};});
routerDemo$.build=function($ae){var routerDemo$=this;
return function(){var $af=m$1.Integer.$st$.parse(($ag=($ah=m$3.JsObject$jsutils($ae).$_get("count"),m$1.nn$($ah)?$ah.string:null),m$1.nn$($ag)?$ag:"0")),$ai=function(){var $aj;
if(m$1.is$(($aj=$af),{t:m$1.Integer}))return $aj;else return (0)}();return ($ak=m$1.tpl$([m$3.event().click(m$1.jsc$2((function($al){
(typeof console==='undefined'||console===null?m$1.throwexc(m$1.Exception("Undefined or null reference: console"),'14:24-14:30','router.ceylon'):console).log("route parameters =",m$3.router().parameters);
m$3.router().redirect("/router/:count",m$1.sarg$(function($am){switch($am){case 0:return m$1.Entry("count",(($ai+(1)).string),{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}));
}),[{nm:'evt',mt:'prm',$t:{t:m$4.Event}}],{Arguments$Callable:m$1.mtt$([{t:m$4.Event}]),Return$Callable:{t:m$1.Anything}}))]),$an=m$1.sarg$(function($ao){switch($ao){case 0:return ($ai.string+" clicks");}return m$1.finished();},undefined,{}),m$2.Button(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$ak,$an));
var $ak,$an;
}();
var $ag,$ah;
};routerDemo$.toString=function(){return this.string.valueOf();};
})($aa.$$.prototype);
}
return $aa;
}
ex$.$init$routerDemo=$init$routerDemo;$init$routerDemo();var $ap;
function routerDemo(){
if($ap===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'routerDemo\' before it was set"),'5:0-22:0','router.ceylon');
if($ap===undefined){$ap=m$1.INIT$;$ap=$init$routerDemo()();$ap.$crtmm$=routerDemo.$crtmm$;}
return $ap;
}
routerDemo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$routerDemo()},d:['thrillon_example.client','routerDemo']};};
$prop$getRouterDemo=routerDemo;
ex$.$prop$getRouterDemo=$prop$getRouterDemo;
ex$.$pkg$ans$thrillon_example$client=function(){return[m$1.shared()];};
ex$.$pkgunsh$thrillon_example$client={'attachDomDemo':$prop$getAttachDomDemo,'buttonDemo':$prop$getButtonDemo,'DemoDescription':DemoDescription,'demoContent':demoContent,'layout':layout,'watchedValueDemo':$prop$getWatchedValueDemo,'externalDemo':$prop$getExternalDemo,'listDemo':$prop$getListDemo,'routerDemo':$prop$getRouterDemo};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
