System['register']('chunks:///_virtual/appConfig.ts', ['cc', './BaseCustomEventDefine.ts'], function(a) {
    var b, c, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            c = f['_decorator'];
        }
        , function(f) {
            d = f['gameStage'];
        }
        ],
        'execute': function() {
            var f;
            b['_RF']['push']({}, '74334UHsFJL5LPz0qvMaoss', 'appConfig', void 0x0),
            (c['ccclass'],
            c['property'],
            a('appConfig', {
                'bShowDebug': !0x0,
                'defaultChannel': '1000',
                'translateRate': 0x64,
                'bShowDic': !0x0,
                'bShowJackpot': !0x0,
                'supportLanList': [],
                'bNeedEnsurePsw': !0x0,
                'bPreview': !0x1,
                'bStorePackage': !0x1,
                'bSupportGuestLogin': !0x0,
                'bFastLogin': !0x0,
                'currency': 'USD',
                'language': 'pt',
                'defaultAreaCode': '092',
                'areaCodeNum': 0x0,
                'lobbyLoopSpace': 0xf,
                'connection': {
                    'http': 'http://192.168.0.188:8818/',
                    'tcp': {
                        'host': '192.168.0.188',
                        'port': 0x1f49
                    }
                },
                'ipServerUrl': 'https://ipwho.is/?fields=success,ip,country,city',
                'httpEventUrl': '',
                'lobbyPopJobConfig': (f = {},
                f[0x2] = 0x2,
                f[0x3] = 0x2,
                f[0x4] = 0x2,
                f[0x5] = 0x2,
                f[0x6] = 0x2,
                f[0x8] = 0x2,
                f),
                'loginType': 0x0,
                'gameTitle': 'Game',
                'gameIconUrl': 'http://192.168.0.72/h5_res/gameIcon.png',
                'loginLogoUrl': 'http://192.168.0.72/h5_res/gameLogo.png',
                'fastLoginTimeLimit': 0x3,
                'loginBottomImgUrl': '',
                'loginBottomImgJumpUrl': '',
                'loginBgUrl': '',
                'updateBgUrl': '',
                'lobbyBgUrl': '',
                'ad_device_code': '',
                'firebaseOptionsH5': null,
                'nativeUrl': '',
                'rootUrlList': ['http://192.168.0.70:9005/publish/'],
                'maxDownloadSubGameCount': 0x2,
                get 'IsDownloadSubGameInLobby'() {
                    return this['maxDownloadSubGameCount'] > 0x1;
                },
                'areaCodeList': ['055'],
                'bHasLobby': !0x0,
                'bSkipTrackOnSubgame': !0x0,
                'IpInfo': {
                    'Ip': '',
                    'country': '',
                    'city': '',
                    'href': ''
                },
                'gameStage': d['login'],
                'sourceChannel': '',
                'sourceUserId': '',
                'isS2S': !0x0,
                'attType': 0x0,
                'webEventCode': '',
                'attToken': {
                    'token': '',
                    'appID': '',
                    'events': [{
                        'name': '',
                        'key': ''
                    }]
                },
                'attEnvironment': 0x1,
                'attLogLevel': 0x4,
                'bAllowGetHost': !0x0,
                'shopVideoHelpCfg': [{
                    'name': 'Demo\x20tutorial\x0aBKash',
                    'url': 'https://www.youtube.com/embed/N4Pomon-Jxw?si=XXnsUSXSJBo7q2Rj'
                }, {
                    'name': 'Demo\x20tutorial\x0aNAGAD',
                    'url': 'https://www.zol.com.cn'
                }],
                'mode': '0',
                'fbp': '',
                'fbc': '',
                'attJson': null,
                'clickid': '',
                'bDownNeendBindPhone': !0x1,
                'assetsVersion': 0x0,
                'bPWAInstall': !0x1,
                'h5Type': 0x0,
                'Notice': {
                    'Flag': !0x1,
                    'content': 'Under\x20maintenance,\x20please\x20try\x20again\x20later'
                },
                get 'InstallAfterBuy'() {
                    return 0x2 == this['h5Type'];
                },
                'defaultGameType': 0x0,
                get 'CurrentChannel'() {
                    return null == this['sourceChannel'] || '' == this['sourceChannel'] ? this['defaultChannel'] : this['sourceChannel'];
                },
                get 'bShowDownload'() {
                    return '0' == this['mode'] || '2' == this['mode'];
                },
                get 'bAdd2HomeScreen'() {
                    return '0' == this['mode'] || '3' == this['mode'];
                }
            }),
            a('areaCode', function(g) {
                return g[g['BR'] = 0x37] = 'BR',
                g[g['PH'] = 0x3f] = 'PH',
                g[g['VN'] = 0x54] = 'VN',
                g[g['IN'] = 0x5b] = 'IN',
                g[g['ES'] = 0x34] = 'ES',
                g[g['TH'] = 0x42] = 'TH',
                g[g['PKP'] = 0x5c] = 'PKP',
                g[g['BD'] = 0x370] = 'BD',
                g[g['ID'] = 0x3e] = 'ID',
                g[g['PE'] = 0x33] = 'PE',
                g[g['EGY'] = 0x14] = 'EGY',
                g[g['NIG'] = 0xea] = 'NIG',
                g[g['MY'] = 0x5f] = 'MY',
                g;
            }({})),
            a('AttributionType', function(g) {
                return g[g['none'] = 0x0] = 'none',
                g[g['adjust'] = 0x1] = 'adjust',
                g[g['appsflyer'] = 0x2] = 'appsflyer',
                g[g['flutter'] = 0x3] = 'flutter',
                g[g['fb'] = 0x4] = 'fb',
                g[g['tiktok'] = 0x5] = 'tiktok',
                g[g['kwai'] = 0x6] = 'kwai',
                g[g['gTag'] = 0x7] = 'gTag',
                g[g['firebase'] = 0x8] = 'firebase',
                g;
            }({}))),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ArrayUtil.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '4613b2zY/dMSaGPBGo6eti3', 'ArrayUtil', void 0x0),
            a('ArrayUtil', (function() {
                function c() {}
                return c['noRepeated'] = function(d) {
                    for (var f = [d[0x0]], g = 0x1; g < d['length']; g++) {
                        for (var h = !0x1, i = 0x0; i < f['length']; i++)
                            if (d[g] == f[i]) {
                                h = !0x0;
                                break;
                            }
                        h || f['push'](d[g]);
                    }
                    return f;
                }
                ,
                c['copy2DArray'] = function(d) {
                    for (var e = [], f = 0x0; f < d['length']; f++)
                        e['push'](d[f]['concat']());
                    return e;
                }
                ,
                c['fisherYatesShuffle'] = function(d) {
                    for (var f = d['length']; f; ) {
                        var g = Math['floor'](Math['random']() * f--)
                          , h = d[f];
                        d[f] = d[g],
                        d[g] = h;
                    }
                    return d;
                }
                ,
                c['confound'] = function(d) {
                    return d['slice']()['sort'](function() {
                        return Math['random']() - 0.5;
                    });
                }
                ,
                c['flattening'] = function(d) {
                    for (; d['some'](function(e) {
                        return Array['isArray'](e);
                    }); )
                        d = []['concat']['apply']([], d);
                    return d;
                }
                ,
                c['removeItem'] = function(d, f) {
                    for (var g = d['concat'](), h = 0x0; h < g['length']; h++) {
                        if (f == g[h]) {
                            d['splice'](h, 0x1);
                            break;
                        }
                    }
                }
                ,
                c['combineArrays'] = function(d, e) {
                    return []['concat'](d, e);
                }
                ,
                c['getRandomValueInArray'] = function(d) {
                    return d[Math['floor'](Math['random']() * d['length'])];
                }
                ,
                c;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/AsyncQueue.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['createClass'];
        }
        , function(g) {
            c = g['cclegacy'],
            d = g['warn'],
            f = g['log'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '8c48bBN521JzIxhITJunFji', 'AsyncQueue', void 0x0),
            a('AsyncQueue', (function() {
                function g() {
                    this['_runningAsyncTask'] = null,
                    this['_queues'] = [],
                    this['_isProcessingTaskUUID'] = 0x0,
                    this['_enable'] = !0x0,
                    this['complete'] = null;
                }
                var h = g['prototype'];
                return h['push'] = function(j, k) {
                    void 0x0 === k && (k = null);
                    var l = g['_$uuid_count']++;
                    return this['_queues']['push']({
                        'uuid': l,
                        'callbacks': [j],
                        'params': k
                    }),
                    l;
                }
                ,
                h['pushMulti'] = function(j) {
                    for (var k = g['_$uuid_count']++, l = arguments['length'], m = new Array(l > 0x1 ? l - 0x1 : 0x0), o = 0x1; o < l; o++)
                        m[o - 0x1] = arguments[o];
                    return this['_queues']['push']({
                        'uuid': k,
                        'callbacks': m,
                        'params': j
                    }),
                    k;
                }
                ,
                h['remove'] = function(j) {
                    var k;
                    if ((null == (k = this['_runningAsyncTask']) ? void 0x0 : k['uuid']) !== j) {
                        for (var l = 0x0; l < this['_queues']['length']; l++)
                            if (this['_queues'][l]['uuid'] === j) {
                                this['_queues']['splice'](l, 0x1);
                                break;
                            }
                    } else
                        d('正在执行的任务不可以移除');
                }
                ,
                h['clear'] = function() {
                    this['_queues'] = [],
                    this['_isProcessingTaskUUID'] = 0x0,
                    this['_runningAsyncTask'] = null;
                }
                ,
                h['step'] = function() {
                    this['isProcessing'] && this['next'](this['_isProcessingTaskUUID']);
                }
                ,
                h['play'] = function(j) {
                    var k = this;
                    if (void 0x0 === j && (j = null),
                    !this['isProcessing'] && this['_enable']) {
                        var m = this['_queues']['shift']();
                        if (m) {
                            this['_runningAsyncTask'] = m;
                            var o = m['uuid'];
                            this['_isProcessingTaskUUID'] = o;
                            var p = m['callbacks'];
                            if (0x1 == p['length'])
                                p[0x0](function(z) {
                                    void 0x0 === z && (z = null),
                                    k['next'](o, z);
                                }, m['params'], j);
                            else {
                                for (var q = p['length'], v = [], w = function(z) {
                                    void 0x0 === z && (z = null),
                                    --q,
                                    v['push'](z || null),
                                    0x0 === q && k['next'](o, v);
                                }, x = q, y = 0x0; y < x; y++)
                                    p[y](w, m['params'], j);
                            }
                        } else
                            this['_isProcessingTaskUUID'] = 0x0,
                            this['_runningAsyncTask'] = null,
                            this['complete'] && this['complete'](j);
                    }
                }
                ,
                h['yieldTime'] = function(j, k) {
                    void 0x0 === k && (k = null),
                    this['push'](function(l, m, o) {
                        var p = setTimeout(function() {
                            clearTimeout(p),
                            k && k(),
                            l(o);
                        }, j);
                    }, {
                        'des': 'AsyncQueue.yieldTime'
                    });
                }
                ,
                h['next'] = function(j, k) {
                    void 0x0 === k && (k = null),
                    this['_isProcessingTaskUUID'] === j ? (this['_isProcessingTaskUUID'] = 0x0,
                    this['_runningAsyncTask'] = null,
                    this['play'](k)) : this['_runningAsyncTask'] && f(this['_runningAsyncTask']);
                }
                ,
                g['excuteTimes'] = function(j, k) {
                    void 0x0 === k && (k = null);
                    var l = j;
                    return function() {
                        0x0 === --l && k && k();
                    }
                    ;
                }
                ,
                b(g, [{
                    'key': 'queues',
                    'get': function() {
                        return this['_queues'];
                    }
                }, {
                    'key': 'enable',
                    'get': function() {
                        return this['_enable'];
                    },
                    'set': function(j) {
                        this['_enable'] !== j && (this['_enable'] = j,
                        j && this['size'] > 0x0 && this['play']());
                    }
                }, {
                    'key': 'size',
                    'get': function() {
                        return this['_queues']['length'];
                    }
                }, {
                    'key': 'isProcessing',
                    'get': function() {
                        return this['_isProcessingTaskUUID'] > 0x0;
                    }
                }, {
                    'key': 'isStop',
                    'get': function() {
                        return !(this['_queues']['length'] > 0x0) && !this['isProcessing'];
                    }
                }, {
                    'key': 'runningParams',
                    'get': function() {
                        return this['_runningAsyncTask'] ? this['_runningAsyncTask']['params'] : null;
                    }
                }]),
                g;
            }()))['_$uuid_count'] = 0x1,
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/AudioEffect.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(a) {
    var b, c, d, f, g, h, j;
    return {
        'setters': [function(k) {
            b = k['inheritsLoose'];
        }
        , function(k) {
            c = k['cclegacy'],
            d = k['_decorator'],
            f = k['AudioClip'],
            g = k['error'],
            h = k['AudioSource'];
        }
        , function(k) {
            j = k['oops'];
        }
        ],
        'execute': function() {
            var k;
            c['_RF']['push']({}, 'e52d2ysY1BEbpcT2Cz0Wwss', 'AudioEffect', void 0x0);
            var m = d['ccclass'];
            d['menu'],
            a('AudioEffect', m('AudioEffect')(k = function(p) {
                function q() {
                    for (var w, x = arguments['length'], y = new Array(x), z = 0x0; z < x; z++)
                        y[z] = arguments[z];
                    return (w = p['call']['apply'](p, [this]['concat'](y)) || this)['onAudioEnd'] = null,
                    w;
                }
                b(q, p);
                var v = q['prototype'];
                return v['load'] = function(w, x, y, z) {
                    var A = this;
                    void 0x0 === z && (z = !0x1),
                    j['res']['load'](x, w, f, function(B, C) {
                        null == B ? (A['enabled'] = !0x0,
                        A['loop'] = z,
                        A['clip'] = C,
                        A['play'](),
                        A['onAudioEnd'] = y) : g(B);
                    });
                }
                ,
                v['playClip'] = function(w, x, y) {
                    void 0x0 === y && (y = !0x1),
                    null != w ? (this['enabled'] = !0x0,
                    this['loop'] = y,
                    this['clip'] = w,
                    this['play'](),
                    this['onAudioEnd'] = x) : null == x || x(this);
                }
                ,
                v['update'] = function(w) {
                    var x;
                    0x0 == this['playing'] && (this['enabled'] = !0x1,
                    null == (x = this['onAudioEnd']) || x['call'](this, this),
                    this['onAudioEnd'] = null);
                }
                ,
                q;
            }(h)) || k),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/AudioManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './AudioEffect.ts', './AudioMusic.ts'], function(a) {
    var b, d, g, h, j, k, l;
    return {
        'setters': [function(m) {
            b = m['inheritsLoose'],
            d = m['createClass'];
        }
        , function(m) {
            g = m['cclegacy'],
            h = m['Component'];
        }
        , function(m) {
            j = m['oops'];
        }
        , function(m) {
            k = m['AudioEffect'];
        }
        , function(m) {
            l = m['AudioMusic'];
        }
        ],
        'execute': function() {
            g['_RF']['push']({}, '252f0z+vPNL8Y/jsLYmomtw', 'AudioManager', void 0x0);
            var m = 'game_audio';
            a('AudioManager', function(p) {
                function q() {
                    for (var v, w = arguments['length'], x = new Array(w), y = 0x0; y < w; y++)
                        x[y] = arguments[y];
                    return (v = p['call']['apply'](p, [this]['concat'](x)) || this)['local_data'] = {},
                    v['music'] = void 0x0,
                    v['_volume_music'] = 0x1,
                    v['_volume_effect'] = 0x1,
                    v['_switch_music'] = !0x0,
                    v['_switch_effect'] = !0x0,
                    v['max_size'] = 0xa,
                    v['ae_com_pool'] = [],
                    v['playing_effect_map'] = new Map(),
                    v;
                }
                b(q, p);
                var r = q['prototype'];
                return r['setMusicComplete'] = function(v) {
                    void 0x0 === v && (v = null),
                    this['music']['onComplete'] = v;
                }
                ,
                r['revertBgVolume'] = function() {
                    0x0 == Object['keys'](this['playing_effect_map'])['length'] && (this['music']['volume'] = this['volumeMusic']);
                }
                ,
                r['playEffect'] = function(v, w, x, y) {
                    var z = this;
                    if (void 0x0 === w && (w = 'resources'),
                    this['_switch_effect']) {
                        this['_volume_effect'] > 0.01 && (this['music']['volume'] = 0.75 * this['volumeMusic']),
                        null == x && (x = v + Date['now']());
                        var A = this['getAudioEffect']();
                        A['volume'] = this['_volume_effect'],
                        A['load'](v, w, function(B) {
                            z['playing_effect_map']['get'](x) && (z['playing_effect_map']['delete'](x),
                            z['tryCacheAudioEffect'](B)),
                            z['revertBgVolume']();
                        }, y),
                        this['playing_effect_map']['set'](x, A);
                    }
                    return x;
                }
                ,
                r['playEffectClip'] = function(v) {
                    var w = this;
                    if (null == v)
                        return '';
                    var x = '';
                    if (this['_switch_effect']) {
                        this['_volume_effect'] > 0.01 && (this['music']['volume'] = 0.75 * this['volumeMusic']),
                        x = v['name'] + Date['now']();
                        var y = this['getAudioEffect']();
                        y['volume'] = this['_volume_effect'],
                        this['playing_effect_map']['set'](x, y),
                        y['playClip'](v, function(z) {
                            w['playing_effect_map']['get'](x) && (w['playing_effect_map']['delete'](x),
                            w['tryCacheAudioEffect'](z)),
                            w['revertBgVolume']();
                        });
                    }
                    return x;
                }
                ,
                r['stopEffectByName'] = function(v) {
                    var w = this;
                    this['dispatchEffect'](function(x, y) {
                        -0x1 != y['indexOf'](v) && (x['stop'](),
                        x['enabled'] = !0x1,
                        w['playing_effect_map']['delete'](y),
                        w['tryCacheAudioEffect'](x),
                        w['revertBgVolume']());
                    });
                }
                ,
                r['stopEffect'] = function(v) {
                    if (this['playing_effect_map']['has'](v)) {
                        var w = this['playing_effect_map']['get'](v);
                        null != w && (w['stop'](),
                        w['enabled'] = !0x1,
                        this['tryCacheAudioEffect'](w)),
                        this['playing_effect_map']['delete'](v),
                        this['revertBgVolume']();
                    }
                }
                ,
                r['playMusic'] = function(v, w, x) {
                    void 0x0 === x && (x = 'resources'),
                    this['_switch_music'] && this['music']['load'](v, x, w);
                }
                ,
                r['stopMusic'] = function() {
                    this['music']['stop']();
                }
                ,
                r['getAudioEffect'] = function() {
                    var v = null;
                    return this['ae_com_pool']['length'] > 0x0 ? v = this['ae_com_pool']['shift']() : ((v = this['node']['addComponent'](k))['playOnAwake'] = !0x1,
                    v['volume'] = this['_volume_effect']),
                    v;
                }
                ,
                r['tryCacheAudioEffect'] = function(v) {
                    this['ae_com_pool']['length'] < this['max_size'] ? this['ae_com_pool']['push'](v) : v['destroy']();
                }
                ,
                r['dispatchEffect'] = function(v) {
                    this['playing_effect_map']['forEach'](function(w, x, y) {
                        v(w, x);
                    });
                }
                ,
                r['resumeAll'] = function() {
                    this['music'] && (this['music']['play'](),
                    this['dispatchEffect'](function(v) {
                        v['play']();
                    }));
                }
                ,
                r['pauseAll'] = function() {
                    this['music'] && (this['music']['pause'](),
                    this['dispatchEffect'](function(v) {
                        v['pause']();
                    }));
                }
                ,
                r['stopAll'] = function() {
                    this['music'] && (this['music']['stop'](),
                    this['dispatchEffect'](function(v) {
                        v['stop']();
                    }));
                }
                ,
                r['save'] = function() {
                    this['local_data']['volume_music'] = this['_volume_music'],
                    this['local_data']['volume_effect'] = this['_volume_effect'],
                    this['local_data']['switch_music'] = this['_switch_music'],
                    this['local_data']['switch_effect'] = this['_switch_effect'];
                    var v = JSON['stringify'](this['local_data']);
                    j['storage']['set'](m, v);
                }
                ,
                r['load'] = function() {
                    this['music'] = this['getComponent'](l) || this['addComponent'](l);
                    var v = j['storage']['get'](m);
                    if (v) {
                        try {
                            this['local_data'] = JSON['parse'](v),
                            this['_volume_music'] = this['local_data']['volume_music'],
                            this['_volume_effect'] = this['local_data']['volume_effect'],
                            this['_switch_music'] = this['local_data']['switch_music'],
                            this['_switch_effect'] = this['local_data']['switch_effect'];
                        } catch (w) {
                            this['local_data'] = {},
                            this['_volume_music'] = 0x1,
                            this['_volume_effect'] = 0x1,
                            this['_switch_music'] = !0x0,
                            this['_switch_effect'] = !0x0;
                        }
                        this['music'] && (this['music']['volume'] = this['_volume_music']);
                    }
                }
                ,
                d(q, [{
                    'key': 'progressMusic',
                    'get': function() {
                        return this['music']['progress'];
                    },
                    'set': function(v) {
                        this['music']['progress'] = v;
                    }
                }, {
                    'key': 'volumeMusic',
                    'get': function() {
                        return this['_volume_music'];
                    },
                    'set': function(v) {
                        this['_volume_music'] = v,
                        this['music']['volume'] = v;
                    }
                }, {
                    'key': 'switchMusic',
                    'get': function() {
                        return this['_switch_music'];
                    },
                    'set': function(v) {
                        this['_switch_music'] = v,
                        0x0 == v ? this['music']['stop']() : this['music']['play']();
                    }
                }, {
                    'key': 'volumeEffect',
                    'get': function() {
                        return this['_volume_effect'];
                    },
                    'set': function(v) {
                        this['_volume_effect'] = v,
                        this['dispatchEffect'](function(w) {
                            w['volume'] = v;
                        });
                    }
                }, {
                    'key': 'switchEffect',
                    'get': function() {
                        return this['_switch_effect'];
                    },
                    'set': function(v) {
                        this['_switch_effect'] = v,
                        this['dispatchEffect'](function(w) {
                            0x0 == v ? w['stop']() : w['play']();
                        });
                    }
                }]),
                q;
            }(h)),
            g['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/AudioMusic.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(a) {
    var b, c, d, f, g, h, j, k;
    return {
        'setters': [function(m) {
            b = m['inheritsLoose'],
            c = m['createClass'];
        }
        , function(m) {
            d = m['cclegacy'],
            f = m['_decorator'],
            g = m['AudioClip'],
            h = m['error'],
            j = m['AudioSource'];
        }
        , function(m) {
            k = m['oops'];
        }
        ],
        'execute': function() {
            var m;
            d['_RF']['push']({}, '5c1f3kqGetBiIv48/CvuaQv', 'AudioMusic', void 0x0);
            var p = f['ccclass'];
            f['menu'],
            a('AudioMusic', p('AudioMusic')(m = function(q) {
                function v() {
                    for (var x, y = arguments['length'], z = new Array(y), A = 0x0; A < y; A++)
                        z[A] = arguments[A];
                    return (x = q['call']['apply'](q, [this]['concat'](z)) || this)['onComplete'] = null,
                    x['_progress'] = 0x0,
                    x['_url'] = null,
                    x['_isPlay'] = !0x1,
                    x;
                }
                b(v, q);
                var w = v['prototype'];
                return w['load'] = function(x, y, z, A) {
                    var B = this;
                    void 0x0 === A && (A = !0x0),
                    k['res']['load'](y, x, g, function(C, D) {
                        C ? h(C) : (B['playing'] && (B['_isPlay'] = !0x1,
                        B['stop'](),
                        k['res']['release'](B['_url'])),
                        B['loop'] = A,
                        B['clip'] = D,
                        B['enabled'] = !0x0,
                        null == z || z(),
                        B['play'](),
                        B['_url'] = x);
                    });
                }
                ,
                w['update'] = function(x) {
                    var y;
                    (this['currentTime'] > 0x0 && (this['_isPlay'] = !0x0),
                    this['_isPlay'] && 0x0 == this['playing']) && (this['_isPlay'] = !0x1,
                    this['enabled'] = !0x1,
                    null == (y = this['onComplete']) || y['call'](this));
                }
                ,
                w['release'] = function() {
                    this['_url'] && (k['res']['release'](this['_url']),
                    this['_url'] = null);
                }
                ,
                c(v, [{
                    'key': 'progress',
                    'get': function() {
                        return null != this['clip'] ? this['_progress'] = this['duration'] > 0x0 ? this['currentTime'] / this['duration'] : 0x0 : this['_progress'] = 0x0,
                        this['_progress'];
                    },
                    'set': function(x) {
                        null != this['clip'] ? (this['_progress'] = x,
                        this['currentTime'] = x * this['duration']) : (this['_progress'] = 0x0,
                        this['currentTime'] = 0x0);
                    }
                }]),
                v;
            }(j)) || m),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Badge.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './RoundRectMask.ts'], function(j) {
    var k, q, v, x, z, A, B, D, E, F, G, H, I, J, K, L, M, O, P, Q, R;
    return {
        'setters': [function(S) {
            k = S['applyDecoratedDescriptor'],
            q = S['inheritsLoose'],
            v = S['initializerDefineProperty'],
            x = S['assertThisInitialized'],
            z = S['createClass'];
        }
        , function(S) {
            A = S['cclegacy'],
            B = S['_decorator'],
            D = S['Enum'],
            E = S['SpriteFrame'],
            F = S['CCInteger'],
            G = S['color'],
            H = S['UITransform'],
            I = S['Vec3'],
            J = S['Label'],
            K = S['Node'],
            L = S['Layers'],
            M = S['Mask'],
            O = S['Sprite'],
            P = S['Overflow'],
            Q = S['Component'];
        }
        , function(S) {
            R = S['RoundRectMask'];
        }
        ],
        'execute': function() {
            var U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9;
            A['_RF']['push']({}, 'bac76ow94VI+IpAB1DQUKfq', 'Badge', void 0x0);
            var aa = B['ccclass']
              , ab = B['property']
              , ac = j('Position', function(ad) {
                return ad[ad['TOP_LEFT'] = 0x0] = 'TOP_LEFT',
                ad[ad['TOP_RIGHT'] = 0x1] = 'TOP_RIGHT',
                ad;
            }({}));
            D(ac),
            j('Badge', (U = aa('Badge'),
            V = ab({
                'type': E,
                'tooltip': '背景'
            }),
            W = ab({
                'tooltip': '内容'
            }),
            X = ab({
                'type': F,
                'tooltip': '宽'
            }),
            Y = ab({
                'type': F,
                'tooltip': '高'
            }),
            Z = ab({
                'type': F,
                'tooltip': '圆角'
            }),
            a0 = ab({
                'type': ac,
                'tooltip': '位置\x0a\x200:\x20左上角\x20\x0a\x201:\x20右上角'
            }),
            U(((a9 = function(ad) {
                function ae() {
                    for (var ag, ah = arguments['length'], ai = new Array(ah), aj = 0x0; aj < ah; aj++)
                        ai[aj] = arguments[aj];
                    return ag = ad['call']['apply'](ad, [this]['concat'](ai)) || this,
                    v(ag, 'bg', a3, x(ag)),
                    v(ag, 'string', a4, x(ag)),
                    v(ag, 'width', a5, x(ag)),
                    v(ag, 'height', a6, x(ag)),
                    v(ag, 'radius', a7, x(ag)),
                    v(ag, 'position', a8, x(ag)),
                    ag['badgeNode'] = null,
                    ag['color'] = G(0xd6, 0x1e, 0x1e, 0xf0),
                    ag['textColor'] = G(0xff, 0xff, 0xff, 0xff),
                    ag['labelNode'] = null,
                    ag;
                }
                q(ae, ad);
                var af = ae['prototype'];
                return af['onLoad'] = function() {
                    this['initBadge']();
                }
                ,
                af['initBadge'] = function() {
                    var ag = this['createBadge']();
                    this['node']['addChild'](ag);
                }
                ,
                af['setPosition'] = function(ag) {
                    var ah, ai, aj = null == (ah = this['node']['getComponent'](H)) ? void 0x0 : ah['contentSize'];
                    null == (ai = this['badgeNode']['getComponent'](H)) || ai['contentSize'];
                    switch (ag) {
                    case ac['TOP_LEFT']:
                        var ak = -aj['width'] / 0x2
                          , al = aj['height'] / 0x2;
                        this['badgeNode']['setPosition'](new I(ak,al,0x0));
                        break;
                    case ac['TOP_RIGHT']:
                        var am = aj['width'] / 0x2
                          , an = aj['height'] / 0x2;
                        this['badgeNode']['setPosition'](new I(am,an,0x0));
                    }
                }
                ,
                af['setText'] = function(ag) {
                    this['text'] = ag;
                    var ah = this['labelNode']['getComponent'](J);
                    return ah && (ah['string'] = this['text'],
                    ah['color'] = this['textColor']),
                    this;
                }
                ,
                af['createBadge'] = function() {
                    var ag, ah, ai;
                    this['badgeNode'] = new K('BadgeNode');
                    var aj = new K('backgroundNode');
                    this['labelNode'] = new K('labelNode'),
                    this['badgeNode']['layer'] = L['Enum']['UI_2D'],
                    aj['layer'] = L['Enum']['UI_2D'],
                    this['labelNode']['layer'] = L['Enum']['UI_2D'],
                    this['badgeNode']['addComponent'](M),
                    this['badgeNode']['addComponent'](R)['radius'] = this['radius'],
                    null == (ag = this['badgeNode']['getComponent'](H)) || ag['setContentSize'](this['width'], this['height']),
                    this['badgeNode']['active'] = !0x0;
                    var ak = aj['addComponent'](O);
                    ak['type'] = O['Type']['SIMPLE'],
                    ak['color'] = this['color'],
                    ak['spriteFrame'] = this['bg'],
                    null == (ah = aj['getComponent'](H)) || ah['setContentSize'](this['width'], this['height']);
                    var al = this['labelNode']['addComponent'](J);
                    return null == (ai = al['getComponent'](H)) || ai['setContentSize'](this['width'], this['height']),
                    al['string'] = this['text'],
                    al['color'] = this['textColor'],
                    al['fontSize'] = 0x12,
                    al['isBold'] = !0x0,
                    al['horizontalAlign'] = J['HorizontalAlign']['CENTER'],
                    al['verticalAlign'] = J['VerticalAlign']['CENTER'],
                    al['lineHeight'] = 0x0,
                    al['overflow'] = P['NONE'],
                    al['enableWrapText'] = !0x1,
                    this['badgeNode']['addChild'](aj),
                    this['badgeNode']['addChild'](this['labelNode']),
                    this['setPosition'](this['position']),
                    this['badgeNode'];
                }
                ,
                af['start'] = function() {}
                ,
                z(ae, [{
                    'key': 'text',
                    'get': function() {
                        return this['string'];
                    },
                    'set': function(ag) {
                        this['string'] = ag,
                        this['setText'](ag);
                    }
                }]),
                ae;
            }(Q))['POSITION'] = void 0x0,
            a3 = k((a2 = a9)['prototype'], 'bg', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = k(a2['prototype'], 'string', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '6';
                }
            }),
            a5 = k(a2['prototype'], 'width', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x1e;
                }
            }),
            a6 = k(a2['prototype'], 'height', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x1a;
                }
            }),
            a7 = k(a2['prototype'], 'radius', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x6;
                }
            }),
            a8 = k(a2['prototype'], 'position', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return ac['TOP_LEFT'];
                }
            }),
            a1 = a2)) || a1)),
            A['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/BaseCustomEventDefine.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '0bd99usFbhL4pZvlKnxDKEg', 'BaseCustomEventDefine', void 0x0),
            (a('WebGameEvent', {
                'WS_CONNECT': 'WS_CONNECT',
                'WS_NORMAL_CLOSE': 'WS_NORMAL_CLOSE',
                'WS_RECONNECT_Failed': 'WS_RECONNECT_MAX',
                'WS_ERROR_CLOSE': 'WS_ERROR_CLOSE',
                'notify_show': 'notify_show',
                'notify_push': 'notify_push',
                'notify_resize': 'notify_resize',
                'req_exit_game': 'req_exit_game',
                'update_red_point': 'update_red_point',
                'update_player_coin': 'update_player_coin',
                'update_player_vip': 'update_player_vip',
                'update_player_info': 'update_player_info',
                'add_lobby_pop': 'add_lobby_pop',
                'open_lobby_pop': 'open_lobby_pop',
                'close_lobby_pop': 'close_lobby_pop',
                'update_lobby_dynamic_entry': 'update_lobby_dynamic_entry',
                'game_stage_change': 'game_stage_change',
                'req_enterGame': 'req_enterGame',
                'GM2PlatEvent': 0x64,
                'showVideoHelp': 'showVideoHelp',
                'activityClose': 'activityClose',
                'shareEnd': 'shareEnd'
            }),
            a('gameStage', function(c) {
                return c[c['login'] = 0x0] = 'login',
                c[c['lobby'] = 0x1] = 'lobby',
                c[c['game'] = 0x2] = 'game',
                c;
            }({}))),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/BaseGameUIConfig.ts', ['cc', './LayerManager.ts'], function(b) {
    var c, d;
    return {
        'setters': [function(f) {
            c = f['cclegacy'];
        }
        , function(f) {
            d = f['LayerType'];
        }
        ],
        'execute': function() {
            var f, g;
            c['_RF']['push']({}, '41c07oyj7hAhoUxYqQGKXpP', 'BaseGameUIConfig', void 0x0);
            var h = b('BasePModuleID', function(j) {
                return j[j['platform'] = 0xa] = 'platform',
                j[j['setting'] = 0xb] = 'setting',
                j[j['webGame'] = 0x3c] = 'webGame',
                j[j['customer'] = 0x42] = 'customer',
                j[j['game'] = 0x64] = 'game',
                j[j['login'] = 0x65] = 'login',
                j[j['lobby'] = 0x66] = 'lobby',
                j[j['safe'] = 0x67] = 'safe',
                j[j['mail'] = 0x68] = 'mail',
                j[j['rank'] = 0x69] = 'rank',
                j[j['profile'] = 0x6a] = 'profile',
                j[j['activity'] = 0x6b] = 'activity',
                j[j['sign'] = 0x6c] = 'sign',
                j[j['store'] = 0x6d] = 'store',
                j[j['service'] = 0x6e] = 'service',
                j[j['rewardPop'] = 0x6f] = 'rewardPop',
                j[j['agent'] = 0x71] = 'agent',
                j[j['recycle'] = 0x72] = 'recycle',
                j[j['vip'] = 0x73] = 'vip',
                j[j['turntable'] = 0x74] = 'turntable',
                j[j['stageRecharge'] = 0x75] = 'stageRecharge',
                j[j['cashFree'] = 0x76] = 'cashFree',
                j[j['oneBuy'] = 0x77] = 'oneBuy',
                j[j['moneyRain'] = 0x78] = 'moneyRain',
                j[j['task'] = 0x79] = 'task',
                j[j['gameManager'] = 0x320] = 'gameManager',
                j;
            }({}))
              , i = b('UIID', function(j) {
                return j[j['Loading'] = 0x1] = 'Loading',
                j[j['Netinstable'] = 0x2] = 'Netinstable',
                j[j['MessageBox'] = 0x3] = 'MessageBox',
                j[j['gSetting'] = 0x4] = 'gSetting',
                j[j['setting'] = 0x5] = 'setting',
                j[j['hotupdate'] = 0x6] = 'hotupdate',
                j[j['Lobby'] = 0x7] = 'Lobby',
                j[j['Login'] = 0x8] = 'Login',
                j[j['mail'] = 0x9] = 'mail',
                j[j['bank'] = 0xa] = 'bank',
                j[j['store'] = 0xb] = 'store',
                j[j['signIn'] = 0xc] = 'signIn',
                j[j['promote'] = 0xd] = 'promote',
                j[j['safebox'] = 0xe] = 'safebox',
                j[j['safeboxPwd'] = 0xf] = 'safeboxPwd',
                j[j['vip'] = 0x10] = 'vip',
                j[j['luckLottery'] = 0x11] = 'luckLottery',
                j[j['benefit'] = 0x12] = 'benefit',
                j[j['service'] = 0x13] = 'service',
                j[j['rank'] = 0x14] = 'rank',
                j[j['profile'] = 0x15] = 'profile',
                j[j['firstCharge'] = 0x16] = 'firstCharge',
                j[j['notify'] = 0x17] = 'notify',
                j[j['jackpot'] = 0x18] = 'jackpot',
                j[j['activity'] = 0x19] = 'activity',
                j[j['invite'] = 0x1a] = 'invite',
                j[j['recycle'] = 0x1b] = 'recycle',
                j[j['recyclenew'] = 0x1c] = 'recyclenew',
                j[j['bindPhone'] = 0x1d] = 'bindPhone',
                j[j['rewardPop'] = 0x1e] = 'rewardPop',
                j[j['bindTips'] = 0x1f] = 'bindTips',
                j[j['downloadTips'] = 0x20] = 'downloadTips',
                j[j['downloadEntry'] = 0x21] = 'downloadEntry',
                j[j['add2main'] = 0x22] = 'add2main',
                j[j['secondCharge'] = 0x23] = 'secondCharge',
                j[j['bindMail'] = 0x24] = 'bindMail',
                j[j['stageRecharge'] = 0x25] = 'stageRecharge',
                j[j['cashFreeFirst'] = 0x26] = 'cashFreeFirst',
                j[j['cashFreeMain'] = 0x27] = 'cashFreeMain',
                j[j['cashFreeNotify'] = 0x28] = 'cashFreeNotify',
                j[j['task'] = 0x29] = 'task',
                j[j['bindCardTips'] = 0x2a] = 'bindCardTips',
                j;
            }({}));
            b('UIConfigData', ((f = {})[i['Loading']] = {
                'layer': d['PopUp'],
                'prefab': 'common/prefab/loading',
                'bundle': 'resources'
            },
            f[i['MessageBox']] = {
                'layer': d['PopUp'],
                'prefab': 'common/prefab/messagebox',
                'bundle': 'resources'
            },
            f[i['gSetting']] = {
                'layer': d['PopUp'],
                'prefab': 'common/prefab/setting',
                'bundle': 'resources'
            },
            f[i['setting']] = {
                'layer': d['Dialog'],
                'prefab': 'prefab/lobbySetting',
                'bundle': h['lobby']['toString']()
            },
            f[i['Netinstable']] = {
                'layer': d['System'],
                'prefab': 'common/prefab/netinstable',
                'bundle': 'resources'
            },
            f[i['Login']] = {
                'layer': d['UI'],
                'prefab': 'prefab/login',
                'bundle': h['lobby']['toString']()
            },
            f[i['Lobby']] = {
                'layer': d['UI'],
                'prefab': 'prefab/lobby',
                'bundle': h['lobby']['toString']()
            },
            f[i['safebox']] = {
                'layer': d['UI'],
                'prefab': 'prefab/safe_main',
                'bundle': h['safe']['toString']()
            },
            f[i['safeboxPwd']] = {
                'layer': d['UI'],
                'prefab': 'prefab/safe_checkpwd',
                'bundle': h['safe']['toString']()
            },
            f[i['vip']] = {
                'layer': d['UI'],
                'prefab': 'prefab/vip_main',
                'bundle': h['vip']['toString']()
            },
            f[i['store']] = {
                'layer': d['UI'],
                'prefab': 'prefab/mall_main',
                'bundle': h['store']['toString']()
            },
            f[i['firstCharge']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/mall_firstCharge',
                'bundle': h['store']['toString']()
            },
            f[i['secondCharge']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/second_charge',
                'bundle': h['store']['toString']()
            },
            f[i['service']] = {
                'layer': d['UI'],
                'prefab': 'prefab/service',
                'bundle': h['service']['toString']()
            },
            f[i['luckLottery']] = {
                'layer': d['UI'],
                'prefab': 'prefab/lucklottery',
                'bundle': h['turntable']['toString']()
            },
            f[i['benefit']] = {
                'layer': d['UI'],
                'prefab': 'prefab/benefits',
                'bundle': h['turntable']['toString']()
            },
            f[i['mail']] = {
                'layer': d['UI'],
                'prefab': 'prefab/mailMain',
                'bundle': h['mail']['toString']()
            },
            f[i['rank']] = {
                'layer': d['UI'],
                'prefab': 'prefab/rank_main',
                'bundle': h['rank']['toString']()
            },
            f[i['profile']] = {
                'layer': d['UI'],
                'prefab': 'prefab/profile',
                'bundle': h['profile']['toString']()
            },
            f[i['notify']] = {
                'layer': d['UI'],
                'prefab': 'prefab/notify',
                'bundle': h['lobby']['toString']()
            },
            f[i['signIn']] = {
                'layer': d['UI'],
                'prefab': 'prefab/signIn',
                'bundle': h['sign']['toString']()
            },
            f[i['promote']] = {
                'layer': d['UI'],
                'prefab': 'prefab/promote',
                'bundle': h['agent']['toString']()
            },
            f[i['activity']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/activity',
                'bundle': h['activity']['toString']()
            },
            f[i['invite']] = {
                'layer': d['UI'],
                'prefab': 'prefab/invite',
                'bundle': h['agent']['toString']()
            },
            f[i['recycle']] = {
                'layer': d['UI'],
                'prefab': 'prefab/recycle',
                'bundle': h['recycle']['toString']()
            },
            f[i['bindPhone']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/bindPhone',
                'bundle': h['profile']['toString']()
            },
            f[i['bindMail']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/bindEmail',
                'bundle': h['profile']['toString']()
            },
            f[i['rewardPop']] = {
                'layer': d['Dialog'],
                'prefab': 'prefab/rewardPopup',
                'bundle': h['rewardPop']['toString']()
            },
            f[i['bindTips']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/bindTips',
                'bundle': h['lobby']['toString']()
            },
            f[i['downloadTips']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/downloadTips',
                'bundle': h['lobby']['toString']()
            },
            f[i['downloadEntry']] = {
                'layer': d['UI'],
                'prefab': 'prefab/downloadEntry',
                'bundle': h['lobby']['toString']()
            },
            f[i['add2main']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/add2main',
                'bundle': h['lobby']['toString']()
            },
            f[i['stageRecharge']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/stage_view',
                'bundle': h['stageRecharge']['toString']()
            },
            f[i['cashFreeFirst']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/first_turn',
                'bundle': h['cashFree']['toString']()
            },
            f[i['cashFreeMain']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/freeCashMain',
                'bundle': h['cashFree']['toString']()
            },
            f[i['cashFreeNotify']] = {
                'layer': d['PopUp'],
                'prefab': 'prefab/notify_result',
                'bundle': h['cashFree']['toString']()
            },
            f[i['task']] = {
                'layer': d['UI'],
                'prefab': 'prefab/task',
                'bundle': h['task']['toString']()
            },
            f)),
            b('LobbyLanSpriteConfig', ((g = {})[h['safe']] = 'Lobby/safeBox',
            g[h['turntable']] = 'Lobby/luckLottery',
            g[h['service']] = 'Lobby/service',
            g[h['mail']] = 'Lobby/mail',
            g[h['rank']] = 'Lobby/rank',
            g[h['store']] = 'Lobby/mall',
            g[h['rewardPop']] = 'Lobby/rewardPopup',
            g[h['agent']] = 'Lobby/promote',
            g[h['lobby']] = 'Lobby/main',
            g[h['stageRecharge']] = 'Lobby/stage_recharge',
            g[h['cashFree']] = 'Lobby/cashFree',
            g[h['task']] = 'Lobby/task',
            g)),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/BaseNativeFun.ts', ['cc', './Oops.ts', './baseUtils.ts', './BaseStorageConfig.ts'], function(b) {
    var c, d, f, g, h, j;
    return {
        'setters': [function(k) {
            c = k['cclegacy'],
            d = k['sys'],
            f = k['native'];
        }
        , function(k) {
            g = k['oops'];
        }
        , function(k) {
            h = k['utils'];
        }
        , function(k) {
            j = k['BaseStorageConfig'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'e1047xFHuJNOYW421t8kwGu', 'BaseNativeFun', void 0x0);
            var k = 'com/game/utils/ApplicationUtil'
              , m = 'ApplicationUtil'
              , p = b('NativeFun', (function() {
                function q() {}
                return q['getClipboardText'] = function() {
                    var u = '';
                    return d['os'] == d['OS']['ANDROID'] && d['isNative'] ? u = this['callJava'](k, 'getClipboardText', '()Ljava/lang/String;') : d['os'] == d['OS']['IOS'] && d['isNative'] && (u = this['callOc'](m, 'getClipboardText')),
                    u;
                }
                ,
                q['getDevicesID'] = function() {
                    return window.GAME_DATA.account.login.device.id; //☠️ Device ID bypass
                    var u = '';
                    if (d['os'] == d['OS']['ANDROID'] && d['isNative'])
                        u = this['callJava'](k, 'getDeviceId', '()Ljava/lang/String;');
                    else {
                        if (d['os'] == d['OS']['IOS'] && d['isNative']) {
                            var v = g['storage']['get'](j['webDeviceCode'], '');
                            if (h['StringIsNullOrEmpty'](v))
                                v = d['osVersion'] + '_' + d['os'] + '_' + Math['floor'](0x3e8 * Math['random']()) + '_' + Date['now']()['toString'](),
                                g['storage']['set'](j['webDeviceCode'], v);
                            u = v;
                        }
                    }
                    return u;
                }
                ,
                q['getAppVersion'] = function() {
                    var u = '1.0.0';
                    return d['os'] == d['OS']['ANDROID'] && d['isNative'] ? u = this['callJava'](k, 'getAppVersion', '()Ljava/lang/String;') : d['os'] == d['OS']['IOS'] && d['isNative'] && (u = this['callOc'](m, 'getAppVersion')),
                    u;
                }
                ,
                q['getGameChanel'] = function() {
                    var u = 'local';
                    return d['os'] == d['OS']['ANDROID'] && d['isNative'] ? u = this['callJava'](k, 'getChanel', '()Ljava/lang/String;') : d['os'] == d['OS']['IOS'] && d['isNative'] && (u = this['callOc'](m, 'getChanel')),
                    u;
                }
                ,
                q['createChannel'] = function(u, v, w, x) {
                    d['os'] == d['OS']['ANDROID'] && d['isNative'] ? this['callJava'](k, 'createChannel', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V', u, v, w, x) : d['os'] == d['OS']['IOS'] && d['isNative'];
                }
                ,
                q['sendNotification'] = function(u, v, w, x) {
                    void 0x0 === x && (x = this['_channelId']),
                    this['_bCreateChannel'] || (this['createChannel'](this['_channelId'], this['_channelName'], '', 0x5),
                    this['_bCreateChannel'] = !0x0);
                    var y = Date['now']() % 0x3e8;
                    return d['os'] == d['OS']['ANDROID'] && d['isNative'] ? this['callJava'](k, 'sendNotification', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V', u, v, w['toString'](), x, y) : d['os'] == d['OS']['IOS'] && d['isNative'] && this['callOc'](m, 'sendNotification:content:time:notifyID:', u, v, w['toString'](), y),
                    y;
                }
                ,
                q['cancelAllPendingNotification'] = function() {
                    d['os'] == d['OS']['ANDROID'] && d['isNative'] ? this['callJava'](k, 'cancelAllPendingNotification', '()V') : d['os'] == d['OS']['IOS'] && d['isNative'] && this['callOc'](m, 'cancelAllPendingNotification');
                }
                ,
                q['getAppName'] = function() {
                    var u = '';
                    return d['os'] == d['OS']['ANDROID'] && d['isNative'] ? u = this['callJava'](k, 'getAppName', '()Ljava/lang/String;') : d['os'] == d['OS']['IOS'] && d['isNative'] && (u = this['callOc'](m, 'getAppName')),
                    u;
                }
                ,
                q['callJava'] = function(u, v, w) {
                    for (var x, y = arguments['length'], z = new Array(y > 0x3 ? y - 0x3 : 0x0), A = 0x3; A < y; A++)
                        z[A - 0x3] = arguments[A];
                    return (x = f['reflection'])['callStaticMethod']['apply'](x, [u, v, w]['concat'](z));
                }
                ,
                q['callOc'] = function(u, v) {
                    for (var w, x = arguments['length'], y = new Array(x > 0x2 ? x - 0x2 : 0x0), z = 0x2; z < x; z++)
                        y[z - 0x2] = arguments[z];
                    return (w = f['reflection'])['callStaticMethod']['apply'](w, [u, v]['concat'](y));
                }
                ,
                q;
            }()));
            p['_channelId'] = 'DefaultGameChannel',
            p['_channelName'] = 'DefaultGame',
            p['_bCreateChannel'] = !0x1,
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/BaseStorageConfig.ts', ['cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'],
            c = d['_decorator'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '1dbe1ug0ddB5qEnZo4r9q3w', 'BaseStorageConfig', void 0x0),
            (c['ccclass'],
            c['property'],
            a('BaseStorageConfig', {
                'webDeviceCode': 'webDeviceCode',
                'loginIPInfo': 'loginIPInfo',
                'lastRootUrl': 'lastRootUrl',
                'lastRootUrlArry': 'lastRootUrlArry',
                'localRootUrlList': 'localRootUrlList',
                'language': 'language'
            })),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/baseUtils.ts', ['cc', './Oops.ts', './LanguageData.ts', './Language.ts', './BaseNativeFun.ts', './BaseGameUIConfig.ts'], function(b) {
    var d, f, h, j, k, m, p, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['cclegacy'],
            f = y['Animation'],
            h = y['tween'],
            j = y['Button'],
            k = y['sys'],
            m = y['screen'];
        }
        , function(y) {
            p = y['oops'];
        }
        , function(y) {
            q = y['LanguageData'];
        }
        , function(y) {
            v = y['LanguageDefine'],
            w = y['LanguageManager'];
        }
        , null, function(y) {
            x = y['BasePModuleID'];
        }
        ],
        'execute': function() {
            d['_RF']['push']({}, '3d213IQ+/JAHISecf6WQ85k', 'baseUtils', void 0x0),
            b('utils', (function() {
                function y() {}
                return y['StringIsNullOrEmpty'] = function(z) {
                    return null == z || 0x0 == z['length'];
                }
                ,
                y['setLanguage'] = function(z, A) {
                    void 0x0 === A && (A = null),
                    p['storage']['set']('language', z),
                    p['language']['setAssetsPath'](p['config']['game']['languagePathJson'], p['config']['game']['languagePathTexture']),
                    p['language']['setLanguage'](z, function(B) {
                        A && A(B);
                    });
                }
                ,
                y['getUrlParam'] = function(z) {
                    var A = new Object();
                    if (-0x1 != z['indexOf']('?'))
                        for (var B = z['substr'](z['indexOf']('?') + 0x1)['split']('&'), C = 0x0; C < B['length']; C++) {
                            A[B[C]['split']('=')[0x0]] = B[C]['substring'](B[C]['indexOf']('=') + 0x1);
                        }
                    return A;
                }
                ,
                y['playAnimation'] = function(z, A, B, C) {
                    z ? (z['play'](A),
                    z['once'](f['EventType']['FINISHED'], function() {
                        null == C || C();
                    }, B)) : null == C || C();
                }
                ,
                y['tweenNumber'] = function(z, A, B, C, D, E) {
                    void 0x0 === E && (E = 'linear'),
                    B <= 0x0 && (null == D || D(A));
                    var F = {
                        'easing': E,
                        'onUpdate': function(G, H) {
                            null == C || C(G['num'], H);
                        },
                        'onComplete': function(G) {
                            null == D || D(G['num']);
                        }
                    };
                    return h({
                        'num': z
                    })['to'](B, {
                        'num': A
                    }, F)['start']();
                }
                ,
                y['ButtonBindClick'] = function(z, A, B, C, D, E) {
                    void 0x0 === D && (D = x['customer']['toString']()),
                    void 0x0 === E && (E = !0x0),
                    z && (this['StringIsNullOrEmpty'](C) && (C = 'content/audio/button'),
                    E && z['node']['off'](j['EventType']['CLICK']),
                    z['node']['on'](j['EventType']['CLICK'], function() {
                        p['audio']['playEffect'](C, D),
                        null == A || A['call'](B);
                    }, B));
                }
                ,
                y['copyTextToClipboard'] = function(z) {
                    var A = function() {
                        var C = w['getLangByTag']('tips_copy_success');
                        p['gui']['toast'](C);
                    };
                    if (navigator['clipboard'] && navigator['clipboard']['writeText'])
                        navigator['clipboard']['writeText'](z)['then'](function() {
                            A();
                        })['catch'](function(C) {});
                    else {
                        var B = document['createElement']('textarea');
                        B['value'] = z,
                        document['body']['appendChild'](B),
                        B['select']();
                        try {
                            document['execCommand']('copy'),
                            A();
                        } catch (C) {
                            p['log']['logBusiness']('copy\x20err\x20:', C);
                        }
                        document['body']['removeChild'](B);
                    }
                }
                ,
                y['getClipBoardText'] = function(z) {
                    navigator['clipboard'] && navigator['clipboard']['readText'] ? navigator['clipboard']['readText']()['then'](function(A) {
                        null == z || z(A);
                    })['catch'](function(A) {
                        console['warn']('clipText\x20err\x20:', A),
                        null == z || z('');
                    }) : null == z || z('');
                }
                ,
                y['setGameTitle'] = function(z) {
                    k['isBrowser'] && (document['title'] = z);
                }
                ,
                y['reqFullScreen'] = function() {
                    //☠️ Fullscreen bypass
                    return;
                    k['platform'] == k['Platform']['MOBILE_BROWSER'] && m['supportsFullScreen'] && !m['fullScreen']() && m['requestFullScreen']()['catch'](function(z) {
                        console['log']('reqFullScreen\x20err:}', z);
                    });
                }
                ,
                y['httpGet'] = function(z, A, B) {
                    void 0x0 === B && (B = 0x5);
                    var C = new XMLHttpRequest();
                    C['onreadystatechange'] = function() {
                        0x4 == C['readyState'] && (C['status'] >= 0xc8 && C['status'] < 0x12c ? (null == A || A(!0x1, C['response']),
                        A = null) : (null == A || A(!0x0, null),
                        A = null));
                    }
                    ,
                    C['onerror'] = function(D) {
                        null == A || A(!0x0, null),
                        A = null;
                    }
                    ,
                    C['ontimeout'] = function() {
                        null == A || A(!0x0, null),
                        A = null;
                    }
                    ,
                    C['onabort'] = function() {
                        null == A || A(!0x0, null),
                        A = null;
                    }
                    ,
                    C['open']('GET', z, !0x0),
                    B = Math['max'](B, 0x3),
                    B *= 0x3e8,
                    C['timeout'] = B,
                    C['send']();
                }
                ,
                y['decompressZip'] = function(z, A, B) {
                    my_ns['MyUtils']['uncompressDir'](z, A, B);
                }
                ,
                y['loadLanBundle'] = function(z, A, B) {
                    var C = z + '_' + v['EN'];
                    p['language']['hasBundle'](C) ? p['res']['loadBundle'](C)['then'](function() {
                        var D = q['current'];
                        if (D != v['EN']) {
                            var E = z + '_' + D;
                            p['language']['hasBundle'](E) ? p['res']['loadBundle'](E)['then'](function() {
                                null == A || A();
                            })['catch'](function(F) {
                                null == B || B(E),
                                p['log']['logBusiness']('loadLanBundle\x20error:' + E);
                            }) : (null == A || A(),
                            p['log']['logBusiness']('loadLanBundle\x20no\x20bundle:' + E));
                        } else
                            null == A || A();
                    })['catch'](function(D) {
                        null == B || B(C),
                        p['log']['logBusiness']('loadLanBundle\x20error:' + C);
                    }) : null == A || A();
                }
                ,
                y;
            }())),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/BuildTimeConstants.ts', ['cc', './env'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'];
        }
        , function(d) {
            c = d;
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '21a39/4HchJdJkSQKKKkLh9', 'BuildTimeConstants', void 0x0);
            var d = Object['keys'](c)['sort']();
            a('BuildTimeConstants', function() {
                var f = d['reduce'](function(h, i) {
                    return Math['max'](h, i['length']);
                }, 0x0)
                  , g = '' + d['map'](function(h) {
                    var i = c[h]
                      , j = 'boolean' == typeof i ? i ? 'true' : 'false' : i;
                    return '\x0a' + h['padStart'](f, '\x20') + '\x20:\x20' + j;
                });
                console['log'](g);
            }),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ButtonEffect.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './ButtonSimple.ts'], function(b) {
    var d, g, h, j, k, m, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['applyDecoratedDescriptor'],
            g = A['inheritsLoose'],
            h = A['initializerDefineProperty'],
            j = A['assertThisInitialized'],
            k = A['createClass'];
        }
        , function(A) {
            m = A['cclegacy'],
            q = A['_decorator'],
            v = A['Animation'],
            w = A['AnimationClip'],
            x = A['Sprite'];
        }
        , function(A) {
            y = A['oops'];
        }
        , function(A) {
            z = A['default'];
        }
        ],
        'execute': function() {
            var A, B, C, D, F, G;
            m['_RF']['push']({}, '1be36hrGO5Oz6Eapg6ygW03', 'ButtonEffect', void 0x0);
            var H = q['ccclass']
              , I = q['property']
              , J = q['menu'];
            b('default', (A = H('ButtonEffect'),
            B = J('ui/button/ButtonEffect'),
            C = I({
                'tooltip': '是否开启'
            }),
            A(D = B((G = d((F = function(K) {
                function L() {
                    for (var N, O = arguments['length'], P = new Array(O), Q = 0x0; Q < O; Q++)
                        P[Q] = arguments[Q];
                    return N = K['call']['apply'](K, [this]['concat'](P)) || this,
                    h(N, 'disabledEffect', G, j(N)),
                    N['anim'] = void 0x0,
                    N;
                }
                g(L, K);
                var M = L['prototype'];
                return M['onLoad'] = function() {
                    if (K['prototype']['onLoad']['call'](this),
                    !this['disabledEffect']) {
                        this['anim'] = this['node']['addComponent'](v);
                        var N = y['res']['get']('common/anim/button_scale_start', w)
                          , O = y['res']['get']('common/anim/button_scale_end', w);
                        this['anim']['defaultClip'] = N,
                        this['anim']['createState'](N, null == N ? void 0x0 : N['name']),
                        this['anim']['createState'](O, null == O ? void 0x0 : O['name']);
                    }
                }
                ,
                M['onTouchtStart'] = function(N) {
                    this['disabledEffect'] || this['anim']['play']('button_scale_start');
                }
                ,
                M['onTouchEnd'] = function(N) {
                    this['disabledEffect'] || this['anim']['play']('button_scale_end'),
                    K['prototype']['onTouchEnd']['call'](this, N);
                }
                ,
                k(L, [{
                    'key': 'grayscale',
                    'get': function() {
                        return this['node']['getComponent'](x)['grayscale'];
                    },
                    'set': function(N) {
                        this['node']['getComponent'](x) && (this['node']['getComponent'](x)['grayscale'] = N);
                    }
                }]),
                L;
            }(z))['prototype'], 'disabledEffect', [C], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            D = F)) || D) || D)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ButtonSimple.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, d, f, g, j, k, l, m, p;
    return {
        'setters': [function(q) {
            b = q['applyDecoratedDescriptor'],
            d = q['inheritsLoose'],
            f = q['initializerDefineProperty'],
            g = q['assertThisInitialized'];
        }
        , function(q) {
            j = q['cclegacy'],
            k = q['_decorator'],
            l = q['Node'],
            m = q['game'],
            p = q['Component'];
        }
        ],
        'execute': function() {
            var q, w, x, z, A, B, D, F;
            j['_RF']['push']({}, '8d645yObX1FvJfk2sbi0rxp', 'ButtonSimple', void 0x0);
            var G = k['ccclass']
              , H = k['property']
              , I = k['menu'];
            a('default', (q = G('ButtonSimple'),
            w = I('ui/button/ButtonSimple'),
            x = H({
                'tooltip': '是否只能触发一次'
            }),
            z = H({
                'tooltip': '每次触发间隔'
            }),
            q(A = w((D = b((B = function(J) {
                function K() {
                    for (var M, N = arguments['length'], O = new Array(N), P = 0x0; P < N; P++)
                        O[P] = arguments[P];
                    return M = J['call']['apply'](J, [this]['concat'](O)) || this,
                    f(M, 'once', D, g(M)),
                    f(M, 'interval', F, g(M)),
                    M['touchCount'] = 0x0,
                    M['touchtEndTime'] = 0x0,
                    M;
                }
                d(K, J);
                var L = K['prototype'];
                return L['onLoad'] = function() {
                    this['node']['on'](l['EventType']['TOUCH_START'], this['onTouchtStart'], this),
                    this['node']['on'](l['EventType']['TOUCH_END'], this['onTouchEnd'], this),
                    this['node']['on'](l['EventType']['TOUCH_CANCEL'], this['onTouchEnd'], this);
                }
                ,
                L['onTouchtStart'] = function(M) {}
                ,
                L['onTouchEnd'] = function(M) {
                    if (this['once']) {
                        if (this['touchCount'] > 0x0)
                            return void (M['propagationStopped'] = !0x0);
                        this['touchCount']++;
                    }
                    this['touchtEndTime'] && m['totalTime'] - this['touchtEndTime'] < this['interval'] ? M['propagationStopped'] = !0x0 : this['touchtEndTime'] = m['totalTime'];
                }
                ,
                L['onDestroy'] = function() {
                    this['node']['off'](l['EventType']['TOUCH_START'], this['onTouchtStart'], this),
                    this['node']['off'](l['EventType']['TOUCH_END'], this['onTouchEnd'], this),
                    this['node']['off'](l['EventType']['TOUCH_CANCEL'], this['onTouchEnd'], this);
                }
                ,
                K;
            }(p))['prototype'], 'once', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            F = b(B['prototype'], 'interval', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x1f4;
                }
            }),
            A = B)) || A) || A)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ButtonTouchLong.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './ButtonEffect.ts'], function(a) {
    var b, d, f, g, h, j, k, l;
    return {
        'setters': [function(m) {
            b = m['applyDecoratedDescriptor'],
            d = m['inheritsLoose'],
            f = m['initializerDefineProperty'],
            g = m['assertThisInitialized'];
        }
        , function(m) {
            h = m['cclegacy'],
            j = m['_decorator'],
            k = m['EventHandler'];
        }
        , function(m) {
            l = m['default'];
        }
        ],
        'execute': function() {
            var q, w, x, y, z, A, B, C;
            h['_RF']['push']({}, 'da96en7WYpPTaPIkO1l/Nux', 'ButtonTouchLong', void 0x0);
            var D = j['ccclass']
              , E = j['property']
              , F = j['menu'];
            a('ButtonTouchLong', (q = D('ButtonTouchLong'),
            w = F('ui/button/ButtonTouchLong'),
            x = E({
                'tooltip': '长按时间（秒）'
            }),
            y = E({
                'type': [k],
                'tooltip': '处理事件'
            }),
            q(z = w((B = b((A = function(G) {
                function H() {
                    for (var J, K = arguments['length'], M = new Array(K), N = 0x0; N < K; N++)
                        M[N] = arguments[N];
                    return J = G['call']['apply'](G, [this]['concat'](M)) || this,
                    f(J, 'time', B, g(J)),
                    f(J, 'clickEvents', C, g(J)),
                    J['_passTime'] = 0x0,
                    J['_isTouchLong'] = !0x0,
                    J['_event'] = null,
                    J;
                }
                d(H, G);
                var I = H['prototype'];
                return I['onLoad'] = function() {
                    this['_isTouchLong'] = !0x1,
                    G['prototype']['onLoad']['call'](this);
                }
                ,
                I['onTouchtStart'] = function(J) {
                    this['_event'] = J,
                    this['_passTime'] = 0x0,
                    G['prototype']['onTouchtStart']['call'](this, J);
                }
                ,
                I['onTouchEnd'] = function(J) {
                    this['_passTime'] > this['time'] && (J['propagationStopped'] = !0x0),
                    this['_event'] = null,
                    this['_passTime'] = 0x0,
                    this['_isTouchLong'] = !0x1,
                    G['prototype']['onTouchEnd']['call'](this, J);
                }
                ,
                I['removeTouchLong'] = function() {
                    this['_event'] = null,
                    this['_isTouchLong'] = !0x1;
                }
                ,
                I['update'] = function(J) {
                    null == this['_event'] || this['_isTouchLong'] || (this['_passTime'] += J,
                    this['_passTime'] >= this['time'] && (this['_isTouchLong'] = !0x0,
                    this['clickEvents']['forEach'](function(K) {
                        K['emit']([K['customEventData']]);
                    }),
                    this['removeTouchLong']()));
                }
                ,
                H;
            }(l))['prototype'], 'time', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x1;
                }
            }),
            C = b(A['prototype'], 'clickEvents', [y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return [];
                }
            }),
            z = A)) || z) || z)),
            h['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/CameraUtil.ts', ['cc'], function(a) {
    var b, c, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            c = f['Vec3'],
            d = f['view'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '95c77QQpp1EjKj8UBFCCdKu', 'CameraUtil', void 0x0),
            a('CameraUtil', (function() {
                function f() {}
                return f['isInView'] = function(g, h) {
                    var j = g['node']['getWorldPosition']()
                      , k = g['worldToScreen'](h)
                      , l = c['normalize'](new c(), h['subtract'](j))
                      , m = g['node']['forward']
                      , p = c['dot'](m, l)
                      , q = d['getViewportRect']();
                    return p > 0x0 && k['x'] <= q['width'] && k['x'] >= 0x0 && k['y'] <= q['height'] && k['y'] >= 0x0;
                }
                ,
                f;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Collection.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g;
    return {
        'setters': [function(h) {
            c = h['inheritsLoose'],
            d = h['createClass'],
            f = h['wrapNativeSuper'];
        }
        , function(h) {
            g = h['cclegacy'];
        }
        ],
        'execute': function() {
            g['_RF']['push']({}, '1dcf5AtQQVK3KQ/2jHHD5gi', 'Collection', void 0x0),
            b('Collection', function(h) {
                function j() {
                    for (var l, m = arguments['length'], n = new Array(m), o = 0x0; o < m; o++)
                        n[o] = arguments[o];
                    return (l = h['call']['apply'](h, [this]['concat'](n)) || this)['_array'] = [],
                    l;
                }
                c(j, h);
                var k = j['prototype'];
                return k['set'] = function(l, m) {
                    return this['has'](l) || this['_array']['push'](m),
                    h['prototype']['set']['call'](this, l, m);
                }
                ,
                k['delete'] = function(l) {
                    var m = this['get'](l);
                    if (m) {
                        var n = this['_array']['indexOf'](m);
                        return n > -0x1 && this['_array']['splice'](n, 0x1),
                        h['prototype']['delete']['call'](this, l);
                    }
                    return !0x1;
                }
                ,
                k['clear'] = function() {
                    this['_array']['splice'](0x0, this['_array']['length']),
                    h['prototype']['clear']['call'](this);
                }
                ,
                d(j, [{
                    'key': 'array',
                    'get': function() {
                        return this['_array'];
                    }
                }]),
                j;
            }(f(Map))),
            g['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/CommonPrompt.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageLabel.ts', './Oops.ts'], function(b) {
    var d, f, g, h, j, k, m, p, q;
    return {
        'setters': [function(u) {
            d = u['applyDecoratedDescriptor'],
            f = u['inheritsLoose'],
            g = u['initializerDefineProperty'],
            h = u['assertThisInitialized'];
        }
        , function(u) {
            j = u['cclegacy'],
            k = u['_decorator'],
            m = u['Component'];
        }
        , function(u) {
            p = u['LanguageLabel'];
        }
        , function(u) {
            q = u['oops'];
        }
        ],
        'execute': function() {
            var w, x, z, A, B, D, E, F, G, H, I;
            j['_RF']['push']({}, '653bf8VPC5Fn49zFJFqXVgx', 'CommonPrompt', void 0x0);
            var J = k['ccclass']
              , K = k['property'];
            b('CommonPrompt', (w = J('CommonPrompt'),
            x = K(p),
            z = K(p),
            A = K(p),
            B = K(p),
            w((F = d((E = function(L) {
                function M() {
                    for (var O, P = arguments['length'], Q = new Array(P), R = 0x0; R < P; R++)
                        Q[R] = arguments[R];
                    return O = L['call']['apply'](L, [this]['concat'](Q)) || this,
                    g(O, 'lab_title', F, h(O)),
                    g(O, 'lab_content', G, h(O)),
                    g(O, 'lab_ok', H, h(O)),
                    g(O, 'lab_cancel', I, h(O)),
                    O['config'] = {},
                    O;
                }
                f(M, L);
                var N = M['prototype'];
                return N['onTouchEnd'] = function(O, P) {
                    switch (O['target']['name']) {
                    case 'btn_ok':
                        this['onOk']();
                        break;
                    case 'btn_cancel':
                        this['onCancel']();
                    }
                }
                ,
                N['onAdded'] = function(O) {
                    void 0x0 === O && (O = {}),
                    this['config'] = O || {},
                    this['setTitle'](),
                    this['setContent'](),
                    this['setBtnOkLabel'](),
                    this['setBtnCancelLabel'](),
                    this['node']['active'] = !0x0;
                }
                ,
                N['setTitle'] = function() {
                    this['lab_title']['key'] = this['config']['title'];
                }
                ,
                N['setContent'] = function() {
                    this['lab_content']['key'] = this['config']['content'];
                }
                ,
                N['setBtnOkLabel'] = function() {
                    this['lab_ok']['key'] = this['config']['okWord'];
                }
                ,
                N['setBtnCancelLabel'] = function() {
                    this['lab_cancel']['key'] = this['config']['cancelWord'],
                    this['lab_cancel']['node']['parent']['active'] = this['config']['needCancel'] || !0x1,
                    this['config']['needCancel'] || (this['lab_ok']['node']['parent']['position']['x'] = 0x0);
                }
                ,
                N['onOk'] = function() {
                    'function' == typeof this['config']['okFunc'] && this['config']['okFunc'](),
                    this['close']();
                }
                ,
                N['onClose'] = function() {
                    'function' == typeof this['config']['closeFunc'] && this['config']['closeFunc'](),
                    this['close']();
                }
                ,
                N['onCancel'] = function() {
                    'function' == typeof this['config']['cancelFunc'] && this['config']['cancelFunc'](),
                    this['close']();
                }
                ,
                N['close'] = function() {
                    q['gui']['removeByNode'](this['node']);
                }
                ,
                N['onDestroy'] = function() {
                    this['config'] = null;
                }
                ,
                M;
            }(m))['prototype'], 'lab_title', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            G = d(E['prototype'], 'lab_content', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            H = d(E['prototype'], 'lab_ok', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            I = d(E['prototype'], 'lab_cancel', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            D = E)) || D)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Config.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '5034dEezo5Frr6dhZGVgmTh', 'Config', void 0x0),
            a('Config', function() {
                this['btc'] = void 0x0,
                this['game'] = void 0x0,
                this['query'] = void 0x0;
            }),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/debug-view-runtime-control.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var f, j, k, q, v, w, x, y, z, A, B, D, E, F, G, H, I;
    return {
        'setters': [function(J) {
            f = J['applyDecoratedDescriptor'],
            j = J['inheritsLoose'],
            k = J['initializerDefineProperty'],
            q = J['assertThisInitialized'];
        }
        , function(J) {
            v = J['cclegacy'],
            w = J['_decorator'],
            x = J['Node'],
            y = J['Color'],
            z = J['Canvas'],
            A = J['UITransform'],
            B = J['instantiate'],
            D = J['Label'],
            E = J['RichText'],
            F = J['Toggle'],
            G = J['Button'],
            H = J['director'],
            I = J['Component'];
        }
        ],
        'execute': function() {
            var J, K, N, O, P, Q, R, U, V;
            v['_RF']['push']({}, 'b2bd1+njXxJxaFY3ymm06WU', 'debug-view-runtime-control', void 0x0);
            var W = w['ccclass']
              , X = w['property'];
            b('DebugViewRuntimeControl', (J = W('internal.DebugViewRuntimeControl'),
            K = X(x),
            N = X(x),
            O = X(x),
            J((R = f((Q = function(Y) {
                function Z() {
                    for (var a1, a2 = arguments['length'], a3 = new Array(a2), a4 = 0x0; a4 < a2; a4++)
                        a3[a4] = arguments[a4];
                    return a1 = Y['call']['apply'](Y, [this]['concat'](a3)) || this,
                    k(a1, 'compositeModeToggle', R, q(a1)),
                    k(a1, 'singleModeToggle', U, q(a1)),
                    k(a1, 'EnableAllCompositeModeButton', V, q(a1)),
                    a1['_single'] = 0x0,
                    a1['strSingle'] = ['No\x20Single\x20Debug', 'Vertex\x20Color', 'Vertex\x20Normal', 'Vertex\x20Tangent', 'World\x20Position', 'Vertex\x20Mirror', 'Face\x20Side', 'UV0', 'UV1', 'UV\x20Lightmap', 'Project\x20Depth', 'Linear\x20Depth', 'Fragment\x20Normal', 'Fragment\x20Tangent', 'Fragment\x20Binormal', 'Base\x20Color', 'Diffuse\x20Color', 'Specular\x20Color', 'Transparency', 'Metallic', 'Roughness', 'Specular\x20Intensity', 'IOR', 'Direct\x20Diffuse', 'Direct\x20Specular', 'Direct\x20All', 'Env\x20Diffuse', 'Env\x20Specular', 'Env\x20All', 'Emissive', 'Light\x20Map', 'Shadow', 'AO', 'Fresnel', 'Direct\x20Transmit\x20Diffuse', 'Direct\x20Transmit\x20Specular', 'Env\x20Transmit\x20Diffuse', 'Env\x20Transmit\x20Specular', 'Transmit\x20All', 'Direct\x20Internal\x20Specular', 'Env\x20Internal\x20Specular', 'Internal\x20All', 'Fog'],
                    a1['strComposite'] = ['Direct\x20Diffuse', 'Direct\x20Specular', 'Env\x20Diffuse', 'Env\x20Specular', 'Emissive', 'Light\x20Map', 'Shadow', 'AO', 'Normal\x20Map', 'Fog', 'Tone\x20Mapping', 'Gamma\x20Correction', 'Fresnel', 'Transmit\x20Diffuse', 'Transmit\x20Specular', 'Internal\x20Specular', 'TT'],
                    a1['strMisc'] = ['CSM\x20Layer\x20Coloration', 'Lighting\x20With\x20Albedo'],
                    a1['compositeModeToggleList'] = [],
                    a1['singleModeToggleList'] = [],
                    a1['miscModeToggleList'] = [],
                    a1['textComponentList'] = [],
                    a1['labelComponentList'] = [],
                    a1['textContentList'] = [],
                    a1['hideButtonLabel'] = void 0x0,
                    a1['_currentColorIndex'] = 0x0,
                    a1['strColor'] = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'],
                    a1['color'] = [y['WHITE'], y['BLACK'], y['RED'], y['GREEN'], y['BLUE']],
                    a1;
                }
                j(Z, Y);
                var a0 = Z['prototype'];
                return a0['start'] = function() {
                    if (this['node']['parent']['getComponent'](z)) {
                        var a1 = this['node']['parent']['getComponent'](A)
                          , a2 = 0.5 * a1['width']
                          , a3 = 0.5 * a1['height']
                          , a4 = 0.1 * a2 - a2
                          , a5 = a3 - 0.1 * a3
                          , a6 = this['node']['getChildByName']('MiscMode')
                          , a7 = B(a6);
                        a7['parent'] = this['node'],
                        a7['name'] = 'Buttons';
                        var a8 = B(a6);
                        a8['parent'] = this['node'],
                        a8['name'] = 'Titles';
                        for (var a9 = 0x0; a9 < 0x2; a9++) {
                            var aa = B(this['EnableAllCompositeModeButton']['getChildByName']('Label'));
                            aa['setPosition'](a4 + (a9 > 0x0 ? 0x1c2 : 0x96), a5, 0x0),
                            aa['setScale'](0.75, 0.75, 0.75),
                            aa['parent'] = a8;
                            var ab = aa['getComponent'](D);
                            ab['string'] = a9 ? '----------Composite\x20Mode----------' : '----------Single\x20Mode----------',
                            ab['color'] = y['WHITE'],
                            ab['overflow'] = 0x0,
                            this['labelComponentList'][this['labelComponentList']['length']] = ab;
                        }
                        a5 -= 0x14;
                        for (var ac = 0x0, ad = 0x0; ad < this['strSingle']['length']; ad++,
                        ac++) {
                            ad === this['strSingle']['length'] >> 0x1 && (a4 += 0xc8,
                            ac = 0x0);
                            var ae = ad ? B(this['singleModeToggle']) : this['singleModeToggle'];
                            ae['setPosition'](a4, a5 - 0x14 * ac, 0x0),
                            ae['setScale'](0.5, 0.5, 0.5),
                            ae['parent'] = this['singleModeToggle']['parent'];
                            var af = ae['getComponentInChildren'](E);
                            af['string'] = this['strSingle'][ad],
                            this['textComponentList'][this['textComponentList']['length']] = af,
                            this['textContentList'][this['textContentList']['length']] = af['string'],
                            ae['on'](F['EventType']['TOGGLE'], this['toggleSingleMode'], this),
                            this['singleModeToggleList'][ad] = ae;
                        }
                        a4 += 0xc8,
                        this['EnableAllCompositeModeButton']['setPosition'](a4 + 0xf, a5, 0x0),
                        this['EnableAllCompositeModeButton']['setScale'](0.5, 0.5, 0.5),
                        this['EnableAllCompositeModeButton']['on'](G['EventType']['CLICK'], this['enableAllCompositeMode'], this),
                        this['EnableAllCompositeModeButton']['parent'] = a7;
                        var ag = this['EnableAllCompositeModeButton']['getComponentInChildren'](D);
                        this['labelComponentList'][this['labelComponentList']['length']] = ag;
                        var ah = B(this['EnableAllCompositeModeButton']);
                        ah['setPosition'](a4 + 0x5a, a5, 0x0),
                        ah['setScale'](0.5, 0.5, 0.5),
                        ah['on'](G['EventType']['CLICK'], this['changeTextColor'], this),
                        ah['parent'] = a7,
                        (ag = ah['getComponentInChildren'](D))['string'] = 'TextColor',
                        this['labelComponentList'][this['labelComponentList']['length']] = ag;
                        var ai = B(this['EnableAllCompositeModeButton']);
                        ai['setPosition'](a4 + 0xc8, a5, 0x0),
                        ai['setScale'](0.5, 0.5, 0.5),
                        ai['on'](G['EventType']['CLICK'], this['hideUI'], this),
                        ai['parent'] = this['node']['parent'],
                        (ag = ai['getComponentInChildren'](D))['string'] = 'Hide\x20UI',
                        this['labelComponentList'][this['labelComponentList']['length']] = ag,
                        this['hideButtonLabel'] = ag,
                        a5 -= 0x28;
                        for (var aj = 0x0; aj < this['strMisc']['length']; aj++) {
                            var ak = B(this['compositeModeToggle']);
                            ak['setPosition'](a4, a5 - 0x14 * aj, 0x0),
                            ak['setScale'](0.5, 0.5, 0.5),
                            ak['parent'] = a6;
                            var al = ak['getComponentInChildren'](E);
                            al['string'] = this['strMisc'][aj],
                            this['textComponentList'][this['textComponentList']['length']] = al,
                            this['textContentList'][this['textContentList']['length']] = al['string'],
                            ak['getComponent'](F)['isChecked'] = !!aj,
                            ak['on'](F['EventType']['TOGGLE'], aj ? this['toggleLightingWithAlbedo'] : this['toggleCSMColoration'], this),
                            this['miscModeToggleList'][aj] = ak;
                        }
                        a5 -= 0x96;
                        for (var am = 0x0; am < this['strComposite']['length']; am++) {
                            var an = am ? B(this['compositeModeToggle']) : this['compositeModeToggle'];
                            an['setPosition'](a4, a5 - 0x14 * am, 0x0),
                            an['setScale'](0.5, 0.5, 0.5),
                            an['parent'] = this['compositeModeToggle']['parent'];
                            var ao = an['getComponentInChildren'](E);
                            ao['string'] = this['strComposite'][am],
                            this['textComponentList'][this['textComponentList']['length']] = ao,
                            this['textContentList'][this['textContentList']['length']] = ao['string'],
                            an['on'](F['EventType']['TOGGLE'], this['toggleCompositeMode'], this),
                            this['compositeModeToggleList'][am] = an;
                        }
                    } else
                        console['error']('debug-view-runtime-control\x20should\x20be\x20child\x20of\x20Canvas');
                }
                ,
                a0['isTextMatched'] = function(a1, a2) {
                    var a3 = new String(a1)
                      , a4 = a3['search']('>');
                    return -0x1 === a4 ? a1 === a2 : (a3 = (a3 = a3['substr'](a4 + 0x1))['substr'](0x0, a3['search']('<'))) === a2;
                }
                ,
                a0['toggleSingleMode'] = function(a1) {
                    for (var a2 = H['root']['debugView'], a3 = a1['getComponentInChildren'](E), a4 = 0x0; a4 < this['strSingle']['length']; a4++)
                        this['isTextMatched'](a3['string'], this['strSingle'][a4]) && (a2['singleMode'] = a4);
                }
                ,
                a0['toggleCompositeMode'] = function(a1) {
                    for (var a2 = H['root']['debugView'], a3 = a1['getComponentInChildren'](E), a4 = 0x0; a4 < this['strComposite']['length']; a4++)
                        this['isTextMatched'](a3['string'], this['strComposite'][a4]) && a2['enableCompositeMode'](a4, a1['isChecked']);
                }
                ,
                a0['toggleLightingWithAlbedo'] = function(a1) {
                    H['root']['debugView']['lightingWithAlbedo'] = a1['isChecked'];
                }
                ,
                a0['toggleCSMColoration'] = function(a1) {
                    H['root']['debugView']['csmLayerColoration'] = a1['isChecked'];
                }
                ,
                a0['enableAllCompositeMode'] = function(a1) {
                    var a2 = H['root']['debugView'];
                    a2['enableAllCompositeMode'](!0x0);
                    for (var a3 = 0x0; a3 < this['compositeModeToggleList']['length']; a3++) {
                        this['compositeModeToggleList'][a3]['getComponent'](F)['isChecked'] = !0x0;
                    }
                    var a4 = this['miscModeToggleList'][0x0]['getComponent'](F);
                    a4['isChecked'] = !0x1,
                    a2['csmLayerColoration'] = !0x1,
                    (a4 = this['miscModeToggleList'][0x1]['getComponent'](F))['isChecked'] = !0x0,
                    a2['lightingWithAlbedo'] = !0x0;
                }
                ,
                a0['hideUI'] = function(a1) {
                    var a2 = this['node']['getChildByName']('Titles')
                      , a3 = !a2['active'];
                    this['singleModeToggleList'][0x0]['parent']['active'] = a3,
                    this['miscModeToggleList'][0x0]['parent']['active'] = a3,
                    this['compositeModeToggleList'][0x0]['parent']['active'] = a3,
                    this['EnableAllCompositeModeButton']['parent']['active'] = a3,
                    a2['active'] = a3,
                    this['hideButtonLabel']['string'] = a3 ? 'Hide\x20UI' : 'Show\x20UI';
                }
                ,
                a0['changeTextColor'] = function(a1) {
                    this['_currentColorIndex']++,
                    this['_currentColorIndex'] >= this['strColor']['length'] && (this['_currentColorIndex'] = 0x0);
                    for (var a2 = 0x0; a2 < this['textComponentList']['length']; a2++)
                        this['textComponentList'][a2]['string'] = this['strColor'][this['_currentColorIndex']] + this['textContentList'][a2] + '</color>';
                    for (var a3 = 0x0; a3 < this['labelComponentList']['length']; a3++)
                        this['labelComponentList'][a3]['color'] = this['color'][this['_currentColorIndex']];
                }
                ,
                a0['onLoad'] = function() {}
                ,
                a0['update'] = function(a1) {}
                ,
                Z;
            }(I))['prototype'], 'compositeModeToggle', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            U = f(Q['prototype'], 'singleModeToggle', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            V = f(Q['prototype'], 'EnableAllCompositeModeButton', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            P = Q)) || P)),
            v['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Defines.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '82d3a9c71JEkI95d3qscHm8', 'Defines', void 0x0),
            a('ViewParams', function() {
                this['uuid'] = null,
                this['prefabPath'] = null,
                this['params'] = null,
                this['callbacks'] = null,
                this['valid'] = !0x0,
                this['node'] = null;
            }),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/DelegateComponent.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(b) {
    var c, d, f, g, h;
    return {
        'setters': [function(i) {
            c = i['inheritsLoose'];
        }
        , function(i) {
            d = i['cclegacy'],
            f = i['_decorator'],
            g = i['Component'];
        }
        , function(i) {
            h = i['oops'];
        }
        ],
        'execute': function() {
            var j;
            d['_RF']['push']({}, 'd8f1fGRD7dBzIeBSkOpd/Py', 'DelegateComponent', void 0x0);
            var k = f['ccclass'];
            b('DelegateComponent', k('DelegateComponent')(j = function(l) {
                function m() {
                    for (var q, u = arguments['length'], v = new Array(u), w = 0x0; w < u; w++)
                        v[w] = arguments[w];
                    return (q = l['call']['apply'](l, [this]['concat'](v)) || this)['viewParams'] = null,
                    q;
                }
                c(m, l);
                var p = m['prototype'];
                return p['add'] = function() {
                    this['applyComponentsFunction'](this['node'], 'onAdded', this['viewParams']['params']),
                    'function' == typeof this['viewParams']['callbacks']['onAdded'] && this['viewParams']['callbacks']['onAdded'](this['node'], this['viewParams']['params']);
                }
                ,
                p['remove'] = function(q) {
                    var u = this;
                    this['viewParams']['valid'] && (this['applyComponentsFunction'](this['node'], 'onBeforeRemove', this['viewParams']['params']),
                    'function' == typeof this['viewParams']['callbacks']['onBeforeRemove'] ? this['viewParams']['callbacks']['onBeforeRemove'](this['node'], function() {
                        u['removed'](u['viewParams'], q);
                    }) : this['removed'](this['viewParams'], q));
                }
                ,
                p['removed'] = function(q, u) {
                    q['valid'] = !0x1,
                    'function' == typeof q['callbacks']['onRemoved'] && q['callbacks']['onRemoved'](this['node'], q['params']),
                    u ? (this['node']['destroy'](),
                    h['res']['release'](q['prefabPath'])) : this['node']['removeFromParent']();
                }
                ,
                p['onDestroy'] = function() {
                    this['applyComponentsFunction'](this['node'], 'onRemoved', this['viewParams']['params']),
                    'function' == typeof this['viewParams']['callbacks']['onRemoved'] && this['viewParams']['callbacks']['onRemoved'](this['node'], this['viewParams']['params']),
                    this['viewParams'] = null;
                }
                ,
                p['applyComponentsFunction'] = function(q, u, v) {
                    for (var w = 0x0; w < q['components']['length']; w++) {
                        var x = q['components'][w]
                          , y = x[u];
                        y && y['call'](x, v);
                    }
                }
                ,
                m;
            }(g)) || j),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/DownGameTask.ts', ['cc', './VersionManager.ts'], function(b) {
    var c, d, f, g, h, j, k;
    return {
        'setters': [function(m) {
            c = m['cclegacy'],
            d = m['native'];
        }
        , function(m) {
            f = m['DownTempDir'],
            g = m['WriteableDir'],
            h = m['getDirByUrl'],
            j = m['SubGameState'],
            k = m['decompressZip'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '52a7fo1BWxJvK/nCRKa6ofq', 'DownGameTask', void 0x0),
            b('DownGameTask', (function() {
                function m(q, r, u, v, w) {
                    this['baseUrl'] = '',
                    this['downFileList'] = [],
                    this['progressCallback'] = null,
                    this['completeCallback'] = null,
                    this['errCall'] = null,
                    this['bStop'] = !0x1,
                    this['downLoadSize'] = 0x0,
                    this['downedSize'] = 0x0,
                    this['zipList'] = [],
                    this['downedSize'] = 0x0,
                    this['baseUrl'] = q,
                    this['downFileList'] = r['changeList'],
                    this['downLoadSize'] = r['totalDownSize'],
                    this['zipList'] = [],
                    this['errCall'] = u,
                    this['progressCallback'] = v,
                    this['completeCallback'] = w;
                }
                var p = m['prototype'];
                return p['start'] = function() {
                    this['bStop'] || this['downFiles']();
                }
                ,
                p['stop'] = function() {
                    this['bStop'] = !0x0;
                }
                ,
                p['resume'] = function() {
                    this['bStop'] = !0x1,
                    this['downFiles']();
                }
                ,
                p['downFiles'] = function() {
                    var q = this;
                    !function r() {
                        if (!q['bStop']) {
                            var u = q['downFileList']['pop']();
                            if (u) {
                                var v = '';
                                u['fileName']['endsWith']('.zip') ? (q['zipList']['push'](u),
                                v = f + '/' + u['fileName']) : v = g + '/' + u['fileName'];
                                var w = h(v);
                                d['fileUtils']['isDirectoryExist'](w) || d['fileUtils']['createDirectory'](w),
                                q['downloadFile'](q['baseUrl'] + u['fileName'], v, q['progressCallback'], function(x) {
                                    null == q['errCall'] || q['errCall'](j['DOWNLOAD_FAIL'], x);
                                }, function() {
                                    r();
                                });
                            } else
                                q['uncompressZip'](q['zipList'], function(x) {
                                    null == q['errCall'] || q['errCall'](j['UN_ZIP_FAIL'], x);
                                }, function() {
                                    null == q['completeCallback'] || q['completeCallback']();
                                });
                        }
                    }();
                }
                ,
                p['uncompressZip'] = function(q, u, v) {
                    var w = this;
                    !function x() {
                        if (!w['bStop']) {
                            var y = q['pop']();
                            if (y) {
                                var z = f + '/' + y['fileName']
                                  , A = g + '/' + y['fileName']
                                  , B = h(A);
                                d['fileUtils']['isDirectoryExist'](B) || d['fileUtils']['createDirectory'](B),
                                k(z, B, function(C) {
                                    C ? x() : u(y['fileName']);
                                });
                            } else
                                v();
                        }
                    }();
                }
                ,
                p['downloadFile'] = function(q, r, u, v, w) {
                    var x = this
                      , y = new d['Downloader']();
                    y['onProgress'] = function(z, A, B, C) {
                        x['downedSize'] = x['downedSize'] + A,
                        u(x['downedSize'] / x['downLoadSize']);
                    }
                    ,
                    y['onSuccess'] = function(z) {
                        w();
                    }
                    ,
                    y['onError'] = function(z, A, B, C) {
                        v(q);
                    }
                    ,
                    y['createDownloadTask'](q, r);
                }
                ,
                m;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/EncryptUtil.ts', ['cc', './index2.js'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'];
        }
        , function(d) {
            c = d['default'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '46d12Bx4JdKnIYHhcvNk6S1', 'EncryptUtil', void 0x0);
            var d = a('EncryptUtil', (function() {
                function e() {}
                return e['md5'] = function(f) {
                    return c['MD5'](f)['toString']();
                }
                ,
                e['initCrypto'] = function(f, g) {
                    this['key'] = f,
                    this['iv'] = c['enc']['Hex']['parse'](g);
                }
                ,
                e['aesEncrypt'] = function(f, g, h) {
                    return c['AES']['encrypt'](f, this['key'], {
                        'iv': this['iv'],
                        'format': this['JsonFormatter']
                    })['toString']();
                }
                ,
                e['aesDecrypt'] = function(f, g, h) {
                    return c['AES']['decrypt'](f, this['key'], {
                        'iv': this['iv'],
                        'format': this['JsonFormatter']
                    })['toString'](c['enc']['Utf8']);
                }
                ,
                e;
            }()));
            d['key'] = null,
            d['iv'] = null,
            d['JsonFormatter'] = {
                'stringify': function(e) {
                    var f = {
                        'ct': e['ciphertext']['toString'](c['enc']['Base64'])
                    };
                    return e['iv'] && (f['iv'] = e['iv']['toString']()),
                    e['salt'] && (f['s'] = e['salt']['toString']()),
                    JSON['stringify'](f);
                },
                'parse': function(e) {
                    var f = JSON['parse'](e)
                      , g = c['lib']['CipherParams']['create']({
                        'ciphertext': c['enc']['Base64']['parse'](f['ct'])
                    });
                    return f['iv'] && (g['iv'] = c['enc']['Hex']['parse'](f['iv'])),
                    f['s'] && (g['salt'] = c['enc']['Hex']['parse'](f['s'])),
                    g;
                }
            },
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/EventDispatcher.ts', ['cc', './MessageManager.ts'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'];
        }
        , function(d) {
            c = d['MessageEventData'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'c680af5iPNKeIO4cArf/90m', 'EventDispatcher', void 0x0),
            a('EventDispatcher', (function() {
                function d() {
                    this['_msg'] = null;
                }
                var e = d['prototype'];
                return e['on'] = function(f, g, h) {
                    null == this['_msg'] && (this['_msg'] = new c()),
                    this['_msg']['on'](f, g, h);
                }
                ,
                e['off'] = function(f) {
                    this['_msg'] && this['_msg']['off'](f);
                }
                ,
                e['dispatchEvent'] = function(f, g) {
                    void 0x0 === g && (g = null),
                    null == this['_msg'] && (this['_msg'] = new c()),
                    this['_msg']['dispatchEvent'](f, g);
                }
                ,
                e['destroy'] = function() {
                    this['_msg'] && this['_msg']['clear'](),
                    this['_msg'] = null;
                }
                ,
                d;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/EventMessage.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'beea7u9xnJD4rMj6ua/LTcF', 'EventMessage', void 0x0),
            a('EventMessage', function(c) {
                return c['GAME_ENTER'] = 'EventMessage.GAME_ENTER',
                c['GAME_EXIT'] = 'EventMessage.GAME_EXIT',
                c['GAME_RESIZE'] = 'EventMessage.GAME_RESIZE',
                c;
            }({})),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GameCollision.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var d, f, g, h, j, k, m, p, q;
    return {
        'setters': [function(u) {
            d = u['applyDecoratedDescriptor'],
            f = u['inheritsLoose'],
            g = u['initializerDefineProperty'],
            h = u['assertThisInitialized'];
        }
        , function(u) {
            j = u['cclegacy'],
            k = u['_decorator'],
            m = u['ccenum'],
            p = u['Collider'],
            q = u['Component'];
        }
        ],
        'execute': function() {
            var w, x, z, A, B;
            j['_RF']['push']({}, '8edaam8WhdBEYR4guslfNh/', 'GameCollision', void 0x0);
            var D = k['ccclass']
              , F = k['property']
              , G = b('CollisionType', function(H) {
                return H[H['Role'] = 0x0] = 'Role',
                H[H['Ballistic'] = 0x1] = 'Ballistic',
                H[H['Wall'] = 0x2] = 'Wall',
                H;
            }({}));
            m(G),
            b('GameCollision', (w = D('GameCollision'),
            x = F({
                'type': G,
                'tooltip': '碰撞物体类型'
            }),
            w((B = d((A = function(H) {
                function I() {
                    for (var K, L = arguments['length'], M = new Array(L), N = 0x0; N < L; N++)
                        M[N] = arguments[N];
                    return (K = H['call']['apply'](H, [this]['concat'](M)) || this)['Event_TriggerEnter'] = 'onTriggerEnter',
                    K['Event_TriggerStay'] = 'onTriggerStay',
                    K['Event_TriggerExit'] = 'onTriggerExit',
                    K['Event_CollisionEnter'] = 'onCollisionEnter',
                    K['Event_CollisionStay'] = 'onCollisionStay',
                    K['Event_CollisionExit'] = 'onCollisionExit',
                    K['collider'] = null,
                    g(K, 'type', B, h(K)),
                    K;
                }
                f(I, H);
                var J = I['prototype'];
                return J['onLoad'] = function() {
                    this['collider'] = this['getComponent'](p),
                    this['collider']['isTrigger'] ? (this['collider']['on'](this['Event_TriggerEnter'], this['onTrigger'], this),
                    this['collider']['on'](this['Event_TriggerStay'], this['onTrigger'], this),
                    this['collider']['on'](this['Event_TriggerExit'], this['onTrigger'], this)) : (this['collider']['on'](this['Event_CollisionEnter'], this['onCollision'], this),
                    this['collider']['on'](this['Event_CollisionStay'], this['onCollision'], this),
                    this['collider']['on'](this['Event_CollisionExit'], this['onCollision'], this));
                }
                ,
                J['onTrigger'] = function(K) {
                    switch (K['type']) {
                    case this['Event_TriggerEnter']:
                        this['onTriggerEnter'](K);
                        break;
                    case this['Event_TriggerStay']:
                        this['onTriggerStay'](K);
                        break;
                    case this['Event_TriggerExit']:
                        this['onTriggerExit'](K);
                    }
                }
                ,
                J['onTriggerEnter'] = function(K) {}
                ,
                J['onTriggerStay'] = function(K) {}
                ,
                J['onTriggerExit'] = function(K) {}
                ,
                J['onCollision'] = function(K) {
                    switch (K['type']) {
                    case this['Event_CollisionEnter']:
                        this['onCollisionEnter'](K);
                        break;
                    case this['Event_CollisionStay']:
                        this['onCollisionStay'](K);
                        break;
                    case this['Event_CollisionExit']:
                        this['onCollisionExit'](K);
                    }
                }
                ,
                J['onCollisionEnter'] = function(K) {}
                ,
                J['onCollisionStay'] = function(K) {}
                ,
                J['onCollisionExit'] = function(K) {}
                ,
                I;
            }(q))['prototype'], 'type', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return G['Ballistic'];
                }
            }),
            z = A)) || z)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GameComponent.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDispatcher.ts', './ViewUtil.ts'], function(b) {
    var d, f, g, h, j, k, l, m;
    return {
        'setters': [function(p) {
            d = p['inheritsLoose'],
            f = p['createClass'];
        }
        , function(p) {
            g = p['cclegacy'],
            h = p['_decorator'],
            j = p['isValid'],
            k = p['Component'];
        }
        , function(p) {
            l = p['EventDispatcher'];
        }
        , function(p) {
            m = p['ViewUtil'];
        }
        ],
        'execute': function() {
            var p;
            g['_RF']['push']({}, '9e3f8Q8IgZD9ZsZJ7OrkxWd', 'GameComponent', void 0x0);
            var q = h['ccclass'];
            b('GameComponent', q('GameComponent')(p = function(v) {
                function w() {
                    for (var y, z = arguments['length'], A = new Array(z), B = 0x0; B < z; B++)
                        A[B] = arguments[B];
                    return (y = v['call']['apply'](v, [this]['concat'](A)) || this)['_eventDispatcher'] = null,
                    y['_isBindMessageActive'] = !0x1,
                    y['dynamicsAssets'] = [],
                    y['nodes'] = new Map(),
                    y;
                }
                d(w, v);
                var x = w['prototype'];
                return x['bindMessageActive'] = function() {
                    this['_isBindMessageActive'] = !0x0;
                }
                ,
                x['unbindMessageActive'] = function() {
                    this['_isBindMessageActive'] = !0x1;
                }
                ,
                x['get'] = function(y) {
                    return this['nodes']['get'](y);
                }
                ,
                x['onLoad'] = function() {
                    m['nodeTreeInfoLite'](this['node'], this['nodes']);
                }
                ,
                x['addAutoReleaseAsset'] = function(y) {
                    j(y) && (y['addRef'](),
                    this['dynamicsAssets']['push'](y));
                }
                ,
                x['addAutoReleaseAssets'] = function(y) {
                    var z = this;
                    y['forEach'](function(A) {
                        z['addAutoReleaseAsset'](A);
                    });
                }
                ,
                x['on'] = function(y, z, A) {
                    var B = this;
                    this['eventDispatcher']['on'](y, function(C, D) {
                        B['isValid'] ? B['_isBindMessageActive'] ? B['node']['active'] && z['call'](A, C, D) : z['call'](A, C, D) : B['_eventDispatcher'] && (B['_eventDispatcher']['destroy'](),
                        B['_eventDispatcher'] = null);
                    }, A);
                }
                ,
                x['off'] = function(y) {
                    this['_eventDispatcher'] && this['_eventDispatcher']['off'](y);
                }
                ,
                x['dispatchEvent'] = function(y, z) {
                    void 0x0 === z && (z = null),
                    this['eventDispatcher']['dispatchEvent'](y, z);
                }
                ,
                x['onDestroy'] = function() {
                    this['_eventDispatcher'] && (this['_eventDispatcher']['destroy'](),
                    this['_eventDispatcher'] = null),
                    this['nodes']['clear'](),
                    this['dynamicsAssets']['forEach'](function(y) {
                        y['decRef']();
                    }),
                    this['dynamicsAssets']['splice'](0x0, this['dynamicsAssets']['length']);
                }
                ,
                f(w, [{
                    'key': 'eventDispatcher',
                    'get': function() {
                        return this['_eventDispatcher'] || (this['_eventDispatcher'] = new l()),
                        this['_eventDispatcher'];
                    }
                }]),
                w;
            }(k)) || p),
            g['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GameConfig.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(b) {
    var c, d, f;
    return {
        'setters': [function(g) {
            c = g['createClass'];
        }
        , function(g) {
            d = g['cclegacy'];
        }
        , function(g) {
            f = g['oops'];
        }
        ],
        'execute': function() {
            d['_RF']['push']({}, '54585zBsmtGfZEDczLG3SH5', 'GameConfig', void 0x0),
            b('GameConfig', (function() {
                function g(h) {
                    this['_data'] = null;
                    var i = h['json'];
                    this['_data'] = Object['freeze'](i),
                    f['log']['logConfig'](this['_data'], '游戏配置');
                }
                return c(g, [{
                    'key': 'version',
                    'get': function() {
                        return this['_data']['config']['version'];
                    }
                }, {
                    'key': 'package',
                    'get': function() {
                        return this['_data']['config']['package'];
                    }
                }, {
                    'key': 'frameRate',
                    'get': function() {
                        return this['_data']['config']['frameRate'];
                    }
                }, {
                    'key': 'localDataKey',
                    'get': function() {
                        return this['_data']['config']['localDataKey'];
                    }
                }, {
                    'key': 'localDataIv',
                    'get': function() {
                        return this['_data']['config']['localDataIv'];
                    }
                }, {
                    'key': 'httpServer',
                    'get': function() {
                        return this['_data']['config']['httpServer'];
                    }
                }, {
                    'key': 'httpTimeout',
                    'get': function() {
                        return this['_data']['config']['httpTimeout'];
                    }
                }, {
                    'key': 'language',
                    'get': function() {
                        return this['_data']['language']['type'] || ['zh'];
                    }
                }, {
                    'key': 'languagePathJson',
                    'get': function() {
                        return this['_data']['language']['path']['json'] || 'language/json';
                    }
                }, {
                    'key': 'languagePathTexture',
                    'get': function() {
                        return this['_data']['language']['path']['texture'] || 'language/texture';
                    }
                }, {
                    'key': 'bundleEnable',
                    'get': function() {
                        return this['_data']['bundle']['enable'];
                    }
                }, {
                    'key': 'bundleServer',
                    'get': function() {
                        return this['_data']['bundle']['server'];
                    }
                }, {
                    'key': 'bundleName',
                    'get': function() {
                        return this['_data']['bundle']['name'];
                    }
                }, {
                    'key': 'bundleVersion',
                    'get': function() {
                        return this['_data']['bundle']['version'];
                    }
                }, {
                    'key': 'data',
                    'get': function() {
                        return this['_data'];
                    }
                }]),
                g;
            }())),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gameLoading.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseUtils.ts', './Oops.ts'], function(b) {
    var f, h, j, k, m, q, v, w, x, y, z, A, B;
    return {
        'setters': [function(C) {
            f = C['applyDecoratedDescriptor'],
            h = C['inheritsLoose'],
            j = C['initializerDefineProperty'],
            k = C['assertThisInitialized'];
        }
        , function(C) {
            m = C['cclegacy'],
            q = C['_decorator'],
            v = C['Sprite'],
            w = C['ProgressBar'],
            x = C['Label'],
            y = C['Widget'],
            z = C['Component'];
        }
        , function(C) {
            A = C['utils'];
        }
        , function(C) {
            B = C['oops'];
        }
        ],
        'execute': function() {
            var C, D, F, G, H, I, J, K, N, O, Q;
            m['_RF']['push']({}, '79f94CCzWFKmrUHvDg4SLJE', 'gameLoading', void 0x0);
            var R = q['ccclass']
              , S = q['property'];
            b('gameLoading', (C = R('gameLoading'),
            D = S({
                'type': v,
                'tooltip': '背景图'
            }),
            F = S({
                'type': w,
                'tooltip': '进度条'
            }),
            G = S({
                'type': x,
                'tooltip': '进度条文本'
            }),
            H = S({
                'type': y,
                'tooltip': 'bg\x20Widget'
            }),
            C((K = f((J = function(T) {
                function U() {
                    for (var W, X = arguments['length'], Y = new Array(X), Z = 0x0; Z < X; Z++)
                        Y[Z] = arguments[Z];
                    return W = T['call']['apply'](T, [this]['concat'](Y)) || this,
                    j(W, 'spBg', K, k(W)),
                    j(W, 'progressBar', N, k(W)),
                    j(W, 'lbPro', O, k(W)),
                    j(W, 'bgWidget', Q, k(W)),
                    W['_progressTwer'] = void 0x0,
                    W['progressEndHandler'] = void 0x0,
                    W;
                }
                h(U, T);
                var V = U['prototype'];
                return V['onEnable'] = function() {
                    this['progressBar']['progress'] = 0.05;
                }
                ,
                V['setBgWidget'] = function(W) {
                    this['bgWidget']['enabled'] = 0x1 == W,
                    W ? this['bgWidget']['updateAlignment']() : this['spBg']['spriteFrame'] && (this['spBg']['sizeMode'] = v['SizeMode']['TRIMMED']);
                }
                ,
                V['Show'] = function(W) {
                    var X;
                    (this['node']['active'] = W,
                    W) || (null == (X = this['_progressTwer']) || X['stop'](),
                    this['updateProgress'](0x0));
                }
                ,
                V['setBg'] = function(W) {
                    this['spBg']['spriteFrame'] = W;
                }
                ,
                V['tryExeProgressEnd'] = function() {
                    if (null != this['progressEndHandler']) {
                        var W = this['progressEndHandler'];
                        this['progressEndHandler'] = null,
                        W();
                    }
                }
                ,
                V['SetProgress'] = function(W, X, Y, Z) {
                    var a0, a1 = this;
                    if (void 0x0 === X && (X = 0x1),
                    void 0x0 === Z && (Z = !0x0),
                    !Z && W < this['progressBar']['progress'])
                        return B['log']['logView']('loading\x20error,\x20progress\x20can\x20not\x20less\x20than\x20cur\x20progeress'),
                        void (null == Y || Y(this['progressBar']['progress']));
                    this['showProgress'](!0x0),
                    W = Math['max'](W, 0.05),
                    W = Math['min'](W, 0x1),
                    null == (a0 = this['_progressTwer']) || a0['stop'](),
                    this['tryExeProgressEnd'](),
                    this['progressEndHandler'] = null != Y ? function() {
                        null == Y || Y(W);
                    }
                    : null;
                    var a2 = function(a4) {
                        a1['updateProgress'](W),
                        a1['tryExeProgressEnd']();
                    };
                    if (X > 0x0) {
                        X = Math['min'](0xa, X);
                        var a3 = this['progressBar']['progress'];
                        this['_progressTwer'] = A['tweenNumber'](a3, W, X, function(a4, a5) {
                            a1['updateProgress'](a4);
                        }, a2, 'cubicInOut');
                    } else
                        a2();
                }
                ,
                V['updateProgress'] = function(W) {
                    this['progressBar']['progress'] = W,
                    this['lbPro']['string'] = (0x64 * W)['toFixed'](0x2) + '%';
                }
                ,
                V['showProgress'] = function(W) {
                    this['progressBar']['node']['active'] != W && (this['progressBar']['node']['active'] = W),
                    W || this['updateProgress'](0x0);
                }
                ,
                U;
            }(z))['prototype'], 'spBg', [D], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            N = f(J['prototype'], 'progressBar', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            O = f(J['prototype'], 'lbPro', [G], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Q = f(J['prototype'], 'bgWidget', [H], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            I = J)) || I)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GameManager.ts', ['cc'], function(b) {
    var c, d, f;
    return {
        'setters': [function(g) {
            c = g['cclegacy'],
            d = g['game'],
            f = g['Game'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '73fa0CEfOhMdJUoZwoFIIZV', 'GameManager', void 0x0);
            var g = 0x1;
            b('GameManager', (function() {
                function h(k) {
                    this['root'] = void 0x0,
                    this['root'] = k,
                    this['gameTimeScaleExtend']();
                }
                var j = h['prototype'];
                return j['setTimeScale'] = function(k) {
                    g = k;
                }
                ,
                j['gameTimeScaleExtend'] = function() {
                    d['_calculateDT'] = function(k) {
                        return k || (k = performance['now']()),
                        this['_deltaTime'] = k > this['_startTime'] ? (k - this['_startTime']) / 0x3e8 : 0x0,
                        this['_deltaTime'] > f['DEBUG_DT_THRESHOLD'] && (this['_deltaTime'] = this['frameTime'] / 0x3e8),
                        this['_startTime'] = k,
                        this['_deltaTime'] * g;
                    }
                    ;
                }
                ,
                h;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GameQueryConfig.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './StringUtil.ts'], function(a) {
    var b, c, d, f, g;
    return {
        'setters': [function(h) {
            b = h['createClass'];
        }
        , function(h) {
            c = h['cclegacy'],
            d = h['sys'];
        }
        , function(h) {
            f = h['oops'];
        }
        , function(h) {
            g = h['StringUtil'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'd09acUxcU5Hg4kUjKxVEWLy', 'GameQueryConfig', void 0x0),
            a('GameQueryConfig', (function() {
                function h() {
                    this['_data'] = null,
                    d['isBrowser'] ? (this['_data'] = this['parseUrl'](),
                    this['_data']['username'] || (this['_data']['username'] = g['guid']()),
                    f['log']['logConfig'](this['_data'], '查询参数')) : this['_data'] = {};
                }
                return h['prototype']['parseUrl'] = function() {
                    if ('object' != typeof window)
                        return {};
                    if (!window['document'])
                        return {};
                    var j = window['document']['location']['href']['toString']()['split']('?');
                    if ('string' == typeof j[0x1]) {
                        for (var k = {}, l = 0x0, m = (j = j[0x1]['split']('&'))['length']; l < m; ++l) {
                            var p = j[l]
                              , q = p['indexOf']('=');
                            if (!(q < 0x0)) {
                                var s = p['substring'](0x0, q)
                                  , v = p['substring'](q + 0x1);
                                k[decodeURIComponent(s)] = v && decodeURIComponent(v);
                            }
                        }
                        return k;
                    }
                    return {};
                }
                ,
                b(h, [{
                    'key': 'debug',
                    'get': function() {
                        return this['_data']['debug'];
                    }
                }, {
                    'key': 'username',
                    'get': function() {
                        return this['_data']['username'];
                    }
                }, {
                    'key': 'lang',
                    'get': function() {
                        return this['_data']['lang'] || 'zh';
                    }
                }, {
                    'key': 'data',
                    'get': function() {
                        return this['_data'];
                    }
                }]),
                h;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gEntity.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './Root.ts', './Language.ts', './EventMessage.ts', './AsyncQueue.ts', './LayerManager.ts', './base64.mjs', './gLoading.ts', './BaseGameUIConfig.ts', './baseUtils.ts', './gNetInstable.ts', './gMessageBox.ts', './appConfig.ts', './BaseCustomEventDefine.ts', './panelUpdate.ts', './BaseNativeFun.ts', './webHttp.ts', './LogViewRoot.ts', './BaseStorageConfig.ts'], function(j) {
    var q, z, F, H, J, K, M, P, Q, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am;
    return {
        'setters': [function(an) {
            q = an['applyDecoratedDescriptor'],
            z = an['inheritsLoose'],
            F = an['initializerDefineProperty'],
            H = an['assertThisInitialized'];
        }
        , function(an) {
            J = an['cclegacy'],
            K = an['_decorator'],
            M = an['macro'],
            P = an['DynamicAtlasManager'],
            Q = an['Node'],
            V = an['view'],
            W = an['assetManager'],
            X = an['sys'],
            Y = an['math'],
            Z = an['game'];
        }
        , function(an) {
            a0 = an['oops'];
        }
        , function(an) {
            a1 = an['Root'];
        }
        , function(an) {
            a2 = an['LanguageManager'];
        }
        , function(an) {
            a3 = an['EventMessage'];
        }
        , function(an) {
            a4 = an['AsyncQueue'];
        }
        , function(an) {
            a5 = an['LayerType'];
        }
        , function(an) {
            a6 = an['Base64'];
        }
        , function(an) {
            a7 = an['gLoading'];
        }
        , function(an) {
            a8 = an['UIConfigData'],
            a9 = an['UIID'],
            aa = an['BasePModuleID'];
        }
        , function(an) {
            ab = an['utils'];
        }
        , function(an) {
            ac = an['gNetInstable'];
        }
        , function(an) {
            ad = an['MsgBoxManager'];
        }
        , function(an) {
            ae = an['AttributionType'],
            af = an['appConfig'];
        }
        , function(an) {
            ag = an['gameStage'],
            ah = an['WebGameEvent'];
        }
        , function(an) {
            ai = an['panelUpdate'];
        }
        , function(an) {
            aj = an['NativeFun'];
        }
        , function(an) {
            ak = an['webHttp'];
        }
        , function(an) {
            al = an['LogViewRoot'];
        }
        , function(an) {
            am = an['BaseStorageConfig'];
        }
        ],
        'execute': function() {
            var an, ao, ap, aq, ar, as, at, au, av;
            J['_RF']['push']({}, '94950GPa1dGuo8TStyzZQz+', 'gEntity', void 0x0);
            var aw = K['ccclass']
              , ax = K['property'];
            M['CLEANUP_IMAGE_CACHE'] = !0x1,
            P['instance']['enabled'] = !0x0,
            P['instance']['maxFrameSize'] = 0x400,
            j('gEntity', (an = aw('gEntity'),
            ao = ax({
                'type': ai,
                'tooltip': '热更新面板'
            }),
            ap = ax({
                'type': Q,
                'tooltip': '边缘黑边'
            }),
            aq = ax({
                'type': al,
                'tooltip': 'LogViewRoot'
            }),
            an((at = q((as = function(ay) {
                function az() {
                    for (var aB, aC, aD = arguments['length'], aE = new Array(aD), aF = 0x0; aF < aD; aF++)
                        aE[aF] = arguments[aF];
                    return aC = ay['call']['apply'](ay, [this]['concat'](aE)) || this,
                    F(aC, 'panelUpdate', at, H(aC)),
                    F(aC, 'blackSide', au, H(aC)),
                    F(aC, 'logViewRoot', av, H(aC)),
                    aC['entityArgs'] = {
                        'loading': null,
                        'netInstable': null,
                        'http': null
                    },
                    aC['webEventsType'] = {
                        'deviceType': 'deviceType',
                        'fb': 'fb',
                        'tiktok': 'tiktok',
                        'kwai': 'kwai',
                        'gTag': 'gTag'
                    },
                    aC['urlIDType'] = {
                        'gps_adid': 'gps_adid',
                        'adid': 'adid'
                    },
                    aC['webEventsType2AttType'] = ((aB = {})[aC['webEventsType']['fb']] = ae['fb'],
                    aB[aC['webEventsType']['tiktok']] = ae['tiktok'],
                    aB[aC['webEventsType']['kwai']] = ae['kwai'],
                    aB[aC['webEventsType']['gTag']] = ae['gTag'],
                    aB),
                    aC;
                }
                z(az, ay);
                var aA = az['prototype'];
                return aA['initGui'] = function() {
                    var aB = this;
                    if (null != this['blackSide'] && a0['gui']['addNode'](this['blackSide'], a5['Guide']),
                    this['reqIpInfo'](),
                    V['resizeWithBrowserSize'](!0x0),
                    ab['reqFullScreen'](),
                    a0['message']['on'](a3['GAME_ENTER'], function() {
                        ab['reqFullScreen']();
                    }, this),
                    a0['gui']['init'](a8),
                    M['SUPPORT_TEXTURE_FORMATS'] = ['.webp', '.astc', '.pvr', '.jpg', '.png', '.pkm'],
                    a0['gui']['open'](a9['Netinstable'], null, {
                        'onAdded': function(aD, aE) {
                            var aF = aD['getComponent'](ac);
                            aB['entityArgs']['netInstable'] = aF;
                        }
                    }),
                    af['bHasLobby']) {
                        var aC = function() {
                            af['gameStage'] = ag['login'],
                            aB['reqRemoteConfig'](function(aD) {
                                var aE;
                                af['bShowDebug'] && X['isNative'] && (null == (aE = aB['logViewRoot']) || aE['init']()),
                                aB['enterLobby']();
                            });
                        };
                        a0['res']['loadBundle'](aa['customer']['toString']())['then'](function(aD) {
                            var aE = globalThis['customerConfig'];
                            if (aE) {
                                for (var aF in aE)
                                    af[aF] = aE[aF];
                            }
                            aC();
                        })['catch'](function(aD) {
                            aC();
                        });
                    } else
                        af['gameStage'] = ag['game'],
                        this['enterGame']();
                    a0['message']['on'](ah['game_stage_change'], this['on_game_stage_change'], this),
                    W['downloader']['maxConcurrency'] = 0x4,
                    W['downloader']['maxRequestsPerFrame'] = 0x4,
                    af['areaCodeNum'] = Number(af['defaultAreaCode']);
                }
                ,
                aA['reqIpInfo'] = function() {
                    //☠️ Disable IP Logger
                    // var aB = af['ipServerUrl'];
                    // if (!ab['StringIsNullOrEmpty'](aB)) {
                    //     var aC = a0['storage']['get'](am['loginIPInfo'], '');
                    //     if (!ab['StringIsNullOrEmpty'](aC)) {
                    //         var aD = JSON['parse'](aC);
                    //         return af['IpInfo']['Ip'] = aD['ip'],
                    //         af['IpInfo']['country'] = aD['country'],
                    //         void (af['IpInfo']['city'] = aD['city']);
                    //     }
                    //     X['isBrowser'] && (af['IpInfo']['href'] = window['location']['href']),
                    //     ab['httpGet'](aB, function(aE, aF) {
                    //         if (!aE) {
                    //             var aG = JSON['parse'](aF);
                    //             0x1 == aG['success'] ? (af['IpInfo']['Ip'] = aG['ip'],
                    //             af['IpInfo']['country'] = aG['country']['toLowerCase'](),
                    //             af['IpInfo']['city'] = aG['city']['toLowerCase'](),
                    //             a0['storage']['set'](am['loginIPInfo'], JSON['stringify'](af['IpInfo']))) : a0['log']['logBusiness']('reqIpInfo\x20failed:' + aG['message']);
                    //         }
                    //     });
                    // }
                }
                ,
                aA['tryGetOLConfig'] = function(aB, aC, aD) {
                    var aE = this;
                    void 0x0 === aD && (aD = 0x2),
                    ab['httpGet'](aB, function(aF, aG) {
                        aF ? aD > 0x0 ? aE['tryGetOLConfig'](aB, aC, aD - 0x1) : aC(!0x1, aB) : aC(!0x0, aG);
                    });
                }
                ,
                aA['buildRootUrlArray'] = function() {
                    var aB = []
                      , aC = a0['storage']['get'](am['lastRootUrl'], '');
                    ab['StringIsNullOrEmpty'](aC) || aB['push'](aC),
                    null != af['rootUrlList'] && af['rootUrlList']['length'] > 0x0 && (aB = aB['concat'](af['rootUrlList']));
                    var aD = a0['storage']['get'](am['lastRootUrlArry'], '');
                    if (!ab['StringIsNullOrEmpty'](aD)) {
                        var aE = JSON['parse'](aD);
                        aB = aB['concat'](aE);
                    }
                    var aF = a0['storage']['get'](am['localRootUrlList'], '');
                    if (ab['StringIsNullOrEmpty'](aF))
                        a0['storage']['set'](am['localRootUrlList'], JSON['stringify'](af['rootUrlList']));
                    else {
                        var aG = JSON['parse'](aF);
                        aB = aB['concat'](aG);
                    }
                    return aB = Array['from'](new Set(aB));
                }
                ,
                aA['reqRemoteConfig'] = function(aB) {
                    var aC, aD, aE = this;
                    this['entityArgs'] && this['entityArgs']['netInstable'] && (null == (aD = this['entityArgs']['netInstable']) || aD['show'](!0x1)),
                    null == (aC = this['panelUpdate']) || aC['show'](!0x0);
                    var aF = 'localConfig.json';
                    if (X['isNative'])
                        jsb['device']['setKeepScreenOn'](!0x0),
                        af['sourceChannel'] = aj['getGameChanel'](),
                        !function aG(aH, aI, aJ) {
                            if (null != aH && 0x0 != aH['length']) {
                                var aK = aH['shift']()
                                  , aL = af['CurrentChannel'] == af['defaultChannel'] ? aF : af['CurrentChannel'] + 'Config.json';
                                !function aM(aN) {
                                    aE['tryGetOLConfig'](aN, function(aO, aP) {
                                        if (aO) {
                                            var aQ = JSON['parse'](aP);
                                            for (var aR in aQ)
                                                af[aR] = aQ[aR];
                                            aI(aK, aQ['rootUrlList']);
                                        } else {
                                            var aS = aP;
                                            aS['substring'](aS['lastIndexOf']('/') + 0x1) == aF ? aG(aH, aI, aJ) : aM(aS = '' + aK + aF);
                                        }
                                    });
                                }('' + aK + aL);
                            } else
                                aJ();
                        }(this['buildRootUrlArray'](), function(aH, aI) {
                            af['nativeUrl'] = aH,
                            a0['storage']['set'](am['lastRootUrl'], aH),
                            null != aI && aI['length'] > 0x0 && a0['storage']['set'](am['lastRootUrlArry'], JSON['stringify'](aI)),
                            aB(!0x0);
                        }, function() {
                            var aH = {
                                'txt': 'retry',
                                'click': function() {
                                    aE['reqRemoteConfig'](aB);
                                }
                            }
                              , aI = {
                                'txt': 'quit',
                                'click': function() {
                                    Z['end']();
                                }
                            };
                            aE['showMsgBox']('error', 'Connection\x20to\x20Server\x20failed,\x20please\x20try\x20again\x20later', aH, aI);
                        });
                    else{
                        const localConfig = window.GAME_DATA.localConfig;
                        var aJ = localConfig;
                        if (aJ) {
                            var aK = localConfig;
                            for (var aL in aK)
                                af[aL] = aK[aL];
                        }
                        aB(aJ);
                    }
                        
                }
                ,
                aA['enterGame'] = function() {
                    var aB, aC = a0['storage']['get'](am['language']);
                    ab['StringIsNullOrEmpty'](aC) ? (aC = af['language'],
                    a0['storage']['set'](am['language'], aC)) : af['language'] = aC,
                    a0['log']['setTags']();
                    var aD = window['location']['href'];
                    if (null != (aB = ab['getUrlParam'](aD)) && (ab['StringIsNullOrEmpty'](aB['lan']) || (aC = aB['lan']),
                    null != aB['rate'] && aB['rate'] > 0x0 ? (af['translateRate'] = aB['rate'],
                    af['bShowDic'] = 0x1 != aB['rate']) : (af['translateRate'] = 0x64,
                    af['bShowDic'] = !0x0)),
                    ab['setLanguage'](aC),
                    this['checkEnterGameParams'](aB)) {
                        var aE = 'name_' + aB['gameID']
                          , aF = a2['getLangByTag'](aE);
                        ab['setGameTitle'](aF),
                        this['openLoading'](function() {
                            a0['res']['loadBundle'](aF)['then'](function(aG) {
                                globalThis['enterGame'](aB);
                            });
                        }),
                        a0['res']['loadDir']('common/audio/win');
                    }
                }
                ,
                aA['checkEnterGameParams'] = function(aB) {
                    var aC = !0x0;
                    return (aB['gameID'] < 0x186a0 || ab['StringIsNullOrEmpty'](aB['session']) || ab['StringIsNullOrEmpty'](aB['host'])) && (aC = !0x1),
                    aC || this['invalidParamsTips'](aB),
                    aC;
                }
                ,
                aA['invalidParamsTips'] = function(aB) {
                    var aC = {
                        'txt': 'back',
                        'click': function() {
                            if (ab['StringIsNullOrEmpty'](aB['source'])) {
                                if (X['isBrowser']) {
                                    var aD = {
                                        'code': 0x192,
                                        'gameID': aB['gameID']
                                    };
                                    window['parent']['postMessage'](aD, '*');
                                } else
                                    Z['end']();
                            } else
                                window['location']['href'] = aB['source'];
                        }
                    };
                    this['showMsgBox']('error', 'Ops!The\x20params\x20ERROR,please\x20return\x20to\x20game\x20lobby', aC);
                }
                ,
                aA['tryGetServerAttrInfo'] = function() {
                    var aB = this;
                    ab['getClipBoardText'](function(aC) {
                        var aD = '';
                        ab['StringIsNullOrEmpty'](aC) || aC['startsWith']('@uC') && (aD = aC,
                        ab['copyTextToClipboard'](''));
                        var aE = {
                            'type': 0x1,
                            'lan': navigator['language'],
                            'os': X['os']['toString'](),
                            'osVer': X['osVersion'],
                            'uniCode': aD
                        }
                          , aF = JSON['stringify'](aE)
                          , aG = a6['encode'](aF);
                        a0['log']['logBusiness']('try\x20get\x20server\x20Attribution\x20info!'),
                        aB['entityArgs']['http']['post']('att', aG, function(aH) {
                            a0['log']['logBusiness']('get\x20server\x20Attribution\x20success!!!');
                            var aI = aH['responseText']
                              , aJ = ab['StringIsNullOrEmpty'](aI) ? null : JSON['parse'](aI);
                            if (null != aJ && 0x0 == aJ['code']) {
                                if (a0['log']['logBusiness']('post\x20info\x20success:' + aJ),
                                null != aJ['fbpid']) {
                                    var aK = String(aJ['fbpid']);
                                    ab['StringIsNullOrEmpty'](aK) || (a0['log']['logBusiness']('get\x20server\x20att\x20fbpid\x20' + aK),
                                    af['fbp'] = aK);
                                }
                                if (null != aJ['fbclid']) {
                                    var aL = String(aJ['fbclid']);
                                    ab['StringIsNullOrEmpty'](aL) || (a0['log']['logBusiness']('get\x20server\x20att\x20fbclid\x20' + aL),
                                    af['fbc'] = aL);
                                }
                                if (null != aJ['pixelid'] && (null == af['attJson'] && (af['attJson'] = {}),
                                af['attJson']['pixelid'] = String(aJ['pixelid']),
                                a0['log']['logBusiness']('get\x20server\x20att\x20pixelid\x20' + af['attJson'])),
                                null != aJ['clickid']) {
                                    var aM = String(aJ['clickid']);
                                    ab['StringIsNullOrEmpty'](aM) || (a0['log']['logBusiness']('get\x20server\x20att\x20clickid\x20' + aM),
                                    af['clickid'] = aM);
                                }
                                if (null != aJ['ch']) {
                                    var aN = String(aJ['ch']);
                                    ab['StringIsNullOrEmpty'](aN) || (a0['log']['logBusiness']('get\x20server\x20att\x20channel\x20ID\x20' + aN),
                                    af['sourceChannel'] = aN);
                                }
                                if (null != aJ['ref']) {
                                    var aO = String(aJ['ref']);
                                    ab['StringIsNullOrEmpty'](aO) || (a0['log']['logBusiness']('get\x20server\x20att\x20Referrers\x20uid\x20' + aO),
                                    af['sourceUserId'] = aO);
                                }
                            } else {
                                var aP = null == aJ ? -0x1 : aJ['code']
                                  , aQ = null == aJ ? '' : aJ['msg'];
                                a0['log']['logBusiness']('post\x20info\x20error:' + aP + '\x20' + aQ);
                            }
                        }, function(aH) {
                            a0['log']['logBusiness']('req\x20att\x20info\x20error:' + aH['event']);
                        });
                    });
                }
                ,
                aA['initByUrlParams'] = function(aB) {
                    if (null != aB) {
                        this['initWebAtt'](aB);
                        var aC = null != aB['ch'] ? String(aB['ch']) : '';
                        !ab['StringIsNullOrEmpty'](aC) && aC['length'] > 0x1 && aC['length'] < 0xb && (a0['log']['logBusiness']('get\x20url\x20channel\x20id\x20' + aC),
                        af['sourceChannel'] = aC);
                        var aD = null != aB['code'] ? String(aB['code']) : '';
                        if (!ab['StringIsNullOrEmpty'](aD)) {
                            var aE = Number(aD);
                            (Number['isNaN'](aE) || aE < 0x3e8 || aE > 0x3b9ac9ff) && (aD = '');
                        }
                        a0['log']['logBusiness']('get\x20url\x20Referrers\x20uid\x20' + aD),
                        af['sourceUserId'] = aD;
                        var aF = Number(aB['md']);
                        af['mode'] = Number['isNaN'](aF) || aF < 0x0 || aF > 0x3 ? '0' : aF['toString']();
                        var aG = Number(aB['v']);
                        af['h5Type'] = Y['clamp'](aG, 0x0, 0x2);
                        var aH = ''
                          , aI = ''
                          , aJ = ''
                          , aK = {};
                        if (null != aB) {
                            ab['StringIsNullOrEmpty'](aH) && (aH = aB['fbpid']),
                            ab['StringIsNullOrEmpty'](aI) && (aI = aB['fbclid']);
                            var aL = aB['uuid'];
                            aK['uuid'] = null == aL ? null : String(aL),
                            a0['log']['logBusiness']('get\x20url\x20param\x20\x20uuid\x20\x20' + aK['uuid']);
                            var aM = aB['pixel_id'];
                            aK['pixelid'] = null == aM ? null : String(aM),
                            a0['log']['logBusiness']('get\x20url\x20param\x20\x20pixel_id\x20\x20' + aK['pixelid']),
                            aJ = aB['click_id'],
                            a0['log']['logBusiness']('get\x20url\x20param\x20\x20click_id\x20\x20' + aJ);
                        }
                        aH = this['fbDataFormat'](aH),
                        aI = this['fbDataFormat'](aI),
                        af['fbp'] = aH,
                        af['fbc'] = aI,
                        af['clickid'] = aJ,
                        af['attJson'] = aK;
                    }
                }
                ,
                aA['showMsgBox'] = function(aB, aC, aD, aE) {
                    ad['Show'](aB, aC, aD, aE, !0x1);
                }
                ,
                aA['loadLobbyBundle'] = function(aB) {
                    var aC = this
                      , aD = new a4()
                      , aE = function(aG) {
                        var aH = 'load_bundle_error:' + aG
                          , aI = {
                            'txt': 'ok',
                            'click': function() {
                                null == aD || aD['play']();
                            }
                        };
                        aC['showMsgBox']('error', aH, aI);
                    }
                      , aF = function(aG, aH) {
                        a0['res']['loadBundle'](aG)['then'](function(aI) {
                            aH();
                        })['catch'](function(aI) {
                            console['log']('loadFun\x20error:' + aG, aI),
                            aE(aG);
                        });
                    };
                    aD['push'](function(aG) {
                        aF(aa['webGame']['toString'](), aG);
                    }),
                    aD['push'](function(aG) {
                        ab['loadLanBundle'](aa['game']['toString'](), aG, aE);
                    }),
                    aD['push'](function(aG) {
                        ab['loadLanBundle'](aa['rewardPop']['toString'](), aG, aE);
                    }),
                    aD['push'](function(aG) {
                        ab['loadLanBundle'](aa['lobby']['toString'](), aG, aE);
                    }),
                    aD['push'](function(aG) {
                        aF(aa['rewardPop']['toString'](), aG);
                    }),
                    aD['push'](function(aG) {
                        aF(aa['lobby']['toString'](), aG);
                    }),
                    aD['complete'] = function() {
                        aB();
                    }
                    ,
                    aD['play']();
                }
                ,
                aA['enterLobby'] = function() {
                    var aB, aC = this;
                    if (af['bShowDebug'] || 'china' != af['IpInfo']['country'] && 'cn' != (null == (aB = af['IpInfo']) ? void 0x0 : aB['country'])) {
                        var aD = new ak();
                        aD['server'] = af['connection']['http'],
                        this['entityArgs']['http'] = aD,
                        ab['setGameTitle'](af['gameTitle']);
                        var aE = ab['getUrlParam'](X['isBrowser'] ? window['location']['href'] : '');
                        this['initByUrlParams'](aE);
                        var aF = a0['storage']['get'](am['language']);
                        if (ab['StringIsNullOrEmpty'](aF)) {
                            var aG = X['isBrowser'] ? aE['lan'] : '';
                            aF = ab['StringIsNullOrEmpty'](aG) ? af['language'] : aG;
                        }
                        ab['setLanguage'](aF),
                        this['tryGetServerAttrInfo'](),
                        X['isNative'] && (af['mode'] = '1');
                        var aH = function() {
                            aC['openLoading'](function() {
                                globalThis['enterLogin'](aC['entityArgs']);
                            });
                        };
                        X['isNative'] ? this['panelUpdate']['checkUpdate'](function() {
                            aC['loadLobbyBundle'](function() {
                                aH();
                            });
                        }) : this['loadLobbyBundle'](function() {
                            aH();
                        }),
                        af['bShowDebug'] || a0['log']['setTags']();
                    } else {
                        var aI = {
                            'txt': 'ok',
                            'click': function() {
                                Z['end']();
                            }
                        };
                        this['showMsgBox']('error', 'service_not_support', aI);
                    }
                }
                ,
                aA['fbDataFormat'] = function(aB) {
                    return ab['StringIsNullOrEmpty'](aB) ? '' : aB['startsWith']('fb.') ? aB : 'fb.1.' + Date['now']() + '.' + aB;
                }
                ,
                aA['initWebAtt'] = function(aB) {
                    if (!X['isNative'] && (af['attType'] = ae['none'],
                    af['webEventCode'] = 'cs',
                    null != aB)) {
                        for (var aC in this['urlIDType']) {
                            var aD = aB[aC];
                            ab['StringIsNullOrEmpty'](aD) || (af['ad_device_code'] = aC + '=' + aD);
                        }
                        for (var aE in this['webEventsType']) {
                            var aF = this['webEventsType'][aE]
                              , aG = aB[aF];
                            if (null != aG) {
                                if ('deviceType' == aF || 'at' == aF) {
                                    var aH = Number(aG);
                                    if (aH > 0x0 && (af['attType'] = aH,
                                    af['webEventCode'] = null,
                                    'deviceType' == aF && aH == ae['adjust'])) {
                                        var aI = aB['token'];
                                        ab['StringIsNullOrEmpty'](aI) || (af['attToken']['token'] = aI);
                                    }
                                } else {
                                    var aJ = this['webEventsType2AttType'][aF];
                                    af['attType'] = null == aJ ? ae['none'] : aJ,
                                    af['attType'] != ae['none'] && (af['webEventCode'] = aG);
                                }
                                break;
                            }
                        }
                    }
                }
                ,
                aA['openLoading'] = function(aB) {
                    var aC = this;
                    a0['gui']['open'](a9['Loading'], null, {
                        'onAdded': function(aD, aE) {
                            var aF = aD['getComponent'](a7);
                            aF['OnGUIAdded'](aE),
                            aC['entityArgs']['loading'] = aF,
                            aF['ShowLoading'](!0x1),
                            null == aB || aB(aE);
                        }
                    });
                }
                ,
                aA['on_game_stage_change'] = function(aB, aC, aD) {
                    var aE;
                    af['gameStage'] = aC,
                    null == (aE = this['panelUpdate']) || aE['show'](!0x1);
                }
                ,
                az;
            }(a1))['prototype'], 'panelUpdate', [ao], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            au = q(as['prototype'], 'blackSide', [ap], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            av = q(as['prototype'], 'logViewRoot', [aq], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ar = as)) || ar)),
            J['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gLoading.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gameLoading.ts', './baseUtils.ts', './Language.ts', './Oops.ts'], function(j) {
    var k, q, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J;
    return {
        'setters': [function(K) {
            k = K['applyDecoratedDescriptor'],
            q = K['inheritsLoose'],
            v = K['initializerDefineProperty'],
            w = K['assertThisInitialized'];
        }
        , function(K) {
            x = K['cclegacy'],
            y = K['_decorator'],
            z = K['Node'],
            A = K['Label'],
            B = K['Animation'],
            C = K['Button'],
            D = K['instantiate'],
            E = K['Color'],
            F = K['Component'];
        }
        , function(K) {
            G = K['gameLoading'];
        }
        , function(K) {
            H = K['utils'];
        }
        , function(K) {
            I = K['LanguageManager'];
        }
        , function(K) {
            J = K['oops'];
        }
        ],
        'execute': function() {
            var K, N, O, Q, R, V, W, X, Y, Z, a0, a1, a2, a3, a4;
            x['_RF']['push']({}, '0378fQcEp9FgKHMXNpfJeeE', 'gLoading', void 0x0);
            var a5 = y['ccclass']
              , a6 = y['property'];
            j('gLoading', (K = a5('gLoading'),
            N = a6({
                'type': z,
                'tooltip': '游戏加载界面挂接点'
            }),
            O = a6({
                'type': G,
                'tooltip': '预制通用游戏加载界面'
            }),
            Q = a6({
                'type': A,
                'tooltip': '基础框架loading文字'
            }),
            R = a6({
                'type': B,
                'tooltip': '动态提示动画'
            }),
            V = a6({
                'type': A,
                'tooltip': '动态提示信息'
            }),
            W = a6(C),
            K((Z = k((Y = function(a7) {
                function a8() {
                    for (var aa, ab = arguments['length'], ac = new Array(ab), ad = 0x0; ad < ab; ad++)
                        ac[ad] = arguments[ad];
                    return aa = a7['call']['apply'](a7, [this]['concat'](ac)) || this,
                    v(aa, 'gameLoadingRoot', Z, w(aa)),
                    aa['gameLoading'] = void 0x0,
                    v(aa, 'preGameLoading', a0, w(aa)),
                    v(aa, 'lbCenterTips', a1, w(aa)),
                    v(aa, 'animationTips', a2, w(aa)),
                    v(aa, 'lbDynamicTips', a3, w(aa)),
                    aa['bPlayLoadingTips'] = !0x1,
                    aa['loopTips'] = [],
                    aa['tipsIdx'] = 0x0,
                    v(aa, 'btnCancelUpdate', a4, w(aa)),
                    aa;
                }
                q(a8, a7);
                var a9 = a8['prototype'];
                return a9['start'] = function() {
                    this['loopTips'] = [];
                    for (var aa = 0x0; aa < 0x6; aa++) {
                        var ab = 'loading_tips_' + aa;
                        ab = I['getLangByTag'](ab),
                        this['loopTips']['push'](ab);
                    }
                }
                ,
                a9['OnGUIAdded'] = function(aa) {
                    this['preGameLoading']['Show'](!0x1);
                }
                ,
                a9['SetGameLoading'] = function(aa, ab, ac) {
                    if (void 0x0 === ac && (ac = !0x1),
                    null != aa) {
                        var ad = D(aa);
                        ad['active'] = !0x1,
                        ad['parent'] = this['gameLoadingRoot'];
                        var ae = ad['getComponent'](G);
                        null != ae && (this['gameLoading'] = ae);
                    }
                    null == this['gameLoading'] && (this['gameLoading'] = this['preGameLoading']),
                    this['gameLoading']['setBg'](ab),
                    this['gameLoading']['setBgWidget'](ac),
                    this['showDynamicTips'](!0x0);
                }
                ,
                a9['showDynamicTips'] = function(aa) {
                    var ab = this;
                    if (this['bPlayLoadingTips'] = aa,
                    aa) {
                        var ac = Math['floor'](0x5 * Math['random']());
                        this['tipsIdx'] = Math['min'](ac, 0x5),
                        function ae() {
                            if (ab['bPlayLoadingTips']) {
                                ab['tipsIdx'] >= ab['loopTips']['length'] && (ab['tipsIdx'] = 0x0);
                                var af = ab['loopTips'][ab['tipsIdx']];
                                ab['lbDynamicTips']['string'] = af,
                                H['playAnimation'](ab['animationTips'], 'dynamic_tips', ab, function() {
                                    ae();
                                }),
                                ab['tipsIdx']++;
                            }
                        }();
                    } else {
                        var ad = this['lbDynamicTips']['color'];
                        this['lbDynamicTips']['color'] = new E(ad['r'],ad['g'],ad['b'],0x0),
                        this['animationTips']['stop']();
                    }
                }
                ,
                a9['SetLoadingProgress'] = function(aa, ab, ac) {
                    var ad;
                    if (null == this['gameLoading'])
                        return J['log']['logView']('gLoading/SetLoadingProgress\x20error:gameloading\x20is\x20null'),
                        void (null == ac || ac(aa));
                    null == (ad = this['gameLoading']) || ad['SetProgress'](aa, ab, ac);
                }
                ,
                a9['showCancelUpdate'] = function(aa, ab) {
                    null != this['btnCancelUpdate'] && (this['btnCancelUpdate']['node']['active'] = aa,
                    this['btnCancelUpdate']['node']['off'](C['EventType']['CLICK']),
                    aa && null != ab && H['ButtonBindClick'](this['btnCancelUpdate'], ab));
                }
                ,
                a9['ShowLoading'] = function(aa, ab) {
                    var ac;
                    this['node']['active'] = aa,
                    null == (ac = this['gameLoading']) || ac['Show'](aa),
                    aa ? this['lbCenterTips']['string'] = null != this['gameLoading'] ? '' : ab : this['showDynamicTips'](!0x1);
                }
                ,
                a8;
            }(F))['prototype'], 'gameLoadingRoot', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a0 = k(Y['prototype'], 'preGameLoading', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a1 = k(Y['prototype'], 'lbCenterTips', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a2 = k(Y['prototype'], 'animationTips', [R], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a3 = k(Y['prototype'], 'lbDynamicTips', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a4 = k(Y['prototype'], 'btnCancelUpdate', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            X = Y)) || X)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gMessageBox.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LayerManager.ts', './Oops.ts', './baseUtils.ts', './appConfig.ts', './BaseGameUIConfig.ts'], function(j) {
    var k, m, q, v, w, x, y, z, A, B, C, D, E, F, G, H;
    return {
        'setters': [function(I) {
            k = I['applyDecoratedDescriptor'],
            m = I['inheritsLoose'],
            q = I['initializerDefineProperty'],
            v = I['assertThisInitialized'];
        }
        , function(I) {
            w = I['cclegacy'],
            x = I['_decorator'],
            y = I['Animation'],
            z = I['Label'],
            A = I['Button'],
            B = I['Component'],
            C = I['instantiate'];
        }
        , function(I) {
            D = I['LayerType'];
        }
        , function(I) {
            E = I['oops'];
        }
        , function(I) {
            F = I['utils'];
        }
        , function(I) {
            G = I['appConfig'];
        }
        , function(I) {
            H = I['BasePModuleID'];
        }
        ],
        'execute': function() {
            var J, K, O, Q, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6;
            w['_RF']['push']({}, '12a0ao2xG1C9ogAxw8TKKO0', 'gMessageBox', void 0x0);
            var a7 = x['ccclass']
              , a8 = x['property']
              , a9 = j('gMessageBox', (J = a7('gMessageBox'),
            K = a8({
                'type': y,
                'tooltip': 'Animation组件'
            }),
            O = a8({
                'type': z,
                'tooltip': '标题'
            }),
            Q = a8({
                'type': z,
                'tooltip': '内容'
            }),
            U = a8({
                'type': A,
                'tooltip': '右边按钮'
            }),
            V = a8({
                'type': z,
                'tooltip': '右边按钮文字'
            }),
            W = a8({
                'type': A,
                'tooltip': '左边按钮'
            }),
            X = a8({
                'type': z,
                'tooltip': '左边按钮文字'
            }),
            J((a0 = k((Z = function(ab) {
                function ac() {
                    for (var ae, af = arguments['length'], ag = new Array(af), ah = 0x0; ah < af; ah++)
                        ag[ah] = arguments[ah];
                    return ae = ab['call']['apply'](ab, [this]['concat'](ag)) || this,
                    q(ae, 'animationNode', a0, v(ae)),
                    q(ae, 'lbTitle', a1, v(ae)),
                    q(ae, 'lbContent', a2, v(ae)),
                    q(ae, 'btnRight', a3, v(ae)),
                    q(ae, 'lbRight', a4, v(ae)),
                    q(ae, 'btnLeft', a5, v(ae)),
                    q(ae, 'lbLeft', a6, v(ae)),
                    ae['leftClickHandler'] = void 0x0,
                    ae['rightClickHandler'] = void 0x0,
                    ae['closeHandler'] = void 0x0,
                    ae;
                }
                m(ac, ab);
                var ad = ac['prototype'];
                return ad['init'] = function(ae) {
                    var af = this;
                    F['ButtonBindClick'](this['btnLeft'], function() {
                        af['onClickBtn'](!0x0);
                    }, this),
                    F['ButtonBindClick'](this['btnRight'], function() {
                        af['onClickBtn'](!0x1);
                    }, this),
                    this['closeHandler'] = ae;
                }
                ,
                ad['onClickBtn'] = function(ae) {
                    var af, ag;
                    (void 0x0 === ae && (ae = !0x0),
                    this['setBtnInteractable'](!0x1),
                    this['close'](),
                    ae) ? null == (af = this['leftClickHandler']) || af['call'](this) : null == (ag = this['rightClickHandler']) || ag['call'](this),
                    (this['leftClickHandler'] = null,
                    this['rightClickHandler'] = null);
                }
                ,
                ad['onClose'] = function() {
                    var ae;
                    null == (ae = this['closeHandler']) || ae['call'](this, this),
                    this['node']['active'] = !0x1;
                }
                ,
                ad['setBtnInteractable'] = function(ae) {
                    this['btnLeft']['interactable'] = ae,
                    this['btnRight']['interactable'] = ae;
                }
                ,
                ad['Show'] = function(ae, af, ag, ah) {
                    this['lbTitle']['string'] = ae,
                    this['lbContent']['string'] = af,
                    this['lbLeft']['string'] = ag['txt'],
                    this['leftClickHandler'] = ag['click'];
                    var ai = null != ah;
                    this['btnRight']['node']['active'] = ai,
                    ai && (this['lbRight']['string'] = ah['txt'],
                    this['rightClickHandler'] = ah['click']),
                    this['setBtnInteractable'](!0x0),
                    this['node']['active'] = !0x0,
                    this['play']('view_show'),
                    this['node']['setSiblingIndex'](-0x1);
                }
                ,
                ad['close'] = function(ae) {
                    var af = this;
                    void 0x0 === ae && (ae = !0x0),
                    ae ? this['play']('view_dismiss', function() {
                        af['onClose']();
                    }) : this['onClose']();
                }
                ,
                ad['play'] = function(ae, af) {
                    F['playAnimation'](this['animationNode'], ae, this, function() {
                        af && af();
                    });
                }
                ,
                ac;
            }(B))['prototype'], 'animationNode', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = k(Z['prototype'], 'lbTitle', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2 = k(Z['prototype'], 'lbContent', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a3 = k(Z['prototype'], 'btnRight', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = k(Z['prototype'], 'lbRight', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a5 = k(Z['prototype'], 'btnLeft', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = k(Z['prototype'], 'lbLeft', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Y = Z)) || Y))
              , aa = j('MsgBoxManager', (function() {
                function ab() {}
                return ab['Show'] = function(ac, ad, ae, af, ag) {
                    var ah = this
                      , ai = Date['now']()['toString']();
                    if (null == this['boxPool'] && (this['boxPool'] = []),
                    0x0 == this['boxPool']['length']) {
                        var aj = (ag = null == ag ? G['bHasLobby'] : ag) ? 'prefab/message' : 'common/prefab/messagebox'
                          , ak = ag ? H['lobby']['toString']() : 'resources';
                        E['res']['load'](ak, aj, function(am, an) {
                            if (null != an && null != an) {
                                var ao = C(an);
                                E['gui']['addNode'](ao, D['Dialog']);
                                var ap = ao['getComponent'](a9);
                                ap['init'](function(aq) {
                                    ah['Recycle'](aq);
                                }),
                                ap['Show'](ac, ad, ae, af),
                                ah['msgBoxMap']['set'](ai, ap);
                            }
                        });
                    } else {
                        var al = this['boxPool']['pop']();
                        al['Show'](ac, ad, ae, af),
                        this['msgBoxMap']['set'](ai, al);
                    }
                    return ai;
                }
                ,
                ab['close'] = function(ac) {
                    var ad = this['msgBoxMap']['get'](ac);
                    ad && (this['msgBoxMap']['delete'](ac),
                    ad['close']());
                }
                ,
                ab['Recycle'] = function(ac) {
                    this['boxPool']['length'] < this['capcity'] ? this['boxPool']['push'](ac) : ac['destroy']();
                }
                ,
                ab;
            }()));
            aa['boxPool'] = [],
            aa['capcity'] = 0x5,
            aa['msgBoxMap'] = new Map(),
            w['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gNetInstable.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(b) {
    var d, f, g, h, j, k, m, p, q, v;
    return {
        'setters': [function(w) {
            d = w['applyDecoratedDescriptor'],
            f = w['inheritsLoose'],
            g = w['initializerDefineProperty'],
            h = w['assertThisInitialized'];
        }
        , function(w) {
            j = w['cclegacy'],
            k = w['_decorator'],
            m = w['Node'],
            p = w['Label'],
            q = w['Component'];
        }
        , function(w) {
            v = w['oops'];
        }
        ],
        'execute': function() {
            var x, z, A, B, C, D, E, F, G;
            j['_RF']['push']({}, 'bc5b6HdcqpN6ZaKHywjHWJ3', 'gNetInstable', void 0x0);
            var H = k['ccclass']
              , I = k['property'];
            b('gNetInstable', (x = H('gNetInstable'),
            z = I(m),
            A = I({
                'type': Number
            }),
            B = I(p),
            x((E = d((D = function(J) {
                function K() {
                    for (var L, M = arguments['length'], O = new Array(M), P = 0x0; P < M; P++)
                        O[P] = arguments[P];
                    return L = J['call']['apply'](J, [this]['concat'](O)) || this,
                    g(L, 'loading', E, h(L)),
                    g(L, 'rotateSpeed', F, h(L)),
                    g(L, 'lbTips', G, h(L)),
                    L['loading_rotate'] = 0x0,
                    L['timeOut'] = null,
                    L;
                }
                return f(K, J),
                K['prototype']['show'] = function(L, M, O) {
                    var P = this;
                    void 0x0 === O && (O = 0xf),
                    this['timeOut'] && (clearTimeout(this['timeOut']),
                    this['timeOut'] = null),
                    this['node']['active'] = L,
                    L && (this['lbTips']['string'] = null != M ? M : 'loading...',
                    O = Math['max'](O, 0xa),
                    this['timeOut'] = setTimeout(function() {
                        P['show'](!0x1),
                        v['log']['logNet']('newwork\x20instable\x20timeout');
                    }, 0x3e8 * O));
                }
                ,
                K;
            }(q))['prototype'], 'loading', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            F = d(D['prototype'], 'rotateSpeed', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0xdc;
                }
            }),
            G = d(D['prototype'], 'lbTips', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            C = D)) || C)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/GUI.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g, j, k, l, m, p;
    return {
        'setters': [function(q) {
            c = q['inheritsLoose'];
        }
        , function(q) {
            d = q['cclegacy'],
            f = q['_decorator'],
            g = q['screen'],
            j = q['view'],
            k = q['ResolutionPolicy'],
            l = q['Vec2'],
            m = q['size'],
            p = q['Component'];
        }
        ],
        'execute': function() {
            var q;
            d['_RF']['push']({}, '9461cd/dGNEGK5I5J24xY6L', 'GUI', void 0x0);
            var v = f['ccclass'];
            f['menu'],
            b('GUI', v('GUI')(q = function(w) {
                function x() {
                    for (var z, A = arguments['length'], B = new Array(A), C = 0x0; C < A; C++)
                        B[C] = arguments[C];
                    return (z = w['call']['apply'](w, [this]['concat'](B)) || this)['tempSize'] = m(0x0, 0x0),
                    z['defaultSize'] = m(0x536, 0x2ee),
                    z['bMaxBound'] = !0x1,
                    z;
                }
                c(x, w);
                var y = x['prototype'];
                return y['onLoad'] = function() {
                    this['init']();
                }
                ,
                y['init'] = function() {
                    this['resize']();
                }
                ,
                y['resize'] = function() {
                    var z = g['windowSize']
                      , A = j['getDesignResolutionSize']();
                    if (!this['tempSize']['equals'](z)) {
                        var B = 2.1
                          , C = A['width'] > A['height']
                          , D = z['width'] > z['height'] ? z['width'] / z['height'] : z['height'] / z['width']
                          , E = C ? A['width'] / A['height'] : A['height'] / A['width']
                          , F = this['defaultSize']['width']
                          , G = this['defaultSize']['height'];
                        if (!C) {
                            var H = F;
                            F = G,
                            G = H;
                        }
                        if (D > 0x10 / 0x9 && D < B)
                            D > E || this['bMaxBound'] ? j['setDesignResolutionSize'](F, G, C ? k['FIXED_HEIGHT'] : k['FIXED_WIDTH']) : j['setDesignResolutionSize'](F, G, C ? k['FIXED_WIDTH'] : k['FIXED_HEIGHT']),
                            this['bMaxBound'] = !0x1;
                        else {
                            if (D > B) {
                                this['bMaxBound'] = !0x0;
                                var I = new l(0x0,0x0);
                                C ? (I['y'] = A['height'],
                                I['x'] = I['y'] * B) : (I['x'] = A['width'],
                                I['y'] = I['x'] * B),
                                j['setDesignResolutionSize'](I['x'], I['y'], k['SHOW_ALL']);
                            } else
                                this['bMaxBound'] = !0x1,
                                j['setDesignResolutionSize'](F, G, k['SHOW_ALL']);
                        }
                        this['tempSize']['set'](z);
                    }
                }
                ,
                x;
            }(p)) || q),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/HttpRequest.ts', ['cc'], function(a) {
    var b, c, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            c = f['error'],
            d = f['warn'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '806e5t8UetFy4spn89dnuan', 'HttpRequest', void 0x0);
            var f = {}
              , g = {}
              , h = a('HttpEvent', function(i) {
                return i['NO_NETWORK'] = 'http_request_no_network',
                i['UNKNOWN_ERROR'] = 'http_request_unknown_error',
                i['TIMEOUT'] = 'http_request_timout',
                i;
            }({}));
            a('HttpRequest', (function() {
                function i() {
                    this['server'] = 'http://127.0.0.1/',
                    this['timeout'] = 0x2710;
                }
                var j = i['prototype'];
                return j['get'] = function(k, l, m) {
                    this['sendRequest'](k, null, !0x1, l, m);
                }
                ,
                j['getWithParams'] = function(k, l, m, o) {
                    this['sendRequest'](k, l, !0x1, m, o);
                }
                ,
                j['getByArraybuffer'] = function(k, l, m) {
                    this['sendRequest'](k, null, !0x1, l, m, 'arraybuffer', !0x1);
                }
                ,
                j['getWithParamsByArraybuffer'] = function(k, l, m, o) {
                    this['sendRequest'](k, l, !0x1, m, o, 'arraybuffer', !0x1);
                }
                ,
                j['post'] = function(k, l, m, o) {
                    this['sendRequest'](k, l, !0x0, m, o);
                }
                ,
                j['abort'] = function(k) {
                    var l = f[this['server'] + k];
                    l && l['abort']();
                }
                ,
                j['getParamString'] = function(k) {
                    var l = '';
                    for (var m in k) {
                        var o = k[m];
                        if (o instanceof Object) {
                            for (var p in o)
                                l += p + '=' + o[p] + '&';
                        } else
                            l += m + '=' + o + '&';
                    }
                    return l['substr'](0x0, l['length'] - 0x1);
                }
                ,
                j['sendRequest'] = function(k, m, q, w, x, z, A, B) {
                    var C, D, E, F = this;
                    if (void 0x0 === A && (A = !0x0),
                    void 0x0 === B && (B = this['timeout']),
                    null != k && '' != k) {
                        if (C = 0x0 == k['toLocaleLowerCase']()['indexOf']('http') ? k : this['server'] + k,
                        m ? (E = this['getParamString'](m),
                        D = C['indexOf']('?') > -0x1 ? C + '&' + E : C + '?' + E) : D = C,
                        null == f[D] || g[D] != E) {
                            var G = new XMLHttpRequest();
                            f[D] = G,
                            g[D] = E,
                            q ? G['open']('POST', C) : G['open']('GET', D),
                            G['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var H = {};
                            H['url'] = C,
                            H['params'] = m,
                            A && (G['timeout'] = B,
                            G['ontimeout'] = function() {
                                F['deleteCache'](D),
                                H['event'] = h['TIMEOUT'],
                                x && x(H);
                            }
                            ),
                            G['onloadend'] = function(I) {
                                if (0x1f4 == G['status']) {
                                    if (F['deleteCache'](D),
                                    null == x)
                                        return;
                                    H['event'] = h['NO_NETWORK'],
                                    x && x(H);
                                }
                            }
                            ,
                            G['onerror'] = function() {
                                F['deleteCache'](D),
                                null != x && (0x0 == G['readyState'] || 0x1 == G['readyState'] || 0x0 == G['status'] ? H['event'] = h['NO_NETWORK'] : H['event'] = h['UNKNOWN_ERROR'],
                                x && x(H));
                            }
                            ,
                            G['onreadystatechange'] = function() {
                                if (0x4 == G['readyState'] && (F['deleteCache'](D),
                                0xc8 == G['status'] && w)) {
                                    if ('arraybuffer' == z)
                                        G['responseType'] = z,
                                        w && w(G['response']);
                                    else {
                                        var I = JSON['parse'](G['response']);
                                        null != I['code'] ? 0x0 == I['code'] ? w && w(I['data']) : x && x(I) : w && w(I);
                                    }
                                }
                            }
                            ,
                            null == m || '' == m ? G['send']() : G['send'](E);
                        } else
                            d('地址【' + C + '】已正在请求中，不能重复请求');
                    } else
                        c('请求地址不能为空');
                }
                ,
                j['deleteCache'] = function(k) {
                    delete f[k],
                    delete g[k];
                }
                ,
                i;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ImageUtil.ts', ['cc'], function(a) {
    var b, c, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            c = f['Color'],
            d = f['Texture2D'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'ebdf3rRnEdIYpKgGdW8gSmZ', 'ImageUtil', void 0x0),
            a('ImageUtil', (function() {
                function f() {}
                return f['getPixelColor'] = function(h, j, k) {
                    var l = document['createElement']('canvas')
                      , p = l['getContext']('2d');
                    l['width'] = h['width'],
                    l['height'] = h['height'];
                    var q = h['getHtmlElementObj']();
                    p['drawImage'](q, 0x0, 0x0, h['width'], h['height']);
                    var s = p['getImageData'](0x0, 0x0, h['width'], h['height'])
                      , v = (k - 0x1) * h['width'] * 0x4 + 0x4 * (j - 0x1)
                      , w = s['data']['slice'](v, v + 0x4)
                      , x = new c(w[0x0],w[0x1],w[0x2],w[0x3]);
                    return q['remove'](),
                    l['remove'](),
                    x;
                }
                ,
                f['imageToBase64'] = function(g, h) {
                    return new Promise(function(j) {
                        var k, l = null == (k = /\.png|\.jpg|\.jpeg/['exec'](g)) ? void 0x0 : k[0x0];
                        if (['.png', '.jpg', '.jpeg']['includes'](l)) {
                            var m = document['createElement']('canvas')
                              , p = m['getContext']('2d')
                              , q = new Image();
                            q['src'] = g,
                            q['onload'] = function() {
                                m['height'] = q['height'],
                                m['width'] = q['width'],
                                p['drawImage'](q, 0x0, 0x0),
                                l = '.jpg' === l ? 'jpeg' : l['replace']('.', '');
                                var s = m['toDataURL']('image/' + l);
                                h && h(s),
                                j(s),
                                q['remove'](),
                                m['remove']();
                            }
                            ;
                        } else
                            console['warn']('Not\x20a\x20jpg/jpeg\x20or\x20png\x20resource!'),
                            h && h(''),
                            j('');
                    }
                    );
                }
                ,
                f['base64ToTexture'] = function(g) {
                    var h = document['createElement']('img');
                    h['src'] = g;
                    var i = new d();
                    return i['initWithElement'](h),
                    h['remove'](),
                    i;
                }
                ,
                f['base64ToBlob'] = function(g) {
                    for (var h = g['split'](','), j = /image\/\w+|;/['exec'](h[0x0])[0x0], k = window['atob'](h[0x1]), l = new ArrayBuffer(k['length']), m = new Uint8Array(l), p = 0x0; p < k['length']; p++)
                        m[p] = 0xff & k['charCodeAt'](p);
                    return new Blob([m],{
                        'type': j
                    });
                }
                ,
                f;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/JsonUtil.ts', ['cc', './Oops.ts'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['cclegacy'],
            c = g['JsonAsset'],
            d = g['error'];
        }
        , function(g) {
            f = g['oops'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '1a24ank4nRC46jfzaIfOmtQ', 'JsonUtil', void 0x0);
            var g = 'config/game/'
              , h = new Map();
            a('JsonUtil', (function() {
                function j() {}
                return j['get'] = function(k) {
                    if (h['has'](k))
                        return h['get'](k);
                }
                ,
                j['load'] = function(k, l) {
                    if (h['has'](k))
                        l(h['get'](k));
                    else {
                        var m = g + k;
                        f['res']['load'](m, c, function(p, q) {
                            p && d(p['message']),
                            h['set'](k, q['json']),
                            l(q['json']);
                        });
                    }
                }
                ,
                j['loadAsync'] = function(k) {
                    return new Promise(function(l, m) {
                        if (h['has'](k))
                            l(h['get'](k));
                        else {
                            var p = g + k;
                            f['res']['load'](p, c, function(q, u) {
                                q && d(q['message']),
                                h['set'](k, u['json']),
                                l(u['json']);
                            });
                        }
                    }
                    );
                }
                ,
                j['release'] = function(k) {
                    var l = g + k;
                    h['delete'](k),
                    f['res']['release'](l);
                }
                ,
                j;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LabelChange.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LabelNumber.ts'], function(b) {
    var d, f, g, h, j, k, l;
    return {
        'setters': [function(m) {
            d = m['applyDecoratedDescriptor'],
            f = m['inheritsLoose'],
            g = m['initializerDefineProperty'],
            h = m['assertThisInitialized'];
        }
        , function(m) {
            j = m['cclegacy'],
            k = m['_decorator'];
        }
        , function(m) {
            l = m['default'];
        }
        ],
        'execute': function() {
            var m, q, v;
            j['_RF']['push']({}, 'fff0fLwVNhNe59VirWTCPFJ', 'LabelChange', void 0x0);
            var w = k['ccclass']
              , x = k['property']
              , y = k['menu'];
            b('LabelChange', w('LabelChange')(m = y('ui/label/LabelChange')((v = d((q = function(z) {
                function A() {
                    for (var C, D = arguments['length'], E = new Array(D), F = 0x0; F < D; F++)
                        E[F] = arguments[F];
                    return C = z['call']['apply'](z, [this]['concat'](E)) || this,
                    g(C, 'isInteger', v, h(C)),
                    C['duration'] = 0x0,
                    C['callback'] = void 0x0,
                    C['isBegin'] = !0x1,
                    C['speed'] = 0x0,
                    C['end'] = 0x0,
                    C;
                }
                f(A, z);
                var B = A['prototype'];
                return B['changeTo'] = function(C, D, E) {
                    0x0 != C ? this['playAnim'](C, this['num'], D, E) : E && E();
                }
                ,
                B['changeBy'] = function(C, D, E) {
                    0x0 != C ? this['playAnim'](C, this['num'], this['num'] + D, E) : E && E();
                }
                ,
                B['stop'] = function(C) {
                    void 0x0 === C && (C = !0x0),
                    this['num'] = this['end'],
                    this['isBegin'] = !0x1,
                    C && this['callback'] && this['callback']();
                }
                ,
                B['playAnim'] = function(C, D, E, F) {
                    this['duration'] = C,
                    this['end'] = E,
                    this['callback'] = F,
                    this['speed'] = (E - D) / C,
                    this['num'] = D,
                    this['isBegin'] = !0x0;
                }
                ,
                B['isEnd'] = function(C) {
                    return this['speed'] > 0x0 ? C >= this['end'] : C <= this['end'];
                }
                ,
                B['update'] = function(C) {
                    if (this['isBegin']) {
                        if (this['num'] == this['end'])
                            return this['isBegin'] = !0x1,
                            void (this['callback'] && this['callback']());
                        var D = this['num'] + C * this['speed'];
                        this['isInteger'] && (D = Math['ceil'](D)),
                        this['isEnd'](D) && (D = this['end'],
                        this['isBegin'] = !0x1,
                        this['callback'] && this['callback']()),
                        this['num'] = D;
                    }
                }
                ,
                A;
            }(l))['prototype'], 'isInteger', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            m = q)) || m) || m),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LabelNumber.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g, h, j, k, m, p;
    return {
        'setters': [function(q) {
            c = q['applyDecoratedDescriptor'],
            d = q['inheritsLoose'],
            f = q['initializerDefineProperty'],
            g = q['assertThisInitialized'],
            h = q['createClass'];
        }
        , function(q) {
            j = q['cclegacy'],
            k = q['_decorator'],
            m = q['error'],
            p = q['Label'];
        }
        ],
        'execute': function() {
            var q, v, x, z, A, B, C, D;
            j['_RF']['push']({}, 'f7b43F70BhPlrz4IPhZGmsL', 'LabelNumber', void 0x0);
            var E = k['ccclass']
              , F = k['property']
              , G = k['menu'];
            b('default', (q = E('LabelNumber'),
            v = G('ui/label/LabelNumber'),
            x = F({
                'tooltip': '是否显示货币符号'
            }),
            q(z = v((B = c((A = function(H) {
                function I() {
                    for (var J, K = arguments['length'], M = new Array(K), N = 0x0; N < K; N++)
                        M[N] = arguments[N];
                    return J = H['call']['apply'](H, [this]['concat'](M)) || this,
                    f(J, '_num', B, g(J)),
                    f(J, '_showSym', C, g(J)),
                    f(J, 'useFix', D, g(J)),
                    J;
                }
                return d(I, H),
                I['prototype']['updateLabel'] = function() {
                    'number' != typeof this['_num'] && m('[LabelNumber]\x20num不是一个合法数字'),
                    this['string'] = this['num']['toString']();
                }
                ,
                h(I, [{
                    'key': 'num',
                    'get': function() {
                        return this['_num'];
                    },
                    'set': function(J) {
                        this['_num'] = J,
                        this['updateLabel']();
                    }
                }, {
                    'key': 'showSym',
                    'get': function() {
                        return this['_showSym'];
                    },
                    'set': function(J) {
                        J && (this['_showSym'] = J,
                        this['updateLabel']());
                    }
                }]),
                I;
            }(p))['prototype'], '_num', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            C = c(A['prototype'], '_showSym', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            c(A['prototype'], 'num', [F], Object['getOwnPropertyDescriptor'](A['prototype'], 'num'), A['prototype']),
            c(A['prototype'], 'showSym', [F], Object['getOwnPropertyDescriptor'](A['prototype'], 'showSym'), A['prototype']),
            D = c(A['prototype'], 'useFix', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            z = A)) || z) || z)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LabelTime.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g, h, j, k;
    return {
        'setters': [function(l) {
            c = l['applyDecoratedDescriptor'],
            d = l['inheritsLoose'],
            f = l['initializerDefineProperty'],
            g = l['assertThisInitialized'];
        }
        , function(l) {
            h = l['cclegacy'],
            j = l['_decorator'],
            k = l['Label'];
        }
        ],
        'execute': function() {
            var q, w, x, A, B, C, E, F, G, H, I, J;
            h['_RF']['push']({}, '57786GMN6RPbaAT9b9RmX18', 'LabelTime', void 0x0);
            var K = j['ccclass']
              , L = j['property']
              , M = j['menu'];
            b('default', (q = K('LabelTime'),
            w = M('ui/label/LabelTime'),
            x = L({
                'tooltip': '到计时间总时间（单位秒）'
            }),
            A = L({
                'tooltip': '天数数据格式化'
            }),
            B = L({
                'tooltip': '时间格式化'
            }),
            C = L({
                'tooltip': '是否有00'
            }),
            q(E = w((G = c((F = function(N) {
                function O() {
                    for (var Q, R = arguments['length'], T = new Array(R), U = 0x0; U < R; U++)
                        T[U] = arguments[U];
                    return Q = N['call']['apply'](N, [this]['concat'](T)) || this,
                    f(Q, 'countDown', G, g(Q)),
                    f(Q, 'dayFormat', H, g(Q)),
                    f(Q, 'timeFormat', I, g(Q)),
                    f(Q, 'zeroize', J, g(Q)),
                    Q['dateDisable'] = void 0x0,
                    Q['result'] = void 0x0,
                    Q['onSecond'] = null,
                    Q['onComplete'] = null,
                    Q;
                }
                d(O, N);
                var P = O['prototype'];
                return P['replace'] = function(Q) {
                    for (var R = arguments['length'], T = new Array(R > 0x1 ? R - 0x1 : 0x0), U = 0x1; U < R; U++)
                        T[U - 0x1] = arguments[U];
                    return Q['replace'](/\{(\d+)\}/g, function(V, W) {
                        return T[W];
                    });
                }
                ,
                P['format'] = function() {
                    var Q = this['countDown']
                      , R = Math['floor'](Q / 0x15180);
                    Q -= 0x15180 * R;
                    var T = Math['floor'](Q / 0xe10);
                    Q -= 0xe10 * T;
                    var U = Math['floor'](Q / 0x3c)
                      , V = Q -= 0x3c * U;
                    if (this['dateDisable'] = this['dateDisable'] || !0x1,
                    0x0 == R && 0x0 == T && 0x0 == U && 0x0 == V)
                        this['zeroize'] ? this['result'] = this['replace'](this['timeFormat'], '00', '00', '00') : this['result'] = this['replace'](this['timeFormat'], '0', '0', '0');
                    else {
                        if (R > 0x0 && !this['dateDisable']) {
                            var W = this['dayFormat']
                              , X = W['indexOf']('{1}');
                            0x0 == T && X > -0x1 && (W = W['substring'](0x0, X - 0x1));
                            var Y = W;
                            R > 0x1 && W['indexOf']('days') < 0x0 && (Y = Y['replace']('day', 'days')),
                            R < 0x2 && (Y = Y['replace']('days', 'day')),
                            this['result'] = this['replace'](Y, R, T);
                        } else
                            T += 0x18 * R,
                            this['zeroize'] ? this['result'] = this['replace'](this['timeFormat'], this['coverString'](T), this['coverString'](U), this['coverString'](V)) : this['result'] = this['replace'](this['timeFormat'], T, U, V);
                    }
                    this['string'] = this['result'];
                }
                ,
                P['coverString'] = function(Q) {
                    return Q < 0xa ? '0' + Q : Q['toString']();
                }
                ,
                P['setDateDisable'] = function(Q) {
                    this['dateDisable'] = Q;
                }
                ,
                P['setTime'] = function(Q) {
                    this['countDown'] = Q,
                    this['timing_end'](),
                    this['timing_start']();
                }
                ,
                P['start'] = function() {
                    this['timing_start']();
                }
                ,
                P['onScheduleSecond'] = function() {
                    this['countDown']--,
                    this['format'](),
                    this['onSecond'] && this['onSecond'](this['node']),
                    0x0 == this['countDown'] && this['onScheduleComplete']();
                }
                ,
                P['onScheduleComplete'] = function() {
                    this['timing_end'](),
                    this['onComplete'] && this['onComplete'](this['node']);
                }
                ,
                P['timing_start'] = function() {
                    this['schedule'](this['onScheduleSecond'], 0x1),
                    this['format']();
                }
                ,
                P['timing_end'] = function() {
                    this['unscheduleAllCallbacks'](),
                    this['format']();
                }
                ,
                O;
            }(k))['prototype'], 'countDown', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x3e8;
                }
            }),
            H = c(F['prototype'], 'dayFormat', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '{0}\x20day';
                }
            }),
            I = c(F['prototype'], 'timeFormat', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '{0}:{1}:{2}';
                }
            }),
            J = c(F['prototype'], 'zeroize', [C], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            E = F)) || E) || E)),
            h['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Language.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventDispatcher.ts', './Logger.ts', './LanguageData.ts', './LanguagePack.ts', './Oops.ts'], function(b) {
    var d, f, h, j, k, m, p, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['inheritsLoose'],
            f = A['createClass'];
        }
        , function(A) {
            h = A['cclegacy'],
            j = A['_decorator'],
            k = A['settings'],
            m = A['Settings'],
            p = A['warn'],
            q = A['SpriteFrame'];
        }
        , function(A) {
            v = A['EventDispatcher'];
        }
        , function(A) {
            w = A['Logger'];
        }
        , function(A) {
            x = A['LanguageData'];
        }
        , function(A) {
            y = A['LanguagePack'];
        }
        , function(A) {
            z = A['oops'];
        }
        ],
        'execute': function() {
            var B, C;
            h['_RF']['push']({}, '3757cxZqLZObIdvP/gQ6Yuj', 'Language', void 0x0);
            var D = b('LanguageEvent', function(H) {
                return H['CHANGE'] = 'LanguageEvent.CHANGE',
                H['RELEASE_RES'] = 'LanguageEvent.RELEASE_RES',
                H;
            }({}))
              , F = b('LanguageDefine', function(H) {
                return H['EN'] = 'en',
                H['PT'] = 'pt',
                H['VI'] = 'vi',
                H['THA'] = 'tha',
                H['ES_MX'] = 'es_mx',
                H['BN'] = 'bn',
                H['ID'] = 'id',
                H['AR'] = 'ar',
                H['MY'] = 'my',
                H;
            }({}))
              , G = j['executeInEditMode'];
            b('LanguageManager', G(((C = function(H) {
                function I() {
                    var K;
                    (K = H['call'](this) || this)['bundleMap'] = new Map(),
                    K['_support'] = [F['EN'], F['PT'], F['VI'], F['THA'], F['ES_MX'], F['BN'], F['ID'], F['AR'], F['MY']],
                    K['_languagePack'] = new y();
                    var M = k['querySettings'](m['Category']['ASSETS'], 'projectBundles') || [];
                    return K['bundleMap']['clear'](),
                    M['forEach'](function(N) {
                        K['bundleMap']['set'](N, !0x0);
                    }),
                    K;
                }
                d(I, H);
                var J = I['prototype'];
                return J['hasBundle'] = function(K) {
                    return this['bundleMap']['has'](K) || !0x1;
                }
                ,
                J['isExist'] = function(K) {
                    return this['languages']['indexOf'](K) > -0x1;
                }
                ,
                J['getNextLang'] = function() {
                    var K = this['languages']
                      , M = K['indexOf'](x['current']);
                    return K[(M + 0x1) % K['length']];
                }
                ,
                J['setLanguage'] = function(K, M) {
                    K = "PT", //☠️ Force PTBR
                    K = K['toLowerCase'](),
                    this['languages']['indexOf'](K) < 0x0 && (p('当前不支持该语种\x22\x20+\x20language\x20+\x20\x22\x20将自动切换到\x20' + I['DEFAULT_LANGUAGE'] + '\x20语种!'),
                    K = I['DEFAULT_LANGUAGE']),
                    K !== x['current'] ? (w['logConfig']('当前语言为【' + K + '】'),
                    x['current'] = K,
                    this['_languagePack']['updateLanguage'](K),
                    this['dispatchEvent'](D['CHANGE'], K),
                    M(!0x0)) : M(!0x1);
                }
                ,
                J['setAssetsPath'] = function(K, M) {
                    this['_languagePack']['setAssetsPath'](K, M);
                }
                ,
                I['getLangByTag'] = function(K, M) {
                    var N = null == M ? '0' : M['toString']();
                    return x['getLangByTag'](K, N);
                }
                ,
                I['getLangByID'] = function(K, M) {
                    var N = null == M ? '0' : M['toString']();
                    return x['getLangByID'](K, N);
                }
                ,
                I['getLangStrDef'] = function(K) {
                    return void 0x0 === K && (K = 0x0),
                    window['strDef'][K];
                }
                ,
                I['getLanSprite'] = function(K, M, N, O) {
                    void 0x0 === O && (O = 'content/sprite/lan');
                    var P = x['current']
                      , Q = O + '/' + P + '/' + K + '/spriteFrame'
                      , R = N ? N + '_' + P : 'resources';
                    z['language']['hasBundle'](R) || (R = N + '_' + F['EN'],
                    Q = O + '/' + F['EN'] + '/' + K + '/spriteFrame'),
                    z['res']['load'](R, Q, q, function(S, T) {
                        if (S) {
                            var U = O + '/' + F['EN'] + '/' + K + '/spriteFrame';
                            return R = N + '_' + F['EN'],
                            void z['res']['load'](R, U, q, function(V, W) {
                                null == M || M(V, W);
                            });
                        }
                        null == M || M(S, T);
                    });
                }
                ,
                J['loadLanguageAssets'] = function(K, M) {
                    return K = K['toLowerCase'](),
                    this['_languagePack']['loadLanguageAssets'](K, M);
                }
                ,
                J['releaseLanguageAssets'] = function(K) {
                    K = K['toLowerCase'](),
                    this['_languagePack']['releaseLanguageAssets'](K),
                    this['dispatchEvent'](D['RELEASE_RES'], K);
                }
                ,
                f(I, [{
                    'key': 'supportLanguages',
                    'set': function(K) {
                        this['_support'] = K;
                    }
                }, {
                    'key': 'current',
                    'get': function() {
                        return x['current'];
                    }
                }, {
                    'key': 'languages',
                    'get': function() {
                        return this['_support'];
                    }
                }]),
                I;
            }(v))['DEFAULT_LANGUAGE'] = F['PT'],
            B = C)) || B),
            h['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LanguageData.ts', ['cc', './Language.ts'], function(b) {
    var c, d, f;
    return {
        'setters': [function(g) {
            c = g['cclegacy'],
            d = g['_decorator'];
        }
        , function(g) {
            f = g['LanguageManager'];
        }
        ],
        'execute': function() {
            var h, i;
            c['_RF']['push']({}, '27fb3sjD81JlIP2KFTSWUp4', 'LanguageData', void 0x0);
            var j = d['executeInEditMode'];
            b('LanguageData', j(((i = (function() {
                function k() {}
                return k['getLangByTag'] = function(m, p) {
                    var q, s;
                    void 0x0 === p && (p = '0');
                    var v = window;
                    if (!v['languages'])
                        return m;
                    var w, x, y = v['strDef'][p][m], z = null == (q = v['languages'][k['current']]) || null == (s = q[p]) ? void 0x0 : s[y];
                    return null == z && (z = null == (w = v['languages'][f['DEFAULT_LANGUAGE']]) || null == (x = w[p]) ? void 0x0 : x[y]),
                    z || p + '-' + m;
                }
                ,
                k['getLangByID'] = function(m, p) {
                    var q, s;
                    void 0x0 === p && (p = '0');
                    var v = window;
                    if (!v['languages'])
                        return m;
                    var w, x, y = null == (q = v['languages'][k['current']]) || null == (s = q[p]) ? void 0x0 : s[m];
                    return null == y && (y = null == (w = v['languages'][f['DEFAULT_LANGUAGE']]) || null == (x = w[p]) ? void 0x0 : x[m]),
                    y || p + '-' + m;
                }
                ,
                k;
            }()))['current'] = f['PT'],
            i['data'] = {},
            h = i)) || h),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LanguageLabel.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageData.ts'], function(b) {
    var d, f, g, h, j, k, m, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['applyDecoratedDescriptor'],
            f = y['initializerDefineProperty'],
            g = y['inheritsLoose'],
            h = y['assertThisInitialized'],
            j = y['createClass'];
        }
        , function(y) {
            k = y['cclegacy'],
            m = y['_decorator'],
            q = y['Label'],
            v = y['RichText'],
            w = y['Component'];
        }
        , function(y) {
            x = y['LanguageData'];
        }
        ],
        'execute': function() {
            var A, B, E, F, G, H, J, K, M, N, O, Q, S, T;
            k['_RF']['push']({}, '110c8vEd5NEPL/N9meGQnaX', 'LanguageLabel', void 0x0);
            var U = m['ccclass']
              , V = m['property']
              , W = m['menu']
              , X = m['executeInEditMode'];
            m['requireComponent'],
            b('LangLabelParamsItem', U('LangLabelParamsItem')((E = d((B = function() {
                f(this, 'key', E, this),
                f(this, 'value', F, this);
            }
            )['prototype'], 'key', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            F = d(B['prototype'], 'value', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            A = B)) || A),
            b('LanguageLabel', (G = U('LanguageLabel'),
            H = W('ui/language/LanguageLabel'),
            J = V({
                'visible': !0x1
            }),
            K = V({
                'displayName': 'Key',
                'visible': !0x0,
                'tooltip': '多语言key'
            }),
            M = V({
                'visible': !0x1
            }),
            N = V({
                'displayName': 'gameID',
                'visible': !0x0,
                'tooltip': '子游戏id'
            }),
            G(O = H(O = X((S = d((Q = function(Y) {
                function Z() {
                    for (var a1, a2 = arguments['length'], a3 = new Array(a2), a4 = 0x0; a4 < a2; a4++)
                        a3[a4] = arguments[a4];
                    return (a1 = Y['call']['apply'](Y, [this]['concat'](a3)) || this)['label'] = null,
                    f(a1, 'key', S, h(a1)),
                    f(a1, 'gameID', T, h(a1)),
                    a1;
                }
                g(Z, Y);
                var a0 = Z['prototype'];
                return a0['onLoad'] = function() {
                    this['fetchRender']();
                }
                ,
                a0['language'] = function() {
                    this['fetchRender']();
                }
                ,
                a0['fetchRender'] = function() {
                    var a1 = this['getComponent'](q);
                    a1 || (a1 = this['getComponent'](v)),
                    a1 && (this['label'] = a1,
                    this['updateLabel']());
                }
                ,
                a0['updateLabel'] = function() {
                    this['label'] && (this['label']['string'] = x['getLangByTag'](this['key'], this['gameID']['toString']()));
                }
                ,
                j(Z, [{
                    'key': '_key',
                    'get': function() {
                        return this['key'];
                    },
                    'set': function(a1) {
                        this['key'] = a1,
                        this['updateLabel']();
                    }
                }, {
                    'key': '_gameID',
                    'get': function() {
                        return this['gameID'];
                    },
                    'set': function(a1) {
                        this['gameID'] = a1;
                    }
                }]),
                Z;
            }(w))['prototype'], 'key', [J], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            d(Q['prototype'], '_key', [K], Object['getOwnPropertyDescriptor'](Q['prototype'], '_key'), Q['prototype']),
            T = d(Q['prototype'], 'gameID', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            d(Q['prototype'], '_gameID', [N], Object['getOwnPropertyDescriptor'](Q['prototype'], '_gameID'), Q['prototype']),
            O = Q)) || O) || O) || O)),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LanguagePack.ts', ['cc', './Logger.ts', './Oops.ts', './LanguageLabel.ts', './LanguageSprite.ts'], function(b) {
    var c, d, f, h, i, j, k;
    return {
        'setters': [function(l) {
            c = l['cclegacy'],
            d = l['director'],
            f = l['error'];
        }
        , function(l) {
            h = l['Logger'];
        }
        , function(l) {
            i = l['oops'];
        }
        , function(l) {
            j = l['LanguageLabel'];
        }
        , function(l) {
            k = l['LanguageSprite'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '2ffebyj59xIc4v4BZty8SDm', 'LanguagePack', void 0x0),
            b('LanguagePack', (function() {
                function l() {
                    this['_langjsonPath'] = 'lang_json',
                    this['_langTexturePath'] = 'lang_texture';
                }
                var m = l['prototype'];
                return m['setAssetsPath'] = function(p, q) {
                    p && (this['_langjsonPath'] = p),
                    q && (this['_langTexturePath'] = q);
                }
                ,
                m['updateLanguage'] = function(p) {
                    for (var q = d['getScene']()['children'], v = 0x0; v < q['length']; ++v) {
                        for (var w = q[v]['getComponentsInChildren'](j), x = 0x0; x < w['length']; x++)
                            w[x]['language']();
                        for (var y = q[v]['getComponentsInChildren'](k), z = 0x0; z < y['length']; z++)
                            y[z]['language']();
                    }
                }
                ,
                m['loadLanguageAssets'] = function(p, q) {
                    var u = this['_langTexturePath'] + '/' + p;
                    i['res']['loadDir'](u, function(v) {
                        if (v)
                            return f(v),
                            void q(v);
                        q(v, p),
                        h['logConfig'](u, 'download\x20language\x20assets');
                    });
                }
                ,
                m['releaseLanguageAssets'] = function(p) {
                    var q = this['_langTexturePath'] + '/' + p;
                    i['res']['releaseDir'](q),
                    h['logView'](q, '释放语言图片资源');
                    var u = this['_langjsonPath'] + '/' + p;
                    i['res']['release'](u),
                    h['logView'](u, '释放语言文字资源');
                }
                ,
                l;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LanguageSprite.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './LanguageData.ts', './Language.ts', './BaseGameUIConfig.ts'], function(j) {
    var k, q, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M;
    return {
        'setters': [function(N) {
            k = N['applyDecoratedDescriptor'],
            q = N['inheritsLoose'],
            v = N['initializerDefineProperty'],
            w = N['assertThisInitialized'],
            x = N['createClass'],
            z = N['asyncToGenerator'],
            A = N['regeneratorRuntime'];
        }
        , function(N) {
            B = N['cclegacy'],
            C = N['_decorator'],
            D = N['Sprite'],
            E = N['CCString'],
            F = N['CCInteger'],
            G = N['SpriteFrame'],
            H = N['UITransform'],
            I = N['Component'],
            J = N['assetManager'];
        }
        , function(N) {
            K = N['oops'];
        }
        , function(N) {
            L = N['LanguageData'];
        }
        , function(N) {
            M = N['LanguageManager'];
        }
        , null],
        'execute': function() {
            var P, Q, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
            B['_RF']['push']({}, '11b96k/RIZF57Loehxyl6Hs', 'LanguageSprite', void 0x0);
            var a8 = C['ccclass']
              , a9 = C['property']
              , aa = C['menu']
              , ab = C['executeInEditMode']
              , ac = C['requireComponent'];
            j('LanguageSprite', (P = a8('LanguageSprite'),
            Q = aa('ui/language/LanguageSprite'),
            V = ac(D),
            W = a9({
                'serializable': !0x0
            }),
            X = a9({
                'type': E,
                'serializable': !0x0,
                'tooltip': '图片名称'
            }),
            Y = a9({
                'visible': !0x1
            }),
            Z = a9({
                'type': F,
                'displayName': 'gameID',
                'visible': !0x0,
                'tooltip': '子游戏id或者大厅子功能id'
            }),
            a0 = a9({
                'tooltip': '是否设置为图片原始资源大小'
            }),
            a1 = a9({
                'type': D,
                'tooltip': '图片组件'
            }),
            P(a2 = Q(a2 = ab(a2 = V((a4 = k((a3 = function(ad) {
                function ae() {
                    for (var ag, ah = arguments['length'], ai = new Array(ah), aj = 0x0; aj < ah; aj++)
                        ai[aj] = arguments[aj];
                    return ag = ad['call']['apply'](ad, [this]['concat'](ai)) || this,
                    v(ag, '_spriteName', a4, w(ag)),
                    v(ag, 'gameID', a5, w(ag)),
                    v(ag, 'isRawSize', a6, w(ag)),
                    v(ag, 'sprite', a7, w(ag)),
                    ag;
                }
                q(ae, ad);
                var af = ae['prototype'];
                return af['start'] = function() {
                    this['updateSprite']();
                }
                ,
                af['language'] = function() {
                    this['updateSprite']();
                }
                ,
                af['updateSprite'] = (function() {
                    var ag = z(A()['mark'](function ah() {
                        var ai, aj, ak, al, am, an = this;
                        return A()['wrap'](function(ao) {
                            for (; ; )
                                switch (ao['prev'] = ao['next']) {
                                case 0x0:
                                    if (0x0 != this['_spriteName']['length'] && '' != this['_spriteName']) {
                                        ao['next'] = 0x2;
                                        break;
                                    }
                                    return ao['abrupt']('return');
                                case 0x2:
                                    ai = L['current'],
                                    aj = this['gameID'] + '_' + ai,
                                    ak = 'content/sprite/lan/' + ai + '/' + this['_spriteName'] + '/spriteFrame',
                                    ao['next'] = 0x14;
                                    break;
                                case 0xa:
                                    if (0x0 != (am = ao['sent'])['length']) {
                                        ao['next'] = 0x10;
                                        break;
                                    }
                                    return al = al['replace']('.png', '.jpg'),
                                    ao['next'] = 0xf,
                                    Editor['Message']['request']('asset-db', 'query-uuid', al);
                                case 0xf:
                                    am = ao['sent'];
                                case 0x10:
                                    return am['length'] > 0x0 && J['loadAny'](am, function(ap, aq) {
                                        ap ? console['log']('loadAny\x20error\x20===', ap) : this['replaceSpriteFrame'](aq);
                                    }
                                    ['bind'](this)),
                                    ao['abrupt']('return');
                                case 0x14:
                                    K['language']['hasBundle'](aj) || (aj = this['gameID'] + '_' + M['DEFAULT_LANGUAGE']),
                                    this['loadSpriteFrame'](aj, ak, function(ap, aq) {
                                        if (ap) {
                                            var ar = 'content/sprite/lan/' + M['DEFAULT_LANGUAGE'] + '/' + an['_spriteName'] + '/spriteFrame';
                                            aj = an['gameID'] + '_' + M['DEFAULT_LANGUAGE'],
                                            an['loadSpriteFrame'](aj, ar, function(as, at) {
                                                as || an['replaceSpriteFrame'](at);
                                            });
                                        } else
                                            an['replaceSpriteFrame'](aq);
                                    });
                                case 0x16:
                                case 'end':
                                    return ao['stop']();
                                }
                        }, ah, this);
                    }));
                    return function() {
                        return ag['apply'](this, arguments);
                    }
                    ;
                }()),
                af['loadSpriteFrame'] = function(ag, ah, ai) {
                    K['res']['load'](ag, ah, G, function(aj, ak) {
                        ai(aj, ak);
                    });
                }
                ,
                af['replaceSpriteFrame'] = function(ag) {
                    if (null == this['sprite'] && (this['sprite'] = this['getComponent'](D)),
                    this['sprite'] && (this['sprite']['spriteFrame'] = ag,
                    this['isRawSize'])) {
                        var ah, ai = ag['_originalSize'];
                        null == (ah = this['sprite']['node']['getComponent'](H)) || ah['setContentSize'](ai);
                    }
                }
                ,
                x(ae, [{
                    'key': 'SpriteName',
                    'get': function() {
                        return this['_spriteName'] || '';
                    },
                    'set': function(ag) {
                        this['_spriteName'] = ag,
                        this['updateSprite']();
                    }
                }, {
                    'key': '_gameID',
                    'get': function() {
                        return this['gameID'];
                    },
                    'set': function(ag) {
                        this['gameID'] = ag;
                    }
                }]),
                ae;
            }(I))['prototype'], '_spriteName', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            k(a3['prototype'], 'SpriteName', [X], Object['getOwnPropertyDescriptor'](a3['prototype'], 'SpriteName'), a3['prototype']),
            a5 = k(a3['prototype'], 'gameID', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            k(a3['prototype'], '_gameID', [Z], Object['getOwnPropertyDescriptor'](a3['prototype'], '_gameID'), a3['prototype']),
            a6 = k(a3['prototype'], 'isRawSize', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            a7 = k(a3['prototype'], 'sprite', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a2 = a3)) || a2) || a2) || a2) || a2)),
            B['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerDialog.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Defines.ts', './LayerPopup.ts'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['inheritsLoose'];
        }
        , function(g) {
            c = g['cclegacy'];
        }
        , function(g) {
            d = g['ViewParams'];
        }
        , function(g) {
            f = g['LayerPopUp'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'dcad5w8wHlEDJpIKJ4gUxEP', 'LayerDialog', void 0x0),
            a('LayerDialog', function(g) {
                function h() {
                    for (var k, l = arguments['length'], m = new Array(l), o = 0x0; o < l; o++)
                        m[o] = arguments[o];
                    return (k = g['call']['apply'](g, [this]['concat'](m)) || this)['queue'] = [],
                    k['queue_params'] = [],
                    k['current'] = void 0x0,
                    k;
                }
                b(h, g);
                var j = h['prototype'];
                return j['add'] = function(k, l, m) {
                    var o = this
                      , p = k['prefab']
                      , q = this['getUuid'](p)
                      , v = this['ui_nodes']['get'](q);
                    if (null == v) {
                        (v = new d())['uuid'] = this['getUuid'](p),
                        v['prefabPath'] = p,
                        v['callbacks'] = null != m ? m : {};
                        var w = v['callbacks']['onRemoved'];
                        v['callbacks']['onRemoved'] = function(x, y) {
                            w && w(x, y),
                            setTimeout(function() {
                                o['next']();
                            }, 0x0);
                        }
                        ,
                        v['valid'] = !0x0,
                        this['ui_nodes']['set'](v['uuid'], v);
                    }
                    return this['current'] && this['current']['valid'] ? (this['queue']['push'](v),
                    this['queue_params']['push'](l || {})) : (v['params'] = l || {},
                    this['current'] = v,
                    this['load'](v, k['bundle'])),
                    q;
                }
                ,
                j['setBlackDisable'] = function() {}
                ,
                j['next'] = function() {
                    this['queue']['length'] > 0x0 && (this['current'] = this['queue']['shift'](),
                    this['current']['params'] = this['queue_params']['shift'](),
                    this['current']['node'] ? this['createNode'](this['current']) : this['load'](this['current']));
                }
                ,
                h;
            }(f)),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './DelegateComponent.ts', './LayerDialog.ts', './LayerNotify.ts', './LayerPopup.ts', './LayerUI.ts', './UIMap.ts'], function(b) {
    var g, j, k, m, q, v, w, x, y, z, A, B, C, D;
    return {
        'setters': [function(E) {
            g = E['asyncToGenerator'],
            j = E['regeneratorRuntime'];
        }
        , function(E) {
            k = E['cclegacy'],
            m = E['warn'],
            q = E['Node'],
            v = E['Layers'],
            w = E['Widget'],
            x = E['Camera'];
        }
        , function(E) {
            y = E['DelegateComponent'];
        }
        , function(E) {
            z = E['LayerDialog'];
        }
        , function(E) {
            A = E['LayerNotify'];
        }
        , function(E) {
            B = E['LayerPopUp'];
        }
        , function(E) {
            C = E['LayerUI'];
        }
        , function(E) {
            D = E['UIMap'];
        }
        ],
        'execute': function() {
            k['_RF']['push']({}, '7ba675xFGdHqIOykTysNzEu', 'LayerManager', void 0x0);
            var E = b('LayerType', function(F) {
                return F['Game'] = 'LayerGame',
                F['UI'] = 'LayerUI',
                F['PopUp'] = 'LayerPopUp',
                F['Dialog'] = 'LayerDialog',
                F['System'] = 'LayerSystem',
                F['Notify'] = 'LayerNotify',
                F['Guide'] = 'LayerGuide',
                F;
            }({}));
            b('LayerManager', (function() {
                var F = G['prototype'];
                function G(H) {
                    this['root'] = void 0x0,
                    this['camera'] = void 0x0,
                    this['game'] = void 0x0,
                    this['guide'] = void 0x0,
                    this['uiMap'] = void 0x0,
                    this['ui'] = void 0x0,
                    this['popup'] = void 0x0,
                    this['dialog'] = void 0x0,
                    this['system'] = void 0x0,
                    this['notify'] = void 0x0,
                    this['configs'] = {},
                    this['root'] = H,
                    this['camera'] = this['root']['getComponentInChildren'](x),
                    this['game'] = this['create_node'](E['Game']),
                    this['ui'] = new C(E['UI']),
                    this['popup'] = new B(E['PopUp']),
                    this['dialog'] = new z(E['Dialog']),
                    this['system'] = new z(E['System']),
                    this['notify'] = new A(E['Notify']),
                    this['guide'] = this['create_node'](E['Guide']),
                    H['addChild'](this['game']),
                    H['addChild'](this['ui']),
                    H['addChild'](this['popup']),
                    H['addChild'](this['dialog']),
                    H['addChild'](this['system']),
                    H['addChild'](this['notify']),
                    H['addChild'](this['guide']);
                }
                return F['init'] = function(H) {
                    this['configs'] = H;
                }
                ,
                F['addConfig'] = function(H, I) {
                    this['configs'][H] ? console['warn']('addConfig:\x20UID\x20is\x20exist:', H) : this['configs'][H] = I;
                }
                ,
                F['addNode'] = function(H, I) {
                    switch (I) {
                    case E['UI']:
                        this['ui']['addNode'](H);
                        break;
                    case E['PopUp']:
                        this['popup']['addNode'](H);
                        break;
                    case E['Dialog']:
                        this['dialog']['addNode'](H);
                        break;
                    case E['System']:
                        this['system']['addNode'](H);
                        break;
                    case E['Guide']:
                        this['guide']['addChild'](H);
                    }
                }
                ,
                F['toast'] = function(H, I) {
                    void 0x0 === I && (I = !0x1),
                    this['notify']['show'](H, I);
                }
                ,
                F['setConfig'] = function(H, I) {
                    this['configs'][H] = I;
                }
                ,
                F['setUIMap'] = function(H) {
                    null == this['uiMap'] && (this['uiMap'] = new D()),
                    this['uiMap']['init'](this, H);
                }
                ,
                F['open'] = function(H, I, J) {
                    void 0x0 === I && (I = null);
                    var K = this['configs'][H];
                    if (null != K)
                        switch (K['layer']) {
                        case E['UI']:
                            this['ui']['add'](K, I, J);
                            break;
                        case E['PopUp']:
                            this['popup']['add'](K, I, J);
                            break;
                        case E['Dialog']:
                            this['dialog']['add'](K, I, J);
                            break;
                        case E['System']:
                            this['system']['add'](K, I, J);
                        }
                    else
                        m('打开编号为【' + H + '】的界面失败，配置信息不存在');
                }
                ,
                F['openAsync'] = (function() {
                    var H = g(j()['mark'](function I(J, K) {
                        var L = this;
                        return j()['wrap'](function(M) {
                            for (; ; )
                                switch (M['prev'] = M['next']) {
                                case 0x0:
                                    return void 0x0 === K && (K = null),
                                    M['abrupt']('return', new Promise(function(N, O) {
                                        var P = {
                                            'onAdded': function(Q, R) {
                                                N(Q);
                                            }
                                        };
                                        L['open'](J, K, P);
                                    }
                                    ));
                                case 0x2:
                                case 'end':
                                    return M['stop']();
                                }
                        }, I);
                    }));
                    return function(J, K) {
                        return H['apply'](this, arguments);
                    }
                    ;
                }()),
                F['has'] = function(H) {
                    var I = this['configs'][H];
                    if (null == I)
                        return m('编号为【' + H + '】的界面失败，配置信息不存在'),
                        !0x1;
                    var J = !0x1;
                    switch (I['layer']) {
                    case E['UI']:
                        J = this['ui']['has'](I['prefab']);
                        break;
                    case E['PopUp']:
                        J = this['popup']['has'](I['prefab']);
                        break;
                    case E['Dialog']:
                        J = this['dialog']['has'](I['prefab']);
                        break;
                    case E['System']:
                        J = this['system']['has'](I['prefab']);
                    }
                    return J;
                }
                ,
                F['remove'] = function(H, I) {
                    void 0x0 === I && (I = !0x0);
                    var J = this['configs'][H];
                    if (null != J)
                        switch (J['layer']) {
                        case E['UI']:
                            this['ui']['remove'](J['prefab'], I);
                            break;
                        case E['PopUp']:
                            this['popup']['remove'](J['prefab'], I);
                            break;
                        case E['Dialog']:
                            this['dialog']['remove'](J['prefab'], I);
                            break;
                        case E['System']:
                            this['system']['remove'](J['prefab'], I);
                        }
                    else
                        m('删除编号为【' + H + '】的界面失败，配置信息不存在');
                }
                ,
                F['removeByNode'] = function(H, I) {
                    if (void 0x0 === I && (I = !0x1),
                    H instanceof q) {
                        var J = H['getComponent'](y);
                        J && J['viewParams'] ? H['parent']['removeByUuid'](J['viewParams']['uuid'], I) : (m('当前删除的node不是通过界面管理器添加到舞台上'),
                        H['destroy']());
                    }
                }
                ,
                F['clear'] = function(H) {
                    void 0x0 === H && (H = !0x1),
                    this['ui']['clear'](H),
                    this['popup']['clear'](H),
                    this['dialog']['clear'](H),
                    this['system']['clear'](H);
                }
                ,
                F['create_node'] = function(H) {
                    var I = new q(H);
                    I['layer'] = v['Enum']['UI_2D'];
                    var J = I['addComponent'](w);
                    return J['isAlignLeft'] = J['isAlignRight'] = J['isAlignTop'] = J['isAlignBottom'] = !0x0,
                    J['left'] = J['right'] = J['top'] = J['bottom'] = 0x0,
                    J['alignMode'] = 0x2,
                    J['enabled'] = !0x0,
                    I;
                }
                ,
                G;
            }())),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerNotify.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './Notify.ts', './Defines.ts', './DelegateComponent.ts', './LayerUI.ts'], function(b) {
    var d, f, g, h, j, k, l, m, p;
    return {
        'setters': [function(q) {
            d = q['inheritsLoose'];
        }
        , function(q) {
            f = q['cclegacy'],
            g = q['error'],
            h = q['instantiate'];
        }
        , function(q) {
            j = q['oops'];
        }
        , function(q) {
            k = q['Notify'];
        }
        , function(q) {
            l = q['ViewParams'];
        }
        , function(q) {
            m = q['DelegateComponent'];
        }
        , function(q) {
            p = q['LayerUI'];
        }
        ],
        'execute': function() {
            f['_RF']['push']({}, 'da14ax+B2xNsL2taQFOh7we', 'LayerNotify', void 0x0);
            var q = 'common/prefab/notify';
            b('LayerNotify', function(v) {
                function w() {
                    return v['apply'](this, arguments) || this;
                }
                d(w, v);
                var x = w['prototype'];
                return x['show'] = function(y, z) {
                    var A = new l();
                    A['uuid'] = this['getUuid'](q),
                    A['prefabPath'] = q,
                    A['params'] = {
                        'content': y,
                        'useI18n': z
                    },
                    A['callbacks'] = {},
                    A['valid'] = !0x0,
                    this['ui_nodes']['set'](A['uuid'], A),
                    this['load'](A);
                }
                ,
                x['load'] = function(y) {
                    var z = this;
                    j['res']['load'](y['prefabPath'], function(A, B) {
                        A && g(A);
                        var C = h(B);
                        y['node'] = C,
                        C['addComponent'](m)['viewParams'] = y,
                        z['createNode'](y);
                    });
                }
                ,
                x['createNode'] = function(y) {
                    var z = v['prototype']['createNode']['call'](this, y)
                      , A = z['getComponent'](k);
                    return z['active'] = !0x0,
                    A['toast'](y['params']['content'], y['params']['useI18n']),
                    z;
                }
                ,
                w;
            }(p)),
            f['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerPopup.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LayerUI.ts'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['inheritsLoose'];
        }
        , function(g) {
            c = g['cclegacy'],
            d = g['Layers'];
        }
        , function(g) {
            f = g['LayerUI'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '25d07BQBCFADaSsh/I3GrTX', 'LayerPopup', void 0x0),
            a('LayerPopUp', function(g) {
                function h(k) {
                    var l;
                    return (l = g['call'](this, k) || this)['black'] = void 0x0,
                    l['init'](),
                    l;
                }
                b(h, g);
                var j = h['prototype'];
                return j['init'] = function() {
                    this['layer'] = d['Enum']['UI_2D'];
                }
                ,
                j['add'] = function(k, l, m) {
                    return g['prototype']['add']['call'](this, k, l, m);
                }
                ,
                j['remove'] = function(k, l) {
                    g['prototype']['remove']['call'](this, k, l),
                    this['setBlackDisable']();
                }
                ,
                j['removeByUuid'] = function(k, l) {
                    g['prototype']['removeByUuid']['call'](this, k, l),
                    this['setBlackDisable']();
                }
                ,
                j['setBlackDisable'] = function() {}
                ,
                j['clear'] = function(k) {
                    g['prototype']['clear']['call'](this, k),
                    this['active'] = !0x1;
                }
                ,
                h;
            }(f)),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerUI.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './Defines.ts', './DelegateComponent.ts'], function(b) {
    var f, g, j, k, m, p, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            f = A['inheritsLoose'],
            g = A['createForOfIteratorHelperLoose'];
        }
        , function(A) {
            j = A['cclegacy'],
            k = A['warn'],
            m = A['error'],
            p = A['instantiate'],
            q = A['isValid'],
            v = A['Widget'],
            w = A['Node'];
        }
        , function(A) {
            x = A['oops'];
        }
        , function(A) {
            y = A['ViewParams'];
        }
        , function(A) {
            z = A['DelegateComponent'];
        }
        ],
        'execute': function() {
            j['_RF']['push']({}, 'bc8b86Br9dGeKxeLijkyJKE', 'LayerUI', void 0x0),
            b('LayerUI', function(A) {
                f(C, A);
                var B = C['prototype'];
                function C(D) {
                    var E;
                    (E = A['call'](this, D) || this)['ui_nodes'] = new Map(),
                    E['ui_cache'] = new Map();
                    var F = E['addComponent'](v);
                    return F['isAlignLeft'] = F['isAlignRight'] = F['isAlignTop'] = F['isAlignBottom'] = !0x0,
                    F['left'] = F['right'] = F['top'] = F['bottom'] = 0x0,
                    F['alignMode'] = 0x2,
                    F['enabled'] = !0x0,
                    E;
                }
                return B['addNode'] = function(D) {
                    D['parent'] = this;
                }
                ,
                B['getUuid'] = function(D) {
                    return (this['name'] + '_' + D)['replace'](/\//g, '_');
                }
                ,
                B['add'] = function(D, E, F) {
                    var G = D['prefab']
                      , H = this['getUuid'](G)
                      , I = this['ui_nodes']['get'](H);
                    return I && I['valid'] ? (k('路径为【' + G + '】的预制重复加载'),
                    '') : (null == I && ((I = new y())['uuid'] = H,
                    I['prefabPath'] = G,
                    this['ui_nodes']['set'](I['uuid'], I)),
                    I['params'] = null != E ? E : {},
                    I['callbacks'] = null != F ? F : {},
                    I['valid'] = !0x0,
                    this['load'](I, D['bundle']),
                    H);
                }
                ,
                B['load'] = function(D, E) {
                    var F = this
                      , G = this['ui_nodes']['get'](D['uuid']);
                    G && G['node'] ? this['createNode'](G) : (E = E || x['res']['defaultBundleName'],
                    x['res']['load'](E, D['prefabPath'], function(H, I) {
                        H && m(H);
                        var J = p(I);
                        D['node'] = J,
                        J['addComponent'](z)['viewParams'] = D,
                        F['createNode'](D);
                    }));
                }
                ,
                B['createNode'] = function(D) {
                    D['valid'] = !0x0;
                    var E = D['node']['getComponent'](z);
                    return D['node']['parent'] = this,
                    E['add'](),
                    D['node'];
                }
                ,
                B['remove'] = function(D, E) {
                    E && this['removeCache'](D);
                    for (var F = this['__nodes'](), G = 0x0; G < F['length']; G++) {
                        var H = F[G]['viewParams'];
                        H['prefabPath'] === D && (E ? this['ui_nodes']['delete'](H['uuid']) : this['ui_cache']['set'](H['prefabPath'], H),
                        F[G]['remove'](E),
                        H['valid'] = !0x1);
                    }
                }
                ,
                B['removeByUuid'] = function(D, E) {
                    var F = this['ui_nodes']['get'](D);
                    F && (E && this['ui_nodes']['delete'](F['uuid']),
                    F['node']['getComponent'](z)['remove'](E));
                }
                ,
                B['removeCache'] = function(D) {
                    var E = this['ui_cache']['get'](D);
                    E && (E['node']['getComponent'](z)['remove'](!0x0),
                    this['ui_nodes']['delete'](E['uuid']),
                    this['ui_cache']['delete'](D));
                }
                ,
                B['getByUuid'] = function(D) {
                    for (var E, F = this['__nodes'](), G = g(F); !(E = G())['done']; ) {
                        var H = E['value'];
                        if (H['viewParams'] && H['viewParams']['uuid'] === D)
                            return H['node'];
                    }
                    return null;
                }
                ,
                B['get'] = function(D) {
                    for (var E, F = [], G = this['__nodes'](), H = g(G); !(E = H())['done']; ) {
                        var I = E['value'];
                        I['viewParams']['prefabPath'] === D && F['push'](I['node']);
                    }
                    return F;
                }
                ,
                B['has'] = function(D) {
                    for (var E, F = this['__nodes'](), G = g(F); !(E = G())['done']; ) {
                        var H = E['value'];
                        if (H['viewParams']['uuid'] === D || H['viewParams']['prefabPath'] === D)
                            return !0x0;
                    }
                    return !0x1;
                }
                ,
                B['find'] = function(D) {
                    for (var E, F = [], G = this['__nodes'](), H = g(G); !(E = H())['done']; ) {
                        var I = E['value'];
                        D['test'](I['viewParams']['prefabPath']) && F['push'](I['node']);
                    }
                    return F;
                }
                ,
                B['__nodes'] = function() {
                    for (var D = [], E = this['children'], F = 0x0; F < E['length']; F++) {
                        var G = E[F]['getComponent'](z);
                        G && G['viewParams'] && G['viewParams']['valid'] && q(G) && D['push'](G);
                    }
                    return D;
                }
                ,
                B['size'] = function() {
                    return this['children']['length'];
                }
                ,
                B['clear'] = function(D) {
                    var E = this;
                    this['ui_nodes']['forEach'](function(F, G) {
                        E['removeByUuid'](F['uuid'], D),
                        F['valid'] = !0x1;
                    }),
                    this['ui_nodes']['clear'](),
                    D && this['ui_cache']['forEach'](function(F, G) {
                        E['removeCache'](G);
                    });
                }
                ,
                C;
            }(w)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LayerUtil.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['createClass'];
        }
        , function(d) {
            c = d['cclegacy'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'b7a864Zpb5N4Zm7onWE1i9D', 'LayerUtil', void 0x0);
            var d = a('LayerItem', (function() {
                function g(h, j) {
                    this['_value'] = void 0x0,
                    this['_name'] = void 0x0,
                    this['_value'] = h,
                    this['_name'] = j;
                }
                return b(g, [{
                    'key': 'value',
                    'get': function() {
                        return this['_value'];
                    }
                }, {
                    'key': 'name',
                    'get': function() {
                        return this['_name'];
                    }
                }, {
                    'key': 'mask',
                    'get': function() {
                        return 0x1 << this['_value'];
                    }
                }]),
                g;
            }()))
              , f = a('LayerUtil', (function() {
                function g() {}
                return g['setNodeLayer'] = function(h, j) {
                    j['layer'] = h['mask'],
                    j['children']['forEach'](function(k) {
                        k['layer'] = h['mask'],
                        g['setNodeLayer'](h, k);
                    });
                }
                ,
                g;
            }()));
            f['MAP'] = new d(0x0,'MAP'),
            f['AVATAR'] = new d(0x1,'AVATAR'),
            f['IGNORE_RAYCAST'] = new d(0x14,'IGNORE_RAYCAST'),
            f['GIZMOS'] = new d(0x15,'GIZMOS'),
            f['EDITOR'] = new d(0x16,'EDITOR'),
            f['UI_3D'] = new d(0x17,'UI_3D'),
            f['SCENE_GIZMO'] = new d(0x18,'SCENE_GIZMO'),
            f['UI_2D'] = new d(0x19,'UI_2D'),
            f['PROFILTER'] = new d(0x1c,'PROFILTER'),
            f['DEFAULT'] = new d(0x1e,'DEFAULT'),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/List.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './env', './ListItem.ts'], function(j) {
    var k, q, x, A, B, C, E, F, G, H, J, K, L, M, O, P, Q, R, U, V, W, X, Y, Z, a0, a1, a2;
    return {
        'setters': [function(a3) {
            k = a3['applyDecoratedDescriptor'],
            q = a3['inheritsLoose'],
            x = a3['initializerDefineProperty'],
            A = a3['assertThisInitialized'],
            B = a3['createClass'];
        }
        , function(a3) {
            C = a3['cclegacy'],
            E = a3['_decorator'],
            F = a3['ScrollView'],
            G = a3['Enum'],
            H = a3['Node'],
            J = a3['Prefab'],
            K = a3['CCFloat'],
            L = a3['EventHandler'],
            M = a3['CCBoolean'],
            O = a3['CCInteger'],
            P = a3['isValid'],
            Q = a3['UITransform'],
            R = a3['Layout'],
            U = a3['instantiate'],
            V = a3['NodePool'],
            W = a3['Vec3'],
            X = a3['Size'],
            Y = a3['Widget'],
            Z = a3['tween'],
            a0 = a3['Component'];
        }
        , function(a3) {
            a1 = a3['DEV'];
        }
        , function(a3) {
            a2 = a3['default'];
        }
        ],
        'execute': function() {
            var a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK;
            C['_RF']['push']({}, 'fa82b8nkT9DmKQQBn7nFG+1', 'List', void 0x0);
            var aL = E['ccclass']
              , aM = E['property']
              , aN = E['disallowMultiple']
              , aO = E['menu']
              , aP = E['executionOrder']
              , aQ = E['requireComponent']
              , aR = function(aU) {
                return aU[aU['NODE'] = 0x1] = 'NODE',
                aU[aU['PREFAB'] = 0x2] = 'PREFAB',
                aU;
            }(aR || {})
              , aS = function(aU) {
                return aU[aU['NORMAL'] = 0x1] = 'NORMAL',
                aU[aU['ADHERING'] = 0x2] = 'ADHERING',
                aU[aU['PAGE'] = 0x3] = 'PAGE',
                aU;
            }(aS || {})
              , aT = function(aU) {
                return aU[aU['NONE'] = 0x0] = 'NONE',
                aU[aU['SINGLE'] = 0x1] = 'SINGLE',
                aU[aU['MULT'] = 0x2] = 'MULT',
                aU;
            }(aT || {});
            j('default', (a3 = aN(),
            a4 = aO('List'),
            a5 = aQ(F),
            a6 = aP(-0x1388),
            a7 = aM({
                'type': G(aR),
                'tooltip': a1
            }),
            a8 = aM({
                'type': H,
                'tooltip': a1,
                'visible': function() {
                    return this['templateType'] == aR['NODE'];
                }
            }),
            a9 = aM({
                'type': J,
                'tooltip': a1,
                'visible': function() {
                    return this['templateType'] == aR['PREFAB'];
                }
            }),
            aa = aM({}),
            ab = aM({
                'type': G(aS),
                'tooltip': a1
            }),
            ac = aM({
                'type': K,
                'range': [0x0, 0x1, 0.1],
                'tooltip': a1,
                'slide': !0x0,
                'visible': function() {
                    return this['_slideMode'] == aS['PAGE'];
                }
            }),
            ad = aM({
                'type': L,
                'tooltip': a1,
                'visible': function() {
                    return this['_slideMode'] == aS['PAGE'];
                }
            }),
            ae = aM({}),
            af = aM({
                'type': M,
                'tooltip': a1
            }),
            ag = aM({
                'tooltip': a1,
                'visible': function() {
                    var aU = this['slideMode'] == aS['NORMAL'];
                    return aU || (this['cyclic'] = !0x1),
                    aU;
                }
            }),
            ah = aM({
                'tooltip': a1,
                'visible': function() {
                    return this['virtual'];
                }
            }),
            ai = aM({
                'tooltip': a1,
                'visible': function() {
                    var aU = this['virtual'] && !this['lackCenter'];
                    return aU || (this['lackSlide'] = !0x1),
                    aU;
                }
            }),
            aj = aM({
                'type': O
            }),
            ak = aM({
                'type': O,
                'range': [0x0, 0x6, 0x1],
                'tooltip': a1,
                'slide': !0x0
            }),
            al = aM({
                'type': O,
                'range': [0x0, 0xc, 0x1],
                'tooltip': a1,
                'slide': !0x0
            }),
            am = aM({
                'type': L,
                'tooltip': a1
            }),
            an = aM({
                'type': G(aT),
                'tooltip': a1
            }),
            ao = aM({
                'type': L,
                'tooltip': a1,
                'visible': function() {
                    return this['selectedMode'] > aT['NONE'];
                }
            }),
            ap = aM({
                'tooltip': a1,
                'visible': function() {
                    return this['selectedMode'] == aT['SINGLE'];
                }
            }),
            aq = aM({
                'serializable': !0x1
            }),
            aL(ar = a3(ar = a4(ar = a5(ar = a6((au = k((as = function(aU) {
                function aV() {
                    for (var aX, aY = arguments['length'], aZ = new Array(aY), b0 = 0x0; b0 < aY; b0++)
                        aZ[b0] = arguments[b0];
                    return aX = aU['call']['apply'](aU, [this]['concat'](aZ)) || this,
                    x(aX, 'templateType', au, A(aX)),
                    x(aX, 'tmpNode', av, A(aX)),
                    x(aX, 'tmpPrefab', aw, A(aX)),
                    x(aX, '_slideMode', ax, A(aX)),
                    x(aX, 'pageDistance', ay, A(aX)),
                    x(aX, 'pageChangeEvent', az, A(aX)),
                    x(aX, '_virtual', aA, A(aX)),
                    x(aX, 'cyclic', aB, A(aX)),
                    x(aX, 'lackCenter', aC, A(aX)),
                    x(aX, 'lackSlide', aD, A(aX)),
                    x(aX, '_updateRate', aE, A(aX)),
                    x(aX, 'frameByFrameRenderNum', aF, A(aX)),
                    x(aX, 'renderEvent', aG, A(aX)),
                    x(aX, 'selectedMode', aH, A(aX)),
                    x(aX, 'selectedEvent', aI, A(aX)),
                    x(aX, 'repeatEventSingle', aJ, A(aX)),
                    aX['_selectedId'] = -0x1,
                    aX['_lastSelectedId'] = void 0x0,
                    aX['multSelected'] = void 0x0,
                    aX['_forceUpdate'] = !0x1,
                    aX['_align'] = void 0x0,
                    aX['_horizontalDir'] = void 0x0,
                    aX['_verticalDir'] = void 0x0,
                    aX['_startAxis'] = void 0x0,
                    aX['_alignCalcType'] = void 0x0,
                    aX['content'] = void 0x0,
                    aX['_contentUt'] = void 0x0,
                    aX['firstListId'] = void 0x0,
                    aX['displayItemNum'] = void 0x0,
                    aX['_updateDone'] = !0x0,
                    aX['_updateCounter'] = void 0x0,
                    aX['_actualNumItems'] = void 0x0,
                    aX['_cyclicNum'] = void 0x0,
                    aX['_cyclicPos1'] = void 0x0,
                    aX['_cyclicPos2'] = void 0x0,
                    x(aX, '_numItems', aK, A(aX)),
                    aX['_inited'] = !0x1,
                    aX['_scrollView'] = void 0x0,
                    aX['_layout'] = void 0x0,
                    aX['_resizeMode'] = void 0x0,
                    aX['_topGap'] = void 0x0,
                    aX['_rightGap'] = void 0x0,
                    aX['_bottomGap'] = void 0x0,
                    aX['_leftGap'] = void 0x0,
                    aX['_columnGap'] = void 0x0,
                    aX['_lineGap'] = void 0x0,
                    aX['_colLineNum'] = void 0x0,
                    aX['_lastDisplayData'] = void 0x0,
                    aX['displayData'] = void 0x0,
                    aX['_pool'] = void 0x0,
                    aX['_itemTmp'] = void 0x0,
                    aX['_itemTmpUt'] = void 0x0,
                    aX['_needUpdateWidget'] = !0x1,
                    aX['_itemSize'] = void 0x0,
                    aX['_sizeType'] = void 0x0,
                    aX['_customSize'] = void 0x0,
                    aX['frameCount'] = void 0x0,
                    aX['_aniDelRuning'] = !0x1,
                    aX['_aniDelCB'] = void 0x0,
                    aX['_aniDelItem'] = void 0x0,
                    aX['_aniDelBeforePos'] = void 0x0,
                    aX['_aniDelBeforeScale'] = void 0x0,
                    aX['viewTop'] = void 0x0,
                    aX['viewRight'] = void 0x0,
                    aX['viewBottom'] = void 0x0,
                    aX['viewLeft'] = void 0x0,
                    aX['_doneAfterUpdate'] = !0x1,
                    aX['elasticTop'] = void 0x0,
                    aX['elasticRight'] = void 0x0,
                    aX['elasticBottom'] = void 0x0,
                    aX['elasticLeft'] = void 0x0,
                    aX['scrollToListId'] = void 0x0,
                    aX['adhering'] = !0x1,
                    aX['_adheringBarrier'] = !0x1,
                    aX['nearestListId'] = void 0x0,
                    aX['curPageNum'] = 0x0,
                    aX['_beganPos'] = void 0x0,
                    aX['_scrollPos'] = void 0x0,
                    aX['_curScrollIsTouch'] = void 0x0,
                    aX['_scrollToListId'] = void 0x0,
                    aX['_scrollToEndTime'] = void 0x0,
                    aX['_scrollToSo'] = void 0x0,
                    aX['_lack'] = void 0x0,
                    aX['_allItemSize'] = void 0x0,
                    aX['_allItemSizeNoEdge'] = void 0x0,
                    aX['_scrollItem'] = void 0x0,
                    aX['_thisNodeUt'] = void 0x0,
                    aX;
                }
                q(aV, aU);
                var aW = aV['prototype'];
                return aW['onLoad'] = function() {
                    this['_init']();
                }
                ,
                aW['onDestroy'] = function() {
                    var aX = this;
                    P(aX['_itemTmp']) && aX['_itemTmp']['destroy'](),
                    P(aX['tmpNode']) && aX['tmpNode']['destroy'](),
                    aX['_pool'] && aX['_pool']['clear']();
                }
                ,
                aW['onEnable'] = function() {
                    this['_registerEvent'](),
                    this['_init'](),
                    this['_aniDelRuning'] && (this['_aniDelRuning'] = !0x1,
                    this['_aniDelItem'] && (this['_aniDelBeforePos'] && (this['_aniDelItem']['position'] = this['_aniDelBeforePos'],
                    delete this['_aniDelBeforePos']),
                    this['_aniDelBeforeScale'] && (this['_aniDelItem']['scale'] = this['_aniDelBeforeScale'],
                    delete this['_aniDelBeforeScale']),
                    delete this['_aniDelItem']),
                    this['_aniDelCB'] && (this['_aniDelCB'](),
                    delete this['_aniDelCB']));
                }
                ,
                aW['onDisable'] = function() {
                    this['_unregisterEvent']();
                }
                ,
                aW['_registerEvent'] = function() {
                    var aX = this;
                    aX['node']['on'](H['EventType']['TOUCH_START'], aX['_onTouchStart'], aX),
                    aX['node']['on']('touch-up', aX['_onTouchUp'], aX),
                    aX['node']['on'](H['EventType']['TOUCH_CANCEL'], aX['_onTouchCancelled'], aX),
                    aX['node']['on']('scroll-began', aX['_onScrollBegan'], aX),
                    aX['node']['on']('scroll-ended', aX['_onScrollEnded'], aX),
                    aX['node']['on']('scrolling', aX['_onScrolling'], aX),
                    aX['node']['on'](H['EventType']['SIZE_CHANGED'], aX['_onSizeChanged'], aX);
                }
                ,
                aW['_unregisterEvent'] = function() {
                    var aX = this;
                    aX['node']['off'](H['EventType']['TOUCH_START'], aX['_onTouchStart'], aX),
                    aX['node']['off']('touch-up', aX['_onTouchUp'], aX),
                    aX['node']['off'](H['EventType']['TOUCH_CANCEL'], aX['_onTouchCancelled'], aX),
                    aX['node']['off']('scroll-began', aX['_onScrollBegan'], aX),
                    aX['node']['off']('scroll-ended', aX['_onScrollEnded'], aX),
                    aX['node']['off']('scrolling', aX['_onScrolling'], aX),
                    aX['node']['off'](H['EventType']['SIZE_CHANGED'], aX['_onSizeChanged'], aX);
                }
                ,
                aW['_init'] = function() {
                    var aX = this;
                    if (!aX['_inited']) {
                        if (aX['_thisNodeUt'] = aX['node']['getComponent'](Q),
                        aX['_scrollView'] = aX['node']['getComponent'](F),
                        aX['content'] = aX['_scrollView']['content'],
                        aX['_contentUt'] = aX['content']['getComponent'](Q),
                        aX['content']) {
                            switch (aX['_layout'] = aX['content']['getComponent'](R),
                            aX['_align'] = aX['_layout']['type'],
                            aX['_resizeMode'] = aX['_layout']['resizeMode'],
                            aX['_startAxis'] = aX['_layout']['startAxis'],
                            aX['_topGap'] = aX['_layout']['paddingTop'],
                            aX['_rightGap'] = aX['_layout']['paddingRight'],
                            aX['_bottomGap'] = aX['_layout']['paddingBottom'],
                            aX['_leftGap'] = aX['_layout']['paddingLeft'],
                            aX['_columnGap'] = aX['_layout']['spacingX'],
                            aX['_lineGap'] = aX['_layout']['spacingY'],
                            aX['_colLineNum'],
                            aX['_verticalDir'] = aX['_layout']['verticalDirection'],
                            aX['_horizontalDir'] = aX['_layout']['horizontalDirection'],
                            aX['setTemplateItem'](U(aX['templateType'] == aR['PREFAB'] ? aX['tmpPrefab'] : aX['tmpNode'])),
                            aX['_slideMode'] != aS['ADHERING'] && aX['_slideMode'] != aS['PAGE'] || (aX['_scrollView']['inertia'] = !0x1,
                            aX['_scrollView']['_onMouseWheel'] = function() {}
                            ),
                            aX['virtual'] || (aX['lackCenter'] = !0x1),
                            aX['_lastDisplayData'] = [],
                            aX['displayData'] = [],
                            aX['_pool'] = new V(),
                            aX['_forceUpdate'] = !0x1,
                            aX['_updateCounter'] = 0x0,
                            aX['_updateDone'] = !0x0,
                            aX['curPageNum'] = 0x0,
                            aX['cyclic'] && (aX['_scrollView']['_processAutoScrolling'] = this['_processAutoScrolling']['bind'](aX),
                            aX['_scrollView']['_startBounceBackIfNeeded'] = function() {
                                return !0x1;
                            }
                            ),
                            aX['_align']) {
                            case R['Type']['HORIZONTAL']:
                                switch (aX['_horizontalDir']) {
                                case R['HorizontalDirection']['LEFT_TO_RIGHT']:
                                    aX['_alignCalcType'] = 0x1;
                                    break;
                                case R['HorizontalDirection']['RIGHT_TO_LEFT']:
                                    aX['_alignCalcType'] = 0x2;
                                }
                                break;
                            case R['Type']['VERTICAL']:
                                switch (aX['_verticalDir']) {
                                case R['VerticalDirection']['TOP_TO_BOTTOM']:
                                    aX['_alignCalcType'] = 0x3;
                                    break;
                                case R['VerticalDirection']['BOTTOM_TO_TOP']:
                                    aX['_alignCalcType'] = 0x4;
                                }
                                break;
                            case R['Type']['GRID']:
                                switch (aX['_startAxis']) {
                                case R['AxisDirection']['HORIZONTAL']:
                                    switch (aX['_verticalDir']) {
                                    case R['VerticalDirection']['TOP_TO_BOTTOM']:
                                        aX['_alignCalcType'] = 0x3;
                                        break;
                                    case R['VerticalDirection']['BOTTOM_TO_TOP']:
                                        aX['_alignCalcType'] = 0x4;
                                    }
                                    break;
                                case R['AxisDirection']['VERTICAL']:
                                    switch (aX['_horizontalDir']) {
                                    case R['HorizontalDirection']['LEFT_TO_RIGHT']:
                                        aX['_alignCalcType'] = 0x1;
                                        break;
                                    case R['HorizontalDirection']['RIGHT_TO_LEFT']:
                                        aX['_alignCalcType'] = 0x2;
                                    }
                                }
                            }
                            aX['content']['removeAllChildren'](),
                            aX['_inited'] = !0x0;
                        } else
                            console['error'](aX['node']['name'] + '\x27s\x20ScrollView\x20unset\x20content!');
                    }
                }
                ,
                aW['_processAutoScrolling'] = function(aX) {
                    var aY = 0.0001
                      , aZ = new W()
                      , b0 = this['_scrollView']
                      , b1 = b0['_isNecessaryAutoScrollBrake']()
                      , b2 = b1 ? 0.05 : 0x1;
                    b0['_autoScrollAccumulatedTime'] += aX * (0x1 / b2);
                    var b3, b4 = Math['min'](0x1, b0['_autoScrollAccumulatedTime'] / b0['_autoScrollTotalTime']);
                    b0['_autoScrollAttenuate'] && (b3 = b4,
                    b4 = (b3 -= 0x1) * b3 * b3 * b3 * b3 + 0x1);
                    var b5 = b0['_autoScrollTargetDelta']['clone']();
                    b5['multiplyScalar'](b4);
                    var b6 = b0['_autoScrollStartPosition']['clone']();
                    b6['add'](b5);
                    var b7 = Math['abs'](b4 - 0x1) <= aY;
                    if (Math['abs'](b4 - 0x1) <= b0['getScrollEndedEventTiming']() && !b0['_isScrollEndedWithThresholdEventFired'] && (b0['_dispatchEvent'](F['EventType']['SCROLL_ENG_WITH_THRESHOLD']),
                    b0['_isScrollEndedWithThresholdEventFired'] = !0x0),
                    b0['elastic']) {
                        var b8 = b6['clone']();
                        b8['subtract'](b0['_autoScrollBrakingStartPosition']),
                        b1 && b8['multiplyScalar'](b2),
                        b6['set'](b0['_autoScrollBrakingStartPosition']),
                        b6['add'](b8);
                    } else {
                        var b9 = b6['clone']();
                        b9['subtract'](b0['_getContentPosition']());
                        var ba = b0['_getHowMuchOutOfBoundary'](b9);
                        ba['equals'](aZ, aY) || (b6['add'](ba),
                        b7 = !0x0);
                    }
                    b7 && (b0['_autoScrolling'] = !0x1);
                    var bb = new W(b6);
                    bb['subtract'](b0['_getContentPosition']()),
                    b0['_clampDelta'](bb),
                    b0['_moveContent'](bb, b7),
                    b0['_dispatchEvent'](F['EventType']['SCROLLING']),
                    b0['_autoScrolling'] || (b0['_isBouncing'] = !0x1,
                    b0['_scrolling'] = !0x1,
                    b0['_dispatchEvent'](F['EventType']['SCROLL_ENDED']));
                }
                ,
                aW['setTemplateItem'] = function(aX) {
                    if (aX) {
                        var aY = this;
                        if (aY['_itemTmp'] = aX,
                        aY['_itemTmpUt'] = aX['getComponent'](Q),
                        aY['_resizeMode'] == R['ResizeMode']['CHILDREN'])
                            aY['_itemSize'] = aY['_layout']['cellSize'];
                        else {
                            var aZ = aX['getComponent'](Q);
                            aY['_itemSize'] = new X(aZ['width'],aZ['height']);
                        }
                        var b0 = aX['getComponent'](a2)
                          , b1 = !0x1;
                        switch (b0 || (b1 = !0x0),
                        b1 && (aY['selectedMode'] = aT['NONE']),
                        (b0 = aX['getComponent'](Y)) && b0['enabled'] && (aY['_needUpdateWidget'] = !0x0),
                        aY['selectedMode'] == aT['MULT'] && (aY['multSelected'] = []),
                        aY['_align']) {
                        case R['Type']['HORIZONTAL']:
                            aY['_colLineNum'] = 0x1,
                            aY['_sizeType'] = !0x1;
                            break;
                        case R['Type']['VERTICAL']:
                            aY['_colLineNum'] = 0x1,
                            aY['_sizeType'] = !0x0;
                            break;
                        case R['Type']['GRID']:
                            switch (aY['_startAxis']) {
                            case R['AxisDirection']['HORIZONTAL']:
                                var b2 = aY['_contentUt']['width'] - aY['_leftGap'] - aY['_rightGap'];
                                aY['_colLineNum'] = Math['floor']((b2 + aY['_columnGap']) / (aY['_itemSize']['width'] + aY['_columnGap'])),
                                aY['_sizeType'] = !0x0;
                                break;
                            case R['AxisDirection']['VERTICAL']:
                                var b3 = aY['_contentUt']['height'] - aY['_topGap'] - aY['_bottomGap'];
                                aY['_colLineNum'] = Math['floor']((b3 + aY['_lineGap']) / (aY['_itemSize']['height'] + aY['_lineGap'])),
                                aY['_sizeType'] = !0x1;
                            }
                        }
                    }
                }
                ,
                aW['checkInited'] = function(aX) {
                    return void 0x0 === aX && (aX = !0x0),
                    !!this['_inited'] || (aX && console['error']('List\x20initialization\x20not\x20completed!'),
                    !0x1);
                }
                ,
                aW['_resizeContent'] = function() {
                    var aX, aY = this;
                    switch (aY['_align']) {
                    case R['Type']['HORIZONTAL']:
                        if (aY['_customSize']) {
                            var aZ = aY['_getFixedSize'](null);
                            aX = aY['_leftGap'] + aZ['val'] + aY['_itemSize']['width'] * (aY['_numItems'] - aZ['count']) + aY['_columnGap'] * (aY['_numItems'] - 0x1) + aY['_rightGap'];
                        } else
                            aX = aY['_leftGap'] + aY['_itemSize']['width'] * aY['_numItems'] + aY['_columnGap'] * (aY['_numItems'] - 0x1) + aY['_rightGap'];
                        break;
                    case R['Type']['VERTICAL']:
                        if (aY['_customSize']) {
                            var b0 = aY['_getFixedSize'](null);
                            aX = aY['_topGap'] + b0['val'] + aY['_itemSize']['height'] * (aY['_numItems'] - b0['count']) + aY['_lineGap'] * (aY['_numItems'] - 0x1) + aY['_bottomGap'];
                        } else
                            aX = aY['_topGap'] + aY['_itemSize']['height'] * aY['_numItems'] + aY['_lineGap'] * (aY['_numItems'] - 0x1) + aY['_bottomGap'];
                        break;
                    case R['Type']['GRID']:
                        switch (aY['lackCenter'] && (aY['lackCenter'] = !0x1),
                        aY['_startAxis']) {
                        case R['AxisDirection']['HORIZONTAL']:
                            var b1 = Math['ceil'](aY['_numItems'] / aY['_colLineNum']);
                            aX = aY['_topGap'] + aY['_itemSize']['height'] * b1 + aY['_lineGap'] * (b1 - 0x1) + aY['_bottomGap'];
                            break;
                        case R['AxisDirection']['VERTICAL']:
                            var b2 = Math['ceil'](aY['_numItems'] / aY['_colLineNum']);
                            aX = aY['_leftGap'] + aY['_itemSize']['width'] * b2 + aY['_columnGap'] * (b2 - 0x1) + aY['_rightGap'];
                        }
                    }
                    var b3 = aY['content']['getComponent'](R);
                    if (b3 && (b3['enabled'] = !0x1),
                    aY['_allItemSize'] = aX,
                    aY['_allItemSizeNoEdge'] = aY['_allItemSize'] - (aY['_sizeType'] ? aY['_topGap'] + aY['_bottomGap'] : aY['_leftGap'] + aY['_rightGap']),
                    aY['cyclic']) {
                        var b4 = aY['_sizeType'] ? aY['_thisNodeUt']['height'] : aY['_thisNodeUt']['width'];
                        aY['_cyclicPos1'] = 0x0,
                        b4 -= aY['_cyclicPos1'],
                        aY['_cyclicNum'] = Math['ceil'](b4 / aY['_allItemSizeNoEdge']) + 0x1;
                        var b5 = aY['_sizeType'] ? aY['_lineGap'] : aY['_columnGap'];
                        aY['_cyclicPos2'] = aY['_cyclicPos1'] + aY['_allItemSizeNoEdge'] + b5,
                        aY['_cyclicAllItemSize'] = aY['_allItemSize'] + aY['_allItemSizeNoEdge'] * (aY['_cyclicNum'] - 0x1) + b5 * (aY['_cyclicNum'] - 0x1),
                        aY['_cycilcAllItemSizeNoEdge'] = aY['_allItemSizeNoEdge'] * aY['_cyclicNum'],
                        aY['_cycilcAllItemSizeNoEdge'] += b5 * (aY['_cyclicNum'] - 0x1);
                    }
                    aY['_lack'] = !aY['cyclic'] && aY['_allItemSize'] < (aY['_sizeType'] ? aY['_thisNodeUt']['height'] : aY['_thisNodeUt']['width']);
                    var b6 = aY['_lack'] && aY['lackCenter'] || !aY['lackSlide'] ? 0.1 : 0x0
                      , b7 = aY['_lack'] ? (aY['_sizeType'] ? aY['_thisNodeUt']['height'] : aY['_thisNodeUt']['width']) - b6 : aY['cyclic'] ? aY['_cyclicAllItemSize'] : aY['_allItemSize'];
                    b7 < 0x0 && (b7 = 0x0),
                    aY['_sizeType'] ? aY['_contentUt']['height'] = b7 : aY['_contentUt']['width'] = b7;
                }
                ,
                aW['_onScrolling'] = function(aX) {
                    if (void 0x0 === aX && (aX = null),
                    null == this['frameCount'] && (this['frameCount'] = this['_updateRate']),
                    !this['_forceUpdate'] && aX && 'scroll-ended' != aX['type'] && this['frameCount'] > 0x0)
                        this['frameCount']--;
                    else {
                        if (this['frameCount'] = this['_updateRate'],
                        !this['_aniDelRuning']) {
                            if (this['cyclic']) {
                                var aY = this['content']['getPosition']();
                                aY = this['_sizeType'] ? aY['y'] : aY['x'];
                                var aZ = this['_allItemSizeNoEdge'] + (this['_sizeType'] ? this['_lineGap'] : this['_columnGap'])
                                  , b0 = this['_sizeType'] ? new W(0x0,aZ,0x0) : new W(aZ,0x0,0x0)
                                  , b1 = this['content']['getPosition']();
                                switch (this['_alignCalcType']) {
                                case 0x1:
                                    aY > -this['_cyclicPos1'] ? (b1['set'](-this['_cyclicPos2'], b1['y'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['subtract'](b0))) : aY < -this['_cyclicPos2'] && (b1['set'](-this['_cyclicPos1'], b1['y'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['add'](b0)));
                                    break;
                                case 0x2:
                                    aY < this['_cyclicPos1'] ? (b1['set'](this['_cyclicPos2'], b1['y'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['add'](b0))) : aY > this['_cyclicPos2'] && (b1['set'](this['_cyclicPos1'], b1['y'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['subtract'](b0)));
                                    break;
                                case 0x3:
                                    aY < this['_cyclicPos1'] ? (b1['set'](b1['x'], this['_cyclicPos2'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['add'](b0))) : aY > this['_cyclicPos2'] && (b1['set'](b1['x'], this['_cyclicPos1'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['subtract'](b0)));
                                    break;
                                case 0x4:
                                    aY > -this['_cyclicPos1'] ? (b1['set'](b1['x'], -this['_cyclicPos2'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['subtract'](b0))) : aY < -this['_cyclicPos2'] && (b1['set'](b1['x'], -this['_cyclicPos1'], b1['z']),
                                    this['content']['setPosition'](b1),
                                    this['_scrollView']['isAutoScrolling']() && (this['_scrollView']['_autoScrollStartPosition'] = this['_scrollView']['_autoScrollStartPosition']['add'](b0)));
                                }
                            }
                            var b2, b3, b4, b5;
                            if (this['_calcViewPos'](),
                            this['_sizeType'] ? (b2 = this['viewTop'],
                            b4 = this['viewBottom']) : (b3 = this['viewRight'],
                            b5 = this['viewLeft']),
                            this['_virtual']) {
                                var b6;
                                this['displayData'] = [];
                                var b7 = 0x0
                                  , b8 = this['_numItems'] - 0x1;
                                if (this['_customSize']) {
                                    for (var b9 = !0x1; b7 <= b8 && !b9; b7++)
                                        switch (b6 = this['_calcItemPos'](b7),
                                        this['_align']) {
                                        case R['Type']['HORIZONTAL']:
                                            b6['right'] >= b5 && b6['left'] <= b3 ? this['displayData']['push'](b6) : 0x0 != b7 && this['displayData']['length'] > 0x0 && (b9 = !0x0);
                                            break;
                                        case R['Type']['VERTICAL']:
                                            b6['bottom'] <= b2 && b6['top'] >= b4 ? this['displayData']['push'](b6) : 0x0 != b7 && this['displayData']['length'] > 0x0 && (b9 = !0x0);
                                            break;
                                        case R['Type']['GRID']:
                                            switch (this['_startAxis']) {
                                            case R['AxisDirection']['HORIZONTAL']:
                                                b6['bottom'] <= b2 && b6['top'] >= b4 ? this['displayData']['push'](b6) : 0x0 != b7 && this['displayData']['length'] > 0x0 && (b9 = !0x0);
                                                break;
                                            case R['AxisDirection']['VERTICAL']:
                                                b6['right'] >= b5 && b6['left'] <= b3 ? this['displayData']['push'](b6) : 0x0 != b7 && this['displayData']['length'] > 0x0 && (b9 = !0x0);
                                            }
                                        }
                                } else {
                                    var ba = this['_itemSize']['width'] + this['_columnGap']
                                      , bb = this['_itemSize']['height'] + this['_lineGap'];
                                    switch (this['_alignCalcType']) {
                                    case 0x1:
                                        b7 = (b5 - this['_leftGap']) / ba,
                                        b8 = (b3 - this['_leftGap']) / ba;
                                        break;
                                    case 0x2:
                                        b7 = (-b3 - this['_rightGap']) / ba,
                                        b8 = (-b5 - this['_rightGap']) / ba;
                                        break;
                                    case 0x3:
                                        b7 = (-b2 - this['_topGap']) / bb,
                                        b8 = (-b4 - this['_topGap']) / bb;
                                        break;
                                    case 0x4:
                                        b7 = (b4 - this['_bottomGap']) / bb,
                                        b8 = (b2 - this['_bottomGap']) / bb;
                                    }
                                    for (b7 = Math['floor'](b7) * this['_colLineNum'],
                                    b8 = Math['ceil'](b8) * this['_colLineNum'],
                                    b7 < 0x0 && (b7 = 0x0),
                                    --b8 >= this['_numItems'] && (b8 = this['_numItems'] - 0x1); b7 <= b8; b7++)
                                        this['displayData']['push'](this['_calcItemPos'](b7));
                                }
                                if (this['_delRedundantItem'](),
                                this['displayData']['length'] <= 0x0 || !this['_numItems'])
                                    return void (this['_lastDisplayData'] = []);
                                this['firstListId'] = this['displayData'][0x0]['id'],
                                this['displayItemNum'] = this['displayData']['length'];
                                var bc = this['_lastDisplayData']['length']
                                  , bd = this['displayItemNum'] != bc;
                                if (bd && (this['frameByFrameRenderNum'] > 0x0 && this['_lastDisplayData']['sort'](function(bf, bg) {
                                    return bf - bg;
                                }),
                                bd = this['firstListId'] != this['_lastDisplayData'][0x0] || this['displayData'][this['displayItemNum'] - 0x1]['id'] != this['_lastDisplayData'][bc - 0x1]),
                                this['_forceUpdate'] || bd) {
                                    if (this['frameByFrameRenderNum'] > 0x0)
                                        this['_numItems'] > 0x0 ? (this['_updateDone'] ? this['_updateCounter'] = 0x0 : this['_doneAfterUpdate'] = !0x0,
                                        this['_updateDone'] = !0x1) : (this['_updateCounter'] = 0x0,
                                        this['_updateDone'] = !0x0);
                                    else {
                                        this['_lastDisplayData'] = [];
                                        for (var be = 0x0; be < this['displayItemNum']; be++)
                                            this['_createOrUpdateItem'](this['displayData'][be]);
                                        this['_forceUpdate'] = !0x1;
                                    }
                                }
                                this['_calcNearestItem']();
                            }
                        }
                    }
                }
                ,
                aW['_calcViewPos'] = function() {
                    var aX = this['content']['getPosition']();
                    switch (this['_alignCalcType']) {
                    case 0x1:
                        this['elasticLeft'] = aX['x'] > 0x0 ? aX['x'] : 0x0,
                        this['viewLeft'] = (aX['x'] < 0x0 ? -aX['x'] : 0x0) - this['elasticLeft'],
                        this['viewRight'] = this['viewLeft'] + this['_thisNodeUt']['width'],
                        this['elasticRight'] = this['viewRight'] > this['_contentUt']['width'] ? Math['abs'](this['viewRight'] - this['_contentUt']['width']) : 0x0,
                        this['viewRight'] += this['elasticRight'];
                        break;
                    case 0x2:
                        this['elasticRight'] = aX['x'] < 0x0 ? -aX['x'] : 0x0,
                        this['viewRight'] = (aX['x'] > 0x0 ? -aX['x'] : 0x0) + this['elasticRight'],
                        this['viewLeft'] = this['viewRight'] - this['_thisNodeUt']['width'],
                        this['elasticLeft'] = this['viewLeft'] < -this['_contentUt']['width'] ? Math['abs'](this['viewLeft'] + this['_contentUt']['width']) : 0x0,
                        this['viewLeft'] -= this['elasticLeft'];
                        break;
                    case 0x3:
                        this['elasticTop'] = aX['y'] < 0x0 ? Math['abs'](aX['y']) : 0x0,
                        this['viewTop'] = (aX['y'] > 0x0 ? -aX['y'] : 0x0) + this['elasticTop'],
                        this['viewBottom'] = this['viewTop'] - this['_thisNodeUt']['height'],
                        this['elasticBottom'] = this['viewBottom'] < -this['_contentUt']['height'] ? Math['abs'](this['viewBottom'] + this['_contentUt']['height']) : 0x0,
                        this['viewBottom'] += this['elasticBottom'];
                        break;
                    case 0x4:
                        this['elasticBottom'] = aX['y'] > 0x0 ? Math['abs'](aX['y']) : 0x0,
                        this['viewBottom'] = (aX['y'] < 0x0 ? -aX['y'] : 0x0) - this['elasticBottom'],
                        this['viewTop'] = this['viewBottom'] + this['_thisNodeUt']['height'],
                        this['elasticTop'] = this['viewTop'] > this['_contentUt']['height'] ? Math['abs'](this['viewTop'] - this['_contentUt']['height']) : 0x0,
                        this['viewTop'] -= this['elasticTop'];
                    }
                }
                ,
                aW['_calcItemPos'] = function(aX) {
                    var aY, aZ, b0, b1, b2, b3, b4, b5;
                    switch (this['_align']) {
                    case R['Type']['HORIZONTAL']:
                        switch (this['_horizontalDir']) {
                        case R['HorizontalDirection']['LEFT_TO_RIGHT']:
                            if (this['_customSize']) {
                                var b6 = this['_getFixedSize'](aX);
                                b2 = this['_leftGap'] + (this['_itemSize']['width'] + this['_columnGap']) * (aX - b6['count']) + (b6['val'] + this['_columnGap'] * b6['count']);
                                var b7 = this['_customSize'][aX];
                                aY = b7 > 0x0 ? b7 : this['_itemSize']['width'];
                            } else
                                b2 = this['_leftGap'] + (this['_itemSize']['width'] + this['_columnGap']) * aX,
                                aY = this['_itemSize']['width'];
                            if (this['lackCenter'])
                                b2 -= this['_leftGap'],
                                b2 += this['_contentUt']['width'] / 0x2 - this['_allItemSizeNoEdge'] / 0x2;
                            return {
                                'id': aX,
                                'left': b2,
                                'right': b3 = b2 + aY,
                                'x': b2 + this['_itemTmpUt']['anchorX'] * aY,
                                'y': this['_itemTmp']['y']
                            };
                        case R['HorizontalDirection']['RIGHT_TO_LEFT']:
                            if (this['_customSize']) {
                                var b8 = this['_getFixedSize'](aX);
                                b3 = -this['_rightGap'] - (this['_itemSize']['width'] + this['_columnGap']) * (aX - b8['count']) - (b8['val'] + this['_columnGap'] * b8['count']);
                                var b9 = this['_customSize'][aX];
                                aY = b9 > 0x0 ? b9 : this['_itemSize']['width'];
                            } else
                                b3 = -this['_rightGap'] - (this['_itemSize']['width'] + this['_columnGap']) * aX,
                                aY = this['_itemSize']['width'];
                            if (this['lackCenter'])
                                b3 += this['_rightGap'],
                                b3 -= this['_contentUt']['width'] / 0x2 - this['_allItemSizeNoEdge'] / 0x2;
                            return {
                                'id': aX,
                                'right': b3,
                                'left': b2 = b3 - aY,
                                'x': b2 + this['_itemTmpUt']['anchorX'] * aY,
                                'y': this['_itemTmp']['y']
                            };
                        }
                        break;
                    case R['Type']['VERTICAL']:
                        switch (this['_verticalDir']) {
                        case R['VerticalDirection']['TOP_TO_BOTTOM']:
                            if (this['_customSize']) {
                                var ba = this['_getFixedSize'](aX);
                                b0 = -this['_topGap'] - (this['_itemSize']['height'] + this['_lineGap']) * (aX - ba['count']) - (ba['val'] + this['_lineGap'] * ba['count']);
                                var bb = this['_customSize'][aX];
                                aZ = bb > 0x0 ? bb : this['_itemSize']['height'];
                            } else
                                b0 = -this['_topGap'] - (this['_itemSize']['height'] + this['_lineGap']) * aX,
                                aZ = this['_itemSize']['height'];
                            if (this['lackCenter'])
                                b0 += this['_topGap'],
                                b0 -= this['_contentUt']['height'] / 0x2 - this['_allItemSizeNoEdge'] / 0x2;
                            return {
                                'id': aX,
                                'top': b0,
                                'bottom': b1 = b0 - aZ,
                                'x': this['_itemTmp']['x'],
                                'y': b1 + this['_itemTmpUt']['anchorY'] * aZ
                            };
                        case R['VerticalDirection']['BOTTOM_TO_TOP']:
                            if (this['_customSize']) {
                                var bc = this['_getFixedSize'](aX);
                                b1 = this['_bottomGap'] + (this['_itemSize']['height'] + this['_lineGap']) * (aX - bc['count']) + (bc['val'] + this['_lineGap'] * bc['count']);
                                var bd = this['_customSize'][aX];
                                aZ = bd > 0x0 ? bd : this['_itemSize']['height'];
                            } else
                                b1 = this['_bottomGap'] + (this['_itemSize']['height'] + this['_lineGap']) * aX,
                                aZ = this['_itemSize']['height'];
                            if (this['lackCenter'])
                                b1 -= this['_bottomGap'],
                                b1 += this['_contentUt']['height'] / 0x2 - this['_allItemSizeNoEdge'] / 0x2;
                            return {
                                'id': aX,
                                'top': b0 = b1 + aZ,
                                'bottom': b1,
                                'x': this['_itemTmp']['x'],
                                'y': b1 + this['_itemTmpUt']['anchorY'] * aZ
                            };
                        }
                    case R['Type']['GRID']:
                        var be = Math['floor'](aX / this['_colLineNum']);
                        switch (this['_startAxis']) {
                        case R['AxisDirection']['HORIZONTAL']:
                            switch (this['_verticalDir']) {
                            case R['VerticalDirection']['TOP_TO_BOTTOM']:
                                b5 = (b1 = (b0 = -this['_topGap'] - (this['_itemSize']['height'] + this['_lineGap']) * be) - this['_itemSize']['height']) + this['_itemTmpUt']['anchorY'] * this['_itemSize']['height'];
                                break;
                            case R['VerticalDirection']['BOTTOM_TO_TOP']:
                                b0 = (b1 = this['_bottomGap'] + (this['_itemSize']['height'] + this['_lineGap']) * be) + this['_itemSize']['height'],
                                b5 = b1 + this['_itemTmpUt']['anchorY'] * this['_itemSize']['height'];
                            }
                            switch (b4 = this['_leftGap'] + aX % this['_colLineNum'] * (this['_itemSize']['width'] + this['_columnGap']),
                            this['_horizontalDir']) {
                            case R['HorizontalDirection']['LEFT_TO_RIGHT']:
                                b4 += this['_itemTmpUt']['anchorX'] * this['_itemSize']['width'],
                                b4 -= this['_contentUt']['anchorX'] * this['_contentUt']['width'];
                                break;
                            case R['HorizontalDirection']['RIGHT_TO_LEFT']:
                                b4 += (0x1 - this['_itemTmpUt']['anchorX']) * this['_itemSize']['width'],
                                b4 -= (0x1 - this['_contentUt']['anchorX']) * this['_contentUt']['width'],
                                b4 *= -0x1;
                            }
                            return {
                                'id': aX,
                                'top': b0,
                                'bottom': b1,
                                'x': b4,
                                'y': b5
                            };
                        case R['AxisDirection']['VERTICAL']:
                            switch (this['_horizontalDir']) {
                            case R['HorizontalDirection']['LEFT_TO_RIGHT']:
                                b3 = (b2 = this['_leftGap'] + (this['_itemSize']['width'] + this['_columnGap']) * be) + this['_itemSize']['width'],
                                b4 = b2 + this['_itemTmpUt']['anchorX'] * this['_itemSize']['width'],
                                b4 -= this['_contentUt']['anchorX'] * this['_contentUt']['width'];
                                break;
                            case R['HorizontalDirection']['RIGHT_TO_LEFT']:
                                b4 = (b2 = (b3 = -this['_rightGap'] - (this['_itemSize']['width'] + this['_columnGap']) * be) - this['_itemSize']['width']) + this['_itemTmpUt']['anchorX'] * this['_itemSize']['width'],
                                b4 += (0x1 - this['_contentUt']['anchorX']) * this['_contentUt']['width'];
                            }
                            switch (b5 = -this['_topGap'] - aX % this['_colLineNum'] * (this['_itemSize']['height'] + this['_lineGap']),
                            this['_verticalDir']) {
                            case R['VerticalDirection']['TOP_TO_BOTTOM']:
                                b5 -= (0x1 - this['_itemTmpUt']['anchorY']) * this['_itemSize']['height'],
                                b5 += (0x1 - this['_contentUt']['anchorY']) * this['_contentUt']['height'];
                                break;
                            case R['VerticalDirection']['BOTTOM_TO_TOP']:
                                b5 -= this['_itemTmpUt']['anchorY'] * this['_itemSize']['height'],
                                b5 += this['_contentUt']['anchorY'] * this['_contentUt']['height'],
                                b5 *= -0x1;
                            }
                            return {
                                'id': aX,
                                'left': b2,
                                'right': b3,
                                'x': b4,
                                'y': b5
                            };
                        }
                    }
                }
                ,
                aW['_calcExistItemPos'] = function(aX) {
                    var aY = this['getItemByListId'](aX);
                    if (!aY)
                        return null;
                    var aZ = aY['getComponent'](Q)
                      , b0 = aY['getPosition']()
                      , b1 = {
                        'id': aX,
                        'x': b0['x'],
                        'y': b0['y']
                    };
                    return this['_sizeType'] ? (b1['top'] = b0['y'] + aZ['height'] * (0x1 - aZ['anchorY']),
                    b1['bottom'] = b0['y'] - aZ['height'] * aZ['anchorY']) : (b1['left'] = b0['x'] - aZ['width'] * aZ['anchorX'],
                    b1['right'] = b0['x'] + aZ['width'] * (0x1 - aZ['anchorX'])),
                    b1;
                }
                ,
                aW['getItemPos'] = function(aX) {
                    return this['_virtual'] || this['frameByFrameRenderNum'] ? this['_calcItemPos'](aX) : this['_calcExistItemPos'](aX);
                }
                ,
                aW['_getFixedSize'] = function(aX) {
                    if (!this['_customSize'])
                        return null;
                    null == aX && (aX = this['_numItems']);
                    var aY = 0x0
                      , aZ = 0x0;
                    for (var b0 in this['_customSize'])
                        parseInt(b0) < aX && (aY += this['_customSize'][b0],
                        aZ++);
                    return {
                        'val': aY,
                        'count': aZ
                    };
                }
                ,
                aW['_onScrollBegan'] = function() {
                    this['_beganPos'] = this['_sizeType'] ? this['viewTop'] : this['viewLeft'];
                }
                ,
                aW['_onScrollEnded'] = function() {
                    var aX = this;
                    if (aX['_curScrollIsTouch'] = !0x1,
                    null != aX['scrollToListId']) {
                        var aY = aX['getItemByListId'](aX['scrollToListId']);
                        aX['scrollToListId'] = null,
                        aY && Z(aY)['to'](0.1, {
                            'scale': 1.06
                        })['to'](0.1, {
                            'scale': 0x1
                        })['start']();
                    }
                    aX['_onScrolling'](),
                    aX['_slideMode'] != aS['ADHERING'] || aX['adhering'] ? aX['_slideMode'] == aS['PAGE'] && (null != aX['_beganPos'] && aX['_curScrollIsTouch'] ? this['_pageAdhere']() : aX['adhere']()) : aX['adhere']();
                }
                ,
                aW['_onTouchStart'] = function(aX, aY) {
                    if (!this['_scrollView']['_hasNestedViewGroup'](aX, aY) && (this['_curScrollIsTouch'] = !0x0,
                    !(aX['eventPhase'] === Event['AT_TARGET'] && aX['target'] === this['node']))) {
                        for (var aZ = aX['target']; null == aZ['_listId'] && aZ['parent']; )
                            aZ = aZ['parent'];
                        this['_scrollItem'] = null != aZ['_listId'] ? aZ : aX['target'];
                    }
                }
                ,
                aW['_onTouchUp'] = function() {
                    var aX = this;
                    aX['_scrollPos'] = null,
                    aX['_slideMode'] == aS['ADHERING'] ? (this['adhering'] && (this['_adheringBarrier'] = !0x0),
                    aX['adhere']()) : aX['_slideMode'] == aS['PAGE'] && (null != aX['_beganPos'] ? this['_pageAdhere']() : aX['adhere']()),
                    this['_scrollItem'] = null;
                }
                ,
                aW['_onTouchCancelled'] = function(aX, aY) {
                    var aZ = this;
                    aZ['_scrollView']['_hasNestedViewGroup'](aX, aY) || aX['simulate'] || (aZ['_scrollPos'] = null,
                    aZ['_slideMode'] == aS['ADHERING'] ? (aZ['adhering'] && (aZ['_adheringBarrier'] = !0x0),
                    aZ['adhere']()) : aZ['_slideMode'] == aS['PAGE'] && (null != aZ['_beganPos'] ? aZ['_pageAdhere']() : aZ['adhere']()),
                    this['_scrollItem'] = null);
                }
                ,
                aW['_onSizeChanged'] = function() {
                    this['checkInited'](!0x1) && this['_onScrolling']();
                }
                ,
                aW['_onItemAdaptive'] = function(aX) {
                    var aY = aX['getComponent'](Q);
                    if (!this['_sizeType'] && aY['width'] != this['_itemSize']['width'] || this['_sizeType'] && aY['height'] != this['_itemSize']['height']) {
                        this['_customSize'] || (this['_customSize'] = {});
                        var aZ = this['_sizeType'] ? aY['height'] : aY['width'];
                        this['_customSize'][aX['_listId']] != aZ && (this['_customSize'][aX['_listId']] = aZ,
                        this['_resizeContent'](),
                        this['updateAll'](),
                        null != this['_scrollToListId'] && (this['_scrollPos'] = null,
                        this['unschedule'](this['_scrollToSo']),
                        this['scrollTo'](this['_scrollToListId'], Math['max'](0x0, this['_scrollToEndTime'] - new Date()['getTime']() / 0x3e8))));
                    }
                }
                ,
                aW['_pageAdhere'] = function() {
                    var aX = this;
                    if (aX['cyclic'] || !(aX['elasticTop'] > 0x0 || aX['elasticRight'] > 0x0 || aX['elasticBottom'] > 0x0 || aX['elasticLeft'] > 0x0)) {
                        var aY = aX['_sizeType'] ? aX['viewTop'] : aX['viewLeft']
                          , aZ = (aX['_sizeType'] ? aX['_thisNodeUt']['height'] : aX['_thisNodeUt']['width']) * aX['pageDistance'];
                        if (Math['abs'](aX['_beganPos'] - aY) > aZ) {
                            var b0 = 0.5;
                            switch (aX['_alignCalcType']) {
                            case 0x1:
                            case 0x4:
                                aX['_beganPos'] > aY ? aX['prePage'](b0) : aX['nextPage'](b0);
                                break;
                            case 0x2:
                            case 0x3:
                                aX['_beganPos'] < aY ? aX['prePage'](b0) : aX['nextPage'](b0);
                            }
                        } else
                            aX['elasticTop'] <= 0x0 && aX['elasticRight'] <= 0x0 && aX['elasticBottom'] <= 0x0 && aX['elasticLeft'] <= 0x0 && aX['adhere']();
                        aX['_beganPos'] = null;
                    }
                }
                ,
                aW['adhere'] = function() {
                    var aX = this;
                    if (aX['checkInited']() && !(aX['elasticTop'] > 0x0 || aX['elasticRight'] > 0x0 || aX['elasticBottom'] > 0x0 || aX['elasticLeft'] > 0x0)) {
                        aX['adhering'] = !0x0,
                        aX['_calcNearestItem']();
                        var aY = (aX['_sizeType'] ? aX['_topGap'] : aX['_leftGap']) / (aX['_sizeType'] ? aX['_thisNodeUt']['height'] : aX['_thisNodeUt']['width']);
                        aX['scrollTo'](aX['nearestListId'], 0.7, aY);
                    }
                }
                ,
                aW['update'] = function() {
                    if (!(this['frameByFrameRenderNum'] <= 0x0 || this['_updateDone'])) {
                        if (this['_virtual']) {
                            for (var aX = this['_updateCounter'] + this['frameByFrameRenderNum'] > this['displayItemNum'] ? this['displayItemNum'] : this['_updateCounter'] + this['frameByFrameRenderNum'], aY = this['_updateCounter']; aY < aX; aY++) {
                                var aZ = this['displayData'][aY];
                                aZ && this['_createOrUpdateItem'](aZ);
                            }
                            this['_updateCounter'] >= this['displayItemNum'] - 0x1 ? this['_doneAfterUpdate'] ? (this['_updateCounter'] = 0x0,
                            this['_updateDone'] = !0x1,
                            this['_doneAfterUpdate'] = !0x1) : (this['_updateDone'] = !0x0,
                            this['_delRedundantItem'](),
                            this['_forceUpdate'] = !0x1,
                            this['_calcNearestItem'](),
                            this['slideMode'] == aS['PAGE'] && (this['curPageNum'] = this['nearestListId'])) : this['_updateCounter'] += this['frameByFrameRenderNum'];
                        } else {
                            if (this['_updateCounter'] < this['_numItems']) {
                                for (var b0 = this['_updateCounter'] + this['frameByFrameRenderNum'] > this['_numItems'] ? this['_numItems'] : this['_updateCounter'] + this['frameByFrameRenderNum'], b1 = this['_updateCounter']; b1 < b0; b1++)
                                    this['_createOrUpdateItem2'](b1);
                                this['_updateCounter'] += this['frameByFrameRenderNum'];
                            } else
                                this['_updateDone'] = !0x0,
                                this['_calcNearestItem'](),
                                this['slideMode'] == aS['PAGE'] && (this['curPageNum'] = this['nearestListId']);
                        }
                    }
                }
                ,
                aW['_createOrUpdateItem'] = function(aX) {
                    var aY = this['getItemByListId'](aX['id']);
                    if (aY)
                        this['_forceUpdate'] && this['renderEvent'] && (aY['setPosition'](new W(aX['x'],aX['y'],0x0)),
                        this['_resetItemSize'](aY),
                        this['renderEvent'] && L['emitEvents']([this['renderEvent']], aY, aX['id'] % this['_actualNumItems']));
                    else {
                        var aZ = this['_pool']['size']() > 0x0;
                        if (aY = aZ ? this['_pool']['get']() : U(this['_itemTmp']),
                        aZ && P(aY) || (aY = U(this['_itemTmp']),
                        aZ = !0x1),
                        aY['_listId'] != aX['id'])
                            aY['_listId'] = aX['id'],
                            aY['getComponent'](Q)['setContentSize'](this['_itemSize']);
                        if (aY['setPosition'](new W(aX['x'],aX['y'],0x0)),
                        this['_resetItemSize'](aY),
                        this['content']['addChild'](aY),
                        aZ && this['_needUpdateWidget']) {
                            var b0 = aY['getComponent'](Y);
                            b0 && b0['updateAlignment']();
                        }
                        aY['setSiblingIndex'](this['content']['children']['length'] - 0x1);
                        var b1 = aY['getComponent'](a2);
                        aY['listItem'] = b1,
                        b1 && (b1['listId'] = aX['id'],
                        b1['list'] = this,
                        b1['_registerEvent']()),
                        this['renderEvent'] && L['emitEvents']([this['renderEvent']], aY, aX['id'] % this['_actualNumItems']);
                    }
                    this['_resetItemSize'](aY),
                    this['_updateListItem'](aY['listItem']),
                    this['_lastDisplayData']['indexOf'](aX['id']) < 0x0 && this['_lastDisplayData']['push'](aX['id']);
                }
                ,
                aW['_createOrUpdateItem2'] = function(aX) {
                    var aY, aZ = this['content']['children'][aX];
                    aZ ? this['_forceUpdate'] && this['renderEvent'] && (aZ['_listId'] = aX,
                    aY && (aY['listId'] = aX),
                    this['renderEvent'] && L['emitEvents']([this['renderEvent']], aZ, aX % this['_actualNumItems'])) : ((aZ = U(this['_itemTmp']))['_listId'] = aX,
                    this['content']['addChild'](aZ),
                    aY = aZ['getComponent'](a2),
                    aZ['listItem'] = aY,
                    aY && (aY['listId'] = aX,
                    aY['list'] = this,
                    aY['_registerEvent']()),
                    this['renderEvent'] && L['emitEvents']([this['renderEvent']], aZ, aX % this['_actualNumItems'])),
                    this['_updateListItem'](aY),
                    this['_lastDisplayData']['indexOf'](aX) < 0x0 && this['_lastDisplayData']['push'](aX);
                }
                ,
                aW['_updateListItem'] = function(aX) {
                    if (aX && this['selectedMode'] > aT['NONE']) {
                        var aY = aX['node'];
                        switch (this['selectedMode']) {
                        case aT['SINGLE']:
                            aX['selected'] = this['selectedId'] == aY['_listId'];
                            break;
                        case aT['MULT']:
                            aX['selected'] = this['multSelected']['indexOf'](aY['_listId']) >= 0x0;
                        }
                    }
                }
                ,
                aW['_resetItemSize'] = function(aX) {}
                ,
                aW['_updateItemPos'] = function(aX) {
                    var aY = isNaN(aX) ? aX : this['getItemByListId'](aX)
                      , aZ = this['getItemPos'](aY['_listId']);
                    aY['setPosition'](aZ['x'], aZ['y']);
                }
                ,
                aW['setMultSelected'] = function(aX, aY) {
                    var aZ = this;
                    if (aZ['checkInited']()) {
                        var b0, b1;
                        if (Array['isArray'](aX) || (aX = [aX]),
                        null == aY)
                            aZ['multSelected'] = aX;
                        else {
                            if (aY) {
                                for (var b2 = aX['length'] - 0x1; b2 >= 0x0; b2--)
                                    b0 = aX[b2],
                                    (b1 = aZ['multSelected']['indexOf'](b0)) < 0x0 && aZ['multSelected']['push'](b0);
                            } else {
                                for (var b3 = aX['length'] - 0x1; b3 >= 0x0; b3--)
                                    b0 = aX[b3],
                                    (b1 = aZ['multSelected']['indexOf'](b0)) >= 0x0 && aZ['multSelected']['splice'](b1, 0x1);
                            }
                        }
                        aZ['_forceUpdate'] = !0x0,
                        aZ['_onScrolling']();
                    }
                }
                ,
                aW['getMultSelected'] = function() {
                    return this['multSelected'];
                }
                ,
                aW['hasMultSelected'] = function(aX) {
                    return this['multSelected'] && this['multSelected']['indexOf'](aX) >= 0x0;
                }
                ,
                aW['updateItem'] = function(aX) {
                    if (this['checkInited']()) {
                        Array['isArray'](aX) || (aX = [aX]);
                        for (var aY = 0x0, aZ = aX['length']; aY < aZ; aY++) {
                            var b0 = aX[aY]
                              , b1 = this['getItemByListId'](b0);
                            b1 && L['emitEvents']([this['renderEvent']], b1, b0 % this['_actualNumItems']);
                        }
                    }
                }
                ,
                aW['updateAll'] = function() {
                    this['checkInited']() && (this['numItems'] = this['numItems']);
                }
                ,
                aW['getItemByListId'] = function(aX) {
                    if (this['content'])
                        for (var aY = this['content']['children']['length'] - 0x1; aY >= 0x0; aY--) {
                            var aZ = this['content']['children'][aY];
                            if (aZ['_listId'] == aX)
                                return aZ;
                        }
                }
                ,
                aW['_getOutsideItem'] = function() {
                    for (var aX, aY = [], aZ = this['content']['children']['length'] - 0x1; aZ >= 0x0; aZ--)
                        aX = this['content']['children'][aZ],
                        this['displayData']['find'](function(b0) {
                            return b0['id'] == aX['_listId'];
                        }) || aY['push'](aX);
                    return aY;
                }
                ,
                aW['_delRedundantItem'] = function() {
                    if (this['_virtual'])
                        for (var aX = this['_getOutsideItem'](), aY = aX['length'] - 0x1; aY >= 0x0; aY--) {
                            var aZ = aX[aY];
                            if (!this['_scrollItem'] || aZ['_listId'] != this['_scrollItem']['_listId']) {
                                aZ['isCached'] = !0x0,
                                this['_pool']['put'](aZ);
                                for (var b0 = this['_lastDisplayData']['length'] - 0x1; b0 >= 0x0; b0--)
                                    if (this['_lastDisplayData'][b0] == aZ['_listId']) {
                                        this['_lastDisplayData']['splice'](b0, 0x1);
                                        break;
                                    }
                            }
                        }
                    else {
                        for (; this['content']['children']['length'] > this['_numItems']; )
                            this['_delSingleItem'](this['content']['children'][this['content']['children']['length'] - 0x1]);
                    }
                }
                ,
                aW['_delSingleItem'] = function(aX) {
                    aX['removeFromParent'](),
                    aX['destroy'] && aX['destroy'](),
                    aX = null;
                }
                ,
                aW['aniDelItem'] = function(aX, aY, aZ) {
                    var b0 = this;
                    if (!b0['checkInited']() || b0['cyclic'] || !b0['_virtual'])
                        return console['error']('This\x20function\x20is\x20not\x20allowed\x20to\x20be\x20called!');
                    if (!aY)
                        return console['error']('CallFunc\x20are\x20not\x20allowed\x20to\x20be\x20NULL,\x20You\x20need\x20to\x20delete\x20the\x20corresponding\x20index\x20in\x20the\x20data\x20array\x20in\x20the\x20CallFunc!');
                    if (b0['_aniDelRuning'])
                        return console['warn']('Please\x20wait\x20for\x20the\x20current\x20deletion\x20to\x20finish!');
                    var b1, b2 = b0['getItemByListId'](aX);
                    if (b2) {
                        b1 = b2['getComponent'](a2),
                        b0['_aniDelRuning'] = !0x0,
                        b0['_aniDelCB'] = aY,
                        b0['_aniDelItem'] = b2,
                        b0['_aniDelBeforePos'] = b2['position'],
                        b0['_aniDelBeforeScale'] = b2['scale'];
                        var b3 = b0['displayData'][b0['displayData']['length'] - 0x1]['id']
                          , b4 = b1['selected'];
                        b1['showAni'](aZ, function() {
                            var b5;
                            if (b3 < b0['_numItems'] - 0x2 && (b5 = b3 + 0x1),
                            null != b5) {
                                var b6 = b0['_calcItemPos'](b5);
                                b0['displayData']['push'](b6),
                                b0['_virtual'] ? b0['_createOrUpdateItem'](b6) : b0['_createOrUpdateItem2'](b5);
                            } else
                                b0['_numItems']--;
                            if (b0['selectedMode'] == aT['SINGLE'])
                                b4 ? b0['_selectedId'] = -0x1 : b0['_selectedId'] - 0x1 >= 0x0 && b0['_selectedId']--;
                            else {
                                if (b0['selectedMode'] == aT['MULT'] && b0['multSelected']['length']) {
                                    var b7 = b0['multSelected']['indexOf'](aX);
                                    b7 >= 0x0 && b0['multSelected']['splice'](b7, 0x1);
                                    for (var b8 = b0['multSelected']['length'] - 0x1; b8 >= 0x0; b8--) {
                                        b0['multSelected'][b8] >= aX && b0['multSelected'][b8]--;
                                    }
                                }
                            }
                            if (b0['_customSize']) {
                                b0['_customSize'][aX] && delete b0['_customSize'][aX];
                                var b9, ba = {};
                                for (var bb in b0['_customSize']) {
                                    b9 = b0['_customSize'][bb];
                                    var bc = parseInt(bb);
                                    ba[bc - (bc >= aX ? 0x1 : 0x0)] = b9;
                                }
                                b0['_customSize'] = ba;
                            }
                            for (var bd, be, bf = null != b5 ? b5 : b3; bf >= aX + 0x1; bf--)
                                if (b2 = b0['getItemByListId'](bf)) {
                                    var bg = b0['_calcItemPos'](bf - 0x1);
                                    bd = Z(b2)['to'](0.2333, {
                                        'position': new W(bg['x'],bg['y'],0x0)
                                    }),
                                    bf <= aX + 0x1 && (be = !0x0,
                                    bd['call'](function() {
                                        b0['_aniDelRuning'] = !0x1,
                                        aY(aX),
                                        delete b0['_aniDelCB'];
                                    })),
                                    bd['start']();
                                }
                            be || (b0['_aniDelRuning'] = !0x1,
                            aY(aX),
                            b0['_aniDelCB'] = null);
                        }, !0x0);
                    } else
                        aY(aX);
                }
                ,
                aW['scrollTo'] = function(aX, aY, aZ, b0) {
                    void 0x0 === aY && (aY = 0.5),
                    void 0x0 === aZ && (aZ = null),
                    void 0x0 === b0 && (b0 = !0x1);
                    var b1 = this;
                    if (b1['checkInited'](!0x1)) {
                        null == aY ? aY = 0.5 : aY < 0x0 && (aY = 0x0),
                        aX < 0x0 ? aX = 0x0 : aX >= b1['_numItems'] && (aX = b1['_numItems'] - 0x1),
                        !b1['_virtual'] && b1['_layout'] && b1['_layout']['enabled'] && b1['_layout']['updateLayout']();
                        var b2, b3, b4 = b1['getItemPos'](aX);
                        if (!b4)
                            return a1;
                        switch (b1['_alignCalcType']) {
                        case 0x1:
                            b2 = b4['left'],
                            b2 -= null != aZ ? b1['_thisNodeUt']['width'] * aZ : b1['_leftGap'],
                            b4 = new W(b2,0x0,0x0);
                            break;
                        case 0x2:
                            b2 = b4['right'] - b1['_thisNodeUt']['width'],
                            b2 += null != aZ ? b1['_thisNodeUt']['width'] * aZ : b1['_rightGap'],
                            b4 = new W(b2 + b1['_contentUt']['width'],0x0,0x0);
                            break;
                        case 0x3:
                            b3 = b4['top'],
                            b3 += null != aZ ? b1['_thisNodeUt']['height'] * aZ : b1['_topGap'],
                            b4 = new W(0x0,-b3,0x0);
                            break;
                        case 0x4:
                            b3 = b4['bottom'] + b1['_thisNodeUt']['height'],
                            b3 -= null != aZ ? b1['_thisNodeUt']['height'] * aZ : b1['_bottomGap'],
                            b4 = new W(0x0,-b3 + b1['_contentUt']['height'],0x0);
                        }
                        var b5 = b1['content']['getPosition']();
                        b5 = Math['abs'](b1['_sizeType'] ? b5['y'] : b5['x']);
                        var b6 = b1['_sizeType'] ? b4['y'] : b4['x'];
                        Math['abs']((null != b1['_scrollPos'] ? b1['_scrollPos'] : b5) - b6) > 0.5 && (b1['_scrollView']['scrollToOffset'](b4, aY),
                        b1['_scrollToListId'] = aX,
                        b1['_scrollToEndTime'] = new Date()['getTime']() / 0x3e8 + aY,
                        b1['_scrollToSo'] = b1['scheduleOnce'](function() {
                            if (b1['_adheringBarrier'] || (b1['adhering'] = b1['_adheringBarrier'] = !0x1),
                            b1['_scrollPos'] = b1['_scrollToListId'] = b1['_scrollToEndTime'] = b1['_scrollToSo'] = null,
                            b0) {
                                var b7 = b1['getItemByListId'](aX);
                                b7 && Z(b7)['to'](0.1, {
                                    'scale': 1.05
                                })['to'](0.1, {
                                    'scale': 0x1
                                })['start']();
                            }
                        }, aY + 0.1),
                        aY <= 0x0 && b1['_onScrolling']());
                    }
                }
                ,
                aW['_calcNearestItem'] = function() {
                    var aX, aY, aZ, b0, b1, b2, b3 = this;
                    b3['nearestListId'] = null,
                    b3['_virtual'] && b3['_calcViewPos'](),
                    aZ = b3['viewTop'],
                    b0 = b3['viewRight'],
                    b1 = b3['viewBottom'],
                    b2 = b3['viewLeft'];
                    for (var b4 = !0x1, b5 = 0x0; b5 < b3['content']['children']['length'] && !b4; b5 += b3['_colLineNum'])
                        if (aX = b3['_virtual'] ? b3['displayData'][b5] : b3['_calcExistItemPos'](b5))
                            switch (aY = b3['_sizeType'] ? (aX['top'] + aX['bottom']) / 0x2 : aY = (aX['left'] + aX['right']) / 0x2,
                            b3['_alignCalcType']) {
                            case 0x1:
                                aX['right'] >= b2 && (b3['nearestListId'] = aX['id'],
                                b2 > aY && (b3['nearestListId'] += b3['_colLineNum']),
                                b4 = !0x0);
                                break;
                            case 0x2:
                                aX['left'] <= b0 && (b3['nearestListId'] = aX['id'],
                                b0 < aY && (b3['nearestListId'] += b3['_colLineNum']),
                                b4 = !0x0);
                                break;
                            case 0x3:
                                aX['bottom'] <= aZ && (b3['nearestListId'] = aX['id'],
                                aZ < aY && (b3['nearestListId'] += b3['_colLineNum']),
                                b4 = !0x0);
                                break;
                            case 0x4:
                                aX['top'] >= b1 && (b3['nearestListId'] = aX['id'],
                                b1 > aY && (b3['nearestListId'] += b3['_colLineNum']),
                                b4 = !0x0);
                            }
                    if ((aX = b3['_virtual'] ? b3['displayData'][b3['displayItemNum'] - 0x1] : b3['_calcExistItemPos'](b3['_numItems'] - 0x1)) && aX['id'] == b3['_numItems'] - 0x1)
                        switch (aY = b3['_sizeType'] ? (aX['top'] + aX['bottom']) / 0x2 : aY = (aX['left'] + aX['right']) / 0x2,
                        b3['_alignCalcType']) {
                        case 0x1:
                            b0 > aY && (b3['nearestListId'] = aX['id']);
                            break;
                        case 0x2:
                            b2 < aY && (b3['nearestListId'] = aX['id']);
                            break;
                        case 0x3:
                            b1 < aY && (b3['nearestListId'] = aX['id']);
                            break;
                        case 0x4:
                            aZ > aY && (b3['nearestListId'] = aX['id']);
                        }
                }
                ,
                aW['prePage'] = function(aX) {
                    void 0x0 === aX && (aX = 0.5),
                    this['checkInited']() && this['skipPage'](this['curPageNum'] - 0x1, aX);
                }
                ,
                aW['nextPage'] = function(aX) {
                    void 0x0 === aX && (aX = 0.5),
                    this['checkInited']() && this['skipPage'](this['curPageNum'] + 0x1, aX);
                }
                ,
                aW['skipPage'] = function(aX, aY) {
                    var aZ = this;
                    if (aZ['checkInited']())
                        return aZ['_slideMode'] != aS['PAGE'] ? console['error']('This\x20function\x20is\x20not\x20allowed\x20to\x20be\x20called,\x20Must\x20SlideMode\x20=\x20PAGE!') : void (aX < 0x0 || aX >= aZ['_numItems'] || aZ['curPageNum'] != aX && (aZ['curPageNum'] = aX,
                        aZ['pageChangeEvent'] && L['emitEvents']([aZ['pageChangeEvent']], aX),
                        aZ['scrollTo'](aX, aY)));
                }
                ,
                aW['calcCustomSize'] = function(aX) {
                    var aY = this;
                    if (aY['checkInited']()) {
                        if (!aY['_itemTmp'])
                            return console['error']('Unset\x20template\x20item!');
                        if (!aY['renderEvent'])
                            return console['error']('Unset\x20Render-Event!');
                        aY['_customSize'] = {};
                        var aZ = U(aY['_itemTmp'])
                          , b0 = aZ['getComponent'](Q);
                        aY['content']['addChild'](aZ);
                        for (var b1 = 0x0; b1 < aX; b1++)
                            L['emitEvents']([aY['renderEvent']], aZ, b1),
                            b0['height'] == aY['_itemSize']['height'] && b0['width'] == aY['_itemSize']['width'] || (aY['_customSize'][b1] = aY['_sizeType'] ? b0['height'] : b0['width']);
                        return Object['keys'](aY['_customSize'])['length'] || (aY['_customSize'] = null),
                        aZ['removeFromParent'](),
                        aZ['destroy'] && aZ['destroy'](),
                        aY['_customSize'];
                    }
                }
                ,
                B(aV, [{
                    'key': 'slideMode',
                    'get': function() {
                        return this['_slideMode'];
                    },
                    'set': function(aX) {
                        this['_slideMode'] = aX;
                    }
                }, {
                    'key': 'virtual',
                    'get': function() {
                        return this['_virtual'];
                    },
                    'set': function(aX) {
                        null != aX && (this['_virtual'] = aX),
                        0x0 != this['_numItems'] && this['_onScrolling']();
                    }
                }, {
                    'key': 'updateRate',
                    'get': function() {
                        return this['_updateRate'];
                    },
                    'set': function(aX) {
                        aX >= 0x0 && aX <= 0x6 && (this['_updateRate'] = aX);
                    }
                }, {
                    'key': 'selectedId',
                    'get': function() {
                        return this['_selectedId'];
                    },
                    'set': function(aX) {
                        var aY, aZ = this;
                        switch (aZ['selectedMode']) {
                        case aT['SINGLE']:
                            if (!aZ['repeatEventSingle'] && aX == aZ['_selectedId'])
                                return;
                            if (aY = aZ['getItemByListId'](aX),
                            aZ['_selectedId'] >= 0x0 ? aZ['_lastSelectedId'] = aZ['_selectedId'] : aZ['_lastSelectedId'] = null,
                            aZ['_selectedId'] = aX,
                            aY && (aY['getComponent'](a2)['selected'] = !0x0),
                            aZ['_lastSelectedId'] >= 0x0 && aZ['_lastSelectedId'] != aZ['_selectedId']) {
                                var b0 = aZ['getItemByListId'](aZ['_lastSelectedId']);
                                b0 && (b0['getComponent'](a2)['selected'] = !0x1);
                            }
                            aZ['selectedEvent'] && L['emitEvents']([aZ['selectedEvent']], aY, aX % this['_actualNumItems'], null == aZ['_lastSelectedId'] ? null : aZ['_lastSelectedId'] % this['_actualNumItems']);
                            break;
                        case aT['MULT']:
                            if (!(aY = aZ['getItemByListId'](aX)))
                                return;
                            var b1 = aY['getComponent'](a2);
                            aZ['_selectedId'] >= 0x0 && (aZ['_lastSelectedId'] = aZ['_selectedId']),
                            aZ['_selectedId'] = aX;
                            var b2 = !b1['selected'];
                            b1['selected'] = b2;
                            var b3 = aZ['multSelected']['indexOf'](aX);
                            b2 && b3 < 0x0 ? aZ['multSelected']['push'](aX) : !b2 && b3 >= 0x0 && aZ['multSelected']['splice'](b3, 0x1),
                            aZ['selectedEvent'] && L['emitEvents']([aZ['selectedEvent']], aY, aX % this['_actualNumItems'], null == aZ['_lastSelectedId'] ? null : aZ['_lastSelectedId'] % this['_actualNumItems'], b2);
                        }
                    }
                }, {
                    'key': 'numItems',
                    'get': function() {
                        return this['_actualNumItems'];
                    },
                    'set': function(aX) {
                        var aY = this;
                        if (aY['checkInited'](!0x1)) {
                            if (null == aX || aX < 0x0)
                                console['error']('numItems\x20set\x20the\x20wrong::', aX);
                            else {
                                if (aY['_actualNumItems'] = aY['_numItems'] = aX,
                                aY['_forceUpdate'] = !0x0,
                                aY['_virtual'])
                                    aY['_resizeContent'](),
                                    aY['cyclic'] && (aY['_numItems'] = aY['_cyclicNum'] * aY['_numItems']),
                                    aY['_onScrolling'](),
                                    aY['frameByFrameRenderNum'] || aY['slideMode'] != aS['PAGE'] || (aY['curPageNum'] = aY['nearestListId']);
                                else {
                                    aY['cyclic'] && (aY['_resizeContent'](),
                                    aY['_numItems'] = aY['_cyclicNum'] * aY['_numItems']);
                                    var aZ = aY['content']['getComponent'](R);
                                    if (aZ && (aZ['enabled'] = !0x0),
                                    aY['_delRedundantItem'](),
                                    aY['firstListId'] = 0x0,
                                    aY['frameByFrameRenderNum'] > 0x0) {
                                        for (var b0 = aY['frameByFrameRenderNum'] > aY['_numItems'] ? aY['_numItems'] : aY['frameByFrameRenderNum'], b1 = 0x0; b1 < b0; b1++)
                                            aY['_createOrUpdateItem2'](b1);
                                        aY['frameByFrameRenderNum'] < aY['_numItems'] && (aY['_updateCounter'] = aY['frameByFrameRenderNum'],
                                        aY['_updateDone'] = !0x1);
                                    } else {
                                        for (var b2 = 0x0; b2 < aY['_numItems']; b2++)
                                            aY['_createOrUpdateItem2'](b2);
                                        aY['displayItemNum'] = aY['_numItems'];
                                    }
                                }
                            }
                        }
                    }
                }, {
                    'key': 'scrollView',
                    'get': function() {
                        return this['_scrollView'];
                    }
                }]),
                aV;
            }(a0))['prototype'], 'templateType', [a7], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return aR['NODE'];
                }
            }),
            av = k(as['prototype'], 'tmpNode', [a8], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aw = k(as['prototype'], 'tmpPrefab', [a9], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ax = k(as['prototype'], '_slideMode', [aa], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return aS['NORMAL'];
                }
            }),
            k(as['prototype'], 'slideMode', [ab], Object['getOwnPropertyDescriptor'](as['prototype'], 'slideMode'), as['prototype']),
            ay = k(as['prototype'], 'pageDistance', [ac], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0.3;
                }
            }),
            az = k(as['prototype'], 'pageChangeEvent', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return new L();
                }
            }),
            aA = k(as['prototype'], '_virtual', [ae], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            k(as['prototype'], 'virtual', [af], Object['getOwnPropertyDescriptor'](as['prototype'], 'virtual'), as['prototype']),
            aB = k(as['prototype'], 'cyclic', [ag], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            aC = k(as['prototype'], 'lackCenter', [ah], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            aD = k(as['prototype'], 'lackSlide', [ai], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            aE = k(as['prototype'], '_updateRate', [aj], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            k(as['prototype'], 'updateRate', [ak], Object['getOwnPropertyDescriptor'](as['prototype'], 'updateRate'), as['prototype']),
            aF = k(as['prototype'], 'frameByFrameRenderNum', [al], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            aG = k(as['prototype'], 'renderEvent', [am], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return new L();
                }
            }),
            aH = k(as['prototype'], 'selectedMode', [an], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return aT['NONE'];
                }
            }),
            aI = k(as['prototype'], 'selectedEvent', [ao], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return new L();
                }
            }),
            aJ = k(as['prototype'], 'repeatEventSingle', [ap], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            aK = k(as['prototype'], '_numItems', [aq], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            ar = as)) || ar) || ar) || ar) || ar) || ar)),
            C['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ListItem.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './env'], function(j) {
    var k, q, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
    return {
        'setters': [function(M) {
            k = M['applyDecoratedDescriptor'],
            q = M['inheritsLoose'],
            w = M['initializerDefineProperty'],
            x = M['assertThisInitialized'],
            y = M['createClass'];
        }
        , function(M) {
            z = M['cclegacy'],
            A = M['_decorator'],
            B = M['Sprite'],
            C = M['Node'],
            D = M['Enum'],
            E = M['SpriteFrame'],
            F = M['EventHandler'],
            G = M['UITransform'],
            H = M['tween'],
            I = M['Vec3'],
            J = M['Button'],
            K = M['Component'];
        }
        , function(M) {
            L = M['DEV'];
        }
        ],
        'execute': function() {
            var Q, U, V, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa;
            z['_RF']['push']({}, 'd96c43dyHxHh4aPX78GF8+3', 'ListItem', void 0x0);
            var ab = A['ccclass']
              , ac = A['property']
              , ad = A['disallowMultiple']
              , ae = A['menu']
              , af = A['executionOrder']
              , ag = function(ah) {
                return ah[ah['NONE'] = 0x0] = 'NONE',
                ah[ah['TOGGLE'] = 0x1] = 'TOGGLE',
                ah[ah['SWITCH'] = 0x2] = 'SWITCH',
                ah;
            }(ag || {});
            j('default', (Q = ad(),
            U = ae('List\x20Item'),
            V = af(-0x1389),
            X = ac({
                'type': B,
                'tooltip': L
            }),
            Y = ac({
                'type': C,
                'tooltip': L
            }),
            Z = ac({
                'type': D(ag),
                'tooltip': L
            }),
            a0 = ac({
                'type': C,
                'tooltip': L,
                'visible': function() {
                    return this['selectedMode'] > ag['NONE'];
                }
            }),
            a1 = ac({
                'type': E,
                'tooltip': L,
                'visible': function() {
                    return this['selectedMode'] == ag['SWITCH'];
                }
            }),
            a2 = ac({
                'tooltip': L
            }),
            ab(a3 = Q(a3 = U(a3 = V((a5 = k((a4 = function(ah) {
                function ai() {
                    for (var ak, al = arguments['length'], am = new Array(al), an = 0x0; an < al; an++)
                        am[an] = arguments[an];
                    return ak = ah['call']['apply'](ah, [this]['concat'](am)) || this,
                    w(ak, 'icon', a5, x(ak)),
                    w(ak, 'title', a6, x(ak)),
                    w(ak, 'selectedMode', a7, x(ak)),
                    w(ak, 'selectedFlag', a8, x(ak)),
                    w(ak, 'selectedSpriteFrame', a9, x(ak)),
                    ak['_unselectedSpriteFrame'] = null,
                    w(ak, 'adaptiveSize', aa, x(ak)),
                    ak['_selected'] = !0x1,
                    ak['_btnCom'] = void 0x0,
                    ak['list'] = void 0x0,
                    ak['_eventReg'] = !0x1,
                    ak['listId'] = void 0x0,
                    ak;
                }
                q(ai, ah);
                var aj = ai['prototype'];
                return aj['onLoad'] = function() {
                    if (this['selectedMode'] == ag['SWITCH']) {
                        var ak = this['selectedFlag']['getComponent'](B);
                        this['_unselectedSpriteFrame'] = ak['spriteFrame'];
                    }
                }
                ,
                aj['onDestroy'] = function() {
                    this['node']['off'](C['EventType']['SIZE_CHANGED'], this['_onSizeChange'], this);
                }
                ,
                aj['_registerEvent'] = function() {
                    this['_eventReg'] || (this['btnCom'] && this['list']['selectedMode'] > 0x0 && this['btnCom']['clickEvents']['unshift'](this['createEvt'](this, 'onClickThis')),
                    this['adaptiveSize'] && this['node']['on'](C['EventType']['SIZE_CHANGED'], this['_onSizeChange'], this),
                    this['_eventReg'] = !0x0);
                }
                ,
                aj['_onSizeChange'] = function() {
                    this['list']['_onItemAdaptive'](this['node']);
                }
                ,
                aj['createEvt'] = function(ak, al, am) {
                    if (void 0x0 === am && (am = null),
                    ak['isValid']) {
                        ak['comName'] = ak['comName'] || ak['name']['match'](/\<(.*?)\>/g)['pop']()['replace'](/\<|>/g, '');
                        var an = new F();
                        return an['target'] = am || ak['node'],
                        an['component'] = ak['comName'],
                        an['handler'] = al,
                        an;
                    }
                }
                ,
                aj['showAni'] = function(ak, al, am) {
                    var an, ao = this, ap = ao['node']['getComponent'](G);
                    switch (ak) {
                    case 0x0:
                        an = H(ao['node'])['to'](0.2, {
                            'scale': new I(0.7,0.7)
                        })['by'](0.3, {
                            'position': new I(0x0,0x2 * ap['height'])
                        });
                        break;
                    case 0x1:
                        an = H(ao['node'])['to'](0.2, {
                            'scale': new I(0.7,0.7)
                        })['by'](0.3, {
                            'position': new I(0x2 * ap['width'],0x0)
                        });
                        break;
                    case 0x2:
                        an = H(ao['node'])['to'](0.2, {
                            'scale': new I(0.7,0.7)
                        })['by'](0.3, {
                            'position': new I(0x0,-0x2 * ap['height'])
                        });
                        break;
                    case 0x3:
                        an = H(ao['node'])['to'](0.2, {
                            'scale': new I(0.7,0.7)
                        })['by'](0.3, {
                            'position': new I(-0x2 * ap['width'],0x0)
                        });
                        break;
                    default:
                        an = H(ao['node'])['to'](0.3, {
                            'scale': new I(0.1,0.1)
                        });
                    }
                    (al || am) && an['call'](function() {
                        if (am) {
                            ao['list']['_delSingleItem'](ao['node']);
                            for (var aq = ao['list']['displayData']['length'] - 0x1; aq >= 0x0; aq--)
                                if (ao['list']['displayData'][aq]['id'] == ao['listId']) {
                                    ao['list']['displayData']['splice'](aq, 0x1);
                                    break;
                                }
                        }
                        al();
                    }),
                    an['start']();
                }
                ,
                aj['onClickThis'] = function() {
                    this['list']['selectedId'] = this['listId'];
                }
                ,
                y(ai, [{
                    'key': 'selected',
                    'get': function() {
                        return this['_selected'];
                    },
                    'set': function(ak) {
                        if (this['_selected'] = ak,
                        this['selectedFlag'])
                            switch (this['selectedMode']) {
                            case ag['TOGGLE']:
                                this['selectedFlag']['active'] = ak;
                                break;
                            case ag['SWITCH']:
                                var al = this['selectedFlag']['getComponent'](B);
                                al && (al['spriteFrame'] = ak ? this['selectedSpriteFrame'] : this['_unselectedSpriteFrame']);
                            }
                    }
                }, {
                    'key': 'btnCom',
                    'get': function() {
                        return this['_btnCom'] || (this['_btnCom'] = this['node']['getComponent'](J)),
                        this['_btnCom'];
                    }
                }]),
                ai;
            }(K))['prototype'], 'icon', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = k(a4['prototype'], 'title', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = k(a4['prototype'], 'selectedMode', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return ag['NONE'];
                }
            }),
            a8 = k(a4['prototype'], 'selectedFlag', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a9 = k(a4['prototype'], 'selectedSpriteFrame', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aa = k(a4['prototype'], 'adaptiveSize', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x1;
                }
            }),
            a3 = a4)) || a3) || a3) || a3) || a3)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LoadingIndicator.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var d, f, g, h, j, k, m, p;
    return {
        'setters': [function(q) {
            d = q['applyDecoratedDescriptor'],
            f = q['inheritsLoose'],
            g = q['initializerDefineProperty'],
            h = q['assertThisInitialized'];
        }
        , function(q) {
            j = q['cclegacy'],
            k = q['_decorator'],
            m = q['Node'],
            p = q['Component'];
        }
        ],
        'execute': function() {
            var q, v, w, x, y;
            j['_RF']['push']({}, '95143M/82NCOLKGzw14JlmS', 'LoadingIndicator', void 0x0);
            var z = k['ccclass']
              , A = k['property'];
            b('LoadingIndicator', (q = z('LoadingIndicator'),
            v = A(m),
            q((y = d((x = function(B) {
                function C() {
                    for (var D, E = arguments['length'], F = new Array(E), G = 0x0; G < E; G++)
                        F[G] = arguments[G];
                    return D = B['call']['apply'](B, [this]['concat'](F)) || this,
                    g(D, 'loading', y, h(D)),
                    D['loading_rotate'] = 0x0,
                    D;
                }
                return f(C, B),
                C['prototype']['update'] = function(D) {
                    this['loading_rotate'] += 0xdc * D,
                    this['loading']['setRotationFromEuler'](0x0, 0x0, -this['loading_rotate'] % 0x168),
                    this['loading_rotate'] > 0x168 && (this['loading_rotate'] -= 0x168);
                }
                ,
                C;
            }(p))['prototype'], 'loading', [v], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            w = x)) || w)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LogData.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '22e39y7aZVOpr75TYTeHYlN', 'LogData', void 0x0);
            var c = (function() {
                function d() {
                    this['log_info'] = void 0x0,
                    this['log_error'] = void 0x0,
                    this['log_warn'] = void 0x0,
                    this['all_logs'] = void 0x0,
                    this['isInfoOn'] = !0x0,
                    this['isWarnOn'] = !0x0,
                    this['isErrorOn'] = !0x0;
                }
                return d['getInstance'] = function() {
                    return this['_instance'] || (this['_instance'] = new d()),
                    this['_instance'];
                }
                ,
                d['prototype']['ResetLogData'] = function() {
                    this['all_logs'] = [],
                    this['log_info'] = [],
                    this['log_error'] = [],
                    this['log_warn'] = [];
                }
                ,
                d;
            }());
            c['_instance'] = null,
            (a('LogType', function(d) {
                return d['log'] = 'log',
                d['info'] = 'info',
                d['warn'] = 'warn',
                d['error'] = 'error',
                d;
            }({})),
            a('default', c['getInstance']())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Logger.ts', ['cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'],
            c = d['log'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '479cdJANP5KaJgU+8z0DdSE', 'Logger', void 0x0);
            var d = a('LogType', function(h) {
                return h[h['None'] = 0x0] = 'None',
                h[h['Net'] = 0x1] = 'Net',
                h[h['Model'] = 0x2] = 'Model',
                h[h['Business'] = 0x4] = 'Business',
                h[h['View'] = 0x8] = 'View',
                h[h['Config'] = 0x10] = 'Config',
                h[h['Trace'] = 0x20] = 'Trace',
                h;
            }({}))
              , f = {
                0x1: '网络日志',
                0x2: '数据日志',
                0x4: '业务日志',
                0x8: '视图日志',
                0x10: '配置日志',
                0x20: '标准日志'
            }
              , g = a('Logger', (function() {
                function h() {}
                return h['init'] = function() {
                    this['tags'] = d['Net'] | d['Model'] | d['Business'] | d['View'] | d['Config'] | d['Trace'];
                }
                ,
                h['setTags'] = function(j) {
                    void 0x0 === j && (j = d['None']),
                    null != j && (this['tags'] = j);
                }
                ,
                h['start'] = function(j) {
                    void 0x0 === j && (j = 'Time'),
                    console['time'](j);
                }
                ,
                h['end'] = function(j) {
                    void 0x0 === j && (j = 'Time'),
                    console['timeEnd'](j);
                }
                ,
                h['table'] = function(j, k) {
                    this['isOpen'](d['Trace']) && console['table'](j);
                }
                ,
                h['trace'] = function(j) {
                    this['isOpen'](d['Trace']) && console['log'](j);
                }
                ,
                h['logNet'] = function(j, k) {
                    this['orange'](d['Net'], j, k);
                }
                ,
                h['logModel'] = function(j, k) {
                    this['violet'](d['Model'], j, k);
                }
                ,
                h['logBusiness'] = function(j, k) {
                    this['blue'](d['Business'], j, k);
                }
                ,
                h['logView'] = function(j, k) {
                    this['green'](d['View'], j, k);
                }
                ,
                h['logConfig'] = function(j, k) {
                    this['gray'](d['Config'], j, k);
                }
                ,
                h['orange'] = function(j, k, l) {
                    this['print'](j, k, 'color:#ee7700;', l);
                }
                ,
                h['violet'] = function(j, k, l) {
                    this['print'](j, k, 'color:Violet;', l);
                }
                ,
                h['blue'] = function(j, k, l) {
                    this['print'](j, k, 'color:#3a5fcd;', l);
                }
                ,
                h['green'] = function(j, k, l) {
                    this['print'](j, k, 'color:green;', l);
                }
                ,
                h['gray'] = function(j, k, l) {
                    this['print'](j, k, 'color:gray;', l);
                }
                ,
                h['isOpen'] = function(j) {
                    return 0x0 != (this['tags'] & j);
                }
                ,
                h['print'] = function(j, k, l, m) {
                    if (this['isOpen'](j)) {
                        var p = console['log'] || c
                          , q = f[j];
                        m ? p['call'](null, '%c%s%s%s:%s%o', l, this['getDateString'](), '[' + q + ']', this['stack'](0x5), m, k) : p['call'](null, '%c%s%s%s:%o', l, this['getDateString'](), '[' + q + ']', this['stack'](0x5), k);
                    }
                }
                ,
                h['stack'] = function(j) {
                    var k = new Error()['stack']['split']('\x0a')
                      , m = [];
                    k['forEach'](function(z) {
                        var A, B = (z = z['substring'](0x7))['split']('\x20');
                        B['length'] < 0x2 ? m['push'](B[0x0]) : m['push'](((A = {})[B[0x0]] = B[0x1],
                        A));
                    });
                    var p, q = [], u = [];
                    if (j < m['length'] - 0x1)
                        for (var v in m[j]) {
                            if (0x2 == (u = v['split']('.'))['length'])
                                q = u['concat']();
                            else {
                                var w = (p = m[j][v])['lastIndexOf']('/')
                                  , x = p['lastIndexOf']('.');
                                if (w > -0x1 && x > -0x1) {
                                    var y = p['substring'](w + 0x1, x);
                                    q['push'](y);
                                } else
                                    q['push'](p);
                            }
                        }
                    return 0x1 == q['length'] ? '[' + q[0x0] + '.ts]' : 0x2 == q['length'] ? '[' + q[0x0] + '.ts->' + q[0x1] + ']' : '';
                }
                ,
                h['getDateString'] = function() {
                    var j = new Date()
                      , k = j['getHours']()['toString']()
                      , l = '';
                    return l += (0x1 == k['length'] ? '0' + k : k) + ':',
                    l += (0x1 == (k = j['getMinutes']()['toString']())['length'] ? '0' + k : k) + ':',
                    l += (0x1 == (k = j['getSeconds']()['toString']())['length'] ? '0' + k : k) + ':',
                    0x1 == (k = j['getMilliseconds']()['toString']())['length'] && (k = '00' + k),
                    0x2 == k['length'] && (k = '0' + k),
                    l = '[' + (l += k) + ']';
                }
                ,
                h;
            }()));
            g['tags'] = 0x0,
            g['init'](),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LogRunTime.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var d, f, g, h, j, k, m, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['applyDecoratedDescriptor'],
            f = y['inheritsLoose'],
            g = y['initializerDefineProperty'],
            h = y['assertThisInitialized'];
        }
        , function(y) {
            j = y['cclegacy'],
            k = y['_decorator'],
            m = y['Node'],
            q = y['sys'],
            v = y['Widget'],
            w = y['director'],
            x = y['Component'];
        }
        ],
        'execute': function() {
            var z, A, B, D, E, F, G, H, I, J, K;
            j['_RF']['push']({}, 'dcd95lHwOJMl6kLfWwd9Lpy', 'LogRunTime', void 0x0);
            var M = k['ccclass']
              , N = k['property'];
            b('LogRunTime', (z = M('LogRunTime'),
            A = N({
                'type': [m],
                'displayName': '子视图'
            }),
            B = N(m),
            D = N(m),
            E = N(m),
            z((H = d((G = function(O) {
                function P() {
                    for (var R, S = arguments['length'], U = new Array(S), W = 0x0; W < S; W++)
                        U[W] = arguments[W];
                    return R = O['call']['apply'](O, [this]['concat'](U)) || this,
                    g(R, 'subViews', H, h(R)),
                    g(R, 'view', I, h(R)),
                    g(R, 'menuSwitch', J, h(R)),
                    g(R, 'vconsole', K, h(R)),
                    R;
                }
                f(P, O);
                var Q = P['prototype'];
                return Q['onLoad'] = function() {
                    !q['isNative'] || 'Android' !== q['os'] && 'iOS' !== q['os'] || (this['vconsole']['active'] = !0x0);
                }
                ,
                Q['onToggleSubView'] = function(R, S) {
                    R['isChecked'] ? null != S && (this['subViews'][parseInt(S) - 0x1]['active'] = !0x0) : null != S && (this['subViews'][parseInt(S) - 0x1]['active'] = !0x1);
                }
                ,
                Q['onToggleLogView'] = function(R, S) {
                    this['subViews']['forEach'](function(X) {
                        X['getComponent'](v)['left'] = R['isChecked'] ? 0x9d : 0x0;
                    });
                    for (var U = this['node']['getComponentsInChildren'](v), W = 0x0; W < U['length']; W++)
                        U[W]['updateAlignment']();
                    this['menuSwitch']['active'] = R['isChecked'];
                }
                ,
                Q['onClickClose'] = function() {
                    w['emit']('OnLogViewClose');
                }
                ,
                P;
            }(x))['prototype'], 'subViews', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return [];
                }
            }),
            I = d(G['prototype'], 'view', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            J = d(G['prototype'], 'menuSwitch', [D], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            K = d(G['prototype'], 'vconsole', [E], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            F = G)) || F)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LogView.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringBuilder.ts', './List.ts', './ListItem.ts', './LogData.ts'], function(j) {
    var k, q, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K;
    return {
        'setters': [function(M) {
            k = M['applyDecoratedDescriptor'],
            q = M['inheritsLoose'],
            v = M['initializerDefineProperty'],
            w = M['assertThisInitialized'];
        }
        , function(M) {
            x = M['cclegacy'],
            y = M['_decorator'],
            z = M['Color'],
            A = M['Node'],
            B = M['Label'],
            C = M['EditBox'],
            D = M['sys'],
            E = M['Sprite'],
            F = M['Component'];
        }
        , function(M) {
            G = M['StringBuilder'];
        }
        , function(M) {
            H = M['default'];
        }
        , function(M) {
            I = M['default'];
        }
        , function(M) {
            J = M['default'],
            K = M['LogType'];
        }
        ],
        'execute': function() {
            var M, P, Q, R, U, W, X, Y, Z, a0, a1, a2, a3, a4, a5;
            x['_RF']['push']({}, '71c48vQQLZHGq4iFXg/9aP0', 'LogView', void 0x0);
            var a6 = y['ccclass']
              , a7 = y['property']
              , a8 = new z()['fromHEX']('#2D2F32');
            j('LogView', (M = a6('LogView'),
            P = a7({
                'type': A
            }),
            Q = a7(B),
            R = a7(B),
            U = a7(B),
            W = a7(B),
            X = a7(C),
            M((a0 = k((Z = function(a9) {
                function aa() {
                    for (var ac, ad = arguments['length'], ae = new Array(ad), af = 0x0; af < ad; af++)
                        ae[af] = arguments[af];
                    return ac = a9['call']['apply'](a9, [this]['concat'](ae)) || this,
                    v(ac, 'listNode', a0, w(ac)),
                    v(ac, 'trace', a1, w(ac)),
                    v(ac, 'infoNumber', a2, w(ac)),
                    v(ac, 'warnNumber', a3, w(ac)),
                    v(ac, 'errorNumber', a4, w(ac)),
                    v(ac, 'searchBox', a5, w(ac)),
                    ac['_datas'] = void 0x0,
                    ac['list'] = null,
                    ac['isSelected'] = !0x1,
                    ac['isLogTime'] = !0x1,
                    ac;
                }
                q(aa, a9);
                var ab = aa['prototype'];
                return ab['onLoad'] = function() {
                    this['list'] = this['listNode']['getComponent'](H);
                }
                ,
                ab['onEnable'] = function() {
                    this['delayInitLogView']();
                }
                ,
                ab['onDisable'] = function() {}
                ,
                ab['delayInitLogView'] = function() {
                    this['scheduleOnce'](function() {
                        this['resetLogView']();
                    }, 0.3);
                }
                ,
                ab['onResize'] = function() {
                    this['delayInitLogView']();
                }
                ,
                ab['InitLogView'] = function() {
                    this['_datas'] = [],
                    this['isSelected'] = !0x1;
                }
                ,
                ab['ResetLogData'] = function() {
                    J['ResetLogData'](),
                    this['_datas'] = [],
                    this['isSelected'] = !0x1;
                }
                ,
                ab['ClearAllLogInfo'] = function() {
                    this['ResetLogData']();
                }
                ,
                ab['AddLogItem'] = function(ac) {
                    null != ac && null != this['_datas'] && (this['_datas']['push'](ac),
                    this['list']['numItems'] = this['_datas']['length'],
                    this['isSelected'] || this['list']['scrollTo'](this['_datas']['length'] - 0x1, 0x0),
                    this['unpdateLogNumber']());
                }
                ,
                ab['resetLogView'] = function() {
                    var ac = this;
                    this['isSelected'] = !0x1,
                    this['_datas'] = [],
                    this['list']['numItems'] = this['_datas']['length'],
                    J['all_logs']['forEach'](function(ad) {
                        (ad['LogType'] == K['info'] && J['isInfoOn'] || ad['LogType'] == K['error'] && J['isErrorOn'] || ad['LogType'] == K['warn'] && J['isWarnOn']) && ac['_datas']['push'](ad);
                    }),
                    this['list']['numItems'] = this['_datas']['length'],
                    this['unpdateLogNumber']();
                }
                ,
                ab['unpdateLogNumber'] = function() {
                    this['infoNumber']['string'] = J['log_info']['length']['toString'](),
                    this['errorNumber']['string'] = J['log_error']['length']['toString'](),
                    this['warnNumber']['string'] = J['log_warn']['length']['toString']();
                }
                ,
                ab['serachLog'] = function(ac) {
                    this['_datas'] = [],
                    this['list']['numItems'] = this['_datas']['length'];
                    for (var ad = 0x0; ad < J['all_logs']['length']; ad++) {
                        var ae = J['all_logs'][ad];
                        null != ae && (ae['LogType'] == K['info'] && J['isInfoOn'] || ae['LogType'] == K['error'] && J['isErrorOn'] ? -0x1 != ae['log']['indexOf'](ac) && this['_datas']['push'](ae) : ae['LogType'] == K['warn'] && J['isWarnOn'] && -0x1 != ae['log']['indexOf'](ac) && this['_datas']['push'](ae));
                    }
                    this['list']['numItems'] = this['_datas']['length'];
                }
                ,
                ab['onClickClearLog'] = function() {
                    this['ClearAllLogInfo'](),
                    this['_datas'] = [],
                    this['list']['numItems'] = this['_datas']['length'],
                    this['trace']['string'] = '',
                    this['unpdateLogNumber']();
                }
                ,
                ab['onClickToHead'] = function() {
                    this['list']['scrollTo'](0x0);
                }
                ,
                ab['onClickToFoot'] = function() {
                    this['list']['scrollTo'](this['_datas']['length'] - 0x1);
                }
                ,
                ab['copyToClipboard'] = function(ac) {
                    if (D['isBrowser'])
                        try {
                            navigator['clipboard']['writeText'](ac);
                        } catch (ad) {}
                }
                ,
                ab['onClickToCopyAll'] = function() {
                    var ac = new G();
                    J['all_logs']['forEach'](function(ad) {
                        ac['append'](ad['log']),
                        ac['append']('\x0a');
                    }),
                    this['copyToClipboard'](ac['toString']());
                }
                ,
                ab['onClickToCopy'] = function() {
                    this['copyToClipboard'](this['trace']['string']);
                }
                ,
                ab['onClickClose'] = function() {
                    this['node']['active'] = !0x1;
                }
                ,
                ab['onClickSearch'] = function() {
                    this['serachLog'](this['searchBox']['string']);
                }
                ,
                ab['onToggleLogInfo'] = function(ac) {
                    J['isInfoOn'] = ac['isChecked'],
                    this['resetLogView']();
                }
                ,
                ab['onToggleLogWarn'] = function(ac) {
                    J['isWarnOn'] = ac['isChecked'],
                    this['resetLogView']();
                }
                ,
                ab['onToggleLogError'] = function(ac) {
                    J['isErrorOn'] = ac['isChecked'],
                    this['resetLogView']();
                }
                ,
                ab['onToggleLogTime'] = function(ac) {
                    this['isLogTime'] = ac['isChecked'],
                    this['resetLogView']();
                }
                ,
                ab['onToggFilterAll'] = function(ac) {
                    ac['isChecked'] ? this['searchBox']['string'] = '' : this['resetLogView'](),
                    this['searchBox']['node']['active'] = ac['isChecked'];
                }
                ,
                ab['onListVRender'] = function(ac, ad) {
                    var ae = '';
                    this['isLogTime'] && (ae = this['_datas'][ad]['time'] + '\x20'),
                    -0x1 != this['_datas'][ad]['log']['indexOf']('\x0a') ? ac['getChildByName']('Label')['getComponent'](B)['string'] = '' + ae + this['_datas'][ad]['log']['substring'](0x0, this['_datas'][ad]['log']['indexOf']('\x0a')) : ac['getChildByName']('Label')['getComponent'](B)['string'] = '' + ae + this['_datas'][ad]['log'],
                    ac['getChildByName']('flag')['getComponent'](E)['color'] = this['_datas'][ad]['color'],
                    ac['getComponent'](E)['color'] = ad % 0x2 == 0x0 ? z['BLACK'] : a8;
                }
                ,
                ab['onListSelected'] = function(ac, ad, ae, af) {
                    ac && (ac['getComponent'](I)['list'],
                    (this['isSelected'] = !0x0,
                    this['trace']['string'] = this['_datas'][ad]['log'] + '\x0a' + this['_datas'][ad]['trace'],
                    this['trace']['color'] = this['_datas'][ad]['color']));
                }
                ,
                aa;
            }(F))['prototype'], 'listNode', [P], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = k(Z['prototype'], 'trace', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a2 = k(Z['prototype'], 'infoNumber', [R], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a3 = k(Z['prototype'], 'warnNumber', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a4 = k(Z['prototype'], 'errorNumber', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            a5 = k(Z['prototype'], 'searchBox', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            Y = Z)) || Y)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LogViewAdapter.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var d, f, g, h, j, k, m, q, u, v;
    return {
        'setters': [function(w) {
            d = w['applyDecoratedDescriptor'],
            f = w['inheritsLoose'],
            g = w['initializerDefineProperty'],
            h = w['assertThisInitialized'];
        }
        , function(w) {
            j = w['cclegacy'],
            k = w['_decorator'],
            m = w['Node'],
            q = w['view'],
            u = w['SafeArea'],
            v = w['Component'];
        }
        ],
        'execute': function() {
            var x, y, z, A, B;
            j['_RF']['push']({}, 'fbb4769WwNE6qAHheALqt0k', 'LogViewAdapter', void 0x0);
            var C = k['ccclass']
              , D = k['property'];
            b('LogViewAdapter', (x = C('LogViewAdapter'),
            y = D(m),
            x((B = d((A = function(E) {
                function F() {
                    for (var H, I = arguments['length'], J = new Array(I), K = 0x0; K < I; K++)
                        J[K] = arguments[K];
                    return H = E['call']['apply'](E, [this]['concat'](J)) || this,
                    g(H, 'viewBG', B, h(H)),
                    H;
                }
                f(F, E);
                var G = F['prototype'];
                return G['start'] = function() {
                    var H = q['getVisibleSize']();
                    this['node']['getComponent'](u)['enabled'] = H['width'] < H['height'];
                }
                ,
                G['onEnable'] = function() {
                    this['viewBG']['active'] = !0x0;
                }
                ,
                G['onDisable'] = function() {
                    this['viewBG']['active'] = !0x1;
                }
                ,
                F;
            }(v))['prototype'], 'viewBG', [y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            z = A)) || z)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LogViewRoot.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LogView.ts', './StringBuilder.ts', './LogData.ts'], function(b) {
    var j, k, q, x, z, B, D, E, F, G, H, I, J, K, M, N, O, P, Q, R, U, W, X, Y, Z;
    return {
        'setters': [function(a0) {
            j = a0['applyDecoratedDescriptor'],
            k = a0['inheritsLoose'],
            q = a0['initializerDefineProperty'],
            x = a0['assertThisInitialized'];
        }
        , function(a0) {
            z = a0['cclegacy'],
            B = a0['_decorator'],
            D = a0['Enum'],
            E = a0['Prefab'],
            F = a0['Vec2'],
            G = a0['director'],
            H = a0['Canvas'],
            I = a0['error'],
            J = a0['instantiate'],
            K = a0['Color'],
            M = a0['game'],
            N = a0['view'],
            O = a0['Rect'],
            P = a0['systemEvent'],
            Q = a0['SystemEvent'],
            R = a0['isValid'],
            U = a0['Component'];
        }
        , function(a0) {
            W = a0['LogView'];
        }
        , function(a0) {
            X = a0['StringBuilder'];
        }
        , function(a0) {
            Y = a0['default'],
            Z = a0['LogType'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab;
            z['_RF']['push']({}, 'f8cd2ZsdbVMK7f2cxVGMa/N', 'LogViewRoot', void 0x0);
            var ac = B['ccclass']
              , ad = B['property']
              , ae = function(ah) {
                return ah[ah['Circle'] = 0x1] = 'Circle',
                ah[ah['DoubleClick'] = 0x2] = 'DoubleClick',
                ah[ah['TrigleClick'] = 0x3] = 'TrigleClick',
                ah;
            }(ae || {})
              , af = function(ah) {
                return ah[ah['RightTop'] = 0x0] = 'RightTop',
                ah[ah['RightBottom'] = 0x1] = 'RightBottom',
                ah[ah['LeftTop'] = 0x2] = 'LeftTop',
                ah[ah['LeftBottom'] = 0x3] = 'LeftBottom',
                ah;
            }(af || {})
              , ag = 0x46;
            b('LogViewRoot', (a0 = ac('LogViewRoot'),
            a1 = ad({
                'displayName': '画圈的圈数(默认3圈)'
            }),
            a2 = ad({
                'displayName': '触发LogView（画圈，双击，三击）',
                'type': D(ae)
            }),
            a3 = ad({
                'displayName': '触发LogView点击区域',
                'type': D(af)
            }),
            a4 = ad(E),
            a0((a7 = j((a6 = function(ah) {
                function ai() {
                    for (var ak, al = arguments['length'], am = new Array(al), an = 0x0; an < al; an++)
                        am[an] = arguments[an];
                    return ak = ah['call']['apply'](ah, [this]['concat'](am)) || this,
                    q(ak, 'numOfCircleToShow', a7, x(ak)),
                    q(ak, 'showLogViewType', a8, x(ak)),
                    q(ak, 'clickAreaType', a9, x(ak)),
                    q(ak, 'viewPrefab', aa, x(ak)),
                    q(ak, 'isDebug', ab, x(ak)),
                    ak['gestureDetector'] = new Array(),
                    ak['gestureSum'] = F['ZERO'],
                    ak['gestureLength'] = 0x0,
                    ak['gestureCount'] = 0x0,
                    ak['isShowView'] = !0x1,
                    ak['StringBulider'] = void 0x0,
                    ak['origin_log'] = void 0x0,
                    ak['origin_info'] = void 0x0,
                    ak['origin_error'] = void 0x0,
                    ak['origin_warn'] = void 0x0,
                    ak['logViewComp'] = null,
                    ak['logViewUI'] = null,
                    ak['logView'] = null,
                    ak['TimeArr'] = new Array(),
                    ak['ClickAreaArray'] = new Array(),
                    ak;
                }
                k(ai, ah);
                var aj = ai['prototype'];
                return aj['InitLogView'] = function() {
                    if (null != this['viewPrefab']) {
                        var ak = G['getScene']()['getComponentInChildren'](H);
                        if (null == ak)
                            return void I('场景中没有Canvas节点');
                        var al = J(this['viewPrefab']);
                        al['active'] = !0x1,
                        ak['node']['addChild'](al),
                        this['logViewUI'] = al,
                        this['logView'] = al['getChildByName']('View')['getChildByName']('SubLogView'),
                        this['logViewComp'] = this['logView']['getComponent'](W),
                        al['setSiblingIndex'](0x98967f);
                    }
                    this['StringBulider'] = new X(),
                    Y['ResetLogData'](),
                    this['isDebug'] && (this['origin_log'] = console['log'],
                    this['origin_info'] = console['info'],
                    this['origin_error'] = console['error'],
                    this['origin_warn'] = console['warn'],
                    console['log'] = this['CallBackLog']['bind'](this),
                    console['info'] = this['CallBackLogInfo']['bind'](this),
                    console['error'] = this['CallBackLogError']['bind'](this),
                    console['warn'] = this['CallBackLogWarn']['bind'](this));
                }
                ,
                aj['stack'] = function(ak, al) {
                    var am, an = new Error(), ao = null == (am = an['stack']) ? void 0x0 : am['split']('\x0a');
                    null == ao || ao['shift']();
                    var ap = [];
                    null == ao || ao['forEach'](function(at) {
                        if (null != (at = at['substring'](0x7))) {
                            var au, av = at['split']('\x20');
                            if (av['length'] < 0x2)
                                ap['push'](av[0x0]);
                            else
                                ap['push'](((au = {})[av[0x0]] = av[0x1],
                                au));
                        }
                    });
                    var aq = [];
                    if (al < ap['length'] - 0x1) {
                        for (var ar in ap[al])
                            aq['push'](ar);
                    }
                    var as = aq[0x0]['split']('.');
                    return as[0x0] + '.ts->' + as[0x1] + ':\x20\x0a' + an['stack'];
                }
                ,
                aj['getDateString'] = function() {
                    var ak = new Date()
                      , al = ''
                      , am = String(ak['getFullYear']());
                    return al += (0x1 == (am = String(ak['getHours']()))['length'] ? '0' + am : am) + ':',
                    al += (0x1 == (am = String(ak['getMinutes']()))['length'] ? '0' + am : am) + ':',
                    al += (0x1 == (am = String(ak['getSeconds']()))['length'] ? '0' + am : am) + '-',
                    al = '[' + (al += (0x1 == (am = String(ak['getMilliseconds']()))['length'] ? '00' + am : 0x2 == am['length'] ? '0' + am : am) + '') + ']';
                }
                ,
                aj['CallBackLog'] = function() {
                    for (var ak = arguments['length'], al = new Array(ak), am = 0x0; am < ak; am++)
                        al[am] = arguments[am];
                    this['origin_log']['apply'](console, al);
                    var an = this['GetLogString'](Array['prototype']['slice']['apply'](al))
                      , ao = {
                        'LogType': Z['info'],
                        'color': new K()['fromHEX']('#57B3F4'),
                        'log': an,
                        'time': this['getDateString'](),
                        'trace': this['stack'](an, 0x2)
                    };
                    Y['isInfoOn'] && this['AddLogItem'](ao),
                    Y['log_info']['unshift'](ao);
                }
                ,
                aj['CallBackLogInfo'] = function() {
                    for (var ak = arguments['length'], al = new Array(ak), am = 0x0; am < ak; am++)
                        al[am] = arguments[am];
                    this['origin_info']['apply'](console, al);
                    var an = this['GetLogString'](Array['prototype']['slice']['apply'](arguments))
                      , ao = {
                        'LogType': Z['info'],
                        'color': new K()['fromHEX']('#57B3F4'),
                        'log': an,
                        'time': this['getDateString'](),
                        'trace': this['stack'](an, 0x2)
                    };
                    Y['isInfoOn'] && this['AddLogItem'](ao),
                    Y['log_info']['unshift'](ao);
                }
                ,
                aj['CallBackLogWarn'] = function() {
                    for (var ak = arguments['length'], al = new Array(ak), am = 0x0; am < ak; am++)
                        al[am] = arguments[am];
                    this['origin_warn']['apply'](console, al);
                    var an = this['GetLogString'](Array['prototype']['slice']['apply'](arguments))
                      , ao = {
                        'LogType': Z['warn'],
                        'color': new K()['fromHEX']('#F4C257'),
                        'log': an,
                        'time': this['getDateString'](),
                        'trace': this['stack'](an, 0x2)
                    };
                    Y['isWarnOn'] && this['AddLogItem'](ao),
                    Y['log_warn']['unshift'](ao);
                }
                ,
                aj['CallBackLogError'] = function() {
                    for (var ak = arguments['length'], al = new Array(ak), am = 0x0; am < ak; am++)
                        al[am] = arguments[am];
                    this['origin_error']['apply'](console, al);
                    var an = this['GetLogString'](Array['prototype']['slice']['apply'](arguments))
                      , ao = {
                        'LogType': Z['error'],
                        'color': new K()['fromHEX']('#F45B57'),
                        'log': an,
                        'time': this['getDateString'](),
                        'trace': this['stack'](an, 0x2)
                    };
                    Y['isErrorOn'] && this['AddLogItem'](ao),
                    Y['log_error']['unshift'](ao);
                }
                ,
                aj['AddLogItem'] = function(ak) {
                    null != ak && (Y['all_logs']['push'](ak),
                    null != this['logView'] && this['logView']['activeInHierarchy'] && (null == this['logViewComp'] && (this['logViewComp'] = this['logView']['getComponent'](W)),
                    this['logViewComp']['AddLogItem'](ak)));
                }
                ,
                aj['GetLogString'] = function(ak) {
                    var al = ak['length'];
                    if (0x0 == al)
                        return '';
                    for (var am = 0x0; am < al; am++)
                        this['StringBulider']['append'](ak[am]);
                    var an = this['StringBulider']['toString']();
                    return this['StringBulider']['clear'](),
                    an;
                }
                ,
                aj['init'] = function() {
                    M['addPersistRootNode'](this['node']);
                    var ak = N['getDesignResolutionSize']()
                      , al = new O(ak['width'] - ag,ak['height'] - ag,ag,ag)
                      , am = new O(ak['width'] - ag,0x0,ag,ag)
                      , an = new O(0x0,ak['height'] - ag,ag,ag)
                      , ao = new O(0x0,0x0,ag,ag);
                    this['ClickAreaArray']['push'](al),
                    this['ClickAreaArray']['push'](am),
                    this['ClickAreaArray']['push'](an),
                    this['ClickAreaArray']['push'](ao),
                    this['InitLogView'](),
                    P['on'](Q['EventType']['TOUCH_START'], this['onTouchStart'], this),
                    P['on'](Q['EventType']['TOUCH_MOVE'], this['onTouchMove'], this),
                    P['on'](Q['EventType']['TOUCH_END'], this['onTouchEnd'], this),
                    G['on']('OnLogViewClose', this['onLogViewClose'], this);
                }
                ,
                aj['onLogViewClose'] = function() {
                    this['logViewUI']['active'] = !0x1,
                    this['isShowView'] = !0x1;
                }
                ,
                aj['onDestroy'] = function() {
                    P['off'](Q['EventType']['TOUCH_START'], this['onTouchStart'], this),
                    P['off'](Q['EventType']['TOUCH_MOVE'], this['onTouchMove'], this),
                    P['off'](Q['EventType']['TOUCH_END'], this['onTouchEnd'], this),
                    G['off']('OnLogViewClose', this['onLogViewClose'], this);
                }
                ,
                aj['showLogView'] = function() {
                    if (!R(this['logViewUI'])) {
                        var ak = G['getScene']()['getComponentInChildren'](H);
                        if (null == ak)
                            return void I('场景中没有Canvas节点');
                        var al = J(this['viewPrefab']);
                        al['active'] = !0x1,
                        ak['node']['addChild'](al),
                        this['logViewUI'] = al,
                        this['logView'] = al['getChildByName']('View')['getChildByName']('SubLogView'),
                        this['logViewComp'] = this['logView']['getComponent'](W),
                        al['setSiblingIndex'](0x98967f);
                    }
                    this['logViewUI']['active'] = !0x0,
                    this['logViewUI']['setSiblingIndex'](0x98967f),
                    this['isShowView'] = !0x0;
                }
                ,
                aj['onTouchStart'] = function(ak, al) {
                    if (this['showLogViewType'] == ae['Circle'])
                        this['gestureDetector']['push'](al['getLocation']());
                    else {
                        if (this['showLogViewType'] == ae['DoubleClick'] || this['showLogViewType'] == ae['TrigleClick']) {
                            var am = new Date()['getTime']();
                            this['TimeArr']['length'] > 0x0 && (am - this['TimeArr'][this['TimeArr']['length'] - 0x1]) / 0x3e8 > 0x1 ? this['TimeArr'] = [] : this['TimeArr']['push'](am);
                        }
                    }
                }
                ,
                aj['onTouchMove'] = function(ak, al) {
                    if (this['showLogViewType'] == ae['Circle']) {
                        var am = al['getLocation']()
                          , an = this['gestureDetector'][this['gestureDetector']['length'] - 0x1];
                        if (an) {
                            var ao = new F(am['x'] - an['x'],am['y'] - an['y']);
                            (0x0 == this['gestureDetector']['length'] || ao['length']() > 0xa) && this['gestureDetector']['push'](am),
                            !this['isShowView'] && this['isGestureDone']() && this['showLogView']();
                        } else
                            this['gestureDetector']['push'](am);
                    }
                }
                ,
                aj['onTouchEnd'] = function(ak, al) {
                    if (this['showLogViewType'] == ae['Circle'])
                        this['gestureDetector'] = [],
                        this['gestureCount'] = 0x0;
                    else {
                        if (this['showLogViewType'] == ae['DoubleClick'] || this['showLogViewType'] == ae['TrigleClick']) {
                            var am = al['getLocation']();
                            this['ClickAreaArray'][this['clickAreaType']]['contains'](am) && this['TimeArr']['length'] == this['showLogViewType'] && (this['TimeArr'] = [],
                            this['showLogView']());
                        }
                    }
                }
                ,
                aj['isGestureDone'] = function() {
                    if (this['gestureDetector']['length'] < 0xa)
                        return !0x1;
                    this['gestureSum'] = new F(0x0,0x0),
                    this['gestureLength'] = 0x0;
                    for (var ak = F['ZERO'], al = 0x0; al < this['gestureDetector']['length'] - 0x2; al++) {
                        var am = new F(this['gestureDetector'][al + 0x1]['x'] - this['gestureDetector'][al]['x'],this['gestureDetector'][al + 0x1]['y'] - this['gestureDetector'][al]['y'])
                          , an = am['length']();
                        if (this['gestureSum']['add'](am),
                        this['gestureLength'] += an,
                        am['dot'](ak) < 0x0)
                            return this['gestureDetector'] = [],
                            this['gestureCount'] = 0x0,
                            !0x1;
                        ak = am;
                    }
                    var ao = N['getVisibleSize']()
                      , ap = (ao['width'] + ao['height']) / 0x4;
                    return this['gestureLength'] > ap && this['gestureSum']['length']() < ap / 0x2 ? (this['gestureDetector'] = [],
                    this['gestureCount']++,
                    this['gestureCount'] >= this['numOfCircleToShow']['valueOf']()) : void 0x0;
                }
                ,
                ai;
            }(U))['prototype'], 'numOfCircleToShow', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x3;
                }
            }),
            a8 = j(a6['prototype'], 'showLogViewType', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return ae['Circle'];
                }
            }),
            a9 = j(a6['prototype'], 'clickAreaType', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return af['LeftBottom'];
                }
            }),
            aa = j(a6['prototype'], 'viewPrefab', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ab = j(a6['prototype'], 'isDebug', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            a5 = a6)) || a5)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/main', ['./debug-view-runtime-control.ts', './BaseNativeFun.ts', './DownGameTask.ts', './MySafeArea.ts', './VersionManager.ts', './BaseCustomEventDefine.ts', './BaseGameUIConfig.ts', './BaseStorageConfig.ts', './webHttp.ts', './gLoading.ts', './gMessageBox.ts', './gNetInstable.ts', './gameLoading.ts', './appConfig.ts', './baseUtils.ts', './gEntity.ts', './List.ts', './ListItem.ts', './LogData.ts', './LogRunTime.ts', './LogView.ts', './LogViewAdapter.ts', './LogViewRoot.ts', './ProfilerView.ts', './StringBuilder.ts', './SystemView.ts', './panelUpdate.ts', './Oops.ts', './Root.ts', './AudioEffect.ts', './AudioManager.ts', './AudioMusic.ts', './EventDispatcher.ts', './EventMessage.ts', './MessageManager.ts', './ResLoader.ts', './Logger.ts', './RandomManager.ts', './StorageManager.ts', './Timer.ts', './TimerManager.ts', './GameCollision.ts', './GameComponent.ts', './GameManager.ts', './GUI.ts', './Defines.ts', './DelegateComponent.ts', './LayerDialog.ts', './LayerManager.ts', './LayerNotify.ts', './LayerPopup.ts', './LayerUI.ts', './UIMap.ts', './CommonPrompt.ts', './LoadingIndicator.ts', './Notify.ts', './ArrayUtil.ts', './CameraUtil.ts', './EncryptUtil.ts', './ImageUtil.ts', './JsonUtil.ts', './LayerUtil.ts', './MathUtil.ts', './ObjectUtil.ts', './PhysicsUtil.ts', './PlatformUtil.ts', './RegexUtil.ts', './RotateUtil.ts', './StringUtil.ts', './Vec3Util.ts', './ViewUtil.ts', './AsyncQueue.ts', './Collection.ts', './Badge.ts', './RoundRectMask.ts', './ButtonEffect.ts', './ButtonSimple.ts', './ButtonTouchLong.ts', './LabelChange.ts', './LabelNumber.ts', './LabelTime.ts', './Language.ts', './LanguageData.ts', './LanguageLabel.ts', './LanguagePack.ts', './LanguageSprite.ts', './HttpRequest.ts', './NetInterface.ts', './NetManager.ts', './NetNode.ts', './NetProtocolPako.ts', './NetProtocolProtobuf.ts', './WebSock.ts', './BuildTimeConstants.ts', './Config.ts', './GameConfig.ts', './GameQueryConfig.ts'], function() {
    return {
        'setters': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        'execute': function() {}
    };
}),
System['register']('chunks:///_virtual/MathUtil.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '8c615ZS4PRMPKPA9ZqKjiJC', 'MathUtil', void 0x0);
            var c = a('MathUtil', (function() {
                function d() {}
                return d['sign'] = function(e) {
                    return e > 0x0 ? 0x1 : e < 0x0 ? -0x1 : 0x0;
                }
                ,
                d['progress'] = function(e, f, g) {
                    return e + (f - e) * g;
                }
                ,
                d['lerp'] = function(e, f, g) {
                    return g > 0x1 ? g = 0x1 : g < 0x0 && (g = 0x0),
                    e * (0x1 - g) + f * g;
                }
                ,
                d['lerpAngle'] = function(f, g, h) {
                    var i = (g %= 0x168) - (f %= 0x168);
                    return i > 0xb4 ? g = f - (0x168 - i) : i < -0xb4 && (g = f + (0x168 + i)),
                    (d['lerp'](f, g, h) % 0x168 + 0x168) % 0x168;
                }
                ,
                d['angleTowards'] = function(f, g, h) {
                    var i = (g %= 0x168) - (f %= 0x168);
                    i > 0xb4 ? g = f - (0x168 - i) : i < -0xb4 && (g = f + (0x168 + i));
                    var j = g - f;
                    return h > Math['abs'](j) ? g : ((f + h * Math['sign'](j)) % 0x168 + 0x168) % 0x168;
                }
                ,
                d['clamp'] = function(e, f, g) {
                    return e < f ? f : e > g ? g : e;
                }
                ,
                d['probability'] = function(e) {
                    return Math['random']() < e;
                }
                ,
                d;
            }()));
            c['deg2Rad'] = Math['PI'] / 0xb4,
            c['rad2Deg'] = 0xb4 / Math['PI'],
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/MessageManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['createForOfIteratorHelperLoose'];
        }
        , function(g) {
            c = g['cclegacy'],
            d = g['warn'],
            f = g['log'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'a401fY+wj9NsqOACoZ7Zy/R', 'MessageManager', void 0x0);
            var g = function() {
                this['event'] = void 0x0,
                this['listener'] = void 0x0,
                this['object'] = void 0x0;
            }
              , h = (a('MessageEventData', (function() {
                function j() {
                    this['events'] = {};
                }
                var k = j['prototype'];
                return k['on'] = function(l, m, p) {
                    var q = this['events'][l];
                    null == q && (q = [],
                    this['events'][l] = q);
                    var u = new g();
                    u['event'] = l,
                    u['listener'] = m,
                    u['object'] = p,
                    q['push'](u),
                    h['Instance']['on'](l, m, p);
                }
                ,
                k['off'] = function(l) {
                    var m = this['events'][l];
                    if (m) {
                        for (var p, q = b(m); !(p = q())['done']; ) {
                            var u = p['value'];
                            h['Instance']['off'](l, u['listener'], u['object']);
                        }
                        delete this['events'][l];
                    }
                }
                ,
                k['dispatchEvent'] = function(l, m) {
                    void 0x0 === m && (m = null),
                    h['Instance']['dispatchEvent'](l, m);
                }
                ,
                k['clear'] = function() {
                    for (var l in this['events'])
                        this['off'](l);
                }
                ,
                j;
            }())),
            a('MessageManager', (function() {
                function j() {
                    this['events'] = {};
                }
                var k = j['prototype'];
                return k['on'] = function(l, m, p) {
                    if (l && m) {
                        var q = this['events'][l];
                        null == q && (q = [],
                        this['events'][l] = q);
                        for (var u = q['length'], w = 0x0; w < u; w++) {
                            var x = q[w];
                            if (x['listener'] == m && x['object'] == p)
                                return void d('名为【' + l + '】的事件重复注册侦听器');
                        }
                        var y = new g();
                        y['event'] = l,
                        y['listener'] = m,
                        y['object'] = p,
                        q['push'](y);
                    } else
                        d('注册【' + l + '】事件的侦听器函数为空');
                }
                ,
                k['once'] = function(l, m, p) {
                    var q = this
                      , u = function(v, w) {
                        q['off'](l, u, p),
                        u = null,
                        m['call'](p, v, w);
                    };
                    this['on'](l, u, p);
                }
                ,
                k['off'] = function(l, m, p) {
                    var q = this['events'][l];
                    if (q) {
                        for (var u = q['length'], v = 0x0; v < u; v++) {
                            var w = q[v];
                            if (w['listener'] == m && w['object'] == p) {
                                q['splice'](v, 0x1);
                                break;
                            }
                        }
                        0x0 == q['length'] && delete this['events'][l];
                    } else
                        f('名为【' + l + '】的事件不存在');
                }
                ,
                k['dispatchEvent'] = function(l) {
                    var m = this['events'][l];
                    if (null != m) {
                        for (var p = m['concat'](), q = p['length'], u = arguments['length'], w = new Array(u > 0x1 ? u - 0x1 : 0x0), x = 0x1; x < u; x++)
                            w[x - 0x1] = arguments[x];
                        for (var y = 0x0; y < q; y++) {
                            var z, A = p[y];
                            (z = A['listener'])['call']['apply'](z, [A['object'], l]['concat'](w));
                        }
                    }
                }
                ,
                j;
            }())));
            h['Instance'] = new h(),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/MySafeArea.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g, h;
    return {
        'setters': [function(i) {
            c = i['inheritsLoose'];
        }
        , function(i) {
            d = i['cclegacy'],
            f = i['_decorator'],
            g = i['sys'],
            h = i['SafeArea'];
        }
        ],
        'execute': function() {
            var i;
            d['_RF']['push']({}, '8b0fbP9/XVFHLdEn8+NBEqO', 'MySafeArea', void 0x0);
            var j = f['ccclass'];
            f['property'],
            b('MySafeArea', j('MySafeArea')(i = function(k) {
                function l() {
                    return k['apply'](this, arguments) || this;
                }
                return c(l, k),
                l['prototype']['updateArea'] = function() {
                    g['isNative'] && g['platform'] == g['Platform']['IOS'] && k['prototype']['updateArea']['call'](this);
                }
                ,
                l;
            }(h)) || i),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/NetInterface.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, 'd9f8b+CV69FyKwnUdCjOtad', 'NetInterface', void 0x0),
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/NetManager.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'd8cd5el6GBGTYTW+N8b8EuJ', 'NetManager', void 0x0),
            a('NetManager', (function() {
                function c() {
                    this['_channels'] = {};
                }
                c['getInstance'] = function() {
                    return this['_instance'] || (this['_instance'] = new c()),
                    this['_instance'];
                }
                ;
                var d = c['prototype'];
                return d['setNetNode'] = function(f, g) {
                    void 0x0 === g && (g = 0x0),
                    this['_channels'][g] = f;
                }
                ,
                d['getNetNode'] = function(f) {
                    return this['_channels'][f];
                }
                ,
                d['removeNetNode'] = function(f) {
                    delete this['_channels'][f];
                }
                ,
                d['connect'] = function(f, g) {
                    return void 0x0 === g && (g = 0x0),
                    !!this['_channels'][g] && this['_channels'][g]['connect'](f);
                }
                ,
                d['send'] = function(f, g, h) {
                    void 0x0 === g && (g = !0x1),
                    void 0x0 === h && (h = 0x0);
                    var j = this['_channels'][h];
                    return j ? j['send'](f, g) : -0x1;
                }
                ,
                d['request'] = function(f, g, h, j, k) {
                    void 0x0 === h && (h = !0x0),
                    void 0x0 === j && (j = !0x1),
                    void 0x0 === k && (k = 0x0);
                    var l = this['_channels'][k];
                    l && l['request'](f, g, h, j);
                }
                ,
                d['requestUnique'] = function(f, g, h, j, k) {
                    void 0x0 === h && (h = !0x0),
                    void 0x0 === j && (j = !0x1),
                    void 0x0 === k && (k = 0x0);
                    var l = this['_channels'][k];
                    return !!l && l['requestUnique'](f, g, h, j);
                }
                ,
                d['close'] = function(f, g, h) {
                    if (void 0x0 === h && (h = 0x0),
                    this['_channels'][h])
                        return this['_channels'][h]['closeSocket'](f, g);
                }
                ,
                c;
            }()))['_instance'] = void 0x0,
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/NetNode.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Logger.ts'], function(a) {
    var b, c, d, f, g;
    return {
        'setters': [function(h) {
            b = h['createForOfIteratorHelperLoose'];
        }
        , function(h) {
            c = h['cclegacy'],
            d = h['error'],
            f = h['warn'];
        }
        , function(h) {
            g = h['Logger'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '57f0fB90kNBUJ98yyu+jxjx', 'NetNode', void 0x0);
            var h = ['已关闭', '连接中', '验证中', '可传输数据']
              , j = a('NetTipsType', function(m) {
                return m[m['Connecting'] = 0x0] = 'Connecting',
                m[m['ReConnecting'] = 0x1] = 'ReConnecting',
                m[m['Requesting'] = 0x2] = 'Requesting',
                m;
            }({}))
              , k = a('NetNodeState', function(m) {
                return m[m['Closed'] = 0x0] = 'Closed',
                m[m['Connecting'] = 0x1] = 'Connecting',
                m[m['Checking'] = 0x2] = 'Checking',
                m[m['Working'] = 0x3] = 'Working',
                m;
            }({}));
            a('NetNode', (function() {
                function m() {
                    this['_connectOptions'] = null,
                    this['_autoReconnect'] = 0x0,
                    this['_isSocketInit'] = !0x1,
                    this['_isSocketOpen'] = !0x1,
                    this['_state'] = k['Closed'],
                    this['_socket'] = null,
                    this['_networkTips'] = null,
                    this['_protocolHelper'] = null,
                    this['_connectedCallback'] = null,
                    this['_disconnectCallback'] = null,
                    this['_callbackExecuter'] = null,
                    this['_keepAliveTimer'] = null,
                    this['_receiveMsgTimer'] = null,
                    this['_reconnectTimer'] = null,
                    this['_heartTime'] = 0x2710,
                    this['_receiveTime'] = 0x5b8d80,
                    this['_reconnetTimeOut'] = 0x7a1200,
                    this['_requests'] = Array(),
                    this['_listener'] = {};
                }
                var p = m['prototype'];
                return p['init'] = function(q, u, v, w) {
                    void 0x0 === v && (v = null),
                    void 0x0 === w && (w = null),
                    g['logNet']('netnode\x20init'),
                    this['_socket'] = q,
                    this['_protocolHelper'] = u,
                    this['_networkTips'] = v,
                    this['_callbackExecuter'] = w || function(x, y) {
                        x['callback']['call'](x['target'], y);
                    }
                    ;
                }
                ,
                p['ready4Connected'] = function() {
                    return this['_state'] == k['Closed'];
                }
                ,
                p['connect'] = function(q) {
                    return !(!this['_socket'] || this['_state'] != k['Closed']) && (this['_isSocketInit'] || this['initSocket'](),
                    this['_state'] = k['Connecting'],
                    this['_socket']['connect'](q) ? (null == this['_connectOptions'] && 'number' == typeof q['autoReconnect'] && (this['_autoReconnect'] = q['autoReconnect']),
                    this['_connectOptions'] = q,
                    this['updateNetTips'](j['Connecting'], !0x0),
                    !0x0) : (this['updateNetTips'](j['Connecting'], !0x1),
                    !0x1));
                }
                ,
                p['initSocket'] = function() {
                    var q = this;
                    this['_socket'] && (this['_socket']['onConnected'] = function(u) {
                        q['onConnected'](u);
                    }
                    ,
                    this['_socket']['onMessage'] = function(u) {
                        q['onMessage'](u);
                    }
                    ,
                    this['_socket']['onError'] = function(u) {
                        q['onError'](u);
                    }
                    ,
                    this['_socket']['onClosed'] = function(u) {
                        q['onClosed'](u);
                    }
                    ,
                    this['_isSocketInit'] = !0x0);
                }
                ,
                p['updateNetTips'] = function(q, u) {
                    this['_networkTips'] && (q == j['Requesting'] ? this['_networkTips']['requestTips'](u) : q == j['Connecting'] ? this['_networkTips']['connectTips'](u) : q == j['ReConnecting'] && this['_networkTips']['reconnectTips'](u));
                }
                ,
                p['onConnected'] = function(q) {
                    var u = this;
                    this['clearTimer'](),
                    this['_autoReconnect'] = this['_connectOptions']['autoReconnect'],
                    g['logNet']('网络已连接'),
                    this['_isSocketOpen'] = !0x0,
                    null !== this['_connectedCallback'] ? (this['_state'] = k['Checking'],
                    this['_connectedCallback'](function() {
                        u['onChecked']();
                    })) : this['onChecked'](),
                    g['logNet']('网络已连接当前状态为【' + h[this['_state']] + '】');
                }
                ,
                p['onChecked'] = function() {
                    g['logNet']('连接验证成功，进入工作状态'),
                    this['_state'] = k['Working'],
                    this['updateNetTips'](j['Connecting'], !0x1),
                    this['updateNetTips'](j['ReConnecting'], !0x1);
                    var q = this['_requests']['concat']();
                    if (q['length'] > 0x0) {
                        g['logNet']('请求【' + this['_requests']['length'] + '】个待发送的信息');
                        for (var u = 0x0; u < q['length']; ) {
                            var v = q[u];
                            g['logNet']('send\x20req\x20' + v['rspCmd']),
                            this['_socket']['send'](v['buffer']),
                            null == v['rspObject'] || '' != v['rspCmd'] ? q['splice'](u, 0x1) : ++u;
                        }
                        this['updateNetTips'](j['Requesting'], this['_requests']['length'] > 0x0);
                    }
                }
                ,
                p['onMessage'] = function(q) {
                    var v = JSON['parse'](q);
                    if (this['_protocolHelper']['checkResponsePackage'](v)) {
                        this['_protocolHelper']['handlerResponsePackage'](v) || this['_networkTips'] && this['_networkTips']['responseErrorCode'](v['code']),
                        this['resetReceiveMsgTimer'](),
                        this['resetHearbeatTimer']();
                        var w = this['_protocolHelper']['getPackageId'](v);
                        if (g['logNet']('接受到命令【' + w + '】的消息'),
                        this['_requests']['length'] > 0x0) {
                            for (var x in this['_requests']) {
                                var y = this['_requests'][x];
                                if (y['rspCmd'] == w && y['rspObject']) {
                                    g['logNet']('触发请求命令【' + w + '】的回调'),
                                    this['_callbackExecuter'](y['rspObject'], v['data']),
                                    this['_requests']['splice'](parseInt(x), 0x1);
                                    break;
                                }
                            }
                            0x0 == this['_requests']['length'] ? this['updateNetTips'](j['Requesting'], !0x1) : g['logNet']('请求队列中还有【' + this['_requests']['length'] + '】个请求在等待');
                        }
                        var z = this['_listener'][w];
                        if (null != z)
                            for (var A, B = b(z); !(A = B())['done']; ) {
                                var C = A['value'];
                                g['logNet']('触发监听命令【' + w + '】的回调'),
                                this['_callbackExecuter'](C, v['data']);
                            }
                    } else
                        d('校验接受消息数据异常');
                }
                ,
                p['onError'] = function(q) {
                    d(q);
                }
                ,
                p['onClosed'] = function(q) {
                    var u = this;
                    if (this['clearTimer'](),
                    this['_disconnectCallback'] && !this['_disconnectCallback']())
                        return g['logNet']('socket\x20close'),
                        void (this['_state'] = k['Closed']);
                    this['isAutoReconnect']() ? (this['updateNetTips'](j['ReConnecting'], !0x0),
                    this['_reconnectTimer'] = setTimeout(function() {
                        u['_socket']['close'](),
                        u['_state'] = k['Closed'],
                        u['connect'](u['_connectOptions']),
                        u['_autoReconnect'] > 0x0 && (u['_autoReconnect'] -= 0x1);
                    }, this['_reconnetTimeOut'])) : this['_state'] = k['Closed'];
                }
                ,
                p['close'] = function(q, u) {
                    this['clearTimer'](),
                    this['_listener'] = {},
                    this['_requests']['length'] = 0x0,
                    this['_networkTips'] && (this['_networkTips']['connectTips'](!0x1),
                    this['_networkTips']['reconnectTips'](!0x1),
                    this['_networkTips']['requestTips'](!0x1)),
                    this['_socket'] ? this['_socket']['close'](q, u) : this['_state'] = k['Closed'];
                }
                ,
                p['closeSocket'] = function(q, u) {
                    this['_socket'] && this['_socket']['close'](q, u);
                }
                ,
                p['send'] = function(q, u) {
                    return void 0x0 === u && (u = !0x1),
                    this['_state'] == k['Working'] || u ? this['_socket']['send'](q) : this['_state'] == k['Checking'] || this['_state'] == k['Connecting'] ? (this['_requests']['push']({
                        'buffer': q,
                        'rspCmd': '',
                        'rspObject': null
                    }),
                    g['logNet']('当前状态为【' + h[this['_state']] + '】,繁忙并缓冲发送数据'),
                    0x0) : (d('当前状态为【' + h[this['_state']] + '】,请求错误'),
                    -0x1);
                }
                ,
                p['request'] = function(q, u, v, w) {
                    void 0x0 === v && (v = !0x0),
                    void 0x0 === w && (w = !0x1);
                    var x = this['_protocolHelper']['handlerRequestPackage'](q)['toString']();
                    this['base_request'](q, x, u, v, w);
                }
                ,
                p['requestUnique'] = function(q, u, v, w) {
                    void 0x0 === v && (v = !0x0),
                    void 0x0 === w && (w = !0x1);
                    for (var x = this['_protocolHelper']['handlerRequestPackage'](q), y = 0x0; y < this['_requests']['length']; ++y)
                        if (this['_requests'][y]['rspCmd'] == x)
                            return g['logNet']('命令【' + x + '】重复请求'),
                            !0x1;
                    return this['base_request'](q, x, u, v, w),
                    !0x0;
                }
                ,
                p['base_request'] = function(q, u, v, w, x) {
                    void 0x0 === w && (w = !0x0),
                    void 0x0 === x && (x = !0x1);
                    var y = JSON['stringify'](q);
                    (this['_state'] == k['Working'] || x) && this['_socket']['send'](y),
                    g['logNet']('队列命令为【' + u + '】的请求，等待请求数据的回调'),
                    this['_requests']['push']({
                        'buffer': y,
                        'rspCmd': u,
                        'rspObject': v
                    }),
                    w && this['updateNetTips'](j['Requesting'], !0x0);
                }
                ,
                p['setResponeHandler'] = function(q, u, v) {
                    return null == u ? (d('命令为【' + q + '】设置响应处理程序错误'),
                    !0x1) : (this['_listener'][q] = [{
                        'target': v,
                        'callback': u
                    }],
                    !0x0);
                }
                ,
                p['addResponeHandler'] = function(q, u, v) {
                    if (null == u)
                        return d('命令为【' + q + '】添加响应处理程序错误'),
                        !0x1;
                    var w = {
                        'target': v,
                        'callback': u
                    };
                    return null == this['_listener'][q] ? this['_listener'][q] = [w] : -0x1 == this['getNetListenersIndex'](q, w) && this['_listener'][q]['push'](w),
                    !0x0;
                }
                ,
                p['removeResponeHandler'] = function(q, u, v) {
                    if (null != this['_listener'][q] && null != u) {
                        var w = this['getNetListenersIndex'](q, {
                            'target': v,
                            'callback': u
                        });
                        -0x1 != w && this['_listener'][q]['splice'](w, 0x1);
                    }
                }
                ,
                p['cleanListeners'] = function(q) {
                    void 0x0 === q && (q = ''),
                    '' == q ? this['_listener'] = {} : delete this['_listener'][q];
                }
                ,
                p['getNetListenersIndex'] = function(q, u) {
                    for (var v = -0x1, w = 0x0; w < this['_listener'][q]['length']; w++) {
                        var x = this['_listener'][q][w];
                        if (x['callback'] == u['callback'] && x['target'] == u['target']) {
                            v = w;
                            break;
                        }
                    }
                    return v;
                }
                ,
                p['resetReceiveMsgTimer'] = function() {
                    var q = this;
                    null !== this['_receiveMsgTimer'] && clearTimeout(this['_receiveMsgTimer']),
                    this['_receiveMsgTimer'] = setTimeout(function() {
                        f('接收消息定时器关闭网络连接'),
                        q['_socket']['close']();
                    }, this['_receiveTime']);
                }
                ,
                p['resetHearbeatTimer'] = function() {
                    var q = this;
                    null !== this['_keepAliveTimer'] && clearTimeout(this['_keepAliveTimer']),
                    this['_keepAliveTimer'] = setTimeout(function() {
                        g['logNet']('网络节点保持活跃发送心跳信息'),
                        q['send'](q['_protocolHelper']['getHearbeat']());
                    }, this['_heartTime']);
                }
                ,
                p['clearTimer'] = function() {
                    g['logNet']('clearTimer'),
                    null !== this['_receiveMsgTimer'] && clearTimeout(this['_receiveMsgTimer']),
                    null !== this['_keepAliveTimer'] && clearTimeout(this['_keepAliveTimer']),
                    null !== this['_reconnectTimer'] && clearTimeout(this['_reconnectTimer']);
                }
                ,
                p['isAutoReconnect'] = function() {
                    return 0x0 != this['_autoReconnect'];
                }
                ,
                p['rejectReconnect'] = function() {
                    this['_autoReconnect'] = 0x0,
                    this['clearTimer']();
                }
                ,
                m;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/NetProtocolPako.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '88ae0lIg5BFWb1O1E8/Etwi', 'NetProtocolPako', void 0x0),
            a('NetProtocolPako', (function() {
                function c() {}
                var d = c['prototype'];
                return d['getHeadData'] = function(f) {
                    throw new Error('Method\x20not\x20implemented.');
                }
                ,
                d['getHeadlen'] = function() {
                    return 0x0;
                }
                ,
                d['getHearbeat'] = function() {
                    return '';
                }
                ,
                d['getPackageLen'] = function(f) {
                    return f['toString']()['length'];
                }
                ,
                d['checkResponsePackage'] = function(f) {
                    return !0x0;
                }
                ,
                d['handlerResponsePackage'] = function(f) {
                    return 0x1 == f['code'] && (f['isCompress'] && (f['data'] = (g = f['data'],
                    h = g['split']('')['map'](function(j) {
                        return j['charCodeAt'](0x0);
                    }),
                    i = new Uint8Array(h),
                    pako['inflate'](i, {
                        'to': 'string'
                    }))),
                    f['data'] = JSON['parse'](f['data']),
                    !0x0);
                    var g, h, i;
                }
                ,
                d['handlerRequestPackage'] = function(f) {
                    var g, h = f['action'] + '_' + f['method'];
                    return f['callback'] = h,
                    f['isCompress'] && (f['data'] = (g = f['data'],
                    pako['gzip'](g, {
                        'to': 'string'
                    }))),
                    h;
                }
                ,
                d['getPackageId'] = function(f) {
                    return f['callback'];
                }
                ,
                c;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/NetProtocolProtobuf.ts', ['cc', './index.mjs_cjs=&original=.js', './index.js'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'];
        }
        , null, function(d) {
            c = d['default'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '5714auyGttOSrOXeVsvIAUz', 'NetProtocolProtobuf', void 0x0),
            (c['Buffer'],
            a('NetProtocolProtobuf', (function() {
                function d() {}
                var f = d['prototype'];
                return f['getHeadData'] = function(g) {
                    throw new Error('Method\x20not\x20implemented.');
                }
                ,
                f['getHeadlen'] = function() {
                    return 0x0;
                }
                ,
                f['getHearbeat'] = function() {
                    return '';
                }
                ,
                f['getPackageLen'] = function(g) {
                    return g['toString']()['length'];
                }
                ,
                f['checkResponsePackage'] = function(g) {
                    return !0x0;
                }
                ,
                f['handlerResponsePackage'] = function(g) {
                    return '';
                }
                ,
                f['handlerRequestPackage'] = function(g) {
                    return 'data';
                }
                ,
                f['getPackageId'] = function(g) {
                    return 'CMD_' + g['header']['bMainID'] + '_' + g['header']['bAssistantID'];
                }
                ,
                d;
            }()))),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Notify.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LanguageLabel.ts'], function(b) {
    var d, f, g, h, j, k, m, p, q, v;
    return {
        'setters': [function(w) {
            d = w['applyDecoratedDescriptor'],
            f = w['inheritsLoose'],
            g = w['initializerDefineProperty'],
            h = w['assertThisInitialized'];
        }
        , function(w) {
            j = w['cclegacy'],
            k = w['_decorator'],
            m = w['Label'],
            p = w['Animation'],
            q = w['Component'];
        }
        , function(w) {
            v = w['LanguageLabel'];
        }
        ],
        'execute': function() {
            var w, x, z, A, B, C, D;
            j['_RF']['push']({}, '01391Mp6X1Gn554rkzavN4K', 'Notify', void 0x0);
            var E = k['ccclass']
              , F = k['property'];
            b('Notify', (w = E('Notify'),
            x = F(m),
            z = F(p),
            w((C = d((B = function(G) {
                function H() {
                    for (var J, K = arguments['length'], L = new Array(K), M = 0x0; M < K; M++)
                        L[M] = arguments[M];
                    return J = G['call']['apply'](G, [this]['concat'](L)) || this,
                    g(J, 'lab_content', C, h(J)),
                    g(J, 'animation', D, h(J)),
                    J;
                }
                f(H, G);
                var I = H['prototype'];
                return I['onLoad'] = function() {
                    this['animation'] && this['animation']['on'](p['EventType']['FINISHED'], this['onFinished'], this);
                }
                ,
                I['onFinished'] = function() {
                    this['node']['destroy']();
                }
                ,
                I['toast'] = function(J, K) {
                    var L, M = null == (L = this['lab_content']) ? void 0x0 : L['getComponent'](v);
                    K ? M['key'] = J : (M && (M['key'] = ''),
                    this['lab_content']['string'] = J);
                }
                ,
                H;
            }(q))['prototype'], 'lab_content', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            D = d(B['prototype'], 'animation', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            A = B)) || A)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ObjectUtil.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '86827QLFSRM7Zojsx0WqWuQ', 'ObjectUtil', void 0x0),
            a('ObjectUtil', (function() {
                function c() {}
                return c['isObject'] = function(d) {
                    return '[object\x20Object]' === Object['prototype']['toString']['call'](d);
                }
                ,
                c['deepCopy'] = function(d) {
                    if (null == d || 'object' != typeof d)
                        return d;
                    var f = null;
                    if (d instanceof Date)
                        return (f = new Date())['setTime'](d['getTime']()),
                        f;
                    if (d instanceof Array) {
                        f = [];
                        for (var g = 0x0, h = d['length']; g < h; g++)
                            f[g] = this['deepCopy'](d[g]);
                        return f;
                    }
                    if (d instanceof Object) {
                        for (var i in (f = {},
                        d))
                            d['hasOwnProperty'](i) && (f[i] = this['deepCopy'](d[i]));
                        return f;
                    }
                    console['warn']('不支持的类型：' + f);
                }
                ,
                c['copy'] = function(d) {
                    return JSON['parse'](JSON['stringify'](d));
                }
                ,
                c;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Oops.ts', ['cc', './HttpRequest.ts', './Config.ts', './MessageManager.ts', './ResLoader.ts', './Logger.ts', './StorageManager.ts'], function(b) {
    var c, d, f, h, j, k, l;
    return {
        'setters': [function(m) {
            c = m['cclegacy'];
        }
        , function(m) {
            d = m['HttpRequest'];
        }
        , function(m) {
            f = m['Config'];
        }
        , function(m) {
            h = m['MessageManager'];
        }
        , function(m) {
            j = m['ResLoader'];
        }
        , function(m) {
            k = m['Logger'];
        }
        , function(m) {
            l = m['StorageManager'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'cbae5wzfSZGzZMuyeAetSfg', 'Oops', void 0x0),
            b('version', '1.1.3');
            var m = b('oops', function() {});
            m['config'] = new f(),
            m['log'] = k,
            m['message'] = h['Instance'],
            m['storage'] = new l(),
            m['timer'] = void 0x0,
            m['audio'] = void 0x0,
            m['gui'] = void 0x0,
            m['game'] = void 0x0,
            m['res'] = new j(),
            m['language'] = void 0x0,
            m['http'] = new d(),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/panelUpdate.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './VersionManager.ts', './appConfig.ts', './Language.ts', './gMessageBox.ts', './Oops.ts', './BaseCustomEventDefine.ts'], function(j) {
    var k, q, x, z, A, C, D, E, F, G, H, I, J, K, M, N, O, Q, R, S, T, U, V, W;
    return {
        'setters': [function(X) {
            k = X['applyDecoratedDescriptor'],
            q = X['inheritsLoose'],
            x = X['initializerDefineProperty'],
            z = X['assertThisInitialized'];
        }
        , function(X) {
            A = X['cclegacy'],
            C = X['_decorator'],
            D = X['ProgressBar'],
            E = X['Label'],
            F = X['Sprite'],
            G = X['ImageAsset'],
            H = X['sys'],
            I = X['game'],
            J = X['Texture2D'],
            K = X['SpriteFrame'],
            M = X['Component'];
        }
        , function(X) {
            N = X['VersionManager'],
            O = X['StateCode'],
            Q = X['LanState'];
        }
        , function(X) {
            R = X['appConfig'];
        }
        , function(X) {
            S = X['LanguageDefine'];
        }
        , function(X) {
            T = X['MsgBoxManager'];
        }
        , function(X) {
            U = X['oops'];
        }
        , function(X) {
            V = X['WebGameEvent'],
            W = X['gameStage'];
        }
        ],
        'execute': function() {
            var X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
            A['_RF']['push']({}, '1f973y97H9DJJZs534mBKSV', 'panelUpdate', void 0x0);
            var a8 = C['ccclass']
              , a9 = C['property'];
            j('panelUpdate', (X = a8('panelUpdate'),
            Y = a9(D),
            Z = a9(E),
            a0 = a9(E),
            a1 = a9(F),
            X((a4 = k((a3 = function(aa) {
                function ab() {
                    for (var ad, ae = arguments['length'], af = new Array(ae), ag = 0x0; ag < ae; ag++)
                        af[ag] = arguments[ag];
                    return ad = aa['call']['apply'](aa, [this]['concat'](af)) || this,
                    x(ad, 'progressBar', a4, z(ad)),
                    x(ad, 'lb_progress', a5, z(ad)),
                    x(ad, 'lb_tip', a6, z(ad)),
                    x(ad, 'update_bg', a7, z(ad)),
                    ad;
                }
                q(ab, aa);
                var ac = ab['prototype'];
                return ac['checkUpdate'] = function(ad) {
                    var ae = this;
                    if (this['show'](!0x0),
                    this['progressBar']['progress'] = 0x0,
                    this['lb_tip']['string'] = 'check\x20update...',
                    R['updateBgUrl'] && R['updateBgUrl']['length'] > 0x0 && U['res']['loadRemote'](R['updateBgUrl'], G, function(ag, ah) {
                        ag || ae['update_bg'] && (ae['update_bg']['spriteFrame'] = ae['transImageAsset2SpriteFrame'](ah));
                    }),
                    H['isNative']) {
                        var af = R['nativeUrl'] + 'remoteConfig.json';
                        af['length'] > 0x0 && af['startsWith']('http') ? N['Instance']['checkUpdate'](af, function(ag, ah, ai) {
                            if (void 0x0 === ah && (ah = ''),
                            ag == O['UPDATE_SUCCESS'])
                                ae['updateProgress'](0x1),
                                ae['checkLobbyLanUpdate'](function() {
                                    ae['scheduleOnce'](function() {
                                        I['restart']();
                                    }, 0.1);
                                });
                            else {
                                if (ag == O['NO_NEED_UPDATE'])
                                    ae['checkLobbyLanUpdate'](function() {
                                        var an = R['nativeUrl'] + 'gameConfig.json';
                                        N['Instance']['parseRemoteSubGameInfo'](an, function(ao) {
                                            if (0x0 == ao) {
                                                var ap = {
                                                    'txt': 'close',
                                                    'click': function() {
                                                        I['end']();
                                                    }
                                                };
                                                ae['showMsgBox']('error', 'get_game_config_error', ap);
                                            } else
                                                ae['lb_tip']['string'] = 'down\x20icons...',
                                                ae['showProgressBar'](),
                                                ae['updateProgress'](0x0),
                                                N['Instance']['downLoadSubGameIcon'](function(aq, ar, as) {
                                                    if (void 0x0 === ar && (ar = ''),
                                                    aq)
                                                        ae['updateProgress'](0x1),
                                                        ad();
                                                    else {
                                                        var at = 'Download\x20file\x20failed';
                                                        R['bShowDebug'] && (at = at + ':' + ar);
                                                        var au = {
                                                            'txt': 'close',
                                                            'click': function() {
                                                                I['end']();
                                                            }
                                                        }
                                                          , av = as ? {
                                                            'txt': 'retry',
                                                            'click': function() {
                                                                null == as || as();
                                                            }
                                                        } : null;
                                                        ae['showMsgBox']('error', at, au, av);
                                                    }
                                                }, function(aq) {
                                                    ae['updateProgress'](aq);
                                                });
                                        });
                                    });
                                else {
                                    if (ag == O['FORCE_UPDATE']) {
                                        var aj = {
                                            'txt': 'ok',
                                            'click': function() {
                                                H['openURL'](N['Instance']['getMaketUrl']()),
                                                I['end']();
                                            }
                                        };
                                        ae['showMsgBox']('tips', 'Please\x20update\x20our\x20app\x20now\x20to\x20continue\x20using\x20it', aj);
                                    } else {
                                        var ak = 'tip_hot_error_' + ag;
                                        R['bShowDebug'] && (ak = ak + ':' + ah);
                                        var al = {
                                            'txt': 'close',
                                            'click': function() {
                                                I['end']();
                                            }
                                        }
                                          , am = ai ? {
                                            'txt': 'retry',
                                            'click': function() {
                                                null == ai || ai();
                                            }
                                        } : null;
                                        ae['showMsgBox']('error', ak, al, am);
                                    }
                                }
                            }
                        }, function(ag) {
                            0x0 == ae['progressBar']['node']['active'] && (ae['showProgressBar'](),
                            ae['lb_tip']['string'] = 'downloading...');
                            var ah = ag;
                            ae['updateProgress'](ah);
                        }) : ad();
                    }
                }
                ,
                ac['showProgressBar'] = function() {
                    this['progressBar']['node']['active'] = !0x0;
                }
                ,
                ac['checkLobbyLanUpdate'] = function(ad) {
                    var ae = this;
                    this['lb_tip']['string'] = 'updating\x20lan\x20res...',
                    this['updateProgress'](0x0);
                    var af = U['language']['current'];
                    af == S['EN'] ? this['checkLobbyLan'](af, function(ag) {
                        ae['updateProgress'](ag);
                    }, function() {
                        ae['updateProgress'](0x1),
                        ad();
                    }) : this['checkLobbyLan'](S['EN'], function(ag) {
                        ae['updateProgress'](0.5 * ag);
                    }, function() {
                        ae['checkLobbyLan'](af, function(ag) {
                            ae['updateProgress'](0.5 + 0.5 * ag);
                        }, function() {
                            ae['updateProgress'](0x1),
                            ad();
                        });
                    });
                }
                ,
                ac['checkLobbyLan'] = function(ad, ae, af) {
                    var ag = this;
                    N['Instance']['checkLobbyLanUpdate'](ad, function(ah) {
                        ae(ah),
                        ag['showProgressBar']();
                    }, function(ah) {
                        if (ah == Q['UPDATE_SUCCESS'] || ah == Q['NO_NEED_UPDATE'])
                            af();
                        else {
                            var ai = 'error_' + ah
                              , aj = {
                                'txt': 'close',
                                'click': function() {
                                    I['end']();
                                }
                            }
                              , ak = {
                                'txt': 'retry',
                                'click': function() {
                                    I['restart']();
                                }
                            };
                            ag['showMsgBox']('error', ai, aj, ak);
                        }
                    });
                }
                ,
                ac['showMsgBox'] = function(ad, ae, af, ag) {
                    T['Show'](ad, ae, af, ag, !0x1);
                }
                ,
                ac['updateProgress'] = function(ad) {
                    this['progressBar']['progress'] = ad,
                    this['lb_progress']['string'] = Math['floor'](0x64 * ad) + '%';
                }
                ,
                ac['onEnable'] = function() {
                    U['message']['on'](V['game_stage_change'], this['on_game_stage_change'], this);
                }
                ,
                ac['onDisable'] = function() {
                    U['message']['off'](V['game_stage_change'], this['on_game_stage_change'], this);
                }
                ,
                ac['on_game_stage_change'] = function(ad, ae, af) {
                    ae == W['lobby'] && this['show'](!0x1);
                }
                ,
                ac['show'] = function(ad) {
                    this['node']['active'] = ad;
                }
                ,
                ac['transImageAsset2SpriteFrame'] = function(ad) {
                    if (null == ad)
                        return null;
                    var ae = new J();
                    ae['image'] = ad;
                    var af = new K();
                    return af['texture'] = ae,
                    af;
                }
                ,
                ab;
            }(M))['prototype'], 'progressBar', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a5 = k(a3['prototype'], 'lb_progress', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = k(a3['prototype'], 'lb_tip', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = k(a3['prototype'], 'update_bg', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2 = a3)) || a2)),
            A['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/PhysicsUtil.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['createClass'];
        }
        , function(d) {
            c = d['cclegacy'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'c1584nuvI9HtJ5IHcmFEBzR', 'PhysicsUtil', void 0x0);
            var d = a('GroupItem', (function() {
                function g(h, j) {
                    this['_value'] = void 0x0,
                    this['_name'] = void 0x0,
                    this['_value'] = h,
                    this['_name'] = j;
                }
                return b(g, [{
                    'key': 'value',
                    'get': function() {
                        return this['_value'];
                    }
                }, {
                    'key': 'name',
                    'get': function() {
                        return this['_name'];
                    }
                }, {
                    'key': 'mask',
                    'get': function() {
                        return 0x1 << this['_value'];
                    }
                }]),
                g;
            }()))
              , f = a('PhysicsUtil', (function() {
                function g() {}
                return g['setNodeLayer'] = function(h, j) {
                    j['layer'] = h['mask'],
                    j['children']['forEach'](function(k) {
                        k['layer'] = h['mask'],
                        g['setNodeLayer'](h, k);
                    });
                }
                ,
                g;
            }()));
            f['DEFAULT'] = new d(0x0,'DEFAULT'),
            f['GAME_OBJECT_SELECT'] = new d(0x1,'GAME_OBJECT_SELECT'),
            f['GAME_OWNER'] = new d(0x2,'GAME_OWNER'),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/PlatformUtil.ts', ['cc'], function(a) {
    var b, c, d;
    return {
        'setters': [function(e) {
            b = e['cclegacy'],
            c = e['native'],
            d = e['sys'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'c08229jnmdPP5vR721N6GG9', 'PlatformUtil', void 0x0),
            a('PlatformUtil', (function() {
                function e() {}
                return e['isNativeAndroid'] = function() {
                    return void 0x0 !== c && !(!d['isNative'] || d['platform'] !== d['Platform']['ANDROID']);
                }
                ,
                e['isNativeIOS'] = function() {
                    return void 0x0 !== c && !(!d['isNative'] || d['os'] !== d['OS']['IOS']);
                }
                ,
                e['getPlateform'] = function() {
                    return this['isNativeAndroid']() ? 'android' : this['isNativeIOS']() ? 'ios' : 'h5';
                }
                ,
                e;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ProfilerView.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringBuilder.ts'], function(b) {
    var c, d, h, j, k, m, q, u, v, w, x;
    return {
        'setters': [function(y) {
            c = y['applyDecoratedDescriptor'],
            d = y['inheritsLoose'],
            h = y['initializerDefineProperty'],
            j = y['assertThisInitialized'];
        }
        , function(y) {
            k = y['cclegacy'],
            m = y['_decorator'],
            q = y['Label'],
            u = y['Toggle'],
            v = y['profiler'],
            w = y['Component'];
        }
        , function(y) {
            x = y['StringBuilder'];
        }
        ],
        'execute': function() {
            var z, A, B, C, D, E, F, G, H;
            k['_RF']['push']({}, '938dfigvyJMrpKfm5EWPE/W', 'ProfilerView', void 0x0);
            var I = m['ccclass']
              , J = m['property'];
            b('ProfilerView', (z = I('ProfilerView'),
            A = J(q),
            B = J(q),
            C = J(u),
            z((F = c((E = function(K) {
                function L() {
                    for (var N, O = arguments['length'], Q = new Array(O), R = 0x0; R < O; R++)
                        Q[R] = arguments[R];
                    return N = K['call']['apply'](K, [this]['concat'](Q)) || this,
                    h(N, 'profilerLabel', F, j(N)),
                    h(N, 'profilerTitleLabel', G, j(N)),
                    h(N, 'profilerToggle', H, j(N)),
                    N['profilerString'] = new x(),
                    N['profilerTitleString'] = new x(),
                    N['time'] = 0x1,
                    N['isShowPrpfiler'] = v['isShowingStats'](),
                    N;
                }
                d(L, K);
                var M = L['prototype'];
                return M['onEnable'] = function() {
                    this['time'] = 0x1,
                    this['profilerToggle']['isChecked'] = this['isShowPrpfiler'];
                }
                ,
                M['BuildProfilerString'] = function(N, O) {
                    this['profilerTitleString']['append'](N),
                    this['profilerTitleString']['append']('\x0a'),
                    this['profilerString']['append'](':\x20\x20\x20'),
                    this['profilerString']['append'](O),
                    this['profilerString']['append']('\x0a');
                }
                ,
                M['onToggleProfiler'] = function(N) {
                    this['isShowPrpfiler'] = N['isChecked'],
                    this['isShowPrpfiler'] ? v['showStats']() : (this['profilerTitleString']['clear'](),
                    this['profilerString']['clear'](),
                    this['profilerLabel']['string'] = this['profilerString']['toString'](),
                    this['profilerTitleLabel']['string'] = this['profilerTitleString']['toString'](),
                    v['hideStats']());
                }
                ,
                M['update'] = function(N) {
                    if (this['time'] += N,
                    this['time'] >= 0x1) {
                        if (v) {
                            if (!this['isShowPrpfiler'])
                                return;
                            this['profilerTitleString']['clear'](),
                            this['profilerString']['clear'](),
                            this['profilerLabel']['string'] = this['profilerString']['toString'](),
                            this['profilerTitleLabel']['string'] = this['profilerTitleString']['toString']();
                        }
                        this['time'] = 0x0;
                    }
                }
                ,
                L;
            }(w))['prototype'], 'profilerLabel', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            G = c(E['prototype'], 'profilerTitleLabel', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            H = c(E['prototype'], 'profilerToggle', [C], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            D = E)) || D)),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/RandomManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['createClass'];
        }
        , function(d) {
            c = d['cclegacy'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '3e09eJBwfZBsLPqFszZLvMS', 'RandomManager', void 0x0),
            a('RandomManager', (function() {
                function d() {
                    this['seedrandom'] = void 0x0;
                }
                var f = d['prototype'];
                return f['getRandom'] = function() {
                    return this['seedrandom'] ? this['seedrandom']['quick']() : Math['random']();
                }
                ,
                f['setSeed'] = function(g) {
                    this['seedrandom'] = new Math['seedrandom'](g);
                }
                ,
                f['getRandomFloat'] = function(g, h) {
                    return this['getRandom']() * (h - g) + g;
                }
                ,
                f['getRandomInt'] = function(g, h, i) {
                    switch (void 0x0 === i && (i = 0x2),
                    g = Math['ceil'](g),
                    h = Math['floor'](h),
                    i) {
                    case 0x1:
                        return Math['floor'](this['getRandom']() * (h - g)) + g;
                    case 0x2:
                        return Math['floor'](this['getRandom']() * (h - g + 0x1)) + g;
                    case 0x3:
                        return Math['floor'](this['getRandom']() * (h - g - 0x1)) + g + 0x1;
                    }
                    return 0x0;
                }
                ,
                f['getRandomByMinMaxList'] = function(g, h, i) {
                    for (var j = [], k = 0x0; k < i; k++)
                        j['push'](this['getRandomInt'](g, h));
                    return j;
                }
                ,
                f['getRandomByObjectList'] = function(g, h) {
                    for (var i = g['slice'](), j = [], k = 0x0; k < h; k++) {
                        var l = this['getRandomInt'](0x0, g['length'], h);
                        j['push'](i['splice'](l, 0x1)[0x0]);
                    }
                    return j;
                }
                ,
                f['getRandomBySumList'] = function(g, h) {
                    for (var i = h, j = 0x0, k = [], l = 0x0; l < g; l++)
                        j = this['getRandomInt'](0x0, i, 0x3),
                        l == g - 0x1 ? j = i : i -= j,
                        k['push'](j);
                    return k;
                }
                ,
                b(d, null, [{
                    'key': 'instance',
                    'get': function() {
                        return null == this['_instance'] && (this['_instance'] = new d()),
                        this['_instance'];
                    }
                }]),
                d;
            }()))['_instance'] = void 0x0,
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/RegexUtil.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'dec9bVPigFCmKy5NVk+0y7h', 'RegexUtil', void 0x0),
            a('RegexUtil', (function() {
                function c() {}
                return c['isDoubleWord'] = function(d) {
                    return /[^\x00-\xff]/['test'](d);
                }
                ,
                c;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ResLoader.ts', ['cc'], function(a) {
    var b, c, d, f, g;
    return {
        'setters': [function(h) {
            b = h['cclegacy'],
            c = h['assetManager'],
            d = h['js'],
            f = h['Asset'],
            g = h['resources'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '1a2e4jFffpHrYjrpxbnC760', 'ResLoader', void 0x0),
            a('ResLoader', (function() {
                function h() {
                    this['defaultBundleName'] = 'resources';
                }
                var i = h['prototype'];
                return i['loadRemote'] = function(j) {
                    var k = null
                      , m = null;
                    0x2 == (arguments['length'] <= 0x1 ? 0x0 : arguments['length'] - 0x1) ? (k = arguments['length'] <= 0x1 ? void 0x0 : arguments[0x1],
                    m = arguments['length'] <= 0x2 ? void 0x0 : arguments[0x2]) : m = arguments['length'] <= 0x1 ? void 0x0 : arguments[0x1],
                    c['loadRemote'](j, k, m);
                }
                ,
                i['loadBundle'] = function(j, k) {
                    return new Promise(function(m, o) {
                        c['loadBundle'](j, {
                            'version': k
                        }, function(p, q) {
                            p ? o() : m(q);
                        });
                    }
                    );
                }
                ,
                i['load'] = function(j, k, m, o, p) {
                    var q = null;
                    'string' == typeof k || k instanceof Array ? (q = this['parseLoadResArgs'](k, m, o, p))['bundle'] = j : (q = this['parseLoadResArgs'](j, k, m, o))['bundle'] = this['defaultBundleName'],
                    this['loadByArgs'](q);
                }
                ,
                i['loadDir'] = function(j, k, m, o, p) {
                    var q = null;
                    'string' == typeof k ? (q = this['parseLoadResArgs'](k, m, o, p))['bundle'] = j : (q = this['parseLoadResArgs'](j, k, m, o))['bundle'] = this['defaultBundleName'],
                    q['dir'] = q['paths'],
                    this['loadByArgs'](q);
                }
                ,
                i['release'] = function(j, k) {
                    null == k && (k = this['defaultBundleName']);
                    var m = c['getBundle'](k);
                    if (m) {
                        var o = m['get'](j);
                        o && this['releasePrefabtDepsRecursively'](o['_uuid']);
                    }
                }
                ,
                i['releaseDir'] = function(j, k) {
                    var m = this;
                    null == k && (k = this['defaultBundleName']);
                    var o = c['getBundle'](k);
                    if (o) {
                        var p = o['getDirWithPath'](j);
                        p && p['map'](function(q) {
                            m['releasePrefabtDepsRecursively'](q['uuid']);
                        }),
                        '' == j && 'resources' != k && c['removeBundle'](o);
                    }
                }
                ,
                i['releasePrefabtDepsRecursively'] = function(j) {
                    var k = c['assets']['get'](j);
                    c['releaseAsset'](k);
                }
                ,
                i['get'] = function(j, k, m) {
                    return null == m && (m = this['defaultBundleName']),
                    c['getBundle'](m)['get'](j, k);
                }
                ,
                i['dump'] = function() {
                    c['assets']['forEach'](function(j, k) {
                        console['log'](c['assets']['get'](k));
                    }),
                    console['log']('当前资源总数:' + c['assets']['count']);
                }
                ,
                i['parseLoadResArgs'] = function(j, k, m, p) {
                    var q = j
                      , v = k
                      , w = m
                      , x = p;
                    if (void 0x0 === p) {
                        var y = d['isChildClassOf'](k, f);
                        m ? (x = m,
                        y && (w = null)) : void 0x0 !== m || y || (x = k,
                        w = null,
                        v = null),
                        void 0x0 === m || y || (w = k,
                        v = null);
                    }
                    return {
                        'paths': q,
                        'type': v,
                        'onProgress': w,
                        'onComplete': x
                    };
                }
                ,
                i['loadByBundleAndArgs'] = function(j, k) {
                    k['dir'] ? j['loadDir'](k['paths'], k['type'], k['onProgress'], k['onComplete']) : (k['paths'],
                    j['load'](k['paths'], k['type'], k['onProgress'], k['onComplete']));
                }
                ,
                i['loadByArgs'] = function(j) {
                    var k = this;
                    if (j['bundle']) {
                        if (c['bundles']['has'](j['bundle'])) {
                            var m = c['bundles']['get'](j['bundle']);
                            this['loadByBundleAndArgs'](m, j);
                        } else
                            c['loadBundle'](j['bundle'], function(o, p) {
                                o || k['loadByBundleAndArgs'](p, j);
                            });
                    } else
                        this['loadByBundleAndArgs'](g, j);
                }
                ,
                h;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Root.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts', './BuildTimeConstants.ts', './GameConfig.ts', './GameQueryConfig.ts', './Oops.ts', './AudioManager.ts', './EventMessage.ts', './GameManager.ts', './GUI.ts', './LayerManager.ts', './TimerManager.ts'], function(j) {
    var k, q, w, x, z, A, B, D, F, H, I, J, K, L, O, P, Q, S, T, U, V, W, X, Y, Z;
    return {
        'setters': [function(a0) {
            k = a0['applyDecoratedDescriptor'],
            q = a0['inheritsLoose'],
            w = a0['initializerDefineProperty'],
            x = a0['assertThisInitialized'];
        }
        , function(a0) {
            z = a0['cclegacy'],
            A = a0['_decorator'],
            B = a0['Node'],
            D = a0['JsonAsset'],
            F = a0['game'],
            H = a0['director'],
            I = a0['Game'],
            J = a0['log'],
            K = a0['view'],
            L = a0['Component'];
        }
        , function(a0) {
            O = a0['LanguageManager'];
        }
        , function(a0) {
            P = a0['BuildTimeConstants'];
        }
        , function(a0) {
            Q = a0['GameConfig'];
        }
        , function(a0) {
            S = a0['GameQueryConfig'];
        }
        , function(a0) {
            T = a0['oops'];
        }
        , function(a0) {
            U = a0['AudioManager'];
        }
        , function(a0) {
            V = a0['EventMessage'];
        }
        , function(a0) {
            W = a0['GameManager'];
        }
        , function(a0) {
            X = a0['GUI'];
        }
        , function(a0) {
            Y = a0['LayerManager'];
        }
        , function(a0) {
            Z = a0['TimerManager'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4;
            z['_RF']['push']({}, '90b9cOmlmBCnpCpEpgvdrQr', 'Root', void 0x0),
            A['ccclass'];
            var a5 = A['property'];
            j('Root', (a0 = a5({
                'type': B,
                'tooltip': '游戏层'
            }),
            a1 = a5({
                'type': B,
                'tooltip': '界面层'
            }),
            a3 = k((a2 = function(a6) {
                function a7() {
                    for (var a9, aa = arguments['length'], ab = new Array(aa), ac = 0x0; ac < aa; ac++)
                        ab[ac] = arguments[ac];
                    return a9 = a6['call']['apply'](a6, [this]['concat'](ab)) || this,
                    w(a9, 'game', a3, x(a9)),
                    w(a9, 'gui', a4, x(a9)),
                    a9['persistRootNode'] = null,
                    a9;
                }
                q(a7, a6);
                var a8 = a7['prototype'];
                return a8['onLoad'] = function() {
                    var a9 = this;
                    this['enabled'] = !0x1;
                    var aa = 'config';
                    T['res']['load'](aa, D, function() {
                        var ab = T['res']['get'](aa);
                        T['config']['btc'] = new P(),
                        T['config']['query'] = new S(),
                        T['config']['game'] = new Q(ab),
                        T['http']['server'] = T['config']['game']['httpServer'],
                        T['http']['timeout'] = T['config']['game']['httpTimeout'],
                        T['storage']['init'](T['config']['game']['localDataKey'], T['config']['game']['localDataIv']),
                        F['frameRate'] = T['config']['game']['frameRate'],
                        a9['enabled'] = !0x0,
                        a9['init'](),
                        a9['run']();
                    });
                }
                ,
                a8['update'] = function(a9) {}
                ,
                a8['initGui'] = function() {}
                ,
                a8['initEcsSystem'] = function() {}
                ,
                a8['run'] = function() {}
                ,
                a8['init'] = function() {
                    this['persistRootNode'] = new B('PersistRootNode'),
                    H['addPersistRootNode'](this['persistRootNode']),
                    T['audio'] = this['persistRootNode']['addComponent'](U),
                    T['audio']['load'](),
                    T['timer'] = this['persistRootNode']['addComponent'](Z),
                    T['language'] = new O(),
                    T['game'] = new W(this['game']),
                    T['gui'] = new Y(this['gui']),
                    this['initGui'](),
                    this['initEcsSystem'](); //☠️ Bypass game show
                    var a9 = this['gui']['addComponent'](X);
                    K['setResizeCallback'](function() {
                        a9['resize'](),
                        T['message']['dispatchEvent'](V['GAME_RESIZE']);
                    });
                }
                ,
                a7;
            }(L))['prototype'], 'game', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = k(a2['prototype'], 'gui', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/RotateUtil.ts', ['cc', './Vec3Util.ts'], function(a) {
    var b, c, d, f, g;
    return {
        'setters': [function(h) {
            b = h['cclegacy'],
            c = h['Quat'],
            d = h['Vec3'],
            f = h['toRadian'];
        }
        , function(h) {
            g = h['Vec3Util'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '103324kr75Hi5d7RZCcRt3P', 'RotateUtil', void 0x0),
            a('RotateUtil', (function() {
                function h() {}
                return h['rotateAround'] = function(j, k, l) {
                    var m = new c();
                    c['rotateAround'](m, j['getRotation'](), k['normalize'](), l),
                    j['setRotation'](m);
                }
                ,
                h['rotateAroundTarget'] = function(j, k, l, m) {
                    var p = j['worldPosition']
                      , q = k['worldPosition']
                      , v = new c()
                      , w = new d();
                    c['fromAxisAngle'](v, l, m),
                    d['subtract'](w, q, p),
                    d['transformQuat'](w, w, v),
                    d['add'](w, p, w),
                    k['setWorldPosition'](w),
                    c['rotateAround'](v, k['worldRotation'], l, m),
                    c['normalize'](v, v),
                    k['setWorldRotation'](v);
                }
                ,
                h['circularEdgePosition'] = function(j, k, m) {
                    var p = g['z']['multiplyScalar'](k)
                      , q = g['sub'](p, j)
                      , v = new d()
                      , w = new c();
                    return c['fromAxisAngle'](w, d['UP'], f(m)),
                    d['transformQuat'](v, q, w),
                    d['add'](v, j, v),
                    v;
                }
                ,
                h;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/RoundRectMask.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var f, g, j, k, m, q, v, w, x, y, z, A, B;
    return {
        'setters': [function(C) {
            f = C['applyDecoratedDescriptor'],
            g = C['inheritsLoose'],
            j = C['initializerDefineProperty'],
            k = C['assertThisInitialized'],
            m = C['createClass'];
        }
        , function(C) {
            q = C['cclegacy'],
            v = C['_decorator'],
            w = C['Mask'],
            x = C['CCFloat'],
            y = C['UITransform'],
            z = C['game'],
            A = C['Game'],
            B = C['Component'];
        }
        ],
        'execute': function() {
            var F, G, H, I, J, K, L, N, O;
            q['_RF']['push']({}, 'da0f8CBQkZDqaekNuERqKjA', 'RoundRectMask', void 0x0);
            var P = v['ccclass']
              , Q = v['property']
              , S = v['executeInEditMode']
              , U = v['disallowMultiple']
              , V = v['requireComponent']
              , W = v['menu'];
            b('RoundRectMask', (F = P('RoundRectMask'),
            G = S(!0x0),
            H = U(!0x0),
            I = V(w),
            J = W('渲染组件/圆角遮罩'),
            K = Q({
                'type': x,
                'tooltip': '圆角半径:\x0a0-1之间为最小边长比例值,\x20\x0a>1为具体像素值'
            }),
            F(L = G(L = H(L = I(L = J((O = f((N = function(X) {
                function Y() {
                    for (var a0, a1 = arguments['length'], a2 = new Array(a1), a3 = 0x0; a3 < a1; a3++)
                        a2[a3] = arguments[a3];
                    return a0 = X['call']['apply'](X, [this]['concat'](a2)) || this,
                    j(a0, 'propRadius', O, k(a0)),
                    a0['mask'] = null,
                    a0;
                }
                g(Y, X);
                var Z = Y['prototype'];
                return Z['onEnable'] = function() {
                    this['mask'] = this['getComponent'](w),
                    this['updateMask'](this['radius']);
                }
                ,
                Z['updateMask'] = function(a0) {
                    var a1 = a0 >= 0x0 ? a0 : 0x0;
                    if (a1 < 0x1) {
                        var a2 = this['node']['getComponent'](y);
                        a1 = Math['min']((null == a2 ? void 0x0 : a2['width']) || 0x0, (null == a2 ? void 0x0 : a2['width']) || 0x0) * a1;
                    }
                    this['mask'] && (this['mask']['radius'] = a1,
                    this['mask']['onDraw'] = this['onDraw']['bind'](this['mask']),
                    this['mask']['_updateGraphics'] = this['_updateGraphics']['bind'](this['mask']),
                    this['mask']['type'] = w['Type']['GRAPHICS_RECT']);
                }
                ,
                Z['_updateGraphics'] = function() {
                    var a0 = this['_graphics'];
                    a0 && this['onDraw'](a0);
                }
                ,
                Z['onDraw'] = function(a0) {
                    var a1 = this['node']['getComponent'](y);
                    a0['clear']();
                    var a2 = a1['width']
                      , a3 = a1['height']
                      , a4 = -a2 * a1['anchorX']
                      , a5 = -a3 * a1['anchorY'];
                    a0['roundRect'](a4, a5, a2, a3, this['radius'] || 0x0),
                    z['renderType'] === A['RENDER_TYPE_CANVAS'] ? a0['stroke']() : a0['fill']();
                }
                ,
                m(Y, [{
                    'key': 'radius',
                    'get': function() {
                        return this['propRadius'];
                    },
                    'set': function(a0) {
                        this['propRadius'] = a0,
                        this['updateMask'](a0);
                    }
                }]),
                Y;
            }(B))['prototype'], 'propRadius', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x32;
                }
            }),
            L = N)) || L) || L) || L) || L) || L)),
            q['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/StorageManager.ts', ['cc', './env', './EncryptUtil.ts'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['cclegacy'],
            c = g['sys'];
        }
        , function(g) {
            d = g['PREVIEW'];
        }
        , function(g) {
            f = g['EncryptUtil'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'ed226gLF85Oyr+WhA9TJZLX', 'StorageManager', void 0x0),
            a('StorageManager', (function() {
                function g() {
                    this['_key'] = null,
                    this['_iv'] = null,
                    this['_id'] = '';
                }
                var h = g['prototype'];
                return h['init'] = function(j, k) {
                    f['initCrypto'](j, k),
                    this['_key'] = f['md5'](j),
                    this['_iv'] = f['md5'](k);
                }
                ,
                h['setUser'] = function(j) {
                    this['_id'] = j;
                }
                ,
                h['set'] = function(j, k) {
                    if (null != (j = j + '_' + this['_id'])) {
                        if (j = f['md5'](j),
                        null == k)
                            return console['warn']('存储的值为空，则直接移除该存储'),
                            void this['remove'](j);
                        if ('function' != typeof k) {
                            if ('object' == typeof k)
                                try {
                                    k = JSON['stringify'](k);
                                } catch (l) {
                                    return void console['error']('解析失败，str\x20=\x20' + k);
                                }
                            else
                                'number' == typeof k && (k += '');
                            null != this['_key'] && null != this['_iv'] && (k = f['aesEncrypt']('' + k, this['_key'], this['_iv'])),
                            c['localStorage']['setItem'](j, k);
                        } else
                            console['error']('储存的值不能为方法');
                    } else
                        console['error']('存储的key不能为空');
                }
                ,
                h['get'] = function(j, k) {
                    if (void 0x0 === k && (k = ''),
                    null == j)
                        return console['error']('存储的key不能为空'),
                        null;
                    j = j + '_' + this['_id'],
                    j = f['md5'](j);
                    var l = c['localStorage']['getItem'](j);
                    return null == l || '' === l || d || null == this['_key'] || null == this['_iv'] || (l = f['aesDecrypt'](l, this['_key'], this['_iv'])),
                    null === l ? k : l;
                }
                ,
                h['getNumber'] = function(j, k) {
                    void 0x0 === k && (k = 0x0);
                    var l = this['get'](j);
                    return Number(l) || k;
                }
                ,
                h['getBoolean'] = function(j) {
                    return 'true' == this['get'](j) || !0x1;
                }
                ,
                h['getJson'] = function(j, k) {
                    var l = this['get'](j);
                    return l && JSON['parse'](l) || k;
                }
                ,
                h['remove'] = function(j) {
                    null != j ? (j = j + '_' + this['_id'],
                    j = f['md5'](j),
                    c['localStorage']['removeItem'](j)) : console['error']('存储的key不能为空');
                }
                ,
                h['clear'] = function() {
                    c['localStorage']['clear']();
                }
                ,
                g;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/StringBuilder.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['createClass'];
        }
        , function(d) {
            c = d['cclegacy'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, 'd50e43SBx5Oyq2hlSAHK+ES', 'StringBuilder', void 0x0),
            a('StringBuilder', (function() {
                function d(g) {
                    this['_store'] = void 0x0,
                    this['_store'] = 'string' == typeof g ? [g] : g instanceof Array ? g : g instanceof d ? g['_store'] : g ? [g['toString']()] : [];
                }
                var f = d['prototype'];
                return f['append'] = function(g) {
                    if ('string' == typeof g)
                        this['_store']['push'](g);
                    else {
                        if (g instanceof Array) {
                            var h;
                            (h = this['_store'])['push']['apply'](h, g);
                        } else {
                            if (g instanceof d) {
                                var j;
                                (j = this['_store'])['push']['apply'](j, g['_store']);
                            } else
                                this['_store']['push'](g['toString']());
                        }
                    }
                }
                ,
                f['insert'] = function(g, h) {
                    if ('string' == typeof h)
                        this['_store']['splice'](g, 0x0, h);
                    else {
                        if (h instanceof Array) {
                            var j;
                            (j = this['_store'])['splice']['apply'](j, [g, 0x0]['concat'](h));
                        } else {
                            if (h instanceof d) {
                                var k;
                                (k = this['_store'])['splice']['apply'](k, [g, 0x0]['concat'](h['_store']));
                            } else
                                null == h ? this['_store']['push']('undefined') : this['_store']['splice'](g, 0x0, h['toString']());
                        }
                    }
                }
                ,
                f['clear'] = function() {
                    this['_store'] = [];
                }
                ,
                f['remove'] = function(g, h) {
                    this['_store']['splice'](g, h);
                }
                ,
                f['replace'] = function(g, h) {
                    this['_store'] = this['_store']['map'](function(i) {
                        return i === g ? h : i;
                    });
                }
                ,
                f['toString'] = function() {
                    return this['_store']['join']('');
                }
                ,
                f['equals'] = function(g) {
                    return this['toString']() === g['toString']();
                }
                ,
                b(d, [{
                    'key': 'length',
                    'get': function() {
                        return this['_store']['length'];
                    }
                }]),
                d;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/StringUtil.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'aa8435LSBtAR5HPsje6IJ2w', 'StringUtil', void 0x0),
            a('StringUtil', (function() {
                function c() {}
                return c['guid'] = function() {
                    for (var d = '', e = 0x1; e <= 0x20; e++) {
                        d += Math['floor'](0x10 * Math['random']())['toString'](0x10),
                        0x8 != e && 0xc != e && 0x10 != e && 0x14 != e || (d += '-');
                    }
                    return d;
                }
                ,
                c['numberTotPermil'] = function(d) {
                    return d['toLocaleString']();
                }
                ,
                c['numberToThousand'] = function(d, f, g, h) {
                    if (void 0x0 === f && (f = !0x0),
                    void 0x0 === g && (g = 0x2),
                    void 0x0 === h && (h = 0x3e8),
                    d < h)
                        return f ? d['toFixed'](g) : d['toString']();
                    var j = Math['floor'](Math['log'](d) / Math['log'](0x3e8))
                      , k = (d / Math['pow'](0x3e8, j))['toFixed'](g);
                    return f || (k = k['replace'](/\.?0+$/, '')),
                    k + ['', 'K', 'M', 'B', 'T'][j];
                }
                ,
                c['numberToTenThousand'] = function(d, f) {
                    void 0x0 === f && (f = 0x2);
                    var g = 0x2710;
                    if (d < g)
                        return d['toString']();
                    var h = Math['floor'](Math['log'](d) / Math['log'](g));
                    return (d / Math['pow'](g, h))['toFixed'](f) + ['', '万', '亿', '万亿'][h];
                }
                ,
                c['format'] = function(d, f) {
                    var g = {
                        'M+': d['getMonth']() + 0x1,
                        'd+': d['getDate'](),
                        'h+': d['getHours'](),
                        'm+': d['getMinutes'](),
                        's+': d['getSeconds'](),
                        'q+': Math['floor']((d['getMonth']() + 0x3) / 0x3),
                        'S': d['getMilliseconds']()
                    };
                    for (var h in (/(y+)/['test'](f) && (f = f['replace'](RegExp['$1'], (d['getFullYear']() + '')['substr'](0x4 - RegExp['$1']['length']))),
                    g))
                        new RegExp('(' + h + ')')['test'](f) && (f = f['replace'](RegExp['$1'], 0x1 == RegExp['$1']['length'] ? g[h] : ('00' + g[h])['substr'](('' + g[h])['length'])));
                    return f;
                }
                ,
                c['stringToArray1'] = function(d) {
                    return '' == d ? [] : d['split'](',');
                }
                ,
                c['stringToArray2'] = function(d) {
                    return '' == d ? [] : d['split']('|');
                }
                ,
                c['stringToArray3'] = function(d) {
                    return '' == d ? [] : d['split'](':');
                }
                ,
                c['stringToArray4'] = function(d) {
                    return '' == d ? [] : d['split'](';');
                }
                ,
                c['sub'] = function(d, f, g) {
                    void 0x0 === g && (g = !0x1);
                    var h = /[^\x00-\xff]/g;
                    if (d['replace'](h, 'mm')['length'] <= f)
                        return d;
                    for (var i = Math['floor'](f / 0x2); i < d['length']; i++)
                        if (d['substr'](0x0, i)['replace'](h, 'mm')['length'] >= f)
                            return g ? d['substr'](0x0, i) + '...' : d['substr'](0x0, i);
                    return d;
                }
                ,
                c['stringLen'] = function(d) {
                    for (var f = 0x0, g = d['length'], h = -0x1, i = 0x0; i < g; i++)
                        f += (h = d['charCodeAt'](i)) >= 0x0 && h <= 0x80 ? 0x1 : 0x2;
                    return f;
                }
                ,
                c;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/SystemView.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringBuilder.ts', './env'], function(b) {
    var d, f, h, j, k, m, q, v, w, x, z, A, B, C;
    return {
        'setters': [function(D) {
            d = D['applyDecoratedDescriptor'],
            f = D['inheritsLoose'],
            h = D['initializerDefineProperty'],
            j = D['assertThisInitialized'];
        }
        , function(D) {
            k = D['cclegacy'],
            m = D['_decorator'],
            q = D['Label'],
            v = D['view'],
            w = D['sys'],
            x = D['VERSION'],
            z = D['Component'];
        }
        , function(D) {
            A = D['StringBuilder'];
        }
        , function(D) {
            B = D['DEBUG'],
            C = D['EDITOR'];
        }
        ],
        'execute': function() {
            var D, E, F, G, H, I, J, K, M, N, O;
            k['_RF']['push']({}, 'a1a08jhC2hAIbffnfrnA0pz', 'SystemView', void 0x0);
            var P = m['ccclass']
              , Q = m['property'];
            b('SystemView', (D = P('SystemView'),
            E = Q(q),
            F = Q(q),
            G = Q(q),
            H = Q(q),
            D((K = d((J = function(R) {
                function U() {
                    for (var X, Y = arguments['length'], Z = new Array(Y), a0 = 0x0; a0 < Y; a0++)
                        Z[a0] = arguments[a0];
                    return X = R['call']['apply'](R, [this]['concat'](Z)) || this,
                    h(X, 'sysLabel', K, j(X)),
                    h(X, 'sysTitleLabel', M, j(X)),
                    X['sysString'] = new A(),
                    X['sysTitleString'] = new A(),
                    h(X, 'cocosLabel', N, j(X)),
                    h(X, 'cocosTitleLabel', O, j(X)),
                    X['cocosString'] = new A(),
                    X['cocosTitleString'] = new A(),
                    X;
                }
                f(U, R);
                var W = U['prototype'];
                return W['start'] = function() {
                    this['sysString']['clear'](),
                    this['sysTitleString']['clear'](),
                    this['cocosString']['clear'](),
                    this['cocosTitleString']['clear']();
                    var X = v['getVisibleSize']();
                    this['BuildSysString']('系统', w['os']),
                    this['BuildSysString']('平台', w['platform']),
                    this['BuildSysString']('是否浏览器', w['isBrowser']['valueOf']()['toString']()),
                    this['BuildSysString']('是否Native', w['isNative']['valueOf']()['toString']()),
                    this['BuildSysString']('浏览器类型', w['browserType']),
                    this['BuildSysString']('浏览器版本', w['browserVersion']),
                    this['BuildSysString']('系统语言', w['language']),
                    this['BuildSysString']('语言编码', w['languageCode']),
                    this['BuildSysString']('电池\x20', w['getBatteryLevel']()['toFixed'](0x2)),
                    this['BuildSysString']('屏幕尺寸', X['x']['toFixed'](0x0) + '\x20x\x20' + X['y']['toFixed'](0x0)),
                    this['BuildCocosString']('引擎版本', 'CocosCreator\x20' + x),
                    this['BuildCocosString']('是否开启调试', B['toString']()),
                    this['BuildCocosString']('是否是编辑器', C['valueOf']()['toString']()),
                    this['sysLabel']['string'] = this['sysString']['toString'](),
                    this['sysTitleLabel']['string'] = this['sysTitleString']['toString'](),
                    this['cocosLabel']['string'] = this['cocosString']['toString'](),
                    this['cocosTitleLabel']['string'] = this['cocosTitleString']['toString']();
                }
                ,
                W['BuildSysString'] = function(X, Y) {
                    this['sysTitleString']['append'](X),
                    this['sysTitleString']['append']('\x0a'),
                    this['sysString']['append'](':\x20\x20\x20'),
                    this['sysString']['append'](Y),
                    this['sysString']['append']('\x0a');
                }
                ,
                W['BuildCocosString'] = function(X, Y) {
                    this['cocosTitleString']['append'](X),
                    this['cocosTitleString']['append']('\x0a'),
                    this['cocosString']['append'](':\x20\x20'),
                    this['cocosString']['append'](Y),
                    this['cocosString']['append']('\x0a');
                }
                ,
                U;
            }(z))['prototype'], 'sysLabel', [E], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            M = d(J['prototype'], 'sysTitleLabel', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            N = d(J['prototype'], 'cocosLabel', [G], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            O = d(J['prototype'], 'cocosTitleLabel', [H], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': null
            }),
            I = J)) || I)),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Timer.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['createClass'];
        }
        , function(d) {
            c = d['cclegacy'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '6021fct1uhJsImEuhdFWC0f', 'Timer', void 0x0),
            a('Timer', (function() {
                function d(g) {
                    void 0x0 === g && (g = 0x0),
                    this['callback'] = null,
                    this['_elapsedTime'] = 0x0,
                    this['_step'] = -0x1,
                    this['step'] = g;
                }
                var f = d['prototype'];
                return f['update'] = function(g) {
                    return !(this['step'] <= 0x0) && (this['_elapsedTime'] += g,
                    this['_elapsedTime'] >= this['_step'] && (this['_elapsedTime'] -= this['_step'],
                    null == (h = this['callback']) || h['call'](this),
                    !0x0));
                    var h;
                }
                ,
                f['reset'] = function() {
                    this['_elapsedTime'] = 0x0;
                }
                ,
                f['stop'] = function() {
                    this['_elapsedTime'] = 0x0,
                    this['step'] = -0x1;
                }
                ,
                b(d, [{
                    'key': 'elapsedTime',
                    'get': function() {
                        return this['_elapsedTime'];
                    }
                }, {
                    'key': 'step',
                    'get': function() {
                        return this['_step'];
                    },
                    'set': function(g) {
                        this['_step'] = g,
                        this['_elapsedTime'] = 0x0;
                    }
                }, {
                    'key': 'progress',
                    'get': function() {
                        return this['_elapsedTime'] / this['_step'];
                    }
                }]),
                d;
            }())),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/TimerManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './StringUtil.ts', './Timer.ts'], function(a) {
    var b, c, d, f, g;
    return {
        'setters': [function(h) {
            b = h['inheritsLoose'];
        }
        , function(h) {
            c = h['cclegacy'],
            d = h['Component'];
        }
        , function(h) {
            f = h['StringUtil'];
        }
        , function(h) {
            g = h['Timer'];
        }
        ],
        'execute': function() {
            c['_RF']['push']({}, '73600VLsIBLOKhOhd7td4P8', 'TimerManager', void 0x0),
            a('TimerManager', function(h) {
                function j() {
                    for (var l, m = arguments['length'], p = new Array(m), q = 0x0; q < m; q++)
                        p[q] = arguments[q];
                    return (l = h['call']['apply'](h, [this]['concat'](p)) || this)['times'] = {},
                    l['initTime'] = new Date()['getTime'](),
                    l['serverTime'] = 0x0,
                    l;
                }
                b(j, h);
                var k = j['prototype'];
                return k['update'] = function(l) {
                    for (var m in this['times']) {
                        var p = this['times'][m];
                        p['timer']['update'](l) && p['object'][p['field']] > 0x0 && (p['object'][p['field']]--,
                        0x0 == p['object'][p['field']] ? this['onTimerComplete'](p) : p['onSecond'] && p['onSecond']['call'](p['object']));
                    }
                }
                ,
                k['onTimerComplete'] = function(l) {
                    l['onComplete'] && l['onComplete']['call'](l['object']),
                    l['event'] && this['node']['dispatchEvent'](l['event']),
                    delete this['times'][l['id']];
                }
                ,
                k['register'] = function(l, p, q, u) {
                    var v = new g();
                    v['step'] = 0x1;
                    var w = {};
                    return w['id'] = f['guid'](),
                    w['timer'] = v,
                    w['object'] = l,
                    w['field'] = p,
                    w['onSecond'] = q,
                    w['onComplete'] = u,
                    this['times'][w['id']] = w,
                    w['id'];
                }
                ,
                k['unRegister'] = function(l) {
                    this['times'][l] && delete this['times'][l];
                }
                ,
                k['setServerTime'] = function(l) {
                    return l && (this['serverTime'] = l),
                    this['serverTime'];
                }
                ,
                k['getServerTime'] = function() {
                    return this['serverTime'] + this['getTime']();
                }
                ,
                k['format'] = function(l, m) {
                    var p = {
                        'M+': m['getMonth']() + 0x1,
                        'd+': m['getDate'](),
                        'h+': m['getHours'](),
                        'm+': m['getMinutes'](),
                        's+': m['getSeconds'](),
                        'q+': Math['floor']((m['getMonth']() + 0x3) / 0x3),
                        'S': m['getMilliseconds']()
                    };
                    for (var q in (/(y+)/['test'](l) && (l = l['replace'](RegExp['$1'], (m['getFullYear']() + '')['substr'](0x4 - RegExp['$1']['length']))),
                    p))
                        new RegExp('(' + q + ')')['test'](l) && (l = l['replace'](RegExp['$1'], 0x1 == RegExp['$1']['length'] ? p[q] : ('00' + p[q])['substr'](('' + p[q])['length'])));
                    return l;
                }
                ,
                k['getTime'] = function() {
                    return this['getLocalTime']() - this['initTime'];
                }
                ,
                k['getLocalTime'] = function() {
                    return Date['now']();
                }
                ,
                k['save'] = function() {
                    for (var l in this['times'])
                        this['times'][l]['startTime'] = this['getTime']();
                }
                ,
                k['load'] = function() {
                    for (var l in this['times']) {
                        var m = Math['floor']((this['getTime']() - (this['times'][l]['startTime'] || this['getTime']())) / 0x3e8)
                          , p = this['times'][l];
                        p['object'][p['field']] = p['object'][p['field']] - m,
                        p['object'][p['field']] < 0x0 && (p['object'][p['field']] = 0x0,
                        this['onTimerComplete'](p)),
                        this['times'][l]['startTime'] = null;
                    }
                }
                ,
                j;
            }(d)),
            c['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/UIMap.ts', ['cc'], function(a) {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '1bd03ggtItIIajoqd0I4VGL', 'UIMap', void 0x0);
            var c = function() {
                this['id'] = void 0x0,
                this['pid'] = void 0x0,
                this['parent'] = null,
                this['child'] = [],
                this['name'] = void 0x0,
                this['panel'] = void 0x0;
            };
            a('UIMap', (function() {
                function d() {
                    this['manager'] = void 0x0,
                    this['nodes'] = new Map();
                }
                var e = d['prototype'];
                return e['init'] = function(f, g) {
                    var h = this;
                    for (var j in (this['manager'] = f,
                    g)) {
                        var k = g[j]
                          , l = new c();
                        l['id'] = parseInt(j),
                        l['pid'] = k['parent'],
                        l['name'] = k['name'],
                        l['panel'] = k['panel'],
                        this['nodes']['set'](l['id'], l);
                    }
                    this['nodes']['forEach'](function(m, o) {
                        m['parent'] = h['nodes']['get'](m['pid']),
                        m['parent'] && m['parent']['child']['push'](m);
                    });
                }
                ,
                e['pathFinding'] = function(f, g) {
                    var h = this
                      , j = this['nodes']['get'](f)
                      , k = this['nodes']['get'](g)
                      , l = this['findUp'](j)
                      , m = this['findUp'](k);
                    return l['forEach'](function(o) {
                        h['manager']['remove'](o['id'], !0x0);
                    }),
                    m['forEach'](function(o) {
                        h['manager']['open'](o['id']);
                    }),
                    {
                        'paths_close': l,
                        'paths_open': m
                    };
                }
                ,
                e['findUp'] = function(f) {
                    for (var g = [], h = f; null != h['parent']; )
                        g['push'](h),
                        h = h['parent'];
                    return g;
                }
                ,
                e['release'] = function() {
                    this['nodes']['clear']();
                }
                ,
                d;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/Vec3Util.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './MathUtil.ts'], function(b) {
    var c, d, f, g, h;
    return {
        'setters': [function(i) {
            c = i['createClass'];
        }
        , function(i) {
            d = i['cclegacy'],
            f = i['Vec3'],
            g = i['Mat4'];
        }
        , function(i) {
            h = i['MathUtil'];
        }
        ],
        'execute': function() {
            d['_RF']['push']({}, '38947ih8d5EQ7HG4buug+SR', 'Vec3Util', void 0x0),
            b('Vec3Util', (function() {
                function i() {}
                return i['progress'] = function(j, k, l) {
                    var m = new f();
                    return m['x'] = h['progress'](j['x'], k['x'], l),
                    m['y'] = h['progress'](j['y'], k['y'], l),
                    m['z'] = h['progress'](j['z'], k['z'], l),
                    m;
                }
                ,
                i['add'] = function(j, k) {
                    var l = new f();
                    return f['add'](l, j, k),
                    l;
                }
                ,
                i['sub'] = function(j, k) {
                    var l = new f();
                    return f['subtract'](l, j, k),
                    l;
                }
                ,
                i['mul'] = function(j, k) {
                    var l = new f();
                    return f['multiplyScalar'](l, j, k),
                    l;
                }
                ,
                i['div'] = function(j, k) {
                    var l = new f();
                    return l['x'] = j['x'] / k,
                    l['y'] = j['y'] / k,
                    l['z'] = j['z'] / k,
                    l;
                }
                ,
                i['equals'] = function(j, k) {
                    return j['x'] == k['x'] && j['y'] == k['y'] && j['z'] == k['z'];
                }
                ,
                i['magnitude'] = function(j) {
                    return j['length']();
                }
                ,
                i['normalize'] = function(j) {
                    return new f(j['x'],j['y'],j['z'])['normalize']();
                }
                ,
                i['direction'] = function(j, k) {
                    var l = new f();
                    return f['subtract'](l, k, j),
                    l['normalize']();
                }
                ,
                i['distance'] = function(j, k) {
                    return f['distance'](j, k);
                }
                ,
                i['lerp'] = function(j, k, l) {
                    return this['bezierOne'](l, j, k);
                }
                ,
                i['slerp'] = function(j, k, l) {
                    if (l <= 0x0)
                        return j;
                    if (l >= 0x1)
                        return k;
                    var m = this['rotateTo'](j, k, f['angle'](j, k) / Math['PI'] * 0xb4 * l)
                      , o = k['length']() * l + j['length']() * (0x1 - l);
                    return m['normalize']()['multiplyScalar'](o);
                }
                ,
                i['rotateTo'] = function(j, k, m) {
                    if (0x0 == f['angle'](j, k))
                        return k;
                    var o = new f();
                    f['cross'](o, j, k),
                    o['normalize']();
                    var p = m * Math['PI'] / 0xb4
                      , q = new g();
                    return q['rotate'](p, o),
                    new f(j['x'] * q['m00'] + j['y'] * q['m04'] + j['z'] * q['m08'],j['x'] * q['m01'] + j['y'] * q['m05'] + j['z'] * q['m09'],j['x'] * q['m02'] + j['y'] * q['m06'] + j['z'] * q['m10']);
                }
                ,
                i['bezierOne'] = function(j, k, l) {
                    j > 0x1 ? j = 0x1 : j < 0x0 && (j = 0x0);
                    var m = k['clone']()
                      , o = l['clone']();
                    return m['multiplyScalar'](0x1 - j)['add'](o['multiplyScalar'](j));
                }
                ,
                i['bezierTwo'] = function(j, k, m, p) {
                    j > 0x1 ? j = 0x1 : j < 0x0 && (j = 0x0);
                    var q = 0x1 - j
                      , s = j * j
                      , v = k['clone']()
                      , w = new f()
                      , x = m['clone']()
                      , z = p['clone']();
                    return w['add'](v['multiplyScalar'](q * q)),
                    w['add'](x['multiplyScalar'](0x2 * q * j)),
                    w['add'](z['multiplyScalar'](s)),
                    w;
                }
                ,
                i['bezierThree'] = function(j, k, p, q, v) {
                    j > 0x1 ? j = 0x1 : j < 0x0 && (j = 0x0);
                    var w = 0x1 - j
                      , x = w * w
                      , z = x * w
                      , A = j * j
                      , B = A * j
                      , C = k['clone']()
                      , D = k['clone']()
                      , E = p['clone']()
                      , F = q['clone']()
                      , G = v['clone']();
                    return D['add'](C['multiplyScalar'](z)),
                    D['add'](E['multiplyScalar'](0x3 * x * j)),
                    D['add'](F['multiplyScalar'](0x3 * w * A)),
                    D['add'](G['multiplyScalar'](B)),
                    D;
                }
                ,
                i['dot'] = function(j, k) {
                    var l = j
                      , m = k;
                    return l['x'] * m['x'] + l['y'] * m['y'] + l['z'] * m['z'];
                }
                ,
                i['cross'] = function(j, k) {
                    var m = new f(0x1,0x0,0x0)
                      , p = new f(0x0,0x1,0x0)
                      , q = new f(0x0,0x0,0x1)
                      , s = new f(j['x'],j['y'],j['z'])
                      , v = new f(k['x'],k['y'],k['z'])
                      , w = m['multiplyScalar'](s['y'] * v['z'] - v['y'] * s['z'])
                      , x = p['multiplyScalar'](v['x'] * s['z'] - s['x'] * v['z'])
                      , z = q['multiplyScalar'](s['x'] * v['y'] - v['x'] * s['y']);
                    return w['add'](x)['add'](z);
                }
                ,
                i['angle'] = function(j, k) {
                    var l = this['dot'](j['clone']()['normalize'](), k['clone']()['normalize']());
                    return Math['acos'](l) / Math['PI'] * 0xb4 * Math['sign'](l);
                }
                ,
                i['dirAngle'] = function(j, k) {
                    var l = i['cross'](j, k);
                    return i['angle'](j, k) * Math['sign'](i['dot'](l['normalize'](), i['cross'](k['normalize'](), j['normalize']())));
                }
                ,
                c(i, null, [{
                    'key': 'x',
                    'get': function() {
                        return new f(0x1,0x0,0x0);
                    }
                }, {
                    'key': 'y',
                    'get': function() {
                        return new f(0x0,0x1,0x0);
                    }
                }, {
                    'key': 'z',
                    'get': function() {
                        return new f(0x0,0x0,0x1);
                    }
                }, {
                    'key': 'left',
                    'get': function() {
                        return new f(-0x1,0x0,0x0);
                    }
                }, {
                    'key': 'right',
                    'get': function() {
                        return new f(0x1,0x0,0x0);
                    }
                }, {
                    'key': 'up',
                    'get': function() {
                        return new f(0x0,0x1,0x0);
                    }
                }, {
                    'key': 'down',
                    'get': function() {
                        return new f(0x0,-0x1,0x0);
                    }
                }, {
                    'key': 'forward',
                    'get': function() {
                        return new f(0x0,0x0,0x1);
                    }
                }, {
                    'key': 'back',
                    'get': function() {
                        return new f(0x0,0x0,-0x1);
                    }
                }, {
                    'key': 'one',
                    'get': function() {
                        return new f(0x1,0x1,0x1);
                    }
                }, {
                    'key': 'zero',
                    'get': function() {
                        return new f(0x0,0x0,0x0);
                    }
                }]),
                i;
            }())),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/VersionManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseNativeFun.ts', './DownGameTask.ts', './Oops.ts', './Language.ts'], function(b) {
    var c, d, f, g, h, j, k, m, p;
    return {
        'setters': [function(q) {
            c = q['createClass'];
        }
        , function(q) {
            d = q['cclegacy'],
            f = q['native'],
            g = q['resources'],
            h = q['sys'];
        }
        , function(q) {
            j = q['NativeFun'];
        }
        , function(q) {
            k = q['DownGameTask'];
        }
        , function(q) {
            m = q['oops'];
        }
        , function(q) {
            p = q['LanguageDefine'];
        }
        ],
        'execute': function() {
            d['_RF']['push']({}, 'f17999G1JJFN40EU/vQP00R', 'VersionManager', void 0x0),
            b('decompressZip', function(M, N, O) {
                my_ns['MyUtils']['uncompressDir'](M, N, O);
            });
            var q = b('getDirByUrl', function(M) {
                var N = M['split']('/')
                  , O = '';
                if (N['length'] > 0x1)
                    for (var P = 0x0; P < N['length'] - 0x1; P++) {
                        var Q = N[P];
                        O = 0x0 == P ? Q : O + '/' + Q;
                    }
                else
                    O = N[0x0];
                return O += '/';
            })
              , w = b('StateCode', function(M) {
                return M[M['UPDATE_SUCCESS'] = 0x0] = 'UPDATE_SUCCESS',
                M[M['NO_NEED_UPDATE'] = 0x1] = 'NO_NEED_UPDATE',
                M[M['GET_VERSION_CONFIG_FAIL'] = 0x2] = 'GET_VERSION_CONFIG_FAIL',
                M[M['GET_MD5_CONFIG_FAIL'] = 0x3] = 'GET_MD5_CONFIG_FAIL',
                M[M['DOWNLOAD_FILE_FAIL'] = 0x4] = 'DOWNLOAD_FILE_FAIL',
                M[M['MOVE_FILE_FAIL'] = 0x5] = 'MOVE_FILE_FAIL',
                M[M['READ_CONFIG_FAIL'] = 0x6] = 'READ_CONFIG_FAIL',
                M[M['UNSUPPORT_HOT_UPDATE'] = 0x7] = 'UNSUPPORT_HOT_UPDATE',
                M[M['UNSUPPORT_HOT_UPDATE_CHANNEL'] = 0x8] = 'UNSUPPORT_HOT_UPDATE_CHANNEL',
                M[M['FORCE_UPDATE'] = 0x9] = 'FORCE_UPDATE',
                M[M['UN_ZIP_FAIL'] = 0xa] = 'UN_ZIP_FAIL',
                M;
            }({}))
              , x = b('SubGameState', function(M) {
                return M[M['NO_NEED_UPDATE'] = 0x0] = 'NO_NEED_UPDATE',
                M[M['NEED_UPDATE'] = 0x1] = 'NEED_UPDATE',
                M[M['NEED_DOWNLOAD'] = 0x2] = 'NEED_DOWNLOAD',
                M[M['DOWNLOAD_FAIL'] = 0x3] = 'DOWNLOAD_FAIL',
                M[M['UPDATE_SUCCESS'] = 0x4] = 'UPDATE_SUCCESS',
                M[M['GET_MD5_CONFIG_FAIL'] = 0x5] = 'GET_MD5_CONFIG_FAIL',
                M[M['UN_ZIP_FAIL'] = 0x6] = 'UN_ZIP_FAIL',
                M;
            }({}))
              , y = b('LanState', function(M) {
                return M[M['READ_CONFIG_FAIL'] = 0x0] = 'READ_CONFIG_FAIL',
                M[M['LOAD_REMOTE_FAIL'] = 0x1] = 'LOAD_REMOTE_FAIL',
                M[M['NO_NEED_UPDATE'] = 0x2] = 'NO_NEED_UPDATE',
                M[M['DOWNLOAD_FILE_FAIL'] = 0x3] = 'DOWNLOAD_FILE_FAIL',
                M[M['UPDATE_SUCCESS'] = 0x4] = 'UPDATE_SUCCESS',
                M[M['UN_ZIP_FAIL'] = 0x5] = 'UN_ZIP_FAIL',
                M[M['MOVE_FILE_FAIL'] = 0x6] = 'MOVE_FILE_FAIL',
                M;
            }({}))
              , z = '-1'
              , A = 'version'
              , B = 'version_customer'
              , D = b('ConfigPath', '')
              , G = b('PackageOutPath', '')
              , H = b('CustomerOutPath', '')
              , I = b('DownTempDir', 'packageTemp')
              , J = b('WriteableDir', 'package')
              , K = b('SubGameDirName', 'remote');
            b('VersionManager', (function() {
                function M() {
                    this['hotUrl'] = null,
                    this['finishCall'] = null,
                    this['progressCall'] = null,
                    this['localConfig'] = null,
                    this['remoteConfig'] = null,
                    this['remoteMD5Config'] = null,
                    this['downSubGameCount'] = 0x0,
                    this['downGameTask'] = new Map(),
                    this['mainMaxPercent'] = 0.8,
                    this['localSubGameInfo'] = new Map(),
                    this['remoteSubGameInfo'] = null,
                    this['localLobbyLanConfig'] = null,
                    this['remoteLanConfig'] = null,
                    this['lanProgressFun'] = null,
                    this['lanFinishFun'] = null,
                    this['customerConfig'] = null,
                    this['remoteCustomerConfig'] = null;
                }
                var N = M['prototype'];
                return N['startUpdate'] = function() {
                    var O = this;
                    this['parseLocalConfig'](function() {
                        O['parseRemoteConfig'](function(P) {
                            0x1 == P ? O['compareVersion']() : O['finishCall'](w['GET_VERSION_CONFIG_FAIL'], O['hotUrl'], O['startUpdate']['bind'](O));
                        });
                    });
                }
                ,
                N['getDownloadingSubGameCount'] = function() {
                    return this['downSubGameCount'];
                }
                ,
                N['parseLocalConfig'] = function(O) {
                    var P = this;
                    this['localConfig'] = null,
                    f['fileUtils']['isFileExist'](G) ? (this['localConfig'] = JSON['parse'](f['fileUtils']['getStringFromFile'](G)),
                    O()) : g['load']('version', function(Q, R) {
                        Q || (P['localConfig'] = JSON['parse'](R['text'])),
                        O();
                    });
                }
                ,
                N['parseRemoteConfig'] = function(O) {
                    var P = this;
                    this['sendHttpRequest'](this['hotUrl'], function(Q, R) {
                        Q ? O(0x0) : (P['remoteConfig'] = JSON['parse'](R),
                        O(0x1));
                    });
                }
                ,
                N['compareVersion'] = function() {
                    var O = this
                      , P = this['getLocalVersion']()
                      , Q = this['getRemoteVersion']();
                    console['log']('compareVersion\x20localVersion:' + P + '\x20remoteVersion:' + Q);
                    var R = this['remoteConfig']['forcedBinaryVersions']
                      , S = this['remoteConfig']['banchannels']
                      , T = j['getAppVersion']()
                      , V = j['getGameChanel']();
                    S && -0x1 != S['indexOf'](V) ? this['finishCall'](w['UNSUPPORT_HOT_UPDATE_CHANNEL']) : R && -0x1 != R['indexOf'](T) ? this['finishCall'](w['FORCE_UPDATE']) : P != Q ? this['getRemoteMD5Config'](function(W, X) {
                        if (0x1 == W) {
                            var Y = O['remoteMD5Config']['files']
                              , Z = O['localConfig']['files']
                              , a0 = O['compareChangeList'](Z, Y)
                              , a1 = O['getBaseUrl']();
                            O['downChangeFiles'](a1, a0, function(a2) {
                                O['finishCall'](w['DOWNLOAD_FILE_FAIL'], a2, O['compareVersion']['bind'](O));
                            }, function(a2) {
                                O['progressCall'](a2 * O['mainMaxPercent']);
                            }, function(a2) {
                                O['moveFiles'](a2, function(a3) {
                                    0x1 == a3 ? O['finishCall'](w['UN_ZIP_FAIL']) : 0x2 == a3 && O['finishCall'](w['MOVE_FILE_FAIL'], '');
                                }, function() {
                                    O['updateSuccess']();
                                });
                            });
                        } else
                            O['finishCall'](w['GET_MD5_CONFIG_FAIL'], X, O['compareVersion']['bind'](O));
                    }) : this['hasCustomerUpdate']() ? (this['progressCall'](this['mainMaxPercent']),
                    this['checkCustomerUpdate'](!0x1)) : this['finishCall'](w['NO_NEED_UPDATE']);
                }
                ,
                N['compareChangeList'] = function(O, P) {
                    var Q = 0x0
                      , R = [];
                    for (var S in P) {
                        var T = P[S]
                          , V = O[S];
                        if (!V || V['md5'] != T['md5']) {
                            Q += T['size'];
                            var W = {
                                'fileName': S,
                                'md5': T['md5'],
                                'size': T['size']
                            };
                            R['push'](W);
                        }
                    }
                    return {
                        'changeList': R,
                        'totalDownSize': Q
                    };
                }
                ,
                N['downChangeFiles'] = function(O, P, Q, R, S) {
                    var T = 0x0
                      , V = new f['Downloader']({
                        'countOfMaxProcessingTasks': 0x3
                    })
                      , W = P['changeList']
                      , X = (W['length'],
                    [])
                      , Y = function() {
                        var Z = W['pop']();
                        if (Z) {
                            X['push'](Z);
                            var a0 = '' + O + Z['fileName']
                              , a1 = I + '/' + Z['fileName']
                              , a2 = q(a1);
                            f['fileUtils']['isDirectoryExist'](a2) || f['fileUtils']['createDirectory'](a2),
                            V['createDownloadTask'](a0, a1);
                        } else
                            R(0x1),
                            S(X);
                    };
                    V['onProgress'] = function(Z, a0, a1, a2) {
                        R((T += a0) / P['totalDownSize']);
                    }
                    ,
                    V['onSuccess'] = function(Z) {
                        Y();
                    }
                    ,
                    V['onError'] = function(Z, a0, a1, a2) {
                        Q(Z['requestURL']);
                    }
                    ,
                    Y();
                }
                ,
                N['moveFiles'] = function(O, P, Q, R) {
                    !function S() {
                        var T = O['pop']();
                        if (T) {
                            var V = T['fileName']
                              , W = I + '/' + V;
                            R && (V = R(V));
                            var X = J + '/' + V
                              , Y = q(X);
                            if (f['fileUtils']['isDirectoryExist'](Y) || f['fileUtils']['createDirectory'](Y),
                            V['endsWith']('.zip'))
                                my_ns['MyUtils']['uncompressDir'](W, Y, function(a0) {
                                    a0 ? S() : P(0x1);
                                });
                            else {
                                var Z = f['fileUtils']['getDataFromFile'](W);
                                f['fileUtils']['writeDataToFile'](Z, X) ? S() : (O['unshift'](T),
                                P(0x2),
                                f['fileUtils']['removeDirectory'](J));
                            }
                        } else
                            Q();
                    }();
                }
                ,
                N['updateSuccess'] = function() {
                    f['fileUtils']['writeStringToFile'](JSON['stringify'](this['remoteMD5Config']), G),
                    this['hasCustomerUpdate']() ? this['checkCustomerUpdate'](!0x0) : this['finishCall'](w['UPDATE_SUCCESS']);
                }
                ,
                N['getRemoteMD5Config'] = function(O) {
                    var P = this
                      , Q = this['getBaseUrl']() + this['remoteConfig']['configFile'];
                    this['sendHttpRequest'](Q, function(R, S) {
                        R ? O(0x0, Q) : (P['remoteMD5Config'] = JSON['parse'](S),
                        O(0x1, Q));
                    });
                }
                ,
                N['getPlatForm'] = function() {
                    return h['platform']['toLowerCase']();
                }
                ,
                N['sendHttpRequest'] = function(O, P, Q) {
                    void 0x0 === Q && (Q = '');
                    var R = new XMLHttpRequest();
                    R['responseType'] = Q,
                    R['onreadystatechange'] = function() {
                        0x4 == R['readyState'] && (R['status'] >= 0xc8 && R['status'] < 0x12c ? P(!0x1, R['response']) : P(!0x0, null));
                    }
                    ,
                    R['onerror'] = function() {
                        P(!0x0, null);
                    }
                    ,
                    R['ontimeout'] = function() {
                        P(!0x0, null);
                    }
                    ,
                    R['onabort'] = function() {
                        P(!0x0, null);
                    }
                    ,
                    R['open']('GET', O, !0x0),
                    R['timeout'] = 0x2710,
                    R['send']();
                }
                ,
                N['checkUpdate'] = function(O, P, Q) {
                    this['hotUrl'] = O,
                    this['finishCall'] = P,
                    this['progressCall'] = Q,
                    this['startUpdate']();
                }
                ,
                N['getLocalVersion'] = function() {
                    return this['localConfig']['scriptVersion'];
                }
                ,
                N['getRemoteVersion'] = function() {
                    return this['remoteConfig']['scriptVersion'];
                }
                ,
                N['parseLocalSubGameInfo'] = function(O) {
                    this['localSubGameInfo']['clear']();
                    var P = O['subgames']
                      , Q = J + '/' + K;
                    for (var R in P) {
                        var S = P[R]['ID']
                          , T = {
                            'ID': S,
                            'version': z
                        }
                          , V = Q + '/' + S
                          , W = V + '/' + A
                          , X = V + '/cc.config.json'
                          , Y = V + '/index.jsc'
                          , Z = V + '/import'
                          , a0 = V + '/native';
                        if (f['fileUtils']['isFileExist'](W) && f['fileUtils']['isFileExist'](X) && f['fileUtils']['isFileExist'](Y) && f['fileUtils']['isDirectoryExist'](Z) && f['fileUtils']['isDirectoryExist'](a0)) {
                            var a1 = f['fileUtils']['getStringFromFile'](W)
                              , a2 = JSON['parse'](a1);
                            T['version'] = a2['scriptVersion'],
                            T['files'] = a2;
                        } else
                            this['deleteSubGame'](S);
                        this['localSubGameInfo']['set'](S, T);
                    }
                }
                ,
                N['getRemoteSubgameInfo'] = function(O) {
                    var P;
                    return null == (P = this['RemoteGameInfo']) ? void 0x0 : P['subgames'][O];
                }
                ,
                N['getRemoteGameVersion'] = function(O) {
                    var P;
                    return (null == (P = this['getRemoteSubgameInfo'](O)) ? void 0x0 : P['version']) || z;
                }
                ,
                N['getLocalSubgameInfo'] = function(O) {
                    return this['localSubGameInfo']['get'](O);
                }
                ,
                N['getLocalGameVersion'] = function(O) {
                    var P;
                    return (null == (P = this['getLocalSubgameInfo'](O)) ? void 0x0 : P['version']) || z;
                }
                ,
                N['parseRemoteSubGameInfo'] = function(O, P) {
                    var Q = this;
                    this['sendHttpRequest'](O, function(R, S) {
                        R ? P(0x0) : (Q['remoteSubGameInfo'] = JSON['parse'](S),
                        Q['parseLocalSubGameInfo'](Q['remoteSubGameInfo']),
                        P(0x1));
                    });
                }
                ,
                N['getSubGameState'] = function(O) {
                    var P = this['getLocalGameVersion'](O)
                      , Q = this['getRemoteGameVersion'](O)
                      , R = x['NEED_DOWNLOAD'];
                    return P == Q && (R = this['gameLanguageHasUpdate'](O) ? x['NEED_UPDATE'] : x['NO_NEED_UPDATE']),
                    R;
                }
                ,
                N['gameLanguageHasUpdate'] = function(O) {
                    var P = !0x1
                      , Q = [p['EN']]
                      , R = m['language']['current'];
                    R != p['EN'] && Q['push'](R);
                    for (var S = this['localSubGameInfo']['get'](O), T = this['RemoteGameInfo']['subgames'][O], V = 0x0; V < Q['length']; V++) {
                        var W, X, Y = Q[V];
                        if ((null == S || null == (W = S['files']) || null == (X = W['lan'][Y]) ? void 0x0 : X['scriptVersion']) != (null == T ? void 0x0 : T['lan'][Y])) {
                            P = !0x0;
                            break;
                        }
                    }
                    return P;
                }
                ,
                N['updateSubgame'] = function(O, P, Q, R) {
                    var S = this
                      , T = this['getLocalSubgameInfo'](O)
                      , V = this['getRemoteSubgameInfo'](O)
                      , W = this['getBaseUrl']()
                      , X = '' + W + K + '/' + O + '/' + 'version.txt';
                    this['downSubGameCount'] += 0x1,
                    this['sendHttpRequest'](X, function(Y, Z) {
                        var a0;
                        if (Y)
                            return P(x['GET_MD5_CONFIG_FAIL'], X),
                            void (S['downSubGameCount'] -= 0x1);
                        Q(0.1);
                        var a1 = JSON['parse'](Z)
                          , a2 = T['files']
                          , a3 = [p['EN']];
                        m['language']['current'] != p['EN'] && a3['push'](m['language']['current']);
                        var a4 = S['parseGameLanManifest'](a3, a2)
                          , a5 = S['parseGameLanManifest'](a3, a1)
                          , a6 = S['compareUpdateManifest'](a4, a5)
                          , a7 = S['compareUpdateManifest'](null == (a0 = a2) ? void 0x0 : a0['files'], a1['files'])
                          , a8 = function(ac, ad) {
                            P(ac, ad),
                            S['downSubGameCount'] -= 0x1;
                        }
                          , a9 = function(ac, ad, ae) {
                            Q(ad + ac * (ae - ad));
                        }
                          , aa = function ac(ad) {
                            var ae = J + '/' + K + '/' + O + '/' + A;
                            if (null == a2 ? a2 = {
                                'scriptVersion': '',
                                'files': {},
                                'lan': {}
                            } : null == a2['lan'] && (a2['lan'] = {}),
                            ad ? a3['forEach'](function(ag) {
                                a2['lan'][ag] = a1['lan'][ag];
                            }) : (a2['scriptVersion'] = a1['scriptVersion'],
                            a2['files'] = a1['files']),
                            f['fileUtils']['writeStringToFile'](JSON['stringify'](a2), ae),
                            ad) {
                                null == R || R['call'](x['UPDATE_SUCCESS']);
                                var af = new k(W,a7,a8,function(ag) {
                                    a9(ag, 0.4, 0.8);
                                }
                                ,function() {
                                    ac(!0x1);
                                }
                                );
                                af['start'](),
                                S['downGameTask']['set'](O, af);
                            } else
                                T['version'] = V['version'],
                                T['files'] = a2,
                                S['localSubGameInfo']['set'](O, T),
                                S['downSubGameCount'] -= 0x1,
                                Q(0x1),
                                P(x['UPDATE_SUCCESS']);
                        }
                          , ab = new k(W,a6,a8,function(ad) {
                            a9(ad, 0.1, 0.4);
                        }
                        ,function() {
                            aa(!0x0);
                        }
                        );
                        ab['start'](),
                        S['downGameTask']['set'](O, ab);
                    });
                }
                ,
                N['parseGameLanManifest'] = function(O, P) {
                    var Q = {};
                    return (null == O ? void 0x0 : O['length']) > 0x0 && null != (null == P ? void 0x0 : P['lan']) && O['forEach'](function(R) {
                        var S = P['lan'][R];
                        if (null != (null == S ? void 0x0 : S['files'])) {
                            for (var T in S['files'])
                                Q[T] = S['files'][T];
                        }
                    }),
                    Q;
                }
                ,
                N['compareUpdateManifest'] = function(O, P) {
                    var Q = {
                        'changeList': [],
                        'totalDownSize': 0x0
                    };
                    for (var R in P) {
                        var S = P[R]
                          , T = null == O ? void 0x0 : O[R];
                        null != T && T['md5'] == S['md5'] || (Q['changeList']['push']({
                            'fileName': R,
                            'md5': S['md5'],
                            'size': S['size']
                        }),
                        Q['totalDownSize'] += S['size']);
                    }
                    return Q;
                }
                ,
                N['getMaketUrl'] = function() {
                    var O = j['getGameChanel']();
                    return this['remoteConfig']['marketUrl'][O];
                }
                ,
                N['deleteSubGame'] = function(O) {
                    var P = {
                        'ID': O,
                        'version': z
                    };
                    this['localSubGameInfo']['set'](O, P);
                    var Q = J + '/' + K + '/' + O + '/';
                    f['fileUtils']['isDirectoryExist'](Q) && f['fileUtils']['removeDirectory'](Q);
                }
                ,
                N['stopDownGame'] = function(O) {
                    var P = this['downGameTask']['get'](O);
                    P && P['stop'](),
                    this['downSubGameCount'] = this['downSubGameCount'] - 0x1;
                }
                ,
                N['resumeDownGame'] = function(O) {
                    var P = this['downGameTask']['get'](O);
                    P && P['resume'](),
                    this['downSubGameCount'] = this['downSubGameCount'] + 0x1;
                }
                ,
                N['getBaseUrl'] = function() {
                    var O = this['getPlatForm']();
                    return '' + this['remoteConfig']['baseUrl'] + O + '/version_' + this['remoteConfig']['scriptVersion'] + '/';
                }
                ,
                N['getRemoteUrl'] = function() {
                    return '' + this['getBaseUrl']() + K + '/';
                }
                ,
                N['downLoadSubGameIcon'] = function(O, P) {
                    var Q = new Map();
                    if (f['fileUtils']['isFileExist']('')) {
                        var R = f['fileUtils']['getStringFromFile']('');
                        Q = JSON['parse'](R);
                    }
                    var S = this['RemoteGameInfo']['icons']
                      , T = [];
                    Object['keys'](S)['forEach'](function(V) {
                        var W = S[V]
                          , X = W['ID'];
                        W['version'] != Q[X] && T['push'](X);
                    }),
                    console['log']('downIcons', T),
                    T['length'] > 0x0 ? this['downIcons'](T, O, P) : O(!0x0);
                }
                ,
                N['downIcons'] = function(O, P, Q) {
                    var R = this
                      , S = O['length']
                      , T = 0x1;
                    !function V() {
                        var W = O['pop']();
                        W ? R['downIcon'](W, function(X, Y) {
                            X ? (Q(T / S),
                            T += 0x1,
                            V()) : (O['unshift'](W),
                            P(!0x1, Y, function() {
                                R['downIcons'](O, P, Q);
                            }));
                        }) : P(!0x0);
                    }();
                }
                ,
                N['downIcon'] = function(O, P) {
                    var Q = this
                      , R = ['cc.config.json', 'import.zip', 'native.zip'];
                    R['push']('index.jsc');
                    var S = this['getRemoteUrl']();
                    !function T() {
                        var V = R['pop']();
                        if (V) {
                            var W = '' + S + O + '/' + V
                              , X = '';
                            X = V['endsWith']('.zip') ? I + '/' + K + '/' + O + '/' + V : J + '/' + K + '/' + O + '/' + V;
                            var Y = q(X);
                            f['fileUtils']['isDirectoryExist'](Y) || f['fileUtils']['createDirectory'](Y),
                            Q['downloadFile'](W, X, function(a1) {}, function(a1) {
                                P(!0x1, W);
                            }, function() {
                                if (V['endsWith']('.zip')) {
                                    var a1 = q(J + '/' + K + '/' + O + '/' + V);
                                    f['fileUtils']['isDirectoryExist'](a1) || f['fileUtils']['createDirectory'](a1),
                                    my_ns['MyUtils']['uncompressDir'](X, a1, function(a2) {
                                        a2 ? T() : P(!0x1, W);
                                    });
                                } else
                                    T();
                            });
                        } else {
                            var Z, a0 = null == (Z = Q['RemoteGameInfo']['icons'][O]) ? void 0x0 : Z['version'];
                            a0 && Q['saveIconVerToLocal'](O, a0),
                            P(!0x0);
                        }
                    }();
                }
                ,
                N['saveIconVerToLocal'] = function(O, P) {
                    var Q = new Map();
                    if (f['fileUtils']['isFileExist']('')) {
                        var R = f['fileUtils']['getStringFromFile']('');
                        Q = JSON['parse'](R);
                    }
                    Q[O] = P,
                    f['fileUtils']['writeStringToFile'](JSON['stringify'](Q), '');
                }
                ,
                N['downloadFile'] = function(O, P, Q, R, S) {
                    var T = new f['Downloader']();
                    T['onProgress'] = function(V, W, X, Y) {}
                    ,
                    T['onSuccess'] = function(V) {
                        S();
                    }
                    ,
                    T['onError'] = function(V, W, X, Y) {
                        R(V['requestURL']);
                    }
                    ,
                    T['createDownloadTask'](O, P);
                }
                ,
                N['removeAllSubGame'] = function() {
                    var O = this['remoteSubGameInfo']['subgames'];
                    for (var P in O) {
                        var Q = O[P]['ID'];
                        this['deleteSubGame'](Q);
                    }
                }
                ,
                N['checkLobbyLanUpdate'] = function(O, P, Q) {
                    var R = this;
                    this['lanProgressFun'] = P,
                    this['lanFinishFun'] = Q,
                    this['loadLocalLobbyLanConfig'](O, function() {
                        R['loadRemoteLanConfig'](O, function() {
                            R['compareLanVer'](O);
                        });
                    });
                }
                ,
                N['loadLocalLobbyLanConfig'] = function(O, P) {
                    var Q = this
                      , R = D + '/version_' + O + '.txt';
                    this['localLobbyLanConfig'] = null,
                    f['fileUtils']['isFileExist'](R) ? (this['localLobbyLanConfig'] = JSON['parse'](f['fileUtils']['getStringFromFile'](R)),
                    P()) : g['load']('version_lan', function(S, T) {
                        if (!S) {
                            var V = JSON['parse'](T['text']);
                            Q['localLobbyLanConfig'] = V[O];
                        }
                        P();
                    });
                }
                ,
                N['loadRemoteLanConfig'] = function(O, P) {
                    var Q = this
                      , R = this['getBaseUrl']() + 'version_' + O + '.txt';
                    this['sendHttpRequest'](R, function(S, T) {
                        S ? Q['lanFinishFun'](y['LOAD_REMOTE_FAIL']) : (Q['remoteLanConfig'] = JSON['parse'](T),
                        P());
                    });
                }
                ,
                N['compareLanVer'] = function(O) {
                    var P, Q = this;
                    if ((null == (P = this['localLobbyLanConfig']) ? void 0x0 : P['scriptVersion']) != this['remoteLanConfig']['scriptVersion']) {
                        var R, S = (null == (R = this['localLobbyLanConfig']) ? void 0x0 : R['files']) || {}, T = this['compareChangeList'](S, this['remoteLanConfig']['files']), V = this['getBaseUrl']();
                        this['downChangeFiles'](V, T, function(W) {
                            Q['lanFinishFun'](y['DOWNLOAD_FILE_FAIL'], W);
                        }, function(W) {
                            Q['lanProgressFun'](W);
                        }, function(W) {
                            Q['moveFiles'](W, function(X) {
                                0x1 == X ? Q['lanFinishFun'](y['UN_ZIP_FAIL']) : 0x2 == X && Q['lanFinishFun'](y['MOVE_FILE_FAIL']);
                            }, function() {
                                Q['updateLobbyLanSuccess'](O);
                            });
                        });
                    } else
                        this['lanFinishFun'](y['NO_NEED_UPDATE']);
                }
                ,
                N['updateLobbyLanSuccess'] = function(O) {
                    var P = D + '/version_' + O + '.txt';
                    f['fileUtils']['writeStringToFile'](JSON['stringify'](this['remoteLanConfig']), P),
                    this['lanFinishFun'](y['UPDATE_SUCCESS']);
                }
                ,
                N['checkCustomerUpdate'] = function(O) {
                    var P = this;
                    this['loadCustomerConfig'](function() {
                        var Q;
                        (null == (Q = P['customerConfig']) ? void 0x0 : Q['scriptVersion']) == P['getCsVerison']() ? (P['progressCall'](0x1),
                        O ? P['finishCall'](w['UPDATE_SUCCESS']) : P['finishCall'](w['NO_NEED_UPDATE'])) : P['updateCustomer'](function() {
                            P['updateCustomerSuccess'](),
                            P['finishCall'](w['UPDATE_SUCCESS']);
                        });
                    });
                }
                ,
                N['updateCustomer'] = function(O) {
                    var P = this
                      , Q = this['getVersionCsUrl']()
                      , R = '' + Q + 'version_customer.txt';
                    this['sendHttpRequest'](R, function(S, T) {
                        if (S)
                            P['finishCall'](w['GET_MD5_CONFIG_FAIL'], R);
                        else {
                            var V;
                            P['remoteCustomerConfig'] = JSON['parse'](T);
                            var W = (null == (V = P['customerConfig']) ? void 0x0 : V['files']) || {}
                              , X = P['compareChangeList'](W, P['remoteCustomerConfig']['files']);
                            P['downChangeFiles'](Q, X, function(Y) {
                                P['finishCall'](w['DOWNLOAD_FILE_FAIL'], Y);
                            }, function(Y) {
                                P['progressCall'](0.2 * Y + P['mainMaxPercent']);
                            }, function(Y) {
                                P['moveFiles'](Y, function(Z) {
                                    0x1 == Z ? P['finishCall'](w['UN_ZIP_FAIL']) : 0x2 == Z && P['finishCall'](w['MOVE_FILE_FAIL']);
                                }, function() {
                                    O();
                                }, function(Z) {
                                    return Z['replace']('customer', 'assets');
                                });
                            });
                        }
                    });
                }
                ,
                N['updateCustomerSuccess'] = function() {
                    f['fileUtils']['writeStringToFile'](JSON['stringify'](this['remoteCustomerConfig']), H);
                }
                ,
                N['getVersionCsUrl'] = function() {
                    var O = this['getPlatForm']();
                    return '' + this['getCsUrl']() + O + '/version_' + this['remoteConfig']['scriptVersion'] + '/';
                }
                ,
                N['getCsVerison'] = function() {
                    return this['remoteConfig']['csVersion'];
                }
                ,
                N['getCsUrl'] = function() {
                    return this['remoteConfig']['csUrl'];
                }
                ,
                N['loadCustomerConfig'] = function(O) {
                    var P = this;
                    this['customerConfig'] = null,
                    f['fileUtils']['isFileExist'](H) ? (this['customerConfig'] = JSON['parse'](f['fileUtils']['getStringFromFile'](H)),
                    O()) : g['load'](B, function(Q, R) {
                        Q || (P['customerConfig'] = JSON['parse'](R['text'])),
                        O();
                    });
                }
                ,
                N['hasCustomerUpdate'] = function() {
                    var O = this['getCsVerison']()
                      , P = this['getCsUrl']();
                    return P && O && P['length'] > 0x0 && O['length'] > 0x0;
                }
                ,
                c(M, [{
                    'key': 'RemoteGameInfo',
                    'get': function() {
                        return this['remoteSubGameInfo'];
                    }
                }], [{
                    'key': 'Instance',
                    'get': function() {
                        return this['_instance'] || (this['_instance'] = new M()),
                        this['_instance'];
                    }
                }]),
                M;
            }()))['_instance'] = void 0x0,
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/ViewUtil.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts'], function(b) {
    var d, g, h, j, k, m, p, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['asyncToGenerator'],
            g = y['regeneratorRuntime'];
        }
        , function(y) {
            h = y['cclegacy'],
            j = y['UITransform'],
            k = y['v3'],
            m = y['Size'],
            p = y['Prefab'],
            q = y['instantiate'],
            v = y['Animation'],
            w = y['AnimationClip'];
        }
        , function(y) {
            x = y['oops'];
        }
        ],
        'execute': function() {
            h['_RF']['push']({}, 'f607cCjAEZHVKVZ/FyRs5bA', 'ViewUtil', void 0x0),
            b('ViewUtil', (function() {
                function y() {}
                return y['nodeTreeInfoLite'] = function(z, A) {
                    for (var B = A || new Map(), C = z['children'], D = 0x0; D < C['length']; D++) {
                        var E = C[D];
                        E['name']['indexOf']('\x20') < 0x0 && B['set'](E['name'], E),
                        y['nodeTreeInfoLite'](E, B);
                    }
                    return B;
                }
                ,
                y['findNodes'] = function(z, A, B) {
                    for (var C = B || [], D = A['children'], E = 0x0; E < D['length']; E++) {
                        var F = D[E]['name'];
                        z['test'](F) && C['push'](D[E]),
                        y['findNodes'](z, D[E], C);
                    }
                    return C;
                }
                ,
                y['calculateASpaceToBSpacePos'] = function(z, A, B) {
                    var C = z['getComponent'](j)['convertToWorldSpaceAR'](B);
                    return A['getComponent'](j)['convertToNodeSpaceAR'](C);
                }
                ,
                y['calculateScreenPosToSpacePos'] = function(z, A) {
                    var B = z['getUILocation']()
                      , C = k(B['x'], B['y']);
                    return A['getComponent'](j)['convertToNodeSpaceAR'](C);
                }
                ,
                y['uniformScale'] = function(z, A, B, C) {
                    var D, E = B / z, F = C / A;
                    return D = E < F ? E : F,
                    new m(Math['floor'](z * D),Math['floor'](A * D));
                }
                ,
                y['createPrefabNode'] = function(z) {
                    var A = x['res']['get'](z, p);
                    return q(A);
                }
                ,
                y['createPrefabNodeAsync'] = function(z) {
                    var A = this;
                    return new Promise(d(g()['mark'](function B(C, D) {
                        return g()['wrap'](function(E) {
                            for (; ; )
                                switch (E['prev'] = E['next']) {
                                case 0x0:
                                    x['res']['load'](z, p, function(F, G) {
                                        if (F)
                                            console['error']('名为【' + z + '】的资源加载失败');
                                        else {
                                            var H = A['createPrefabNode'](z);
                                            C(H);
                                        }
                                    });
                                case 0x1:
                                case 'end':
                                    return E['stop']();
                                }
                        }, B);
                    })));
                }
                ,
                y['loadPrefabNode'] = function(z, A) {
                    var B = this;
                    x['res']['load'](z, p, function(C, D) {
                        if (C)
                            console['error']('名为【' + z + '】的资源加载失败');
                        else {
                            var E = B['createPrefabNode'](z);
                            A(E);
                        }
                    });
                }
                ,
                y['addNodeAnimation'] = function(z, A, B, C) {
                    if (void 0x0 === B && (B = !0x0),
                    void 0x0 === C && (C = !0x1),
                    A && A['isValid']) {
                        var D = A['getComponent'](v);
                        null == D && (D = A['addComponent'](v));
                        var E = x['res']['get'](z, w);
                        if (E && !(B && D['getState'](E['name']) && D['getState'](E['name'])['isPlaying'])) {
                            if (C)
                                return D['defaultClip'] = E,
                                void D['play']();
                            D['once'](v['EventType']['FINISHED'], function() {
                                D['defaultClip'] && D['play']();
                            }, this),
                            D['getState'](E['name']) || D['createState'](E, E['name']),
                            D['play'](E['name']);
                        }
                    }
                }
                ,
                y;
            }())),
            h['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/webHttp.ts', ['cc', './base64.mjs'], function(a) {
    var b, c, d, f;
    return {
        'setters': [function(g) {
            b = g['cclegacy'],
            c = g['error'],
            d = g['warn'];
        }
        , function(g) {
            f = g['Base64'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '61ed5a4woJDJL6+356sEPCE', 'webHttp', void 0x0);
            var g = {}
              , h = {}
              , j = a('webHttpError', function(k) {
                return k['NO_NETWORK'] = 'Network\x20abnormal,please\x20contact\x20support!',
                k['UNKNOWN_ERROR'] = 'Network\x20error,please\x20contact\x20support!',
                k['TIMEOUT'] = 'Network\x20timeout,please\x20contact\x20support!',
                k;
            }({}));
            a('webHttp', (function() {
                function k() {
                    this['server'] = 'http://127.0.0.1/',
                    this['timeout'] = 0x2710,
                    this['tokenInfo'] = null;
                }
                var l = k['prototype'];
                return l['setTokenInfo'] = function(m, p) {
                    this['StringIsNullOrEmpty'](m) || this['StringIsNullOrEmpty'](p) ? c('setTokenInfo\x20error:\x20name\x20or\x20token\x20is\x20null') : this['tokenInfo'] = {
                        'name': m,
                        'token': p
                    };
                }
                ,
                l['StringIsNullOrEmpty'] = function(m) {
                    return null == m || 0x0 == m['length'];
                }
                ,
                l['clearTokenInfo'] = function() {
                    this['tokenInfo'] = null;
                }
                ,
                l['get'] = function(m, p, q) {
                    this['sendRequest'](m, null, !0x1, p, q);
                }
                ,
                l['getWithParams'] = function(m, p, q, v) {
                    this['sendRequest'](m, p, !0x1, q, v);
                }
                ,
                l['getByArraybuffer'] = function(m, p, q) {
                    this['sendRequest'](m, null, !0x1, p, q, 'arraybuffer', !0x1);
                }
                ,
                l['getWithParamsByArraybuffer'] = function(m, p, q, v) {
                    this['sendRequest'](m, p, !0x1, q, v, 'arraybuffer', !0x1);
                }
                ,
                l['post'] = function(m, p, q, v) {
                    this['sendRequest'](m, p, !0x0, q, v);
                }
                ,
                l['abort'] = function(m) {
                    var p = g[this['server'] + m];
                    p && p['abort']();
                }
                ,
                l['getParamString'] = function(m) {
                    return 'content=' + m;
                }
                ,
                l['sendRequest'] = function(m, q, w, x, y, z, A, B) {
                    var C, D, E, F = this;
                    if (void 0x0 === A && (A = !0x0),
                    void 0x0 === B && (B = this['timeout']),
                    null != m && '' != m) {
                        if (C = 0x0 == m['toLocaleLowerCase']()['indexOf']('http') ? m : this['server'] + m,
                        q ? (E = this['getParamString'](q),
                        D = C['indexOf']('?') > -0x1 ? C + '&' + E : C + '?' + E) : D = C,
                        null == g[D] || h[D] != E) {
                            var G = new XMLHttpRequest();
                            g[D] = G,
                            h[D] = E,
                            w ? G['open']('POST', C) : G['open']('GET', D),
                            G['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
                            var H = {
                                'url': C,
                                'params': q,
                                'event': j['UNKNOWN_ERROR']
                            };
                            A && (G['timeout'] = B,
                            G['ontimeout'] = function() {
                                F['deleteCache'](D),
                                H['event'] = j['TIMEOUT'],
                                null == y || y(H);
                            }
                            ),
                            G['onloadend'] = function(I) {
                                if (0x1f4 == G['status']) {
                                    if (F['deleteCache'](D),
                                    null == y)
                                        return;
                                    H['event'] = j['NO_NETWORK'],
                                    y(H);
                                }
                            }
                            ,
                            G['onerror'] = function() {
                                F['deleteCache'](D),
                                null != y && (0x0 == G['readyState'] || 0x1 == G['readyState'] || 0x0 == G['status'] ? H['event'] = j['NO_NETWORK'] : H['event'] = j['UNKNOWN_ERROR'],
                                y(H));
                            }
                            ,
                            G['onreadystatechange'] = function() {
                                0x4 == G['readyState'] && (F['deleteCache'](D),
                                0xc8 == G['status'] && (null == x || x(G)));
                            }
                            ,
                            null == q || '' == q ? G['send']() : G['send'](E);
                        } else
                            d('host{' + C + '}is\x20requesting,could\x20not\x20reapet');
                    } else
                        c('host\x20is\x20null');
                }
                ,
                l['deleteCache'] = function(m) {
                    delete g[m],
                    delete h[m];
                }
                ,
                l['hiPost'] = function(m, p, q, v) {
                    var w = JSON['stringify'](p);
                    w = f['encode'](w),
                    this['post'](m, w, q, v);
                }
                ,
                k;
            }())),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/WebSock.ts', ['cc', './Logger.ts'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'];
        }
        , function(d) {
            c = d['Logger'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, '70df2VbIU9B66Fr+op8FKJp', 'WebSock', void 0x0),
            a('WebSock', (function() {
                function d() {
                    this['_ws'] = null,
                    this['onConnected'] = null,
                    this['onMessage'] = null,
                    this['onError'] = null,
                    this['onClosed'] = null;
                }
                var f = d['prototype'];
                return f['connect'] = function(g) {
                    var h = this;
                    if (this['_ws'] && this['_ws']['readyState'] === WebSocket['CONNECTING'])
                        return c['logNet']('websocket\x20connecting,\x20wait\x20for\x20a\x20moment...'),
                        !0x1;
                    var i = null;
                    if (g['url'])
                        i = g['url'];
                    else {
                        var j = g['host']
                          , k = g['port'];
                        i = g['protocol'] + '://' + j + ':' + k;
                    }
                    return this['_ws'] = new WebSocket(i),
                    this['_ws']['binaryType'] = 'arraybuffer',
                    this['_ws']['onmessage'] = function(l) {
                        (0x0,
                        h['onMessage'])(l['data']);
                    }
                    ,
                    this['_ws']['onopen'] = this['onConnected'],
                    this['_ws']['onerror'] = this['onError'],
                    this['_ws']['onclose'] = this['onClosed'],
                    !0x0;
                }
                ,
                f['send'] = function(g) {
                    return this['_ws'] && this['_ws']['readyState'] == WebSocket['OPEN'] ? (this['_ws']['send'](g),
                    0x1) : -0x1;
                }
                ,
                f['close'] = function(g, h) {
                    this['_ws'] && this['_ws']['close'](g, h);
                }
                ,
                d;
            }())),
            b['_RF']['pop']();
        }
    };
}),
function(a) {
    a('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}(function(a, b) {
    System['register'](a, [b], function(c, d) {
        return {
            'setters': [function(e) {
                var f = {};
                for (var g in e) {
                    if (g !== 'default' && g !== '__esModule')
                        f[g] = e[g];
                }
                c(f);
            }
            ],
            'execute': function() {}
        };
    });
});
