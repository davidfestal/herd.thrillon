(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/collection/1.3.3/ceylon.collection-1.3.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.3.3/ceylon.collection-1.3.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'ceylon.collection/1.3.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
function SingletonSet(element,$$targs$$,singletonSet$){
$init$SingletonSet();
if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,$$targs$$);
singletonSet$.element_=element;
m$1.Set({Element$Set:$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element out*/},singletonSet$);
return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.3','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
ex$.SingletonSet=SingletonSet;
function $init$SingletonSet(){
if(SingletonSet.$$===undefined){
m$1.initTypeProto(SingletonSet,'ceylon.collection::SingletonSet',m$1.Basic,m$1.Set);
(function(singletonSet$){
m$1.atr$(singletonSet$,'element',function(){return this.element_;},undefined,function(){return{mod:$CCMM$,$t:'Element$SingletonSet',$cont:SingletonSet,pa:1,d:['ceylon.collection','SingletonSet','$at','element']};});
singletonSet$.contains=function($sw){var singletonSet$=this;
return m$1.$eq$(singletonSet$.element,$sw);
};singletonSet$.complement=function($sx,$4ycb5n$){var singletonSet$=this;
return ($sy=(m$1.$cnt$2(singletonSet$.element,$sx)?m$1.emptySet():null),m$1.nn$($sy)?$sy:singletonSet$);
var $sy;
};
singletonSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:SingletonSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','complement']};};
singletonSet$.intersection=function($sz,$b7yrl4$){
var singletonSet$=this;
var $t0;
if(m$1.is$(($t0=singletonSet$.element),$b7yrl4$.Other$intersection,$b7yrl4$)&&m$1.$cnt$2($t0,$sz)){
return SingletonSet($t0,{Element$SingletonSet:m$1.mit$([singletonSet$.$$targs$$.Element$SingletonSet,$b7yrl4$.Other$intersection])});
}
else{
return m$1.emptySet();
}
};singletonSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$SingletonSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:SingletonSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','intersection']};};
singletonSet$.union=function($t1,$t5idbk$){
var singletonSet$=this;
var $t2=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
$t2.addAll($t1);
$t2.add(singletonSet$.element);
return UnmodifiableSet($t2,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
};singletonSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:SingletonSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','union']};};
singletonSet$.exclusiveUnion=function($t3,$xiti9c$){
var singletonSet$=this;
var $t4=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
$t4.addAll($t3);
if(m$1.$cnt$2(singletonSet$.element,$t3)){
$t4.remove(singletonSet$.element);
}
else{
$t4.add(singletonSet$.element);
}
return UnmodifiableSet($t4,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
};singletonSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:SingletonSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','exclusiveUnion']};};
singletonSet$.iterator=function(){var singletonSet$=this;
return m$1.Singleton(singletonSet$.element,{Element$Singleton:singletonSet$.$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element out*/}).iterator();
};singletonSet$.equals=function($t5){var singletonSet$=this;
return singletonSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(singletonSet$,$t5);
};m$1.atr$(singletonSet$,'hash',function(){
var singletonSet$=this;
return m$1.attrGetter(singletonSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$at','hash']};});
singletonSet$.each=function($t6){var singletonSet$=this;
return $t6(singletonSet$.element);
};singletonSet$.clone=function(){var singletonSet$=this;
return singletonSet$;
};
singletonSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonSet,a:{Element$SingletonSet:'Element$SingletonSet'}},ps:[],$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$m','clone']};};
singletonSet$.toString=function(){return this.string.valueOf();};
})(SingletonSet.$$.prototype);
}
return SingletonSet;
}
ex$.$init$SingletonSet=$init$SingletonSet;$init$SingletonSet();SingletonSet.inst$$=function($t7){
var singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,{Element$SingletonSet:$t7.$$targs$$.Type$Class.a.Element$SingletonSet});
m$1.set_type_args(singletonSet$,{Element$Set:singletonSet$.$$targs$$.Element$SingletonSet,Element$Collection:singletonSet$.$$targs$$.Element$SingletonSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:singletonSet$.$$targs$$.Element$SingletonSet,Element$Category:{t:m$1.$_Object}});
return singletonSet$;
};
SingletonSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonSet.element')return o.element_;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonSet.element')o.element_=i;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement))];
};
function Stability(stability$){
$init$Stability();
if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.collection::Stability"),'?','?')
return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
if(Stability.$$===undefined){
m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
(function(stability$){
stability$.toString=function(){return this.string.valueOf();};
})(Stability.$$.prototype);
}
return Stability;
}
ex$.$init$Stability=$init$Stability;$init$Stability();
function $t8(){
var unlinked$=new $t8.$$;Stability(unlinked$);
return unlinked$;
};$t8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','unlinked']};};
function $init$unlinked(){
if($t8.$$===undefined){
m$1.initTypeProto($t8,'ceylon.collection::unlinked',$init$Stability());
(function(unlinked$){
unlinked$.toString=function(){return this.string.valueOf();};
})($t8.$$.prototype);
}
return $t8;
}
ex$.$init$unlinked=$init$unlinked;$init$unlinked();var $ta;
function unlinked(){
if($ta===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
if($ta===undefined){$ta=m$1.INIT$;$ta=$init$unlinked()();$ta.$crtmm$=unlinked.$crtmm$;}
return $ta;
}
ex$.unlinked=unlinked;
unlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unlinked()},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked=unlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $tb(){
var linked$=new $tb.$$;Stability(linked$);
return linked$;
};$tb.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','linked']};};
function $init$linked(){
if($tb.$$===undefined){
m$1.initTypeProto($tb,'ceylon.collection::linked',$init$Stability());
(function(linked$){
linked$.toString=function(){return this.string.valueOf();};
})($tb.$$.prototype);
}
return $tb;
}
ex$.$init$linked=$init$linked;$init$linked();var $td;
function linked(){
if($td===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
if($td===undefined){$td=m$1.INIT$;$td=$init$linked()();$td.$crtmm$=linked.$crtmm$;}
return $td;
}
ex$.linked=linked;
linked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$linked()},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked=linked;
ex$.$prop$getLinked=$prop$getLinked;
function Cell(element,rest,$$targs$$,cell$){
$init$Cell();
if(cell$===undefined)cell$=new Cell.$$;
m$1.set_type_args(cell$,$$targs$$);
cell$.element_=element;
cell$.rest_=rest;
return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
ex$.Cell=Cell;
function $init$Cell(){
if(Cell.$$===undefined){
m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
(function(cell$){
m$1.atr$(cell$,'element',function(){return this.element_;},function($te){return this.element_=$te;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
m$1.atr$(cell$,'rest',function(){return this.rest_;},function($tf){return this.rest_=$tf;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
cell$.clone=function(){var cell$=this;
return Cell(cell$.element,($tg=cell$.rest,m$1.jsc$3($tg,m$1.nn$($tg)?$tg.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});
var $tg;
};
cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
cell$.toString=function(){return this.string.valueOf();};
})(Cell.$$.prototype);
}
return Cell;
}
ex$.$init$Cell=$init$Cell;$init$Cell();Cell.inst$$=function($th){
var cell$=new Cell.$$;
m$1.set_type_args(cell$,{Element$Cell:$th.$$targs$$.Type$Class.a.Element$Cell});
return cell$;
};
Cell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Cell.element')return o.element_;
else if(n==='ceylon.collection::Cell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
Cell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Cell.element')o.element_=i;
else if(n==='ceylon.collection::Cell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
Cell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CellIterator($1dkeuw$ti,$$targs$$,cellIterator$){
$init$CellIterator();
if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
m$1.set_type_args(cellIterator$,$$targs$$);
cellIterator$.$1dkeuw$ti_=$1dkeuw$ti;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator/*ORALE!Element inv pero Element out*/},cellIterator$);
return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
ex$.CellIterator=CellIterator;
function $init$CellIterator(){
if(CellIterator.$$===undefined){
m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
(function(cellIterator$){
m$1.atr$(cellIterator$,'$1dkeuw$ti',function(){return this.$1dkeuw$ti_;},function($tj){return this.$1dkeuw$ti_=$tj;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
cellIterator$.next=function(){
var cellIterator$=this;
var $tk;
if(m$1.nn$(($tk=cellIterator$.$1dkeuw$ti))){
cellIterator$.$1dkeuw$ti=$tk.rest;
return $tk.element;
}
return m$1.finished();
};cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
cellIterator$.toString=function(){return this.string.valueOf();};
})(CellIterator.$$.prototype);
}
return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;$init$CellIterator();
function CachingCell(element,keyHash,rest,$$targs$$,cachingCell$){
$init$CachingCell();
if(cachingCell$===undefined)cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,$$targs$$);
cachingCell$.element_=element;
cachingCell$.keyHash_=keyHash;
cachingCell$.rest_=rest;
return cachingCell$;
}
CachingCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$CachingCell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$CachingCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell')];},d:['ceylon.collection','CachingCell']};};
ex$.CachingCell=CachingCell;
function $init$CachingCell(){
if(CachingCell.$$===undefined){
m$1.initTypeProto(CachingCell,'ceylon.collection::CachingCell',m$1.Basic);
(function(cachingCell$){
m$1.atr$(cachingCell$,'element',function(){return this.element_;},function($tl){return this.element_=$tl;},function(){return{mod:$CCMM$,$t:'Element$CachingCell',$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','CachingCell','$at','element']};});
m$1.atr$(cachingCell$,'keyHash',function(){return this.keyHash_;},function($tm){return this.keyHash_=$tm;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];},d:['ceylon.collection','CachingCell','$at','keyHash']};});
m$1.atr$(cachingCell$,'rest',function(){return this.rest_;},function($tn){return this.rest_=$tn;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','CachingCell','$at','rest']};});
cachingCell$.clone=function(){var cachingCell$=this;
return CachingCell(cachingCell$.element,cachingCell$.keyHash,($to=cachingCell$.rest,m$1.jsc$3($to,m$1.nn$($to)?$to.clone:null))(),{Element$CachingCell:cachingCell$.$$targs$$.Element$CachingCell});
var $to;
};
cachingCell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}},ps:[],$cont:CachingCell,pa:1,d:['ceylon.collection','CachingCell','$m','clone']};};
cachingCell$.toString=function(){return this.string.valueOf();};
})(CachingCell.$$.prototype);
}
return CachingCell;
}
ex$.$init$CachingCell=$init$CachingCell;$init$CachingCell();CachingCell.inst$$=function($tp){
var cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,{Element$CachingCell:$tp.$$targs$$.Type$Class.a.Element$CachingCell});
return cachingCell$;
};
CachingCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::CachingCell.element')return o.element_;
else if(n==='ceylon.collection::CachingCell.keyHash')return o.keyHash_;
else if(n==='ceylon.collection::CachingCell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::CachingCell.element')o.element_=i;
else if(n==='ceylon.collection::CachingCell.keyHash')o.keyHash_=i;
else if(n==='ceylon.collection::CachingCell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getKeyHash)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CachingCellIterator($1dkeuw$tq,$$targs$$,cachingCellIterator$){
$init$CachingCellIterator();
if(cachingCellIterator$===undefined)cachingCellIterator$=new CachingCellIterator.$$;
m$1.set_type_args(cachingCellIterator$,$$targs$$);
cachingCellIterator$.$1dkeuw$tq_=$1dkeuw$tq;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingCellIterator/*ORALE!Element inv pero Element out*/},cachingCellIterator$);
return cachingCellIterator$;
}
CachingCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},pa:1024}],tp:{Element$CachingCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingCellIterator'}}],d:['ceylon.collection','CachingCellIterator']};};
ex$.CachingCellIterator=CachingCellIterator;
function $init$CachingCellIterator(){
if(CachingCellIterator.$$===undefined){
m$1.initTypeProto(CachingCellIterator,'ceylon.collection::CachingCellIterator',m$1.Basic,m$1.Iterator);
(function(cachingCellIterator$){
m$1.atr$(cachingCellIterator$,'$1dkeuw$tq',function(){return this.$1dkeuw$tq_;},function($tr){return this.$1dkeuw$tq_=$tr;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},$cont:CachingCellIterator,pa:1024,d:['ceylon.collection','CachingCellIterator','$at','iter$ndjelf']};});
cachingCellIterator$.next=function(){
var cachingCellIterator$=this;
var $ts;
if(m$1.nn$(($ts=cachingCellIterator$.$1dkeuw$tq))){
cachingCellIterator$.$1dkeuw$tq=$ts.rest;
return $ts.element;
}
return m$1.finished();
};cachingCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingCellIterator',{t:m$1.Finished}]},ps:[],$cont:CachingCellIterator,pa:3,d:['ceylon.collection','CachingCellIterator','$m','next']};};
cachingCellIterator$.toString=function(){return this.string.valueOf();};
})(CachingCellIterator.$$.prototype);
}
return CachingCellIterator;
}
ex$.$init$CachingCellIterator=$init$CachingCellIterator;$init$CachingCellIterator();
function partition($tt,$tu,$zgqkqa$){
var $tv=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $tw=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $ty;for(var $tx=$tt.iterator();($ty=$tx.next())!==m$1.finished();){
if($tu($ty)){
$tv.add($ty);
}
else{
$tw.add($ty);
}
}
return m$1.tpl$([$tv.sequence(),$tw.sequence()]);
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}},{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$partition'}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$partition']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$partition'}]}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
function SingletonMap(entry,$$targs$$,singletonMap$){
$init$SingletonMap();
if(singletonMap$===undefined)singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,$$targs$$);
singletonMap$.entry_=entry;
m$1.Map({Key$Map:$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key out*/,Item$Map:$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item out*/},singletonMap$);
return singletonMap$;
}
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.3','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
ex$.SingletonMap=SingletonMap;
function $init$SingletonMap(){
if(SingletonMap.$$===undefined){
m$1.initTypeProto(SingletonMap,'ceylon.collection::SingletonMap',m$1.Basic,m$1.Map);
(function(singletonMap$){
m$1.atr$(singletonMap$,'entry',function(){return this.entry_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Entry,a:{Key$Entry:'Key$SingletonMap',Item$Entry:'Item$SingletonMap'}},$cont:SingletonMap,pa:1,d:['ceylon.collection','SingletonMap','$at','entry']};});
singletonMap$.defines=function($tz){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry.key,$tz);
};singletonMap$.$_get=function($u0){
var singletonMap$=this;
if(m$1.$eq$(singletonMap$.entry.key,$u0)){
return singletonMap$.entry.item;
}
else{
return null;
}
};singletonMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$SingletonMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','get']};};
singletonMap$.contains=function($u1){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry,$u1);
};singletonMap$.iterator=function(){var singletonMap$=this;
return m$1.Singleton(singletonMap$.entry,{Element$Singleton:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key out*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item out*/}}}).iterator();
};singletonMap$.equals=function($u2){var singletonMap$=this;
return singletonMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(singletonMap$,$u2);
};m$1.atr$(singletonMap$,'hash',function(){
var singletonMap$=this;
return m$1.attrGetter(singletonMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$at','hash']};});
singletonMap$.each=function($u3){var singletonMap$=this;
return $u3(singletonMap$.entry);
};singletonMap$.clone=function(){var singletonMap$=this;
return singletonMap$;
};
singletonMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonMap,a:{Key$SingletonMap:'Key$SingletonMap',Item$SingletonMap:'Item$SingletonMap'}},ps:[],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','clone']};};
singletonMap$.toString=function(){return this.string.valueOf();};
})(SingletonMap.$$.prototype);
}
return SingletonMap;
}
ex$.$init$SingletonMap=$init$SingletonMap;$init$SingletonMap();SingletonMap.inst$$=function($u4){
var singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,{Key$SingletonMap:$u4.$$targs$$.Type$Class.a.Key$SingletonMap,Item$SingletonMap:$u4.$$targs$$.Type$Class.a.Item$SingletonMap});
m$1.set_type_args(singletonMap$,{Key$Map:singletonMap$.$$targs$$.Key$SingletonMap,Item$Map:singletonMap$.$$targs$$.Item$SingletonMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key out*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item out*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key out*/,Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item out*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:singletonMap$.$$targs$$.Item$SingletonMap,Key$Correspondence:{t:m$1.$_Object}});
return singletonMap$;
};
SingletonMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonMap.entry')return o.entry_;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonMap.entry')o.entry_=i;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getEntry))];
};
function SortedSet($$targs$$,sortedSet$){
m$1.set_type_args(sortedSet$,$$targs$$,SortedSet);
m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Element$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element out*/,Index$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Index in*/},sortedSet$);
m$1.Set({Element$Set:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element out*/},sortedSet$);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Element$Ranged:'Element$SortedSet',Index$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
if(SortedSet.$$===undefined){
m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
(function(sortedSet$){
sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};sortedSet$.ascendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:ascendingElements')];},d:['ceylon.collection','SortedSet','$m','ascendingElements']};}};sortedSet$.descendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:descendingElements')];},d:['ceylon.collection','SortedSet','$m','descendingElements']};}};sortedSet$.toString=function(){return this.string.valueOf();};
})(SortedSet.$$.prototype);
}
return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;$init$SortedSet();
function group($u5,$u6,$bkwzr$){
var $u7=HashMap(undefined,undefined,undefined,{Key$HashMap:$bkwzr$.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}});
var $u9;for(var $u8=$u5.iterator();($u9=$u8.next())!==m$1.finished();){
var $ua=$u6($u9);
var $ub;
if(m$1.nn$(($ub=$u7.$_get($ua)))){
$ub.add($u9);
}
else{
var $uc=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bkwzr$.Element$group});
$uc.add($u9);
($ud=$uc,$u7.put($ua,$ud), $ud);
var $ud;
}
}
function $ue($uf,$ug){
var $uh;
m$1.asrt$2("",'30:8-30:54','group.ceylon',[m$1.is$(($uh=$ug.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element out*/}}),'is [Element+] result = list.sequence()']);
return $uh;
};$ue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}},ps:[{nm:'group',mt:'prm',$t:$bkwzr$.Group$group},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
return $u7.mapItems(m$1.jsc$3(0,$ue),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element out*/}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$group'}}},{nm:'grouping',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Group$group',Arguments$Callable:{t:'T',l:['Element$group']}}},$rt:'Group$group',ps:[{nm:'element',mt:'prm',$t:'Element$group'}]}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
function UnmodifiableList($1dkeuw$ui,$$targs$$,unmodifiableList$){
$init$UnmodifiableList();
if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,$$targs$$);
unmodifiableList$.$1dkeuw$ui_=$1dkeuw$ui;
m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
ex$.UnmodifiableList=UnmodifiableList;
function $init$UnmodifiableList(){
if(UnmodifiableList.$$===undefined){
m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
(function(unmodifiableList$){
m$1.atr$(unmodifiableList$,'$1dkeuw$ui',function(){return this.$1dkeuw$ui_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
unmodifiableList$.getFromFirst=function($uj){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.getFromFirst($uj);
};m$1.atr$(unmodifiableList$,'size',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
m$1.atr$(unmodifiableList$,'lastIndex',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
m$1.atr$(unmodifiableList$,'first',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
m$1.atr$(unmodifiableList$,'rest',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$ui.rest,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
unmodifiableList$.iterator=function(){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.iterator();
};m$1.atr$(unmodifiableList$,'reversed',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$ui.reversed,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
unmodifiableList$.measure=function($uk,$ul){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.measure($uk,$ul);
};unmodifiableList$.span=function($um,$un){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.span($um,$un);
};unmodifiableList$.spanFrom=function($uo){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.spanFrom($uo);
};unmodifiableList$.spanTo=function($up){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.spanTo($up);
};unmodifiableList$.equals=function($uq){var unmodifiableList$=this;
return m$1.$eq$(unmodifiableList$.$1dkeuw$ui,$uq);
};m$1.atr$(unmodifiableList$,'hash',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
unmodifiableList$.clone=function(){var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$ui.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
};unmodifiableList$.each=function($ur){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$ui.each($ur);
};unmodifiableList$.toString=function(){return this.string.valueOf();};
})(UnmodifiableList.$$.prototype);
}
return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;$init$UnmodifiableList();UnmodifiableList.inst$$=function($us){
var unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,{Element$UnmodifiableList:$us.$$targs$$.Type$Class.a.Element$UnmodifiableList});
m$1.set_type_args(unmodifiableList$,{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Collection:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Absent$Iterable:{t:m$1.Null},Element$Iterable:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Subrange$Ranged:{t:m$1.List,a:{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList}},Index$Ranged:{t:m$1.Integer}});
return unmodifiableList$;
};
UnmodifiableList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableList.list')return o.$1dkeuw$ui_;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableList.list')o.$1dkeuw$ui_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$ui))];
};
function unmodifiableList($ut,$apctt9$){return UnmodifiableList($ut,{Element$UnmodifiableList:$apctt9$.Element$unmodifiableList/*ORALE!Element inv pero Element out*/});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function MutableSet($$targs$$,mutableSet$){
m$1.set_type_args(mutableSet$,$$targs$$,MutableSet);
m$1.Set({Element$Set:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element out*/},mutableSet$);
SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element in*/},mutableSet$);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
if(MutableSet.$$===undefined){
m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',m$1.Set,$init$SetMutator());
(function(mutableSet$){
mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};mutableSet$.toString=function(){return this.string.valueOf();};
})(MutableSet.$$.prototype);
}
return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
m$1.set_type_args(setMutator$,$$targs$$,SetMutator);
m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
if(SetMutator.$$===undefined){
m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
(function(setMutator$){
setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($uu){
var setMutator$=this;
var $uv=false;
var $ux;for(var $uw=$uu.iterator();($ux=$uw.next())!==m$1.finished();){
if(setMutator$.add($ux)){
$uv=true;
}
}
return $uv;
};setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($uy){
var setMutator$=this;
var $uz=false;
var $v1;for(var $v0=$uy.iterator();($v1=$v0.next())!==m$1.finished();){
if(setMutator$.remove($v1)){
$uz=true;
}
}
return $uz;
};setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};setMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:SetMutator,a:{Element$SetMutator:'Element$SetMutator'}},ps:[],$cont:SetMutator,pa:7,d:['ceylon.collection','SetMutator','$m','clone']};}};setMutator$.toString=function(){return this.string.valueOf();};
})(SetMutator.$$.prototype);
}
return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;$init$SetMutator();
function ArrayList$$c($$targs$$,arrayList$){
m$1.set_type_args(arrayList$,$$targs$$);
m$1.SearchableList({Element$SearchableList:$$targs$$.Element$ArrayList},arrayList$);
MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
}
function ArrayList(){return ArrayList$c_$c$.apply(undefined,arguments);}
function ArrayList$c_$c$$$a($v2,$v3,$v4,$$targs$$,arrayList$){
if($v2===undefined){$v2=(0);}
if($v3===undefined){$v3=(1.5);}
if($v4===undefined){$v4=m$1.empty();}
arrayList$.$1dkeuw$v5_=$v2;
m$1.atr$(arrayList$,'$1dkeuw$v5',function(){return this.$1dkeuw$v5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$v6_=$v3;
m$1.atr$(arrayList$,'$1dkeuw$v6',function(){return this.$1dkeuw$v6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$v7_=m$1.$_Array($v4,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$v7',function(){return this.$1dkeuw$v7_;},function($v8){return this.$1dkeuw$v7_=$v8;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$v9_=arrayList$.$1dkeuw$v7.size;
m$1.atr$(arrayList$,'$1dkeuw$v9',function(){return this.$1dkeuw$v9_;},function($va){return this.$1dkeuw$v9_=$va;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_$c$($v2,$v3,$v4,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($v2===undefined){$v2=(0);}
if($v3===undefined){$v3=(1.5);}
if($v4===undefined){$v4=m$1.empty();}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_$c$$$a($v2,$v3,$v4,$$targs$$,arrayList$);
m$1.asrt$2("initial capacity cannot be negative",'86:4-87:33','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5>=(0)),'initialCapacity >= 0']);
m$1.asrt$2("initial capacity too large",'89:4-90:52','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5<=m$1.runtime().maxArraySize),'initialCapacity <= runtime.maxArraySize']);
m$1.asrt$2("growth factor must be at least 1.0",'92:4-93:32','ArrayList.ceylon',[arrayList$.$1dkeuw$v6.notSmallerThan((1.0)),'growthFactor >= 1.0']);
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$v9;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$v9<arrayList$.$1dkeuw$v5)){
var $vb=arrayList$.$1dkeuw$vc(arrayList$.$1dkeuw$v5);
arrayList$.$1dkeuw$v7.copyTo($vb,0,0,arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7=$vb;
}
arrayList$.getFromFirst=function($vd){return (($ve=$vd,$ve.notSmallerThan((0))&&$ve.smallerThan(arrayList$.$1dkeuw$v9))?arrayList$.$1dkeuw$v7.$_get($vd):null);
};
arrayList$.iterator=function(){return (function(){function $vf($$targs$$){
var $vf$=new $vf.$$;$vf$.outer$=arrayList$;
$vf$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element out*/},$vf$);
$vf$.$1dkeuw$vg_=(0);
$vf$.$prop$get$1dkeuw$vg={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$vf,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};}};
$vf$.$prop$get$1dkeuw$vg.get=function(){return $1dkeuw$vg};
return $vf$;
};$vf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$vf(){
if($vf.$$===undefined){
m$1.initTypeProto($vf,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($vf$){
m$1.atr$($vf$,'$1dkeuw$vg',function(){return this.$1dkeuw$vg_;},function($vh){return this.$1dkeuw$vg_=$vh;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$vf,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$vf$.next=function(){
var $vf$=this;
if(($vf$.$1dkeuw$vg<arrayList$.$1dkeuw$v9)){
var $vi;
if(m$1.nn$(($vi=arrayList$.$1dkeuw$v7.$_get(($vj=$vf$.$1dkeuw$vg,$vf$.$1dkeuw$vg=$vj.successor,$vj))))){
return $vi;
}
else{
var $vk;
m$1.asrt$2("",'203:20-203:44','ArrayList.ceylon',[m$1.is$(($vk=null),arrayList$.$$targs$$.Element$ArrayList),'is Element null']);
return $vk;
}
var $vj;
}
else{
return m$1.finished();
}
};$vf$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$vf,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$vf$.toString=function(){return this.string.valueOf();};
})($vf.$$.prototype);
}
return $vf;
}
arrayList$.$init$$vf=$init$$vf;$init$$vf();return $vf();}());
};
arrayList$.measure=function($vm,$vn){return arrayList$.span(($vo=measureToSpan($vm,$vn),$vo.$_get(0)),$vo.$_get(1));
};
arrayList$.deleteMeasure=function($vp,$vq){return arrayList$.deleteSpan(($vr=measureToSpan($vp,$vq),$vr.$_get(0)),$vr.$_get(1));
};
arrayList$.spanFrom=function($vs){return ($vt=(($vs>=arrayList$.$1dkeuw$v9)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($vt)?$vt:arrayList$.span($vs,(arrayList$.$1dkeuw$v9-(1))));
var $vt;
};
arrayList$.spanTo=function($vu){return ($vv=(($vu<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($vv)?$vv:arrayList$.span(0,$vu));
var $vv;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$v9>(0))?arrayList$.$1dkeuw$v7.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$v9>=(1))?(arrayList$.$1dkeuw$v9-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.$_push=function($vw){return arrayList$.add($vw);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($vx){return arrayList$.add($vx);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($vy){return arrayList$.$1dkeuw$v7.find($vy);
};
arrayList$.findLast=function($vz){return arrayList$.$1dkeuw$v7.findLast($vz);
};
arrayList$.occursAt=function($w0,$w1){return (($w0<arrayList$.$1dkeuw$v9)?arrayList$.$1dkeuw$v7.occursAt($w0,$w1):false);
};
arrayList$.firstOccurrence=function($w2,$w3,$w4){if($w3===undefined){$w3=arrayList$.firstOccurrence$defs$from($w2,$w3,$w4);}
if($w4===undefined){$w4=arrayList$.firstOccurrence$defs$length($w2,$w3,$w4);}
return function(){var $w5;
if(m$1.nn$(($w5=($w6=$w2,$w7=$w3,$w8=(smallest(($w3+$w4),arrayList$.size)-$w3),($w9=arrayList$.$1dkeuw$v7,m$1.jsc$3($w9,$w9.firstOccurrence))($w6,$w7,$w8)))))return $w5;else return null}();
var $w6,$w7,$w8,$w9;
};
arrayList$.lastOccurrence=function($wa,$wb,$wc){if($wb===undefined){$wb=arrayList$.lastOccurrence$defs$from($wa,$wb,$wc);}
if($wc===undefined){$wc=arrayList$.lastOccurrence$defs$length($wa,$wb,$wc);}
return function(){var $wd;
if(m$1.nn$(($wd=($we=$wa,$wf=largest($wb,(arrayList$.$1dkeuw$v7.size-arrayList$.size)),$wg=$wc,($wh=arrayList$.$1dkeuw$v7,m$1.jsc$3($wh,$wh.lastOccurrence))($we,$wf,$wg)))))return $wd;else return null}();
var $we,$wf,$wg,$wh;
};
arrayList$.occurs=function($wi,$wj,$wk){if($wj===undefined){$wj=arrayList$.occurs$defs$from($wi,$wj,$wk);}
if($wk===undefined){$wk=arrayList$.occurs$defs$length($wi,$wj,$wk);}
return ($wl=$wi,$wm=$wj,$wn=(smallest(($wj+$wk),arrayList$.size)-$wj),($wo=arrayList$.$1dkeuw$v7,m$1.jsc$3($wo,$wo.occurs))($wl,$wm,$wn));
var $wl,$wm,$wn,$wo;
};
arrayList$.occurrences=function($wp,$wq,$wr){if($wq===undefined){$wq=arrayList$.occurrences$defs$from($wp,$wq,$wr);}
if($wr===undefined){$wr=arrayList$.occurrences$defs$length($wp,$wq,$wr);}
return ($ws=$wp,$wt=$wq,$wu=(smallest(($wq+$wr),arrayList$.size)-$wq),($wv=arrayList$.$1dkeuw$v7,m$1.jsc$3($wv,$wv.occurrences))($ws,$wt,$wu));
var $ws,$wt,$wu,$wv;
};
return arrayList$;
};
ArrayList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def')];},d:['ceylon.collection','ArrayList','$cn','$def']};};
ArrayList.ArrayList$c_$c$=ArrayList$c_$c$;
ex$.ArrayList$c_$c$=ArrayList$c_$c$;
function ArrayList$c_copy$$a($ww,$wx,$$targs$$,arrayList$){
if($wx===undefined){$wx=(1.5);}
arrayList$.$1dkeuw$v5_=$ww.size;
m$1.atr$(arrayList$,'$1dkeuw$v5',function(){return this.$1dkeuw$v5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$v6_=$wx;
m$1.atr$(arrayList$,'$1dkeuw$v6',function(){return this.$1dkeuw$v6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$v7_=$ww.$1dkeuw$v7.clone();
m$1.atr$(arrayList$,'$1dkeuw$v7',function(){return this.$1dkeuw$v7_;},function($wy){return this.$1dkeuw$v7_=$wy;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$v9_=$ww.size;
m$1.atr$(arrayList$,'$1dkeuw$v9',function(){return this.$1dkeuw$v9_;},function($wz){return this.$1dkeuw$v9_=$wz;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_copy($ww,$wx,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($wx===undefined){$wx=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_copy$$a($ww,$wx,$$targs$$,arrayList$);
m$1.asrt$2("initial capacity cannot be negative",'86:4-87:33','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5>=(0)),'initialCapacity >= 0']);
m$1.asrt$2("initial capacity too large",'89:4-90:52','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5<=m$1.runtime().maxArraySize),'initialCapacity <= runtime.maxArraySize']);
m$1.asrt$2("growth factor must be at least 1.0",'92:4-93:32','ArrayList.ceylon',[arrayList$.$1dkeuw$v6.notSmallerThan((1.0)),'growthFactor >= 1.0']);
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$v9;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$v9<arrayList$.$1dkeuw$v5)){
var $vb=arrayList$.$1dkeuw$vc(arrayList$.$1dkeuw$v5);
arrayList$.$1dkeuw$v7.copyTo($vb,0,0,arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7=$vb;
}
arrayList$.getFromFirst=function($vd){return (($x0=$vd,$x0.notSmallerThan((0))&&$x0.smallerThan(arrayList$.$1dkeuw$v9))?arrayList$.$1dkeuw$v7.$_get($vd):null);
};
arrayList$.iterator=function(){return (function(){function $vf($$targs$$){
var $vf$=new $vf.$$;$vf$.outer$=arrayList$;
$vf$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element out*/},$vf$);
$vf$.$1dkeuw$vg_=(0);
$vf$.$prop$get$1dkeuw$vg.get=function(){return $1dkeuw$vg};
return $vf$;
};$vf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$vf(){
if($vf.$$===undefined){
m$1.initTypeProto($vf,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($vf$){
m$1.atr$($vf$,'$1dkeuw$vg',function(){return this.$1dkeuw$vg_;},function($x1){return this.$1dkeuw$vg_=$x1;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$vf,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$vf$.next=function(){
var $vf$=this;
if(($vf$.$1dkeuw$vg<arrayList$.$1dkeuw$v9)){
var $vi;
if(m$1.nn$(($vi=arrayList$.$1dkeuw$v7.$_get(($x2=$vf$.$1dkeuw$vg,$vf$.$1dkeuw$vg=$x2.successor,$x2))))){
return $vi;
}
else{
var $vk;
m$1.asrt$2("",'203:20-203:44','ArrayList.ceylon',[m$1.is$(($vk=null),arrayList$.$$targs$$.Element$ArrayList),'is Element null']);
return $vk;
}
var $x2;
}
else{
return m$1.finished();
}
};$vf$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$vf,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$vf$.toString=function(){return this.string.valueOf();};
})($vf.$$.prototype);
}
return $vf;
}
arrayList$.$init$$vf=$init$$vf;$init$$vf();return $vf();}());
};
arrayList$.measure=function($vm,$vn){return arrayList$.span(($x4=measureToSpan($vm,$vn),$x4.$_get(0)),$x4.$_get(1));
};
arrayList$.deleteMeasure=function($vp,$vq){return arrayList$.deleteSpan(($x5=measureToSpan($vp,$vq),$x5.$_get(0)),$x5.$_get(1));
};
arrayList$.spanFrom=function($vs){return ($x6=(($vs>=arrayList$.$1dkeuw$v9)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($x6)?$x6:arrayList$.span($vs,(arrayList$.$1dkeuw$v9-(1))));
var $x6;
};
arrayList$.spanTo=function($vu){return ($x7=(($vu<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($x7)?$x7:arrayList$.span(0,$vu));
var $x7;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$v9>(0))?arrayList$.$1dkeuw$v7.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$v9>=(1))?(arrayList$.$1dkeuw$v9-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.$_push=function($vw){return arrayList$.add($vw);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($vx){return arrayList$.add($vx);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($vy){return arrayList$.$1dkeuw$v7.find($vy);
};
arrayList$.findLast=function($vz){return arrayList$.$1dkeuw$v7.findLast($vz);
};
arrayList$.occursAt=function($w0,$w1){return (($w0<arrayList$.$1dkeuw$v9)?arrayList$.$1dkeuw$v7.occursAt($w0,$w1):false);
};
arrayList$.firstOccurrence=function($w2,$w3,$w4){if($w3===undefined){$w3=arrayList$.firstOccurrence$defs$from($w2,$w3,$w4);}
if($w4===undefined){$w4=arrayList$.firstOccurrence$defs$length($w2,$w3,$w4);}
return function(){var $w5;
if(m$1.nn$(($w5=($x8=$w2,$x9=$w3,$xa=(smallest(($w3+$w4),arrayList$.size)-$w3),($xb=arrayList$.$1dkeuw$v7,m$1.jsc$3($xb,$xb.firstOccurrence))($x8,$x9,$xa)))))return $w5;else return null}();
var $x8,$x9,$xa,$xb;
};
arrayList$.lastOccurrence=function($wa,$wb,$wc){if($wb===undefined){$wb=arrayList$.lastOccurrence$defs$from($wa,$wb,$wc);}
if($wc===undefined){$wc=arrayList$.lastOccurrence$defs$length($wa,$wb,$wc);}
return function(){var $wd;
if(m$1.nn$(($wd=($xc=$wa,$xd=largest($wb,(arrayList$.$1dkeuw$v7.size-arrayList$.size)),$xe=$wc,($xf=arrayList$.$1dkeuw$v7,m$1.jsc$3($xf,$xf.lastOccurrence))($xc,$xd,$xe)))))return $wd;else return null}();
var $xc,$xd,$xe,$xf;
};
arrayList$.occurs=function($wi,$wj,$wk){if($wj===undefined){$wj=arrayList$.occurs$defs$from($wi,$wj,$wk);}
if($wk===undefined){$wk=arrayList$.occurs$defs$length($wi,$wj,$wk);}
return ($xg=$wi,$xh=$wj,$xi=(smallest(($wj+$wk),arrayList$.size)-$wj),($xj=arrayList$.$1dkeuw$v7,m$1.jsc$3($xj,$xj.occurs))($xg,$xh,$xi));
var $xg,$xh,$xi,$xj;
};
arrayList$.occurrences=function($wp,$wq,$wr){if($wq===undefined){$wq=arrayList$.occurrences$defs$from($wp,$wq,$wr);}
if($wr===undefined){$wr=arrayList$.occurrences$defs$length($wp,$wq,$wr);}
return ($xk=$wp,$xl=$wq,$xm=(smallest(($wq+$wr),arrayList$.size)-$wq),($xn=arrayList$.$1dkeuw$v7,m$1.jsc$3($xn,$xn.occurrences))($xk,$xl,$xm));
var $xk,$xl,$xm,$xn;
};
return arrayList$;
};
ArrayList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'arrayList',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},an:function(){return[m$1.doc("The `ArrayList` to copy.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy:$at:growthFactor$o4kg6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy')];},d:['ceylon.collection','ArrayList','$cn','copy']};};
ArrayList.ArrayList$c_copy=ArrayList$c_copy;
ex$.ArrayList$c_copy=ArrayList$c_copy;
function ArrayList$c_ofSize$$a($xo,$xp,$xq,$$targs$$,arrayList$){
if($xq===undefined){$xq=(1.5);}
arrayList$.$1dkeuw$v5_=($xr=(($xo<(0))?(0):null),m$1.nn$($xr)?$xr:$xo);
m$1.atr$(arrayList$,'$1dkeuw$v5',function(){return this.$1dkeuw$v5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
var $xr;
arrayList$.$1dkeuw$v6_=$xq;
m$1.atr$(arrayList$,'$1dkeuw$v6',function(){return this.$1dkeuw$v6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$v7_=m$1.$_Array$c_ofSize($xo,$xp,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$v7',function(){return this.$1dkeuw$v7_;},function($xs){return this.$1dkeuw$v7_=$xs;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
arrayList$.$1dkeuw$v9_=$xo;
m$1.atr$(arrayList$,'$1dkeuw$v9',function(){return this.$1dkeuw$v9_;},function($xt){return this.$1dkeuw$v9_=$xt;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
return arrayList$;
};
function ArrayList$c_ofSize($xo,$xp,$xq,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($xq===undefined){$xq=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_ofSize$$a($xo,$xp,$xq,$$targs$$,arrayList$);
m$1.asrt$2("initial capacity cannot be negative",'86:4-87:33','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5>=(0)),'initialCapacity >= 0']);
m$1.asrt$2("initial capacity too large",'89:4-90:52','ArrayList.ceylon',[(arrayList$.$1dkeuw$v5<=m$1.runtime().maxArraySize),'initialCapacity <= runtime.maxArraySize']);
m$1.asrt$2("growth factor must be at least 1.0",'92:4-93:32','ArrayList.ceylon',[arrayList$.$1dkeuw$v6.notSmallerThan((1.0)),'growthFactor >= 1.0']);
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$v9;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$v9<arrayList$.$1dkeuw$v5)){
var $vb=arrayList$.$1dkeuw$vc(arrayList$.$1dkeuw$v5);
arrayList$.$1dkeuw$v7.copyTo($vb,0,0,arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7=$vb;
}
arrayList$.getFromFirst=function($vd){return (($xu=$vd,$xu.notSmallerThan((0))&&$xu.smallerThan(arrayList$.$1dkeuw$v9))?arrayList$.$1dkeuw$v7.$_get($vd):null);
};
arrayList$.iterator=function(){return (function(){function $vf($$targs$$){
var $vf$=new $vf.$$;$vf$.outer$=arrayList$;
$vf$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element out*/},$vf$);
$vf$.$1dkeuw$vg_=(0);
$vf$.$prop$get$1dkeuw$vg.get=function(){return $1dkeuw$vg};
return $vf$;
};$vf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$vf(){
if($vf.$$===undefined){
m$1.initTypeProto($vf,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($vf$){
m$1.atr$($vf$,'$1dkeuw$vg',function(){return this.$1dkeuw$vg_;},function($xv){return this.$1dkeuw$vg_=$xv;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$vf,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$vf$.next=function(){
var $vf$=this;
if(($vf$.$1dkeuw$vg<arrayList$.$1dkeuw$v9)){
var $vi;
if(m$1.nn$(($vi=arrayList$.$1dkeuw$v7.$_get(($xw=$vf$.$1dkeuw$vg,$vf$.$1dkeuw$vg=$xw.successor,$xw))))){
return $vi;
}
else{
var $vk;
m$1.asrt$2("",'203:20-203:44','ArrayList.ceylon',[m$1.is$(($vk=null),arrayList$.$$targs$$.Element$ArrayList),'is Element null']);
return $vk;
}
var $xw;
}
else{
return m$1.finished();
}
};$vf$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$vf,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$vf$.toString=function(){return this.string.valueOf();};
})($vf.$$.prototype);
}
return $vf;
}
arrayList$.$init$$vf=$init$$vf;$init$$vf();return $vf();}());
};
arrayList$.measure=function($vm,$vn){return arrayList$.span(($xy=measureToSpan($vm,$vn),$xy.$_get(0)),$xy.$_get(1));
};
arrayList$.deleteMeasure=function($vp,$vq){return arrayList$.deleteSpan(($xz=measureToSpan($vp,$vq),$xz.$_get(0)),$xz.$_get(1));
};
arrayList$.spanFrom=function($vs){return ($y0=(($vs>=arrayList$.$1dkeuw$v9)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($y0)?$y0:arrayList$.span($vs,(arrayList$.$1dkeuw$v9-(1))));
var $y0;
};
arrayList$.spanTo=function($vu){return ($y1=(($vu<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($y1)?$y1:arrayList$.span(0,$vu));
var $y1;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$v9>(0))?arrayList$.$1dkeuw$v7.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$v9>=(1))?(arrayList$.$1dkeuw$v9-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.$_push=function($vw){return arrayList$.add($vw);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($vx){return arrayList$.add($vx);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($vy){return arrayList$.$1dkeuw$v7.find($vy);
};
arrayList$.findLast=function($vz){return arrayList$.$1dkeuw$v7.findLast($vz);
};
arrayList$.occursAt=function($w0,$w1){return (($w0<arrayList$.$1dkeuw$v9)?arrayList$.$1dkeuw$v7.occursAt($w0,$w1):false);
};
arrayList$.firstOccurrence=function($w2,$w3,$w4){if($w3===undefined){$w3=arrayList$.firstOccurrence$defs$from($w2,$w3,$w4);}
if($w4===undefined){$w4=arrayList$.firstOccurrence$defs$length($w2,$w3,$w4);}
return function(){var $w5;
if(m$1.nn$(($w5=($y2=$w2,$y3=$w3,$y4=(smallest(($w3+$w4),arrayList$.size)-$w3),($y5=arrayList$.$1dkeuw$v7,m$1.jsc$3($y5,$y5.firstOccurrence))($y2,$y3,$y4)))))return $w5;else return null}();
var $y2,$y3,$y4,$y5;
};
arrayList$.lastOccurrence=function($wa,$wb,$wc){if($wb===undefined){$wb=arrayList$.lastOccurrence$defs$from($wa,$wb,$wc);}
if($wc===undefined){$wc=arrayList$.lastOccurrence$defs$length($wa,$wb,$wc);}
return function(){var $wd;
if(m$1.nn$(($wd=($y6=$wa,$y7=largest($wb,(arrayList$.$1dkeuw$v7.size-arrayList$.size)),$y8=$wc,($y9=arrayList$.$1dkeuw$v7,m$1.jsc$3($y9,$y9.lastOccurrence))($y6,$y7,$y8)))))return $wd;else return null}();
var $y6,$y7,$y8,$y9;
};
arrayList$.occurs=function($wi,$wj,$wk){if($wj===undefined){$wj=arrayList$.occurs$defs$from($wi,$wj,$wk);}
if($wk===undefined){$wk=arrayList$.occurs$defs$length($wi,$wj,$wk);}
return ($ya=$wi,$yb=$wj,$yc=(smallest(($wj+$wk),arrayList$.size)-$wj),($yd=arrayList$.$1dkeuw$v7,m$1.jsc$3($yd,$yd.occurs))($ya,$yb,$yc));
var $ya,$yb,$yc,$yd;
};
arrayList$.occurrences=function($wp,$wq,$wr){if($wq===undefined){$wq=arrayList$.occurrences$defs$from($wp,$wq,$wr);}
if($wr===undefined){$wr=arrayList$.occurrences$defs$length($wp,$wq,$wr);}
return ($ye=$wp,$yf=$wq,$yg=(smallest(($wq+$wr),arrayList$.size)-$wq),($yh=arrayList$.$1dkeuw$v7,m$1.jsc$3($yh,$yh.occurrences))($ye,$yf,$yg));
var $ye,$yf,$yg,$yh;
};
return arrayList$;
};
ArrayList$c_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:size$g4dtg8')];}},{nm:'element',mt:'prm',$t:'Element$ArrayList',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:element$qjcx79')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:growthFactor$6i6pjp')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize')];},d:['ceylon.collection','ArrayList','$cn','ofSize']};};
ArrayList.ArrayList$c_ofSize=ArrayList$c_ofSize;
ex$.ArrayList$c_ofSize=ArrayList$c_ofSize;
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:m$1.SearchableList,a:{Element$SearchableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
if(ArrayList.$$===undefined){
m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,m$1.SearchableList,$init$MutableList(),$init$Stack(),$init$Queue());
(function(arrayList$){
m$1.atr$(arrayList$,'$1dkeuw$v5',function(){return this.$1dkeuw$v5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
m$1.atr$(arrayList$,'$1dkeuw$v6',function(){return this.$1dkeuw$v6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
m$1.atr$(arrayList$,'$1dkeuw$v7',function(){return this.$1dkeuw$v7_;},function($yi){return this.$1dkeuw$v7_=$yi;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
m$1.atr$(arrayList$,'$1dkeuw$v9',function(){return this.$1dkeuw$v9_;},function($yj){return this.$1dkeuw$v9_=$yj;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
arrayList$.$1dkeuw$vc=function($yk){var arrayList$=this;
return m$1.$_Array$c_ofSize($yk,null,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
};
arrayList$.$1dkeuw$vc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
m$1.atr$(arrayList$,'size',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$v9;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
arrayList$.$1dkeuw$yl=function($ym){
var arrayList$=this;
var $yn=(arrayList$.$1dkeuw$v9+$ym);
var $yo=m$1.runtime().maxArraySize;
if(($yn>$yo)){
throw m$1.wrapexc(m$1.OverflowException(),'110:12-110:37','ceylon/collection/ArrayList.ceylon');
}
if(($yn>arrayList$.$1dkeuw$v7.size)){
var $yp=m$1.Float($yn*arrayList$.$1dkeuw$v6).integer;
var $yq=($yr=((($yp<$yn)||($yp>$yo))?$yn:null),m$1.nn$($yr)?$yr:$yp);
var $yr;
var $ys=arrayList$.$1dkeuw$vc($yq);
arrayList$.$1dkeuw$v7.copyTo($ys);
arrayList$.$1dkeuw$v7=$ys;
}
};arrayList$.$1dkeuw$yl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
arrayList$.add=function($yt){
var arrayList$=this;
arrayList$.$1dkeuw$yl(1);
($yu=$yt,arrayList$.$1dkeuw$v7.set(($yv=arrayList$.$1dkeuw$v9,arrayList$.$1dkeuw$v9=$yv.successor,$yv),$yu), $yu);
var $yu,$yv;
};arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
arrayList$.addAll=function($yw){
var arrayList$=this;
var $yx=$yw.sequence();
arrayList$.$1dkeuw$yl($yx.size);
var $yz;for(var $yy=$yx.iterator();($yz=$yy.next())!==m$1.finished();){
($z0=$yz,arrayList$.$1dkeuw$v7.set(($z1=arrayList$.$1dkeuw$v9,arrayList$.$1dkeuw$v9=$z1.successor,$z1),$z0), $z0);
var $z0,$z1;
}
};arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
arrayList$.swap=function($z2,$z3){
var arrayList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'143:8-145:41','ArrayList.ceylon',[($z4=$z2,$z4.notSmallerThan((0))&&$z4.smallerThan(arrayList$.$1dkeuw$v9)),'0<=i<length'],[($z5=$z3,$z5.notSmallerThan((0))&&$z5.smallerThan(arrayList$.$1dkeuw$v9)),'0<=j<length']);
arrayList$.$1dkeuw$v7.swap($z2,$z3);
};arrayList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','swap']};};
arrayList$.move=function($z6,$z7){
var arrayList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'151:8-153:41','ArrayList.ceylon',[($z8=$z6,$z8.notSmallerThan((0))&&$z8.smallerThan(arrayList$.$1dkeuw$v9)),'0<=i<length'],[($z9=$z7,$z9.notSmallerThan((0))&&$z9.smallerThan(arrayList$.$1dkeuw$v9)),'0<=j<length']);
arrayList$.$1dkeuw$v7.move($z6,$z7);
};arrayList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','move']};};
arrayList$.clear=function(){
var arrayList$=this;
arrayList$.$1dkeuw$v9=(0);
arrayList$.$1dkeuw$v7=arrayList$.$1dkeuw$vc(arrayList$.$1dkeuw$v5);
};arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
m$1.atr$(arrayList$,'capacity',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$v7.size;
},function($za){
var arrayList$=this;
m$1.asrt$2("capacity must be at least as large as list size",'167:8-168:33','ArrayList.ceylon',[($za>=arrayList$.size),'capacity >= size']);
m$1.asrt$2("capacity too large",'169:8-170:49','ArrayList.ceylon',[($za<=m$1.runtime().maxArraySize),'capacity <= runtime.maxArraySize']);
var $zb=arrayList$.$1dkeuw$vc($za);
arrayList$.$1dkeuw$v7.copyTo($zb,0,0,arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7=$zb;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
arrayList$.getFromFirst=function($vd){var arrayList$=this;
return (($zc=$vd,$zc.notSmallerThan((0))&&$zc.smallerThan(arrayList$.$1dkeuw$v9))?arrayList$.$1dkeuw$v7.$_get($vd):null);
};arrayList$.contains=function($zd){
var arrayList$=this;
var $zf;for(var $ze=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($zf=$ze.next())!==m$1.finished();){
var $zg;
if(m$1.nn$(($zg=arrayList$.$1dkeuw$v7.$_get($zf)))){
if(m$1.$eq$($zg,$zd)){
return true;
}
}
}
if(m$1.finished()===$zf){
return false;
}
};arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
arrayList$.iterator=function(){var arrayList$=this;
return (function(){function $vf($$targs$$){
var $vf$=new $vf.$$;$vf$.outer$=arrayList$;
$vf$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element out*/},$vf$);
$vf$.$1dkeuw$vg_=(0);
$vf$.$prop$get$1dkeuw$vg.get=function(){return $1dkeuw$vg};
return $vf$;
};$vf.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$vf(){
if($vf.$$===undefined){
m$1.initTypeProto($vf,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($vf$){
m$1.atr$($vf$,'$1dkeuw$vg',function(){return this.$1dkeuw$vg_;},function($zh){return this.$1dkeuw$vg_=$zh;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$vf,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$vf$.next=function(){
var $vf$=this;
if(($vf$.$1dkeuw$vg<arrayList$.$1dkeuw$v9)){
var $vi;
if(m$1.nn$(($vi=arrayList$.$1dkeuw$v7.$_get(($zi=$vf$.$1dkeuw$vg,$vf$.$1dkeuw$vg=$zi.successor,$zi))))){
return $vi;
}
else{
var $vk;
m$1.asrt$2("",'203:20-203:44','ArrayList.ceylon',[m$1.is$(($vk=null),arrayList$.$$targs$$.Element$ArrayList),'is Element null']);
return $vk;
}
var $zi;
}
else{
return m$1.finished();
}
};$vf$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$vf,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
$vf$.toString=function(){return this.string.valueOf();};
})($vf.$$.prototype);
}
return $vf;
}
arrayList$.$init$$vf=$init$$vf;$init$$vf();return $vf();}());
};arrayList$.insert=function($zk,$zl){
var arrayList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlength of the list",'215:8-217:37','ArrayList.ceylon',[($zm=$zk,$zm.notSmallerThan((0))&&$zm.notLargerThan(arrayList$.$1dkeuw$v9)),'0 <= index <= length']);
arrayList$.$1dkeuw$yl(1);
if(($zk<arrayList$.$1dkeuw$v9)){
arrayList$.$1dkeuw$v7.copyTo(arrayList$.$1dkeuw$v7,$zk,($zk+(1)),(arrayList$.$1dkeuw$v9-$zk));
}
($zn=arrayList$.$1dkeuw$v9,arrayList$.$1dkeuw$v9=$zn.successor,$zn);
var $zn;
($zo=$zl,arrayList$.$1dkeuw$v7.set($zk,$zo), $zo);
var $zo;
};arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
arrayList$.insertAll=function($zp,$zq){
var arrayList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlength of the list",'229:8-231:37','ArrayList.ceylon',[($zr=$zp,$zr.notSmallerThan((0))&&$zr.notLargerThan(arrayList$.$1dkeuw$v9)),'0 <= index <= length']);
var $zs=$zq.sequence();
var $zt=$zs.size;
if(($zt>(0))){
arrayList$.$1dkeuw$yl($zt);
if(($zp<arrayList$.$1dkeuw$v9)){
arrayList$.$1dkeuw$v7.copyTo(arrayList$.$1dkeuw$v7,$zp,($zp+$zt),(arrayList$.$1dkeuw$v9-$zp));
}
var $zu=$zp;
var $zw;for(var $zv=$zs.iterator();($zw=$zv.next())!==m$1.finished();){
($zx=$zw,arrayList$.$1dkeuw$v7.set(($zy=$zu,$zu=$zy.successor,$zy),$zx), $zx);
var $zx,$zy;
}
(arrayList$.$1dkeuw$v9=arrayList$.$1dkeuw$v9+$zt);
}
};arrayList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insertAll']};};
arrayList$.$_delete=function($zz){
var arrayList$=this;
if(($100=$zz,$100.notSmallerThan((0))&&$100.smallerThan(arrayList$.$1dkeuw$v9))){
var $101=arrayList$.$1dkeuw$v7.$_get($zz);
arrayList$.$1dkeuw$v7.copyTo(arrayList$.$1dkeuw$v7,($zz+(1)),$zz,((arrayList$.$1dkeuw$v9-$zz)-(1)));
($102=arrayList$.$1dkeuw$v9,arrayList$.$1dkeuw$v9=$102.predecessor,$102);
var $102;
($103=null,arrayList$.$1dkeuw$v7.set(arrayList$.$1dkeuw$v9,$103), $103);
var $103;
return $101;
}
else{
return null;
}
};arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
arrayList$.remove=function($104){
var arrayList$=this;
var $105=(0);
var $106=(0);
while(($105<arrayList$.$1dkeuw$v9)){
var $107;
if(m$1.nn$(($107=arrayList$.$1dkeuw$v7.$_get(($108=$105,$105=$108.successor,$108))))){
if(!m$1.$eq$($107,$104)){
($109=$107,arrayList$.$1dkeuw$v7.set(($10a=$106,$106=$10a.successor,$10a),$109), $109);
var $109,$10a;
}
}
else{
($10b=null,arrayList$.$1dkeuw$v7.set(($10c=$106,$106=$10c.successor,$10c),$10b), $10b);
var $10b,$10c;
}
var $108;
}
arrayList$.$1dkeuw$v9=$106;
while(($106<$105)){
($10d=null,arrayList$.$1dkeuw$v7.set(($10e=$106,$106=$10e.successor,$10e),$10d), $10d);
var $10d,$10e;
}
return ($105-arrayList$.$1dkeuw$v9);
};arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
arrayList$.removeAll=function($10f){
var arrayList$=this;
var $10g=($10h=$10f,HashSet(undefined,undefined,$10h,{Element$HashSet:m$1.mit$([arrayList$.$$targs$$.Element$ArrayList,{t:m$1.$_Object}])}));
var $10h;
var $10i=(0);
var $10j=(0);
while(($10i<arrayList$.$1dkeuw$v9)){
var $10k;
if(m$1.nn$(($10k=arrayList$.$1dkeuw$v7.$_get(($10l=$10i,$10i=$10l.successor,$10l))))){
if(!m$1.$cnt$2($10k,$10g)){
($10m=$10k,arrayList$.$1dkeuw$v7.set(($10n=$10j,$10j=$10n.successor,$10n),$10m), $10m);
var $10m,$10n;
}
}
else{
($10o=null,arrayList$.$1dkeuw$v7.set(($10p=$10j,$10j=$10p.successor,$10p),$10o), $10o);
var $10o,$10p;
}
var $10l;
}
arrayList$.$1dkeuw$v9=$10j;
while(($10j<$10i)){
($10q=null,arrayList$.$1dkeuw$v7.set(($10r=$10j,$10j=$10r.successor,$10r),$10q), $10q);
var $10q,$10r;
}
return ($10i-arrayList$.$1dkeuw$v9);
};arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
arrayList$.removeFirst=function($10s){
var arrayList$=this;
var $10t;
if(m$1.nn$(($10t=arrayList$.firstOccurrence($10s)))){
arrayList$.$_delete($10t);
return true;
}
else{
return false;
}
};arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
arrayList$.removeLast=function($10u){
var arrayList$=this;
var $10v;
if(m$1.nn$(($10v=arrayList$.lastOccurrence($10u)))){
arrayList$.$_delete($10v);
return true;
}
else{
return false;
}
};arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
arrayList$.findAndRemoveFirst=function($10w){
var arrayList$=this;
var $10x;
if(m$1.nn$(($10x=arrayList$.firstIndexWhere($10w)))){
return arrayList$.$_delete($10x);
}
else{
return null;
}
};arrayList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveFirst']};};
arrayList$.findAndRemoveLast=function($10y){
var arrayList$=this;
var $10z;
if(m$1.nn$(($10z=arrayList$.lastIndexWhere($10y)))){
return arrayList$.$_delete($10z);
}
else{
return null;
}
};arrayList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveLast']};};
arrayList$.removeWhere=function($110){
var arrayList$=this;
var $111=(0);
var $112=(0);
while(($111<arrayList$.$1dkeuw$v9)){
var $113;
if(m$1.nn$(($113=arrayList$.$1dkeuw$v7.$_get(($114=$111,$111=$114.successor,$114))))){
if(!$110($113)){
($115=$113,arrayList$.$1dkeuw$v7.set(($116=$112,$112=$116.successor,$116),$115), $115);
var $115,$116;
}
}
else{
($117=null,arrayList$.$1dkeuw$v7.set(($118=$112,$112=$118.successor,$118),$117), $117);
var $117,$118;
}
var $114;
}
arrayList$.$1dkeuw$v9=$112;
while(($112<$111)){
($119=null,arrayList$.$1dkeuw$v7.set(($11a=$112,$112=$11a.successor,$11a),$119), $119);
var $119,$11a;
}
return ($111-arrayList$.$1dkeuw$v9);
};arrayList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeWhere']};};
arrayList$.prune=function(){
var arrayList$=this;
var $11b=(0);
var $11c=(0);
while(($11b<arrayList$.$1dkeuw$v9)){
var $11d;
if(m$1.nn$(($11d=arrayList$.$1dkeuw$v7.$_get(($11e=$11b,$11b=$11e.successor,$11e))))){
($11f=$11d,arrayList$.$1dkeuw$v7.set(($11g=$11c,$11c=$11g.successor,$11g),$11f), $11f);
var $11f,$11g;
}
var $11e;
}
var $11h=($11b-$11c);
arrayList$.$1dkeuw$v9=$11c;
while(($11c<$11b)){
($11i=null,arrayList$.$1dkeuw$v7.set(($11j=$11c,$11c=$11j.successor,$11j),$11i), $11i);
var $11i,$11j;
}
return $11h;
};arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
arrayList$.$_replace=function($11k,$11l){
var arrayList$=this;
var $11m=(0);
var $11n=(0);
while(($11n<arrayList$.$1dkeuw$v9)){
var $11o;
if(m$1.nn$(($11o=arrayList$.$1dkeuw$v7.$_get($11n)))&&m$1.$eq$($11o,$11k)){
($11p=$11l,arrayList$.$1dkeuw$v7.set($11n,$11p), $11p);
var $11p;
($11q=$11m,$11m=$11q.successor,$11q);
var $11q;
}
($11r=$11n,$11n=$11r.successor,$11r);
var $11r;
}
return $11m;
};arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
arrayList$.replaceFirst=function($11s,$11t){
var arrayList$=this;
var $11u;
if(m$1.nn$(($11u=arrayList$.firstOccurrence($11s)))){
($11v=$11t,arrayList$.$1dkeuw$v7.set($11u,$11v), $11v);
var $11v;
return true;
}
else{
return false;
}
};arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
arrayList$.replaceLast=function($11w,$11x){
var arrayList$=this;
var $11y;
if(m$1.nn$(($11y=arrayList$.lastOccurrence($11w)))){
($11z=$11x,arrayList$.$1dkeuw$v7.set($11y,$11z), $11z);
var $11z;
return true;
}
else{
return false;
}
};arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
arrayList$.findAndReplaceFirst=function($120,$121){
var arrayList$=this;
var $122;
if(m$1.nn$(($122=arrayList$.firstIndexWhere($120)))){
var $123=arrayList$.getFromFirst($122);
($124=$121,arrayList$.$1dkeuw$v7.set($122,$124), $124);
var $124;
return $123;
}
else{
return null;
}
};arrayList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceFirst']};};
arrayList$.findAndReplaceLast=function($125,$126){
var arrayList$=this;
var $127;
if(m$1.nn$(($127=arrayList$.lastIndexWhere($125)))){
var $128=arrayList$.getFromFirst($127);
($129=$126,arrayList$.$1dkeuw$v7.set($127,$129), $129);
var $129;
return $128;
}
else{
return null;
}
};arrayList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceLast']};};
arrayList$.replaceWhere=function($12a,$12b){
var arrayList$=this;
var $12c=(0);
var $12d=(0);
while(($12d<arrayList$.$1dkeuw$v9)){
var $12e;
if(m$1.nn$(($12e=arrayList$.$1dkeuw$v7.$_get($12d)))&&$12a($12e)){
($12f=$12b,arrayList$.$1dkeuw$v7.set($12d,$12f), $12f);
var $12f;
($12g=$12c,$12c=$12g.successor,$12g);
var $12g;
}
($12h=$12d,$12d=$12h.successor,$12h);
var $12h;
}
return $12c;
};arrayList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceWhere']};};
arrayList$.infill=function($12i){
var arrayList$=this;
var $12j=(0);
while(($12j<arrayList$.$1dkeuw$v9)){
if(!m$1.nn$(arrayList$.$1dkeuw$v7.$_get($12j))){
($12k=$12i,arrayList$.$1dkeuw$v7.set($12j,$12k), $12k);
var $12k;
}
($12l=$12j,$12j=$12l.successor,$12l);
var $12l;
}
};arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
arrayList$.set=function($12m,$12n){
var arrayList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'492:8-494:32','ArrayList.ceylon',[($12o=$12m,$12o.notSmallerThan((0))&&$12o.smallerThan(arrayList$.$1dkeuw$v9)),'0<=index<length']);
($12p=$12n,arrayList$.$1dkeuw$v7.set($12m,$12p), $12p);
var $12p;
};arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
arrayList$.span=function($12q,$12r){
var arrayList$=this;
var $12s=spanToMeasure($12q,$12r,arrayList$.$1dkeuw$v9),$12t=$12s.$_get(0),$12u=$12s.$_get(1),$12v=$12s.$_get(2);
var $12w=($12x=$12u,$12y=arrayList$.$1dkeuw$v6,$12z=arrayList$.skip($12t).take($12u),ArrayList($12x,$12y,$12z,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
var $12x,$12y,$12z;
return ($130=($12v?$12w.reversed:null),m$1.nn$($130)?$130:$12w);
var $130;
};arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
arrayList$.deleteSpan=function($131,$132){
var arrayList$=this;
var $133=spanToMeasure($131,$132,arrayList$.$1dkeuw$v9),$134=$133.$_get(0),$135=$133.$_get(1),$136=$133.$_get(2);
if((($134<arrayList$.$1dkeuw$v9)&&($135>(0)))){
var $137=($134+$135);
arrayList$.$1dkeuw$v7.copyTo(arrayList$.$1dkeuw$v7,$137,$134,(arrayList$.$1dkeuw$v9-$137));
var $138=(arrayList$.$1dkeuw$v9-$135);
while(($138<arrayList$.$1dkeuw$v9)){
($139=null,arrayList$.$1dkeuw$v7.set(($13a=$138,$138=$13a.successor,$13a),$139), $139);
var $139,$13a;
}
(arrayList$.$1dkeuw$v9=arrayList$.$1dkeuw$v9-$135);
}
};arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
arrayList$.measure=function($vm,$vn){var arrayList$=this;
return arrayList$.span(($13b=measureToSpan($vm,$vn),$13b.$_get(0)),$13b.$_get(1));
};arrayList$.deleteMeasure=function($vp,$vq){var arrayList$=this;
return arrayList$.deleteSpan(($13c=measureToSpan($vp,$vq),$13c.$_get(0)),$13c.$_get(1));
};arrayList$.truncate=function($13d){
var arrayList$=this;
m$1.asrt$2("",'534:8-534:26','ArrayList.ceylon',[($13d>=(0)),'size >= 0']);
if(($13d<arrayList$.$1dkeuw$v9)){
var $13e=$13d;
while(($13e<arrayList$.$1dkeuw$v9)){
($13f=null,arrayList$.$1dkeuw$v7.set(($13g=$13e,$13e=$13g.successor,$13g),$13f), $13f);
var $13f,$13g;
}
arrayList$.$1dkeuw$v9=$13d;
}
};arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
arrayList$.spanFrom=function($vs){var arrayList$=this;
return ($13h=(($vs>=arrayList$.$1dkeuw$v9)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($13h)?$13h:arrayList$.span($vs,(arrayList$.$1dkeuw$v9-(1))));
var $13h;
};arrayList$.spanTo=function($vu){var arrayList$=this;
return ($13i=(($vu<(0))?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($13i)?$13i:arrayList$.span(0,$vu));
var $13i;
};m$1.atr$(arrayList$,'first',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$v9>(0))?arrayList$.$1dkeuw$v7.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$v9>=(1))?(arrayList$.$1dkeuw$v9-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($13j){
var arrayList$=this;
var $13k;
if(m$1.is$(($13k=$13j),{t:ArrayList,a:{Element$ArrayList:{t:m$1.Anything}}})){
if((arrayList$===$13k)){
return true;
}
if(!m$1.$eq$(arrayList$.$1dkeuw$v9,$13k.$1dkeuw$v9)){
return false;
}
var $13m;for(var $13l=m$1.measure((0),arrayList$.$1dkeuw$v9,{Element$measure:{t:m$1.Integer}}).iterator();($13m=$13l.next())!==m$1.finished();){
var $13n=arrayList$.$1dkeuw$v7.getFromFirst($13m);
var $13o=$13k.$1dkeuw$v7.getFromFirst($13m);
var $13p;
if(m$1.nn$(($13p=$13n))){
var $13q;
if(!m$1.nn$(($13q=$13o))){
return false;
}
else{
if(!m$1.$eq$($13p,$13q)){
return false;
}
}
}
else{
if(m$1.nn$($13o)){
return false;
}
}
}
if(m$1.finished()===$13m){
return true;
}
}
else{
return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$13k);
}
};arrayList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','equals']};};
m$1.atr$(arrayList$,'hash',function(){
var arrayList$=this;
var $13r=(1);
var $13t=(0),$13u=arrayList$.$1dkeuw$v9;for(var $13v=0;$13v<$13u;$13v++,($13t=$13t.successor)){
($13r=$13r*31);
var $13w;
if(m$1.nn$(($13w=arrayList$.$1dkeuw$v7.getFromFirst($13t)))){
($13r=$13r+$13w.hash);
}
}
return $13r;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});arrayList$.$_push=function($vw){var arrayList$=this;
return arrayList$.add($vw);
};arrayList$.$_pop=function(){var arrayList$=this;
return arrayList$.deleteLast();
};m$1.atr$(arrayList$,'top',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($vx){var arrayList$=this;
return arrayList$.add($vx);
};arrayList$.accept=function(){var arrayList$=this;
return arrayList$.deleteFirst();
};m$1.atr$(arrayList$,'back',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
var arrayList$=this;
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.clone=function(){var arrayList$=this;
return ArrayList$c_copy(arrayList$,undefined,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
};
arrayList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clone']};};
arrayList$.find=function($vy){var arrayList$=this;
return arrayList$.$1dkeuw$v7.find($vy);
};arrayList$.findLast=function($vz){var arrayList$=this;
return arrayList$.$1dkeuw$v7.findLast($vz);
};arrayList$.sortInPlace=function($13x){var arrayList$=this;
return arrayList$.$1dkeuw$v7.sortInPlace(m$1.jsc$2((function($13y,$13z){return function(){var $140,$141;
if(m$1.nn$(($140=$13y))&&m$1.nn$(($141=$13z)))return $13x($140,$141);else return m$1.nn$($13y)&&!m$1.nn$($13z)?m$1.smaller():(m$1.nn$($13z)&&!m$1.nn$($13y)?m$1.larger():m$1.equal())}();
}),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
};
arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'y',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
arrayList$.each=function($142){
var arrayList$=this;
var $143;
if(m$1.is$(($143=null),arrayList$.$$targs$$.Element$ArrayList)){
var $144=(function(){var $145=$143;arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).each(m$1.jsc$2((function($146){
$142(($147=$146,m$1.nn$($147)?$147:$145));
var $147;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($144!==undefined){return $144;}
}
else{
arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).each(m$1.jsc$2((function($148){
var $149;
m$1.asrt$2("",'655:16-655:33','ArrayList.ceylon',[m$1.nn$(($149=$148)),'exists e']);
$142($149);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','each']};};
arrayList$.count=function($14a){
var arrayList$=this;
var $14b;
if(m$1.is$(($14b=null),arrayList$.$$targs$$.Element$ArrayList)){
var $14c=(function(){var $14d=$14b;return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).count(m$1.jsc$2((function($14e){return $14a(($14f=$14e,m$1.nn$($14f)?$14f:$14d));
var $14f;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($14c!==undefined){return $14c;}
}
else{
return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).count(m$1.jsc$2((function($14g){
var $14h;
m$1.asrt$2("",'670:16-670:33','ArrayList.ceylon',[m$1.nn$(($14h=$14g)),'exists e']);
return $14a($14h);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','count']};};
arrayList$.$_every=function($14i){
var arrayList$=this;
var $14j;
if(m$1.is$(($14j=null),arrayList$.$$targs$$.Element$ArrayList)){
var $14k=(function(){var $14l=$14j;return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).$_every(m$1.jsc$2((function($14m){return $14i(($14n=$14m,m$1.nn$($14n)?$14n:$14l));
var $14n;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($14k!==undefined){return $14k;}
}
else{
return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).$_every(m$1.jsc$2((function($14o){
var $14p;
m$1.asrt$2("",'685:16-685:33','ArrayList.ceylon',[m$1.nn$(($14p=$14o)),'exists e']);
return $14i($14p);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','every']};};
arrayList$.any=function($14q){
var arrayList$=this;
var $14r;
if(m$1.is$(($14r=null),arrayList$.$$targs$$.Element$ArrayList)){
var $14s=(function(){var $14t=$14r;return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).any(m$1.jsc$2((function($14u){return $14q(($14v=$14u,m$1.nn$($14v)?$14v:$14t));
var $14v;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}());if($14s!==undefined){return $14s;}
}
else{
return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).any(m$1.jsc$2((function($14w){
var $14x;
m$1.asrt$2("",'700:16-700:33','ArrayList.ceylon',[m$1.nn$(($14x=$14w)),'exists e']);
return $14q($14x);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}));
}
};arrayList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$ArrayList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','any']};};
arrayList$.$_reduce=function($14y,$g1hi5x$){
var arrayList$=this;
var $14z;
if(m$1.is$(($14z=null),arrayList$.$$targs$$.Element$ArrayList)){
var $150=(function(){var $151=$14z;return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).$_reduce(m$1.jsc$2((function($152,$153){return $14y(($154=$152,m$1.nn$($154)?$154:$151),($155=$153,m$1.nn$($155)?$155:$151));
var $154,$155;
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return out*/,Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}}),{Result$reduce:$g1hi5x$.Result$reduce});
}());if($150!==undefined){return $150;}
}
else{
return arrayList$.$1dkeuw$v7.take(arrayList$.$1dkeuw$v9).$_reduce(m$1.jsc$2((function($156,$157){
var $158,$159;
m$1.asrt$2("",'719:16-719:55','ArrayList.ceylon',[m$1.nn$(($158=$156)),'exists partial'],[m$1.nn$(($159=$157)),'exists element']);
return $14y($158,$159);
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return out*/,Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}}),{Result$reduce:$g1hi5x$.Result$reduce});
}
};arrayList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$ArrayList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$reduce',Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$ArrayList']},'Element$ArrayList']}}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$ArrayList']}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','ArrayList','$m','reduce']};};
arrayList$.occursAt=function($w0,$w1){var arrayList$=this;
return (($w0<arrayList$.$1dkeuw$v9)?arrayList$.$1dkeuw$v7.occursAt($w0,$w1):false);
};arrayList$.firstOccurrence=function($w2,$w3,$w4){var arrayList$=this;
if($w3===undefined){$w3=arrayList$.firstOccurrence$defs$from($w2,$w3,$w4);}
if($w4===undefined){$w4=arrayList$.firstOccurrence$defs$length($w2,$w3,$w4);}
return function(){var $w5;
if(m$1.nn$(($w5=($15a=$w2,$15b=$w3,$15c=(smallest(($w3+$w4),arrayList$.size)-$w3),($15d=arrayList$.$1dkeuw$v7,m$1.jsc$3($15d,$15d.firstOccurrence))($15a,$15b,$15c)))))return $w5;else return null}();
var $15a,$15b,$15c,$15d;
};arrayList$.lastOccurrence=function($wa,$wb,$wc){var arrayList$=this;
if($wb===undefined){$wb=arrayList$.lastOccurrence$defs$from($wa,$wb,$wc);}
if($wc===undefined){$wc=arrayList$.lastOccurrence$defs$length($wa,$wb,$wc);}
return function(){var $wd;
if(m$1.nn$(($wd=($15e=$wa,$15f=largest($wb,(arrayList$.$1dkeuw$v7.size-arrayList$.size)),$15g=$wc,($15h=arrayList$.$1dkeuw$v7,m$1.jsc$3($15h,$15h.lastOccurrence))($15e,$15f,$15g)))))return $wd;else return null}();
var $15e,$15f,$15g,$15h;
};arrayList$.occurs=function($wi,$wj,$wk){var arrayList$=this;
if($wj===undefined){$wj=arrayList$.occurs$defs$from($wi,$wj,$wk);}
if($wk===undefined){$wk=arrayList$.occurs$defs$length($wi,$wj,$wk);}
return ($15i=$wi,$15j=$wj,$15k=(smallest(($wj+$wk),arrayList$.size)-$wj),($15l=arrayList$.$1dkeuw$v7,m$1.jsc$3($15l,$15l.occurs))($15i,$15j,$15k));
var $15i,$15j,$15k,$15l;
};arrayList$.occurrences=function($wp,$wq,$wr){var arrayList$=this;
if($wq===undefined){$wq=arrayList$.occurrences$defs$from($wp,$wq,$wr);}
if($wr===undefined){$wr=arrayList$.occurrences$defs$length($wp,$wq,$wr);}
return ($15m=$wp,$15n=$wq,$15o=(smallest(($wq+$wr),arrayList$.size)-$wq),($15p=arrayList$.$1dkeuw$v7,m$1.jsc$3($15p,$15p.occurrences))($15m,$15n,$15o));
var $15m,$15n,$15o,$15p;
};arrayList$.copyTo$defs$sourcePosition=function($15q,$15r,$15s,$15t){return 0;};
arrayList$.copyTo$defs$destinationPosition=function($15q,$15r,$15s,$15t){return 0;};
arrayList$.copyTo$defs$length=function($15q,$15r,$15s,$15t){var arrayList$=this;
return smallest((arrayList$.size-$15r),($15q.size-$15s));};
arrayList$.copyTo=function($15q,$15r,$15s,$15t){
var arrayList$=this;
if($15r===undefined){$15r=(0);}
if($15s===undefined){$15s=(0);}
if($15t===undefined){$15t=smallest((arrayList$.size-$15r),($15q.size-$15s));}
m$1.asrt$2("illegal starting position in source list",'803:8-804:47','ArrayList.ceylon',[($15u=$15r,$15u.notSmallerThan((0))&&$15u.notLargerThan((arrayList$.size-$15t))),'0<=sourcePosition<=size-length']);
m$1.asrt$2("illegal starting position in destination list",'805:8-806:64','ArrayList.ceylon',[($15v=$15s,$15v.notSmallerThan((0))&&$15v.notLargerThan(($15q.size-$15t))),'0<=destinationPosition<=destination.size-length']);
($15w=$15t,$15x=$15r,$15y=$15s,$15z=function($160){if(m$1.is$($160,{t:m$1.$_Array,a:{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}))return $160;else if(m$1.is$($160,{t:ArrayList,a:{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}}))return $160.$1dkeuw$v7;else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}($15q),($161=arrayList$.$1dkeuw$v7,m$1.jsc$3($161,$161.copyTo))($15z,$15x,$15y,$15w));
var $15w,$15x,$15y,$15z,$161;
};arrayList$.copyTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'destination',mt:'prm',$t:{t:'u',l:[{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}}]}},{nm:'sourcePosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'destinationPosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:copyTo'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.3','$'),m$1.AssertionError),"if the arguments do not identify meaningful ranges \nwithin the two lists:\n\n- if the given [[sourcePosition]] or \n  [[destinationPosition]] is negative, \n- if `size < sourcePosition+length`, or \n- if `destination.size < destinationPosition+length`.")];},d:['ceylon.collection','ArrayList','$m','copyTo']};};
arrayList$.shrink=function(){
var arrayList$=this;
if((arrayList$.$1dkeuw$v7.size>arrayList$.$1dkeuw$v9)){
var $162=arrayList$.$1dkeuw$vc(arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7.copyTo($162,0,0,arrayList$.$1dkeuw$v9);
arrayList$.$1dkeuw$v7=$162;
}
};arrayList$.shrink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:shrink')];},d:['ceylon.collection','ArrayList','$m','shrink']};};
arrayList$.toString=function(){return this.string.valueOf();};
})(ArrayList.$$.prototype);
}
return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;$init$ArrayList();ArrayList.inst$$=function($163){
var arrayList$=new ArrayList.$$;
m$1.set_type_args(arrayList$,{Element$ArrayList:$163.$$targs$$.Type$Class.a.Element$ArrayList});
m$1.set_type_args(arrayList$,{Element$MutableList:arrayList$.$$targs$$.Element$ArrayList,Element$List:arrayList$.$$targs$$.Element$ArrayList,Element$Collection:arrayList$.$$targs$$.Element$ArrayList,Absent$Iterable:{t:m$1.Null},Element$Iterable:arrayList$.$$targs$$.Element$ArrayList,Element$Category:{t:m$1.$_Object},Item$Correspondence:arrayList$.$$targs$$.Element$ArrayList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:arrayList$.$$targs$$.Element$ArrayList,Subrange$Ranged:{t:m$1.List,a:{Element$List:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element out*/}},Index$Ranged:{t:m$1.Integer},Element$ListMutator:arrayList$.$$targs$$.Element$ArrayList,Element$IndexedCorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Item$CorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Element$SearchableList:arrayList$.$$targs$$.Element$ArrayList,Element$Stack:arrayList$.$$targs$$.Element$ArrayList,Element$Queue:arrayList$.$$targs$$.Element$ArrayList});
return arrayList$;
};
ArrayList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::ArrayList.initialCapacity')return o.$1dkeuw$v5_;
else if(n==='ceylon.collection::ArrayList.growthFactor')return o.$1dkeuw$v6_;
else if(n==='ceylon.collection::ArrayList.array')return o.$1dkeuw$v7_;
else if(n==='ceylon.collection::ArrayList.length')return o.$1dkeuw$v9_;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::ArrayList.initialCapacity')o.$1dkeuw$v5_=i;
else if(n==='ceylon.collection::ArrayList.growthFactor')o.$1dkeuw$v6_=i;
else if(n==='ceylon.collection::ArrayList.array')o.$1dkeuw$v7_=i;
else if(n==='ceylon.collection::ArrayList.length')o.$1dkeuw$v9_=i;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$v5)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$v6)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$v7)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$v9))];
};
function SortedMap($$targs$$,sortedMap$){
m$1.set_type_args(sortedMap$,$$targs$$,SortedMap);
m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:$$targs$$.Item$SortedMap,Key$SortedMap:$$targs$$.Key$SortedMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key out*/,Item$Entry:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Index in*/},sortedMap$);
m$1.Map({Key$Map:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key out*/,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:'Item$SortedMap',Key$SortedMap:'Key$SortedMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
if(SortedMap.$$===undefined){
m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
(function(sortedMap$){
sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};sortedMap$.ascendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:ascendingEntries')];},d:['ceylon.collection','SortedMap','$m','ascendingEntries']};}};sortedMap$.descendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:descendingEntries')];},d:['ceylon.collection','SortedMap','$m','descendingEntries']};}};sortedMap$.toString=function(){return this.string.valueOf();};
})(SortedMap.$$.prototype);
}
return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;$init$SortedMap();
function HashMap$$c($$targs$$,hashMap$){
m$1.set_type_args(hashMap$,$$targs$$);
MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
}
function HashMap(){return HashMap$c_$c$.apply(undefined,arguments);}
function HashMap$c_$c$$$a($164,$165,$166,$$targs$$,hashMap$){
if($164===undefined){$164=linked();}
if($165===undefined){$165=Hashtable();}
if($166===undefined){$166=m$1.empty();}
hashMap$.$1dkeuw$167_=null;
hashMap$.$1dkeuw$168_=null;
hashMap$.$1dkeuw$169_=$164;
m$1.atr$(hashMap$,'$1dkeuw$169',function(){return this.$1dkeuw$169_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$16a_=$165;
m$1.atr$(hashMap$,'$1dkeuw$16a',function(){return this.$1dkeuw$16a_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$16b_=$166;
m$1.atr$(hashMap$,'$1dkeuw$16b',function(){return this.$1dkeuw$16b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
hashMap$.$1dkeuw$16c_=(0);
m$1.atr$(hashMap$,'$1dkeuw$16c',function(){return this.$1dkeuw$16c_;},function($16d){return this.$1dkeuw$16c_=$16d;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
hashMap$.$1dkeuw$16e_=m$1.is$($166,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashMap$,'$1dkeuw$16e',function(){return this.$1dkeuw$16e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
var $16f=($16g=(hashMap$.$1dkeuw$16e?$165.initialCapacityForSize($166.size):null),m$1.nn$($16g)?$16g:$165.initialCapacityForUnknownSize());
$prop$get$16f={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,d:['ceylon.collection','HashMap','$cn','$def','$at','initialCapacity$vvzb8c']};}};
$prop$get$16f.get=function(){return $16f};
var $16g;
hashMap$.$1dkeuw$16h_=cachingEntryStore($16f,{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$16h',function(){return this.$1dkeuw$16h_;},function($16i){return this.$1dkeuw$16h_=$16i;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
return hashMap$;
};
function HashMap$c_$c$($164,$165,$166,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($164===undefined){$164=linked();}
if($165===undefined){$165=Hashtable();}
if($166===undefined){$166=m$1.empty();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_$c$$$a($164,$165,$166,$$targs$$,hashMap$);
var $16k;for(var $16j=hashMap$.$1dkeuw$16b.iterator();($16k=$16j.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$16l(hashMap$.$1dkeuw$16h,$16k)){
($16m=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$16m.successor,$16m);
var $16m;
}
}
if(!hashMap$.$1dkeuw$16e){
hashMap$.$1dkeuw$16n();
}
return hashMap$;
};
HashMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def')];},d:['ceylon.collection','HashMap','$cn','$def']};};
HashMap.HashMap$c_$c$=HashMap$c_$c$;
ex$.HashMap$c_$c$=HashMap$c_$c$;
function HashMap$c_copy$$a($16o,$16p,$16q,$$targs$$,hashMap$){
if($16p===undefined){$16p=$16o.$1dkeuw$169;}
if($16q===undefined){$16q=Hashtable();}
hashMap$.$1dkeuw$167_=null;
hashMap$.$1dkeuw$168_=null;
hashMap$.$1dkeuw$169_=$16p;
m$1.atr$(hashMap$,'$1dkeuw$169',function(){return this.$1dkeuw$169_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$16a_=$16q;
m$1.atr$(hashMap$,'$1dkeuw$16a',function(){return this.$1dkeuw$16a_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$16e_=true;
m$1.atr$(hashMap$,'$1dkeuw$16e',function(){return this.$1dkeuw$16e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
hashMap$.$1dkeuw$16h_=cachingEntryStore($16o.$1dkeuw$16h.size,{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$16h',function(){return this.$1dkeuw$16h_;},function($16r){return this.$1dkeuw$16h_=$16r;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
if(m$1.$eq$($16p,unlinked())){
hashMap$.$1dkeuw$16b_=m$1.empty();
hashMap$.$1dkeuw$16c=$16o.$1dkeuw$16c;
var $16s=(0);
$prop$get$16s={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1024,d:['ceylon.collection','HashMap','$cn','copy','$at','index$3a26oa']};}};
$prop$get$16s.get=function(){return $16s};
while(($16s<$16o.$1dkeuw$16h.size)){
var $16t;
if(m$1.nn$(($16t=$16o.$1dkeuw$16h.$_get($16s)))){
($16u=$16t.clone(),hashMap$.$1dkeuw$16h.set($16s,$16u), $16u);
var $16u;
}
($16v=$16s,$16s=$16v.successor,$16v);
var $16v;
}
}
else{
hashMap$.$1dkeuw$16c=(0);
hashMap$.$1dkeuw$16b_=$16o;
}
return hashMap$;
};
function HashMap$c_copy($16o,$16p,$16q,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($16p===undefined){$16p=$16o.$1dkeuw$169;}
if($16q===undefined){$16q=Hashtable();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_copy$$a($16o,$16p,$16q,$$targs$$,hashMap$);
var $16k;for(var $16w=hashMap$.$1dkeuw$16b.iterator();($16k=$16w.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$16l(hashMap$.$1dkeuw$16h,$16k)){
($16x=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$16x.successor,$16x);
var $16x;
}
}
if(!hashMap$.$1dkeuw$16e){
hashMap$.$1dkeuw$16n();
}
return hashMap$;
};
HashMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashMap',mt:'prm',$t:{t:HashMap,a:{Item$HashMap:'Item$HashMap',Key$HashMap:'Key$HashMap'}},an:function(){return[m$1.doc("The `HashMap` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy:$at:stability$gbelws')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy')];},d:['ceylon.collection','HashMap','$cn','copy']};};
HashMap.HashMap$c_copy=HashMap$c_copy;
ex$.HashMap$c_copy=HashMap$c_copy;
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
if(HashMap.$$===undefined){
m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
(function(hashMap$){
m$1.atr$(hashMap$,'$1dkeuw$169',function(){return this.$1dkeuw$169_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
m$1.atr$(hashMap$,'$1dkeuw$16b',function(){return this.$1dkeuw$16b_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
m$1.atr$(hashMap$,'$1dkeuw$16a',function(){return this.$1dkeuw$16a_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
m$1.atr$(hashMap$,'$1dkeuw$16e',function(){return this.$1dkeuw$16e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
m$1.atr$(hashMap$,'$1dkeuw$16h',function(){return this.$1dkeuw$16h_;},function($16y){return this.$1dkeuw$16h_=$16y;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
m$1.atr$(hashMap$,'$1dkeuw$16c',function(){return this.$1dkeuw$16c_;},function($16z){return this.$1dkeuw$16c_=$16z;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
m$1.atr$(hashMap$,'$1dkeuw$167',function(){return this.$1dkeuw$167_;},function($170){return this.$1dkeuw$167_=$170;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
m$1.atr$(hashMap$,'$1dkeuw$168',function(){return this.$1dkeuw$168_;},function($171){return this.$1dkeuw$168_=$171;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
hashMap$.$1dkeuw$172=function($173){var hashMap$=this;
return function(){var $174=$173.hash;return $174.xor($174.rightLogicalShift(16));
}();
};
hashMap$.$1dkeuw$172.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','hashCode$39nm0x']};};
hashMap$.$1dkeuw$175=function($176,$177){var hashMap$=this;
return $176.and(($177.size-(1)));
};
hashMap$.$1dkeuw$175.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
hashMap$.$1dkeuw$178=function($179,$17a,$17b){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$169,linked())){
var $17c=LinkedCell($179,$17a,$17b,hashMap$.$1dkeuw$168,{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}});
var $17d;
if(m$1.nn$(($17d=hashMap$.$1dkeuw$168))){
($17d.next=$17c);
}
hashMap$.$1dkeuw$168=$17c;
if(!m$1.nn$(hashMap$.$1dkeuw$167)){
hashMap$.$1dkeuw$167=$17c;
}
return $17c;
}
else{
return CachingCell($179,$17a,$17b,{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}});
}
};hashMap$.$1dkeuw$178.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
hashMap$.$1dkeuw$17e=function($17f){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$169,linked())){
var $17g;
m$1.asrt$2("",'167:12-167:50','HashMap.ceylon',[m$1.is$(($17g=$17f),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}}}),'is LinkedCell<Key->Item> cell']);
var $17h;
if(m$1.nn$(($17h=$17g.previous))){
($17h.next=$17g.next);
}
else{
hashMap$.$1dkeuw$167=$17g.next;
}
var $17i;
if(m$1.nn$(($17i=$17g.next))){
($17i.previous=$17g.previous);
}
else{
hashMap$.$1dkeuw$168=$17g.previous;
}
}
};hashMap$.$1dkeuw$17e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
hashMap$.$1dkeuw$16l=function($17j,$17k){
var hashMap$=this;
var $17l=hashMap$.$1dkeuw$172($17k.key);
var $17m=hashMap$.$1dkeuw$175($17l,$17j);
var $17n=$17j.$_get($17m);
var $17o=$17n;
var $17p;
while(m$1.nn$(($17p=$17o))){
if((($17p.keyHash==$17l)&&m$1.$eq$($17p.element.key,$17k.key))){
($17p.element=$17k);
return false;
}
$17o=$17p.rest;
}
($17q=hashMap$.$1dkeuw$178($17k,$17l,$17n),$17j.set($17m,$17q), $17q);
var $17q;
return true;
};hashMap$.$1dkeuw$16l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
hashMap$.$1dkeuw$16n=function(){
var hashMap$=this;
if(hashMap$.$1dkeuw$16a.rehash(hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16h.size)){
var $17r=cachingEntryStore(hashMap$.$1dkeuw$16a.capacity(hashMap$.$1dkeuw$16c),{Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap,Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap});
var $17s=(0);
while(($17s<hashMap$.$1dkeuw$16h.size)){
var $17t=hashMap$.$1dkeuw$16h.$_get($17s);
var $17u;
while(m$1.nn$(($17u=$17t))){
$17t=$17u.rest;
var $17v=hashMap$.$1dkeuw$175($17u.keyHash,$17r);
var $17w=$17r.$_get($17v);
($17u.rest=$17w);
($17x=$17u,$17r.set($17v,$17x), $17x);
var $17x;
}
($17y=$17s,$17s=$17y.successor,$17y);
var $17y;
}
hashMap$.$1dkeuw$16h=$17r;
}
};hashMap$.$1dkeuw$16n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
hashMap$.put=function($17z,$180){
var hashMap$=this;
var $181=hashMap$.$1dkeuw$172($17z);
var $182=hashMap$.$1dkeuw$175($181,hashMap$.$1dkeuw$16h);
var $183=m$1.Entry($17z,$180,{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/});
var $184=hashMap$.$1dkeuw$16h.$_get($182);
var $185=$184;
var $186;
while(m$1.nn$(($186=$185))){
if((($186.keyHash==$181)&&m$1.$eq$($186.element.key,$17z))){
var $187=$186.element.item;
($186.element=$183);
return $187;
}
$185=$186.rest;
}
($188=hashMap$.$1dkeuw$178($183,$181,$184),hashMap$.$1dkeuw$16h.set($182,$188), $188);
var $188;
($189=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$189.successor,$189);
var $189;
hashMap$.$1dkeuw$16n();
return null;
};hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
hashMap$.replaceEntry=function($18a,$18b,$18c){
var hashMap$=this;
var $18d=hashMap$.$1dkeuw$172($18a);
var $18e=hashMap$.$1dkeuw$175($18d,hashMap$.$1dkeuw$16h);
var $18f=hashMap$.$1dkeuw$16h.$_get($18e);
var $18g;
while(m$1.nn$(($18g=$18f))){
if((($18g.keyHash==$18d)&&m$1.$eq$($18g.element.key,$18a))){
var $18h;
if(m$1.nn$(($18h=$18g.element.item))&&m$1.$eq$($18h,$18b)){
($18g.element=m$1.Entry($18a,$18c,{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}));
return true;
}
else{
return false;
}
}
$18f=$18g.rest;
}
return false;
};hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
hashMap$.putAll=function($18i){
var hashMap$=this;
var $18k;for(var $18j=$18i.iterator();($18k=$18j.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$16l(hashMap$.$1dkeuw$16h,$18k)){
($18l=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$18l.successor,$18l);
var $18l;
}
}
hashMap$.$1dkeuw$16n();
};hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
hashMap$.remove=function($18m){
var hashMap$=this;
var $18n=hashMap$.$1dkeuw$172($18m);
var $18o=hashMap$.$1dkeuw$175($18n,hashMap$.$1dkeuw$16h);
var $18p;
if(m$1.nn$(($18p=hashMap$.$1dkeuw$16h.$_get($18o)))&&($18p.keyHash==$18n)&&m$1.$eq$($18p.element.key,$18m)){
($18q=$18p.rest,hashMap$.$1dkeuw$16h.set($18o,$18q), $18q);
var $18q;
hashMap$.$1dkeuw$17e($18p);
($18r=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$18r.predecessor,$18r);
var $18r;
return $18p.element.item;
}
var $18s=hashMap$.$1dkeuw$16h.$_get($18o);
var $18t;
while(m$1.nn$(($18t=$18s))){
var $18u=$18t.rest;
var $18v;
if(m$1.nn$(($18v=$18u))&&m$1.$eq$($18v.element.key,$18m)){
($18t.rest=$18v.rest);
hashMap$.$1dkeuw$17e($18v);
($18w=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$18w.predecessor,$18w);
var $18w;
return $18v.element.item;
}
else{
$18s=$18u;
}
}
return null;
};hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
hashMap$.removeEntry=function($18x,$18y){
var hashMap$=this;
var $18z=hashMap$.$1dkeuw$172($18x);
var $190=hashMap$.$1dkeuw$175($18z,hashMap$.$1dkeuw$16h);
var $191;
while(m$1.nn$(($191=hashMap$.$1dkeuw$16h.$_get($190)))&&($191.keyHash==$18z)&&m$1.$eq$($191.element.key,$18x)){
var $192;
if(m$1.nn$(($192=$191.element.item))&&m$1.$eq$($192,$18y)){
($193=$191.rest,hashMap$.$1dkeuw$16h.set($190,$193), $193);
var $193;
($194=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$194.predecessor,$194);
var $194;
return true;
}
else{
return false;
}
}
var $195=hashMap$.$1dkeuw$16h.$_get($190);
var $196;
while(m$1.nn$(($196=$195))){
var $197=$196.rest;
var $198;
if(m$1.nn$(($198=$197))&&m$1.$eq$($198.element.key,$18x)){
var $199;
if(m$1.nn$(($199=$198.element.item))&&m$1.$eq$($199,$18y)){
($196.rest=$198.rest);
hashMap$.$1dkeuw$17e($198);
($19a=hashMap$.$1dkeuw$16c,hashMap$.$1dkeuw$16c=$19a.predecessor,$19a);
var $19a;
return true;
}
else{
return false;
}
}
else{
$195=$197;
}
}
return false;
};hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
hashMap$.clear=function(){
var hashMap$=this;
var $19b=(0);
while(($19b<hashMap$.$1dkeuw$16h.size)){
($19c=null,hashMap$.$1dkeuw$16h.set(($19d=$19b,$19b=$19d.successor,$19d),$19c), $19c);
var $19c,$19d;
}
hashMap$.$1dkeuw$16c=(0);
hashMap$.$1dkeuw$167=null;
hashMap$.$1dkeuw$168=null;
};hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
m$1.atr$(hashMap$,'size',function(){
var hashMap$=this;
return hashMap$.$1dkeuw$16c;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
m$1.atr$(hashMap$,'empty',function(){
var hashMap$=this;
return (hashMap$.$1dkeuw$16c==(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','empty']};});
hashMap$.$_get=function($19e){
var hashMap$=this;
if(hashMap$.empty){
return null;
}
var $19f=hashMap$.$1dkeuw$172($19e);
var $19g=hashMap$.$1dkeuw$175($19f,hashMap$.$1dkeuw$16h);
var $19h=hashMap$.$1dkeuw$16h.$_get($19g);
var $19i;
while(m$1.nn$(($19i=$19h))){
if((($19i.keyHash==$19f)&&m$1.$eq$($19i.element.key,$19e))){
return $19i.element.item;
}
$19h=$19i.rest;
}
return null;
};hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
hashMap$.getOrDefault=function($19j,$19k,$6rx8ao$){
var hashMap$=this;
if(hashMap$.empty){
return $19k;
}
var $19l=hashMap$.$1dkeuw$172($19j);
var $19m=hashMap$.$1dkeuw$175($19l,hashMap$.$1dkeuw$16h);
var $19n=hashMap$.$1dkeuw$16h.$_get($19m);
var $19o;
while(m$1.nn$(($19o=$19n))){
if((($19o.keyHash==$19l)&&m$1.$eq$($19o.element.key,$19j))){
return $19o.element.item;
}
$19n=$19o.rest;
}
return $19k;
};hashMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$HashMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:HashMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','HashMap','$m','getOrDefault']};};
m$1.atr$(hashMap$,'first',function(){
var hashMap$=this;
return (m$1.$eq$(hashMap$.$1dkeuw$169,linked())?($19q=hashMap$.$1dkeuw$167,m$1.nn$($19q)?$19q.element:null):($19r=hashMap$.$1dkeuw$16h.coalesced.first,m$1.nn$($19r)?$19r.element:null));
var $19q,$19r;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});
m$1.atr$(hashMap$,'last',function(){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$169,linked())){
return ($19s=hashMap$.$1dkeuw$168,m$1.nn$($19s)?$19s.element:null);
var $19s;
}
else{
var $19t=hashMap$.$1dkeuw$16h.reversed.coalesced.first;
var $19u;
while(m$1.nn$(($19u=($19v=$19t,m$1.nn$($19v)?$19v.rest:null)))){
$19t=$19u;
}
var $19v;
return ($19w=$19t,m$1.nn$($19w)?$19w.element:null);
var $19w;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','last']};});hashMap$.iterator=function(){var hashMap$=this;
return ($19x=(m$1.$eq$(hashMap$.$1dkeuw$169,linked())?LinkedCellIterator(hashMap$.$1dkeuw$167,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}}):null),m$1.nn$($19x)?$19x:CachingStoreIterator(hashMap$.$1dkeuw$16h,{Element$CachingStoreIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}}));
var $19x;
};hashMap$.count=function($19y){
var hashMap$=this;
var $19z=(0);
var $1a0=(0);
while(($19z<hashMap$.$1dkeuw$16h.size)){
var $1a1=hashMap$.$1dkeuw$16h.$_get($19z);
var $1a2;
while(m$1.nn$(($1a2=$1a1))){
if($19y($1a2.element)){
($1a3=$1a0,$1a0=$1a3.successor,$1a3);
var $1a3;
}
$1a1=$1a2.rest;
}
($1a4=$19z,$19z=$1a4.successor,$1a4);
var $1a4;
}
return $1a0;
};hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
hashMap$.each=function($1a5){
var hashMap$=this;
hashMap$.$1dkeuw$16h.each(m$1.jsc$2((function($1a6){
var $1a7=$1a6;
$prop$get$1a7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:hashMap$.each,pa:1027,d:['ceylon.collection','HashMap','$m','each','$at','iter$edjelw']};}};
$prop$get$1a7.get=function(){return $1a7};
var $1a8;
while(m$1.nn$(($1a8=$1a7))){
$1a5($1a8.element);
$1a7=$1a8.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}}}}])])}));
};hashMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','each']};};
m$1.atr$(hashMap$,'hash',function(){
var hashMap$=this;
var $1a9=(0);
var $1aa=(0);
while(($1a9<hashMap$.$1dkeuw$16h.size)){
var $1ab=hashMap$.$1dkeuw$16h.$_get($1a9);
var $1ac;
while(m$1.nn$(($1ac=$1ab))){
($1aa=$1aa+$1ac.element.hash);
$1ab=$1ac.rest;
}
($1ad=$1a9,$1a9=$1ad.successor,$1ad);
var $1ad;
}
return $1aa;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($1ae){
var hashMap$=this;
var $1af;
if(m$1.is$(($1af=$1ae),{t:HashMap,a:{Item$HashMap:{t:m$1.Anything},Key$HashMap:{t:m$1.Anything}}})&&(hashMap$===$1af)){
return true;
}
else{
var $1ag;
if(m$1.is$(($1ag=$1ae),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&($1ag.size==hashMap$.$1dkeuw$16c)){
var $1ah=(0);
while(($1ah<hashMap$.$1dkeuw$16h.size)){
var $1ai=hashMap$.$1dkeuw$16h.$_get($1ah);
var $1aj;
while(m$1.nn$(($1aj=$1ai))){
var $1ak=$1ag.$_get($1aj.element.key);
var $1al;
if(m$1.nn$(($1al=$1aj.element.item))){
var $1am;
if(m$1.nn$(($1am=$1ak))){
if(!m$1.$eq$($1am,$1al)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($1ak)){
return false;
}
}
$1ai=$1aj.rest;
}
($1an=$1ah,$1ah=$1an.successor,$1an);
var $1an;
}
return true;
}
else{
return false;
}
}
};hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
hashMap$.clone=function(){var hashMap$=this;
return HashMap$c_copy(hashMap$,undefined,undefined,{Item$HashMap:hashMap$.$$targs$$.Item$HashMap,Key$HashMap:hashMap$.$$targs$$.Key$HashMap});
};
hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashMap,a:{Item$HashMap:'Item$HashMap',Key$HashMap:'Key$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
hashMap$.defines=function($1ao){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $1ap=hashMap$.$1dkeuw$172($1ao);
var $1aq=hashMap$.$1dkeuw$175($1ap,hashMap$.$1dkeuw$16h);
var $1ar=hashMap$.$1dkeuw$16h.$_get($1aq);
var $1as;
while(m$1.nn$(($1as=$1ar))){
if((($1as.keyHash==$1ap)&&m$1.$eq$($1as.element.key,$1ao))){
return true;
}
$1ar=$1as.rest;
}
return false;
}
};hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
hashMap$.contains=function($1at){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $1au;
if(m$1.is$(($1au=$1at),{t:m$1.Entry,a:{Key$Entry:{t:m$1.$_Object},Item$Entry:{t:m$1.Anything}}})){
var $1av=$1au.key;
var $1aw=hashMap$.$1dkeuw$172($1av);
var $1ax=hashMap$.$1dkeuw$175($1aw,hashMap$.$1dkeuw$16h);
var $1ay=hashMap$.$1dkeuw$16h.$_get($1ax);
var $1az;
while(m$1.nn$(($1az=$1ay))){
if((($1az.keyHash==$1aw)&&m$1.$eq$($1az.element.key,$1av))){
var $1b0;
if(m$1.nn$(($1b0=$1az.element.item))){
var $1b1;
if(m$1.nn$(($1b1=$1au.item))){
return m$1.$eq$($1b0,$1b1);
}
else{
return false;
}
}
else{
return !m$1.nn$($1au.item);
}
}
$1ay=$1az.rest;
}
return false;
}
else{
return false;
}
}
};hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
hashMap$.toString=function(){return this.string.valueOf();};
})(HashMap.$$.prototype);
}
return HashMap;
}
ex$.$init$HashMap=$init$HashMap;$init$HashMap();HashMap.inst$$=function($1b2){
var hashMap$=new HashMap.$$;
m$1.set_type_args(hashMap$,{Key$HashMap:$1b2.$$targs$$.Type$Class.a.Key$HashMap,Item$HashMap:$1b2.$$targs$$.Type$Class.a.Item$HashMap});
m$1.set_type_args(hashMap$,{Key$MutableMap:hashMap$.$$targs$$.Key$HashMap,Item$MutableMap:hashMap$.$$targs$$.Item$HashMap,Key$Map:hashMap$.$$targs$$.Key$HashMap,Item$Map:hashMap$.$$targs$$.Item$HashMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key out*/,Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item out*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:hashMap$.$$targs$$.Item$HashMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:hashMap$.$$targs$$.Key$HashMap,Item$MapMutator:hashMap$.$$targs$$.Item$HashMap,Key$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Key$HashMap,Item$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap,Item$CorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap});
return hashMap$;
};
HashMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashMap.stability')return o.$1dkeuw$169_;
else if(n==='ceylon.collection::HashMap.hashtable')return o.$1dkeuw$16a_;
else if(n==='ceylon.collection::HashMap.store')return o.$1dkeuw$16h_;
else if(n==='ceylon.collection::HashMap.length')return o.$1dkeuw$16c_;
else if(n==='ceylon.collection::HashMap.head')return o.$1dkeuw$167_;
else if(n==='ceylon.collection::HashMap.tip')return o.$1dkeuw$168_;
else throw new TypeError('unknown attribute');
};
HashMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashMap.stability')o.$1dkeuw$169_=i;
else if(n==='ceylon.collection::HashMap.hashtable')o.$1dkeuw$16a_=i;
else if(n==='ceylon.collection::HashMap.store')o.$1dkeuw$16h_=i;
else if(n==='ceylon.collection::HashMap.length')o.$1dkeuw$16c_=i;
else if(n==='ceylon.collection::HashMap.head')o.$1dkeuw$167_=i;
else if(n==='ceylon.collection::HashMap.tip')o.$1dkeuw$168_=i;
else throw new TypeError('unknown attribute');
};
HashMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$169)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$16a)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$16h)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$16c)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$167)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$168))];
};
function UnmodifiableMap($1dkeuw$1b3,$$targs$$,unmodifiableMap$){
$init$UnmodifiableMap();
if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,$$targs$$);
unmodifiableMap$.$1dkeuw$1b3_=$1dkeuw$1b3;
m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
unmodifiableMap$.$1dkeuw$1b4_=unmodifiableMap$.$1dkeuw$1b3.items;
return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
ex$.UnmodifiableMap=UnmodifiableMap;
function $init$UnmodifiableMap(){
if(UnmodifiableMap.$$===undefined){
m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
(function(unmodifiableMap$){
m$1.atr$(unmodifiableMap$,'$1dkeuw$1b3',function(){return this.$1dkeuw$1b3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
unmodifiableMap$.$_get=function($1b5){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.$_get($1b5);
};unmodifiableMap$.defines=function($1b6){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.defines($1b6);
};unmodifiableMap$.iterator=function(){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.iterator();
};m$1.atr$(unmodifiableMap$,'size',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
m$1.atr$(unmodifiableMap$,'keys',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.keys;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
m$1.atr$(unmodifiableMap$,'items',function(){return this.$1dkeuw$1b4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
unmodifiableMap$.equals=function($1b7){var unmodifiableMap$=this;
return m$1.$eq$(unmodifiableMap$.$1dkeuw$1b3,$1b7);
};m$1.atr$(unmodifiableMap$,'hash',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
unmodifiableMap$.clone=function(){var unmodifiableMap$=this;
return UnmodifiableMap(unmodifiableMap$.$1dkeuw$1b3.clone(),{Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap});
};unmodifiableMap$.each=function($1b8){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$1b3.each($1b8);
};unmodifiableMap$.toString=function(){return this.string.valueOf();};
})(UnmodifiableMap.$$.prototype);
}
return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;$init$UnmodifiableMap();UnmodifiableMap.inst$$=function($1b9){
var unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,{Key$UnmodifiableMap:$1b9.$$targs$$.Type$Class.a.Key$UnmodifiableMap,Item$UnmodifiableMap:$1b9.$$targs$$.Type$Class.a.Item$UnmodifiableMap});
m$1.set_type_args(unmodifiableMap$,{Key$Map:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Map:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap}},Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$Correspondence:{t:m$1.$_Object}});
return unmodifiableMap$;
};
UnmodifiableMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableMap.map')return o.$1dkeuw$1b3_;
else if(n==='ceylon.collection::UnmodifiableMap.items')return o.items_;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableMap.map')o.$1dkeuw$1b3_=i;
else if(n==='ceylon.collection::UnmodifiableMap.items')o.items_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1b3)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getItems))];
};
function unmodifiableMap($1ba,$pjsjp5$){return UnmodifiableMap($1ba,{Key$UnmodifiableMap:$pjsjp5$.Key$unmodifiableMap/*ORALE!Key inv pero Key out*/,Item$UnmodifiableMap:$pjsjp5$.Item$unmodifiableMap/*ORALE!Item inv pero Item out*/});
};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
function TreeSet$$c($$targs$$,treeSet$){
m$1.set_type_args(treeSet$,$$targs$$);
SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Element$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Element out*/,Index$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Index in*/},treeSet$);
}
function TreeSet(){return TreeSet$c_$c$.apply(undefined,arguments);}
function TreeSet$c_$c$$$a($1bb,$1bc,$$targs$$,treeSet$){
if($1bc===undefined){$1bc=m$1.empty();}
treeSet$.$1dkeuw$1bd_=$1bb;
m$1.atr$(treeSet$,'$1dkeuw$1bd',function(){return this.$1dkeuw$1bd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
treeSet$.$1dkeuw$1be_=($1bf=$1bb,$1bg=$1bc.$_map(m$1.jsc$2((function($1bh){return m$1.Entry($1bh,$1bh,{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key out*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item out*/});
}),[{nm:'elem',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key out*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item out*/}},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}),{Result$map:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key out*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item out*/}}}),TreeMap($1bf,$1bg,{Item$TreeMap:treeSet$.$$targs$$.Element$TreeSet,Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet}));
m$1.atr$(treeSet$,'$1dkeuw$1be',function(){return this.$1dkeuw$1be_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
var $1bf,$1bg;
return treeSet$;
};
function TreeSet$c_$c$($1bb,$1bc,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
if($1bc===undefined){$1bc=m$1.empty();}
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_$c$$$a($1bb,$1bc,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:$def')];},d:['ceylon.collection','TreeSet','$cn','$def']};};
TreeSet.TreeSet$c_$c$=TreeSet$c_$c$;
ex$.TreeSet$c_$c$=TreeSet$c_$c$;
function TreeSet$c_copy$$a($1bi,$$targs$$,treeSet$){
treeSet$.$1dkeuw$1bd_=($1bj=$1bi,m$1.jsc$3($1bj,$1bj.$1dkeuw$1bd));
m$1.atr$(treeSet$,'$1dkeuw$1bd',function(){return this.$1dkeuw$1bd_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
var $1bj;
treeSet$.$1dkeuw$1be_=$1bi.$1dkeuw$1be.clone();
m$1.atr$(treeSet$,'$1dkeuw$1be',function(){return this.$1dkeuw$1be_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
return treeSet$;
};
function TreeSet$c_copy($1bi,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_copy$$a($1bi,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeSet',mt:'prm',$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:copy')];},d:['ceylon.collection','TreeSet','$cn','copy']};};
TreeSet.TreeSet$c_copy=TreeSet$c_copy;
ex$.TreeSet$c_copy=TreeSet$c_copy;
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Element$Ranged:'Element$TreeSet',Index$Ranged:'Element$TreeSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
if(TreeSet.$$===undefined){
m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
(function(treeSet$){
m$1.atr$(treeSet$,'$1dkeuw$1be',function(){return this.$1dkeuw$1be_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
treeSet$.contains=function($1bk){var treeSet$=this;
return treeSet$.$1dkeuw$1be.defines($1bk);
};treeSet$.add=function($1bl){var treeSet$=this;
return !m$1.nn$(treeSet$.$1dkeuw$1be.put($1bl,$1bl));
};treeSet$.remove=function($1bm){var treeSet$=this;
return m$1.nn$(treeSet$.$1dkeuw$1be.remove($1bm));
};treeSet$.clear=function(){var treeSet$=this;
return treeSet$.$1dkeuw$1be.clear();
};treeSet$.iterator=function(){var treeSet$=this;
return treeSet$.$1dkeuw$1be.keys.iterator();
};m$1.atr$(treeSet$,'first',function(){
var treeSet$=this;
return ($1bn=treeSet$.$1dkeuw$1be.first,m$1.nn$($1bn)?$1bn.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
m$1.atr$(treeSet$,'last',function(){
var treeSet$=this;
return ($1bo=treeSet$.$1dkeuw$1be.last,m$1.nn$($1bo)?$1bo.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
treeSet$.higherElements=function($1bp){var treeSet$=this;
return treeSet$.$1dkeuw$1be.higherEntries($1bp).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key out*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item out*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.lowerElements=function($1bq){var treeSet$=this;
return treeSet$.$1dkeuw$1be.lowerEntries($1bq).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key out*/,Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item out*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.ascendingElements=function($1br,$1bs){var treeSet$=this;
return treeSet$.higherElements($1br).takeWhile(m$1.jsc$2((function($1bt){return !m$1.$eq$(treeSet$.$1dkeuw$1bd($1bt,$1bs),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}));
};treeSet$.descendingElements=function($1bu,$1bv){var treeSet$=this;
return treeSet$.lowerElements($1bu).takeWhile(m$1.jsc$2((function($1bw){return !m$1.$eq$(treeSet$.$1dkeuw$1bd($1bw,$1bv),m$1.smaller());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])}));
};treeSet$.measure=function($1bx,$1by){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$1bd),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($1bx).take($1by),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.span=function($1bz,$1c0){var treeSet$=this;
return function(){var $1c1=m$1.$eq$(treeSet$.$1dkeuw$1bd($1bz,$1c0),m$1.larger());return ($1c2=m$1.jsc$2((function($1c3,$1c4){return ($1c5=($1c1?treeSet$.$1dkeuw$1bd($1c4,$1c3):null),m$1.nn$($1c5)?$1c5:treeSet$.$1dkeuw$1bd($1c3,$1c4));
var $1c5;
}),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([{t:m$1.$_String}])}),$1c6=($1c7=($1c1?treeSet$.descendingElements($1bz,$1c0):null),m$1.nn$($1c7)?$1c7:treeSet$.ascendingElements($1bz,$1c0)),TreeSet($1c2,$1c6,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}));
var $1c2,$1c6,$1c7;
}();
};treeSet$.spanFrom=function($1c8){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$1bd),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($1c8),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.spanTo=function($1c9){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$1bd),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.takeWhile(m$1.jsc$2((function($1ca){return !m$1.$eq$(treeSet$.$1dkeuw$1bd($1ca,$1c9),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet])})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.clone=function(){var treeSet$=this;
return TreeSet$c_copy(treeSet$,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};
treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
treeSet$.complement=function($1cb,$hn5pfs$){
var treeSet$=this;
var $1cc=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
var $1ce;for(var $1cd=treeSet$.iterator();($1ce=$1cd.next())!==m$1.finished();){
if((!m$1.$cnt$2($1ce,$1cb))){
$1cc.add($1ce);
}
}
return $1cc;
};treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
treeSet$.exclusiveUnion=function($1cf,$w5s243$){
var treeSet$=this;
var $1cg=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$w5s243$.Other$exclusiveUnion])});
var $1ci;for(var $1ch=treeSet$.iterator();($1ci=$1ch.next())!==m$1.finished();){
if((!m$1.$cnt$2($1ci,$1cf))){
$1cg.add($1ci);
}
}
var $1ck;for(var $1cj=$1cf.iterator();($1ck=$1cj.next())!==m$1.finished();){
if((!m$1.$cnt$2($1ck,treeSet$))){
$1cg.add($1ck);
}
}
return $1cg;
};treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
treeSet$.intersection=function($1cl,$8ak55h$){
var treeSet$=this;
var $1cm=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([treeSet$.$$targs$$.Element$TreeSet,$8ak55h$.Other$intersection])});
var $1co;for(var $1cn=treeSet$.iterator();($1co=$1cn.next())!==m$1.finished();){
var $1cp;
if(m$1.$cnt$2($1co,$1cl)&&m$1.is$(($1cp=$1co),$8ak55h$.Other$intersection,$8ak55h$)){
$1cm.add($1cp);
}
}
return $1cm;
};treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
treeSet$.union=function($1cq,$vdkdyl$){
var treeSet$=this;
var $1cr=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$vdkdyl$.Other$union])});
$1cr.addAll(treeSet$);
$1cr.addAll($1cq);
return $1cr;
};treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
treeSet$.equals=function($1cs){var treeSet$=this;
return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(treeSet$,$1cs);
};m$1.atr$(treeSet$,'hash',function(){
var treeSet$=this;
return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
treeSet$.toString=function(){return this.string.valueOf();};
})(TreeSet.$$.prototype);
}
return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;$init$TreeSet();TreeSet.inst$$=function($1ct){
var treeSet$=new TreeSet.$$;
m$1.set_type_args(treeSet$,{Element$TreeSet:$1ct.$$targs$$.Type$Class.a.Element$TreeSet});
m$1.set_type_args(treeSet$,{Element$MutableSet:treeSet$.$$targs$$.Element$TreeSet,Element$Set:treeSet$.$$targs$$.Element$TreeSet,Element$Collection:treeSet$.$$targs$$.Element$TreeSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:treeSet$.$$targs$$.Element$TreeSet,Element$Category:{t:m$1.$_Object},Element$SetMutator:treeSet$.$$targs$$.Element$TreeSet,Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet,Element$Ranged:treeSet$.$$targs$$.Element$TreeSet,Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet}},Index$Ranged:treeSet$.$$targs$$.Element$TreeSet});
return treeSet$;
};
TreeSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeSet.map')return o.$1dkeuw$1be_;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeSet.map')o.$1dkeuw$1be_=i;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1be))];
};
var $1bn,$1bo;
function naturalOrderTreeSet($1cu,$fl14hl$){return TreeSet(m$1.jsc$2((function($1cv,$1cw){return $1cv.compare($1cw);
}),[{nm:'x',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet},{nm:'y',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([$fl14hl$.Element$naturalOrderTreeSet,$fl14hl$.Element$naturalOrderTreeSet])}),$1cu,{Element$TreeSet:$fl14hl$.Element$naturalOrderTreeSet});
};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$naturalOrderTreeSet'}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
function Stack($$targs$$,stack$){
m$1.set_type_args(stack$,$$targs$$,Stack);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
if(Stack.$$===undefined){
m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
(function(stack$){
stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
stack$.toString=function(){return this.string.valueOf();};
})(Stack.$$.prototype);
}
return Stack;
}
ex$.$init$Stack=$init$Stack;$init$Stack();
function LinkedList$$c($$targs$$,linkedList$){
m$1.set_type_args(linkedList$,$$targs$$);
MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
}
function LinkedList(){return LinkedList$c_$c$.apply(undefined,arguments);}
function LinkedList$c_$c$$$a($1cx,$$targs$$,linkedList$){
if($1cx===undefined){$1cx=m$1.empty();}
linkedList$.$1dkeuw$1cy_=null;
linkedList$.$1dkeuw$1cz_=null;
linkedList$.$1dkeuw$1d0_=(0);
var $1d2;for(var $1d1=$1cx.iterator();($1d2=$1d1.next())!==m$1.finished();){
linkedList$.$1dkeuw$1d3($1d2);
}
return linkedList$;
};
function LinkedList$c_$c$($1cx,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
if($1cx===undefined){$1cx=m$1.empty();}
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_$c$$$a($1cx,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:$def')];},d:['ceylon.collection','LinkedList','$cn','$def']};};
LinkedList.LinkedList$c_$c$=LinkedList$c_$c$;
ex$.LinkedList$c_$c$=LinkedList$c_$c$;
function LinkedList$c_copy$$a($1d4,$$targs$$,linkedList$){
linkedList$.$1dkeuw$1cy_=null;
linkedList$.$1dkeuw$1cz_=null;
linkedList$.$1dkeuw$1d0_=(0);
var $1d5=$1d4.$1dkeuw$1cy;
$prop$get$1d5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$cn','copy','$at','iter$vnorsk']};}};
$prop$get$1d5.get=function(){return $1d5};
var $1d6;
while(m$1.nn$(($1d6=$1d5))){
linkedList$.$1dkeuw$1d3($1d6.element);
$1d5=$1d6.rest;
}
return linkedList$;
};
function LinkedList$c_copy($1d4,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_copy$$a($1d4,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'linkedList',mt:'prm',$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},an:function(){return[m$1.doc("The `LinkedList` to copy.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:copy')];},d:['ceylon.collection','LinkedList','$cn','copy']};};
LinkedList.LinkedList$c_copy=LinkedList$c_copy;
ex$.LinkedList$c_copy=LinkedList$c_copy;
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
if(LinkedList.$$===undefined){
m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
(function(linkedList$){
m$1.atr$(linkedList$,'$1dkeuw$1cy',function(){return this.$1dkeuw$1cy_;},function($1d7){return this.$1dkeuw$1cy_=$1d7;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
m$1.atr$(linkedList$,'$1dkeuw$1cz',function(){return this.$1dkeuw$1cz_;},function($1d8){return this.$1dkeuw$1cz_=$1d8;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
m$1.atr$(linkedList$,'$1dkeuw$1d0',function(){return this.$1dkeuw$1d0_;},function($1d9){return this.$1dkeuw$1d0_=$1d9;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
linkedList$.$1dkeuw$1d3=function($1da){
var linkedList$=this;
var $1db=Cell($1da,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
var $1dc;
if(m$1.nn$(($1dc=linkedList$.$1dkeuw$1cz))){
($1dc.rest=$1db);
linkedList$.$1dkeuw$1cz=$1db;
}
else{
linkedList$.$1dkeuw$1cz=(linkedList$.$1dkeuw$1cy=$1db);
}
($1dd=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1dd.successor,$1dd);
var $1dd;
};linkedList$.$1dkeuw$1d3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
linkedList$.set=function($1de,$1df){
var linkedList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'59:8-61:32','LinkedList.ceylon',[($1dg=$1de,$1dg.notSmallerThan((0))&&$1dg.smallerThan(linkedList$.$1dkeuw$1d0)),'0<=index<length']);
var $1dh=linkedList$.$1dkeuw$1cy;
var $1di=(0);
var $1dj;
while(m$1.nn$(($1dj=$1dh))){
if((($1dk=$1di,$1di=$1dk.successor,$1dk)==$1de)){
($1dj.element=$1df);
return;
}
var $1dk;
$1dh=$1dj.rest;
}
};linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
linkedList$.insert=function($1dl,$1dm){
var linkedList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlength of the list",'75:8-77:33','LinkedList.ceylon',[($1dn=$1dl,$1dn.notSmallerThan((0))&&$1dn.notLargerThan(linkedList$.$1dkeuw$1d0)),'0<=index<=length']);
if(($1dl==linkedList$.$1dkeuw$1d0)){
linkedList$.add($1dm);
}
else{
if(($1dl==(0))){
linkedList$.$1dkeuw$1cy=Cell($1dm,linkedList$.$1dkeuw$1cy,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
($1do=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1do.successor,$1do);
var $1do;
}
else{
var $1dp=linkedList$.$1dkeuw$1cy;
var $1dq=(0);
var $1dr;
while(m$1.nn$(($1dr=$1dp))){
var $1ds=$1dr.rest;
if((($1dq=$1dq.successor)==$1dl)){
($1dr.rest=Cell($1dm,$1ds,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
($1dt=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1dt.successor,$1dt);
var $1dt;
return;
}
$1dp=$1ds;
}
m$1.asrt$2("",'99:16-99:30','LinkedList.ceylon',[false,'false']);
}
}
};linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
linkedList$.insertAll=function($1du,$1dv){
var linkedList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlength of the list",'107:8-109:33','LinkedList.ceylon',[($1dw=$1du,$1dw.notSmallerThan((0))&&$1dw.notLargerThan(linkedList$.$1dkeuw$1d0)),'0<=index<=length']);
if(($1du==linkedList$.$1dkeuw$1d0)){
linkedList$.addAll($1dv);
}
else{
var $1dx=m$1.$_Array($1dv,{Element$Array:linkedList$.$$targs$$.Element$LinkedList});
$1dx.reverseInPlace();
if(($1du==(0))){
linkedList$.$1dkeuw$1cy=$1dx.fold(linkedList$.$1dkeuw$1cy,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($1dy,$1dz){return Cell($1dz,$1dy,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList]),Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])}}}));
(linkedList$.$1dkeuw$1d0=linkedList$.$1dkeuw$1d0+$1dx.size);
}
else{
var $1e0=linkedList$.$1dkeuw$1cy;
var $1e1=(0);
var $1e2;
while(m$1.nn$(($1e2=$1e0))){
var $1e3=$1e2.rest;
if((($1e1=$1e1.successor)==$1du)){
($1e2.rest=$1dx.fold($1e3,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($1e4,$1e5){return Cell($1e5,$1e4,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList]),Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])}}})));
(linkedList$.$1dkeuw$1d0=linkedList$.$1dkeuw$1d0+$1dx.size);
return;
}
$1e0=$1e3;
}
m$1.asrt$2("",'135:16-135:30','LinkedList.ceylon',[false,'false']);
}
}
};linkedList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insertAll']};};
linkedList$.add=function($1e6){var linkedList$=this;
return linkedList$.$1dkeuw$1d3($1e6);
};
linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
linkedList$.addAll=function($1e7){
var linkedList$=this;
var $1e9;for(var $1e8=$1e7.iterator();($1e9=$1e8.next())!==m$1.finished();){
linkedList$.add($1e9);
}
};linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
linkedList$.$_delete=function($1ea){
var linkedList$=this;
if(($1ea==(0))){
var $1eb;
if(m$1.nn$(($1eb=linkedList$.$1dkeuw$1cy))){
var $1ec;
if(m$1.nn$(($1ec=$1eb.rest))){
linkedList$.$1dkeuw$1cy=$1ec;
}
else{
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
}
($1ed=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1ed.predecessor,$1ed);
var $1ed;
return $1eb.element;
}
else{
return null;
}
}
else{
if(($1ee=$1ea,$1ee.largerThan((0))&&$1ee.smallerThan(linkedList$.$1dkeuw$1d0))){
var $1ef=linkedList$.$1dkeuw$1cy;
var $1eg=(0);
var $1eh;
while(m$1.nn$(($1eh=$1ef))){
var $1ei=$1eh.rest;
if((($1eg=$1eg.successor)==$1ea)){
var $1ej;
if(m$1.nn$(($1ej=($1ek=$1ei,m$1.nn$($1ek)?$1ek.rest:null)))){
($1eh.rest=$1ej);
}
else{
linkedList$.$1dkeuw$1cz=$1eh;
($1eh.rest=null);
}
var $1ek;
($1el=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1el.predecessor,$1el);
var $1el;
return ($1em=$1ei,m$1.nn$($1em)?$1em.element:null);
var $1em;
}
else{
$1ef=$1ei;
}
}
m$1.asrt$2("",'187:12-187:26','LinkedList.ceylon',[false,'false']);
}
else{
return null;
}
}
};linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
linkedList$.removeAll=function($1en){
var linkedList$=this;
var $1eo=($1ep=$1en,HashSet(undefined,undefined,$1ep,{Element$HashSet:m$1.mit$([linkedList$.$$targs$$.Element$LinkedList,{t:m$1.$_Object}])}));
var $1ep;
var $1eq=(0);
var $1er,$1es;
while(m$1.nn$(($1er=linkedList$.$1dkeuw$1cy))&&m$1.nn$(($1es=$1er.element))&&m$1.$cnt$2($1es,$1eo)){
var $1et;
if(m$1.nn$(($1et=$1er.rest))){
linkedList$.$1dkeuw$1cy=$1et;
}
else{
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
}
($1eu=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1eu.predecessor,$1eu);
var $1eu;
($1ev=$1eq,$1eq=$1ev.successor,$1ev);
var $1ev;
}
var $1ew=linkedList$.$1dkeuw$1cy;
var $1ex;
while(m$1.nn$(($1ex=$1ew))){
var $1ey=$1ex.rest;
var $1ez,$1f0;
if(m$1.nn$(($1ez=$1ey))&&m$1.nn$(($1f0=$1ez.element))&&m$1.$cnt$2($1f0,$1eo)){
var $1f1;
if(m$1.nn$(($1f1=$1ez.rest))){
($1ex.rest=$1f1);
}
else{
($1ex.rest=(linkedList$.$1dkeuw$1cz=null));
}
($1f2=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1f2.predecessor,$1f2);
var $1f2;
($1f3=$1eq,$1eq=$1f3.successor,$1f3);
var $1f3;
}
else{
$1ew=$1ey;
}
}
return $1eq;
};linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
linkedList$.findAndRemoveFirst=function($1f4){
var linkedList$=this;
var $1f5,$1f6;
if(m$1.nn$(($1f5=linkedList$.$1dkeuw$1cy))&&m$1.nn$(($1f6=$1f5.element))&&$1f4($1f6)){
var $1f7;
if(m$1.nn$(($1f7=$1f5.rest))){
linkedList$.$1dkeuw$1cy=$1f7;
}
else{
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
}
($1f8=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1f8.predecessor,$1f8);
var $1f8;
return $1f6;
}
var $1f9=linkedList$.$1dkeuw$1cy;
var $1fa;
while(m$1.nn$(($1fa=$1f9))){
var $1fb=$1fa.rest;
var $1fc,$1fd;
if(m$1.nn$(($1fc=$1fb))&&m$1.nn$(($1fd=$1fc.element))&&$1f4($1fd)){
var $1fe;
if(m$1.nn$(($1fe=$1fc.rest))){
($1fa.rest=$1fe);
}
else{
($1fa.rest=(linkedList$.$1dkeuw$1cz=null));
}
($1ff=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1ff.predecessor,$1ff);
var $1ff;
return $1fd;
}
$1f9=$1fb;
}
return null;
};linkedList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveFirst']};};
linkedList$.findAndRemoveLast=function($1fg){
var linkedList$=this;
var $1fh;
if(m$1.nn$(($1fh=linkedList$.lastIndexWhere($1fg)))){
return linkedList$.$_delete($1fh);
}
else{
return null;
}
};linkedList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveLast']};};
linkedList$.removeWhere=function($1fi){
var linkedList$=this;
var $1fj=(0);
var $1fk,$1fl;
while(m$1.nn$(($1fk=linkedList$.$1dkeuw$1cy))&&m$1.nn$(($1fl=$1fk.element))&&$1fi($1fl)){
var $1fm;
if(m$1.nn$(($1fm=$1fk.rest))){
linkedList$.$1dkeuw$1cy=$1fm;
}
else{
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
}
($1fn=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1fn.predecessor,$1fn);
var $1fn;
($1fo=$1fj,$1fj=$1fo.successor,$1fo);
var $1fo;
}
var $1fp=linkedList$.$1dkeuw$1cy;
var $1fq;
while(m$1.nn$(($1fq=$1fp))){
var $1fr=$1fq.rest;
var $1fs,$1ft;
if(m$1.nn$(($1fs=$1fr))&&m$1.nn$(($1ft=$1fs.element))&&$1fi($1ft)){
var $1fu;
if(m$1.nn$(($1fu=$1fs.rest))){
($1fq.rest=$1fu);
}
else{
($1fq.rest=(linkedList$.$1dkeuw$1cz=null));
}
($1fv=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1fv.predecessor,$1fv);
var $1fv;
($1fw=$1fj,$1fj=$1fw.successor,$1fw);
var $1fw;
}
else{
$1fp=$1fr;
}
}
return $1fj;
};linkedList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeWhere']};};
linkedList$.prune=function(){
var linkedList$=this;
var $1fx=linkedList$.$1dkeuw$1d0;
var $1fy;
while(m$1.nn$(($1fy=linkedList$.$1dkeuw$1cy))&&!m$1.nn$($1fy.element)){
var $1fz;
if(m$1.nn$(($1fz=$1fy.rest))){
linkedList$.$1dkeuw$1cy=$1fz;
}
else{
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
}
($1g0=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1g0.predecessor,$1g0);
var $1g0;
}
var $1g1=linkedList$.$1dkeuw$1cy;
var $1g2;
while(m$1.nn$(($1g2=$1g1))){
var $1g3=$1g2.rest;
var $1g4;
if(m$1.nn$(($1g4=$1g3))&&!m$1.nn$($1g4.element)){
var $1g5;
if(m$1.nn$(($1g5=$1g4.rest))){
($1g2.rest=$1g5);
}
else{
($1g2.rest=(linkedList$.$1dkeuw$1cz=null));
}
($1g6=linkedList$.$1dkeuw$1d0,linkedList$.$1dkeuw$1d0=$1g6.predecessor,$1g6);
var $1g6;
}
else{
$1g1=$1g3;
}
}
return ($1fx-linkedList$.$1dkeuw$1d0);
};linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
linkedList$.findAndReplaceFirst=function($1g7,$1g8){
var linkedList$=this;
var $1g9=linkedList$.$1dkeuw$1cy;
var $1ga;
while(m$1.nn$(($1ga=$1g9))){
var $1gb;
if(m$1.nn$(($1gb=$1ga.element))&&$1g7($1gb)){
($1ga.element=$1g8);
return $1gb;
}
$1g9=$1ga.rest;
}
return null;
};linkedList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceFirst']};};
linkedList$.findAndReplaceLast=function($1gc,$1gd){
var linkedList$=this;
var $1ge=null;
var $1gf=linkedList$.$1dkeuw$1cy;
var $1gg;
while(m$1.nn$(($1gg=$1gf))){
var $1gh;
if(m$1.nn$(($1gh=$1gg.element))&&$1gc($1gh)){
$1ge=$1gg;
}
$1gf=$1gg.rest;
}
var $1gi;
if(m$1.nn$(($1gi=$1ge))){
var $1gj=$1gi.element;
($1gi.element=$1gd);
return $1gj;
}
else{
return null;
}
};linkedList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceLast']};};
linkedList$.replaceWhere=function($1gk,$1gl){
var linkedList$=this;
var $1gm=(0);
var $1gn=linkedList$.$1dkeuw$1cy;
var $1go;
while(m$1.nn$(($1go=$1gn))){
var $1gp;
if(m$1.nn$(($1gp=$1go.element))&&$1gk($1gp)){
($1go.element=$1gl);
($1gq=$1gm,$1gm=$1gq.successor,$1gq);
var $1gq;
}
$1gn=$1go.rest;
}
return $1gm;
};linkedList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceWhere']};};
linkedList$.infill=function($1gr){
var linkedList$=this;
var $1gs=linkedList$.$1dkeuw$1cy;
var $1gt;
while(m$1.nn$(($1gt=$1gs))){
if(!m$1.nn$($1gt.element)){
($1gt.element=$1gr);
}
$1gs=$1gt.rest;
}
};linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
linkedList$.clear=function(){
var linkedList$=this;
linkedList$.$1dkeuw$1d0=(0);
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
};linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
linkedList$.getFromFirst=function($1gu){
var linkedList$=this;
var $1gv=linkedList$.$1dkeuw$1cy;
var $1gw=(0);
var $1gx;
while(m$1.nn$(($1gx=$1gv))){
if((($1gy=$1gw,$1gw=$1gy.successor,$1gy)==$1gu)){
return $1gx.element;
}
var $1gy;
$1gv=$1gx.rest;
}
return null;
};linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
linkedList$.spanFrom=function($1gz){
var linkedList$=this;
var $1h0=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1h1=linkedList$.$1dkeuw$1cy;
var $1h2=(0);
var $1h3;
while(m$1.nn$(($1h3=$1h1))){
if(($1h2>=$1gz)){
$1h0.add($1h3.element);
}
($1h4=$1h2,$1h2=$1h4.successor,$1h4);
var $1h4;
$1h1=$1h3.rest;
}
return $1h0;
};linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
linkedList$.spanTo=function($1h5){
var linkedList$=this;
var $1h6=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1h7=linkedList$.$1dkeuw$1cy;
var $1h8=(0);
var $1h9;
while(m$1.nn$(($1h9=$1h7))){
if(($1h8>$1h5)){
break;
}
$1h6.add($1h9.element);
($1ha=$1h8,$1h8=$1ha.successor,$1ha);
var $1ha;
$1h7=$1h9.rest;
}
return $1h6;
};linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
linkedList$.span=function($1hb,$1hc){
var linkedList$=this;
var $1hd=spanToMeasure($1hb,$1hc,linkedList$.$1dkeuw$1d0),$1he=$1hd.$_get(0),$1hf=$1hd.$_get(1),$1hg=$1hd.$_get(2);
var $1hh=LinkedList(linkedList$.skip($1he).take($1hf),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
return ($1hi=($1hg?$1hh.reversed:null),m$1.nn$($1hi)?$1hi:$1hh);
var $1hi;
};linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
linkedList$.deleteSpan=function($1hj,$1hk){
var linkedList$=this;
var $1hl=spanToMeasure($1hj,$1hk,linkedList$.$1dkeuw$1d0),$1hm=$1hl.$_get(0),$1hn=$1hl.$_get(1),$1ho=$1hl.$_get(2);
if((($1hm<linkedList$.$1dkeuw$1d0)&&($1hn>(0)))){
var $1hp=($1hm>(0));
var $1hq=linkedList$.$1dkeuw$1hr(($1hm-(1)),linkedList$.$1dkeuw$1cy);
var $1hs=($1hn+($1ht=($1hp?(1):null),m$1.nn$($1ht)?$1ht:(0)));
var $1ht;
var $1hu=linkedList$.$1dkeuw$1hr($1hs,($1hv=$1hq,m$1.nn$($1hv)?$1hv:linkedList$.$1dkeuw$1cy));
var $1hv;
if(!$1hp){
linkedList$.$1dkeuw$1cy=($1hw=$1hq,m$1.nn$($1hw)?$1hw:$1hu);
var $1hw;
}
var $1hx;
if(m$1.nn$(($1hx=$1hq))){
($1hx.rest=$1hu);
}
if(($1hn>=linkedList$.$1dkeuw$1d0)){
linkedList$.$1dkeuw$1cz=null;
}
(linkedList$.$1dkeuw$1d0=linkedList$.$1dkeuw$1d0-$1hn);
}
};linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
linkedList$.$1dkeuw$1hr=function($1hy,$1hz){
var linkedList$=this;
if(($1hy<(0))){
return null;
}
var $1i0=$1hz;
var $1i1;
if(m$1.nn$(($1i1=$1hz))&&($1hy>(0))){
var $1i3=(1),$1i2=$1hy,$1i4=$1i3.compare($1i2),$1i5=$1i4===m$1.smaller()?'successor':'predecessor';for(var $1i6=m$1.eorl$($1i4);$1i6($1i2,$1i3);$1i3=$1i3[$1i5]){
$1i0=($1i7=$1i0,m$1.nn$($1i7)?$1i7.rest:null);
var $1i7;
}
}
return $1i0;
};linkedList$.$1dkeuw$1hr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
linkedList$.measure=function($1i8,$1i9){var linkedList$=this;
return linkedList$.span(($1ia=measureToSpan($1i8,$1i9),$1ia.$_get(0)),$1ia.$_get(1));
};linkedList$.deleteMeasure=function($1ib,$1ic){var linkedList$=this;
return linkedList$.deleteSpan(($1id=measureToSpan($1ib,$1ic),$1id.$_get(0)),$1id.$_get(1));
};linkedList$.defines=function($1ie){var linkedList$=this;
return (($1ie>=(0))&&($1ie<linkedList$.$1dkeuw$1d0));
};linkedList$.contains=function($1if){
var linkedList$=this;
var $1ig=linkedList$.$1dkeuw$1cy;
var $1ih;
while(m$1.nn$(($1ih=$1ig))){
var $1ii;
if(m$1.nn$(($1ii=$1ih.element))){
if(m$1.$eq$($1ii,$1if)){
return true;
}
}
$1ig=$1ih.rest;
}
return false;
};linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
m$1.atr$(linkedList$,'size',function(){
var linkedList$=this;
return linkedList$.$1dkeuw$1d0;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
linkedList$.count=function($1ij){
var linkedList$=this;
var $1ik=linkedList$.$1dkeuw$1cy;
var $1il=(0);
var $1im;
while(m$1.nn$(($1im=$1ik))){
if($1ij($1im.element)){
($1in=$1il,$1il=$1in.successor,$1in);
var $1in;
}
$1ik=$1im.rest;
}
return $1il;
};linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
m$1.atr$(linkedList$,'lastIndex',function(){
var linkedList$=this;
return (!linkedList$.empty?(linkedList$.$1dkeuw$1d0-(1)):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
linkedList$.iterator=function(){var linkedList$=this;
return CellIterator(linkedList$.$1dkeuw$1cy,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});
};linkedList$.clone=function(){var linkedList$=this;
return LinkedList$c_copy(linkedList$,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
};
linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
linkedList$.each=function($1io){
var linkedList$=this;
var $1ip=linkedList$.$1dkeuw$1cy;
var $1iq;
while(m$1.nn$(($1iq=$1ip))){
$1io($1iq.element);
$1ip=$1iq.rest;
}
};linkedList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','each']};};
linkedList$.find=function($1ir){
var linkedList$=this;
var $1is=linkedList$.$1dkeuw$1cy;
var $1it;
while(m$1.nn$(($1it=$1is))){
var $1iu=$1it.element;
var $1iv;
if(m$1.nn$(($1iv=$1iu))&&$1ir($1iv)){
return $1iv;
}
$1is=$1it.rest;
}
return null;
};linkedList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','find']};};
linkedList$.findLast=function($1iw){
var linkedList$=this;
var $1ix=null;
var $1iy=linkedList$.$1dkeuw$1cy;
var $1iz;
while(m$1.nn$(($1iz=$1iy))){
var $1j0=$1iz.element;
var $1j1;
if(m$1.nn$(($1j1=$1j0))&&$1iw($1j1)){
$1ix=$1j1;
}
$1iy=$1iz.rest;
}
return $1ix;
};linkedList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findLast']};};
linkedList$.$_every=function($1j2){
var linkedList$=this;
var $1j3=linkedList$.$1dkeuw$1cy;
var $1j4;
while(m$1.nn$(($1j4=$1j3))){
if(!$1j2($1j4.element)){
return false;
}
$1j3=$1j4.rest;
}
return true;
};linkedList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','every']};};
linkedList$.any=function($1j5){
var linkedList$=this;
var $1j6=linkedList$.$1dkeuw$1cy;
var $1j7;
while(m$1.nn$(($1j7=$1j6))){
if($1j5($1j7.element)){
return true;
}
$1j6=$1j7.rest;
}
return false;
};linkedList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','any']};};
linkedList$.$_reduce=function($1j8,$z4x6x1$){
var linkedList$=this;
var $1j9;
if(m$1.nn$(($1j9=linkedList$.$1dkeuw$1cy))){
var $1ja=$1j9.element;
var $1jb=$1j9.rest;
var $1jc;
while(m$1.nn$(($1jc=$1jb))){
$1ja=$1j8($1ja,$1jc.element);
$1jb=$1jc.rest;
}
return $1ja;
}
else{
return null;
}
};linkedList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$LinkedList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$reduce',Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$LinkedList']},'Element$LinkedList']}}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$LinkedList']}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','LinkedList','$m','reduce']};};
m$1.atr$(linkedList$,'hash',function(){
var linkedList$=this;
var $1jd=(1);
var $1je=linkedList$.$1dkeuw$1cy;
var $1jf;
while(m$1.nn$(($1jf=$1je))){
($1jd=$1jd*31);
var $1jg;
if(m$1.nn$(($1jg=$1jf.element))){
($1jd=$1jd+$1jg.hash);
}
$1je=$1jf.rest;
}
return $1jd;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($1jh){
var linkedList$=this;
var $1ji;
if(m$1.is$(($1ji=$1jh),{t:LinkedList,a:{Element$LinkedList:{t:m$1.Anything}}})){
if((linkedList$===$1ji)){
return true;
}
if(!m$1.$eq$(linkedList$.$1dkeuw$1d0,$1ji.$1dkeuw$1d0)){
return false;
}
var $1jj=linkedList$.$1dkeuw$1cy;
var $1jk=$1ji.$1dkeuw$1cy;
var $1jl,$1jm;
while(m$1.nn$(($1jl=$1jj))&&m$1.nn$(($1jm=$1jk))){
var $1jn=$1jl.element;
var $1jo=$1jm.element;
var $1jp;
if(m$1.nn$(($1jp=$1jn))){
var $1jq;
if(!m$1.nn$(($1jq=$1jo))){
return false;
}
else{
if(!m$1.$eq$($1jp,$1jq)){
return false;
}
}
}
else{
if(m$1.nn$($1jo)){
return false;
}
}
$1jj=$1jl.rest;
$1jk=$1jm.rest;
}
return true;
}
else{
return linkedList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(linkedList$,$1ji);
}
};linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
linkedList$.truncate=function($1jr){
var linkedList$=this;
m$1.asrt$2("",'834:8-834:24','LinkedList.ceylon',[($1jr>=(0)),'size>=0']);
if(($1jr==(0))){
linkedList$.$1dkeuw$1cy=(linkedList$.$1dkeuw$1cz=null);
linkedList$.$1dkeuw$1d0=(0);
}
else{
var $1js=(0);
var $1jt=linkedList$.$1dkeuw$1cy;
var $1ju;
while((($1js=$1js.successor)<$1jr)&&m$1.nn$(($1ju=$1jt))){
$1jt=$1ju.rest;
}
var $1jv;
if(m$1.nn$(($1jv=$1jt))){
($1jv.rest=null);
linkedList$.$1dkeuw$1cz=$1jv;
linkedList$.$1dkeuw$1d0=$1jr;
}
}
};linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
linkedList$.firstIndexWhere=function($1jw){
var linkedList$=this;
var $1jx=(0);
var $1jz;for(var $1jy=linkedList$.iterator();($1jz=$1jy.next())!==m$1.finished();){
var $1k0;
if(m$1.nn$(($1k0=$1jz))&&$1jw($1k0)){
return $1jx;
}
($1k1=$1jx,$1jx=$1k1.successor,$1k1);
var $1k1;
}
return null;
};linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
linkedList$.lastIndexWhere=function($1k2){
var linkedList$=this;
var $1k3=(0);
var $1k4=null;
var $1k6;for(var $1k5=linkedList$.iterator();($1k6=$1k5.next())!==m$1.finished();){
var $1k7;
if(m$1.nn$(($1k7=$1k6))&&$1k2($1k7)){
$1k4=$1k3;
}
($1k8=$1k3,$1k3=$1k8.successor,$1k8);
var $1k8;
}
return $1k4;
};linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
linkedList$.collect=function($1k9,$ljywq3$){var linkedList$=this;
return m$1.tpl$([],m$1.for$(function(){
var $1ka=linkedList$.iterator(),$1kb=m$1.finished();
var n$1kb=function(){return $1kb=$1ka.next();}
return function(){
if(n$1kb()!==m$1.finished()){
var $1kc=$1kb,$1kd=$1k9($1kc);
return $1kd;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:$ljywq3$.Result$collect/*ORALE!Result inv pero Element out*/}));
};
linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Sequence,a:{Element$Sequence:'Result$collect'}},{t:m$1.Empty}]},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:'Result$collect',Arguments$Callable:{t:'T',l:['Element$LinkedList']}}},$rt:'Result$collect',ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
m$1.atr$(linkedList$,'first',function(){
var linkedList$=this;
return ($1ke=linkedList$.$1dkeuw$1cy,m$1.nn$($1ke)?$1ke.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
m$1.atr$(linkedList$,'last',function(){
var linkedList$=this;
return ($1kf=linkedList$.$1dkeuw$1cz,m$1.nn$($1kf)?$1kf.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
linkedList$.$_push=function($1kg){var linkedList$=this;
return linkedList$.insert(0,$1kg);
};linkedList$.$_pop=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'top',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
linkedList$.offer=function($1kh){var linkedList$=this;
return linkedList$.add($1kh);
};linkedList$.accept=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'back',function(){
var linkedList$=this;
return linkedList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
m$1.atr$(linkedList$,'front',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
linkedList$.sequence=function(){var linkedList$=this;
return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();
};linkedList$.toString=function(){return this.string.valueOf();};
})(LinkedList.$$.prototype);
}
return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;$init$LinkedList();LinkedList.inst$$=function($1ki){
var linkedList$=new LinkedList.$$;
m$1.set_type_args(linkedList$,{Element$LinkedList:$1ki.$$targs$$.Type$Class.a.Element$LinkedList});
m$1.set_type_args(linkedList$,{Element$MutableList:linkedList$.$$targs$$.Element$LinkedList,Element$List:linkedList$.$$targs$$.Element$LinkedList,Element$Collection:linkedList$.$$targs$$.Element$LinkedList,Absent$Iterable:{t:m$1.Null},Element$Iterable:linkedList$.$$targs$$.Element$LinkedList,Element$Category:{t:m$1.$_Object},Item$Correspondence:linkedList$.$$targs$$.Element$LinkedList,Key$Correspondence:{t:m$1.Integer},Element$Ranged:linkedList$.$$targs$$.Element$LinkedList,Subrange$Ranged:{t:m$1.List,a:{Element$List:linkedList$.$$targs$$.Element$LinkedList/*ORALE!Element inv pero Element out*/}},Index$Ranged:{t:m$1.Integer},Element$ListMutator:linkedList$.$$targs$$.Element$LinkedList,Element$IndexedCorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Item$CorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Element$Stack:linkedList$.$$targs$$.Element$LinkedList,Element$Queue:linkedList$.$$targs$$.Element$LinkedList});
return linkedList$;
};
LinkedList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedList.head')return o.$1dkeuw$1cy_;
else if(n==='ceylon.collection::LinkedList.tail')return o.$1dkeuw$1cz_;
else if(n==='ceylon.collection::LinkedList.length')return o.$1dkeuw$1d0_;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedList.head')o.$1dkeuw$1cy_=i;
else if(n==='ceylon.collection::LinkedList.tail')o.$1dkeuw$1cz_=i;
else if(n==='ceylon.collection::LinkedList.length')o.$1dkeuw$1d0_=i;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1cy)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1cz)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1d0))];
};
var $1ke,$1kf;
function Queue($$targs$$,queue$){
m$1.set_type_args(queue$,$$targs$$,Queue);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
if(Queue.$$===undefined){
m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
(function(queue$){
queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
queue$.toString=function(){return this.string.valueOf();};
})(Queue.$$.prototype);
}
return Queue;
}
ex$.$init$Queue=$init$Queue;$init$Queue();
function IdentitySet($1dkeuw$1kj,$1dkeuw$1kk,$$targs$$,identitySet$){
$init$IdentitySet();
if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,$$targs$$);
if($1dkeuw$1kj===undefined){$1dkeuw$1kj=$init$IdentitySet().$defs$hashtable(identitySet$,$1dkeuw$1kk);}
identitySet$.$1dkeuw$1kj_=$1dkeuw$1kj;
if($1dkeuw$1kk===undefined){$1dkeuw$1kk=$init$IdentitySet().$defs$elements(identitySet$,$1dkeuw$1kj);}
identitySet$.$1dkeuw$1kk_=$1dkeuw$1kk;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element out*/},identitySet$);
m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element out*/},identitySet$);
identitySet$.$1dkeuw$1kl_=elementStore(identitySet$.$1dkeuw$1kj.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
identitySet$.$1dkeuw$1km_=(0);
var $1ko;for(var $1kn=$1dkeuw$1kk.iterator();($1ko=$1kn.next())!==m$1.finished();){
if(identitySet$.$1dkeuw$1kp(identitySet$.$1dkeuw$1kl,$1ko)){
($1kq=identitySet$.$1dkeuw$1km,identitySet$.$1dkeuw$1km=$1kq.successor,$1kq);
var $1kq;
}
}
identitySet$.$1dkeuw$1kr();
return identitySet$;
}
IdentitySet.$defs$hashtable=function(identitySet$,$1dkeuw$1kk){return Hashtable()};IdentitySet.$defs$elements=function(identitySet$,$1dkeuw$1kj){return m$1.empty()};IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
if(IdentitySet.$$===undefined){
m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
(function(identitySet$){
m$1.atr$(identitySet$,'$1dkeuw$1kj',function(){return this.$1dkeuw$1kj_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
m$1.atr$(identitySet$,'$1dkeuw$1kk',function(){return this.$1dkeuw$1kk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
m$1.atr$(identitySet$,'$1dkeuw$1kl',function(){return this.$1dkeuw$1kl_;},function($1ks){return this.$1dkeuw$1kl_=$1ks;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
m$1.atr$(identitySet$,'$1dkeuw$1km',function(){return this.$1dkeuw$1km_;},function($1kt){return this.$1dkeuw$1km_=$1kt;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
identitySet$.$1dkeuw$1ku=function($1kv,$1kw){var identitySet$=this;
return m$1.identityHash($1kv).remainder($1kw.size).magnitude;
};
identitySet$.$1dkeuw$1ku.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
identitySet$.$1dkeuw$1kp=function($1kx,$1ky){
var identitySet$=this;
var $1kz=identitySet$.$1dkeuw$1ku($1ky,$1kx);
var $1l0=$1kx.$_get($1kz);
var $1l1=$1l0;
var $1l2;
while(m$1.nn$(($1l2=$1l1))){
if(($1l2.element===$1ky)){
($1l2.element=$1ky);
return false;
}
$1l1=$1l2.rest;
}
($1l3=Cell($1ky,$1l0,{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}),$1kx.set($1kz,$1l3), $1l3);
var $1l3;
return true;
};identitySet$.$1dkeuw$1kp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
identitySet$.$1dkeuw$1kr=function(){
var identitySet$=this;
if(identitySet$.$1dkeuw$1kj.rehash(identitySet$.$1dkeuw$1km,identitySet$.$1dkeuw$1kl.size)){
var $1l4=elementStore(identitySet$.$1dkeuw$1kj.capacity(identitySet$.$1dkeuw$1km),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
var $1l5=(0);
while(($1l5<identitySet$.$1dkeuw$1kl.size)){
var $1l6=identitySet$.$1dkeuw$1kl.$_get($1l5);
var $1l7;
while(m$1.nn$(($1l7=$1l6))){
$1l6=$1l7.rest;
var $1l8=identitySet$.$1dkeuw$1ku($1l7.element,$1l4);
var $1l9=$1l4.$_get($1l8);
($1l7.rest=$1l9);
($1la=$1l7,$1l4.set($1l8,$1la), $1la);
var $1la;
}
($1lb=$1l5,$1l5=$1lb.successor,$1lb);
var $1lb;
}
identitySet$.$1dkeuw$1kl=$1l4;
}
};identitySet$.$1dkeuw$1kr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
identitySet$.add=function($1lc){
var identitySet$=this;
if(identitySet$.$1dkeuw$1kp(identitySet$.$1dkeuw$1kl,$1lc)){
($1ld=identitySet$.$1dkeuw$1km,identitySet$.$1dkeuw$1km=$1ld.successor,$1ld);
var $1ld;
identitySet$.$1dkeuw$1kr();
return true;
}
return false;
};identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
identitySet$.addAll=function($1le){
var identitySet$=this;
var $1lf=false;
var $1lh;for(var $1lg=$1le.iterator();($1lh=$1lg.next())!==m$1.finished();){
($1lf=$1lf||identitySet$.add($1lh));
}
if($1lf){
identitySet$.$1dkeuw$1kr();
}
return $1lf;
};identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
identitySet$.remove=function($1li){
var identitySet$=this;
var $1lj=identitySet$.$1dkeuw$1ku($1li,identitySet$.$1dkeuw$1kl);
var $1lk;
if(m$1.nn$(($1lk=identitySet$.$1dkeuw$1kl.$_get($1lj)))&&($1lk.element===$1li)){
($1ll=$1lk.rest,identitySet$.$1dkeuw$1kl.set($1lj,$1ll), $1ll);
var $1ll;
($1lm=identitySet$.$1dkeuw$1km,identitySet$.$1dkeuw$1km=$1lm.predecessor,$1lm);
var $1lm;
return true;
}
var $1ln=identitySet$.$1dkeuw$1kl.$_get($1lj);
var $1lo;
while(m$1.nn$(($1lo=$1ln))){
var $1lp=$1lo.rest;
var $1lq;
if(m$1.nn$(($1lq=$1lp))&&($1lq.element===$1li)){
($1lo.rest=$1lq.rest);
($1lr=identitySet$.$1dkeuw$1km,identitySet$.$1dkeuw$1km=$1lr.predecessor,$1lr);
var $1lr;
return true;
}
else{
$1ln=$1lp;
}
}
return false;
};identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
identitySet$.removeAll=function($1ls){
var identitySet$=this;
var $1lt=false;
var $1lv;for(var $1lu=$1ls.iterator();($1lv=$1lu.next())!==m$1.finished();){
if(identitySet$.remove($1lv)){
$1lt=true;
}
}
return $1lt;
};identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
identitySet$.clear=function(){
var identitySet$=this;
var $1lw=(0);
while(($1lw<identitySet$.$1dkeuw$1kl.size)){
($1lx=null,identitySet$.$1dkeuw$1kl.set(($1ly=$1lw,$1lw=$1ly.successor,$1ly),$1lx), $1lx);
var $1lx,$1ly;
}
identitySet$.$1dkeuw$1km=(0);
};identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
m$1.atr$(identitySet$,'size',function(){
var identitySet$=this;
return identitySet$.$1dkeuw$1km;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
identitySet$.iterator=function(){var identitySet$=this;
return StoreIterator(identitySet$.$1dkeuw$1kl,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
};identitySet$.count=function($1lz){
var identitySet$=this;
var $1m0=(0);
var $1m1=(0);
while(($1m1<identitySet$.$1dkeuw$1kl.size)){
var $1m2=identitySet$.$1dkeuw$1kl.$_get($1m1);
var $1m3;
while(m$1.nn$(($1m3=$1m2))){
if($1lz($1m3.element)){
($1m4=$1m0,$1m0=$1m4.successor,$1m4);
var $1m4;
}
$1m2=$1m3.rest;
}
($1m5=$1m1,$1m1=$1m5.successor,$1m5);
var $1m5;
}
return $1m0;
};identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$IdentitySet']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
identitySet$.each=function($1m6){
var identitySet$=this;
identitySet$.$1dkeuw$1kl.each(m$1.jsc$2((function($1m7){
var $1m8=$1m7;
$prop$get$1m8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.each,pa:1027,d:['ceylon.collection','IdentitySet','$m','each','$at','iter$sd0mqa']};}};
$prop$get$1m8.get=function(){return $1m8};
var $1m9;
while(m$1.nn$(($1m9=$1m8))){
$1m6($1m9.element);
$1m8=$1m9.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}])])}));
};identitySet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$IdentitySet']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','each']};};
m$1.atr$(identitySet$,'hash',function(){
var identitySet$=this;
var $1ma=(0);
var $1mb=(17);
while(($1ma<identitySet$.$1dkeuw$1kl.size)){
var $1mc=identitySet$.$1dkeuw$1kl.$_get($1ma);
var $1md;
while(m$1.nn$(($1md=$1mc))){
$1mb=(($1mb*(31))+m$1.identityHash($1md));
$1mc=$1md.rest;
}
($1me=$1ma,$1ma=$1me.successor,$1me);
var $1me;
}
return $1mb;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($1mf){
var identitySet$=this;
var $1mg;
if(m$1.is$(($1mg=$1mf),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})){
if((identitySet$===$1mg)){
return true;
}
if((identitySet$.size==$1mg.size)){
var $1mh=(0);
while(($1mh<identitySet$.$1dkeuw$1kl.size)){
var $1mi=identitySet$.$1dkeuw$1kl.$_get($1mh);
var $1mj;
while(m$1.nn$(($1mj=$1mi))){
if(!m$1.$cnt$2($1mj.element,$1mg)){
return false;
}
$1mi=$1mj.rest;
}
($1mk=$1mh,$1mh=$1mk.successor,$1mk);
var $1mk;
}
return true;
}
}
return false;
};identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
identitySet$.clone=function(){
var identitySet$=this;
var $1ml=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
($1ml.$1dkeuw$1km=identitySet$.$1dkeuw$1km);
($1ml.$1dkeuw$1kl=elementStore(identitySet$.$1dkeuw$1kl.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
var $1mm=(0);
while(($1mm<identitySet$.$1dkeuw$1kl.size)){
var $1mn;
if(m$1.nn$(($1mn=identitySet$.$1dkeuw$1kl.$_get($1mm)))){
($1mo=$1mn.clone(),$1ml.$1dkeuw$1kl.set($1mm,$1mo), $1mo);
var $1mo;
}
($1mp=$1mm,$1mm=$1mp.successor,$1mp);
var $1mp;
}
return $1ml;
};identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
identitySet$.contains=function($1mq){
var identitySet$=this;
var $1mr;
if(m$1.is$(($1mr=$1mq),{t:m$1.Identifiable})){
var $1ms=(0);
while(($1ms<identitySet$.$1dkeuw$1kl.size)){
var $1mt=identitySet$.$1dkeuw$1kl.$_get($1ms);
var $1mu;
while(m$1.nn$(($1mu=$1mt))){
if(($1mu.element===$1mr)){
return true;
}
$1mt=$1mu.rest;
}
($1mv=$1ms,$1ms=$1mv.successor,$1mv);
var $1mv;
}
}
return false;
};identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
identitySet$.superset=function($1mw,$1dp37t$){
var identitySet$=this;
var $1my;for(var $1mx=$1mw.iterator();($1my=$1mx.next())!==m$1.finished();){
if(!m$1.$cnt$2($1my,identitySet$)){
return false;
}
}
if(m$1.finished()===$1my){
return true;
}
};identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
identitySet$.subset=function($1mz,$emo084$){
var identitySet$=this;
var $1n1;for(var $1n0=identitySet$.iterator();($1n1=$1n0.next())!==m$1.finished();){
if(!m$1.$cnt$2($1n1,$1mz)){
return false;
}
}
if(m$1.finished()===$1n1){
return true;
}
};identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
identitySet$.complement=function($1n2,$3sj2l4$){
var identitySet$=this;
var $1n3=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
var $1n5;for(var $1n4=identitySet$.iterator();($1n5=$1n4.next())!==m$1.finished();){
if(!m$1.$cnt$2($1n5,$1n2)){
$1n3.add($1n5);
}
}
return $1n3;
};identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
identitySet$.exclusiveUnion=function($1n6,$iggrmb$){
var identitySet$=this;
var $1n7=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$iggrmb$.Other$exclusiveUnion])});
var $1n9;for(var $1n8=identitySet$.iterator();($1n9=$1n8.next())!==m$1.finished();){
if(!m$1.$cnt$2($1n9,$1n6)){
$1n7.add($1n9);
}
}
var $1nb;for(var $1na=$1n6.iterator();($1nb=$1na.next())!==m$1.finished();){
if(!identitySet$.contains($1nb)){
$1n7.add($1nb);
}
}
return $1n7;
};identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
identitySet$.intersection=function($1nc,$94cc1h$){
var identitySet$=this;
var $1nd=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mit$([identitySet$.$$targs$$.Element$IdentitySet,$94cc1h$.Other$intersection])});
var $1nf;for(var $1ne=identitySet$.iterator();($1nf=$1ne.next())!==m$1.finished();){
var $1ng;
if(m$1.$cnt$2($1nf,$1nc)&&m$1.is$(($1ng=$1nf),$94cc1h$.Other$intersection,$94cc1h$)){
$1nd.add($1ng);
}
}
return $1nd;
};identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
identitySet$.union=function($1nh,$mewmlv$){
var identitySet$=this;
var $1ni=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$mewmlv$.Other$union])});
$1ni.addAll(identitySet$);
$1ni.addAll($1nh);
return $1ni;
};identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
identitySet$.toString=function(){return this.string.valueOf();};
})(IdentitySet.$$.prototype);
}
return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;$init$IdentitySet();IdentitySet.inst$$=function($1nj){
var identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,{Element$IdentitySet:$1nj.$$targs$$.Type$Class.a.Element$IdentitySet});
m$1.set_type_args(identitySet$,{Absent$Iterable:{t:m$1.Null},Element$Iterable:identitySet$.$$targs$$.Element$IdentitySet,Element$Category:{t:m$1.$_Object},Element$Collection:identitySet$.$$targs$$.Element$IdentitySet});
return identitySet$;
};
IdentitySet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentitySet.hashtable')return o.$1dkeuw$1kj_;
else if(n==='ceylon.collection::IdentitySet.store')return o.$1dkeuw$1kl_;
else if(n==='ceylon.collection::IdentitySet.length')return o.$1dkeuw$1km_;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentitySet.hashtable')o.$1dkeuw$1kj_=i;
else if(n==='ceylon.collection::IdentitySet.store')o.$1dkeuw$1kl_=i;
else if(n==='ceylon.collection::IdentitySet.length')o.$1dkeuw$1km_=i;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1kj)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1kl)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1km))];
};
function PriorityQueue($1dkeuw$1nk,$1dkeuw$1nl,$1dkeuw$1nm,$1dkeuw$1nn,$$targs$$,priorityQueue$){
$init$PriorityQueue();
if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,$$targs$$);
priorityQueue$.$1dkeuw$1nk_=$1dkeuw$1nk;
if($1dkeuw$1nl===undefined){$1dkeuw$1nl=$init$PriorityQueue().$defs$initialCapacity(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nm,$1dkeuw$1nn);}
priorityQueue$.$1dkeuw$1nl_=$1dkeuw$1nl;
if($1dkeuw$1nm===undefined){$1dkeuw$1nm=$init$PriorityQueue().$defs$growthFactor(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nl,$1dkeuw$1nn);}
priorityQueue$.$1dkeuw$1nm_=$1dkeuw$1nm;
if($1dkeuw$1nn===undefined){$1dkeuw$1nn=$init$PriorityQueue().$defs$elements(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nl,$1dkeuw$1nm);}
priorityQueue$.$1dkeuw$1nn_=$1dkeuw$1nn;
Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element out*/},priorityQueue$);
priorityQueue$.$1dkeuw$1nk=$1dkeuw$1nk;
if(priorityQueue$.$1dkeuw$1no(priorityQueue$.$1dkeuw$1nn)){
priorityQueue$.$1dkeuw$1np=priorityQueue$.$1dkeuw$1nn.size;
priorityQueue$.$1dkeuw$1nq=priorityQueue$.$1dkeuw$1nr(($1ns=((priorityQueue$.$1dkeuw$1np>$1dkeuw$1nl)?priorityQueue$.$1dkeuw$1np:null),m$1.nn$($1ns)?$1ns:$1dkeuw$1nl));
var $1ns;
}
else{
priorityQueue$.$1dkeuw$1np=(0);
priorityQueue$.$1dkeuw$1nq=priorityQueue$.$1dkeuw$1nr($1dkeuw$1nl);
}
priorityQueue$.$1dkeuw$1nt();
return priorityQueue$;
}
PriorityQueue.$defs$initialCapacity=function(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nm,$1dkeuw$1nn){return (0)};PriorityQueue.$defs$growthFactor=function(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nl,$1dkeuw$1nn){return (1.5)};PriorityQueue.$defs$elements=function(priorityQueue$,$1dkeuw$1nk,$1dkeuw$1nl,$1dkeuw$1nm){return m$1.empty()};PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Element$PriorityQueue','Element$PriorityQueue']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(m$1.$arr$sa$(["Loic Rouchon"],{t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
if(PriorityQueue.$$===undefined){
m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
(function(priorityQueue$){
m$1.atr$(priorityQueue$,'$1dkeuw$1nk',function(){return this.$1dkeuw$1nk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,an:function(){return[m$1.doc("A comparator function used to order elements.")];},d:['ceylon.collection','PriorityQueue','$m','compare$gs4c5s']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1nl',function(){return this.$1dkeuw$1nl_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1nm',function(){return this.$1dkeuw$1nm_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1nn',function(){return this.$1dkeuw$1nn_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
priorityQueue$.$1dkeuw$1nr=function($1nu){var priorityQueue$=this;
return m$1.$_Array$c_ofSize($1nu,null,{Element$Array:m$1.mut$([{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue])});
};
priorityQueue$.$1dkeuw$1nr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
priorityQueue$.$1dkeuw$1no=function($1nv){var priorityQueue$=this;
return m$1.is$($1nv,m$1.mut$([{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element out*/}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element out*/}}]));
};
priorityQueue$.$1dkeuw$1no.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
m$1.atr$(priorityQueue$,'$1dkeuw$1nq',function(){return this.$1dkeuw$1nq_;},function($1nw){return this.$1dkeuw$1nq_=$1nw;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1np',function(){return this.$1dkeuw$1np_;},function($1nx){return this.$1dkeuw$1np_=$1nx;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
priorityQueue$.$1dkeuw$1ny=function($1nz){
var priorityQueue$=this;
var $1o0=(priorityQueue$.$1dkeuw$1np+$1nz);
var $1o1=m$1.runtime().maxArraySize;
if(($1o0>$1o1)){
throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
}
if(($1o0>priorityQueue$.$1dkeuw$1nq.size)){
var $1o2=m$1.Float($1o0*priorityQueue$.$1dkeuw$1nm).integer;
var $1o3=($1o4=((($1o2<$1o0)||($1o2>$1o1))?$1o1:null),m$1.nn$($1o4)?$1o4:$1o2);
var $1o4;
var $1o5=priorityQueue$.$1dkeuw$1nr($1o3);
priorityQueue$.$1dkeuw$1nq.copyTo($1o5);
priorityQueue$.$1dkeuw$1nq=$1o5;
}
};priorityQueue$.$1dkeuw$1ny.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
priorityQueue$.$1dkeuw$1o6=function($1o7){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1ny(1);
($1o8=$1o7,priorityQueue$.$1dkeuw$1nq.set(priorityQueue$.$1dkeuw$1np,$1o8), $1o8);
var $1o8;
($1o9=priorityQueue$.$1dkeuw$1np,priorityQueue$.$1dkeuw$1np=$1o9.successor,$1o9);
var $1o9;
};priorityQueue$.$1dkeuw$1o6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
priorityQueue$.$1dkeuw$1oa=function($1ob){var priorityQueue$=this;
return (m$1.i$div(($1ob+(1)),(2))-(1));
};
priorityQueue$.$1dkeuw$1oa.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
priorityQueue$.$1dkeuw$1oc=function($1od){var priorityQueue$=this;
return (($1od*(2))+(1));
};
priorityQueue$.$1dkeuw$1oc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
priorityQueue$.$1dkeuw$1oe=function($1of){var priorityQueue$=this;
return (($1of*(2))+(2));
};
priorityQueue$.$1dkeuw$1oe.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
priorityQueue$.$1dkeuw$1og=function($1oh){
var priorityQueue$=this;
var $1oi;
m$1.asrt$2("",'91:8-91:45','PriorityQueue.ceylon',[m$1.nn$(($1oi=priorityQueue$.$1dkeuw$1nq.$_get($1oh))),'exists element = array[index]']);
return $1oi;
};priorityQueue$.$1dkeuw$1og.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
priorityQueue$.$1dkeuw$1oj=function($1ok,$1ol){var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1nk(priorityQueue$.$1dkeuw$1og($1ok),priorityQueue$.$1dkeuw$1og($1ol));
};
priorityQueue$.$1dkeuw$1oj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
priorityQueue$.$1dkeuw$1om=function($1on,$1oo){
var priorityQueue$=this;
var $1op=priorityQueue$.$1dkeuw$1nq.$_get($1on);
($1oq=priorityQueue$.$1dkeuw$1nq.$_get($1oo),priorityQueue$.$1dkeuw$1nq.set($1on,$1oq), $1oq);
var $1oq;
($1or=$1op,priorityQueue$.$1dkeuw$1nq.set($1oo,$1or), $1or);
var $1or;
};priorityQueue$.$1dkeuw$1om.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
priorityQueue$.$1dkeuw$1os=function($1ot){
var priorityQueue$=this;
if(($1ot==(0))){
return;
}
var $1ou=priorityQueue$.$1dkeuw$1oa($1ot);
if(m$1.$eq$(priorityQueue$.$1dkeuw$1oj($1ot,$1ou),m$1.smaller())){
priorityQueue$.$1dkeuw$1om($1ot,$1ou);
priorityQueue$.$1dkeuw$1os($1ou);
}
};priorityQueue$.$1dkeuw$1os.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
priorityQueue$.$1dkeuw$1ov=function($1ow){
var priorityQueue$=this;
var $1ox=priorityQueue$.$1dkeuw$1oc($1ow);
if(($1ox>=priorityQueue$.$1dkeuw$1np)){
return null;
}
var $1oy=priorityQueue$.$1dkeuw$1oe($1ow);
if(($1oy>=priorityQueue$.$1dkeuw$1np)){
return $1ox;
}
var $1oz=priorityQueue$.$1dkeuw$1oj($1ox,$1oy);
if(m$1.$eq$($1oz,m$1.smaller())){
return $1ox;
}
return $1oy;
};priorityQueue$.$1dkeuw$1ov.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
priorityQueue$.$1dkeuw$1p0=function($1p1){
var priorityQueue$=this;
var $1p2;
if(m$1.nn$(($1p2=priorityQueue$.$1dkeuw$1ov($1p1)))&&m$1.$eq$(priorityQueue$.$1dkeuw$1oj($1p2,$1p1),m$1.smaller())){
priorityQueue$.$1dkeuw$1om($1p1,$1p2);
priorityQueue$.$1dkeuw$1p0($1p2);
}
};priorityQueue$.$1dkeuw$1p0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
priorityQueue$.$1dkeuw$1nt=function(){
var priorityQueue$=this;
if(priorityQueue$.$1dkeuw$1no(priorityQueue$.$1dkeuw$1nn)){
var $1p3=(0);
var $1p5;for(var $1p4=priorityQueue$.$1dkeuw$1nn.iterator();($1p5=$1p4.next())!==m$1.finished();){
($1p6=$1p5,priorityQueue$.$1dkeuw$1nq.set(($1p7=$1p3,$1p3=$1p7.successor,$1p7),$1p6), $1p6);
var $1p6,$1p7;
}
}
else{
var $1p9;for(var $1p8=priorityQueue$.$1dkeuw$1nn.iterator();($1p9=$1p8.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$1o6($1p9);
}
}
if((priorityQueue$.$1dkeuw$1np>(0))){
var $1pb=priorityQueue$.$1dkeuw$1oa((priorityQueue$.$1dkeuw$1np-(1))),$1pa=(0),$1pc=$1pb.compare($1pa),$1pd=$1pc===m$1.smaller()?'successor':'predecessor';for(var $1pe=m$1.eorl$($1pc);$1pe($1pa,$1pb);$1pb=$1pb[$1pd]){
priorityQueue$.$1dkeuw$1p0($1pb);
}
}
};priorityQueue$.$1dkeuw$1nt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
m$1.atr$(priorityQueue$,'size',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1np;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
m$1.atr$(priorityQueue$,'front',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1nq.$_get(0);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
m$1.atr$(priorityQueue$,'last',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1nq.$_get((priorityQueue$.$1dkeuw$1np-(1)));
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
m$1.atr$(priorityQueue$,'back',function(){
var priorityQueue$=this;
return priorityQueue$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
priorityQueue$.offer=function($1pi){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1o6($1pi);
priorityQueue$.$1dkeuw$1os((priorityQueue$.$1dkeuw$1np-(1)));
};priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
priorityQueue$.accept=function(){
var priorityQueue$=this;
var $1pj=priorityQueue$.front;
if((priorityQueue$.$1dkeuw$1np>(0))){
($1pk=priorityQueue$.last,priorityQueue$.$1dkeuw$1nq.set((0),$1pk), $1pk);
var $1pk;
($1pl=null,priorityQueue$.$1dkeuw$1nq.set((priorityQueue$.$1dkeuw$1np=priorityQueue$.$1dkeuw$1np.predecessor),$1pl), $1pl);
var $1pl;
priorityQueue$.$1dkeuw$1p0(0);
}
return $1pj;
};priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
priorityQueue$.iterator=function(){
var priorityQueue$=this;
if((priorityQueue$.$1dkeuw$1np>(0))){
var $1pm=(function(){function $1pn($$targs$$){
var $1pn$=new $1pn.$$;$1pn$.outer$=priorityQueue$;
$1pn$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element out*/},$1pn$);
$1pn$.$1dkeuw$1pp_=(0);
$1pn$.$prop$get$1dkeuw$1pp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1pn,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
$1pn$.$prop$get$1dkeuw$1pp.get=function(){return $1dkeuw$1pp};
return $1pn$;
};$1pn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
function $init$$1pn(){
if($1pn.$$===undefined){
m$1.initTypeProto($1pn,'ceylon.collection::PriorityQueue.iterator.it',m$1.Basic,m$1.Iterator);
(function($1pn$){
m$1.atr$($1pn$,'$1dkeuw$1pp',function(){return this.$1dkeuw$1pp_;},function($1pq){return this.$1dkeuw$1pp_=$1pq;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1pn,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
$1pn$.next=function(){
var $1pn$=this;
var $1pr=priorityQueue$.$1dkeuw$1nq.$_get($1pn$.$1dkeuw$1pp);
var $1ps;
if(m$1.nn$(($1ps=$1pr))){
($1pt=$1pn$.$1dkeuw$1pp,$1pn$.$1dkeuw$1pp=$1pt.successor,$1pt);
var $1pt;
return $1ps;
}
function $1pu(){return $1pr;}
m$1.asrt$2("",'209:20-209:43','PriorityQueue.ceylon',[($1pn$.$1dkeuw$1pp==priorityQueue$.$1dkeuw$1np),'index == length']);
return m$1.finished();
};$1pn$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$1pn,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
$1pn$.toString=function(){return this.string.valueOf();};
})($1pn.$$.prototype);
}
return $1pn;
}
priorityQueue$.$init$$1pn=$init$$1pn;$init$$1pn();var $1pv;
function $1po(){
if($1pv===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'201:12-213:12','PriorityQueue.ceylon');
if($1pv===undefined){$1pv=m$1.INIT$;$1pv=$init$$1pn()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element out*/});$1pv.$crtmm$=$1po.$crtmm$;}
return $1pv;
}
$1po.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$1pn()},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
$prop$get$1pn=$1po;
$1po();
return $1po();
}());if($1pm!==undefined){return $1pm;}
}
else{
return m$1.emptyIterator();
}
};priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
priorityQueue$.clone=function(){
var priorityQueue$=this;
var $1pw=($1px=m$1.jsc$2(priorityQueue$.$1dkeuw$1nk,[{nm:'x',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue},{nm:'y',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([priorityQueue$.$$targs$$.Element$PriorityQueue,priorityQueue$.$$targs$$.Element$PriorityQueue])}),$1py=priorityQueue$.$1dkeuw$1np,$1pz=priorityQueue$.$1dkeuw$1nm,PriorityQueue($1px,$1py,$1pz,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
var $1px,$1py,$1pz;
($1pw.$1dkeuw$1np=priorityQueue$.$1dkeuw$1np);
($1pw.$1dkeuw$1nq=priorityQueue$.$1dkeuw$1nq.clone());
return $1pw;
};priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PriorityQueue,a:{Element$PriorityQueue:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
priorityQueue$.toString=function(){return this.string.valueOf();};
})(PriorityQueue.$$.prototype);
}
return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;$init$PriorityQueue();PriorityQueue.inst$$=function($1q0){
var priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,{Element$PriorityQueue:$1q0.$$targs$$.Type$Class.a.Element$PriorityQueue});
m$1.set_type_args(priorityQueue$,{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue,Absent$Iterable:{t:m$1.Null},Element$Iterable:priorityQueue$.$$targs$$.Element$PriorityQueue,Element$Category:{t:m$1.$_Object},Element$Queue:priorityQueue$.$$targs$$.Element$PriorityQueue});
return priorityQueue$;
};
PriorityQueue.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::PriorityQueue.growthFactor')return o.$1dkeuw$1nm_;
else if(n==='ceylon.collection::PriorityQueue.elements')return o.$1dkeuw$1nn_;
else if(n==='ceylon.collection::PriorityQueue.array')return o.$1dkeuw$1nq_;
else if(n==='ceylon.collection::PriorityQueue.length')return o.$1dkeuw$1np_;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::PriorityQueue.growthFactor')o.$1dkeuw$1nm_=i;
else if(n==='ceylon.collection::PriorityQueue.elements')o.$1dkeuw$1nn_=i;
else if(n==='ceylon.collection::PriorityQueue.array')o.$1dkeuw$1nq_=i;
else if(n==='ceylon.collection::PriorityQueue.length')o.$1dkeuw$1np_=i;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1nm)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1nn)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1nq)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1np))];
};
function TreeMap$$c($$targs$$,treeMap$){
m$1.set_type_args(treeMap$,$$targs$$);
SortedMap({Item$SortedMap:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/,Key$SortedMap:$$targs$$.Key$TreeMap},treeMap$);
MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}},Index$Ranged:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Index in*/},treeMap$);
}
function TreeMap(){return TreeMap$c_$c$.apply(undefined,arguments);}
function TreeMap$c_$c$$$a($1q1,$1q2,$$targs$$,treeMap$){
if($1q2===undefined){$1q2=m$1.empty();}
treeMap$.$1dkeuw$1q3_=null;
treeMap$.$1dkeuw$1q4_=$1q1;
m$1.atr$(treeMap$,'$1dkeuw$1q4',function(){return this.$1dkeuw$1q4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
treeMap$.$1dkeuw$1q5_=$1q2;
m$1.atr$(treeMap$,'$1dkeuw$1q5',function(){return this.$1dkeuw$1q5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$1q6_=null;
m$1.atr$(treeMap$,'$1dkeuw$1q6',function(){return this.$1dkeuw$1q6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_$c$($1q1,$1q2,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
if($1q2===undefined){$1q2=m$1.empty();}
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_$c$$$a($1q1,$1q2,$$targs$$,treeMap$);
treeMap$.$1dkeuw$1q3=function(){var $1q7;
if(m$1.nn$(($1q7=treeMap$.$1dkeuw$1q6)))return treeMap$.$1dkeuw$1q8($1q7);else return null}();
var $1qa;for(var $1q9=treeMap$.$1dkeuw$1q5.iterator();($1qa=$1q9.next())!==m$1.finished();){
var $1qb=$1qa.key,$1qc=$1qa.item;
treeMap$.put($1qb,$1qc);
}
treeMap$.$1dkeuw$1qd_=treeMap$.$1dkeuw$1qe();
return treeMap$;
};
TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:$def')];},d:['ceylon.collection','TreeMap','$cn','$def']};};
TreeMap.TreeMap$c_$c$=TreeMap$c_$c$;
ex$.TreeMap$c_$c$=TreeMap$c_$c$;
function TreeMap$c_copy$$a($1qf,$$targs$$,treeMap$){
treeMap$.$1dkeuw$1q3_=null;
treeMap$.$1dkeuw$1q4_=($1qg=$1qf,m$1.jsc$3($1qg,$1qg.$1dkeuw$1q4));
m$1.atr$(treeMap$,'$1dkeuw$1q4',function(){return this.$1dkeuw$1q4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
var $1qg;
treeMap$.$1dkeuw$1q5_=m$1.empty();
m$1.atr$(treeMap$,'$1dkeuw$1q5',function(){return this.$1dkeuw$1q5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$1q6_=$1qf.$1dkeuw$1q3;
m$1.atr$(treeMap$,'$1dkeuw$1q6',function(){return this.$1dkeuw$1q6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_copy($1qf,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_copy$$a($1qf,$$targs$$,treeMap$);
treeMap$.$1dkeuw$1q3=function(){var $1q7;
if(m$1.nn$(($1q7=treeMap$.$1dkeuw$1q6)))return treeMap$.$1dkeuw$1q8($1q7);else return null}();
var $1qi;for(var $1qh=treeMap$.$1dkeuw$1q5.iterator();($1qi=$1qh.next())!==m$1.finished();){
var $1qb=$1qi.key,$1qc=$1qi.item;
treeMap$.put($1qb,$1qc);
}
treeMap$.$1dkeuw$1qd_=treeMap$.$1dkeuw$1qe();
return treeMap$;
};
TreeMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:copy')];},d:['ceylon.collection','TreeMap','$cn','copy']};};
TreeMap.TreeMap$c_copy=TreeMap$c_copy;
ex$.TreeMap$c_copy=TreeMap$c_copy;
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Item$SortedMap:'Item$TreeMap',Key$SortedMap:'Key$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
if(TreeMap.$$===undefined){
m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
(function(treeMap$){
m$1.atr$(treeMap$,'$1dkeuw$1q3',function(){return this.$1dkeuw$1q3_;},function($1qj){return this.$1dkeuw$1q3_=$1qj;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:1027,an:function(){return[m$1.doc("The root node of the tree.")];},d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
m$1.atr$(treeMap$,'$1dkeuw$1q5',function(){return this.$1dkeuw$1q5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
m$1.atr$(treeMap$,'$1dkeuw$1q6',function(){return this.$1dkeuw$1q6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
treeMap$.$1dkeuw$1q8=function($1qk){
var treeMap$=this;
var $1ql=($1qm=$1qk.key,$1qn=$1qk.item,$1qo=$1qk.red,treeMap$.Node$TreeMap($1qm,$1qn,$1qo));
var $1qm,$1qn,$1qo;
var $1qp;
if(m$1.nn$(($1qp=$1qk.left))){
var $1qq=treeMap$.$1dkeuw$1q8($1qp);
($1qq.parent=$1ql);
($1ql.left=$1qq);
}
var $1qr;
if(m$1.nn$(($1qr=$1qk.right))){
var $1qs=treeMap$.$1dkeuw$1q8($1qr);
($1qs.parent=$1ql);
($1ql.right=$1qs);
}
return $1ql;
};treeMap$.$1dkeuw$1q8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','copyNode$paf63']};};
treeMap$.$1dkeuw$1qt=function($1qu){var treeMap$=this;
return function(){var $1qv;
if(m$1.nn$(($1qv=$1qu)))return $1qv.red;else return false}();
};
treeMap$.$1dkeuw$1qt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
treeMap$.$1dkeuw$1qw=function($1qx){
var treeMap$=this;
var $1qy=treeMap$.$1dkeuw$1q3;
var $1qz;
while(m$1.nn$(($1qz=$1qy))){
var $1r0=treeMap$.$1dkeuw$1q4($1qx,$1qz.key);
if($1r0===m$1.equal()) {
return $1qz;
}
else if($1r0===m$1.smaller()) {
$1qy=$1qz.left;
}
else if($1r0===m$1.larger()) {
$1qy=$1qz.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1qy;
};treeMap$.$1dkeuw$1qw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
treeMap$.$1dkeuw$1r1=function($1r2){
var treeMap$=this;
var $1r3=treeMap$.$1dkeuw$1q3;
var $1r4;
while(m$1.nn$(($1r4=$1r3))){
var $1r5=treeMap$.$1dkeuw$1q4($1r2,$1r4.key);
if($1r5===m$1.equal()) {
return $1r4;
}
else if($1r5===m$1.smaller()) {
if(!m$1.nn$($1r4.left)){
var $1r6=$1r4;
var $1r7;
while(m$1.nn$(($1r7=$1r6.parent))&&$1r6.onLeft){
$1r6=$1r7;
}
return $1r6.parent;
}
$1r3=$1r4.left;
}
else if($1r5===m$1.larger()) {
if(!m$1.nn$($1r4.right)){
return $1r4;
}
$1r3=$1r4.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1r3;
};treeMap$.$1dkeuw$1r1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
treeMap$.$1dkeuw$1r8=function($1r9){
var treeMap$=this;
var $1ra=treeMap$.$1dkeuw$1q3;
var $1rb;
while(m$1.nn$(($1rb=$1ra))){
var $1rc=treeMap$.$1dkeuw$1q4($1r9,$1rb.key);
if($1rc===m$1.equal()) {
return $1rb;
}
else if($1rc===m$1.smaller()) {
if(!m$1.nn$($1rb.left)){
return $1rb;
}
$1ra=$1rb.left;
}
else if($1rc===m$1.larger()) {
if(!m$1.nn$($1rb.right)){
var $1rd=$1rb;
var $1re;
while(m$1.nn$(($1re=$1rd.parent))&&$1rd.onRight){
$1rd=$1re;
}
return $1rd.parent;
}
$1ra=$1rb.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $1ra;
};treeMap$.$1dkeuw$1r8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
treeMap$.$1dkeuw$1rf=function($1rg,$1rh){
var treeMap$=this;
var $1ri;
if(m$1.nn$(($1ri=$1rg.parent))){
if($1rg.onLeft){
($1ri.left=$1rh);
}
else{
if($1rg.onRight){
($1ri.right=$1rh);
}
else{
m$1.asrt$2("",'242:16-242:30','TreeMap.ceylon',[false,'false']);
}
}
}
else{
treeMap$.$1dkeuw$1q3=$1rh;
}
var $1rj;
if(m$1.nn$(($1rj=$1rh))){
($1rj.parent=$1rg.parent);
}
};treeMap$.$1dkeuw$1rf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
treeMap$.$1dkeuw$1rk=function($1rl,$1rm){
var treeMap$=this;
($1rl.left=$1rm);
var $1rn;
if(m$1.nn$(($1rn=$1rm))){
($1rn.parent=$1rl);
}
};treeMap$.$1dkeuw$1rk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
treeMap$.$1dkeuw$1ro=function($1rp,$1rq){
var treeMap$=this;
($1rp.right=$1rq);
var $1rr;
if(m$1.nn$(($1rr=$1rq))){
($1rr.parent=$1rp);
}
};treeMap$.$1dkeuw$1ro.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
treeMap$.$1dkeuw$1rs=function($1rt){
var treeMap$=this;
var $1ru;
m$1.asrt$2("",'268:8-268:42','TreeMap.ceylon',[m$1.nn$(($1ru=$1rt.right)),'exists right = node.right']);
treeMap$.$1dkeuw$1rf($1rt,$1ru);
var $1rv=$1ru.left;
treeMap$.$1dkeuw$1ro($1rt,$1rv);
treeMap$.$1dkeuw$1rk($1ru,$1rt);
};treeMap$.$1dkeuw$1rs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
treeMap$.$1dkeuw$1rw=function($1rx){
var treeMap$=this;
var $1ry;
m$1.asrt$2("",'276:8-276:40','TreeMap.ceylon',[m$1.nn$(($1ry=$1rx.left)),'exists left = node.left']);
var $1rz=$1ry.right;
treeMap$.$1dkeuw$1rf($1rx,$1ry);
treeMap$.$1dkeuw$1rk($1rx,$1rz);
treeMap$.$1dkeuw$1ro($1ry,$1rx);
};treeMap$.$1dkeuw$1rw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
treeMap$.$1dkeuw$1s0=function($1s1){
var treeMap$=this;
var $1s2;
if(m$1.nn$(($1s2=$1s1.parent))){
if(treeMap$.$1dkeuw$1qt($1s2)){
var $1s3;
if(m$1.nn$(($1s3=$1s1.uncle))&&treeMap$.$1dkeuw$1qt($1s3)){
($1s2.red=false);
($1s3.red=false);
var $1s4;
m$1.asrt$2("",'293:20-293:67','TreeMap.ceylon',[m$1.nn$(($1s4=$1s1.grandparent)),'exists grandparent=newNode.grandparent']);
($1s4.red=true);
treeMap$.$1dkeuw$1s0($1s4);
}
else{
var $1s5;
if(($1s1.onRight&&$1s2.onLeft)){
treeMap$.$1dkeuw$1rs($1s2);
var $1s6;
m$1.asrt$2("",'302:24-302:55','TreeMap.ceylon',[m$1.nn$(($1s6=$1s1.left)),'exists nl=newNode.left']);
$1s5=$1s6;
}
else{
if(($1s1.onLeft&&$1s2.onRight)){
treeMap$.$1dkeuw$1rw($1s2);
var $1s7;
m$1.asrt$2("",'307:24-307:56','TreeMap.ceylon',[m$1.nn$(($1s7=$1s1.right)),'exists nr=newNode.right']);
$1s5=$1s7;
}
else{
$1s5=$1s1;
}
}
var $1s8;
m$1.asrt$2("",'314:20-314:70','TreeMap.ceylon',[m$1.nn$(($1s8=$1s5.parent)),'exists adjustedParent=adjustedNode.parent']);
($1s8.red=false);
var $1s9;
m$1.asrt$2("",'316:20-316:72','TreeMap.ceylon',[m$1.nn$(($1s9=$1s5.grandparent)),'exists grandparent=adjustedNode.grandparent']);
($1s9.red=true);
if(($1s5.onLeft&&$1s8.onLeft)){
treeMap$.$1dkeuw$1rw($1s9);
}
else{
if(($1s5.onRight&&$1s8.onRight)){
treeMap$.$1dkeuw$1rs($1s9);
}
else{
m$1.asrt$2("",'325:24-325:38','TreeMap.ceylon',[false,'false']);
}
}
}
}
}
else{
($1s1.red=false);
}
};treeMap$.$1dkeuw$1s0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
treeMap$.put=function($1sa,$1sb){
var treeMap$=this;
var $1sc=treeMap$.Node$TreeMap($1sa,$1sb,true);
var $1sd;
if(m$1.nn$(($1sd=treeMap$.$1dkeuw$1q3))){
var $1se=$1sd;
while(true){
var $1sf=treeMap$.$1dkeuw$1q4($1sa,$1se.key);
if($1sf===m$1.larger()) {
var $1sg;
if(m$1.nn$(($1sg=$1se.right))){
$1se=$1sg;
}
else{
($1se.right=$1sc);
break;
}
}
else if($1sf===m$1.smaller()) {
var $1sh;
if(m$1.nn$(($1sh=$1se.left))){
$1se=$1sh;
}
else{
($1se.left=$1sc);
break;
}
}
else if($1sf===m$1.equal()) {
var $1si=$1se.item;
($1se.item=$1sb);
return $1si;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
($1sc.parent=$1se);
}
else{
treeMap$.$1dkeuw$1q3=$1sc;
}
treeMap$.$1dkeuw$1s0($1sc);
return null;
};treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
function $1dkeuw$1qe(){
var treeMap$=this;
var $1qe$=new this.$1dkeuw$1qe.$$;$1qe$.outer$=this;
return $1qe$;
};$1dkeuw$1qe.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
function $init$removeCases(){
if($1dkeuw$1qe.$$===undefined){
m$1.initTypeProto($1dkeuw$1qe,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
TreeMap.$1dkeuw$1qe=$1dkeuw$1qe;
(function($1qe$){
$1qe$.$1dkeuw$1sj=function($1sk){
var $1qe$=this;
var $1sl;
if(m$1.nn$(($1sl=$1sk.left))){
m$1.asrt$2("",'389:16-389:43','TreeMap.ceylon',[!m$1.nn$($1sk.right),'!node.right exists']);
return $1sl;
}
else{
var $1sm;
if(m$1.nn$(($1sm=$1sk.right))){
m$1.asrt$2("",'393:16-393:42','TreeMap.ceylon',[!m$1.nn$($1sk.left),'!node.left exists']);
return $1sm;
}
else{
return null;
}
}
};$1qe$.$1dkeuw$1sj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
$1qe$.removeNodeWithAtMostOneChild=function($1sn){
var $1qe$=this,treeMap$=$1qe$.outer$;
var $1so=$1qe$.$1dkeuw$1sj($1sn);
if(!$1sn.red&&$1qe$.outer$.$1dkeuw$1qt($1so)){
var $1sp;
m$1.asrt$2("",'404:16-404:36','TreeMap.ceylon',[m$1.nn$(($1sp=$1so)),'exists child']);
($1sp.red=false);
}
else{
if(!$1sn.red){
$1qe$.$1dkeuw$1sq($1sn,$1sn.sibling);
}
}
$1qe$.outer$.$1dkeuw$1rf($1sn,$1so);
};$1qe$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1qe,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
$1qe$.$1dkeuw$1sq=function($1sr,$1ss){
var $1qe$=this,treeMap$=$1qe$.outer$;
var $1st;
if(m$1.nn$(($1st=$1qe$.outer$.$1dkeuw$1q3))&&!($1st===$1sr)){
$1qe$.$1dkeuw$1su($1sr,$1ss);
}
};$1qe$.$1dkeuw$1sq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
$1qe$.$1dkeuw$1su=function($1sv,$1sw){
var $1qe$=this,treeMap$=$1qe$.outer$;
var $1sx;
m$1.asrt$2("",'421:12-421:42','TreeMap.ceylon',[m$1.nn$(($1sx=$1sv.parent)),'exists p = node.parent']);
var $1sy;
if(m$1.nn$(($1sy=$1sw))&&$1sy.red){
($1sx.red=true);
($1sy.red=false);
if($1sv.onLeft){
$1qe$.outer$.$1dkeuw$1rs($1sx);
}
else{
$1qe$.outer$.$1dkeuw$1rw($1sx);
}
}
var $1sz;
m$1.asrt$2("",'432:12-432:50','TreeMap.ceylon',[m$1.nn$(($1sz=$1sv.parent)),'exists newParent = node.parent']);
$1qe$.$1dkeuw$1t0($1sv,$1sz,$1sv.sibling);
};$1qe$.$1dkeuw$1su.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
$1qe$.$1dkeuw$1t0=function($1t1,$1t2,$1t3){
var $1qe$=this,treeMap$=$1qe$.outer$;
var $1t4;
m$1.asrt$2("",'437:12-437:28','TreeMap.ceylon',[m$1.nn$(($1t4=$1t3)),'exists s']);
var $1t5=$1qe$.outer$.$1dkeuw$1qt($1t4.left);
var $1t6=$1qe$.outer$.$1dkeuw$1qt($1t4.right);
if(!$1t4.red&&!$1t2.red&&!$1t5&&!$1t6){
($1t4.red=true);
$1qe$.$1dkeuw$1sq($1t2,$1t2.sibling);
}
else{
$1qe$.$1dkeuw$1t7($1t1,$1t2,$1t4,$1t5,$1t6);
}
};$1qe$.$1dkeuw$1t0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
$1qe$.$1dkeuw$1t7=function($1t8,$1t9,$1ta,$1tb,$1tc){
var $1qe$=this,treeMap$=$1qe$.outer$;
if(!$1ta.red&&$1t9.red&&!$1tb&&!$1tc){
($1ta.red=true);
($1t9.red=false);
}
else{
$1qe$.$1dkeuw$1td($1t8,$1t9,$1ta,$1tb,$1tc);
}
};$1qe$.$1dkeuw$1t7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
$1qe$.$1dkeuw$1td=function($1te,$1tf,$1tg,$1th,$1ti){
var $1qe$=this,treeMap$=$1qe$.outer$;
if(!$1tg.red&&$1th&&!$1ti&&$1te.onLeft){
($1tg.red=true);
var $1tj;
m$1.asrt$2("",'462:16-462:43','TreeMap.ceylon',[m$1.nn$(($1tj=$1tg.left)),'exists sl = s.left']);
($1tj.red=false);
$1qe$.outer$.$1dkeuw$1rw($1tg);
}
else{
if(!$1tg.red&&!$1th&&$1ti&&$1te.onRight){
($1tg.red=true);
var $1tk;
m$1.asrt$2("",'468:16-468:44','TreeMap.ceylon',[m$1.nn$(($1tk=$1tg.right)),'exists sr = s.right']);
($1tk.red=false);
$1qe$.outer$.$1dkeuw$1rs($1tg);
}
}
var $1tl,$1tm;
m$1.asrt$2("",'472:12-472:78','TreeMap.ceylon',[m$1.nn$(($1tl=$1te.parent)),'exists newParent = node.parent'],[m$1.nn$(($1tm=$1te.sibling)),'exists newS = node.sibling']);
$1qe$.$1dkeuw$1tn($1te,$1tl,$1tm);
};$1qe$.$1dkeuw$1td.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
$1qe$.$1dkeuw$1tn=function($1to,$1tp,$1tq){
var $1qe$=this,treeMap$=$1qe$.outer$;
($1tq.red=$1tp.red);
($1tp.red=false);
var $1tr;
if($1to.onLeft&&m$1.nn$(($1tr=$1tq.right))){
($1tr.red=false);
$1qe$.outer$.$1dkeuw$1rs($1tp);
}
else{
var $1ts;
if(m$1.nn$(($1ts=$1tq.left))){
($1ts.red=false);
$1qe$.outer$.$1dkeuw$1rw($1tp);
}
}
};$1qe$.$1dkeuw$1tn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$1qe,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
$1qe$.toString=function(){return this.string.valueOf();};
})($1dkeuw$1qe.$$.prototype);
}
return $1dkeuw$1qe;
}
treeMap$.$init$removeCases=$init$removeCases;m$1.atr$(treeMap$,'$1dkeuw$1qd',function(){return this.$1dkeuw$1qd_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
treeMap$.$1dkeuw$1qe=$1dkeuw$1qe;treeMap$.$1dkeuw$1qe.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
treeMap$.remove=function($1tu){
var treeMap$=this;
var $1tv;
if(m$1.nn$(($1tv=treeMap$.$1dkeuw$1qw($1tu)))){
var $1tw;
var $1tx,$1ty;
if(m$1.nn$(($1tx=$1tv.left))&&m$1.nn$(($1ty=$1tv.right))){
$1tw=$1tx.rightmostChild;
($1tv.key=$1tw.key);
($1tv.item=$1tw.item);
}
else{
$1tw=$1tv;
}
treeMap$.$1dkeuw$1qd.removeNodeWithAtMostOneChild($1tw);
return $1tv.item;
}
else{
return null;
}
};treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
treeMap$.removeEntry=function($1tz,$1u0){
var treeMap$=this;
var $1u1,$1u2;
if(m$1.nn$(($1u1=treeMap$.$1dkeuw$1qw($1tz)))&&m$1.nn$(($1u2=$1u1.item))&&m$1.$eq$($1u2,$1u0)){
var $1u3;
var $1u4,$1u5;
if(m$1.nn$(($1u4=$1u1.left))&&m$1.nn$(($1u5=$1u1.right))){
$1u3=$1u4.rightmostChild;
($1u1.key=$1u3.key);
($1u1.item=$1u3.item);
}
else{
$1u3=$1u1;
}
treeMap$.$1dkeuw$1qd.removeNodeWithAtMostOneChild($1u3);
return true;
}
else{
return false;
}
};treeMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','removeEntry']};};
treeMap$.replaceEntry=function($1u6,$1u7,$1u8){
var treeMap$=this;
var $1u9;
if(m$1.nn$(($1u9=treeMap$.$1dkeuw$1q3))){
var $1ua=$1u9;
while(true){
var $1ub=treeMap$.$1dkeuw$1q4($1u6,$1ua.key);
if($1ub===m$1.larger()) {
var $1uc;
if(m$1.nn$(($1uc=$1ua.right))){
$1ua=$1uc;
}
else{
break;
}
}
else if($1ub===m$1.smaller()) {
var $1ud;
if(m$1.nn$(($1ud=$1ua.left))){
$1ua=$1ud;
}
else{
break;
}
}
else if($1ub===m$1.equal()) {
var $1ue;
if(m$1.nn$(($1ue=$1ua.item))&&m$1.$eq$($1ue,$1u7)){
($1ua.item=$1u8);
return true;
}
else{
return false;
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
return false;
};treeMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','replaceEntry']};};
treeMap$.iterator=function(){var treeMap$=this;
return treeMap$.NodeIterator$TreeMap();
};treeMap$.$_get=function($1uf){var treeMap$=this;
return function(){var $1ug;
if(m$1.is$(($1ug=$1uf),treeMap$.$$targs$$.Key$TreeMap))return ($1uh=treeMap$.$1dkeuw$1qw($1ug),m$1.nn$($1uh)?$1uh.item:null);else return ($1ui=treeMap$.find(m$1.forKey(m$1.jsc$2(($1uj=$1ug,m$1.jsc$3($1uj,$1uj.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Key$forKey:{t:m$1.$_Object},Result$forKey:{t:m$1.$_Boolean}})),m$1.nn$($1ui)?$1ui.item:null)}();
var $1uh,$1ui,$1uj;
};treeMap$.defines=function($1uk){var treeMap$=this;
return function(){var $1ul;
if(m$1.is$(($1ul=$1uk),treeMap$.$$targs$$.Key$TreeMap))return m$1.nn$(treeMap$.$1dkeuw$1qw($1ul));else return treeMap$.keys.any(m$1.jsc$2(($1um=$1ul,m$1.jsc$3($1um,$1um.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}))}();
var $1um;
};treeMap$.getOrDefault=function($1un,$1uo,$608kkw$){
var treeMap$=this;
var $1up;
if(m$1.is$(($1up=$1un),treeMap$.$$targs$$.Key$TreeMap)){
return function(){var $1uq;
if(m$1.nn$(($1uq=treeMap$.$1dkeuw$1qw($1up))))return $1uq.item;else return $1uo}();
}
else{
return function(){var $1ur;
if(m$1.nn$(($1ur=treeMap$.find(m$1.forKey(m$1.jsc$2(($1us=$1up,m$1.jsc$3($1us,$1us.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Key$forKey:{t:m$1.$_Object},Result$forKey:{t:m$1.$_Boolean}})))))return $1ur.item;else return $1uo}();
var $1us;
}
};treeMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$TreeMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:TreeMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','TreeMap','$m','getOrDefault']};};
treeMap$.higherEntries=function($1ut){var treeMap$=this;
return (function(){function $1uu($$targs$$){
var $1uu$=new $1uu.$$;$1uu$.outer$=treeMap$;
$1uu$.$$targs$$=$$targs$$;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}},$1uu$);
return $1uu$;
};$1uu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap']};};
function $init$$1uu(){
if($1uu.$$===undefined){
m$1.initTypeProto($1uu,'ceylon.collection::TreeMap.anonymous#0',m$1.Basic,m$1.Iterable);
(function($1uu$){
$1uu$.iterator=function(){var $1uu$=this;
return treeMap$.NodeIterator$TreeMap(treeMap$.$1dkeuw$1r8($1ut));
};$1uu$.toString=function(){return this.string.valueOf();};
})($1uu.$$.prototype);
}
return $1uu;
}
treeMap$.$init$$1uu=$init$$1uu;$init$$1uu();return $1uu();}());
};treeMap$.lowerEntries=function($1uw){var treeMap$=this;
return (function(){function $1ux($$targs$$){
var $1ux$=new $1ux.$$;$1ux$.outer$=treeMap$;
$1ux$.$$targs$$=$$targs$$;
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}},$1ux$);
return $1ux$;
};$1ux.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap']};};
function $init$$1ux(){
if($1ux.$$===undefined){
m$1.initTypeProto($1ux,'ceylon.collection::TreeMap.anonymous#1',m$1.Basic,m$1.Iterable);
(function($1ux$){
$1ux$.iterator=function(){var $1ux$=this;
return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$1dkeuw$1r1($1uw));
};$1ux$.toString=function(){return this.string.valueOf();};
})($1ux.$$.prototype);
}
return $1ux;
}
treeMap$.$init$$1ux=$init$$1ux;$init$$1ux();return $1ux();}());
};treeMap$.ascendingEntries=function($1uz,$1v0){var treeMap$=this;
return treeMap$.higherEntries($1uz).takeWhile(m$1.jsc$2((function($1v1){return !m$1.$eq$(treeMap$.$1dkeuw$1q4($1v1.key,$1v0),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}])}));
};treeMap$.descendingEntries=function($1v2,$1v3){var treeMap$=this;
return treeMap$.lowerEntries($1v2).takeWhile(m$1.jsc$2((function($1v4){return !m$1.$eq$(treeMap$.$1dkeuw$1q4($1v4.key,$1v3),m$1.smaller());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}])}));
};treeMap$.contains=function($1v5){
var treeMap$=this;
var $1v6,$1v7;
if(m$1.is$(($1v6=$1v5),{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}})&&m$1.nn$(($1v7=treeMap$.$1dkeuw$1qw($1v6.key)))){
var $1v8;
if(m$1.nn$(($1v8=$1v7.item))){
var $1v9;
if(m$1.nn$(($1v9=$1v6.item))){
return m$1.$eq$($1v9,$1v8);
}
else{
return false;
}
}
else{
return !m$1.nn$($1v6.item);
}
}
else{
return false;
}
};treeMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','contains']};};
treeMap$.clear=function(){var treeMap$=this;
return (treeMap$.$1dkeuw$1q3=null);
};m$1.atr$(treeMap$,'size',function(){
var treeMap$=this;
return ($1va=($1vb=treeMap$.$1dkeuw$1q3,m$1.nn$($1vb)?$1vb.size:null),m$1.nn$($1va)?$1va:(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
m$1.atr$(treeMap$,'first',function(){
var treeMap$=this;
return function(){var $1vc;
if(m$1.nn$(($1vc=($1vd=treeMap$.$1dkeuw$1q3,m$1.nn$($1vd)?$1vd.leftmostChild:null))))return m$1.Entry($1vc.key,$1vc.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});
m$1.atr$(treeMap$,'last',function(){
var treeMap$=this;
return function(){var $1ve;
if(m$1.nn$(($1ve=($1vf=treeMap$.$1dkeuw$1q3,m$1.nn$($1vf)?$1vf.rightmostChild:null))))return m$1.Entry($1ve.key,$1ve.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});
treeMap$.measure=function($1vg,$1vh){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1q4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($1vg).take($1vh),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.span=function($1vi,$1vj){var treeMap$=this;
return function(){var $1vk=m$1.$eq$(treeMap$.$1dkeuw$1q4($1vi,$1vj),m$1.larger());return ($1vl=m$1.jsc$2((function($1vm,$1vn){return ($1vo=($1vk?treeMap$.$1dkeuw$1q4($1vn,$1vm):null),m$1.nn$($1vo)?$1vo:treeMap$.$1dkeuw$1q4($1vm,$1vn));
var $1vo;
}),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([{t:m$1.$_String}])}),$1vp=($1vq=($1vk?treeMap$.descendingEntries($1vi,$1vj):null),m$1.nn$($1vq)?$1vq:treeMap$.ascendingEntries($1vi,$1vj)),TreeMap($1vl,$1vp,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap}));
var $1vl,$1vp,$1vq;
}();
};treeMap$.spanFrom=function($1vr){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1q4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($1vr),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.spanTo=function($1vs){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$1q4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.takeWhile(m$1.jsc$2((function($1vt){return !m$1.$eq$(treeMap$.$1dkeuw$1q4($1vt.key,$1vs),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}])})),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
};treeMap$.clone=function(){var treeMap$=this;
return TreeMap$c_copy(treeMap$,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};
treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
m$1.atr$(treeMap$,'string',function(){
var treeMap$=this;
return function(){var $1vu;
if(m$1.nn$(($1vu=treeMap$.$1dkeuw$1q3)))return "{ ".plus($1vu.string).plus(" }");else return "{}"}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});
treeMap$.equals=function($1vv){var treeMap$=this;
return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(treeMap$,$1vv);
};m$1.atr$(treeMap$,'hash',function(){
var treeMap$=this;
return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
treeMap$.assertInvariants=function(){
var treeMap$=this;
treeMap$.$1dkeuw$1vw();
treeMap$.$1dkeuw$1vx();
treeMap$.$1dkeuw$1vy();
};treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
treeMap$.$1dkeuw$1vw=function(){
var treeMap$=this;
m$1.asrt$2("",'749:8-749:29','TreeMap.ceylon',[!treeMap$.$1dkeuw$1qt(treeMap$.$1dkeuw$1q3),'!isRed(root)']);
};treeMap$.$1dkeuw$1vw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
treeMap$.$1dkeuw$1vx$defs$node=function($1vz){var treeMap$=this;
return treeMap$.$1dkeuw$1q3;};
treeMap$.$1dkeuw$1vx=function($1vz){
var treeMap$=this;
if($1vz===undefined){$1vz=treeMap$.$1dkeuw$1q3;}
var $1w0;
if(m$1.nn$(($1w0=$1vz))){
if(treeMap$.$1dkeuw$1qt($1w0)){
m$1.asrt$2("",'755:16-755:42','TreeMap.ceylon',[!treeMap$.$1dkeuw$1qt($1w0.left),'!isRed(node.left)']);
m$1.asrt$2("",'756:16-756:43','TreeMap.ceylon',[!treeMap$.$1dkeuw$1qt($1w0.right),'!isRed(node.right)']);
m$1.asrt$2("",'757:16-757:44','TreeMap.ceylon',[!treeMap$.$1dkeuw$1qt($1w0.parent),'!isRed(node.parent)']);
}
treeMap$.$1dkeuw$1vx($1w0.left);
treeMap$.$1dkeuw$1vx($1w0.right);
}
};treeMap$.$1dkeuw$1vx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
treeMap$.$1dkeuw$1vy$defs$node=function($1w1,$1w2,$1w3){var treeMap$=this;
return treeMap$.$1dkeuw$1q3;};
treeMap$.$1dkeuw$1vy$defs$blackCount=function($1w1,$1w2,$1w3){return 0;};
treeMap$.$1dkeuw$1vy$defs$pathBlackCount=function($1w1,$1w2,$1w3){return null;};
treeMap$.$1dkeuw$1vy=function($1w1,$1w2,$1w3){
var treeMap$=this;
if($1w1===undefined){$1w1=treeMap$.$1dkeuw$1q3;}
if($1w2===undefined){$1w2=(0);}
if($1w3===undefined){$1w3=null;}
if(!treeMap$.$1dkeuw$1qt($1w1)){
($1w4=$1w2,$1w2=$1w4.successor,$1w4);
var $1w4;
}
var $1w5;
if(m$1.nn$(($1w5=$1w1))){
$1w3=treeMap$.$1dkeuw$1vy($1w5.left,$1w2,$1w3);
$1w3=treeMap$.$1dkeuw$1vy($1w5.right,$1w2,$1w3);
return $1w3;
}
else{
var $1w6;
if(m$1.nn$(($1w6=$1w3))){
m$1.asrt$2("",'781:16-781:44','TreeMap.ceylon',[($1w2==$1w6),'blackCount == count']);
}
else{
$1w3=$1w2;
}
return $1w3;
}
};treeMap$.$1dkeuw$1vy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
function Node$TreeMap$$c($1w7$){
}
function Node$TreeMap(){return Node$TreeMap$c_$c$.apply(this,arguments);}
function Node$TreeMap$c_$c$$$a($1w8,$1w9,$1wa,$1w7$){
$1w7$.$1dkeuw$1wb_=null;
$1w7$.$1dkeuw$1wc_=null;
$1w7$.$1dkeuw$1wd_=null;
$1w7$.key_=$1w8;
m$1.atr$($1w7$,'key',function(){return this.key_;},function($1we){return this.key_=$1we;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
$1w7$.item_=$1w9;
m$1.atr$($1w7$,'item',function(){return this.item_;},function($1wf){return this.item_=$1wf;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
$1w7$.red_=$1wa;
m$1.atr$($1w7$,'red',function(){return this.red_;},function($1wg){return this.red_=$1wg;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
return $1w7$;
};
function Node$TreeMap$c_$c$($1w8,$1w9,$1wa,$1w7$){
$init$Node$TreeMap();
if($1w7$===undefined)$1w7$=new this.Node$TreeMap.$$;
$1w7$.outer$=this;
Node$TreeMap$$c($1w7$);
Node$TreeMap$c_$c$$$a($1w8,$1w9,$1wa,$1w7$);
return $1w7$;
};
Node$TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$cn','$def']};};
Node$TreeMap.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
treeMap$.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
function $init$Node$TreeMap(){
if(Node$TreeMap.$$===undefined){
m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
TreeMap.Node$TreeMap=Node$TreeMap;
(function($1w7$){
m$1.atr$($1w7$,'key',function(){return this.key_;},function($1wh){return this.key_=$1wh;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
m$1.atr$($1w7$,'item',function(){return this.item_;},function($1wi){return this.item_=$1wi;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
m$1.atr$($1w7$,'left',function(){return this.$1dkeuw$1wb_;},function($1wj){return this.$1dkeuw$1wb_=$1wj;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
m$1.atr$($1w7$,'right',function(){return this.$1dkeuw$1wc_;},function($1wk){return this.$1dkeuw$1wc_=$1wk;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
m$1.atr$($1w7$,'parent',function(){return this.$1dkeuw$1wd_;},function($1wl){return this.$1dkeuw$1wd_=$1wl;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
m$1.atr$($1w7$,'red',function(){return this.red_;},function($1wm){return this.red_=$1wm;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
m$1.atr$($1w7$,'onLeft',function(){
var $1w7$=this;
return function(){var $1wn;
if(m$1.nn$(($1wn=($1wo=$1w7$.parent,m$1.nn$($1wo)?$1wo.left:null))))return m$1.$eq$($1w7$,$1wn);else return false}();
var $1wo;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});
m$1.atr$($1w7$,'onRight',function(){
var $1w7$=this;
return function(){var $1wp;
if(m$1.nn$(($1wp=($1wq=$1w7$.parent,m$1.nn$($1wq)?$1wq.right:null))))return m$1.$eq$($1w7$,$1wp);else return false}();
var $1wq;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});
m$1.atr$($1w7$,'grandparent',function(){
var $1w7$=this;
return ($1wr=$1w7$.parent,m$1.nn$($1wr)?$1wr.parent:null);
var $1wr;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
m$1.atr$($1w7$,'sibling',function(){
var $1w7$=this;
var $1ws;
if(m$1.nn$(($1ws=$1w7$.parent))){
if($1w7$.onLeft){
return $1ws.right;
}
else{
if($1w7$.onRight){
return $1ws.left;
}
else{
m$1.asrt$2("",'81:20-81:34','TreeMap.ceylon',[false,'false']);
}
}
}
else{
return null;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($1w7$,'uncle',function(){
var $1w7$=this;
return ($1wt=$1w7$.parent,m$1.nn$($1wt)?$1wt.sibling:null);
var $1wt;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
m$1.atr$($1w7$,'rightmostChild',function(){
var $1w7$=this;
var $1wu=$1w7$;
var $1wv;
while(m$1.nn$(($1wv=$1wu.right))){
$1wu=$1wv;
}
return $1wu;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($1w7$,'leftmostChild',function(){
var $1w7$=this;
var $1ww=$1w7$;
var $1wx;
while(m$1.nn$(($1wx=$1ww.left))){
$1ww=$1wx;
}
return $1ww;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($1w7$,'string',function(){
var $1w7$=this;
var $1wy=m$1.StringBuilder();
var $1wz;
if(m$1.nn$(($1wz=$1w7$.left))){
$1wy.append($1wz.string).append(", ");
}
$1wy.append($1w7$.key.string).append("->").append(($1x0=($1x1=$1w7$.item,m$1.nn$($1x1)?$1x1.string:null),m$1.nn$($1x0)?$1x0:"<null>"));
var $1x0,$1x1;
var $1x2;
if(m$1.nn$(($1x2=$1w7$.right))){
$1wy.append(", ").append($1x2.string);
}
return $1wy.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});m$1.atr$($1w7$,'size',function(){
var $1w7$=this;
var $1x3=(1);
var $1x4;
if(m$1.nn$(($1x4=$1w7$.left))){
($1x3=$1x3+$1x4.size);
}
var $1x5;
if(m$1.nn$(($1x5=$1w7$.right))){
($1x3=$1x3+$1x5.size);
}
return $1x3;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});$1w7$.toString=function(){return this.string.valueOf();};
})(Node$TreeMap.$$.prototype);
}
return Node$TreeMap;
}
treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;treeMap$.Node$TreeMap=Node$TreeMap;
function NodeIterator$TreeMap($1dkeuw$1x6,$1x7$){
$init$NodeIterator$TreeMap();
if($1x7$===undefined)$1x7$=new this.NodeIterator$TreeMap.$$;
$1x7$.outer$=this;
if($1dkeuw$1x6===undefined){$1dkeuw$1x6=$init$TreeMap().$$.prototype.$init$NodeIterator$TreeMap().$defs$current($1x7$);}
$1x7$.$1dkeuw$1x6_=$1dkeuw$1x6;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$1x7$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:$1x7$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}},$1x7$);
return $1x7$;
}
NodeIterator$TreeMap.$defs$current=function($1x7$){return ($1x8=$1x7$.outer$.$1dkeuw$1q3,m$1.nn$($1x8)?$1x8.leftmostChild:null)};NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
function $init$NodeIterator$TreeMap(){
if(NodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
(function($1x7$){
m$1.atr$($1x7$,'$1dkeuw$1x6',function(){return this.$1dkeuw$1x6_;},function($1x9){return this.$1dkeuw$1x6_=$1x9;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
$1x7$.next=function(){
var $1x7$=this;
var $1xa=function(){var $1xb;
if(m$1.nn$(($1xb=$1x7$.$1dkeuw$1x6)))return m$1.Entry($1xb.key,$1xb.item,{Key$Entry:$1x7$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:$1x7$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/});else return m$1.finished()}();
var $1xc,$1xd;
if(m$1.nn$(($1xc=$1x7$.$1dkeuw$1x6))&&m$1.nn$(($1xd=$1xc.right))){
$1x7$.$1dkeuw$1x6=$1xd;
var $1xe;
while(m$1.nn$(($1xe=($1xf=$1x7$.$1dkeuw$1x6,m$1.nn$($1xf)?$1xf.left:null)))){
$1x7$.$1dkeuw$1x6=$1xe;
}
var $1xf;
}
else{
var $1xg;
if(m$1.nn$(($1xg=$1x7$.$1dkeuw$1x6))){
var $1xh=$1xg;
var $1xi;
while(m$1.nn$(($1xi=$1xh.parent))&&$1xh.onRight){
$1xh=$1xi;
}
$1x7$.$1dkeuw$1x6=$1xh.parent;
}
else{
$1x7$.$1dkeuw$1x6=null;
}
}
return $1xa;
};$1x7$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
$1x7$.toString=function(){return this.string.valueOf();};
})(NodeIterator$TreeMap.$$.prototype);
}
return NodeIterator$TreeMap;
}
treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
function ReverseNodeIterator$TreeMap($1dkeuw$1xj,$1xk$){
$init$ReverseNodeIterator$TreeMap();
if($1xk$===undefined)$1xk$=new this.ReverseNodeIterator$TreeMap.$$;
$1xk$.outer$=this;
if($1dkeuw$1xj===undefined){$1dkeuw$1xj=$init$TreeMap().$$.prototype.$init$ReverseNodeIterator$TreeMap().$defs$current($1xk$);}
$1xk$.$1dkeuw$1xj_=$1dkeuw$1xj;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$1xk$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:$1xk$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}}},$1xk$);
return $1xk$;
}
ReverseNodeIterator$TreeMap.$defs$current=function($1xk$){return ($1xl=$1xk$.outer$.$1dkeuw$1q3,m$1.nn$($1xl)?$1xl.rightmostChild:null)};ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
function $init$ReverseNodeIterator$TreeMap(){
if(ReverseNodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
(function($1xk$){
m$1.atr$($1xk$,'$1dkeuw$1xj',function(){return this.$1dkeuw$1xj_;},function($1xm){return this.$1dkeuw$1xj_=$1xm;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
$1xk$.next=function(){
var $1xk$=this;
var $1xn=function(){var $1xo;
if(m$1.nn$(($1xo=$1xk$.$1dkeuw$1xj)))return m$1.Entry($1xo.key,$1xo.item,{Key$Entry:$1xk$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:$1xk$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/});else return m$1.finished()}();
var $1xp,$1xq;
if(m$1.nn$(($1xp=$1xk$.$1dkeuw$1xj))&&m$1.nn$(($1xq=$1xp.left))){
$1xk$.$1dkeuw$1xj=$1xq;
var $1xr;
while(m$1.nn$(($1xr=($1xs=$1xk$.$1dkeuw$1xj,m$1.nn$($1xs)?$1xs.right:null)))){
$1xk$.$1dkeuw$1xj=$1xr;
}
var $1xs;
}
else{
var $1xt;
if(m$1.nn$(($1xt=$1xk$.$1dkeuw$1xj))){
$1xk$.$1dkeuw$1xj=$1xt.parent;
var $1xu=$1xt;
var $1xv;
while(m$1.nn$(($1xv=$1xk$.$1dkeuw$1xj))&&$1xu.onLeft){
$1xu=$1xv;
$1xk$.$1dkeuw$1xj=$1xv.parent;
}
}
else{
$1xk$.$1dkeuw$1xj=null;
}
}
return $1xn;
};$1xk$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
$1xk$.toString=function(){return this.string.valueOf();};
})(ReverseNodeIterator$TreeMap.$$.prototype);
}
return ReverseNodeIterator$TreeMap;
}
treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
$init$removeCases();
$init$Node$TreeMap();
$init$NodeIterator$TreeMap();
$init$ReverseNodeIterator$TreeMap();
treeMap$.toString=function(){return this.string.valueOf();};
})(TreeMap.$$.prototype);
}
return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;$init$TreeMap();TreeMap.inst$$=function($1xw){
var treeMap$=new TreeMap.$$;
m$1.set_type_args(treeMap$,{Key$TreeMap:$1xw.$$targs$$.Type$Class.a.Key$TreeMap,Item$TreeMap:$1xw.$$targs$$.Type$Class.a.Item$TreeMap});
m$1.set_type_args(treeMap$,{Key$MutableMap:treeMap$.$$targs$$.Key$TreeMap,Item$MutableMap:treeMap$.$$targs$$.Item$TreeMap,Key$Map:treeMap$.$$targs$$.Key$TreeMap,Item$Map:treeMap$.$$targs$$.Item$TreeMap,Element$Collection:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}},Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}},Element$Category:{t:m$1.$_Object},Item$Correspondence:treeMap$.$$targs$$.Item$TreeMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:treeMap$.$$targs$$.Key$TreeMap,Item$MapMutator:treeMap$.$$targs$$.Item$TreeMap,Key$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Key$TreeMap,Item$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Item$CorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap,Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Element$Ranged:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key out*/,Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}},Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item out*/}},Index$Ranged:treeMap$.$$targs$$.Key$TreeMap});
return treeMap$;
};
TreeMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeMap.root')return o.$1dkeuw$1q3_;
else if(n==='ceylon.collection::TreeMap.removeCases')return o.$1dkeuw$1qd_;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeMap.root')o.$1dkeuw$1q3_=i;
else if(n==='ceylon.collection::TreeMap.removeCases')o.$1dkeuw$1qd_=i;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1q3)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1qd))];
};
var $1va,$1vb,$1vd,$1vf,$1x8,$1xl;
function naturalOrderTreeMap($1xx,$fl191b$){return TreeMap(m$1.jsc$2((function($1xy,$1xz){return $1xy.compare($1xz);
}),[{nm:'x',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap},{nm:'y',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:m$1.mtt$([$fl191b$.Key$naturalOrderTreeMap,$fl191b$.Key$naturalOrderTreeMap])}),$1xx,{Item$TreeMap:$fl191b$.Item$naturalOrderTreeMap,Key$TreeMap:$fl191b$.Key$naturalOrderTreeMap});
};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$naturalOrderTreeMap',Item$Entry:'Item$naturalOrderTreeMap'}}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function StoreIterator($1dkeuw$1y0,$$targs$$,storeIterator$){
$init$StoreIterator();
if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
m$1.set_type_args(storeIterator$,$$targs$$);
storeIterator$.$1dkeuw$1y0_=$1dkeuw$1y0;
m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator/*ORALE!Element inv pero Element out*/},storeIterator$);
storeIterator$.$1dkeuw$1y1_=(0);
storeIterator$.$1dkeuw$1y2_=storeIterator$.$1dkeuw$1y0.$_get(storeIterator$.$1dkeuw$1y1);
return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
ex$.StoreIterator=StoreIterator;
function $init$StoreIterator(){
if(StoreIterator.$$===undefined){
m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
(function(storeIterator$){
m$1.atr$(storeIterator$,'$1dkeuw$1y0',function(){return this.$1dkeuw$1y0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
m$1.atr$(storeIterator$,'$1dkeuw$1y1',function(){return this.$1dkeuw$1y1_;},function($1y3){return this.$1dkeuw$1y1_=$1y3;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
m$1.atr$(storeIterator$,'$1dkeuw$1y2',function(){return this.$1dkeuw$1y2_;},function($1y4){return this.$1dkeuw$1y2_=$1y4;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
storeIterator$.next=function(){
var storeIterator$=this;
if(!m$1.nn$(storeIterator$.$1dkeuw$1y2)){
while(((storeIterator$.$1dkeuw$1y1=storeIterator$.$1dkeuw$1y1.successor)<storeIterator$.$1dkeuw$1y0.size)){
storeIterator$.$1dkeuw$1y2=storeIterator$.$1dkeuw$1y0.$_get(storeIterator$.$1dkeuw$1y1);
if(m$1.nn$(storeIterator$.$1dkeuw$1y2)){
break;
}
}
}
var $1y5;
if(m$1.nn$(($1y5=storeIterator$.$1dkeuw$1y2))){
var $1y6=$1y5.element;
storeIterator$.$1dkeuw$1y2=$1y5.rest;
return $1y6;
}
return m$1.finished();
};storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
storeIterator$.toString=function(){return this.string.valueOf();};
})(StoreIterator.$$.prototype);
}
return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;$init$StoreIterator();
function CachingStoreIterator($1dkeuw$1y7,$$targs$$,cachingStoreIterator$){
$init$CachingStoreIterator();
if(cachingStoreIterator$===undefined)cachingStoreIterator$=new CachingStoreIterator.$$;
m$1.set_type_args(cachingStoreIterator$,$$targs$$);
cachingStoreIterator$.$1dkeuw$1y7_=$1dkeuw$1y7;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingStoreIterator/*ORALE!Element inv pero Element out*/},cachingStoreIterator$);
cachingStoreIterator$.$1dkeuw$1y8_=(0);
cachingStoreIterator$.$1dkeuw$1y9_=cachingStoreIterator$.$1dkeuw$1y7.$_get(cachingStoreIterator$.$1dkeuw$1y8);
return cachingStoreIterator$;
}
CachingStoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}}}],tp:{Element$CachingStoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingStoreIterator'}}],d:['ceylon.collection','CachingStoreIterator']};};
ex$.CachingStoreIterator=CachingStoreIterator;
function $init$CachingStoreIterator(){
if(CachingStoreIterator.$$===undefined){
m$1.initTypeProto(CachingStoreIterator,'ceylon.collection::CachingStoreIterator',m$1.Basic,m$1.Iterator);
(function(cachingStoreIterator$){
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1y7',function(){return this.$1dkeuw$1y7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}},$cont:CachingStoreIterator,d:['ceylon.collection','CachingStoreIterator','$at','store$9zckx3']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1y8',function(){return this.$1dkeuw$1y8_;},function($1ya){return this.$1dkeuw$1y8_=$1ya;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingStoreIterator,pa:1024,d:['ceylon.collection','CachingStoreIterator','$at','index$9or1dc']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$1y9',function(){return this.$1dkeuw$1y9_;},function($1yb){return this.$1dkeuw$1y9_=$1yb;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]},$cont:CachingStoreIterator,pa:1027,d:['ceylon.collection','CachingStoreIterator','$at','bucket$a893p4']};});
cachingStoreIterator$.next=function(){
var cachingStoreIterator$=this;
if(!m$1.nn$(cachingStoreIterator$.$1dkeuw$1y9)){
while(((cachingStoreIterator$.$1dkeuw$1y8=cachingStoreIterator$.$1dkeuw$1y8.successor)<cachingStoreIterator$.$1dkeuw$1y7.size)){
cachingStoreIterator$.$1dkeuw$1y9=cachingStoreIterator$.$1dkeuw$1y7.$_get(cachingStoreIterator$.$1dkeuw$1y8);
if(m$1.nn$(cachingStoreIterator$.$1dkeuw$1y9)){
break;
}
}
}
var $1yc;
if(m$1.nn$(($1yc=cachingStoreIterator$.$1dkeuw$1y9))){
var $1yd=$1yc.element;
cachingStoreIterator$.$1dkeuw$1y9=$1yc.rest;
return $1yd;
}
return m$1.finished();
};cachingStoreIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingStoreIterator',{t:m$1.Finished}]},ps:[],$cont:CachingStoreIterator,pa:3,d:['ceylon.collection','CachingStoreIterator','$m','next']};};
cachingStoreIterator$.toString=function(){return this.string.valueOf();};
})(CachingStoreIterator.$$.prototype);
}
return CachingStoreIterator;
}
ex$.$init$CachingStoreIterator=$init$CachingStoreIterator;$init$CachingStoreIterator();
function LinkedCell($1dkeuw$1ye,$1dkeuw$1yf,$1dkeuw$1yg,previous,$$targs$$,linkedCell$){
$init$LinkedCell();
if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,$$targs$$);
linkedCell$.$1dkeuw$1ye_=$1dkeuw$1ye;
linkedCell$.$1dkeuw$1yf_=$1dkeuw$1yf;
linkedCell$.$1dkeuw$1yg_=$1dkeuw$1yg;
linkedCell$.previous_=previous;
CachingCell($1dkeuw$1ye,$1dkeuw$1yf,$1dkeuw$1yg,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
linkedCell$.$1dkeuw$1yh_=null;
return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedCell'},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
ex$.LinkedCell=LinkedCell;
function $init$LinkedCell(){
if(LinkedCell.$$===undefined){
m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$CachingCell());
(function(linkedCell$){
m$1.atr$(linkedCell$,'$1dkeuw$1ye',function(){return this.$1dkeuw$1ye_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','element$8ang99']};});
m$1.atr$(linkedCell$,'$1dkeuw$1yf',function(){return this.$1dkeuw$1yf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','keyHash$70kw6u']};});
m$1.atr$(linkedCell$,'$1dkeuw$1yg',function(){return this.$1dkeuw$1yg_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','rest$hy1p2d']};});
m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($1yi){return this.previous_=$1yi;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
m$1.atr$(linkedCell$,'next',function(){return this.$1dkeuw$1yh_;},function($1yj){return this.$1dkeuw$1yh_=$1yj;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
linkedCell$.toString=function(){return this.string.valueOf();};
})(LinkedCell.$$.prototype);
}
return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;$init$LinkedCell();LinkedCell.inst$$=function($1yk){
var linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,{Element$LinkedCell:$1yk.$$targs$$.Type$Class.a.Element$LinkedCell});
m$1.set_type_args(linkedCell$,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell});
return linkedCell$;
};
LinkedCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedCell.next')return o.next_;
else if(n==='ceylon.collection::LinkedCell.previous')return o.previous_;
else return CachingCell.ser$get$(ref,o);
};
LinkedCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedCell.next')o.next_=i;
else if(n==='ceylon.collection::LinkedCell.previous')o.previous_=i;
else CachingCell.ser$get$(ref,o,i);
};
LinkedCell.ser$refs$=function(o){var a=CachingCell.ser$refs$(o);a.push(m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getNext)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getPrevious)));return a;
};
function LinkedCellIterator($1dkeuw$1yl,$$targs$$,linkedCellIterator$){
$init$LinkedCellIterator();
if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
m$1.set_type_args(linkedCellIterator$,$$targs$$);
linkedCellIterator$.$1dkeuw$1yl_=$1dkeuw$1yl;
m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator/*ORALE!Element inv pero Element out*/},linkedCellIterator$);
return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
ex$.LinkedCellIterator=LinkedCellIterator;
function $init$LinkedCellIterator(){
if(LinkedCellIterator.$$===undefined){
m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
(function(linkedCellIterator$){
m$1.atr$(linkedCellIterator$,'$1dkeuw$1yl',function(){return this.$1dkeuw$1yl_;},function($1ym){return this.$1dkeuw$1yl_=$1ym;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
linkedCellIterator$.next=function(){
var linkedCellIterator$=this;
var $1yn;
if(m$1.nn$(($1yn=linkedCellIterator$.$1dkeuw$1yl))){
linkedCellIterator$.$1dkeuw$1yl=$1yn.next;
return $1yn.element;
}
return m$1.finished();
};linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
linkedCellIterator$.toString=function(){return this.string.valueOf();};
})(LinkedCellIterator.$$.prototype);
}
return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;$init$LinkedCellIterator();
function invert($1yo,$av0mdq$){
var $1yp=HashMap(undefined,undefined,undefined,{Key$HashMap:$av0mdq$.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}});
var $1yr;for(var $1yq=$1yo.iterator();($1yr=$1yq.next())!==m$1.finished();){
var $1ys=$1yr.key,$1yt=$1yr.item;
var $1yu;
if(m$1.nn$(($1yu=$1yp.$_get($1yt)))){
$1yu.add($1ys);
}
else{
var $1yv=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$av0mdq$.Key$invert});
$1yv.add($1ys);
$1yp.put($1yt,$1yv);
}
}
function $1yw($1yx,$1yy){
var $1yz;
m$1.asrt$2("",'21:8-21:48','invert.ceylon',[m$1.is$(($1yz=$1yy.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element out*/}}),'is [Key+] result = sa.sequence()']);
return $1yz;
};$1yw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert}},ps:[{nm:'item',mt:'prm',$t:$av0mdq$.Item$invert},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
return $1yp.mapItems(m$1.jsc$3(0,$1yw),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element out*/}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function MutableList($$targs$$,mutableList$){
m$1.set_type_args(mutableList$,$$targs$$,MutableList);
m$1.List({Element$List:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element out*/},mutableList$);
ListMutator({Element$ListMutator:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element in*/},mutableList$);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{def:{t:m$1.Anything}}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
if(MutableList.$$===undefined){
m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',m$1.List,$init$ListMutator());
(function(mutableList$){
mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){var mutableList$=this;
return mutableList$.$_delete(0);
};
mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
mutableList$.deleteLast=function(){var mutableList$=this;
return mutableList$.$_delete((mutableList$.size-(1)));
};
mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};mutableList$.swap=function($1z0,$1z1){
var mutableList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'28:8-30:37','MutableList.ceylon',[($1z2=$1z0,$1z2.notSmallerThan((0))&&$1z2.smallerThan(mutableList$.size)),'0<=i<size'],[($1z3=$1z1,$1z3.notSmallerThan((0))&&$1z3.smallerThan(mutableList$.size)),'0<=j<size']);
if(!m$1.$eq$($1z0,$1z1)){
var $1z4,$1z5;
m$1.asrt$2("",'32:12-33:51','MutableList.ceylon',[m$1.is$(($1z4=mutableList$.getFromFirst($1z0)),mutableList$.$$targs$$.Element$MutableList),'is Element x = getFromFirst(i)'],[m$1.is$(($1z5=mutableList$.getFromFirst($1z1)),mutableList$.$$targs$$.Element$MutableList),'is Element y = getFromFirst(j)']);
mutableList$.set($1z0,$1z5);
mutableList$.set($1z1,$1z4);
}
};mutableList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','swap']};};
mutableList$.move=function($1z6,$1z7){
var mutableList$=this;
m$1.asrt$2("index may not be negative or greater than the\nlast index in the list",'40:8-42:37','MutableList.ceylon',[($1z8=$1z6,$1z8.notSmallerThan((0))&&$1z8.smallerThan(mutableList$.size)),'0<=i<size'],[($1z9=$1z7,$1z9.notSmallerThan((0))&&$1z9.smallerThan(mutableList$.size)),'0<=j<size']);
if(!m$1.$eq$($1z6,$1z7)){
var $1za;
m$1.asrt$2("",'44:12-44:45','MutableList.ceylon',[m$1.is$(($1za=mutableList$.$_delete($1z6)),mutableList$.$$targs$$.Element$MutableList),'is Element x = delete(i)']);
mutableList$.insert($1z7,$1za);
}
};mutableList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','move']};};
mutableList$.removeWhere=function($1zb){
var mutableList$=this;
var $1zc=(0);
var $1zd=(0);
while(($1zc<mutableList$.size)){
var $1ze;
if(m$1.nn$(($1ze=mutableList$.getFromFirst($1zc)))&&$1zb($1ze)){
mutableList$.$_delete($1zc);
($1zf=$1zd,$1zd=$1zf.successor,$1zf);
var $1zf;
}
else{
($1zg=$1zc,$1zc=$1zg.successor,$1zg);
var $1zg;
}
}
return $1zd;
};mutableList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:removeWhere')];},d:['ceylon.collection','MutableList','$m','removeWhere']};};
mutableList$.prune=function(){
var mutableList$=this;
var $1zh=(0);
var $1zi=(0);
while(($1zh<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($1zh))){
($1zj=$1zi,$1zi=$1zj.successor,$1zj);
var $1zj;
mutableList$.$_delete($1zh);
}
else{
($1zk=$1zh,$1zh=$1zk.successor,$1zk);
var $1zk;
}
}
return $1zi;
};mutableList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','prune']};};
mutableList$.remove=function($1zl){var mutableList$=this;
return mutableList$.removeWhere(m$1.jsc$2(($1zm=$1zl,m$1.jsc$3($1zm,$1zm.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}));
var $1zm;
};
mutableList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','remove']};};
mutableList$.findAndRemoveFirst=function($1zn){
var mutableList$=this;
var $1zo;
if(m$1.nn$(($1zo=mutableList$.firstIndexWhere($1zn)))){
return mutableList$.$_delete($1zo);
}
else{
return null;
}
};mutableList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveFirst')];},d:['ceylon.collection','MutableList','$m','findAndRemoveFirst']};};
mutableList$.removeFirst=function($1zp){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveFirst(m$1.jsc$2(($1zq=$1zp,m$1.jsc$3($1zq,$1zq.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $1zq;
};
mutableList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeFirst']};};
mutableList$.findAndRemoveLast=function($1zr){
var mutableList$=this;
var $1zs;
if(m$1.nn$(($1zs=mutableList$.lastIndexWhere($1zr)))){
return mutableList$.$_delete($1zs);
}
else{
return null;
}
};mutableList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveLast')];},d:['ceylon.collection','MutableList','$m','findAndRemoveLast']};};
mutableList$.removeLast=function($1zt){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveLast(m$1.jsc$2(($1zu=$1zt,m$1.jsc$3($1zu,$1zu.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $1zu;
};
mutableList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeLast']};};
mutableList$.replaceWhere=function($1zv,$1zw){
var mutableList$=this;
var $1zx=(0);
var $1zy=(0);
while(($1zx<mutableList$.size)){
var $1zz;
if(m$1.nn$(($1zz=mutableList$.getFromFirst($1zx)))&&$1zv($1zz)){
mutableList$.set($1zx,$1zw);
($200=$1zy,$1zy=$200.successor,$200);
var $200;
}
($201=$1zx,$1zx=$201.successor,$201);
var $201;
}
return $1zy;
};mutableList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:replaceWhere')];},d:['ceylon.collection','MutableList','$m','replaceWhere']};};
mutableList$.infill=function($202){
var mutableList$=this;
var $203=(0);
while(($203<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($203))){
mutableList$.set($203,$202);
}
($204=$203,$203=$204.successor,$204);
var $204;
}
};mutableList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','infill']};};
mutableList$.$_replace=function($205,$206){var mutableList$=this;
return mutableList$.replaceWhere(m$1.jsc$2(($207=$205,m$1.jsc$3($207,$207.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$206);
var $207;
};
mutableList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replace']};};
mutableList$.findAndReplaceFirst=function($208,$209){
var mutableList$=this;
var $20a;
if(m$1.nn$(($20a=mutableList$.firstIndexWhere($208)))){
var $20b=mutableList$.getFromFirst($20a);
mutableList$.set($20a,$209);
return $20b;
}
else{
return null;
}
};mutableList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceFirst')];},d:['ceylon.collection','MutableList','$m','findAndReplaceFirst']};};
mutableList$.replaceFirst=function($20c,$20d){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceFirst(m$1.jsc$2(($20e=$20c,m$1.jsc$3($20e,$20e.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$20d));
var $20e;
};
mutableList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceFirst']};};
mutableList$.findAndReplaceLast=function($20f,$20g){
var mutableList$=this;
var $20h;
if(m$1.nn$(($20h=mutableList$.lastIndexWhere($20f)))){
var $20i=mutableList$.getFromFirst($20h);
mutableList$.set($20h,$20g);
return $20i;
}
else{
return null;
}
};mutableList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceLast')];},d:['ceylon.collection','MutableList','$m','findAndReplaceLast']};};
mutableList$.replaceLast=function($20j,$20k){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceLast(m$1.jsc$2(($20l=$20j,m$1.jsc$3($20l,$20l.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$20k));
var $20l;
};
mutableList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceLast']};};
mutableList$.toString=function(){return this.string.valueOf();};
})(MutableList.$$.prototype);
}
return MutableList;
}
ex$.$init$MutableList=$init$MutableList;$init$MutableList();
function ListMutator($$targs$$,listMutator$){
m$1.set_type_args(listMutator$,$$targs$$,ListMutator);
m$1.IndexedCorrespondenceMutator({Element$IndexedCorrespondenceMutator:$$targs$$.Element$ListMutator},listMutator$);
m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in',def:{t:m$1.Anything}}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}},{t:m$1.IndexedCorrespondenceMutator,a:{Element$IndexedCorrespondenceMutator:'Element$ListMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
if(ListMutator.$$===undefined){
m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.IndexedCorrespondenceMutator,m$1.List);
(function(listMutator$){
listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll=function($20m){
var listMutator$=this;
var $20o;for(var $20n=$20m.iterator();($20o=$20n.next())!==m$1.finished();){
listMutator$.add($20o);
}
};listMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};};
listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.insertAll=function($20p,$20q){
var listMutator$=this;
var $20r=$20p;
var $20t;for(var $20s=$20q.iterator();($20t=$20s.next())!==m$1.finished();){
listMutator$.insert(($20u=$20r,$20r=$20u.successor,$20u),$20t);
var $20u;
}
};listMutator$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insertAll'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.3','$'),m$1.AssertionError),"if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insertAll']};};
listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll=function($20v){
var listMutator$=this;
var $20w=(0);
var $20y;for(var $20x=$20v.iterator();($20y=$20x.next())!==m$1.finished();){
($20w=$20w+listMutator$.remove($20y));
}
return $20w;
};listMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};};
listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.swap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:swap'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','swap']};}};listMutator$.move={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:move'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','move']};}};listMutator$.clear=function(){var listMutator$=this;
return listMutator$.deleteMeasure(0,listMutator$.size);
};
listMutator$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};};
listMutator$.deleteFirst=function(){var listMutator$=this;
return listMutator$.$_delete(0);
};
listMutator$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};};
listMutator$.deleteLast=function(){var listMutator$=this;
return listMutator$.$_delete((listMutator$.size-(1)));
};
listMutator$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};};
listMutator$.deleteSpan=function($20z,$210){var listMutator$=this;
return ($211=smallest($20z,$210),$212=(($210-$20z).magnitude+(1)),listMutator$.deleteMeasure($211,$212));
var $211,$212;
};
listMutator$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};};
listMutator$.deleteMeasure=function($213,$214){
var listMutator$=this;
if(($213<(0))){
($214=$214+$213);
$213=(0);
}
$214=smallest($214,(listMutator$.size-$213));
while((($215=$214,$214=$215.predecessor,$215)>(0))){
listMutator$.$_delete($213);
}
var $215;
};listMutator$.deleteMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer},pa:9},{nm:'length',mt:'prm',$t:{t:m$1.Integer},pa:9}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};};
listMutator$.truncate=function($216){
var listMutator$=this;
m$1.asrt$2("",'425:8-425:26','MutableList.ceylon',[($216>=(0)),'size >= 0']);
listMutator$.deleteMeasure($216,(listMutator$.size-$216));
};listMutator$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.3','$'),m$1.AssertionError),"if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};};
listMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:ListMutator,a:{Element$ListMutator:'Element$ListMutator'}},ps:[],$cont:ListMutator,pa:7,d:['ceylon.collection','ListMutator','$m','clone']};}};listMutator$.toString=function(){return this.string.valueOf();};
})(ListMutator.$$.prototype);
}
return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;$init$ListMutator();
function measureToSpan($217,$218){return ($219=(($218<=(0))?m$1.tpl$([(-1),(-1)]):null),m$1.nn$($219)?$219:m$1.tpl$([$217,(($217+$218)-(1))]));
var $219;
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
function spanToMeasure($21a,$21b,$21c){
if((($21c==(0))||(($21a<(0))&&($21b<(0))))){
return m$1.tpl$([0,0,false]);
}
var $21d=($21a>$21b);
var $21e=largest(0,($21f=($21d?$21b:null),m$1.nn$($21f)?$21f:$21a));
var $21f;
var $21g=smallest(($21c-(1)),($21h=($21d?$21a:null),m$1.nn$($21h)?$21h:$21b));
var $21h;
return m$1.tpl$([$21e,(((1)+$21g)-$21e),$21d]);
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($21i,$21j){return ($21k=(($21i>$21j)?$21i:null),m$1.nn$($21k)?$21k:$21j);
var $21k;
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
function smallest($21l,$21m){return ($21n=(($21l<$21m)?$21l:null),m$1.nn$($21n)?$21n:$21m);
var $21n;
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
$init$Hashtable();
if(hashtable$===undefined)hashtable$=new Hashtable.$$;
if(initialCapacity===undefined){initialCapacity=$init$Hashtable().$defs$initialCapacity(hashtable$,loadFactor,growthFactor);}
hashtable$.initialCapacity_=initialCapacity;
if(loadFactor===undefined){loadFactor=$init$Hashtable().$defs$loadFactor(hashtable$,initialCapacity,growthFactor);}
hashtable$.loadFactor_=loadFactor;
if(growthFactor===undefined){growthFactor=$init$Hashtable().$defs$growthFactor(hashtable$,initialCapacity,loadFactor);}
hashtable$.growthFactor_=growthFactor;
m$1.asrt$2("initial capacity cannot be negative",'31:4-32:31','Hashtable.ceylon',[(hashtable$.initialCapacity>=(0)),'initialCapacity>=0']);
m$1.asrt$2("initial capacity too large",'34:4-35:50','Hashtable.ceylon',[(hashtable$.initialCapacity<=m$1.runtime().maxArraySize),'initialCapacity<=runtime.maxArraySize']);
m$1.asrt$2("load factor must be positive",'37:4-38:27','Hashtable.ceylon',[hashtable$.loadFactor.largerThan((0.0)),'loadFactor>0.0']);
m$1.asrt$2("growth factor must be at least 1.0",'40:4-41:30','Hashtable.ceylon',[hashtable$.growthFactor.notSmallerThan((1.0)),'growthFactor>=1.0']);
return hashtable$;
}
Hashtable.$defs$initialCapacity=function(hashtable$,loadFactor,growthFactor){return (16)};Hashtable.$defs$loadFactor=function(hashtable$,initialCapacity,growthFactor){return (0.75)};Hashtable.$defs$growthFactor=function(hashtable$,initialCapacity,loadFactor){return m$1.Float(2.0)};Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
if(Hashtable.$$===undefined){
m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
(function(hashtable$){
m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
hashtable$.rehash=function($21o,$21p){var hashtable$=this;
return (($21o>m$1.Float($21p*hashtable$.loadFactor).integer)&&(hashtable$.capacity($21o)>$21p));
};
hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
hashtable$.capacity=function($21q){var hashtable$=this;
return hashtable$.$1dkeuw$21r(m$1.Float($21q*hashtable$.growthFactor).integer);
};
hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
hashtable$.initialCapacityForSize=function($21s){var hashtable$=this;
return hashtable$.$1dkeuw$21r(largest(hashtable$.initialCapacity,m$1.Float($21s.divided(hashtable$.loadFactor)+(1)).integer));
};
hashtable$.initialCapacityForSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForSize']};};
hashtable$.initialCapacityForUnknownSize=function(){var hashtable$=this;
return hashtable$.$1dkeuw$21r(hashtable$.initialCapacity);
};
hashtable$.initialCapacityForUnknownSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForUnknownSize']};};
hashtable$.$1dkeuw$21r=function($21t){
var hashtable$=this;
var $21u=($21t-(1));
$21u=$21u.rightLogicalShift(1).or($21u);
$21u=$21u.rightLogicalShift(2).or($21u);
$21u=$21u.rightLogicalShift(4).or($21u);
$21u=$21u.rightLogicalShift(8).or($21u);
$21u=$21u.rightLogicalShift(16).or($21u);
if(($21u<(0))){
return 1;
}
else{
if(($21u>=maximumCapacity())){
return maximumCapacity();
}
else{
return ($21u+(1));
}
}
};hashtable$.$1dkeuw$21r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,d:['ceylon.collection','Hashtable','$m','powerOf2$bh7ri4']};};
hashtable$.toString=function(){return this.string.valueOf();};
})(Hashtable.$$.prototype);
}
return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;$init$Hashtable();Hashtable.inst$$=function($21v){
var hashtable$=new Hashtable.$$;
return hashtable$;
};
Hashtable.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Hashtable.initialCapacity')return o.initialCapacity_;
else if(n==='ceylon.collection::Hashtable.loadFactor')return o.loadFactor_;
else if(n==='ceylon.collection::Hashtable.growthFactor')return o.growthFactor_;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Hashtable.initialCapacity')o.initialCapacity_=i;
else if(n==='ceylon.collection::Hashtable.loadFactor')o.loadFactor_=i;
else if(n==='ceylon.collection::Hashtable.growthFactor')o.growthFactor_=i;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getInitialCapacity)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getLoadFactor)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getGrowthFactor))];
};
var $21w;function $valinit$$21w(){if($21w===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'maximumCapacity\' before it was set"),'77:0-77:48','Hashtable.ceylon');
if($21w===undefined){$21w=m$1.INIT$;$21w=(1).leftLogicalShift(30)};return $21w;};
function maximumCapacity(){return $valinit$$21w();}
var $prop$getMaximumCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},d:['ceylon.collection','maximumCapacity']};}};
ex$.$prop$getMaximumCapacity=$prop$getMaximumCapacity;
$prop$getMaximumCapacity.get=maximumCapacity;
function UnmodifiableSet($1dkeuw$21x,$$targs$$,unmodifiableSet$){
$init$UnmodifiableSet();
if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,$$targs$$);
unmodifiableSet$.$1dkeuw$21x_=$1dkeuw$21x;
m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
ex$.UnmodifiableSet=UnmodifiableSet;
function $init$UnmodifiableSet(){
if(UnmodifiableSet.$$===undefined){
m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
(function(unmodifiableSet$){
m$1.atr$(unmodifiableSet$,'$1dkeuw$21x',function(){return this.$1dkeuw$21x_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
unmodifiableSet$.iterator=function(){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.iterator();
};m$1.atr$(unmodifiableSet$,'size',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
unmodifiableSet$.contains=function($21y){var unmodifiableSet$=this;
return m$1.$cnt$2($21y,unmodifiableSet$.$1dkeuw$21x);
};unmodifiableSet$.complement=function($21z,$rdd3zt$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.complement($21z,{Other$complement:$rdd3zt$.Other$complement});
};
unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
unmodifiableSet$.exclusiveUnion=function($220,$acz99u$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.exclusiveUnion($220,{Other$exclusiveUnion:$acz99u$.Other$exclusiveUnion});
};
unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
unmodifiableSet$.intersection=function($221,$9faf6e$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.intersection($221,{Other$intersection:$9faf6e$.Other$intersection});
};
unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
unmodifiableSet$.union=function($222,$tnhkj6$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.union($222,{Other$union:$tnhkj6$.Other$union});
};
unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
unmodifiableSet$.superset=function($223){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.superset($223);
};unmodifiableSet$.subset=function($224){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.subset($224);
};unmodifiableSet$.equals=function($225){var unmodifiableSet$=this;
return m$1.$eq$(unmodifiableSet$.$1dkeuw$21x,$225);
};m$1.atr$(unmodifiableSet$,'hash',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
unmodifiableSet$.clone=function(){var unmodifiableSet$=this;
return UnmodifiableSet(unmodifiableSet$.$1dkeuw$21x.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
};unmodifiableSet$.each=function($226){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$21x.each($226);
};unmodifiableSet$.toString=function(){return this.string.valueOf();};
})(UnmodifiableSet.$$.prototype);
}
return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;$init$UnmodifiableSet();UnmodifiableSet.inst$$=function($227){
var unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,{Element$UnmodifiableSet:$227.$$targs$$.Type$Class.a.Element$UnmodifiableSet});
m$1.set_type_args(unmodifiableSet$,{Element$Set:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Collection:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Category:{t:m$1.$_Object}});
return unmodifiableSet$;
};
UnmodifiableSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableSet.set')return o.$1dkeuw$21x_;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableSet.set')o.$1dkeuw$21x_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$21x))];
};
function unmodifiableSet($228,$pjsf5f$){return UnmodifiableSet($228,{Element$UnmodifiableSet:$pjsf5f$.Element$unmodifiableSet/*ORALE!Element inv pero Element out*/});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
function entryStore($229,$leqrr$){return m$1.$_Array$c_ofSize($229,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:$leqrr$.Key$entryStore/*ORALE!Key inv pero Key out*/,Item$Entry:$leqrr$.Item$entryStore/*ORALE!Item inv pero Item out*/}}}}])});
};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$entryStore',Item$Entry:'Item$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
function elementStore($22a,$9ap29p$){return m$1.$_Array$c_ofSize($22a,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:$9ap29p$.Element$elementStore}}])});
};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
function cachingEntryStore($22b,$gyeaiy$){return m$1.$_Array$c_ofSize($22b,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:$gyeaiy$.Key$cachingEntryStore/*ORALE!Key inv pero Key out*/,Item$Entry:$gyeaiy$.Item$cachingEntryStore/*ORALE!Item inv pero Item out*/}}}}])});
};
cachingEntryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Key$Entry:'Key$cachingEntryStore',Item$Entry:'Item$cachingEntryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$cachingEntryStore:{sts:[{t:m$1.$_Object}]},Item$cachingEntryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingEntryStore')];},d:['ceylon.collection','cachingEntryStore']};};
function cachingElementStore($22c,$m3pk2c$){return m$1.$_Array$c_ofSize($22c,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:$m3pk2c$.Element$cachingElementStore}}])});
};
cachingElementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$cachingElementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$cachingElementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingElementStore')];},d:['ceylon.collection','cachingElementStore']};};
function IdentityMap($1dkeuw$22d,$1dkeuw$22e,$$targs$$,identityMap$){
$init$IdentityMap();
if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,$$targs$$);
if($1dkeuw$22d===undefined){$1dkeuw$22d=$init$IdentityMap().$defs$hashtable(identityMap$,$1dkeuw$22e);}
identityMap$.$1dkeuw$22d_=$1dkeuw$22d;
if($1dkeuw$22e===undefined){$1dkeuw$22e=$init$IdentityMap().$defs$entries(identityMap$,$1dkeuw$22d);}
identityMap$.$1dkeuw$22e_=$1dkeuw$22e;
m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/,Key$Correspondence:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key in*/},identityMap$);
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}},identityMap$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}},identityMap$);
identityMap$.$1dkeuw$22f_=entryStore(identityMap$.$1dkeuw$22d.initialCapacity,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
identityMap$.$1dkeuw$22g_=(0);
var $22i;for(var $22h=$1dkeuw$22e.iterator();($22i=$22h.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$22j(identityMap$.$1dkeuw$22f,$22i)){
($22k=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$22k.successor,$22k);
var $22k;
}
}
identityMap$.$1dkeuw$22l();
return identityMap$;
}
IdentityMap.$defs$hashtable=function(identityMap$,$1dkeuw$22e){return Hashtable()};IdentityMap.$defs$entries=function(identityMap$,$1dkeuw$22d){return m$1.empty()};IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
if(IdentityMap.$$===undefined){
m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
(function(identityMap$){
m$1.atr$(identityMap$,'$1dkeuw$22d',function(){return this.$1dkeuw$22d_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
m$1.atr$(identityMap$,'$1dkeuw$22e',function(){return this.$1dkeuw$22e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
m$1.atr$(identityMap$,'$1dkeuw$22f',function(){return this.$1dkeuw$22f_;},function($22m){return this.$1dkeuw$22f_=$22m;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
m$1.atr$(identityMap$,'$1dkeuw$22g',function(){return this.$1dkeuw$22g_;},function($22n){return this.$1dkeuw$22g_=$22n;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
identityMap$.$1dkeuw$22o=function($22p,$22q){var identityMap$=this;
return m$1.identityHash($22p).remainder($22q.size).magnitude;
};
identityMap$.$1dkeuw$22o.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
identityMap$.$1dkeuw$22j=function($22r,$22s){
var identityMap$=this;
var $22t=identityMap$.$1dkeuw$22o($22s.key,$22r);
var $22u=$22r.$_get($22t);
var $22v=$22u;
var $22w;
while(m$1.nn$(($22w=$22v))){
if(($22w.element.key===$22s.key)){
($22w.element=$22s);
return false;
}
$22v=$22w.rest;
}
($22x=Cell($22s,$22u,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}}),$22r.set($22t,$22x), $22x);
var $22x;
return true;
};identityMap$.$1dkeuw$22j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
identityMap$.$1dkeuw$22l=function(){
var identityMap$=this;
if(identityMap$.$1dkeuw$22d.rehash(identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22f.size)){
var $22y=entryStore(identityMap$.$1dkeuw$22d.capacity(identityMap$.$1dkeuw$22g),{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
var $22z=(0);
while(($22z<identityMap$.$1dkeuw$22f.size)){
var $230=identityMap$.$1dkeuw$22f.$_get($22z);
var $231;
while(m$1.nn$(($231=$230))){
$230=$231.rest;
var $232=identityMap$.$1dkeuw$22o($231.element.key,$22y);
var $233=$22y.$_get($232);
($231.rest=$233);
($234=$231,$22y.set($232,$234), $234);
var $234;
}
($235=$22z,$22z=$235.successor,$235);
var $235;
}
identityMap$.$1dkeuw$22f=$22y;
}
};identityMap$.$1dkeuw$22l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
identityMap$.put=function($236,$237){
var identityMap$=this;
var $238=identityMap$.$1dkeuw$22o($236,identityMap$.$1dkeuw$22f);
var $239=m$1.Entry($236,$237,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/});
var $23a=identityMap$.$1dkeuw$22f.$_get($238);
var $23b=$23a;
var $23c;
while(m$1.nn$(($23c=$23b))){
if(($23c.element.key===$236)){
var $23d=$23c.element.item;
($23c.element=$239);
return $23d;
}
$23b=$23c.rest;
}
($23e=Cell($239,$23a,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}}),identityMap$.$1dkeuw$22f.set($238,$23e), $23e);
var $23e;
($23f=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$23f.successor,$23f);
var $23f;
identityMap$.$1dkeuw$22l();
return null;
};identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
identityMap$.putAll=function($23g){
var identityMap$=this;
var $23i;for(var $23h=$23g.iterator();($23i=$23h.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$22j(identityMap$.$1dkeuw$22f,$23i)){
($23j=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$23j.successor,$23j);
var $23j;
}
}
identityMap$.$1dkeuw$22l();
};identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
identityMap$.replaceEntry=function($23k,$23l,$23m){
var identityMap$=this;
var $23n=identityMap$.$1dkeuw$22o($23k,identityMap$.$1dkeuw$22f);
var $23o=identityMap$.$1dkeuw$22f.$_get($23n);
var $23p;
while(m$1.nn$(($23p=$23o))){
if(($23p.element.key===$23k)){
var $23q;
if(m$1.nn$(($23q=$23p.element.item))&&m$1.$eq$($23q,$23l)){
($23p.element=m$1.Entry($23k,$23m,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}));
return true;
}
else{
return false;
}
}
$23o=$23p.rest;
}
return false;
};identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
identityMap$.remove=function($23r){
var identityMap$=this;
var $23s=identityMap$.$1dkeuw$22o($23r,identityMap$.$1dkeuw$22f);
var $23t;
if(m$1.nn$(($23t=identityMap$.$1dkeuw$22f.$_get($23s)))&&($23t.element.key===$23r)){
($23u=$23t.rest,identityMap$.$1dkeuw$22f.set($23s,$23u), $23u);
var $23u;
($23v=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$23v.predecessor,$23v);
var $23v;
return $23t.element.item;
}
var $23w=identityMap$.$1dkeuw$22f.$_get($23s);
var $23x;
while(m$1.nn$(($23x=$23w))){
var $23y=$23x.rest;
var $23z;
if(m$1.nn$(($23z=$23y))&&($23z.element.key===$23r)){
($23x.rest=$23z.rest);
($240=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$240.predecessor,$240);
var $240;
return $23z.element.item;
}
else{
$23w=$23y;
}
}
return null;
};identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
identityMap$.removeAll=function($241){
var identityMap$=this;
var $243;for(var $242=$241.iterator();($243=$242.next())!==m$1.finished();){
identityMap$.remove($243);
}
};identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$IdentityMap'}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
identityMap$.removeEntry=function($244,$245){
var identityMap$=this;
var $246=identityMap$.$1dkeuw$22o($244,identityMap$.$1dkeuw$22f);
var $247;
while(m$1.nn$(($247=identityMap$.$1dkeuw$22f.$_get($246)))&&($247.element.key===$244)){
var $248;
if(m$1.nn$(($248=$247.element.item))&&m$1.$eq$($248,$245)){
($249=$247.rest,identityMap$.$1dkeuw$22f.set($246,$249), $249);
var $249;
($24a=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$24a.predecessor,$24a);
var $24a;
return true;
}
else{
return false;
}
}
var $24b=identityMap$.$1dkeuw$22f.$_get($246);
var $24c;
while(m$1.nn$(($24c=$24b))){
var $24d=$24c.rest;
var $24e;
if(m$1.nn$(($24e=$24d))&&($24e.element.key===$244)){
var $24f;
if(m$1.nn$(($24f=$24e.element.item))&&m$1.$eq$($24f,$245)){
($24c.rest=$24e.rest);
($24g=identityMap$.$1dkeuw$22g,identityMap$.$1dkeuw$22g=$24g.predecessor,$24g);
var $24g;
return true;
}
else{
return false;
}
}
else{
$24b=$24d;
}
}
return false;
};identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
identityMap$.clear=function(){
var identityMap$=this;
var $24h=(0);
while(($24h<identityMap$.$1dkeuw$22f.size)){
($24i=null,identityMap$.$1dkeuw$22f.set(($24j=$24h,$24h=$24j.successor,$24j),$24i), $24i);
var $24i,$24j;
}
identityMap$.$1dkeuw$22g=(0);
};identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
m$1.atr$(identityMap$,'size',function(){
var identityMap$=this;
return identityMap$.$1dkeuw$22g;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
identityMap$.$_get=function($24k){
var identityMap$=this;
if(identityMap$.empty){
return null;
}
var $24l=identityMap$.$1dkeuw$22o($24k,identityMap$.$1dkeuw$22f);
var $24m=identityMap$.$1dkeuw$22f.$_get($24l);
var $24n;
while(m$1.nn$(($24n=$24m))){
if(($24n.element.key===$24k)){
return $24n.element.item;
}
$24m=$24n.rest;
}
return null;
};identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
identityMap$.iterator=function(){var identityMap$=this;
return StoreIterator(identityMap$.$1dkeuw$22f,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}});
};identityMap$.count=function($24o){
var identityMap$=this;
var $24p=(0);
var $24q=(0);
while(($24p<identityMap$.$1dkeuw$22f.size)){
var $24r=identityMap$.$1dkeuw$22f.$_get($24p);
var $24s;
while(m$1.nn$(($24s=$24r))){
if($24o($24s.element)){
($24t=$24q,$24q=$24t.successor,$24t);
var $24t;
}
$24r=$24s.rest;
}
($24u=$24p,$24p=$24u.successor,$24u);
var $24u;
}
return $24q;
};identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}]}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
identityMap$.each=function($24v){
var identityMap$=this;
identityMap$.$1dkeuw$22f.each(m$1.jsc$2((function($24w){
var $24x=$24w;
$prop$get$24x={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]},$cont:identityMap$.each,pa:1027,d:['ceylon.collection','IdentityMap','$m','each','$at','iter$4io6c']};}};
$prop$get$24x.get=function(){return $24x};
var $24y;
while(m$1.nn$(($24y=$24x))){
$24v($24y.element);
$24x=$24y.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}}}}])])}));
};identityMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}]}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','each']};};
m$1.atr$(identityMap$,'hash',function(){
var identityMap$=this;
var $24z=(0);
var $250=(17);
while(($24z<identityMap$.$1dkeuw$22f.size)){
var $251=identityMap$.$1dkeuw$22f.$_get($24z);
var $252;
while(m$1.nn$(($252=$251))){
$250=((($250*(31))+m$1.identityHash($252.element.key))*(31));
var $253;
if(m$1.nn$(($253=$252.element.item))){
($250=$250+$253.hash);
}
$251=$252.rest;
}
($254=$24z,$24z=$254.successor,$254);
var $254;
}
return $250;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($255){
var identityMap$=this;
var $256;
if(m$1.is$(($256=$255),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})){
if((identityMap$===$256)){
return true;
}
if((identityMap$.size==$256.size)){
var $257=(0);
while(($257<identityMap$.$1dkeuw$22f.size)){
var $258=identityMap$.$1dkeuw$22f.$_get($257);
var $259;
while(m$1.nn$(($259=$258))){
var $25a=$256.$_get($259.element.key);
var $25b;
if(m$1.nn$(($25b=$259.element.item))){
var $25c;
if(m$1.nn$(($25c=$25a))){
if(!m$1.$eq$($25c,$25b)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($25a)){
return false;
}
}
$258=$259.rest;
}
($25d=$257,$257=$25d.successor,$25d);
var $25d;
}
return true;
}
}
return false;
};identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
identityMap$.clone=function(){
var identityMap$=this;
var $25e=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
($25e.$1dkeuw$22g=identityMap$.$1dkeuw$22g);
($25e.$1dkeuw$22f=entryStore(identityMap$.$1dkeuw$22f.size,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap}));
var $25f=(0);
while(($25f<identityMap$.$1dkeuw$22f.size)){
var $25g;
if(m$1.nn$(($25g=identityMap$.$1dkeuw$22f.$_get($25f)))){
($25h=$25g.clone(),$25e.$1dkeuw$22f.set($25f,$25h), $25h);
var $25h;
}
($25i=$25f,$25f=$25i.successor,$25i);
var $25i;
}
return $25e;
};identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
identityMap$.defines=function($25j){
var identityMap$=this;
var $25k=(0);
while(($25k<identityMap$.$1dkeuw$22f.size)){
var $25l=identityMap$.$1dkeuw$22f.$_get($25k);
var $25m;
while(m$1.nn$(($25m=$25l))){
if(($25m.element.key===$25j)){
return true;
}
$25l=$25m.rest;
}
($25n=$25k,$25k=$25n.successor,$25n);
var $25n;
}
return false;
};identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
identityMap$.contains=function($25o){
var identityMap$=this;
var $25p=(0);
while(($25p<identityMap$.$1dkeuw$22f.size)){
var $25q=identityMap$.$1dkeuw$22f.$_get($25p);
var $25r;
while(m$1.nn$(($25r=$25q))){
var $25s;
if(m$1.nn$(($25s=$25r.element.item))&&m$1.$eq$($25s,$25o)){
return true;
}
$25q=$25r.rest;
}
($25t=$25p,$25p=$25t.successor,$25t);
var $25t;
}
return false;
};identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
identityMap$.toString=function(){return this.string.valueOf();};
})(IdentityMap.$$.prototype);
}
return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;$init$IdentityMap();IdentityMap.inst$$=function($25u){
var identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,{Key$IdentityMap:$25u.$$targs$$.Type$Class.a.Key$IdentityMap,Item$IdentityMap:$25u.$$targs$$.Type$Class.a.Item$IdentityMap});
m$1.set_type_args(identityMap$,{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}},Element$Category:{t:m$1.$_Object},Element$Collection:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key out*/,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item out*/}},Item$Correspondence:identityMap$.$$targs$$.Item$IdentityMap,Key$Correspondence:identityMap$.$$targs$$.Key$IdentityMap});
return identityMap$;
};
IdentityMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentityMap.hashtable')return o.$1dkeuw$22d_;
else if(n==='ceylon.collection::IdentityMap.store')return o.$1dkeuw$22f_;
else if(n==='ceylon.collection::IdentityMap.length')return o.$1dkeuw$22g_;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentityMap.hashtable')o.$1dkeuw$22d_=i;
else if(n==='ceylon.collection::IdentityMap.store')o.$1dkeuw$22f_=i;
else if(n==='ceylon.collection::IdentityMap.length')o.$1dkeuw$22g_=i;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$22d)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$22f)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$22g))];
};
function HashSet$$c($$targs$$,hashSet$){
m$1.set_type_args(hashSet$,$$targs$$);
MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
}
function HashSet(){return HashSet$c_$c$.apply(undefined,arguments);}
function HashSet$c_$c$$$a($25v,$25w,$25x,$$targs$$,hashSet$){
if($25v===undefined){$25v=linked();}
if($25w===undefined){$25w=Hashtable();}
if($25x===undefined){$25x=m$1.empty();}
hashSet$.$1dkeuw$25y_=null;
hashSet$.$1dkeuw$25z_=null;
hashSet$.$1dkeuw$260_=$25v;
m$1.atr$(hashSet$,'$1dkeuw$260',function(){return this.$1dkeuw$260_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$261_=$25w;
m$1.atr$(hashSet$,'$1dkeuw$261',function(){return this.$1dkeuw$261_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$262_=$25x;
m$1.atr$(hashSet$,'$1dkeuw$262',function(){return this.$1dkeuw$262_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
hashSet$.$1dkeuw$263_=(0);
m$1.atr$(hashSet$,'$1dkeuw$263',function(){return this.$1dkeuw$263_;},function($264){return this.$1dkeuw$263_=$264;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
hashSet$.$1dkeuw$265_=m$1.is$($25x,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashSet$,'$1dkeuw$265',function(){return this.$1dkeuw$265_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
var $266=($267=(hashSet$.$1dkeuw$265?$25w.initialCapacityForSize($25x.size):null),m$1.nn$($267)?$267:$25w.initialCapacityForUnknownSize());
$prop$get$266={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,d:['ceylon.collection','HashSet','$cn','$def','$at','initialCapacity$l7lsqi']};}};
$prop$get$266.get=function(){return $266};
var $267;
hashSet$.$1dkeuw$268_=cachingElementStore($266,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$268',function(){return this.$1dkeuw$268_;},function($269){return this.$1dkeuw$268_=$269;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
return hashSet$;
};
function HashSet$c_$c$($25v,$25w,$25x,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($25v===undefined){$25v=linked();}
if($25w===undefined){$25w=Hashtable();}
if($25x===undefined){$25x=m$1.empty();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_$c$$$a($25v,$25w,$25x,$$targs$$,hashSet$);
var $26b;for(var $26a=hashSet$.$1dkeuw$262.iterator();($26b=$26a.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$26c(hashSet$.$1dkeuw$268,$26b)){
($26d=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$26d.successor,$26d);
var $26d;
}
}
if(!hashSet$.$1dkeuw$265){
hashSet$.$1dkeuw$26e();
}
return hashSet$;
};
HashSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def')];},d:['ceylon.collection','HashSet','$cn','$def']};};
HashSet.HashSet$c_$c$=HashSet$c_$c$;
ex$.HashSet$c_$c$=HashSet$c_$c$;
function HashSet$c_copy$$a($26f,$26g,$26h,$$targs$$,hashSet$){
if($26g===undefined){$26g=$26f.$1dkeuw$260;}
if($26h===undefined){$26h=Hashtable();}
hashSet$.$1dkeuw$25y_=null;
hashSet$.$1dkeuw$25z_=null;
hashSet$.$1dkeuw$260_=$26g;
m$1.atr$(hashSet$,'$1dkeuw$260',function(){return this.$1dkeuw$260_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$261_=$26h;
m$1.atr$(hashSet$,'$1dkeuw$261',function(){return this.$1dkeuw$261_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$265_=true;
m$1.atr$(hashSet$,'$1dkeuw$265',function(){return this.$1dkeuw$265_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$268_=cachingElementStore($26f.$1dkeuw$268.size,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$268',function(){return this.$1dkeuw$268_;},function($26i){return this.$1dkeuw$268_=$26i;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
if(m$1.$eq$($26g,unlinked())){
hashSet$.$1dkeuw$262_=m$1.empty();
hashSet$.$1dkeuw$263=$26f.$1dkeuw$263;
var $26j=(0);
$prop$get$26j={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1024,d:['ceylon.collection','HashSet','$cn','copy','$at','index$fnnc8k']};}};
$prop$get$26j.get=function(){return $26j};
while(($26j<$26f.$1dkeuw$268.size)){
var $26k;
if(m$1.nn$(($26k=$26f.$1dkeuw$268.$_get($26j)))){
($26l=$26k.clone(),hashSet$.$1dkeuw$268.set($26j,$26l), $26l);
var $26l;
}
($26m=$26j,$26j=$26m.successor,$26m);
var $26m;
}
}
else{
hashSet$.$1dkeuw$263=(0);
hashSet$.$1dkeuw$262_=$26f;
}
return hashSet$;
};
function HashSet$c_copy($26f,$26g,$26h,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($26g===undefined){$26g=$26f.$1dkeuw$260;}
if($26h===undefined){$26h=Hashtable();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_copy$$a($26f,$26g,$26h,$$targs$$,hashSet$);
var $26b;for(var $26n=hashSet$.$1dkeuw$262.iterator();($26b=$26n.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$26c(hashSet$.$1dkeuw$268,$26b)){
($26o=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$26o.successor,$26o);
var $26o;
}
}
if(!hashSet$.$1dkeuw$265){
hashSet$.$1dkeuw$26e();
}
return hashSet$;
};
HashSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashSet',mt:'prm',$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},an:function(){return[m$1.doc("The `HashSet` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy:$at:stability$y8xjx2')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy')];},d:['ceylon.collection','HashSet','$cn','copy']};};
HashSet.HashSet$c_copy=HashSet$c_copy;
ex$.HashSet$c_copy=HashSet$c_copy;
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
if(HashSet.$$===undefined){
m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
(function(hashSet$){
m$1.atr$(hashSet$,'$1dkeuw$260',function(){return this.$1dkeuw$260_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
m$1.atr$(hashSet$,'$1dkeuw$261',function(){return this.$1dkeuw$261_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
m$1.atr$(hashSet$,'$1dkeuw$268',function(){return this.$1dkeuw$268_;},function($26p){return this.$1dkeuw$268_=$26p;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
m$1.atr$(hashSet$,'$1dkeuw$262',function(){return this.$1dkeuw$262_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
m$1.atr$(hashSet$,'$1dkeuw$263',function(){return this.$1dkeuw$263_;},function($26q){return this.$1dkeuw$263_=$26q;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
m$1.atr$(hashSet$,'$1dkeuw$25y',function(){return this.$1dkeuw$25y_;},function($26r){return this.$1dkeuw$25y_=$26r;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
m$1.atr$(hashSet$,'$1dkeuw$25z',function(){return this.$1dkeuw$25z_;},function($26s){return this.$1dkeuw$25z_=$26s;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
m$1.atr$(hashSet$,'$1dkeuw$265',function(){return this.$1dkeuw$265_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$26t=function($26u){var hashSet$=this;
return function(){var $26v=$26u.hash;return $26v.xor($26v.rightLogicalShift(16));
}();
};
hashSet$.$1dkeuw$26t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','hashCode$6dtk7f']};};
hashSet$.$1dkeuw$26w=function($26x,$26y){var hashSet$=this;
return $26x.and(($26y.size-(1)));
};
hashSet$.$1dkeuw$26w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
hashSet$.$1dkeuw$26z=function($270,$271,$272){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$260,linked())){
var $273=LinkedCell($270,$271,$272,hashSet$.$1dkeuw$25z,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
var $274;
if(m$1.nn$(($274=hashSet$.$1dkeuw$25z))){
($274.next=$273);
}
hashSet$.$1dkeuw$25z=$273;
if(!m$1.nn$(hashSet$.$1dkeuw$25y)){
hashSet$.$1dkeuw$25y=$273;
}
return $273;
}
else{
return CachingCell($270,$271,$272,{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet});
}
};hashSet$.$1dkeuw$26z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
hashSet$.$1dkeuw$275=function($276){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$260,linked())){
var $277;
m$1.asrt$2("",'166:12-166:48','HashSet.ceylon',[m$1.is$(($277=$276),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}}),'is LinkedCell<Element> cell']);
var $278;
if(m$1.nn$(($278=$277.previous))){
($278.next=$277.next);
}
else{
hashSet$.$1dkeuw$25y=$277.next;
}
var $279;
if(m$1.nn$(($279=$277.next))){
($279.previous=$277.previous);
}
else{
hashSet$.$1dkeuw$25z=$277.previous;
}
}
};hashSet$.$1dkeuw$275.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
hashSet$.$1dkeuw$26c=function($27a,$27b){
var hashSet$=this;
var $27c=hashSet$.$1dkeuw$26t($27b);
var $27d=hashSet$.$1dkeuw$26w($27c,$27a);
var $27e=$27a.$_get($27d);
var $27f=$27e;
var $27g;
while(m$1.nn$(($27g=$27f))){
if((($27g.keyHash==$27c)&&m$1.$eq$($27g.element,$27b))){
($27g.element=$27b);
return false;
}
$27f=$27g.rest;
}
($27h=hashSet$.$1dkeuw$26z($27b,$27c,$27e),$27a.set($27d,$27h), $27h);
var $27h;
return true;
};hashSet$.$1dkeuw$26c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
hashSet$.$1dkeuw$26e=function(){
var hashSet$=this;
if(hashSet$.$1dkeuw$261.rehash(hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$268.size)){
var $27i=cachingElementStore(hashSet$.$1dkeuw$261.capacity(hashSet$.$1dkeuw$263),{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
var $27j=(0);
while(($27j<hashSet$.$1dkeuw$268.size)){
var $27k=hashSet$.$1dkeuw$268.$_get($27j);
var $27l;
while(m$1.nn$(($27l=$27k))){
$27k=$27l.rest;
var $27m=hashSet$.$1dkeuw$26w($27l.keyHash,$27i);
var $27n=$27i.$_get($27m);
($27l.rest=$27n);
($27o=$27l,$27i.set($27m,$27o), $27o);
var $27o;
}
($27p=$27j,$27j=$27p.successor,$27p);
var $27p;
}
hashSet$.$1dkeuw$268=$27i;
}
};hashSet$.$1dkeuw$26e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
hashSet$.add=function($27q){
var hashSet$=this;
if(hashSet$.$1dkeuw$26c(hashSet$.$1dkeuw$268,$27q)){
($27r=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$27r.successor,$27r);
var $27r;
hashSet$.$1dkeuw$26e();
return true;
}
return false;
};hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
hashSet$.addAll=function($27s){
var hashSet$=this;
var $27t=false;
var $27v;for(var $27u=$27s.iterator();($27v=$27u.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$26c(hashSet$.$1dkeuw$268,$27v)){
($27w=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$27w.successor,$27w);
var $27w;
$27t=true;
}
}
if($27t){
hashSet$.$1dkeuw$26e();
}
return $27t;
};hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
hashSet$.remove=function($27x){
var hashSet$=this;
var $27y=hashSet$.$1dkeuw$26t($27x);
var $27z=hashSet$.$1dkeuw$26w($27y,hashSet$.$1dkeuw$268);
var $280;
if(m$1.nn$(($280=hashSet$.$1dkeuw$268.$_get($27z)))&&m$1.$eq$($280.element,$27x)){
($281=$280.rest,hashSet$.$1dkeuw$268.set($27z,$281), $281);
var $281;
hashSet$.$1dkeuw$275($280);
($282=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$282.predecessor,$282);
var $282;
return true;
}
var $283=hashSet$.$1dkeuw$268.$_get($27z);
var $284;
while(m$1.nn$(($284=$283))){
var $285=$284.rest;
var $286;
if(m$1.nn$(($286=$285))&&($286.keyHash==$27y)&&m$1.$eq$($286.element,$27x)){
($284.rest=$286.rest);
hashSet$.$1dkeuw$275($286);
($287=hashSet$.$1dkeuw$263,hashSet$.$1dkeuw$263=$287.predecessor,$287);
var $287;
return true;
}
else{
$283=$285;
}
}
return false;
};hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
hashSet$.clear=function(){
var hashSet$=this;
var $288=(0);
while(($288<hashSet$.$1dkeuw$268.size)){
($289=null,hashSet$.$1dkeuw$268.set(($28a=$288,$288=$28a.successor,$28a),$289), $289);
var $289,$28a;
}
hashSet$.$1dkeuw$263=(0);
hashSet$.$1dkeuw$25y=null;
hashSet$.$1dkeuw$25z=null;
};hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
m$1.atr$(hashSet$,'size',function(){
var hashSet$=this;
return hashSet$.$1dkeuw$263;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
hashSet$.iterator=function(){var hashSet$=this;
return ($28b=(m$1.$eq$(hashSet$.$1dkeuw$260,linked())?LinkedCellIterator(hashSet$.$1dkeuw$25y,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($28b)?$28b:CachingStoreIterator(hashSet$.$1dkeuw$268,{Element$CachingStoreIterator:hashSet$.$$targs$$.Element$HashSet}));
var $28b;
};hashSet$.count=function($28c){
var hashSet$=this;
var $28d=(0);
var $28e=(0);
while(($28e<hashSet$.$1dkeuw$268.size)){
var $28f=hashSet$.$1dkeuw$268.$_get($28e);
var $28g;
while(m$1.nn$(($28g=$28f))){
if($28c($28g.element)){
($28h=$28d,$28d=$28h.successor,$28h);
var $28h;
}
$28f=$28g.rest;
}
($28i=$28e,$28e=$28i.successor,$28i);
var $28i;
}
return $28d;
};hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:['Element$HashSet']}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
hashSet$.each=function($28j){
var hashSet$=this;
hashSet$.$1dkeuw$268.each(m$1.jsc$2((function($28k){
var $28l=$28k;
$prop$get$28l={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]},$cont:hashSet$.each,pa:1027,d:['ceylon.collection','HashSet','$m','each','$at','iter$e3zwaq']};}};
$prop$get$28l.get=function(){return $28l};
var $28m;
while(m$1.nn$(($28m=$28l))){
$28j($28m.element);
$28l=$28m.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}]}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}])])}));
};hashSet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:['Element$HashSet']}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','each']};};
m$1.atr$(hashSet$,'hash',function(){
var hashSet$=this;
var $28n=(0);
var $28o=(0);
while(($28n<hashSet$.$1dkeuw$268.size)){
var $28p=hashSet$.$1dkeuw$268.$_get($28n);
var $28q;
while(m$1.nn$(($28q=$28p))){
($28o=$28o+$28q.element.hash);
$28p=$28q.rest;
}
($28r=$28n,$28n=$28r.successor,$28r);
var $28r;
}
return $28o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($28s){
var hashSet$=this;
var $28t;
if(m$1.is$(($28t=$28s),{t:HashSet,a:{Element$HashSet:{t:m$1.Anything}}})&&(hashSet$===$28t)){
return true;
}
else{
var $28u;
if(m$1.is$(($28u=$28s),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&($28u.size==hashSet$.$1dkeuw$263)){
var $28v=(0);
while(($28v<hashSet$.$1dkeuw$268.size)){
var $28w=hashSet$.$1dkeuw$268.$_get($28v);
var $28x;
while(m$1.nn$(($28x=$28w))){
if(!m$1.$cnt$2($28x.element,$28u)){
return false;
}
$28w=$28x.rest;
}
($28y=$28v,$28v=$28y.successor,$28y);
var $28y;
}
return true;
}
else{
return false;
}
}
};hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
hashSet$.clone=function(){var hashSet$=this;
return HashSet$c_copy(hashSet$,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
};
hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
hashSet$.contains=function($28z){
var hashSet$=this;
if(hashSet$.empty){
return false;
}
else{
var $290=hashSet$.$1dkeuw$26t($28z);
var $291=hashSet$.$1dkeuw$26w($290,hashSet$.$1dkeuw$268);
var $292=hashSet$.$1dkeuw$268.$_get($291);
var $293;
while(m$1.nn$(($293=$292))){
if((($293.keyHash==$290)&&m$1.$eq$($293.element,$28z))){
return true;
}
$292=$293.rest;
}
return false;
}
};hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
hashSet$.complement=function($294,$4pzcs8$){
var hashSet$=this;
var $295=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
var $297;for(var $296=hashSet$.iterator();($297=$296.next())!==m$1.finished();){
if((!m$1.$cnt$2($297,$294))){
$295.add($297);
}
}
return $295;
};hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
hashSet$.exclusiveUnion=function($298,$rk6eqr$){
var hashSet$=this;
var $299=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$rk6eqr$.Other$exclusiveUnion])});
var $29b;for(var $29a=hashSet$.iterator();($29b=$29a.next())!==m$1.finished();){
if((!m$1.$cnt$2($29b,$298))){
$299.add($29b);
}
}
var $29d;for(var $29c=$298.iterator();($29d=$29c.next())!==m$1.finished();){
if((!m$1.$cnt$2($29d,hashSet$))){
$299.add($29d);
}
}
return $299;
};hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
hashSet$.intersection=function($29e,$4hlnq3$){
var hashSet$=this;
var $29f=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([hashSet$.$$targs$$.Element$HashSet,$4hlnq3$.Other$intersection])});
var $29h;for(var $29g=hashSet$.iterator();($29h=$29g.next())!==m$1.finished();){
var $29i;
if(m$1.$cnt$2($29h,$29e)&&m$1.is$(($29i=$29h),$4hlnq3$.Other$intersection,$4hlnq3$)){
$29f.add($29i);
}
}
return $29f;
};hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
hashSet$.union=function($29j,$hc5war$){
var hashSet$=this;
var $29k=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$hc5war$.Other$union])});
$29k.addAll(hashSet$);
$29k.addAll($29j);
return $29k;
};hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
m$1.atr$(hashSet$,'first',function(){
var hashSet$=this;
return (m$1.$eq$(hashSet$.$1dkeuw$260,linked())?($29m=hashSet$.$1dkeuw$25y,m$1.nn$($29m)?$29m.element:null):($29n=hashSet$.$1dkeuw$268.coalesced.first,m$1.nn$($29n)?$29n.element:null));
var $29m,$29n;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});
m$1.atr$(hashSet$,'last',function(){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$260,linked())){
return ($29o=hashSet$.$1dkeuw$25z,m$1.nn$($29o)?$29o.element:null);
var $29o;
}
else{
var $29p=hashSet$.$1dkeuw$268.reversed.coalesced.first;
var $29q;
while(m$1.nn$(($29q=($29r=$29p,m$1.nn$($29r)?$29r.rest:null)))){
$29p=$29q;
}
var $29r;
return ($29s=$29p,m$1.nn$($29s)?$29s.element:null);
var $29s;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});hashSet$.toString=function(){return this.string.valueOf();};
})(HashSet.$$.prototype);
}
return HashSet;
}
ex$.$init$HashSet=$init$HashSet;$init$HashSet();HashSet.inst$$=function($29t){
var hashSet$=new HashSet.$$;
m$1.set_type_args(hashSet$,{Element$HashSet:$29t.$$targs$$.Type$Class.a.Element$HashSet});
m$1.set_type_args(hashSet$,{Element$MutableSet:hashSet$.$$targs$$.Element$HashSet,Element$Set:hashSet$.$$targs$$.Element$HashSet,Element$Collection:hashSet$.$$targs$$.Element$HashSet,Absent$Iterable:{t:m$1.Null},Element$Iterable:hashSet$.$$targs$$.Element$HashSet,Element$Category:{t:m$1.$_Object},Element$SetMutator:hashSet$.$$targs$$.Element$HashSet});
return hashSet$;
};
HashSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashSet.stability')return o.$1dkeuw$260_;
else if(n==='ceylon.collection::HashSet.hashtable')return o.$1dkeuw$261_;
else if(n==='ceylon.collection::HashSet.store')return o.$1dkeuw$268_;
else if(n==='ceylon.collection::HashSet.length')return o.$1dkeuw$263_;
else if(n==='ceylon.collection::HashSet.head')return o.$1dkeuw$25y_;
else if(n==='ceylon.collection::HashSet.tip')return o.$1dkeuw$25z_;
else throw new TypeError('unknown attribute');
};
HashSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashSet.stability')o.$1dkeuw$260_=i;
else if(n==='ceylon.collection::HashSet.hashtable')o.$1dkeuw$261_=i;
else if(n==='ceylon.collection::HashSet.store')o.$1dkeuw$268_=i;
else if(n==='ceylon.collection::HashSet.length')o.$1dkeuw$263_=i;
else if(n==='ceylon.collection::HashSet.head')o.$1dkeuw$25y_=i;
else if(n==='ceylon.collection::HashSet.tip')o.$1dkeuw$25z_=i;
else throw new TypeError('unknown attribute');
};
HashSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$260)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$261)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$268)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$263)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$25y)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$25z))];
};
function MutableMap($$targs$$,mutableMap$){
m$1.set_type_args(mutableMap$,$$targs$$,MutableMap);
m$1.Map({Key$Map:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key out*/,Item$Map:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item out*/},mutableMap$);
MapMutator({Item$MapMutator:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item in*/,Key$MapMutator:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key in*/},mutableMap$);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}},Item$MutableMap:{def:{t:m$1.Anything}}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Item$MapMutator:'Item$MutableMap',Key$MapMutator:'Key$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
if(MutableMap.$$===undefined){
m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',m$1.Map,$init$MapMutator());
(function(mutableMap$){
mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};mutableMap$.toString=function(){return this.string.valueOf();};
})(MutableMap.$$.prototype);
}
return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
m$1.set_type_args(mapMutator$,$$targs$$,MapMutator);
m$1.KeyedCorrespondenceMutator({Key$KeyedCorrespondenceMutator:$$targs$$.Key$MapMutator,Item$KeyedCorrespondenceMutator:$$targs$$.Item$MapMutator},mapMutator$);
m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}},mapMutator$);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}],def:{t:m$1.$_Object}},Item$MapMutator:{dv:'in',def:{t:m$1.Anything}}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}},{t:m$1.KeyedCorrespondenceMutator,a:{Key$KeyedCorrespondenceMutator:'Key$MapMutator',Item$KeyedCorrespondenceMutator:'Item$MapMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
if(MapMutator.$$===undefined){
m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.KeyedCorrespondenceMutator,m$1.Map);
(function(mapMutator$){
mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($29u){
var mapMutator$=this;
var $29w;for(var $29v=$29u.iterator();($29w=$29v.next())!==m$1.finished();){
var $29x=$29w.key,$29y=$29w.item;
mapMutator$.put($29x,$29y);
}
};mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$MapMutator',Item$Entry:'Item$MapMutator'}}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($29z,$2a0){
var mapMutator$=this;
var $2a1;
if(m$1.nn$(($2a1=mapMutator$.$_get($29z)))&&m$1.$eq$($2a1,$2a0)){
mapMutator$.remove($29z);
return true;
}
else{
return false;
}
};mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
mapMutator$.replaceEntry=function($2a2,$2a3,$2a4){
var mapMutator$=this;
var $2a5;
if(m$1.nn$(($2a5=mapMutator$.$_get($2a2)))&&m$1.$eq$($2a5,$2a3)){
mapMutator$.put($2a2,$2a3);
return true;
}
else{
return false;
}
};mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
mapMutator$.removeAll=function($2a6){
var mapMutator$=this;
var $2a8;for(var $2a7=$2a6.iterator();($2a8=$2a7.next())!==m$1.finished();){
mapMutator$.remove($2a8);
}
};mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$MapMutator'}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};mapMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MapMutator,a:{Item$MapMutator:'Item$MapMutator',Key$MapMutator:'Key$MapMutator'}},ps:[],$cont:MapMutator,pa:7,d:['ceylon.collection','MapMutator','$m','clone']};}};mapMutator$.toString=function(){return this.string.valueOf();};
})(MapMutator.$$.prototype);
}
return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;$init$MapMutator();
function frequencies($2a9,$a5yoou$){
var $2aa=HashMap(undefined,undefined,undefined,{Key$HashMap:$a5yoou$.Element$frequencies,Item$HashMap:{t:Counter}});
var $2ac;for(var $2ab=$2a9.iterator();($2ac=$2ab.next())!==m$1.finished();){
var $2ad;
if(m$1.nn$(($2ad=$2aa.$_get($2ac)))){
($2ae=$2ad,$2af=$2ae.count,$2ae.count=$2af.successor,$2af);
var $2ae,$2af;
}
else{
($2ag=Counter(1),$2aa.put($2ac,$2ag), $2ag);
var $2ag;
}
}
return $2aa.mapItems(m$1.jsc$2((function($2ah,$2ai){return $2ai.count;
}),[{nm:'e',mt:'prm',$t:$a5yoou$.Element$frequencies},{nm:'c',mt:'prm',$t:{t:Counter}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:m$1.Tuple,a:{Rest$Tuple:m$1.mtt$([{t:Counter}]),Element$Tuple:m$1.mut$([$a5yoou$.Element$frequencies,{t:Counter}]),First$Tuple:$a5yoou$.Element$frequencies/*ORALE!Element inv pero First out*/}}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$frequencies'}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
$init$Counter();
if(counter$===undefined)counter$=new Counter.$$;
counter$.count_=count;
return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
ex$.Counter=Counter;
function $init$Counter(){
if(Counter.$$===undefined){
m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
(function(counter$){
m$1.atr$(counter$,'count',function(){return this.count_;},function($2aj){return this.count_=$2aj;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
counter$.toString=function(){return this.string.valueOf();};
})(Counter.$$.prototype);
}
return Counter;
}
ex$.$init$Counter=$init$Counter;$init$Counter();
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
ex$.$pkgunsh$ceylon$collection={'Cell':Cell,'CellIterator':CellIterator,'CachingCell':CachingCell,'CachingCellIterator':CachingCellIterator,'UnmodifiableList':UnmodifiableList,'UnmodifiableMap':UnmodifiableMap,'StoreIterator':StoreIterator,'CachingStoreIterator':CachingStoreIterator,'LinkedCell':LinkedCell,'LinkedCellIterator':LinkedCellIterator,'invert':invert,'measureToSpan':measureToSpan,'spanToMeasure':spanToMeasure,'largest':largest,'smallest':smallest,'maximumCapacity':$prop$getMaximumCapacity,'UnmodifiableSet':UnmodifiableSet,'entryStore':entryStore,'elementStore':elementStore,'cachingEntryStore':cachingEntryStore,'cachingElementStore':cachingElementStore,'Counter':Counter};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
