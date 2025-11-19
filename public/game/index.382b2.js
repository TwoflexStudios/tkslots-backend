System['register'](['./application.9061c.js'], function(a, b) {
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
                let j = Number(localStorage['getItem']('lastReloadTime'))
                  , k = Number(localStorage['getItem']('reloadTime'))
                  , l = Date['now']();
                j == 0x0 ? (localStorage['setItem']('lastReloadTime', l),
                localStorage['setItem']('reloadTime', 0x1),
                location['reload'](!![])) : l - j > 0xea60 * 0x5 ? (localStorage['setItem']('lastReloadTime', l),
                localStorage['setItem']('reloadTime', 0x1),
                location['reload'](!![])) : k < 0x3 && (localStorage['setItem']('reloadTime', k + 0x1),
                location['reload'](!![]));
            });
        }
    };
});
