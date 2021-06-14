(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('herd/thrillon/1.0.1/herd.thrillon-1.0.1', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('herd/thrillon/1.0.1/herd.thrillon-1.0.1-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'herd.thrillon/1.0.1');
var m$2=require('ceylon/html/1.3.3/ceylon.html-1.3.3');
m$1.$addmod$(m$2,'ceylon.html/1.3.3');
var m$3=require('ceylon/interop/browser/1.3.3/ceylon.interop.browser-1.3.3');
m$1.$addmod$(m$3,'ceylon.interop.browser/1.3.3');
var m$4=(m$1.run$isNode())?m$1.npm$req('mithril','mithril/mithril.js',require):require('mithril/1.1.6/mithril-1.1.6');
m$1.$addmod$(m$4,'mithril/1.1.6');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.html/1.3.3':function(){return[m$1.shared()];},
'ceylon.interop.browser/1.3.3':function(){return[m$1.shared()];},
'mithril/1.1.6':[]
};};
function $5(){
var event$=new $5.$$;
return event$;
};$5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['herd.thrillon','event']};};
function $init$event(){
if($5.$$===undefined){
m$1.initTypeProto($5,'herd.thrillon::event',m$1.Basic);
(function(event$){
event$.custom=function($7,$8){var event$=this;
return m$1.Entry($7,VoidAttributeValueProvider$internal($8),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
event$.custom.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','custom']};};
event$.abort=function($9){var event$=this;
return event$.custom("onabort",$9);
};
event$.abort.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','abort']};};
event$.blur=function($a){var event$=this;
return event$.custom("onblur",$a);
};
event$.blur.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','blur']};};
event$.cancel=function($b){var event$=this;
return event$.custom("oncancel",$b);
};
event$.cancel.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','cancel']};};
event$.canplay=function($c){var event$=this;
return event$.custom("oncanplay",$c);
};
event$.canplay.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','canplay']};};
event$.canplaythrough=function($d){var event$=this;
return event$.custom("oncanplaythrough",$d);
};
event$.canplaythrough.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','canplaythrough']};};
event$.change=function($e){var event$=this;
return event$.custom("onchange",$e);
};
event$.change.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','change']};};
event$.click=function($f){var event$=this;
return event$.custom("onclick",$f);
};
event$.click.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','click']};};
event$.cuechange=function($g){var event$=this;
return event$.custom("oncuechange",$g);
};
event$.cuechange.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','cuechange']};};
event$.dblclick=function($h){var event$=this;
return event$.custom("ondblclick",$h);
};
event$.dblclick.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','dblclick']};};
event$.durationchange=function($i){var event$=this;
return event$.custom("ondurationchange",$i);
};
event$.durationchange.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','durationchange']};};
event$.emptied=function($j){var event$=this;
return event$.custom("onemptied",$j);
};
event$.emptied.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','emptied']};};
event$.ended=function($k){var event$=this;
return event$.custom("onended",$k);
};
event$.ended.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','ended']};};
event$.error=function($l){var event$=this;
return event$.custom("onerror",$l);
};
event$.error.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','error']};};
event$.focus=function($m){var event$=this;
return event$.custom("onfocus",$m);
};
event$.focus.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','focus']};};
event$.input=function($n){var event$=this;
return event$.custom("oninput",$n);
};
event$.input.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','input']};};
event$.invalid=function($o){var event$=this;
return event$.custom("oninvalid",$o);
};
event$.invalid.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','invalid']};};
event$.keydown=function($p){var event$=this;
return event$.custom("onkeydown",$p);
};
event$.keydown.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','keydown']};};
event$.keypress=function($q){var event$=this;
return event$.custom("onkeypress",$q);
};
event$.keypress.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','keypress']};};
event$.keyup=function($r){var event$=this;
return event$.custom("onkeyup",$r);
};
event$.keyup.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','keyup']};};
event$.load=function($s){var event$=this;
return event$.custom("onload",$s);
};
event$.load.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','load']};};
event$.loadeddata=function($t){var event$=this;
return event$.custom("onloadeddata",$t);
};
event$.loadeddata.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','loadeddata']};};
event$.loadedmetadata=function($u){var event$=this;
return event$.custom("onloadedmetadata",$u);
};
event$.loadedmetadata.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','loadedmetadata']};};
event$.loadstart=function($v){var event$=this;
return event$.custom("onloadstart",$v);
};
event$.loadstart.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','loadstart']};};
event$.mousedown=function($w){var event$=this;
return event$.custom("onmousedown",$w);
};
event$.mousedown.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mousedown']};};
event$.mouseenter=function($x){var event$=this;
return event$.custom("onmouseenter",$x);
};
event$.mouseenter.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mouseenter']};};
event$.mouseleave=function($y){var event$=this;
return event$.custom("onmouseleave",$y);
};
event$.mouseleave.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mouseleave']};};
event$.mousemove=function($z){var event$=this;
return event$.custom("onmousemove",$z);
};
event$.mousemove.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mousemove']};};
event$.mouseout=function($10){var event$=this;
return event$.custom("onmouseout",$10);
};
event$.mouseout.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mouseout']};};
event$.mouseover=function($11){var event$=this;
return event$.custom("onmouseover",$11);
};
event$.mouseover.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mouseover']};};
event$.mouseup=function($12){var event$=this;
return event$.custom("onmouseup",$12);
};
event$.mouseup.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mouseup']};};
event$.mousewheel=function($13){var event$=this;
return event$.custom("onmousewheel",$13);
};
event$.mousewheel.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','mousewheel']};};
event$.pause=function($14){var event$=this;
return event$.custom("onpause",$14);
};
event$.pause.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','pause']};};
event$.play=function($15){var event$=this;
return event$.custom("onplay",$15);
};
event$.play.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','play']};};
event$.playing=function($16){var event$=this;
return event$.custom("onplaying",$16);
};
event$.playing.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','playing']};};
event$.progress=function($17){var event$=this;
return event$.custom("onprogress",$17);
};
event$.progress.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','progress']};};
event$.ratechange=function($18){var event$=this;
return event$.custom("onratechange",$18);
};
event$.ratechange.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','ratechange']};};
event$.reset=function($19){var event$=this;
return event$.custom("onreset",$19);
};
event$.reset.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','reset']};};
event$.resize=function($1a){var event$=this;
return event$.custom("onresize",$1a);
};
event$.resize.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','resize']};};
event$.scroll=function($1b){var event$=this;
return event$.custom("onscroll",$1b);
};
event$.scroll.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','scroll']};};
event$.seeked=function($1c){var event$=this;
return event$.custom("onseeked",$1c);
};
event$.seeked.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','seeked']};};
event$.seeking=function($1d){var event$=this;
return event$.custom("onseeking",$1d);
};
event$.seeking.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','seeking']};};
event$.select=function($1e){var event$=this;
return event$.custom("onselect",$1e);
};
event$.select.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','select']};};
event$.show=function($1f){var event$=this;
return event$.custom("onshow",$1f);
};
event$.show.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','show']};};
event$.stalled=function($1g){var event$=this;
return event$.custom("onstalled",$1g);
};
event$.stalled.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','stalled']};};
event$.submit=function($1h){var event$=this;
return event$.custom("onsubmit",$1h);
};
event$.submit.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','submit']};};
event$.suspend=function($1i){var event$=this;
return event$.custom("onsuspend",$1i);
};
event$.suspend.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','suspend']};};
event$.timeupdate=function($1j){var event$=this;
return event$.custom("ontimeupdate",$1j);
};
event$.timeupdate.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','timeupdate']};};
event$.toggle=function($1k){var event$=this;
return event$.custom("ontoggle",$1k);
};
event$.toggle.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','toggle']};};
event$.volumechange=function($1l){var event$=this;
return event$.custom("onvolumechange",$1l);
};
event$.volumechange.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','volumechange']};};
event$.waiting=function($1m){var event$=this;
return event$.custom("onwaiting",$1m);
};
event$.waiting.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:$5,pa:1,d:['herd.thrillon','event','$m','waiting']};};
event$.toString=function(){return this.string.valueOf();};
})($5.$$.prototype);
}
return $5;
}
ex$.$init$event=$init$event;$init$event();var $1n;
function event(){
if($1n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'event\' before it was set"),'12:0-200:0','event.ceylon');
if($1n===undefined){$1n=m$1.INIT$;$1n=$init$event()();$1n.$crtmm$=event.$crtmm$;}
return $1n;
}
ex$.event=event;
event.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$event()},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:event')];},d:['herd.thrillon','event']};};
$prop$getEvent=event;
ex$.$prop$getEvent=$prop$getEvent;
function BoundValue($$targs$$,boundValue$){
m$1.set_type_args(boundValue$,$$targs$$,BoundValue);
}
BoundValue.$crtmm$=function(){return{mod:$CCMM$,tp:{T$BoundValue:{sts:[{t:m$1.$_Object}]},Exists$BoundValue:{sts:[{t:m$1.Null}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:BoundValue')];},d:['herd.thrillon','BoundValue']};};
ex$.BoundValue=BoundValue;
function $init$BoundValue(){
if(BoundValue.$$===undefined){
m$1.initTypeProtoI(BoundValue,'herd.thrillon::BoundValue');
(function(boundValue$){
boundValue$.$prop$getWatchedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:WatchedValue,a:{T$WatchedValue:'T$BoundValue',Exists$WatchedValue:'Exists$BoundValue'}},$cont:BoundValue,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:BoundValue:$at:watchedValue')];},d:['herd.thrillon','BoundValue','$at','watchedValue']};}};
m$1.atr$(boundValue$,'val',function(){
var boundValue$=this;
return boundValue$.watchedValue.val;
},function($1o){
var boundValue$=this;
($1p=boundValue$.watchedValue,$1p.val=$1o,$1p.val);
var $1p;
},function(){return{mod:$CCMM$,$t:{t:'u',l:['T$BoundValue','Exists$BoundValue']},$cont:BoundValue,pa:1025,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:BoundValue:$at:val')];},d:['herd.thrillon','BoundValue','$at','val']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:BoundValue,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:BoundValue:$at:val:$set')];},d:['herd.thrillon','BoundValue','$at','val','$set']};});
boundValue$.$prop$getBinder={$crtmm$:function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:BoundValue,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:BoundValue:$at:binder')];},d:['herd.thrillon','BoundValue','$at','binder']};}};
m$1.atr$(boundValue$,'string',function(){
var boundValue$=this;
return ($1q=($1r=boundValue$.val,m$1.nn$($1r)?$1r.string:null),m$1.nn$($1q)?$1q:"");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BoundValue,pa:3,d:['herd.thrillon','BoundValue','$at','string']};});
boundValue$.toString=function(){return this.string.valueOf();};
})(BoundValue.$$.prototype);
}
return BoundValue;
}
ex$.$init$BoundValue=$init$BoundValue;$init$BoundValue();
var $1q,$1r;
function TextAreaValue(watchedValue,$$targs$$,textAreaValue$){
$init$TextAreaValue();
if(textAreaValue$===undefined)textAreaValue$=new TextAreaValue.$$;
m$1.set_type_args(textAreaValue$,$$targs$$);
textAreaValue$.$p6sl07$1s_=watchedValue;
BoundValue({T$BoundValue:{t:m$1.$_String},Exists$BoundValue:$$targs$$.Exists$TextAreaValue},textAreaValue$);
return textAreaValue$;
}
TextAreaValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'watchedValue',mt:'prm',$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$TextAreaValue'}},pa:3,an:function(){return[m$1.doc("The watched value this bound value is based on")];}}],tp:{Exists$TextAreaValue:{sts:[{t:m$1.Null}]}},sts:[{t:BoundValue,a:{T$BoundValue:{t:m$1.$_String},Exists$BoundValue:'Exists$TextAreaValue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:TextAreaValue'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'herd.thrillon'),BoundValue)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['herd.thrillon','TextAreaValue']};};
ex$.TextAreaValue=TextAreaValue;
function $init$TextAreaValue(){
if(TextAreaValue.$$===undefined){
m$1.initTypeProto(TextAreaValue,'herd.thrillon::TextAreaValue',m$1.Basic,$init$BoundValue());
(function(textAreaValue$){
m$1.atr$(textAreaValue$,'watchedValue',function(){return this.$p6sl07$1s_;},undefined,function(){return{mod:$CCMM$,$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$TextAreaValue'}},$cont:TextAreaValue,pa:3,an:function(){return[m$1.doc("The watched value this bound value is based on")];},d:['herd.thrillon','TextAreaValue','$at','watchedValue']};});
m$1.atr$(textAreaValue$,'binder',function(){
var textAreaValue$=this;
return ($1t=textAreaValue$.watchedValue,$1u="value",$1v=m$1.jsc$2((function($1w){return event().input($1w);
}),[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],{}),$1x=m$1.jsc$2((function($1y){
var $1z=$1y;
return m$1.ndtc$(($20=$1z.value,m$1.nn$($20)?$20:""),{t:m$1.$_String},'BoundValue.ceylon 114:23-114:45');
var $20;
}),[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Character},Absent$Iterable:{t:m$1.Null}}}]),Return$Callable:{t:m$1.$_String}}),buildBinder($1t,$1u,$1v,$1x,{Exists$buildBinder:textAreaValue$.$$targs$$.Exists$TextAreaValue,T$buildBinder:{t:m$1.$_String}}));
},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:TextAreaValue,pa:3,d:['herd.thrillon','TextAreaValue','$at','binder']};});
textAreaValue$.toString=function(){return this.string.valueOf();};
})(TextAreaValue.$$.prototype);
}
return TextAreaValue;
}
ex$.$init$TextAreaValue=$init$TextAreaValue;$init$TextAreaValue();
var $1t,$1u,$1v,$1x;
function SelectValue(watchedValue,$$targs$$,selectValue$){
$init$SelectValue();
if(selectValue$===undefined)selectValue$=new SelectValue.$$;
m$1.set_type_args(selectValue$,$$targs$$);
selectValue$.$p6sl07$21_=watchedValue;
BoundValue({T$BoundValue:{t:m$1.$_String},Exists$BoundValue:$$targs$$.Exists$SelectValue},selectValue$);
return selectValue$;
}
SelectValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'watchedValue',mt:'prm',$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$SelectValue'}},pa:3}],tp:{Exists$SelectValue:{sts:[{t:m$1.Null}]}},sts:[{t:BoundValue,a:{T$BoundValue:{t:m$1.$_String},Exists$BoundValue:'Exists$SelectValue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:SelectValue')];},d:['herd.thrillon','SelectValue']};};
ex$.SelectValue=SelectValue;
function $init$SelectValue(){
if(SelectValue.$$===undefined){
m$1.initTypeProto(SelectValue,'herd.thrillon::SelectValue',m$1.Basic,$init$BoundValue());
(function(selectValue$){
m$1.atr$(selectValue$,'watchedValue',function(){return this.$p6sl07$21_;},undefined,function(){return{mod:$CCMM$,$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$SelectValue'}},$cont:SelectValue,pa:3,d:['herd.thrillon','SelectValue','$at','watchedValue']};});
m$1.atr$(selectValue$,'binder',function(){
var selectValue$=this;
return ($22=selectValue$.watchedValue,$23="value",$24=m$1.jsc$2((function($25){return event().change($25);
}),[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],{}),$26=m$1.jsc$2((function($27){
var $28=$27;
return m$1.ndtc$(($29=$28.value,m$1.nn$($29)?$29:""),{t:m$1.$_String},'BoundValue.ceylon 166:23-166:45');
var $29;
}),[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Character},Absent$Iterable:{t:m$1.Null}}}]),Return$Callable:{t:m$1.$_String}}),buildBinder($22,$23,$24,$26,{Exists$buildBinder:selectValue$.$$targs$$.Exists$SelectValue,T$buildBinder:{t:m$1.$_String}}));
},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:SelectValue,pa:3,d:['herd.thrillon','SelectValue','$at','binder']};});
selectValue$.toString=function(){return this.string.valueOf();};
})(SelectValue.$$.prototype);
}
return SelectValue;
}
ex$.$init$SelectValue=$init$SelectValue;$init$SelectValue();
var $22,$23,$24,$26;
function InputBoundValue(type,$$targs$$,inputBoundValue$){
$init$InputBoundValue();
if(inputBoundValue$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class herd.thrillon::InputBoundValue"),'?','?')
m$1.set_type_args(inputBoundValue$,$$targs$$);
inputBoundValue$.type_=type;
BoundValue({T$BoundValue:$$targs$$.T$InputBoundValue,Exists$BoundValue:$$targs$$.Exists$InputBoundValue},inputBoundValue$);
return inputBoundValue$;
}
InputBoundValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'type',mt:'prm',$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]},pa:1}],tp:{T$InputBoundValue:{sts:[{t:m$1.$_Object}]},Exists$InputBoundValue:{sts:[{t:m$1.Null}]}},sts:[{t:BoundValue,a:{T$BoundValue:'T$InputBoundValue',Exists$BoundValue:'Exists$InputBoundValue'}}],pa:257,d:['herd.thrillon','InputBoundValue']};};
ex$.InputBoundValue=InputBoundValue;
function $init$InputBoundValue(){
if(InputBoundValue.$$===undefined){
m$1.initTypeProto(InputBoundValue,'herd.thrillon::InputBoundValue',m$1.Basic,$init$BoundValue());
(function(inputBoundValue$){
m$1.atr$(inputBoundValue$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]},$cont:InputBoundValue,pa:1,d:['herd.thrillon','InputBoundValue','$at','type']};});
inputBoundValue$.extractInputType=function($2a){var inputBoundValue$=this;
return function($2b){if(m$1.is$($2b,m$1.mut$([{t:m$2.InputType},{t:m$1.Null},{t:m$1.$_String}])))return $2b;else return inputBoundValue$.extractInputType($2b())}($2a);
};
inputBoundValue$.extractInputType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$2.InputType},{t:m$1.$_String},{t:m$1.Null}]},ps:[{nm:'attribute',mt:'prm',$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]}}],$cont:InputBoundValue,pa:1,an:function(){return[m$1.restricted()];},d:['herd.thrillon','InputBoundValue','$m','extractInputType']};};
inputBoundValue$.toString=function(){return this.string.valueOf();};
})(InputBoundValue.$$.prototype);
}
return InputBoundValue;
}
ex$.$init$InputBoundValue=$init$InputBoundValue;$init$InputBoundValue();
function InputTextValue($p6sl07$2c,watchedValue,$$targs$$,inputTextValue$){
$init$InputTextValue();
if(inputTextValue$===undefined)inputTextValue$=new InputTextValue.$$;
m$1.set_type_args(inputTextValue$,$$targs$$);
inputTextValue$.$p6sl07$2c_=$p6sl07$2c;
inputTextValue$.$p6sl07$2d_=watchedValue;
BoundValue({T$BoundValue:{t:m$1.$_String},Exists$BoundValue:$$targs$$.Exists$InputTextValue},inputTextValue$);
InputBoundValue(inputTextValue$.$p6sl07$2c,{T$InputBoundValue:{t:m$1.$_String},Exists$InputBoundValue:inputTextValue$.$$targs$$.Exists$InputTextValue},inputTextValue$);
return inputTextValue$;
}
InputTextValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputBoundValue,a:{T$InputBoundValue:{t:m$1.$_String},Exists$InputBoundValue:'Exists$InputTextValue'}},ps:[{nm:'type',mt:'prm',$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]},an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:InputTextValue:$at:type$uyj9el')];}},{nm:'watchedValue',mt:'prm',$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$InputTextValue'}},pa:3,an:function(){return[m$1.doc("The watched value this bound value is based on")];}}],tp:{Exists$InputTextValue:{sts:[{t:m$1.Null}]}},sts:[{t:BoundValue,a:{T$BoundValue:{t:m$1.$_String},Exists$BoundValue:'Exists$InputTextValue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:InputTextValue')];},d:['herd.thrillon','InputTextValue']};};
ex$.InputTextValue=InputTextValue;
function $init$InputTextValue(){
if(InputTextValue.$$===undefined){
m$1.initTypeProto(InputTextValue,'herd.thrillon::InputTextValue',$init$BoundValue(),$init$InputBoundValue());
(function(inputTextValue$){
m$1.atr$(inputTextValue$,'$p6sl07$2c',function(){return this.$p6sl07$2c_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]},$cont:InputTextValue,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:InputTextValue:$at:type$uyj9el')];},d:['herd.thrillon','InputTextValue','$at','type$uyj9el']};});
m$1.atr$(inputTextValue$,'watchedValue',function(){return this.$p6sl07$2d_;},undefined,function(){return{mod:$CCMM$,$t:{t:WatchedValue,a:{T$WatchedValue:{t:m$1.$_String},Exists$WatchedValue:'Exists$InputTextValue'}},$cont:InputTextValue,pa:3,an:function(){return[m$1.doc("The watched value this bound value is based on")];},d:['herd.thrillon','InputTextValue','$at','watchedValue']};});
m$1.atr$(inputTextValue$,'binder',function(){
var inputTextValue$=this;
return ($2e=inputTextValue$.watchedValue,$2f="value",$2g=m$1.jsc$2((function($2h){return function($2i){if($2i===m$2.InputType$c_radio() || $2i===m$2.InputType$c_checkbox() || m$1.nn$($2i)&&"radio".equals($2i) || m$1.nn$($2i)&&"checkbox".equals($2i))return event().change($2h);else return event().input($2h)}(inputTextValue$.extractInputType(inputTextValue$.$p6sl07$2c));
}),[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],{}),$2j=m$1.jsc$2((function($2k){
var $2l=$2k;
return m$1.ndtc$(($2m=$2l.value,m$1.nn$($2m)?$2m:""),{t:m$1.$_String},'BoundValue.ceylon 232:23-232:45');
var $2m;
}),[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Character},Absent$Iterable:{t:m$1.Null}}}]),Return$Callable:{t:m$1.$_String}}),buildBinder($2e,$2f,$2g,$2j,{Exists$buildBinder:inputTextValue$.$$targs$$.Exists$InputTextValue,T$buildBinder:{t:m$1.$_String}}));
},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:InputTextValue,pa:3,d:['herd.thrillon','InputTextValue','$at','binder']};});
inputTextValue$.toString=function(){return this.string.valueOf();};
})(InputTextValue.$$.prototype);
}
return InputTextValue;
}
ex$.$init$InputTextValue=$init$InputTextValue;$init$InputTextValue();
var $2e,$2f,$2g,$2j;
function InputCheckedStatus($p6sl07$2n,watchedValue,inputCheckedStatus$){
$init$InputCheckedStatus();
if(inputCheckedStatus$===undefined)inputCheckedStatus$=new InputCheckedStatus.$$;
inputCheckedStatus$.$p6sl07$2n_=$p6sl07$2n;
inputCheckedStatus$.$p6sl07$2o_=watchedValue;
BoundValue({T$BoundValue:{t:m$1.$_Boolean},Exists$BoundValue:{t:m$1.Nothing}},inputCheckedStatus$);
InputBoundValue(inputCheckedStatus$.$p6sl07$2n,{T$InputBoundValue:{t:m$1.$_Boolean},Exists$InputBoundValue:{t:m$1.Nothing}},inputCheckedStatus$);
return inputCheckedStatus$;
}
InputCheckedStatus.$crtmm$=function(){return{mod:$CCMM$,'super':{t:InputBoundValue,a:{T$InputBoundValue:{t:m$1.$_Boolean},Exists$InputBoundValue:{t:m$1.Nothing}}},ps:[{nm:'type',mt:'prm',$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]}},{nm:'watchedValue',mt:'prm',$t:{t:ExistingWatchedValue,a:{T$ExistingWatchedValue:{t:m$1.$_Boolean}}},pa:3}],sts:[{t:BoundValue,a:{T$BoundValue:{t:m$1.$_Boolean},Exists$BoundValue:{t:m$1.Nothing}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:InputCheckedStatus')];},d:['herd.thrillon','InputCheckedStatus']};};
ex$.InputCheckedStatus=InputCheckedStatus;
function $init$InputCheckedStatus(){
if(InputCheckedStatus.$$===undefined){
m$1.initTypeProto(InputCheckedStatus,'herd.thrillon::InputCheckedStatus',$init$BoundValue(),$init$InputBoundValue());
(function(inputCheckedStatus$){
m$1.atr$(inputCheckedStatus$,'$p6sl07$2n',function(){return this.$p6sl07$2n_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[m$2.Attribute(),m$2.Attribute()]},$cont:InputCheckedStatus,d:['herd.thrillon','InputCheckedStatus','$at','type$8qbubk']};});
m$1.atr$(inputCheckedStatus$,'watchedValue',function(){return this.$p6sl07$2o_;},undefined,function(){return{mod:$CCMM$,$t:{t:ExistingWatchedValue,a:{T$ExistingWatchedValue:{t:m$1.$_Boolean}}},$cont:InputCheckedStatus,pa:3,d:['herd.thrillon','InputCheckedStatus','$at','watchedValue']};});
m$1.atr$(inputCheckedStatus$,'binder',function(){
var inputCheckedStatus$=this;
return ($2p=inputCheckedStatus$.watchedValue,$2q="checked",$2r=m$1.jsc$2((function($2s){
var $2t=inputCheckedStatus$.extractInputType(inputCheckedStatus$.$p6sl07$2n);
if($2t===m$2.InputType$c_radio() || $2t===m$2.InputType$c_checkbox() || m$1.nn$($2t)&&"radio".equals($2t) || m$1.nn$($2t)&&"checkbox".equals($2t)) {
return event().change($2s);
}
else{
(typeof console==='undefined'||console===null?m$1.throwexc(m$1.Exception("Undefined or null reference: console"),'281:26-281:32','BoundValue.ceylon'):console).log("[Thrillon] WARNING: Trying to bind the \'checked\' attribute on input of type:",(typeof inputType==='undefined'||inputType===null?m$1.throwexc(m$1.Exception("Undefined or null reference: inputType"),'281:118-281:126','BoundValue.ceylon'):inputType).attributeValue);
return m$1.Entry("onchange",null,{Item$Entry:{t:m$1.$init$$_null()},Key$Entry:{t:m$1.$_String}});
}
}),[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],{}),$2u=m$1.jsc$2((function($2v){
var $2w;
var $2x=$2v;
$2w=m$1.ndtc$($2x.checked,{t:m$1.$_Boolean},'BoundValue.ceylon 290:26-290:40');
return $2w;
}),[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}],{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_Boolean}}),buildBinder($2p,$2q,$2r,$2u,{Exists$buildBinder:{t:m$1.Nothing},T$buildBinder:{t:m$1.$_Boolean}}));
},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:InputCheckedStatus,pa:3,d:['herd.thrillon','InputCheckedStatus','$at','binder']};});
inputCheckedStatus$.toString=function(){return this.string.valueOf();};
})(InputCheckedStatus.$$.prototype);
}
return InputCheckedStatus;
}
ex$.$init$InputCheckedStatus=$init$InputCheckedStatus;$init$InputCheckedStatus();
var $2p,$2q,$2r,$2u;
function buildBinder($2y,$2z,$30,$31,$ls6c9d$){return m$1.Entry(($2z+"_thrillon_binder"),BinderAttributeValueProvider$internal($2y,$2z,$30,$31,{T$BinderAttributeValueProvider:$ls6c9d$.T$buildBinder,Exists$BinderAttributeValueProvider:$ls6c9d$.Exists$buildBinder}),{Item$Entry:{t:BinderAttributeValueProvider$internal,a:{Exists$BinderAttributeValueProvider:$ls6c9d$.Exists$buildBinder,T$BinderAttributeValueProvider:$ls6c9d$.T$buildBinder}},Key$Entry:{t:m$1.$_String}});
};
buildBinder.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'watchedValue',mt:'prm',$t:{t:WatchedValue,a:{T$WatchedValue:'T$buildBinder',Exists$WatchedValue:'Exists$buildBinder'}}},{nm:'boundAttributeName',mt:'prm',$t:{t:m$1.$_String}},{nm:'updateEvent',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}}]},Return$Callable:m$2.AttributeEntry()}},$rt:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}]},{nm:'extractFromDom',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.HTMLElement}]},Return$Callable:{t:'u',l:['T$buildBinder','Exists$buildBinder']}}},$rt:{t:'u',l:['T$buildBinder','Exists$buildBinder']},ps:[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}]}],tp:{T$buildBinder:{of:[{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_String}]},Exists$buildBinder:{sts:[{t:m$1.Null}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:buildBinder')];},d:['herd.thrillon','buildBinder']};};
ex$.buildBinder=buildBinder;
function WrappedComponent(component,componentArgs,$p6sl07$32,$p6sl07$33,wrappedComponent$){
$init$WrappedComponent();
if(wrappedComponent$===undefined)wrappedComponent$=new WrappedComponent.$$;
wrappedComponent$.component_=component;
if(componentArgs===undefined){componentArgs=$init$WrappedComponent().$defs$componentArgs(wrappedComponent$,component,$p6sl07$32,$p6sl07$33);}
wrappedComponent$.componentArgs_=componentArgs;
if($p6sl07$32===undefined){$p6sl07$32=$init$WrappedComponent().$defs$attributes(wrappedComponent$,component,componentArgs,$p6sl07$33);}
wrappedComponent$.$p6sl07$32_=$p6sl07$32;
if($p6sl07$33===undefined){$p6sl07$33=$init$WrappedComponent().$defs$children(wrappedComponent$,component,componentArgs,$p6sl07$32);}
wrappedComponent$.$p6sl07$33_=$p6sl07$33;
m$2.FlowCategory(wrappedComponent$);
m$2.Element("mithrilComponent",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,m$1.empty(),$p6sl07$33,wrappedComponent$);
return wrappedComponent$;
}
WrappedComponent.$defs$componentArgs=function(wrappedComponent$,component,$p6sl07$32,$p6sl07$33){return function(){return voidJs$jsutils();
}};WrappedComponent.$defs$attributes=function(wrappedComponent$,component,componentArgs,$p6sl07$33){return m$1.empty()};WrappedComponent.$defs$children=function(wrappedComponent$,component,componentArgs,$p6sl07$32){return m$1.empty()};WrappedComponent.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$2.Element},ps:[{nm:'component',mt:'prm',$t:{t:$init$Component()},pa:1,an:function(){return[m$1.doc("The wrapped Mithril component")];}},{nm:'componentArgs',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:$init$JS()}}},$rt:{t:$init$JS()},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:WrappedComponent:$m:componentArgs')];}},{nm:'attributes',mt:'prm',def:1,$t:m$2.Attributes(),an:function(){return[m$1.doc("The attributes associated with this HTML element.")];}},{nm:'children',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:m$2.Content(),Absent$Iterable:{t:m$1.Null}}}}],sts:[{t:m$2.FlowCategory}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:WrappedComponent')];},d:['herd.thrillon','WrappedComponent']};};
ex$.WrappedComponent=WrappedComponent;
function $init$WrappedComponent(){
if(WrappedComponent.$$===undefined){
m$1.initTypeProto(WrappedComponent,'herd.thrillon::WrappedComponent',m$2.Element,m$2.FlowCategory);
(function(wrappedComponent$){
m$1.atr$(wrappedComponent$,'component',function(){return this.component_;},undefined,function(){return{mod:$CCMM$,$t:{t:$init$Component()},$cont:WrappedComponent,pa:1,an:function(){return[m$1.doc("The wrapped Mithril component")];},d:['herd.thrillon','WrappedComponent','$at','component']};});
m$1.atr$(wrappedComponent$,'componentArgs',function(){return this.componentArgs_;},undefined,function(){return{mod:$CCMM$,$t:{t:$init$JS()},ps:[],$cont:WrappedComponent,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:WrappedComponent:$m:componentArgs')];},d:['herd.thrillon','WrappedComponent','$m','componentArgs']};});
m$1.atr$(wrappedComponent$,'$p6sl07$32',function(){return this.$p6sl07$32_;},undefined,function(){return{mod:$CCMM$,$t:m$2.Attributes(),$cont:WrappedComponent,an:function(){return[m$1.doc("The attributes associated with this HTML element.")];},d:['herd.thrillon','WrappedComponent','$at','attributes$fjpoje']};});
m$1.atr$(wrappedComponent$,'$p6sl07$33',function(){return this.$p6sl07$33_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:m$2.Content(),Absent$Iterable:{t:m$1.Null}}},$cont:WrappedComponent,d:['herd.thrillon','WrappedComponent','$at','children$vxorn2']};});
wrappedComponent$.toString=function(){return this.string.valueOf();};
})(WrappedComponent.$$.prototype);
}
return WrappedComponent;
}
ex$.$init$WrappedComponent=$init$WrappedComponent;$init$WrappedComponent();
function attachDom(){return m$1.Entry(domRetrieverAttributeName$internal(),DomAttributeValueProvider$internal(),{Item$Entry:{t:DomAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
attachDom.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:attachDom')];},d:['herd.thrillon','attachDom']};};
ex$.attachDom=attachDom;
function dom($34){
var $35=domProvider$internal($34);
var $36;
if(m$1.nn$(($36=$35))){
return $36.dom;
}
else{
return null;
}
}
ex$.dom=dom;
dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$3.Node}]},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Node}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:dom')];},d:['herd.thrillon','dom']};};
function JS(jS$){
}
JS.dynmem$=[];JS.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['herd.thrillon.jsutils','JS']};};
ex$.JS=JS;
function $init$JS(){
if(JS.$$===undefined){
m$1.initTypeProtoI(JS,'herd.thrillon.jsutils::JS');
(function(jS$){
jS$.toString=function(){return this.string.valueOf();};
})(JS.$$.prototype);
}
return JS;
}
ex$.$init$JS=$init$JS;$init$JS();
function voidJs$jsutils(){
return m$1.dre$$({},{t:$init$JS()},'JavascriptObject.ceylon 6:15-6:24');
}
voidJs$jsutils.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$JS()},pa:1,d:['herd.thrillon.jsutils','voidJs']};}
ex$.voidJs$jsutils=voidJs$jsutils;
var $prop$getVoidJs$jsutils={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$JS()},pa:1,d:['herd.thrillon.jsutils','voidJs']};}};
ex$.$prop$getVoidJs$jsutils=$prop$getVoidJs$jsutils;
$prop$getVoidJs$jsutils.get=voidJs$jsutils;
voidJs$jsutils.$crtmm$=$prop$getVoidJs$jsutils.$crtmm$;
function JsType$jsutils(){var $37=m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]);$37.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['herd.thrillon.jsutils','JsType']};};return $37;}
ex$.JsType$jsutils=JsType$jsutils;
function JsArray$jsutils($p6sl07$38,jsArray$){
$init$JsArray$jsutils();
if(jsArray$===undefined)jsArray$=new JsArray$jsutils.$$;
jsArray$.$p6sl07$38_=$p6sl07$38;
m$1.List({Element$List:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}])},jsArray$);
return jsArray$;
}
JsArray$jsutils.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'js',mt:'prm',$t:{t:$init$JS()}}],sts:[{t:m$1.List,a:{Element$List:JsType$jsutils()}}],pa:1,d:['herd.thrillon.jsutils','JsArray']};};
ex$.JsArray$jsutils=JsArray$jsutils;
function $init$JsArray$jsutils(){
if(JsArray$jsutils.$$===undefined){
m$1.initTypeProto(JsArray$jsutils,'herd.thrillon.jsutils::JsArray',m$1.Basic,m$1.List);
(function(jsArray$){
m$1.atr$(jsArray$,'$p6sl07$38',function(){return this.$p6sl07$38_;},undefined,function(){return{mod:$CCMM$,$t:{t:$init$JS()},$cont:JsArray$jsutils,d:['herd.thrillon.jsutils','JsArray','$at','js$rv5js6']};});
jsArray$.getFromFirst=function($39){
var jsArray$=this;
var $3a=jsArray$.$p6sl07$38;
if(($3b=$3a.length,$3c=($39+(1)),(m$1.nn$($3b)&&$3b.smallerThan&&$3b.smallerThan($3c))||$3b<$3c)){
return null;
}
else{
var $3d=$3a[$39];
if(m$1.nn$($3d)){
var $3e;
if(m$1.is$(($3e=$3d),m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean}]))){
return $3e;
}
else{
if(m$1.$eq$((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'26:30-26:35','JavascriptObject.ceylon'):Object).prototype.toString.call($3e),"[object Array]")){
return JsArray$jsutils(m$1.dre$$($3e,{t:$init$JS()},'JavascriptObject.ceylon 27:39-27:47'));
}
else{
return JsObject$jsutils(m$1.dre$$($3e,{t:$init$JS()},'JavascriptObject.ceylon 29:40-29:48'));
}
}
}
else{
return null;
}
}
};jsArray$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},JsType$jsutils()]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:JsArray$jsutils,pa:3,d:['herd.thrillon.jsutils','JsArray','$m','getFromFirst']};};
m$1.atr$(jsArray$,'lastIndex',function(){
var jsArray$=this;
var $3f=jsArray$.$p6sl07$38;
if(m$1.$eq$($3f.length,(0))){
return null;
}
else{
return m$1.ndtc$(($3g=$3f.length,$3h=(1),(m$1.nn$($3g)&&$3g.minus&&$3g.minus($3h))||$3g-$3h),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]),'JavascriptObject.ceylon 44:23-44:39');
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:JsArray$jsutils,pa:3,d:['herd.thrillon.jsutils','JsArray','$at','lastIndex']};});jsArray$.equals=function($3i){var jsArray$=this;
return jsArray$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(jsArray$,$3i);
};m$1.atr$(jsArray$,'hash',function(){
var jsArray$=this;
return m$1.attrGetter(jsArray$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:JsArray$jsutils,pa:3,d:['herd.thrillon.jsutils','JsArray','$at','hash']};});
m$1.atr$(jsArray$,'paths',function(){
var jsArray$=this;
return jsArray$.collect(JsPath$jsutils,{Result$collect:{t:JsPath$jsutils}});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:{t:JsPath$jsutils}}},$cont:JsArray$jsutils,pa:1,d:['herd.thrillon.jsutils','JsArray','$at','paths']};});
jsArray$.toString=function(){return this.string.valueOf();};
})(JsArray$jsutils.$$.prototype);
}
return JsArray$jsutils;
}
ex$.$init$JsArray$jsutils=$init$JsArray$jsutils;$init$JsArray$jsutils();
function jsType$jsutils($3j){
if(m$1.nn$($3j)){
var $3k;
if(m$1.is$(($3k=$3j),m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean}]))){
return $3k;
}
else{
if(m$1.$eq$((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'60:22-60:27','JavascriptObject.ceylon'):Object).prototype.toString.call($3k),"[object Array]")){
return JsArray$jsutils(m$1.dre$$($3k,{t:$init$JS()},'JavascriptObject.ceylon 61:31-61:32'));
}
else{
return JsObject$jsutils(m$1.dre$$($3k,{t:$init$JS()},'JavascriptObject.ceylon 63:32-63:33'));
}
}
}
else{
return null;
}
}
ex$.jsType$jsutils=jsType$jsutils;
jsType$jsutils.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},JsType$jsutils()]},ps:[{nm:'js',mt:'prm',$t:'$U'}],pa:1,d:['herd.thrillon.jsutils','jsType']};};
function JsObject$jsutils($p6sl07$3l,jsObject$){
$init$JsObject$jsutils();
if(jsObject$===undefined)jsObject$=new JsObject$jsutils.$$;
jsObject$.$p6sl07$3l_=$p6sl07$3l;
m$1.Correspondence({Item$Correspondence:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Correspondence:{t:m$1.$_String}},jsObject$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Entry:{t:m$1.$_String}}}},jsObject$);
return jsObject$;
}
JsObject$jsutils.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'js',mt:'prm',$t:{t:$init$JS()}}],sts:[{t:m$1.Correspondence,a:{Item$Correspondence:JsType$jsutils(),Key$Correspondence:{t:m$1.$_String}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Item$Entry:JsType$jsutils(),Key$Entry:{t:m$1.$_String}}}}}],pa:1,d:['herd.thrillon.jsutils','JsObject']};};
ex$.JsObject$jsutils=JsObject$jsutils;
function $init$JsObject$jsutils(){
if(JsObject$jsutils.$$===undefined){
m$1.initTypeProto(JsObject$jsutils,'herd.thrillon.jsutils::JsObject',m$1.Basic,m$1.Correspondence,m$1.Collection);
(function(jsObject$){
m$1.atr$(jsObject$,'$p6sl07$3l',function(){return this.$p6sl07$3l_;},undefined,function(){return{mod:$CCMM$,$t:{t:$init$JS()},$cont:JsObject$jsutils,d:['herd.thrillon.jsutils','JsObject','$at','js$ce6nta']};});
jsObject$.defines=function($3m){
var jsObject$=this;
var $3n=m$1.natc$((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'77:33-77:38','JavascriptObject.ceylon'):Object).keys(jsObject$.$p6sl07$3l),{t:m$1.$_String},'JavascriptObject.ceylon 77:33-77:49');
return $3n.contains($3m);
};jsObject$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:JsObject$jsutils,pa:3,d:['herd.thrillon.jsutils','JsObject','$m','defines']};};
jsObject$.$_get=function($3o){
var jsObject$=this;
var $3p=jsObject$.$p6sl07$3l;
if(jsObject$.defines($3o)){
var $3q=$3p[$3o];
if(m$1.nn$($3q)){
var $3r;
if(m$1.is$(($3r=$3q),m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean}]))){
return $3r;
}
else{
if(m$1.$eq$((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'89:30-89:35','JavascriptObject.ceylon'):Object).prototype.toString.call($3r),"[object Array]")){
return JsArray$jsutils(m$1.dre$$($3r,{t:$init$JS()},'JavascriptObject.ceylon 90:39-90:47'));
}
else{
return JsObject$jsutils(m$1.dre$$($3r,{t:$init$JS()},'JavascriptObject.ceylon 92:40-92:48'));
}
}
}
else{
return null;
}
}
else{
return null;
}
};jsObject$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},JsType$jsutils()]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],$cont:JsObject$jsutils,pa:3,d:['herd.thrillon.jsutils','JsObject','$m','get']};};
m$1.atr$(jsObject$,'string',function(){
var jsObject$=this;
var $3s=jsObject$.$p6sl07$3l;
return m$1.ndtc$($3s.toString(),{t:m$1.$_String},'JavascriptObject.ceylon 106:19-106:35');
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:JsObject$jsutils,pa:3,d:['herd.thrillon.jsutils','JsObject','$at','string']};});jsObject$.clone=function(){var jsObject$=this;
return jsObject$;
};
jsObject$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Item$Entry:JsType$jsutils(),Key$Entry:{t:m$1.$_String}}}}},ps:[],$cont:JsObject$jsutils,pa:3,d:['herd.thrillon.jsutils','JsObject','$m','clone']};};
jsObject$.iterator=function(){
var jsObject$=this;
var $3t=m$1.natc$((typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'113:33-113:38','JavascriptObject.ceylon'):Object).keys(jsObject$.$p6sl07$3l),{t:m$1.$_String},'JavascriptObject.ceylon 113:33-113:49');
return $3t.$_map(m$1.jsc$2((function($3u){return function(){var $3v;
if(m$1.nn$(($3v=jsObject$.$_get($3u))))return m$1.Entry($3u,$3v,{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Entry:{t:m$1.$_String}});else return null}();
}),[{nm:'key',mt:'prm',$t:{t:m$1.$_String}}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}])}),{Result$map:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}])}).coalesced.iterator();
};jsObject$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Item$Entry:JsType$jsutils(),Key$Entry:{t:m$1.$_String}}}}},ps:[],$cont:JsObject$jsutils,pa:3,d:['herd.thrillon.jsutils','JsObject','$m','iterator']};};
jsObject$.toString=function(){return this.string.valueOf();};
})(JsObject$jsutils.$$.prototype);
}
return JsObject$jsutils;
}
ex$.$init$JsObject$jsutils=$init$JsObject$jsutils;$init$JsObject$jsutils();
function voidType$jsutils(){
return m$1.ndtc$(jsType$jsutils({}),JsType$jsutils(),'JavascriptObject.ceylon 121:15-121:32');
}
voidType$jsutils.$crtmm$=function(){return{mod:$CCMM$,$t:JsType$jsutils(),d:['herd.thrillon.jsutils','voidType']};};var $prop$getVoidType$jsutils={$crtmm$:function(){return{mod:$CCMM$,$t:JsType$jsutils(),d:['herd.thrillon.jsutils','voidType']};}};
ex$.$prop$getVoidType$jsutils=$prop$getVoidType$jsutils;
$prop$getVoidType$jsutils.get=voidType$jsutils;
function $3w$jsutils(){
var voidPath$=new $3w$jsutils.$$;JsPath$jsutils(voidType$jsutils(),voidPath$);
return voidPath$;
};$3w$jsutils.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JsPath$jsutils},d:['herd.thrillon.jsutils','voidPath']};};
function $init$voidPath$jsutils(){
if($3w$jsutils.$$===undefined){
m$1.initTypeProto($3w$jsutils,'herd.thrillon.jsutils::voidPath',$init$JsPath$jsutils());
(function(voidPath$){
voidPath$.defines=function($3y){return false;
};voidPath$.$_get=function($3z){var voidPath$=this;
return voidPath$;
};m$1.atr$(voidPath$,'bool',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','bool']};});
m$1.atr$(voidPath$,'str',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','str']};});
m$1.atr$(voidPath$,'$_int',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','int']};});
m$1.atr$(voidPath$,'$_float',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','float']};});
m$1.atr$(voidPath$,'array',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:JsArray$jsutils}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','array']};});
m$1.atr$(voidPath$,'obj',function(){
var voidPath$=this;
return null;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:JsObject$jsutils}]},$cont:$3w$jsutils,pa:3,d:['herd.thrillon.jsutils','voidPath','$at','obj']};});
voidPath$.toString=function(){return this.string.valueOf();};
})($3w$jsutils.$$.prototype);
}
return $3w$jsutils;
}
ex$.$init$voidPath$jsutils=$init$voidPath$jsutils;$init$voidPath$jsutils();var $40;
function voidPath$jsutils(){
if($40===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'voidPath\' before it was set"),'125:0-134:0','JavascriptObject.ceylon');
if($40===undefined){$40=m$1.INIT$;$40=$init$voidPath$jsutils()();$40.$crtmm$=voidPath$jsutils.$crtmm$;}
return $40;
}
voidPath$jsutils.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$voidPath$jsutils()},d:['herd.thrillon.jsutils','voidPath']};};
$prop$getVoidPath$jsutils=voidPath$jsutils;
ex$.$prop$getVoidPath$jsutils=$prop$getVoidPath$jsutils;
function JsPath$jsutils$$c(jsPath$){
m$1.Correspondence({Item$Correspondence:{t:JsPath$jsutils},Key$Correspondence:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer}])},jsPath$);
m$1.Iterable({Element$Iterable:{t:JsPath$jsutils},Absent$Iterable:{t:m$1.Null}},jsPath$);
}
function JsPath$jsutils(){return JsPath$jsutils$c_$c$.apply(undefined,arguments);}
function JsPath$jsutils$c_$c$$$a($41,jsPath$){
jsPath$.$p6sl07$42_=$41;
m$1.atr$(jsPath$,'$p6sl07$42',function(){return this.$p6sl07$42_;},undefined,function(){return{mod:$CCMM$,$t:JsType$jsutils(),$cont:JsPath$jsutils,d:['herd.thrillon.jsutils','JsPath','$at','jsType$bmoodq']};});
return jsPath$;
};
function JsPath$jsutils$c_$c$($41,jsPath$){
$init$JsPath$jsutils();
if(jsPath$===undefined)jsPath$=new JsPath$jsutils.$$;
JsPath$jsutils$$c(jsPath$);
JsPath$jsutils$c_$c$$$a($41,jsPath$);
return jsPath$;
};
JsPath$jsutils$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'jsType',mt:'prm',$t:JsType$jsutils()}],$cont:JsPath$jsutils,pa:1,d:['herd.thrillon.jsutils','JsPath','$cn','$def']};};
JsPath$jsutils.JsPath$jsutils$c_$c$=JsPath$jsutils$c_$c$;
ex$.JsPath$jsutils$c_$c$=JsPath$jsutils$c_$c$;
JsPath$jsutils.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'jsType',mt:'prm',$t:JsType$jsutils()}],sts:[{t:m$1.Correspondence,a:{Item$Correspondence:{t:JsPath$jsutils},Key$Correspondence:{t:'u',l:[{t:m$1.$_String},{t:m$1.Integer}]}}},{t:m$1.Iterable,a:{Element$Iterable:{t:JsPath$jsutils},Absent$Iterable:{t:m$1.Null}}}],pa:1,d:['herd.thrillon.jsutils','JsPath']};};
ex$.JsPath$jsutils=JsPath$jsutils;
function $init$JsPath$jsutils(){
if(JsPath$jsutils.$$===undefined){
m$1.initTypeProto(JsPath$jsutils,'herd.thrillon.jsutils::JsPath',m$1.Basic,m$1.Correspondence,m$1.Iterable);
(function(jsPath$){
m$1.atr$(jsPath$,'$p6sl07$42',function(){return this.$p6sl07$42_;},undefined,function(){return{mod:$CCMM$,$t:JsType$jsutils(),$cont:JsPath$jsutils,d:['herd.thrillon.jsutils','JsPath','$at','jsType$bmoodq']};});
jsPath$.defines=function($43){var jsPath$=this;
return function(){var $44,$45;
if(m$1.is$(($44=jsPath$.$p6sl07$42),{t:JsObject$jsutils})&&m$1.is$(($45=$43),{t:m$1.$_String}))return $44.defines($45);else{var $46,$47;
if(m$1.is$(($46=jsPath$.$p6sl07$42),{t:JsArray$jsutils})&&m$1.is$(($47=$43),{t:m$1.Integer}))return $46.defines($47);else return false}}();
};
jsPath$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},{t:m$1.Integer}]}}],$cont:JsPath$jsutils,pa:11,d:['herd.thrillon.jsutils','JsPath','$m','defines']};};
jsPath$.$_get=function($48){var jsPath$=this;
return function(){var $49=function(){var $4a,$4b;
if(m$1.is$(($4a=jsPath$.$p6sl07$42),{t:JsObject$jsutils})&&m$1.is$(($4b=$48),{t:m$1.$_String}))return $4a.$_get($4b);else{var $4c,$4d;
if(m$1.is$(($4c=jsPath$.$p6sl07$42),{t:JsArray$jsutils})&&m$1.is$(($4d=$48),{t:m$1.Integer}))return $4c.$_get($4d);else return null}}();return function(){var $4e;
if(m$1.nn$(($4e=$49)))return JsPath$jsutils($4e);else return voidPath$jsutils()}();
}();
};
jsPath$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JsPath$jsutils},ps:[{nm:'key',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},{t:m$1.Integer}]}}],$cont:JsPath$jsutils,pa:11,d:['herd.thrillon.jsutils','JsPath','$m','get']};};
m$1.atr$(jsPath$,'bool',function(){
var jsPath$=this;
return function(){var $4f;
if(m$1.is$(($4f=jsPath$.$p6sl07$42),{t:m$1.$_Boolean}))return $4f;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','bool']};});
m$1.atr$(jsPath$,'str',function(){
var jsPath$=this;
return function(){var $4g;
if(m$1.is$(($4g=jsPath$.$p6sl07$42),{t:m$1.$_String}))return $4g;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','str']};});
m$1.atr$(jsPath$,'$_int',function(){
var jsPath$=this;
return function(){var $4h;
if(m$1.is$(($4h=jsPath$.$p6sl07$42),{t:m$1.Integer}))return $4h;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','int']};});
m$1.atr$(jsPath$,'$_float',function(){
var jsPath$=this;
return function(){var $4i;
if(m$1.is$(($4i=jsPath$.$p6sl07$42),{t:m$1.Float}))return $4i;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','float']};});
m$1.atr$(jsPath$,'array',function(){
var jsPath$=this;
return function(){var $4j;
if(m$1.is$(($4j=jsPath$.$p6sl07$42),{t:JsArray$jsutils}))return $4j;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:JsArray$jsutils}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','array']};});
m$1.atr$(jsPath$,'obj',function(){
var jsPath$=this;
return function(){var $4k;
if(m$1.is$(($4k=jsPath$.$p6sl07$42),{t:JsObject$jsutils}))return $4k;else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:JsObject$jsutils}]},$cont:JsPath$jsutils,pa:9,d:['herd.thrillon.jsutils','JsPath','$at','obj']};});
m$1.atr$(jsPath$,'entries',function(){
var jsPath$=this;
return ($4l=($4m=jsPath$.obj,m$1.jsc$3($4m,m$1.nn$($4m)?m$1.jsc$3($4m,$4m.$_map,{Result$map:{t:m$1.Entry,a:{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}}}):null))(m$1.jsc$2((function($4n){return function(){var $4o=$4n,$4p=$4o.key,$4q=$4o.item;return m$1.Entry($4p,JsPath$jsutils($4q),{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}});
}();
}),[{nm:'$pattern$param$0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:JsType$jsutils(),Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_Boolean},{t:JsObject$jsutils},{t:JsArray$jsutils}]),Key$Entry:{t:m$1.$_String}}}]),Return$Callable:{t:m$1.Entry,a:{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}}}),{Result$map:{t:m$1.Entry,a:{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}}}),m$1.nn$($4l)?$4l:m$1.empty());
var $4l,$4m;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}},$cont:JsPath$jsutils,pa:1,d:['herd.thrillon.jsutils','JsPath','$at','entries']};});
m$1.atr$(jsPath$,'elements',function(){
var jsPath$=this;
return ($4r=($4s=jsPath$.array,m$1.nn$($4s)?$4s.paths:null),m$1.nn$($4r)?$4r:m$1.empty());
var $4r,$4s;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:JsPath$jsutils},Absent$Iterable:{t:m$1.Null}}},$cont:JsPath$jsutils,pa:1,d:['herd.thrillon.jsutils','JsPath','$at','elements']};});
jsPath$.iterator=function(){var jsPath$=this;
return m$1.concatenate(m$1.$arr$sa$([jsPath$.elements,jsPath$.entries.$_map(m$1.jsc$2(function($O$){return $O$.item;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}}}],{Item$Entry:{t:JsPath$jsutils},Key$Entry:{t:m$1.$_String}}),{Result$map:{t:JsPath$jsutils}})],{t:m$1.Iterable,a:{Element$Iterable:{t:JsPath$jsutils},Absent$Iterable:{t:m$1.Null}}}),{Element$concatenate:{t:JsPath$jsutils}}).iterator();
};
jsPath$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:JsPath$jsutils}}},ps:[],$cont:JsPath$jsutils,pa:3,d:['herd.thrillon.jsutils','JsPath','$m','iterator']};};
jsPath$.toString=function(){return this.string.valueOf();};
})(JsPath$jsutils.$$.prototype);
}
return JsPath$jsutils;
}
ex$.$init$JsPath$jsutils=$init$JsPath$jsutils;$init$JsPath$jsutils();
function testJsObject$jsutils(){
var $4t;
$4t=m$1.ndtc$(jsType$jsutils({o1:{s:"truc"},i:(1),a:[{s:"a1"},{s:"a2"},{s:"a3"}]}),JsType$jsutils(),'JavascriptObject.ceylon 179:13-195:9');
var $4u,$4v,$4w,$4x,$4y;
if(m$1.is$(($4u=$4t),{t:JsObject$jsutils})&&m$1.is$(($4v=$4u.$_get("o1")),{t:JsObject$jsutils})&&m$1.is$(($4w=$4v.$_get("s")),{t:m$1.$_String})&&m$1.is$(($4x=$4u.$_get("i")),{t:m$1.Integer})&&m$1.is$(($4y=$4u.$_get("a")),{t:JsArray$jsutils})){
m$1.print($4v);
m$1.print($4w);
m$1.print($4x);
m$1.print($4y);
}
var $4z=JsPath$jsutils($4t);
m$1.print(("o1.s = "+($50=$4z.$_get("o1").$_get("s").str,m$1.nn$($50)?$50:"null")));
var $50;
m$1.print(("i = "+($51=$4z.$_get("i").$_int,m$1.nn$($51)?$51:"null").string));
var $51;
m$1.print(("a[0].s = "+($52=$4z.$_get("a").$_get(0).$_get("s").str,m$1.nn$($52)?$52:"null")));
var $52;
m$1.print(("a.*.s = "+m$1.JsCallableList($4z.$_get("a"),function(e,a){return e.$_get.apply(e,a);},undefined,{t:JsPath$jsutils})("s").collect(function(e){return e.str;},{Result$collect:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])}).string));
};testJsObject$jsutils.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],d:['herd.thrillon.jsutils','testJsObject']};};
function domProvider$internal($53){return ($54=($55=($56=($57=$53,m$1.nn$($57)?$57.attributes:null),m$1.nn$($56)?$56.coalesced:null),m$1.jsc$3($55,m$1.nn$($55)?m$1.jsc$3($55,$55.$_map,{Result$map:m$1.mut$([{t:DomAttributeValueProvider$internal},{t:m$1.Null}])}):null))(m$1.jsc$2((function($58){return function(){var $59=$58,$5a=$59.key,$5b=$59.item;return function(){var $5c;
if(m$1.$eq$($5a,domRetrieverAttributeName$internal())&&m$1.is$(($5c=$5b),{t:DomAttributeValueProvider$internal}))return $5c;else return null}();
}();
}),[{nm:'$pattern$param$0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}},{t:m$1.$_Boolean},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]}}},{t:m$1.Integer},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}}},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:'u',l:[{t:m$1.Null},{t:m$1.Float}]}}},{t:m$2.AttributeValueProvider},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:'u',l:[{t:m$1.Null},{t:m$2.AttributeValueProvider}]}}}]},Key$Entry:{t:m$1.$_String}}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])}},{t:m$1.$_Boolean},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_Boolean}])}},{t:m$1.Integer},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.Integer}])}},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.Float}])}},{t:m$2.AttributeValueProvider},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$2.AttributeValueProvider}])}}]),Key$Entry:{t:m$1.$_String}}}]),Return$Callable:m$1.mut$([{t:DomAttributeValueProvider$internal},{t:m$1.Null}])}),{Result$map:m$1.mut$([{t:DomAttributeValueProvider$internal},{t:m$1.Null}])}),m$1.nn$($54)?$54.first:null);
var $54,$55,$56,$57;
};
domProvider$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DomAttributeValueProvider$internal}]},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$2.Node}]}}],pa:1,d:['herd.thrillon.internal','domProvider']};};
ex$.domProvider$internal=domProvider$internal;
function DomAttributeValueProvider$internal(dom,domAttributeValueProvider$){
$init$DomAttributeValueProvider$internal();
if(domAttributeValueProvider$===undefined)domAttributeValueProvider$=new DomAttributeValueProvider$internal.$$;
if(dom===undefined){dom=$init$DomAttributeValueProvider$internal().$defs$dom(domAttributeValueProvider$);}
domAttributeValueProvider$.dom_=dom;
m$2.AttributeValueProvider(domAttributeValueProvider$);
return domAttributeValueProvider$;
}
DomAttributeValueProvider$internal.$defs$dom=function(domAttributeValueProvider$){return null};DomAttributeValueProvider$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'dom',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$3.Node}]},pa:1025}],sts:[{t:m$2.AttributeValueProvider}],pa:1,d:['herd.thrillon.internal','DomAttributeValueProvider']};};
ex$.DomAttributeValueProvider$internal=DomAttributeValueProvider$internal;
function $init$DomAttributeValueProvider$internal(){
if(DomAttributeValueProvider$internal.$$===undefined){
m$1.initTypeProto(DomAttributeValueProvider$internal,'herd.thrillon.internal::DomAttributeValueProvider',m$1.Basic,m$2.AttributeValueProvider);
(function(domAttributeValueProvider$){
m$1.atr$(domAttributeValueProvider$,'dom',function(){return this.dom_;},function($5d){return this.dom_=$5d;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$3.Node}]},$cont:DomAttributeValueProvider$internal,pa:1025,d:['herd.thrillon.internal','DomAttributeValueProvider','$at','dom']};});
m$1.atr$(domAttributeValueProvider$,'attributeValue',function(){
return "DomNode? domRetriever()";
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DomAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','DomAttributeValueProvider','$at','attributeValue']};});
domAttributeValueProvider$.toString=function(){return this.string.valueOf();};
})(DomAttributeValueProvider$internal.$$.prototype);
}
return DomAttributeValueProvider$internal;
}
ex$.$init$DomAttributeValueProvider$internal=$init$DomAttributeValueProvider$internal;$init$DomAttributeValueProvider$internal();
var $5f$internal;function $valinit$$5f$internal(){if($5f$internal===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'domRetrieverAttributeName\' before it was set"),'23:0-23:56','dom.ceylon');
if($5f$internal===undefined){$5f$internal=m$1.INIT$;$5f$internal="domRetriever"};return $5f$internal;};
function domRetrieverAttributeName$internal(){return $valinit$$5f$internal();}
ex$.domRetrieverAttributeName$internal=domRetrieverAttributeName$internal;
var $prop$getDomRetrieverAttributeName$internal={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},pa:1,d:['herd.thrillon.internal','domRetrieverAttributeName']};}};
ex$.$prop$getDomRetrieverAttributeName$internal=$prop$getDomRetrieverAttributeName$internal;
$prop$getDomRetrieverAttributeName$internal.get=domRetrieverAttributeName$internal;
domRetrieverAttributeName$internal.$crtmm$=$prop$getDomRetrieverAttributeName$internal.$crtmm$;
function setDom$internal($5g){
var $5h=function($5i){
var $5j;
$5j=m$1.dre$$($5i.dom,{t:m$3.Node},'dom.ceylon 28:12-28:17');
($5g.dom=$5j);
};
$5h.$crtmm$=function(){return{ps:[{nm:'vn',mt:'prm',$t:{t:$init$VNode()}}],$t:{t:m$1.Anything}};};return m$1.jsc$3(0,$5h);
}
ex$.setDom$internal=setDom$internal;
setDom$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},ps:[{nm:'theDomProvider',mt:'prm',$t:{t:DomAttributeValueProvider$internal}}],pa:1,d:['herd.thrillon.internal','setDom']};};
function MultiAttributeValueProvider$internal(providers,multiAttributeValueProvider$){
$init$MultiAttributeValueProvider$internal();
if(multiAttributeValueProvider$===undefined)multiAttributeValueProvider$=new MultiAttributeValueProvider$internal.$$;
multiAttributeValueProvider$.providers_=providers;
m$2.AttributeValueProvider(multiAttributeValueProvider$);
return multiAttributeValueProvider$;
}
MultiAttributeValueProvider$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'providers',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:m$2.AttributeEntry(),Absent$Iterable:{t:m$1.Nothing}}},pa:1}],sts:[{t:m$2.AttributeValueProvider}],pa:1,d:['herd.thrillon.internal','MultiAttributeValueProvider']};};
ex$.MultiAttributeValueProvider$internal=MultiAttributeValueProvider$internal;
function $init$MultiAttributeValueProvider$internal(){
if(MultiAttributeValueProvider$internal.$$===undefined){
m$1.initTypeProto(MultiAttributeValueProvider$internal,'herd.thrillon.internal::MultiAttributeValueProvider',m$1.Basic,m$2.AttributeValueProvider);
(function(multiAttributeValueProvider$){
m$1.atr$(multiAttributeValueProvider$,'providers',function(){return this.providers_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:m$2.AttributeEntry(),Absent$Iterable:{t:m$1.Nothing}}},$cont:MultiAttributeValueProvider$internal,pa:1,d:['herd.thrillon.internal','MultiAttributeValueProvider','$at','providers']};});
m$1.atr$(multiAttributeValueProvider$,'attributeValue',function(){
return "multiAttributeProvider";
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:MultiAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','MultiAttributeValueProvider','$at','attributeValue']};});
multiAttributeValueProvider$.toString=function(){return this.string.valueOf();};
})(MultiAttributeValueProvider$internal.$$.prototype);
}
return MultiAttributeValueProvider$internal;
}
ex$.$init$MultiAttributeValueProvider$internal=$init$MultiAttributeValueProvider$internal;$init$MultiAttributeValueProvider$internal();
function VoidAttributeValueProvider$internal(code,voidAttributeValueProvider$){
$init$VoidAttributeValueProvider$internal();
if(voidAttributeValueProvider$===undefined)voidAttributeValueProvider$=new VoidAttributeValueProvider$internal.$$;
voidAttributeValueProvider$.code_=code;
m$2.AttributeValueProvider(voidAttributeValueProvider$);
return voidAttributeValueProvider$;
}
VoidAttributeValueProvider$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'code',mt:'prm',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Nothing}]},Return$Callable:{t:m$1.Anything}}},pa:1}],sts:[{t:m$2.AttributeValueProvider}],pa:1,d:['herd.thrillon.internal','VoidAttributeValueProvider']};};
ex$.VoidAttributeValueProvider$internal=VoidAttributeValueProvider$internal;
function $init$VoidAttributeValueProvider$internal(){
if(VoidAttributeValueProvider$internal.$$===undefined){
m$1.initTypeProto(VoidAttributeValueProvider$internal,'herd.thrillon.internal::VoidAttributeValueProvider',m$1.Basic,m$2.AttributeValueProvider);
(function(voidAttributeValueProvider$){
m$1.atr$(voidAttributeValueProvider$,'code',function(){return this.code_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Nothing}]},Return$Callable:{t:m$1.Anything}}},$cont:VoidAttributeValueProvider$internal,pa:1,d:['herd.thrillon.internal','VoidAttributeValueProvider','$at','code']};});
m$1.atr$(voidAttributeValueProvider$,'attributeValue',function(){
return "void f()";
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:VoidAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','VoidAttributeValueProvider','$at','attributeValue']};});
voidAttributeValueProvider$.toString=function(){return this.string.valueOf();};
})(VoidAttributeValueProvider$internal.$$.prototype);
}
return VoidAttributeValueProvider$internal;
}
ex$.$init$VoidAttributeValueProvider$internal=$init$VoidAttributeValueProvider$internal;$init$VoidAttributeValueProvider$internal();
function BinderAttributeValueProvider$internal($p6sl07$5m,$p6sl07$5n,$p6sl07$5o,$p6sl07$5p,$$targs$$,binderAttributeValueProvider$){
$init$BinderAttributeValueProvider$internal();
if(binderAttributeValueProvider$===undefined)binderAttributeValueProvider$=new BinderAttributeValueProvider$internal.$$;
m$1.set_type_args(binderAttributeValueProvider$,$$targs$$);
binderAttributeValueProvider$.$p6sl07$5m_=$p6sl07$5m;
binderAttributeValueProvider$.$p6sl07$5n_=$p6sl07$5n;
binderAttributeValueProvider$.$p6sl07$5o_=$p6sl07$5o;
binderAttributeValueProvider$.$p6sl07$5p_=$p6sl07$5p;
m$2.AttributeValueProvider(binderAttributeValueProvider$);
binderAttributeValueProvider$.$p6sl07$5o=$p6sl07$5o;
binderAttributeValueProvider$.$p6sl07$5p=$p6sl07$5p;
binderAttributeValueProvider$.$p6sl07$5q_=$p6sl07$5o(m$1.jsc$2((function($5r){
var $5s;
if(m$1.nn$(($5s=$5r.currentTarget))){
var $5t;
$prop$get$5t={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:BinderAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','update','$at','dynaTarget$f7cdww']};}};
$prop$get$5t.get=function(){return $5t};
var $5u;
$prop$get$5u={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$3.HTMLElement},$cont:BinderAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','update','$at','dom$ujs3cf']};}};
$prop$get$5u.get=function(){return $5u};
$5t=$5s;$5u=m$1.dre$$($5t,{t:m$3.HTMLElement},'BinderAttributeValueProvider.ceylon 31:22-31:31');
binderAttributeValueProvider$.$p6sl07$5m.setQuietly(binderAttributeValueProvider$.$p6sl07$5p($5u));
}
}),[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}],{Arguments$Callable:m$1.mtt$([{t:m$3.Event}]),Return$Callable:{t:m$1.Anything}}));
binderAttributeValueProvider$.$p6sl07$5v_=m$1.Entry(binderAttributeValueProvider$.$p6sl07$5n,binderAttributeValueProvider$.$p6sl07$5m.val,{Item$Entry:m$1.mut$([{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_String},binderAttributeValueProvider$.$$targs$$.Exists$BinderAttributeValueProvider]),Key$Entry:{t:m$1.$_String}});
return binderAttributeValueProvider$;
}
BinderAttributeValueProvider$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'watchedValue',mt:'prm',$t:{t:WatchedValue,a:{T$WatchedValue:'T$BinderAttributeValueProvider',Exists$WatchedValue:'Exists$BinderAttributeValueProvider'}}},{nm:'boundAttributeName',mt:'prm',$t:{t:m$1.$_String}},{nm:'updateEvent',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}}]},Return$Callable:m$2.AttributeEntry()}},$rt:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}]},{nm:'extractFromDom',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.HTMLElement}]},Return$Callable:{t:'u',l:['T$BinderAttributeValueProvider','Exists$BinderAttributeValueProvider']}}},$rt:{t:'u',l:['T$BinderAttributeValueProvider','Exists$BinderAttributeValueProvider']},ps:[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}]}],tp:{T$BinderAttributeValueProvider:{of:[{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.$_String}]},Exists$BinderAttributeValueProvider:{sts:[{t:m$1.Null}]}},sts:[{t:m$2.AttributeValueProvider}],pa:1,d:['herd.thrillon.internal','BinderAttributeValueProvider']};};
ex$.BinderAttributeValueProvider$internal=BinderAttributeValueProvider$internal;
function $init$BinderAttributeValueProvider$internal(){
if(BinderAttributeValueProvider$internal.$$===undefined){
m$1.initTypeProto(BinderAttributeValueProvider$internal,'herd.thrillon.internal::BinderAttributeValueProvider',m$1.Basic,m$2.AttributeValueProvider);
(function(binderAttributeValueProvider$){
m$1.atr$(binderAttributeValueProvider$,'$p6sl07$5m',function(){return this.$p6sl07$5m_;},undefined,function(){return{mod:$CCMM$,$t:{t:WatchedValue,a:{T$WatchedValue:'T$BinderAttributeValueProvider',Exists$WatchedValue:'Exists$BinderAttributeValueProvider'}},$cont:BinderAttributeValueProvider$internal,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','watchedValue$8mfl25']};});
m$1.atr$(binderAttributeValueProvider$,'$p6sl07$5n',function(){return this.$p6sl07$5n_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BinderAttributeValueProvider$internal,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','boundAttributeName$hg30zd']};});
m$1.atr$(binderAttributeValueProvider$,'$p6sl07$5o',function(){return this.$p6sl07$5o_;},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$3.Event}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'evt',mt:'prm',$t:{t:m$3.Event}}]}],$cont:BinderAttributeValueProvider$internal,d:['herd.thrillon.internal','BinderAttributeValueProvider','$m','updateEvent$g8cu5b']};});
m$1.atr$(binderAttributeValueProvider$,'$p6sl07$5p',function(){return this.$p6sl07$5p_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:['T$BinderAttributeValueProvider','Exists$BinderAttributeValueProvider']},ps:[{nm:'dom',mt:'prm',$t:{t:m$3.HTMLElement}}],$cont:BinderAttributeValueProvider$internal,d:['herd.thrillon.internal','BinderAttributeValueProvider','$m','extractFromDom$iabvdj']};});
m$1.atr$(binderAttributeValueProvider$,'attributeValue',function(){
var binderAttributeValueProvider$=this;
return ("binder("+binderAttributeValueProvider$.$p6sl07$5n+")");
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:BinderAttributeValueProvider$internal,pa:3,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','attributeValue']};});
m$1.atr$(binderAttributeValueProvider$,'update',function(){return this.$p6sl07$5q_;},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:BinderAttributeValueProvider$internal,pa:1,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','update']};});
m$1.atr$(binderAttributeValueProvider$,'val',function(){return this.$p6sl07$5v_;},undefined,function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),$cont:BinderAttributeValueProvider$internal,pa:1,d:['herd.thrillon.internal','BinderAttributeValueProvider','$at','val']};});
binderAttributeValueProvider$.toString=function(){return this.string.valueOf();};
})(BinderAttributeValueProvider$internal.$$.prototype);
}
return BinderAttributeValueProvider$internal;
}
ex$.$init$BinderAttributeValueProvider$internal=$init$BinderAttributeValueProvider$internal;$init$BinderAttributeValueProvider$internal();
function Component(component$){
}
Component.dynmem$=['view'];Component.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Component')];},d:['herd.thrillon','Component']};};
ex$.Component=Component;
function $init$Component(){
if(Component.$$===undefined){
m$1.initTypeProtoI(Component,'herd.thrillon::Component');
(function(component$){
component$.view={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$VNode()},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}],$cont:Component,pa:5,d:['herd.thrillon','Component','$m','view']};}};component$.toString=function(){return this.string.valueOf();};
})(Component.$$.prototype);
}
return Component;
}
ex$.$init$Component=$init$Component;$init$Component();
function VNode(vNode$){
}
VNode.dynmem$=['tag','key','attrs','children','text','dom','domSize','state','_state','events','instance','skip'];VNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:VNode')];},d:['herd.thrillon','VNode']};};
ex$.VNode=VNode;
function $init$VNode(){
if(VNode.$$===undefined){
m$1.initTypeProtoI(VNode,'herd.thrillon::VNode');
(function(vNode$){
vNode$.$prop$getTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.$_String},{t:$init$Component()}]},$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','tag']};}};
vNode$.$prop$getKey={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','key']};}};
vNode$.$prop$getAttrs={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','attrs']};}};
vNode$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','children']};}};
vNode$.$prop$getText={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','text']};}};
vNode$.$prop$getDom={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','dom']};}};
vNode$.$prop$getDomSize={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','domSize']};}};
vNode$.$prop$getState={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','state']};}};
vNode$.$prop$get_state={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','_state']};}};
vNode$.$prop$getEvents={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','events']};}};
vNode$.$prop$getInstance={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','instance']};}};
vNode$.$prop$getSkip={$crtmm$:function(){return{mod:$CCMM$,$t:'$U',$cont:VNode,pa:5,d:['herd.thrillon','VNode','$at','skip']};}};
vNode$.toString=function(){return this.string.valueOf();};
})(VNode.$$.prototype);
}
return VNode;
}
ex$.$init$VNode=$init$VNode;$init$VNode();
function mount($5w,$5x){
(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'34:8-34:8','mithrilBindings.ceylon'):m).mount($5w,$5x);
}
ex$.mount=mount;
mount.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'parent',mt:'prm',$t:{t:m$3.Element}},{nm:'component',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Component()}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:mount')];},d:['herd.thrillon','mount']};};
function vnode($5y,$5z,$60){
return m$1.dre$$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'44:15-44:15','mithrilBindings.ceylon'):m)($5y,$5z,m$1.nfor$(m$1.for$(function(){
var $61=$60.iterator(),$62=m$1.finished();
var n$62=function(){return $62=$61.next();}
return function(){
if(n$62()!==m$1.finished()){
var $63=$62,$64=$63;
return $64;
}
return m$1.finished();
}
},{Element$Iterable:m$1.mut$([{t:$init$VNode()},{t:m$1.$_String}]),Absent$Iterable:{t:m$1.Null}}))),{t:$init$VNode()},'mithrilBindings.ceylon 44:15-47:53');
}
ex$.vnode=vnode;
vnode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$VNode()},ps:[{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.$_String},{t:$init$Component()}]}},{nm:'attributes',mt:'prm',$t:'$U'},{nm:'children',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:$init$VNode()},{t:m$1.$_String}]},Absent$Iterable:{t:m$1.Null}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:vnode')];},d:['herd.thrillon','vnode']};};
function WatchedValue($p6sl07$65,$p6sl07$66,$$targs$$,watchedValue$){
$init$WatchedValue();
if(watchedValue$===undefined)watchedValue$=new WatchedValue.$$;
m$1.set_type_args(watchedValue$,$$targs$$);
watchedValue$.$p6sl07$65_=$p6sl07$65;
if($p6sl07$66===undefined){$p6sl07$66=$init$WatchedValue().$defs$onChange(watchedValue$,$p6sl07$65);}
watchedValue$.$p6sl07$66_=$p6sl07$66;
watchedValue$.$p6sl07$67_=watchedValue$.$p6sl07$65;
return watchedValue$;
}
WatchedValue.$defs$onChange=function(watchedValue$,$p6sl07$65){return function(){return m$1.noop();
}};WatchedValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialValue',mt:'prm',$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']}},{nm:'onChange',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],tp:{T$WatchedValue:{sts:[{t:m$1.$_Object}]},Exists$WatchedValue:{sts:[{t:m$1.Null}],def:{t:m$1.Null}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:WatchedValue')];},d:['herd.thrillon','WatchedValue']};};
ex$.WatchedValue=WatchedValue;
function $init$WatchedValue(){
if(WatchedValue.$$===undefined){
m$1.initTypeProto(WatchedValue,'herd.thrillon::WatchedValue',m$1.Basic);
(function(watchedValue$){
m$1.atr$(watchedValue$,'$p6sl07$65',function(){return this.$p6sl07$65_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']},$cont:WatchedValue,d:['herd.thrillon','WatchedValue','$at','initialValue$wd9n01']};});
m$1.atr$(watchedValue$,'$p6sl07$66',function(){return this.$p6sl07$66_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:WatchedValue,d:['herd.thrillon','WatchedValue','$m','onChange$puh68x']};});
m$1.atr$(watchedValue$,'$p6sl07$67',function(){return this.$p6sl07$67_;},function($68){return this.$p6sl07$67_=$68;},function(){return{mod:$CCMM$,$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']},$cont:WatchedValue,pa:1024,d:['herd.thrillon','WatchedValue','$at','v$7asjow']};});
m$1.atr$(watchedValue$,'val',function(){
var watchedValue$=this;
return watchedValue$.$_get();
},function($69){
var watchedValue$=this;
watchedValue$.set($69);
},function(){return{mod:$CCMM$,$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']},$cont:WatchedValue,pa:1025,d:['herd.thrillon','WatchedValue','$at','val']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:WatchedValue,d:['herd.thrillon','WatchedValue','$at','val','$set']};});
watchedValue$.setQuietly=function($6a){
var watchedValue$=this;
watchedValue$.$p6sl07$67=$6a;
};watchedValue$.setQuietly.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']}}],$cont:WatchedValue,pa:1,d:['herd.thrillon','WatchedValue','$m','setQuietly']};};
watchedValue$.set=function($6b){
var watchedValue$=this;
watchedValue$.$p6sl07$67=$6b;
watchedValue$.$p6sl07$66();
(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'74:12-74:12','WatchedValue.ceylon'):m).redraw();
};watchedValue$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']}}],$cont:WatchedValue,pa:1,d:['herd.thrillon','WatchedValue','$m','set']};};
watchedValue$.change=function($6c){
var watchedValue$=this;
$6c(watchedValue$.$p6sl07$67);
watchedValue$.$p6sl07$66();
(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'82:12-82:12','WatchedValue.ceylon'):m).redraw();
};watchedValue$.change.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'action',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['T$WatchedValue','Exists$WatchedValue']}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'val',mt:'prm',$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']}}]}],$cont:WatchedValue,pa:1,d:['herd.thrillon','WatchedValue','$m','change']};};
watchedValue$.$_get=function(){
var watchedValue$=this;
return watchedValue$.$p6sl07$67;
};watchedValue$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['T$WatchedValue','Exists$WatchedValue']},ps:[],$cont:WatchedValue,pa:1,d:['herd.thrillon','WatchedValue','$m','get']};};
m$1.atr$(watchedValue$,'string',function(){
var watchedValue$=this;
return ($6d=($6e=watchedValue$.$p6sl07$67,m$1.nn$($6e)?$6e.string:null),m$1.nn$($6d)?$6d:"");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:WatchedValue,pa:3,d:['herd.thrillon','WatchedValue','$at','string']};});
watchedValue$.toString=function(){return this.string.valueOf();};
})(WatchedValue.$$.prototype);
}
return WatchedValue;
}
ex$.$init$WatchedValue=$init$WatchedValue;$init$WatchedValue();
var $6d,$6e;
function ExistingWatchedValue($p6sl07$6f,$p6sl07$6g,$$targs$$,existingWatchedValue$){
$init$ExistingWatchedValue();
if(existingWatchedValue$===undefined)existingWatchedValue$=new ExistingWatchedValue.$$;
m$1.set_type_args(existingWatchedValue$,$$targs$$);
existingWatchedValue$.$p6sl07$6f_=$p6sl07$6f;
if($p6sl07$6g===undefined){$p6sl07$6g=$init$ExistingWatchedValue().$defs$onChange(existingWatchedValue$,$p6sl07$6f);}
existingWatchedValue$.$p6sl07$6g_=$p6sl07$6g;
WatchedValue($p6sl07$6f,m$1.jsc$2($p6sl07$6g,[],{T$ExistingWatchedValue:existingWatchedValue$.$$targs$$.T$ExistingWatchedValue}),{T$WatchedValue:existingWatchedValue$.$$targs$$.T$ExistingWatchedValue,Exists$WatchedValue:{t:m$1.Nothing}},existingWatchedValue$);
return existingWatchedValue$;
}
ExistingWatchedValue.$defs$onChange=function(existingWatchedValue$,$p6sl07$6f){return function(){return m$1.noop();
}};ExistingWatchedValue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:WatchedValue,a:{T$WatchedValue:'T$ExistingWatchedValue',Exists$WatchedValue:{t:m$1.Nothing}}},ps:[{nm:'initialValue',mt:'prm',$t:'T$ExistingWatchedValue'},{nm:'onChange',mt:'prm',$pt:'f',def:1,$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[]}],tp:{T$ExistingWatchedValue:{sts:[{t:m$1.$_Object}]}},pa:1,d:['herd.thrillon','ExistingWatchedValue']};};
ex$.ExistingWatchedValue=ExistingWatchedValue;
function $init$ExistingWatchedValue(){
if(ExistingWatchedValue.$$===undefined){
m$1.initTypeProto(ExistingWatchedValue,'herd.thrillon::ExistingWatchedValue',$init$WatchedValue());
(function(existingWatchedValue$){
m$1.atr$(existingWatchedValue$,'$p6sl07$6f',function(){return this.$p6sl07$6f_;},undefined,function(){return{mod:$CCMM$,$t:'T$ExistingWatchedValue',$cont:ExistingWatchedValue,d:['herd.thrillon','ExistingWatchedValue','$at','initialValue$vlffu6']};});
m$1.atr$(existingWatchedValue$,'$p6sl07$6g',function(){return this.$p6sl07$6g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ExistingWatchedValue,d:['herd.thrillon','ExistingWatchedValue','$m','onChange$qmbdes']};});
existingWatchedValue$.toString=function(){return this.string.valueOf();};
})(ExistingWatchedValue.$$.prototype);
}
return ExistingWatchedValue;
}
ex$.$init$ExistingWatchedValue=$init$ExistingWatchedValue;$init$ExistingWatchedValue();
function Args(args$){
JS(args$);
}
Args.dynmem$=[];Args.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$JS()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Args')];},d:['herd.thrillon','Args']};};
ex$.Args=Args;
function $init$Args(){
if(Args.$$===undefined){
m$1.initTypeProtoI(Args,'herd.thrillon::Args',$init$JS());
(function(args$){
args$.toString=function(){return this.string.valueOf();};
})(Args.$$.prototype);
}
return Args;
}
ex$.$init$Args=$init$Args;$init$Args();
function Template(template$){
Component(template$);
}
Template.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Component()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Template')];},d:['herd.thrillon','Template']};};
ex$.Template=Template;
function $init$Template(){
if(Template.$$===undefined){
m$1.initTypeProtoI(Template,'herd.thrillon::Template',$init$Component());
(function(template$){
template$.build={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$2.Node},ps:[{nm:'attrs',mt:'prm',$t:{t:$init$Args()}}],$cont:Template,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Template:$m:build')];},d:['herd.thrillon','Template','$m','build']};}};template$.view=function($6h){
var template$=this;
var $6i;
var $6j;
if(m$1.nn$(($6j=$6h.attrs))){
$6i=m$1.dre$$($6j,{t:$init$Args()},'Template.ceylon 89:24-89:32');
}
else{
$6i=m$1.dre$$({},{t:$init$Args()},'Template.ceylon 91:24-91:33');
}
var $6k;
if(m$1.nn$(($6k=template$.$p6sl07$6l(template$.build($6i))))){
return $6k;
}
else{
var $6m;
m$1.asrt$2("",'97:12-97:49','Template.ceylon',[m$1.nn$(($6m=template$.$p6sl07$6l((m$2.Div(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined))))),'exists empty = visit(Div {})']);
return $6m;
}
};template$.view.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$VNode()},ps:[{nm:'node',mt:'prm',$t:{t:$init$VNode()}}],$cont:Template,pa:3,d:['herd.thrillon','Template','$m','view']};};
template$.$p6sl07$6n=function($6o,$6p,$6q){
var template$=this;
var $6r=setDom$internal($6q);
var $6s;
var $6t;
if(m$1.nn$(($6t=$6o.attrs.oncreate))){
var $6u=(function(){var $6v=$6t;$6s=m$1.jsc$2((function($6w){
$6v($6w);
$6r($6w);
})/*TODO: callable targs 6.1*/);
}());if($6u!==undefined){return $6u;}
}
else{
$6s=m$1.jsc$2(m$1.jsc$3(template$,$6r)/*TODO: callable targs 6.1*/);
}
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'114:12-114:17','Template.ceylon'):Object).defineProperty($6o.attrs,"oncreate",{writable:true,enumerable:true,configurable:true,value:$6s});
var $6x;
var $6y;
if(m$1.nn$(($6y=$6o.attrs.oncreate))){
var $6z=(function(){var $70=$6y;$6x=m$1.jsc$2((function($71){
$70($71);
$6r($71);
})/*TODO: callable targs 6.1*/);
}());if($6z!==undefined){return $6z;}
}
else{
$6x=m$1.jsc$2(m$1.jsc$3(template$,$6r)/*TODO: callable targs 6.1*/);
}
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'130:12-130:17','Template.ceylon'):Object).defineProperty($6o.attrs,"onupdate",{writable:true,enumerable:true,configurable:true,value:setDom$internal($6q)});
var $72=$6o.attrs;
$72[domRetrieverAttributeName$internal()]=null;
};template$.$p6sl07$6n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}},{nm:'node',mt:'prm',$t:{t:m$2.Node}},{nm:'provider',mt:'prm',$t:{t:DomAttributeValueProvider$internal}}],$cont:Template,d:['herd.thrillon','Template','$m','fillDomRetriever$3a2sco']};};
template$.$p6sl07$6l=function($73){
var template$=this;
var $74=$73;
if(m$1.is$($74,{t:m$2.Comment})) {
return null;
}
else if(m$1.is$($74,{t:m$2.ProcessingInstruction})) {
throw m$1.wrapexc(m$1.Exception("Unsupported"),'147:12-147:42','herd/thrillon/Template.ceylon');
}
else if(m$1.is$($74,{t:m$2.Element})) {
return template$.$p6sl07$75($74);
}
else if(m$1.is$($74,{t:m$2.Raw})) {
return template$.$p6sl07$76($74);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};template$.$p6sl07$6l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$VNode()}]},ps:[{nm:'node',mt:'prm',$t:{t:m$2.Node}}],$cont:Template,d:['herd.thrillon','Template','$m','visit$g7zous']};};
template$.$p6sl07$75=function($77){
var template$=this;
var $78;
if(m$1.is$(($78=$77),{t:m$2.Html})){
throw m$1.wrapexc(m$1.Exception("Unsupported"),'159:12-159:42','herd/thrillon/Template.ceylon');
}
function $79(){return $77;}
var $7a=null;
var $7b=function(){var $7c;
if(m$1.is$(($7c=$79()),{t:WrappedComponent}))return $7c.componentArgs();else return {}}();
var $7e;for(var $7d=$79().attributes.iterator();($7e=$7d.next())!==m$1.finished();){
var $7f;
if(!m$1.nn$(($7f=$7e))){
continue;
}
function $7g(){return $7e;}
var $7h;
if(m$1.$eq$($7g().key,domRetrieverAttributeName$internal())&&m$1.is$(($7h=$7g().item),{t:DomAttributeValueProvider$internal})){
$7a=$7h;
}
var $7j;for(var $7i=template$.$p6sl07$7k($7g()).iterator();($7j=$7i.next())!==m$1.finished();){
var $7l=$7j.key,$7m=$7j.item;
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'174:20-174:25','Template.ceylon'):Object).defineProperty($7b,$7l,{writable:true,enumerable:true,configurable:true,value:$7m});
}
}
var $7n=m$1.dre$$(($7o=function(){var $7p;
if(m$1.is$(($7p=$79()),{t:WrappedComponent}))return $7p.component;else return $7p.tagName}(),$7q=$7b,$7r=$79().children.flatMap(m$1.jsc$2(m$1.jsc$3(template$,template$.$p6sl07$7s),[{nm:'child',mt:'prm',$t:m$2.Content()}],{}),{OtherAbsent$flatMap:{t:m$1.Null},Result$flatMap:m$1.mut$([{t:$init$VNode()},{t:m$1.$_String}])}),vnode($7o,$7q,$7r)),{t:$init$VNode()},'Template.ceylon 183:28-187:12');
var $7t,$7u;
if(m$1.nn$(($7t=$7n))&&m$1.nn$(($7u=$7a))){
template$.$p6sl07$6n($7t,$79(),$7u);
}
return $7n;
var $7o,$7q,$7r;
};template$.$p6sl07$75.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$VNode()}]},ps:[{nm:'node',mt:'prm',$t:{t:m$2.Element}}],$cont:Template,d:['herd.thrillon','Template','$m','visitElement$s7utni']};};
template$.$p6sl07$76=function($7v){
var template$=this;
return m$1.dre$$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'198:19-198:19','Template.ceylon'):m).trust($7v.children.first),{t:$init$VNode()},'Template.ceylon 198:19-198:46');
};template$.$p6sl07$76.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$VNode()}]},ps:[{nm:'node',mt:'prm',$t:{t:m$2.Raw}}],$cont:Template,d:['herd.thrillon','Template','$m','visitRaw$7dw6jy']};};
template$.$p6sl07$7s=function($7w){
var template$=this;
var $7x;
if(m$1.is$(($7x=$7w),{t:m$1.Null})){
return m$1.empty();
}
else{
var $7y;
if(m$1.is$(($7y=$7x),{t:m$1.$_String})){
var $7z=(function(){var $80=$7y;return m$1.sarg$(function($81){switch($81){case 0:return $80;}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.$_String},Absent$Iterable:{t:m$1.Nothing}});
}());if($7z!==undefined){return $7z;}
}
else{
var $82;
if(m$1.is$(($82=$7y),{t:m$2.Node})){
return function(){var $83;
if(m$1.nn$(($83=template$.$p6sl07$6l($82))))return m$1.tpl$([$83]);else return m$1.empty()}();
}
else{
var $84;
if(m$1.is$(($84=$82),{t:m$1.Iterable,a:{Element$Iterable:m$1.mut$([{t:m$1.$_String},{t:m$2.Node}]),Absent$Iterable:{t:m$1.Null}}})){
return $84.flatMap(m$1.jsc$2(m$1.jsc$3(template$,template$.$p6sl07$7s),[{nm:'child',mt:'prm',$t:m$2.Content()}],{}),{OtherAbsent$flatMap:{t:m$1.Null},Result$flatMap:m$1.mut$([{t:$init$VNode()},{t:m$1.$_String}])});
}
else{
return template$.$p6sl07$7s($84());
}
}
}
}
};template$.$p6sl07$7s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'u',l:[{t:$init$VNode()},{t:m$1.$_String}]},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'child',mt:'prm',$t:m$2.Content()}],$cont:Template,d:['herd.thrillon','Template','$m','visitChild$cbq6v2']};};
template$.$p6sl07$7k=function($85){
var template$=this;
var $86;
if(m$1.is$(($86=$85),{t:m$1.Null})){
return m$1.empty();
}
function $87(){return $85;}
var $88=function($89){return function(){var $8a;
if(m$1.nn$(($8a=$89)))return m$1.Entry($87().key,$8a,{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}});else return null}();
};
$88.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Nothing}]},Return$Callable:{t:m$1.Anything}}}]},Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}]},ps:[{nm:'attributeValue',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:'u',l:[{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Nothing}]},Return$Callable:{t:m$1.Anything}}}]}]}}],$cont:template$.$p6sl07$7k,d:['herd.thrillon','Template','$m','resolveAttribute$nunac7','$m','makeAttribute$uvnuup']};};
return function($8b){if(m$1.is$($8b,{t:m$1.Null}))return m$1.empty();else if(m$1.is$($8b,m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float}])))return m$1.sarg$(function($8c){switch($8c){case 0:return $88($8b);}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}]),Absent$Iterable:{t:m$1.Nothing}}).coalesced;else if(m$1.is$($8b,{t:m$2.AttributeValueProvider}))return function(){var $8d;
if(m$1.is$(($8d=$8b),{t:VoidAttributeValueProvider$internal}))return m$1.sarg$(function($8e){switch($8e){case 0:return $88(m$1.jsc$2($8d.code,[],{}));}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}]),Absent$Iterable:{t:m$1.Nothing}}).coalesced;else{var $8f;
if(m$1.is$(($8f=$8d),{t:BinderAttributeValueProvider$internal,a:{Exists$BinderAttributeValueProvider:{t:m$1.Null,uv:'out'},T$BinderAttributeValueProvider:{t:m$1.Anything,uv:'out'}}}))return m$1.concatenate(m$1.$arr$sa$([template$.$p6sl07$7k($8f.val),template$.$p6sl07$7k($8f.update)],{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}),{Element$concatenate:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}}}).coalesced;else{var $8g;
if(m$1.is$(($8g=$8f),{t:MultiAttributeValueProvider$internal}))return $8g.providers.flatMap(m$1.jsc$2(m$1.jsc$3(template$,template$.$p6sl07$7k),[{nm:'attribute',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},m$2.AttributeEntry()]}}],{}),{OtherAbsent$flatMap:{t:m$1.Null},Result$flatMap:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}}});else return m$1.sarg$(function($8h){switch($8h){case 0:return $88($8g.attributeValue);}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Null}]),Absent$Iterable:{t:m$1.Nothing}}).coalesced}}}();else return template$.$p6sl07$7k(m$1.Entry($87().key,$8b(),{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$2.AttributeValueProvider}]),Key$Entry:{t:m$1.$_String}}))}($87().item);
};template$.$p6sl07$7k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:m$1.$_String},{t:m$1.$_Boolean},{t:m$1.Integer},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Nothing}]},Return$Callable:{t:m$1.Anything}}}]},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'attribute',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},m$2.AttributeEntry()]}}],$cont:Template,d:['herd.thrillon','Template','$m','resolveAttribute$nunac7']};};
template$.toString=function(){return this.string.valueOf();};
})(Template.$$.prototype);
}
return Template;
}
ex$.$init$Template=$init$Template;$init$Template();
function $8i(){
var key$=new $8i.$$;key$.$p6sl07$8k_="key";
key$.$prop$getAttributeName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$8i,pa:1,d:['herd.thrillon','key','$at','attributeName']};}};
key$.$prop$getAttributeName.get=function(){return attributeName};
return key$;
};$8i.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['herd.thrillon','key']};};
function $init$key(){
if($8i.$$===undefined){
m$1.initTypeProto($8i,'herd.thrillon::key',m$1.Basic);
(function(key$){
m$1.atr$(key$,'attributeName',function(){return this.$p6sl07$8k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$8i,pa:1,d:['herd.thrillon','key','$at','attributeName']};});
key$.build=function($8l){var key$=this;
return m$1.Entry(key$.attributeName,$8l(),{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});
};
key$.build.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'builder',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:{t:m$1.$_String}}},$rt:{t:m$1.$_String},ps:[]}],$cont:$8i,pa:1,d:['herd.thrillon','key','$m','build']};};
key$.set=function($8m){var key$=this;
return m$1.Entry(key$.attributeName,$8m,{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}});
};
key$.set.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'keyValue',mt:'prm',$t:{t:m$1.$_String}}],$cont:$8i,pa:1,d:['herd.thrillon','key','$m','set']};};
key$.toString=function(){return this.string.valueOf();};
})($8i.$$.prototype);
}
return $8i;
}
ex$.$init$key=$init$key;$init$key();var $8n;
function key(){
if($8n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'key\' before it was set"),'5:0-47:0','key.ceylon');
if($8n===undefined){$8n=m$1.INIT$;$8n=$init$key()();$8n.$crtmm$=key.$crtmm$;}
return $8n;
}
ex$.key=key;
key.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$key()},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:key')];},d:['herd.thrillon','key']};};
$prop$getKey=key;
ex$.$prop$getKey=$prop$getKey;
function RouteResolver(routeResolver$){
}
RouteResolver.dynmem$=['onmatch','render'];RouteResolver.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:RouteResolver')];},d:['herd.thrillon','RouteResolver']};};
ex$.RouteResolver=RouteResolver;
function $init$RouteResolver(){
if(RouteResolver.$$===undefined){
m$1.initTypeProtoI(RouteResolver,'herd.thrillon::RouteResolver');
(function(routeResolver$){
routeResolver$.onmatch={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Component()}]},ps:[{nm:'args',mt:'prm',$t:{t:$init$JS()}},{nm:'requestedPath',mt:'prm',$t:{t:m$1.$_String}}],$cont:RouteResolver,pa:5,d:['herd.thrillon','RouteResolver','$m','onmatch']};}};routeResolver$.render={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.$_Array,a:{Element$Array:{t:$init$VNode()}}},{t:$init$VNode()}]},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}],$cont:RouteResolver,pa:5,d:['herd.thrillon','RouteResolver','$m','render']};}};routeResolver$.toString=function(){return this.string.valueOf();};
})(RouteResolver.$$.prototype);
}
return RouteResolver;
}
ex$.$init$RouteResolver=$init$RouteResolver;$init$RouteResolver();
function Router(router$){
router$.$_link$defs$isStaticLink=function($8o){return false;};
router$.redirect$defs$replace=function($8p,$8q,$8r,$8s,$8t){return false;};
router$.redirect$defs$state=function($8p,$8q,$8r,$8s,$8t){return null;};
router$.redirect$defs$title=function($8p,$8q,$8r,$8s,$8t){return null;};
}
Router.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router')];},d:['herd.thrillon','Router']};};
ex$.Router=Router;
function $init$Router(){
if(Router.$$===undefined){
m$1.initTypeProtoI(Router,'herd.thrillon::Router');
(function(router$){
router$.init={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'root',mt:'prm',$t:{t:m$3.Element}},{nm:'defaultRoute',mt:'prm',$t:{t:m$1.$_String}},{nm:'routes',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:$init$Component()},{t:$init$RouteResolver()}]},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}}}],$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$m:init')];},d:['herd.thrillon','Router','$m','init']};}};router$.prefix={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'prefix',mt:'prm',$t:{t:m$1.$_String}}],$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$m:prefix')];},d:['herd.thrillon','Router','$m','prefix']};}};router$.$prop$getLastRoutingPath={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$at:lastRoutingPath')];},d:['herd.thrillon','Router','$at','lastRoutingPath']};}};
router$.parameter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$m:parameter')];},d:['herd.thrillon','Router','$m','parameter']};}};router$.$prop$getParameters={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$JS()},$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$at:parameters')];},d:['herd.thrillon','Router','$at','parameters']};}};
router$.$_link={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'isStaticLink',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$m:link')];},d:['herd.thrillon','Router','$m','link']};}};router$.redirect={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'routeParameters',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'state',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$JS()}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Router,pa:5,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:Router:$m:redirect')];},d:['herd.thrillon','Router','$m','redirect']};}};router$.toString=function(){return this.string.valueOf();};
})(Router.$$.prototype);
}
return Router;
}
ex$.$init$Router=$init$Router;$init$Router();
var $8u;function $valinit$$8u(){if($8u===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'router\' before it was set"),'58:0-144:1','router.ceylon');
if($8u===undefined){$8u=m$1.INIT$;$8u=(function(){function $8v(){
var $8v$=new $8v.$$;Router($8v$);
return $8v$;
};$8v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:0,sts:[{t:Router}],d:['herd.thrillon','router']};};
function $init$$8v(){
if($8v.$$===undefined){
m$1.initTypeProto($8v,'herd.thrillon::router.anonymous#0',m$1.Basic,$init$Router());
(function($8v$){
$8v$.init=function($8w,$8x,$8y){
var $8v$=this;
var $8z={};
var $91,$92;for(var $90=$8y.iterator();($91=$90.next())!==m$1.finished();){
$92=true;var $93=$91.key,$94=$91.item;
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'63:16-63:21','router.ceylon'):Object).defineProperty($8z,$93,{writable:false,enumerable:true,configurable:false,value:$94});
}
if(!$92)m$1.throwexc(m$1.AssertionError("nonempty Iterable with initial \'finished\' element"),'62:12-72:12','router.ceylon');(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'73:12-73:12','router.ceylon'):m).route($8w,$8x,$8z);
};$8v$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'root',mt:'prm',$t:{t:m$3.Element}},{nm:'defaultRoute',mt:'prm',$t:{t:m$1.$_String}},{nm:'routes',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:'u',l:[{t:$init$Component()},{t:$init$RouteResolver()}]},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}}}}],$cont:$8v,pa:3,d:['herd.thrillon','router','$m','init']};};
$8v$.prefix=function($95){
var $8v$=this;
(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'79:12-79:12','router.ceylon'):m).route.prefix($95);
};$8v$.prefix.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'prefix',mt:'prm',$t:{t:m$1.$_String}}],$cont:$8v,pa:3,d:['herd.thrillon','router','$m','prefix']};};
m$1.atr$($8v$,'lastRoutingPath',function(){
return m$1.ndtc$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'85:19-85:19','router.ceylon'):m).route.get(),{t:m$1.$_String},'router.ceylon 85:19-85:31');
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$8v,pa:3,d:['herd.thrillon','router','$at','lastRoutingPath']};});$8v$.parameter=function($96){
var $8v$=this;
return m$1.ndtc$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'91:19-91:19','router.ceylon'):m).route.param($96),m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),'router.ceylon 91:19-91:37');
};$8v$.parameter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:$8v,pa:3,d:['herd.thrillon','router','$m','parameter']};};
m$1.atr$($8v$,'parameters',function(){
return m$1.dre$$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'97:19-97:19','router.ceylon'):m).route.param(),{t:$init$JS()},'router.ceylon 97:19-97:33');
},undefined,function(){return{mod:$CCMM$,$t:{t:$init$JS()},$cont:$8v,pa:3,d:['herd.thrillon','router','$at','parameters']};});$8v$.$_link=function($97){
var $8v$=this;
if($97===undefined){$97=$8v$.$_link$defs$isStaticLink($97);}
var $98;
$98=VoidAttributeValueProvider$internal(m$1.ndtc$((typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'104:50-104:50','router.ceylon'):m).route.link,{t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:m$1.Nothing}]),Return$Callable:{t:m$1.Anything}}},'router.ceylon 104:50-104:61'));
return m$1.Entry("link",($99=m$1.sarg$(function($9a){switch($9a){case 0:return m$1.Entry("oncreate",$98,{Item$Entry:{t:m$2.AttributeValueProvider},Key$Entry:{t:m$1.$_String}});}return m$1.finished();},function(){return m$1.for$(function(){
if(!$97){
var $9b=false;
return function(){
if($9b) return m$1.finished();
$9b=true;
return m$1.Entry("onupdate",$98,{Item$Entry:{t:m$2.AttributeValueProvider},Key$Entry:{t:m$1.$_String}})
};
}
return function(){return m$1.finished();}
},{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$2.AttributeValueProvider},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}});},{Item$Entry:{t:m$2.AttributeValueProvider},Key$Entry:{t:m$1.$_String}}),MultiAttributeValueProvider$internal($99)),{Item$Entry:{t:MultiAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
var $99;
};$8v$.$_link.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'isStaticLink',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$8v,pa:3,d:['herd.thrillon','router','$m','link']};};
$8v$.redirect=function($9c,$9d,$9e,$9f,$9g){
var $8v$=this;
if($9e===undefined){$9e=$8v$.redirect$defs$replace($9c,$9d,$9e,$9f,$9g);}
if($9f===undefined){$9f=$8v$.redirect$defs$state($9c,$9d,$9e,$9f,$9g);}
if($9g===undefined){$9g=$8v$.redirect$defs$title($9c,$9d,$9e,$9f,$9g);}
var $9h={};
var $9j;for(var $9i=$9d.iterator();($9j=$9i.next())!==m$1.finished();){
var $9k=$9j.key,$9l=$9j.item;
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'116:16-116:21','router.ceylon'):Object).defineProperty($9h,$9k,{writable:false,enumerable:true,configurable:false,value:$9l});
}
var $9m={};
var $9o,$9p;for(var $9n=m$1.sarg$(function($9q){switch($9q){case 0:return m$1.Entry("replace",$9e,{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.$_String}});case 1:return m$1.Entry("state",$9f,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:$init$JS()}]),Key$Entry:{t:m$1.$_String}});case 2:return m$1.Entry("title",$9g,{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}});}return m$1.finished();},undefined,{Element$Iterable:m$1.mut$([{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_Boolean},Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:$init$JS()}]),Key$Entry:{t:m$1.$_String}}},{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),Key$Entry:{t:m$1.$_String}}}]),Absent$Iterable:{t:m$1.Nothing}}).iterator();($9o=$9n.next())!==m$1.finished();){
$9p=true;var $9r=$9o.key,$9s=$9o.item;
var $9t;
if(m$1.nn$(($9t=$9s))){
(typeof Object==='undefined'||Object===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Object"),'130:20-130:25','router.ceylon'):Object).defineProperty($9m,$9r,{writable:true,enumerable:true,configurable:true,value:$9t});
}
}
if(!$9p)m$1.throwexc(m$1.AssertionError("nonempty Iterable with initial \'finished\' element"),'128:12-140:16','router.ceylon');(typeof m==='undefined'||m===null?m$1.throwexc(m$1.Exception("Undefined or null reference: m"),'141:12-141:12','router.ceylon'):m).route.set($9c,$9h,$9m);
};$8v$.redirect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'routeParameters',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:{t:m$1.$_String},Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Null}}}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'state',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$JS()}]}},{nm:'title',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:$8v,pa:3,d:['herd.thrillon','router','$m','redirect']};};
$8v$.toString=function(){return this.string.valueOf();};
})($8v.$$.prototype);
}
return $8v;
}
$init$$8v();return $8v();}())};return $8u;};
function router(){return $valinit$$8u();}
ex$.router=router;
var $prop$getRouter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Router},pa:1,d:['herd.thrillon','router']};}};
ex$.$prop$getRouter=$prop$getRouter;
$prop$getRouter.get=router;
router.$crtmm$=$prop$getRouter.$crtmm$;
function $9v(){
var lifecycle$=new $9v.$$;
return lifecycle$;
};$9v.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['herd.thrillon','lifecycle']};};
function $init$lifecycle(){
if($9v.$$===undefined){
m$1.initTypeProto($9v,'herd.thrillon::lifecycle',m$1.Basic);
(function(lifecycle$){
lifecycle$.init=function($9x){var lifecycle$=this;
return m$1.Entry("oninit",VoidAttributeValueProvider$internal($9x),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.init.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','init']};};
lifecycle$.create=function($9y){var lifecycle$=this;
return m$1.Entry("oncreate",VoidAttributeValueProvider$internal($9y),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.create.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','create']};};
lifecycle$.update=function($9z){var lifecycle$=this;
return m$1.Entry("onupdate",VoidAttributeValueProvider$internal($9z),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.update.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','update']};};
lifecycle$.createAndUpdate=function($a0){var lifecycle$=this;
return m$1.Entry("oncreateAndUpdate",MultiAttributeValueProvider$internal(m$1.sarg$(function($a1){switch($a1){case 0:return lifecycle$.create($a0);case 1:return lifecycle$.update($a0);}return m$1.finished();},undefined,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:m$1.mut$([{t:m$1.Null},{t:m$1.$_String},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])}},{t:m$1.$_Boolean},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_Boolean}])}},{t:m$1.Integer},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.Integer}])}},{t:m$1.Float},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.Float}])}},{t:m$2.AttributeValueProvider},{t:m$1.Callable,a:{Arguments$Callable:{t:m$1.Empty},Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$2.AttributeValueProvider}])}}]),Key$Entry:{t:m$1.$_String}}},Absent$Iterable:{t:m$1.Nothing}})),{Item$Entry:{t:MultiAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.createAndUpdate.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','createAndUpdate']};};
lifecycle$.beforeRemove=function($a2){var lifecycle$=this;
return m$1.Entry("onbeforeremove",VoidAttributeValueProvider$internal($a2),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.beforeRemove.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','beforeRemove']};};
lifecycle$.remove=function($a3){var lifecycle$=this;
return m$1.Entry("onremove",VoidAttributeValueProvider$internal($a3),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','remove']};};
lifecycle$.beforeUpdate=function($a4){var lifecycle$=this;
return m$1.Entry("onbeforeupdate",VoidAttributeValueProvider$internal($a4),{Item$Entry:{t:VoidAttributeValueProvider$internal},Key$Entry:{t:m$1.$_String}});
};
lifecycle$.beforeUpdate.$crtmm$=function(){return{mod:$CCMM$,$t:m$2.AttributeEntry(),ps:[{nm:'code',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:$init$VNode()},{t:$init$VNode()}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'vnode',mt:'prm',$t:{t:$init$VNode()}},{nm:'old',mt:'prm',$t:{t:$init$VNode()}}]}],$cont:$9v,pa:1,d:['herd.thrillon','lifecycle','$m','beforeUpdate']};};
lifecycle$.toString=function(){return this.string.valueOf();};
})($9v.$$.prototype);
}
return $9v;
}
ex$.$init$lifecycle=$init$lifecycle;$init$lifecycle();var $a5;
function lifecycle(){
if($a5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'lifecycle\' before it was set"),'11:0-65:0','lifecycle.ceylon');
if($a5===undefined){$a5=m$1.INIT$;$a5=$init$lifecycle()();$a5.$crtmm$=lifecycle.$crtmm$;}
return $a5;
}
ex$.lifecycle=lifecycle;
lifecycle.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$lifecycle()},pa:1,an:function(){return[m$1.doc$($CCMM$,'herd.thrillon:lifecycle')];},d:['herd.thrillon','lifecycle']};};
$prop$getLifecycle=lifecycle;
ex$.$prop$getLifecycle=$prop$getLifecycle;
ex$.$pkg$ans$herd$thrillon=function(){return[m$1.shared()];};
ex$.$pkg$ans$herd$thrillon$jsutils=function(){return[m$1.doc$($CCMM$,'herd.thrillon.jsutils','$pkg-anns'),m$1.shared()];};
ex$.$pkg$ans$herd$thrillon$internal=[];
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
