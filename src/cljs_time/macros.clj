(ns cljs-time.macros)

(defmacro do-at
  [base-date-time & body]
  `(cljs-time.core/do-at* ~base-date-time (fn [] ~@body)))

