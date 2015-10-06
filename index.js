let assert = function(a, b) { if(a !== b) { throw new Error(b) }; }
// Minimalist mustache template replacement
// (str, obj) -> null
var maxstache = (s,c,r=/\{\{(.*?)\}\}/g)=> [assert(typeof s, 'string'),assert(typeof c, 'object'),s.replace(r,(h,m)=>c[m.trim()])][2]

module.exports = maxstache
