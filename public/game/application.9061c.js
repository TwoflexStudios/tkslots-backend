System['register']([], function(a, b) {
    'use strict';
    var c, d, e;
    function f(k, l) {
        if (!(k instanceof l))
            throw new TypeError('Cannot\x20call\x20a\x20class\x20as\x20a\x20function');
    }
    function g(k, l) {
        for (var m = 0x0; m < l['length']; m++) {
            var n = l[m];
            n['enumerable'] = n['enumerable'] || ![],
            n['configurable'] = !![];
            if ('value'in n)
                n['writable'] = !![];
            Object['defineProperty'](k, n['key'], n);
        }
    }
    function h(k, l, m) {
        if (l)
            g(k['prototype'], l);
        if (m)
            g(k, m);
        return k;
    }
    function i(k) {
        if (c['sys']['isBrowser'] && d) {
            var l = d['querySelector']('.progress-bar\x20span');
            l && (l['style']['width'] = k + '%');
        }
    }
    function j() {
        if (c['sys']['isBrowser']) {
            d = document['getElementById']('splash');
            if (d) {
                var k = d['querySelector']('.progress-bar\x20span');
                d['style']['display'] = 'block',
                k['style']['width'] = '0%';
            }
        }
    }
    return {
        'setters': [],
        'execute': function() {
            d = null,
            a('Application', e = (function() {
                function k() {
                    f(this, k),
                    this['settingsPath'] = '/game/src/settings.46aa2.json',
                    this['showFPS'] = false; //☠️ Force FPS
                }
                return h(k, [{
                    'key': 'init',
                    'value': function l(m) {
                        c = m,
                        c['game']['onPostBaseInitDelegate']['add'](this['onPostInitBase']['bind'](this)),
                        c['game']['onPostSubsystemInitDelegate']['add'](this['onPostSystemInit']['bind'](this)),
                        j(),
                        i(0xa),
                        c['director']['once'](c['Director']['EVENT_AFTER_SCENE_LAUNCH'], function() {
                            d && (d['style']['display'] = 'none');
                        });
                    }
                }, {
                    'key': 'onPostInitBase',
                    'value': function m() {
                        i(0x1e);
                    }
                }, {
                    'key': 'onPostSystemInit',
                    'value': function n() {
                        i(0x32);
                    }
                }, {
                    'key': 'start',
                    'value': function o() {
                        function p() {
                            if (c['sys']['isBrowser']) {
                                var q = navigator['userAgent']['toLowerCase']()
                                  , r = /mobile|android|iphone|ipad|phone/i['test'](q);
                                return r;
                            }
                            return !![];
                        }
                        return c['game']['init']({
                            'debugMode': ![] ? c['DebugMode']['INFO'] : c['DebugMode']['ERROR'],
                            'settingsPath': this['settingsPath'],
                            'overrideSettings': {
                                'screen': {
                                    'exactFitScreen': p()
                                },
                                'profiling': {
                                    'showFPS': this['showFPS']
                                }
                            }
                        })['then'](function() {
                            i(0x64),
                            c['game']['run']();
                        });
                    }
                }]),
                k;
            }()));
        }
    };
});
