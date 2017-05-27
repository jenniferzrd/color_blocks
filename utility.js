var log, byId, select, selectAll;

log = function log(val) {
    "use strict";
    window.console.log(val);
};

byId = function byId(id) {
    "use strict";
    return document.getElementById(id);
};

select = function select(sCSS) {
    "use strict";
    return document.querySelector(sCSS);
};

selectAll = function selectAll(sCSS) {
    "use strict";
    return document.querySelectorAll(sCSS);
};
