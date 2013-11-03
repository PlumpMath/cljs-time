goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11818 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11818');

/**
* @constructor
*/
cljs.core.async.t11818 = (function (f,fn_handler,meta11819){
this.f = f;
this.fn_handler = fn_handler;
this.meta11819 = meta11819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11818.cljs$lang$type = true;
cljs.core.async.t11818.cljs$lang$ctorStr = "cljs.core.async/t11818";
cljs.core.async.t11818.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11818");
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11820){var self__ = this;
var _11820__$1 = this;return self__.meta11819;
});
cljs.core.async.t11818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11820,meta11819__$1){var self__ = this;
var _11820__$1 = this;return (new cljs.core.async.t11818(self__.f,self__.fn_handler,meta11819__$1));
});
cljs.core.async.__GT_t11818 = (function __GT_t11818(f__$1,fn_handler__$1,meta11819){return (new cljs.core.async.t11818(f__$1,fn_handler__$1,meta11819));
});
}
return (new cljs.core.async.t11818(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11822 = buff;if(G__11822)
{var bit__4978__auto__ = null;if(cljs.core.truth_((function (){var or__4367__auto__ = bit__4978__auto__;if(cljs.core.truth_(or__4367__auto__))
{return or__4367__auto__;
} else
{return G__11822.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11822.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11822);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11822);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11823 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11823);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11823);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4358__auto__ = ret;if(cljs.core.truth_(and__4358__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4358__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5123__auto___11824 = n;var x_11825 = 0;while(true){
if((x_11825 < n__5123__auto___11824))
{(a[x_11825] = 0);
{
var G__11826 = (x_11825 + 1);
x_11825 = G__11826;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11827 = (i + 1);
i = G__11827;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11831 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11831');

/**
* @constructor
*/
cljs.core.async.t11831 = (function (flag,alt_flag,meta11832){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11832 = meta11832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11831.cljs$lang$type = true;
cljs.core.async.t11831.cljs$lang$ctorStr = "cljs.core.async/t11831";
cljs.core.async.t11831.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11831");
});
cljs.core.async.t11831.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11833){var self__ = this;
var _11833__$1 = this;return self__.meta11832;
});
cljs.core.async.t11831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11833,meta11832__$1){var self__ = this;
var _11833__$1 = this;return (new cljs.core.async.t11831(self__.flag,self__.alt_flag,meta11832__$1));
});
cljs.core.async.__GT_t11831 = (function __GT_t11831(flag__$1,alt_flag__$1,meta11832){return (new cljs.core.async.t11831(flag__$1,alt_flag__$1,meta11832));
});
}
return (new cljs.core.async.t11831(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11837 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11837');

/**
* @constructor
*/
cljs.core.async.t11837 = (function (cb,flag,alt_handler,meta11838){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11838 = meta11838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11837.cljs$lang$type = true;
cljs.core.async.t11837.cljs$lang$ctorStr = "cljs.core.async/t11837";
cljs.core.async.t11837.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11837");
});
cljs.core.async.t11837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11839){var self__ = this;
var _11839__$1 = this;return self__.meta11838;
});
cljs.core.async.t11837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11839,meta11838__$1){var self__ = this;
var _11839__$1 = this;return (new cljs.core.async.t11837(self__.cb,self__.flag,self__.alt_handler,meta11838__$1));
});
cljs.core.async.__GT_t11837 = (function __GT_t11837(cb__$1,flag__$1,alt_handler__$1,meta11838){return (new cljs.core.async.t11837(cb__$1,flag__$1,alt_handler__$1,meta11838));
});
}
return (new cljs.core.async.t11837(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11840_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__11840_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__4367__auto__ = wport;if(cljs.core.truth_(or__4367__auto__))
{return or__4367__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__11841 = (i + 1);
i = G__11841;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4367__auto__ = ret;if(cljs.core.truth_(or__4367__auto__))
{return or__4367__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4358__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4358__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11842){var map__11844 = p__11842;var map__11844__$1 = ((cljs.core.seq_QMARK_.call(null,map__11844))?cljs.core.apply.call(null,cljs.core.hash_map,map__11844):map__11844);var opts = map__11844__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11842 = null;if (arguments.length > 1) {
  p__11842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11842);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11845){
var ports = cljs.core.first(arglist__11845);
var p__11842 = cljs.core.rest(arglist__11845);
return alts_BANG___delegate(ports,p__11842);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11853 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11853');

/**
* @constructor
*/
cljs.core.async.t11853 = (function (ch,f,map_LT_,meta11854){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11854 = meta11854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11853.cljs$lang$type = true;
cljs.core.async.t11853.cljs$lang$ctorStr = "cljs.core.async/t11853";
cljs.core.async.t11853.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11853");
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11856 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11856');

/**
* @constructor
*/
cljs.core.async.t11856 = (function (fn1,_,meta11854,ch,f,map_LT_,meta11857){
this.fn1 = fn1;
this._ = _;
this.meta11854 = meta11854;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11857 = meta11857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11856.cljs$lang$type = true;
cljs.core.async.t11856.cljs$lang$ctorStr = "cljs.core.async/t11856";
cljs.core.async.t11856.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11856");
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11846_SHARP_){return f1.call(null,(((p1__11846_SHARP_ == null))?null:self__.f.call(null,p1__11846_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11858){var self__ = this;
var _11858__$1 = this;return self__.meta11857;
});
cljs.core.async.t11856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11858,meta11857__$1){var self__ = this;
var _11858__$1 = this;return (new cljs.core.async.t11856(self__.fn1,self__._,self__.meta11854,self__.ch,self__.f,self__.map_LT_,meta11857__$1));
});
cljs.core.async.__GT_t11856 = (function __GT_t11856(fn1__$1,___$2,meta11854__$1,ch__$2,f__$2,map_LT___$2,meta11857){return (new cljs.core.async.t11856(fn1__$1,___$2,meta11854__$1,ch__$2,f__$2,map_LT___$2,meta11857));
});
}
return (new cljs.core.async.t11856(fn1,___$1,self__.meta11854,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4358__auto__ = ret;if(cljs.core.truth_(and__4358__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4358__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11855){var self__ = this;
var _11855__$1 = this;return self__.meta11854;
});
cljs.core.async.t11853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11855,meta11854__$1){var self__ = this;
var _11855__$1 = this;return (new cljs.core.async.t11853(self__.ch,self__.f,self__.map_LT_,meta11854__$1));
});
cljs.core.async.__GT_t11853 = (function __GT_t11853(ch__$1,f__$1,map_LT___$1,meta11854){return (new cljs.core.async.t11853(ch__$1,f__$1,map_LT___$1,meta11854));
});
}
return (new cljs.core.async.t11853(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11862 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11862');

/**
* @constructor
*/
cljs.core.async.t11862 = (function (ch,f,map_GT_,meta11863){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11863 = meta11863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11862.cljs$lang$type = true;
cljs.core.async.t11862.cljs$lang$ctorStr = "cljs.core.async/t11862";
cljs.core.async.t11862.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11862");
});
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11864){var self__ = this;
var _11864__$1 = this;return self__.meta11863;
});
cljs.core.async.t11862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11864,meta11863__$1){var self__ = this;
var _11864__$1 = this;return (new cljs.core.async.t11862(self__.ch,self__.f,self__.map_GT_,meta11863__$1));
});
cljs.core.async.__GT_t11862 = (function __GT_t11862(ch__$1,f__$1,map_GT___$1,meta11863){return (new cljs.core.async.t11862(ch__$1,f__$1,map_GT___$1,meta11863));
});
}
return (new cljs.core.async.t11862(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11868 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11868');

/**
* @constructor
*/
cljs.core.async.t11868 = (function (ch,p,filter_GT_,meta11869){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11869 = meta11869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11868.cljs$lang$type = true;
cljs.core.async.t11868.cljs$lang$ctorStr = "cljs.core.async/t11868";
cljs.core.async.t11868.cljs$lang$ctorPrWriter = (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t11868");
});
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11870){var self__ = this;
var _11870__$1 = this;return self__.meta11869;
});
cljs.core.async.t11868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11870,meta11869__$1){var self__ = this;
var _11870__$1 = this;return (new cljs.core.async.t11868(self__.ch,self__.p,self__.filter_GT_,meta11869__$1));
});
cljs.core.async.__GT_t11868 = (function __GT_t11868(ch__$1,p__$1,filter_GT___$1,meta11869){return (new cljs.core.async.t11868(ch__$1,p__$1,filter_GT___$1,meta11869));
});
}
return (new cljs.core.async.t11868(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___11953 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_11932){var state_val_11933 = (state_11932[1]);if((state_val_11933 === 1))
{var state_11932__$1 = state_11932;var statearr_11934_11954 = state_11932__$1;(statearr_11934_11954[2] = null);
(statearr_11934_11954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 2))
{var state_11932__$1 = state_11932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11932__$1,4,ch);
} else
{if((state_val_11933 === 3))
{var inst_11930 = (state_11932[2]);var state_11932__$1 = state_11932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11932__$1,inst_11930);
} else
{if((state_val_11933 === 4))
{var inst_11914 = (state_11932[7]);var inst_11914__$1 = (state_11932[2]);var inst_11915 = (inst_11914__$1 == null);var state_11932__$1 = (function (){var statearr_11935 = state_11932;(statearr_11935[7] = inst_11914__$1);
return statearr_11935;
})();if(cljs.core.truth_(inst_11915))
{var statearr_11936_11955 = state_11932__$1;(statearr_11936_11955[1] = 5);
} else
{var statearr_11937_11956 = state_11932__$1;(statearr_11937_11956[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 5))
{var inst_11917 = cljs.core.async.close_BANG_.call(null,out);var state_11932__$1 = state_11932;var statearr_11938_11957 = state_11932__$1;(statearr_11938_11957[2] = inst_11917);
(statearr_11938_11957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 6))
{var inst_11914 = (state_11932[7]);var inst_11919 = p.call(null,inst_11914);var state_11932__$1 = state_11932;if(cljs.core.truth_(inst_11919))
{var statearr_11939_11958 = state_11932__$1;(statearr_11939_11958[1] = 8);
} else
{var statearr_11940_11959 = state_11932__$1;(statearr_11940_11959[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 7))
{var inst_11928 = (state_11932[2]);var state_11932__$1 = state_11932;var statearr_11941_11960 = state_11932__$1;(statearr_11941_11960[2] = inst_11928);
(statearr_11941_11960[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 8))
{var inst_11914 = (state_11932[7]);var state_11932__$1 = state_11932;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11932__$1,11,out,inst_11914);
} else
{if((state_val_11933 === 9))
{var state_11932__$1 = state_11932;var statearr_11942_11961 = state_11932__$1;(statearr_11942_11961[2] = null);
(statearr_11942_11961[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 10))
{var inst_11925 = (state_11932[2]);var state_11932__$1 = (function (){var statearr_11943 = state_11932;(statearr_11943[8] = inst_11925);
return statearr_11943;
})();var statearr_11944_11962 = state_11932__$1;(statearr_11944_11962[2] = null);
(statearr_11944_11962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11933 === 11))
{var inst_11922 = (state_11932[2]);var state_11932__$1 = state_11932;var statearr_11945_11963 = state_11932__$1;(statearr_11945_11963[2] = inst_11922);
(statearr_11945_11963[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_11949 = (new Array(9));(statearr_11949[0] = state_machine__8463__auto__);
(statearr_11949[1] = 1);
return statearr_11949;
});
var state_machine__8463__auto____1 = (function (state_11932){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_11932);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e11950){if((e11950 instanceof Object))
{var ex__8466__auto__ = e11950;var statearr_11951_11964 = state_11932;(statearr_11951_11964[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11965 = state_11932;
state_11932 = G__11965;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_11932){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_11932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_11952 = f__8625__auto__.call(null);(statearr_11952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___11953);
return statearr_11952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8624__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12117){var state_val_12118 = (state_12117[1]);if((state_val_12118 === 1))
{var state_12117__$1 = state_12117;var statearr_12119_12156 = state_12117__$1;(statearr_12119_12156[2] = null);
(statearr_12119_12156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 2))
{var state_12117__$1 = state_12117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12117__$1,4,in$);
} else
{if((state_val_12118 === 3))
{var inst_12115 = (state_12117[2]);var state_12117__$1 = state_12117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12117__$1,inst_12115);
} else
{if((state_val_12118 === 4))
{var inst_12063 = (state_12117[7]);var inst_12063__$1 = (state_12117[2]);var inst_12064 = (inst_12063__$1 == null);var state_12117__$1 = (function (){var statearr_12120 = state_12117;(statearr_12120[7] = inst_12063__$1);
return statearr_12120;
})();if(cljs.core.truth_(inst_12064))
{var statearr_12121_12157 = state_12117__$1;(statearr_12121_12157[1] = 5);
} else
{var statearr_12122_12158 = state_12117__$1;(statearr_12122_12158[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 5))
{var inst_12066 = cljs.core.async.close_BANG_.call(null,out);var state_12117__$1 = state_12117;var statearr_12123_12159 = state_12117__$1;(statearr_12123_12159[2] = inst_12066);
(statearr_12123_12159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 6))
{var inst_12063 = (state_12117[7]);var inst_12068 = f.call(null,inst_12063);var inst_12073 = cljs.core.seq.call(null,inst_12068);var inst_12074 = inst_12073;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12117__$1 = (function (){var statearr_12124 = state_12117;(statearr_12124[8] = inst_12077);
(statearr_12124[9] = inst_12075);
(statearr_12124[10] = inst_12076);
(statearr_12124[11] = inst_12074);
return statearr_12124;
})();var statearr_12125_12160 = state_12117__$1;(statearr_12125_12160[2] = null);
(statearr_12125_12160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 7))
{var inst_12113 = (state_12117[2]);var state_12117__$1 = state_12117;var statearr_12126_12161 = state_12117__$1;(statearr_12126_12161[2] = inst_12113);
(statearr_12126_12161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 8))
{var inst_12077 = (state_12117[8]);var inst_12076 = (state_12117[10]);var inst_12079 = (inst_12077 < inst_12076);var inst_12080 = inst_12079;var state_12117__$1 = state_12117;if(cljs.core.truth_(inst_12080))
{var statearr_12127_12162 = state_12117__$1;(statearr_12127_12162[1] = 10);
} else
{var statearr_12128_12163 = state_12117__$1;(statearr_12128_12163[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 9))
{var inst_12110 = (state_12117[2]);var state_12117__$1 = (function (){var statearr_12129 = state_12117;(statearr_12129[12] = inst_12110);
return statearr_12129;
})();var statearr_12130_12164 = state_12117__$1;(statearr_12130_12164[2] = null);
(statearr_12130_12164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 10))
{var inst_12077 = (state_12117[8]);var inst_12075 = (state_12117[9]);var inst_12082 = cljs.core._nth.call(null,inst_12075,inst_12077);var state_12117__$1 = state_12117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12117__$1,13,out,inst_12082);
} else
{if((state_val_12118 === 11))
{var inst_12074 = (state_12117[11]);var inst_12088 = (state_12117[13]);var inst_12088__$1 = cljs.core.seq.call(null,inst_12074);var state_12117__$1 = (function (){var statearr_12134 = state_12117;(statearr_12134[13] = inst_12088__$1);
return statearr_12134;
})();if(inst_12088__$1)
{var statearr_12135_12165 = state_12117__$1;(statearr_12135_12165[1] = 14);
} else
{var statearr_12136_12166 = state_12117__$1;(statearr_12136_12166[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 12))
{var inst_12108 = (state_12117[2]);var state_12117__$1 = state_12117;var statearr_12137_12167 = state_12117__$1;(statearr_12137_12167[2] = inst_12108);
(statearr_12137_12167[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 13))
{var inst_12077 = (state_12117[8]);var inst_12075 = (state_12117[9]);var inst_12076 = (state_12117[10]);var inst_12074 = (state_12117[11]);var inst_12084 = (state_12117[2]);var inst_12085 = (inst_12077 + 1);var tmp12131 = inst_12075;var tmp12132 = inst_12076;var tmp12133 = inst_12074;var inst_12074__$1 = tmp12133;var inst_12075__$1 = tmp12131;var inst_12076__$1 = tmp12132;var inst_12077__$1 = inst_12085;var state_12117__$1 = (function (){var statearr_12138 = state_12117;(statearr_12138[8] = inst_12077__$1);
(statearr_12138[9] = inst_12075__$1);
(statearr_12138[10] = inst_12076__$1);
(statearr_12138[11] = inst_12074__$1);
(statearr_12138[14] = inst_12084);
return statearr_12138;
})();var statearr_12139_12168 = state_12117__$1;(statearr_12139_12168[2] = null);
(statearr_12139_12168[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 14))
{var inst_12088 = (state_12117[13]);var inst_12090 = cljs.core.chunked_seq_QMARK_.call(null,inst_12088);var state_12117__$1 = state_12117;if(inst_12090)
{var statearr_12140_12169 = state_12117__$1;(statearr_12140_12169[1] = 17);
} else
{var statearr_12141_12170 = state_12117__$1;(statearr_12141_12170[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 15))
{var state_12117__$1 = state_12117;var statearr_12142_12171 = state_12117__$1;(statearr_12142_12171[2] = null);
(statearr_12142_12171[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 16))
{var inst_12106 = (state_12117[2]);var state_12117__$1 = state_12117;var statearr_12143_12172 = state_12117__$1;(statearr_12143_12172[2] = inst_12106);
(statearr_12143_12172[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 17))
{var inst_12088 = (state_12117[13]);var inst_12092 = cljs.core.chunk_first.call(null,inst_12088);var inst_12093 = cljs.core.chunk_rest.call(null,inst_12088);var inst_12094 = cljs.core.count.call(null,inst_12092);var inst_12074 = inst_12093;var inst_12075 = inst_12092;var inst_12076 = inst_12094;var inst_12077 = 0;var state_12117__$1 = (function (){var statearr_12144 = state_12117;(statearr_12144[8] = inst_12077);
(statearr_12144[9] = inst_12075);
(statearr_12144[10] = inst_12076);
(statearr_12144[11] = inst_12074);
return statearr_12144;
})();var statearr_12145_12173 = state_12117__$1;(statearr_12145_12173[2] = null);
(statearr_12145_12173[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 18))
{var inst_12088 = (state_12117[13]);var inst_12097 = cljs.core.first.call(null,inst_12088);var state_12117__$1 = state_12117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12117__$1,20,out,inst_12097);
} else
{if((state_val_12118 === 19))
{var inst_12103 = (state_12117[2]);var state_12117__$1 = state_12117;var statearr_12146_12174 = state_12117__$1;(statearr_12146_12174[2] = inst_12103);
(statearr_12146_12174[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12118 === 20))
{var inst_12088 = (state_12117[13]);var inst_12099 = (state_12117[2]);var inst_12100 = cljs.core.next.call(null,inst_12088);var inst_12074 = inst_12100;var inst_12075 = null;var inst_12076 = 0;var inst_12077 = 0;var state_12117__$1 = (function (){var statearr_12147 = state_12117;(statearr_12147[8] = inst_12077);
(statearr_12147[9] = inst_12075);
(statearr_12147[10] = inst_12076);
(statearr_12147[11] = inst_12074);
(statearr_12147[15] = inst_12099);
return statearr_12147;
})();var statearr_12148_12175 = state_12117__$1;(statearr_12148_12175[2] = null);
(statearr_12148_12175[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12152 = (new Array(16));(statearr_12152[0] = state_machine__8463__auto__);
(statearr_12152[1] = 1);
return statearr_12152;
});
var state_machine__8463__auto____1 = (function (state_12117){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12117);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12153){if((e12153 instanceof Object))
{var ex__8466__auto__ = e12153;var statearr_12154_12176 = state_12117;(statearr_12154_12176[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12177 = state_12117;
state_12117 = G__12177;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12117){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12155 = f__8625__auto__.call(null);(statearr_12155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto__);
return statearr_12155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return c__8624__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8624__auto___12258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12237){var state_val_12238 = (state_12237[1]);if((state_val_12238 === 1))
{var state_12237__$1 = state_12237;var statearr_12239_12259 = state_12237__$1;(statearr_12239_12259[2] = null);
(statearr_12239_12259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 2))
{var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,4,from);
} else
{if((state_val_12238 === 3))
{var inst_12235 = (state_12237[2]);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12237__$1,inst_12235);
} else
{if((state_val_12238 === 4))
{var inst_12220 = (state_12237[7]);var inst_12220__$1 = (state_12237[2]);var inst_12221 = (inst_12220__$1 == null);var state_12237__$1 = (function (){var statearr_12240 = state_12237;(statearr_12240[7] = inst_12220__$1);
return statearr_12240;
})();if(cljs.core.truth_(inst_12221))
{var statearr_12241_12260 = state_12237__$1;(statearr_12241_12260[1] = 5);
} else
{var statearr_12242_12261 = state_12237__$1;(statearr_12242_12261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 5))
{var state_12237__$1 = state_12237;if(cljs.core.truth_(close_QMARK_))
{var statearr_12243_12262 = state_12237__$1;(statearr_12243_12262[1] = 8);
} else
{var statearr_12244_12263 = state_12237__$1;(statearr_12244_12263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 6))
{var inst_12220 = (state_12237[7]);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12237__$1,11,to,inst_12220);
} else
{if((state_val_12238 === 7))
{var inst_12233 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12245_12264 = state_12237__$1;(statearr_12245_12264[2] = inst_12233);
(statearr_12245_12264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 8))
{var inst_12224 = cljs.core.async.close_BANG_.call(null,to);var state_12237__$1 = state_12237;var statearr_12246_12265 = state_12237__$1;(statearr_12246_12265[2] = inst_12224);
(statearr_12246_12265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 9))
{var state_12237__$1 = state_12237;var statearr_12247_12266 = state_12237__$1;(statearr_12247_12266[2] = null);
(statearr_12247_12266[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 10))
{var inst_12227 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12248_12267 = state_12237__$1;(statearr_12248_12267[2] = inst_12227);
(statearr_12248_12267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 11))
{var inst_12230 = (state_12237[2]);var state_12237__$1 = (function (){var statearr_12249 = state_12237;(statearr_12249[8] = inst_12230);
return statearr_12249;
})();var statearr_12250_12268 = state_12237__$1;(statearr_12250_12268[2] = null);
(statearr_12250_12268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12254 = (new Array(9));(statearr_12254[0] = state_machine__8463__auto__);
(statearr_12254[1] = 1);
return statearr_12254;
});
var state_machine__8463__auto____1 = (function (state_12237){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12237);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12255){if((e12255 instanceof Object))
{var ex__8466__auto__ = e12255;var statearr_12256_12269 = state_12237;(statearr_12256_12269[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12270 = state_12237;
state_12237 = G__12270;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12237){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12257 = f__8625__auto__.call(null);(statearr_12257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___12258);
return statearr_12257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8624__auto___12357 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12335){var state_val_12336 = (state_12335[1]);if((state_val_12336 === 1))
{var state_12335__$1 = state_12335;var statearr_12337_12358 = state_12335__$1;(statearr_12337_12358[2] = null);
(statearr_12337_12358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 2))
{var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12335__$1,4,ch);
} else
{if((state_val_12336 === 3))
{var inst_12333 = (state_12335[2]);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12335__$1,inst_12333);
} else
{if((state_val_12336 === 4))
{var inst_12316 = (state_12335[7]);var inst_12316__$1 = (state_12335[2]);var inst_12317 = (inst_12316__$1 == null);var state_12335__$1 = (function (){var statearr_12338 = state_12335;(statearr_12338[7] = inst_12316__$1);
return statearr_12338;
})();if(cljs.core.truth_(inst_12317))
{var statearr_12339_12359 = state_12335__$1;(statearr_12339_12359[1] = 5);
} else
{var statearr_12340_12360 = state_12335__$1;(statearr_12340_12360[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 5))
{var inst_12319 = cljs.core.async.close_BANG_.call(null,tc);var inst_12320 = cljs.core.async.close_BANG_.call(null,fc);var state_12335__$1 = (function (){var statearr_12341 = state_12335;(statearr_12341[8] = inst_12319);
return statearr_12341;
})();var statearr_12342_12361 = state_12335__$1;(statearr_12342_12361[2] = inst_12320);
(statearr_12342_12361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 6))
{var inst_12316 = (state_12335[7]);var inst_12322 = p.call(null,inst_12316);var state_12335__$1 = state_12335;if(cljs.core.truth_(inst_12322))
{var statearr_12343_12362 = state_12335__$1;(statearr_12343_12362[1] = 9);
} else
{var statearr_12344_12363 = state_12335__$1;(statearr_12344_12363[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 7))
{var inst_12331 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12345_12364 = state_12335__$1;(statearr_12345_12364[2] = inst_12331);
(statearr_12345_12364[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 8))
{var inst_12328 = (state_12335[2]);var state_12335__$1 = (function (){var statearr_12346 = state_12335;(statearr_12346[9] = inst_12328);
return statearr_12346;
})();var statearr_12347_12365 = state_12335__$1;(statearr_12347_12365[2] = null);
(statearr_12347_12365[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 9))
{var state_12335__$1 = state_12335;var statearr_12348_12366 = state_12335__$1;(statearr_12348_12366[2] = tc);
(statearr_12348_12366[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 10))
{var state_12335__$1 = state_12335;var statearr_12349_12367 = state_12335__$1;(statearr_12349_12367[2] = fc);
(statearr_12349_12367[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 11))
{var inst_12316 = (state_12335[7]);var inst_12326 = (state_12335[2]);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12335__$1,8,inst_12326,inst_12316);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12353 = (new Array(10));(statearr_12353[0] = state_machine__8463__auto__);
(statearr_12353[1] = 1);
return statearr_12353;
});
var state_machine__8463__auto____1 = (function (state_12335){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12335);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12354){if((e12354 instanceof Object))
{var ex__8466__auto__ = e12354;var statearr_12355_12368 = state_12335;(statearr_12355_12368[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12369 = state_12335;
state_12335 = G__12369;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12335){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12356 = f__8625__auto__.call(null);(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___12357);
return statearr_12356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8624__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12416){var state_val_12417 = (state_12416[1]);if((state_val_12417 === 7))
{var inst_12412 = (state_12416[2]);var state_12416__$1 = state_12416;var statearr_12418_12434 = state_12416__$1;(statearr_12418_12434[2] = inst_12412);
(statearr_12418_12434[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 6))
{var inst_12402 = (state_12416[7]);var inst_12405 = (state_12416[8]);var inst_12409 = f.call(null,inst_12402,inst_12405);var inst_12402__$1 = inst_12409;var state_12416__$1 = (function (){var statearr_12419 = state_12416;(statearr_12419[7] = inst_12402__$1);
return statearr_12419;
})();var statearr_12420_12435 = state_12416__$1;(statearr_12420_12435[2] = null);
(statearr_12420_12435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 5))
{var inst_12402 = (state_12416[7]);var state_12416__$1 = state_12416;var statearr_12421_12436 = state_12416__$1;(statearr_12421_12436[2] = inst_12402);
(statearr_12421_12436[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 4))
{var inst_12405 = (state_12416[8]);var inst_12405__$1 = (state_12416[2]);var inst_12406 = (inst_12405__$1 == null);var state_12416__$1 = (function (){var statearr_12422 = state_12416;(statearr_12422[8] = inst_12405__$1);
return statearr_12422;
})();if(cljs.core.truth_(inst_12406))
{var statearr_12423_12437 = state_12416__$1;(statearr_12423_12437[1] = 5);
} else
{var statearr_12424_12438 = state_12416__$1;(statearr_12424_12438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12417 === 3))
{var inst_12414 = (state_12416[2]);var state_12416__$1 = state_12416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12416__$1,inst_12414);
} else
{if((state_val_12417 === 2))
{var state_12416__$1 = state_12416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12416__$1,4,ch);
} else
{if((state_val_12417 === 1))
{var inst_12402 = init;var state_12416__$1 = (function (){var statearr_12425 = state_12416;(statearr_12425[7] = inst_12402);
return statearr_12425;
})();var statearr_12426_12439 = state_12416__$1;(statearr_12426_12439[2] = null);
(statearr_12426_12439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12430 = (new Array(9));(statearr_12430[0] = state_machine__8463__auto__);
(statearr_12430[1] = 1);
return statearr_12430;
});
var state_machine__8463__auto____1 = (function (state_12416){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12416);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12431){if((e12431 instanceof Object))
{var ex__8466__auto__ = e12431;var statearr_12432_12440 = state_12416;(statearr_12432_12440[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12441 = state_12416;
state_12416 = G__12441;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12416){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12433 = f__8625__auto__.call(null);(statearr_12433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto__);
return statearr_12433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return c__8624__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8624__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12503){var state_val_12504 = (state_12503[1]);if((state_val_12504 === 1))
{var inst_12483 = cljs.core.seq.call(null,coll);var inst_12484 = inst_12483;var state_12503__$1 = (function (){var statearr_12505 = state_12503;(statearr_12505[7] = inst_12484);
return statearr_12505;
})();var statearr_12506_12524 = state_12503__$1;(statearr_12506_12524[2] = null);
(statearr_12506_12524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 2))
{var inst_12484 = (state_12503[7]);var state_12503__$1 = state_12503;if(cljs.core.truth_(inst_12484))
{var statearr_12507_12525 = state_12503__$1;(statearr_12507_12525[1] = 4);
} else
{var statearr_12508_12526 = state_12503__$1;(statearr_12508_12526[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 3))
{var inst_12501 = (state_12503[2]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else
{if((state_val_12504 === 4))
{var inst_12484 = (state_12503[7]);var inst_12487 = cljs.core.first.call(null,inst_12484);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,7,ch,inst_12487);
} else
{if((state_val_12504 === 5))
{var state_12503__$1 = state_12503;if(cljs.core.truth_(close_QMARK_))
{var statearr_12509_12527 = state_12503__$1;(statearr_12509_12527[1] = 8);
} else
{var statearr_12510_12528 = state_12503__$1;(statearr_12510_12528[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 6))
{var inst_12499 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12511_12529 = state_12503__$1;(statearr_12511_12529[2] = inst_12499);
(statearr_12511_12529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 7))
{var inst_12484 = (state_12503[7]);var inst_12489 = (state_12503[2]);var inst_12490 = cljs.core.next.call(null,inst_12484);var inst_12484__$1 = inst_12490;var state_12503__$1 = (function (){var statearr_12512 = state_12503;(statearr_12512[7] = inst_12484__$1);
(statearr_12512[8] = inst_12489);
return statearr_12512;
})();var statearr_12513_12530 = state_12503__$1;(statearr_12513_12530[2] = null);
(statearr_12513_12530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 8))
{var inst_12494 = cljs.core.async.close_BANG_.call(null,ch);var state_12503__$1 = state_12503;var statearr_12514_12531 = state_12503__$1;(statearr_12514_12531[2] = inst_12494);
(statearr_12514_12531[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 9))
{var state_12503__$1 = state_12503;var statearr_12515_12532 = state_12503__$1;(statearr_12515_12532[2] = null);
(statearr_12515_12532[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 10))
{var inst_12497 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12516_12533 = state_12503__$1;(statearr_12516_12533[2] = inst_12497);
(statearr_12516_12533[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12520 = (new Array(9));(statearr_12520[0] = state_machine__8463__auto__);
(statearr_12520[1] = 1);
return statearr_12520;
});
var state_machine__8463__auto____1 = (function (state_12503){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12503);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12521){if((e12521 instanceof Object))
{var ex__8466__auto__ = e12521;var statearr_12522_12534 = state_12503;(statearr_12522_12534[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12535 = state_12503;
state_12503 = G__12535;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12523 = f__8625__auto__.call(null);(statearr_12523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto__);
return statearr_12523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return c__8624__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4358__auto__ = _;if(and__4358__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4358__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4962__auto__ = (((_ == null))?null:_);return (function (){var or__4367__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12750 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12750');

/**
* @constructor
*/
cljs.core.async.t12750 = (function (cs,ch,mult,meta12751){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12751 = meta12751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12750.cljs$lang$type = true;
cljs.core.async.t12750.cljs$lang$ctorStr = "cljs.core.async/t12750";
cljs.core.async.t12750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t12750");
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12752){var self__ = this;
var _12752__$1 = this;return self__.meta12751;
});})(cs))
;
cljs.core.async.t12750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12752,meta12751__$1){var self__ = this;
var _12752__$1 = this;return (new cljs.core.async.t12750(self__.cs,self__.ch,self__.mult,meta12751__$1));
});})(cs))
;
cljs.core.async.__GT_t12750 = ((function (cs){
return (function __GT_t12750(cs__$1,ch__$1,mult__$1,meta12751){return (new cljs.core.async.t12750(cs__$1,ch__$1,mult__$1,meta12751));
});})(cs))
;
}
return (new cljs.core.async.t12750(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8624__auto___12964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_12882){var state_val_12883 = (state_12882[1]);if((state_val_12883 === 32))
{var inst_12831 = (state_12882[7]);var inst_12755 = (state_12882[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12882,31,Object,null,30);var inst_12838 = cljs.core.async.put_BANG_.call(null,inst_12831,inst_12755,done);var state_12882__$1 = state_12882;var statearr_12884_12965 = state_12882__$1;(statearr_12884_12965[2] = inst_12838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 1))
{var state_12882__$1 = state_12882;var statearr_12885_12966 = state_12882__$1;(statearr_12885_12966[2] = null);
(statearr_12885_12966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 33))
{var inst_12844 = (state_12882[9]);var inst_12846 = cljs.core.chunked_seq_QMARK_.call(null,inst_12844);var state_12882__$1 = state_12882;if(inst_12846)
{var statearr_12886_12967 = state_12882__$1;(statearr_12886_12967[1] = 36);
} else
{var statearr_12887_12968 = state_12882__$1;(statearr_12887_12968[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 2))
{var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12882__$1,4,ch);
} else
{if((state_val_12883 === 34))
{var state_12882__$1 = state_12882;var statearr_12888_12969 = state_12882__$1;(statearr_12888_12969[2] = null);
(statearr_12888_12969[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 3))
{var inst_12880 = (state_12882[2]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12882__$1,inst_12880);
} else
{if((state_val_12883 === 35))
{var inst_12869 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12889_12970 = state_12882__$1;(statearr_12889_12970[2] = inst_12869);
(statearr_12889_12970[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 4))
{var inst_12755 = (state_12882[8]);var inst_12755__$1 = (state_12882[2]);var inst_12756 = (inst_12755__$1 == null);var state_12882__$1 = (function (){var statearr_12890 = state_12882;(statearr_12890[8] = inst_12755__$1);
return statearr_12890;
})();if(cljs.core.truth_(inst_12756))
{var statearr_12891_12971 = state_12882__$1;(statearr_12891_12971[1] = 5);
} else
{var statearr_12892_12972 = state_12882__$1;(statearr_12892_12972[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 36))
{var inst_12844 = (state_12882[9]);var inst_12848 = cljs.core.chunk_first.call(null,inst_12844);var inst_12849 = cljs.core.chunk_rest.call(null,inst_12844);var inst_12850 = cljs.core.count.call(null,inst_12848);var inst_12823 = inst_12849;var inst_12824 = inst_12848;var inst_12825 = inst_12850;var inst_12826 = 0;var state_12882__$1 = (function (){var statearr_12893 = state_12882;(statearr_12893[10] = inst_12823);
(statearr_12893[11] = inst_12825);
(statearr_12893[12] = inst_12824);
(statearr_12893[13] = inst_12826);
return statearr_12893;
})();var statearr_12894_12973 = state_12882__$1;(statearr_12894_12973[2] = null);
(statearr_12894_12973[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 5))
{var inst_12762 = cljs.core.deref.call(null,cs);var inst_12763 = cljs.core.seq.call(null,inst_12762);var inst_12764 = inst_12763;var inst_12765 = null;var inst_12766 = 0;var inst_12767 = 0;var state_12882__$1 = (function (){var statearr_12895 = state_12882;(statearr_12895[14] = inst_12765);
(statearr_12895[15] = inst_12766);
(statearr_12895[16] = inst_12767);
(statearr_12895[17] = inst_12764);
return statearr_12895;
})();var statearr_12896_12974 = state_12882__$1;(statearr_12896_12974[2] = null);
(statearr_12896_12974[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 37))
{var inst_12844 = (state_12882[9]);var inst_12853 = cljs.core.first.call(null,inst_12844);var state_12882__$1 = (function (){var statearr_12897 = state_12882;(statearr_12897[18] = inst_12853);
return statearr_12897;
})();var statearr_12898_12975 = state_12882__$1;(statearr_12898_12975[2] = null);
(statearr_12898_12975[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 6))
{var inst_12814 = cljs.core.deref.call(null,cs);var inst_12815 = cljs.core.keys.call(null,inst_12814);var inst_12816 = cljs.core.count.call(null,inst_12815);var inst_12817 = cljs.core.reset_BANG_.call(null,dctr,inst_12816);var inst_12822 = cljs.core.seq.call(null,inst_12815);var inst_12823 = inst_12822;var inst_12824 = null;var inst_12825 = 0;var inst_12826 = 0;var state_12882__$1 = (function (){var statearr_12899 = state_12882;(statearr_12899[10] = inst_12823);
(statearr_12899[19] = inst_12817);
(statearr_12899[11] = inst_12825);
(statearr_12899[12] = inst_12824);
(statearr_12899[13] = inst_12826);
return statearr_12899;
})();var statearr_12900_12976 = state_12882__$1;(statearr_12900_12976[2] = null);
(statearr_12900_12976[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 38))
{var inst_12866 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12901_12977 = state_12882__$1;(statearr_12901_12977[2] = inst_12866);
(statearr_12901_12977[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 7))
{var inst_12878 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12902_12978 = state_12882__$1;(statearr_12902_12978[2] = inst_12878);
(statearr_12902_12978[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 39))
{var inst_12844 = (state_12882[9]);var inst_12862 = (state_12882[2]);var inst_12863 = cljs.core.next.call(null,inst_12844);var inst_12823 = inst_12863;var inst_12824 = null;var inst_12825 = 0;var inst_12826 = 0;var state_12882__$1 = (function (){var statearr_12903 = state_12882;(statearr_12903[10] = inst_12823);
(statearr_12903[20] = inst_12862);
(statearr_12903[11] = inst_12825);
(statearr_12903[12] = inst_12824);
(statearr_12903[13] = inst_12826);
return statearr_12903;
})();var statearr_12904_12979 = state_12882__$1;(statearr_12904_12979[2] = null);
(statearr_12904_12979[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 8))
{var inst_12766 = (state_12882[15]);var inst_12767 = (state_12882[16]);var inst_12769 = (inst_12767 < inst_12766);var inst_12770 = inst_12769;var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12770))
{var statearr_12905_12980 = state_12882__$1;(statearr_12905_12980[1] = 10);
} else
{var statearr_12906_12981 = state_12882__$1;(statearr_12906_12981[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 40))
{var inst_12853 = (state_12882[18]);var inst_12854 = (state_12882[2]);var inst_12855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12856 = cljs.core.async.untap_STAR_.call(null,m,inst_12853);var state_12882__$1 = (function (){var statearr_12907 = state_12882;(statearr_12907[21] = inst_12854);
(statearr_12907[22] = inst_12855);
return statearr_12907;
})();var statearr_12908_12982 = state_12882__$1;(statearr_12908_12982[2] = inst_12856);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 9))
{var inst_12812 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12909_12983 = state_12882__$1;(statearr_12909_12983[2] = inst_12812);
(statearr_12909_12983[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 41))
{var inst_12853 = (state_12882[18]);var inst_12755 = (state_12882[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12882,40,Object,null,39);var inst_12860 = cljs.core.async.put_BANG_.call(null,inst_12853,inst_12755,done);var state_12882__$1 = state_12882;var statearr_12910_12984 = state_12882__$1;(statearr_12910_12984[2] = inst_12860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 10))
{var inst_12765 = (state_12882[14]);var inst_12767 = (state_12882[16]);var inst_12773 = cljs.core._nth.call(null,inst_12765,inst_12767);var inst_12774 = cljs.core.nth.call(null,inst_12773,0,null);var inst_12775 = cljs.core.nth.call(null,inst_12773,1,null);var state_12882__$1 = (function (){var statearr_12911 = state_12882;(statearr_12911[23] = inst_12774);
return statearr_12911;
})();if(cljs.core.truth_(inst_12775))
{var statearr_12912_12985 = state_12882__$1;(statearr_12912_12985[1] = 13);
} else
{var statearr_12913_12986 = state_12882__$1;(statearr_12913_12986[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 42))
{var inst_12875 = (state_12882[2]);var state_12882__$1 = (function (){var statearr_12914 = state_12882;(statearr_12914[24] = inst_12875);
return statearr_12914;
})();var statearr_12915_12987 = state_12882__$1;(statearr_12915_12987[2] = null);
(statearr_12915_12987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 11))
{var inst_12784 = (state_12882[25]);var inst_12764 = (state_12882[17]);var inst_12784__$1 = cljs.core.seq.call(null,inst_12764);var state_12882__$1 = (function (){var statearr_12916 = state_12882;(statearr_12916[25] = inst_12784__$1);
return statearr_12916;
})();if(inst_12784__$1)
{var statearr_12917_12988 = state_12882__$1;(statearr_12917_12988[1] = 16);
} else
{var statearr_12918_12989 = state_12882__$1;(statearr_12918_12989[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 12))
{var inst_12810 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12919_12990 = state_12882__$1;(statearr_12919_12990[2] = inst_12810);
(statearr_12919_12990[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 13))
{var inst_12774 = (state_12882[23]);var inst_12777 = cljs.core.async.close_BANG_.call(null,inst_12774);var state_12882__$1 = state_12882;var statearr_12923_12991 = state_12882__$1;(statearr_12923_12991[2] = inst_12777);
(statearr_12923_12991[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 14))
{var state_12882__$1 = state_12882;var statearr_12924_12992 = state_12882__$1;(statearr_12924_12992[2] = null);
(statearr_12924_12992[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 15))
{var inst_12765 = (state_12882[14]);var inst_12766 = (state_12882[15]);var inst_12767 = (state_12882[16]);var inst_12764 = (state_12882[17]);var inst_12780 = (state_12882[2]);var inst_12781 = (inst_12767 + 1);var tmp12920 = inst_12765;var tmp12921 = inst_12766;var tmp12922 = inst_12764;var inst_12764__$1 = tmp12922;var inst_12765__$1 = tmp12920;var inst_12766__$1 = tmp12921;var inst_12767__$1 = inst_12781;var state_12882__$1 = (function (){var statearr_12925 = state_12882;(statearr_12925[26] = inst_12780);
(statearr_12925[14] = inst_12765__$1);
(statearr_12925[15] = inst_12766__$1);
(statearr_12925[16] = inst_12767__$1);
(statearr_12925[17] = inst_12764__$1);
return statearr_12925;
})();var statearr_12926_12993 = state_12882__$1;(statearr_12926_12993[2] = null);
(statearr_12926_12993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 16))
{var inst_12784 = (state_12882[25]);var inst_12786 = cljs.core.chunked_seq_QMARK_.call(null,inst_12784);var state_12882__$1 = state_12882;if(inst_12786)
{var statearr_12927_12994 = state_12882__$1;(statearr_12927_12994[1] = 19);
} else
{var statearr_12928_12995 = state_12882__$1;(statearr_12928_12995[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 17))
{var state_12882__$1 = state_12882;var statearr_12929_12996 = state_12882__$1;(statearr_12929_12996[2] = null);
(statearr_12929_12996[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 18))
{var inst_12808 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12930_12997 = state_12882__$1;(statearr_12930_12997[2] = inst_12808);
(statearr_12930_12997[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 19))
{var inst_12784 = (state_12882[25]);var inst_12788 = cljs.core.chunk_first.call(null,inst_12784);var inst_12789 = cljs.core.chunk_rest.call(null,inst_12784);var inst_12790 = cljs.core.count.call(null,inst_12788);var inst_12764 = inst_12789;var inst_12765 = inst_12788;var inst_12766 = inst_12790;var inst_12767 = 0;var state_12882__$1 = (function (){var statearr_12931 = state_12882;(statearr_12931[14] = inst_12765);
(statearr_12931[15] = inst_12766);
(statearr_12931[16] = inst_12767);
(statearr_12931[17] = inst_12764);
return statearr_12931;
})();var statearr_12932_12998 = state_12882__$1;(statearr_12932_12998[2] = null);
(statearr_12932_12998[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 20))
{var inst_12784 = (state_12882[25]);var inst_12794 = cljs.core.first.call(null,inst_12784);var inst_12795 = cljs.core.nth.call(null,inst_12794,0,null);var inst_12796 = cljs.core.nth.call(null,inst_12794,1,null);var state_12882__$1 = (function (){var statearr_12933 = state_12882;(statearr_12933[27] = inst_12795);
return statearr_12933;
})();if(cljs.core.truth_(inst_12796))
{var statearr_12934_12999 = state_12882__$1;(statearr_12934_12999[1] = 22);
} else
{var statearr_12935_13000 = state_12882__$1;(statearr_12935_13000[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 21))
{var inst_12805 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12936_13001 = state_12882__$1;(statearr_12936_13001[2] = inst_12805);
(statearr_12936_13001[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 22))
{var inst_12795 = (state_12882[27]);var inst_12798 = cljs.core.async.close_BANG_.call(null,inst_12795);var state_12882__$1 = state_12882;var statearr_12937_13002 = state_12882__$1;(statearr_12937_13002[2] = inst_12798);
(statearr_12937_13002[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 23))
{var state_12882__$1 = state_12882;var statearr_12938_13003 = state_12882__$1;(statearr_12938_13003[2] = null);
(statearr_12938_13003[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 24))
{var inst_12784 = (state_12882[25]);var inst_12801 = (state_12882[2]);var inst_12802 = cljs.core.next.call(null,inst_12784);var inst_12764 = inst_12802;var inst_12765 = null;var inst_12766 = 0;var inst_12767 = 0;var state_12882__$1 = (function (){var statearr_12939 = state_12882;(statearr_12939[14] = inst_12765);
(statearr_12939[15] = inst_12766);
(statearr_12939[16] = inst_12767);
(statearr_12939[28] = inst_12801);
(statearr_12939[17] = inst_12764);
return statearr_12939;
})();var statearr_12940_13004 = state_12882__$1;(statearr_12940_13004[2] = null);
(statearr_12940_13004[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 25))
{var inst_12825 = (state_12882[11]);var inst_12826 = (state_12882[13]);var inst_12828 = (inst_12826 < inst_12825);var inst_12829 = inst_12828;var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12829))
{var statearr_12941_13005 = state_12882__$1;(statearr_12941_13005[1] = 27);
} else
{var statearr_12942_13006 = state_12882__$1;(statearr_12942_13006[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 26))
{var inst_12873 = (state_12882[2]);var state_12882__$1 = (function (){var statearr_12943 = state_12882;(statearr_12943[29] = inst_12873);
return statearr_12943;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12882__$1,42,dchan);
} else
{if((state_val_12883 === 27))
{var inst_12824 = (state_12882[12]);var inst_12826 = (state_12882[13]);var inst_12831 = cljs.core._nth.call(null,inst_12824,inst_12826);var state_12882__$1 = (function (){var statearr_12944 = state_12882;(statearr_12944[7] = inst_12831);
return statearr_12944;
})();var statearr_12945_13007 = state_12882__$1;(statearr_12945_13007[2] = null);
(statearr_12945_13007[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 28))
{var inst_12823 = (state_12882[10]);var inst_12844 = (state_12882[9]);var inst_12844__$1 = cljs.core.seq.call(null,inst_12823);var state_12882__$1 = (function (){var statearr_12949 = state_12882;(statearr_12949[9] = inst_12844__$1);
return statearr_12949;
})();if(inst_12844__$1)
{var statearr_12950_13008 = state_12882__$1;(statearr_12950_13008[1] = 33);
} else
{var statearr_12951_13009 = state_12882__$1;(statearr_12951_13009[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 29))
{var inst_12871 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12952_13010 = state_12882__$1;(statearr_12952_13010[2] = inst_12871);
(statearr_12952_13010[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 30))
{var inst_12823 = (state_12882[10]);var inst_12825 = (state_12882[11]);var inst_12824 = (state_12882[12]);var inst_12826 = (state_12882[13]);var inst_12840 = (state_12882[2]);var inst_12841 = (inst_12826 + 1);var tmp12946 = inst_12823;var tmp12947 = inst_12825;var tmp12948 = inst_12824;var inst_12823__$1 = tmp12946;var inst_12824__$1 = tmp12948;var inst_12825__$1 = tmp12947;var inst_12826__$1 = inst_12841;var state_12882__$1 = (function (){var statearr_12953 = state_12882;(statearr_12953[10] = inst_12823__$1);
(statearr_12953[11] = inst_12825__$1);
(statearr_12953[12] = inst_12824__$1);
(statearr_12953[13] = inst_12826__$1);
(statearr_12953[30] = inst_12840);
return statearr_12953;
})();var statearr_12954_13011 = state_12882__$1;(statearr_12954_13011[2] = null);
(statearr_12954_13011[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 31))
{var inst_12831 = (state_12882[7]);var inst_12832 = (state_12882[2]);var inst_12833 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12834 = cljs.core.async.untap_STAR_.call(null,m,inst_12831);var state_12882__$1 = (function (){var statearr_12955 = state_12882;(statearr_12955[31] = inst_12832);
(statearr_12955[32] = inst_12833);
return statearr_12955;
})();var statearr_12956_13012 = state_12882__$1;(statearr_12956_13012[2] = inst_12834);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_12960 = (new Array(33));(statearr_12960[0] = state_machine__8463__auto__);
(statearr_12960[1] = 1);
return statearr_12960;
});
var state_machine__8463__auto____1 = (function (state_12882){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_12882);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e12961){if((e12961 instanceof Object))
{var ex__8466__auto__ = e12961;var statearr_12962_13013 = state_12882;(statearr_12962_13013[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13014 = state_12882;
state_12882 = G__13014;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_12963 = f__8625__auto__.call(null);(statearr_12963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___12964);
return statearr_12963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4358__auto__ = m;if(and__4358__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4962__auto__ = (((m == null))?null:m);return (function (){var or__4367__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13124 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13124');

/**
* @constructor
*/
cljs.core.async.t13124 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13125){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13125 = meta13125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13124.cljs$lang$type = true;
cljs.core.async.t13124.cljs$lang$ctorStr = "cljs.core.async/t13124";
cljs.core.async.t13124.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t13124");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13126){var self__ = this;
var _13126__$1 = this;return self__.meta13125;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13126,meta13125__$1){var self__ = this;
var _13126__$1 = this;return (new cljs.core.async.t13124(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13125__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13124 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13124(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13125){return (new cljs.core.async.t13124(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13125));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13124(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8624__auto___13233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13191){var state_val_13192 = (state_13191[1]);if((state_val_13192 === 1))
{var inst_13130 = (state_13191[7]);var inst_13130__$1 = calc_state.call(null);var inst_13131 = cljs.core.seq_QMARK_.call(null,inst_13130__$1);var state_13191__$1 = (function (){var statearr_13193 = state_13191;(statearr_13193[7] = inst_13130__$1);
return statearr_13193;
})();if(inst_13131)
{var statearr_13194_13234 = state_13191__$1;(statearr_13194_13234[1] = 2);
} else
{var statearr_13195_13235 = state_13191__$1;(statearr_13195_13235[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 2))
{var inst_13130 = (state_13191[7]);var inst_13133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13130);var state_13191__$1 = state_13191;var statearr_13196_13236 = state_13191__$1;(statearr_13196_13236[2] = inst_13133);
(statearr_13196_13236[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 3))
{var inst_13130 = (state_13191[7]);var state_13191__$1 = state_13191;var statearr_13197_13237 = state_13191__$1;(statearr_13197_13237[2] = inst_13130);
(statearr_13197_13237[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 4))
{var inst_13130 = (state_13191[7]);var inst_13136 = (state_13191[2]);var inst_13137 = cljs.core.get.call(null,inst_13136,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13138 = cljs.core.get.call(null,inst_13136,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13139 = cljs.core.get.call(null,inst_13136,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13140 = inst_13130;var state_13191__$1 = (function (){var statearr_13198 = state_13191;(statearr_13198[8] = inst_13139);
(statearr_13198[9] = inst_13138);
(statearr_13198[10] = inst_13137);
(statearr_13198[11] = inst_13140);
return statearr_13198;
})();var statearr_13199_13238 = state_13191__$1;(statearr_13199_13238[2] = null);
(statearr_13199_13238[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 5))
{var inst_13140 = (state_13191[11]);var inst_13143 = cljs.core.seq_QMARK_.call(null,inst_13140);var state_13191__$1 = state_13191;if(inst_13143)
{var statearr_13200_13239 = state_13191__$1;(statearr_13200_13239[1] = 7);
} else
{var statearr_13201_13240 = state_13191__$1;(statearr_13201_13240[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 6))
{var inst_13189 = (state_13191[2]);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13191__$1,inst_13189);
} else
{if((state_val_13192 === 7))
{var inst_13140 = (state_13191[11]);var inst_13145 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13140);var state_13191__$1 = state_13191;var statearr_13202_13241 = state_13191__$1;(statearr_13202_13241[2] = inst_13145);
(statearr_13202_13241[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 8))
{var inst_13140 = (state_13191[11]);var state_13191__$1 = state_13191;var statearr_13203_13242 = state_13191__$1;(statearr_13203_13242[2] = inst_13140);
(statearr_13203_13242[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 9))
{var inst_13148 = (state_13191[12]);var inst_13148__$1 = (state_13191[2]);var inst_13149 = cljs.core.get.call(null,inst_13148__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13150 = cljs.core.get.call(null,inst_13148__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13151 = cljs.core.get.call(null,inst_13148__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13191__$1 = (function (){var statearr_13204 = state_13191;(statearr_13204[13] = inst_13150);
(statearr_13204[14] = inst_13151);
(statearr_13204[12] = inst_13148__$1);
return statearr_13204;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13191__$1,10,inst_13149);
} else
{if((state_val_13192 === 10))
{var inst_13155 = (state_13191[15]);var inst_13156 = (state_13191[16]);var inst_13154 = (state_13191[2]);var inst_13155__$1 = cljs.core.nth.call(null,inst_13154,0,null);var inst_13156__$1 = cljs.core.nth.call(null,inst_13154,1,null);var inst_13157 = (inst_13155__$1 == null);var inst_13158 = cljs.core._EQ_.call(null,inst_13156__$1,change);var inst_13159 = (inst_13157) || (inst_13158);var state_13191__$1 = (function (){var statearr_13205 = state_13191;(statearr_13205[15] = inst_13155__$1);
(statearr_13205[16] = inst_13156__$1);
return statearr_13205;
})();if(cljs.core.truth_(inst_13159))
{var statearr_13206_13243 = state_13191__$1;(statearr_13206_13243[1] = 11);
} else
{var statearr_13207_13244 = state_13191__$1;(statearr_13207_13244[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 11))
{var inst_13155 = (state_13191[15]);var inst_13161 = (inst_13155 == null);var state_13191__$1 = state_13191;if(cljs.core.truth_(inst_13161))
{var statearr_13208_13245 = state_13191__$1;(statearr_13208_13245[1] = 14);
} else
{var statearr_13209_13246 = state_13191__$1;(statearr_13209_13246[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 12))
{var inst_13156 = (state_13191[16]);var inst_13151 = (state_13191[14]);var inst_13170 = (state_13191[17]);var inst_13170__$1 = inst_13151.call(null,inst_13156);var state_13191__$1 = (function (){var statearr_13210 = state_13191;(statearr_13210[17] = inst_13170__$1);
return statearr_13210;
})();if(cljs.core.truth_(inst_13170__$1))
{var statearr_13211_13247 = state_13191__$1;(statearr_13211_13247[1] = 17);
} else
{var statearr_13212_13248 = state_13191__$1;(statearr_13212_13248[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 13))
{var inst_13187 = (state_13191[2]);var state_13191__$1 = state_13191;var statearr_13213_13249 = state_13191__$1;(statearr_13213_13249[2] = inst_13187);
(statearr_13213_13249[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 14))
{var inst_13156 = (state_13191[16]);var inst_13163 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13156);var state_13191__$1 = state_13191;var statearr_13214_13250 = state_13191__$1;(statearr_13214_13250[2] = inst_13163);
(statearr_13214_13250[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 15))
{var state_13191__$1 = state_13191;var statearr_13215_13251 = state_13191__$1;(statearr_13215_13251[2] = null);
(statearr_13215_13251[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 16))
{var inst_13166 = (state_13191[2]);var inst_13167 = calc_state.call(null);var inst_13140 = inst_13167;var state_13191__$1 = (function (){var statearr_13216 = state_13191;(statearr_13216[18] = inst_13166);
(statearr_13216[11] = inst_13140);
return statearr_13216;
})();var statearr_13217_13252 = state_13191__$1;(statearr_13217_13252[2] = null);
(statearr_13217_13252[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 17))
{var inst_13170 = (state_13191[17]);var state_13191__$1 = state_13191;var statearr_13218_13253 = state_13191__$1;(statearr_13218_13253[2] = inst_13170);
(statearr_13218_13253[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 18))
{var inst_13156 = (state_13191[16]);var inst_13150 = (state_13191[13]);var inst_13151 = (state_13191[14]);var inst_13173 = cljs.core.empty_QMARK_.call(null,inst_13151);var inst_13174 = inst_13150.call(null,inst_13156);var inst_13175 = cljs.core.not.call(null,inst_13174);var inst_13176 = (inst_13173) && (inst_13175);var state_13191__$1 = state_13191;var statearr_13219_13254 = state_13191__$1;(statearr_13219_13254[2] = inst_13176);
(statearr_13219_13254[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 19))
{var inst_13178 = (state_13191[2]);var state_13191__$1 = state_13191;if(cljs.core.truth_(inst_13178))
{var statearr_13220_13255 = state_13191__$1;(statearr_13220_13255[1] = 20);
} else
{var statearr_13221_13256 = state_13191__$1;(statearr_13221_13256[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 20))
{var inst_13155 = (state_13191[15]);var state_13191__$1 = state_13191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13191__$1,23,out,inst_13155);
} else
{if((state_val_13192 === 21))
{var state_13191__$1 = state_13191;var statearr_13222_13257 = state_13191__$1;(statearr_13222_13257[2] = null);
(statearr_13222_13257[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 22))
{var inst_13148 = (state_13191[12]);var inst_13184 = (state_13191[2]);var inst_13140 = inst_13148;var state_13191__$1 = (function (){var statearr_13223 = state_13191;(statearr_13223[11] = inst_13140);
(statearr_13223[19] = inst_13184);
return statearr_13223;
})();var statearr_13224_13258 = state_13191__$1;(statearr_13224_13258[2] = null);
(statearr_13224_13258[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13192 === 23))
{var inst_13181 = (state_13191[2]);var state_13191__$1 = state_13191;var statearr_13225_13259 = state_13191__$1;(statearr_13225_13259[2] = inst_13181);
(statearr_13225_13259[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_13229 = (new Array(20));(statearr_13229[0] = state_machine__8463__auto__);
(statearr_13229[1] = 1);
return statearr_13229;
});
var state_machine__8463__auto____1 = (function (state_13191){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13191);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e13230){if((e13230 instanceof Object))
{var ex__8466__auto__ = e13230;var statearr_13231_13260 = state_13191;(statearr_13231_13260[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13261 = state_13191;
state_13191 = G__13261;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13191){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_13232 = f__8625__auto__.call(null);(statearr_13232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___13233);
return statearr_13232;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4358__auto__ = p;if(and__4358__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4358__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4962__auto__ = (((p == null))?null:p);return (function (){var or__4367__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4358__auto__ = p;if(and__4358__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4358__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4962__auto__ = (((p == null))?null:p);return (function (){var or__4367__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4358__auto__ = p;if(and__4358__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4358__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4962__auto__ = (((p == null))?null:p);return (function (){var or__4367__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4358__auto__ = p;if(and__4358__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4358__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4962__auto__ = (((p == null))?null:p);return (function (){var or__4367__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4962__auto__)]);if(or__4367__auto__)
{return or__4367__auto__;
} else
{var or__4367__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4367__auto____$1)
{return or__4367__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4367__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4367__auto__))
{return or__4367__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4367__auto__,mults){
return (function (p1__13262_SHARP_){if(cljs.core.truth_(p1__13262_SHARP_.call(null,topic)))
{return p1__13262_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13262_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4367__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13387 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t13387');

/**
* @constructor
*/
cljs.core.async.t13387 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13388){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13388 = meta13388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13387.cljs$lang$type = true;
cljs.core.async.t13387.cljs$lang$ctorStr = "cljs.core.async/t13387";
cljs.core.async.t13387.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4903__auto__,writer__4904__auto__,opt__4905__auto__){return cljs.core._write.call(null,writer__4904__auto__,"cljs.core.async/t13387");
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13387.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13389){var self__ = this;
var _13389__$1 = this;return self__.meta13388;
});})(mults,ensure_mult))
;
cljs.core.async.t13387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13389,meta13388__$1){var self__ = this;
var _13389__$1 = this;return (new cljs.core.async.t13387(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13388__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13387 = ((function (mults,ensure_mult){
return (function __GT_t13387(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13388){return (new cljs.core.async.t13387(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13388));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13387(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8624__auto___13511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13463){var state_val_13464 = (state_13463[1]);if((state_val_13464 === 1))
{var state_13463__$1 = state_13463;var statearr_13465_13512 = state_13463__$1;(statearr_13465_13512[2] = null);
(statearr_13465_13512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 2))
{var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13463__$1,4,ch);
} else
{if((state_val_13464 === 3))
{var inst_13461 = (state_13463[2]);var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13463__$1,inst_13461);
} else
{if((state_val_13464 === 4))
{var inst_13392 = (state_13463[7]);var inst_13392__$1 = (state_13463[2]);var inst_13393 = (inst_13392__$1 == null);var state_13463__$1 = (function (){var statearr_13466 = state_13463;(statearr_13466[7] = inst_13392__$1);
return statearr_13466;
})();if(cljs.core.truth_(inst_13393))
{var statearr_13467_13513 = state_13463__$1;(statearr_13467_13513[1] = 5);
} else
{var statearr_13468_13514 = state_13463__$1;(statearr_13468_13514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 5))
{var inst_13399 = cljs.core.deref.call(null,mults);var inst_13400 = cljs.core.vals.call(null,inst_13399);var inst_13401 = cljs.core.seq.call(null,inst_13400);var inst_13402 = inst_13401;var inst_13403 = null;var inst_13404 = 0;var inst_13405 = 0;var state_13463__$1 = (function (){var statearr_13469 = state_13463;(statearr_13469[8] = inst_13402);
(statearr_13469[9] = inst_13403);
(statearr_13469[10] = inst_13404);
(statearr_13469[11] = inst_13405);
return statearr_13469;
})();var statearr_13470_13515 = state_13463__$1;(statearr_13470_13515[2] = null);
(statearr_13470_13515[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 6))
{var inst_13392 = (state_13463[7]);var inst_13442 = (state_13463[12]);var inst_13440 = (state_13463[13]);var inst_13440__$1 = topic_fn.call(null,inst_13392);var inst_13441 = cljs.core.deref.call(null,mults);var inst_13442__$1 = cljs.core.get.call(null,inst_13441,inst_13440__$1);var state_13463__$1 = (function (){var statearr_13471 = state_13463;(statearr_13471[12] = inst_13442__$1);
(statearr_13471[13] = inst_13440__$1);
return statearr_13471;
})();if(cljs.core.truth_(inst_13442__$1))
{var statearr_13472_13516 = state_13463__$1;(statearr_13472_13516[1] = 19);
} else
{var statearr_13473_13517 = state_13463__$1;(statearr_13473_13517[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 7))
{var inst_13459 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13474_13518 = state_13463__$1;(statearr_13474_13518[2] = inst_13459);
(statearr_13474_13518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 8))
{var inst_13404 = (state_13463[10]);var inst_13405 = (state_13463[11]);var inst_13407 = (inst_13405 < inst_13404);var inst_13408 = inst_13407;var state_13463__$1 = state_13463;if(cljs.core.truth_(inst_13408))
{var statearr_13478_13519 = state_13463__$1;(statearr_13478_13519[1] = 10);
} else
{var statearr_13479_13520 = state_13463__$1;(statearr_13479_13520[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 9))
{var inst_13438 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13480_13521 = state_13463__$1;(statearr_13480_13521[2] = inst_13438);
(statearr_13480_13521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 10))
{var inst_13402 = (state_13463[8]);var inst_13403 = (state_13463[9]);var inst_13404 = (state_13463[10]);var inst_13405 = (state_13463[11]);var inst_13410 = cljs.core._nth.call(null,inst_13403,inst_13405);var inst_13411 = cljs.core.async.muxch_STAR_.call(null,inst_13410);var inst_13412 = cljs.core.async.close_BANG_.call(null,inst_13411);var inst_13413 = (inst_13405 + 1);var tmp13475 = inst_13402;var tmp13476 = inst_13403;var tmp13477 = inst_13404;var inst_13402__$1 = tmp13475;var inst_13403__$1 = tmp13476;var inst_13404__$1 = tmp13477;var inst_13405__$1 = inst_13413;var state_13463__$1 = (function (){var statearr_13481 = state_13463;(statearr_13481[8] = inst_13402__$1);
(statearr_13481[9] = inst_13403__$1);
(statearr_13481[14] = inst_13412);
(statearr_13481[10] = inst_13404__$1);
(statearr_13481[11] = inst_13405__$1);
return statearr_13481;
})();var statearr_13482_13522 = state_13463__$1;(statearr_13482_13522[2] = null);
(statearr_13482_13522[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 11))
{var inst_13402 = (state_13463[8]);var inst_13416 = (state_13463[15]);var inst_13416__$1 = cljs.core.seq.call(null,inst_13402);var state_13463__$1 = (function (){var statearr_13483 = state_13463;(statearr_13483[15] = inst_13416__$1);
return statearr_13483;
})();if(inst_13416__$1)
{var statearr_13484_13523 = state_13463__$1;(statearr_13484_13523[1] = 13);
} else
{var statearr_13485_13524 = state_13463__$1;(statearr_13485_13524[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 12))
{var inst_13436 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13486_13525 = state_13463__$1;(statearr_13486_13525[2] = inst_13436);
(statearr_13486_13525[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 13))
{var inst_13416 = (state_13463[15]);var inst_13418 = cljs.core.chunked_seq_QMARK_.call(null,inst_13416);var state_13463__$1 = state_13463;if(inst_13418)
{var statearr_13487_13526 = state_13463__$1;(statearr_13487_13526[1] = 16);
} else
{var statearr_13488_13527 = state_13463__$1;(statearr_13488_13527[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 14))
{var state_13463__$1 = state_13463;var statearr_13489_13528 = state_13463__$1;(statearr_13489_13528[2] = null);
(statearr_13489_13528[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 15))
{var inst_13434 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13490_13529 = state_13463__$1;(statearr_13490_13529[2] = inst_13434);
(statearr_13490_13529[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 16))
{var inst_13416 = (state_13463[15]);var inst_13420 = cljs.core.chunk_first.call(null,inst_13416);var inst_13421 = cljs.core.chunk_rest.call(null,inst_13416);var inst_13422 = cljs.core.count.call(null,inst_13420);var inst_13402 = inst_13421;var inst_13403 = inst_13420;var inst_13404 = inst_13422;var inst_13405 = 0;var state_13463__$1 = (function (){var statearr_13491 = state_13463;(statearr_13491[8] = inst_13402);
(statearr_13491[9] = inst_13403);
(statearr_13491[10] = inst_13404);
(statearr_13491[11] = inst_13405);
return statearr_13491;
})();var statearr_13492_13530 = state_13463__$1;(statearr_13492_13530[2] = null);
(statearr_13492_13530[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 17))
{var inst_13416 = (state_13463[15]);var inst_13425 = cljs.core.first.call(null,inst_13416);var inst_13426 = cljs.core.async.muxch_STAR_.call(null,inst_13425);var inst_13427 = cljs.core.async.close_BANG_.call(null,inst_13426);var inst_13428 = cljs.core.next.call(null,inst_13416);var inst_13402 = inst_13428;var inst_13403 = null;var inst_13404 = 0;var inst_13405 = 0;var state_13463__$1 = (function (){var statearr_13493 = state_13463;(statearr_13493[8] = inst_13402);
(statearr_13493[16] = inst_13427);
(statearr_13493[9] = inst_13403);
(statearr_13493[10] = inst_13404);
(statearr_13493[11] = inst_13405);
return statearr_13493;
})();var statearr_13494_13531 = state_13463__$1;(statearr_13494_13531[2] = null);
(statearr_13494_13531[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 18))
{var inst_13431 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13495_13532 = state_13463__$1;(statearr_13495_13532[2] = inst_13431);
(statearr_13495_13532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 19))
{var state_13463__$1 = state_13463;var statearr_13496_13533 = state_13463__$1;(statearr_13496_13533[2] = null);
(statearr_13496_13533[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 20))
{var state_13463__$1 = state_13463;var statearr_13497_13534 = state_13463__$1;(statearr_13497_13534[2] = null);
(statearr_13497_13534[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 21))
{var inst_13456 = (state_13463[2]);var state_13463__$1 = (function (){var statearr_13498 = state_13463;(statearr_13498[17] = inst_13456);
return statearr_13498;
})();var statearr_13499_13535 = state_13463__$1;(statearr_13499_13535[2] = null);
(statearr_13499_13535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 22))
{var inst_13453 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13500_13536 = state_13463__$1;(statearr_13500_13536[2] = inst_13453);
(statearr_13500_13536[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 23))
{var inst_13440 = (state_13463[13]);var inst_13444 = (state_13463[2]);var inst_13445 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13440);var state_13463__$1 = (function (){var statearr_13501 = state_13463;(statearr_13501[18] = inst_13444);
return statearr_13501;
})();var statearr_13502_13537 = state_13463__$1;(statearr_13502_13537[2] = inst_13445);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 24))
{var inst_13392 = (state_13463[7]);var inst_13442 = (state_13463[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13463,23,Object,null,22);var inst_13449 = cljs.core.async.muxch_STAR_.call(null,inst_13442);var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13463__$1,25,inst_13449,inst_13392);
} else
{if((state_val_13464 === 25))
{var inst_13451 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13503_13538 = state_13463__$1;(statearr_13503_13538[2] = inst_13451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13463__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_13507 = (new Array(19));(statearr_13507[0] = state_machine__8463__auto__);
(statearr_13507[1] = 1);
return statearr_13507;
});
var state_machine__8463__auto____1 = (function (state_13463){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13463);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e13508){if((e13508 instanceof Object))
{var ex__8466__auto__ = e13508;var statearr_13509_13539 = state_13463;(statearr_13509_13539[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13540 = state_13463;
state_13463 = G__13540;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13463){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_13510 = f__8625__auto__.call(null);(statearr_13510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___13511);
return statearr_13510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8624__auto___13677 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13647){var state_val_13648 = (state_13647[1]);if((state_val_13648 === 1))
{var state_13647__$1 = state_13647;var statearr_13649_13678 = state_13647__$1;(statearr_13649_13678[2] = null);
(statearr_13649_13678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 2))
{var inst_13610 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13611 = 0;var state_13647__$1 = (function (){var statearr_13650 = state_13647;(statearr_13650[7] = inst_13611);
(statearr_13650[8] = inst_13610);
return statearr_13650;
})();var statearr_13651_13679 = state_13647__$1;(statearr_13651_13679[2] = null);
(statearr_13651_13679[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 3))
{var inst_13645 = (state_13647[2]);var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13647__$1,inst_13645);
} else
{if((state_val_13648 === 4))
{var inst_13611 = (state_13647[7]);var inst_13613 = (inst_13611 < cnt);var state_13647__$1 = state_13647;if(cljs.core.truth_(inst_13613))
{var statearr_13652_13680 = state_13647__$1;(statearr_13652_13680[1] = 6);
} else
{var statearr_13653_13681 = state_13647__$1;(statearr_13653_13681[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 5))
{var inst_13631 = (state_13647[2]);var state_13647__$1 = (function (){var statearr_13654 = state_13647;(statearr_13654[9] = inst_13631);
return statearr_13654;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13647__$1,12,dchan);
} else
{if((state_val_13648 === 6))
{var state_13647__$1 = state_13647;var statearr_13655_13682 = state_13647__$1;(statearr_13655_13682[2] = null);
(statearr_13655_13682[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 7))
{var state_13647__$1 = state_13647;var statearr_13656_13683 = state_13647__$1;(statearr_13656_13683[2] = null);
(statearr_13656_13683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 8))
{var inst_13629 = (state_13647[2]);var state_13647__$1 = state_13647;var statearr_13657_13684 = state_13647__$1;(statearr_13657_13684[2] = inst_13629);
(statearr_13657_13684[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 9))
{var inst_13611 = (state_13647[7]);var inst_13624 = (state_13647[2]);var inst_13625 = (inst_13611 + 1);var inst_13611__$1 = inst_13625;var state_13647__$1 = (function (){var statearr_13658 = state_13647;(statearr_13658[10] = inst_13624);
(statearr_13658[7] = inst_13611__$1);
return statearr_13658;
})();var statearr_13659_13685 = state_13647__$1;(statearr_13659_13685[2] = null);
(statearr_13659_13685[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 10))
{var inst_13615 = (state_13647[2]);var inst_13616 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13647__$1 = (function (){var statearr_13660 = state_13647;(statearr_13660[11] = inst_13615);
return statearr_13660;
})();var statearr_13661_13686 = state_13647__$1;(statearr_13661_13686[2] = inst_13616);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13647__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 11))
{var inst_13611 = (state_13647[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13647,10,Object,null,9);var inst_13620 = chs__$1.call(null,inst_13611);var inst_13621 = done.call(null,inst_13611);var inst_13622 = cljs.core.async.take_BANG_.call(null,inst_13620,inst_13621);var state_13647__$1 = state_13647;var statearr_13662_13687 = state_13647__$1;(statearr_13662_13687[2] = inst_13622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13647__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 12))
{var inst_13633 = (state_13647[12]);var inst_13633__$1 = (state_13647[2]);var inst_13634 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13633__$1);var state_13647__$1 = (function (){var statearr_13663 = state_13647;(statearr_13663[12] = inst_13633__$1);
return statearr_13663;
})();if(cljs.core.truth_(inst_13634))
{var statearr_13664_13688 = state_13647__$1;(statearr_13664_13688[1] = 13);
} else
{var statearr_13665_13689 = state_13647__$1;(statearr_13665_13689[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 13))
{var inst_13636 = cljs.core.async.close_BANG_.call(null,out);var state_13647__$1 = state_13647;var statearr_13666_13690 = state_13647__$1;(statearr_13666_13690[2] = inst_13636);
(statearr_13666_13690[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 14))
{var inst_13633 = (state_13647[12]);var inst_13638 = cljs.core.apply.call(null,f,inst_13633);var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13647__$1,16,out,inst_13638);
} else
{if((state_val_13648 === 15))
{var inst_13643 = (state_13647[2]);var state_13647__$1 = state_13647;var statearr_13667_13691 = state_13647__$1;(statearr_13667_13691[2] = inst_13643);
(statearr_13667_13691[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 16))
{var inst_13640 = (state_13647[2]);var state_13647__$1 = (function (){var statearr_13668 = state_13647;(statearr_13668[13] = inst_13640);
return statearr_13668;
})();var statearr_13669_13692 = state_13647__$1;(statearr_13669_13692[2] = null);
(statearr_13669_13692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_13673 = (new Array(14));(statearr_13673[0] = state_machine__8463__auto__);
(statearr_13673[1] = 1);
return statearr_13673;
});
var state_machine__8463__auto____1 = (function (state_13647){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13647);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e13674){if((e13674 instanceof Object))
{var ex__8466__auto__ = e13674;var statearr_13675_13693 = state_13647;(statearr_13675_13693[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13694 = state_13647;
state_13647 = G__13694;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13647){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_13676 = f__8625__auto__.call(null);(statearr_13676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___13677);
return statearr_13676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___13802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13778){var state_val_13779 = (state_13778[1]);if((state_val_13779 === 1))
{var inst_13749 = cljs.core.vec.call(null,chs);var inst_13750 = inst_13749;var state_13778__$1 = (function (){var statearr_13780 = state_13778;(statearr_13780[7] = inst_13750);
return statearr_13780;
})();var statearr_13781_13803 = state_13778__$1;(statearr_13781_13803[2] = null);
(statearr_13781_13803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 2))
{var inst_13750 = (state_13778[7]);var inst_13752 = cljs.core.count.call(null,inst_13750);var inst_13753 = (inst_13752 > 0);var state_13778__$1 = state_13778;if(cljs.core.truth_(inst_13753))
{var statearr_13782_13804 = state_13778__$1;(statearr_13782_13804[1] = 4);
} else
{var statearr_13783_13805 = state_13778__$1;(statearr_13783_13805[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 3))
{var inst_13776 = (state_13778[2]);var state_13778__$1 = state_13778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13778__$1,inst_13776);
} else
{if((state_val_13779 === 4))
{var inst_13750 = (state_13778[7]);var state_13778__$1 = state_13778;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13778__$1,7,inst_13750);
} else
{if((state_val_13779 === 5))
{var inst_13772 = cljs.core.async.close_BANG_.call(null,out);var state_13778__$1 = state_13778;var statearr_13784_13806 = state_13778__$1;(statearr_13784_13806[2] = inst_13772);
(statearr_13784_13806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 6))
{var inst_13774 = (state_13778[2]);var state_13778__$1 = state_13778;var statearr_13785_13807 = state_13778__$1;(statearr_13785_13807[2] = inst_13774);
(statearr_13785_13807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 7))
{var inst_13757 = (state_13778[8]);var inst_13758 = (state_13778[9]);var inst_13757__$1 = (state_13778[2]);var inst_13758__$1 = cljs.core.nth.call(null,inst_13757__$1,0,null);var inst_13759 = cljs.core.nth.call(null,inst_13757__$1,1,null);var inst_13760 = (inst_13758__$1 == null);var state_13778__$1 = (function (){var statearr_13786 = state_13778;(statearr_13786[8] = inst_13757__$1);
(statearr_13786[9] = inst_13758__$1);
(statearr_13786[10] = inst_13759);
return statearr_13786;
})();if(cljs.core.truth_(inst_13760))
{var statearr_13787_13808 = state_13778__$1;(statearr_13787_13808[1] = 8);
} else
{var statearr_13788_13809 = state_13778__$1;(statearr_13788_13809[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 8))
{var inst_13750 = (state_13778[7]);var inst_13757 = (state_13778[8]);var inst_13758 = (state_13778[9]);var inst_13759 = (state_13778[10]);var inst_13762 = (function (){var c = inst_13759;var v = inst_13758;var vec__13755 = inst_13757;var cs = inst_13750;return ((function (c,v,vec__13755,cs,inst_13750,inst_13757,inst_13758,inst_13759,state_val_13779){
return (function (p1__13695_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13695_SHARP_);
});
;})(c,v,vec__13755,cs,inst_13750,inst_13757,inst_13758,inst_13759,state_val_13779))
})();var inst_13763 = cljs.core.filterv.call(null,inst_13762,inst_13750);var inst_13750__$1 = inst_13763;var state_13778__$1 = (function (){var statearr_13789 = state_13778;(statearr_13789[7] = inst_13750__$1);
return statearr_13789;
})();var statearr_13790_13810 = state_13778__$1;(statearr_13790_13810[2] = null);
(statearr_13790_13810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 9))
{var inst_13758 = (state_13778[9]);var state_13778__$1 = state_13778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13778__$1,11,out,inst_13758);
} else
{if((state_val_13779 === 10))
{var inst_13770 = (state_13778[2]);var state_13778__$1 = state_13778;var statearr_13792_13811 = state_13778__$1;(statearr_13792_13811[2] = inst_13770);
(statearr_13792_13811[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13779 === 11))
{var inst_13750 = (state_13778[7]);var inst_13767 = (state_13778[2]);var tmp13791 = inst_13750;var inst_13750__$1 = tmp13791;var state_13778__$1 = (function (){var statearr_13793 = state_13778;(statearr_13793[7] = inst_13750__$1);
(statearr_13793[11] = inst_13767);
return statearr_13793;
})();var statearr_13794_13812 = state_13778__$1;(statearr_13794_13812[2] = null);
(statearr_13794_13812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_13798 = (new Array(12));(statearr_13798[0] = state_machine__8463__auto__);
(statearr_13798[1] = 1);
return statearr_13798;
});
var state_machine__8463__auto____1 = (function (state_13778){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13778);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e13799){if((e13799 instanceof Object))
{var ex__8466__auto__ = e13799;var statearr_13800_13813 = state_13778;(statearr_13800_13813[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13814 = state_13778;
state_13778 = G__13814;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13778){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_13801 = f__8625__auto__.call(null);(statearr_13801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___13802);
return statearr_13801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___13907 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13884){var state_val_13885 = (state_13884[1]);if((state_val_13885 === 1))
{var inst_13861 = 0;var state_13884__$1 = (function (){var statearr_13886 = state_13884;(statearr_13886[7] = inst_13861);
return statearr_13886;
})();var statearr_13887_13908 = state_13884__$1;(statearr_13887_13908[2] = null);
(statearr_13887_13908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 2))
{var inst_13861 = (state_13884[7]);var inst_13863 = (inst_13861 < n);var state_13884__$1 = state_13884;if(cljs.core.truth_(inst_13863))
{var statearr_13888_13909 = state_13884__$1;(statearr_13888_13909[1] = 4);
} else
{var statearr_13889_13910 = state_13884__$1;(statearr_13889_13910[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 3))
{var inst_13881 = (state_13884[2]);var inst_13882 = cljs.core.async.close_BANG_.call(null,out);var state_13884__$1 = (function (){var statearr_13890 = state_13884;(statearr_13890[8] = inst_13881);
return statearr_13890;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13884__$1,inst_13882);
} else
{if((state_val_13885 === 4))
{var state_13884__$1 = state_13884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13884__$1,7,ch);
} else
{if((state_val_13885 === 5))
{var state_13884__$1 = state_13884;var statearr_13891_13911 = state_13884__$1;(statearr_13891_13911[2] = null);
(statearr_13891_13911[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 6))
{var inst_13879 = (state_13884[2]);var state_13884__$1 = state_13884;var statearr_13892_13912 = state_13884__$1;(statearr_13892_13912[2] = inst_13879);
(statearr_13892_13912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 7))
{var inst_13866 = (state_13884[9]);var inst_13866__$1 = (state_13884[2]);var inst_13867 = (inst_13866__$1 == null);var inst_13868 = cljs.core.not.call(null,inst_13867);var state_13884__$1 = (function (){var statearr_13893 = state_13884;(statearr_13893[9] = inst_13866__$1);
return statearr_13893;
})();if(inst_13868)
{var statearr_13894_13913 = state_13884__$1;(statearr_13894_13913[1] = 8);
} else
{var statearr_13895_13914 = state_13884__$1;(statearr_13895_13914[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 8))
{var inst_13866 = (state_13884[9]);var state_13884__$1 = state_13884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13884__$1,11,out,inst_13866);
} else
{if((state_val_13885 === 9))
{var state_13884__$1 = state_13884;var statearr_13896_13915 = state_13884__$1;(statearr_13896_13915[2] = null);
(statearr_13896_13915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 10))
{var inst_13876 = (state_13884[2]);var state_13884__$1 = state_13884;var statearr_13897_13916 = state_13884__$1;(statearr_13897_13916[2] = inst_13876);
(statearr_13897_13916[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13885 === 11))
{var inst_13861 = (state_13884[7]);var inst_13871 = (state_13884[2]);var inst_13872 = (inst_13861 + 1);var inst_13861__$1 = inst_13872;var state_13884__$1 = (function (){var statearr_13898 = state_13884;(statearr_13898[10] = inst_13871);
(statearr_13898[7] = inst_13861__$1);
return statearr_13898;
})();var statearr_13899_13917 = state_13884__$1;(statearr_13899_13917[2] = null);
(statearr_13899_13917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_13903 = (new Array(11));(statearr_13903[0] = state_machine__8463__auto__);
(statearr_13903[1] = 1);
return statearr_13903;
});
var state_machine__8463__auto____1 = (function (state_13884){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13884);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e13904){if((e13904 instanceof Object))
{var ex__8466__auto__ = e13904;var statearr_13905_13918 = state_13884;(statearr_13905_13918[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13919 = state_13884;
state_13884 = G__13919;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13884){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_13906 = f__8625__auto__.call(null);(statearr_13906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___13907);
return statearr_13906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___14016 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_13991){var state_val_13992 = (state_13991[1]);if((state_val_13992 === 1))
{var inst_13968 = null;var state_13991__$1 = (function (){var statearr_13993 = state_13991;(statearr_13993[7] = inst_13968);
return statearr_13993;
})();var statearr_13994_14017 = state_13991__$1;(statearr_13994_14017[2] = null);
(statearr_13994_14017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 2))
{var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13991__$1,4,ch);
} else
{if((state_val_13992 === 3))
{var inst_13988 = (state_13991[2]);var inst_13989 = cljs.core.async.close_BANG_.call(null,out);var state_13991__$1 = (function (){var statearr_13995 = state_13991;(statearr_13995[8] = inst_13988);
return statearr_13995;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13991__$1,inst_13989);
} else
{if((state_val_13992 === 4))
{var inst_13971 = (state_13991[9]);var inst_13971__$1 = (state_13991[2]);var inst_13972 = (inst_13971__$1 == null);var inst_13973 = cljs.core.not.call(null,inst_13972);var state_13991__$1 = (function (){var statearr_13996 = state_13991;(statearr_13996[9] = inst_13971__$1);
return statearr_13996;
})();if(inst_13973)
{var statearr_13997_14018 = state_13991__$1;(statearr_13997_14018[1] = 5);
} else
{var statearr_13998_14019 = state_13991__$1;(statearr_13998_14019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 5))
{var inst_13968 = (state_13991[7]);var inst_13971 = (state_13991[9]);var inst_13975 = cljs.core._EQ_.call(null,inst_13971,inst_13968);var state_13991__$1 = state_13991;if(inst_13975)
{var statearr_13999_14020 = state_13991__$1;(statearr_13999_14020[1] = 8);
} else
{var statearr_14000_14021 = state_13991__$1;(statearr_14000_14021[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 6))
{var state_13991__$1 = state_13991;var statearr_14002_14022 = state_13991__$1;(statearr_14002_14022[2] = null);
(statearr_14002_14022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 7))
{var inst_13986 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14003_14023 = state_13991__$1;(statearr_14003_14023[2] = inst_13986);
(statearr_14003_14023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 8))
{var inst_13968 = (state_13991[7]);var tmp14001 = inst_13968;var inst_13968__$1 = tmp14001;var state_13991__$1 = (function (){var statearr_14004 = state_13991;(statearr_14004[7] = inst_13968__$1);
return statearr_14004;
})();var statearr_14005_14024 = state_13991__$1;(statearr_14005_14024[2] = null);
(statearr_14005_14024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 9))
{var inst_13971 = (state_13991[9]);var state_13991__$1 = state_13991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13991__$1,11,out,inst_13971);
} else
{if((state_val_13992 === 10))
{var inst_13983 = (state_13991[2]);var state_13991__$1 = state_13991;var statearr_14006_14025 = state_13991__$1;(statearr_14006_14025[2] = inst_13983);
(statearr_14006_14025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13992 === 11))
{var inst_13971 = (state_13991[9]);var inst_13980 = (state_13991[2]);var inst_13968 = inst_13971;var state_13991__$1 = (function (){var statearr_14007 = state_13991;(statearr_14007[7] = inst_13968);
(statearr_14007[10] = inst_13980);
return statearr_14007;
})();var statearr_14008_14026 = state_13991__$1;(statearr_14008_14026[2] = null);
(statearr_14008_14026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_14012 = (new Array(11));(statearr_14012[0] = state_machine__8463__auto__);
(statearr_14012[1] = 1);
return statearr_14012;
});
var state_machine__8463__auto____1 = (function (state_13991){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_13991);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e14013){if((e14013 instanceof Object))
{var ex__8466__auto__ = e14013;var statearr_14014_14027 = state_13991;(statearr_14014_14027[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14028 = state_13991;
state_13991 = G__14028;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_13991){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_13991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_14015 = f__8625__auto__.call(null);(statearr_14015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___14016);
return statearr_14015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___14163 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_14133){var state_val_14134 = (state_14133[1]);if((state_val_14134 === 1))
{var inst_14096 = (new Array(n));var inst_14097 = inst_14096;var inst_14098 = 0;var state_14133__$1 = (function (){var statearr_14135 = state_14133;(statearr_14135[7] = inst_14098);
(statearr_14135[8] = inst_14097);
return statearr_14135;
})();var statearr_14136_14164 = state_14133__$1;(statearr_14136_14164[2] = null);
(statearr_14136_14164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 2))
{var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14133__$1,4,ch);
} else
{if((state_val_14134 === 3))
{var inst_14131 = (state_14133[2]);var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14133__$1,inst_14131);
} else
{if((state_val_14134 === 4))
{var inst_14101 = (state_14133[9]);var inst_14101__$1 = (state_14133[2]);var inst_14102 = (inst_14101__$1 == null);var inst_14103 = cljs.core.not.call(null,inst_14102);var state_14133__$1 = (function (){var statearr_14137 = state_14133;(statearr_14137[9] = inst_14101__$1);
return statearr_14137;
})();if(inst_14103)
{var statearr_14138_14165 = state_14133__$1;(statearr_14138_14165[1] = 5);
} else
{var statearr_14139_14166 = state_14133__$1;(statearr_14139_14166[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 5))
{var inst_14098 = (state_14133[7]);var inst_14097 = (state_14133[8]);var inst_14101 = (state_14133[9]);var inst_14106 = (state_14133[10]);var inst_14105 = (inst_14097[inst_14098] = inst_14101);var inst_14106__$1 = (inst_14098 + 1);var inst_14107 = (inst_14106__$1 < n);var state_14133__$1 = (function (){var statearr_14140 = state_14133;(statearr_14140[10] = inst_14106__$1);
(statearr_14140[11] = inst_14105);
return statearr_14140;
})();if(cljs.core.truth_(inst_14107))
{var statearr_14141_14167 = state_14133__$1;(statearr_14141_14167[1] = 8);
} else
{var statearr_14142_14168 = state_14133__$1;(statearr_14142_14168[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 6))
{var inst_14098 = (state_14133[7]);var inst_14119 = (inst_14098 > 0);var state_14133__$1 = state_14133;if(cljs.core.truth_(inst_14119))
{var statearr_14144_14169 = state_14133__$1;(statearr_14144_14169[1] = 12);
} else
{var statearr_14145_14170 = state_14133__$1;(statearr_14145_14170[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 7))
{var inst_14129 = (state_14133[2]);var state_14133__$1 = state_14133;var statearr_14146_14171 = state_14133__$1;(statearr_14146_14171[2] = inst_14129);
(statearr_14146_14171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 8))
{var inst_14097 = (state_14133[8]);var inst_14106 = (state_14133[10]);var tmp14143 = inst_14097;var inst_14097__$1 = tmp14143;var inst_14098 = inst_14106;var state_14133__$1 = (function (){var statearr_14147 = state_14133;(statearr_14147[7] = inst_14098);
(statearr_14147[8] = inst_14097__$1);
return statearr_14147;
})();var statearr_14148_14172 = state_14133__$1;(statearr_14148_14172[2] = null);
(statearr_14148_14172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 9))
{var inst_14097 = (state_14133[8]);var inst_14111 = cljs.core.vec.call(null,inst_14097);var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14133__$1,11,out,inst_14111);
} else
{if((state_val_14134 === 10))
{var inst_14117 = (state_14133[2]);var state_14133__$1 = state_14133;var statearr_14149_14173 = state_14133__$1;(statearr_14149_14173[2] = inst_14117);
(statearr_14149_14173[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 11))
{var inst_14113 = (state_14133[2]);var inst_14114 = (new Array(n));var inst_14097 = inst_14114;var inst_14098 = 0;var state_14133__$1 = (function (){var statearr_14150 = state_14133;(statearr_14150[7] = inst_14098);
(statearr_14150[8] = inst_14097);
(statearr_14150[12] = inst_14113);
return statearr_14150;
})();var statearr_14151_14174 = state_14133__$1;(statearr_14151_14174[2] = null);
(statearr_14151_14174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 12))
{var inst_14097 = (state_14133[8]);var inst_14121 = cljs.core.vec.call(null,inst_14097);var state_14133__$1 = state_14133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14133__$1,15,out,inst_14121);
} else
{if((state_val_14134 === 13))
{var state_14133__$1 = state_14133;var statearr_14152_14175 = state_14133__$1;(statearr_14152_14175[2] = null);
(statearr_14152_14175[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 14))
{var inst_14126 = (state_14133[2]);var inst_14127 = cljs.core.async.close_BANG_.call(null,out);var state_14133__$1 = (function (){var statearr_14153 = state_14133;(statearr_14153[13] = inst_14126);
return statearr_14153;
})();var statearr_14154_14176 = state_14133__$1;(statearr_14154_14176[2] = inst_14127);
(statearr_14154_14176[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14134 === 15))
{var inst_14123 = (state_14133[2]);var state_14133__$1 = state_14133;var statearr_14155_14177 = state_14133__$1;(statearr_14155_14177[2] = inst_14123);
(statearr_14155_14177[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_14159 = (new Array(14));(statearr_14159[0] = state_machine__8463__auto__);
(statearr_14159[1] = 1);
return statearr_14159;
});
var state_machine__8463__auto____1 = (function (state_14133){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_14133);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e14160){if((e14160 instanceof Object))
{var ex__8466__auto__ = e14160;var statearr_14161_14178 = state_14133;(statearr_14161_14178[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14179 = state_14133;
state_14133 = G__14179;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_14133){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_14133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_14162 = f__8625__auto__.call(null);(statearr_14162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___14163);
return statearr_14162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8624__auto___14322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8625__auto__ = (function (){var switch__8462__auto__ = (function (state_14292){var state_val_14293 = (state_14292[1]);if((state_val_14293 === 1))
{var inst_14251 = (new Array(0));var inst_14252 = inst_14251;var inst_14253 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14292__$1 = (function (){var statearr_14294 = state_14292;(statearr_14294[7] = inst_14253);
(statearr_14294[8] = inst_14252);
return statearr_14294;
})();var statearr_14295_14323 = state_14292__$1;(statearr_14295_14323[2] = null);
(statearr_14295_14323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 2))
{var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14292__$1,4,ch);
} else
{if((state_val_14293 === 3))
{var inst_14290 = (state_14292[2]);var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else
{if((state_val_14293 === 4))
{var inst_14256 = (state_14292[9]);var inst_14256__$1 = (state_14292[2]);var inst_14257 = (inst_14256__$1 == null);var inst_14258 = cljs.core.not.call(null,inst_14257);var state_14292__$1 = (function (){var statearr_14296 = state_14292;(statearr_14296[9] = inst_14256__$1);
return statearr_14296;
})();if(inst_14258)
{var statearr_14297_14324 = state_14292__$1;(statearr_14297_14324[1] = 5);
} else
{var statearr_14298_14325 = state_14292__$1;(statearr_14298_14325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 5))
{var inst_14256 = (state_14292[9]);var inst_14253 = (state_14292[7]);var inst_14260 = (state_14292[10]);var inst_14260__$1 = f.call(null,inst_14256);var inst_14261 = cljs.core._EQ_.call(null,inst_14260__$1,inst_14253);var inst_14262 = cljs.core.keyword_identical_QMARK_.call(null,inst_14253,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14263 = (inst_14261) || (inst_14262);var state_14292__$1 = (function (){var statearr_14299 = state_14292;(statearr_14299[10] = inst_14260__$1);
return statearr_14299;
})();if(cljs.core.truth_(inst_14263))
{var statearr_14300_14326 = state_14292__$1;(statearr_14300_14326[1] = 8);
} else
{var statearr_14301_14327 = state_14292__$1;(statearr_14301_14327[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 6))
{var inst_14252 = (state_14292[8]);var inst_14277 = inst_14252.length;var inst_14278 = (inst_14277 > 0);var state_14292__$1 = state_14292;if(cljs.core.truth_(inst_14278))
{var statearr_14303_14328 = state_14292__$1;(statearr_14303_14328[1] = 12);
} else
{var statearr_14304_14329 = state_14292__$1;(statearr_14304_14329[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 7))
{var inst_14288 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14305_14330 = state_14292__$1;(statearr_14305_14330[2] = inst_14288);
(statearr_14305_14330[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 8))
{var inst_14256 = (state_14292[9]);var inst_14252 = (state_14292[8]);var inst_14260 = (state_14292[10]);var inst_14265 = inst_14252.push(inst_14256);var tmp14302 = inst_14252;var inst_14252__$1 = tmp14302;var inst_14253 = inst_14260;var state_14292__$1 = (function (){var statearr_14306 = state_14292;(statearr_14306[7] = inst_14253);
(statearr_14306[8] = inst_14252__$1);
(statearr_14306[11] = inst_14265);
return statearr_14306;
})();var statearr_14307_14331 = state_14292__$1;(statearr_14307_14331[2] = null);
(statearr_14307_14331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 9))
{var inst_14252 = (state_14292[8]);var inst_14268 = cljs.core.vec.call(null,inst_14252);var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14292__$1,11,out,inst_14268);
} else
{if((state_val_14293 === 10))
{var inst_14275 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14308_14332 = state_14292__$1;(statearr_14308_14332[2] = inst_14275);
(statearr_14308_14332[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 11))
{var inst_14256 = (state_14292[9]);var inst_14260 = (state_14292[10]);var inst_14270 = (state_14292[2]);var inst_14271 = (new Array(0));var inst_14272 = inst_14271.push(inst_14256);var inst_14252 = inst_14271;var inst_14253 = inst_14260;var state_14292__$1 = (function (){var statearr_14309 = state_14292;(statearr_14309[12] = inst_14270);
(statearr_14309[7] = inst_14253);
(statearr_14309[8] = inst_14252);
(statearr_14309[13] = inst_14272);
return statearr_14309;
})();var statearr_14310_14333 = state_14292__$1;(statearr_14310_14333[2] = null);
(statearr_14310_14333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 12))
{var inst_14252 = (state_14292[8]);var inst_14280 = cljs.core.vec.call(null,inst_14252);var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14292__$1,15,out,inst_14280);
} else
{if((state_val_14293 === 13))
{var state_14292__$1 = state_14292;var statearr_14311_14334 = state_14292__$1;(statearr_14311_14334[2] = null);
(statearr_14311_14334[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 14))
{var inst_14285 = (state_14292[2]);var inst_14286 = cljs.core.async.close_BANG_.call(null,out);var state_14292__$1 = (function (){var statearr_14312 = state_14292;(statearr_14312[14] = inst_14285);
return statearr_14312;
})();var statearr_14313_14335 = state_14292__$1;(statearr_14313_14335[2] = inst_14286);
(statearr_14313_14335[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 15))
{var inst_14282 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14314_14336 = state_14292__$1;(statearr_14314_14336[2] = inst_14282);
(statearr_14314_14336[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8462__auto__){
return (function() {
var state_machine__8463__auto__ = null;
var state_machine__8463__auto____0 = (function (){var statearr_14318 = (new Array(15));(statearr_14318[0] = state_machine__8463__auto__);
(statearr_14318[1] = 1);
return statearr_14318;
});
var state_machine__8463__auto____1 = (function (state_14292){while(true){
var ret_value__8464__auto__ = (function (){try{while(true){
var result__8465__auto__ = switch__8462__auto__.call(null,state_14292);if(cljs.core.keyword_identical_QMARK_.call(null,result__8465__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8465__auto__;
}
break;
}
}catch (e14319){if((e14319 instanceof Object))
{var ex__8466__auto__ = e14319;var statearr_14320_14337 = state_14292;(statearr_14320_14337[5] = ex__8466__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8464__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14338 = state_14292;
state_14292 = G__14338;
continue;
}
} else
{return ret_value__8464__auto__;
}
break;
}
});
state_machine__8463__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return state_machine__8463__auto____0.call(this);
case 1:
return state_machine__8463__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8463__auto____0;
state_machine__8463__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8463__auto____1;
return state_machine__8463__auto__;
})()
;})(switch__8462__auto__))
})();var state__8626__auto__ = (function (){var statearr_14321 = f__8625__auto__.call(null);(statearr_14321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8624__auto___14322);
return statearr_14321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8626__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
