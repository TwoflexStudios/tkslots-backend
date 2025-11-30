System['register'](['./application.c199c.js'], function(a, b) {
    'use strict';
    var c, d, e, f, g;
    function h(i) {
        return System['import'](i);
    }
    return {
        'setters': [function(i) {
            c = i['Application'];
        }
        ],
        'execute': function() {
            d = document['getElementById']('GameCanvas'),
            e = d['parentElement'],
            f = e['getBoundingClientRect'](),
            d['width'] = f['width'],
            d['height'] = f['height'],
            g = new c(),
            h('cc')['then'](function(i) {
                return g['init'](i);
            })['then'](function() {
                return g['start']();
            })['catch'](function(i) {
                console['error'](i);
            });
        }
    };
});
