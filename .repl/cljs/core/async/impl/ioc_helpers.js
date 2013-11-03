goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t15531 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t15531');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t15531 = (function (f,fn_handler,meta15532){
this.f = f;
this.fn_handler = fn_handler;
this.meta15532 = meta15532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t15531.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t15531.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t15531";
cljs.core.async.impl.ioc_helpers.t15531.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async.impl.ioc-helpers/t15531");
});
cljs.core.async.impl.ioc_helpers.t15531.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t15531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t15531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t15531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15533){var self__ = this;
var _15533__$1 = this;return self__.meta15532;
});
cljs.core.async.impl.ioc_helpers.t15531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15533,meta15532__$1){var self__ = this;
var _15533__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t15531(self__.f,self__.fn_handler,meta15532__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t15531 = (function __GT_t15531(f__$1,fn_handler__$1,meta15532){return (new cljs.core.async.impl.ioc_helpers.t15531(f__$1,fn_handler__$1,meta15532));
});
}
return (new cljs.core.async.impl.ioc_helpers.t15531(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e15535){if((e15535 instanceof Object))
{var ex = e15535;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15535;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_15538_15540 = state;(statearr_15538_15540[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_15538_15540[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_15539_15541 = state;(statearr_15539_15541[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_15539_15541[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_15544_15546 = state;(statearr_15544_15546[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_15544_15546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_15545_15547 = state;(statearr_15545_15547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_15545_15547[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15548){var map__15553 = p__15548;var map__15553__$1 = ((cljs.core.seq_QMARK_.call(null,map__15553))?cljs.core.apply.call(null,cljs.core.hash_map,map__15553):map__15553);var opts = map__15553__$1;var statearr_15554_15557 = state;(statearr_15554_15557[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_15555_15558 = state;(statearr_15555_15558[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_15556_15559 = state;(statearr_15556_15559[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15548 = null;if (arguments.length > 3) {
  p__15548 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15548);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15560){
var state = cljs.core.first(arglist__15560);
arglist__15560 = cljs.core.next(arglist__15560);
var cont_block = cljs.core.first(arglist__15560);
arglist__15560 = cljs.core.next(arglist__15560);
var ports = cljs.core.first(arglist__15560);
var p__15548 = cljs.core.rest(arglist__15560);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__15548);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});
goog.provide('cljs.core.async.impl.ioc_helpers.ExceptionFrame');

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4916__auto__){var self__ = this;
var this__4916__auto____$1 = this;var h__4771__auto__ = self__.__hash;if(!((h__4771__auto__ == null)))
{return h__4771__auto__;
} else
{var h__4771__auto____$1 = cljs.core.hash_imap.call(null,this__4916__auto____$1);self__.__hash = h__4771__auto____$1;
return h__4771__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4921__auto__,k__4922__auto__){var self__ = this;
var this__4921__auto____$1 = this;return cljs.core._lookup.call(null,this__4921__auto____$1,k__4922__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4923__auto__,k15562,else__4924__auto__){var self__ = this;
var this__4923__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k15562,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15562,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15562,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15562,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k15562,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k15562,else__4924__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4928__auto__,k__4929__auto__,G__15561){var self__ = this;
var this__4928__auto____$1 = this;var pred__15564 = cljs.core.keyword_identical_QMARK_;var expr__15565 = k__4929__auto__;if(pred__15564.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__15565))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__15561,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__15564.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__15565))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__15561,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__15564.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__15565))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__15561,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__15564.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__15565))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__15561,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__15564.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__15565))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__15561,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4929__auto__,G__15561),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4935__auto__,writer__4936__auto__,opts__4937__auto__){var self__ = this;
var this__4935__auto____$1 = this;var pr_pair__4938__auto__ = (function (keyval__4939__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4936__auto__,cljs.core.pr_writer,""," ","",opts__4937__auto__,keyval__4939__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4936__auto__,pr_pair__4938__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4937__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception),cljs.core.vector.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4926__auto__,entry__4927__auto__){var self__ = this;
var this__4926__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4927__auto__))
{return cljs.core._assoc.call(null,this__4926__auto____$1,cljs.core._nth.call(null,entry__4927__auto__,0),cljs.core._nth.call(null,entry__4927__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4926__auto____$1,entry__4927__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4933__auto__){var self__ = this;
var this__4933__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception),cljs.core.vector.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block),cljs.core.vector.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4925__auto__){var self__ = this;
var this__4925__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4917__auto__,other__4918__auto__){var self__ = this;
var this__4917__auto____$1 = this;if(cljs.core.truth_((function (){var and__4358__auto__ = other__4918__auto__;if(cljs.core.truth_(and__4358__auto__))
{var and__4358__auto____$1 = (this__4917__auto____$1.constructor === other__4918__auto__.constructor);if(and__4358__auto____$1)
{return cljs.core.equiv_map.call(null,this__4917__auto____$1,other__4918__auto__);
} else
{return and__4358__auto____$1;
}
} else
{return and__4358__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4920__auto__,G__15561){var self__ = this;
var this__4920__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__15561,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4919__auto__){var self__ = this;
var this__4919__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4930__auto__,k__4931__auto__){var self__ = this;
var this__4930__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], true),k__4931__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4930__auto____$1),self__.__meta),k__4931__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4931__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4955__auto__){return cljs.core.list.call(null,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4955__auto__,writer__4956__auto__){return cljs.core._write.call(null,writer__4956__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__15563){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__15563),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__15563),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__15563),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__15563),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__15563),null,cljs.core.dissoc.call(null,G__15563,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_15568 = state;(statearr_15568[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_15568;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4358__auto__ = exception;if(cljs.core.truth_(and__4358__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4358__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4358__auto__ = exception;if(cljs.core.truth_(and__4358__auto__))
{var and__4358__auto____$1 = catch_block;if(cljs.core.truth_(and__4358__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4358__auto____$1;
}
} else
{return and__4358__auto__;
}
})()))
{var statearr_15574 = state;(statearr_15574[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_15574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_15574[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_15574[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_15574;
} else
{if(cljs.core.truth_((function (){var and__4358__auto__ = exception;if(cljs.core.truth_(and__4358__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4358__auto__;
}
})()))
{var statearr_15575_15579 = state;(statearr_15575_15579[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__15580 = state;
state = G__15580;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4358__auto__ = exception;if(cljs.core.truth_(and__4358__auto__))
{var and__4358__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4358__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4358__auto____$1;
}
} else
{return and__4358__auto__;
}
})()))
{var statearr_15576 = state;(statearr_15576[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_15576[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_15576;
} else
{if(cljs.core.truth_((function (){var and__4358__auto__ = cljs.core.not.call(null,exception);if(and__4358__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4358__auto__;
}
})()))
{var statearr_15577 = state;(statearr_15577[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_15577[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_15577;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_15578 = state;(statearr_15578[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_15578[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_15578;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
