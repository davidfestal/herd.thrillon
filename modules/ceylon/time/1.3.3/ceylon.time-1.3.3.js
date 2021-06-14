(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/time/1.3.3/ceylon.time-1.3.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/time/1.3.3/ceylon.time-1.3.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.3/ceylon.language-1.3.3');
m$1.$addmod$(m$1,'ceylon.language/1.3.3');
m$1.$addmod$(ex$,'ceylon.time/1.3.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String}))];};
function DateTimeRange(from,to,step,dateTimeRange$){
$init$DateTimeRange();
if(dateTimeRange$===undefined)dateTimeRange$=new DateTimeRange.$$;
dateTimeRange$.$wgb6s9$639_=from;
dateTimeRange$.$wgb6s9$63a_=to;
if(step===undefined){step=$init$DateTimeRange().$defs$step(dateTimeRange$,from,to);}
dateTimeRange$.$wgb6s9$63b_=step;
Range$base({StepBy$Range:m$1.mut$([{t:UnitOfDate$base},{t:UnitOfTime$base}]),Element$Range:{t:DateTime}},dateTimeRange$);
return dateTimeRange$;
}
DateTimeRange.$defs$step=function(dateTimeRange$,from,to){return milliseconds$base()};DateTimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:DateTime},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange')];},d:['ceylon.time','DateTimeRange']};};
ex$.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
if(DateTimeRange.$$===undefined){
m$1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',m$1.Basic,$init$Range$base());
(function(dateTimeRange$){
m$1.atr$(dateTimeRange$,'from',function(){return this.$wgb6s9$639_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:from')];},d:['ceylon.time','DateTimeRange','$at','from']};});
m$1.atr$(dateTimeRange$,'to',function(){return this.$wgb6s9$63a_;},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:to')];},d:['ceylon.time','DateTimeRange','$at','to']};});
m$1.atr$(dateTimeRange$,'step',function(){return this.$wgb6s9$63b_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:step')];},d:['ceylon.time','DateTimeRange','$at','step']};});
m$1.atr$(dateTimeRange$,'period',function(){
var dateTimeRange$=this;
return dateTimeRange$.from.periodTo(dateTimeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:period')];},d:['ceylon.time','DateTimeRange','$at','period']};});
m$1.atr$(dateTimeRange$,'duration',function(){
var dateTimeRange$=this;
return Duration((dateTimeRange$.to.instant().millisecondsOfEpoch-dateTimeRange$.from.instant().millisecondsOfEpoch));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:duration')];},d:['ceylon.time','DateTimeRange','$at','duration']};});
dateTimeRange$.equals=function($63e){var dateTimeRange$=this;
return dateTimeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateTimeRange$,$63e);
};
dateTimeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:equals')];},d:['ceylon.time','DateTimeRange','$m','equals']};};
m$1.atr$(dateTimeRange$,'hash',function(){
var dateTimeRange$=this;
return m$1.attrGetter(dateTimeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$at:hash')];},d:['ceylon.time','DateTimeRange','$at','hash']};});
dateTimeRange$.overlap=function($63g){
var dateTimeRange$=this;
var $63h=overlap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$63g.from,$63g.to]),{Value$overlap:{t:DateTime}});
var $63i;
if(m$1.is$(($63i=$63h),m$1.mtt$([{t:DateTime},{t:DateTime}]))){
return DateTimeRange(($63j=$63i,$63j.$_get(0)),$63j.$_get(1),m$1.nn$($63j.$_get(2))?$63j.$_get(2):undefined);
}
else{
return $63i;
}
};dateTimeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:overlap')];},d:['ceylon.time','DateTimeRange','$m','overlap']};};
dateTimeRange$.gap=function($63k){
var dateTimeRange$=this;
var $63l=gap$internal(m$1.tpl$([dateTimeRange$.from,dateTimeRange$.to]),m$1.tpl$([$63k.from,$63k.to]),{Value$gap:{t:DateTime}});
var $63m=$63l;
if(m$1.is$($63m,m$1.mtt$([{t:DateTime},{t:DateTime}]))) {
return ($63n=($63m.$_get(0).successor.smallerThan($63m.$_get(1))?DateTimeRange($63m.$_get(0).successor,$63m.$_get(1).predecessor):null),m$1.nn$($63n)?$63n:m$1.empty());
var $63n;
}
else if(m$1.is$($63m,{t:m$1.Empty})) {
return $63m;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateTimeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element$Range:{t:DateTime}}}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:gap')];},d:['ceylon.time','DateTimeRange','$m','gap']};};
dateTimeRange$.iterator=function(){
var dateTimeRange$=this;
function $63o($$targs$$){
var $63o$=new $63o.$$;$63o$.outer$=dateTimeRange$;
$63o$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:DateTime}},$63o$);
$63o$.$wgb6s9$63q_=(0);
$63o$.$prop$get$wgb6s9$63q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$63o,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};}};
$63o$.$prop$get$wgb6s9$63q.get=function(){return $wgb6s9$63q};
return $63o$;
};$63o.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateTimeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}}],d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg']};};
function $init$$63o(){
if($63o.$$===undefined){
m$1.initTypeProto($63o,'ceylon.time::DateTimeRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($63o$){
m$1.atr$($63o$,'$wgb6s9$63q',function(){return this.$wgb6s9$63q_;},function($63r){return this.$wgb6s9$63q_=$63r;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$63o,pa:1024,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$at','count$xwt382']};});
$63o$.next=function(){
var $63o$=this;
var $63s=($63t=(dateTimeRange$.from.largerThan(dateTimeRange$.to)?dateTimeRange$.$wgb6s9$63u(($63v=$63o$.$wgb6s9$63q,$63o$.$wgb6s9$63q=$63v.successor,$63v)):null),m$1.nn$($63t)?$63t:dateTimeRange$.$wgb6s9$63w(($63x=$63o$.$wgb6s9$63q,$63o$.$wgb6s9$63q=$63x.successor,$63x)));
var $63t,$63v,$63x;
var $63y=($63z=(dateTimeRange$.from.notLargerThan(dateTimeRange$.to)?$63s.notLargerThan(dateTimeRange$.to):null),m$1.nn$($63z)?$63z:$63s.notSmallerThan(dateTimeRange$.to));
var $63z;
return ($640=($63y?$63s:null),m$1.nn$($640)?$640:m$1.finished());
var $640;
};$63o$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateTime},{t:m$1.Finished}]},ps:[],$cont:$63o,pa:3,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkg','$m','next']};};
$63o$.toString=function(){return this.string.valueOf();};
})($63o.$$.prototype);
}
return $63o;
}
dateTimeRange$.$init$$63o=$init$$63o;$init$$63o();var $641;
function $63p(){
if($641===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'122:8-129:8','DateTimeRange.ceylon');
if($641===undefined){$641=m$1.INIT$;$641=$init$$63o()({Element$Iterator:{t:DateTime}});$641.$crtmm$=$63p.$crtmm$;}
return $641;
}
$63p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$63o()},$cont:dateTimeRange$.iterator,d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator$tg8jkh']};};
$prop$get$63o=$63p;
$63p();
return $63p();
};dateTimeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:DateTime}}},ps:[],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:iterator')];},d:['ceylon.time','DateTimeRange','$m','iterator']};};
dateTimeRange$.stepBy=function($642){
var dateTimeRange$=this;
return ($643=(m$1.$eq$($642,dateTimeRange$.step)?dateTimeRange$:null),m$1.nn$($643)?$643:DateTimeRange(dateTimeRange$.from,dateTimeRange$.to,$642));
var $643;
};dateTimeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'step',mt:'prm',$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]}}],$cont:DateTimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:stepBy')];},d:['ceylon.time','DateTimeRange','$m','stepBy']};};
dateTimeRange$.$wgb6s9$63w$defs$jump=function($644){return 1;};
dateTimeRange$.$wgb6s9$63w=function($644){
var dateTimeRange$=this;
if($644===undefined){$644=(1);}
var $645;
if(m$1.is$(($645=dateTimeRange$.step),{t:UnitOfDate$base})){
var $646=$645;
if(m$1.is$($646,{t:UnitOfYear$base})) {
return dateTimeRange$.from.plusYears($644);
}
else if(m$1.is$($646,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.plusMonths($644);
}
else if(m$1.is$($646,{t:UnitOfDay$base})) {
return dateTimeRange$.from.plusDays($644);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $647=$645;
if(m$1.is$($647,{t:UnitOfHour$base})) {
return dateTimeRange$.from.plusHours($644);
}
else if(m$1.is$($647,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.plusMinutes($644);
}
else if(m$1.is$($647,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.plusSeconds($644);
}
else if(m$1.is$($647,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.plusMilliseconds($644);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};dateTimeRange$.$wgb6s9$63w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:nextByStep$cusa3f')];},d:['ceylon.time','DateTimeRange','$m','nextByStep$cusa3f']};};
dateTimeRange$.$wgb6s9$63u$defs$jump=function($648){return 1;};
dateTimeRange$.$wgb6s9$63u=function($648){
var dateTimeRange$=this;
if($648===undefined){$648=(1);}
var $649;
if(m$1.is$(($649=dateTimeRange$.step),{t:UnitOfDate$base})){
var $64a=$649;
if(m$1.is$($64a,{t:UnitOfYear$base})) {
return dateTimeRange$.from.minusYears($648);
}
else if(m$1.is$($64a,{t:UnitOfMonth$base})) {
return dateTimeRange$.from.minusMonths($648);
}
else if(m$1.is$($64a,{t:UnitOfDay$base})) {
return dateTimeRange$.from.minusDays($648);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
else{
var $64b=$649;
if(m$1.is$($64b,{t:UnitOfHour$base})) {
return dateTimeRange$.from.minusHours($648);
}
else if(m$1.is$($64b,{t:UnitOfMinute$base})) {
return dateTimeRange$.from.minusMinutes($648);
}
else if(m$1.is$($64b,{t:UnitOfSecond$base})) {
return dateTimeRange$.from.minusSeconds($648);
}
else if(m$1.is$($64b,{t:UnitOfMillisecond$base})) {
return dateTimeRange$.from.minusMilliseconds($648);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
};dateTimeRange$.$wgb6s9$63u.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateTimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTimeRange:$m:previousByStep$o49bcn')];},d:['ceylon.time','DateTimeRange','$m','previousByStep$o49bcn']};};
dateTimeRange$.toString=function(){return this.string.valueOf();};
})(DateTimeRange.$$.prototype);
}
return DateTimeRange;
}
ex$.$init$DateTimeRange=$init$DateTimeRange;$init$DateTimeRange();DateTimeRange.inst$$=function($64c){
var dateTimeRange$=new DateTimeRange.$$;
m$1.set_type_args(dateTimeRange$,{StepBy$Range:m$1.mut$([{t:UnitOfDate$base},{t:UnitOfTime$base}]),Element$Range:{t:DateTime},Element$Iterable:{t:DateTime},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return dateTimeRange$;
};
DateTimeRange.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::DateTimeRange.from')return o.from_;
else if(n==='ceylon.time::DateTimeRange.to')return o.to_;
else if(n==='ceylon.time::DateTimeRange.step')return o.step_;
else throw new TypeError('unknown attribute');
};
DateTimeRange.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::DateTimeRange.from')o.from_=i;
else if(n==='ceylon.time::DateTimeRange.to')o.to_=i;
else if(n==='ceylon.time::DateTimeRange.step')o.step_=i;
else throw new TypeError('unknown attribute');
};
DateTimeRange.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getFrom)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getTo)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getStep))];
};
function Duration(milliseconds,duration$){
$init$Duration();
if(duration$===undefined)duration$=new Duration.$$;
duration$.$wgb6s9$64d_=milliseconds;
ReadableDuration$base(duration$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}},duration$);
return duration$;
}
Duration.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];}}],sts:[{t:ReadableDuration$base},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration')];},d:['ceylon.time','Duration']};};
ex$.Duration=Duration;
function $init$Duration(){
if(Duration.$$===undefined){
m$1.initTypeProto(Duration,'ceylon.time::Duration',m$1.Basic,$init$ReadableDuration$base(),m$1.Scalable);
(function(duration$){
m$1.atr$(duration$,'milliseconds',function(){return this.$wgb6s9$64d_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:milliseconds')];},d:['ceylon.time','Duration','$at','milliseconds']};});
m$1.atr$(duration$,'period',function(){
var duration$=this;
return ($64e=duration$.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,$64e));
var $64e;
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Duration,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:period')];},d:['ceylon.time','Duration','$at','period']};});
m$1.atr$(duration$,'string',function(){
var duration$=this;
return (duration$.milliseconds.string+"ms");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:string')];},d:['ceylon.time','Duration','$at','string']};});
duration$.equals=function($64g){
var duration$=this;
var $64h;
if(m$1.is$(($64h=$64g),{t:Duration})){
return (duration$.milliseconds==$64h.milliseconds);
}
function $64i(){return $64g;}
return false;
};duration$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:equals')];},d:['ceylon.time','Duration','$m','equals']};};
m$1.atr$(duration$,'hash',function(){
var duration$=this;
var $64j=(11);
var $64k=(3);
return (($64j*$64k)+duration$.milliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$at:hash')];},d:['ceylon.time','Duration','$at','hash']};});duration$.scale=function($64l){var duration$=this;
return Duration(($64l*duration$.milliseconds));
};
duration$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Duration,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Duration:$m:scale')];},d:['ceylon.time','Duration','$m','scale']};};
duration$.toString=function(){return this.string.valueOf();};
})(Duration.$$.prototype);
}
return Duration;
}
ex$.$init$Duration=$init$Duration;$init$Duration();Duration.inst$$=function($64m){
var duration$=new Duration.$$;
m$1.set_type_args(duration$,{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Duration}});
return duration$;
};
Duration.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::Duration.milliseconds')return o.milliseconds_;
else throw new TypeError('unknown attribute');
};
Duration.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::Duration.milliseconds')o.milliseconds_=i;
else throw new TypeError('unknown attribute');
};
Duration.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getMilliseconds))];
};
function TimeRange(from,to,step,timeRange$){
$init$TimeRange();
if(timeRange$===undefined)timeRange$=new TimeRange.$$;
timeRange$.$wgb6s9$64n_=from;
timeRange$.$wgb6s9$64o_=to;
if(step===undefined){step=$init$TimeRange().$defs$step(timeRange$,from,to);}
timeRange$.$wgb6s9$64p_=step;
Range$base({StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}},timeRange$);
return timeRange$;
}
TimeRange.$defs$step=function(timeRange$,from,to){return milliseconds$base()};TimeRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfTime$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time','TimeRange']};};
ex$.TimeRange=TimeRange;
function $init$TimeRange(){
if(TimeRange.$$===undefined){
m$1.initTypeProto(TimeRange,'ceylon.time::TimeRange',m$1.Basic,$init$Range$base());
(function(timeRange$){
m$1.atr$(timeRange$,'from',function(){return this.$wgb6s9$64n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:from')];},d:['ceylon.time','TimeRange','$at','from']};});
m$1.atr$(timeRange$,'to',function(){return this.$wgb6s9$64o_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:to')];},d:['ceylon.time','TimeRange','$at','to']};});
m$1.atr$(timeRange$,'step',function(){return this.$wgb6s9$64p_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfTime$base},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:step')];},d:['ceylon.time','TimeRange','$at','step']};});
m$1.atr$(timeRange$,'period',function(){
var timeRange$=this;
return timeRange$.from.periodTo(timeRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:period')];},d:['ceylon.time','TimeRange','$at','period']};});
m$1.atr$(timeRange$,'duration',function(){
var timeRange$=this;
return Duration((timeRange$.to.millisecondsOfDay-timeRange$.from.millisecondsOfDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:duration')];},d:['ceylon.time','TimeRange','$at','duration']};});
timeRange$.equals=function($64s){var timeRange$=this;
return timeRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(timeRange$,$64s);
};
timeRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:equals')];},d:['ceylon.time','TimeRange','$m','equals']};};
m$1.atr$(timeRange$,'hash',function(){
var timeRange$=this;
return m$1.attrGetter(timeRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$at:hash')];},d:['ceylon.time','TimeRange','$at','hash']};});
timeRange$.overlap=function($64u){
var timeRange$=this;
var $64v=overlap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$64u.from,$64u.to]),{Value$overlap:{t:Time}});
var $64w;
if(m$1.is$(($64w=$64v),m$1.mtt$([{t:Time},{t:Time}]))){
return TimeRange($64w.$_get(0),$64w.$_get(1));
}
else{
return $64w;
}
};timeRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:overlap')];},d:['ceylon.time','TimeRange','$m','overlap']};};
timeRange$.gap=function($64x){
var timeRange$=this;
var $64y=gap$internal(m$1.tpl$([timeRange$.from,timeRange$.to]),m$1.tpl$([$64x.from,$64x.to]),{Value$gap:{t:Time}});
var $64z=$64y;
if(m$1.is$($64z,m$1.mtt$([{t:Time},{t:Time}]))) {
return ($650=($64z.$_get(0).successor.smallerThan($64z.$_get(1))?TimeRange($64z.$_get(0).successor,$64z.$_get(1).predecessor):null),m$1.nn$($650)?$650:m$1.empty());
var $650;
}
else if(m$1.is$($64z,{t:m$1.Empty})) {
return $64z;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TimeRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time}}}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:gap')];},d:['ceylon.time','TimeRange','$m','gap']};};
timeRange$.iterator=function(){
var timeRange$=this;
function $651($$targs$$){
var $651$=new $651.$$;$651$.outer$=timeRange$;
$651$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:Time}},$651$);
$651$.$wgb6s9$653_=(0);
$651$.$prop$get$wgb6s9$653={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$651,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};}};
$651$.$prop$get$wgb6s9$653.get=function(){return $wgb6s9$653};
return $651$;
};$651.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:timeRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}}],d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha']};};
function $init$$651(){
if($651.$$===undefined){
m$1.initTypeProto($651,'ceylon.time::TimeRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($651$){
m$1.atr$($651$,'$wgb6s9$653',function(){return this.$wgb6s9$653_;},function($654){return this.$wgb6s9$653_=$654;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$651,pa:1024,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$at','count$dw3q34']};});
$651$.next=function(){
var $651$=this;
var $655=($656=(timeRange$.from.largerThan(timeRange$.to)?timeRange$.$wgb6s9$657(($658=$651$.$wgb6s9$653,$651$.$wgb6s9$653=$658.successor,$658)):null),m$1.nn$($656)?$656:timeRange$.$wgb6s9$659(($65a=$651$.$wgb6s9$653,$651$.$wgb6s9$653=$65a.successor,$65a)));
var $656,$658,$65a;
var $65b=($65c=(timeRange$.from.notLargerThan(timeRange$.to)?$655.notLargerThan(timeRange$.to):null),m$1.nn$($65c)?$65c:($655.notSmallerThan(timeRange$.to)&&$655.notLargerThan(timeRange$.from)));
var $65c;
return ($65d=($65b?$655:null),m$1.nn$($65d)?$65d:m$1.finished());
var $65d;
};$651$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Time},{t:m$1.Finished}]},ps:[],$cont:$651,pa:3,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwha','$m','next']};};
$651$.toString=function(){return this.string.valueOf();};
})($651.$$.prototype);
}
return $651;
}
timeRange$.$init$$651=$init$$651;$init$$651();var $65e;
function $652(){
if($65e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'121:8-128:8','TimeRange.ceylon');
if($65e===undefined){$65e=m$1.INIT$;$65e=$init$$651()({Element$Iterator:{t:Time}});$65e.$crtmm$=$652.$crtmm$;}
return $65e;
}
$652.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$651()},$cont:timeRange$.iterator,d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator$itbwhb']};};
$prop$get$651=$652;
$652();
return $652();
};timeRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:Time}}},ps:[],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:iterator')];},d:['ceylon.time','TimeRange','$m','iterator']};};
timeRange$.stepBy=function($65f){
var timeRange$=this;
return ($65g=(m$1.$eq$($65f,timeRange$.step)?timeRange$:null),m$1.nn$($65g)?$65g:TimeRange(timeRange$.from,timeRange$.to,$65f));
var $65g;
};timeRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfTime$base}}],$cont:TimeRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:stepBy')];},d:['ceylon.time','TimeRange','$m','stepBy']};};
timeRange$.$wgb6s9$659$defs$jump=function($65h){return 1;};
timeRange$.$wgb6s9$659=function($65h){
var timeRange$=this;
if($65h===undefined){$65h=(1);}
var $65i=timeRange$.step;
if(m$1.is$($65i,{t:UnitOfHour$base})) {
return timeRange$.from.plusHours($65h);
}
else if(m$1.is$($65i,{t:UnitOfMinute$base})) {
return timeRange$.from.plusMinutes($65h);
}
else if(m$1.is$($65i,{t:UnitOfSecond$base})) {
return timeRange$.from.plusSeconds($65h);
}
else if(m$1.is$($65i,{t:UnitOfMillisecond$base})) {
return timeRange$.from.plusMilliseconds($65h);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.$wgb6s9$659.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:nextByStep$9cla77')];},d:['ceylon.time','TimeRange','$m','nextByStep$9cla77']};};
timeRange$.$wgb6s9$657$defs$jump=function($65j){return 1;};
timeRange$.$wgb6s9$657=function($65j){
var timeRange$=this;
if($65j===undefined){$65j=(1);}
var $65k=timeRange$.step;
if(m$1.is$($65k,{t:UnitOfHour$base})) {
return timeRange$.from.minusHours($65j);
}
else if(m$1.is$($65k,{t:UnitOfMinute$base})) {
return timeRange$.from.minusMinutes($65j);
}
else if(m$1.is$($65k,{t:UnitOfSecond$base})) {
return timeRange$.from.minusSeconds($65j);
}
else if(m$1.is$($65k,{t:UnitOfMillisecond$base})) {
return timeRange$.from.minusMilliseconds($65j);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};timeRange$.$wgb6s9$657.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:TimeRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:TimeRange:$m:previousByStep$1wvr21')];},d:['ceylon.time','TimeRange','$m','previousByStep$1wvr21']};};
timeRange$.toString=function(){return this.string.valueOf();};
})(TimeRange.$$.prototype);
}
return TimeRange;
}
ex$.$init$TimeRange=$init$TimeRange;$init$TimeRange();TimeRange.inst$$=function($65l){
var timeRange$=new TimeRange.$$;
m$1.set_type_args(timeRange$,{StepBy$Range:{t:UnitOfTime$base},Element$Range:{t:Time},Element$Iterable:{t:Time},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return timeRange$;
};
TimeRange.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::TimeRange.from')return o.from_;
else if(n==='ceylon.time::TimeRange.to')return o.to_;
else if(n==='ceylon.time::TimeRange.step')return o.step_;
else throw new TypeError('unknown attribute');
};
TimeRange.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::TimeRange.from')o.from_=i;
else if(n==='ceylon.time::TimeRange.to')o.to_=i;
else if(n==='ceylon.time::TimeRange.step')o.step_=i;
else throw new TypeError('unknown attribute');
};
TimeRange.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getFrom)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getTo)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getStep))];
};
function DateTime(dateTime$){
ReadableDateTime$base(dateTime$);
DateTimeBehavior$base({Element$DateTimeBehavior:{t:DateTime},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}},dateTime$);
m$1.Ordinal({Other$Ordinal:{t:DateTime}},dateTime$);
m$1.Enumerable({Other$Enumerable:{t:DateTime}},dateTime$);
m$1.Comparable({Other$Comparable:{t:DateTime}},dateTime$);
dateTime$.instant$defs$timeZone=function($65m){return timeZone$timezone().system;};
}
DateTime.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDateTime$base},{t:DateTimeBehavior$base,a:{Element$DateTimeBehavior:{t:DateTime},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:DateTime}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DateTime}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DateTime}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime')];},d:['ceylon.time','DateTime']};};
ex$.DateTime=DateTime;
function $init$DateTime(){
if(DateTime.$$===undefined){
m$1.initTypeProtoI(DateTime,'ceylon.time::DateTime',$init$ReadableDateTime$base(),$init$DateTimeBehavior$base(),m$1.Ordinal,m$1.Enumerable,m$1.Comparable);
(function(dateTime$){
dateTime$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:plus')];},d:['ceylon.time','DateTime','$m','plus']};}};dateTime$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'period',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:minus')];},d:['ceylon.time','DateTime','$m','minus']};}};dateTime$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodFrom')];},d:['ceylon.time','DateTime','$m','periodFrom']};}};dateTime$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:periodTo')];},d:['ceylon.time','DateTime','$m','periodTo']};}};dateTime$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:rangeTo')];},d:['ceylon.time','DateTime','$m','rangeTo']};}};dateTime$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:DateTime,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:instant')];},d:['ceylon.time','DateTime','$m','instant']};}};dateTime$.equals=function($65n){
var dateTime$=this;
var $65o;
if(m$1.is$(($65o=$65n),{t:DateTime})){
return (m$1.$eq$(dateTime$.date,$65o.date)&&m$1.$eq$(dateTime$.time,$65o.time));
}
function $65p(){return $65n;}
return false;
};dateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateTime,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$m:equals')];},d:['ceylon.time','DateTime','$m','equals']};};
m$1.atr$(dateTime$,'hash',function(){
var dateTime$=this;
var $65q=(31);
var $65r=(11);
$65r=(($65q*$65r)+dateTime$.date.hash);
$65r=(($65q*$65r)+dateTime$.time.hash);
return $65r;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateTime,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateTime:$at:hash')];},d:['ceylon.time','DateTime','$at','hash']};});dateTime$.toString=function(){return this.string.valueOf();};
})(DateTime.$$.prototype);
}
return DateTime;
}
ex$.$init$DateTime=$init$DateTime;$init$DateTime();
function dateTime$defs$hours($65s,$65t,$65u,$65v,$65w,$65x,$65y){return 0;};
function dateTime$defs$minutes($65s,$65t,$65u,$65v,$65w,$65x,$65y){return 0;};
function dateTime$defs$seconds($65s,$65t,$65u,$65v,$65w,$65x,$65y){return 0;};
function dateTime$defs$milliseconds($65s,$65t,$65u,$65v,$65w,$65x,$65y){return 0;};
function dateTime($65s,$65t,$65u,$65v,$65w,$65x,$65y){if($65v===undefined){$65v=(0);}
if($65w===undefined){$65w=(0);}
if($65x===undefined){$65x=(0);}
if($65y===undefined){$65y=(0);}
return ($65z=date($65s,$65t,$65u),$660=time($65v,$65w,$65x,$65y),GregorianDateTime$internal($65z,$660));
var $65z,$660;
};
dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:dateTime')];},d:['ceylon.time','dateTime']};};
ex$.dateTime=dateTime;
function YearMonth(yearMonth$){
ReadableYear$base(yearMonth$);
ReadableMonth$base(yearMonth$);
YearBehavior$base({Element$YearBehavior:{t:YearMonth}},yearMonth$);
MonthBehavior$base({Element$MonthBehavior:{t:YearMonth}},yearMonth$);
m$1.Ordinal({Other$Ordinal:{t:YearMonth}},yearMonth$);
m$1.Comparable({Other$Comparable:{t:YearMonth}},yearMonth$);
m$1.Enumerable({Other$Enumerable:{t:YearMonth}},yearMonth$);
}
YearMonth.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableYear$base},{t:ReadableMonth$base},{t:YearBehavior$base,a:{Element$YearBehavior:{t:YearMonth}}},{t:MonthBehavior$base,a:{Element$MonthBehavior:{t:YearMonth}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:YearMonth}}},{t:m$1.Comparable,a:{Other$Comparable:{t:YearMonth}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:YearMonth}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:YearMonth')];},d:['ceylon.time','YearMonth']};};
ex$.YearMonth=YearMonth;
function $init$YearMonth(){
if(YearMonth.$$===undefined){
m$1.initTypeProtoI(YearMonth,'ceylon.time::YearMonth',$init$ReadableYear$base(),$init$ReadableMonth$base(),$init$YearBehavior$base(),$init$MonthBehavior$base(),m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(yearMonth$){
yearMonth$.equals=function($661){
var yearMonth$=this;
var $662;
if(m$1.is$(($662=$661),{t:YearMonth})){
return ((yearMonth$.year==$662.year)&&m$1.$eq$(yearMonth$.month,$662.month));
}
else{
return false;
}
};yearMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:YearMonth,pa:3,d:['ceylon.time','YearMonth','$m','equals']};};
m$1.atr$(yearMonth$,'hash',function(){
var yearMonth$=this;
var $663=(1);
$663=(((31)*$663)+yearMonth$.year);
$663=(((31)*$663)+yearMonth$.month.hash);
return $663;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:YearMonth,pa:3,d:['ceylon.time','YearMonth','$at','hash']};});yearMonth$.toString=function(){return this.string.valueOf();};
})(YearMonth.$$.prototype);
}
return YearMonth;
}
ex$.$init$YearMonth=$init$YearMonth;$init$YearMonth();
function yearMonth($664,$665){return gregorianYearMonth$internal($664,$665);
};
yearMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:yearMonth')];},d:['ceylon.time','yearMonth']};};
ex$.yearMonth=yearMonth;
function rd$chronology($666){
var $667=(0);
return ($666-$667);
}
ex$.rd$chronology=rd$chronology;
rd$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'t',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:rd')];},d:['ceylon.time.chronology','rd']};};
function $668$chronology(){
var unixTime$=new $668$chronology.$$;unixTime$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$668$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};}};
unixTime$.$prop$getEpoch.get=function(){return epoch};
return unixTime$;
};$668$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.chronology','unixTime']};};
function $init$unixTime$chronology(){
if($668$chronology.$$===undefined){
m$1.initTypeProto($668$chronology,'ceylon.time.chronology::unixTime',m$1.Basic);
(function(unixTime$){
m$1.atr$(unixTime$,'epoch',function(){
var unixTime$=this;
return gregorian$chronology().fixedFrom(m$1.tpl$([1970,1,1]));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$668$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$at:epoch')];},d:['ceylon.time.chronology','unixTime','$at','epoch']};});
unixTime$.fixedFromTime=function($66a){
var unixTime$=this;
return (floorDiv$internal$math($66a,milliseconds$base().perDay)+unixTime$.epoch);
};unixTime$.fixedFromTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$668$chronology,pa:1,an:function(){return[m$1.doc("Returns a _fixed date_ from the _unix time_ value.")];},d:['ceylon.time.chronology','unixTime','$m','fixedFromTime']};};
unixTime$.timeFromFixed=function($66b){
var unixTime$=this;
return (($66b-unixTime$.epoch)*milliseconds$base().perDay);
};unixTime$.timeFromFixed.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$668$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeFromFixed')];},d:['ceylon.time.chronology','unixTime','$m','timeFromFixed']};};
unixTime$.timeOfDay=function($66c){
var unixTime$=this;
return floorMod$internal$math($66c,milliseconds$base().perDay);
};unixTime$.timeOfDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'time',mt:'prm',$t:{t:m$1.Integer}}],$cont:$668$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:unixTime:$m:timeOfDay')];},d:['ceylon.time.chronology','unixTime','$m','timeOfDay']};};
unixTime$.toString=function(){return this.string.valueOf();};
})($668$chronology.$$.prototype);
}
return $668$chronology;
}
ex$.$init$unixTime$chronology=$init$unixTime$chronology;$init$unixTime$chronology();var $66d;
function unixTime$chronology(){
if($66d===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unixTime\' before it was set"),'12:0-32:0','Chronology.ceylon');
if($66d===undefined){$66d=m$1.INIT$;$66d=$init$unixTime$chronology()();$66d.$crtmm$=unixTime$chronology.$crtmm$;}
return $66d;
}
ex$.unixTime$chronology=unixTime$chronology;
unixTime$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unixTime$chronology()},pa:1,an:function(){return[m$1.doc("Common properties of _Unix time_.")];},d:['ceylon.time.chronology','unixTime']};};
$prop$getUnixTime$chronology=unixTime$chronology;
ex$.$prop$getUnixTime$chronology=$prop$getUnixTime$chronology;
function Chronology$chronology($$targs$$,chronology$){
m$1.set_type_args(chronology$,$$targs$$,Chronology$chronology);
}
Chronology$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Fields$Chronology:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology')];},d:['ceylon.time.chronology','Chronology']};};
ex$.Chronology$chronology=Chronology$chronology;
function $init$Chronology$chronology(){
if(Chronology$chronology.$$===undefined){
m$1.initTypeProtoI(Chronology$chronology,'ceylon.time.chronology::Chronology');
(function(chronology$){
chronology$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$at:epoch')];},d:['ceylon.time.chronology','Chronology','$at','epoch']};}};
chronology$.fixedFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:fixedFrom')];},d:['ceylon.time.chronology','Chronology','$m','fixedFrom']};}};chronology$.dateFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Fields$Chronology',ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:Chronology:$m:dateFrom')];},d:['ceylon.time.chronology','Chronology','$m','dateFrom']};}};chronology$.checkDate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:'Fields$Chronology'}],$cont:Chronology$chronology,pa:5,an:function(){return[m$1.doc("Validate the given date.")];},d:['ceylon.time.chronology','Chronology','$m','checkDate']};}};chronology$.toString=function(){return this.string.valueOf();};
})(Chronology$chronology.$$.prototype);
}
return Chronology$chronology;
}
ex$.$init$Chronology$chronology=$init$Chronology$chronology;$init$Chronology$chronology();
function LeapYear$chronology($$targs$$,leapYear$){
m$1.set_type_args(leapYear$,$$targs$$,LeapYear$chronology);
Chronology$chronology({Fields$Chronology:$$targs$$.Fields$LeapYear},leapYear$);
}
LeapYear$chronology.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$LeapYear:{sts:[{t:Chronology$chronology,a:{Fields$Chronology:'Fields$LeapYear'}}]},Fields$LeapYear:{sts:[{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Anything}}}]}},sts:[{t:Chronology$chronology,a:{Fields$Chronology:'Fields$LeapYear'}}],of:['Self$LeapYear'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear')];},d:['ceylon.time.chronology','LeapYear']};};
ex$.LeapYear$chronology=LeapYear$chronology;
function $init$LeapYear$chronology(){
if(LeapYear$chronology.$$===undefined){
m$1.initTypeProtoI(LeapYear$chronology,'ceylon.time.chronology::LeapYear',$init$Chronology$chronology());
(function(leapYear$){
leapYear$.leapYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'leapYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:LeapYear$chronology,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:LeapYear:$m:leapYear')];},d:['ceylon.time.chronology','LeapYear','$m','leapYear']};}};leapYear$.toString=function(){return this.string.valueOf();};
})(LeapYear$chronology.$$.prototype);
}
return LeapYear$chronology;
}
ex$.$init$LeapYear$chronology=$init$LeapYear$chronology;$init$LeapYear$chronology();
function GregorianCalendar$chronology(gregorianCalendar$){
$init$GregorianCalendar$chronology();
if(gregorianCalendar$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.chronology::GregorianCalendar"),'?','?')
Chronology$chronology({Fields$Chronology:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}])},gregorianCalendar$);
LeapYear$chronology({Fields$LeapYear:m$1.mtt$([{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]),Self$LeapYear:{t:GregorianCalendar$chronology}},gregorianCalendar$);
return gregorianCalendar$;
}
GregorianCalendar$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:Chronology$chronology,a:{Fields$Chronology:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}},{t:LeapYear$chronology,a:{Fields$LeapYear:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},Self$LeapYear:{t:GregorianCalendar$chronology}}}],of:[$prop$getGregorian$chronology],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:GregorianCalendar')];},d:['ceylon.time.chronology','GregorianCalendar']};};
ex$.GregorianCalendar$chronology=GregorianCalendar$chronology;
function $init$GregorianCalendar$chronology(){
if(GregorianCalendar$chronology.$$===undefined){
m$1.initTypeProto(GregorianCalendar$chronology,'ceylon.time.chronology::GregorianCalendar',m$1.Basic,$init$Chronology$chronology(),$init$LeapYear$chronology());
(function(gregorianCalendar$){
gregorianCalendar$.toString=function(){return this.string.valueOf();};
})(GregorianCalendar$chronology.$$.prototype);
}
return GregorianCalendar$chronology;
}
ex$.$init$GregorianCalendar$chronology=$init$GregorianCalendar$chronology;$init$GregorianCalendar$chronology();
function $66e$chronology(){
var gregorian$=new $66e$chronology.$$;GregorianCalendar$chronology(gregorian$);
gregorian$.$wgb6s9$66g_=rd$chronology(1);
gregorian$.$prop$getEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};}};
gregorian$.$prop$getEpoch.get=function(){return epoch};
gregorian$.$wgb6s9$66h_=(1);
gregorian$.$prop$getJanuary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};}};
gregorian$.$prop$getJanuary.get=function(){return january};
gregorian$.$wgb6s9$66i_=(2);
gregorian$.$prop$getFebruary={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};}};
gregorian$.$prop$getFebruary.get=function(){return february};
gregorian$.$wgb6s9$66j_=(3);
gregorian$.$prop$getMarch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};}};
gregorian$.$prop$getMarch.get=function(){return march};
gregorian$.$wgb6s9$66k_=(4);
gregorian$.$prop$getApril={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};}};
gregorian$.$prop$getApril.get=function(){return april};
gregorian$.$wgb6s9$66l_=(5);
gregorian$.$prop$getMay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};}};
gregorian$.$prop$getMay.get=function(){return may};
gregorian$.$wgb6s9$66m_=(6);
gregorian$.$prop$getJune={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};}};
gregorian$.$prop$getJune.get=function(){return june};
gregorian$.$wgb6s9$66n_=(7);
gregorian$.$prop$getJuly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};}};
gregorian$.$prop$getJuly.get=function(){return july};
gregorian$.$wgb6s9$66o_=(8);
gregorian$.$prop$getAugust={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};}};
gregorian$.$prop$getAugust.get=function(){return august};
gregorian$.$wgb6s9$66p_=(9);
gregorian$.$prop$getSeptember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};}};
gregorian$.$prop$getSeptember.get=function(){return september};
gregorian$.$wgb6s9$66q_=(10);
gregorian$.$prop$getOctober={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};}};
gregorian$.$prop$getOctober.get=function(){return october};
gregorian$.$wgb6s9$66r_=(11);
gregorian$.$prop$getNovember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};}};
gregorian$.$prop$getNovember.get=function(){return november};
gregorian$.$wgb6s9$66s_=(12);
gregorian$.$prop$getDecember={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};}};
gregorian$.$prop$getDecember.get=function(){return december};
return gregorian$;
};$66e$chronology.$crtmm$=function(){return{mod:$CCMM$,'super':{t:GregorianCalendar$chronology},d:['ceylon.time.chronology','gregorian']};};
function $init$gregorian$chronology(){
if($66e$chronology.$$===undefined){
m$1.initTypeProto($66e$chronology,'ceylon.time.chronology::gregorian',$init$GregorianCalendar$chronology());
(function(gregorian$){
m$1.atr$(gregorian$,'epoch',function(){return this.$wgb6s9$66g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc("Epoch of the gregorian calendar.")];},d:['ceylon.time.chronology','gregorian','$at','epoch']};});
m$1.atr$(gregorian$,'january',function(){return this.$wgb6s9$66h_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','january']};});
m$1.atr$(gregorian$,'february',function(){return this.$wgb6s9$66i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','february']};});
m$1.atr$(gregorian$,'march',function(){return this.$wgb6s9$66j_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','march']};});
m$1.atr$(gregorian$,'april',function(){return this.$wgb6s9$66k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','april']};});
m$1.atr$(gregorian$,'may',function(){return this.$wgb6s9$66l_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','may']};});
m$1.atr$(gregorian$,'june',function(){return this.$wgb6s9$66m_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','june']};});
m$1.atr$(gregorian$,'july',function(){return this.$wgb6s9$66n_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','july']};});
m$1.atr$(gregorian$,'august',function(){return this.$wgb6s9$66o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','august']};});
m$1.atr$(gregorian$,'september',function(){return this.$wgb6s9$66p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','september']};});
m$1.atr$(gregorian$,'october',function(){return this.$wgb6s9$66q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','october']};});
m$1.atr$(gregorian$,'november',function(){return this.$wgb6s9$66r_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','november']};});
m$1.atr$(gregorian$,'december',function(){return this.$wgb6s9$66s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$66e$chronology,pa:1,d:['ceylon.time.chronology','gregorian','$at','december']};});
gregorian$.leapYear=function($66t){
var gregorian$=this;
return ($66u=(($66t.remainder((100))==(0))?($66t.remainder((400))==(0)):null),m$1.nn$($66u)?$66u:($66t.remainder((4))==(0)));
var $66u;
};gregorian$.leapYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:leapYear')];},d:['ceylon.time.chronology','gregorian','$m','leapYear']};};
gregorian$.$wgb6s9$66v=function($66w,$66x,$66y){
var gregorian$=this;
return ((((((((gregorian$.epoch-(1))+((365)*($66w-(1))))+floor$internal$math(($66w-(1)).divided(m$1.Float(4.0))))-floor$internal$math(($66w-(1)).divided(m$1.Float(100.0))))+floor$internal$math(($66w-(1)).divided(m$1.Float(400.0))))+floor$internal$math((((367)*$66x)-(362)).divided(m$1.Float(12.0))))+($66z=(($66x>(2))?($670=(gregorian$.leapYear($66w)?(-1):null),m$1.nn$($670)?$670:(-2)):null),m$1.nn$($66z)?$66z:(0)))+$66y);
var $66z,$670;
};gregorian$.$wgb6s9$66v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:m$1.Integer}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixed$jr0536']};};
gregorian$.fixedFrom=function($671){
var gregorian$=this;
return gregorian$.$wgb6s9$66v($671.$_get(0),$671.$_get(1),$671.$_get(2));
};gregorian$.fixedFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc("Return the _day of era_ from a given date.")];},d:['ceylon.time.chronology','gregorian','$m','fixedFrom']};};
gregorian$.checkDate=function($672){
var gregorian$=this;
m$1.asrt$2("Invalid year value",'116:8-117:68','Chronology.ceylon',[((years$base().minimum<=$672.$_get(0))&&($672.$_get(0)<=years$base().maximum)),'years.minimum <= date[0] && date[0] <= years.maximum']);
m$1.asrt$2("Invalid date value",'119:8-120:53','Chronology.ceylon',[m$1.$eq$($672,gregorian$.dateFrom(gregorian$.fixedFrom($672))),'date == dateFrom( fixedFrom(date) )']);
};gregorian$.checkDate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'date',mt:'prm',$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}}],$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:checkDate')];},d:['ceylon.time.chronology','gregorian','$m','checkDate']};};
gregorian$.newYear=function($673){
var gregorian$=this;
return gregorian$.$wgb6s9$66v($673,gregorian$.january,1);
};gregorian$.newYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:newYear')];},d:['ceylon.time.chronology','gregorian','$m','newYear']};};
gregorian$.yearEnd=function($674){
var gregorian$=this;
return gregorian$.$wgb6s9$66v($674,gregorian$.december,31);
};gregorian$.yearEnd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearEnd')];},d:['ceylon.time.chronology','gregorian','$m','yearEnd']};};
gregorian$.yearFrom=function($675){
var gregorian$=this;
var $676=($675-gregorian$.epoch);
var $677=floorDiv$internal$math($676,days$base().perFourCenturies);
var $678=floorMod$internal$math($676,days$base().perFourCenturies);
var $679=floorDiv$internal$math($678,days$base().perCentury);
var $67a=floorMod$internal$math($678,days$base().perCentury);
var $67b=floorDiv$internal$math($67a,days$base().inFourYears);
var $67c=floorMod$internal$math($67a,days$base().inFourYears);
var $67d=floorDiv$internal$math($67c,days$base().perYear);
var $67e=(((((400)*$677)+((100)*$679))+((4)*$67b))+$67d);
return ($67f=((($679==(4))||($67d==(4)))?$67e:null),m$1.nn$($67f)?$67f:($67e+(1)));
var $67f;
};gregorian$.yearFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'fixed',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:yearFrom')];},d:['ceylon.time.chronology','gregorian','$m','yearFrom']};};
gregorian$.dateFrom=function($67g){
var gregorian$=this;
var $67h=gregorian$.yearFrom($67g);
var $67i=($67g-gregorian$.newYear($67h));
var $67j=($67k=(($67g<gregorian$.$wgb6s9$66v($67h,gregorian$.march,1))?(0):null),m$1.nn$($67k)?$67k:($67l=(gregorian$.leapYear($67h)?(1):null),m$1.nn$($67l)?$67l:(2)));
var $67k,$67l;
var $67m=floorDiv$internal$math((((12)*($67i+$67j))+(373)),367);
var $67n=(((1)+$67g)-gregorian$.$wgb6s9$66v($67h,$67m,1));
return m$1.tpl$([$67h,$67m,$67n]);
};gregorian$.dateFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dateFrom')];},d:['ceylon.time.chronology','gregorian','$m','dateFrom']};};
gregorian$.monthFrom=function($67o){
var gregorian$=this;
return gregorian$.dateFrom($67o).$_get(1);
};gregorian$.monthFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:monthFrom')];},d:['ceylon.time.chronology','gregorian','$m','monthFrom']};};
gregorian$.dayFrom=function($67p){
var gregorian$=this;
return gregorian$.dateFrom($67p).$_get(2);
};gregorian$.dayFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayFrom']};};
gregorian$.dayOfWeekFrom=function($67q){
var gregorian$=this;
return floorMod$internal$math($67q,7);
};gregorian$.dayOfWeekFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'date',mt:'prm',$t:{t:m$1.Integer}}],$cont:$66e$chronology,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian:$m:dayOfWeekFrom')];},d:['ceylon.time.chronology','gregorian','$m','dayOfWeekFrom']};};
gregorian$.toString=function(){return this.string.valueOf();};
})($66e$chronology.$$.prototype);
}
return $66e$chronology;
}
ex$.$init$gregorian$chronology=$init$gregorian$chronology;$init$gregorian$chronology();var $67r;
function gregorian$chronology(){
if($67r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'gregorian\' before it was set"),'73:0-173:0','Chronology.ceylon');
if($67r===undefined){$67r=m$1.INIT$;$67r=$init$gregorian$chronology()();$67r.$crtmm$=gregorian$chronology.$crtmm$;}
return $67r;
}
ex$.gregorian$chronology=gregorian$chronology;
gregorian$chronology.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$gregorian$chronology()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology:gregorian')];},d:['ceylon.time.chronology','gregorian']};};
$prop$getGregorian$chronology=gregorian$chronology;
ex$.$prop$getGregorian$chronology=$prop$getGregorian$chronology;
function $_Date(date$){
ReadableDate$base(date$);
DateBehavior$base({Element$DateBehavior:{t:$_Date}},date$);
m$1.Ordinal({Other$Ordinal:{t:$_Date}},date$);
m$1.Comparable({Other$Comparable:{t:$_Date}},date$);
m$1.Enumerable({Other$Enumerable:{t:$_Date}},date$);
}
$_Date.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:DateBehavior$base,a:{Element$DateBehavior:{t:$_Date}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:$_Date}}},{t:m$1.Comparable,a:{Other$Comparable:{t:$_Date}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:$_Date}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date')];},d:['ceylon.time','Date']};};
ex$.$_Date=$_Date;
function $init$$_Date(){
if($_Date.$$===undefined){
m$1.initTypeProtoI($_Date,'ceylon.time::Date',$init$ReadableDate$base(),$init$DateBehavior$base(),m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(date$){
date$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:plus')];},d:['ceylon.time','Date','$m','plus']};}};date$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'period',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:minus')];},d:['ceylon.time','Date','$m','minus']};}};date$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodFrom')];},d:['ceylon.time','Date','$m','periodFrom']};}};date$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:periodTo')];},d:['ceylon.time','Date','$m','periodTo']};}};date$.at={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:at')];},d:['ceylon.time','Date','$m','at']};}};date$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:$_Date,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:rangeTo')];},d:['ceylon.time','Date','$m','rangeTo']};}};date$.equals=function($67s){
var date$=this;
var $67t;
if(m$1.is$(($67t=$67s),{t:$_Date})){
return (((date$.year==$67t.year)&&m$1.$eq$(date$.month,$67t.month))&&(date$.day==$67t.day));
}
function $67u(){return $67s;}
return false;
};date$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:$_Date,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$m:equals')];},d:['ceylon.time','Date','$m','equals']};};
m$1.atr$(date$,'hash',function(){
var date$=this;
var $67v=(31);
var $67w=(7);
$67w=(($67v*$67w)+date$.year);
$67w=(($67v*$67w)+date$.month.integer);
$67w=(($67v*$67w)+date$.day);
return $67w;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$_Date,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Date:$at:hash')];},d:['ceylon.time','Date','$at','hash']};});date$.toString=function(){return this.string.valueOf();};
})($_Date.$$.prototype);
}
return $_Date;
}
ex$.$init$$_Date=$init$$_Date;$init$$_Date();
function today$defs$clock($67x,$67y){return systemTime();};
function today$defs$timeZone($67x,$67y){return timeZone$timezone().system;};
function today($67x,$67y){if($67x===undefined){$67x=systemTime();}
if($67y===undefined){$67y=timeZone$timezone().system;}
return $67x.instant().date($67y);
};
today.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:Clock}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:today')];},d:['ceylon.time','today']};};
ex$.today=today;
function date($67z,$680,$681){return gregorianDate$internal($67z,$680,$681);
};
date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:date')];},d:['ceylon.time','date']};};
ex$.date=date;
function Period(years,months,days,hours,minutes,seconds,milliseconds,period$){
$init$Period();
if(period$===undefined)period$=new Period.$$;
if(years===undefined){years=$init$Period().$defs$years(period$,months,days,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$682_=years;
if(months===undefined){months=$init$Period().$defs$months(period$,years,days,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$683_=months;
if(days===undefined){days=$init$Period().$defs$days(period$,years,months,hours,minutes,seconds,milliseconds);}
period$.$wgb6s9$684_=days;
if(hours===undefined){hours=$init$Period().$defs$hours(period$,years,months,days,minutes,seconds,milliseconds);}
period$.$wgb6s9$685_=hours;
if(minutes===undefined){minutes=$init$Period().$defs$minutes(period$,years,months,days,hours,seconds,milliseconds);}
period$.$wgb6s9$686_=minutes;
if(seconds===undefined){seconds=$init$Period().$defs$seconds(period$,years,months,days,hours,minutes,milliseconds);}
period$.$wgb6s9$687_=seconds;
if(milliseconds===undefined){milliseconds=$init$Period().$defs$milliseconds(period$,years,months,days,hours,minutes,seconds);}
period$.$wgb6s9$688_=milliseconds;
ReadableTimePeriod$base(period$);
ReadableDatePeriod$base(period$);
ReadablePeriod$base(period$);
PeriodBehavior$base({Self$PeriodBehavior:{t:Period}},period$);
m$1.Comparable({Other$Comparable:{t:Period}},period$);
m$1.Summable({Other$Summable:{t:Period}},period$);
m$1.Scalable({Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}},period$);
return period$;
}
Period.$defs$years=function(period$,months,days,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$months=function(period$,years,days,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$days=function(period$,years,months,hours,minutes,seconds,milliseconds){return (0)};Period.$defs$hours=function(period$,years,months,days,minutes,seconds,milliseconds){return (0)};Period.$defs$minutes=function(period$,years,months,days,hours,seconds,milliseconds){return (0)};Period.$defs$seconds=function(period$,years,months,days,hours,minutes,milliseconds){return (0)};Period.$defs$milliseconds=function(period$,years,months,days,hours,minutes,seconds){return (0)};Period.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'years',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of years.")];}},{nm:'months',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of months.")];}},{nm:'days',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of days.")];}},{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of hours.")];}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of minutes.")];}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of seconds.")];}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];}}],sts:[{t:ReadablePeriod$base},{t:ReadableTimePeriod$base},{t:ReadableDatePeriod$base},{t:PeriodBehavior$base,a:{Self$PeriodBehavior:{t:Period}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Period}}},{t:m$1.Summable,a:{Other$Summable:{t:Period}}},{t:m$1.Scalable,a:{Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period')];},d:['ceylon.time','Period']};};
ex$.Period=Period;
function $init$Period(){
if(Period.$$===undefined){
m$1.initTypeProto(Period,'ceylon.time::Period',m$1.Basic,$init$ReadableTimePeriod$base(),$init$ReadableDatePeriod$base(),$init$ReadablePeriod$base(),$init$PeriodBehavior$base(),m$1.Comparable,m$1.Summable,m$1.Scalable);
(function(period$){
m$1.atr$(period$,'years',function(){return this.$wgb6s9$682_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time','Period','$at','years']};});
m$1.atr$(period$,'months',function(){return this.$wgb6s9$683_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time','Period','$at','months']};});
m$1.atr$(period$,'days',function(){return this.$wgb6s9$684_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time','Period','$at','days']};});
m$1.atr$(period$,'hours',function(){return this.$wgb6s9$685_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of hours.")];},d:['ceylon.time','Period','$at','hours']};});
m$1.atr$(period$,'minutes',function(){return this.$wgb6s9$686_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of minutes.")];},d:['ceylon.time','Period','$at','minutes']};});
m$1.atr$(period$,'seconds',function(){return this.$wgb6s9$687_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of seconds.")];},d:['ceylon.time','Period','$at','seconds']};});
m$1.atr$(period$,'milliseconds',function(){return this.$wgb6s9$688_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc("The number of milliseconds.")];},d:['ceylon.time','Period','$at','milliseconds']};});
period$.equals=function($689){
var period$=this;
var $68a;
if(m$1.is$(($68a=$689),{t:Period})){
if((period$===$68a)){
return true;
}
return (((((((period$.years==$68a.years)&&(period$.months==$68a.months))&&(period$.days==$68a.days))&&(period$.hours==$68a.hours))&&(period$.minutes==$68a.minutes))&&(period$.seconds==$68a.seconds))&&(period$.milliseconds==$68a.milliseconds));
}
function $68b(){return $689;}
return false;
};period$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:equals')];},d:['ceylon.time','Period','$m','equals']};};
m$1.atr$(period$,'hash',function(){
var period$=this;
var $68c=(31);
var $68d=(17);
$68d=(($68c*$68d)+period$.years.hash);
$68d=(($68c*$68d)+period$.months.hash);
$68d=(($68c*$68d)+period$.days.hash);
$68d=(($68c*$68d)+period$.hours.hash);
$68d=(($68c*$68d)+period$.minutes.hash);
$68d=(($68c*$68d)+period$.seconds.hash);
$68d=(($68c*$68d)+period$.milliseconds.hash);
return $68d;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:hash')];},d:['ceylon.time','Period','$at','hash']};});period$.compare=function($68e){
var period$=this;
var $68f=period$.normalized();
var $68g=$68e.normalized();
return ($68h=(!m$1.$eq$($68f.years,$68g.years)?$68f.years.compare($68g.years):null),m$1.nn$($68h)?$68h:($68i=(!m$1.$eq$($68f.months,$68g.months)?$68f.months.compare($68g.months):null),m$1.nn$($68i)?$68i:($68j=(!m$1.$eq$($68f.days,$68g.days)?$68f.days.compare($68g.days):null),m$1.nn$($68j)?$68j:($68k=(!m$1.$eq$($68f.hours,$68g.hours)?$68f.hours.compare($68g.hours):null),m$1.nn$($68k)?$68k:($68l=(!m$1.$eq$($68f.minutes,$68g.minutes)?$68f.minutes.compare($68g.minutes):null),m$1.nn$($68l)?$68l:($68m=(!m$1.$eq$($68f.seconds,$68g.seconds)?$68f.seconds.compare($68g.seconds):null),m$1.nn$($68m)?$68m:$68f.milliseconds.compare($68g.milliseconds)))))));
var $68h,$68i,$68j,$68k,$68l,$68m;
};period$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:compare')];},d:['ceylon.time','Period','$m','compare']};};
period$.isZero=function(){
var period$=this;
return m$1.$eq$(period$,zero());
};period$.isZero.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Period,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:isZero')];},d:['ceylon.time','Period','$m','isZero']};};
period$.withYears=function($68n){
var period$=this;
if(($68n==period$.years)){
return period$;
}
return Period($68n,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withYears')];},d:['ceylon.time','Period','$m','withYears']};};
period$.withMonths=function($68o){
var period$=this;
if(($68o==period$.months)){
return period$;
}
return Period(period$.years,$68o,period$.days,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMonths')];},d:['ceylon.time','Period','$m','withMonths']};};
period$.withDays=function($68p){
var period$=this;
if(($68p==period$.days)){
return period$;
}
return Period(period$.years,period$.months,$68p,period$.hours,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withDays')];},d:['ceylon.time','Period','$m','withDays']};};
period$.withHours=function($68q){
var period$=this;
if(($68q==period$.hours)){
return period$;
}
return Period(period$.years,period$.months,period$.days,$68q,period$.minutes,period$.seconds,period$.milliseconds);
};period$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withHours')];},d:['ceylon.time','Period','$m','withHours']};};
period$.withMinutes=function($68r){
var period$=this;
if(($68r==period$.minutes)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,$68r,period$.seconds,period$.milliseconds);
};period$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMinutes')];},d:['ceylon.time','Period','$m','withMinutes']};};
period$.withSeconds=function($68s){
var period$=this;
if(($68s==period$.seconds)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,$68s,period$.milliseconds);
};period$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withSeconds')];},d:['ceylon.time','Period','$m','withSeconds']};};
period$.withMilliseconds=function($68t){
var period$=this;
if(($68t==period$.milliseconds)){
return period$;
}
return Period(period$.years,period$.months,period$.days,period$.hours,period$.minutes,period$.seconds,$68t);
};period$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:withMilliseconds')];},d:['ceylon.time','Period','$m','withMilliseconds']};};
period$.plusYears=function($68u){
var period$=this;
return period$.withYears((period$.years+$68u));
};period$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusYears')];},d:['ceylon.time','Period','$m','plusYears']};};
period$.plusMonths=function($68v){
var period$=this;
return period$.withMonths((period$.months+$68v));
};period$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMonths')];},d:['ceylon.time','Period','$m','plusMonths']};};
period$.plusDays=function($68w){
var period$=this;
return period$.withDays((period$.days+$68w));
};period$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusDays')];},d:['ceylon.time','Period','$m','plusDays']};};
period$.plusHours=function($68x){
var period$=this;
return period$.withHours((period$.hours+$68x));
};period$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusHours')];},d:['ceylon.time','Period','$m','plusHours']};};
period$.plusMinutes=function($68y){
var period$=this;
return period$.withMinutes((period$.minutes+$68y));
};period$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMinutes')];},d:['ceylon.time','Period','$m','plusMinutes']};};
period$.plusSeconds=function($68z){
var period$=this;
return period$.withSeconds((period$.seconds+$68z));
};period$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusSeconds')];},d:['ceylon.time','Period','$m','plusSeconds']};};
period$.plusMilliseconds=function($690){
var period$=this;
return period$.withMilliseconds((period$.milliseconds+$690));
};period$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plusMilliseconds')];},d:['ceylon.time','Period','$m','plusMilliseconds']};};
period$.minusYears=function($691){
var period$=this;
return period$.plusYears((-$691));
};period$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusYears')];},d:['ceylon.time','Period','$m','minusYears']};};
period$.minusMonths=function($692){
var period$=this;
return period$.plusMonths((-$692));
};period$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMonths')];},d:['ceylon.time','Period','$m','minusMonths']};};
period$.minusDays=function($693){
var period$=this;
return period$.plusDays((-$693));
};period$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusDays')];},d:['ceylon.time','Period','$m','minusDays']};};
period$.minusHours=function($694){
var period$=this;
return period$.plusHours((-$694));
};period$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusHours')];},d:['ceylon.time','Period','$m','minusHours']};};
period$.minusMinutes=function($695){
var period$=this;
return period$.plusMinutes((-$695));
};period$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMinutes')];},d:['ceylon.time','Period','$m','minusMinutes']};};
period$.minusSeconds=function($696){
var period$=this;
return period$.plusSeconds((-$696));
};period$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusSeconds')];},d:['ceylon.time','Period','$m','minusSeconds']};};
period$.minusMilliseconds=function($697){
var period$=this;
return period$.plusMilliseconds((-$697));
};period$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:minusMilliseconds')];},d:['ceylon.time','Period','$m','minusMilliseconds']};};
period$.plus=function($698){
var period$=this;
return ($699=(period$.years+$698.years),$69a=(period$.months+$698.months),$69b=(period$.days+$698.days),$69c=(period$.hours+$698.hours),$69d=(period$.minutes+$698.minutes),$69e=(period$.seconds+$698.seconds),$69f=(period$.milliseconds+$698.milliseconds),Period($699,$69a,$69b,$69c,$69d,$69e,$69f));
var $699,$69a,$69b,$69c,$69d,$69e,$69f;
};period$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'other',mt:'prm',$t:{t:Period}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:plus')];},d:['ceylon.time','Period','$m','plus']};};
m$1.atr$(period$,'dateOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:dateOnly')];},d:['ceylon.time','Period','$at','dateOnly']};});m$1.atr$(period$,'timeOnly',function(){
var period$=this;
return period$;
},undefined,function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:timeOnly')];},d:['ceylon.time','Period','$at','timeOnly']};});period$.normalized=function(){
var period$=this;
if(m$1.$eq$(period$,zero())){
return zero();
}
var $69g=(period$.years+m$1.i$div(period$.months,(12)));
var $69h=period$.months.remainder((12));
var $69i=(((period$.hours*seconds$base().perHour)+(period$.minutes*seconds$base().perMinute))+period$.seconds);
var $69j=period$.milliseconds.remainder(milliseconds$base().perSecond);
($69i=$69i+m$1.i$div(period$.milliseconds,milliseconds$base().perSecond));
var $69k=$69i.remainder(seconds$base().perMinute);
$69i=m$1.i$div($69i,seconds$base().perMinute);
var $69l=$69i.remainder(minutes$base().perHour);
var $69m=m$1.i$div($69i,minutes$base().perHour);
return ($69n=$69g,$69o=$69h,$69p=period$.days,$69q=$69m,$69r=$69l,$69s=$69k,$69t=$69j,Period($69n,$69o,$69p,$69q,$69r,$69s,$69t));
var $69n,$69o,$69p,$69q,$69r,$69s,$69t;
};period$.normalized.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:normalized')];},d:['ceylon.time','Period','$m','normalized']};};
m$1.atr$(period$,'string',function(){
var period$=this;
if(m$1.$eq$(period$,zero())){
return "PT0S";
}
else{
var $69u=($69v=m$1.for$(function(){
var $69w=m$1.tpl$([m$1.tpl$([period$.years,"Y"]),m$1.tpl$([period$.months,"M"]),m$1.tpl$([period$.days,"D"])]).iterator(),$69x=m$1.finished();
var n$69x=function(){
while(($69x=$69w.next())!==m$1.finished()){
if(!m$1.$eq$($69x.$_get(0),(0))){
return $69x;
}
}
return m$1.finished();
}
return function(){
if(n$69x()!==m$1.finished()){
var $69y=$69x,$69z="".$_join($69y);
return $69z;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}),($6a0="",m$1.jsc$3($6a0,$6a0.$_join))($69v));
var $69v,$6a0;
if(!m$1.$eq$(period$.hours.or(period$.minutes).or(period$.seconds).or(period$.milliseconds),(0))){
var $6a1=($6a2=m$1.for$(function(){
var $6a3=m$1.tpl$([m$1.tpl$([period$.hours,0,"H"]),m$1.tpl$([period$.minutes,0,"M"]),m$1.tpl$([period$.seconds,period$.milliseconds,"S"])]).iterator(),$6a4=m$1.finished();
var n$6a4=function(){
while(($6a4=$6a3.next())!==m$1.finished()){
if(!m$1.$eq$($6a4.$_get(0).or($6a4.$_get(1)),(0))){
return $6a4;
}
}
return m$1.finished();
}
return function(){
if(n$6a4()!==m$1.finished()){
var $6a5=$6a4,$6a6=($6a7=(($6a5.$_get(1)==(0))?$6a5.$_get(0).string.plus($6a5.$_get(2)):null),m$1.nn$($6a7)?$6a7:($6a5.$_get(0).string+"."+$6a5.$_get(1).string.padLeading(3,m$1.Character(48,true))).plus($6a5.$_get(2)));
return $6a6;
}
return m$1.finished();
}
},{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}),($6a8="",m$1.jsc$3($6a8,$6a8.$_join))($6a2));
var $6a2,$6a7,$6a8;
return ("P"+$69u+"T"+$6a1);
}
else{
return ("P"+$69u);
}
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$at:string')];},d:['ceylon.time','Period','$at','string']};});period$.scale=function($6a9){var period$=this;
return ($6aa=($6a9*period$.years),$6ab=($6a9*period$.months),$6ac=($6a9*period$.days),$6ad=($6a9*period$.hours),$6ae=($6a9*period$.minutes),$6af=($6a9*period$.seconds),$6ag=($6a9*period$.milliseconds),Period($6aa,$6ab,$6ac,$6ad,$6ae,$6af,$6ag));
var $6aa,$6ab,$6ac,$6ad,$6ae,$6af,$6ag;
};
period$.scale.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'scale',mt:'prm',$t:{t:m$1.Integer}}],$cont:Period,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Period:$m:scale')];},d:['ceylon.time','Period','$m','scale']};};
period$.toString=function(){return this.string.valueOf();};
})(Period.$$.prototype);
}
return Period;
}
ex$.$init$Period=$init$Period;$init$Period();Period.inst$$=function($6ah){
var period$=new Period.$$;
m$1.set_type_args(period$,{Self$PeriodBehavior:{t:Period},Other$Comparable:{t:Period},Other$Summable:{t:Period},Scale$Scalable:{t:m$1.Integer},Value$Scalable:{t:Period}});
return period$;
};
Period.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::Period.years')return o.years_;
else if(n==='ceylon.time::Period.months')return o.months_;
else if(n==='ceylon.time::Period.days')return o.days_;
else if(n==='ceylon.time::Period.hours')return o.hours_;
else if(n==='ceylon.time::Period.minutes')return o.minutes_;
else if(n==='ceylon.time::Period.seconds')return o.seconds_;
else if(n==='ceylon.time::Period.milliseconds')return o.milliseconds_;
else throw new TypeError('unknown attribute');
};
Period.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::Period.years')o.years_=i;
else if(n==='ceylon.time::Period.months')o.months_=i;
else if(n==='ceylon.time::Period.days')o.days_=i;
else if(n==='ceylon.time::Period.hours')o.hours_=i;
else if(n==='ceylon.time::Period.minutes')o.minutes_=i;
else if(n==='ceylon.time::Period.seconds')o.seconds_=i;
else if(n==='ceylon.time::Period.milliseconds')o.milliseconds_=i;
else throw new TypeError('unknown attribute');
};
Period.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getYears)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getMonths)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getDays)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getHours)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getMinutes)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getSeconds)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getMilliseconds))];
};
var $6ai;function $valinit$$6ai(){if($6ai===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'zero\' before it was set"),'319:0-320:29','Period.ceylon');
if($6ai===undefined){$6ai=m$1.INIT$;$6ai=Period()};return $6ai;};
function zero(){return $valinit$$6ai();}
ex$.zero=zero;
var $prop$getZero={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:zero')];},d:['ceylon.time','zero']};}};
ex$.$prop$getZero=$prop$getZero;
$prop$getZero.get=zero;
zero.$crtmm$=$prop$getZero.$crtmm$;
function Time(time$){
ReadableTime$base(time$);
TimeBehavior$base({Element$TimeBehavior:{t:Time}},time$);
m$1.Comparable({Other$Comparable:{t:Time}},time$);
m$1.Ordinal({Other$Ordinal:{t:Time}},time$);
m$1.Enumerable({Other$Enumerable:{t:Time}},time$);
}
Time.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableTime$base},{t:TimeBehavior$base,a:{Element$TimeBehavior:{t:Time}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Time}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:Time}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Time}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time')];},d:['ceylon.time','Time']};};
ex$.Time=Time;
function $init$Time(){
if(Time.$$===undefined){
m$1.initTypeProtoI(Time,'ceylon.time::Time',$init$ReadableTime$base(),$init$TimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(time$){
time$.plus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:plus')];},d:['ceylon.time','Time','$m','plus']};}};time$.minus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:minus')];},d:['ceylon.time','Time','$m','minus']};}};time$.periodFrom={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodFrom')];},d:['ceylon.time','Time','$m','periodFrom']};}};time$.periodTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:periodTo')];},d:['ceylon.time','Time','$m','periodTo']};}};time$.rangeTo={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:Time,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:rangeTo')];},d:['ceylon.time','Time','$m','rangeTo']};}};time$.equals=function($6aj){
var time$=this;
var $6ak;
if(m$1.is$(($6ak=$6aj),{t:Time})){
return (time$.millisecondsOfDay==$6ak.millisecondsOfDay);
}
function $6al(){return $6aj;}
return false;
};time$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Time,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$m:equals')];},d:['ceylon.time','Time','$m','equals']};};
m$1.atr$(time$,'hash',function(){
var time$=this;
return time$.millisecondsOfDay.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Time,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Time:$at:hash')];},d:['ceylon.time','Time','$at','hash']};});time$.toString=function(){return this.string.valueOf();};
})(Time.$$.prototype);
}
return Time;
}
ex$.$init$Time=$init$Time;$init$Time();
function time($6am,$6an,$6ao,$6ap){
if($6ao===undefined){$6ao=(0);}
if($6ap===undefined){$6ap=(0);}
m$1.asrt$2("Hours value should be between 0 and 23.",'74:4-75:35','Time.ceylon',[($6aq=$6am,$6aq.notSmallerThan((0))&&$6aq.smallerThan(hours$base().perDay)),'0 <= hours < h.perDay']);
m$1.asrt$2("Minutes value should be between 0 and 59.",'77:4-78:40','Time.ceylon',[($6ar=$6an,$6ar.notSmallerThan((0))&&$6ar.smallerThan(minutes$base().perHour)),'0 <= minutes < min.perHour']);
m$1.asrt$2("Seconds value should be between 0 and 59.",'80:4-81:42','Time.ceylon',[($6as=$6ao,$6as.notSmallerThan((0))&&$6as.smallerThan(seconds$base().perMinute)),'0 <= seconds < sec.perMinute']);
m$1.asrt$2("Milliseconds value should be between 0 and 999.",'83:4-84:46','Time.ceylon',[($6at=$6ap,$6at.notSmallerThan((0))&&$6at.smallerThan(milliseconds$base().perSecond)),'0 <= milliseconds < ms.perSecond']);
var $6au=($6am*milliseconds$base().perHour);
var $6av=($6an*milliseconds$base().perMinute);
var $6aw=($6ao*milliseconds$base().perSecond);
return TimeOfDay$internal(((($6au+$6av)+$6aw)+$6ap));
}
ex$.time=time;
time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:time')];},d:['ceylon.time','time']};};
function ZoneName$timezone$parser$iana(){var $6ax={t:m$1.$_String};$6ax.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.time.timezone.parser.iana','ZoneName']};};return $6ax;}
ex$.ZoneName$timezone$parser$iana=ZoneName$timezone$parser$iana;
function parseZoneLine$timezone$parser$iana($6ay,$6az){
if($6az===undefined){$6az=null;}
var $6b0=$6ay.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $6b1;
var $6b2;
if(m$1.nn$(($6b2=$6az))){
$6b1=$6b2;
}
else{
var $6b3;
m$1.asrt$2("",'17:8-17:61','parseZoneLine.ceylon',[m$1.is$(($6b3=$6b0.next()),{t:m$1.$_String}),'is String zone = token.next()'],[m$1.$eq$($6b3,"Zone"),'zone == \"Zone\"']);
var $6b4;
m$1.asrt$2("",'18:8-18:51','parseZoneLine.ceylon',[m$1.is$(($6b4=$6b0.next()),ZoneName$timezone$parser$iana()),'is ZoneName nameText = token.next()']);
$6b1=$6b4;
}
var $6b5;
m$1.asrt$2("",'22:4-22:47','parseZoneLine.ceylon',[m$1.is$(($6b5=$6b0.next()),{t:m$1.$_String}),'is String offsetText = token.next()']);
var $6b6;
m$1.asrt$2("",'23:4-23:45','parseZoneLine.ceylon',[m$1.is$(($6b6=$6b0.next()),{t:m$1.$_String}),'is String ruleText = token.next()']);
var $6b7;
m$1.asrt$2("",'24:4-24:51','parseZoneLine.ceylon',[m$1.is$(($6b7=$6b0.next()),{t:m$1.$_String}),'is String formatText     = token.next()']);
var $6b8=m$1.empty();
var $6b9;
while(m$1.is$(($6b9=$6b0.next()),{t:m$1.$_String})){
$6b8=m$1.tpl$([$6b9],$6b8);
}
return m$1.tpl$([$6b1,($6ba=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($6b5.trimmed)),$6bb=parseZoneRule$timezone$parser$iana($6b6.trimmed),$6bc=parseZoneFormat$timezone$parser$iana($6b7.trimmed),$6bd=parseUntil$timezone$parser$iana($6b8.reversed),ZoneTimeline$timezone$model($6ba,$6bb,$6bc,$6bd))]);
var $6ba,$6bb,$6bc,$6bd;
}
ex$.parseZoneLine$timezone$parser$iana=parseZoneLine$timezone$parser$iana;
parseZoneLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[ZoneName$timezone$parser$iana(),{t:ZoneTimeline$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}},{nm:'zoneName',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},ZoneName$timezone$parser$iana()]}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneLine']};};
function Signal$timezone$parser$iana(){var $6be={t:m$1.Integer};$6be.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:Signal')];},d:['ceylon.time.timezone.parser.iana','Signal']};};return $6be;}
ex$.Signal$timezone$parser$iana=Signal$timezone$parser$iana;
function parseTime$timezone$parser$iana($6bf){
if($6bf.equals("-")){
return m$1.tpl$([AtWallClockTime$timezone$model(time(0,0)),1]);
}
var $6bg=($6bh=($6bf.startsWith("-")?(-1):null),m$1.nn$($6bh)?$6bh:(1));
var $6bh;
var $6bi=($6bj=($6bf.startsWith("-")?(1):null),m$1.nn$($6bj)?$6bj:(0));
var $6bj;
if(!m$1.nn$($6bf.firstOccurrence(m$1.Character(58,true)))){
var $6bk;
m$1.asrt$2("",'27:8-27:75','parseTime.ceylon',[m$1.is$(($6bk=m$1.Integer.$st$.parse($6bf.spanFrom($6bi))),{t:m$1.Integer}),'is Integer hours = Integer.parse(atTime.spanFrom(position))']);
return m$1.tpl$([AtWallClockTime$timezone$model(adjustToEndOfDayIfNecessary$timezone$parser$iana($6bk,0)),$6bg]);
}
var $6bl=$6bf.indexesWhere(m$1.jsc$2(($6bm=m$1.Character(58,true),m$1.jsc$3($6bm,$6bm.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $6bm;
var $6bn;
m$1.asrt$2("",'33:4-33:44','parseTime.ceylon',[m$1.nn$(($6bn=$6bl.$_get(0))),'exists firstIndex = indexes[0]']);
var $6bo;
m$1.asrt$2("",'34:4-34:82','parseTime.ceylon',[m$1.is$(($6bo=m$1.Integer.$st$.parse($6bf.span($6bi,($6bn-(1))))),{t:m$1.Integer}),'is Integer hours = Integer.parse(atTime.span(position, firstIndex-1))']);
var $6bp;
m$1.asrt$2("",'35:4-35:92','parseTime.ceylon',[m$1.is$(($6bp=m$1.Integer.$st$.parse($6bf.span(($6bn+(1)),($6bn+(2))))),{t:m$1.Integer}),'is Integer minutes = Integer.parse(atTime.span(firstIndex +1,firstIndex  + 2 ))']);
var $6bq=adjustToEndOfDayIfNecessary$timezone$parser$iana($6bo,$6bp);
var $6br;
if(($6bl.size==(1))){
$6br=atTimeDefinition$timezone$parser$iana($6bq,$6bf.spanFrom(($6bn+(3))));
}
else{
var $6bs;
m$1.asrt$2("",'41:8-41:49','parseTime.ceylon',[m$1.nn$(($6bs=$6bl.$_get(1))),'exists secondIndex = indexes[1]']);
var $6bt;
m$1.asrt$2("",'42:8-42:100','parseTime.ceylon',[m$1.is$(($6bt=m$1.Integer.$st$.parse($6bf.span(($6bs+(1)),($6bs+(2))))),{t:m$1.Integer}),'is Integer seconds = Integer.parse(atTime.span(secondIndex + 1 ,secondIndex  + 2 ))']);
$6bq=$6bq.plusSeconds($6bt);
$6br=atTimeDefinition$timezone$parser$iana($6bq,$6bf.spanFrom(($6bs+(3))));
}
return m$1.tpl$([$6br,$6bg]);
};parseTime$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]},ps:[{nm:'atTime',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseTime']};};
function atTimeDefinition$timezone$parser$iana($6bu,$6bv){
var $6bw=$6bv;
if("s".equals($6bw) || "S".equals($6bw)) {
return AtLocalMeanTime$timezone$model($6bu);
}
else if("u".equals($6bw) || "U".equals($6bw)) {
return AtUtcTime$timezone$model($6bu);
}
else if("z".equals($6bw) || "Z".equals($6bw)) {
return AtNauticalTime$timezone$model($6bu);
}
else if("g".equals($6bw) || "G".equals($6bw)) {
return AtGmtTime$timezone$model($6bu);
}
else if("w".equals($6bw) || "W".equals($6bw)) {
return AtWallClockTime$timezone$model($6bu);
}
else{
return AtWallClockTime$timezone$model($6bu);
}
};atTimeDefinition$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}},{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','atTimeDefinition']};};
function adjustToEndOfDayIfNecessary$timezone$parser$iana($6bx,$6by){
if((($6bx==(24))&&($6by==(0)))){
return time(23,59,59,999);
}
return time($6bx,$6by);
};adjustToEndOfDayIfNecessary$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:adjustToEndOfDayIfNecessary')];},d:['ceylon.time.timezone.parser.iana','adjustToEndOfDayIfNecessary']};};
function parseZoneRule$timezone$parser$iana($6bz){
if(m$1.$eq$($6bz,"-")){
return standardZoneRule$timezone$model();
}
var $6c0="".indexesWhere(m$1.jsc$2(($6c1=m$1.Character(58,true),m$1.jsc$3($6c1,$6c1.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $6c1;
var $6c2;
if(m$1.ne$(($6c2=$6c0))){
return PeriodZoneRule$timezone$model(toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($6bz)));
}
else{
return standardZoneRule$timezone$model();
}
}
ex$.parseZoneRule$timezone$parser$iana=parseZoneRule$timezone$parser$iana;
parseZoneRule$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneRule']};};
function parseMonth$timezone$parser$iana($6c3){
var $6c4;
m$1.asrt$2("Invalid Month for parse in timeZone",'7:4-9:72','parseMonth.ceylon',[m$1.nn$(($6c4=months$base().all.find(m$1.jsc$2((function($6c5){return $6c5.string.lowercased.startsWith($6c3.trimmed.lowercased);
}),[{nm:'elem',mt:'prm',$t:{t:Month$base}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:Month$base}])})))),'exists currentMonth = months.all.find((Month elem) \n        => elem.string.lowercased.startsWith(month.trimmed.lowercased))']);
return $6c4;
}
ex$.parseMonth$timezone$parser$iana=parseMonth$timezone$parser$iana;
parseMonth$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseMonth']};};
function findDayOfWeek$timezone$parser$iana($6c6){
var $6c7;
m$1.asrt$2("",'13:4-13:123','parseUtils.ceylon',[m$1.nn$(($6c7=weekdays$base().find(m$1.jsc$2((function($6c8){return $6c8.string.lowercased.startsWith($6c6.trimmed.lowercased);
}),[{nm:'elem',mt:'prm',$t:{t:DayOfWeek$base}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:DayOfWeek$base}])})))),'exists dow = weekdays.find((DayOfWeek elem) => elem.string.lowercased.startsWith(dayOfWeek.trimmed.lowercased))']);
return $6c7;
};findDayOfWeek$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','findDayOfWeek']};};
function toPeriod$timezone$parser$iana($6c9){
var $6ca=$6c9,$6cb=$6ca.$_get(0),$6cc=$6ca.$_get(1);
return ($6cd=($6cb.time.hours*$6cc),$6ce=($6cb.time.minutes*$6cc),$6cf=($6cb.time.seconds*$6cc),$6cg=($6cb.time.milliseconds*$6cc),Period(undefined,undefined,undefined,$6cd,$6ce,$6cf,$6cg));
var $6cd,$6ce,$6cf,$6cg;
};toPeriod$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'signedTime',mt:'prm',$t:{t:'T',l:[{t:AtTime$timezone$model},Signal$timezone$parser$iana()]}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:toPeriod')];},d:['ceylon.time.timezone.parser.iana','toPeriod']};};
function tokenDelimiter$timezone$parser$iana($6ch){
return (m$1.$eq$($6ch,m$1.Character(32,true))||m$1.$eq$($6ch,m$1.Character(9,true)));
}
ex$.tokenDelimiter$timezone$parser$iana=tokenDelimiter$timezone$parser$iana;
tokenDelimiter$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'char',mt:'prm',$t:{t:m$1.Character}}],pa:1,d:['ceylon.time.timezone.parser.iana','tokenDelimiter']};};
function RuleName$timezone$parser$iana(){var $6ci={t:m$1.$_String};$6ci.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.parser.iana:RuleName')];},d:['ceylon.time.timezone.parser.iana','RuleName']};};return $6ci;}
ex$.RuleName$timezone$parser$iana=RuleName$timezone$parser$iana;
function parseRuleLine$timezone$parser$iana($6cj){
var $6ck=$6cj.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $6cl;
m$1.asrt$2("",'14:4-14:59','parseRuleLine.ceylon',[m$1.is$(($6cl=$6ck.next()),{t:m$1.$_String}),'is String rule = token.next()'],[m$1.$eq$($6cl,"Rule"),'rule == \"Rule\"']);
var $6cm;
m$1.asrt$2("",'16:4-16:45','parseRuleLine.ceylon',[m$1.is$(($6cm=$6ck.next()),RuleName$timezone$parser$iana()),'is RuleName name = token.next()']);
var $6cn;
m$1.asrt$2("",'17:4-17:52','parseRuleLine.ceylon',[m$1.is$(($6cn=$6ck.next()),{t:m$1.$_String}),'is String startYearText = token.next()']);
var $6co;
m$1.asrt$2("",'18:4-18:50','parseRuleLine.ceylon',[m$1.is$(($6co=$6ck.next()),{t:m$1.$_String}),'is String endYearText = token.next()']);
var $6cp;
m$1.asrt$2("",'19:4-19:47','parseRuleLine.ceylon',[m$1.is$(($6cp=$6ck.next()),{t:m$1.$_String}),'is String typeText = token.next()']);
var $6cq;
m$1.asrt$2("",'20:4-20:48','parseRuleLine.ceylon',[m$1.is$(($6cq=$6ck.next()),{t:m$1.$_String}),'is String monthText = token.next()']);
var $6cr;
m$1.asrt$2("",'21:4-21:50','parseRuleLine.ceylon',[m$1.is$(($6cr=$6ck.next()),{t:m$1.$_String}),'is String dayRuleText = token.next()']);
var $6cs;
m$1.asrt$2("",'22:4-22:51','parseRuleLine.ceylon',[m$1.is$(($6cs=$6ck.next()),{t:m$1.$_String}),'is String timeRuleText = token.next()']);
var $6ct;
m$1.asrt$2("",'23:4-23:56','parseRuleLine.ceylon',[m$1.is$(($6ct=$6ck.next()),{t:m$1.$_String}),'is String savingAmountsText = token.next()']);
var $6cu;
m$1.asrt$2("",'24:4-24:49','parseRuleLine.ceylon',[m$1.is$(($6cu=$6ck.next()),{t:m$1.$_String}),'is String letterText = token.next()']);
var $6cv=parseYear$timezone$parser$iana($6cn,0);
return m$1.tpl$([$6cm,($6cw=$6cv,$6cx=parseYear$timezone$parser$iana($6co,$6cv),$6cy=parseMonth$timezone$parser$iana($6cq),$6cz=parseOnDay$timezone$parser$iana($6cr.trimmed),$6d0=parseTime$timezone$parser$iana($6cs.trimmed).$_get(0),$6d1=toPeriod$timezone$parser$iana(parseTime$timezone$parser$iana($6ct.trimmed)),$6d2=$6cu.trimmed,Rule$timezone$model($6cw,$6cx,$6cy,$6cz,$6d0,$6d1,$6d2))]);
var $6cw,$6cx,$6cy,$6cz,$6d0,$6d1,$6d2;
}
ex$.parseRuleLine$timezone$parser$iana=parseRuleLine$timezone$parser$iana;
parseRuleLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[RuleName$timezone$parser$iana(),{t:Rule$timezone$model}]},ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseRuleLine']};};
function parseLinkLine$timezone$parser$iana($6d3){
var $6d4=$6d3.$_split(tokenDelimiter$timezone$parser$iana).iterator();
var $6d5;
m$1.asrt$2("",'10:4-10:57','parseLinkLine.ceylon',[m$1.is$(($6d5=$6d4.next()),{t:m$1.$_String}),'is String link = token.next()'],[m$1.$eq$($6d5,"Link"),'link == \"Link\"']);
var $6d6;
m$1.asrt$2("",'12:4-12:46','parseLinkLine.ceylon',[m$1.is$(($6d6=$6d4.next()),RealName$timezone$model()),'is RealName realId = token.next()']);
var $6d7;
m$1.asrt$2("",'13:4-13:48','parseLinkLine.ceylon',[m$1.is$(($6d7=$6d4.next()),AliasName$timezone$model()),'is AliasName aliasId = token.next()']);
return m$1.tpl$([$6d6,$6d7]);
}
ex$.parseLinkLine$timezone$parser$iana=parseLinkLine$timezone$parser$iana;
parseLinkLine$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:Link$timezone$model(),ps:[{nm:'line',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseLinkLine']};};
function parseOnDay$timezone$parser$iana($6d8){
var $6d9=parseOnDayToken$timezone$parser$iana($6d8);
var $6da;
if(m$1.nn$(($6da=$6d9.$_get(0)))){
var $6db;
if(m$1.nn$(($6db=$6d9.$_get(1)))){
return OnFirstOfMonth$timezone$model($6db,$6da);
}
else{
return OnFixedDay$timezone$model($6da);
}
}
var $6dc;
m$1.asrt$2("",'24:4-24:40','parseOnDay.ceylon',[m$1.nn$(($6dc=$6d9.$_get(1))),'exists dayOfWeek = result[1]']);
return OnLastOfMonth$timezone$model($6dc);
}
ex$.parseOnDay$timezone$parser$iana=parseOnDay$timezone$parser$iana;
parseOnDay$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseOnDay']};};
function parseOnDayToken$timezone$parser$iana($6dd){
var $6de=m$1.tpl$([null,null,m$1.equal()]);
if($6dd.startsWith("last")){
$6de=m$1.tpl$([null,findDayOfWeek$timezone$parser$iana($6dd.spanFrom(4)),m$1.larger()]);
}
else{
var $6df=function($6dg){return function(){var $6dh;
if(m$1.is$(($6dh=m$1.Integer.$st$.parse($6dg)),{t:m$1.Integer}))return $6dh;else return null}();
};
$6df.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseOnDayToken$timezone$parser$iana,d:['ceylon.time.timezone.parser.iana','parseOnDayToken','$m','parseInteger$bzuxq8']};};
var $6di=$6dd.firstInclusion(">=");
var $6dj=$6dd.firstInclusion("<=");
var $6dk;
if(m$1.nn$(($6dk=$6di))&&($6dk>(0))){
$6de=m$1.tpl$([$6df($6dd.spanFrom(($6dk+(2))).trimmed),findDayOfWeek$timezone$parser$iana($6dd.span(0,($6dk-(1)))),m$1.larger()]);
}
else{
var $6dl;
if(m$1.nn$(($6dl=$6dj))&&($6dl>(0))){
$6de=m$1.tpl$([$6df($6dd.spanFrom(($6dl+(2)))),findDayOfWeek$timezone$parser$iana($6dd.span(0,($6dl-(1)))),m$1.smaller()]);
}
else{
$6de=m$1.tpl$([$6df($6dd),null,m$1.equal()]);
}
}
}
return $6de;
};parseOnDayToken$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:'u',l:[{t:m$1.Null},DayOfMonth$timezone$model()]},{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},{t:m$1.Comparison}]},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.timezone.parser.iana','parseOnDayToken']};};
function parseYear$timezone$parser$iana($6dm,$6dn){
if("minimum".startsWith($6dm.trimmed.lowercased)){
return years$base().minimum;
}
else{
if("maximum".startsWith($6dm.trimmed.lowercased)){
return years$base().maximum;
}
else{
if($6dm.equals("only")){
return $6dn;
}
}
}
var $6do;
m$1.asrt$2("",'14:4-14:56','parseYear.ceylon',[m$1.is$(($6do=m$1.Integer.$st$.parse($6dm)),{t:m$1.Integer}),'is Integer resultYear = Integer.parse(year)']);
return $6do;
};parseYear$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'year',mt:'prm',$t:{t:m$1.$_String}},{nm:'defaultYear',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.time.timezone.parser.iana','parseYear']};};
function parseZoneFormat$timezone$parser$iana($6dp){
if(m$1.$eq$($6dp,"zzz")){
return standardZoneFormat$timezone$model();
}
else{
var $6dq;
if(m$1.nn$(($6dq=$6dp.firstOccurrence(m$1.Character(47,true))))){
var $6dr=$6dp.spanTo(($6dq-(1)));
var $6ds=$6dp.spanFrom(($6dq+(1)));
return PairAbbreviationZoneFormat$timezone$model($6dr,$6ds);
}
else{
var $6dt;
if(m$1.nn$(($6dt=$6dp.firstInclusion("%s")))){
return ReplacedZoneFormat$timezone$model($6dp);
}
else{
if(!$6dp.empty){
return AbbreviationZoneFormat$timezone$model($6dp);
}
}
}
}
return standardZoneFormat$timezone$model();
}
ex$.parseZoneFormat$timezone$parser$iana=parseZoneFormat$timezone$parser$iana;
parseZoneFormat$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseZoneFormat']};};
function parseUntil$timezone$parser$iana($6du){
var $6dv=date(0,january$base(),1);
var $6dw;
if(m$1.nn$(($6dw=$6du.$_get(0)))&&!m$1.$eq$($6dw,"")){
var $6dx;
m$1.asrt$2("",'22:8-22:57','parseUntil.ceylon',[m$1.is$(($6dx=m$1.Integer.$st$.parse($6dw)),{t:m$1.Integer}),'is Integer year = Integer.parse(yearText)']);
$6dv=$6dv.withYear($6dx);
}
else{
return untilPresent$timezone$model();
}
var $6dy;
if(m$1.nn$(($6dy=$6du.$_get(1)))&&!m$1.$eq$($6dy,"")){
$6dv=$6dv.withMonth(parseMonth$timezone$parser$iana($6dy));
}
var $6dz;
if(m$1.nn$(($6dz=$6du.$_get(2)))&&!m$1.$eq$($6dz,"")){
var $6e0=parseOnDay$timezone$parser$iana($6dz);
var $6e1=$6e0;
if(m$1.is$($6e1,{t:OnFixedDay$timezone$model})) {
$6dv=$6dv.withDay($6e1.fixedDate);
}
else if(m$1.is$($6e1,{t:OnFirstOfMonth$timezone$model})) {
$6dv=$6dv.withDay($6e1.date($6dv.year,$6dv.month).day);
}
else if(m$1.is$($6e1,{t:OnLastOfMonth$timezone$model})) {
$6dv=$6dv.withDay($6e1.date($6dv.year,$6dv.month).day);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
var $6e2;
var $6e3;
if(m$1.nn$(($6e3=$6du.$_get(3)))&&!m$1.$eq$($6e3,"")){
var $6e4=parseTime$timezone$parser$iana($6e3);
$6e2=$6e4.$_get(0);
}
else{
$6e2=AtWallClockTime$timezone$model(time(0,0));
}
return ZoneUntil$timezone$model($6dv,$6e2);
}
ex$.parseUntil$timezone$parser$iana=parseUntil$timezone$parser$iana;
parseUntil$timezone$parser$iana.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},ps:[{nm:'token',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}}}],pa:1,d:['ceylon.time.timezone.parser.iana','parseUntil']};};
function ReadableTimeZone$timezone(readableTimeZone$){
}
ReadableTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableTimeZone')];},d:['ceylon.time.timezone','ReadableTimeZone']};};
ex$.ReadableTimeZone$timezone=ReadableTimeZone$timezone;
function $init$ReadableTimeZone$timezone(){
if(ReadableTimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableTimeZone$timezone,'ceylon.time.timezone::ReadableTimeZone');
(function(readableTimeZone$){
readableTimeZone$.$prop$getTimeZone={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:ReadableTimeZone$timezone,pa:5,an:function(){return[m$1.doc("Time zone value.")];},d:['ceylon.time.timezone','ReadableTimeZone','$at','timeZone']};}};
readableTimeZone$.toString=function(){return this.string.valueOf();};
})(ReadableTimeZone$timezone.$$.prototype);
}
return ReadableTimeZone$timezone;
}
ex$.$init$ReadableTimeZone$timezone=$init$ReadableTimeZone$timezone;$init$ReadableTimeZone$timezone();
function ZoneFormat$timezone$model(zoneFormat$){
$init$ZoneFormat$timezone$model();
if(zoneFormat$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneFormat"),'?','?')
return zoneFormat$;
}
ZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneFormat$timezone$model,{t:AbbreviationZoneFormat$timezone$model},{t:PairAbbreviationZoneFormat$timezone$model},{t:ReplacedZoneFormat$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneFormat')];},d:['ceylon.time.timezone.model','ZoneFormat']};};
ex$.ZoneFormat$timezone$model=ZoneFormat$timezone$model;
function $init$ZoneFormat$timezone$model(){
if(ZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneFormat$timezone$model,'ceylon.time.timezone.model::ZoneFormat',m$1.Basic);
(function(zoneFormat$){
zoneFormat$.toString=function(){return this.string.valueOf();};
})(ZoneFormat$timezone$model.$$.prototype);
}
return ZoneFormat$timezone$model;
}
ex$.$init$ZoneFormat$timezone$model=$init$ZoneFormat$timezone$model;$init$ZoneFormat$timezone$model();
function $6e5$timezone$model(){
var standardZoneFormat$=new $6e5$timezone$model.$$;ZoneFormat$timezone$model(standardZoneFormat$);
return standardZoneFormat$;
};$6e5$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},d:['ceylon.time.timezone.model','standardZoneFormat']};};
function $init$standardZoneFormat$timezone$model(){
if($6e5$timezone$model.$$===undefined){
m$1.initTypeProto($6e5$timezone$model,'ceylon.time.timezone.model::standardZoneFormat',$init$ZoneFormat$timezone$model());
(function(standardZoneFormat$){
standardZoneFormat$.toString=function(){return this.string.valueOf();};
})($6e5$timezone$model.$$.prototype);
}
return $6e5$timezone$model;
}
ex$.$init$standardZoneFormat$timezone$model=$init$standardZoneFormat$timezone$model;$init$standardZoneFormat$timezone$model();var $6e7;
function standardZoneFormat$timezone$model(){
if($6e7===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneFormat\' before it was set"),'12:0-12:54','ZoneFormat.ceylon');
if($6e7===undefined){$6e7=m$1.INIT$;$6e7=$init$standardZoneFormat$timezone$model()();$6e7.$crtmm$=standardZoneFormat$timezone$model.$crtmm$;}
return $6e7;
}
ex$.standardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
standardZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneFormat$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneFormat']};};
$prop$getStandardZoneFormat$timezone$model=standardZoneFormat$timezone$model;
ex$.$prop$getStandardZoneFormat$timezone$model=$prop$getStandardZoneFormat$timezone$model;
function AbbreviationZoneFormat$timezone$model(abbreviation,abbreviationZoneFormat$){
$init$AbbreviationZoneFormat$timezone$model();
if(abbreviationZoneFormat$===undefined)abbreviationZoneFormat$=new AbbreviationZoneFormat$timezone$model.$$;
abbreviationZoneFormat$.abbreviation_=abbreviation;
ZoneFormat$timezone$model(abbreviationZoneFormat$);
return abbreviationZoneFormat$;
}
AbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'abbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat']};};
ex$.AbbreviationZoneFormat$timezone$model=AbbreviationZoneFormat$timezone$model;
function $init$AbbreviationZoneFormat$timezone$model(){
if(AbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(AbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::AbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(abbreviationZoneFormat$){
m$1.atr$(abbreviationZoneFormat$,'abbreviation',function(){return this.abbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$at','abbreviation']};});
abbreviationZoneFormat$.equals=function($6e8){
var abbreviationZoneFormat$=this;
var $6e9;
if(m$1.is$(($6e9=$6e8),{t:AbbreviationZoneFormat$timezone$model})){
return m$1.$eq$(abbreviationZoneFormat$.abbreviation,$6e9.abbreviation);
}
function $6ea(){return $6e8;}
return false;
};abbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','AbbreviationZoneFormat','$m','equals']};};
abbreviationZoneFormat$.toString=function(){return this.string.valueOf();};
})(AbbreviationZoneFormat$timezone$model.$$.prototype);
}
return AbbreviationZoneFormat$timezone$model;
}
ex$.$init$AbbreviationZoneFormat$timezone$model=$init$AbbreviationZoneFormat$timezone$model;$init$AbbreviationZoneFormat$timezone$model();
function PairAbbreviationZoneFormat$timezone$model(standardAbbreviation,daylightAbbreviation,pairAbbreviationZoneFormat$){
$init$PairAbbreviationZoneFormat$timezone$model();
if(pairAbbreviationZoneFormat$===undefined)pairAbbreviationZoneFormat$=new PairAbbreviationZoneFormat$timezone$model.$$;
pairAbbreviationZoneFormat$.standardAbbreviation_=standardAbbreviation;
pairAbbreviationZoneFormat$.daylightAbbreviation_=daylightAbbreviation;
ZoneFormat$timezone$model(pairAbbreviationZoneFormat$);
return pairAbbreviationZoneFormat$;
}
PairAbbreviationZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'standardAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1},{nm:'daylightAbbreviation',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat']};};
ex$.PairAbbreviationZoneFormat$timezone$model=PairAbbreviationZoneFormat$timezone$model;
function $init$PairAbbreviationZoneFormat$timezone$model(){
if(PairAbbreviationZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(PairAbbreviationZoneFormat$timezone$model,'ceylon.time.timezone.model::PairAbbreviationZoneFormat',$init$ZoneFormat$timezone$model());
(function(pairAbbreviationZoneFormat$){
m$1.atr$(pairAbbreviationZoneFormat$,'standardAbbreviation',function(){return this.standardAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','standardAbbreviation']};});
m$1.atr$(pairAbbreviationZoneFormat$,'daylightAbbreviation',function(){return this.daylightAbbreviation_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:PairAbbreviationZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$at','daylightAbbreviation']};});
pairAbbreviationZoneFormat$.equals=function($6eb){
var pairAbbreviationZoneFormat$=this;
var $6ec;
if(m$1.is$(($6ec=$6eb),{t:PairAbbreviationZoneFormat$timezone$model})){
return (m$1.$eq$(pairAbbreviationZoneFormat$.standardAbbreviation,$6ec.standardAbbreviation)&&m$1.$eq$(pairAbbreviationZoneFormat$.daylightAbbreviation,$6ec.daylightAbbreviation));
}
function $6ed(){return $6eb;}
return false;
};pairAbbreviationZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:PairAbbreviationZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','PairAbbreviationZoneFormat','$m','equals']};};
pairAbbreviationZoneFormat$.toString=function(){return this.string.valueOf();};
})(PairAbbreviationZoneFormat$timezone$model.$$.prototype);
}
return PairAbbreviationZoneFormat$timezone$model;
}
ex$.$init$PairAbbreviationZoneFormat$timezone$model=$init$PairAbbreviationZoneFormat$timezone$model;$init$PairAbbreviationZoneFormat$timezone$model();
function ReplacedZoneFormat$timezone$model(format,replacedZoneFormat$){
$init$ReplacedZoneFormat$timezone$model();
if(replacedZoneFormat$===undefined)replacedZoneFormat$=new ReplacedZoneFormat$timezone$model.$$;
replacedZoneFormat$.format_=format;
ZoneFormat$timezone$model(replacedZoneFormat$);
return replacedZoneFormat$;
}
ReplacedZoneFormat$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneFormat$timezone$model},ps:[{nm:'format',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat']};};
ex$.ReplacedZoneFormat$timezone$model=ReplacedZoneFormat$timezone$model;
function $init$ReplacedZoneFormat$timezone$model(){
if(ReplacedZoneFormat$timezone$model.$$===undefined){
m$1.initTypeProto(ReplacedZoneFormat$timezone$model,'ceylon.time.timezone.model::ReplacedZoneFormat',$init$ZoneFormat$timezone$model());
(function(replacedZoneFormat$){
m$1.atr$(replacedZoneFormat$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ReplacedZoneFormat$timezone$model,pa:1,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$at','format']};});
replacedZoneFormat$.equals=function($6ee){
var replacedZoneFormat$=this;
var $6ef;
if(m$1.is$(($6ef=$6ee),{t:ReplacedZoneFormat$timezone$model})){
return m$1.$eq$(replacedZoneFormat$.format,$6ef.format);
}
function $6eg(){return $6ee;}
return false;
};replacedZoneFormat$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ReplacedZoneFormat$timezone$model,pa:3,d:['ceylon.time.timezone.model','ReplacedZoneFormat','$m','equals']};};
replacedZoneFormat$.toString=function(){return this.string.valueOf();};
})(ReplacedZoneFormat$timezone$model.$$.prototype);
}
return ReplacedZoneFormat$timezone$model;
}
ex$.$init$ReplacedZoneFormat$timezone$model=$init$ReplacedZoneFormat$timezone$model;$init$ReplacedZoneFormat$timezone$model();
function Year$timezone$model(){var $6eh={t:m$1.Integer};$6eh.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Year')];},d:['ceylon.time.timezone.model','Year']};};return $6eh;}
ex$.Year$timezone$model=Year$timezone$model;
function Rule$timezone$model(fromYear,toYear,inMonth,onDay,atTime,save,letter,rule$){
$init$Rule$timezone$model();
if(rule$===undefined)rule$=new Rule$timezone$model.$$;
rule$.fromYear_=fromYear;
rule$.toYear_=toYear;
rule$.inMonth_=inMonth;
rule$.onDay_=onDay;
rule$.atTime_=atTime;
rule$.save_=save;
rule$.letter_=letter;
return rule$;
}
Rule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fromYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'toYear',mt:'prm',$t:Year$timezone$model(),pa:1},{nm:'inMonth',mt:'prm',$t:{t:Month$base},pa:1},{nm:'onDay',mt:'prm',$t:{t:OnDay$timezone$model},pa:1},{nm:'atTime',mt:'prm',$t:{t:AtTime$timezone$model},pa:1},{nm:'save',mt:'prm',$t:{t:Period},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,an:function(){return[m$1.doc("Timezone transition rule.")];},d:['ceylon.time.timezone.model','Rule']};};
ex$.Rule$timezone$model=Rule$timezone$model;
function $init$Rule$timezone$model(){
if(Rule$timezone$model.$$===undefined){
m$1.initTypeProto(Rule$timezone$model,'ceylon.time.timezone.model::Rule',m$1.Basic);
(function(rule$){
m$1.atr$(rule$,'fromYear',function(){return this.fromYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','fromYear']};});
m$1.atr$(rule$,'toYear',function(){return this.toYear_;},undefined,function(){return{mod:$CCMM$,$t:Year$timezone$model(),$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','toYear']};});
m$1.atr$(rule$,'inMonth',function(){return this.inMonth_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','inMonth']};});
m$1.atr$(rule$,'onDay',function(){return this.onDay_;},undefined,function(){return{mod:$CCMM$,$t:{t:OnDay$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','onDay']};});
m$1.atr$(rule$,'atTime',function(){return this.atTime_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','atTime']};});
m$1.atr$(rule$,'save',function(){return this.save_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','save']};});
m$1.atr$(rule$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:1,d:['ceylon.time.timezone.model','Rule','$at','letter']};});
rule$.equals=function($6ei){
var rule$=this;
var $6ej;
if(m$1.is$(($6ej=$6ei),{t:Rule$timezone$model})){
return ((((((m$1.$eq$(rule$.fromYear,$6ej.fromYear)&&m$1.$eq$(rule$.toYear,$6ej.toYear))&&m$1.$eq$(rule$.inMonth,$6ej.inMonth))&&m$1.$eq$(rule$.onDay,$6ej.onDay))&&m$1.$eq$(rule$.atTime,$6ej.atTime))&&m$1.$eq$(rule$.save,$6ej.save))&&m$1.$eq$(rule$.letter,$6ej.letter));
}
function $6ek(){return $6ei;}
return false;
};rule$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$m','equals']};};
m$1.atr$(rule$,'string',function(){
var rule$=this;
return ("fromYear: \'"+rule$.fromYear.string+"\', toYear: \'"+rule$.toYear.string+"\', inMonth: \'"+rule$.inMonth.string+"\',\nonDay: \'"+rule$.onDay.string+"\', atTime: \'"+rule$.atTime.string+"\', save: \'"+rule$.save.string+"\', letter: \'"+rule$.letter+"\'");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Rule$timezone$model,pa:3,d:['ceylon.time.timezone.model','Rule','$at','string']};});
rule$.toString=function(){return this.string.valueOf();};
})(Rule$timezone$model.$$.prototype);
}
return Rule$timezone$model;
}
ex$.$init$Rule$timezone$model=$init$Rule$timezone$model;$init$Rule$timezone$model();
function RealName$timezone$model(){var $6el={t:m$1.$_String};$6el.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:RealName')];},d:['ceylon.time.timezone.model','RealName']};};return $6el;}
ex$.RealName$timezone$model=RealName$timezone$model;
function AliasName$timezone$model(){var $6em={t:m$1.$_String};$6em.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AliasName')];},d:['ceylon.time.timezone.model','AliasName']};};return $6em;}
ex$.AliasName$timezone$model=AliasName$timezone$model;
function Link$timezone$model(){var $6en=m$1.mtt$([{t:m$1.$_String},{t:m$1.$_String}]);$6en.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:Link')];},d:['ceylon.time.timezone.model','Link']};};return $6en;}
ex$.Link$timezone$model=Link$timezone$model;
function ZoneTimeline$timezone$model(offset,rule,format,until,zoneTimeline$){
$init$ZoneTimeline$timezone$model();
if(zoneTimeline$===undefined)zoneTimeline$=new ZoneTimeline$timezone$model.$$;
zoneTimeline$.offset_=offset;
zoneTimeline$.rule_=rule;
zoneTimeline$.format_=format;
zoneTimeline$.until_=until;
return zoneTimeline$;
}
ZoneTimeline$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offset',mt:'prm',$t:{t:Period},pa:1},{nm:'rule',mt:'prm',$t:{t:ZoneRule$timezone$model},pa:1},{nm:'format',mt:'prm',$t:{t:ZoneFormat$timezone$model},pa:1},{nm:'until',mt:'prm',$t:{t:ZoneUntil$timezone$model},pa:1}],pa:1,d:['ceylon.time.timezone.model','ZoneTimeline']};};
ex$.ZoneTimeline$timezone$model=ZoneTimeline$timezone$model;
function $init$ZoneTimeline$timezone$model(){
if(ZoneTimeline$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneTimeline$timezone$model,'ceylon.time.timezone.model::ZoneTimeline',m$1.Basic);
(function(zoneTimeline$){
m$1.atr$(zoneTimeline$,'offset',function(){return this.offset_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','offset']};});
m$1.atr$(zoneTimeline$,'rule',function(){return this.rule_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneRule$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','rule']};});
m$1.atr$(zoneTimeline$,'format',function(){return this.format_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneFormat$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','format']};});
m$1.atr$(zoneTimeline$,'until',function(){return this.until_;},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},$cont:ZoneTimeline$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneTimeline','$at','until']};});
zoneTimeline$.equals=function($6eo){
var zoneTimeline$=this;
var $6ep;
if(m$1.is$(($6ep=$6eo),{t:ZoneTimeline$timezone$model})){
return (((m$1.$eq$(zoneTimeline$.offset,$6ep.offset)&&m$1.$eq$(zoneTimeline$.rule,$6ep.rule))&&m$1.$eq$(zoneTimeline$.format,$6ep.format))&&m$1.$eq$(zoneTimeline$.until,$6ep.until));
}
function $6eq(){return $6eo;}
return false;
};zoneTimeline$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneTimeline$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneTimeline','$m','equals']};};
zoneTimeline$.toString=function(){return this.string.valueOf();};
})(ZoneTimeline$timezone$model.$$.prototype);
}
return ZoneTimeline$timezone$model;
}
ex$.$init$ZoneTimeline$timezone$model=$init$ZoneTimeline$timezone$model;$init$ZoneTimeline$timezone$model();
function DayOfMonth$timezone$model(){var $6er={t:m$1.Integer};$6er.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc("Alias to represent a specific day.")];},d:['ceylon.time.timezone.model','DayOfMonth']};};return $6er;}
ex$.DayOfMonth$timezone$model=DayOfMonth$timezone$model;
function OnDay$timezone$model(onDay$){
$init$OnDay$timezone$model();
if(onDay$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::OnDay"),'?','?')
return onDay$;
}
OnDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[{t:OnFixedDay$timezone$model},{t:OnFirstOfMonth$timezone$model},{t:OnLastOfMonth$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnDay')];},d:['ceylon.time.timezone.model','OnDay']};};
ex$.OnDay$timezone$model=OnDay$timezone$model;
function $init$OnDay$timezone$model(){
if(OnDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnDay$timezone$model,'ceylon.time.timezone.model::OnDay',m$1.Basic);
(function(onDay$){
onDay$.date={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnDay$timezone$model,pa:5,d:['ceylon.time.timezone.model','OnDay','$m','date']};}};onDay$.toString=function(){return this.string.valueOf();};
})(OnDay$timezone$model.$$.prototype);
}
return OnDay$timezone$model;
}
ex$.$init$OnDay$timezone$model=$init$OnDay$timezone$model;$init$OnDay$timezone$model();
function OnFixedDay$timezone$model(fixedDate,onFixedDay$){
$init$OnFixedDay$timezone$model();
if(onFixedDay$===undefined)onFixedDay$=new OnFixedDay$timezone$model.$$;
onFixedDay$.fixedDate_=fixedDate;
OnDay$timezone$model(onFixedDay$);
return onFixedDay$;
}
OnFixedDay$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'fixedDate',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFixedDay')];},d:['ceylon.time.timezone.model','OnFixedDay']};};
ex$.OnFixedDay$timezone$model=OnFixedDay$timezone$model;
function $init$OnFixedDay$timezone$model(){
if(OnFixedDay$timezone$model.$$===undefined){
m$1.initTypeProto(OnFixedDay$timezone$model,'ceylon.time.timezone.model::OnFixedDay',$init$OnDay$timezone$model());
(function(onFixedDay$){
m$1.atr$(onFixedDay$,'fixedDate',function(){return this.fixedDate_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFixedDay$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFixedDay','$at','fixedDate']};});
onFixedDay$.equals=function($6es){
var onFixedDay$=this;
var $6et;
if(m$1.is$(($6et=$6es),{t:OnFixedDay$timezone$model})){
return m$1.$eq$(onFixedDay$.fixedDate,$6et.fixedDate);
}
function $6eu(){return $6es;}
return false;
};onFixedDay$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','equals']};};
onFixedDay$.date=function($6ev,$6ew){
var onFixedDay$=this;
return date($6ev,$6ew,onFixedDay$.fixedDate);
};onFixedDay$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFixedDay$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFixedDay','$m','date']};};
onFixedDay$.toString=function(){return this.string.valueOf();};
})(OnFixedDay$timezone$model.$$.prototype);
}
return OnFixedDay$timezone$model;
}
ex$.$init$OnFixedDay$timezone$model=$init$OnFixedDay$timezone$model;$init$OnFixedDay$timezone$model();
function OnFirstOfMonth$timezone$model(dayOfWeek,onDateOrAfter,onFirstOfMonth$){
$init$OnFirstOfMonth$timezone$model();
if(onFirstOfMonth$===undefined)onFirstOfMonth$=new OnFirstOfMonth$timezone$model.$$;
onFirstOfMonth$.dayOfWeek_=dayOfWeek;
onFirstOfMonth$.onDateOrAfter_=onDateOrAfter;
OnDay$timezone$model(onFirstOfMonth$);
return onFirstOfMonth$;
}
OnFirstOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1},{nm:'onDateOrAfter',mt:'prm',$t:DayOfMonth$timezone$model(),pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnFirstOfMonth')];},d:['ceylon.time.timezone.model','OnFirstOfMonth']};};
ex$.OnFirstOfMonth$timezone$model=OnFirstOfMonth$timezone$model;
function $init$OnFirstOfMonth$timezone$model(){
if(OnFirstOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnFirstOfMonth$timezone$model,'ceylon.time.timezone.model::OnFirstOfMonth',$init$OnDay$timezone$model());
(function(onFirstOfMonth$){
m$1.atr$(onFirstOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','dayOfWeek']};});
m$1.atr$(onFirstOfMonth$,'onDateOrAfter',function(){return this.onDateOrAfter_;},undefined,function(){return{mod:$CCMM$,$t:DayOfMonth$timezone$model(),$cont:OnFirstOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnFirstOfMonth','$at','onDateOrAfter']};});
onFirstOfMonth$.equals=function($6ex){
var onFirstOfMonth$=this;
var $6ey;
if(m$1.is$(($6ey=$6ex),{t:OnFirstOfMonth$timezone$model})){
return (m$1.$eq$(onFirstOfMonth$.onDateOrAfter,$6ey.onDateOrAfter)&&m$1.$eq$(onFirstOfMonth$.dayOfWeek,$6ey.dayOfWeek));
}
function $6ez(){return $6ex;}
return false;
};onFirstOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','equals']};};
onFirstOfMonth$.date=function($6f0,$6f1){
var onFirstOfMonth$=this;
var $6f2=date($6f0,$6f1,onFirstOfMonth$.onDateOrAfter);
var $6f3;
m$1.asrt$2("onDateOrAfter should always be a valid day for the month",'65:8-66:131','OnDay.ceylon',[m$1.nn$(($6f3=$6f2.rangeTo($6f2.withDay($6f1.numberOfDays($6f2.leapYear))).find(m$1.jsc$2(m$1.jsc$3(onFirstOfMonth$,onFirstOfMonth$.$wgb6s9$6f4),[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],{})))),'exists result = initial.rangeTo(initial.withDay(month.numberOfDays(initial.leapYear))).find(matchesDayOfWeekAndDay)']);
return $6f3;
};onFirstOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnFirstOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','date']};};
onFirstOfMonth$.$wgb6s9$6f4=function($6f5){
var onFirstOfMonth$=this;
return ($6f5.day.notSmallerThan(onFirstOfMonth$.onDateOrAfter)&&m$1.$eq$($6f5.dayOfWeek,onFirstOfMonth$.dayOfWeek));
};onFirstOfMonth$.$wgb6s9$6f4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'dateTime',mt:'prm',$t:{t:$_Date}}],$cont:OnFirstOfMonth$timezone$model,d:['ceylon.time.timezone.model','OnFirstOfMonth','$m','matchesDayOfWeekAndDay$42vt2u']};};
onFirstOfMonth$.toString=function(){return this.string.valueOf();};
})(OnFirstOfMonth$timezone$model.$$.prototype);
}
return OnFirstOfMonth$timezone$model;
}
ex$.$init$OnFirstOfMonth$timezone$model=$init$OnFirstOfMonth$timezone$model;$init$OnFirstOfMonth$timezone$model();
function OnLastOfMonth$timezone$model(dayOfWeek,onLastOfMonth$){
$init$OnLastOfMonth$timezone$model();
if(onLastOfMonth$===undefined)onLastOfMonth$=new OnLastOfMonth$timezone$model.$$;
onLastOfMonth$.dayOfWeek_=dayOfWeek;
OnDay$timezone$model(onLastOfMonth$);
return onLastOfMonth$;
}
OnLastOfMonth$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OnDay$timezone$model},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:OnLastOfMonth')];},d:['ceylon.time.timezone.model','OnLastOfMonth']};};
ex$.OnLastOfMonth$timezone$model=OnLastOfMonth$timezone$model;
function $init$OnLastOfMonth$timezone$model(){
if(OnLastOfMonth$timezone$model.$$===undefined){
m$1.initTypeProto(OnLastOfMonth$timezone$model,'ceylon.time.timezone.model::OnLastOfMonth',$init$OnDay$timezone$model());
(function(onLastOfMonth$){
m$1.atr$(onLastOfMonth$,'dayOfWeek',function(){return this.dayOfWeek_;},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:OnLastOfMonth$timezone$model,pa:1,d:['ceylon.time.timezone.model','OnLastOfMonth','$at','dayOfWeek']};});
onLastOfMonth$.equals=function($6f6){
var onLastOfMonth$=this;
var $6f7;
if(m$1.is$(($6f7=$6f6),{t:OnLastOfMonth$timezone$model})){
return m$1.$eq$(onLastOfMonth$.dayOfWeek,$6f7.dayOfWeek);
}
function $6f8(){return $6f6;}
return false;
};onLastOfMonth$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','equals']};};
onLastOfMonth$.date=function($6f9,$6fa){
var onLastOfMonth$=this;
var $6fb=date($6f9,$6fa,$6fa.numberOfDays(gregorian$chronology().leapYear($6f9)));
var $6fc=$6fb.rangeTo($6fb.withDay(1)).find(m$1.jsc$2((function($6fd){return m$1.$eq$($6fd.dayOfWeek,onLastOfMonth$.dayOfWeek);
}),[{nm:'element',mt:'prm',$t:{t:$_Date}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:$_Date}])}));
var $6fe;
m$1.asrt$2("",'98:8-98:29','OnDay.ceylon',[m$1.nn$(($6fe=$6fc)),'exists result']);
return $6fe;
};onLastOfMonth$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:Year$timezone$model()},{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:OnLastOfMonth$timezone$model,pa:3,d:['ceylon.time.timezone.model','OnLastOfMonth','$m','date']};};
onLastOfMonth$.toString=function(){return this.string.valueOf();};
})(OnLastOfMonth$timezone$model.$$.prototype);
}
return OnLastOfMonth$timezone$model;
}
ex$.$init$OnLastOfMonth$timezone$model=$init$OnLastOfMonth$timezone$model;$init$OnLastOfMonth$timezone$model();
function ZoneRule$timezone$model(zoneRule$){
$init$ZoneRule$timezone$model();
if(zoneRule$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::ZoneRule"),'?','?')
return zoneRule$;
}
ZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getStandardZoneRule$timezone$model,{t:PeriodZoneRule$timezone$model},{t:BasedZoneRule$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneRule')];},d:['ceylon.time.timezone.model','ZoneRule']};};
ex$.ZoneRule$timezone$model=ZoneRule$timezone$model;
function $init$ZoneRule$timezone$model(){
if(ZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneRule$timezone$model,'ceylon.time.timezone.model::ZoneRule',m$1.Basic);
(function(zoneRule$){
zoneRule$.toString=function(){return this.string.valueOf();};
})(ZoneRule$timezone$model.$$.prototype);
}
return ZoneRule$timezone$model;
}
ex$.$init$ZoneRule$timezone$model=$init$ZoneRule$timezone$model;$init$ZoneRule$timezone$model();
function $6ff$timezone$model(){
var standardZoneRule$=new $6ff$timezone$model.$$;ZoneRule$timezone$model(standardZoneRule$);
return standardZoneRule$;
};$6ff$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},d:['ceylon.time.timezone.model','standardZoneRule']};};
function $init$standardZoneRule$timezone$model(){
if($6ff$timezone$model.$$===undefined){
m$1.initTypeProto($6ff$timezone$model,'ceylon.time.timezone.model::standardZoneRule',$init$ZoneRule$timezone$model());
(function(standardZoneRule$){
standardZoneRule$.toString=function(){return this.string.valueOf();};
})($6ff$timezone$model.$$.prototype);
}
return $6ff$timezone$model;
}
ex$.$init$standardZoneRule$timezone$model=$init$standardZoneRule$timezone$model;$init$standardZoneRule$timezone$model();var $6fh;
function standardZoneRule$timezone$model(){
if($6fh===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'standardZoneRule\' before it was set"),'15:0-15:50','ZoneRule.ceylon');
if($6fh===undefined){$6fh=m$1.INIT$;$6fh=$init$standardZoneRule$timezone$model()();$6fh.$crtmm$=standardZoneRule$timezone$model.$crtmm$;}
return $6fh;
}
ex$.standardZoneRule$timezone$model=standardZoneRule$timezone$model;
standardZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$standardZoneRule$timezone$model()},pa:1,d:['ceylon.time.timezone.model','standardZoneRule']};};
$prop$getStandardZoneRule$timezone$model=standardZoneRule$timezone$model;
ex$.$prop$getStandardZoneRule$timezone$model=$prop$getStandardZoneRule$timezone$model;
function PeriodZoneRule$timezone$model(period,periodZoneRule$){
$init$PeriodZoneRule$timezone$model();
if(periodZoneRule$===undefined)periodZoneRule$=new PeriodZoneRule$timezone$model.$$;
periodZoneRule$.period_=period;
ZoneRule$timezone$model(periodZoneRule$);
return periodZoneRule$;
}
PeriodZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'period',mt:'prm',$t:{t:Period},pa:1}],pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule']};};
ex$.PeriodZoneRule$timezone$model=PeriodZoneRule$timezone$model;
function $init$PeriodZoneRule$timezone$model(){
if(PeriodZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(PeriodZoneRule$timezone$model,'ceylon.time.timezone.model::PeriodZoneRule',$init$ZoneRule$timezone$model());
(function(periodZoneRule$){
m$1.atr$(periodZoneRule$,'period',function(){return this.period_;},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:PeriodZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','PeriodZoneRule','$at','period']};});
periodZoneRule$.toString=function(){return this.string.valueOf();};
})(PeriodZoneRule$timezone$model.$$.prototype);
}
return PeriodZoneRule$timezone$model;
}
ex$.$init$PeriodZoneRule$timezone$model=$init$PeriodZoneRule$timezone$model;$init$PeriodZoneRule$timezone$model();
function BasedZoneRule$timezone$model(ruleName,basedZoneRule$){
$init$BasedZoneRule$timezone$model();
if(basedZoneRule$===undefined)basedZoneRule$=new BasedZoneRule$timezone$model.$$;
basedZoneRule$.ruleName_=ruleName;
ZoneRule$timezone$model(basedZoneRule$);
return basedZoneRule$;
}
BasedZoneRule$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:ZoneRule$timezone$model},ps:[{nm:'ruleName',mt:'prm',$t:{t:m$1.$_String},pa:1}],pa:1,d:['ceylon.time.timezone.model','BasedZoneRule']};};
ex$.BasedZoneRule$timezone$model=BasedZoneRule$timezone$model;
function $init$BasedZoneRule$timezone$model(){
if(BasedZoneRule$timezone$model.$$===undefined){
m$1.initTypeProto(BasedZoneRule$timezone$model,'ceylon.time.timezone.model::BasedZoneRule',$init$ZoneRule$timezone$model());
(function(basedZoneRule$){
m$1.atr$(basedZoneRule$,'ruleName',function(){return this.ruleName_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:BasedZoneRule$timezone$model,pa:1,d:['ceylon.time.timezone.model','BasedZoneRule','$at','ruleName']};});
basedZoneRule$.toString=function(){return this.string.valueOf();};
})(BasedZoneRule$timezone$model.$$.prototype);
}
return BasedZoneRule$timezone$model;
}
ex$.$init$BasedZoneRule$timezone$model=$init$BasedZoneRule$timezone$model;$init$BasedZoneRule$timezone$model();
var $6fi$timezone$model;function $valinit$$6fi$timezone$model(){if($6fi$timezone$model===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'untilPresent\' before it was set"),'11:0-11:113','ZoneUntil.ceylon');
if($6fi$timezone$model===undefined){$6fi$timezone$model=m$1.INIT$;$6fi$timezone$model=ZoneUntil$timezone$model(date(years$base().maximum,december$base(),31),AtWallClockTime$timezone$model(time(23,59,59,999)))};return $6fi$timezone$model;};
function untilPresent$timezone$model(){return $valinit$$6fi$timezone$model();}
ex$.untilPresent$timezone$model=untilPresent$timezone$model;
var $prop$getUntilPresent$timezone$model={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ZoneUntil$timezone$model},pa:1,d:['ceylon.time.timezone.model','untilPresent']};}};
ex$.$prop$getUntilPresent$timezone$model=$prop$getUntilPresent$timezone$model;
$prop$getUntilPresent$timezone$model.get=untilPresent$timezone$model;
untilPresent$timezone$model.$crtmm$=$prop$getUntilPresent$timezone$model.$crtmm$;
function ZoneUntil$timezone$model(date,ruleDefinition,zoneUntil$){
$init$ZoneUntil$timezone$model();
if(zoneUntil$===undefined)zoneUntil$=new ZoneUntil$timezone$model.$$;
zoneUntil$.date_=date;
zoneUntil$.ruleDefinition_=ruleDefinition;
return zoneUntil$;
}
ZoneUntil$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:1},{nm:'ruleDefinition',mt:'prm',$t:{t:AtTime$timezone$model},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:ZoneUntil')];},d:['ceylon.time.timezone.model','ZoneUntil']};};
ex$.ZoneUntil$timezone$model=ZoneUntil$timezone$model;
function $init$ZoneUntil$timezone$model(){
if(ZoneUntil$timezone$model.$$===undefined){
m$1.initTypeProto(ZoneUntil$timezone$model,'ceylon.time.timezone.model::ZoneUntil',m$1.Basic);
(function(zoneUntil$){
m$1.atr$(zoneUntil$,'date',function(){return this.date_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','date']};});
m$1.atr$(zoneUntil$,'ruleDefinition',function(){return this.ruleDefinition_;},undefined,function(){return{mod:$CCMM$,$t:{t:AtTime$timezone$model},$cont:ZoneUntil$timezone$model,pa:1,d:['ceylon.time.timezone.model','ZoneUntil','$at','ruleDefinition']};});
zoneUntil$.equals=function($6fj){
var zoneUntil$=this;
var $6fk;
if(m$1.is$(($6fk=$6fj),{t:ZoneUntil$timezone$model})){
return (m$1.$eq$(zoneUntil$.date,$6fk.date)&&m$1.$eq$(zoneUntil$.ruleDefinition,$6fk.ruleDefinition));
}
function $6fl(){return $6fj;}
return false;
};zoneUntil$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneUntil$timezone$model,pa:3,d:['ceylon.time.timezone.model','ZoneUntil','$m','equals']};};
zoneUntil$.toString=function(){return this.string.valueOf();};
})(ZoneUntil$timezone$model.$$.prototype);
}
return ZoneUntil$timezone$model;
}
ex$.$init$ZoneUntil$timezone$model=$init$ZoneUntil$timezone$model;$init$ZoneUntil$timezone$model();
function AtTime$timezone$model(time,letter,atTime$){
$init$AtTime$timezone$model();
if(atTime$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.timezone.model::AtTime"),'?','?')
atTime$.time_=time;
atTime$.letter_=letter;
return atTime$;
}
AtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'time',mt:'prm',$t:{t:Time},pa:1},{nm:'letter',mt:'prm',$t:{t:m$1.$_String},pa:1}],of:[{t:AtWallClockTime$timezone$model},{t:AtLocalMeanTime$timezone$model},{t:AtGmtTime$timezone$model},{t:AtUtcTime$timezone$model},{t:AtNauticalTime$timezone$model}],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtTime')];},d:['ceylon.time.timezone.model','AtTime']};};
ex$.AtTime$timezone$model=AtTime$timezone$model;
function $init$AtTime$timezone$model(){
if(AtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtTime$timezone$model,'ceylon.time.timezone.model::AtTime',m$1.Basic);
(function(atTime$){
m$1.atr$(atTime$,'time',function(){return this.time_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','time']};});
m$1.atr$(atTime$,'letter',function(){return this.letter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:1,d:['ceylon.time.timezone.model','AtTime','$at','letter']};});
atTime$.equals=function($6fm){
var atTime$=this;
var $6fn;
if(m$1.is$(($6fn=$6fm),{t:AtTime$timezone$model})){
return (m$1.$eq$(atTime$.time,$6fn.time)&&m$1.$eq$(atTime$.letter,$6fn.letter));
}
function $6fo(){return $6fm;}
return false;
};atTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$m','equals']};};
m$1.atr$(atTime$,'string',function(){
var atTime$=this;
return ("time: \'"+atTime$.time.string+"\', letter: \'"+atTime$.letter+"\'");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:AtTime$timezone$model,pa:3,d:['ceylon.time.timezone.model','AtTime','$at','string']};});
atTime$.toString=function(){return this.string.valueOf();};
})(AtTime$timezone$model.$$.prototype);
}
return AtTime$timezone$model;
}
ex$.$init$AtTime$timezone$model=$init$AtTime$timezone$model;$init$AtTime$timezone$model();
function AtWallClockTime$timezone$model($wgb6s9$6fp,atWallClockTime$){
$init$AtWallClockTime$timezone$model();
if(atWallClockTime$===undefined)atWallClockTime$=new AtWallClockTime$timezone$model.$$;
atWallClockTime$.$wgb6s9$6fp_=$wgb6s9$6fp;
AtTime$timezone$model($wgb6s9$6fp,"u",atWallClockTime$);
return atWallClockTime$;
}
AtWallClockTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtWallClockTime')];},d:['ceylon.time.timezone.model','AtWallClockTime']};};
ex$.AtWallClockTime$timezone$model=AtWallClockTime$timezone$model;
function $init$AtWallClockTime$timezone$model(){
if(AtWallClockTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtWallClockTime$timezone$model,'ceylon.time.timezone.model::AtWallClockTime',$init$AtTime$timezone$model());
(function(atWallClockTime$){
m$1.atr$(atWallClockTime$,'$wgb6s9$6fp',function(){return this.$wgb6s9$6fp_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtWallClockTime$timezone$model,d:['ceylon.time.timezone.model','AtWallClockTime','$at','time$h07jro']};});
atWallClockTime$.toString=function(){return this.string.valueOf();};
})(AtWallClockTime$timezone$model.$$.prototype);
}
return AtWallClockTime$timezone$model;
}
ex$.$init$AtWallClockTime$timezone$model=$init$AtWallClockTime$timezone$model;$init$AtWallClockTime$timezone$model();
function AtLocalMeanTime$timezone$model($wgb6s9$6fq,atLocalMeanTime$){
$init$AtLocalMeanTime$timezone$model();
if(atLocalMeanTime$===undefined)atLocalMeanTime$=new AtLocalMeanTime$timezone$model.$$;
atLocalMeanTime$.$wgb6s9$6fq_=$wgb6s9$6fq;
AtTime$timezone$model($wgb6s9$6fq,"s",atLocalMeanTime$);
return atLocalMeanTime$;
}
AtLocalMeanTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model:AtLocalMeanTime')];},d:['ceylon.time.timezone.model','AtLocalMeanTime']};};
ex$.AtLocalMeanTime$timezone$model=AtLocalMeanTime$timezone$model;
function $init$AtLocalMeanTime$timezone$model(){
if(AtLocalMeanTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtLocalMeanTime$timezone$model,'ceylon.time.timezone.model::AtLocalMeanTime',$init$AtTime$timezone$model());
(function(atLocalMeanTime$){
m$1.atr$(atLocalMeanTime$,'$wgb6s9$6fq',function(){return this.$wgb6s9$6fq_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtLocalMeanTime$timezone$model,d:['ceylon.time.timezone.model','AtLocalMeanTime','$at','time$2ab90g']};});
atLocalMeanTime$.toString=function(){return this.string.valueOf();};
})(AtLocalMeanTime$timezone$model.$$.prototype);
}
return AtLocalMeanTime$timezone$model;
}
ex$.$init$AtLocalMeanTime$timezone$model=$init$AtLocalMeanTime$timezone$model;$init$AtLocalMeanTime$timezone$model();
function AtGmtTime$timezone$model($wgb6s9$6fr,atGmtTime$){
$init$AtGmtTime$timezone$model();
if(atGmtTime$===undefined)atGmtTime$=new AtGmtTime$timezone$model.$$;
atGmtTime$.$wgb6s9$6fr_=$wgb6s9$6fr;
AtTime$timezone$model($wgb6s9$6fr,"g",atGmtTime$);
return atGmtTime$;
}
AtGmtTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("GMT time rule.")];},d:['ceylon.time.timezone.model','AtGmtTime']};};
ex$.AtGmtTime$timezone$model=AtGmtTime$timezone$model;
function $init$AtGmtTime$timezone$model(){
if(AtGmtTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtGmtTime$timezone$model,'ceylon.time.timezone.model::AtGmtTime',$init$AtTime$timezone$model());
(function(atGmtTime$){
m$1.atr$(atGmtTime$,'$wgb6s9$6fr',function(){return this.$wgb6s9$6fr_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtGmtTime$timezone$model,d:['ceylon.time.timezone.model','AtGmtTime','$at','time$oxfz9q']};});
atGmtTime$.toString=function(){return this.string.valueOf();};
})(AtGmtTime$timezone$model.$$.prototype);
}
return AtGmtTime$timezone$model;
}
ex$.$init$AtGmtTime$timezone$model=$init$AtGmtTime$timezone$model;$init$AtGmtTime$timezone$model();
function AtUtcTime$timezone$model($wgb6s9$6fs,atUtcTime$){
$init$AtUtcTime$timezone$model();
if(atUtcTime$===undefined)atUtcTime$=new AtUtcTime$timezone$model.$$;
atUtcTime$.$wgb6s9$6fs_=$wgb6s9$6fs;
AtTime$timezone$model($wgb6s9$6fs,"u",atUtcTime$);
return atUtcTime$;
}
AtUtcTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("UTC time rule.")];},d:['ceylon.time.timezone.model','AtUtcTime']};};
ex$.AtUtcTime$timezone$model=AtUtcTime$timezone$model;
function $init$AtUtcTime$timezone$model(){
if(AtUtcTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtUtcTime$timezone$model,'ceylon.time.timezone.model::AtUtcTime',$init$AtTime$timezone$model());
(function(atUtcTime$){
m$1.atr$(atUtcTime$,'$wgb6s9$6fs',function(){return this.$wgb6s9$6fs_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtUtcTime$timezone$model,d:['ceylon.time.timezone.model','AtUtcTime','$at','time$cqe33g']};});
atUtcTime$.toString=function(){return this.string.valueOf();};
})(AtUtcTime$timezone$model.$$.prototype);
}
return AtUtcTime$timezone$model;
}
ex$.$init$AtUtcTime$timezone$model=$init$AtUtcTime$timezone$model;$init$AtUtcTime$timezone$model();
function AtNauticalTime$timezone$model($wgb6s9$6ft,atNauticalTime$){
$init$AtNauticalTime$timezone$model();
if(atNauticalTime$===undefined)atNauticalTime$=new AtNauticalTime$timezone$model.$$;
atNauticalTime$.$wgb6s9$6ft_=$wgb6s9$6ft;
AtTime$timezone$model($wgb6s9$6ft,"z",atNauticalTime$);
return atNauticalTime$;
}
AtNauticalTime$timezone$model.$crtmm$=function(){return{mod:$CCMM$,'super':{t:AtTime$timezone$model},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],pa:1,an:function(){return[m$1.doc("Nautical time rule.")];},d:['ceylon.time.timezone.model','AtNauticalTime']};};
ex$.AtNauticalTime$timezone$model=AtNauticalTime$timezone$model;
function $init$AtNauticalTime$timezone$model(){
if(AtNauticalTime$timezone$model.$$===undefined){
m$1.initTypeProto(AtNauticalTime$timezone$model,'ceylon.time.timezone.model::AtNauticalTime',$init$AtTime$timezone$model());
(function(atNauticalTime$){
m$1.atr$(atNauticalTime$,'$wgb6s9$6ft',function(){return this.$wgb6s9$6ft_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:AtNauticalTime$timezone$model,d:['ceylon.time.timezone.model','AtNauticalTime','$at','time$5xyi0b']};});
atNauticalTime$.toString=function(){return this.string.valueOf();};
})(AtNauticalTime$timezone$model.$$.prototype);
}
return AtNauticalTime$timezone$model;
}
ex$.$init$AtNauticalTime$timezone$model=$init$AtNauticalTime$timezone$model;$init$AtNauticalTime$timezone$model();
function TimeZone$timezone(timeZone$){
}
TimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,of:[{t:OffsetTimeZone$timezone},{t:RuleBasedTimezone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone')];},d:['ceylon.time.timezone','TimeZone']};};
ex$.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
if(TimeZone$timezone.$$===undefined){
m$1.initTypeProtoI(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
(function(timeZone$){
timeZone$.offset={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:TimeZone$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:TimeZone:$m:offset')];},d:['ceylon.time.timezone','TimeZone','$m','offset']};}};timeZone$.toString=function(){return this.string.valueOf();};
})(TimeZone$timezone.$$.prototype);
}
return TimeZone$timezone;
}
ex$.$init$TimeZone$timezone=$init$TimeZone$timezone;$init$TimeZone$timezone();
function OffsetTimeZone$timezone(offsetMilliseconds,offsetTimeZone$){
$init$OffsetTimeZone$timezone();
if(offsetTimeZone$===undefined)offsetTimeZone$=new OffsetTimeZone$timezone.$$;
offsetTimeZone$.offsetMilliseconds_=offsetMilliseconds;
TimeZone$timezone(offsetTimeZone$);
return offsetTimeZone$;
}
OffsetTimeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'offsetMilliseconds',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];}}],sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone')];},d:['ceylon.time.timezone','OffsetTimeZone']};};
ex$.OffsetTimeZone$timezone=OffsetTimeZone$timezone;
function $init$OffsetTimeZone$timezone(){
if(OffsetTimeZone$timezone.$$===undefined){
m$1.initTypeProto(OffsetTimeZone$timezone,'ceylon.time.timezone::OffsetTimeZone',m$1.Basic,$init$TimeZone$timezone());
(function(offsetTimeZone$){
m$1.atr$(offsetTimeZone$,'offsetMilliseconds',function(){return this.offsetMilliseconds_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:offsetMilliseconds')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};});
offsetTimeZone$.offset=function($6fu){var offsetTimeZone$=this;
return offsetTimeZone$.offsetMilliseconds;
};
offsetTimeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'instant',mt:'prm',$t:{t:Instant}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:offset')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','offset']};};
offsetTimeZone$.equals=function($6fv){
var offsetTimeZone$=this;
var $6fw;
if(m$1.is$(($6fw=$6fv),{t:OffsetTimeZone$timezone})){
return (offsetTimeZone$.offsetMilliseconds==$6fw.offsetMilliseconds);
}
function $6fx(){return $6fv;}
return false;
};offsetTimeZone$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$m:equals')];},d:['ceylon.time.timezone','OffsetTimeZone','$m','equals']};};
m$1.atr$(offsetTimeZone$,'hash',function(){
var offsetTimeZone$=this;
var $6fy=(31);
var $6fz=(7);
return (($6fy*$6fz)+offsetTimeZone$.offsetMilliseconds.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:OffsetTimeZone$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:hash')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','hash']};});m$1.atr$(offsetTimeZone$,'string',function(){
var offsetTimeZone$=this;
var $6g0=m$1.i$div(offsetTimeZone$.offsetMilliseconds.magnitude,milliseconds$base().perHour).string.padLeading(2,m$1.Character(48,true));
var $6g1=m$1.i$div(offsetTimeZone$.offsetMilliseconds.magnitude.remainder(milliseconds$base().perHour),milliseconds$base().perMinute).string.padLeading(2,m$1.Character(48,true));
if((offsetTimeZone$.offsetMilliseconds>=(0))){
return ("+"+$6g0+":"+$6g1);
}
else{
return ("-"+$6g0+":"+$6g1);
}
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetTimeZone$timezone,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:OffsetTimeZone:$at:string')];},d:['ceylon.time.timezone','OffsetTimeZone','$at','string']};});offsetTimeZone$.toString=function(){return this.string.valueOf();};
})(OffsetTimeZone$timezone.$$.prototype);
}
return OffsetTimeZone$timezone;
}
ex$.$init$OffsetTimeZone$timezone=$init$OffsetTimeZone$timezone;$init$OffsetTimeZone$timezone();
function RuleBasedTimezone$timezone(ruleBasedTimezone$){
TimeZone$timezone(ruleBasedTimezone$);
}
RuleBasedTimezone$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:TimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:RuleBasedTimezone')];},d:['ceylon.time.timezone','RuleBasedTimezone']};};
ex$.RuleBasedTimezone$timezone=RuleBasedTimezone$timezone;
function $init$RuleBasedTimezone$timezone(){
if(RuleBasedTimezone$timezone.$$===undefined){
m$1.initTypeProtoI(RuleBasedTimezone$timezone,'ceylon.time.timezone::RuleBasedTimezone',$init$TimeZone$timezone());
(function(ruleBasedTimezone$){
ruleBasedTimezone$.toString=function(){return this.string.valueOf();};
})(RuleBasedTimezone$timezone.$$.prototype);
}
return RuleBasedTimezone$timezone;
}
ex$.$init$RuleBasedTimezone$timezone=$init$RuleBasedTimezone$timezone;$init$RuleBasedTimezone$timezone();
function $6g2$timezone(){
var timeZone$=new $6g2$timezone.$$;timeZone$.$wgb6s9$6g4_=timeZone$.$wgb6s9$6g5();
timeZone$.$wgb6s9$6g6_=timeZone$.$wgb6s9$6g7();
return timeZone$;
};$6g2$timezone.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},d:['ceylon.time.timezone','timeZone']};};
function $init$timeZone$timezone(){
if($6g2$timezone.$$===undefined){
m$1.initTypeProto($6g2$timezone,'ceylon.time.timezone::timeZone',m$1.Basic);
(function(timeZone$){
function $wgb6s9$6g5(){
var timeZone$=this;
var system$timeZone$=new this.$wgb6s9$6g5.$$;system$timeZone$.outer$=this;
OffsetTimeZone$timezone(m$1.system().timezoneOffset,system$timeZone$);
return system$timeZone$;
};$wgb6s9$6g5.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$6g2$timezone,d:['ceylon.time.timezone','timeZone','$o','system']};};
function $init$system(){
if($wgb6s9$6g5.$$===undefined){
m$1.initTypeProto($wgb6s9$6g5,'ceylon.time.timezone::timeZone.system',$init$OffsetTimeZone$timezone());
$6g2$timezone.$wgb6s9$6g5=$wgb6s9$6g5;
(function(system$timeZone$){
system$timeZone$.toString=function(){return this.string.valueOf();};
})($wgb6s9$6g5.$$.prototype);
}
return $wgb6s9$6g5;
}
timeZone$.$init$system=$init$system;m$1.atr$(timeZone$,'system',function(){return this.$wgb6s9$6g4_;},undefined,function(){return{mod:$CCMM$,$t:{t:$6g2$timezone.$$.prototype.$init$system()},$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};});
timeZone$.$wgb6s9$6g5=$wgb6s9$6g5;timeZone$.$wgb6s9$6g5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6g2$timezone.$$.prototype.$init$system()},$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc("Current system time zone.")];},d:['ceylon.time.timezone','timeZone','$o','system']};};
function $wgb6s9$6g7(){
var timeZone$=this;
var utc$timeZone$=new this.$wgb6s9$6g7.$$;utc$timeZone$.outer$=this;
OffsetTimeZone$timezone(0,utc$timeZone$);
utc$timeZone$.$wgb6s9$6g9_="Z";
utc$timeZone$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$6g7,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};}};
utc$timeZone$.$prop$getString.get=function(){return string};
return utc$timeZone$;
};$wgb6s9$6g7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:OffsetTimeZone$timezone},$cont:$6g2$timezone,d:['ceylon.time.timezone','timeZone','$o','utc']};};
function $init$utc(){
if($wgb6s9$6g7.$$===undefined){
m$1.initTypeProto($wgb6s9$6g7,'ceylon.time.timezone::timeZone.utc',$init$OffsetTimeZone$timezone());
$6g2$timezone.$wgb6s9$6g7=$wgb6s9$6g7;
(function(utc$timeZone$){
m$1.atr$(utc$timeZone$,'string',function(){return this.$wgb6s9$6g9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:timeZone$.$wgb6s9$6g7,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc:$at:string')];},d:['ceylon.time.timezone','timeZone','$o','utc','$at','string']};});
utc$timeZone$.toString=function(){return this.string.valueOf();};
})($wgb6s9$6g7.$$.prototype);
}
return $wgb6s9$6g7;
}
timeZone$.$init$utc=$init$utc;m$1.atr$(timeZone$,'utc',function(){return this.$wgb6s9$6g6_;},undefined,function(){return{mod:$CCMM$,$t:{t:$6g2$timezone.$$.prototype.$init$utc()},$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};});
timeZone$.$wgb6s9$6g7=$wgb6s9$6g7;timeZone$.$wgb6s9$6g7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6g2$timezone.$$.prototype.$init$utc()},$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$o:utc')];},d:['ceylon.time.timezone','timeZone','$o','utc']};};
timeZone$.parse=function($6gb){
var timeZone$=this;
return parseTimeZone$iso8601($6gb);
};timeZone$.parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'zone',mt:'prm',$t:{t:m$1.$_String}}],$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:parse')];},d:['ceylon.time.timezone','timeZone','$m','parse']};};
timeZone$.offset$defs$minutes=function($6gc,$6gd,$6ge){return 0;};
timeZone$.offset$defs$milliseconds=function($6gc,$6gd,$6ge){return 0;};
timeZone$.offset=function($6gc,$6gd,$6ge){
var timeZone$=this;
if($6gd===undefined){$6gd=(0);}
if($6ge===undefined){$6ge=(0);}
var $6gf=((($6gc*milliseconds$base().perHour)+($6gd*milliseconds$base().perMinute))+$6ge);
m$1.asrt$2("",'88:8-88:74','TimeZone.ceylon',[($6gg=$6gf,$6gg.notSmallerThan(((-12)*milliseconds$base().perHour))&&$6gg.notLargerThan(((12)*milliseconds$base().perHour))),'-12 * ms.perHour <= offsetMilliseconds <= 12 * ms.perHour']);
if(($6gf==(0))){
return timeZone$.utc;
}
return OffsetTimeZone$timezone($6gf);
};timeZone$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:OffsetTimeZone$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$6g2$timezone,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone:$m:offset')];},d:['ceylon.time.timezone','timeZone','$m','offset']};};
$init$system();
$init$utc();
timeZone$.toString=function(){return this.string.valueOf();};
})($6g2$timezone.$$.prototype);
}
return $6g2$timezone;
}
ex$.$init$timeZone$timezone=$init$timeZone$timezone;$init$timeZone$timezone();var $6gh;
function timeZone$timezone(){
if($6gh===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'timeZone\' before it was set"),'63:0-95:0','TimeZone.ceylon');
if($6gh===undefined){$6gh=m$1.INIT$;$6gh=$init$timeZone$timezone()();$6gh.$crtmm$=timeZone$timezone.$crtmm$;}
return $6gh;
}
ex$.timeZone$timezone=timeZone$timezone;
timeZone$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$timeZone$timezone()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:timeZone')];},d:['ceylon.time.timezone','timeZone']};};
$prop$getTimeZone$timezone=timeZone$timezone;
ex$.$prop$getTimeZone$timezone=$prop$getTimeZone$timezone;
function ZoneDateTime$timezone(zoneDateTime$){
ReadableZoneDateTime$timezone(zoneDateTime$);
ReadableDateTime$base(zoneDateTime$);
ReadableTimeZone$timezone(zoneDateTime$);
DateTimeBehavior$base({Element$DateTimeBehavior:{t:ZoneDateTime$timezone},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}},zoneDateTime$);
m$1.Comparable({Other$Comparable:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Ordinal({Other$Ordinal:{t:ZoneDateTime$timezone}},zoneDateTime$);
m$1.Enumerable({Other$Enumerable:{t:ZoneDateTime$timezone}},zoneDateTime$);
}
ZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableZoneDateTime$timezone},{t:ReadableDateTime$base},{t:ReadableTimeZone$timezone},{t:DateTimeBehavior$base,a:{Element$DateTimeBehavior:{t:ZoneDateTime$timezone},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time}}},{t:m$1.Comparable,a:{Other$Comparable:{t:ZoneDateTime$timezone}}},{t:m$1.Ordinal,a:{Other$Ordinal:{t:ZoneDateTime$timezone}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:ZoneDateTime$timezone}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime')];},d:['ceylon.time.timezone','ZoneDateTime']};};
ex$.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
if(ZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$init$ReadableZoneDateTime$timezone(),$init$ReadableDateTime$base(),$init$ReadableTimeZone$timezone(),$init$DateTimeBehavior$base(),m$1.Comparable,m$1.Ordinal,m$1.Enumerable);
(function(zoneDateTime$){
zoneDateTime$.$prop$getInstant={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc("Instant used as base.")];},d:['ceylon.time.timezone','ZoneDateTime','$at','instant']};}};
m$1.atr$(zoneDateTime$,'currentOffsetMilliseconds',function(){
var zoneDateTime$=this;
return zoneDateTime$.timeZone.offset(zoneDateTime$.instant);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ZoneDateTime$timezone,pa:9,an:function(){return[m$1.doc("Returns current time zone offset from UTC in milliseconds")];},d:['ceylon.time.timezone','ZoneDateTime','$at','currentOffsetMilliseconds']};});
zoneDateTime$.$prop$getDateTime={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:ZoneDateTime$timezone,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$at:dateTime')];},d:['ceylon.time.timezone','ZoneDateTime','$at','dateTime']};}};
zoneDateTime$.equals=function($6gi){
var zoneDateTime$=this;
var $6gj;
if(m$1.is$(($6gj=$6gi),{t:ZoneDateTime$timezone})){
return (m$1.$eq$(zoneDateTime$.instant,$6gj.instant)&&m$1.$eq$(zoneDateTime$.timeZone,$6gj.timeZone));
}
function $6gk(){return $6gi;}
return false;
};zoneDateTime$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ZoneDateTime$timezone,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$m:equals')];},d:['ceylon.time.timezone','ZoneDateTime','$m','equals']};};
m$1.atr$(zoneDateTime$,'hash',function(){
var zoneDateTime$=this;
var $6gl=(31);
var $6gm=(21);
$6gm=(($6gl*$6gm)+zoneDateTime$.instant.hash);
$6gm=(($6gl*$6gm)+zoneDateTime$.timeZone.hash);
return $6gm;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ZoneDateTime$timezone,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ZoneDateTime:$at:hash')];},d:['ceylon.time.timezone','ZoneDateTime','$at','hash']};});zoneDateTime$.toString=function(){return this.string.valueOf();};
})(ZoneDateTime$timezone.$$.prototype);
}
return ZoneDateTime$timezone;
}
ex$.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;$init$ZoneDateTime$timezone();
function zoneDateTime$timezone($6gn,$6go,$6gp,$6gq,$6gr,$6gs,$6gt,$6gu){
if($6gr===undefined){$6gr=(0);}
if($6gs===undefined){$6gs=(0);}
if($6gt===undefined){$6gt=(0);}
if($6gu===undefined){$6gu=(0);}
var $6gv=dateTime($6go,$6gp,$6gq,$6gr,$6gs,$6gt,$6gu);
var $6gw=(unixTime$chronology().timeFromFixed($6gv.dayOfEra)+$6gv.millisecondsOfDay);
var $6gx=($6gw-$6gn.offset(Instant($6gw)));
return GregorianZonedDateTime$internal(Instant($6gx),$6gn);
}
ex$.zoneDateTime$timezone=zoneDateTime$timezone;
zoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',$t:{t:TimeZone$timezone}},{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'date',mt:'prm',$t:{t:m$1.Integer}},{nm:'hour',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:zoneDateTime')];},d:['ceylon.time.timezone','zoneDateTime']};};
function ReadableZoneDateTime$timezone(readableZoneDateTime$){
ReadableDate$base(readableZoneDateTime$);
ReadableTime$base(readableZoneDateTime$);
ReadableTimeZone$timezone(readableZoneDateTime$);
}
ReadableZoneDateTime$timezone.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base},{t:ReadableTimeZone$timezone}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone:ReadableZoneDateTime')];},d:['ceylon.time.timezone','ReadableZoneDateTime']};};
ex$.ReadableZoneDateTime$timezone=ReadableZoneDateTime$timezone;
function $init$ReadableZoneDateTime$timezone(){
if(ReadableZoneDateTime$timezone.$$===undefined){
m$1.initTypeProtoI(ReadableZoneDateTime$timezone,'ceylon.time.timezone::ReadableZoneDateTime',$init$ReadableDate$base(),$init$ReadableTime$base(),$init$ReadableTimeZone$timezone());
(function(readableZoneDateTime$){
readableZoneDateTime$.toString=function(){return this.string.valueOf();};
})(ReadableZoneDateTime$timezone.$$.prototype);
}
return ReadableZoneDateTime$timezone;
}
ex$.$init$ReadableZoneDateTime$timezone=$init$ReadableZoneDateTime$timezone;$init$ReadableZoneDateTime$timezone();
function GregorianZonedDateTime$internal(instant,timeZone,gregorianZonedDateTime$){
$init$GregorianZonedDateTime$internal();
if(gregorianZonedDateTime$===undefined)gregorianZonedDateTime$=new GregorianZonedDateTime$internal.$$;
gregorianZonedDateTime$.$wgb6s9$6gy_=instant;
if(timeZone===undefined){timeZone=$init$GregorianZonedDateTime$internal().$defs$timeZone(gregorianZonedDateTime$,instant);}
gregorianZonedDateTime$.$wgb6s9$6gz_=timeZone;
m$1.$_Object(gregorianZonedDateTime$);
ZoneDateTime$timezone(gregorianZonedDateTime$);
return gregorianZonedDateTime$;
}
GregorianZonedDateTime$internal.$defs$timeZone=function(gregorianZonedDateTime$,instant){return timeZone$timezone().system};GregorianZonedDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'instant',mt:'prm',$t:{t:Instant},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];}},{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone},pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];}}],sts:[{t:ZoneDateTime$timezone}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime']};};
ex$.GregorianZonedDateTime$internal=GregorianZonedDateTime$internal;
function $init$GregorianZonedDateTime$internal(){
if(GregorianZonedDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianZonedDateTime$internal,'ceylon.time.internal::GregorianZonedDateTime',m$1.$_Object,$init$ZoneDateTime$timezone());
(function(gregorianZonedDateTime$){
m$1.atr$(gregorianZonedDateTime$,'instant',function(){return this.$wgb6s9$6gy_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:instant')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};});
m$1.atr$(gregorianZonedDateTime$,'timeZone',function(){return this.$wgb6s9$6gz_;},undefined,function(){return{mod:$CCMM$,$t:{t:TimeZone$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("TimeZone to be applied in this implementation.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};});
gregorianZonedDateTime$.compare=function($6h0){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.compare($6h0.instant);
};gregorianZonedDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','compare']};};
m$1.atr$(gregorianZonedDateTime$,'day',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of month_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfEra',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfWeek',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianZonedDateTime$,'dayOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'hours',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};});
m$1.atr$(gregorianZonedDateTime$,'leapYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};});
m$1.atr$(gregorianZonedDateTime$,'milliseconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};});
m$1.atr$(gregorianZonedDateTime$,'millisecondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'minutes',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};});
m$1.atr$(gregorianZonedDateTime$,'minutesOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'month',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};});
m$1.atr$(gregorianZonedDateTime$,'seconds',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};});
m$1.atr$(gregorianZonedDateTime$,'secondsOfDay',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};});
m$1.atr$(gregorianZonedDateTime$,'weekOfYear',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianZonedDateTime$,'year',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};});
m$1.atr$(gregorianZonedDateTime$,'date',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).date;
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:date')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};});
m$1.atr$(gregorianZonedDateTime$,'time',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).time;
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:time')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};});
m$1.atr$(gregorianZonedDateTime$,'dateTime',function(){
var gregorianZonedDateTime$=this;
return GregorianDateTime$internal(gregorianZonedDateTime$.date,gregorianZonedDateTime$.time);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:dateTime')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dateTime']};});
gregorianZonedDateTime$.minusDays=function($6hj){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusDays($6hj));
};
gregorianZonedDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusDays']};};
gregorianZonedDateTime$.minusHours=function($6hl){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusHours($6hl));
};
gregorianZonedDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusHours']};};
gregorianZonedDateTime$.minusMilliseconds=function($6hm){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMilliseconds($6hm));
};
gregorianZonedDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMilliseconds']};};
gregorianZonedDateTime$.minusMinutes=function($6hn){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMinutes($6hn));
};
gregorianZonedDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMinutes']};};
gregorianZonedDateTime$.minusMonths=function($6ho){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusMonths($6ho));
};
gregorianZonedDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMonths']};};
gregorianZonedDateTime$.minusSeconds=function($6hp){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusSeconds($6hp));
};
gregorianZonedDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusSeconds']};};
gregorianZonedDateTime$.minusWeeks=function($6hq){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusWeeks($6hq));
};
gregorianZonedDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusWeeks']};};
gregorianZonedDateTime$.minusYears=function($6hr){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).minusYears($6hr));
};
gregorianZonedDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusYears']};};
gregorianZonedDateTime$.plusDays=function($6hs){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusDays($6hs));
};
gregorianZonedDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusDays']};};
gregorianZonedDateTime$.plusHours=function($6ht){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusHours($6ht));
};
gregorianZonedDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusHours']};};
gregorianZonedDateTime$.plusMilliseconds=function($6hu){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($6hu));
};
gregorianZonedDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMilliseconds']};};
gregorianZonedDateTime$.plusMinutes=function($6hv){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMinutes($6hv));
};
gregorianZonedDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMinutes']};};
gregorianZonedDateTime$.plusMonths=function($6hw){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMonths($6hw));
};
gregorianZonedDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMonths']};};
gregorianZonedDateTime$.plusSeconds=function($6hx){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusSeconds($6hx));
};
gregorianZonedDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusSeconds']};};
gregorianZonedDateTime$.plusWeeks=function($6hy){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusWeeks($6hy));
};
gregorianZonedDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusWeeks']};};
gregorianZonedDateTime$.plusYears=function($6hz){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusYears($6hz));
};
gregorianZonedDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusYears']};};
gregorianZonedDateTime$.withDay=function($6i0){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDay($6i0));
};
gregorianZonedDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDay']};};
gregorianZonedDateTime$.withHours=function($6i1){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withHours($6i1));
};
gregorianZonedDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withHours']};};
gregorianZonedDateTime$.withMilliseconds=function($6i2){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMilliseconds($6i2));
};
gregorianZonedDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMilliseconds']};};
gregorianZonedDateTime$.withMinutes=function($6i3){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMinutes($6i3));
};
gregorianZonedDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMinutes']};};
gregorianZonedDateTime$.withMonth=function($6i4){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withMonth($6i4));
};
gregorianZonedDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMonth']};};
gregorianZonedDateTime$.withSeconds=function($6i5){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withSeconds($6i5));
};
gregorianZonedDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withSeconds']};};
gregorianZonedDateTime$.withYear=function($6i6){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withYear($6i6));
};
gregorianZonedDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withYear']};};
gregorianZonedDateTime$.withWeekOfYear=function($6i7){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withWeekOfYear($6i7));
};
gregorianZonedDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withWeekOfYear']};};
gregorianZonedDateTime$.withDayOfWeek=function($6i8){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfWeek($6i8));
};
gregorianZonedDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfWeek']};};
gregorianZonedDateTime$.withDayOfYear=function($6i9){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).withDayOfYear($6i9));
};
gregorianZonedDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDayOfYear']};};
m$1.atr$(gregorianZonedDateTime$,'predecessor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).predecessor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};});
m$1.atr$(gregorianZonedDateTime$,'successor',function(){
var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).successor);
},undefined,function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};});
m$1.atr$(gregorianZonedDateTime$,'string',function(){
var gregorianZonedDateTime$=this;
return (gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).string+""+gregorianZonedDateTime$.timeZone.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianZonedDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianZonedDateTime:$at:string')];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string']};});
gregorianZonedDateTime$.$wgb6s9$6hk=function($6id){
var gregorianZonedDateTime$=this;
var $6ie=(unixTime$chronology().timeFromFixed($6id.dayOfEra)+$6id.millisecondsOfDay);
var $6if=($6ie-gregorianZonedDateTime$.timeZone.offset(gregorianZonedDateTime$.instant));
return GregorianZonedDateTime$internal(Instant($6if),gregorianZonedDateTime$.timeZone);
};gregorianZonedDateTime$.$wgb6s9$6hk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:GregorianZonedDateTime$internal},ps:[{nm:'resolved',mt:'prm',$t:{t:DateTime}}],$cont:GregorianZonedDateTime$internal,an:function(){return[m$1.doc("Fix [[DateTime]] zone absence.")];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust$npr8ju']};};
gregorianZonedDateTime$.neighbour=function($6ig){var gregorianZonedDateTime$=this;
return gregorianZonedDateTime$.$wgb6s9$6hk(gregorianZonedDateTime$.instant.dateTime(gregorianZonedDateTime$.timeZone).plusMilliseconds($6ig));
};
gregorianZonedDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','neighbour']};};
gregorianZonedDateTime$.offset=function($6ih){var gregorianZonedDateTime$=this;
return (gregorianZonedDateTime$.instant.millisecondsOfEpoch-$6ih.instant.millisecondsOfEpoch);
};
gregorianZonedDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:ZoneDateTime$timezone}}],$cont:GregorianZonedDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianZonedDateTime','$m','offset']};};
gregorianZonedDateTime$.toString=function(){return this.string.valueOf();};
})(GregorianZonedDateTime$internal.$$.prototype);
}
return GregorianZonedDateTime$internal;
}
ex$.$init$GregorianZonedDateTime$internal=$init$GregorianZonedDateTime$internal;$init$GregorianZonedDateTime$internal();GregorianZonedDateTime$internal.inst$$=function($6ii){
var gregorianZonedDateTime$=new GregorianZonedDateTime$internal.$$;
m$1.set_type_args(gregorianZonedDateTime$,{Element$DateTimeBehavior:{t:ZoneDateTime$timezone},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time},Element$DateBehavior:{t:ZoneDateTime$timezone},Element$YearBehavior:{t:ZoneDateTime$timezone},Element$MonthBehavior:{t:ZoneDateTime$timezone},Element$TimeBehavior:{t:ZoneDateTime$timezone},Other$Comparable:{t:ZoneDateTime$timezone},Other$Ordinal:{t:ZoneDateTime$timezone},Other$Enumerable:{t:ZoneDateTime$timezone}});
return gregorianZonedDateTime$;
};
GregorianZonedDateTime$internal.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time.internal::GregorianZonedDateTime.timeZone')return o.timeZone_;
else if(n==='ceylon.time.internal::GregorianZonedDateTime.instant')return o.instant_;
else throw new TypeError('unknown attribute');
};
GregorianZonedDateTime$internal.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time.internal::GregorianZonedDateTime.timeZone')o.timeZone_=i;
else if(n==='ceylon.time.internal::GregorianZonedDateTime.instant')o.instant_=i;
else throw new TypeError('unknown attribute');
};
GregorianZonedDateTime$internal.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getTimeZone)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getInstant))];
};
function intersect$internal($6ij,$6ik,$6il,$6im,$rshjet$){
return ($6ij.notLargerThan($6im)&&$6ik.notSmallerThan($6il));
}
ex$.intersect$internal=intersect$internal;
intersect$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'start',mt:'prm',$t:'Value$intersect'},{nm:'end',mt:'prm',$t:'Value$intersect'},{nm:'otherStart',mt:'prm',$t:'Value$intersect'},{nm:'otherEnd',mt:'prm',$t:'Value$intersect'}],tp:{Value$intersect:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$intersect'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:intersect')];},d:['ceylon.time.internal','intersect']};};
function overlap$internal($6in,$6io,$l6u1r1$){
var $6ip=m$1.$_sort(m$1.concatenate(m$1.$arr$sa$([$6in,$6io],m$1.mtt$([$l6u1r1$.Value$overlap,$l6u1r1$.Value$overlap])),{Element$concatenate:$l6u1r1$.Value$overlap}),{Element$sort:$l6u1r1$.Value$overlap}).measure(1,2);
if((m$1.span(($6iq=$6in,$6iq.$_get(0)),$6iq.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($6ip)&&m$1.span(($6ir=$6io,$6ir.$_get(0)),$6ir.$_get(1),{Element$span:$l6u1r1$.Value$overlap}).containsEvery($6ip))){
var $6is;
m$1.asrt$2("",'21:8-21:44','utils.ceylon',[m$1.nn$(($6is=$6ip.first)),'exists start = ordered.first']);
var $6it;
m$1.asrt$2("",'22:8-22:41','utils.ceylon',[m$1.nn$(($6it=$6ip.last)),'exists end = ordered.last']);
return m$1.tpl$([$6is,$6it]);
}
return m$1.empty();
}
ex$.overlap$internal=overlap$internal;
overlap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:'T',l:['Value$overlap','Value$overlap']},{t:m$1.Empty}]},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$overlap','Value$overlap']}}],tp:{Value$overlap:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Value$overlap'}},{t:m$1.Comparable,a:{Other$Comparable:'Value$overlap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:overlap')];},d:['ceylon.time.internal','overlap']};};
function gap$internal($6iu,$6iv,$2l6pxq$){
var $6iw=m$1.$_sort(m$1.concatenate(m$1.$arr$sa$([$6iu,$6iv],m$1.mtt$([$2l6pxq$.Value$gap,$2l6pxq$.Value$gap])),{Element$concatenate:$2l6pxq$.Value$gap}),{Element$sort:$2l6pxq$.Value$gap}).measure(1,2);
if((m$1.span(($6ix=$6iu,$6ix.$_get(0)),$6ix.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($6iw)&&m$1.span(($6iy=$6iv,$6iy.$_get(0)),$6iy.$_get(1),{Element$span:$2l6pxq$.Value$gap}).containsEvery($6iw))){
return m$1.empty();
}
var $6iz;
m$1.asrt$2("",'49:4-49:40','utils.ceylon',[m$1.nn$(($6iz=$6iw.first)),'exists start = ordered.first']);
var $6j0;
m$1.asrt$2("",'50:4-50:37','utils.ceylon',[m$1.nn$(($6j0=$6iw.last)),'exists end = ordered.last']);
return m$1.tpl$([$6iz,$6j0]);
}
ex$.gap$internal=gap$internal;
gap$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:'T',l:['Value$gap','Value$gap']},{t:m$1.Empty}]},ps:[{nm:'first',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}},{nm:'second',mt:'prm',$t:{t:'T',l:['Value$gap','Value$gap']}}],tp:{Value$gap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Value$gap'}},{t:m$1.Enumerable,a:{Other$Enumerable:'Value$gap'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gap')];},d:['ceylon.time.internal','gap']};};
function GregorianYearMonth$internal(year,month,gregorianYearMonth$){
$init$GregorianYearMonth$internal();
if(gregorianYearMonth$===undefined)gregorianYearMonth$=new GregorianYearMonth$internal.$$;
gregorianYearMonth$.$wgb6s9$6j1_=year;
gregorianYearMonth$.$wgb6s9$6j2_=month;
m$1.$_Object(gregorianYearMonth$);
YearMonth(gregorianYearMonth$);
return gregorianYearMonth$;
}
GregorianYearMonth$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer},pa:3},{nm:'month',mt:'prm',$t:{t:Month$base},pa:3}],sts:[{t:YearMonth}],pa:2049,d:['ceylon.time.internal','GregorianYearMonth']};};
ex$.GregorianYearMonth$internal=GregorianYearMonth$internal;
function $init$GregorianYearMonth$internal(){
if(GregorianYearMonth$internal.$$===undefined){
m$1.initTypeProto(GregorianYearMonth$internal,'ceylon.time.internal::GregorianYearMonth',m$1.$_Object,$init$YearMonth());
(function(gregorianYearMonth$){
m$1.atr$(gregorianYearMonth$,'year',function(){return this.$wgb6s9$6j1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','year']};});
m$1.atr$(gregorianYearMonth$,'month',function(){return this.$wgb6s9$6j2_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','month']};});
gregorianYearMonth$.compare=function($6j3){var gregorianYearMonth$=this;
return function($6j4){if($6j4===m$1.equal())return gregorianYearMonth$.month.compare($6j3.month);else if($6j4===m$1.smaller())return m$1.smaller();else if($6j4===m$1.larger())return m$1.larger();else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}(gregorianYearMonth$.year.compare($6j3.year));
};
gregorianYearMonth$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','compare']};};
m$1.atr$(gregorianYearMonth$,'leapYear',function(){
var gregorianYearMonth$=this;
return gregorian$chronology().leapYear(gregorianYearMonth$.year);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$at','leapYear']};});
gregorianYearMonth$.plusMonths=function($6j6){
var gregorianYearMonth$=this;
if(($6j6==(0))){
return gregorianYearMonth$;
}
var $6j7=gregorianYearMonth$.month.add($6j6);
var $6j8=(gregorianYearMonth$.year+$6j7.years);
return GregorianYearMonth$internal($6j8,$6j7.month);
};gregorianYearMonth$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','plusMonths']};};
gregorianYearMonth$.minusMonths=function($6j9){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusMonths((-$6j9));
};
gregorianYearMonth$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','minusMonths']};};
gregorianYearMonth$.withMonth=function($6ja){
var gregorianYearMonth$=this;
if(m$1.$eq$(gregorianYearMonth$.month,$6ja)){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal(gregorianYearMonth$.year,$6ja);
};gregorianYearMonth$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','withMonth']};};
gregorianYearMonth$.plusYears=function($6jb){
var gregorianYearMonth$=this;
if(($6jb==(0))){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal((gregorianYearMonth$.year+$6jb),gregorianYearMonth$.month);
};gregorianYearMonth$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','plusYears']};};
gregorianYearMonth$.minusYears=function($6jc){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusYears((-$6jc));
};
gregorianYearMonth$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','minusYears']};};
gregorianYearMonth$.withYear=function($6jd){
var gregorianYearMonth$=this;
if((gregorianYearMonth$.year==$6jd)){
return gregorianYearMonth$;
}
return GregorianYearMonth$internal($6jd,gregorianYearMonth$.month);
};gregorianYearMonth$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','withYear']};};
gregorianYearMonth$.neighbour=function($6je){var gregorianYearMonth$=this;
return gregorianYearMonth$.plusMonths($6je);
};
gregorianYearMonth$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','neighbour']};};
gregorianYearMonth$.offset=function($6jf){var gregorianYearMonth$=this;
return (gregorianYearMonth$.$wgb6s9$6jg(gregorianYearMonth$)-gregorianYearMonth$.$wgb6s9$6jg($6jf));
};
gregorianYearMonth$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,pa:3,d:['ceylon.time.internal','GregorianYearMonth','$m','offset']};};
gregorianYearMonth$.$wgb6s9$6jg=function($6jh){var gregorianYearMonth$=this;
return (($6jh.year*(12))+$6jh.month.integer);
};
gregorianYearMonth$.$wgb6s9$6jg.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'yearMonth',mt:'prm',$t:{t:YearMonth}}],$cont:GregorianYearMonth$internal,d:['ceylon.time.internal','GregorianYearMonth','$m','countInMonths$9amdcu']};};
m$1.atr$(gregorianYearMonth$,'string',function(){
var gregorianYearMonth$=this;
return (gregorianYearMonth$.year.string.padLeading(4,m$1.Character(48,true))+"-"+gregorianYearMonth$.month.integer.string.padLeading(2,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianYearMonth$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianYearMonth:$at:string')];},d:['ceylon.time.internal','GregorianYearMonth','$at','string']};});
gregorianYearMonth$.toString=function(){return this.string.valueOf();};
})(GregorianYearMonth$internal.$$.prototype);
}
return GregorianYearMonth$internal;
}
ex$.$init$GregorianYearMonth$internal=$init$GregorianYearMonth$internal;$init$GregorianYearMonth$internal();GregorianYearMonth$internal.inst$$=function($6jj){
var gregorianYearMonth$=new GregorianYearMonth$internal.$$;
m$1.set_type_args(gregorianYearMonth$,{Element$YearBehavior:{t:YearMonth},Element$MonthBehavior:{t:YearMonth},Other$Ordinal:{t:YearMonth},Other$Comparable:{t:YearMonth},Other$Enumerable:{t:YearMonth}});
return gregorianYearMonth$;
};
GregorianYearMonth$internal.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time.internal::GregorianYearMonth.year')return o.year_;
else if(n==='ceylon.time.internal::GregorianYearMonth.month')return o.month_;
else throw new TypeError('unknown attribute');
};
GregorianYearMonth$internal.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time.internal::GregorianYearMonth.year')o.year_=i;
else if(n==='ceylon.time.internal::GregorianYearMonth.month')o.month_=i;
else throw new TypeError('unknown attribute');
};
GregorianYearMonth$internal.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getYear)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getMonth))];
};
function gregorianYearMonth$internal($6jk,$6jl){
gregorian$chronology().checkDate(m$1.tpl$([$6jk,monthOf$base($6jl).integer,1]));
return GregorianYearMonth$internal($6jk,monthOf$base($6jl));
}
ex$.gregorianYearMonth$internal=gregorianYearMonth$internal;
gregorianYearMonth$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:YearMonth},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gregorianYearMonth')];},d:['ceylon.time.internal','gregorianYearMonth']};};
function GregorianDateTime$internal(date,time,gregorianDateTime$){
$init$GregorianDateTime$internal();
if(gregorianDateTime$===undefined)gregorianDateTime$=new GregorianDateTime$internal.$$;
gregorianDateTime$.$wgb6s9$6jm_=date;
gregorianDateTime$.$wgb6s9$6jn_=time;
m$1.$_Object(gregorianDateTime$);
DateTime(gregorianDateTime$);
return gregorianDateTime$;
}
GregorianDateTime$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'date',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];}},{nm:'time',mt:'prm',$t:{t:Time},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];}}],sts:[{t:DateTime}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime')];},d:['ceylon.time.internal','GregorianDateTime']};};
ex$.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
if(GregorianDateTime$internal.$$===undefined){
m$1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',m$1.$_Object,$init$DateTime());
(function(gregorianDateTime$){
m$1.atr$(gregorianDateTime$,'date',function(){return this.$wgb6s9$6jm_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:date')];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};});
m$1.atr$(gregorianDateTime$,'time',function(){return this.$wgb6s9$6jn_;},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:time')];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};});
gregorianDateTime$.compare=function($6jo){
var gregorianDateTime$=this;
return ($6jp=(!m$1.$eq$(gregorianDateTime$.date,$6jo.date)?gregorianDateTime$.date.compare($6jo.date):null),m$1.nn$($6jp)?$6jp:gregorianDateTime$.time.compare($6jo.time));
var $6jp;
};gregorianDateTime$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:compare')];},d:['ceylon.time.internal','GregorianDateTime','$m','compare']};};
m$1.atr$(gregorianDateTime$,'day',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.day;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:day')];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};});
m$1.atr$(gregorianDateTime$,'dayOfWeek',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfWeek;
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};});
m$1.atr$(gregorianDateTime$,'dayOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};});
m$1.atr$(gregorianDateTime$,'dayOfEra',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.dayOfEra;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns _day of year_ value of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};});
m$1.atr$(gregorianDateTime$,'year',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.year;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};});
m$1.atr$(gregorianDateTime$,'leapYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.leapYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:leapYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};});
m$1.atr$(gregorianDateTime$,'weekOfYear',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.weekOfYear;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};});
m$1.atr$(gregorianDateTime$,'month',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.date.month;
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};});
m$1.atr$(gregorianDateTime$,'hours',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.hours;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of full hours elapsed since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};});
m$1.atr$(gregorianDateTime$,'milliseconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.milliseconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};});
m$1.atr$(gregorianDateTime$,'millisecondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.millisecondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};});
m$1.atr$(gregorianDateTime$,'minutes',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutes;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};});
m$1.atr$(gregorianDateTime$,'minutesOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.minutesOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};});
m$1.atr$(gregorianDateTime$,'seconds',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.seconds;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};});
m$1.atr$(gregorianDateTime$,'secondsOfDay',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.time.secondsOfDay;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};});
gregorianDateTime$.plusYears=function($6k5){var gregorianDateTime$=this;
return ($6k6=gregorianDateTime$.date.plusYears($6k5),$6k7=gregorianDateTime$.time,GregorianDateTime$internal($6k6,$6k7));
var $6k6,$6k7;
};
gregorianDateTime$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusYears']};};
gregorianDateTime$.minusYears=function($6k8){var gregorianDateTime$=this;
return ($6k9=gregorianDateTime$.date.minusYears($6k8),$6ka=gregorianDateTime$.time,GregorianDateTime$internal($6k9,$6ka));
var $6k9,$6ka;
};
gregorianDateTime$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusYears')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusYears']};};
gregorianDateTime$.plusMonths=function($6kb){var gregorianDateTime$=this;
return ($6kc=gregorianDateTime$.date.plusMonths($6kb),$6kd=gregorianDateTime$.time,GregorianDateTime$internal($6kc,$6kd));
var $6kc,$6kd;
};
gregorianDateTime$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMonths']};};
gregorianDateTime$.minusMonths=function($6ke){var gregorianDateTime$=this;
return gregorianDateTime$.plusMonths((-$6ke));
};
gregorianDateTime$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMonths']};};
gregorianDateTime$.plusWeeks=function($6kf){var gregorianDateTime$=this;
return ($6kg=gregorianDateTime$.date.plusWeeks($6kf),$6kh=gregorianDateTime$.time,GregorianDateTime$internal($6kg,$6kh));
var $6kg,$6kh;
};
gregorianDateTime$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusWeeks']};};
gregorianDateTime$.minusWeeks=function($6ki){var gregorianDateTime$=this;
return gregorianDateTime$.plusWeeks((-$6ki));
};
gregorianDateTime$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusWeeks']};};
gregorianDateTime$.plusDays=function($6kj){var gregorianDateTime$=this;
return ($6kk=gregorianDateTime$.date.plusDays($6kj),$6kl=gregorianDateTime$.time,GregorianDateTime$internal($6kk,$6kl));
var $6kk,$6kl;
};
gregorianDateTime$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusDays']};};
gregorianDateTime$.minusDays=function($6km){var gregorianDateTime$=this;
return gregorianDateTime$.plusDays((-$6km));
};
gregorianDateTime$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusDays')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusDays']};};
gregorianDateTime$.plusHours=function($6kn){
var gregorianDateTime$=this;
if(($6kn==(0))){
return gregorianDateTime$;
}
var $6ko=($6kp=(($6kn>=(0))?(1):null),m$1.nn$($6kp)?$6kp:(-1));
var $6kp;
return ($6kq=($6kn*$6ko),$6kr=$6ko,gregorianDateTime$.$wgb6s9$6ks($6kq,undefined,undefined,undefined,$6kr));
var $6kq,$6kr;
};gregorianDateTime$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours']};};
gregorianDateTime$.minusHours=function($6kt){var gregorianDateTime$=this;
return gregorianDateTime$.plusHours((-$6kt));
};
gregorianDateTime$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusHours']};};
gregorianDateTime$.plusMinutes=function($6ku){
var gregorianDateTime$=this;
if(($6ku==(0))){
return gregorianDateTime$;
}
var $6kv=($6kw=(($6ku>=(0))?(1):null),m$1.nn$($6kw)?$6kw:(-1));
var $6kw;
return ($6kx=($6ku*$6kv),$6ky=$6kv,gregorianDateTime$.$wgb6s9$6ks(undefined,$6kx,undefined,undefined,$6ky));
var $6kx,$6ky;
};gregorianDateTime$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes']};};
gregorianDateTime$.minusMinutes=function($6kz){var gregorianDateTime$=this;
return gregorianDateTime$.plusMinutes((-$6kz));
};
gregorianDateTime$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMinutes']};};
gregorianDateTime$.plusSeconds=function($6l0){
var gregorianDateTime$=this;
if(($6l0==(0))){
return gregorianDateTime$;
}
var $6l1=($6l2=(($6l0>=(0))?(1):null),m$1.nn$($6l2)?$6l2:(-1));
var $6l2;
return ($6l3=($6l0*$6l1),$6l4=$6l1,gregorianDateTime$.$wgb6s9$6ks(undefined,undefined,$6l3,undefined,$6l4));
var $6l3,$6l4;
};gregorianDateTime$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds']};};
gregorianDateTime$.minusSeconds=function($6l5){var gregorianDateTime$=this;
return gregorianDateTime$.plusSeconds((-$6l5));
};
gregorianDateTime$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusSeconds']};};
gregorianDateTime$.plusMilliseconds=function($6l6){
var gregorianDateTime$=this;
if(($6l6==(0))){
return gregorianDateTime$;
}
var $6l7=($6l8=(($6l6>=(0))?(1):null),m$1.nn$($6l8)?$6l8:(-1));
var $6l8;
return ($6l9=($6l6*$6l7),$6la=$6l7,gregorianDateTime$.$wgb6s9$6ks(undefined,undefined,undefined,$6l9,$6la));
var $6l9,$6la;
};gregorianDateTime$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds']};};
gregorianDateTime$.minusMilliseconds=function($6lb){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds((-$6lb));
};
gregorianDateTime$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minusMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMilliseconds']};};
gregorianDateTime$.withDay=function($6lc){var gregorianDateTime$=this;
return ($6ld=gregorianDateTime$.date.withDay($6lc),$6le=gregorianDateTime$.time,GregorianDateTime$internal($6ld,$6le));
var $6ld,$6le;
};
gregorianDateTime$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDay')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDay']};};
gregorianDateTime$.withHours=function($6lf){var gregorianDateTime$=this;
return ($6lg=gregorianDateTime$.date,$6lh=gregorianDateTime$.time.withHours($6lf),GregorianDateTime$internal($6lg,$6lh));
var $6lg,$6lh;
};
gregorianDateTime$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withHours')];},d:['ceylon.time.internal','GregorianDateTime','$m','withHours']};};
gregorianDateTime$.withYear=function($6li){var gregorianDateTime$=this;
return ($6lj=gregorianDateTime$.date.withYear($6li),$6lk=gregorianDateTime$.time,GregorianDateTime$internal($6lj,$6lk));
var $6lj,$6lk;
};
gregorianDateTime$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withYear']};};
gregorianDateTime$.withMonth=function($6ll){var gregorianDateTime$=this;
return ($6lm=gregorianDateTime$.date.withMonth($6ll),$6ln=gregorianDateTime$.time,GregorianDateTime$internal($6lm,$6ln));
var $6lm,$6ln;
};
gregorianDateTime$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMonth')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMonth']};};
gregorianDateTime$.withWeekOfYear=function($6lo){var gregorianDateTime$=this;
return ($6lp=gregorianDateTime$.date.withWeekOfYear($6lo),$6lq=gregorianDateTime$.time,GregorianDateTime$internal($6lp,$6lq));
var $6lp,$6lq;
};
gregorianDateTime$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withWeekOfYear']};};
gregorianDateTime$.withDayOfWeek=function($6lr){var gregorianDateTime$=this;
return ($6ls=gregorianDateTime$.date.withDayOfWeek($6lr),$6lt=gregorianDateTime$.time,GregorianDateTime$internal($6ls,$6lt));
var $6ls,$6lt;
};
gregorianDateTime$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfWeek')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfWeek']};};
gregorianDateTime$.withDayOfYear=function($6lu){var gregorianDateTime$=this;
return ($6lv=gregorianDateTime$.date.withDayOfYear($6lu),$6lw=gregorianDateTime$.time,GregorianDateTime$internal($6lv,$6lw));
var $6lv,$6lw;
};
gregorianDateTime$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withDayOfYear')];},d:['ceylon.time.internal','GregorianDateTime','$m','withDayOfYear']};};
gregorianDateTime$.withMinutes=function($6lx){var gregorianDateTime$=this;
return ($6ly=gregorianDateTime$.date,$6lz=gregorianDateTime$.time.withMinutes($6lx),GregorianDateTime$internal($6ly,$6lz));
var $6ly,$6lz;
};
gregorianDateTime$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMinutes')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMinutes']};};
gregorianDateTime$.withSeconds=function($6m0){var gregorianDateTime$=this;
return ($6m1=gregorianDateTime$.date,$6m2=gregorianDateTime$.time.withSeconds($6m0),GregorianDateTime$internal($6m1,$6m2));
var $6m1,$6m2;
};
gregorianDateTime$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withSeconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withSeconds']};};
gregorianDateTime$.withMilliseconds=function($6m3){var gregorianDateTime$=this;
return ($6m4=gregorianDateTime$.date,$6m5=gregorianDateTime$.time.withMilliseconds($6m3),GregorianDateTime$internal($6m4,$6m5));
var $6m4,$6m5;
};
gregorianDateTime$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:withMilliseconds')];},d:['ceylon.time.internal','GregorianDateTime','$m','withMilliseconds']};};
m$1.atr$(gregorianDateTime$,'predecessor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:predecessor')];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};});
m$1.atr$(gregorianDateTime$,'successor',function(){
var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:DateTime},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:successor')];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};});
gregorianDateTime$.plus=function($6m8){var gregorianDateTime$=this;
return ($6m9=(($6m8.years*months$base().perYear)+$6m8.months),$6ma=$6m8.days,$6mb=$6m8.hours,$6mc=$6m8.minutes,$6md=$6m8.seconds,$6me=$6m8.milliseconds,gregorianDateTime$.$wgb6s9$6mf($6m9,$6ma,$6mb,$6mc,$6md,$6me));
var $6m9,$6ma,$6mb,$6mc,$6md,$6me;
};
gregorianDateTime$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:plus')];},d:['ceylon.time.internal','GregorianDateTime','$m','plus']};};
gregorianDateTime$.minus=function($6mg){var gregorianDateTime$=this;
return ($6mh=(((-$6mg.years)*months$base().perYear)+(-$6mg.months)),$6mi=(-$6mg.days),$6mj=(-$6mg.hours),$6mk=(-$6mg.minutes),$6ml=(-$6mg.seconds),$6mm=(-$6mg.milliseconds),gregorianDateTime$.$wgb6s9$6mf($6mh,$6mi,$6mj,$6mk,$6ml,$6mm));
var $6mh,$6mi,$6mj,$6mk,$6ml,$6mm;
};
gregorianDateTime$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'amount',mt:'prm',$t:{t:ReadablePeriod$base}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:minus')];},d:['ceylon.time.internal','GregorianDateTime','$m','minus']};};
gregorianDateTime$.$wgb6s9$6mf=function($6mn,$6mo,$6mp,$6mq,$6mr,$6ms){
var gregorianDateTime$=this;
var $6mt=gregorianDateTime$;
var $6mu=(((($6mp*milliseconds$base().perHour)+($6mq*milliseconds$base().perMinute))+($6mr*milliseconds$base().perSecond))+$6ms);
if(($6mu<(0))){
$6mt=$6mt.minusMilliseconds((-$6mu));
}
if(($6mo<(0))){
$6mt=$6mt.minusDays((-$6mo));
}
if(($6mn<(0))){
$6mt=$6mt.minusMonths((-$6mn));
}
if(($6mn>(0))){
$6mt=$6mt.plusMonths($6mn);
}
if(($6mo>(0))){
$6mt=$6mt.plusDays($6mo);
}
if(($6mu>(0))){
$6mt=$6mt.plusMilliseconds($6mu);
}
return $6mt;
};gregorianDateTime$.$wgb6s9$6mf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}},{nm:'hours',mt:'prm',$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}},{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:addPeriod$g15ssb')];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod$g15ssb']};};
gregorianDateTime$.instant=function($6mv){
var gregorianDateTime$=this;
if($6mv===undefined){$6mv=gregorianDateTime$.instant$defs$timeZone($6mv);}
var $6mw=Instant((unixTime$chronology().timeFromFixed(gregorianDateTime$.dayOfEra)+gregorianDateTime$.millisecondsOfDay));
return Instant(($6mw.millisecondsOfEpoch-$6mv.offset($6mw)));
};gregorianDateTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:instant')];},d:['ceylon.time.internal','GregorianDateTime','$m','instant']};};
m$1.atr$(gregorianDateTime$,'string',function(){
var gregorianDateTime$=this;
return (gregorianDateTime$.date.string+"T"+gregorianDateTime$.time.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$at:string')];},d:['ceylon.time.internal','GregorianDateTime','$at','string']};});
gregorianDateTime$.periodFrom=function($6my){
var gregorianDateTime$=this;
var $6mz=($6n0=(gregorianDateTime$.smallerThan($6my)?gregorianDateTime$:null),m$1.nn$($6n0)?$6n0:$6my);
var $6n0;
var $6n1=($6n2=(gregorianDateTime$.smallerThan($6my)?$6my:null),m$1.nn$($6n2)?$6n2:gregorianDateTime$);
var $6n2;
var $6n3=($6n4=($6n1.time.smallerThan($6mz.time)?(1):null),m$1.nn$($6n4)?$6n4:(0));
var $6n4;
var $6n5=($6n6=(($6n1.millisecondsOfDay>=$6mz.millisecondsOfDay)?($6n1.millisecondsOfDay-$6mz.millisecondsOfDay):null),m$1.nn$($6n6)?$6n6:((milliseconds$base().perDay+$6n1.millisecondsOfDay)-$6mz.millisecondsOfDay));
var $6n6;
var $6n7=m$1.i$div($6n5,milliseconds$base().perHour);
$6n5=$6n5.remainder(milliseconds$base().perHour);
var $6n8=m$1.i$div($6n5,milliseconds$base().perMinute);
$6n5=$6n5.remainder(milliseconds$base().perMinute);
var $6n9=m$1.i$div($6n5,milliseconds$base().perSecond);
var $6na=$6my.smallerThan(gregorianDateTime$);
return ($6nb=($6nc=($6na?$6n7:null),m$1.nn$($6nc)?$6nc:(-$6n7)),$6nd=($6ne=($6na?$6n8:null),m$1.nn$($6ne)?$6ne:(-$6n8)),$6nf=($6ng=($6na?$6n9:null),m$1.nn$($6ng)?$6ng:(-$6n9)),$6nh=($6ni=($6na?$6n5.remainder(milliseconds$base().perSecond):null),m$1.nn$($6ni)?$6ni:(-$6n5.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$6nb,$6nd,$6nf,$6nh)).plus(($6nj=($6na?$6n1.date.minusDays($6n3).periodFrom($6mz.date):null),m$1.nn$($6nj)?$6nj:$6n1.date.minusDays($6n3).periodTo($6mz.date)));
var $6nb,$6nc,$6nd,$6ne,$6nf,$6ng,$6nh,$6ni,$6nj;
};gregorianDateTime$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom']};};
gregorianDateTime$.periodTo=function($6nk){var gregorianDateTime$=this;
return $6nk.periodFrom(gregorianDateTime$);
};
gregorianDateTime$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:periodTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','periodTo']};};
gregorianDateTime$.rangeTo=function($6nl){var gregorianDateTime$=this;
return DateTimeRange(gregorianDateTime$,$6nl);
};
gregorianDateTime$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTimeRange},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDateTime','$m','rangeTo']};};
gregorianDateTime$.$wgb6s9$6ks$defs$hours=function($6nm,$6nn,$6no,$6np,$6nq){return 0;};
gregorianDateTime$.$wgb6s9$6ks$defs$minutes=function($6nm,$6nn,$6no,$6np,$6nq){return 0;};
gregorianDateTime$.$wgb6s9$6ks$defs$seconds=function($6nm,$6nn,$6no,$6np,$6nq){return 0;};
gregorianDateTime$.$wgb6s9$6ks$defs$millis=function($6nm,$6nn,$6no,$6np,$6nq){return 0;};
gregorianDateTime$.$wgb6s9$6ks$defs$signal=function($6nm,$6nn,$6no,$6np,$6nq){return 1;};
gregorianDateTime$.$wgb6s9$6ks=function($6nm,$6nn,$6no,$6np,$6nq){
var gregorianDateTime$=this;
if($6nm===undefined){$6nm=(0);}
if($6nn===undefined){$6nn=(0);}
if($6no===undefined){$6no=(0);}
if($6np===undefined){$6np=(0);}
if($6nq===undefined){$6nq=(1);}
var $6nr=(((($6nm*milliseconds$base().perHour)+($6nn*milliseconds$base().perMinute))+($6no*milliseconds$base().perSecond))+$6np);
var $6ns=(days$base().fromMilliseconds($6nr)*$6nq);
var $6nt=((floorMod$internal$math($6nr,milliseconds$base().perDay)*$6nq)+gregorianDateTime$.time.millisecondsOfDay);
var $6nu=($6ns+floorDiv$internal$math($6nt,milliseconds$base().perDay));
var $6nv=floorMod$internal$math($6nt,milliseconds$base().perDay);
var $6nw=($6nx=(($6nv==gregorianDateTime$.time.millisecondsOfDay)?gregorianDateTime$.time:null),m$1.nn$($6nx)?$6nx:TimeOfDay$internal($6nv));
var $6nx;
return GregorianDateTime$internal(gregorianDateTime$.date.plusDays($6nu),$6nw);
};gregorianDateTime$.$wgb6s9$6ks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'hours',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'minutes',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'seconds',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'millis',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'signal',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDateTime:$m:fromTime$uyune6')];},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime$uyune6']};};
gregorianDateTime$.neighbour=function($6ny){var gregorianDateTime$=this;
return gregorianDateTime$.plusMilliseconds($6ny);
};
gregorianDateTime$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','neighbour']};};
gregorianDateTime$.offset=function($6nz){var gregorianDateTime$=this;
return (gregorianDateTime$.instant(timeZone$timezone().utc).millisecondsOfEpoch-$6nz.instant(timeZone$timezone().utc).millisecondsOfEpoch);
};
gregorianDateTime$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DateTime}}],$cont:GregorianDateTime$internal,pa:3,d:['ceylon.time.internal','GregorianDateTime','$m','offset']};};
gregorianDateTime$.toString=function(){return this.string.valueOf();};
})(GregorianDateTime$internal.$$.prototype);
}
return GregorianDateTime$internal;
}
ex$.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;$init$GregorianDateTime$internal();GregorianDateTime$internal.inst$$=function($6o0){
var gregorianDateTime$=new GregorianDateTime$internal.$$;
m$1.set_type_args(gregorianDateTime$,{Element$DateTimeBehavior:{t:DateTime},DateType$DateTimeBehavior:{t:$_Date},TimeType$DateTimeBehavior:{t:Time},Element$DateBehavior:{t:DateTime},Element$YearBehavior:{t:DateTime},Element$MonthBehavior:{t:DateTime},Element$TimeBehavior:{t:DateTime},Other$Ordinal:{t:DateTime},Other$Enumerable:{t:DateTime},Other$Comparable:{t:DateTime}});
return gregorianDateTime$;
};
GregorianDateTime$internal.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time.internal::GregorianDateTime.date')return o.date_;
else if(n==='ceylon.time.internal::GregorianDateTime.time')return o.time_;
else throw new TypeError('unknown attribute');
};
GregorianDateTime$internal.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time.internal::GregorianDateTime.date')o.date_=i;
else if(n==='ceylon.time.internal::GregorianDateTime.time')o.time_=i;
else throw new TypeError('unknown attribute');
};
GregorianDateTime$internal.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getDate)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getTime))];
};
function floor$internal$math($6o1){
if((!m$1.$eq$($6o1.fractionalPart,m$1.Float(0.0))&&$6o1.negative)){
return ($6o1.integer-(1));
}
var $6o2=$6o1.integer;
return $6o2;
}
ex$.floor$internal$math=floor$internal$math;
floor$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floor')];},d:['ceylon.time.internal.math','floor']};};
function floorDiv$internal$math($6o3,$6o4){return floor$internal$math(m$1.f$div($6o3.$_float,$6o4.$_float));
};
floorDiv$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorDiv')];},d:['ceylon.time.internal.math','floorDiv']};};
ex$.floorDiv$internal$math=floorDiv$internal$math;
function round$internal$math($6o5){return floor$internal$math(m$1.Float($6o5+(0.5)));
};
round$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'f',mt:'prm',$t:{t:m$1.Float}}],pa:1,an:function(){return[m$1.doc("Returns nearest integer to x")];},d:['ceylon.time.internal.math','round']};};
ex$.round$internal$math=round$internal$math;
function floorMod$internal$math($6o6,$6o7){
var $6o8=$6o6.$_float;
var $6o9=$6o7.$_float;
return m$1.Float($6o8-m$1.Float($6o9*floor$internal$math(m$1.f$div($6o8,$6o9)))).integer;
}
ex$.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:floorMod')];},d:['ceylon.time.internal.math','floorMod']};};
function adjustedMod$internal$math($6oa,$6ob){
var $6oc=floorMod$internal$math($6oa,$6ob);
if(($6oc==(0))){
return $6ob;
}
return $6oc;
}
ex$.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal.math:adjustedMod')];},d:['ceylon.time.internal.math','adjustedMod']};};
function TimeOfDay$internal(millisecondsOfDay,timeOfDay$){
$init$TimeOfDay$internal();
if(timeOfDay$===undefined)timeOfDay$=new TimeOfDay$internal.$$;
timeOfDay$.$wgb6s9$6od_=millisecondsOfDay;
m$1.$_Object(timeOfDay$);
Time(timeOfDay$);
return timeOfDay$;
}
TimeOfDay$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'millisecondsOfDay',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];}}],sts:[{t:Time}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay')];},d:['ceylon.time.internal','TimeOfDay']};};
ex$.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
if(TimeOfDay$internal.$$===undefined){
m$1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',m$1.$_Object,$init$Time());
(function(timeOfDay$){
m$1.atr$(timeOfDay$,'millisecondsOfDay',function(){return this.$wgb6s9$6od_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};});
m$1.atr$(timeOfDay$,'hours',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.millisecondsOfDay,milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:hours')];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};});
m$1.atr$(timeOfDay$,'minutes',function(){
var timeOfDay$=this;
return m$1.i$div(floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perHour),milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};});
m$1.atr$(timeOfDay$,'seconds',function(){
var timeOfDay$=this;
return m$1.i$div(floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perMinute),milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};});
m$1.atr$(timeOfDay$,'milliseconds',function(){
var timeOfDay$=this;
return floorMod$internal$math(timeOfDay$.millisecondsOfDay,milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of milliseconds since last full second.")];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};});
m$1.atr$(timeOfDay$,'secondsOfDay',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.millisecondsOfDay,milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of seconds since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};});
m$1.atr$(timeOfDay$,'minutesOfDay',function(){
var timeOfDay$=this;
return m$1.i$div(timeOfDay$.secondsOfDay,seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Number of minutes since last midnight.")];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};});
timeOfDay$.compare=function($6ok){
var timeOfDay$=this;
return timeOfDay$.millisecondsOfDay.compare($6ok.millisecondsOfDay);
};timeOfDay$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc("Compare two instances of _time of day_.")];},d:['ceylon.time.internal','TimeOfDay','$m','compare']};};
m$1.atr$(timeOfDay$,'predecessor',function(){
var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:predecessor')];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};});
m$1.atr$(timeOfDay$,'successor',function(){
var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:Time},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:successor')];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};});
m$1.atr$(timeOfDay$,'string',function(){
var timeOfDay$=this;
return (timeOfDay$.hours.string.padLeading(2,m$1.Character(48,true))+":"+timeOfDay$.minutes.string.padLeading(2,m$1.Character(48,true))+":"+timeOfDay$.seconds.string.padLeading(2,m$1.Character(48,true))+"."+timeOfDay$.milliseconds.string.padLeading(3,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$at:string')];},d:['ceylon.time.internal','TimeOfDay','$at','string']};});
timeOfDay$.plusHours=function($6oo){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6oo*milliseconds$base().perHour));
};
timeOfDay$.plusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','plusHours']};};
timeOfDay$.minusHours=function($6op){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6op*milliseconds$base().perHour));
};
timeOfDay$.minusHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusHours')];},d:['ceylon.time.internal','TimeOfDay','$m','minusHours']};};
timeOfDay$.plusMinutes=function($6oq){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6oq*milliseconds$base().perMinute));
};
timeOfDay$.plusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMinutes']};};
timeOfDay$.minusMinutes=function($6or){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6or*milliseconds$base().perMinute));
};
timeOfDay$.minusMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMinutes']};};
timeOfDay$.plusSeconds=function($6os){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds(($6os*milliseconds$base().perSecond));
};
timeOfDay$.plusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusSeconds']};};
timeOfDay$.minusSeconds=function($6ot){var timeOfDay$=this;
return timeOfDay$.minusMilliseconds(($6ot*milliseconds$base().perSecond));
};
timeOfDay$.minusSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusSeconds']};};
timeOfDay$.plusMilliseconds=function($6ou){
var timeOfDay$=this;
if(($6ou==(0))){
return timeOfDay$;
}
var $6ov=floorMod$internal$math((timeOfDay$.millisecondsOfDay+$6ou),milliseconds$base().perDay);
return ($6ow=(($6ov==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6ow)?$6ow:TimeOfDay$internal($6ov));
var $6ow;
};timeOfDay$.plusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds']};};
timeOfDay$.minusMilliseconds=function($6ox){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds((-$6ox));
};
timeOfDay$.minusMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minusMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','minusMilliseconds']};};
timeOfDay$.plus=function($6oy){
var timeOfDay$=this;
var $6oz=((((timeOfDay$.millisecondsOfDay+$6oy.milliseconds)+($6oy.seconds*milliseconds$base().perSecond))+($6oy.minutes*milliseconds$base().perMinute))+($6oy.hours*milliseconds$base().perHour));
var $6p0=floorMod$internal$math($6oz,milliseconds$base().perDay);
return ($6p1=(($6p0==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6p1)?$6p1:TimeOfDay$internal($6p0));
var $6p1;
};timeOfDay$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:plus')];},d:['ceylon.time.internal','TimeOfDay','$m','plus']};};
timeOfDay$.minus=function($6p2){
var timeOfDay$=this;
var $6p3=((((timeOfDay$.millisecondsOfDay-$6p2.milliseconds)-($6p2.seconds*milliseconds$base().perSecond))-($6p2.minutes*milliseconds$base().perMinute))-($6p2.hours*milliseconds$base().perHour));
var $6p4=floorMod$internal$math($6p3,milliseconds$base().perDay);
return ($6p5=(($6p4==timeOfDay$.millisecondsOfDay)?timeOfDay$:null),m$1.nn$($6p5)?$6p5:TimeOfDay$internal($6p4));
var $6p5;
};timeOfDay$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'period',mt:'prm',$t:{t:ReadableTimePeriod$base}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:minus')];},d:['ceylon.time.internal','TimeOfDay','$m','minus']};};
timeOfDay$.withHours=function($6p6){
var timeOfDay$=this;
if((timeOfDay$.hours==$6p6)){
return timeOfDay$;
}
return time($6p6,timeOfDay$.minutes,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withHours.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withHours')];},d:['ceylon.time.internal','TimeOfDay','$m','withHours']};};
timeOfDay$.withMinutes=function($6p7){
var timeOfDay$=this;
if((timeOfDay$.minutes==$6p7)){
return timeOfDay$;
}
return time(timeOfDay$.hours,$6p7,timeOfDay$.seconds,timeOfDay$.milliseconds);
};timeOfDay$.withMinutes.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMinutes')];},d:['ceylon.time.internal','TimeOfDay','$m','withMinutes']};};
timeOfDay$.withSeconds=function($6p8){
var timeOfDay$=this;
if((timeOfDay$.seconds==$6p8)){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,$6p8,timeOfDay$.milliseconds);
};timeOfDay$.withSeconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withSeconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withSeconds']};};
timeOfDay$.withMilliseconds=function($6p9){
var timeOfDay$=this;
if((timeOfDay$.milliseconds==$6p9)){
return timeOfDay$;
}
return time(timeOfDay$.hours,timeOfDay$.minutes,timeOfDay$.seconds,$6p9);
};timeOfDay$.withMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:withMilliseconds')];},d:['ceylon.time.internal','TimeOfDay','$m','withMilliseconds']};};
timeOfDay$.periodFrom=function($6pa){
var timeOfDay$=this;
var $6pb=($6pc=(timeOfDay$.smallerThan($6pa)?timeOfDay$:null),m$1.nn$($6pc)?$6pc:$6pa);
var $6pc;
var $6pd=($6pe=(timeOfDay$.smallerThan($6pa)?$6pa:null),m$1.nn$($6pe)?$6pe:timeOfDay$);
var $6pe;
var $6pf=($6pd.millisecondsOfDay-$6pb.millisecondsOfDay);
var $6pg=m$1.i$div($6pf,milliseconds$base().perHour);
$6pf=$6pf.remainder(milliseconds$base().perHour);
var $6ph=m$1.i$div($6pf,milliseconds$base().perMinute);
$6pf=$6pf.remainder(milliseconds$base().perMinute);
var $6pi=m$1.i$div($6pf,milliseconds$base().perSecond);
var $6pj=$6pa.smallerThan(timeOfDay$);
return ($6pk=($6pl=($6pj?$6pg:null),m$1.nn$($6pl)?$6pl:(-$6pg)),$6pm=($6pn=($6pj?$6ph:null),m$1.nn$($6pn)?$6pn:(-$6ph)),$6po=($6pp=($6pj?$6pi:null),m$1.nn$($6pp)?$6pp:(-$6pi)),$6pq=($6pr=($6pj?$6pf.remainder(milliseconds$base().perSecond):null),m$1.nn$($6pr)?$6pr:(-$6pf.remainder(milliseconds$base().perSecond))),Period(undefined,undefined,undefined,$6pk,$6pm,$6po,$6pq));
var $6pk,$6pl,$6pm,$6pn,$6po,$6pp,$6pq,$6pr;
};timeOfDay$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodFrom')];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom']};};
timeOfDay$.periodTo=function($6ps){var timeOfDay$=this;
return $6ps.periodFrom(timeOfDay$);
};
timeOfDay$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:periodTo')];},d:['ceylon.time.internal','TimeOfDay','$m','periodTo']};};
timeOfDay$.rangeTo=function($6pt){var timeOfDay$=this;
return TimeRange(timeOfDay$,$6pt);
};
timeOfDay$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TimeRange},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:TimeOfDay:$m:rangeTo')];},d:['ceylon.time.internal','TimeOfDay','$m','rangeTo']};};
timeOfDay$.neighbour=function($6pu){var timeOfDay$=this;
return timeOfDay$.plusMilliseconds($6pu);
};
timeOfDay$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','neighbour']};};
timeOfDay$.offset=function($6pv){var timeOfDay$=this;
return (timeOfDay$.millisecondsOfDay-$6pv.millisecondsOfDay);
};
timeOfDay$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Time}}],$cont:TimeOfDay$internal,pa:3,d:['ceylon.time.internal','TimeOfDay','$m','offset']};};
timeOfDay$.toString=function(){return this.string.valueOf();};
})(TimeOfDay$internal.$$.prototype);
}
return TimeOfDay$internal;
}
ex$.$init$TimeOfDay$internal=$init$TimeOfDay$internal;$init$TimeOfDay$internal();TimeOfDay$internal.inst$$=function($6pw){
var timeOfDay$=new TimeOfDay$internal.$$;
m$1.set_type_args(timeOfDay$,{Element$TimeBehavior:{t:Time},Other$Comparable:{t:Time},Other$Ordinal:{t:Time},Other$Enumerable:{t:Time}});
return timeOfDay$;
};
TimeOfDay$internal.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time.internal::TimeOfDay.millisecondsOfDay')return o.millisecondsOfDay_;
else throw new TypeError('unknown attribute');
};
TimeOfDay$internal.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time.internal::TimeOfDay.millisecondsOfDay')o.millisecondsOfDay_=i;
else throw new TypeError('unknown attribute');
};
TimeOfDay$internal.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getMillisecondsOfDay))];
};
function GregorianDate$internal(dayOfEra,gregorianDate$){
$init$GregorianDate$internal();
if(gregorianDate$===undefined)gregorianDate$=new GregorianDate$internal.$$;
gregorianDate$.$wgb6s9$6px_=dayOfEra;
m$1.$_Object(gregorianDate$);
$_Date(gregorianDate$);
return gregorianDate$;
}
GregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.$_Object},ps:[{nm:'dayOfEra',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfEra')];}}],sts:[{t:$_Date}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate')];},d:['ceylon.time.internal','GregorianDate']};};
ex$.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
if(GregorianDate$internal.$$===undefined){
m$1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',m$1.$_Object,$init$$_Date());
(function(gregorianDate$){
m$1.atr$(gregorianDate$,'dayOfEra',function(){return this.$wgb6s9$6px_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfEra')];},d:['ceylon.time.internal','GregorianDate','$at','dayOfEra']};});
m$1.atr$(gregorianDate$,'year',function(){
var gregorianDate$=this;
return gregorian$chronology().yearFrom(gregorianDate$.dayOfEra);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns year of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','year']};});
m$1.atr$(gregorianDate$,'month',function(){
var gregorianDate$=this;
return monthOf$base(gregorian$chronology().monthFrom(gregorianDate$.dayOfEra));
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns month of this gregorian date.")];},d:['ceylon.time.internal','GregorianDate','$at','month']};});
m$1.atr$(gregorianDate$,'day',function(){
var gregorianDate$=this;
return gregorian$chronology().dayFrom(gregorianDate$.dayOfEra);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:day')];},d:['ceylon.time.internal','GregorianDate','$at','day']};});
m$1.atr$(gregorianDate$,'leapYear',function(){
var gregorianDate$=this;
return gregorian$chronology().leapYear(gregorianDate$.year);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:leapYear')];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};});
m$1.atr$(gregorianDate$,'dayOfYear',function(){
var gregorianDate$=this;
return ((gregorianDate$.month.firstDayOfYear(gregorianDate$.leapYear)+gregorianDate$.day)-(1));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:dayOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};});
m$1.atr$(gregorianDate$,'predecessor',function(){
var gregorianDate$=this;
return gregorianDate$.minusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:predecessor')];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};});
m$1.atr$(gregorianDate$,'successor',function(){
var gregorianDate$=this;
return gregorianDate$.plusDays(1);
},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:successor')];},d:['ceylon.time.internal','GregorianDate','$at','successor']};});
m$1.atr$(gregorianDate$,'dayOfWeek',function(){
var gregorianDate$=this;
return dayOfWeek$base(gregorian$chronology().dayOfWeekFrom(gregorianDate$.dayOfEra));
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns current day of the week.")];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};});
gregorianDate$.plusDays=function($6q6){
var gregorianDate$=this;
if(($6q6==(0))){
return gregorianDate$;
}
return GregorianDate$internal((gregorianDate$.dayOfEra+$6q6));
};gregorianDate$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusDays')];},d:['ceylon.time.internal','GregorianDate','$m','plusDays']};};
gregorianDate$.minusDays=function($6q7){var gregorianDate$=this;
return gregorianDate$.plusDays((-$6q7));
};
gregorianDate$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusDays')];},d:['ceylon.time.internal','GregorianDate','$m','minusDays']};};
gregorianDate$.plusWeeks=function($6q8){var gregorianDate$=this;
return gregorianDate$.plusDays(($6q8*days$base().perWeek));
};
gregorianDate$.plusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','plusWeeks']};};
gregorianDate$.minusWeeks=function($6q9){var gregorianDate$=this;
return gregorianDate$.plusWeeks((-$6q9));
};
gregorianDate$.minusWeeks.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusWeeks')];},d:['ceylon.time.internal','GregorianDate','$m','minusWeeks']};};
gregorianDate$.plusMonths=function($6qa){
var gregorianDate$=this;
if(($6qa==(0))){
return gregorianDate$;
}
var $6qb=gregorianDate$.month.add($6qa);
var $6qc=(gregorianDate$.year+$6qb.years);
var $6qd=$6qb.month.numberOfDays(gregorian$chronology().leapYear($6qc));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6qc,$6qb.month.integer,m$1.min(m$1.tpl$([$6qd,gregorianDate$.day]),{Value$min:{t:m$1.Integer},Absent$min:{t:m$1.Nothing}})])));
};gregorianDate$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','plusMonths']};};
gregorianDate$.minusMonths=function($6qe){var gregorianDate$=this;
return gregorianDate$.plusMonths((-$6qe));
};
gregorianDate$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusMonths')];},d:['ceylon.time.internal','GregorianDate','$m','minusMonths']};};
gregorianDate$.plusYears=function($6qf){
var gregorianDate$=this;
if(($6qf==(0))){
return gregorianDate$;
}
var $6qg=(gregorianDate$.year+$6qf);
var $6qh=gregorianDate$.month.numberOfDays(gregorian$chronology().leapYear($6qg));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6qg,gregorianDate$.month.integer,($6qi=m$1.sarg$(function($6qj){switch($6qj){case 0:return gregorianDate$.day;case 1:return $6qh;}return m$1.finished();},undefined,{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Integer}/*ORALE!Value inv pero Element out*/}),m$1.min($6qi,{Value$min:{t:m$1.Integer},Absent$min:{t:m$1.Nothing}}))])));
var $6qi;
};gregorianDate$.plusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plusYears')];},d:['ceylon.time.internal','GregorianDate','$m','plusYears']};};
gregorianDate$.minusYears=function($6qk){var gregorianDate$=this;
return gregorianDate$.plusYears((-$6qk));
};
gregorianDate$.minusYears.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minusYears')];},d:['ceylon.time.internal','GregorianDate','$m','minusYears']};};
gregorianDate$.withDay=function($6ql){
var gregorianDate$=this;
if(($6ql==gregorianDate$.day)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,gregorianDate$.month.integer,$6ql]));
return GregorianDate$internal(((gregorianDate$.dayOfEra-gregorianDate$.day)+$6ql));
};gregorianDate$.withDay.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withDay')];},d:['ceylon.time.internal','GregorianDate','$m','withDay']};};
gregorianDate$.withMonth=function($6qm){
var gregorianDate$=this;
var $6qn=monthOf$base($6qm);
if(m$1.$eq$($6qn,gregorianDate$.month)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([gregorianDate$.year,$6qn.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([gregorianDate$.year,$6qn.integer,gregorianDate$.day])));
};gregorianDate$.withMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withMonth')];},d:['ceylon.time.internal','GregorianDate','$m','withMonth']};};
gregorianDate$.withYear=function($6qo){
var gregorianDate$=this;
if(($6qo==gregorianDate$.year)){
return gregorianDate$;
}
gregorian$chronology().checkDate(m$1.tpl$([$6qo,gregorianDate$.month.integer,gregorianDate$.day]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6qo,gregorianDate$.month.integer,gregorianDate$.day])));
};gregorianDate$.withYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withYear')];},d:['ceylon.time.internal','GregorianDate','$m','withYear']};};
gregorianDate$.withWeekOfYear=function($6qp){
var gregorianDate$=this;
var $6qq=gregorianDate$.weekOfYear;
if(($6qp==$6qq)){
return gregorianDate$;
}
m$1.asrt$2("",'164:8-164:37','GregorianDate.ceylon',[($6qr=$6qp,$6qr.notSmallerThan((0))&&$6qr.notLargerThan((53))),'0 <= weekOfYear <= 53']);
return gregorianDate$.plusWeeks(($6qp-$6qq));
};gregorianDate$.withWeekOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'weekOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:withWeekOfYear')];},d:['ceylon.time.internal','GregorianDate','$m','withWeekOfYear']};};
gregorianDate$.withDayOfWeek=function($6qs){
var gregorianDate$=this;
if(m$1.$eq$($6qs,gregorianDate$.dayOfWeek)){
return gregorianDate$;
}
return gregorianDate$.plusDays(($6qs.integer-gregorianDate$.dayOfWeek.integer));
};gregorianDate$.withDayOfWeek.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfWeek']};};
gregorianDate$.withDayOfYear=function($6qt){
var gregorianDate$=this;
if(($6qt==gregorianDate$.dayOfYear)){
return gregorianDate$;
}
var $6qu=($6qv=(gregorianDate$.leapYear?days$base().perLeapYear:null),m$1.nn$($6qv)?$6qv:days$base().perYear);
var $6qv;
m$1.asrt$2("",'182:8-182:47','GregorianDate.ceylon',[($6qw=$6qt,$6qw.notSmallerThan((1))&&$6qw.notLargerThan($6qu)),'1 <= dayOfYear <= lastDayOfYear']);
return gregorianDate$.plusDays(($6qt-gregorianDate$.dayOfYear));
};gregorianDate$.withDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','withDayOfYear']};};
gregorianDate$.plus=function($6qx){
var gregorianDate$=this;
return ($6qy=(($6qx.years*months$base().perYear)+$6qx.months),$6qz=$6qx.days,gregorianDate$.$wgb6s9$6r0($6qy,$6qz));
var $6qy,$6qz;
};gregorianDate$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:plus')];},d:['ceylon.time.internal','GregorianDate','$m','plus']};};
gregorianDate$.minus=function($6r1){
var gregorianDate$=this;
return ($6r2=(((-$6r1.years)*months$base().perYear)+(-$6r1.months)),$6r3=(-$6r1.days),gregorianDate$.$wgb6s9$6r0($6r2,$6r3));
var $6r2,$6r3;
};gregorianDate$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'amount',mt:'prm',$t:{t:ReadableDatePeriod$base}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:minus')];},d:['ceylon.time.internal','GregorianDate','$m','minus']};};
gregorianDate$.$wgb6s9$6r0=function($6r4,$6r5){
var gregorianDate$=this;
var $6r6=gregorianDate$;
if(($6r5<(0))){
$6r6=$6r6.minusDays((-$6r5));
}
if(($6r4<(0))){
$6r6=$6r6.minusMonths((-$6r4));
}
if(($6r4>(0))){
$6r6=$6r6.plusMonths($6r4);
}
if(($6r5>(0))){
$6r6=$6r6.plusDays($6r5);
}
return $6r6;
};gregorianDate$.$wgb6s9$6r0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}},{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:addPeriod$2sk1dc')];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod$2sk1dc']};};
m$1.atr$(gregorianDate$,'weekOfYear',function(){
var gregorianDate$=this;
function $6r7($6r8){
var $6r9=gregorianDate$.withDay(1).withMonth(january$base()).withYear($6r8);
var $6ra=($6r9.dayOfWeek.integer-monday$base().integer);
return $6r9.minusDays($6ra).plusDays((($6ra>=(4))?weekdays$base().size:(0)));
};$6r7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek$7b8vj7']};};
var $6rb=function($6rc){return $6r7(($6rc+(1))).minusDays(1);
};
$6rb.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'yearNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:gregorianDate$.$prop$getWeekOfYear,d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek$ekrdod']};};
var $6rd=$6r7(gregorianDate$.year);
var $6re=(1);
if(gregorianDate$.smallerThan($6rd)){
var $6rf=$6r7((gregorianDate$.year-(1)));
var $6rg=(gregorianDate$.offset($6rf)+(1));
$6re=(m$1.i$div($6rg,weekdays$base().size)+($6rh=(($6rg.remainder(weekdays$base().size)>(0))?(1):null),m$1.nn$($6rh)?$6rh:(0)));
var $6rh;
}
else{
var $6ri=$6rb(gregorianDate$.year);
if(gregorianDate$.notLargerThan($6ri)){
var $6rj=(gregorianDate$.offset($6rd)+(1));
$6re=(m$1.i$div($6rj,weekdays$base().size)+($6rk=(($6rj.remainder(weekdays$base().size)>(0))?(1):null),m$1.nn$($6rk)?$6rk:(0)));
var $6rk;
}
}
return $6re;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:weekOfYear')];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear']};});gregorianDate$.at=function($6rl){var gregorianDate$=this;
return GregorianDateTime$internal(gregorianDate$,$6rl);
};
gregorianDate$.at.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'time',mt:'prm',$t:{t:Time}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc("Returns new [[DateTime]] value.")];},d:['ceylon.time.internal','GregorianDate','$m','at']};};
m$1.atr$(gregorianDate$,'string',function(){
var gregorianDate$=this;
return (gregorianDate$.year.string.padLeading(4,m$1.Character(48,true))+"-"+gregorianDate$.month.integer.string.padLeading(2,m$1.Character(48,true))+"-"+gregorianDate$.day.string.padLeading(2,m$1.Character(48,true)));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$at:string')];},d:['ceylon.time.internal','GregorianDate','$at','string']};});
gregorianDate$.periodFrom=function($6rn){
var gregorianDate$=this;
var $6ro=($6rp=(gregorianDate$.smallerThan($6rn)?gregorianDate$:null),m$1.nn$($6rp)?$6rp:$6rn);
var $6rp;
var $6rq=($6rr=(gregorianDate$.smallerThan($6rn)?$6rn:null),m$1.nn$($6rr)?$6rr:gregorianDate$);
var $6rr;
var $6rs=$6ro.plusYears(1);
var $6rt=(0);
while($6rs.notLargerThan($6rq)){
$6rs=$6rs.plusYears(1);
($6rt=$6rt+1);
}
var $6ru=(0);
$6rs=$6ro.plusYears($6rt).plusMonths(($6ru+(1)));
while($6rs.notLargerThan($6rq)){
($6ru=$6ru+1);
$6rs=$6ro.plusYears($6rt).plusMonths(($6ru+(1)));
}
$6rs=$6ro.plusYears($6rt).plusMonths($6ru).plusDays(1);
var $6rv=(0);
while($6rs.notLargerThan($6rq)){
$6rs=$6rs.plusDays(1);
($6rv=$6rv+1);
}
var $6rw=$6rn.smallerThan(gregorianDate$);
return ($6rx=($6ry=($6rw?$6rt:null),m$1.nn$($6ry)?$6ry:(-$6rt)),$6rz=($6s0=($6rw?$6ru:null),m$1.nn$($6s0)?$6s0:(-$6ru)),$6s1=($6s2=($6rw?$6rv:null),m$1.nn$($6s2)?$6s2:(-$6rv)),Period($6rx,$6rz,$6s1,undefined,undefined,undefined,undefined));
var $6rx,$6ry,$6rz,$6s0,$6s1,$6s2;
};gregorianDate$.periodFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'start',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodFrom')];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom']};};
gregorianDate$.compare=function($6s3){
var gregorianDate$=this;
return gregorianDate$.dayOfEra.compare($6s3.dayOfEra);
};gregorianDate$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:compare')];},d:['ceylon.time.internal','GregorianDate','$m','compare']};};
gregorianDate$.periodTo=function($6s4){var gregorianDate$=this;
return $6s4.periodFrom(gregorianDate$);
};
gregorianDate$.periodTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Period},ps:[{nm:'end',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:periodTo')];},d:['ceylon.time.internal','GregorianDate','$m','periodTo']};};
gregorianDate$.rangeTo=function($6s5){var gregorianDate$=this;
return DateRange(gregorianDate$,$6s5);
};
gregorianDate$.rangeTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:GregorianDate:$m:rangeTo')];},d:['ceylon.time.internal','GregorianDate','$m','rangeTo']};};
gregorianDate$.neighbour=function($6s6){var gregorianDate$=this;
return gregorianDate$.plusDays($6s6);
};
gregorianDate$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','neighbour']};};
gregorianDate$.offset=function($6s7){var gregorianDate$=this;
return (gregorianDate$.dayOfEra-$6s7.dayOfEra);
};
gregorianDate$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:$_Date}}],$cont:GregorianDate$internal,pa:3,d:['ceylon.time.internal','GregorianDate','$m','offset']};};
gregorianDate$.toString=function(){return this.string.valueOf();};
})(GregorianDate$internal.$$.prototype);
}
return GregorianDate$internal;
}
ex$.$init$GregorianDate$internal=$init$GregorianDate$internal;$init$GregorianDate$internal();GregorianDate$internal.inst$$=function($6s8){
var gregorianDate$=new GregorianDate$internal.$$;
m$1.set_type_args(gregorianDate$,{Element$DateBehavior:{t:$_Date},Element$YearBehavior:{t:$_Date},Element$MonthBehavior:{t:$_Date},Other$Ordinal:{t:$_Date},Other$Comparable:{t:$_Date},Other$Enumerable:{t:$_Date}});
return gregorianDate$;
};
GregorianDate$internal.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time.internal::GregorianDate.dayOfEra')return o.dayOfEra_;
else throw new TypeError('unknown attribute');
};
GregorianDate$internal.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time.internal::GregorianDate.dayOfEra')o.dayOfEra_=i;
else throw new TypeError('unknown attribute');
};
GregorianDate$internal.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time.internal'),o.$prop$getDayOfEra))];
};
function gregorianDate$internal($6s9,$6sa,$6sb){
gregorian$chronology().checkDate(m$1.tpl$([$6s9,monthOf$base($6sa).integer,$6sb]));
return GregorianDate$internal(gregorian$chronology().fixedFrom(m$1.tpl$([$6s9,monthOf$base($6sa).integer,$6sb])));
}
ex$.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}},{nm:'day',mt:'prm',$t:{t:m$1.Integer}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.internal:gregorianDate')];},d:['ceylon.time.internal','gregorianDate']};};
function parseTimeZone$iso8601($6sc){
if(m$1.$eq$($6sc,"Z")){
return timeZone$timezone().utc;
}
var $6sd=function($6se){if($6se!==null&&$6se.equals(m$1.Character(43,true)))return (1);else if($6se!==null&&$6se.equals(m$1.Character(45,true)))return (-1);else return null}($6sc.$_get(0));
var $6sf;
if(m$1.nn$(($6sf=$6sd))){
var $6sg=(function(){var $6sh=$6sf;var $6si=function($6sj,$6sk){return function(){var $6sl=(($6sj*milliseconds$base().perHour)+($6sk*milliseconds$base().perMinute));return (($6sh==(-1))&&($6sl==(0))?null:OffsetTimeZone$timezone(($6sh*$6sl)));
}();
};
$6si.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:OffsetTimeZone$timezone}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'mm',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeZone$iso8601,d:['ceylon.time.iso8601','parseTimeZone','$m','offsetTimeZone$mf7brt']};};
var $6sm=$6sc.spanFrom(1);
var $6sn,$6so;
if(($6sm.size==(5))&&m$1.is$(($6sn=m$1.Integer.$st$.parse($6sm.spanTo(1))),{t:m$1.Integer})&&m$1.is$(($6so=m$1.Integer.$st$.parse($6sm.spanFrom(3))),{t:m$1.Integer})){
return $6si($6sn,$6so);
}
else{
var $6sp,$6sq;
if(($6sm.size==(4))&&m$1.is$(($6sp=m$1.Integer.$st$.parse($6sm.spanTo(1))),{t:m$1.Integer})&&m$1.is$(($6sq=m$1.Integer.$st$.parse($6sm.spanFrom(2))),{t:m$1.Integer})){
return $6si($6sp,$6sq);
}
else{
var $6sr;
if(($6sm.size==(2))&&m$1.is$(($6sr=m$1.Integer.$st$.parse($6sm.spanTo(1))),{t:m$1.Integer})){
return $6si($6sr,0);
}
}
}
}());if($6sg!==undefined){return $6sg;}
}
return null;
}
ex$.parseTimeZone$iso8601=parseTimeZone$iso8601;
parseTimeZone$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TimeZone$timezone}]},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTimeZone')];},d:['ceylon.time.iso8601','parseTimeZone']};};
function parseDate$iso8601($6ss){
var $6st=$6ss.indexesWhere(m$1.jsc$2(($6su=m$1.Character(45,true),m$1.jsc$3($6su,$6su.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})).sequence();
var $6su;
if(($6ss.size==(10))){
var $6sv,$6sw,$6sx;
if(m$1.$eq$($6st,m$1.tpl$([4,7]))&&m$1.nn$(($6sv=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6sw=parseMonth$iso8601($6ss.span(5,6))))&&m$1.nn$(($6sx=parseDayOfMonth$iso8601($6ss.span(8,9),$6sv,$6sw)))){
return date($6sv,$6sw,$6sx);
}
else{
var $6sy,$6sz,$6t0,$6t1;
if(m$1.$eq$($6st,m$1.tpl$([4,8]))&&m$1.nn$(($6sy=$6ss.$_get(5)))&&m$1.$eq$($6sy,m$1.Character(87,true))&&m$1.nn$(($6sz=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6t0=parseWeek$iso8601($6ss.span(6,7))))&&m$1.nn$(($6t1=parseDay$iso8601($6ss.span(9,9))))){
return date($6sz,1,1).withWeekOfYear($6t0).withDayOfWeek(dayOfWeek$base($6t1));
}
}
}
else{
if(($6ss.size==(8))){
var $6t2;
if(m$1.ne$(($6t2=$6st))){
var $6t3,$6t4;
if(m$1.$eq$($6t2,m$1.tpl$([4]))&&m$1.nn$(($6t3=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6t4=parseDay$iso8601($6ss.span(5,7))))){
return date($6t3,1,1).withDayOfYear($6t4);
}
}
else{
var $6t5,$6t6,$6t7,$6t8;
if(m$1.nn$(($6t5=$6ss.$_get(4)))&&m$1.$eq$($6t5,m$1.Character(87,true))&&m$1.nn$(($6t6=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6t7=parseWeek$iso8601($6ss.span(5,6))))&&m$1.nn$(($6t8=parseDay$iso8601($6ss.span(7,7))))){
return date($6t6,1,1).withWeekOfYear($6t7).withDayOfWeek(dayOfWeek$base($6t8));
}
else{
var $6t9,$6ta,$6tb;
if(m$1.nn$(($6t9=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6ta=parseMonth$iso8601($6ss.span(4,5))))&&m$1.nn$(($6tb=parseDay$iso8601($6ss.span(6,7))))){
return date($6t9,$6ta,$6tb);
}
}
}
}
else{
var $6tc,$6td;
if(($6ss.size==(7))&&$6st.empty&&m$1.nn$(($6tc=parseYear$iso8601($6ss.span(0,3))))&&m$1.nn$(($6td=parseDay$iso8601($6ss.span(4,6))))){
return date($6tc,1,1).withDayOfYear($6td);
}
}
}
return null;
}
ex$.parseDate$iso8601=parseDate$iso8601;
parseDate$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$_Date}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDate')];},d:['ceylon.time.iso8601','parseDate']};};
function parseInteger$iso8601($6te){return function(){var $6tf;
if(m$1.is$(($6tf=m$1.Integer.$st$.parse($6te)),{t:m$1.Integer}))return $6tf;else return null}();
};
parseInteger$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseInteger']};};
function parseWeek$iso8601($6tg){return parseInteger$iso8601($6tg);
};
parseWeek$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseWeek']};};
function parseDay$iso8601($6th){return parseInteger$iso8601($6th);
};
parseDay$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseDay']};};
function parseYear$iso8601($6ti){return parseInteger$iso8601($6ti);
};
parseYear$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseYear']};};
function parseMonth$iso8601($6tj){return function(){var $6tk,$6tl;
if(m$1.nn$(($6tk=parseInteger$iso8601($6tj)))&&m$1.nn$(($6tl=months$base().$_valueOf($6tk))))return $6tl;else return null}();
};
parseMonth$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Month$base}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseMonth']};};
function parseDayOfMonth$iso8601($6tm,$6tn,$6to){return function(){var $6tp;
if(m$1.nn$(($6tp=parseInteger$iso8601($6tm)))&&($6tq=$6tp,$6tq.notSmallerThan((1))&&$6tq.notLargerThan($6to.numberOfDays())))return $6tp;else return null}();
};
parseDayOfMonth$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}},{nm:'year',mt:'prm',$t:{t:m$1.Integer}},{nm:'month',mt:'prm',$t:{t:Month$base}}],d:['ceylon.time.iso8601','parseDayOfMonth']};};
function parseTime$iso8601($6tr){return convertToTime$iso8601(parseTimeComponents$iso8601($6tr));
};
parseTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseTime')];},d:['ceylon.time.iso8601','parseTime']};};
ex$.parseTime$iso8601=parseTime$iso8601;
function convertToTime$iso8601($6ts){
var $6tt,$6tu,$6tv,$6tw;
if(function($6tx){if(!m$1.nn$($6tx))return false;return($6tv=$6tx.$_get(0),$6tt=$6tx.$_get(1),$6tw=$6tx.$_get(2),$6tu=$6tx.$_get(3),true);}($6ts)){
if(m$1.$eq$(m$1.tpl$([24,0,0,0]),m$1.tpl$([$6tv,$6tt,$6tw,$6tu]))){
return time(0,0);
}
if(($6ty=$6tv,$6ty.notSmallerThan((0))&&$6ty.notLargerThan((23)))&&($6tz=$6tt,$6tz.notSmallerThan((0))&&$6tz.notLargerThan((59)))&&($6u0=$6tw,$6u0.notSmallerThan((0))&&$6u0.notLargerThan((59)))&&($6u1=$6tu,$6u1.notSmallerThan((0))&&$6u1.notLargerThan((999)))){
return time($6tv,$6tt,$6tw,$6tu);
}
}
return null;
};convertToTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Time}]},ps:[{nm:'timeComponents',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]}}],d:['ceylon.time.iso8601','convertToTime']};};
function parseTimeComponents$iso8601($6u2){
var $6u3=function($6u4,$6u5){return ($6u5.empty?(0):function(){var $6u6;
if(m$1.is$(($6u6=m$1.Float.$st$.parse("0.".plus($6u5))),{t:m$1.Float}))return m$1.Float($6u4*$6u6).integer;else return null}());
};
$6u3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'magnitude',mt:'prm',$t:{t:m$1.Integer}},{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','calculateFraction$k42vha']};};
var $6u7=function($6u8){return ($6u8.empty?(0):(($6u8.size>(3))?null:function(){var $6u9;
if(m$1.is$(($6u9=m$1.Integer.$st$.parse($6u8)),{t:m$1.Integer}))return ($6u9*(10).power(((3)-$6u8.size)));else return null}()));
};
$6u7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Null}]},ps:[{nm:'fractionPart',mt:'prm',$t:{t:m$1.$_String}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','parseMilliseconds$4qjv03']};};
var $6ua=function($6ub,$6uc){return (($6uc==(0))?m$1.tpl$([$6ub,0,0,0]):function(){var $6ud=m$1.i$div($6uc,milliseconds$base().perMinute),$6ue=m$1.i$div($6uc.remainder(milliseconds$base().perMinute),milliseconds$base().perSecond),$6uf=(($6uc-($6ue*milliseconds$base().perSecond))-($6ud*milliseconds$base().perMinute));return m$1.tpl$([$6ub,$6ud,$6ue,$6uf]);
}());
};
$6ua.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'ms',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','fractionalHours$eqop0o']};};
var $6ug=function($6uh,$6ui,$6uj){return (($6uj==(0))?m$1.tpl$([$6uh,$6ui,0,0]):function(){var $6uk=m$1.i$div($6uj,milliseconds$base().perSecond),$6ul=$6uj.remainder(milliseconds$base().perSecond);return m$1.tpl$([$6uh,$6ui,$6uk,$6ul]);
}());
};
$6ug.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'hh',mt:'prm',$t:{t:m$1.Integer}},{nm:'mm',mt:'prm',$t:{t:m$1.Integer}},{nm:'ms',mt:'prm',$t:{t:m$1.Integer}}],$cont:parseTimeComponents$iso8601,d:['ceylon.time.iso8601','parseTimeComponents','$m','fractionalMinutes$n7s8ug']};};
var $6um;
var $6un;
var $6uo;
if(m$1.nn$(($6uo=$6u2.firstIndexWhere(m$1.jsc$2((function($6up){return m$1.$cnt$2($6up,m$1.tpl$([m$1.Character(46,true),m$1.Character(44,true)]));
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))))){
$6um=$6u2.spanTo(($6uo-(1)));
$6un=$6u2.spanFrom(($6uo+(1)));
}
else{
$6um=$6u2;
$6un="";
}
if(($6um.size==(2))){
var $6uq,$6ur;
if(m$1.is$(($6uq=m$1.Integer.$st$.parse($6um)),{t:m$1.Integer})&&m$1.nn$(($6ur=$6u3(milliseconds$base().perHour,$6un)))){
return $6ua($6uq,$6ur);
}
}
else{
if(($6um.size==(8))){
if($6um.occursAt(2,m$1.Character(58,true))&&$6um.occursAt(5,m$1.Character(58,true))){
var $6us,$6ut,$6uu,$6uv;
if(m$1.is$(($6us=m$1.Integer.$st$.parse($6um.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6ut=m$1.Integer.$st$.parse($6um.span(3,4))),{t:m$1.Integer})&&m$1.is$(($6uu=m$1.Integer.$st$.parse($6um.span(6,7))),{t:m$1.Integer})&&m$1.nn$(($6uv=$6u7($6un)))){
return m$1.tpl$([$6us,$6ut,$6uu,$6uv]);
}
}
}
else{
if(($6um.size==(6))){
var $6uw,$6ux,$6uy,$6uz;
if(m$1.is$(($6uw=m$1.Integer.$st$.parse($6um.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6ux=m$1.Integer.$st$.parse($6um.span(2,3))),{t:m$1.Integer})&&m$1.is$(($6uy=m$1.Integer.$st$.parse($6um.span(4,5))),{t:m$1.Integer})&&m$1.nn$(($6uz=$6u7($6un)))){
return m$1.tpl$([$6uw,$6ux,$6uy,$6uz]);
}
}
else{
if(($6um.size==(5))){
if($6um.occursAt(2,m$1.Character(58,true))){
var $6v0,$6v1,$6v2;
if(m$1.is$(($6v0=m$1.Integer.$st$.parse($6um.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6v1=m$1.Integer.$st$.parse($6um.span(3,4))),{t:m$1.Integer})&&m$1.nn$(($6v2=$6u3(milliseconds$base().perMinute,$6un)))){
return $6ug($6v0,$6v1,$6v2);
}
}
}
else{
if(($6um.size==(4))){
var $6v3,$6v4,$6v5;
if(m$1.is$(($6v3=m$1.Integer.$st$.parse($6um.span(0,1))),{t:m$1.Integer})&&m$1.is$(($6v4=m$1.Integer.$st$.parse($6um.span(2,3))),{t:m$1.Integer})&&m$1.nn$(($6v5=$6u3(milliseconds$base().perMinute,$6un)))){
return $6ug($6v3,$6v4,$6v5);
}
}
}
}
}
}
return null;
};parseTimeComponents$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Integer}]}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],d:['ceylon.time.iso8601','parseTimeComponents']};};
function State$iso8601(){var $6v6={t:m$1.Integer};$6v6.$crtmm$=function(){return{mod:$CCMM$,d:['ceylon.time.iso8601','State']};};return $6v6;}
function parsePeriod$iso8601($6v7){
var $6v8;
if(m$1.nn$(($6v8=$6v7.first))&&m$1.$eq$($6v8,m$1.Character(80,true))&&!$6v7.rest.empty){
var $6v9=zero();
var $6va=(0);
var $6vb=(0);
var $6vd;for(var $6vc=$6v7.rest.indexed.iterator();($6vd=$6vc.next())!==m$1.finished();){
var $6ve=$6vd.key,$6vf=$6vd.item;
if($6vf.digit&&($6vb<(7))&&!m$1.$eq$($6vb,(3))){
$6va=(($6va*(10))+($6vf.integer-m$1.Character(48,true).integer));
continue;
}
if(m$1.$eq$($6vf,m$1.Character(87,true))&&($6vb<(1))){
$6v9=$6v9.withDays(((7)*$6va));
$6va=(0);
$6vb=(7);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(89,true))&&($6vb<(1))){
$6v9=$6v9.withYears($6va);
$6va=(0);
$6vb=(1);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(77,true))&&($6vb<(2))){
$6v9=$6v9.withMonths($6va);
$6va=(0);
$6vb=(2);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(68,true))&&($6vb<(3))){
$6v9=$6v9.withDays($6va);
$6va=(0);
$6vb=(3);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(84,true))&&($6vb<(4))){
if(!m$1.$eq$($6va,(0))){
return null;
}
$6vb=(4);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(72,true))&&($6vb==(4))){
$6v9=$6v9.withHours($6va);
$6va=(0);
$6vb=(5);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(77,true))&&($6vg=$6vb,$6vg.notSmallerThan((4))&&$6vg.smallerThan((6)))){
$6v9=$6v9.withMinutes($6va);
$6va=(0);
$6vb=(6);
continue;
}
if(m$1.$eq$($6vf,m$1.Character(83,true))&&($6vh=$6vb,$6vh.notSmallerThan((4))&&$6vh.smallerThan((7)))){
$6v9=$6v9.withSeconds($6va);
$6va=(0);
$6vb=(7);
continue;
}
return null;
}
if(($6va==(0))){
return $6v9;
}
}
return null;
}
ex$.parsePeriod$iso8601=parsePeriod$iso8601;
parsePeriod$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Period}]},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.time.iso8601','parsePeriod']};};
function parseZoneDateTime$iso8601($6vi){
var $6vj;
if(m$1.nn$(($6vj=$6vi.last))&&m$1.$eq$($6vj,m$1.Character(90,true))){
var $6vk;
if(m$1.nn$(($6vk=parseDateTime$iso8601($6vi.initial(($6vi.size-(1))))))){
return $6vk.instant(timeZone$timezone().utc).zoneDateTime(timeZone$timezone().utc);
}
}
else{
var $6vl;
if(m$1.nn$(($6vl=$6vi.lastIndexWhere(m$1.jsc$2((function($6vm){return m$1.$cnt$2($6vm,m$1.tpl$([m$1.Character(43,true),m$1.Character(45,true)]));
}),[{nm:'c',mt:'prm',$t:{t:m$1.Character}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:m$1.mtt$([{t:m$1.Character}])}))))){
var $6vn,$6vo;
if(m$1.is$(($6vn=timeZone$timezone().parse($6vi.spanFrom($6vl))),{t:TimeZone$timezone})&&m$1.nn$(($6vo=parseDateTime$iso8601($6vi.spanTo(($6vl-(1))))))){
return $6vo.instant($6vn).zoneDateTime($6vn);
}
}
}
return null;
}
ex$.parseZoneDateTime$iso8601=parseZoneDateTime$iso8601;
parseZoneDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:ZoneDateTime$timezone}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseZoneDateTime'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTimeZone$iso8601)],{t:m$1.FunctionDeclaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseZoneDateTime']};};
function parseDateTime$iso8601($6vp){
var $6vq;
if(m$1.nn$(($6vq=$6vp.firstOccurrence(m$1.Character(84,true))))){
var $6vr,$6vs;
if(m$1.nn$(($6vr=parseDate$iso8601($6vp.span(0,($6vq-(1))))))&&m$1.nn$(($6vs=parseTimeComponents$iso8601($6vp.spanFrom(($6vq+(1))))))){
var $6vt;
if(m$1.nn$(($6vt=convertToTime$iso8601($6vs)))){
if(($6vs.$_get(0)==(24))){
return createDateTime$iso8601($6vr.successor,$6vt);
}
else{
return createDateTime$iso8601($6vr,$6vt);
}
}
}
}
return null;
}
ex$.parseDateTime$iso8601=parseDateTime$iso8601;
parseDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DateTime}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601:parseDateTime'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseDate$iso8601),m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.time.iso8601'),parseTime$iso8601)],{t:m$1.FunctionDeclaration$meta$declaration}))];},d:['ceylon.time.iso8601','parseDateTime']};};
function createDateTime$iso8601($6vu,$6vv){return ($6vw=$6vu.year,$6vx=$6vu.month,$6vy=$6vu.day,$6vz=$6vv.hours,$6w0=$6vv.minutes,$6w1=$6vv.seconds,$6w2=$6vv.milliseconds,dateTime($6vw,$6vx,$6vy,$6vz,$6w0,$6w1,$6w2));
var $6vw,$6vx,$6vy,$6vz,$6w0,$6w1,$6w2;
};
createDateTime$iso8601.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'date',mt:'prm',$t:{t:$_Date}},{nm:'time',mt:'prm',$t:{t:Time}}],d:['ceylon.time.iso8601','createDateTime']};};
function DateRange(from,to,step,dateRange$){
$init$DateRange();
if(dateRange$===undefined)dateRange$=new DateRange.$$;
dateRange$.$wgb6s9$6w3_=from;
dateRange$.$wgb6s9$6w4_=to;
if(step===undefined){step=$init$DateRange().$defs$step(dateRange$,from,to);}
dateRange$.$wgb6s9$6w5_=step;
Range$base({StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}},dateRange$);
return dateRange$;
}
DateRange.$defs$step=function(dateRange$,from,to){return days$base()};DateRange.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'from',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];}},{nm:'to',mt:'prm',$t:{t:$_Date},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];}},{nm:'step',mt:'prm',def:1,$t:{t:UnitOfDate$base},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];}}],sts:[{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),Range$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time','DateRange']};};
ex$.DateRange=DateRange;
function $init$DateRange(){
if(DateRange.$$===undefined){
m$1.initTypeProto(DateRange,'ceylon.time::DateRange',m$1.Basic,$init$Range$base());
(function(dateRange$){
m$1.atr$(dateRange$,'from',function(){return this.$wgb6s9$6w3_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:from')];},d:['ceylon.time','DateRange','$at','from']};});
m$1.atr$(dateRange$,'to',function(){return this.$wgb6s9$6w4_;},undefined,function(){return{mod:$CCMM$,$t:{t:$_Date},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:to')];},d:['ceylon.time','DateRange','$at','to']};});
m$1.atr$(dateRange$,'step',function(){return this.$wgb6s9$6w5_;},undefined,function(){return{mod:$CCMM$,$t:{t:UnitOfDate$base},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:step')];},d:['ceylon.time','DateRange','$at','step']};});
m$1.atr$(dateRange$,'period',function(){
var dateRange$=this;
return dateRange$.from.periodTo(dateRange$.to);
},undefined,function(){return{mod:$CCMM$,$t:{t:Period},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:period')];},d:['ceylon.time','DateRange','$at','period']};});
m$1.atr$(dateRange$,'duration',function(){
var dateRange$=this;
return Duration(((dateRange$.to.dayOfEra-dateRange$.from.dayOfEra)*milliseconds$base().perDay));
},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:duration')];},d:['ceylon.time','DateRange','$at','duration']};});
dateRange$.equals=function($6w8){var dateRange$=this;
return dateRange$.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(dateRange$,$6w8);
};
dateRange$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:equals')];},d:['ceylon.time','DateRange','$m','equals']};};
m$1.atr$(dateRange$,'hash',function(){
var dateRange$=this;
return m$1.attrGetter(dateRange$.getT$all()['ceylon.time.base::Range'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$at:hash')];},d:['ceylon.time','DateRange','$at','hash']};});
dateRange$.overlap=function($6wa){
var dateRange$=this;
var $6wb=overlap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$6wa.from,$6wa.to]),{Value$overlap:{t:$_Date}});
var $6wc;
if(m$1.is$(($6wc=$6wb),m$1.mtt$([{t:$_Date},{t:$_Date}]))){
return DateRange($6wc.$_get(0),$6wc.$_get(1));
}
else{
return $6wc;
}
};dateRange$.overlap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:overlap')];},d:['ceylon.time','DateRange','$m','overlap']};};
dateRange$.gap=function($6wd){
var dateRange$=this;
var $6we=gap$internal(m$1.tpl$([dateRange$.from,dateRange$.to]),m$1.tpl$([$6wd.from,$6wd.to]),{Value$gap:{t:$_Date}});
var $6wf=$6we;
if(m$1.is$($6wf,m$1.mtt$([{t:$_Date},{t:$_Date}]))) {
return ($6wg=($6wf.$_get(0).successor.smallerThan($6wf.$_get(1))?DateRange($6wf.$_get(0).successor,$6wf.$_get(1).predecessor):null),m$1.nn$($6wg)?$6wg:m$1.empty());
var $6wg;
}
else if(m$1.is$($6wf,{t:m$1.Empty})) {
return $6wf;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.gap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:DateRange},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date}}}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:gap')];},d:['ceylon.time','DateRange','$m','gap']};};
dateRange$.iterator=function(){
var dateRange$=this;
function $6wh($$targs$$){
var $6wh$=new $6wh.$$;$6wh$.outer$=dateRange$;
$6wh$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:{t:$_Date}},$6wh$);
$6wh$.$wgb6s9$6wj_=(0);
$6wh$.$prop$get$wgb6s9$6wj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6wh,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};}};
$6wh$.$prop$get$wgb6s9$6wj.get=function(){return $wgb6s9$6wj};
return $6wh$;
};$6wh.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:dateRange$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}}],d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol']};};
function $init$$6wh(){
if($6wh.$$===undefined){
m$1.initTypeProto($6wh,'ceylon.time::DateRange.iterator.listIterator',m$1.Basic,m$1.Iterator);
(function($6wh$){
m$1.atr$($6wh$,'$wgb6s9$6wj',function(){return this.$wgb6s9$6wj_;},function($6wk){return this.$wgb6s9$6wj_=$6wk;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6wh,pa:1024,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$at','count$1fh4vb']};});
$6wh$.next=function(){
var $6wh$=this;
var $6wl=($6wm=(dateRange$.from.largerThan(dateRange$.to)?dateRange$.$wgb6s9$6wn(($6wo=$6wh$.$wgb6s9$6wj,$6wh$.$wgb6s9$6wj=$6wo.successor,$6wo)):null),m$1.nn$($6wm)?$6wm:dateRange$.$wgb6s9$6wp(($6wq=$6wh$.$wgb6s9$6wj,$6wh$.$wgb6s9$6wj=$6wq.successor,$6wq)));
var $6wm,$6wo,$6wq;
var $6wr=($6ws=(dateRange$.from.notLargerThan(dateRange$.to)?$6wl.notLargerThan(dateRange$.to):null),m$1.nn$($6ws)?$6ws:$6wl.notSmallerThan(dateRange$.to));
var $6ws;
return ($6wt=($6wr?$6wl:null),m$1.nn$($6wt)?$6wt:m$1.finished());
var $6wt;
};$6wh$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$_Date},{t:m$1.Finished}]},ps:[],$cont:$6wh,pa:3,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwol','$m','next']};};
$6wh$.toString=function(){return this.string.valueOf();};
})($6wh.$$.prototype);
}
return $6wh;
}
dateRange$.$init$$6wh=$init$$6wh;$init$$6wh();var $6wu;
function $6wi(){
if($6wu===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'listIterator\' before it was set"),'122:8-129:8','DateRange.ceylon');
if($6wu===undefined){$6wu=m$1.INIT$;$6wu=$init$$6wh()({Element$Iterator:{t:$_Date}});$6wu.$crtmm$=$6wi.$crtmm$;}
return $6wu;
}
$6wi.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$6wh()},$cont:dateRange$.iterator,d:['ceylon.time','DateRange','$m','iterator','$o','listIterator$bgdwom']};};
$prop$get$6wh=$6wi;
$6wi();
return $6wi();
};dateRange$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:$_Date}}},ps:[],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:iterator')];},d:['ceylon.time','DateRange','$m','iterator']};};
dateRange$.stepBy=function($6wv){
var dateRange$=this;
return ($6ww=(m$1.$eq$($6wv,dateRange$.step)?dateRange$:null),m$1.nn$($6ww)?$6ww:DateRange(dateRange$.from,dateRange$.to,$6wv));
var $6ww;
};dateRange$.stepBy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateRange},ps:[{nm:'step',mt:'prm',$t:{t:UnitOfDate$base}}],$cont:DateRange,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:stepBy')];},d:['ceylon.time','DateRange','$m','stepBy']};};
dateRange$.$wgb6s9$6wp$defs$jump=function($6wx){return 1;};
dateRange$.$wgb6s9$6wp=function($6wx){
var dateRange$=this;
if($6wx===undefined){$6wx=(1);}
var $6wy=dateRange$.step;
if(m$1.is$($6wy,{t:UnitOfYear$base})) {
return dateRange$.from.plusYears($6wx);
}
else if(m$1.is$($6wy,{t:UnitOfMonth$base})) {
return dateRange$.from.plusMonths($6wx);
}
else if(m$1.is$($6wy,{t:UnitOfDay$base})) {
return dateRange$.from.plusDays($6wx);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.$wgb6s9$6wp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:nextByStep$x6l2vu')];},d:['ceylon.time','DateRange','$m','nextByStep$x6l2vu']};};
dateRange$.$wgb6s9$6wn$defs$jump=function($6wz){return 1;};
dateRange$.$wgb6s9$6wn=function($6wz){
var dateRange$=this;
if($6wz===undefined){$6wz=(1);}
var $6x0=dateRange$.step;
if(m$1.is$($6x0,{t:UnitOfYear$base})) {
return dateRange$.from.minusYears($6wz);
}
else if(m$1.is$($6x0,{t:UnitOfMonth$base})) {
return dateRange$.from.minusMonths($6wz);
}
else if(m$1.is$($6x0,{t:UnitOfDay$base})) {
return dateRange$.from.minusDays($6wz);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};dateRange$.$wgb6s9$6wn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'jump',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:DateRange,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:DateRange:$m:previousByStep$lx41mm')];},d:['ceylon.time','DateRange','$m','previousByStep$lx41mm']};};
dateRange$.toString=function(){return this.string.valueOf();};
})(DateRange.$$.prototype);
}
return DateRange;
}
ex$.$init$DateRange=$init$DateRange;$init$DateRange();DateRange.inst$$=function($6x1){
var dateRange$=new DateRange.$$;
m$1.set_type_args(dateRange$,{StepBy$Range:{t:UnitOfDate$base},Element$Range:{t:$_Date},Element$Iterable:{t:$_Date},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return dateRange$;
};
DateRange.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::DateRange.from')return o.from_;
else if(n==='ceylon.time::DateRange.to')return o.to_;
else if(n==='ceylon.time::DateRange.step')return o.step_;
else throw new TypeError('unknown attribute');
};
DateRange.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::DateRange.from')o.from_=i;
else if(n==='ceylon.time::DateRange.to')o.to_=i;
else if(n==='ceylon.time::DateRange.step')o.step_=i;
else throw new TypeError('unknown attribute');
};
DateRange.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getFrom)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getTo)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getStep))];
};
function Clock(clock$){
}
Clock.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock')];},d:['ceylon.time','Clock']};};
ex$.Clock=Clock;
function $init$Clock(){
if(Clock.$$===undefined){
m$1.initTypeProtoI(Clock,'ceylon.time::Clock');
(function(clock$){
clock$.milliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:milliseconds')];},d:['ceylon.time','Clock','$m','milliseconds']};}};clock$.instant={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:Clock,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Clock:$m:instant')];},d:['ceylon.time','Clock','$m','instant']};}};clock$.toString=function(){return this.string.valueOf();};
})(Clock.$$.prototype);
}
return Clock;
}
ex$.$init$Clock=$init$Clock;$init$Clock();
function $6x2(){
var systemTime$=new $6x2.$$;Clock(systemTime$);
systemTime$.$wgb6s9$6x4_="System time";
systemTime$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6x2,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};}};
systemTime$.$prop$getString.get=function(){return string};
return systemTime$;
};$6x2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},sts:[{t:Clock}],d:['ceylon.time','systemTime']};};
function $init$systemTime(){
if($6x2.$$===undefined){
m$1.initTypeProto($6x2,'ceylon.time::systemTime',m$1.Basic,$init$Clock());
(function(systemTime$){
systemTime$.milliseconds=function(){return m$1.system().milliseconds;
};
systemTime$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:$6x2,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:milliseconds')];},d:['ceylon.time','systemTime','$m','milliseconds']};};
systemTime$.instant=function(){var systemTime$=this;
return Instant(systemTime$.milliseconds());
};
systemTime$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:$6x2,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$m:instant')];},d:['ceylon.time','systemTime','$m','instant']};};
m$1.atr$(systemTime$,'string',function(){return this.$wgb6s9$6x4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6x2,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime:$at:string')];},d:['ceylon.time','systemTime','$at','string']};});
systemTime$.toString=function(){return this.string.valueOf();};
})($6x2.$$.prototype);
}
return $6x2;
}
ex$.$init$systemTime=$init$systemTime;$init$systemTime();var $6x5;
function systemTime(){
if($6x5===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'systemTime\' before it was set"),'29:0-41:0','Clock.ceylon');
if($6x5===undefined){$6x5=m$1.INIT$;$6x5=$init$systemTime()();$6x5.$crtmm$=systemTime.$crtmm$;}
return $6x5;
}
ex$.systemTime=systemTime;
systemTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$systemTime()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:systemTime')];},d:['ceylon.time','systemTime']};};
$prop$getSystemTime=systemTime;
ex$.$prop$getSystemTime=$prop$getSystemTime;
function fixedTime($6x6){
var $6x7=$6x6;
if(m$1.is$($6x7,{t:Instant})) {
return FixedInstant($6x7);
}
else if(m$1.is$($6x7,{t:m$1.Integer})) {
return FixedMilliseconds($6x7);
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.fixedTime=fixedTime;
fixedTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'instant',mt:'prm',$t:{t:'u',l:[{t:Instant},{t:m$1.Integer}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:fixedTime')];},d:['ceylon.time','fixedTime']};};
function FixedInstant($wgb6s9$6x8,fixedInstant$){
$init$FixedInstant();
if(fixedInstant$===undefined)fixedInstant$=new FixedInstant.$$;
fixedInstant$.$wgb6s9$6x8_=$wgb6s9$6x8;
Clock(fixedInstant$);
fixedInstant$.$wgb6s9$6x9_=("Fixed to "+fixedInstant$.instant().string);
return fixedInstant$;
}
FixedInstant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedInstant',mt:'prm',$t:{t:Instant}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant')];},d:['ceylon.time','FixedInstant']};};
ex$.FixedInstant=FixedInstant;
function $init$FixedInstant(){
if(FixedInstant.$$===undefined){
m$1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',m$1.Basic,$init$Clock());
(function(fixedInstant$){
m$1.atr$(fixedInstant$,'$wgb6s9$6x8',function(){return this.$wgb6s9$6x8_;},undefined,function(){return{mod:$CCMM$,$t:{t:Instant},$cont:FixedInstant,d:['ceylon.time','FixedInstant','$at','fixedInstant$dw5xdz']};});
fixedInstant$.milliseconds=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$6x8.millisecondsOfEpoch;
};
fixedInstant$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$m:milliseconds')];},d:['ceylon.time','FixedInstant','$m','milliseconds']};};
fixedInstant$.instant=function(){var fixedInstant$=this;
return fixedInstant$.$wgb6s9$6x8;
};
fixedInstant$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedInstant,pa:3,an:function(){return[m$1.doc("Returns the fixed instant.")];},d:['ceylon.time','FixedInstant','$m','instant']};};
m$1.atr$(fixedInstant$,'string',function(){return this.$wgb6s9$6x9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedInstant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedInstant:$at:string')];},d:['ceylon.time','FixedInstant','$at','string']};});
fixedInstant$.toString=function(){return this.string.valueOf();};
})(FixedInstant.$$.prototype);
}
return FixedInstant;
}
ex$.$init$FixedInstant=$init$FixedInstant;$init$FixedInstant();
function FixedMilliseconds($wgb6s9$6xa,fixedMilliseconds$){
$init$FixedMilliseconds();
if(fixedMilliseconds$===undefined)fixedMilliseconds$=new FixedMilliseconds.$$;
fixedMilliseconds$.$wgb6s9$6xa_=$wgb6s9$6xa;
Clock(fixedMilliseconds$);
fixedMilliseconds$.$wgb6s9$6xb_=("Fixed to "+fixedMilliseconds$.instant().string);
return fixedMilliseconds$;
}
FixedMilliseconds.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'fixedMilliseconds',mt:'prm',$t:{t:m$1.Integer}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds')];},d:['ceylon.time','FixedMilliseconds']};};
ex$.FixedMilliseconds=FixedMilliseconds;
function $init$FixedMilliseconds(){
if(FixedMilliseconds.$$===undefined){
m$1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',m$1.Basic,$init$Clock());
(function(fixedMilliseconds$){
m$1.atr$(fixedMilliseconds$,'$wgb6s9$6xa',function(){return this.$wgb6s9$6xa_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:FixedMilliseconds,d:['ceylon.time','FixedMilliseconds','$at','fixedMilliseconds$ip85yf']};});
fixedMilliseconds$.milliseconds=function(){var fixedMilliseconds$=this;
return fixedMilliseconds$.$wgb6s9$6xa;
};
fixedMilliseconds$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc("Returns the fixed milliseconds.")];},d:['ceylon.time','FixedMilliseconds','$m','milliseconds']};};
fixedMilliseconds$.instant=function(){var fixedMilliseconds$=this;
return Instant(fixedMilliseconds$.$wgb6s9$6xa);
};
fixedMilliseconds$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$m:instant')];},d:['ceylon.time','FixedMilliseconds','$m','instant']};};
m$1.atr$(fixedMilliseconds$,'string',function(){return this.$wgb6s9$6xb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:FixedMilliseconds,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:FixedMilliseconds:$at:string')];},d:['ceylon.time','FixedMilliseconds','$at','string']};});
fixedMilliseconds$.toString=function(){return this.string.valueOf();};
})(FixedMilliseconds.$$.prototype);
}
return FixedMilliseconds;
}
ex$.$init$FixedMilliseconds=$init$FixedMilliseconds;$init$FixedMilliseconds();
function offsetTime($6xc,$6xd){return OffsetClock($6xc,$6xd);
};
offsetTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Clock},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:offsetTime')];},d:['ceylon.time','offsetTime']};};
ex$.offsetTime=offsetTime;
function OffsetClock($wgb6s9$6xe,$wgb6s9$6xf,offsetClock$){
$init$OffsetClock();
if(offsetClock$===undefined)offsetClock$=new OffsetClock.$$;
offsetClock$.$wgb6s9$6xe_=$wgb6s9$6xe;
offsetClock$.$wgb6s9$6xf_=$wgb6s9$6xf;
Clock(offsetClock$);
offsetClock$.$wgb6s9$6xg_=("Offset of "+offsetClock$.$wgb6s9$6xf.period.normalized().string+" from "+offsetClock$.$wgb6s9$6xe.string);
return offsetClock$;
}
OffsetClock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'baseClock',mt:'prm',$t:{t:Clock}},{nm:'offset',mt:'prm',$t:{t:Duration}}],sts:[{t:Clock}],an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock')];},d:['ceylon.time','OffsetClock']};};
ex$.OffsetClock=OffsetClock;
function $init$OffsetClock(){
if(OffsetClock.$$===undefined){
m$1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',m$1.Basic,$init$Clock());
(function(offsetClock$){
m$1.atr$(offsetClock$,'$wgb6s9$6xe',function(){return this.$wgb6s9$6xe_;},undefined,function(){return{mod:$CCMM$,$t:{t:Clock},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','baseClock$wp0y7f']};});
m$1.atr$(offsetClock$,'$wgb6s9$6xf',function(){return this.$wgb6s9$6xf_;},undefined,function(){return{mod:$CCMM$,$t:{t:Duration},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','offset$fimsw5']};});
offsetClock$.milliseconds=function(){var offsetClock$=this;
return (offsetClock$.$wgb6s9$6xe.milliseconds()+offsetClock$.$wgb6s9$6xf.milliseconds);
};
offsetClock$.milliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','milliseconds']};};
offsetClock$.instant=function(){var offsetClock$=this;
return Instant(offsetClock$.milliseconds());
};
offsetClock$.instant.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[],$cont:OffsetClock,pa:3,d:['ceylon.time','OffsetClock','$m','instant']};};
m$1.atr$(offsetClock$,'string',function(){return this.$wgb6s9$6xg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:OffsetClock,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:OffsetClock:$at:string')];},d:['ceylon.time','OffsetClock','$at','string']};});
offsetClock$.toString=function(){return this.string.valueOf();};
})(OffsetClock.$$.prototype);
}
return OffsetClock;
}
ex$.$init$OffsetClock=$init$OffsetClock;$init$OffsetClock();
function now($6xh){
if($6xh===undefined){$6xh=null;}
var $6xi;
if(m$1.nn$(($6xi=$6xh))){
return $6xi.instant();
}
function $6xj(){return $6xh;}
return systemTime().instant();
}
ex$.now=now;
now.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'clock',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:Clock}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:now')];},d:['ceylon.time','now']};};
function Instant(millisecondsOfEpoch,instant$){
$init$Instant();
if(instant$===undefined)instant$=new Instant.$$;
instant$.$wgb6s9$6xk_=millisecondsOfEpoch;
ReadableInstant$base(instant$);
m$1.Comparable({Other$Comparable:{t:Instant}},instant$);
m$1.Enumerable({Other$Enumerable:{t:Instant}},instant$);
return instant$;
}
Instant.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'millisecondsOfEpoch',mt:'prm',$t:{t:m$1.Integer},pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];}}],sts:[{t:ReadableInstant$base},{t:m$1.Comparable,a:{Other$Comparable:{t:Instant}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Instant}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant')];},d:['ceylon.time','Instant']};};
ex$.Instant=Instant;
function $init$Instant(){
if(Instant.$$===undefined){
m$1.initTypeProto(Instant,'ceylon.time::Instant',m$1.Basic,$init$ReadableInstant$base(),m$1.Comparable,m$1.Enumerable);
(function(instant$){
m$1.atr$(instant$,'millisecondsOfEpoch',function(){return this.$wgb6s9$6xk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:millisecondsOfEpoch')];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};});
instant$.plus=function($6xl){
var instant$=this;
var $6xm=$6xl;
if(m$1.is$($6xm,{t:Duration})) {
return Instant((instant$.millisecondsOfEpoch+$6xm.milliseconds));
}
else if(m$1.is$($6xm,{t:Period})) {
return instant$.dateTime().plus($6xm).instant();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};instant$.plus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:plus')];},d:['ceylon.time','Instant','$m','plus']};};
instant$.minus=function($6xn){
var instant$=this;
var $6xo=$6xn;
if(m$1.is$($6xo,{t:Duration})) {
return Instant((instant$.millisecondsOfEpoch-$6xo.milliseconds));
}
else if(m$1.is$($6xo,{t:Period})) {
return instant$.dateTime().minus($6xo).instant();
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};instant$.minus.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:Duration},{t:Period}]}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:minus')];},d:['ceylon.time','Instant','$m','minus']};};
instant$.compare=function($6xp){
var instant$=this;
return instant$.millisecondsOfEpoch.compare($6xp.millisecondsOfEpoch);
};instant$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:compare')];},d:['ceylon.time','Instant','$m','compare']};};
instant$.dateTime$defs$timeZone=function($6xq){return timeZone$timezone().system;};
instant$.dateTime=function($6xq){
var instant$=this;
if($6xq===undefined){$6xq=timeZone$timezone().system;}
return GregorianDateTime$internal(instant$.date($6xq),instant$.time($6xq));
};instant$.dateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DateTime},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:dateTime')];},d:['ceylon.time','Instant','$m','dateTime']};};
instant$.date$defs$timeZone=function($6xr){return timeZone$timezone().system;};
instant$.date=function($6xr){
var instant$=this;
if($6xr===undefined){$6xr=timeZone$timezone().system;}
return GregorianDate$internal(unixTime$chronology().fixedFromTime((instant$.millisecondsOfEpoch+$6xr.offset(instant$))));
};instant$.date.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$_Date},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:date')];},d:['ceylon.time','Instant','$m','date']};};
instant$.time$defs$timeZone=function($6xs){return timeZone$timezone().system;};
instant$.time=function($6xs){
var instant$=this;
if($6xs===undefined){$6xs=timeZone$timezone().system;}
return TimeOfDay$internal(unixTime$chronology().timeOfDay((instant$.millisecondsOfEpoch+$6xs.offset(instant$))));
};instant$.time.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Time},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:time')];},d:['ceylon.time','Instant','$m','time']};};
instant$.zoneDateTime$defs$timeZone=function($6xt){return timeZone$timezone().system;};
instant$.zoneDateTime=function($6xt){
var instant$=this;
if($6xt===undefined){$6xt=timeZone$timezone().system;}
return GregorianZonedDateTime$internal(instant$,$6xt);
};instant$.zoneDateTime.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ZoneDateTime$timezone},ps:[{nm:'timeZone',mt:'prm',def:1,$t:{t:TimeZone$timezone}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:zoneDateTime')];},d:['ceylon.time','Instant','$m','zoneDateTime']};};
instant$.durationTo=function($6xu){
var instant$=this;
return Duration(($6xu.millisecondsOfEpoch-instant$.millisecondsOfEpoch));
};instant$.durationTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationTo')];},d:['ceylon.time','Instant','$m','durationTo']};};
instant$.durationFrom=function($6xv){
var instant$=this;
return Duration((instant$.millisecondsOfEpoch-$6xv.millisecondsOfEpoch));
};instant$.durationFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Duration},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:durationFrom')];},d:['ceylon.time','Instant','$m','durationFrom']};};
instant$.equals=function($6xw){
var instant$=this;
var $6xx;
if(m$1.is$(($6xx=$6xw),{t:Instant})){
return (instant$.millisecondsOfEpoch==$6xx.millisecondsOfEpoch);
}
function $6xy(){return $6xw;}
return false;
};instant$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$m:equals')];},d:['ceylon.time','Instant','$m','equals']};};
m$1.atr$(instant$,'hash',function(){
var instant$=this;
return ((31)+instant$.millisecondsOfEpoch.hash);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:hash')];},d:['ceylon.time','Instant','$at','hash']};});m$1.atr$(instant$,'string',function(){
var instant$=this;
return instant$.zoneDateTime(timeZone$timezone().utc).string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Instant,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time:Instant:$at:string')];},d:['ceylon.time','Instant','$at','string']};});
instant$.neighbour=function($6y0){var instant$=this;
return Instant((instant$.millisecondsOfEpoch+$6y0));
};
instant$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Instant},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','neighbour']};};
instant$.offset=function($6y1){var instant$=this;
return (instant$.millisecondsOfEpoch-$6y1.millisecondsOfEpoch);
};
instant$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Instant}}],$cont:Instant,pa:3,d:['ceylon.time','Instant','$m','offset']};};
instant$.toString=function(){return this.string.valueOf();};
})(Instant.$$.prototype);
}
return Instant;
}
ex$.$init$Instant=$init$Instant;$init$Instant();Instant.inst$$=function($6y2){
var instant$=new Instant.$$;
m$1.set_type_args(instant$,{Other$Comparable:{t:Instant},Other$Enumerable:{t:Instant},Other$Ordinal:{t:Instant}});
return instant$;
};
Instant.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.time::Instant.millisecondsOfEpoch')return o.millisecondsOfEpoch_;
else throw new TypeError('unknown attribute');
};
Instant.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.time::Instant.millisecondsOfEpoch')o.millisecondsOfEpoch_=i;
else throw new TypeError('unknown attribute');
};
Instant.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.time'),o.$prop$getMillisecondsOfEpoch))];
};
function ReadableTime$base(readableTime$){
}
ReadableTime$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableTime']};};
ex$.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
if(ReadableTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableTime$base,'ceylon.time.base::ReadableTime');
(function(readableTime$){
readableTime$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Hour of day.")];},d:['ceylon.time.base','ReadableTime','$at','hours']};}};
readableTime$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of minutes since last full hour.")];},d:['ceylon.time.base','ReadableTime','$at','minutes']};}};
readableTime$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of seconds since last minute.")];},d:['ceylon.time.base','ReadableTime','$at','seconds']};}};
readableTime$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds since last second.")];},d:['ceylon.time.base','ReadableTime','$at','milliseconds']};}};
readableTime$.$prop$getMinutesOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:minutesOfDay')];},d:['ceylon.time.base','ReadableTime','$at','minutesOfDay']};}};
readableTime$.$prop$getSecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:secondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','secondsOfDay']};}};
readableTime$.$prop$getMillisecondsOfDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTime$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTime:$at:millisecondsOfDay')];},d:['ceylon.time.base','ReadableTime','$at','millisecondsOfDay']};}};
readableTime$.toString=function(){return this.string.valueOf();};
})(ReadableTime$base.$$.prototype);
}
return ReadableTime$base;
}
ex$.$init$ReadableTime$base=$init$ReadableTime$base;$init$ReadableTime$base();
function DateTimeBehavior$base($$targs$$,dateTimeBehavior$){
m$1.set_type_args(dateTimeBehavior$,$$targs$$,DateTimeBehavior$base);
DateBehavior$base({Element$DateBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
TimeBehavior$base({Element$TimeBehavior:$$targs$$.Element$DateTimeBehavior},dateTimeBehavior$);
}
DateTimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateTimeBehavior:{sts:[{t:ReadableDateTime$base}]},DateType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableDate$base}]},TimeType$DateTimeBehavior:{dv:'out',sts:[{t:ReadableTime$base}]}},sts:[{t:DateBehavior$base,a:{Element$DateBehavior:'Element$DateTimeBehavior'}},{t:TimeBehavior$base,a:{Element$TimeBehavior:'Element$DateTimeBehavior'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDateTime$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableDate$base),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.base'),ReadableTime$base)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','DateTimeBehavior']};};
ex$.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
if(DateTimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
(function(dateTimeBehavior$){
dateTimeBehavior$.$prop$getTime={$crtmm$:function(){return{mod:$CCMM$,$t:'TimeType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:time')];},d:['ceylon.time.base','DateTimeBehavior','$at','time']};}};
dateTimeBehavior$.$prop$getDate={$crtmm$:function(){return{mod:$CCMM$,$t:'DateType$DateTimeBehavior',$cont:DateTimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateTimeBehavior:$at:date')];},d:['ceylon.time.base','DateTimeBehavior','$at','date']};}};
dateTimeBehavior$.toString=function(){return this.string.valueOf();};
})(DateTimeBehavior$base.$$.prototype);
}
return DateTimeBehavior$base;
}
ex$.$init$DateTimeBehavior$base=$init$DateTimeBehavior$base;$init$DateTimeBehavior$base();
function ReadableDate$base(readableDate$){
ReadableYear$base(readableDate$);
ReadableMonth$base(readableDate$);
}
ReadableDate$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableYear$base},{t:ReadableMonth$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDate'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),Time),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDate']};};
ex$.ReadableDate$base=ReadableDate$base;
function $init$ReadableDate$base(){
if(ReadableDate$base.$$===undefined){
m$1.initTypeProtoI(ReadableDate$base,'ceylon.time.base::ReadableDate',$init$ReadableYear$base(),$init$ReadableMonth$base());
(function(readableDate$){
readableDate$.$prop$getDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of month value of the date.")];},d:['ceylon.time.base','ReadableDate','$at','day']};}};
readableDate$.$prop$getDayOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Day of the week.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfWeek']};}};
readableDate$.$prop$getWeekOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the week of the date.")];},d:['ceylon.time.base','ReadableDate','$at','weekOfYear']};}};
readableDate$.$prop$getDayOfYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of the day in year.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfYear']};}};
readableDate$.$prop$getDayOfEra={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDate$base,pa:5,an:function(){return[m$1.doc("Number of calendar days since ERA.")];},d:['ceylon.time.base','ReadableDate','$at','dayOfEra']};}};
readableDate$.toString=function(){return this.string.valueOf();};
})(ReadableDate$base.$$.prototype);
}
return ReadableDate$base;
}
ex$.$init$ReadableDate$base=$init$ReadableDate$base;$init$ReadableDate$base();
function ReadableInstant$base(readableInstant$){
}
ReadableInstant$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Instant)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableInstant']};};
ex$.ReadableInstant$base=ReadableInstant$base;
function $init$ReadableInstant$base(){
if(ReadableInstant$base.$$===undefined){
m$1.initTypeProtoI(ReadableInstant$base,'ceylon.time.base::ReadableInstant');
(function(readableInstant$){
readableInstant$.$prop$getMillisecondsOfEpoch={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableInstant$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableInstant:$at:millisecondsOfEpoch')];},d:['ceylon.time.base','ReadableInstant','$at','millisecondsOfEpoch']};}};
readableInstant$.toString=function(){return this.string.valueOf();};
})(ReadableInstant$base.$$.prototype);
}
return ReadableInstant$base;
}
ex$.$init$ReadableInstant$base=$init$ReadableInstant$base;$init$ReadableInstant$base();
function YearBehavior$base($$targs$$,yearBehavior$){
m$1.set_type_args(yearBehavior$,$$targs$$,YearBehavior$base);
}
YearBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$YearBehavior:{sts:[{t:ReadableYear$base}]}},pa:1,an:function(){return[m$1.doc("Common behavior for year types.")];},d:['ceylon.time.base','YearBehavior']};};
ex$.YearBehavior$base=YearBehavior$base;
function $init$YearBehavior$base(){
if(YearBehavior$base.$$===undefined){
m$1.initTypeProtoI(YearBehavior$base,'ceylon.time.base::YearBehavior');
(function(yearBehavior$){
yearBehavior$.withYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:withYear')];},d:['ceylon.time.base','YearBehavior','$m','withYear']};}};yearBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:plusYears')];},d:['ceylon.time.base','YearBehavior','$m','plusYears']};}};yearBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$YearBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:YearBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:YearBehavior:$m:minusYears')];},d:['ceylon.time.base','YearBehavior','$m','minusYears']};}};yearBehavior$.toString=function(){return this.string.valueOf();};
})(YearBehavior$base.$$.prototype);
}
return YearBehavior$base;
}
ex$.$init$YearBehavior$base=$init$YearBehavior$base;$init$YearBehavior$base();
function UnitOfDate$base(unitOfDate$){
}
UnitOfDate$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfYear$base},{t:UnitOfMonth$base},{t:UnitOfDay$base}],pa:1,an:function(){return[m$1.doc("Represents units of Date")];},d:['ceylon.time.base','UnitOfDate']};};
ex$.UnitOfDate$base=UnitOfDate$base;
function $init$UnitOfDate$base(){
if(UnitOfDate$base.$$===undefined){
m$1.initTypeProtoI(UnitOfDate$base,'ceylon.time.base::UnitOfDate');
(function(unitOfDate$){
unitOfDate$.toString=function(){return this.string.valueOf();};
})(UnitOfDate$base.$$.prototype);
}
return UnitOfDate$base;
}
ex$.$init$UnitOfDate$base=$init$UnitOfDate$base;$init$UnitOfDate$base();
function UnitOfYear$base(unitOfYear$){
$init$UnitOfYear$base();
if(unitOfYear$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfYear"),'?','?')
UnitOfDate$base(unitOfYear$);
return unitOfYear$;
}
UnitOfYear$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getYears$base],pa:257,d:['ceylon.time.base','UnitOfYear']};};
ex$.UnitOfYear$base=UnitOfYear$base;
function $init$UnitOfYear$base(){
if(UnitOfYear$base.$$===undefined){
m$1.initTypeProto(UnitOfYear$base,'ceylon.time.base::UnitOfYear',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfYear$){
unitOfYear$.toString=function(){return this.string.valueOf();};
})(UnitOfYear$base.$$.prototype);
}
return UnitOfYear$base;
}
ex$.$init$UnitOfYear$base=$init$UnitOfYear$base;$init$UnitOfYear$base();
function UnitOfMonth$base(unitOfMonth$){
$init$UnitOfMonth$base();
if(unitOfMonth$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMonth"),'?','?')
UnitOfDate$base(unitOfMonth$);
return unitOfMonth$;
}
UnitOfMonth$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getMonths$base],pa:257,d:['ceylon.time.base','UnitOfMonth']};};
ex$.UnitOfMonth$base=UnitOfMonth$base;
function $init$UnitOfMonth$base(){
if(UnitOfMonth$base.$$===undefined){
m$1.initTypeProto(UnitOfMonth$base,'ceylon.time.base::UnitOfMonth',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfMonth$){
unitOfMonth$.toString=function(){return this.string.valueOf();};
})(UnitOfMonth$base.$$.prototype);
}
return UnitOfMonth$base;
}
ex$.$init$UnitOfMonth$base=$init$UnitOfMonth$base;$init$UnitOfMonth$base();
function UnitOfDay$base(unitOfDay$){
$init$UnitOfDay$base();
if(unitOfDay$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfDay"),'?','?')
UnitOfDate$base(unitOfDay$);
return unitOfDay$;
}
UnitOfDay$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfDate$base}],of:[$prop$getDays$base],pa:257,d:['ceylon.time.base','UnitOfDay']};};
ex$.UnitOfDay$base=UnitOfDay$base;
function $init$UnitOfDay$base(){
if(UnitOfDay$base.$$===undefined){
m$1.initTypeProto(UnitOfDay$base,'ceylon.time.base::UnitOfDay',m$1.Basic,$init$UnitOfDate$base());
(function(unitOfDay$){
unitOfDay$.toString=function(){return this.string.valueOf();};
})(UnitOfDay$base.$$.prototype);
}
return UnitOfDay$base;
}
ex$.$init$UnitOfDay$base=$init$UnitOfDay$base;$init$UnitOfDay$base();
function UnitOfTime$base(unitOfTime$){
}
UnitOfTime$base.$crtmm$=function(){return{mod:$CCMM$,of:[{t:UnitOfHour$base},{t:UnitOfMinute$base},{t:UnitOfSecond$base},{t:UnitOfMillisecond$base}],pa:1,an:function(){return[m$1.doc("Represents units of Time")];},d:['ceylon.time.base','UnitOfTime']};};
ex$.UnitOfTime$base=UnitOfTime$base;
function $init$UnitOfTime$base(){
if(UnitOfTime$base.$$===undefined){
m$1.initTypeProtoI(UnitOfTime$base,'ceylon.time.base::UnitOfTime');
(function(unitOfTime$){
unitOfTime$.toString=function(){return this.string.valueOf();};
})(UnitOfTime$base.$$.prototype);
}
return UnitOfTime$base;
}
ex$.$init$UnitOfTime$base=$init$UnitOfTime$base;$init$UnitOfTime$base();
function UnitOfHour$base(unitOfHour$){
$init$UnitOfHour$base();
if(unitOfHour$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfHour"),'?','?')
UnitOfTime$base(unitOfHour$);
return unitOfHour$;
}
UnitOfHour$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getHours$base],pa:257,d:['ceylon.time.base','UnitOfHour']};};
ex$.UnitOfHour$base=UnitOfHour$base;
function $init$UnitOfHour$base(){
if(UnitOfHour$base.$$===undefined){
m$1.initTypeProto(UnitOfHour$base,'ceylon.time.base::UnitOfHour',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfHour$){
unitOfHour$.toString=function(){return this.string.valueOf();};
})(UnitOfHour$base.$$.prototype);
}
return UnitOfHour$base;
}
ex$.$init$UnitOfHour$base=$init$UnitOfHour$base;$init$UnitOfHour$base();
function UnitOfMinute$base(unitOfMinute$){
$init$UnitOfMinute$base();
if(unitOfMinute$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMinute"),'?','?')
UnitOfTime$base(unitOfMinute$);
return unitOfMinute$;
}
UnitOfMinute$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getMinutes$base],pa:257,d:['ceylon.time.base','UnitOfMinute']};};
ex$.UnitOfMinute$base=UnitOfMinute$base;
function $init$UnitOfMinute$base(){
if(UnitOfMinute$base.$$===undefined){
m$1.initTypeProto(UnitOfMinute$base,'ceylon.time.base::UnitOfMinute',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfMinute$){
unitOfMinute$.toString=function(){return this.string.valueOf();};
})(UnitOfMinute$base.$$.prototype);
}
return UnitOfMinute$base;
}
ex$.$init$UnitOfMinute$base=$init$UnitOfMinute$base;$init$UnitOfMinute$base();
function UnitOfSecond$base(unitOfSecond$){
$init$UnitOfSecond$base();
if(unitOfSecond$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfSecond"),'?','?')
UnitOfTime$base(unitOfSecond$);
return unitOfSecond$;
}
UnitOfSecond$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getSeconds$base],pa:257,d:['ceylon.time.base','UnitOfSecond']};};
ex$.UnitOfSecond$base=UnitOfSecond$base;
function $init$UnitOfSecond$base(){
if(UnitOfSecond$base.$$===undefined){
m$1.initTypeProto(UnitOfSecond$base,'ceylon.time.base::UnitOfSecond',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfSecond$){
unitOfSecond$.toString=function(){return this.string.valueOf();};
})(UnitOfSecond$base.$$.prototype);
}
return UnitOfSecond$base;
}
ex$.$init$UnitOfSecond$base=$init$UnitOfSecond$base;$init$UnitOfSecond$base();
function UnitOfMillisecond$base(unitOfMillisecond$){
$init$UnitOfMillisecond$base();
if(unitOfMillisecond$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::UnitOfMillisecond"),'?','?')
UnitOfTime$base(unitOfMillisecond$);
return unitOfMillisecond$;
}
UnitOfMillisecond$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],sts:[{t:UnitOfTime$base}],of:[$prop$getMilliseconds$base],pa:257,d:['ceylon.time.base','UnitOfMillisecond']};};
ex$.UnitOfMillisecond$base=UnitOfMillisecond$base;
function $init$UnitOfMillisecond$base(){
if(UnitOfMillisecond$base.$$===undefined){
m$1.initTypeProto(UnitOfMillisecond$base,'ceylon.time.base::UnitOfMillisecond',m$1.Basic,$init$UnitOfTime$base());
(function(unitOfMillisecond$){
unitOfMillisecond$.toString=function(){return this.string.valueOf();};
})(UnitOfMillisecond$base.$$.prototype);
}
return UnitOfMillisecond$base;
}
ex$.$init$UnitOfMillisecond$base=$init$UnitOfMillisecond$base;$init$UnitOfMillisecond$base();
function $6y3$base(){
var years$=new $6y3$base.$$;UnitOfYear$base(years$);
years$.$wgb6s9$6y5_=(-283456);
years$.$prop$getMinimum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y3$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};}};
years$.$prop$getMinimum.get=function(){return minimum};
years$.$wgb6s9$6y6_=(287396);
years$.$prop$getMaximum={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y3$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};}};
years$.$prop$getMaximum.get=function(){return maximum};
return years$;
};$6y3$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfYear$base},d:['ceylon.time.base','years']};};
function $init$years$base(){
if($6y3$base.$$===undefined){
m$1.initTypeProto($6y3$base,'ceylon.time.base::years',$init$UnitOfYear$base());
(function(years$){
m$1.atr$(years$,'minimum',function(){return this.$wgb6s9$6y5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y3$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:minimum')];},d:['ceylon.time.base','years','$at','minimum']};});
m$1.atr$(years$,'maximum',function(){return this.$wgb6s9$6y6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y3$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years:$at:maximum')];},d:['ceylon.time.base','years','$at','maximum']};});
years$.toString=function(){return this.string.valueOf();};
})($6y3$base.$$.prototype);
}
return $6y3$base;
}
ex$.$init$years$base=$init$years$base;$init$years$base();var $6y7;
function years$base(){
if($6y7===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'years\' before it was set"),'16:0-26:0','constants.ceylon');
if($6y7===undefined){$6y7=m$1.INIT$;$6y7=$init$years$base()();$6y7.$crtmm$=years$base.$crtmm$;}
return $6y7;
}
ex$.years$base=years$base;
years$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$years$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:years')];},d:['ceylon.time.base','years']};};
$prop$getYears$base=years$base;
ex$.$prop$getYears$base=$prop$getYears$base;
function $6y8$base(){
var months$=new $6y8$base.$$;UnitOfMonth$base(months$);
months$.$wgb6s9$6ya_=m$1.$init$AppliedClass$jsint()(Month$base,{Type$Class:{t:Month$base},Arguments$Class:{t:m$1.Nothing}}).caseValues;
months$.$prop$getAll={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$6y8$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};}};
months$.$prop$getAll.get=function(){return all};
months$.$wgb6s9$6yb_=(12);
months$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y8$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};}};
months$.$prop$getPerYear.get=function(){return perYear};
return months$;
};$6y8$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMonth$base},d:['ceylon.time.base','months']};};
function $init$months$base(){
if($6y8$base.$$===undefined){
m$1.initTypeProto($6y8$base,'ceylon.time.base::months',$init$UnitOfMonth$base());
(function(months$){
m$1.atr$(months$,'all',function(){return this.$wgb6s9$6ya_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Month$base}}},$cont:$6y8$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$at:all')];},d:['ceylon.time.base','months','$at','all']};});
m$1.atr$(months$,'perYear',function(){return this.$wgb6s9$6yb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6y8$base,pa:1,an:function(){return[m$1.doc("Number of months per year.")];},d:['ceylon.time.base','months','$at','perYear']};});
months$.$_valueOf=function($6yc){var months$=this;
return months$.all.$_get(($6yc-(1)));
};
months$.$_valueOf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Month$base}]},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:$6y8$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months:$m:valueOf')];},d:['ceylon.time.base','months','$m','valueOf']};};
months$.toString=function(){return this.string.valueOf();};
})($6y8$base.$$.prototype);
}
return $6y8$base;
}
ex$.$init$months$base=$init$months$base;$init$months$base();var $6yd;
function months$base(){
if($6yd===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'months\' before it was set"),'28:0-39:0','constants.ceylon');
if($6yd===undefined){$6yd=m$1.INIT$;$6yd=$init$months$base()();$6yd.$crtmm$=months$base.$crtmm$;}
return $6yd;
}
ex$.months$base=months$base;
months$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$months$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:months')];},d:['ceylon.time.base','months']};};
$prop$getMonths$base=months$base;
ex$.$prop$getMonths$base=$prop$getMonths$base;
function $6ye$base(){
var days$=new $6ye$base.$$;UnitOfDay$base(days$);
days$.$prop$getPerYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};}};
days$.$prop$getPerYear.get=function(){return perYear};
days$.$prop$getPerLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};}};
days$.$prop$getPerLeapYear.get=function(){return perLeapYear};
days$.$wgb6s9$6yg_=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()]);
days$.$prop$getOfWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$6ye$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};}};
days$.$prop$getOfWeek.get=function(){return ofWeek};
days$.$wgb6s9$6yh_=days$.ofWeek.size;
days$.$prop$getPerWeek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};}};
days$.$prop$getPerWeek.get=function(){return perWeek};
days$.$wgb6s9$6yi_=(146097);
days$.$prop$getPerCycle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};}};
days$.$prop$getPerCycle.get=function(){return perCycle};
days$.$prop$getPerFourCenturies={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};}};
days$.$prop$getPerFourCenturies.get=function(){return perFourCenturies};
days$.$wgb6s9$6yj_=(1461);
days$.$prop$getInFourYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};}};
days$.$prop$getInFourYears.get=function(){return inFourYears};
days$.$wgb6s9$6yk_=(36524);
days$.$prop$getPerCentury={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};}};
days$.$prop$getPerCentury.get=function(){return perCentury};
return days$;
};$6ye$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfDay$base},d:['ceylon.time.base','days']};};
function $init$days$base(){
if($6ye$base.$$===undefined){
m$1.initTypeProto($6ye$base,'ceylon.time.base::days',$init$UnitOfDay$base());
(function(days$){
m$1.atr$(days$,'perYear',function(){
return 365
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per normal year.")];},d:['ceylon.time.base','days','$at','perYear']};});
m$1.atr$(days$,'perLeapYear',function(){
return 366
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per leap year.")];},d:['ceylon.time.base','days','$at','perLeapYear']};});
days$.perMonth$defs$leapYear=function($6yl,$6ym){return false;};
days$.perMonth=function($6yl,$6ym){var days$=this;
if($6ym===undefined){$6ym=false;}
return $6yl.numberOfDays($6ym);
};
days$.perMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$6ye$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:perMonth')];},d:['ceylon.time.base','days','$m','perMonth']};};
days$.toMonth$defs$leapYear=function($6yn,$6yo){return false;};
days$.toMonth=function($6yn,$6yo){var days$=this;
if($6yo===undefined){$6yo=false;}
return ($6yn.firstDayOfYear($6yo)-(1));
};
days$.toMonth.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'month',mt:'prm',$t:{t:Month$base}},{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:$6ye$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:toMonth')];},d:['ceylon.time.base','days','$m','toMonth']};};
m$1.atr$(days$,'ofWeek',function(){return this.$wgb6s9$6yg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},$cont:$6ye$base,pa:1,d:['ceylon.time.base','days','$at','ofWeek']};});
m$1.atr$(days$,'perWeek',function(){return this.$wgb6s9$6yh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days per week (7).")];},d:['ceylon.time.base','days','$at','perWeek']};});
m$1.atr$(days$,'perCycle',function(){return this.$wgb6s9$6yi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$at:perCycle')];},d:['ceylon.time.base','days','$at','perCycle']};});
m$1.atr$(days$,'perFourCenturies',function(){
var days$=this;
return days$.perCycle;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("The number of days in a 400 year cycle.")];},d:['ceylon.time.base','days','$at','perFourCenturies']};});
m$1.atr$(days$,'inFourYears',function(){return this.$wgb6s9$6yj_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of days in four years.")];},d:['ceylon.time.base','days','$at','inFourYears']};});
m$1.atr$(days$,'perCentury',function(){return this.$wgb6s9$6yk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6ye$base,pa:1,an:function(){return[m$1.doc("Number of of per century (100 years).")];},d:['ceylon.time.base','days','$at','perCentury']};});
days$.fromMilliseconds$defs$millisecondsIn=function($6yp){return 0;};
days$.fromMilliseconds=function($6yp){var days$=this;
if($6yp===undefined){$6yp=(0);}
return floorDiv$internal$math($6yp,milliseconds$base().perDay);
};
days$.fromMilliseconds.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'millisecondsIn',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:$6ye$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days:$m:fromMilliseconds')];},d:['ceylon.time.base','days','$m','fromMilliseconds']};};
days$.toString=function(){return this.string.valueOf();};
})($6ye$base.$$.prototype);
}
return $6ye$base;
}
ex$.$init$days$base=$init$days$base;$init$days$base();var $6yq;
function days$base(){
if($6yq===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'days\' before it was set"),'41:0-76:0','constants.ceylon');
if($6yq===undefined){$6yq=m$1.INIT$;$6yq=$init$days$base()();$6yq.$crtmm$=days$base.$crtmm$;}
return $6yq;
}
ex$.days$base=days$base;
days$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$days$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:days')];},d:['ceylon.time.base','days']};};
$prop$getDays$base=days$base;
ex$.$prop$getDays$base=$prop$getDays$base;
function $6yr$base(){
var hours$=new $6yr$base.$$;UnitOfHour$base(hours$);
hours$.$wgb6s9$6yt_=(24);
hours$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yr$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};}};
hours$.$prop$getPerDay.get=function(){return perDay};
return hours$;
};$6yr$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfHour$base},d:['ceylon.time.base','hours']};};
function $init$hours$base(){
if($6yr$base.$$===undefined){
m$1.initTypeProto($6yr$base,'ceylon.time.base::hours',$init$UnitOfHour$base());
(function(hours$){
m$1.atr$(hours$,'perDay',function(){return this.$wgb6s9$6yt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yr$base,pa:1,an:function(){return[m$1.doc("Number of hours per day.")];},d:['ceylon.time.base','hours','$at','perDay']};});
hours$.toString=function(){return this.string.valueOf();};
})($6yr$base.$$.prototype);
}
return $6yr$base;
}
ex$.$init$hours$base=$init$hours$base;$init$hours$base();var $6yu;
function hours$base(){
if($6yu===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'hours\' before it was set"),'78:0-84:0','constants.ceylon');
if($6yu===undefined){$6yu=m$1.INIT$;$6yu=$init$hours$base()();$6yu.$crtmm$=hours$base.$crtmm$;}
return $6yu;
}
ex$.hours$base=hours$base;
hours$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$hours$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:hours')];},d:['ceylon.time.base','hours']};};
$prop$getHours$base=hours$base;
ex$.$prop$getHours$base=$prop$getHours$base;
function $6yv$base(){
var minutes$=new $6yv$base.$$;UnitOfMinute$base(minutes$);
minutes$.$wgb6s9$6yx_=(60);
minutes$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yv$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};}};
minutes$.$prop$getPerHour.get=function(){return perHour};
minutes$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yv$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};}};
minutes$.$prop$getPerDay.get=function(){return perDay};
return minutes$;
};$6yv$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMinute$base},d:['ceylon.time.base','minutes']};};
function $init$minutes$base(){
if($6yv$base.$$===undefined){
m$1.initTypeProto($6yv$base,'ceylon.time.base::minutes',$init$UnitOfMinute$base());
(function(minutes$){
m$1.atr$(minutes$,'perHour',function(){return this.$wgb6s9$6yx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yv$base,pa:1,an:function(){return[m$1.doc("Number of minutes per hour.")];},d:['ceylon.time.base','minutes','$at','perHour']};});
m$1.atr$(minutes$,'perDay',function(){
var minutes$=this;
return (hours$base().perDay*minutes$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yv$base,pa:1,an:function(){return[m$1.doc("Number of minutes per day.")];},d:['ceylon.time.base','minutes','$at','perDay']};});
minutes$.toString=function(){return this.string.valueOf();};
})($6yv$base.$$.prototype);
}
return $6yv$base;
}
ex$.$init$minutes$base=$init$minutes$base;$init$minutes$base();var $6yy;
function minutes$base(){
if($6yy===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'minutes\' before it was set"),'86:0-94:0','constants.ceylon');
if($6yy===undefined){$6yy=m$1.INIT$;$6yy=$init$minutes$base()();$6yy.$crtmm$=minutes$base.$crtmm$;}
return $6yy;
}
ex$.minutes$base=minutes$base;
minutes$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$minutes$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:minutes')];},d:['ceylon.time.base','minutes']};};
$prop$getMinutes$base=minutes$base;
ex$.$prop$getMinutes$base=$prop$getMinutes$base;
function $6yz$base(){
var seconds$=new $6yz$base.$$;UnitOfSecond$base(seconds$);
seconds$.$wgb6s9$6z1_=(60);
seconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};}};
seconds$.$prop$getPerMinute.get=function(){return perMinute};
seconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};}};
seconds$.$prop$getPerHour.get=function(){return perHour};
seconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};}};
seconds$.$prop$getPerDay.get=function(){return perDay};
return seconds$;
};$6yz$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfSecond$base},d:['ceylon.time.base','seconds']};};
function $init$seconds$base(){
if($6yz$base.$$===undefined){
m$1.initTypeProto($6yz$base,'ceylon.time.base::seconds',$init$UnitOfSecond$base());
(function(seconds$){
m$1.atr$(seconds$,'perMinute',function(){return this.$wgb6s9$6z1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per minute.")];},d:['ceylon.time.base','seconds','$at','perMinute']};});
m$1.atr$(seconds$,'perHour',function(){
var seconds$=this;
return (minutes$base().perHour*seconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per hour.")];},d:['ceylon.time.base','seconds','$at','perHour']};});
m$1.atr$(seconds$,'perDay',function(){
var seconds$=this;
return (hours$base().perDay*seconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6yz$base,pa:1,an:function(){return[m$1.doc("Number of seconds per day.")];},d:['ceylon.time.base','seconds','$at','perDay']};});
seconds$.toString=function(){return this.string.valueOf();};
})($6yz$base.$$.prototype);
}
return $6yz$base;
}
ex$.$init$seconds$base=$init$seconds$base;$init$seconds$base();var $6z2;
function seconds$base(){
if($6z2===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'seconds\' before it was set"),'96:0-107:0','constants.ceylon');
if($6z2===undefined){$6z2=m$1.INIT$;$6z2=$init$seconds$base()();$6z2.$crtmm$=seconds$base.$crtmm$;}
return $6z2;
}
ex$.seconds$base=seconds$base;
seconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$seconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:seconds')];},d:['ceylon.time.base','seconds']};};
$prop$getSeconds$base=seconds$base;
ex$.$prop$getSeconds$base=$prop$getSeconds$base;
function $6z3$base(){
var milliseconds$=new $6z3$base.$$;UnitOfMillisecond$base(milliseconds$);
milliseconds$.$wgb6s9$6z5_=(1000);
milliseconds$.$prop$getPerSecond={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};}};
milliseconds$.$prop$getPerSecond.get=function(){return perSecond};
milliseconds$.$prop$getPerMinute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};}};
milliseconds$.$prop$getPerMinute.get=function(){return perMinute};
milliseconds$.$prop$getPerHour={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};}};
milliseconds$.$prop$getPerHour.get=function(){return perHour};
milliseconds$.$prop$getPerDay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};}};
milliseconds$.$prop$getPerDay.get=function(){return perDay};
return milliseconds$;
};$6z3$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:UnitOfMillisecond$base},d:['ceylon.time.base','milliseconds']};};
function $init$milliseconds$base(){
if($6z3$base.$$===undefined){
m$1.initTypeProto($6z3$base,'ceylon.time.base::milliseconds',$init$UnitOfMillisecond$base());
(function(milliseconds$){
m$1.atr$(milliseconds$,'perSecond',function(){return this.$wgb6s9$6z5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per second.")];},d:['ceylon.time.base','milliseconds','$at','perSecond']};});
m$1.atr$(milliseconds$,'perMinute',function(){
var milliseconds$=this;
return (seconds$base().perMinute*milliseconds$base().perSecond);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Milliseconds per minute.")];},d:['ceylon.time.base','milliseconds','$at','perMinute']};});
m$1.atr$(milliseconds$,'perHour',function(){
var milliseconds$=this;
return (minutes$base().perHour*milliseconds$base().perMinute);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per hour.")];},d:['ceylon.time.base','milliseconds','$at','perHour']};});
m$1.atr$(milliseconds$,'perDay',function(){
var milliseconds$=this;
return (hours$base().perDay*milliseconds$base().perHour);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$6z3$base,pa:1,an:function(){return[m$1.doc("Number of milliseconds per day.")];},d:['ceylon.time.base','milliseconds','$at','perDay']};});
milliseconds$.toString=function(){return this.string.valueOf();};
})($6z3$base.$$.prototype);
}
return $6z3$base;
}
ex$.$init$milliseconds$base=$init$milliseconds$base;$init$milliseconds$base();var $6z6;
function milliseconds$base(){
if($6z6===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'milliseconds\' before it was set"),'109:0-124:0','constants.ceylon');
if($6z6===undefined){$6z6=m$1.INIT$;$6z6=$init$milliseconds$base()();$6z6.$crtmm$=milliseconds$base.$crtmm$;}
return $6z6;
}
ex$.milliseconds$base=milliseconds$base;
milliseconds$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$milliseconds$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:milliseconds')];},d:['ceylon.time.base','milliseconds']};};
$prop$getMilliseconds$base=milliseconds$base;
ex$.$prop$getMilliseconds$base=$prop$getMilliseconds$base;
function DateBehavior$base($$targs$$,dateBehavior$){
m$1.set_type_args(dateBehavior$,$$targs$$,DateBehavior$base);
YearBehavior$base({Element$YearBehavior:$$targs$$.Element$DateBehavior},dateBehavior$);
MonthBehavior$base({Element$MonthBehavior:$$targs$$.Element$DateBehavior},dateBehavior$);
}
DateBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$DateBehavior:{sts:[{t:ReadableDate$base}]}},sts:[{t:YearBehavior$base,a:{Element$YearBehavior:'Element$DateBehavior'}},{t:MonthBehavior$base,a:{Element$MonthBehavior:'Element$DateBehavior'}}],pa:1,an:function(){return[m$1.doc("Common behavior for date types.")];},d:['ceylon.time.base','DateBehavior']};};
ex$.DateBehavior$base=DateBehavior$base;
function $init$DateBehavior$base(){
if(DateBehavior$base.$$===undefined){
m$1.initTypeProtoI(DateBehavior$base,'ceylon.time.base::DateBehavior',$init$YearBehavior$base(),$init$MonthBehavior$base());
(function(dateBehavior$){
dateBehavior$.withDay={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDay')];},d:['ceylon.time.base','DateBehavior','$m','withDay']};}};dateBehavior$.withWeekOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weekNumber',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withWeekOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withWeekOfYear']};}};dateBehavior$.withDayOfWeek={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfWeek')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfWeek']};}};dateBehavior$.withDayOfYear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'dayOfYear',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:withDayOfYear')];},d:['ceylon.time.base','DateBehavior','$m','withDayOfYear']};}};dateBehavior$.plusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','plusWeeks']};}};dateBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:plusDays')];},d:['ceylon.time.base','DateBehavior','$m','plusDays']};}};dateBehavior$.minusWeeks={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'weeks',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusWeeks')];},d:['ceylon.time.base','DateBehavior','$m','minusWeeks']};}};dateBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$DateBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:DateBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DateBehavior:$m:minusDays')];},d:['ceylon.time.base','DateBehavior','$m','minusDays']};}};dateBehavior$.toString=function(){return this.string.valueOf();};
})(DateBehavior$base.$$.prototype);
}
return DateBehavior$base;
}
ex$.$init$DateBehavior$base=$init$DateBehavior$base;$init$DateBehavior$base();
function Month$base(integer,month$){
$init$Month$base();
if(month$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::Month"),'?','?')
month$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:Month$base}},month$);
m$1.Comparable({Other$Comparable:{t:Month$base}},month$);
m$1.Enumerable({Other$Enumerable:{t:Month$base}},month$);
return month$;
}
Month$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:Month$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:Month$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:Month$base}}}],of:[$prop$getJanuary$base,$prop$getFebruary$base,$prop$getMarch$base,$prop$getApril$base,$prop$getMay$base,$prop$getJune$base,$prop$getJuly$base,$prop$getAugust$base,$prop$getSeptember$base,$prop$getOctober$base,$prop$getNovember$base,$prop$getDecember$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month')];},d:['ceylon.time.base','Month']};};
ex$.Month$base=Month$base;
function $init$Month$base(){
if(Month$base.$$===undefined){
m$1.initTypeProto(Month$base,'ceylon.time.base::Month',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(month$){
m$1.atr$(month$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$at:integer')];},d:['ceylon.time.base','Month','$at','integer']};});
month$.numberOfDays$defs$leapYear=function($6z7){return false;};
month$.numberOfDays=function($6z7){
var month$=this;
if($6z7===undefined){$6z7=false;}
var $6z8=month$;
if($6z8===february$base()) {
return ($6z9=($6z7?(29):null),m$1.nn$($6z9)?$6z9:(28));
var $6z9;
}
else if($6z8===april$base() || $6z8===june$base() || $6z8===september$base() || $6z8===november$base()) {
return 30;
}
else if($6z8===january$base() || $6z8===march$base() || $6z8===may$base() || $6z8===july$base() || $6z8===august$base() || $6z8===october$base() || $6z8===december$base()) {
return 31;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
};month$.numberOfDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc("Returns number of days in this month.")];},d:['ceylon.time.base','Month','$m','numberOfDays']};};
month$.firstDayOfYear$defs$leapYear=function($6za){return false;};
month$.firstDayOfYear=function($6za){
var month$=this;
if($6za===undefined){$6za=false;}
var $6zb;
m$1.asrt$2("",'28:8-28:60','Month.ceylon',[m$1.nn$(($6zb=firstDayOfMonth$base().$_get((month$.integer-(1))))),'exists day = firstDayOfMonth[this.integer-1]']);
if(($6za&&month$.largerThan(february$base()))){
return ($6zb+(1));
}
return $6zb;
};month$.firstDayOfYear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'leapYear',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Month$base,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:firstDayOfYear')];},d:['ceylon.time.base','Month','$m','firstDayOfYear']};};
month$.compare=function($6zc){var month$=this;
return month$.integer.compare($6zc.integer);
};
month$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:compare')];},d:['ceylon.time.base','Month','$m','compare']};};
month$.plusMonths=function($6zd){var month$=this;
return ($6ze=(($6zd==(0))?month$:null),m$1.nn$($6ze)?$6ze:month$.add($6zd).month);
var $6ze;
};
month$.plusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:plusMonths')];},d:['ceylon.time.base','Month','$m','plusMonths']};};
month$.minusMonths=function($6zf){var month$=this;
return ($6zg=(($6zf==(0))?month$:null),m$1.nn$($6zg)?$6zg:month$.add((-$6zf)).month);
var $6zg;
};
month$.minusMonths.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:minusMonths')];},d:['ceylon.time.base','Month','$m','minusMonths']};};
month$.add=function($6zh){
var month$=this;
var $6zi=((month$.integer-(1))+$6zh);
var $6zj=floorMod$internal$math($6zi,months$base().perYear);
var $6zk;
m$1.asrt$2("",'61:8-61:53','Month.ceylon',[m$1.nn$(($6zk=months$base().all.$_get($6zj))),'exists month = months.all[nextMonth]']);
var $6zl=floorDiv$internal$math($6zi,12);
return month$.Overflow$Month($6zk,$6zl);
};month$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:month$.Overflow$Month},ps:[{nm:'numberOfMonths',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:add')];},d:['ceylon.time.base','Month','$m','add']};};
month$.offset=function($6zm){var month$=this;
return function(){var $6zn=(month$.integer-$6zm.integer);return (($6zn<(0))?($6zn+(12)):$6zn);
}();
};
month$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:Month$base}}],$cont:Month$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:offset')];},d:['ceylon.time.base','Month','$m','offset']};};
month$.neighbour=function($6zo){var month$=this;
return month$.add($6zo).month;
};
month$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Month$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$m:neighbour')];},d:['ceylon.time.base','Month','$m','neighbour']};};
function Overflow$Month(month,years,overflow$Month$){
$init$Overflow$Month();
if(overflow$Month$===undefined)overflow$Month$=new this.Overflow$Month.$$;
overflow$Month$.outer$=this;
overflow$Month$.month_=month;
overflow$Month$.years_=years;
return overflow$Month$;
}
Overflow$Month.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'month',mt:'prm',$t:{t:Month$base},pa:1,an:function(){return[m$1.doc("New month value.")];}},{nm:'years',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];}}],$cont:Month$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Month:$c:Overflow')];},d:['ceylon.time.base','Month','$c','Overflow']};};
function $init$Overflow$Month(){
if(Overflow$Month.$$===undefined){
m$1.initTypeProto(Overflow$Month,'ceylon.time.base::Month.Overflow',m$1.Basic);
Month$base.Overflow$Month=Overflow$Month;
(function(overflow$Month$){
m$1.atr$(overflow$Month$,'month',function(){return this.month_;},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("New month value.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};});
m$1.atr$(overflow$Month$,'years',function(){return this.years_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:month$.Overflow$Month,pa:1,an:function(){return[m$1.doc("Number of years overflowed by calculation.")];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};});
overflow$Month$.toString=function(){return this.string.valueOf();};
})(Overflow$Month.$$.prototype);
}
return Overflow$Month;
}
month$.$init$Overflow$Month=$init$Overflow$Month;month$.Overflow$Month=Overflow$Month;
$init$Overflow$Month();
month$.toString=function(){return this.string.valueOf();};
})(Month$base.$$.prototype);
}
return Month$base;
}
ex$.$init$Month$base=$init$Month$base;$init$Month$base();
var $6zp$base;function $valinit$$6zp$base(){if($6zp$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'firstDayOfMonth\' before it was set"),'90:0-91:83','Month.ceylon');
if($6zp$base===undefined){$6zp$base=m$1.INIT$;$6zp$base=m$1.tpl$([1,32,60,91,121,152,182,213,244,274,305,335])};return $6zp$base;};
function firstDayOfMonth$base(){return $valinit$$6zp$base();}
var $prop$getFirstDayOfMonth$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.Integer}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:firstDayOfMonth')];},d:['ceylon.time.base','firstDayOfMonth']};}};
ex$.$prop$getFirstDayOfMonth$base=$prop$getFirstDayOfMonth$base;
$prop$getFirstDayOfMonth$base.get=firstDayOfMonth$base;
function monthOf$base($6zq){
var $6zr=$6zq;
if(m$1.is$($6zr,{t:Month$base})) {
return $6zr;
}
else if(m$1.is$($6zr,{t:m$1.Integer})) {
m$1.asrt$2("Invalid month.",'104:8-105:63','Month.ceylon',[($6zs=$6zr,$6zs.notSmallerThan(january$base().integer)&&$6zs.notLargerThan(december$base().integer)),'january.integer <= month <= december.integer']);
var $6zt;
m$1.asrt$2("",'106:8-106:49','Month.ceylon',[m$1.nn$(($6zt=months$base().all.$_get(($6zr-(1))))),'exists m = months.all[month-1]']);
return $6zt;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.monthOf$base=monthOf$base;
monthOf$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Month$base},ps:[{nm:'month',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:Month$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monthOf')];},d:['ceylon.time.base','monthOf']};};
function $6zu$base(){
var january$=new $6zu$base.$$;Month$base(gregorian$chronology().january,january$);
january$.$wgb6s9$6zw_="january";
january$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','string']};}};
january$.$prop$getString.get=function(){return string};
january$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};}};
january$.$prop$getPredecessor.get=function(){return predecessor};
january$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','successor']};}};
january$.$prop$getSuccessor.get=function(){return successor};
return january$;
};$6zu$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','january']};};
function $init$january$base(){
if($6zu$base.$$===undefined){
m$1.initTypeProto($6zu$base,'ceylon.time.base::january',$init$Month$base());
(function(january$){
m$1.atr$(january$,'string',function(){return this.$wgb6s9$6zw_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','string']};});
m$1.atr$(january$,'predecessor',function(){
var january$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','predecessor']};});
m$1.atr$(january$,'successor',function(){
var january$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$6zu$base,pa:3,d:['ceylon.time.base','january','$at','successor']};});
january$.toString=function(){return this.string.valueOf();};
})($6zu$base.$$.prototype);
}
return $6zu$base;
}
ex$.$init$january$base=$init$january$base;$init$january$base();var $6zz;
function january$base(){
if($6zz===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'january\' before it was set"),'111:0-116:0','Month.ceylon');
if($6zz===undefined){$6zz=m$1.INIT$;$6zz=$init$january$base()();$6zz.$crtmm$=january$base.$crtmm$;}
return $6zz;
}
ex$.january$base=january$base;
january$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$january$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:january')];},d:['ceylon.time.base','january']};};
$prop$getJanuary$base=january$base;
ex$.$prop$getJanuary$base=$prop$getJanuary$base;
function $700$base(){
var february$=new $700$base.$$;Month$base(gregorian$chronology().february,february$);
february$.$wgb6s9$702_="february";
february$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','string']};}};
february$.$prop$getString.get=function(){return string};
february$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};}};
february$.$prop$getPredecessor.get=function(){return predecessor};
february$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','successor']};}};
february$.$prop$getSuccessor.get=function(){return successor};
return february$;
};$700$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','february']};};
function $init$february$base(){
if($700$base.$$===undefined){
m$1.initTypeProto($700$base,'ceylon.time.base::february',$init$Month$base());
(function(february$){
m$1.atr$(february$,'string',function(){return this.$wgb6s9$702_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','string']};});
m$1.atr$(february$,'predecessor',function(){
var february$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','predecessor']};});
m$1.atr$(february$,'successor',function(){
var february$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$700$base,pa:3,d:['ceylon.time.base','february','$at','successor']};});
february$.toString=function(){return this.string.valueOf();};
})($700$base.$$.prototype);
}
return $700$base;
}
ex$.$init$february$base=$init$february$base;$init$february$base();var $705;
function february$base(){
if($705===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'february\' before it was set"),'118:0-123:0','Month.ceylon');
if($705===undefined){$705=m$1.INIT$;$705=$init$february$base()();$705.$crtmm$=february$base.$crtmm$;}
return $705;
}
ex$.february$base=february$base;
february$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$february$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:february')];},d:['ceylon.time.base','february']};};
$prop$getFebruary$base=february$base;
ex$.$prop$getFebruary$base=$prop$getFebruary$base;
function $706$base(){
var march$=new $706$base.$$;Month$base(gregorian$chronology().march,march$);
march$.$wgb6s9$708_="march";
march$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','string']};}};
march$.$prop$getString.get=function(){return string};
march$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};}};
march$.$prop$getPredecessor.get=function(){return predecessor};
march$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','successor']};}};
march$.$prop$getSuccessor.get=function(){return successor};
return march$;
};$706$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','march']};};
function $init$march$base(){
if($706$base.$$===undefined){
m$1.initTypeProto($706$base,'ceylon.time.base::march',$init$Month$base());
(function(march$){
m$1.atr$(march$,'string',function(){return this.$wgb6s9$708_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','string']};});
m$1.atr$(march$,'predecessor',function(){
var march$=this;
return february$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','predecessor']};});
m$1.atr$(march$,'successor',function(){
var march$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$706$base,pa:3,d:['ceylon.time.base','march','$at','successor']};});
march$.toString=function(){return this.string.valueOf();};
})($706$base.$$.prototype);
}
return $706$base;
}
ex$.$init$march$base=$init$march$base;$init$march$base();var $70b;
function march$base(){
if($70b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'march\' before it was set"),'125:0-130:0','Month.ceylon');
if($70b===undefined){$70b=m$1.INIT$;$70b=$init$march$base()();$70b.$crtmm$=march$base.$crtmm$;}
return $70b;
}
ex$.march$base=march$base;
march$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$march$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:march')];},d:['ceylon.time.base','march']};};
$prop$getMarch$base=march$base;
ex$.$prop$getMarch$base=$prop$getMarch$base;
function $70c$base(){
var april$=new $70c$base.$$;Month$base(gregorian$chronology().april,april$);
april$.$wgb6s9$70e_="april";
april$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','string']};}};
april$.$prop$getString.get=function(){return string};
april$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};}};
april$.$prop$getPredecessor.get=function(){return predecessor};
april$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','successor']};}};
april$.$prop$getSuccessor.get=function(){return successor};
return april$;
};$70c$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','april']};};
function $init$april$base(){
if($70c$base.$$===undefined){
m$1.initTypeProto($70c$base,'ceylon.time.base::april',$init$Month$base());
(function(april$){
m$1.atr$(april$,'string',function(){return this.$wgb6s9$70e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','string']};});
m$1.atr$(april$,'predecessor',function(){
var april$=this;
return march$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','predecessor']};});
m$1.atr$(april$,'successor',function(){
var april$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70c$base,pa:3,d:['ceylon.time.base','april','$at','successor']};});
april$.toString=function(){return this.string.valueOf();};
})($70c$base.$$.prototype);
}
return $70c$base;
}
ex$.$init$april$base=$init$april$base;$init$april$base();var $70h;
function april$base(){
if($70h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'april\' before it was set"),'132:0-137:0','Month.ceylon');
if($70h===undefined){$70h=m$1.INIT$;$70h=$init$april$base()();$70h.$crtmm$=april$base.$crtmm$;}
return $70h;
}
ex$.april$base=april$base;
april$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$april$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:april')];},d:['ceylon.time.base','april']};};
$prop$getApril$base=april$base;
ex$.$prop$getApril$base=$prop$getApril$base;
function $70i$base(){
var may$=new $70i$base.$$;Month$base(gregorian$chronology().may,may$);
may$.$wgb6s9$70k_="may";
may$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','string']};}};
may$.$prop$getString.get=function(){return string};
may$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};}};
may$.$prop$getPredecessor.get=function(){return predecessor};
may$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','successor']};}};
may$.$prop$getSuccessor.get=function(){return successor};
return may$;
};$70i$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','may']};};
function $init$may$base(){
if($70i$base.$$===undefined){
m$1.initTypeProto($70i$base,'ceylon.time.base::may',$init$Month$base());
(function(may$){
m$1.atr$(may$,'string',function(){return this.$wgb6s9$70k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','string']};});
m$1.atr$(may$,'predecessor',function(){
var may$=this;
return april$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','predecessor']};});
m$1.atr$(may$,'successor',function(){
var may$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70i$base,pa:3,d:['ceylon.time.base','may','$at','successor']};});
may$.toString=function(){return this.string.valueOf();};
})($70i$base.$$.prototype);
}
return $70i$base;
}
ex$.$init$may$base=$init$may$base;$init$may$base();var $70n;
function may$base(){
if($70n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'may\' before it was set"),'139:0-144:0','Month.ceylon');
if($70n===undefined){$70n=m$1.INIT$;$70n=$init$may$base()();$70n.$crtmm$=may$base.$crtmm$;}
return $70n;
}
ex$.may$base=may$base;
may$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$may$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:may')];},d:['ceylon.time.base','may']};};
$prop$getMay$base=may$base;
ex$.$prop$getMay$base=$prop$getMay$base;
function $70o$base(){
var june$=new $70o$base.$$;Month$base(gregorian$chronology().june,june$);
june$.$wgb6s9$70q_="june";
june$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','string']};}};
june$.$prop$getString.get=function(){return string};
june$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};}};
june$.$prop$getPredecessor.get=function(){return predecessor};
june$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','successor']};}};
june$.$prop$getSuccessor.get=function(){return successor};
return june$;
};$70o$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','june']};};
function $init$june$base(){
if($70o$base.$$===undefined){
m$1.initTypeProto($70o$base,'ceylon.time.base::june',$init$Month$base());
(function(june$){
m$1.atr$(june$,'string',function(){return this.$wgb6s9$70q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','string']};});
m$1.atr$(june$,'predecessor',function(){
var june$=this;
return may$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','predecessor']};});
m$1.atr$(june$,'successor',function(){
var june$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70o$base,pa:3,d:['ceylon.time.base','june','$at','successor']};});
june$.toString=function(){return this.string.valueOf();};
})($70o$base.$$.prototype);
}
return $70o$base;
}
ex$.$init$june$base=$init$june$base;$init$june$base();var $70t;
function june$base(){
if($70t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'june\' before it was set"),'146:0-151:0','Month.ceylon');
if($70t===undefined){$70t=m$1.INIT$;$70t=$init$june$base()();$70t.$crtmm$=june$base.$crtmm$;}
return $70t;
}
ex$.june$base=june$base;
june$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$june$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:june')];},d:['ceylon.time.base','june']};};
$prop$getJune$base=june$base;
ex$.$prop$getJune$base=$prop$getJune$base;
function $70u$base(){
var july$=new $70u$base.$$;Month$base(gregorian$chronology().july,july$);
july$.$wgb6s9$70w_="july";
july$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','string']};}};
july$.$prop$getString.get=function(){return string};
july$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};}};
july$.$prop$getPredecessor.get=function(){return predecessor};
july$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','successor']};}};
july$.$prop$getSuccessor.get=function(){return successor};
return july$;
};$70u$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','july']};};
function $init$july$base(){
if($70u$base.$$===undefined){
m$1.initTypeProto($70u$base,'ceylon.time.base::july',$init$Month$base());
(function(july$){
m$1.atr$(july$,'string',function(){return this.$wgb6s9$70w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','string']};});
m$1.atr$(july$,'predecessor',function(){
var july$=this;
return june$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','predecessor']};});
m$1.atr$(july$,'successor',function(){
var july$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$70u$base,pa:3,d:['ceylon.time.base','july','$at','successor']};});
july$.toString=function(){return this.string.valueOf();};
})($70u$base.$$.prototype);
}
return $70u$base;
}
ex$.$init$july$base=$init$july$base;$init$july$base();var $70z;
function july$base(){
if($70z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'july\' before it was set"),'153:0-158:0','Month.ceylon');
if($70z===undefined){$70z=m$1.INIT$;$70z=$init$july$base()();$70z.$crtmm$=july$base.$crtmm$;}
return $70z;
}
ex$.july$base=july$base;
july$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$july$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:july')];},d:['ceylon.time.base','july']};};
$prop$getJuly$base=july$base;
ex$.$prop$getJuly$base=$prop$getJuly$base;
function $710$base(){
var august$=new $710$base.$$;Month$base(gregorian$chronology().august,august$);
august$.$wgb6s9$712_="august";
august$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','string']};}};
august$.$prop$getString.get=function(){return string};
august$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};}};
august$.$prop$getPredecessor.get=function(){return predecessor};
august$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','successor']};}};
august$.$prop$getSuccessor.get=function(){return successor};
return august$;
};$710$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','august']};};
function $init$august$base(){
if($710$base.$$===undefined){
m$1.initTypeProto($710$base,'ceylon.time.base::august',$init$Month$base());
(function(august$){
m$1.atr$(august$,'string',function(){return this.$wgb6s9$712_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','string']};});
m$1.atr$(august$,'predecessor',function(){
var august$=this;
return july$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','predecessor']};});
m$1.atr$(august$,'successor',function(){
var august$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$710$base,pa:3,d:['ceylon.time.base','august','$at','successor']};});
august$.toString=function(){return this.string.valueOf();};
})($710$base.$$.prototype);
}
return $710$base;
}
ex$.$init$august$base=$init$august$base;$init$august$base();var $715;
function august$base(){
if($715===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'august\' before it was set"),'160:0-165:0','Month.ceylon');
if($715===undefined){$715=m$1.INIT$;$715=$init$august$base()();$715.$crtmm$=august$base.$crtmm$;}
return $715;
}
ex$.august$base=august$base;
august$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$august$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:august')];},d:['ceylon.time.base','august']};};
$prop$getAugust$base=august$base;
ex$.$prop$getAugust$base=$prop$getAugust$base;
function $716$base(){
var september$=new $716$base.$$;Month$base(gregorian$chronology().september,september$);
september$.$wgb6s9$718_="september";
september$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','string']};}};
september$.$prop$getString.get=function(){return string};
september$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};}};
september$.$prop$getPredecessor.get=function(){return predecessor};
september$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','successor']};}};
september$.$prop$getSuccessor.get=function(){return successor};
return september$;
};$716$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','september']};};
function $init$september$base(){
if($716$base.$$===undefined){
m$1.initTypeProto($716$base,'ceylon.time.base::september',$init$Month$base());
(function(september$){
m$1.atr$(september$,'string',function(){return this.$wgb6s9$718_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','string']};});
m$1.atr$(september$,'predecessor',function(){
var september$=this;
return august$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','predecessor']};});
m$1.atr$(september$,'successor',function(){
var september$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$716$base,pa:3,d:['ceylon.time.base','september','$at','successor']};});
september$.toString=function(){return this.string.valueOf();};
})($716$base.$$.prototype);
}
return $716$base;
}
ex$.$init$september$base=$init$september$base;$init$september$base();var $71b;
function september$base(){
if($71b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'september\' before it was set"),'167:0-172:0','Month.ceylon');
if($71b===undefined){$71b=m$1.INIT$;$71b=$init$september$base()();$71b.$crtmm$=september$base.$crtmm$;}
return $71b;
}
ex$.september$base=september$base;
september$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$september$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:september')];},d:['ceylon.time.base','september']};};
$prop$getSeptember$base=september$base;
ex$.$prop$getSeptember$base=$prop$getSeptember$base;
function $71c$base(){
var october$=new $71c$base.$$;Month$base(gregorian$chronology().october,october$);
october$.$wgb6s9$71e_="october";
october$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','string']};}};
october$.$prop$getString.get=function(){return string};
october$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};}};
october$.$prop$getPredecessor.get=function(){return predecessor};
october$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','successor']};}};
october$.$prop$getSuccessor.get=function(){return successor};
return october$;
};$71c$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','october']};};
function $init$october$base(){
if($71c$base.$$===undefined){
m$1.initTypeProto($71c$base,'ceylon.time.base::october',$init$Month$base());
(function(october$){
m$1.atr$(october$,'string',function(){return this.$wgb6s9$71e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','string']};});
m$1.atr$(october$,'predecessor',function(){
var october$=this;
return september$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','predecessor']};});
m$1.atr$(october$,'successor',function(){
var october$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71c$base,pa:3,d:['ceylon.time.base','october','$at','successor']};});
october$.toString=function(){return this.string.valueOf();};
})($71c$base.$$.prototype);
}
return $71c$base;
}
ex$.$init$october$base=$init$october$base;$init$october$base();var $71h;
function october$base(){
if($71h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'october\' before it was set"),'174:0-179:0','Month.ceylon');
if($71h===undefined){$71h=m$1.INIT$;$71h=$init$october$base()();$71h.$crtmm$=october$base.$crtmm$;}
return $71h;
}
ex$.october$base=october$base;
october$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$october$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:october')];},d:['ceylon.time.base','october']};};
$prop$getOctober$base=october$base;
ex$.$prop$getOctober$base=$prop$getOctober$base;
function $71i$base(){
var november$=new $71i$base.$$;Month$base(gregorian$chronology().november,november$);
november$.$wgb6s9$71k_="november";
november$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','string']};}};
november$.$prop$getString.get=function(){return string};
november$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};}};
november$.$prop$getPredecessor.get=function(){return predecessor};
november$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','successor']};}};
november$.$prop$getSuccessor.get=function(){return successor};
return november$;
};$71i$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','november']};};
function $init$november$base(){
if($71i$base.$$===undefined){
m$1.initTypeProto($71i$base,'ceylon.time.base::november',$init$Month$base());
(function(november$){
m$1.atr$(november$,'string',function(){return this.$wgb6s9$71k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','string']};});
m$1.atr$(november$,'predecessor',function(){
var november$=this;
return october$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','predecessor']};});
m$1.atr$(november$,'successor',function(){
var november$=this;
return december$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71i$base,pa:3,d:['ceylon.time.base','november','$at','successor']};});
november$.toString=function(){return this.string.valueOf();};
})($71i$base.$$.prototype);
}
return $71i$base;
}
ex$.$init$november$base=$init$november$base;$init$november$base();var $71n;
function november$base(){
if($71n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'november\' before it was set"),'181:0-186:0','Month.ceylon');
if($71n===undefined){$71n=m$1.INIT$;$71n=$init$november$base()();$71n.$crtmm$=november$base.$crtmm$;}
return $71n;
}
ex$.november$base=november$base;
november$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$november$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:november')];},d:['ceylon.time.base','november']};};
$prop$getNovember$base=november$base;
ex$.$prop$getNovember$base=$prop$getNovember$base;
function $71o$base(){
var december$=new $71o$base.$$;Month$base(gregorian$chronology().december,december$);
december$.$wgb6s9$71q_="december";
december$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','string']};}};
december$.$prop$getString.get=function(){return string};
december$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};}};
december$.$prop$getPredecessor.get=function(){return predecessor};
december$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','successor']};}};
december$.$prop$getSuccessor.get=function(){return successor};
return december$;
};$71o$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Month$base},d:['ceylon.time.base','december']};};
function $init$december$base(){
if($71o$base.$$===undefined){
m$1.initTypeProto($71o$base,'ceylon.time.base::december',$init$Month$base());
(function(december$){
m$1.atr$(december$,'string',function(){return this.$wgb6s9$71q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','string']};});
m$1.atr$(december$,'predecessor',function(){
var december$=this;
return november$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','predecessor']};});
m$1.atr$(december$,'successor',function(){
var december$=this;
return january$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:$71o$base,pa:3,d:['ceylon.time.base','december','$at','successor']};});
december$.toString=function(){return this.string.valueOf();};
})($71o$base.$$.prototype);
}
return $71o$base;
}
ex$.$init$december$base=$init$december$base;$init$december$base();var $71t;
function december$base(){
if($71t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'december\' before it was set"),'188:0-193:0','Month.ceylon');
if($71t===undefined){$71t=m$1.INIT$;$71t=$init$december$base()();$71t.$crtmm$=december$base.$crtmm$;}
return $71t;
}
ex$.december$base=december$base;
december$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$december$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:december')];},d:['ceylon.time.base','december']};};
$prop$getDecember$base=december$base;
ex$.$prop$getDecember$base=$prop$getDecember$base;
function ReadableDateTime$base(readableDateTime$){
ReadableDate$base(readableDateTime$);
ReadableTime$base(readableDateTime$);
}
ReadableDateTime$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDate$base},{t:ReadableTime$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDateTime')];},d:['ceylon.time.base','ReadableDateTime']};};
ex$.ReadableDateTime$base=ReadableDateTime$base;
function $init$ReadableDateTime$base(){
if(ReadableDateTime$base.$$===undefined){
m$1.initTypeProtoI(ReadableDateTime$base,'ceylon.time.base::ReadableDateTime',$init$ReadableDate$base(),$init$ReadableTime$base());
(function(readableDateTime$){
readableDateTime$.toString=function(){return this.string.valueOf();};
})(ReadableDateTime$base.$$.prototype);
}
return ReadableDateTime$base;
}
ex$.$init$ReadableDateTime$base=$init$ReadableDateTime$base;$init$ReadableDateTime$base();
function TimeBehavior$base($$targs$$,timeBehavior$){
m$1.set_type_args(timeBehavior$,$$targs$$,TimeBehavior$base);
}
TimeBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$TimeBehavior:{sts:[{t:ReadableTime$base}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior')];},d:['ceylon.time.base','TimeBehavior']};};
ex$.TimeBehavior$base=TimeBehavior$base;
function $init$TimeBehavior$base(){
if(TimeBehavior$base.$$===undefined){
m$1.initTypeProtoI(TimeBehavior$base,'ceylon.time.base::TimeBehavior');
(function(timeBehavior$){
timeBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withHours')];},d:['ceylon.time.base','TimeBehavior','$m','withHours']};}};timeBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','withMinutes']};}};timeBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','withSeconds']};}};timeBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','withMilliseconds']};}};timeBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusHours')];},d:['ceylon.time.base','TimeBehavior','$m','plusHours']};}};timeBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','plusMinutes']};}};timeBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusSeconds']};}};timeBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','plusMilliseconds']};}};timeBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusHours')];},d:['ceylon.time.base','TimeBehavior','$m','minusHours']};}};timeBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMinutes')];},d:['ceylon.time.base','TimeBehavior','$m','minusMinutes']};}};timeBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusSeconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusSeconds']};}};timeBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$TimeBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:TimeBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:TimeBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','TimeBehavior','$m','minusMilliseconds']};}};timeBehavior$.toString=function(){return this.string.valueOf();};
})(TimeBehavior$base.$$.prototype);
}
return TimeBehavior$base;
}
ex$.$init$TimeBehavior$base=$init$TimeBehavior$base;$init$TimeBehavior$base();
function ReadableDuration$base(readableDuration$){
}
ReadableDuration$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDuration'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.time'),Duration)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableDuration']};};
ex$.ReadableDuration$base=ReadableDuration$base;
function $init$ReadableDuration$base(){
if(ReadableDuration$base.$$===undefined){
m$1.initTypeProtoI(ReadableDuration$base,'ceylon.time.base::ReadableDuration');
(function(readableDuration$){
readableDuration$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDuration$base,pa:5,an:function(){return[m$1.doc("Number of milliseconds.")];},d:['ceylon.time.base','ReadableDuration','$at','milliseconds']};}};
readableDuration$.toString=function(){return this.string.valueOf();};
})(ReadableDuration$base.$$.prototype);
}
return ReadableDuration$base;
}
ex$.$init$ReadableDuration$base=$init$ReadableDuration$base;$init$ReadableDuration$base();
function PeriodBehavior$base($$targs$$,periodBehavior$){
m$1.set_type_args(periodBehavior$,$$targs$$,PeriodBehavior$base);
ReadablePeriod$base(periodBehavior$);
}
PeriodBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Self$PeriodBehavior:{sts:[{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},{t:ReadablePeriod$base}]}},sts:[{t:ReadablePeriod$base}],of:['Self$PeriodBehavior'],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior')];},d:['ceylon.time.base','PeriodBehavior']};};
ex$.PeriodBehavior$base=PeriodBehavior$base;
function $init$PeriodBehavior$base(){
if(PeriodBehavior$base.$$===undefined){
m$1.initTypeProtoI(PeriodBehavior$base,'ceylon.time.base::PeriodBehavior',$init$ReadablePeriod$base());
(function(periodBehavior$){
periodBehavior$.withYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'year',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withYears')];},d:['ceylon.time.base','PeriodBehavior','$m','withYears']};}};periodBehavior$.withMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'month',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','withMonths']};}};periodBehavior$.withDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'daysOfMonth',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withDays')];},d:['ceylon.time.base','PeriodBehavior','$m','withDays']};}};periodBehavior$.plusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','plusYears']};}};periodBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMonths']};}};periodBehavior$.plusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','plusDays']};}};periodBehavior$.minusYears={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'years',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusYears')];},d:['ceylon.time.base','PeriodBehavior','$m','minusYears']};}};periodBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMonths')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMonths']};}};periodBehavior$.minusDays={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'days',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusDays')];},d:['ceylon.time.base','PeriodBehavior','$m','minusDays']};}};periodBehavior$.withHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withHours')];},d:['ceylon.time.base','PeriodBehavior','$m','withHours']};}};periodBehavior$.withMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','withMinutes']};}};periodBehavior$.withSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withSeconds']};}};periodBehavior$.withMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:withMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','withMilliseconds']};}};periodBehavior$.plusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','plusHours']};}};periodBehavior$.plusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMinutes']};}};periodBehavior$.plusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusSeconds']};}};periodBehavior$.plusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:plusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','plusMilliseconds']};}};periodBehavior$.minusHours={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'hours',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusHours')];},d:['ceylon.time.base','PeriodBehavior','$m','minusHours']};}};periodBehavior$.minusMinutes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'minutes',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMinutes')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMinutes']};}};periodBehavior$.minusSeconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'seconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusSeconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusSeconds']};}};periodBehavior$.minusMilliseconds={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Self$PeriodBehavior',ps:[{nm:'milliseconds',mt:'prm',$t:{t:m$1.Integer}}],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:minusMilliseconds')];},d:['ceylon.time.base','PeriodBehavior','$m','minusMilliseconds']};}};periodBehavior$.normalized={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:PeriodBehavior$base,a:{Self$PeriodBehavior:'Self$PeriodBehavior'}},ps:[],$cont:PeriodBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:PeriodBehavior:$m:normalized')];},d:['ceylon.time.base','PeriodBehavior','$m','normalized']};}};periodBehavior$.toString=function(){return this.string.valueOf();};
})(PeriodBehavior$base.$$.prototype);
}
return PeriodBehavior$base;
}
ex$.$init$PeriodBehavior$base=$init$PeriodBehavior$base;$init$PeriodBehavior$base();
function ReadableYear$base(readableYear$){
}
ReadableYear$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableYear'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableYear']};};
ex$.ReadableYear$base=ReadableYear$base;
function $init$ReadableYear$base(){
if(ReadableYear$base.$$===undefined){
m$1.initTypeProtoI(ReadableYear$base,'ceylon.time.base::ReadableYear');
(function(readableYear$){
readableYear$.$prop$getYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableYear$base,pa:5,an:function(){return[m$1.doc("The year of the date.")];},d:['ceylon.time.base','ReadableYear','$at','year']};}};
readableYear$.$prop$getLeapYear={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:ReadableYear$base,pa:5,an:function(){return[m$1.doc("True if the year of the date is a leap year.")];},d:['ceylon.time.base','ReadableYear','$at','leapYear']};}};
readableYear$.toString=function(){return this.string.valueOf();};
})(ReadableYear$base.$$.prototype);
}
return ReadableYear$base;
}
ex$.$init$ReadableYear$base=$init$ReadableYear$base;$init$ReadableYear$base();
function Range$base($$targs$$,range$){
m$1.set_type_args(range$,$$targs$$,Range$base);
m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$Range/*ORALE!Element inv pero Element out*/},range$);
}
Range$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Range:{sts:[{t:m$1.Enumerable,a:{Other$Enumerable:'Element$Range'}}]},StepBy$Range:{}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$Range'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range')];},d:['ceylon.time.base','Range']};};
ex$.Range$base=Range$base;
function $init$Range$base(){
if(Range$base.$$===undefined){
m$1.initTypeProtoI(Range$base,'ceylon.time.base::Range',m$1.Iterable);
(function(range$){
range$.$prop$getFrom={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:from')];},d:['ceylon.time.base','Range','$at','from']};}};
range$.$prop$getTo={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Range',$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:to')];},d:['ceylon.time.base','Range','$at','to']};}};
range$.$prop$getStep={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:step')];},d:['ceylon.time.base','Range','$at','step']};}};
range$.$prop$getDuration={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Duration},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:duration')];},d:['ceylon.time.base','Range','$at','duration']};}};
range$.$prop$getPeriod={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Period},$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:period')];},d:['ceylon.time.base','Range','$at','period']};}};
range$.overlap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:overlap')];},d:['ceylon.time.base','Range','$m','overlap']};}};range$.gap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},{t:m$1.Empty}]},ps:[{nm:'other',mt:'prm',$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}}}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:gap')];},d:['ceylon.time.base','Range','$m','gap']};}};range$.equals=function($71u){
var range$=this;
var $71v;
if(m$1.is$(($71v=$71u),{t:Range$base,a:{StepBy$Range:range$.$$targs$$.StepBy$Range,Element$Range:range$.$$targs$$.Element$Range}})){
return (m$1.$eq$(range$.from,$71v.from)&&m$1.$eq$(range$.to,$71v.to));
}
function $71w(){return $71u;}
return false;
};range$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:m$1.$_Object}}],$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:equals')];},d:['ceylon.time.base','Range','$m','equals']};};
m$1.atr$(range$,'hash',function(){
var range$=this;
var $71x=(31);
var $71y=(1);
$71y=(($71x*$71y)+range$.from.hash);
$71y=(($71x*$71y)+range$.to.hash);
return $71y;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:hash')];},d:['ceylon.time.base','Range','$at','hash']};});range$.stepBy={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:Range$base,a:{StepBy$Range:'StepBy$Range',Element$Range:'Element$Range'}},ps:[{nm:'step',mt:'prm',$t:'StepBy$Range'}],$cont:Range$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$m:stepBy')];},d:['ceylon.time.base','Range','$m','stepBy']};}};m$1.atr$(range$,'string',function(){
var range$=this;
return (range$.from.string+"/"+range$.to.string);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Range$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:Range:$at:string')];},d:['ceylon.time.base','Range','$at','string']};});
range$.toString=function(){return this.string.valueOf();};
})(Range$base.$$.prototype);
}
return Range$base;
}
ex$.$init$Range$base=$init$Range$base;$init$Range$base();
function ReadablePeriod$base(readablePeriod$){
ReadableDatePeriod$base(readablePeriod$);
ReadableTimePeriod$base(readablePeriod$);
}
ReadablePeriod$base.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod')];},d:['ceylon.time.base','ReadablePeriod']};};
ex$.ReadablePeriod$base=ReadablePeriod$base;
function $init$ReadablePeriod$base(){
if(ReadablePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadablePeriod$base,'ceylon.time.base::ReadablePeriod',$init$ReadableDatePeriod$base(),$init$ReadableTimePeriod$base());
(function(readablePeriod$){
readablePeriod$.$prop$getDateOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableDatePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:dateOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','dateOnly']};}};
readablePeriod$.$prop$getTimeOnly={$crtmm$:function(){return{mod:$CCMM$,$t:{t:ReadableTimePeriod$base},$cont:ReadablePeriod$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadablePeriod:$at:timeOnly')];},d:['ceylon.time.base','ReadablePeriod','$at','timeOnly']};}};
readablePeriod$.toString=function(){return this.string.valueOf();};
})(ReadablePeriod$base.$$.prototype);
}
return ReadablePeriod$base;
}
ex$.$init$ReadablePeriod$base=$init$ReadablePeriod$base;$init$ReadablePeriod$base();
function ReadableDatePeriod$base(readableDatePeriod$){
}
ReadableDatePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableDatePeriod')];},d:['ceylon.time.base','ReadableDatePeriod']};};
ex$.ReadableDatePeriod$base=ReadableDatePeriod$base;
function $init$ReadableDatePeriod$base(){
if(ReadableDatePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableDatePeriod$base,'ceylon.time.base::ReadableDatePeriod');
(function(readableDatePeriod$){
readableDatePeriod$.$prop$getYears={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of years.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','years']};}};
readableDatePeriod$.$prop$getMonths={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of months.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','months']};}};
readableDatePeriod$.$prop$getDays={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableDatePeriod$base,pa:5,an:function(){return[m$1.doc("The number of days.")];},d:['ceylon.time.base','ReadableDatePeriod','$at','days']};}};
readableDatePeriod$.toString=function(){return this.string.valueOf();};
})(ReadableDatePeriod$base.$$.prototype);
}
return ReadableDatePeriod$base;
}
ex$.$init$ReadableDatePeriod$base=$init$ReadableDatePeriod$base;$init$ReadableDatePeriod$base();
function ReadableTimePeriod$base(readableTimePeriod$){
}
ReadableTimePeriod$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableTimePeriod')];},d:['ceylon.time.base','ReadableTimePeriod']};};
ex$.ReadableTimePeriod$base=ReadableTimePeriod$base;
function $init$ReadableTimePeriod$base(){
if(ReadableTimePeriod$base.$$===undefined){
m$1.initTypeProtoI(ReadableTimePeriod$base,'ceylon.time.base::ReadableTimePeriod');
(function(readableTimePeriod$){
readableTimePeriod$.$prop$getHours={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of hours")];},d:['ceylon.time.base','ReadableTimePeriod','$at','hours']};}};
readableTimePeriod$.$prop$getMinutes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of minutes")];},d:['ceylon.time.base','ReadableTimePeriod','$at','minutes']};}};
readableTimePeriod$.$prop$getSeconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of seconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','seconds']};}};
readableTimePeriod$.$prop$getMilliseconds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ReadableTimePeriod$base,pa:5,an:function(){return[m$1.doc("The number of milliseconds")];},d:['ceylon.time.base','ReadableTimePeriod','$at','milliseconds']};}};
readableTimePeriod$.toString=function(){return this.string.valueOf();};
})(ReadableTimePeriod$base.$$.prototype);
}
return ReadableTimePeriod$base;
}
ex$.$init$ReadableTimePeriod$base=$init$ReadableTimePeriod$base;$init$ReadableTimePeriod$base();
function DayOfWeek$base(integer,dayOfWeek$){
$init$DayOfWeek$base();
if(dayOfWeek$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.time.base::DayOfWeek"),'?','?')
dayOfWeek$.integer_=integer;
m$1.Ordinal({Other$Ordinal:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Comparable({Other$Comparable:{t:DayOfWeek$base}},dayOfWeek$);
m$1.Enumerable({Other$Enumerable:{t:DayOfWeek$base}},dayOfWeek$);
return dayOfWeek$;
}
DayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'integer',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];}}],sts:[{t:m$1.Ordinal,a:{Other$Ordinal:{t:DayOfWeek$base}}},{t:m$1.Comparable,a:{Other$Comparable:{t:DayOfWeek$base}}},{t:m$1.Enumerable,a:{Other$Enumerable:{t:DayOfWeek$base}}}],of:[$prop$getMonday$base,$prop$getTuesday$base,$prop$getWednesday$base,$prop$getThursday$base,$prop$getFriday$base,$prop$getSaturday$base,$prop$getSunday$base],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek')];},d:['ceylon.time.base','DayOfWeek']};};
ex$.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
if(DayOfWeek$base.$$===undefined){
m$1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',m$1.Basic,m$1.Ordinal,m$1.Comparable,m$1.Enumerable);
(function(dayOfWeek$){
m$1.atr$(dayOfWeek$,'integer',function(){return this.integer_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc("Numeric value of the DayOfWeek.")];},d:['ceylon.time.base','DayOfWeek','$at','integer']};});
dayOfWeek$.plusDays=function($720){
var dayOfWeek$=this;
if(($721=$720,$721.largerThan((-7))&&$721.smallerThan((7)))){
var $722=(((7)+dayOfWeek$.integer)+$720).remainder((7));
var $723;
m$1.asrt$2("",'32:12-32:46','DayOfWeek.ceylon',[m$1.nn$(($723=weekdays$base().$_get($722))),'exists dow = weekdays[wd]']);
return $723;
}
else{
return dayOfWeek$.plusDays($720.remainder((7)));
}
};dayOfWeek$.plusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:plusDays')];},d:['ceylon.time.base','DayOfWeek','$m','plusDays']};};
dayOfWeek$.minusDays=function($724){var dayOfWeek$=this;
return dayOfWeek$.plusDays((-$724));
};
dayOfWeek$.minusDays.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'number',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:minusDays')];},d:['ceylon.time.base','DayOfWeek','$m','minusDays']};};
dayOfWeek$.compare=function($725){var dayOfWeek$=this;
return dayOfWeek$.integer.compare($725.integer);
};
dayOfWeek$.compare.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc("Compare days of week.")];},d:['ceylon.time.base','DayOfWeek','$m','compare']};};
dayOfWeek$.offset=function($726){var dayOfWeek$=this;
return function(){var $727=(dayOfWeek$.integer-$726.integer);return (($727<(0))?($727+(7)):$727);
}();
};
dayOfWeek$.offset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:DayOfWeek$base}}],$cont:DayOfWeek$base,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:offset')];},d:['ceylon.time.base','DayOfWeek','$m','offset']};};
dayOfWeek$.neighbour=function($728){var dayOfWeek$=this;
return dayOfWeek$.plusDays($728);
};
dayOfWeek$.neighbour.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:DayOfWeek$base,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:DayOfWeek:$m:neighbour')];},d:['ceylon.time.base','DayOfWeek','$m','neighbour']};};
dayOfWeek$.toString=function(){return this.string.valueOf();};
})(DayOfWeek$base.$$.prototype);
}
return DayOfWeek$base;
}
ex$.$init$DayOfWeek$base=$init$DayOfWeek$base;$init$DayOfWeek$base();
var $729$base;function $valinit$$729$base(){if($729$base===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'weekdays\' before it was set"),'69:0-70:96','DayOfWeek.ceylon');
if($729$base===undefined){$729$base=m$1.INIT$;$729$base=m$1.tpl$([sunday$base(),monday$base(),tuesday$base(),wednesday$base(),thursday$base(),friday$base(),saturday$base()])};return $729$base;};
function weekdays$base(){return $valinit$$729$base();}
ex$.weekdays$base=weekdays$base;
var $prop$getWeekdays$base={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:DayOfWeek$base}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:weekdays')];},d:['ceylon.time.base','weekdays']};}};
ex$.$prop$getWeekdays$base=$prop$getWeekdays$base;
$prop$getWeekdays$base.get=weekdays$base;
weekdays$base.$crtmm$=$prop$getWeekdays$base.$crtmm$;
function dayOfWeek$base($72a){
var $72b=$72a;
if(m$1.is$($72b,{t:DayOfWeek$base})) {
return $72b;
}
else if(m$1.is$($72b,{t:m$1.Integer})) {
m$1.asrt$2("",'77:8-77:35','DayOfWeek.ceylon',[($72c=$72b,$72c.notSmallerThan((0))&&$72c.smallerThan((7))),'0 <= dayOfWeek < 7']);
var $72d;
m$1.asrt$2("",'78:8-78:59','DayOfWeek.ceylon',[m$1.nn$(($72d=weekdays$base().$_get($72b))),'exists DayOfWeek dow = weekdays[dayOfWeek]']);
return $72d;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
ex$.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:'u',l:[{t:m$1.Integer},{t:DayOfWeek$base}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:dayOfWeek')];},d:['ceylon.time.base','dayOfWeek']};};
function parseDayOfWeek$base($72e){
var $72f=$72e.lowercased;
var $72h;for(var $72g=weekdays$base().iterator();($72h=$72g.next())!==m$1.finished();){
if(m$1.$eq$($72h.string.lowercased,$72f)){
return $72h;
}
}
return null;
}
ex$.parseDayOfWeek$base=parseDayOfWeek$base;
parseDayOfWeek$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:DayOfWeek$base}]},ps:[{nm:'dayOfWeek',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:parseDayOfWeek')];},d:['ceylon.time.base','parseDayOfWeek']};};
function $72i$base(){
var sunday$=new $72i$base.$$;DayOfWeek$base(0,sunday$);
sunday$.$wgb6s9$72k_="sunday";
sunday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};}};
sunday$.$prop$getString.get=function(){return string};
sunday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};}};
sunday$.$prop$getPredecessor.get=function(){return predecessor};
sunday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};}};
sunday$.$prop$getSuccessor.get=function(){return successor};
return sunday$;
};$72i$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','sunday']};};
function $init$sunday$base(){
if($72i$base.$$===undefined){
m$1.initTypeProto($72i$base,'ceylon.time.base::sunday',$init$DayOfWeek$base());
(function(sunday$){
m$1.atr$(sunday$,'string',function(){return this.$wgb6s9$72k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','string']};});
m$1.atr$(sunday$,'predecessor',function(){
var sunday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','predecessor']};});
m$1.atr$(sunday$,'successor',function(){
var sunday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72i$base,pa:3,d:['ceylon.time.base','sunday','$at','successor']};});
sunday$.toString=function(){return this.string.valueOf();};
})($72i$base.$$.prototype);
}
return $72i$base;
}
ex$.$init$sunday$base=$init$sunday$base;$init$sunday$base();var $72n;
function sunday$base(){
if($72n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'sunday\' before it was set"),'104:0-109:0','DayOfWeek.ceylon');
if($72n===undefined){$72n=m$1.INIT$;$72n=$init$sunday$base()();$72n.$crtmm$=sunday$base.$crtmm$;}
return $72n;
}
ex$.sunday$base=sunday$base;
sunday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$sunday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:sunday')];},d:['ceylon.time.base','sunday']};};
$prop$getSunday$base=sunday$base;
ex$.$prop$getSunday$base=$prop$getSunday$base;
function $72o$base(){
var monday$=new $72o$base.$$;DayOfWeek$base(1,monday$);
monday$.$wgb6s9$72q_="monday";
monday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','string']};}};
monday$.$prop$getString.get=function(){return string};
monday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};}};
monday$.$prop$getPredecessor.get=function(){return predecessor};
monday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};}};
monday$.$prop$getSuccessor.get=function(){return successor};
return monday$;
};$72o$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','monday']};};
function $init$monday$base(){
if($72o$base.$$===undefined){
m$1.initTypeProto($72o$base,'ceylon.time.base::monday',$init$DayOfWeek$base());
(function(monday$){
m$1.atr$(monday$,'string',function(){return this.$wgb6s9$72q_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','string']};});
m$1.atr$(monday$,'predecessor',function(){
var monday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','predecessor']};});
m$1.atr$(monday$,'successor',function(){
var monday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72o$base,pa:3,d:['ceylon.time.base','monday','$at','successor']};});
monday$.toString=function(){return this.string.valueOf();};
})($72o$base.$$.prototype);
}
return $72o$base;
}
ex$.$init$monday$base=$init$monday$base;$init$monday$base();var $72t;
function monday$base(){
if($72t===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'monday\' before it was set"),'111:0-116:0','DayOfWeek.ceylon');
if($72t===undefined){$72t=m$1.INIT$;$72t=$init$monday$base()();$72t.$crtmm$=monday$base.$crtmm$;}
return $72t;
}
ex$.monday$base=monday$base;
monday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$monday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:monday')];},d:['ceylon.time.base','monday']};};
$prop$getMonday$base=monday$base;
ex$.$prop$getMonday$base=$prop$getMonday$base;
function $72u$base(){
var tuesday$=new $72u$base.$$;DayOfWeek$base(2,tuesday$);
tuesday$.$wgb6s9$72w_="tuesday";
tuesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};}};
tuesday$.$prop$getString.get=function(){return string};
tuesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};}};
tuesday$.$prop$getPredecessor.get=function(){return predecessor};
tuesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};}};
tuesday$.$prop$getSuccessor.get=function(){return successor};
return tuesday$;
};$72u$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','tuesday']};};
function $init$tuesday$base(){
if($72u$base.$$===undefined){
m$1.initTypeProto($72u$base,'ceylon.time.base::tuesday',$init$DayOfWeek$base());
(function(tuesday$){
m$1.atr$(tuesday$,'string',function(){return this.$wgb6s9$72w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','string']};});
m$1.atr$(tuesday$,'predecessor',function(){
var tuesday$=this;
return monday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','predecessor']};});
m$1.atr$(tuesday$,'successor',function(){
var tuesday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$72u$base,pa:3,d:['ceylon.time.base','tuesday','$at','successor']};});
tuesday$.toString=function(){return this.string.valueOf();};
})($72u$base.$$.prototype);
}
return $72u$base;
}
ex$.$init$tuesday$base=$init$tuesday$base;$init$tuesday$base();var $72z;
function tuesday$base(){
if($72z===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'tuesday\' before it was set"),'118:0-123:0','DayOfWeek.ceylon');
if($72z===undefined){$72z=m$1.INIT$;$72z=$init$tuesday$base()();$72z.$crtmm$=tuesday$base.$crtmm$;}
return $72z;
}
ex$.tuesday$base=tuesday$base;
tuesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$tuesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:tuesday')];},d:['ceylon.time.base','tuesday']};};
$prop$getTuesday$base=tuesday$base;
ex$.$prop$getTuesday$base=$prop$getTuesday$base;
function $730$base(){
var wednesday$=new $730$base.$$;DayOfWeek$base(3,wednesday$);
wednesday$.$wgb6s9$732_="wednesday";
wednesday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};}};
wednesday$.$prop$getString.get=function(){return string};
wednesday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};}};
wednesday$.$prop$getPredecessor.get=function(){return predecessor};
wednesday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};}};
wednesday$.$prop$getSuccessor.get=function(){return successor};
return wednesday$;
};$730$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','wednesday']};};
function $init$wednesday$base(){
if($730$base.$$===undefined){
m$1.initTypeProto($730$base,'ceylon.time.base::wednesday',$init$DayOfWeek$base());
(function(wednesday$){
m$1.atr$(wednesday$,'string',function(){return this.$wgb6s9$732_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','string']};});
m$1.atr$(wednesday$,'predecessor',function(){
var wednesday$=this;
return tuesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','predecessor']};});
m$1.atr$(wednesday$,'successor',function(){
var wednesday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$730$base,pa:3,d:['ceylon.time.base','wednesday','$at','successor']};});
wednesday$.toString=function(){return this.string.valueOf();};
})($730$base.$$.prototype);
}
return $730$base;
}
ex$.$init$wednesday$base=$init$wednesday$base;$init$wednesday$base();var $735;
function wednesday$base(){
if($735===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'wednesday\' before it was set"),'125:0-130:0','DayOfWeek.ceylon');
if($735===undefined){$735=m$1.INIT$;$735=$init$wednesday$base()();$735.$crtmm$=wednesday$base.$crtmm$;}
return $735;
}
ex$.wednesday$base=wednesday$base;
wednesday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$wednesday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:wednesday')];},d:['ceylon.time.base','wednesday']};};
$prop$getWednesday$base=wednesday$base;
ex$.$prop$getWednesday$base=$prop$getWednesday$base;
function $736$base(){
var thursday$=new $736$base.$$;DayOfWeek$base(4,thursday$);
thursday$.$wgb6s9$738_="thursday";
thursday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};}};
thursday$.$prop$getString.get=function(){return string};
thursday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};}};
thursday$.$prop$getPredecessor.get=function(){return predecessor};
thursday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};}};
thursday$.$prop$getSuccessor.get=function(){return successor};
return thursday$;
};$736$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','thursday']};};
function $init$thursday$base(){
if($736$base.$$===undefined){
m$1.initTypeProto($736$base,'ceylon.time.base::thursday',$init$DayOfWeek$base());
(function(thursday$){
m$1.atr$(thursday$,'string',function(){return this.$wgb6s9$738_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','string']};});
m$1.atr$(thursday$,'predecessor',function(){
var thursday$=this;
return wednesday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','predecessor']};});
m$1.atr$(thursday$,'successor',function(){
var thursday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$736$base,pa:3,d:['ceylon.time.base','thursday','$at','successor']};});
thursday$.toString=function(){return this.string.valueOf();};
})($736$base.$$.prototype);
}
return $736$base;
}
ex$.$init$thursday$base=$init$thursday$base;$init$thursday$base();var $73b;
function thursday$base(){
if($73b===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'thursday\' before it was set"),'132:0-137:0','DayOfWeek.ceylon');
if($73b===undefined){$73b=m$1.INIT$;$73b=$init$thursday$base()();$73b.$crtmm$=thursday$base.$crtmm$;}
return $73b;
}
ex$.thursday$base=thursday$base;
thursday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$thursday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:thursday')];},d:['ceylon.time.base','thursday']};};
$prop$getThursday$base=thursday$base;
ex$.$prop$getThursday$base=$prop$getThursday$base;
function $73c$base(){
var friday$=new $73c$base.$$;DayOfWeek$base(5,friday$);
friday$.$wgb6s9$73e_="friday";
friday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','string']};}};
friday$.$prop$getString.get=function(){return string};
friday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};}};
friday$.$prop$getPredecessor.get=function(){return predecessor};
friday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};}};
friday$.$prop$getSuccessor.get=function(){return successor};
return friday$;
};$73c$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','friday']};};
function $init$friday$base(){
if($73c$base.$$===undefined){
m$1.initTypeProto($73c$base,'ceylon.time.base::friday',$init$DayOfWeek$base());
(function(friday$){
m$1.atr$(friday$,'string',function(){return this.$wgb6s9$73e_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','string']};});
m$1.atr$(friday$,'predecessor',function(){
var friday$=this;
return thursday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','predecessor']};});
m$1.atr$(friday$,'successor',function(){
var friday$=this;
return saturday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73c$base,pa:3,d:['ceylon.time.base','friday','$at','successor']};});
friday$.toString=function(){return this.string.valueOf();};
})($73c$base.$$.prototype);
}
return $73c$base;
}
ex$.$init$friday$base=$init$friday$base;$init$friday$base();var $73h;
function friday$base(){
if($73h===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'friday\' before it was set"),'139:0-144:0','DayOfWeek.ceylon');
if($73h===undefined){$73h=m$1.INIT$;$73h=$init$friday$base()();$73h.$crtmm$=friday$base.$crtmm$;}
return $73h;
}
ex$.friday$base=friday$base;
friday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$friday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:friday')];},d:['ceylon.time.base','friday']};};
$prop$getFriday$base=friday$base;
ex$.$prop$getFriday$base=$prop$getFriday$base;
function $73i$base(){
var saturday$=new $73i$base.$$;DayOfWeek$base(6,saturday$);
saturday$.$wgb6s9$73k_="saturday";
saturday$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};}};
saturday$.$prop$getString.get=function(){return string};
saturday$.$prop$getPredecessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};}};
saturday$.$prop$getPredecessor.get=function(){return predecessor};
saturday$.$prop$getSuccessor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};}};
saturday$.$prop$getSuccessor.get=function(){return successor};
return saturday$;
};$73i$base.$crtmm$=function(){return{mod:$CCMM$,'super':{t:DayOfWeek$base},d:['ceylon.time.base','saturday']};};
function $init$saturday$base(){
if($73i$base.$$===undefined){
m$1.initTypeProto($73i$base,'ceylon.time.base::saturday',$init$DayOfWeek$base());
(function(saturday$){
m$1.atr$(saturday$,'string',function(){return this.$wgb6s9$73k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','string']};});
m$1.atr$(saturday$,'predecessor',function(){
var saturday$=this;
return friday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','predecessor']};});
m$1.atr$(saturday$,'successor',function(){
var saturday$=this;
return sunday$base();
},undefined,function(){return{mod:$CCMM$,$t:{t:DayOfWeek$base},$cont:$73i$base,pa:3,d:['ceylon.time.base','saturday','$at','successor']};});
saturday$.toString=function(){return this.string.valueOf();};
})($73i$base.$$.prototype);
}
return $73i$base;
}
ex$.$init$saturday$base=$init$saturday$base;$init$saturday$base();var $73n;
function saturday$base(){
if($73n===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'saturday\' before it was set"),'146:0-151:0','DayOfWeek.ceylon');
if($73n===undefined){$73n=m$1.INIT$;$73n=$init$saturday$base()();$73n.$crtmm$=saturday$base.$crtmm$;}
return $73n;
}
ex$.saturday$base=saturday$base;
saturday$base.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$saturday$base()},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:saturday')];},d:['ceylon.time.base','saturday']};};
$prop$getSaturday$base=saturday$base;
ex$.$prop$getSaturday$base=$prop$getSaturday$base;
function MonthBehavior$base($$targs$$,monthBehavior$){
m$1.set_type_args(monthBehavior$,$$targs$$,MonthBehavior$base);
}
MonthBehavior$base.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MonthBehavior:{sts:[{t:ReadableMonth$base}]}},pa:1,an:function(){return[m$1.doc("Common behavior for month types.")];},d:['ceylon.time.base','MonthBehavior']};};
ex$.MonthBehavior$base=MonthBehavior$base;
function $init$MonthBehavior$base(){
if(MonthBehavior$base.$$===undefined){
m$1.initTypeProtoI(MonthBehavior$base,'ceylon.time.base::MonthBehavior');
(function(monthBehavior$){
monthBehavior$.withMonth={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'month',mt:'prm',$t:{t:Month$base}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:withMonth')];},d:['ceylon.time.base','MonthBehavior','$m','withMonth']};}};monthBehavior$.plusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:plusMonths')];},d:['ceylon.time.base','MonthBehavior','$m','plusMonths']};}};monthBehavior$.minusMonths={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Element$MonthBehavior',ps:[{nm:'months',mt:'prm',$t:{t:m$1.Integer}}],$cont:MonthBehavior$base,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:MonthBehavior:$m:minusMonths')];},d:['ceylon.time.base','MonthBehavior','$m','minusMonths']};}};monthBehavior$.toString=function(){return this.string.valueOf();};
})(MonthBehavior$base.$$.prototype);
}
return MonthBehavior$base;
}
ex$.$init$MonthBehavior$base=$init$MonthBehavior$base;$init$MonthBehavior$base();
function ReadableMonth$base(readableMonth$){
}
ReadableMonth$base.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.time.base:ReadableMonth'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),$_Date),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time'),DateTime),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.time.timezone'),ZoneDateTime$timezone)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.time.base','ReadableMonth']};};
ex$.ReadableMonth$base=ReadableMonth$base;
function $init$ReadableMonth$base(){
if(ReadableMonth$base.$$===undefined){
m$1.initTypeProtoI(ReadableMonth$base,'ceylon.time.base::ReadableMonth');
(function(readableMonth$){
readableMonth$.$prop$getMonth={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Month$base},$cont:ReadableMonth$base,pa:5,an:function(){return[m$1.doc("Month of the year value of the date.")];},d:['ceylon.time.base','ReadableMonth','$at','month']};}};
readableMonth$.toString=function(){return this.string.valueOf();};
})(ReadableMonth$base.$$.prototype);
}
return ReadableMonth$base;
}
ex$.$init$ReadableMonth$base=$init$ReadableMonth$base;$init$ReadableMonth$base();
ex$.$pkg$ans$ceylon$time$chronology=function(){return[m$1.doc$($CCMM$,'ceylon.time.chronology','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time=function(){return[m$1.doc$($CCMM$,'ceylon.time','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone$parser$iana=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$timezone$model=function(){return[m$1.doc$($CCMM$,'ceylon.time.timezone.model','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$internal=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$internal$math=function(){return[m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$iso8601=function(){return[m$1.doc$($CCMM$,'ceylon.time.iso8601','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$time$base=function(){return[m$1.doc$($CCMM$,'ceylon.time.base','$pkg-anns'),m$1.by(m$1.$arr$sa$(["Diego Coronel","Roland Tepp"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkgunsh$ceylon$time={'FixedInstant':FixedInstant,'FixedMilliseconds':FixedMilliseconds,'OffsetClock':OffsetClock};
ex$.$pkgunsh$ceylon$time$timezone$parser$iana={'parseTime':parseTime$timezone$parser$iana,'atTimeDefinition':atTimeDefinition$timezone$parser$iana,'adjustToEndOfDayIfNecessary':adjustToEndOfDayIfNecessary$timezone$parser$iana,'findDayOfWeek':findDayOfWeek$timezone$parser$iana,'toPeriod':toPeriod$timezone$parser$iana,'parseOnDayToken':parseOnDayToken$timezone$parser$iana,'parseYear':parseYear$timezone$parser$iana};
ex$.$pkgunsh$ceylon$time$iso8601={'parseInteger':parseInteger$iso8601,'parseWeek':parseWeek$iso8601,'parseDay':parseDay$iso8601,'parseYear':parseYear$iso8601,'parseMonth':parseMonth$iso8601,'parseDayOfMonth':parseDayOfMonth$iso8601,'convertToTime':convertToTime$iso8601,'parseTimeComponents':parseTimeComponents$iso8601,'State':State$iso8601(),'createDateTime':createDateTime$iso8601};
ex$.$pkgunsh$ceylon$time$base={'firstDayOfMonth':$prop$getFirstDayOfMonth$base};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
