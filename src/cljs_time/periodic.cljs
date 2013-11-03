(ns cljs-time.periodic
  (:require [cljs-time.core :as ct]))

(defn periodic-seq
  "Returns an infinite sequence of date-time values growing over specific period"
  [start period]
  (iterate (ct/fpartial ct/plus period) start))


