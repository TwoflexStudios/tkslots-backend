System['register']('chunks:///_virtual/102', ['./LabelToggle.ts', './clearInput.ts', './dropdown.ts', './gameRichText.ts', './inputPhone.ts', './richTextHandler.ts', './sendButton.ts', './shareNode.ts', './tagClearInput.ts', './togglePwd.ts', './topCloseLayer.ts', './add2main.ts', './downloadEntry.ts', './notify2.ts', './setting.ts', './bn.ts', './en2.ts', './es_mx2.ts', './id2.ts', './pt2.ts', './stringDefine2.ts', './tha2.ts', './vi2.ts', './lobbyDefine.ts', './lobbyConfig.ts', './lobbyMain.ts', './popManager.ts', './bindTips.ts', './downloadTips.ts', './lobbyBottom.ts', './lobbyGameItem.ts', './lobbyGameList.ts', './lobbyGameToggle.ts', './lobbyRoomItem.ts', './lobbyRoomList.ts', './lobbyTop.ts', './redPoint.ts', './viewLobby.ts', './loginConfig.ts', './loginMain.ts', './panelFindPsw.ts', './panelLogin.ts', './panelRegist.ts', './panelVerify.ts', './viewLogin.ts', './lobbyMod.ts', './lobbyModHub.ts', './httpAccount.ts', './httpDefine.ts', './httpInfo.ts', './httpLogin.ts', './httpRegist.ts', './pb_error_code.ts', './snsManager.ts', './lobbyState.ts'], function() {
    return {
        'setters': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        'execute': function() {}
    };
}),
System['register']('chunks:///_virtual/add2main.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './webGame.ts', './utils.ts', './appConfig.ts', './GameUIConfig.ts'], function(h) {
    var j, k, q, v, w, x, y, z, A, B, C, D, E, F, G, H;
    return {
        'setters': [function(I) {
            j = I['applyDecoratedDescriptor'],
            k = I['inheritsLoose'],
            q = I['initializerDefineProperty'],
            v = I['assertThisInitialized'];
        }
        , function(I) {
            w = I['cclegacy'],
            x = I['_decorator'],
            y = I['Button'],
            z = I['RichText'],
            A = I['Sprite'],
            B = I['ImageAsset'],
            C = I['Component'];
        }
        , function(I) {
            D = I['oops'];
        }
        , function(I) {
            E = I['webGame'];
        }
        , function(I) {
            F = I['utils'];
        }
        , function(I) {
            G = I['appConfig'];
        }
        , function(I) {
            H = I['UIID'];
        }
        ],
        'execute': function() {
            var J, K, L, M, N, O, P, Q, T;
            w['_RF']['push']({}, '7188eSRQ/tEErOAoaXBa3ES', 'add2main', void 0x0);
            var U = x['ccclass']
              , V = x['property'];
            h('add2main', (J = U('add2main'),
            K = V({
                'type': y
            }),
            L = V({
                'type': z
            }),
            M = V({
                'type': A
            }),
            J((P = j((O = function(W) {
                function X() {
                    for (var Z, a0 = arguments['length'], a1 = new Array(a0), a2 = 0x0; a2 < a0; a2++)
                        a1[a2] = arguments[a2];
                    return Z = W['call']['apply'](W, [this]['concat'](a1)) || this,
                    q(Z, 'btnClose', P, v(Z)),
                    q(Z, 'rtTips', Q, v(Z)),
                    q(Z, 'icon', T, v(Z)),
                    Z;
                }
                k(X, W);
                var Y = X['prototype'];
                return Y['onLoad'] = function() {
                    var Z = this;
                    F['ButtonBindClick'](this['btnClose'], this['onBtnClose'], this),
                    this['icon']['node']['active'] = !0x1;
                    var a0 = G['gameIconUrl'];
                    F['StringIsNullOrEmpty'](a0) || D['res']['loadRemote'](a0, B, function(a1, a2) {
                        a1 ? E['log']['logBusiness']('add2main\x20load\x20icon\x20error:\x20' + a1) : (Z['icon']['spriteFrame'] = F['transImageAsset2SpriteFrame'](a2),
                        Z['icon']['node']['active'] = !0x0);
                    });
                }
                ,
                Y['onBtnClose'] = function() {
                    this['node']['active'] = !0x1,
                    D['gui']['remove'](H['add2main']),
                    G['bPWAInstall'] && F['add2HomeScreen'](function(Z) {
                        Z ? E['log']['logBusiness']('add2HomeScreen\x20success') : E['log']['logBusiness']('add2HomeScreen\x20failed');
                    });
                }
                ,
                X;
            }(C))['prototype'], 'btnClose', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Q = j(O['prototype'], 'rtTips', [L], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            T = j(O['prototype'], 'icon', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            N = O)) || N)),
            w['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/bindTips.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './utils.ts', './webGame.ts', './lobbyConfig.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './CustomEventDefine.ts', './popManager.ts'], function(j) {
    var k, q, v, w, x, z, A, C, D, E, F, G, H, I, J, K, L, M, N;
    return {
        'setters': [function(O) {
            k = O['applyDecoratedDescriptor'],
            q = O['inheritsLoose'],
            v = O['initializerDefineProperty'],
            w = O['assertThisInitialized'];
        }
        , function(O) {
            x = O['cclegacy'],
            z = O['_decorator'],
            A = O['sp'],
            C = O['Label'],
            D = O['Button'];
        }
        , function(O) {
            E = O['baseView'];
        }
        , function(O) {
            F = O['utils'];
        }
        , function(O) {
            G = O['webGame'];
        }
        , function(O) {
            H = O['Lobby'];
        }
        , function(O) {
            I = O['PModuleID'];
        }
        , function(O) {
            J = O['oops'];
        }
        , function(O) {
            K = O['UIID'];
        }
        , function(O) {
            L = O['WebGameEvent'];
        }
        , function(O) {
            M = O['popJobType'],
            N = O['lobbyPopJob'];
        }
        ],
        'execute': function() {
            var O, Q, S, U, V, W, X, Y, Z, a0, a1;
            x['_RF']['push']({}, '4f482+6ua5PHoFXz/m7Yv5Y', 'bindTips', void 0x0);
            var a2 = z['ccclass']
              , a3 = z['property'];
            j('bindTips', (O = a2('bindTips'),
            Q = a3({
                'type': A['Skeleton'],
                'tooltip': '背景动画'
            }),
            S = a3({
                'type': C,
                'tooltip': '奖励文本'
            }),
            U = a3({
                'type': D,
                'tooltip': '绑定按钮'
            }),
            V = a3({
                'type': D,
                'tooltip': '关闭按钮'
            }),
            O((Y = k((X = function(a4) {
                function a5() {
                    for (var a7, a8 = arguments['length'], a9 = new Array(a8), aa = 0x0; aa < a8; aa++)
                        a9[aa] = arguments[aa];
                    return a7 = a4['call']['apply'](a4, [this]['concat'](a9)) || this,
                    v(a7, 'spineBg', Y, w(a7)),
                    v(a7, 'lbReward', Z, w(a7)),
                    v(a7, 'btnBind', a0, w(a7)),
                    v(a7, 'btnClose', a1, w(a7)),
                    a7;
                }
                q(a5, a4);
                var a6 = a5['prototype'];
                return a6['onInit'] = function() {
                    var a7 = this;
                    F['ButtonBindClick'](this['btnBind'], this['onBtnBindClick'], this),
                    F['ButtonBindClick'](this['btnClose'], this['onBtnCloseClick'], this),
                    this['popDownHandler'] = function(a8) {
                        F['PlaySpineAnimation'](a7['spineBg'], 'run_3', !0x1, function() {
                            null == a8 || a8();
                        });
                    }
                    ;
                }
                ,
                a6['onShow'] = function() {
                    var a7 = this;
                    F['PlaySpineAnimations'](this['spineBg'], ['run_1', 'run_2'], !0x1),
                    J['message']['dispatchEvent'](L['open_lobby_pop'], M['bindTips'], function() {
                        a7['close']();
                    });
                }
                ,
                a6['onClose'] = function() {
                    J['gui']['remove'](K['bindTips'], !0x1);
                }
                ,
                a6['refresh'] = function(a7) {
                    this['lbReward']['string'] = G['FormatCoins'](a7);
                }
                ,
                a6['onBtnBindClick'] = function() {
                    var a7 = this;
                    this['close'](function() {
                        var a8 = new N(M['other'],0x1,0x0);
                        a8['canPopUp'] = function() {
                            return !0x0;
                        }
                        ,
                        a8['showView'] = function() {
                            a7['Call'](H['modID']['root'], H['msgID']['enterLobbyMod'], I['profile'], 0x1);
                        }
                        ,
                        J['message']['dispatchEvent'](L['close_lobby_pop'], M['bindTips'], a8);
                    });
                }
                ,
                a6['onBtnCloseClick'] = function() {
                    this['close'](function() {
                        J['message']['dispatchEvent'](L['close_lobby_pop'], M['bindTips']);
                    });
                }
                ,
                a5;
            }(E))['prototype'], 'spineBg', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Z = k(X['prototype'], 'lbReward', [S], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a0 = k(X['prototype'], 'btnBind', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = k(X['prototype'], 'btnClose', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            W = X)) || W)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/bn.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, 'e5135jGTmNEioS/CPn53XQF', 'bn', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['bn'] || (b['languages']['bn'] = {}),
            b['languages']['bn'][0x66] = {
                0x1: 'ভিআইপি',
                0x2: 'ব্যাংক',
                0x3: 'মেইল',
                0x4: 'কার্যকলাপ',
                0x5: 'পদমর্যাদা',
                0x6: 'প্রচার\x20করুন',
                0x7: 'প্রত্যাহার',
                0x8: 'ডিভাইস\x20কোড\x20খালি\x20আছে',
                0x9: 'রেজিস্ট্রেশনের\x20ধরনটি\x20ভুল',
                0xa: 'নিবন্ধন\x20তথ্য\x20ভুল',
                0xb: 'সিস্টেম\x20ব্যতিক্রম\x2003,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0xc: 'আইডি\x20সদৃশ,\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন',
                0xd: 'অ্যাকাউন্ট\x20নিবন্ধিত\x20হয়েছে',
                0xe: 'ক্যাপচা\x20ভুল',
                0xf: 'এই\x20ফোন\x20নম্বর\x20ইতিমধ্যে\x20ব্যবহার\x20করা\x20হয়েছে',
                0x10: 'প্রথমে\x20আপনার\x20ইমেল\x20আবদ্ধ\x20করুন',
                0x11: 'অস্বাভাবিক\x20আইপি\x20ঠিকানার\x20জন্য,\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন',
                0x12: 'নিবন্ধন\x20ব্যর্থ\x20হয়েছে,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন\x20(কোড:1010)',
                0x13: 'নিবন্ধন\x20ব্যর্থ\x20হয়েছে,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন\x20(কোড:1011)',
                0x14: 'লগইন\x20প্রকারটি\x20অবৈধ৷',
                0x15: 'ভুল\x20লগইন\x20তথ্য',
                0x16: 'ডিভাইস\x20অস্বাভাবিক,\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন',
                0x17: 'সিস্টেম\x20ব্যতিক্রম\x2013,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x18: 'অ্যাকাউন্ট\x20অস্বাভাবিক,\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন',
                0x19: 'একটি\x20লগইন\x20ব্যতিক্রম\x20আছে\x20বলে\x20মনে\x20হচ্ছে,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x1a: 'অ্যাকাউন্ট\x20বা\x20পাসওয়ার্ড\x20ভুল,\x20ইনপুট\x20চেক\x20করুন',
                0x1b: 'অ্যাকাউন্টের\x20একটি\x20নিরাপত্তা\x20ঝুঁকি\x20আছে\x20এবং\x20নিরাপত্তা\x20যাচাইকরণে\x20প্রবেশ\x20করতে\x20চলেছে৷',
                0x1c: 'লগ\x20ইন\x20করার\x20জন্য\x20অবৈধ\x20ডিভাইস,\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন',
                0x1d: 'সার্ভার\x20রক্ষণাবেক্ষণ,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x1e: 'অনুরোধ\x20অগ্রহণযোগ্য',
                0x1f: 'সংস্করণ\x20খুব\x20কম,\x20আপগ্রেড\x20প্রয়োজন',
                0x20: 'প্যারামিটার\x20ত্রুটি',
                0x21: 'লগইন\x20করার\x20জন্য\x20গ্রাহক\x20পরিষেবা\x20অনুপলব্ধ৷',
                0x22: 'ভুল\x20যাচাইকরণ\x20কোড\x20প্রকার',
                0x23: 'লগইন\x20ব্যতিক্রম\x2021\x20মনে\x20হচ্ছে,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x24: 'বর্তমান\x20ফোন\x20নম্বর\x20ইতিমধ্যে\x20নিবন্ধিত,\x20আবার\x20নিবন্ধন\x20করতে\x20পারবেন\x20না',
                0x25: 'সিস্টেম\x20ব্যতিক্রম\x2023,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x26: 'যাচাইকরণ\x20তথ্য\x20ব্যতিক্রম,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x27: 'বর্তমান\x20ফোন\x20নম্বর\x20কোনো\x20অ্যাকাউন্টের\x20সাথে\x20যুক্ত\x20নয়',
                0x28: 'লগইন\x20তথ্য\x20মেয়াদ\x20শেষ\x20হয়েছে',
                0x29: 'প্রথমে\x20আপনার\x20ফোন\x20নম্বর\x20আবদ্ধ\x20করুন',
                0x2a: 'একটি\x20বৈধ\x20ফোন\x20নম্বর\x20লিখুন\x20দয়া\x20করে',
                0x2b: 'ভুল\x20অ্যাকাউন্টের\x20ধরন',
                0x2c: 'অ্যাকাউন্ট\x20তথ্য\x20ত্রুটি',
                0x2d: 'ভুল\x20যাচাইকরণ\x20কোড',
                0x2e: 'সিস্টেম\x20ব্যতিক্রম\x2033,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x2f: 'ভুল\x20অ্যাকাউন্ট',
                0x30: 'প্রথমে\x20আপনার\x20ফোন\x20নম্বর\x20আবদ্ধ\x20করুন',
                0x31: 'একটি\x20বৈধ\x20ফোন\x20নম্বর\x20লিখুন\x20দয়া\x20করে',
                0x32: 'অ্যাকাউন্ট\x20ইতিমধ্যেই\x20একটি\x20ফোন\x20নম্বরের\x20সাথে\x20আবদ্ধ,\x20আবার\x20আবদ্ধ\x20করা\x20যাবে\x20না৷',
                0x33: 'ফোন\x20নম্বর\x20ইতিমধ্যে\x20আবদ্ধ',
                0x34: 'আপনার\x20পাসওয়ার্ড\x20দিন',
                0x35: 'বর্তমান\x20অ্যাকাউন্টের\x20জন্য\x20ফোন\x20নম্বর\x20আবদ্ধ\x20করতে\x20অক্ষম,\x20অনুগ্রহ\x20করে\x20গ্রাহক\x20পরিষেবার\x20সাথে\x20যোগাযোগ\x20করুন৷',
                0x36: 'লগইন\x20ব্যতিক্রম,\x20আবার\x20চেষ্টা\x20করুন.',
                0x37: 'কারেন্ট\x20অ্যাকাউন্ট\x20আগে\x20থেকেই\x20আছে।',
                0x38: 'ভুল\x20যাচাইকরণ\x20কোড।',
                0x39: 'সিস্টেম\x20ব্যতিক্রম\x2044,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                0x3a: 'সিস্টেম\x20ব্যতিক্রম\x2045,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                0x3b: 'সিস্টেম\x20ব্যতিক্রম\x2046,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                0x3c: 'অনুরোধের\x20সময়\x20শেষ,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                0x3d: 'ব্যবহারকারী\x20আইডি\x20বিদ্যমান\x20নেই.',
                0x3e: 'ব্যবহারকারী\x20যাচাই\x20তথ্য\x20ভুল.',
                0x3f: 'ব্যবহারকারী\x20যাচাইকরণ\x20তথ্য\x20পূরণ\x20করুন.',
                0x40: 'ব্যবহারকারী\x20যাচাই\x20তথ্য\x20ভুল.',
                0x41: 'অপারেশন\x20ব্যতিক্রম,\x20গ্রাহক\x20সেবা\x20যোগাযোগ\x20করুন.',
                0x42: 'অবৈধ\x20তথ্য,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x43: 'অভিনন্দন\x20<color=#FF4600>@player</color>\x20ভিতরে\x20<color=yellow>@game</color>\x20জয়ের\x20জন্য\x20<color=#4BFF00>x@multiple</color>\x20পুরস্কার\x20এবং\x20পেয়েছেন\x20<color=yellow>@coins</color>\x20কয়েন.',
                0x44: 'অভিনন্দন\x20<color=#FF4600>%s</color>\x20জ্যাকপট\x20জেতার\x20জন্য\x20<color=#4BFF00>%s</color>\x20এবং\x20বিজয়ী\x20<color=yellow>%s</color>\x20কয়েন.',
                0x45: 'রুম',
                0x46: 'খেলোয়াড়',
                0x47: 'অ্যান্টেস',
                0x48: 'মিন\x20ব্যালেন্স',
                0x49: 'ডেমো',
                0x4a: 'প্রাথমিক',
                0x4b: 'ওস্তাদ',
                0x4c: 'রাজা',
                0x4d: 'মহাকাব্য',
                0x4e: 'কিংবদন্তি',
                0x4f: 'ভিআইপি',
                0x50: 'রুম',
                0x51: 'খেলা',
                0x52: 'যে\x20কোন',
                0x53: 'প্রস্থান\x20করুন',
                0x54: 'সাইন\x20আউট',
                0x55: 'পরামর্শ',
                0x56: 'সার্ভার\x20সংযোগ\x20ব্যর্থ\x20হয়েছে,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                0x57: 'সিস্টেম\x20আপনাকে\x20চলে\x20যেতে\x20বলে,\x20অনুগ্রহ\x20করে\x20পরে\x20গেমটিতে\x20প্রবেশ\x20করুন',
                0x58: 'এই\x20অ্যাকাউন্টটি\x20অন্য\x20ডিভাইস\x20থেকে\x20সাইন\x20ইন\x20করা\x20হয়েছে,\x20অনুগ্রহ\x20করে\x20অ্যাকাউন্টের\x20নিরাপত্তার\x20দিকে\x20মনোযোগ\x20দিন',
                0x59: '%s-এ\x20আপনার\x20খেলা\x20এখনও\x20শেষ\x20হয়নি,\x20অনুগ্রহ\x20করে\x20ফিরে\x20যান\x20এবং\x20খেলুন',
                0x5a: 'অ্যাকাউন্ট\x20নিবন্ধন\x20ইতিমধ্যে\x20বিদ্যমান.',
                0x5b: 'গেস্ট\x20অ্যাকাউন্ট\x20ডিভাইস\x20খালি\x20করা\x20যাবে\x20না।',
                0x5c: 'অ্যাকাউন্ট\x20এর\x20অস্তিত্ব\x20নেই.',
                0x5d: 'ভুল\x20পাসওয়ার্ড৤.',
                0x5e: 'এই\x20অ্যাকাউন্ট\x20স্থগিত\x20করা\x20হয়েছে.',
                0x5f: 'অতিথি\x20লগইন\x20ব্যতিক্রম,\x20আবার\x20চেষ্টা\x20করুন.',
                0x60: 'লগইন\x20ব্যতিক্রম\x207,\x20অনুগ্রহ\x20করে\x20পুনরায়\x20চেষ্টা\x20করুন।',
                0x61: 'সিস্টেম\x20রক্ষণাবেক্ষণাধীন,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                0x62: 'পাসওয়ার্ড',
                0x63: 'ডাউনলোড\x20করুন',
                0x64: 'আপনার\x20ভালো\x20অভিজ্ঞতার\x20জন্য,\x20অনুগ্রহ\x20করে\x20গেমটি\x20ডাউনলোড\x20করুন।',
                0x65: 'আপনার\x20ভাল\x20অভিজ্ঞতার\x20জন্য,\x20অনুগ্রহ\x20করে\x20গেমটি\x20ডাউনলোড\x20করুন।\x20এখনই\x20ইনস্টল\x20করুন\x20এবং\x20পুরষ্কার\x20পান!',
                0x66: 'গ্রহণ\x20করুন\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>সেবা\x20পাবার\x20শর্ত</on></u></color>\x20এবং\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>গোপনীয়তা\x20নীতি</on></u></color>',
                0x67: 'পুরস্কার\x20পেতে\x0a\x20মোবাইল\x20ফোন\x20নম্বর\x20বাঁধুন',
                0x68: 'বাঁধাই\x20করা',
                0x69: 'দুঃখিত,\x20ভিআইপি\x20প্রয়োজনীয়তা\x20পূরণ\x20হয়\x20না,\x20যত\x20বেশি\x20কয়েন,\x20তত\x20বেশি\x20ভিআইপি,\x20রিচার্জ\x20করতে\x20দোকানে\x20যান',
                0x6a: 'দুঃখিত,\x20আপনি\x20প্রবেশের\x20প্রয়োজনীয়তাগুলি\x20পূরণ\x20করেন\x20না,\x20আপনি\x20কি\x20কিছু\x20কিনতে\x20দোকানে\x20যেতে\x20চান?',
                0x6b: 'টোকা\x20<img\x20src=\x27share\x27\x20/>\x20এবং\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>হোম\x20পর্দায়\x20যোগ\x20করুন</color></b>\x20আপনি\x20যখনই\x20চান\x20খেলতে',
                0x6c: 'টোকা\x20<img\x20src=\x27share\x27\x20/>\x20এবং\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>হোম\x20পর্দায়\x20যোগ\x20করুন</color></b>\x20আপনি\x20যখনই\x20চান\x20খেলতে',
                0x6d: 'সতর্কতা',
                0x6e: 'আপনার\x20গেম\x20ডেটার\x20নিরাপত্তার\x20জন্য,\x20আপনি\x20একটি\x20অফিসিয়াল\x20অ্যাকাউন্ট\x20হিসাবে\x20নিবন্ধন\x20করার\x20জন্য\x20অত্যন্ত\x20সুপারিশ\x20করা\x20হয়',
                0x6f: 'বার্তা\x20পাঠানো',
                0x70: 'পুরস্কার\x20দাবি\x20সম্পূর্ণ',
                0x71: 'সেবা',
                0x72: 'বিন্যাস',
                0x73: 'সাইন\x20ইন\x20করুন',
                0x74: 'রুলেট',
                0x75: 'উপহার',
                0x76: 'অনুগ্রহ',
                0x77: 'আমন্ত্রণ\x20জানান',
                0x78: 'তহবিল',
                0x79: 'সব',
                0x7a: 'গরম',
                0x7b: 'স্লট',
                0x7c: 'জুজু',
                0x7d: 'দুর্বল\x20নেটওয়ার্ক\x20স্থিতি',
                0x7e: 'ফ্রিক্যাশ',
                0x7f: 'কেনা',
                0x80: 'একটি\x20নতুন\x20সংস্করণ\x20পাওয়া\x20গেছে৷\x20আপনি\x20কি\x20এটি\x20রিফ্রেশ\x20করতে\x20চান?',
                0x81: 'এই\x20কার্যকলাপ\x20বন্ধ\x20হয়ে\x20গেছে\x20এবং\x20লোটারি\x20কোড\x20কিনার\x20জন্য\x20কয়েন\x20খাওয়া\x20হয়েছে।',
                0x82: 'BUY\x20COIN',
                0x83: 'আপনি\x20লগ\x20ইন\x20করেননি,\x20অনুগ্রহ\x20করে\x20লগ\x20আউট\x20করুন\x20এবং\x20আবার\x20চেষ্টা\x20করুন',
                0x84: 'প্রমাণীকরণ\x20ব্যর্থ\x20হলে,\x20প্রস্থান\x20করুন\x20এবং\x20আবার\x20চেষ্টা\x20করুন',
                0x85: 'অবৈধ\x20গেম\x20রুম,\x20অন্য\x20একটি\x20চেষ্টা\x20করুন',
                0x86: 'ঘরটি\x20বন্ধ,\x20অন্য\x20একটি\x20চেষ্টা\x20করুন',
                0x87: 'টাস্ক',
                0x88: 'এটা\x20নতুন\x20স্লট\x20খেলার\x20সময়',
                0x89: 'প্রতিদিন\x20সাইন\x20ইন\x20করে\x20বিনামূল্যে\x20কয়েন\x20পান!',
                0x8a: 'লাকি\x20রুলেট!\x20100%\x20জয়ের\x20হার\x20নিশ্চিত!\x20আসুন\x20এবং\x20আপনার\x20পুরস্কার\x20পান!',
                0x8b: 'বিশাল\x20কয়েনের\x20জন্য\x20নতুন\x20একচেটিয়া\x20চ্যালেঞ্জ!',
                0x8c: 'আশ্চর্যজনক\x20স্লট\x20এবং\x20বৈশিষ্ট্য!',
                0x8d: 'আপনি\x20একটি\x20বিশেষ\x20বোনাস\x20পেতে\x20পারেন',
                0x8e: 'উচ্চতর\x20ভিআইপি\x20শক্তি,\x20আরও\x20সুবিধা!',
                0x8f: 'নতুন\x20স্লট\x20স্পিন\x20করুন,\x20সৌভাগ্য\x20আপনার\x20সাথে\x20থাকুক!',
                0x90: 'লাকি\x20হুইল\x20ডে,\x20গোল্ডেন\x20হুইল\x20মাল্টিপ্লার!',
                0x91: 'সারপ্রাইজ\x20বোনাস,\x20আসুন\x20আপনার\x20কয়েন\x20সংগ্রহ\x20করুন',
                0x92: 'দ্রুত\x20স্পিন\x20এবং\x20আরও\x20বড়\x20পুরস্কার!',
                0x93: 'মেগা\x20পুরস্কার\x20প্রস্তুত,\x20এখনই\x20স্পিন\x20করুন!',
                0x94: 'আলতো\x20চাপুন\x20এবং\x20এখন\x20আপনার\x20বিনামূল্যে\x20চিপ\x20সংগ্রহ\x20করুন!',
                0x95: 'হ্যাপ\x20আওয়ার!!!\x20ট্রেজার\x20বোল\x2010%\x20চান্স\x20আপ!!!সব\x20প্যাকে\x20সীমাহীন\x20বোনাস',
                0x96: 'ট্রিট\x20এবং\x20বিশেষ\x20মিশন\x20উপভোগ\x20করতে\x20এখনই\x20খেলুন',
                0x97: 'বন্ধুদের\x20আমন্ত্রণ\x20জানান,\x20তাদের\x20BOSS\x20হন!\x20বিনামূল্যের\x20জন্য\x20বিশাল\x20কয়েন',
                0x98: 'আপনার\x20বন্ধুদের\x20শেয়ার\x20করুন,\x20একচেটিয়া\x20উপহার\x20পান',
                0x99: 'শেয়ার\x20করার\x20জন্য\x20বিশাল\x20পুরষ্কার,\x20আরো\x20আমন্ত্রণ\x20আরো\x20পুরস্কার',
                0x9a: 'বন্ধুদের\x20সাথে\x20খেলুন,\x20প্রতিদিন\x20বিনামূল্যে\x20উপহার!',
                0x9b: 'ভাগ্যবান\x20বোনাস,\x20সবচেয়ে\x20ধনী\x20হওয়ার\x20সুযোগ!',
                0x9c: 'আপনার\x20১ম\x20বিশেষ\x20অফার\x20উপভোগ\x20করুন\x20এবং\x20ক্রয়ের\x20সুবিধা\x20পান',
                0x9d: '1ম\x20ক্রয়\x20অতিরিক্ত\x20পুরস্কার\x20পেতে\x20পারেন!',
                0x9e: 'হ্যালোউইন!\x20প্রতিদিন\x20লগ\x20ইন\x20করুন,\x20যেকোনো\x20পণ্য\x20কিনুন\x20এবং\x20সময়-সীমিত\x20ছাড়!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/clearInput.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
    var c, d, f, g, h, j, k, m, q, v;
    return {
        'setters': [function(w) {
            c = w['applyDecoratedDescriptor'],
            d = w['inheritsLoose'],
            f = w['initializerDefineProperty'],
            g = w['assertThisInitialized'],
            h = w['createClass'];
        }
        , function(w) {
            j = w['cclegacy'],
            k = w['_decorator'],
            m = w['Button'],
            q = w['EditBox'],
            v = w['Component'];
        }
        ],
        'execute': function() {
            var w, x, y, z, A, B, C;
            j['_RF']['push']({}, '387f4b5SJlIBYhEbYn2nLeJ', 'clearInput', void 0x0);
            var F = k['ccclass']
              , G = k['property'];
            b('clearInput', (w = F('clearInput'),
            x = G({
                'type': m,
                'tooltip': '清除按钮'
            }),
            y = G({
                'type': q,
                'tooltip': '输入框'
            }),
            w((B = c((A = function(H) {
                function J() {
                    for (var L, M = arguments['length'], N = new Array(M), O = 0x0; O < M; O++)
                        N[O] = arguments[O];
                    return L = H['call']['apply'](H, [this]['concat'](N)) || this,
                    f(L, 'clearBtn', B, g(L)),
                    f(L, 'input', C, g(L)),
                    L['editDidEndFun'] = null,
                    L['editDidBeganFun'] = null,
                    L['clearFun'] = null,
                    L['tipsInput'] = null,
                    L;
                }
                d(J, H);
                var K = J['prototype'];
                return K['onLoad'] = function() {
                    this['clearBtn']['node']['on'](m['EventType']['CLICK'], this['onClearBtnClick'], this),
                    this['clearBtn']['node']['active'] = !0x1,
                    this['input']['node']['on'](q['EventType']['EDITING_DID_ENDED'], this['onInputTextEnded'], this),
                    this['input']['node']['on'](q['EventType']['EDITING_DID_BEGAN'], this['onInputTextBegan'], this),
                    this['input']['node']['on'](q['EventType']['TEXT_CHANGED'], this['onTextChange'], this),
                    this['tipsInput'] = this['Input']['placeholderLabel'];
                }
                ,
                K['onInputTextEnded'] = function(L) {
                    var M, N = L['string'];
                    this['clearBtn']['node']['active'] = N['length'] > 0x0,
                    null == (M = this['editDidEndFun']) || M['call'](this, this['Input']);
                }
                ,
                K['setLimit'] = function(L, M, N) {
                    null != L && (this['input']['inputMode'] = L),
                    null != M && (this['input']['inputFlag'] = M),
                    null != N && (N = Math['max'](0x1, N),
                    this['input']['maxLength'] = N);
                }
                ,
                K['onDestroy'] = function() {}
                ,
                K['onTextChange'] = function(L) {
                    var M = L['string'];
                    this['clearBtn']['node']['active'] = M['length'] > 0x0;
                }
                ,
                K['onInputTextBegan'] = function(L) {
                    var M;
                    null == (M = this['editDidBeganFun']) || M['call'](this, this['Input']);
                }
                ,
                K['onClearBtnClick'] = function() {
                    this['clearInput'](!0x1);
                }
                ,
                K['setInput'] = function(L, M) {
                    var N;
                    (void 0x0 === M && (M = !0x1),
                    null == L && (L = ''),
                    this['input']['string'] = L,
                    this['clearBtn']['node']['active'] = null != L && L['length'] > 0x0,
                    M) || (null == (N = this['editDidEndFun']) || N['call'](this, this['Input']));
                }
                ,
                K['setTips'] = function(L) {
                    null == this['tipsInput'] && (this['tipsInput'] = this['Input']['placeholderLabel']),
                    this['tipsInput'] && (this['tipsInput']['string'] = L);
                }
                ,
                K['clearInput'] = function(L) {
                    var M;
                    (void 0x0 === L && (L = !0x1),
                    this['input']['string'] = '',
                    this['clearBtn']['node']['active'] = !0x1,
                    this['input']['node']['emit'](q['EventType']['EDITING_DID_ENDED'], this['input']),
                    L) || (null == (M = this['clearFun']) || M['call'](this, this['Input']));
                }
                ,
                K['setEditDidEnd'] = function(L) {
                    this['editDidEndFun'] = L;
                }
                ,
                K['setEditDidBegan'] = function(L) {
                    this['editDidBeganFun'] = L;
                }
                ,
                K['setClearFun'] = function(L) {
                    this['clearFun'] = L;
                }
                ,
                h(J, [{
                    'key': 'Input',
                    'get': function() {
                        return this['input'];
                    }
                }, {
                    'key': 'String',
                    'get': function() {
                        return this['input']['string'];
                    }
                }]),
                J;
            }(v))['prototype'], 'clearBtn', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            C = c(A['prototype'], 'input', [y], {
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
System['register']('chunks:///_virtual/downloadEntry.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyState.ts', './utils.ts', './Language.ts', './platformData.ts', './Oops.ts', './appConfig.ts', './GameUIConfig.ts'], function(h) {
    var j, k, m, q, v, x, z, A, B, C, D, E, F, G, H, I, J;
    return {
        'setters': [function(K) {
            j = K['applyDecoratedDescriptor'],
            k = K['inheritsLoose'],
            m = K['initializerDefineProperty'],
            q = K['assertThisInitialized'];
        }
        , function(K) {
            v = K['cclegacy'],
            x = K['_decorator'],
            z = K['Button'],
            A = K['Label'],
            B = K['sys'],
            C = K['Component'];
        }
        , function(K) {
            D = K['lobbyState'];
        }
        , function(K) {
            E = K['utils'];
        }
        , function(K) {
            F = K['LanguageManager'];
        }
        , function(K) {
            G = K['PModuleID'];
        }
        , function(K) {
            H = K['oops'];
        }
        , function(K) {
            I = K['appConfig'];
        }
        , function(K) {
            J = K['UIID'];
        }
        ],
        'execute': function() {
            var K, M, N, O, P, Q, R;
            v['_RF']['push']({}, '0b2163amyRN3Ls2FxNk3zqj', 'downloadEntry', void 0x0);
            var T = x['ccclass']
              , U = x['property'];
            h('downloadEntry', (K = T('downloadEntry'),
            M = U({
                'type': z,
                'tooltip': '下载按钮'
            }),
            N = U({
                'type': A,
                'tooltip': '下载文本'
            }),
            K((Q = j((P = function(V) {
                function W() {
                    for (var Y, Z = arguments['length'], a0 = new Array(Z), a1 = 0x0; a1 < Z; a1++)
                        a0[a1] = arguments[a1];
                    return Y = V['call']['apply'](V, [this]['concat'](a0)) || this,
                    m(Y, 'btn_download', Q, q(Y)),
                    m(Y, 'lb_downlaod', R, q(Y)),
                    Y;
                }
                k(W, V);
                var X = W['prototype'];
                return X['init'] = function(Y) {
                    if (null != this['lb_downlaod']) {
                        var Z = F['getLangByTag']('download', G['lobby']);
                        this['lb_downlaod']['string'] = Z;
                    }
                    E['ButtonBindClick'](this['btn_download'], function() {
                        null == Y || Y();
                    }, this),
                    this['isShowDownloadEntry']() || H['gui']['remove'](J['downloadEntry']);
                }
                ,
                X['isShowDownloadEntry'] = function() {
                    var Y = D['Instance']['Server']['downloadUrl'];
                    return !(B['isNative'] || I['bPreview'] || E['StringIsNullOrEmpty'](Y));
                }
                ,
                W;
            }(C))['prototype'], 'btn_download', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            R = j(P['prototype'], 'lb_downlaod', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            O = P)) || O)),
            v['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/downloadTips.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts', './GameUIConfig.ts', './lobbyState.ts', './CustomEventDefine.ts', './Language.ts', './platformData.ts', './popManager.ts', './appConfig.ts', './lobbyConfig.ts', './lobbyPopView.ts'], function(j) {
    var k, q, x, z, A, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T;
    return {
        'setters': [function(U) {
            k = U['applyDecoratedDescriptor'],
            q = U['inheritsLoose'],
            x = U['initializerDefineProperty'],
            z = U['assertThisInitialized'];
        }
        , function(U) {
            A = U['cclegacy'],
            D = U['_decorator'],
            E = U['sp'],
            F = U['Label'],
            G = U['Button'];
        }
        , function(U) {
            H = U['utils'];
        }
        , function(U) {
            I = U['webGame'];
        }
        , function(U) {
            J = U['oops'];
        }
        , function(U) {
            K = U['UIID'];
        }
        , function(U) {
            L = U['lobbyState'];
        }
        , function(U) {
            M = U['WebGameEvent'];
        }
        , function(U) {
            N = U['LanguageManager'];
        }
        , function(U) {
            O = U['PModuleID'];
        }
        , function(U) {
            P = U['popJobType'],
            Q = U['lobbyPopJob'];
        }
        , function(U) {
            R = U['appConfig'];
        }
        , function(U) {
            S = U['Lobby'];
        }
        , function(U) {
            T = U['lobbyPopView'];
        }
        ],
        'execute': function() {
            var V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
            A['_RF']['push']({}, '0e4c9iKIaJJW4i++tr9xQ4a', 'downloadTips', void 0x0);
            var a8 = D['ccclass']
              , a9 = D['property'];
            j('downloadTips', (V = a8('downloadTips'),
            W = a9({
                'type': E['Skeleton'],
                'tooltip': '背景动画'
            }),
            X = a9({
                'type': F,
                'tooltip': '口号文本'
            }),
            Y = a9({
                'type': F,
                'tooltip': '奖励文本'
            }),
            Z = a9({
                'type': G,
                'tooltip': '下载按钮'
            }),
            a0 = a9({
                'type': G,
                'tooltip': '关闭按钮'
            }),
            V((a3 = k((a2 = function(aa) {
                function ab() {
                    for (var ad, ae = arguments['length'], af = new Array(ae), ag = 0x0; ag < ae; ag++)
                        af[ag] = arguments[ag];
                    return (ad = aa['call']['apply'](aa, [this]['concat'](af)) || this)['lobbyPopType'] = P['download'],
                    x(ad, 'spineBg', a3, z(ad)),
                    x(ad, 'lbSlogan', a4, z(ad)),
                    x(ad, 'lbReward', a5, z(ad)),
                    x(ad, 'btnDownload', a6, z(ad)),
                    x(ad, 'btnClose', a7, z(ad)),
                    ad;
                }
                q(ab, aa);
                var ac = ab['prototype'];
                return ac['onInit'] = function() {
                    var ad = this;
                    H['ButtonBindClick'](this['btnDownload'], this['onBtnDownloadClick'], this),
                    H['ButtonBindClick'](this['btnClose'], this['onBtnCloseClick'], this),
                    this['popDownHandler'] = function(ae) {
                        H['PlaySpineAnimation'](ad['spineBg'], 'run_3', !0x1, function() {
                            null == ae || ae();
                        });
                    }
                    ;
                }
                ,
                ac['onShow'] = function() {
                    H['PlaySpineAnimations'](this['spineBg'], ['run_1', 'run_2'], !0x1),
                    aa['prototype']['onShow']['call'](this);
                }
                ,
                ac['onClose'] = function() {
                    J['gui']['remove'](K['downloadTips'], !0x1),
                    aa['prototype']['onClose']['call'](this);
                }
                ,
                ac['refresh'] = function() {
                    var ad = L['Instance']['Server']['downloadReward']
                      , ae = 'download_tips'
                      , af = ad > 0x0;
                    af && (this['lbReward']['string'] = I['FormatCoins'](ad),
                    ae = 'download_reward_tips'),
                    this['lbReward']['node']['active'] = af,
                    this['lbSlogan'] && (this['lbSlogan']['string'] = N['getLangByTag'](ae, O['lobby']));
                }
                ,
                ac['openUrl'] = function(ad) {
                    H['StringIsNullOrEmpty'](ad) || H['openUrl'](ad),
                    this['onBtnCloseClick']();
                }
                ,
                ac['onBtnDownloadClick'] = function() {
                    var ad = this
                      , ae = L['Instance']['Server']['downloadUrl'];
                    if (R['bDownNeendBindPhone']) {
                        var af = L['Instance']['Player']['phone'];
                        H['StringIsNullOrEmpty'](af) ? this['close'](function() {
                            var ag = new Q(P['other'],0x1,0x0);
                            ag['canPopUp'] = function() {
                                return !0x0;
                            }
                            ,
                            ag['showView'] = function() {
                                var ah = N['getLangByTag']('http_error_127', O['lobby']);
                                ah && I['toast'](ah),
                                ad['Call'](S['modID']['root'], S['msgID']['enterLobbyMod'], O['profile'], 0x1);
                            }
                            ,
                            J['message']['dispatchEvent'](M['close_lobby_pop'], P['download'], ag);
                        }) : this['openUrl'](ae);
                    } else
                        this['openUrl'](ae);
                }
                ,
                ac['onBtnCloseClick'] = function() {
                    this['close'](function() {
                        J['message']['dispatchEvent'](M['close_lobby_pop'], P['download']);
                    });
                }
                ,
                ab;
            }(T))['prototype'], 'spineBg', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = k(a2['prototype'], 'lbSlogan', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a5 = k(a2['prototype'], 'lbReward', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = k(a2['prototype'], 'btnDownload', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = k(a2['prototype'], 'btnClose', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = a2)) || a1)),
            A['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/dropdown.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './topCloseLayer.ts'], function(b) {
    var j, k, m, q, w, x, y, z, A, B, C, D, E, F, G, H;
    return {
        'setters': [function(I) {
            j = I['applyDecoratedDescriptor'],
            k = I['inheritsLoose'],
            m = I['initializerDefineProperty'],
            q = I['assertThisInitialized'],
            w = I['createClass'];
        }
        , function(I) {
            x = I['cclegacy'],
            y = I['_decorator'],
            z = I['Button'],
            A = I['Label'],
            B = I['Node'],
            C = I['ToggleContainer'],
            D = I['Vec3'],
            E = I['instantiate'],
            F = I['Component'],
            G = I['Toggle'];
        }
        , function(I) {
            H = I['topCloseLayer'];
        }
        ],
        'execute': function() {
            var J, K, M, N, Q, S, U, V, W, X, Y, Z, a0;
            x['_RF']['push']({}, '1176bxsHCNHKYQszx0H0gMb', 'dropdown', void 0x0);
            var a1 = y['ccclass']
              , a2 = y['property']
              , a3 = (function() {
                function a4(a6) {
                    this['node'] = null,
                    this['toggle'] = null,
                    this['content'] = null,
                    this['node'] = a6,
                    this['toggle'] = a6['getComponent'](G),
                    this['content'] = a6['getComponentInChildren'](A);
                }
                var a5 = a4['prototype'];
                return a5['bindChooenHandler'] = function(a6) {
                    this['toggle']['node']['on'](G['EventType']['TOGGLE'], function(a7) {
                        a6(a7['isChecked']);
                    });
                }
                ,
                a5['setOption'] = function(a6) {
                    this['content']['string'] = a6;
                }
                ,
                a5['show'] = function(a6) {
                    this['node']['active'] = a6;
                }
                ,
                w(a4, [{
                    'key': 'IsChoosen',
                    'get': function() {
                        var a6;
                        return null == (a6 = this['toggle']) ? void 0x0 : a6['isChecked'];
                    },
                    'set': function(a6) {
                        this['toggle']['isChecked'] = a6;
                    }
                }]),
                a4;
            }());
            b('dropdown', (J = a1('dropdown'),
            K = a2({
                'type': z,
                'tooltip': '按钮'
            }),
            M = a2({
                'type': A,
                'tooltip': '标签'
            }),
            N = a2({
                'type': B,
                'tooltip': '下拉框节点'
            }),
            Q = a2({
                'type': C,
                'tooltip': '选项组'
            }),
            S = a2({
                'type': B,
                'tooltip': '选项预制体'
            }),
            J((W = j((V = function(a4) {
                function a5() {
                    for (var a7, a8 = arguments['length'], a9 = new Array(a8), aa = 0x0; aa < a8; aa++)
                        a9[aa] = arguments[aa];
                    return a7 = a4['call']['apply'](a4, [this]['concat'](a9)) || this,
                    m(a7, 'btn', W, q(a7)),
                    m(a7, 'label', X, q(a7)),
                    m(a7, 'optionsRoot', Y, q(a7)),
                    m(a7, 'optionsGroup', Z, q(a7)),
                    m(a7, 'optionPrefab', a0, q(a7)),
                    a7['options'] = [],
                    a7['optionsData'] = [],
                    a7['value'] = -0x1,
                    a7['bInit'] = !0x1,
                    a7['recoverOptionsRoot'] = null,
                    a7['valueChangeHandler'] = null,
                    a7;
                }
                k(a5, a4);
                var a6 = a5['prototype'];
                return a6['onLoad'] = function() {
                    this['init']();
                }
                ,
                a6['init'] = function() {
                    if (!this['bInit']) {
                        this['bInit'] = !0x0,
                        this['btn']['node']['on'](z['EventType']['CLICK'], this['switchOptions'], this),
                        this['optionsRoot']['active'] = !0x1,
                        this['optionsGroup']['allowSwitchOff'] = !0x1;
                        var a7 = this['optionsGroup']['node']['children'];
                        if (null != this['optionPrefab'] || 0x0 != a7['length']) {
                            if (a7['length'] > 0x0)
                                for (var a8 = 0x0; a8 < a7['length']; a8++) {
                                    var a9 = this['getDropdownOption'](a8, a7[a8]);
                                    this['options']['push'](a9);
                                }
                        } else
                            console['error']('dropdown\x20options\x20is\x20empty');
                    }
                }
                ,
                a6['switchOptions'] = function() {
                    var a7 = this;
                    if (this['optionsRoot']['active'] = !this['optionsRoot']['active'],
                    this['optionsRoot']['active']) {
                        var a8 = this['optionsRoot']['scale']['clone']();
                        this['recoverOptionsRoot'] = function() {
                            var a9 = a7['optionsRoot']['worldPosition']
                              , aa = new D();
                            a7['node']['inverseTransformPoint'](aa, a9),
                            a7['optionsRoot']['parent'] = a7['node'],
                            a7['optionsRoot']['position'] = aa,
                            a7['optionsRoot']['setScale'](a8),
                            a7['optionsRoot']['active'] = !0x1,
                            a7['recoverOptionsRoot'] = null;
                        }
                        ,
                        H['instance']['show'](function() {
                            null == a7['recoverOptionsRoot'] || a7['recoverOptionsRoot']();
                        }, this, this['optionsRoot']);
                    }
                }
                ,
                a6['getDropdownOption'] = function(a7, a8) {
                    var a9 = this
                      , aa = new a3(a8);
                    return aa['bindChooenHandler'](function(ab) {
                        a9['onToggleChange'](a7, ab);
                    }),
                    aa;
                }
                ,
                a6['onToggleChange'] = function(a7, a8) {
                    if (a8) {
                        if (a7 < this['optionsData']['length']) {
                            var a9, aa = this['optionsData'][a7];
                            this['label']['string'] = aa,
                            this['value'] = a7,
                            null == (a9 = this['valueChangeHandler']) || a9['call'](this, a7, aa);
                        } else
                            console['error']('dropdown\x20toggle\x20index[' + a7 + ']\x20out\x20of\x20range[' + this['Options']['length'] + ']');
                        var ab;
                        if (this['optionsRoot']['active'])
                            null == (ab = this['recoverOptionsRoot']) || ab['call'](this),
                            H['instance']['close']();
                    }
                }
                ,
                a6['addOptions'] = function(a7) {
                    if (null != a7 && 0x0 != a7['length']) {
                        this['init']();
                        for (var a8 = this['optionsData']['length'], a9 = a7['length'], aa = 0x0; aa < a9; aa++) {
                            var ab = a8 + aa
                              , ac = this['options'][ab];
                            if (null == ac) {
                                var ad = E(this['optionPrefab']);
                                this['optionsGroup']['node']['addChild'](ad),
                                ac = this['getDropdownOption'](ab, ad),
                                this['options']['push'](ac);
                            }
                            ac['setOption'](a7[aa]),
                            ac['show'](!0x0);
                        }
                        if (this['optionsData'] = this['optionsData']['concat'](a7),
                        (a8 = this['optionsData']['length']) < this['options']['length']) {
                            for (var ae = a8; ae < a8; ae++)
                                this['options'][ae]['show'](!0x1);
                        }
                    }
                }
                ,
                a6['clearOptions'] = function() {
                    this['init'](),
                    this['optionsData'] = [];
                    for (var a7 = 0x0; a7 < this['options']['length']; a7++)
                        this['options'][a7]['show'](!0x1);
                }
                ,
                a6['setValueChangedListener'] = function(a7) {
                    this['valueChangeHandler'] = a7;
                }
                ,
                a6['setEnable'] = function(a7) {
                    this['btn']['interactable'] = a7;
                }
                ,
                w(a5, [{
                    'key': 'Options',
                    'get': function() {
                        return this['optionsData'];
                    },
                    'set': function(a7) {
                        this['optionsData'] = a7;
                    }
                }, {
                    'key': 'Value',
                    'get': function() {
                        if (-0x1 == this['value'] && 0x0 < this['optionsData']['length']) {
                            for (var a7 = 0x0; a7 < this['options']['length']; a7++)
                                if (this['options'][a7]['IsChoosen'])
                                    return this['value'] = a7,
                                    a7;
                        }
                        return this['value'];
                    },
                    'set': function(a7) {
                        if (-0x1 < a7 && a7 < this['optionsData']['length']) {
                            this['label']['string'] = this['optionsData'][a7],
                            this['value'] = a7;
                            var a8 = this['options'][a7];
                            null != a8 ? a8['IsChoosen'] = !0x0 : console['error']('dropdown\x20option\x20index[' + a7 + ']\x20not\x20found');
                        } else
                            console['error']('dropdown\x20option\x20index[' + a7 + ']\x20out\x20of\x20range[' + this['Options']['length'] + ']');
                    }
                }, {
                    'key': 'optionString',
                    'get': function() {
                        return 0x0 == this['Options']['length'] || this['value'] < 0x0 || this['value'] >= this['optionsData']['length'] ? '' : this['optionsData'][this['value']];
                    }
                }]),
                a5;
            }(F))['prototype'], 'btn', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            X = j(V['prototype'], 'label', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Y = j(V['prototype'], 'optionsRoot', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Z = j(V['prototype'], 'optionsGroup', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a0 = j(V['prototype'], 'optionPrefab', [S], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            U = V)) || U)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/en2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, '0d340b078dKqYxUcjAF3coj', 'en', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['en'] || (b['languages']['en'] = {}),
            b['languages']['en'][0x66] = {
                0x1: 'VIP',
                0x2: 'Bank',
                0x3: 'Mail',
                0x4: 'Activity',
                0x5: 'Rank',
                0x6: 'Promote',
                0x7: 'Withdraw',
                0x8: 'The\x20device\x20code\x20is\x20empty',
                0x9: 'The\x20registration\x20type\x20is\x20incorrect',
                0xa: 'The\x20registration\x20information\x20is\x20incorrect',
                0xb: 'System\x20exception\x2003,\x20please\x20try\x20again\x20later',
                0xc: 'ID\x20is\x20duplicated,\x20please\x20contact\x20customer\x20service',
                0xd: 'The\x20account\x20has\x20been\x20registered',
                0xe: 'Captcha\x20wrong',
                0xf: 'This\x20phone\x20number\x20has\x20already\x20been\x20used',
                0x10: 'Please\x20bind\x20your\x20email\x20first',
                0x11: 'For\x20abnormal\x20IP\x20addresses,\x20please\x20contact\x20customer\x20service',
                0x12: 'Registration\x20failed,\x20please\x20try\x20again\x20later\x20(code:1010)',
                0x13: 'Registration\x20failed,\x20please\x20try\x20again\x20later\x20(code:1011)',
                0x14: 'The\x20login\x20type\x20is\x20invalid',
                0x15: 'Incorrect\x20login\x20information',
                0x16: 'Device\x20is\x20abnormal,\x20please\x20contact\x20customer\x20service',
                0x17: 'System\x20exception\x2013,\x20please\x20try\x20again\x20later',
                0x18: 'Account\x20is\x20abnormal,\x20please\x20contact\x20customer\x20service',
                0x19: 'There\x20seems\x20to\x20be\x20a\x20login\x20exception,\x20please\x20try\x20again\x20later',
                0x1a: 'Account\x20or\x20password\x20is\x20incorrect,\x20please\x20check\x20the\x20input',
                0x1b: 'Account\x20has\x20a\x20security\x20risk\x20and\x20is\x20about\x20to\x20enter\x20the\x20security\x20verification',
                0x1c: 'Illegal\x20device\x20to\x20log\x20in,\x20please\x20contact\x20customer\x20service',
                0x1d: 'Server\x20maintenance,\x20please\x20try\x20again\x20later',
                0x1e: 'Invalid\x20request',
                0x1f: 'Version\x20too\x20low,\x20requires\x20upgrade',
                0x20: 'Parameter\x20error',
                0x21: 'Customer\x20service\x20unavailable\x20for\x20login',
                0x22: 'Incorrect\x20verification\x20code\x20type',
                0x23: 'Login\x20exception\x2021\x20seems\x20to\x20occur,\x20please\x20try\x20again\x20later',
                0x24: 'Current\x20phone\x20number\x20is\x20already\x20registered,\x20cannot\x20register\x20again',
                0x25: 'System\x20exception\x2023,\x20please\x20try\x20again\x20later',
                0x26: 'Verification\x20information\x20exception,\x20please\x20try\x20again\x20later',
                0x27: 'Current\x20phone\x20number\x20is\x20not\x20associated\x20with\x20any\x20account',
                0x28: 'Login\x20information\x20has\x20expired',
                0x29: 'Please\x20bind\x20your\x20phone\x20number\x20first',
                0x2a: 'Please\x20enter\x20a\x20valid\x20phone\x20number',
                0x2b: 'Incorrect\x20account\x20type',
                0x2c: 'Account\x20information\x20error',
                0x2d: 'Incorrect\x20verification\x20code',
                0x2e: 'System\x20exception\x2033,\x20please\x20try\x20again\x20later',
                0x2f: 'Incorrect\x20account',
                0x30: 'Please\x20bind\x20your\x20phone\x20number\x20first',
                0x31: 'Please\x20enter\x20a\x20valid\x20phone\x20number',
                0x32: 'Account\x20is\x20already\x20bound\x20to\x20a\x20phone\x20number,\x20cannot\x20bind\x20again',
                0x33: 'Phone\x20number\x20is\x20already\x20bound',
                0x34: 'Please\x20enter\x20your\x20password',
                0x35: 'Unable\x20to\x20bind\x20phone\x20number\x20for\x20the\x20current\x20account,\x20please\x20contact\x20customer\x20service.',
                0x36: 'Login\x20exception,\x20please\x20try\x20again.',
                0x37: 'Current\x20account\x20already\x20exists.',
                0x38: 'Incorrect\x20verification\x20code.',
                0x39: 'System\x20exception\x2044,\x20please\x20try\x20again\x20later.',
                0x3a: 'System\x20exception\x2045,\x20please\x20try\x20again\x20later.',
                0x3b: 'System\x20exception\x2046,\x20please\x20try\x20again\x20later.',
                0x3c: 'Request\x20timed\x20out,\x20please\x20retry\x20later.',
                0x3d: 'User\x20ID\x20does\x20not\x20exist.',
                0x3e: 'User\x20verification\x20information\x20is\x20incorrect.',
                0x3f: 'Please\x20fill\x20in\x20user\x20verification\x20information.',
                0x40: 'User\x20verification\x20information\x20is\x20incorrect.',
                0x41: 'Operation\x20exception,\x20please\x20contact\x20customer\x20service.',
                0x42: 'Invalid\x20data,\x20please\x20try\x20again\x20later',
                0x43: 'Congratulations\x20to\x20<color=#FF4600>@player</color>\x20in\x20<color=yellow>@game</color>\x20for\x20winning\x20<color=#4BFF00>x@multiple</color>\x20prizes\x20and\x20got\x20<color=yellow>@coins</color>\x20Coins.',
                0x44: 'Congratulations\x20to\x20<color=#FF4600>%s</color>\x20for\x20winning\x20Jackpot\x20in\x20<color=#4BFF00>%s</color>\x20and\x20winning\x20<color=yellow>%s</color>\x20Coins.',
                0x45: 'Room',
                0x46: 'Players',
                0x47: 'Bets',
                0x48: 'Min\x20Balance',
                0x49: 'Demo',
                0x4a: 'Primary',
                0x4b: 'Master',
                0x4c: 'King',
                0x4d: 'Epic',
                0x4e: 'Legend',
                0x4f: 'Vip',
                0x50: 'Room',
                0x51: 'Play',
                0x52: 'Any',
                0x53: 'Quit',
                0x54: 'Sign\x20out',
                0x55: 'Tips',
                0x56: 'The\x20server\x20connection\x20failed,\x20please\x20try\x20again\x20later',
                0x57: 'The\x20system\x20asks\x20you\x20to\x20leave,\x20please\x20enter\x20the\x20game\x20later',
                0x58: 'This\x20account\x20is\x20sign\x20in\x20from\x20another\x20device,\x20please\x20pay\x20attention\x20to\x20account\x20security',
                0x59: 'Your\x20game\x20in\x20%s\x20is\x20not\x20over\x20yet,\x20please\x20go\x20back\x20and\x20play',
                0x5a: 'Account\x20registration\x20already\x20exists.',
                0x5b: 'Guest\x20account\x20device\x20cannot\x20be\x20empty.',
                0x5c: 'Account\x20does\x20not\x20exist.',
                0x5d: 'Incorrect\x20password.',
                0x5e: 'This\x20account\x20has\x20been\x20suspended.',
                0x5f: 'Guest\x20login\x20exception,\x20please\x20retry.',
                0x60: 'Login\x20exception\x207,\x20please\x20retry.',
                0x61: 'System\x20under\x20maintenance,\x20please\x20try\x20again\x20later.',
                0x62: 'PASSWORD',
                0x63: 'Download',
                0x64: 'For\x20your\x20better\x20experience,please\x20Download\x20the\x20Game.',
                0x65: 'For\x20your\x20better\x20experience,please\x20Download\x20the\x20Game.Install\x20now\x20and\x20get\x20the\x20rewards!',
                0x66: 'Accept\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Terms\x20Of\x20Service</on></u></color>\x20and\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacy&Policy</on></u></color>',
                0x67: 'Bind\x20mobile\x20phone\x20number\x0a\x20to\x20get\x20rewards',
                0x68: 'Bind',
                0x69: 'Sorry,the\x20VIP\x20requirements\x20are\x20not\x20met,\x20the\x20more\x20coins,\x20the\x20higher\x20VIP,\x20go\x20to\x20the\x20store\x20to\x20recharge',
                0x6a: 'Sorry,\x20you\x20don\x27t\x20meet\x20the\x20entry\x20requirements,\x20would\x20you\x20want\x20to\x20go\x20to\x20the\x20store\x20for\x20buy\x20some?',
                0x6b: 'Tap\x20<img\x20src=\x27share\x27\x20/>\x20and\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home\x20Screen</color></b>\x20to\x20play\x20whenever\x20you\x20want',
                0x6c: 'Tap\x20<img\x20src=\x27share\x27\x20/>\x20and\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home\x20Screen</color></b>\x20to\x20play\x20whenever\x20you\x20want',
                0x6d: 'Warning',
                0x6e: 'For\x20the\x20security\x20of\x20your\x20game\x20data,\x20it\x20is\x20highly\x20recommended\x20that\x20you\x20register\x20as\x20an\x20official\x20account',
                0x6f: 'Message\x20sent',
                0x70: 'Claim\x20prize\x20complete',
                0x71: 'Service',
                0x72: 'Setting',
                0x73: 'Check-in',
                0x74: 'Turntable',
                0x75: 'Gift',
                0x76: 'Gratia',
                0x77: 'Invite',
                0x78: 'Bonus',
                0x79: 'All',
                0x7a: 'Hot',
                0x7b: 'Slots',
                0x7c: 'Poker',
                0x7d: 'Poor\x20network\x20status',
                0x7e: 'FreeCash',
                0x7f: 'Buy',
                0x80: 'A\x20new\x20version\x20was\x20found.\x20Do\x20you\x20want\x20to\x20refresh\x20it?',
                0x81: 'The\x20event\x20has\x20been\x20closed\x20and\x20the\x20purchase\x20amount\x20has\x20been\x20refunded',
                0x82: 'BUY\x20COIN',
                0x83: 'You\x20are\x20not\x20logged\x20in,\x20please\x20log\x20out\x20and\x20try\x20again',
                0x84: 'If\x20the\x20authentication\x20fails,\x20exit\x20and\x20try\x20again',
                0x85: 'Invalid\x20game\x20room,\x20try\x20another\x20one',
                0x86: 'The\x20room\x20is\x20closed,\x20try\x20another\x20one',
                0x87: 'Task',
                0x88: 'It\x27s\x20time\x20to\x20play\x20NEW\x20Slots',
                0x89: 'Get\x20FREE\x20Coins\x20by\x20sign\x20in\x20every\x20day!',
                0x8a: 'Lucky\x20Roulette!100%\x20win\x20rate\x20guaranteed!Come\x20and\x20get\x20your\x20prize!',
                0x8b: 'New\x20exclusive\x20challenge\x20for\x20huge\x20coins!',
                0x8c: 'Amazing\x20slots\x20and\x20features!',
                0x8d: 'You\x20Can\x20Receive\x20A\x20Special\x20Bonus',
                0x8e: 'Higher\x20VIP\x20POWER,More\x20benefits!',
                0x8f: 'Spin\x20NEW\x20SLOTS,Good\x20fortune\x20be\x20with\x20you!',
                0x90: 'LUCKY\x20WHEEL\x20DAY,GOLDEN\x20WHEEL\x20MULTIPLER!',
                0x91: 'SURPRISE\x20BONUS,Come\x20collect\x20your\x20coins',
                0x92: 'Faster\x20spins\x20&\x20BIGGER\x20PRIZES!',
                0x93: 'MEGA\x20REWARD\x20is\x20ready,SPIN\x20NOW!',
                0x94: 'Tap\x20and\x20collect\x20your\x20free\x20chips\x20now!',
                0x95: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Chance\x20UP!!!Unlimited\x20bonus\x20on\x20all\x20packs',
                0x96: 'Play\x20now\x20to\x20enjoy\x20treats\x20and\x20special\x20missions',
                0x97: 'Invite\x20friends,be\x20their\x20BOSS!Huge\x20coins\x20for\x20Free',
                0x98: 'Share\x20to\x20your\x20friends,get\x20Exclusive\x20gifts',
                0x99: 'Huge\x20rewards\x20for\x20Share,More\x20Invite\x20more\x20prize',
                0x9a: 'Play\x20with\x20friends,Free\x20gifts\x20everyday!',
                0x9b: 'LUCKY\x20BONUS,A\x20chance\x20to\x20be\x20the\x20richest!',
                0x9c: 'Enjoy\x20your\x201st\x20SPECIAL\x20OFFER,and\x20get\x20purchase\x20benefits',
                0x9d: '1st\x20purchase\x20can\x20get\x20extra\x20PRIZE!',
                0x9e: 'HalloWIN!Log\x20in\x20everyday,purchase\x20any\x20goods\x20and\x20time-limited\x20discounts!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/es_mx2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, 'a3c34Ca7tFCK56VEqvSwwGV', 'es_mx', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['es_mx'] || (b['languages']['es_mx'] = {}),
            b['languages']['es_mx'][0x66] = {
                0x1: 'VIP',
                0x2: 'Banco',
                0x3: 'Correo',
                0x4: 'Actividad',
                0x5: 'Rango',
                0x6: 'Promover',
                0x7: 'Retirar',
                0x8: 'El\x20código\x20del\x20dispositivo\x20está\x20vacío.',
                0x9: 'El\x20tipo\x20de\x20registro\x20es\x20incorrecto.',
                0xa: 'La\x20información\x20de\x20registro\x20es\x20incorrecta.',
                0xb: 'Excepción\x20del\x20sistema\x2003,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde',
                0xc: 'La\x20identificación\x20está\x20duplicada,\x20comuníquese\x20con\x20el\x20servicio\x20de\x20atención\x20al\x20cliente.',
                0xd: 'La\x20cuenta\x20ha\x20sido\x20registrada.',
                0xe: 'Captcha\x20equivocada',
                0xf: 'Este\x20número\x20de\x20teléfono\x20ya\x20ha\x20sido\x20utilizado.',
                0x10: 'Primero\x20vincule\x20su\x20correo\x20electrónico',
                0x11: 'Para\x20direcciones\x20IP\x20anormales,\x20comuníquese\x20con\x20el\x20servicio\x20al\x20cliente',
                0x12: 'El\x20registro\x20falló,\x20inténtelo\x20nuevamente\x20más\x20tarde\x20(código:1010)',
                0x13: 'El\x20registro\x20falló,\x20inténtelo\x20nuevamente\x20más\x20tarde\x20(código:1011)',
                0x14: 'El\x20tipo\x20de\x20inicio\x20de\x20sesión\x20no\x20es\x20válido',
                0x15: 'Información\x20de\x20ingreso\x20incorrecta',
                0x16: 'El\x20dispositivo\x20es\x20anormal,\x20comuníquese\x20con\x20el\x20servicio\x20al\x20cliente',
                0x17: 'Excepción\x20del\x20sistema\x2013.\x20Vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x18: 'La\x20cuenta\x20es\x20anormal,\x20comuníquese\x20con\x20el\x20servicio\x20al\x20cliente',
                0x19: 'Parece\x20haber\x20una\x20excepción\x20de\x20inicio\x20de\x20sesión,\x20inténtalo\x20de\x20nuevo\x20más\x20tarde.',
                0x1a: 'La\x20cuenta\x20o\x20la\x20contraseña\x20son\x20incorrectas,\x20verifique\x20la\x20entrada',
                0x1b: 'La\x20cuenta\x20tiene\x20un\x20riesgo\x20de\x20seguridad\x20y\x20está\x20a\x20punto\x20de\x20ingresar\x20a\x20la\x20verificación\x20de\x20seguridad.',
                0x1c: 'Dispositivo\x20ilegal\x20para\x20iniciar\x20sesión,\x20comuníquese\x20con\x20el\x20servicio\x20de\x20atención\x20al\x20cliente',
                0x1d: 'Mantenimiento\x20del\x20servidor,\x20inténtalo\x20de\x20nuevo\x20más\x20tarde.',
                0x1e: 'Solicitud\x20no\x20válida',
                0x1f: 'Versión\x20demasiado\x20baja,\x20requiere\x20actualización',
                0x20: 'error\x20de\x20parametro',
                0x21: 'El\x20servicio\x20de\x20atención\x20al\x20cliente\x20no\x20está\x20disponible\x20para\x20iniciar\x20sesión',
                0x22: 'Tipo\x20de\x20código\x20de\x20verificación\x20incorrecto',
                0x23: 'Parece\x20que\x20se\x20produce\x20la\x20excepción\x20de\x20inicio\x20de\x20sesión\x2021.\x20Vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x24: 'El\x20número\x20de\x20teléfono\x20actual\x20ya\x20está\x20registrado,\x20no\x20se\x20puede\x20registrar\x20nuevamente',
                0x25: 'Excepción\x20del\x20sistema\x2023,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde',
                0x26: 'Excepción\x20de\x20información\x20de\x20verificación;\x20inténtelo\x20de\x20nuevo\x20más\x20tarde',
                0x27: 'El\x20número\x20de\x20teléfono\x20actual\x20no\x20está\x20asociado\x20con\x20ninguna\x20cuenta.',
                0x28: 'La\x20información\x20de\x20inicio\x20de\x20sesión\x20ha\x20caducado',
                0x29: 'Primero\x20vincule\x20su\x20número\x20de\x20teléfono',
                0x2a: 'Por\x20favor\x20ingrese\x20un\x20número\x20de\x20teléfono\x20válido',
                0x2b: 'Tipo\x20de\x20cuenta\x20incorrecto',
                0x2c: 'Error\x20en\x20la\x20información\x20de\x20la\x20cuenta',
                0x2d: 'código\x20de\x20verificación\x20incorrecto',
                0x2e: 'Excepción\x20del\x20sistema\x2033.\x20Vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x2f: 'Cuenta\x20incorrecta',
                0x30: 'Primero\x20vincule\x20su\x20número\x20de\x20teléfono',
                0x31: 'Por\x20favor\x20ingrese\x20un\x20número\x20de\x20teléfono\x20válido',
                0x32: 'La\x20cuenta\x20ya\x20está\x20vinculada\x20a\x20un\x20número\x20de\x20teléfono,\x20no\x20se\x20puede\x20vincular\x20nuevamente',
                0x33: 'El\x20número\x20de\x20teléfono\x20ya\x20está\x20vinculado',
                0x34: 'Por\x20favor,\x20introduzca\x20su\x20contraseña',
                0x35: 'No\x20se\x20puede\x20vincular\x20el\x20número\x20de\x20teléfono\x20de\x20la\x20cuenta\x20actual,\x20comuníquese\x20con\x20el\x20servicio\x20de\x20atención\x20al\x20cliente.',
                0x36: 'Excepción\x20de\x20inicio\x20de\x20sesión,\x20inténtelo\x20de\x20nuevo.',
                0x37: 'La\x20cuenta\x20corriente\x20ya\x20existe.',
                0x38: 'Código\x20de\x20verificación\x20incorrecto.',
                0x39: 'Excepción\x20del\x20sistema\x2044.\x20Vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x3a: 'Excepción\x20del\x20sistema\x2045.\x20Vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x3b: 'Excepción\x20del\x20sistema\x2046,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde.',
                0x3c: 'Se\x20agotó\x20el\x20tiempo\x20de\x20espera\x20de\x20la\x20solicitud;\x20vuelva\x20a\x20intentarlo\x20más\x20tarde.',
                0x3d: 'La\x20identificación\x20de\x20usuario\x20no\x20existe.',
                0x3e: 'La\x20información\x20de\x20verificación\x20del\x20usuario\x20es\x20incorrecta.',
                0x3f: 'Complete\x20la\x20información\x20de\x20verificación\x20del\x20usuario.',
                0x40: 'La\x20información\x20de\x20verificación\x20del\x20usuario\x20es\x20incorrecta.',
                0x41: 'Excepción\x20de\x20operación,\x20comuníquese\x20con\x20el\x20servicio\x20al\x20cliente.',
                0x42: 'Invalid\x20data,\x20please\x20try\x20again\x20later',
                0x43: 'Felicitaciones\x20a\x20<color=#FF4600>@player</color>\x20en\x20<color=Yellow>@game</color>\x20por\x20ganar\x20<color=#4BFF00>x@multiple</color>\x20premios\x20y\x20obtener\x20<color=Yellow>@coins</color>\x20Monedas.',
                0x44: 'Felicitaciones\x20a\x20<color=#FF4600>%s</color>\x20por\x20ganar\x20el\x20premio\x20mayor\x20en\x20<color=#4BFF00>%s</color>\x20y\x20ganar\x20<color=yellow>%s</color>\x20monedas.',
                0x45: 'Habitación',
                0x46: 'Jugadoras',
                0x47: 'Antes',
                0x48: 'Saldo\x20mínimo',
                0x49: 'Manifestación',
                0x4a: 'Primaria',
                0x4b: 'Maestra',
                0x4c: 'Rey',
                0x4d: 'Épica/epico',
                0x4e: 'Leyenda',
                0x4f: 'VIP',
                0x50: 'Habitación',
                0x51: 'Jugar',
                0x52: 'Cualquier',
                0x53: 'Abandonar',
                0x54: 'desconectar',
                0x55: 'Consejos',
                0x56: 'La\x20conexión\x20al\x20servidor\x20falló,\x20inténtelo\x20nuevamente\x20más\x20tarde.',
                0x57: 'El\x20sistema\x20te\x20pide\x20que\x20salgas,\x20ingresa\x20al\x20juego\x20más\x20tarde.',
                0x58: 'Esta\x20cuenta\x20se\x20inicia\x20desde\x20otro\x20dispositivo,\x20preste\x20atención\x20a\x20la\x20seguridad\x20de\x20la\x20cuenta.',
                0x59: 'Tu\x20juego\x20en\x20%s\x20aún\x20no\x20ha\x20terminado,\x20regresa\x20y\x20juega',
                0x5a: 'El\x20registro\x20de\x20cuenta\x20ya\x20existe.',
                0x5b: 'El\x20dispositivo\x20de\x20la\x20cuenta\x20de\x20invitado\x20no\x20puede\x20estar\x20vacío.',
                0x5c: 'La\x20cuenta\x20no\x20existe.',
                0x5d: 'Contraseña\x20incorrecta.',
                0x5e: 'Esta\x20Cuenta\x20Ha\x20Sido\x20Suspendida.',
                0x5f: 'Excepción\x20de\x20inicio\x20de\x20sesión\x20de\x20invitado;\x20vuelva\x20a\x20intentarlo.',
                0x60: 'Excepción\x20de\x20inicio\x20de\x20sesión\x207,\x20vuelva\x20a\x20intentarlo.',
                0x61: 'Sistema\x20en\x20mantenimiento,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde.',
                0x62: 'Contraseña',
                0x63: 'Descargar',
                0x64: 'Para\x20una\x20mejor\x20experiencia,\x20descargue\x20el\x20juego.',
                0x65: 'Para\x20disfrutar\x20de\x20una\x20mejor\x20experiencia,\x20descargue\x20el\x20juego.\x20¡Instálelo\x20ahora\x20y\x20obtenga\x20las\x20recompensas!',
                0x66: 'Acepte\x20los\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Términos\x20de\x20servicio</on></u></color>\x20y\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacidad\x20y\x20política</on></u></color>',
                0x67: 'Vincula\x20el\x20número\x20de\x20teléfono\x20móvil\x0a\x20para\x20obtener\x20recompensas',
                0x68: 'Unir',
                0x69: 'Lo\x20sentimos,\x20no\x20se\x20cumplen\x20los\x20requisitos\x20VIP,\x20cuantas\x20más\x20monedas,\x20mayor\x20VIP,\x20ve\x20a\x20la\x20tienda\x20a\x20recargar.',
                0x6a: 'Lo\x20sentimos,\x20no\x20cumples\x20con\x20los\x20requisitos\x20de\x20entrada,\x20¿te\x20gustaría\x20ir\x20a\x20la\x20tienda\x20a\x20comprar\x20algunos?',
                0x6b: 'Toca\x20<img\x20src=\x27share\x27\x20/>\x20y\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Agregar\x20a\x20la\x20pantalla\x20de\x20inicio</color></b>\x20para\x20jugar\x20cuando\x20quieras.',
                0x6c: 'Toca\x20<img\x20src=\x27share\x27\x20/>\x20y\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Agregar\x20a\x20la\x20pantalla\x20de\x20inicio</color></b>\x20para\x20jugar\x20cuando\x20quieras.',
                0x6d: 'Advertencia',
                0x6e: 'Para\x20la\x20seguridad\x20de\x20los\x20datos\x20de\x20tu\x20juego,\x20te\x20recomendamos\x20encarecidamente\x20que\x20te\x20registres\x20como\x20una\x20cuenta\x20oficial.',
                0x6f: 'Mensaje\x20enviado',
                0x70: 'Reclamación\x20del\x20premio\x20completa',
                0x71: 'Servicio',
                0x72: 'Configuración',
                0x73: 'Iniciar\x20sesión',
                0x74: 'Ruleta',
                0x75: 'Regalo',
                0x76: 'Gracia',
                0x77: 'Invitar',
                0x78: 'Fondos',
                0x79: 'Todo',
                0x7a: 'Caliente',
                0x7b: 'Slots',
                0x7c: 'Póker',
                0x7d: 'Mal\x20estado\x20de\x20la\x20red',
                0x7e: 'Gratis',
                0x7f: 'Comprar',
                0x80: 'Se\x20encontró\x20una\x20nueva\x20versión.\x20¿Quieres\x20actualizarla?',
                0x81: 'Se\x20ha\x20cerrado\x20la\x20campaña\x20y\x20se\x20han\x20devuelto\x20las\x20monedas\x20de\x20oro\x20consumidas\x20en\x20la\x20compra\x20del\x20Código\x20del\x20sorteo',
                0x82: 'BUY\x20COIN',
                0x83: 'No\x20ha\x20iniciado\x20sesión,\x20cierre\x20la\x20sesión\x20e\x20inténtelo\x20de\x20nuevo',
                0x84: 'Si\x20se\x20produce\x20un\x20error\x20en\x20la\x20autenticación,\x20salga\x20e\x20inténtelo\x20de\x20nuevo',
                0x85: 'Sala\x20de\x20juegos\x20no\x20válida,\x20pruebe\x20con\x20otra',
                0x86: 'La\x20habitación\x20está\x20cerrada,\x20pruebe\x20con\x20otra',
                0x87: 'Tarea',
                0x88: 'Es\x20hora\x20de\x20jugar\x20NUEVAS\x20tragamonedas',
                0x89: '¡Obtenga\x20monedas\x20GRATIS\x20iniciando\x20sesión\x20todos\x20los\x20días!',
                0x8a: '¡Ruleta\x20de\x20la\x20suerte!\x20¡Tasa\x20de\x20ganancia\x20del\x20100\x20%\x20garantizada!\x20¡Ven\x20y\x20consigue\x20tu\x20premio!',
                0x8b: '¡Nuevo\x20desafío\x20exclusivo\x20para\x20monedas\x20enormes!',
                0x8c: '¡Tragamonedas\x20y\x20funciones\x20increíbles!',
                0x8d: 'Puedes\x20recibir\x20un\x20bono\x20especial',
                0x8e: '¡Mayor\x20POTENCIA\x20VIP,\x20más\x20beneficios!',
                0x8f: 'Gira\x20NUEVAS\x20RANURAS,\x20¡Buena\x20suerte\x20contigo!',
                0x90: '¡DÍA\x20DE\x20LA\x20RUEDA\x20DE\x20LA\x20SUERTE,\x20MULTIPLICADOR\x20DE\x20LA\x20RUEDA\x20DE\x20ORO!',
                0x91: 'BONO\x20SORPRESA,\x20Ven\x20a\x20recoger\x20tus\x20monedas',
                0x92: '¡Giros\x20más\x20rápidos\x20y\x20PREMIOS\x20MÁS\x20GRANDES!',
                0x93: 'MEGA\x20RECOMPENSA\x20está\x20lista,\x20¡GIRA\x20AHORA!',
                0x94: '¡Toca\x20y\x20recoge\x20tus\x20fichas\x20gratis\x20ahora!',
                0x95: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20DE\x20OPORTUNIDAD!!!Bonificación\x20ilimitada\x20en\x20todos\x20los\x20paquetes',
                0x96: 'Juega\x20ahora\x20para\x20disfrutar\x20de\x20regalos\x20y\x20misiones\x20especiales.',
                0x97: '¡Invita\x20amigos,\x20sé\x20su\x20JEFE!\x20Grandes\x20monedas\x20gratis',
                0x98: 'Comparte\x20con\x20tus\x20amigos\x20y\x20obtén\x20regalos\x20exclusivos.',
                0x99: 'Grandes\x20recompensas\x20por\x20compartir,\x20más\x20invitar\x20a\x20más\x20premios',
                0x9a: 'Juega\x20con\x20amigos,\x20¡regalos\x20gratis\x20todos\x20los\x20días!',
                0x9b: 'BONIFICACIÓN\x20DE\x20SUERTE,\x20¡Una\x20oportunidad\x20de\x20ser\x20el\x20más\x20rico!',
                0x9c: 'Disfruta\x20de\x20tu\x201ª\x20OFERTA\x20ESPECIAL\x20y\x20obtén\x20beneficios\x20de\x20compra',
                0x9d: '¡La\x20primera\x20compra\x20puede\x20obtener\x20un\x20PREMIO\x20adicional!',
                0x9e: '¡Hola,\x20GANAR!\x20¡Inicie\x20sesión\x20todos\x20los\x20días,\x20compre\x20cualquier\x20producto\x20y\x20descuentos\x20por\x20tiempo\x20limitado!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/gameRichText.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts'], function(b) {
    var d, f, g, j, k, m, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['applyDecoratedDescriptor'],
            f = A['inheritsLoose'],
            g = A['initializerDefineProperty'],
            j = A['assertThisInitialized'],
            k = A['createClass'];
        }
        , function(A) {
            m = A['cclegacy'],
            q = A['_decorator'],
            v = A['RichText'],
            w = A['Node'],
            x = A['Component'],
            y = A['Color'];
        }
        , function(A) {
            z = A['LanguageManager'];
        }
        ],
        'execute': function() {
            var A, B, E, F, G, J, K, M, N, P, Q, S, U, V, W, X;
            m['_RF']['push']({}, 'cd425D57ORFdYrtrqXS1v8Y', 'gameRichText', void 0x0);
            var Y = q['ccclass']
              , Z = q['property']
              , a0 = q['requireComponent']
              , a1 = q['executeInEditMode'];
            b('gameRichText', (A = Y('gameRichText'),
            B = a0(v),
            E = Z({
                'visible': !0x1
            }),
            F = Z({
                'displayName': 'Key',
                'visible': !0x0,
                'tooltip': '多语言key'
            }),
            G = Z({
                'visible': !0x1
            }),
            J = Z({
                'displayName': 'gameID',
                'visible': !0x0,
                'tooltip': '子游戏id'
            }),
            K = Z({
                'visible': !0x1
            }),
            M = Z({
                'displayName': '颜色',
                'visible': !0x0,
                'tooltip': '颜色'
            }),
            N = Z({
                'visible': !0x1
            }),
            P = Z({
                'displayName': '下划线',
                'visible': !0x0,
                'tooltip': '是否有下划线'
            }),
            A(Q = a1(Q = B((U = d((S = function(a2) {
                function a3() {
                    for (var a5, a6 = arguments['length'], a7 = new Array(a6), a8 = 0x0; a8 < a6; a8++)
                        a7[a8] = arguments[a8];
                    return a5 = a2['call']['apply'](a2, [this]['concat'](a7)) || this,
                    g(a5, 'key', U, j(a5)),
                    g(a5, 'gameID', V, j(a5)),
                    g(a5, 'defalutColor', W, j(a5)),
                    g(a5, 'isLine', X, j(a5)),
                    a5['clickHandler'] = null,
                    a5['richText'] = null,
                    a5;
                }
                f(a3, a2);
                var a4 = a3['prototype'];
                return a4['onLoad'] = function() {
                    this['richText'] = this['getComponent'](v),
                    this['udpateRichText'](),
                    this['node']['on'](w['EventType']['TOUCH_END'], this['onClick'], this);
                }
                ,
                a4['bindClickHandler'] = function(a5, a6) {
                    this['clickHandler'] = function() {
                        null == a5 || a5['call'](a6);
                    }
                    ;
                }
                ,
                a4['onClick'] = function() {
                    var a5;
                    null == (a5 = this['clickHandler']) || a5['call'](this);
                }
                ,
                a4['udpateRichText'] = function() {
                    var a5 = z['getLangByTag'](this['key'], this['gameID']['toString']());
                    this['setRichText'](a5);
                }
                ,
                a4['setRichText'] = function(a5, a6, a7) {
                    void 0x0 === a6 && (a6 = this['defalutColor']),
                    void 0x0 === a7 && (a7 = this['isLine']);
                    var a8 = '<color=#' + a6['toHEX']('#rrggbb') + '>' + a5 + '</color>';
                    a7 && (a8 = '<u>' + a8 + '</u>'),
                    this['richText']['string'] = a8;
                }
                ,
                k(a3, [{
                    'key': '_key',
                    'get': function() {
                        return this['key'];
                    },
                    'set': function(a5) {
                        this['key'] = a5,
                        this['udpateRichText']();
                    }
                }, {
                    'key': '_gameID',
                    'get': function() {
                        return this['gameID'];
                    },
                    'set': function(a5) {
                        this['gameID'] = a5;
                    }
                }, {
                    'key': '_color',
                    'get': function() {
                        return this['defalutColor'];
                    },
                    'set': function(a5) {
                        this['defalutColor'] = a5,
                        this['udpateRichText']();
                    }
                }, {
                    'key': '_isLine',
                    'get': function() {
                        return this['isLine'];
                    },
                    'set': function(a5) {
                        this['isLine'] = a5,
                        this['udpateRichText']();
                    }
                }]),
                a3;
            }(x))['prototype'], 'key', [E], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return '';
                }
            }),
            d(S['prototype'], '_key', [F], Object['getOwnPropertyDescriptor'](S['prototype'], '_key'), S['prototype']),
            V = d(S['prototype'], 'gameID', [G], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x0;
                }
            }),
            d(S['prototype'], '_gameID', [J], Object['getOwnPropertyDescriptor'](S['prototype'], '_gameID'), S['prototype']),
            W = d(S['prototype'], 'defalutColor', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return new y(0xff,0xff,0xff,0xff);
                }
            }),
            d(S['prototype'], '_color', [M], Object['getOwnPropertyDescriptor'](S['prototype'], '_color'), S['prototype']),
            X = d(S['prototype'], 'isLine', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return !0x0;
                }
            }),
            d(S['prototype'], '_isLine', [P], Object['getOwnPropertyDescriptor'](S['prototype'], '_isLine'), S['prototype']),
            Q = S)) || Q) || Q) || Q)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/httpAccount.ts', ['cc'], function(a) {
    var b, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            d = f['_decorator'];
        }
        ],
        'execute': function() {
            a('HttpAccount', void 0x0),
            b['_RF']['push']({}, 'd3931/7PLdIHorzdPhge9qJ', 'httpAccount', void 0x0);
            var f, g;
            d['ccclass'],
            d['property'],
            ((g = f || (f = a('HttpAccount', {})))['req'] = {
                'cmd': 'account',
                'requests': {
                    'resetPassword': 0x1,
                    'resetSafePsw': 0x2,
                    'bindPhone': 0x3,
                    'safeVerify': 0x4,
                    'accExistCheck': 0x5,
                    'setPsw': 0x6,
                    'reqBindReferrer': 0x7,
                    'bindMail': 0x8
                }
            },
            g['errorCode'] = {
                'accErrorType': 0x82,
                'accDataError': 0x83,
                'accVerifyError': 0x84,
                'accSysError': 0x85,
                'accNotExist': 0x86,
                'accUnbindPhone': 0x87,
                'accErrorPhone': 0x88,
                'accAlreadyBind': 0x89,
                'accPhoneRepeated': 0x8a,
                'accBindPswNull': 0x8b,
                'accCanNotBind': 0x8c,
                'accAhthFailed': 0x8d,
                'setPswCaptcharError': 0x8f,
                'alreadyBindRef': 0x90,
                'refNotExist': 0x91,
                'invalidRef': 0x92,
                'timeout2AddRef': 0x93,
                'userNotExist': 0x94,
                'userVerifyFailed': 0x95,
                'addInfoNull': 0x96,
                'recordErrorArg': 0x97,
                'notAllowAddRef': 0x98
            },
            b['_RF']['pop']());
        }
    };
}),
System['register']('chunks:///_virtual/httpDefine.ts', ['cc', './httpInfo.ts', './httpLogin.ts', './httpRegist.ts', './httpAccount.ts', './Language.ts', './platformData.ts', './gMessageBox.ts', './webGame.ts'], function(b) {
    var d, f, h, j, k, l, m, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['cclegacy'],
            f = y['_decorator'];
        }
        , function(y) {
            h = y['HttpInfo'],
            j = y['HttpCaptchar'];
        }
        , function(y) {
            k = y['HttpLogin'];
        }
        , function(y) {
            l = y['HttpRegist'];
        }
        , function(y) {
            m = y['HttpAccount'];
        }
        , function(y) {
            q = y['LanguageManager'];
        }
        , function(y) {
            v = y['PModuleID'];
        }
        , function(y) {
            w = y['MsgBoxManager'];
        }
        , function(y) {
            x = y['webGame'];
        }
        ],
        'execute': function() {
            b('ShowHttpError', function(y, z, A, B) {
                void 0x0 === z && (z = !0x1),
                void 0x0 === A && (A = null),
                void 0x0 === B && (B = null);
                var C = q['getLangByTag']('http_error_' + y, v['lobby']);
                if (z) {
                    var D = q['getLangByTag']('tips', v['lobby']);
                    w['Show'](D, C, A, B);
                } else
                    x['toast'](C, !0x1);
            }),
            d['_RF']['push']({}, '87bfaiNwoxAU4XtJBB1Cgsw', 'httpDefine', void 0x0),
            (f['ccclass'],
            f['property']),
            b('HttpErrorCode', {
                'success': 0x0,
                'info': h['errorCode'],
                'login': k['errorCode'],
                'regist': l['errorCode'],
                'captchar': j['errorCode'],
                'account': m['errorCode']
            }),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/httpInfo.ts', ['cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'],
            c = d['_decorator'];
        }
        ],
        'execute': function() {
            a({
                'HttpCaptchar': void 0x0,
                'HttpInfo': void 0x0
            }),
            b['_RF']['push']({}, 'f43c2C7yGhEkJMA3kNIWBGC', 'httpInfo', void 0x0);
            var d, f, g, h;
            c['ccclass'],
            c['property'],
            ((f = d || (d = a('HttpInfo', {})))['req'] = {
                'cmd': 'info',
                'requests': {
                    'baseinfo': 0x1,
                    'loginService': 0x2,
                    'notify': 0x3,
                    'connect': 0x4,
                    'downloadCfg': 0x5
                }
            },
            f['errorCode'] = {
                'invalidRequest': 0xb4,
                'versionLow': 0xb5,
                'paramError': 0xb6,
                'loginServiceDisable': 0xb7
            },
            (h = g || (g = a('HttpCaptchar', {})))['req'] = {
                'cmd': 'verifyCode',
                'requests': {
                    'regitst': 0x1,
                    'bindPhone': 0x2,
                    'resetPassword': 0x3,
                    'resetSafeBoxPassword': 0x4,
                    'securityVerify': 0x5,
                    'bindEditCode': 0x7
                }
            },
            h['errorCode'] = {
                'typeError': 0x78,
                'ipDisable': 0x79,
                'phoneRepeat': 0x7a,
                'systemError': 0x7b,
                'paramError': 0x7c,
                'phoneNotAccount': 0x7d,
                'loginInfoExpire': 0x7e,
                'notBindPhone': 0x7f,
                'errorPhone': 0x80
            },
            b['_RF']['pop']());
        }
    };
}),
System['register']('chunks:///_virtual/httpLogin.ts', ['cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'],
            c = d['_decorator'];
        }
        ],
        'execute': function() {
            a('HttpLogin', void 0x0),
            b['_RF']['push']({}, '48ba3qI5FZGTpAXb0uZUx8w', 'httpLogin', void 0x0);
            var d, f;
            c['ccclass'],
            c['property'],
            ((f = d || (d = a('HttpLogin', {})))['req'] = {
                'cmd': 'login',
                'requests': {
                    'Device': 0x1,
                    'Account': 0x2,
                    'Facebook': 0x3
                }
            },
            f['errorCode'] = {
                'typeError': 0x6e,
                'paramError': 0x6f,
                'deviceDisable': 0x70,
                'systemError': 0x71,
                'accountDisable': 0x72,
                'ipDisable': 0x73,
                'accountOrPasswordError': 0x74,
                'securityVerify': 0x75,
                'deviceException': 0x76,
                'serviceMaintain': 0xbc
            },
            b['_RF']['pop']());
        }
    };
}),
System['register']('chunks:///_virtual/httpRegist.ts', ['cc'], function(a) {
    var b, c;
    return {
        'setters': [function(d) {
            b = d['cclegacy'],
            c = d['_decorator'];
        }
        ],
        'execute': function() {
            a('HttpRegist', void 0x0),
            b['_RF']['push']({}, 'fa2ca60OidLJI0pcTCWoyJV', 'httpRegist', void 0x0);
            var d, f;
            c['ccclass'],
            c['property'],
            ((f = d || (d = a('HttpRegist', {})))['req'] = {
                'cmd': 'reg',
                'requests': {
                    'Device': 0x0,
                    'Normal': 0x1,
                    'Phone': 0x2
                }
            },
            f['errorCode'] = {
                'deviceCodeEmpty': 0x64,
                'typeError': 0x65,
                'infoError': 0x66,
                'systemError': 0x67,
                'idRepeat': 0x68,
                'accountRepeat': 0x69,
                'captcharError': 0x6a,
                'phoneRepeat': 0x6b,
                'ipDisable': 0x6d,
                'ipRegistLimit': 0x3f2,
                'deviceRegistLimit': 0x3f3
            },
            b['_RF']['pop']());
        }
    };
}),
System['register']('chunks:///_virtual/id2.ts', ['cc'], function() {
    var b;
    return {
        'setters': [function(c) {
            b = c['cclegacy'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'ab1cfkjSUREvLsWzg/o/FgW', 'id', void 0x0);
            var c = window;
            c['languages'] || (c['languages'] = {}),
            c['languages']['id'] || (c['languages']['id'] = {}),
            c['languages']['id'][0x66] = {
                0x1: 'VIP',
                0x2: 'Bank',
                0x3: 'Pesan',
                0x4: 'Aktivitas',
                0x5: 'Pangkat',
                0x6: 'Promosi',
                0x7: 'Menarik',
                0x8: 'Kode\x20perangkat\x20kosong',
                0x9: 'Jenis\x20pendaftaran\x20salah',
                0xa: 'Informasi\x20pendaftaran\x20salah',
                0xb: 'Pengecualian\x20sistem\x2003,\x20silakan\x20coba\x20lagi\x20nanti',
                0xc: 'ID\x20diduplikasi,\x20silakan\x20hubungi\x20layanan\x20pelanggan',
                0xd: 'Akun\x20telah\x20terdaftar',
                0xe: 'Captcha\x20salah',
                0xf: 'Nomor\x20telepon\x20ini\x20telah\x20digunakan',
                0x10: 'Harap\x20ikat\x20email\x20Anda\x20terlebih\x20dahulu',
                0x11: 'Untuk\x20alamat\x20IP\x20yang\x20tidak\x20normal,\x20silakan\x20hubungi\x20layanan\x20pelanggan',
                0x12: 'Pendaftaran\x20gagal,\x20silakan\x20coba\x20lagi\x20nanti\x20(kode:1010)',
                0x13: 'Pendaftaran\x20gagal,\x20silakan\x20coba\x20lagi\x20nanti\x20(kode:1011)',
                0x14: 'Jenis\x20login\x20tidak\x20valid',
                0x15: 'Informasi\x20login\x20salah',
                0x16: 'Perangkat\x20tidak\x20normal,\x20silakan\x20hubungi\x20layanan\x20pelanggan',
                0x17: 'Pengecualian\x20sistem\x2013,\x20silakan\x20coba\x20lagi\x20nanti',
                0x18: 'Akun\x20tidak\x20normal,\x20silakan\x20hubungi\x20layanan\x20pelanggan',
                0x19: 'Sepertinya\x20ada\x20pengecualian\x20login,\x20silakan\x20coba\x20lagi\x20nanti',
                0x1a: 'Akun\x20atau\x20kata\x20sandi\x20salah,\x20silakan\x20periksa\x20input',
                0x1b: 'Akun\x20memiliki\x20risiko\x20keamanan\x20dan\x20akan\x20memasuki\x20verifikasi\x20keamanan',
                0x1c: 'Perangkat\x20ilegal\x20untuk\x20masuk,\x20silakan\x20hubungi\x20layanan\x20pelanggan',
                0x1d: 'Pemeliharaan\x20server,\x20silakan\x20coba\x20lagi\x20nanti',
                0x1e: 'Permintaan\x20tidak\x20valid',
                0x1f: 'Versi\x20terlalu\x20rendah,\x20membutuhkan\x20peningkatan',
                0x20: 'Kesalahan\x20parameter',
                0x21: 'Layanan\x20pelanggan\x20tidak\x20tersedia\x20untuk\x20login',
                0x22: 'Jenis\x20kode\x20verifikasi\x20salah',
                0x23: 'Pengecualian\x20login\x2021\x20tampaknya\x20terjadi,\x20silakan\x20coba\x20lagi\x20nanti',
                0x24: 'Nomor\x20handphone\x20saat\x20ini\x20sudah\x20terdaftar,\x20tidak\x20bisa\x20mendaftar\x20lagi',
                0x25: 'Pengecualian\x20sistem\x2023,\x20silakan\x20coba\x20lagi\x20nanti',
                0x26: 'Pengecualian\x20informasi\x20verifikasi,\x20silakan\x20coba\x20lagi\x20nanti',
                0x27: 'Nomor\x20telepon\x20saat\x20ini\x20tidak\x20terkait\x20dengan\x20akun\x20apa\x20pun',
                0x28: 'Informasi\x20login\x20telah\x20kedaluwarsa',
                0x29: 'Harap\x20ikat\x20nomor\x20telepon\x20Anda\x20terlebih\x20dahulu',
                0x2a: 'Silakan\x20masukkan\x20nomor\x20telepon\x20yang\x20valid',
                0x2b: 'Jenis\x20akun\x20salah',
                0x2c: 'Kesalahan\x20informasi\x20akun',
                0x2d: 'Kode\x20verifikasi\x20salah',
                0x2e: 'Pengecualian\x20sistem\x2033,\x20coba\x20lagi\x20nanti',
                0x2f: 'Akun\x20salah',
                0x30: 'Harap\x20ikat\x20nomor\x20telepon\x20Anda\x20terlebih\x20dahulu',
                0x31: 'Silakan\x20masukkan\x20nomor\x20telepon\x20yang\x20valid',
                0x32: 'Akun\x20sudah\x20terikat\x20ke\x20nomor\x20telepon,\x20tidak\x20dapat\x20mengikat\x20lagi',
                0x33: 'Nomor\x20telepon\x20sudah\x20terikat',
                0x34: 'Silakan\x20masukkan\x20kata\x20sandi\x20Anda',
                0x35: 'Tidak\x20dapat\x20mengikat\x20nomor\x20telepon\x20untuk\x20rekening\x20giro,\x20silakan\x20hubungi\x20layanan\x20pelanggan.',
                0x36: 'Pengecualian\x20login,\x20silakan\x20coba\x20lagi.',
                0x37: 'Rekening\x20giro\x20sudah\x20ada.',
                0x38: 'Kode\x20verifikasi\x20salah.',
                0x39: 'Pengecualian\x20sistem\x2044,\x20silakan\x20coba\x20lagi\x20nanti.',
                0x3a: 'Pengecualian\x20sistem\x2045,\x20coba\x20lagi\x20nanti.',
                0x3b: 'Pengecualian\x20sistem\x2046,\x20coba\x20lagi\x20nanti.',
                0x3c: 'Waktu\x20permintaan\x20habis,\x20coba\x20lagi\x20nanti.',
                0x3d: 'User\x20ID\x20tidak\x20ada.',
                0x3e: 'Informasi\x20verifikasi\x20pengguna\x20salah.',
                0x3f: 'Silakan\x20isi\x20informasi\x20verifikasi\x20pengguna.',
                0x40: 'Informasi\x20verifikasi\x20pengguna\x20salah.',
                0x41: 'Pengecualian\x20operasi,\x20silakan\x20hubungi\x20layanan\x20pelanggan.',
                0x42: 'Data\x20tidak\x20valid,\x20silakan\x20coba\x20lagi\x20nanti',
                0x43: 'Selamat\x20kepada\x20<color=#FF4600>@player</color>\x20dalam\x20<color=yellow>@game</color>\x20karena\x20memenangkan\x20hadiah\x20<color=#4BFF00>x@multiple</color>\x20dan\x20mendapatkan\x20<color=yellow>@coins</color>\x20Koin.',
                0x44: 'Selamat\x20kepada\x20<color=#FF4600>%s</color>\x20karena\x20memenangkan\x20Jackpot\x20dalam\x20<color=#4BFF00>%s</color>\x20dan\x20memenangkan\x20<color=yellow>%s</color>\x20Koin.',
                0x45: 'Kamar',
                0x46: 'Pemain',
                0x47: 'Taruhan',
                0x48: 'Saldo\x20Min',
                0x49: 'Demo',
                0x4a: 'Utama',
                0x4b: 'Tuan',
                0x4c: 'Raja',
                0x4d: 'Epik',
                0x4e: 'Legenda',
                0x4f: 'Vip',
                0x50: 'Kamar',
                0x51: 'Bermain',
                0x52: 'Setiap',
                0x53: 'Berhenti',
                0x54: 'Keluar',
                0x55: 'Tips',
                0x56: 'Koneksi\x20server\x20gagal,\x20silakan\x20coba\x20lagi\x20nanti',
                0x57: 'Sistem\x20meminta\x20Anda\x20untuk\x20pergi,\x20silakan\x20masuk\x20ke\x20game\x20nanti',
                0x58: 'Akun\x20ini\x20masuk\x20dari\x20perangkat\x20lain,\x20harap\x20perhatikan\x20keamanan\x20akun',
                0x59: 'Game\x20Anda\x20dalam%\x20s\x20belum\x20berakhir,\x20silakan\x20kembali\x20dan\x20mainkan',
                0x5a: 'Pendaftaran\x20akun\x20sudah\x20ada.',
                0x5b: 'Perangkat\x20akun\x20tamu\x20tidak\x20boleh\x20kosong.',
                0x5c: 'Akun\x20tidak\x20ada.',
                0x5d: 'Kata\x20sandi\x20salah.',
                0x5e: 'Akun\x20ini\x20telah\x20ditangguhkan.',
                0x5f: 'Pengecualian\x20login\x20tamu,\x20silakan\x20coba\x20lagi.',
                0x60: 'Login\x20pengecualian\x207,\x20silakan\x20coba\x20lagi.',
                0x61: 'Sistem\x20dalam\x20pemeliharaan,\x20silakan\x20coba\x20lagi\x20nanti.',
                0x62: 'KATA\x20SANDI',
                0x63: 'Mengunduh',
                0x64: 'Untuk\x20pengalaman\x20Anda\x20yang\x20lebih\x20baik,\x20silakan\x20Unduh\x20Game.',
                0x65: 'Untuk\x20pengalaman\x20Anda\x20yang\x20lebih\x20baik,\x20silakan\x20Unduh\x20Gamenya.\x20Instal\x20sekarang\x20dan\x20dapatkan\x20hadiahnya!',
                0x66: 'Terima\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Terms\x20Of\x20Service</on></u></color>\x20dan\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privasi\x20&Kebijakan</on></u></color>',
                0x67: 'Ikat\x20nomor\x20ponseln\x20untuk\x20mendapatkan\x20hadiah',
                0x68: 'Mengikat',
                0x69: 'Maaf,\x20persyaratan\x20VIP\x20tidak\x20terpenuhi,\x20semakin\x20banyak\x20koin,\x20semakin\x20tinggi\x20VIP,\x20pergi\x20ke\x20toko\x20untuk\x20mengisi\x20ulang',
                0x6a: 'Maaf,\x20Anda\x20tidak\x20memenuhi\x20persyaratan\x20masuk,\x20apakah\x20Anda\x20ingin\x20pergi\x20ke\x20toko\x20untuk\x20membelinya?',
                0x6b: 'Ketuk\x20<img\x20src=\x27share\x27\x20/>\x20dan\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home\x20Screen</color></b>\x20untuk\x20memutar\x20kapan\x20pun\x20Anda\x20mau',
                0x6c: 'Ketuk\x20<img\x20src=\x27share\x27\x20/>\x20dan\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home\x20Screen</color></b>\x20untuk\x20memutar\x20kapan\x20pun\x20Anda\x20mau',
                0x6d: 'Peringatan',
                0x6e: 'Demi\x20keamanan\x20data\x20game\x20Anda,\x20sangat\x20disarankan\x20agar\x20Anda\x20mendaftar\x20sebagai\x20akun\x20resmi',
                0x6f: 'Pesan\x20terkirim',
                0x70: 'Klaim\x20hadiah\x20selesai',
                0x71: 'Dinas',
                0x72: 'Mengatur',
                0x73: 'Check-in',
                0x74: 'Rolet',
                0x75: 'Hadiah',
                0x76: 'Gratia',
                0x77: 'Diundang',
                0x78: 'Bonus',
                0x79: 'Semua',
                0x7a: 'Populer',
                0x7b: 'Slots',
                0x7c: 'Poker',
                0x7d: 'Status\x20jaringan\x20buruk',
                0x7e: 'Gratis\x20Tunai',
                0x7f: 'Membeli',
                0x80: 'Versi\x20baru\x20ditemukan.\x20Apakah\x20Anda\x20ingin\x20menyegarkannya?',
                0x81: 'Acara\x20telah\x20ditutup\x20dan\x20jumlah\x20pembelian\x20telah\x20dikembalikan',
                0x82: 'BUY\x20COIN',
                0x83: 'Anda\x20belum\x20masuk,\x20silakan\x20keluar\x20dan\x20coba\x20lagi',
                0x84: 'Jika\x20autentikasi\x20gagal,\x20keluar\x20dan\x20coba\x20lagi',
                0x85: 'Ruang\x20permainan\x20tidak\x20valid,\x20coba\x20yang\x20lain',
                0x86: 'Kamar\x20tertutup,\x20coba\x20yang\x20lain',
                0x87: 'Tugas',
                0x88: 'Saatnya\x20memainkan\x20Slot\x20BARU',
                0x89: 'Dapatkan\x20Koin\x20GRATIS\x20dengan\x20masuk\x20setiap\x20hari!',
                0x8a: 'Roulette\x20Keberuntungan!\x20Tingkat\x20kemenangan\x20100%\x20dijamin!\x20Datang\x20dan\x20dapatkan\x20hadiah\x20Anda!',
                0x8b: 'Tantangan\x20eksklusif\x20baru\x20untuk\x20koin\x20besar!',
                0x8c: 'Slot\x20dan\x20fitur\x20luar\x20biasa!',
                0x8d: 'Anda\x20Dapat\x20Menerima\x20Bonus\x20Spesial',
                0x8e: 'KEKUATAN\x20VIP\x20Lebih\x20Tinggi,\x20Lebih\x20Banyak\x20Manfaat!',
                0x8f: 'Putar\x20SLOT\x20BARU,\x20Semoga\x20beruntung\x20menyertai\x20Anda!',
                0x90: 'HARI\x20RODA\x20KEBERUNTUNGAN,\x20PENGGANDA\x20RODA\x20EMAS!',
                0x91: 'BONUS\x20KEJUTAN,\x20Ayo\x20kumpulkan\x20koinmu',
                0x92: 'Putaran\x20lebih\x20cepat\x20&\x20HADIAH\x20LEBIH\x20BESAR!',
                0x93: 'MEGA\x20REWARD\x20sudah\x20siap,\x20PUTAR\x20SEKARANG!',
                0x94: 'Ketuk\x20dan\x20kumpulkan\x20chip\x20gratis\x20Anda\x20sekarang!',
                0x95: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Peluang\x20NAIK!!!Bonus\x20tak\x20terbatas\x20di\x20semua\x20paket',
                0x96: 'Mainkan\x20sekarang\x20untuk\x20menikmati\x20suguhan\x20dan\x20misi\x20khusus',
                0x97: 'Undang\x20teman,\x20jadilah\x20BOSS\x20mereka!\x20Koin\x20besar\x20Gratis',
                0x98: 'Bagikan\x20ke\x20teman\x20Anda,\x20dapatkan\x20hadiah\x20Eksklusif',
                0x99: 'Hadiah\x20besar\x20untuk\x20Berbagi,\x20Lebih\x20Banyak\x20Undang\x20lebih\x20banyak\x20hadiah',
                0x9a: 'Bermain\x20dengan\x20teman,\x20Hadiah\x20gratis\x20setiap\x20hari!',
                0x9b: 'BONUS\x20KEBERUNTUNGAN,\x20Kesempatan\x20menjadi\x20yang\x20terkaya!',
                0x9c: 'Nikmati\x20PENAWARAN\x20KHUSUS\x20pertama\x20Anda,\x20dan\x20dapatkan\x20keuntungan\x20pembelian',
                0x9d: 'Pembelian\x20pertama\x20bisa\x20mendapatkan\x20HADIAH\x20tambahan!',
                0x9e: 'HalloWIN!Masuk\x20setiap\x20hari,\x20beli\x20barang\x20apa\x20saja\x20dan\x20diskon\x20terbatas\x20waktu!'
            },
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/inputPhone.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './dropdown.ts', './utils.ts', './clearInput.ts'], function(b) {
    var d, f, g, j, k, m, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['applyDecoratedDescriptor'],
            f = A['inheritsLoose'],
            g = A['initializerDefineProperty'],
            j = A['assertThisInitialized'],
            k = A['createClass'];
        }
        , function(A) {
            m = A['cclegacy'],
            q = A['_decorator'],
            v = A['EditBox'],
            w = A['Component'];
        }
        , function(A) {
            x = A['dropdown'];
        }
        , function(A) {
            y = A['utils'];
        }
        , function(A) {
            z = A['clearInput'];
        }
        ],
        'execute': function() {
            var A, B, C, D, E, F, G, H, J;
            m['_RF']['push']({}, '74a59TAt4VCmZnftvAW8nKW', 'inputPhone', void 0x0);
            var K = q['ccclass']
              , M = q['property'];
            b('inputPhone', (A = K('inputPhone'),
            B = M({
                'type': x,
                'tooltip': '区号下拉框'
            }),
            C = M({
                'type': z,
                'tooltip': '手机号输入框'
            }),
            D = M({
                'type': Number,
                'tooltip': '手机号最大长度'
            }),
            A((G = d((F = function(N) {
                function O() {
                    for (var R, S = arguments['length'], T = new Array(S), U = 0x0; U < S; U++)
                        T[U] = arguments[U];
                    return R = N['call']['apply'](N, [this]['concat'](T)) || this,
                    g(R, 'dropdownArea', G, j(R)),
                    g(R, 'inputPhone', H, j(R)),
                    g(R, 'maxLength', J, j(R)),
                    R['areaList'] = [],
                    R;
                }
                f(O, N);
                var Q = O['prototype'];
                return Q['onLoad'] = function() {
                    this['inputPhone']['Input']['inputMode'] = v['InputMode']['PHONE_NUMBER'],
                    this['maxLength'] = Math['max'](0xa, this['maxLength']),
                    this['inputPhone']['Input']['maxLength'] = this['maxLength'];
                }
                ,
                Q['reset'] = function(R, S, T, U) {
                    if (void 0x0 === U && (U = 0xf),
                    null != R && R['length'] > 0x0 ? this['areaList'] = R : null != this['areaList'] && 0x0 != this['areaList']['length'] || (this['areaList'] = []),
                    !y['StringIsNullOrEmpty'](S)) {
                        for (var V = !0x1, W = Number(S), X = 0x0; X < this['areaList']['length']; X++)
                            if (Number(this['areaList'][X]) == W) {
                                V = !0x0,
                                S = this['areaList'][X];
                                break;
                            }
                        if (V) {
                            var Y = this['areaList']['indexOf'](S);
                            Y > 0x0 && (this['areaList']['splice'](Y, 0x1),
                            this['areaList']['unshift'](S));
                        } else
                            this['areaList']['unshift'](S);
                    }
                    0x0 == this['areaList']['length'] && this['areaList']['push']('00'),
                    this['dropdownArea']['clearOptions'](),
                    this['dropdownArea']['addOptions'](this['areaList']),
                    this['dropdownArea']['Value'] = 0x0,
                    U = T && T['length'] > U ? T['length'] : U,
                    this['inputPhone']['Input']['maxLength'] = U,
                    this['inputPhone']['Input']['string'] = T || '';
                }
                ,
                Q['setInputEnable'] = function(R) {
                    this['dropdownArea']['setEnable'](R),
                    this['inputPhone']['Input']['enabled'] = R;
                }
                ,
                k(O, [{
                    'key': 'areaCode',
                    'get': function() {
                        return this['dropdownArea']['optionString'];
                    }
                }, {
                    'key': 'phone',
                    'get': function() {
                        return this['inputPhone']['Input']['string'];
                    }
                }]),
                O;
            }(w))['prototype'], 'dropdownArea', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            H = d(F['prototype'], 'inputPhone', [C], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            J = d(F['prototype'], 'maxLength', [D], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0xf;
                }
            }),
            E = F)) || E)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/LabelToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(b) {
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
            m = u['Label'],
            p = u['Color'],
            q = u['Toggle'];
        }
        ],
        'execute': function() {
            var w, x, z, A, B, C, D, E, F;
            j['_RF']['push']({}, '0176eMPvxNEtKE2vazRXcTb', 'LabelToggle', void 0x0);
            var G = k['ccclass']
              , H = k['property'];
            b('LabelToggle', (w = G('LabelToggle'),
            x = H(m),
            z = H(p),
            A = H(p),
            w((D = d((C = function(I) {
                function J() {
                    for (var M, N = arguments['length'], O = new Array(N), P = 0x0; P < N; P++)
                        O[P] = arguments[P];
                    return M = I['call']['apply'](I, [this]['concat'](O)) || this,
                    g(M, 'lb_tag', D, h(M)),
                    g(M, 'color_normal', E, h(M)),
                    g(M, 'color_selected', F, h(M)),
                    M;
                }
                f(J, I);
                var K = J['prototype'];
                return K['setLabel'] = function(M) {
                    this['lb_tag']['string'] = M;
                }
                ,
                K['playEffect'] = function() {
                    I['prototype']['playEffect']['call'](this),
                    this['onCheckChange'](this['isChecked']);
                }
                ,
                K['onCheckChange'] = function(M) {
                    var N = M ? this['color_selected'] : this['color_normal'];
                    this['lb_tag'] && (this['lb_tag']['color'] = N);
                }
                ,
                K['show'] = function(M) {
                    this['node']['active'] = M;
                }
                ,
                K['clear'] = function() {
                    this['node']['off'](q['EventType']['TOGGLE']);
                }
                ,
                J;
            }(q))['prototype'], 'lb_tag', [x], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            E = d(C['prototype'], 'color_normal', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            F = d(C['prototype'], 'color_selected', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            B = C)) || B)),
            j['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyBottom.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyConfig.ts', './utils.ts', './baseView.ts', './platformData.ts', './lobbyState.ts', './webGame.ts', './Language.ts', './loginConfig.ts', './Oops.ts', './CustomEventDefine.ts', './redPoint.ts'], function(j) {
    var k, q, v, w, x, z, A, D, E, F, G, H, J, K, L, M, N, O, P, Q, R;
    return {
        'setters': [function(S) {
            k = S['applyDecoratedDescriptor'],
            q = S['inheritsLoose'],
            v = S['initializerDefineProperty'],
            w = S['assertThisInitialized'];
        }
        , function(S) {
            x = S['cclegacy'],
            z = S['_decorator'],
            A = S['Button'],
            D = S['Animation'],
            E = S['Node'];
        }
        , function(S) {
            F = S['Lobby'];
        }
        , function(S) {
            G = S['utils'];
        }
        , function(S) {
            H = S['baseView'];
        }
        , function(S) {
            J = S['PModuleID'];
        }
        , function(S) {
            K = S['lobbyState'];
        }
        , function(S) {
            L = S['webGame'];
        }
        , function(S) {
            M = S['LanguageManager'];
        }
        , function(S) {
            N = S['Login'];
        }
        , function(S) {
            O = S['oops'];
        }
        , function(S) {
            P = S['WebGameEvent'];
        }
        , function(S) {
            Q = S['ReadPointName'],
            R = S['RedPointKey'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw;
            x['_RF']['push']({}, '907c0HML6tGiq+kPJr5ZpqX', 'lobbyBottom', void 0x0);
            var ax = z['ccclass']
              , ay = z['property']
              , az = function(aA) {
                return aA[aA['bonus'] = 0x3] = 'bonus',
                aA[aA['bindPhone'] = 0x5] = 'bindPhone',
                aA;
            }(az || {});
            j('lobbyBottom', (a0 = ax('lobbyBottom'),
            a1 = ay({
                'type': A,
                'tooltip': '邀请有礼'
            }),
            a2 = ay({
                'type': A,
                'tooltip': '商店'
            }),
            a3 = ay({
                'type': A,
                'tooltip': '绑定手机'
            }),
            a4 = ay({
                'type': A,
                'tooltip': '救济金'
            }),
            a5 = ay({
                'type': A,
                'tooltip': '签到'
            }),
            a6 = ay({
                'type': A,
                'tooltip': '转盘'
            }),
            a7 = ay({
                'type': A,
                'tooltip': 'vip'
            }),
            a8 = ay({
                'type': A,
                'tooltip': '保险箱'
            }),
            a9 = ay({
                'type': A,
                'tooltip': '邮件'
            }),
            aa = ay({
                'type': A,
                'tooltip': '排行榜'
            }),
            ab = ay({
                'type': A,
                'tooltip': '代理'
            }),
            ac = ay({
                'type': A,
                'tooltip': 'recycle'
            }),
            ad = ay({
                'type': A,
                'tooltip': '列表弹出'
            }),
            ae = ay({
                'type': D,
                'tooltip': '列表动画'
            }),
            af = ay({
                'type': E,
                'tooltip': '动作条红点'
            }),
            a0((ai = k((ah = function(aA) {
                function aB() {
                    for (var aD, aE = arguments['length'], aF = new Array(aE), aG = 0x0; aG < aE; aG++)
                        aF[aG] = arguments[aG];
                    return aD = aA['call']['apply'](aA, [this]['concat'](aF)) || this,
                    v(aD, 'btnInvite', ai, w(aD)),
                    v(aD, 'btnStore', aj, w(aD)),
                    v(aD, 'btnBindPhone', ak, w(aD)),
                    v(aD, 'btnBenefit', al, w(aD)),
                    v(aD, 'btnSign', am, w(aD)),
                    v(aD, 'btnTruntable', an, w(aD)),
                    v(aD, 'btnVIP', ao, w(aD)),
                    v(aD, 'btnSafeBox', ap, w(aD)),
                    v(aD, 'btnMail', aq, w(aD)),
                    v(aD, 'btnRank', ar, w(aD)),
                    v(aD, 'btnPromote', as, w(aD)),
                    v(aD, 'btnRecycle', at, w(aD)),
                    v(aD, 'btnPop', au, w(aD)),
                    v(aD, 'aniList', av, w(aD)),
                    v(aD, 'bottomRedpoint', aw, w(aD)),
                    aD['dynamicFlag'] = 0x1,
                    aD['bPopList'] = !0x1,
                    aD['lastClickTime'] = 0x0,
                    aD;
                }
                q(aB, aA);
                var aC = aB['prototype'];
                return aC['onInit'] = function() {
                    G['ButtonBindClick'](this['btnRecycle'], this['onClickRecycle'], this),
                    G['ButtonBindClick'](this['btnVIP'], this['onClickVIP'], this),
                    G['ButtonBindClick'](this['btnSafeBox'], this['onClickSafeBox'], this),
                    G['ButtonBindClick'](this['btnMail'], this['onClickMail'], this),
                    G['ButtonBindClick'](this['btnRank'], this['onClickRank'], this),
                    G['ButtonBindClick'](this['btnPromote'], this['onClickPromote'], this),
                    G['ButtonBindClick'](this['btnSign'], this['onClickSign'], this),
                    G['ButtonBindClick'](this['btnTruntable'], this['onClickTruntable'], this),
                    G['ButtonBindClick'](this['btnBindPhone'], this['onClickBindPhone'], this),
                    G['ButtonBindClick'](this['btnBenefit'], this['onClickBenefit'], this),
                    G['ButtonBindClick'](this['btnStore'], this['onClickStore'], this),
                    G['ButtonBindClick'](this['btnInvite'], this['onClickInvite'], this),
                    G['ButtonBindClick'](this['btnPop'], this['onClickPop'], this);
                }
                ,
                aC['AddListener'] = function() {
                    aA['prototype']['AddListener']['call'](this),
                    O['message']['on'](P['update_red_point'], this['updateEntryByRedPoint'], this),
                    O['message']['on'](P['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                }
                ,
                aC['RemoveListener'] = function() {
                    aA['prototype']['RemoveListener']['call'](this),
                    O['message']['off'](P['update_red_point'], this['updateEntryByRedPoint'], this),
                    O['message']['off'](P['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                }
                ,
                aC['onClickRecycle'] = function(ignorePhone = true) {
                    var aD = K['Instance']['Account']
                      , aE = K['Instance']['Player']['phone']
                      , aF = K['Instance']['Server']['bBindEmail']
                      , aG = K['Instance']['Player']['email'];
                    if (aD['loginType'] == N['loginType']['guest'] && !ignorePhone) {
                        var aH = M['getLangByTag']('http_error_127', J['lobby']);
                        L['toast'](aH),
                        this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['profile'], 0x1, aF);
                    } else {
                        if (ignorePhone) {
                            L['toast']("☠️ Vinculação de telefone desativada ")
                        }
                        if (aF && G['StringIsNullOrEmpty'](aG)) {
                            var aI = M['getLangByTag']('http_error_108', J['lobby']);
                            L['toast'](aI),
                            this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['profile'], 0x2);
                        } else
                            this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['recycle']);
                    }
                }
                ,
                aC['onClickVIP'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['vip']);
                }
                ,
                aC['onClickSafeBox'] = function() {
                    L['toast']("[☠️] Isso não funciona mais.");
                    // this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['safe']);
                }
                ,
                aC['onClickMail'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['mail']);
                }
                ,
                aC['onClickInvite'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['agent'], 0x1);
                }
                ,
                aC['onClickRank'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['rank']);
                }
                ,
                aC['onClickPromote'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['agent']);
                }
                ,
                aC['onClickStore'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['store']);
                }
                ,
                aC['onClickSign'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['sign']);
                }
                ,
                aC['onClickTruntable'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['turntable']);
                }
                ,
                aC['onClickBindPhone'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['profile'], 0x1);
                }
                ,
                aC['onClickBenefit'] = function() {
                    this['Call'](F['modID']['root'], F['msgID']['enterLobbyMod'], J['turntable'], 0x1);
                }
                ,
                aC['updateEntryByRedPoint'] = function(aD) {
                    var aE = K['Instance']['State']['redPoints']
                      , aF = Q[R['benefits']]
                      , aG = aE['has'](aF) && aE['get'](aF) > 0x0;
                    this['btnBenefit']['node']['active'] = aG,
                    this['updateDynamicFlag'](az['bindPhone'], aG);
                }
                ,
                aC['updateDynamicFlag'] = function(aD, aE) {
                    if (aD <= 0x1)
                        L['log']['logBusiness']('invalid\x20dynamic\x20fun\x20ID\x20' + aD);
                    else {
                        var aF = Math['floor'](this['dynamicFlag'] / aD) > 0x0;
                        aE ? aF || (this['dynamicFlag'] *= aD,
                        this['bottomRedpoint']['active'] = !0x0) : aF && (this['dynamicFlag'] /= aD,
                        0x1 == this['dynamicFlag'] && (this['bottomRedpoint']['active'] = !0x1));
                    }
                }
                ,
                aC['refreshDynamicEntry'] = function() {
                    var aD = !G['StringIsNullOrEmpty'](K['Instance']['Player']['phone']);
                    this['btnBindPhone']['node']['active'] = !aD,
                    this['updateDynamicFlag'](az['bindPhone'], !aD);
                }
                ,
                aC['refresh'] = function() {
                    this['refreshDynamicEntry'](),
                    this['aniList']['play']('bottomListStart'),
                    this['bPopList'] = !0x1;
                }
                ,
                aC['onClickPop'] = function() {
                    var aD = Date['now']();
                    if (!(aD - this['lastClickTime'] < 0x1f4)) {
                        this['lastClickTime'] = aD;
                        var aE = !this['bPopList']
                          , aF = aE ? 'bottomListPop' : 'bottomListdown';
                        this['aniList']['play'](aF),
                        this['bPopList'] = aE;
                    }
                }
                ,
                aB;
            }(H))['prototype'], 'btnInvite', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aj = k(ah['prototype'], 'btnStore', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ak = k(ah['prototype'], 'btnBindPhone', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            al = k(ah['prototype'], 'btnBenefit', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            am = k(ah['prototype'], 'btnSign', [a5], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            an = k(ah['prototype'], 'btnTruntable', [a6], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ao = k(ah['prototype'], 'btnVIP', [a7], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ap = k(ah['prototype'], 'btnSafeBox', [a8], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aq = k(ah['prototype'], 'btnMail', [a9], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ar = k(ah['prototype'], 'btnRank', [aa], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            as = k(ah['prototype'], 'btnPromote', [ab], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            at = k(ah['prototype'], 'btnRecycle', [ac], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            au = k(ah['prototype'], 'btnPop', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            av = k(ah['prototype'], 'aniList', [ae], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aw = k(ah['prototype'], 'bottomRedpoint', [af], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ag = ah)) || ag)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyConfig.ts', ['cc', './platformData.ts'], function(a) {
    var b, c, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            c = f['_decorator'];
        }
        , function(f) {
            d = f['PModuleID'];
        }
        ],
        'execute': function() {
            var f, h;
            a('Lobby', void 0x0),
            b['_RF']['push']({}, 'aa325x+MWdNbYxiki5GBawe', 'lobbyConfig', void 0x0),
            (c['ccclass'],
            c['property']);
            var j, k, q = function(C) {
                return C[C['root'] = 0x0] = 'root',
                C[C['view'] = 0x1] = 'view',
                C[C['top'] = 0x2] = 'top',
                C[C['bottom'] = 0x3] = 'bottom',
                C[C['gameList'] = 0x4] = 'gameList',
                C[C['gameRooms'] = 0x5] = 'gameRooms',
                C[C['bindTip'] = 0x6] = 'bindTip',
                C[C['downloadTip'] = 0x7] = 'downloadTip',
                C;
            }(q || {}), v = function(C) {
                return C[C['enterLobbyMod'] = 0x0] = 'enterLobbyMod',
                C[C['reqGameRooms'] = 0x1] = 'reqGameRooms',
                C[C['reqEntetRoom'] = 0x2] = 'reqEntetRoom',
                C[C['reqDeleteGame'] = 0x3] = 'reqDeleteGame',
                C[C['showBindTip'] = 0x4] = 'showBindTip',
                C;
            }(v || {}), w = {
                'modID': d['lobby'],
                'modName': 'lobby',
                'modEventID': 0x64 * d['lobby'],
                'bundleName': d['lobby']['toString']()
            }, x = function(C) {
                return C[C['all'] = 0x0] = 'all',
                C[C['hot'] = 0x1] = 'hot',
                C[C['poker'] = 0x2] = 'poker',
                C[C['slots'] = 0x3] = 'slots',
                C;
            }(x || {}), y = ((f = {})[x['all']] = 0x1 << x['all'],
            f[x['hot']] = 0x1 << x['hot'],
            f[x['poker']] = 0x1 << x['poker'],
            f[x['slots']] = 0x1 << x['slots'],
            f), z = ((h = {})[0x0] = [x['all'], x['hot'], x['poker'], x['slots']],
            h[0x37] = [x['all'], x['hot'], x['poker'], x['slots']],
            h[0x3f] = [x['all'], x['hot'], x['poker'], x['slots']],
            h[0x42] = [x['all'], x['hot'], x['poker'], x['slots']],
            h[0x5b] = [x['all'], x['hot'], x['poker'], x['slots']],
            h[0x5c] = [x['all'], x['hot'], x['poker'], x['slots']],
            h), A = function(C) {
                return C[C['none'] = 0x0] = 'none',
                C[C['hot'] = 0x1] = 'hot',
                C[C['new'] = 0x2] = 'new',
                C;
            }(A || {}), B = {
                'popDownLoad': {
                    'popTime': 0x2,
                    'waitTime': 0x1,
                    'minLoginTime': 0x1
                }
            };
            (k = j || (j = a('Lobby', {})))['config'] = w,
            k['modID'] = q,
            k['msgID'] = v,
            k['gameSort'] = x,
            k['areaGameFilterCfg'] = z,
            k['gameSortBit'] = y,
            k['gameTag'] = A,
            k['other'] = B,
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyDefine.ts', ['cc'], function() {
    var a, b;
    return {
        'setters': [function(d) {
            a = d['cclegacy'],
            b = d['_decorator'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, '2f2c1T/q9JF8LUy4AXTZnLO', 'lobbyDefine', void 0x0),
            (b['ccclass'],
            b['property']),
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyGameItem.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts', './gComMod.ts', './lobbyConfig.ts', './Language.ts', './platformData.ts', './VersionManager.ts', './stringDefine.ts', './gMessageBox.ts', './appConfig.ts', './topCloseLayer.ts'], function(j) {
    var q, x, z, A, E, F, H, J, K, M, O, Q, R, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa;
    return {
        'setters': [function(ab) {
            q = ab['applyDecoratedDescriptor'],
            x = ab['inheritsLoose'],
            z = ab['initializerDefineProperty'],
            A = ab['assertThisInitialized'];
        }
        , function(ab) {
            E = ab['cclegacy'],
            F = ab['_decorator'],
            H = ab['Node'],
            J = ab['Button'],
            K = ab['Sprite'],
            M = ab['Label'],
            O = ab['ProgressBar'],
            Q = ab['Collider2D'],
            R = ab['Contact2DType'],
            T = ab['sys'],
            U = ab['SpriteFrame'],
            V = ab['Prefab'],
            W = ab['instantiate'],
            X = ab['v3'];
        }
        , function(ab) {
            Y = ab['utils'];
        }
        , function(ab) {
            Z = ab['webGame'];
        }
        , function(ab) {
            a0 = ab['oops'];
        }
        , function(ab) {
            a1 = ab['gComMod'];
        }
        , function(ab) {
            a2 = ab['Lobby'];
        }
        , function(ab) {
            a3 = ab['LanguageManager'];
        }
        , function(ab) {
            a4 = ab['PModuleID'];
        }
        , function(ab) {
            a5 = ab['VersionManager'],
            a6 = ab['SubGameState'];
        }
        , function(ab) {
            a7 = ab['stringDefine'];
        }
        , function(ab) {
            a8 = ab['MsgBoxManager'];
        }
        , function(ab) {
            a9 = ab['appConfig'];
        }
        , function(ab) {
            aa = ab['topCloseLayer'];
        }
        ],
        'execute': function() {
            var ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI;
            E['_RF']['push']({}, '2a0d4DBEEJJr4s74nsz0xRj', 'lobbyGameItem', void 0x0);
            var aJ = F['ccclass']
              , aK = F['property'];
            j('lobbyGameItem', (ab = aJ('lobbyGameItem'),
            ac = aK({
                'type': H,
                'tooltip': '内容节点(用于偏移)'
            }),
            ad = aK({
                'type': J,
                'tooltip': '点击组件'
            }),
            af = aK({
                'type': K,
                'tooltip': '图片'
            }),
            ag = aK({
                'type': H,
                'tooltip': 'spine父节点'
            }),
            ah = aK({
                'type': H,
                'tooltip': 'VIP节点'
            }),
            ai = aK({
                'type': M,
                'tooltip': 'VIP等级文本'
            }),
            aj = aK({
                'type': K,
                'tooltip': '游戏名字'
            }),
            ak = aK({
                'type': H,
                'tooltip': 'jackpot节点'
            }),
            al = aK({
                'type': M,
                'tooltip': 'jackpot文本'
            }),
            am = aK({
                'type': K,
                'tooltip': '标签图'
            }),
            an = aK({
                'type': M,
                'tooltip': '游戏下载进度文本'
            }),
            ao = aK({
                'type': O,
                'tooltip': '游戏下载进度'
            }),
            ap = aK({
                'type': K,
                'tooltip': 'progressBar'
            }),
            aq = aK({
                'type': H,
                'tooltip': '更新节点'
            }),
            ar = aK({
                'type': J,
                'tooltip': '删除游戏按钮'
            }),
            ab((au = q((at = function(aL) {
                function aM() {
                    for (var aO, aP = arguments['length'], aQ = new Array(aP), aR = 0x0; aR < aP; aR++)
                        aQ[aR] = arguments[aR];
                    return aO = aL['call']['apply'](aL, [this]['concat'](aQ)) || this,
                    z(aO, 'content', au, A(aO)),
                    z(aO, 'btnItem', av, A(aO)),
                    z(aO, 'spIcon', aw, A(aO)),
                    z(aO, 'spineNode', ax, A(aO)),
                    z(aO, 'vipNode', ay, A(aO)),
                    z(aO, 'lbVip', az, A(aO)),
                    z(aO, 'spGameName', aA, A(aO)),
                    z(aO, 'jackpotNode', aB, A(aO)),
                    z(aO, 'lbJackpot', aC, A(aO)),
                    z(aO, 'spTag', aD, A(aO)),
                    z(aO, 'lb_progress', aE, A(aO)),
                    z(aO, 'downProgress', aF, A(aO)),
                    z(aO, 'progressBar', aG, A(aO)),
                    z(aO, 'updateNode', aH, A(aO)),
                    z(aO, 'btn_del', aI, A(aO)),
                    aO['bShow'] = !0x0,
                    aO['gameInfo'] = void 0x0,
                    aO['jackpot'] = void 0x0,
                    aO['refreshViewHandler'] = void 0x0,
                    aO['gameState'] = null,
                    aO['bDownLoad'] = !0x1,
                    aO['loadGameID'] = null,
                    aO['onItemShowCall'] = null,
                    aO['curJackpot'] = 0x0,
                    aO['jpRollTwer'] = void 0x0,
                    aO;
                }
                x(aM, aL);
                var aN = aM['prototype'];
                return aN['onInit'] = function() {
                    Y['ButtonBindClick'](this['btnItem'], this['onClick'], this),
                    Y['ButtonBindClick'](this['btn_del'], this['onDelGame'], this),
                    Y['ButtonBindClickLong'](this['btnItem'], this['onLongPress'], this),
                    this['spineNode']['active'] = !0x1;
                    var aO = this['getComponent'](Q);
                    aO && (aO['on'](R['BEGIN_CONTACT'], this['onBeginContact'], this),
                    aO['on'](R['END_CONTACT'], this['onEndContact'], this));
                }
                ,
                aN['onBeginContact'] = function(aO, aP, aQ) {
                    null != this['refreshViewHandler'] ? (this['refreshViewHandler'](),
                    this['refreshViewHandler'] = null) : this['spineNode']['active'] = !0x0;
                }
                ,
                aN['onEndContact'] = function(aO, aP, aQ) {
                    this['spineNode']['active'] = !0x1;
                }
                ,
                aN['reset'] = function(aO, aP, aQ) {
                    var aR = this;
                    this['gameInfo'] = aO,
                    this['jackpot'] = aP,
                    this['onItemShowCall'] = aQ,
                    this['refreshViewHandler'] = function() {
                        var aS, aT = '', aU = a4['lobby']['toString']();
                        T['isNative'] ? aR['updateGameState']() : T['isBrowser'] && (null == aR['onItemShowCall'] || aR['onItemShowCall'](aR)),
                        aT = 'content/sprite/lan/en/Name_' + aR['gameInfo']['gameId'] + '/spriteFrame',
                        a0['res']['load'](aU, aT, U, function(aW, aX) {
                            aR['spGameName']['spriteFrame'] = aX;
                        }),
                        aR['showJackpot'](null != aR['jackpot'], null == (aS = aR['jackpot']) ? void 0x0 : aS['value']),
                        aR['spTag']['spriteFrame'] = null,
                        null != aR['gameInfo']['tag'] && aR['gameInfo']['tag'] > 0x0 && (aT = 'tag_' + aR['gameInfo']['tag'],
                        a3['getLanSprite'](aT, function(aW, aX) {
                            aR['spTag']['spriteFrame'] = null == aW ? aX : null;
                        }, aU, 'content/sprite/lan'));
                        var aV = aR['gameInfo']['viplv'] > 0x0;
                        aR['vipNode']['active'] = aV,
                        aV && (aR['lbVip']['string'] = aR['gameInfo']['viplv']['toString']());
                    }
                    ;
                }
                ,
                aN['getGameID'] = function() {
                    var aO;
                    return null == (aO = this['gameInfo']) ? void 0x0 : aO['gameId'];
                }
                ,
                aN['loadGameIcon'] = function(aO, aP) {
                    var aQ = this;
                    this['spineNode']['active'] = !0x1;
                    var aR = 'content/sprite/icon/icon_' + aP + '/spriteFrame';
                    a0['res']['load'](aO, aR, function(aS, aT) {
                        null == aS ? (aQ['spIcon']['enabled'] = !0x0,
                        aQ['spIcon']['spriteFrame'] = aT) : Z['log']['logBusiness']('lobbyGameItem\x20loadGameIcon\x20' + aP + '\x20error');
                    });
                }
                ,
                aN['loadGameSpineNode'] = function(aO, aP) {
                    var aQ = this;
                    if (aO == this['loadGameID'])
                        this['spineNode']['active'] = !0x0,
                        this['spIcon']['enabled'] = !0x1,
                        null == aP || aP();
                    else {
                        this['spineNode']['removeAllChildren']();
                        var aR = aO % 0xa == 0x0 ? 0x0 : 0xa
                          , aS = 'icons_' + (0xa * Math['floor'](aO / 0xa) + aR)
                          , aT = 'icon_' + aO;
                        a0['res']['load'](aS, aT, V, function(aU, aV) {
                            if (aU)
                                Z['log']['logBusiness']('lobbyGameItem\x20loadGameSpineNode\x20' + aO + '\x20error'),
                                null == aP || aP();
                            else {
                                aQ['loadGameID'] = aO,
                                aQ['spineNode']['active'] = !0x0,
                                aQ['spIcon']['enabled'] = !0x1;
                                var aW = W(aV);
                                aW['setPosition'](0x0, 0x0),
                                aQ['spineNode']['addChild'](aW),
                                null == aP || aP();
                            }
                        });
                    }
                }
                ,
                aN['updateGameState'] = function() {
                    this['gameState'] = a5['Instance']['getSubGameState'](this['gameInfo']['gameId']),
                    Z['log']['logBusiness']('updateGameState\x20' + this['gameInfo']['gameId'] + '\x20' + this['gameState']),
                    this['updateNode']['active'] = this['gameState'] == a6['NEED_UPDATE'] || this['gameState'] == a6['NEED_DOWNLOAD'],
                    this['loadGameSpineNode'](this['gameInfo']['gameId']),
                    this['lb_progress']['string'] = '',
                    this['downProgress']['node']['active'] = !0x1;
                }
                ,
                aN['show'] = function(aO, aP) {
                    var aQ;
                    this['node']['active'] = aO,
                    this['showJackpot'](aO, null == (aQ = this['jackpot']) ? void 0x0 : aQ['value']),
                    this['bShow'] = aO;
                }
                ,
                aN['onDelGame'] = function() {
                    var aO = this;
                    if (T['isNative']) {
                        var aP = a7['tips'];
                        aP = a3['getLangByID'](aP);
                        var aQ = a3['getLangByID'](a7['tip_del_game'])
                          , aR = {
                            'txt': a3['getLangByID'](a7['ok']),
                            'click': function() {
                                aO['gameInfo'] && (a5['Instance']['deleteSubGame'](aO['gameInfo']['gameId']),
                                a0['res']['releaseDir']('', aO['gameInfo']['gameId']['toString']()),
                                aO['updateGameState']()),
                                aO['btn_del']['node']['active'] = !0x1;
                            }
                        }
                          , aS = {
                            'txt': a3['getLangByID'](a7['cancel']),
                            'click': function() {
                                aO['btn_del']['node']['active'] = !0x1;
                            }
                        };
                        a8['Show'](aP, aQ, aR, aS),
                        this['revertDelNode'](),
                        aa['instance']['close']();
                    }
                }
                ,
                aN['onClick'] = function() {
                    var aO = this;
                    if (null != this['gameInfo']) {
                        if (this['btn_del']['node']['active'])
                            Z['log']['logBusiness']('now\x20is\x20deleting\x20game,\x20can\x27t\x20enter\x20game');
                        else {
                            if (T['isNative']) {
                                if (a5['Instance']['getDownloadingSubGameCount']() >= a9['maxDownloadSubGameCount']) {
                                    var aP = a3['getLangByID'](a7['tips_wait_down_game']);
                                    return void Z['toast'](aP);
                                }
                                if (this['bDownLoad']) {
                                    a5['Instance']['stopDownGame'](this['gameInfo']['gameId']);
                                    var aQ = a7['tips'];
                                    aQ = a3['getLangByID'](aQ);
                                    var aR = a3['getLangByID'](a7['tip_cancel_down_game'])
                                      , aS = {
                                        'txt': a3['getLangByID'](a7['ok']),
                                        'click': function() {
                                            aO['gameInfo'] && (aO['bDownLoad'] = !0x1,
                                            aO['updateGameState']());
                                        }
                                    }
                                      , aT = {
                                        'txt': a3['getLangByID'](a7['cancel']),
                                        'click': function() {
                                            a5['Instance']['resumeDownGame'](aO['gameInfo']['gameId']);
                                        }
                                    };
                                    return void a8['Show'](aQ, aR, aS, aT);
                                }
                                if (this['gameState'] != a6['NO_NEED_UPDATE'] && !this['bDownLoad'])
                                    return this['bDownLoad'] = !0x0,
                                    this['downProgress']['node']['active'] = !0x0,
                                    this['updateDownProgress'](0x0),
                                    void a5['Instance']['downLoadSubGame'](this['gameInfo']['gameId'], function(aU, aV) {
                                        if (void 0x0 === aV && (aV = ''),
                                        aU == a6['UPDATE_SUCCESS'])
                                            aO['updateGameState']();
                                        else {
                                            var aW = a7['error'];
                                            aW = a3['getLangByID'](aW);
                                            var aX = a3['getLangByTag']('tip_game_hot_error_' + aU);
                                            a9['bShowDebug'] && (aX = aX + ':' + aV);
                                            var aY = {
                                                'txt': a3['getLangByID'](a7['ok']),
                                                'click': function() {
                                                    aO['updateGameState']();
                                                }
                                            };
                                            a8['Show'](aW, aX, aY);
                                        }
                                        aO['bDownLoad'] = !0x1;
                                    }, function(aU) {
                                        aO['updateDownProgress'](aU);
                                    });
                            }
                            this['Call'](a2['modID']['root'], a2['msgID']['reqGameRooms'], this['gameInfo']['gameId']);
                        }
                    } else
                        Z['log']['logBusiness']('lobbyGameItem\x20onClick\x20gameInfo\x20is\x20null');
                }
                ,
                aN['updateDownProgress'] = function(aO) {
                    this['lb_progress']['string'] = Math['floor'](0x64 * aO) + '%',
                    this['downProgress']['progress'] = aO;
                    var aP = null;
                    (aP = 0x0 <= aO && aO <= 0.35 ? Y['colorFromHex']('#F74000') : 0.35 < aO && aO <= 0.75 ? Y['colorFromHex']('#F7CE00') : Y['colorFromHex']('#00FF00'))['a'] = 0xa0,
                    this['progressBar']['color'] = aP;
                }
                ,
                aN['onLongPress'] = function() {
                    var aO = this;
                    T['isNative'] && this['gameState'] != a6['NEED_DOWNLOAD'] && (this['btn_del']['node']['active'] = !0x0,
                    aa['instance']['show'](function() {
                        aO['revertDelNode']();
                    }, this, this['btn_del']['node']));
                }
                ,
                aN['revertDelNode'] = function() {
                    var aO = this['btn_del']['node'];
                    aO['parent'] = this['node'],
                    aO['position'] = X(0x0, 0x0, 0x0),
                    aO['setScale'](X(0x1, 0x1, 0x1)),
                    aO['active'] = !0x1;
                }
                ,
                aN['showJackpot'] = function(aO, aP) {
                    var aQ, aR = this;
                    if (a9['bShowJackpot'] || (aO = !0x1),
                    this['jackpotNode']['active'] != aO && (this['jackpotNode']['active'] = aO),
                    null == (aQ = this['jpRollTwer']) || aQ['stop'](),
                    aO) {
                        if (aP > 0x0) {
                            var aS = function(aV) {
                                aR['curJackpot'] = aV,
                                aR['lbJackpot']['string'] = Z['FormatCoins'](aV);
                            };
                            if (aP <= this['curJackpot'])
                                return void aS(aP);
                            var aT = Math['floor'](aP - this['curJackpot'])
                              , aU = aT > 0x1e ? 0x1e : aT;
                            this['jpRollTwer'] = Y['tweenNumber'](this['curJackpot'], aP, aU, aS, aS, 'sineInOut');
                        } else
                            this['jackpotNode']['active'] = !0x1;
                    }
                }
                ,
                aM;
            }(a1))['prototype'], 'content', [ac], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            av = q(at['prototype'], 'btnItem', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aw = q(at['prototype'], 'spIcon', [af], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ax = q(at['prototype'], 'spineNode', [ag], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ay = q(at['prototype'], 'vipNode', [ah], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            az = q(at['prototype'], 'lbVip', [ai], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aA = q(at['prototype'], 'spGameName', [aj], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aB = q(at['prototype'], 'jackpotNode', [ak], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aC = q(at['prototype'], 'lbJackpot', [al], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aD = q(at['prototype'], 'spTag', [am], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aE = q(at['prototype'], 'lb_progress', [an], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aF = q(at['prototype'], 'downProgress', [ao], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aG = q(at['prototype'], 'progressBar', [ap], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aH = q(at['prototype'], 'updateNode', [aq], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aI = q(at['prototype'], 'btn_del', [ar], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            as = at)) || as)),
            E['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyGameList.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './webGame.ts', './lobbyGameItem.ts', './lobbyState.ts', './lobbyConfig.ts', './utils.ts', './appConfig.ts', './ToggleGroup.ts', './GameListConfig.ts'], function(j) {
    var k, q, x, z, A, B, D, E, F, H, J, K, M, N, O, P, Q, R, T, U, V, W, X, Y, Z;
    return {
        'setters': [function(a0) {
            k = a0['applyDecoratedDescriptor'],
            q = a0['inheritsLoose'],
            x = a0['initializerDefineProperty'],
            z = a0['assertThisInitialized'],
            A = a0['createForOfIteratorHelperLoose'];
        }
        , function(a0) {
            B = a0['cclegacy'],
            D = a0['_decorator'],
            E = a0['ScrollView'],
            F = a0['Node'],
            H = a0['Button'],
            J = a0['Vec2'],
            K = a0['settings'],
            M = a0['Settings'],
            N = a0['Layout'],
            O = a0['UITransform'],
            P = a0['instantiate'];
        }
        , function(a0) {
            Q = a0['baseView'];
        }
        , function(a0) {
            R = a0['webGame'];
        }
        , function(a0) {
            T = a0['lobbyGameItem'];
        }
        , function(a0) {
            U = a0['lobbyState'];
        }
        , function(a0) {
            V = a0['Lobby'];
        }
        , function(a0) {
            W = a0['utils'];
        }
        , function(a0) {
            X = a0['appConfig'];
        }
        , function(a0) {
            Y = a0['ToggleGroup'];
        }
        , function(a0) {
            Z = a0['GameBaseInfo'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae;
            B['_RF']['push']({}, '2b724hoV91CFpVlbABJ3bHO', 'lobbyGameList', void 0x0);
            var af = D['ccclass']
              , ag = D['property'];
            j('lobbyGameList', (a0 = af('lobbyGameList'),
            a1 = ag({
                'type': Y,
                'tooltip': 'ToggleGroup'
            }),
            a2 = ag({
                'type': E,
                'tooltip': '滚轴组件'
            }),
            a3 = ag({
                'type': F,
                'tooltip': '游戏列表根节点'
            }),
            a4 = ag({
                'type': F,
                'tooltip': '游戏卡模板'
            }),
            a5 = ag({
                'type': H
            }),
            a6 = ag({
                'type': H
            }),
            a0((a9 = k((a8 = function(ah) {
                function ai() {
                    for (var ak, al = arguments['length'], am = new Array(al), an = 0x0; an < al; an++)
                        am[an] = arguments[an];
                    return ak = ah['call']['apply'](ah, [this]['concat'](am)) || this,
                    x(ak, 'leftTabs', a9, z(ak)),
                    x(ak, 'scrView', aa, z(ak)),
                    x(ak, 'gameItemsRoot', ab, z(ak)),
                    x(ak, 'gameItemTemp', ac, z(ak)),
                    x(ak, 'btnL', ad, z(ak)),
                    x(ak, 'btnR', ae, z(ak)),
                    ak['gameItemsPool'] = [],
                    ak['allShowGameItems'] = [],
                    ak['gameItemsMap'] = void 0x0,
                    ak['gameSortMap'] = void 0x0,
                    ak['gameItemList'] = [],
                    ak['bLoadSpineIcon'] = !0x1,
                    ak['pageGameCount'] = 0x0,
                    ak['contentUITransform'] = null,
                    ak['bundleMap'] = new Map(),
                    ak['listJumpOffset'] = new J(0xc8,0xc8),
                    ak['bShowJumpBtnFlag'] = [],
                    ak['choosenGameType'] = V['gameSort']['all'],
                    ak['showGameCount'] = 0x0,
                    ak['areaFilterCfg'] = null,
                    ak;
                }
                q(ai, ah);
                var aj = ai['prototype'];
                return aj['onInit'] = function() {
                    var ak = this
                      , al = K['querySettings'](M['Category']['ASSETS'], 'projectBundles') || [];
                    this['bundleMap']['clear'](),
                    al['forEach'](function(as) {
                        ak['bundleMap']['set'](as, !0x0);
                    }),
                    this['leftTabs']['setToggleChangedHandler'](this['chooseGameType']['bind'](this));
                    for (var am = this['gameItemsRoot']['children'], an = 0x0; an < am['length']; an++) {
                        var ao = am[an]
                          , ap = this['getGameItem'](ao);
                        null != ap && (ap['show'](!0x1),
                        this['gameItemsPool']['push'](ap));
                    }
                    if (null != this['btnL'] && null != this['btnR']) {
                        W['ButtonBindClick'](this['btnL'], this['onbtnLClick'], this),
                        W['ButtonBindClick'](this['btnR'], this['onbtnRClick'], this);
                        var aq = this['scrView']['content']['getComponent'](N);
                        this['contentUITransform'] = this['scrView']['content']['getComponent'](O);
                        var ar = this['gameItemTemp']['getComponent'](O)['width'];
                        this['pageGameCount'] = 0x2 * Math['floor']((this['scrView']['view']['width'] - aq['paddingLeft']) / (ar + aq['spacingX'])),
                        this['scrView']['node']['on'](E['EventType']['SCROLLING'], this['onGameListScrolling'], this);
                    } else
                        null != this['btnL'] && (this['btnL']['node']['active'] = !0x1),
                        null != this['btnR'] && (this['btnR']['node']['active'] = !0x1);
                }
                ,
                aj['onbtnLClick'] = function() {
                    this['moveGameList'](!0x1);
                }
                ,
                aj['onbtnRClick'] = function() {
                    this['moveGameList'](!0x0);
                }
                ,
                aj['moveGameList'] = function(ak) {
                    if (this['showGameCount'] <= this['pageGameCount'])
                        return this['setMoveBtnVisible'](!0x0, !0x1),
                        void this['setMoveBtnVisible'](!0x1, !0x1);
                    if (ak) {
                        var al = Math['floor'](this['scrView']['view']['width'])
                          , am = this['scrView']['getScrollOffset']()
                          , an = Math['floor'](Math['abs'](am['x']))
                          , ao = Math['floor'](an / al) + 0x1;
                        al - an % al < 0x64 && (ao += 0x1),
                        this['pageGameCount'] * (ao + 0x1) < this['showGameCount'] ? (am['x'] = al * ao,
                        this['scrView']['scrollToOffset'](am, 0.1, !0x0)) : this['scrView']['scrollToRight'](0.1, !0x0);
                    } else {
                        var ap;
                        null == (ap = this['scrView']) || ap['scrollToLeft'](0.1, !0x0);
                    }
                }
                ,
                aj['onGameListScrolling'] = function(ak) {
                    var al = Math['abs'](ak['getScrollOffset']()['x']);
                    this['bShowJumpBtnFlag'][0x0] != al > this['listJumpOffset']['x'] && this['setMoveBtnVisible'](!0x0, !this['bShowJumpBtnFlag'][0x0]),
                    this['bShowJumpBtnFlag'][0x1] != al < this['listJumpOffset']['y'] && this['setMoveBtnVisible'](!0x1, !this['bShowJumpBtnFlag'][0x1]);
                }
                ,
                aj['setMoveBtnVisible'] = function(ak, al) {
                    var am = ak ? this['btnL'] : this['btnR'];
                    null != am && (am['node']['active'] = al,
                    this['bShowJumpBtnFlag'][ak ? 0x0 : 0x1] = al);
                }
                ,
                aj['getGameItem'] = function(ak) {
                    var al = ak['getComponent'](T);
                    return null == al ? (R['log']['logView']('lobbyGameList\x20getGameItem\x20item\x20is\x20null'),
                    ak['destroy'](),
                    null) : (al['Init'](0x64 * this['ID'], this['messager']),
                    al);
                }
                ,
                aj['chooseGameType'] = function(ak) {
                    var al = null != this['areaFilterCfg'] && this['areaFilterCfg']['length'] > ak ? this['areaFilterCfg'][ak] : V['gameSort']['all'];
                    this['refreshChoosenGameList'](al),
                    this['choosenGameType'] = al,
                    this['moveGameList'](!0x1);
                }
                ,
                aj['refreshChoosenGameList'] = function(ak) {
                    var al = this
                      , am = this['allShowGameItems'];
                    ak != V['gameSort']['all'] && (am = this['gameSortMap']['get'](ak),
                    this['allShowGameItems']['forEach'](function(an) {
                        an['show'](!0x1);
                    })),
                    this['showGameCount'] = null != am && am['length'] > 0x0 ? am['length'] : 0x0,
                    function(an) {
                        if (null != an && 0x0 != am['length']) {
                            var ao = 0x0;
                            an['forEach'](function(ap) {
                                ap['show'](!0x0, ao % 0x2 == 0x0),
                                ao++;
                            }),
                            al['pageGameCount'] > 0x0 && al['scheduleOnce'](function() {
                                al['listJumpOffset']['y'] = Math['max'](al['listJumpOffset']['x'], al['contentUITransform']['width'] - al['scrView']['view']['width'] - al['listJumpOffset']['x']);
                            }, 0x0);
                        }
                    }(am);
                }
                ,
                aj['refresh'] = function(ak) {
                    var al = this;
                    void 0x0 === ak && (ak = !0x1);
                    var am = U['Instance']['Player']['areaNo'];
                    W['StringIsNullOrEmpty'](am) && (am = X['defaultAreaCode']);
                    var an = Number(am);
                    this['areaFilterCfg'] = V['areaGameFilterCfg'][an] || V['areaGameFilterCfg'][0x0],
                    null == this['gameItemsMap'] ? this['gameItemsMap'] = new Map() : this['gameItemsMap']['clear'](),
                    null == this['gameSortMap'] ? this['gameSortMap'] = new Map() : this['gameSortMap']['clear']();
                    for (var ao, ap = 0x0, aq = U['Instance']['State']['jackpots'], ar = X['bShowJackpot'] && null != aq, as = U['Instance']['State']['games'], at = function() {
                        var ax = ao['value']
                          , ay = ax[0x0];
                        //☠️ Ignore game support validation
                        if (0x1 != al['bundleMap']['get'](ay['toString']()))
                            return 'continue';
                        var az = ax[0x1]
                          , aA = al['getGameItemObject'](ap);
                        al['gameItemsMap']['set'](ay, aA);
                        var aB = ar && aq['has'](ay) ? aq['get'](ay) : null;
                        aA['reset'](az, aB, al['onGameItemShow']['bind'](al));
                        var aC = al['parseGameType'](az['gameType']);
                        aC['length'] > 0x0 && aC['forEach'](function(aD) {
                            var aE = al['gameSortMap']['get'](aD);
                            null == aE && (aE = [],
                            al['gameSortMap']['set'](aD, aE)),
                            aE['push'](aA);
                        }),
                        ap++;
                    }, au = A(as); !(ao = au())['done']; )
                        at();
                    if (this['allShowGameItems'] = this['gameItemsPool']['slice'](0x0, ap),  //☠️ Show all processed games
                    ap < this['gameItemsPool']['length'])
                        for (var av = ap; av < this['gameItemsPool']['length']; av++) {
                            this['gameItemsPool'][av]['show'](!0x1);
                        }
                    if (ak) {
                        var aw = this['areaFilterCfg']['indexOf'](X['defaultGameType']);
                        -0x1 == aw && (aw = this['areaFilterCfg']['indexOf'](V['gameSort']['all'])),
                        this['leftTabs']['setSelectToggle'](aw),
                        this['chooseGameType'](aw),
                        this['moveGameList'](!0x1);
                    } else
                        this['refreshChoosenGameList'](this['choosenGameType']);
                }
                ,
                aj['getGameItemObject'] = function(ak) {
                    var al = this['gameItemsPool'][ak];
                    if (null == al) {
                        var am = P(this['gameItemTemp']);
                        am['parent'] = this['gameItemsRoot'],
                        am['setSiblingIndex'](ak),
                        al = this['getGameItem'](am),
                        this['gameItemsPool'][ak] = al;
                    }
                    return al;
                }
                ,
                aj['onGameItemShow'] = function(ak) {
                    this['gameItemList']['push'](ak),
                    this['bLoadSpineIcon'] || this['loadGameSpine']();
                }
                ,
                aj['loadGameSpine'] = function() {
                    var ak = this
                      , al = this['gameItemList']['shift']();
                    if (al) {
                        this['bLoadSpineIcon'] = !0x0;
                        var am = al['getGameID']();
                        al['loadGameSpineNode'](am, function() {
                            ak['loadGameSpine']();
                        });
                    } else
                        this['bLoadSpineIcon'] = !0x1;
                }
                ,
                aj['parseGameType'] = function(ak) {
                    for (var al = [], am = 0x0; am < 0x4; am++) {
                        var an = V['gameSortBit'][am];
                        (ak & an) == an && al['push'](am);
                    }
                    return al;
                }
                ,
                aj['refreshJackpot'] = function(ak) {
                    var al = this;
                    null != ak && 0x0 != ak['length'] && ak['forEach'](function(am) {
                        var an = al['gameItemsMap']['get'](am['gameId']);
                        null != an && an['showJackpot'](!0x0, am['value']);
                    });
                }
                ,
                ai;
            }(Q))['prototype'], 'leftTabs', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aa = k(a8['prototype'], 'scrView', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ab = k(a8['prototype'], 'gameItemsRoot', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ac = k(a8['prototype'], 'gameItemTemp', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ad = k(a8['prototype'], 'btnL', [a5], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ae = k(a8['prototype'], 'btnR', [a6], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = a8)) || a7)),
            B['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyGameToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LabelToggle.ts'], function(b) {
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
            m = q['Node'];
        }
        , function(q) {
            p = q['LabelToggle'];
        }
        ],
        'execute': function() {
            var q, v, w, x, z;
            j['_RF']['push']({}, '9e008M1s6RD4ofWt/Nr6PCz', 'lobbyGameToggle', void 0x0);
            var A = k['ccclass']
              , B = k['property'];
            b('lobbyGameToggle', (q = A('lobbyGameToggle'),
            v = B({
                'type': m,
                'tooltip': '背景'
            }),
            q((z = d((x = function(C) {
                function D() {
                    for (var E, F = arguments['length'], G = new Array(F), H = 0x0; H < F; H++)
                        G[H] = arguments[H];
                    return E = C['call']['apply'](C, [this]['concat'](G)) || this,
                    g(E, 'backGround', z, h(E)),
                    E;
                }
                return f(D, C),
                D['prototype']['onCheckChange'] = function(E) {
                    this['backGround'] && (this['backGround']['active'] = !E);
                }
                ,
                D;
            }(p))['prototype'], 'backGround', [v], {
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
System['register']('chunks:///_virtual/lobbyMain.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyMod.ts', './platformData.ts', './AsyncQueue.ts', './Oops.ts', './GameUIConfig.ts', './viewLobby.ts', './lobbyConfig.ts', './frameworkCmd.ts', './pb_framework.js', './lobbyState.ts', './webGame.ts', './CustomEventDefine.ts', './pb_error_code.ts', './utils.ts', './notify2.ts', './Language.ts', './stringDefine.ts', './netAdapter.ts', './gMessageBox.ts', './appConfig.ts', './lobbyModHub.ts', './rewardPopup.ts', './bindTips.ts', './ThirdAdapter.ts', './httpInfo.ts', './httpDefine.ts', './downloadTips.ts', './downloadEntry.ts', './popManager.ts', './redPoint.ts', './env', './GameListConfig.ts', './NotificationSender.ts', './NativeFun.ts', './VersionManager.ts'], function(a0) {
    var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV;
    return {
        'setters': [function(aW) {
            a1 = aW['inheritsLoose'],
            a2 = aW['asyncToGenerator'],
            a3 = aW['regeneratorRuntime'],
            a4 = aW['createForOfIteratorHelperLoose'];
        }
        , function(aW) {
            a5 = aW['cclegacy'],
            a6 = aW['_decorator'],
            a7 = aW['sys'],
            a8 = aW['screen'],
            a9 = aW['math'],
            aa = aW['Vec2'],
            ab = aW['js'],
            ac = aW['game'];
        }
        , function(aW) {
            ad = aW['lobbyMod'];
        }
        , function(aW) {
            ae = aW['PModuleID'];
        }
        , function(aW) {
            af = aW['AsyncQueue'];
        }
        , function(aW) {
            ag = aW['oops'];
        }
        , function(aW) {
            ah = aW['UIID'];
        }
        , function(aW) {
            ai = aW['viewLobby'];
        }
        , function(aW) {
            aj = aW['Lobby'];
        }
        , function(aW) {
            ak = aW['CMD_FRAMEWORK'];
        }
        , function(aW) {
            al = aW['pb_user'],
            am = aW['pb_game'];
        }
        , function(aW) {
            an = aW['lobbyState'];
        }
        , function(aW) {
            ao = aW['webGame'];
        }
        , function(aW) {
            ap = aW['WebGameEvent'],
            aq = aW['gameStage'];
        }
        , function(aW) {
            ar = aW['pb_error_code'];
        }
        , function(aW) {
            as = aW['utils'];
        }
        , function(aW) {
            at = aW['notify'];
        }
        , function(aW) {
            au = aW['LanguageManager'];
        }
        , function(aW) {
            av = aW['stringDefine'];
        }
        , function(aW) {
            aw = aW['netAdapter'],
            ax = aW['NetChannelType'];
        }
        , function(aW) {
            ay = aW['MsgBoxManager'];
        }
        , function(aW) {
            az = aW['appConfig'],
            aA = aW['AttributionType'];
        }
        , function(aW) {
            aB = aW['lobbyModHub'];
        }
        , function(aW) {
            aC = aW['getRewardType'],
            aD = aW['rewardPopManager'];
        }
        , function(aW) {
            aE = aW['bindTips'];
        }
        , function(aW) {
            aF = aW['AttributionEvent'];
        }
        , function(aW) {
            aG = aW['HttpInfo'];
        }
        , function(aW) {
            aH = aW['HttpErrorCode'];
        }
        , function(aW) {
            aI = aW['downloadTips'];
        }
        , function(aW) {
            aJ = aW['downloadEntry'];
        }
        , function(aW) {
            aK = aW['popManager'],
            aL = aW['lobbyPopJob'],
            aM = aW['popJobType'];
        }
        , function(aW) {
            aN = aW['RedPointKey'],
            aO = aW['ReadPointName'];
        }
        , function(aW) {
            aP = aW['DEBUG'];
        }
        , function(aW) {
            aQ = aW['GamesLocalConfig'],
            aR = aW['GameBaseInfo'];
        }
        , function(aW) {
            aS = aW['NotificationSender'];
        }
        , function(aW) {
            aT = aW['NativeFun'];
        }
        , function(aW) {
            aU = aW['VersionManager'],
            aV = aW['SubGameState'];
        }
        ],
        'execute': function() {
            a5['_RF']['push']({}, '88e5fZe9kJJypRuX5iLO6AZ', 'lobbyMain', void 0x0),
            (a6['ccclass'],
            a6['property']);
            var aW = a0('lobbyMain', function(aX) {
                function aY() {
                    for (var b0, b1 = arguments['length'], b2 = new Array(b1), b3 = 0x0; b3 < b1; b3++)
                        b2[b3] = arguments[b3];
                    return (b0 = aX['call']['apply'](aX, [this]['concat'](b2)) || this)['view'] = null,
                    b0['bindTips'] = null,
                    b0['downloadTips'] = null,
                    b0['loadModQueue'] = null,
                    b0['bAllowEnterLobby'] = !0x1,
                    b0['login2LobbyActionQueue'] = null,
                    b0['loopJobsTimer'] = null,
                    b0['loopJobCount'] = 0x0,
                    b0['isForceBackGame'] = !0x1,
                    b0['lastReqGameRoomsTime'] = 0x0,
                    b0['lastReqRoomInfoTime'] = 0x0,
                    b0['popMager'] = null,
                    b0['bReady'] = !0x1,
                    b0['errorMsg'] = null,
                    b0;
                }
                a1(aY, aX);
                var aZ = aY['prototype'];
                return aZ['loadBundle'] = function(b0) {}
                ,
                aZ['loadView'] = function(b0) {
                    var b1 = this;
                    b0['push'](a2(a3()['mark'](function b2(b3, b4, b5) {
                        var b6;
                        return a3()['wrap'](function(b7) {
                            for (; ; )
                                switch (b7['prev'] = b7['next']) {
                                case 0x0:
                                    b6 = {
                                        'onAdded': function(b8, b9) {
                                            b1['view'] = b8['getComponent'](ai),
                                            b1['CreateSubMod'](aj['modID']['view']),
                                            b3();
                                        }
                                    },
                                    ag['gui']['open'](ah['Lobby'], null, b6);
                                case 0x2:
                                case 'end':
                                    return b7['stop']();
                                }
                        }, b2);
                    })));
                }
                ,
                aZ['actionOnLoaded'] = function(b0) {
                    null == this['popMager'] && (this['popMager'] = new aK()),
                    this['popMager']['resetPopFlag'](),
                    this['popMager']['pausePop'](!0x0, !0x1);
                }
                ,
                aZ['AddListener'] = function() {
                    this['addNetProcess'](ak['s2c_game_list_jackpot'], this['on_s2c_game_list_jackpot']),
                    this['addNetProcess'](ak['s2c_game_list'], this['on_s2c_game_list']),
                    this['addNetProcess'](ak['s2c_hall_enter'], this['on_s2c_hall_enter']),
                    this['addNetProcess'](ak['s2c_red_point'], this['on_s2c_red_point']),
                    this['addNetProcess'](ak['s2c_server_cfg'], this['on_s2c_server_cfg']),
                    this['addNetProcess'](ak['s2c_lobby_marquee'], this['on_s2c_lobby_marquee']),
                    this['addNetProcess'](ak['s2c_game_room'], this['on_s2c_game_room']),
                    this['addNetProcess'](ak['s2c_enter_room'], this['on_s2c_enter_room']),
                    this['addNetProcess'](ak['s2c_game_enter'], this['on_s2c_back_game']),
                    this['addNetProcess'](ak['notify_session_overdue'], this['on_notify_session_overdue']),
                    this['addNetProcess'](ak['s2c_session_verify'], this['on_s2c_session_verify']),
                    this['addNetProcess'](ak['notify_big_win'], this['on_notify_big_win']),
                    this['addNetProcess'](ak['notify_kick_out'], this['on_notify_kick_out']),
                    this['addNetProcess'](ak['notify_user_info_update'], this['on_notify_user_info_update']),
                    this['addNetProcess'](ak['notify_recharge_info'], this['on_notify_recharge_info']),
                    this['addNetProcess'](ak['s2c_notify_goods'], this['on_s2c_notify_goods']),
                    this['addNetProcess'](ak['s2c_stage_show'], this['on_s2c_show_stage']),
                    this['addNetProcess'](ak['s2c_freecash_notify'], this['on_s2c_cashFree_show']),
                    this['addNetProcess'](ak['s2c_freecash_newhelp'], this['on_s2c_cashFree_newHelp']),
                    this['RegistMsg'](aj['msgID']['enterLobbyMod'], this['enterLobbyMod']),
                    this['RegistMsg'](aj['msgID']['reqGameRooms'], this['reqGameRoomList']),
                    this['RegistMsg'](aj['msgID']['reqEntetRoom'], this['reqEnterGameRoom']),
                    this['RegistMsg'](aj['msgID']['showBindTip'], this['showBindTips']),
                    ag['message']['on'](ap['game_stage_change'], this['on_game_stage_change'], this),
                    ag['message']['on'](ap['req_enterGame'], this['reqEnterGame'], this),
                    ag['message']['on'](ap['add_lobby_pop'], this['onAddLobbyPop'], this),
                    ag['message']['on'](ap['open_lobby_pop'], this['onOpenLobbyPop'], this),
                    ag['message']['on'](ap['close_lobby_pop'], this['onCloseLobbyPop'], this),
                    ag['message']['on'](ap['WS_CONNECT'], this['OnSocketConnected'], this),
                    ag['message']['on'](ap['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                    ag['message']['on'](ap['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                }
                ,
                aZ['RemoveListener'] = function() {
                    this['removeNetProcess'](ak['s2c_game_list_jackpot'], this['on_s2c_game_list_jackpot']),
                    this['removeNetProcess'](ak['s2c_game_list'], this['on_s2c_game_list']),
                    this['removeNetProcess'](ak['s2c_hall_enter'], this['on_s2c_hall_enter']),
                    this['removeNetProcess'](ak['s2c_red_point'], this['on_s2c_red_point']),
                    this['removeNetProcess'](ak['s2c_server_cfg'], this['on_s2c_server_cfg']),
                    this['removeNetProcess'](ak['s2c_lobby_marquee'], this['on_s2c_lobby_marquee']),
                    this['removeNetProcess'](ak['s2c_game_room'], this['on_s2c_game_room']),
                    this['removeNetProcess'](ak['s2c_enter_room'], this['on_s2c_enter_room']),
                    this['removeNetProcess'](ak['s2c_game_enter'], this['on_s2c_back_game']),
                    this['removeNetProcess'](ak['notify_session_overdue'], this['on_notify_session_overdue']),
                    this['removeNetProcess'](ak['s2c_session_verify'], this['on_s2c_session_verify']),
                    this['removeNetProcess'](ak['notify_big_win'], this['on_notify_big_win']),
                    this['removeNetProcess'](ak['notify_kick_out'], this['on_notify_kick_out']),
                    this['removeNetProcess'](ak['notify_user_info_update'], this['on_notify_user_info_update']),
                    this['removeNetProcess'](ak['notify_recharge_info'], this['on_notify_recharge_info']),
                    this['removeNetProcess'](ak['s2c_notify_goods'], this['on_s2c_notify_goods']),
                    this['removeNetProcess'](ak['s2c_stage_show']),
                    this['removeNetProcess'](ak['s2c_freecash_notify']),
                    this['LogoutMsg'](aj['msgID']['enterLobbyMod']),
                    this['LogoutMsg'](aj['msgID']['reqGameRooms']),
                    this['LogoutMsg'](aj['msgID']['reqEntetRoom']),
                    ag['message']['off'](ap['game_stage_change'], this['on_game_stage_change'], this),
                    ag['message']['off'](ap['req_enterGame'], this['reqEnterGame'], this),
                    ag['message']['off'](ap['add_lobby_pop'], this['onAddLobbyPop'], this),
                    ag['message']['off'](ap['open_lobby_pop'], this['onOpenLobbyPop'], this),
                    ag['message']['off'](ap['close_lobby_pop'], this['onCloseLobbyPop'], this),
                    ag['message']['off'](ap['WS_CONNECT'], this['OnSocketConnected'], this),
                    ag['message']['off'](ap['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                    ag['message']['off'](ap['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                }
                ,
                aZ['addLogin2LobbyAction'] = function(b0) {
                    var b1 = this;
                    null == this['login2LobbyActionQueue'] && (this['login2LobbyActionQueue'] = new af(),
                    this['login2LobbyActionQueue']['complete'] = a2(a3()['mark'](function b2() {
                        return a3()['wrap'](function(b3) {
                            for (; ; )
                                switch (b3['prev'] = b3['next']) {
                                case 0x0:
                                    b1['login2LobbyActionQueue'] = null;
                                case 0x1:
                                case 'end':
                                    return b3['stop']();
                                }
                        }, b2);
                    }))),
                    this['login2LobbyActionQueue']['push'](a2(a3()['mark'](function b3(b4, b5, b6) {
                        return a3()['wrap'](function(b7) {
                            for (; ; )
                                switch (b7['prev'] = b7['next']) {
                                case 0x0:
                                    b0(b4, b5, b6);
                                case 0x1:
                                case 'end':
                                    return b7['stop']();
                                }
                        }, b3);
                    })));
                }
                ,
                aZ['onEnter'] = function(b0, b1, b2) {
                    var b3 = this;
                    if (b0) {
                        this['updatePlayerInfo'](b1),
                        b2 && (this['addNetProcess'](ak['s2c_session_verify'], this['on_s2c_session_verify']),
                        this['on_s2c_hall_enter'](null));
                        var b4 = ag['storage']['getNumber'](az['storageKey']['loginCount'], 0x0);
                        if (b4++,
                        ag['storage']['set'](az['storageKey']['loginCount'], b4),
                        a7['isNative']) {
                            var b5 = aT['getAppVersion']()['split']('.');
                            parseInt(b5[0x0]) >= 0x2 && aS['init'](b1['vipLevel'], b1['vipExp'], b4);
                        }
                    }
                    this['updateLobbyState'](!0x1),
                    this['initLocalNotify'](),
                    this['tryReportReferrer'](),
                    this['reqLobbyBaseData'](),
                    this['showTranslationView'](),
                    b0 && (this['addLogin2LobbyAction'](function(b6, b7, b8) {
                        b3['reqRemoteGameList'](b6);
                    }),
                    this['addLogin2LobbyAction'](function(b6, b7, b8) {
                        b3['showLobbyView'](b6);
                    }));
                }
                ,
                aZ['reqRemoteGameList'] = function(b0) {
                    var b1 = 'gameListConfig.json'
                      , b2 = a7['isBrowser'] ? b1 : '' + az['nativeUrl'] + b1;
                    as['httpGet'](b2, function(b3, b4) {
                        for (var b5 in aQ) {
                            var b6 = aQ[b5];
                            aR[b5] = b6;
                        }
                        if (!b3) {
                            var b7 = JSON['parse'](b4);
                            b7 && b7['forEach'](function(b8) {
                                aR[b8['ID']] = b8['info'];
                            });
                        }
                        b0();
                    });
                }
                ,
                aZ['showTranslationView'] = function() {
                    ao['Loading']['SetLoadingProgress'](0x0);
                    var b0 = av['initGame'];
                    b0 = au['getLangByID'](b0),
                    ao['Loading']['ShowLoading'](!0x0, b0),
                    ao['Loading']['SetLoadingProgress'](0.5, 0x3);
                }
                ,
                aZ['showLobbyView'] = (function() {
                    var b0 = a2(a3()['mark'](function b1(b2) {
                        var b3, b4, b5, b6, b7, b8 = this;
                        return a3()['wrap'](function(b9) {
                            for (; ; )
                                switch (b9['prev'] = b9['next']) {
                                case 0x0:
                                    if (this['reqLobbyExData'](),
                                    this['view']['show'](),
                                    this['view']['refresh'](!0x0),
                                    b3 = null,
                                    b3 = this['isForceBackGame'] ? function(ba) {
                                        b8['isForceBackGame'] = !0x1,
                                        ao['Loading']['SetLoadingProgress'](0x0, 0x0),
                                        null == b2 || b2();
                                    }
                                    : function(ba) {
                                        b8['updateLobbyState'](!0x0),
                                        ao['Loading']['ShowLoading'](!0x1),
                                        as['playSoundLan']('58', ae['game']['toString']()),
                                        b8['showAdd2Main'](),
                                        null == b2 || b2();
                                    }
                                    ,
                                    b4 = a7['isNative'] ? 'prefab' : '',
                                    !(null != (b5 = [{
                                        'bundle': ae['activity']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['sign']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['store']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['profile']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['mail']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['safe']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['vip']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['rewardPop']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['rank']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['service']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['agent']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['turntable']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['recycle']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['stageRecharge']['toString'](),
                                        'res': b4
                                    }, {
                                        'bundle': ae['cashFree']['toString'](),
                                        'res': b4
                                    }]) && b5['length'] > 0x0)) {
                                        b9['next'] = 0x14;
                                        break;
                                    }
                                    this['loadModQueue'] = new af(),
                                    b6 = a3()['mark'](function ba(bb) {
                                        var bc;
                                        return a3()['wrap'](function(bd) {
                                            for (; ; )
                                                switch (bd['prev'] = bd['next']) {
                                                case 0x0:
                                                    bc = b5[bb],
                                                    as['StringIsNullOrEmpty'](bc['res']) ? b8['loadModQueue']['push'](a2(a3()['mark'](function be(bf, bg, bh) {
                                                        return a3()['wrap'](function(bi) {
                                                            for (; ; )
                                                                switch (bi['prev'] = bi['next']) {
                                                                case 0x0:
                                                                    ag['res']['loadBundle'](bc['bundle'])['then'](function(bj) {
                                                                        var bk = (bb + 0x1) / b5['length'] * 0.5 + 0.5
                                                                          , bl = bb < b5['length'] - 0x1 ? null : b3;
                                                                        ao['Loading']['SetLoadingProgress'](bk, 0x1, bl),
                                                                        bf();
                                                                    })['catch'](function(bj) {
                                                                        ao['log']['logBusiness']('lobbyMain\x20showLobbyView:preload\x20bundle\x20error');
                                                                    });
                                                                case 0x1:
                                                                case 'end':
                                                                    return bi['stop']();
                                                                }
                                                        }, be);
                                                    }))) : b8['loadModQueue']['push'](a2(a3()['mark'](function bf(bg, bh, bi) {
                                                        return a3()['wrap'](function(bj) {
                                                            for (; ; )
                                                                switch (bj['prev'] = bj['next']) {
                                                                case 0x0:
                                                                    ag['res']['loadDir'](bc['bundle'], bc['res'], function(bk, bl) {
                                                                        if (null != bk)
                                                                            ao['log']['logBusiness']('lobbyMain\x20showLobbyView:preload\x20' + bc['bundle'] + '/' + bc['res'] + '\x20error\x20' + bk);
                                                                        else {
                                                                            var bm = (bb + 0x1) / b5['length'] * 0.5 + 0.5
                                                                              , bn = bb < b5['length'] - 0x1 ? null : b3;
                                                                            ao['Loading']['SetLoadingProgress'](bm, 0x1, bn);
                                                                        }
                                                                        bg();
                                                                    });
                                                                case 0x1:
                                                                case 'end':
                                                                    return bj['stop']();
                                                                }
                                                        }, bf);
                                                    })));
                                                case 0x2:
                                                case 'end':
                                                    return bd['stop']();
                                                }
                                        }, ba);
                                    }),
                                    b7 = 0x0;
                                case 0xb:
                                    if (!(b7 < b5['length'])) {
                                        b9['next'] = 0x10;
                                        break;
                                    }
                                    return b9['delegateYield'](b6(b7), 't0', 0xd);
                                case 0xd:
                                    b7++,
                                    b9['next'] = 0xb;
                                    break;
                                case 0x10:
                                    this['loadModQueue']['complete'] = a2(a3()['mark'](function bb() {
                                        return a3()['wrap'](function(bc) {
                                            for (; ; )
                                                switch (bc['prev'] = bc['next']) {
                                                case 0x0:
                                                    b8['enterLobbyMod'](ae['activity'], !0x0);
                                                case 0x1:
                                                case 'end':
                                                    return bc['stop']();
                                                }
                                        }, bb);
                                    })),
                                    this['loadModQueue']['play'](),
                                    b9['next'] = 0x15;
                                    break;
                                case 0x14:
                                    ao['Loading']['SetLoadingProgress'](0x1, 0x3, b3);
                                case 0x15:
                                case 'end':
                                    return b9['stop']();
                                }
                        }, b1, this);
                    }));
                    return function(b2) {
                        return b0['apply'](this, arguments);
                    }
                    ;
                }()),
                aZ['showAdd2Main'] = function() {
                    a7['isBrowser'] && !az['bPreview'] && a7['isMobile'] && az['bAdd2HomeScreen'] && (az['attType'] != aA['adjust'] && az['attType'] != aA['appsflyer'] && (a8['fullScreen']() || ag['storage']['getNumber'](az['storageKey']['loginCount'], 0x0) < 0xa && ag['gui']['open'](ah['add2main'])));
                }
                ,
                aZ['showDownloadEntry'] = function() {
                    var b0 = this;
                    if (a7['isBrowser'] && !az['bPreview'] && az['bShowDownload']) {
                        var b1 = an['Instance']['Server']['downloadUrl'];
                        if (as['StringIsNullOrEmpty'](b1))
                            ag['gui']['remove'](ah['downloadEntry']);
                        else {
                            var b2 = {
                                'onAdded': function(b3, b4) {
                                    b3['getComponent'](aJ)['init'](function() {
                                        b0['showDownload']();
                                    });
                                }
                            };
                            ag['gui']['open'](ah['downloadEntry'], null, b2),
                            this['tryAddDownloadPopJob']();
                        }
                    }
                }
                ,
                aZ['tryAddDownloadPopJob'] = function() {
                    var b0 = this
                      , b1 = aj['other']['popDownLoad']['popTime'];
                    if (!(b1 <= 0x0) && !(ag['storage']['getNumber'](az['storageKey']['loginCount'], 0x0) < Math['max'](0x0, aj['other']['popDownLoad']['minLoginTime']))) {
                        var b2 = new aL(aM['download'],b1,0xea60);
                        b2['canPopUp'] = function() {
                            var b3 = an['Instance']['Server']['downloadUrl'];
                            return 0x1 != as['StringIsNullOrEmpty'](b3);
                        }
                        ,
                        b2['showView'] = function() {
                            b0['showDownload']();
                        }
                        ,
                        this['onAddLobbyPop'](ap['add_lobby_pop'], b2);
                    }
                }
                ,
                aZ['showDownload'] = function() {
                    var b0 = this
                      , b1 = this['popMager']['CurPopType'];
                    if (null == b1 || b1 != aM['download']) {
                        var b2 = {
                            'onAdded': function(b3, b4) {
                                b3['active'] = !0x1,
                                (null != b0['downloadTips'] || (b0['downloadTips'] = b3['getComponent'](aI),
                                b0['downloadTips']['Init'](aj['modID']['downloadTip'], b0['messager']),
                                b0['bReady'])) && (b0['downloadTips']['show'](),
                                b0['downloadTips']['refresh']());
                            }
                        };
                        ag['gui']['open'](ah['downloadTips'], null, b2);
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20showDownload:curJob.contentType\x20==\x20popJobType.download');
                }
                ,
                aZ['loopJobs'] = function(b0) {
                    var b1 = this;
                    if (null != this['loopJobsTimer'] && (clearTimeout(this['loopJobsTimer']),
                    this['loopJobsTimer'] = null),
                    b0) {
                        var b2 = 0x3e8 * a9['clamp'](az['lobbyLoopSpace'], 0x5, 0x1e)
                          , b3 = Math['floor'](0x7530 / b2);
                        b3 = Math['max'](0x1, b3),
                        this['loopJobsTimer'] = setInterval(function() {
                            an['Instance']['State']['account']['logined'] && b1['bReady'] ? (az['bShowJackpot'] && b1['loopJobCount'] % b3 == 0x0 && b1['netRequest'](ak['c2s_game_list_jackpot']),
                            b1['popMager']['loopCall'](),
                            b1['loopJobCount']++,
                            b1['loopJobCount'] * b2 >= 0x493e0 && (b1['loopJobCount'] = 0x0,
                            a7['isBrowser'] && !aP && b1['checkH5Update']())) : null != b1['loopJobsTimer'] && (clearTimeout(b1['loopJobsTimer']),
                            b1['loopJobsTimer'] = null);
                        }, b2);
                    }
                }
                ,
                aZ['checkH5Update'] = function() {
                    //☠️ Bypass Update
                    // as['httpGet']('localConfig.json', function(b0, b1) {
                    //     if (!b0) {
                    //         var b2 = JSON['parse'](b1);
                    //         if (b2 && b2['assetsVersion'] != az['assetsVersion']) {
                    //             var b3 = av['tips'];
                    //             b3 = au['getLangByID'](b3);
                    //             var b4 = au['getLangByTag']('find_new_version', ae['lobby'])
                    //               , b5 = {
                    //                 'txt': au['getLangByID'](av['ok']),
                    //                 'click': function() {
                    //                     location['reload']();
                    //                 }
                    //             };
                    //             ay['Show'](b3, b4, b5);
                    //         }
                    //     }
                    // });
                }
                ,
                aZ['initLocalNotify'] = function() {
                    at['instance']['init']();
                }
                ,
                aZ['tryReportReferrer'] = function() {}
                ,
                aZ['reqLobbyBaseData'] = function() {
                    az['bShowJackpot'] && this['netRequest'](ak['c2s_game_list_jackpot']),
                    this['netRequest'](ak['c2s_game_list']);
                }
                ,
                aZ['on_s2c_game_list_jackpot'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        if (az['bShowJackpot']) {
                            var b1 = b0['data'];
                            an['Instance']['updateJackpot'](this, b1['items']),
                            null == this['login2LobbyActionQueue'] ? this['view']['GameList']['refreshJackpot'](b1['items']) : this['tryEnterLobbyView']();
                        }
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20on_s2c_game_list_jackpot:error\x20' + b0['code']);
                }
                ,
                aZ['on_s2c_game_list'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        var b1 = b0['data'];
                        //☠️ Force load all games
                        an['Instance']['updateGameList'](this, window.getGameList()),
                        null == this['login2LobbyActionQueue'] ? this['view']['GameList']['refresh']() : this['tryEnterLobbyView']();
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20on_s2c_game_list:error\x20' + b0['code']);
                }
                ,
                aZ['on_s2c_hall_enter'] = function(b0) {
                    this['bAllowEnterLobby'] = !0x0,
                    this['tryEnterLobbyView']();
                }
                ,
                aZ['tryEnterLobbyView'] = function() {
                    if (this['bAllowEnterLobby']) {
                        if (az['bShowJackpot']) {
                            var b0 = an['Instance']['State']['jackpots'];
                            if (null == b0 || 0x0 == b0['size'])
                                return void ao['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20jackpots\x20is\x20null');
                        }
                        var b1 = an['Instance']['State']['games'];
                        null != b1 && 0x0 != b1['size'] ? null != this['login2LobbyActionQueue'] && this['login2LobbyActionQueue']['size'] > 0x0 ? this['login2LobbyActionQueue']['play']() : ao['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20login2LobbyHandler\x20is\x20null') : ao['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20games\x20is\x20null');
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20bAllowEnterLobby\x20is\x20false');
                }
                ,
                aZ['on_s2c_back_game'] = function(b0) {
                    var b1 = this;
                    if (b0['code'] == ar['success']) {
                        var b2 = b0['data'];
                        this['isForceBackGame'] = !0x0;
                        var b3 = function(b4, b5, b6) {
                            var b7 = au['getLangByTag']('tips', ae['lobby'])
                              , b8 = au['getLangByTag']('ft_force_back_game', ae['lobby'])
                              , b9 = b2['roomInfo']['gameNameId']
                              , ba = au['getLangByTag']('name_' + b9);
                            b8 = ab['formatStr'](b8, ba);
                            var bb = {
                                'txt': au['getLangByID'](av['ok']),
                                'click': function() {
                                    if (a7['isNative']) {
                                        var bc = aU['Instance']['getSubGameState'](b9);
                                        bc == aV['NEED_DOWNLOAD'] || bc == aV['NEED_UPDATE'] ? aU['Instance']['downLoadSubGame'](b9, function(bd, be) {
                                            if (bd == aV['UPDATE_SUCCESS'])
                                                b1['tryEnterGameRoom'](b2['roomInfo']),
                                                b1['showLoading'](!0x1);
                                            else {
                                                var bf = av['error'];
                                                bf = au['getLangByID'](bf);
                                                var bg = au['getLangByTag']('tip_game_hot_error_' + bd)
                                                  , bh = {
                                                    'txt': au['getLangByID'](av['close']),
                                                    'click': function() {
                                                        ac['end']();
                                                    }
                                                }
                                                  , bi = {
                                                    'txt': au['getLangByID'](av['retry']),
                                                    'click': function() {
                                                        bb['click']();
                                                    }
                                                };
                                                ay['Show'](bf, bg, bh, bi);
                                            }
                                        }, function(bd) {
                                            var be = au['getLangByID'](av['update_game']) + ':' + bd + '%';
                                            b1['showLoading'](!0x0, be, 0x3e8);
                                        }) : b1['tryEnterGameRoom'](b2['roomInfo']);
                                    } else
                                        b1['tryEnterGameRoom'](b2['roomInfo']);
                                }
                            };
                            ay['Show'](b7, b8, bb),
                            null == b4 || b4();
                        };
                        this['bReady'] ? b3() : this['addLogin2LobbyAction'](b3);
                    }
                }
                ,
                aZ['reqLobbyExData'] = function() {
                    var b0 = {};
                    b0['platform'] = a7['isNative'] ? 0x1 : 0x2,
                    this['netRequest'](ak['c2s_server_cfg'], b0),
                    this['netRequest'](ak['c2s_red_point']),
                    this['netRequest'](ak['c2s_lobby_marquee']),
                    this['reqDownloadAppCfg']();
                }
                ,
                aZ['reqDownloadAppCfg'] = function() {
                    var b0 = this;
                    if (a7['isBrowser'] && !az['bPreview']) {
                        var b1 = an['Instance']['PlayerBaseInfo']
                          , b2 = an['Instance']['State']['deviceCode']
                          , b3 = an['Instance']['getLocalToken'](b2)
                          , b4 = {
                            'type': aG['req']['requests']['downloadCfg'],
                            'UserID': b1['id'],
                            'deviceCode': b2,
                            'token': b3['token'],
                            'timestamp': b3['syncStamp']
                        };
                        this['HttpPost'](aG['req']['cmd'], b4, function(b5) {
                            var b6 = b0['parseHttpData'](b5);
                            if (b6['code'] == aH['success']) {
                                var b7 = b6['ApkDownload'];
                                a7['OS']['IOS'] == a7['os'] && (b7 = b6['IosDownload']);
                                var b8 = {
                                    'downloadUrl': b7,
                                    'downloadReward': b6['LoginPresent']
                                };
                                an['Instance']['setServerState'](b0, b8);
                            }
                        });
                    }
                }
                ,
                aZ['on_s2c_server_cfg'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        var b1 = b0['data']
                          , b2 = !az['bPreview'];
                        as['StringIsNullOrEmpty'](b1['DefaultCurrency']) || (az['currency'] = b1['DefaultCurrency']);
                        var b3 = {
                            'minCharge': b1['ChargeMinAmount'],
                            'maxCharge': b1['ChargeMaxAmount'],
                            'coinSymbol': b1['DefaultCurrencySymbol'],
                            'reward4Bind': b1['BindMobileRewardMoney'],
                            'reward4FirstCharge': b1['FirstRechangeGiftCoin'],
                            'bOpenInviteGift': 0x1 == b1['sharereferStatus'] && b2,
                            'bOpenSign': 0x1 == b1['signmode'],
                            'nameMaxLen': b1['MaxNickNameLen'],
                            'bMallBindPhone': 0x1 == b1['bindmobileshop']
                        };
                        an['Instance']['setServerState'](this, b3);
                        var b4 = {
                            'changeHeadCount': b1['ModifyLogoTimes'],
                            'changeNameCount': b1['ModifyNickNameTimes']
                        };
                        if (an['Instance']['setPlayerState'](this, b4),
                        b2)
                            this['setBindTipsPopJob'](),
                            this['showFirstOfferPop']();
                        else
                            an['Instance']['setPlayerState'](this, {
                                'bFirstRecharge': !0x1
                            });
                    }
                    this['view']['refreshDynamicEntry']();
                }
                ,
                aZ['setBindTipsPopJob'] = function() {
                    var b0 = this;
                    if (an['Instance']['Server']['reward4Bind'] > 0x0 && as['StringIsNullOrEmpty'](an['Instance']['State']['player']['phone'])) {
                        var b1 = new aL(aM['bindTips'],0x2,0x0);
                        b1['canPopUp'] = function() {
                            var b2 = an['Instance']['State']['player']['phone'];
                            return as['StringIsNullOrEmpty'](b2);
                        }
                        ,
                        b1['showView'] = function() {
                            b0['showBindTips']();
                        }
                        ,
                        this['onAddLobbyPop'](ap['add_lobby_pop'], b1);
                    }
                }
                ,
                aZ['showBindTips'] = function() {
                    var b0 = this
                      , b1 = {
                        'onAdded': function(b2, b3) {
                            b2['active'] = !0x1,
                            null == b0['bindTips'] && (b0['bindTips'] = b2['getComponent'](aE),
                            b0['bindTips']['Init'](aj['modID']['bindTip'], b0['messager'])),
                            b0['bindTips']['show'](),
                            b0['bindTips']['refresh'](an['Instance']['Server']['reward4Bind']);
                        }
                    };
                    ag['gui']['open'](ah['bindTips'], null, b1);
                }
                ,
                aZ['showSecondOfferPop'] = function() {
                    var b0 = this
                      , b1 = new aL(aM['secondOffer'],0x2,0x0);
                    b1['canPopUp'] = function() {
                        return an['Instance']['Server']['bOpenSecondOffer'];
                    }
                    ,
                    b1['showView'] = function() {
                        b0['enterLobbyMod'](ae['store'], 0x2);
                    }
                    ,
                    this['onAddLobbyPop'](ap['add_lobby_pop'], b1);
                }
                ,
                aZ['showFirstOfferPop'] = function() {
                    var b0 = this
                      , b1 = an['Instance']['State']['player']['bFirstRecharge'] && an['Instance']['Server']['reward4FirstCharge'] > 0x0
                      , b2 = new aL(aM['firstOffer'],0x2,0x0);
                    b2['canPopUp'] = function() {
                        return b1;
                    }
                    ,
                    b2['showView'] = function() {
                        b0['enterLobbyMod'](ae['store'], 0x1);
                    }
                    ,
                    this['onAddLobbyPop'](ap['add_lobby_pop'], b2);
                    var b3 = {
                        'bFirstRecharge': b1
                    };
                    an['Instance']['setPlayerState'](this, b3);
                }
                ,
                aZ['on_s2c_red_point'] = function(b0) {
                    var b1 = b0['data'];
                    b1['points'] = b1['points'] || [];
                    for (var b2, b3 = new Map(), b4 = a4(b1['points']); !(b2 = b4())['done']; ) {
                        var b5 = b2['value'];
                        b3['set'](b5['tag'], b5['num']);
                    }
                    an['Instance']['updateRedPoints'](this, b3);
                }
                ,
                aZ['on_s2c_lobby_marquee'] = function(b0) {
                    if (b0['code'] == ar['success'] && !az['bPreview']) {
                        var b1 = b0['data'];
                        null != b1['marqueelist'] && at['instance']['pushBroadcast'](b1['marqueelist'], this['bReady']);
                    }
                }
                ,
                aZ['reqGameRoomList'] = function(b0) {
                    this['showLoading'](!0x0);
                    var b1 = Date['now']();
                    if (this['lastReqGameRoomsTime'] > 0x0 && b1 - this['lastReqGameRoomsTime'] < 0x2710) {
                        var b2 = au['getLangByTag']('bad_net_work', ae['lobby']);
                        ao['toast'](b2);
                    } else {
                        this['lastReqGameRoomsTime'] = b1;
                        var b3 = {
                            'gameId': b0
                        };
                        this['netRequest'](ak['c2s_game_room'], b3);
                    }
                }
                ,
                aZ['on_s2c_game_room'] = function(b0) {
                    if (this['showLoading'](!0x1),
                    this['lastReqGameRoomsTime'] = 0x0,
                    b0['code'] == ar['success']) {
                        var b1 = b0['data']['rooms'];
                        if (null == b1 || 0x0 == b1['length'])
                            return;
                        if (0x1 == b1['length']) {
                            var b2 = b1[0x0];
                            this['reqEnterGameRoom'](b2);
                        } else
                            b1 = b1['sort'](function(b3, b4) {
                                return b3['screenType'] - b4['screenType'];
                            }),
                            this['view']['GameRooms']['showRooms'](b1);
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20on_s2c_game_room:error\x20' + b0['code']),
                        this['showErrorCode'](b0['code']);
                }
                ,
                aZ['reqEnterGameRoom'] = function(b0) {
                    this['showLoading'](!0x0);
                    var b1 = Date['now']();
                    if (this['lastReqRoomInfoTime'] > 0x0 && b1 - this['lastReqRoomInfoTime'] < 0x2710) {
                        var b2 = au['getLangByTag']('be_req_enter_room', ae['lobby']);
                        ao['toast'](b2);
                    } else {
                        var b3 = an['Instance']['PlayerBaseInfo'];
                        if (b3['vip'] < b0['vipLimit']) {
                            this['showLoading'](!0x1);
                            var b4 = au['getLangByID'](av['game_vip_less']);
                            ao['toast'](b4);
                        } else {
                            if (b3['coin'] < b0['lessPoint'])
                                this['showLoading'](!0x1),
                                b4 = au['getLangByID'](av['sitdown_error_no_enough_money']),
                                ao['toast'](b4);
                            else {
                                var b5 = {
                                    'gameId': b0['gameId'],
                                    'roomId': b0['roomId']
                                };
                                this['netRequest'](ak['c2s_enter_room'], b5),
                                this['lastReqRoomInfoTime'] = b1;
                            }
                        }
                    }
                }
                ,
                aZ['on_s2c_enter_room'] = function(b0) {
                    if (this['showLoading'](!0x1),
                    this['lastReqRoomInfoTime'] = 0x0,
                    b0['code'] == ar['success']) {
                        if (null != ao['gamePlatform']['EnterParams'])
                            return void ao['log']['logBusiness']('lobbyMain\x20on_s2c_enter_room:is\x20entering\x20game' + ao['gamePlatform']['EnterParams']['gameID']);
                        var b1 = b0['data'];
                        this['tryEnterGameRoom'](b1);
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20on_s2c_enter_room:error\x20' + b0['code']),
                        this['showErrorCode'](b0['code']);
                }
                ,
                aZ['tryEnterGameRoom'] = function(b0) {
                    if (null == b0)
                        return !0x1;
                    var b1 = b0['gameNameId']
                      , b2 = aR[b1];
                    if (null == b2 || 0x0 == b2['open'])
                        return !0x1;
                    if (as['StringIsNullOrEmpty'](b0['serverIp']))
                        return !0x1;
                    var b3 = an['Instance']['Player']
                      , b4 = b0['socketPort'] > 0x0 ? b0['socketPort'] : null
                      , b5 = {
                        'vipLv': b3['vip'],
                        'events': an['Instance']['Server']['attrEvent'],
                        'playLimit': 0x1 == b0['limitbet']
                    }
                      , b6 = {
                        'gameID': b0['gameNameId'],
                        'session': b3['session'],
                        'host': b0['serverIp'],
                        'port': b4,
                        'lobby': b5
                    }
                      , b7 = 'name_' + b0['gameNameId'];
                    b7 = au['getLangByTag'](b7),
                    as['setGameTitle'](b7),
                    this['view']['GameRooms']['close'](null, !0x0),
                    ao['Loading']['ShowLoading'](!0x0),
                    ao['gamePlatform']['enterGame'](b6),
                    ag['message']['dispatchEvent'](ap['game_stage_change'], aq['game'], aq['lobby']);
                }
                ,
                aZ['on_game_stage_change'] = function(b0, b1, b2) {
                    var b3, b4, b5;
                    if (b1 == aq['lobby']) {
                        if (ag['audio']['playMusic']('audio/lobby', null, ae['game']['toString']()),
                        b2 == aq['game']) {
                            var b6 = az['connection']['tcp']['host']
                              , b7 = az['connection']['tcp']['port'];
                            aw['Instance']['Connect'](ax['Lobby'], b6, b7),
                            this['view']['show'](),
                            this['view']['refresh'](!0x1),
                            as['setGameTitle'](az['gameTitle']);
                        }
                    } else
                        b2 == aq['lobby'] && (aw['Instance']['Close'](ax['Lobby'], 0x3e8, 'enter\x20game'),
                        this['view']['close'](),
                        null == (b3 = this['bindTips']) || b3['close'](null, !0x0),
                        null == (b4 = this['downloadTips']) || b4['close'](null, !0x0),
                        this['updateLobbyState'](!0x1),
                        b1 == aq['login'] && (this['bAllowEnterLobby'] = !0x1,
                        null == (b5 = this['popMager']) || b5['resetPopFlag']()));
                }
                ,
                aZ['OnSocketConnected'] = function(b0, b1, b2) {
                    if (b1 == ax['Lobby'] && an['Instance']['Account']['logined']) {
                        if (b2) {
                            var b3, b4;
                            if ((null == (b3 = this['loadModQueue']) ? void 0x0 : b3['size']) > 0x0)
                                null == (b4 = this['loadModQueue']) || b4['play']();
                            ao['log']['logBusiness']('game\x20back\x20to\x20lobby:connect\x20success'),
                            this['on_notify_session_overdue'](null);
                        } else
                            console['log']('game\x20back\x20to\x20lobby:verify\x20fail');
                    }
                }
                ,
                aZ['OnSocketClose'] = function(b0, b1) {
                    b1 == ax['Lobby'] && an['Instance']['Account']['logined'];
                }
                ,
                aZ['OnSocketReconnectFailed'] = function(b0, b1) {
                    if (b1 == ax['Lobby'] && an['Instance']['Account']['logined']) {
                        var b2 = av['error'];
                        b2 = au['getLangByID'](b2);
                        var b3 = av['netBreak'];
                        b3 = au['getLangByID'](b3);
                        var b4 = {
                            'txt': au['getLangByID'](av['reconnect']),
                            'click': function() {
                                var b5 = az['connection']['tcp']['host']
                                  , b6 = az['connection']['tcp']['port'];
                                aw['Instance']['Connect'](ax['Lobby'], b5, b6);
                            }
                        };
                        ay['Show'](b2, b3, b4);
                    }
                }
                ,
                aZ['reqEnterGame'] = function(b0, b1) {
                    this['reqGameRoomList'](b1);
                }
                ,
                aZ['on_notify_session_overdue'] = function(b0) {
                    this['showLoading'](!0x0),
                    (an['Instance']['setAccountState'](this, {
                        'logined': !0x1
                    }),
                    this['updateLobbyState'](!0x1));
                    var b1 = an['Instance']['State']['player']
                      , b2 = {
                        'uid': b1['id'],
                        'deviceCode': an['Instance']['State']['deviceCode'],
                        'session': b1['session']
                    };
                    this['netRequest'](ak['c2s_session_verify'], b2);
                }
                ,
                aZ['on_s2c_session_verify'] = function(b0) {
                    if (this['showLoading'](!0x1),
                    b0['code'] == ar['success']) {
                        var b1 = b0['data'];
                        this['updatePlayerInfo'](b1),
                        this['reqLobbyBaseData'](),
                        this['reqLobbyExData'](),
                        this['updateLobbyState'](!0x0);
                    } else
                        console['log']('lobbyMain\x20on_s2c_session_verify:login\x20fail' + b0['code']),
                        this['showErrorCode'](b0['code'], !0x0),
                        b0['code'] == al['error_code']['session_error'] && ag['message']['dispatchEvent'](ap['game_stage_change'], aq['login'], aq['lobby']);
                }
                ,
                aZ['on_notify_big_win'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        var b1 = b0['data'];
                        if (null == b1['noticelist'] || 0x0 == b1['noticelist']['length'])
                            return;
                        at['instance']['pushWinner'](b1['noticelist'], this['bReady']);
                    }
                }
                ,
                aZ['on_notify_kick_out'] = function(b0) {
                    var b1 = au['getLangByTag']('tips', ae['lobby'])
                      , b2 = 0x1 == b0['code'] ? 'replace' : 'kickout';
                    b2 = au['getLangByTag'](b2, ae['lobby']);
                    var b3 = {
                        'txt': au['getLangByID'](av['ok']),
                        'click': null
                    };
                    ay['Show'](b1, b2, b3),
                    this['view']['GameRooms']['close'](null, !0x0),
                    ag['message']['dispatchEvent'](ap['game_stage_change'], aq['login'], aq['lobby']);
                }
                ,
                aZ['on_notify_user_info_update'] = function(b0) {
                    var b1 = this;
                    if (b0['code'] == ar['success']) {
                        var b2 = b0['data']
                          , b3 = an['Instance']['Player']['coin']
                          , b4 = function() {
                            var b6 = {
                                'name': b2['name'],
                                'head': b2['logoId'],
                                'coin': b2['money'],
                                'vip': b2['vipLevel'],
                                'vipExp': b2['vipExp']
                            };
                            0x0 == as['StringIsNullOrEmpty'](b2['areaCode']) && (b6['areaNo'] = b2['areaCode']),
                            0x0 == as['StringIsNullOrEmpty'](b2['phoneNo']) && (b6['phone'] = b2['phoneNo']),
                            an['Instance']['setPlayerState'](b1, b6);
                        };
                        if (b3 != b2['money']) {
                            if (0x3 == b2['type'] || b2['changed'] <= 0x0)
                                b4();
                            else {
                                var b5 = [{
                                    'type': aC['coin'],
                                    'num': b2['changed']
                                }];
                                aD['Show'](b5, function() {
                                    b4();
                                    var b6 = new aL(aM['stageCharge'],0x2,0x0);
                                    b6['canPopUp'] = function() {
                                        return an['Instance']['Server']['bShowStageCharge'];
                                    }
                                    ,
                                    b6['showView'] = function() {
                                        b1['enterLobbyMod'](ae['stageRecharge']);
                                    }
                                    ,
                                    b1['onAddLobbyPop'](ap['add_lobby_pop'], b6, !0x0);
                                });
                            }
                        }
                    }
                }
                ,
                aZ['tryTrackRevenueEvent'] = function(b0, b1) {
                    var b2 = an['Instance']['PlayerBaseInfo']['id']['toString']()
                      , b3 = {
                        'id': b2,
                        'cid': az['CurrentChannel'],
                        'domian': az['IpInfo']['href']
                    };
                    if (as['StringIsNullOrEmpty'](az['webEventCode'])) {
                        if (!az['isS2S']) {
                            var b4 = an['Instance']['Server']['attrEvent'];
                            if (null != b4) {
                                var b5 = b4['get'](b0);
                                null != b5 ? ao['ThirdAdapter']['trackRevenueEvent'](b5, b2, b1, null, b3) : ao['log']['logBusiness']('trackRevenueEvent\x20failed:could\x20not\x20found\x20eventKey');
                            } else
                                ao['log']['logBusiness']('trackRevenueEvent\x20failed:could\x20not\x20found\x20eventMap');
                        }
                    } else
                        ao['ThirdAdapter']['trackRevenueEvent'](b0, b2, b1, null, b3);
                }
                ,
                aZ['on_notify_recharge_info'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        var b1 = b0['data']
                          , b2 = 0x1 == b1['firstRecharge'] ? aF['firstCharge'] : aF['charge']
                          , b3 = b1['rechargeCash'];
                        this['tryTrackRevenueEvent'](b2, b3);
                    }
                }
                ,
                aZ['on_s2c_cashFree_newHelp'] = function(b0) {
                    if (0x0 == b0['code']) {
                        var b1 = b0['data'];
                        ao['log']['logBusiness'](b1, '免费领现金\x20新的助力'),
                        this['enterLobbyMod'](ae['cashFree'], b1);
                    }
                }
                ,
                aZ['on_s2c_cashFree_show'] = function(b0) {
                    var b1 = this;
                    if (0x0 == b0['code']) {
                        var b2;
                        this['showLoading'](!0x1);
                        var b3 = b0['data'];
                        ao['log']['logBusiness'](b3, '免费领现金\x20服务器推送');
                        var b4 = b3['status']
                          , b5 = {
                            'freeCashStatus': b4,
                            'freeCashMoney': b3['complatemoney']
                        };
                        if (an['Instance']['setServerState'](this, b5),
                        0x0 == b4) {
                            var b6 = new aL(aM['cashFreeFirst'],0x2,0x0);
                            b6['canPopUp'] = function() {
                                return 0x0 == an['Instance']['Server']['freeCashStatus'] && '0' == ag['storage']['get'](az['storageKey']['freeCashStatus'], '0');
                            }
                            ,
                            b6['showView'] = function() {
                                b1['enterLobbyMod'](ae['cashFree']);
                            }
                            ,
                            this['onAddLobbyPop'](ap['add_lobby_pop'], b6);
                        } else
                            0x2 == b4 && ag['message']['dispatchEvent'](ap['activityClose'], ae['cashFree']);
                        null == (b2 = this['view']) || b2['refreshDynamicEntry']();
                    }
                }
                ,
                aZ['on_s2c_show_stage'] = function(b0) {
                    var b1 = this
                      , b2 = b0['code'];
                    if (0x0 == b2) {
                        var b3;
                        an['Instance']['setServerState'](this, {
                            'bShowStageCharge': !0x0
                        });
                        var b4 = new aL(aM['stageCharge'],0x2,0x0);
                        b4['canPopUp'] = function() {
                            return an['Instance']['Server']['bShowStageCharge'];
                        }
                        ,
                        b4['showView'] = function() {
                            b1['enterLobbyMod'](ae['stageRecharge']);
                        }
                        ,
                        this['onAddLobbyPop'](ap['add_lobby_pop'], b4),
                        null == (b3 = this['view']) || b3['refreshDynamicEntry']();
                    } else {
                        if (0x4 == b2) {
                            var b5;
                            an['Instance']['setServerState'](this, {
                                'bShowStageCharge': !0x1
                            }),
                            null == (b5 = this['view']) || b5['refreshDynamicEntry']();
                        } else
                            ao['log']['logBusiness']('on_s2c_show_stage\x20' + b2);
                    }
                }
                ,
                aZ['on_s2c_notify_goods'] = function(b0) {
                    if (b0['code'] == ar['success']) {
                        var b1, b2 = b0['data'], b3 = {
                            'bOpenFirstOffer': 0x1 == b2['firstgift'],
                            'bOpenSecondOffer': 0x1 == b2['secondgift']
                        };
                        an['Instance']['setServerState'](this, b3);
                        var b4 = {
                            'bFirstRecharge': b2['firstgift']
                        };
                        an['Instance']['setPlayerState'](this, b4),
                        null == (b1 = this['view']) || b1['refreshDynamicEntry'](),
                        b2['firstgift'] ? this['showFirstOfferPop']() : b2['secondgift'] && this['showSecondOfferPop']();
                    }
                }
                ,
                aZ['GetSubModByID'] = function(b0) {
                    switch (b0) {
                    case aj['modID']['view']:
                        return this['view'];
                    case aj['modID']['bindTip']:
                        return this['bindTips'];
                    }
                }
                ,
                aZ['onAddLobbyPop'] = function(b0, b1, b2, b3) {
                    void 0x0 === b2 && (b2 = !0x1),
                    void 0x0 === b3 && (b3 = !0x0),
                    this['popMager']['addPopJob'](b1, b2, b3);
                }
                ,
                aZ['onOpenLobbyPop'] = function(b0, b1, b2) {
                    this['popMager']['onPopup'](b1, b2);
                }
                ,
                aZ['onCloseLobbyPop'] = function(b0, b1, b2) {
                    this['popMager']['onClose'](b1, b2);
                }
                ,
                aZ['updateLobbyState'] = function(b0) {
                    this['bReady'] = b0,
                    b0 && at['instance']['resetWidget'](!0x0, 0x30c, new aa(0x0,0x6e)),
                    ag['message']['dispatchEvent'](ap['notify_show'], b0),
                    this['loopJobs'](b0),
                    this['popMager']['pausePop'](!b0, !0x0),
                    b0 ? this['showDownloadEntry']() : (ag['gui']['remove'](ah['add2main']),
                    ag['gui']['remove'](ah['downloadEntry'], !0x1));
                }
                ,
                aZ['updatePlayerInfo'] = function(b0) {
                    var b1 = {
                        'session': b0['session'],
                        'id': b0['uid'],
                        'name': b0['name'],
                        'head': b0['logoId'],
                        'coin': b0['money'],
                        'vip': b0['vipLevel'],
                        'vipExp': b0['vipExp'],
                        'phone': b0['phoneNo'],
                        'areaNo': b0['areaCode'],
                        'bFirstRecharge': 0x1 == b0['bFirstRecharge'],
                        'bBindReferrer': 0x1 == b0['bBindSourceId'],
                        'level': b0['vipLevel'],
                        'lan': b0['lan'],
                        'realName': b0['RealName'],
                        'email': b0['Email']
                    };
                    an['Instance']['setPlayerState'](this, b1),
                    an['Instance']['setAccountState'](this, {
                        'logined': !0x0
                    });
                    var b2 = Math['floor'](Date['now']() / 0x3e8);
                    ag['storage']['set'](az['storageKey']['lastLoginTime'], b2);
                    var b3 = b1['id'];
                    ag['storage']['set'](az['storageKey']['loginUID'], b3);
                    var b4 = b1['session'];
                    ag['storage']['set'](az['storageKey']['loginSession'], b4);
                }
                ,
                aZ['enterLobbyMod'] = function(b0) {
                    var b1, b2;
                    if (b0 != ae['lobby']) {
                        ao['log']['logBusiness']('lobbyMain\x20enterLobbyMod:\x20' + b0);
                        for (var b3 = ((b1 = {})[0xa * ae['mail']] = aN['mail'],
                        b1[0xa * ae['vip']] = aN['vip'],
                        b1[0xa * ae['activity']] = aN['activity'],
                        b1[0xa * ae['turntable']] = aN['roulette'],
                        b1[0xa * ae['turntable'] + 0x1] = aN['benefits'],
                        b1[0xa * ae['sign']] = [aN['sign'], aN['signex']],
                        b1[0xa * ae['agent'] + 0x1] = aN['sharerefer'],
                        b1[0xa * ae['cashFree']] = aN['cashFree'],
                        b1), b4 = arguments['length'], b5 = new Array(b4 > 0x1 ? b4 - 0x1 : 0x0), b6 = 0x1; b6 < b4; b6++)
                            b5[b6 - 0x1] = arguments[b6];
                        var b7 = 0xa * b0 + b5
                          , b8 = b3[b7];
                        if (b8) {
                            var b9 = new Map();
                            if (Array['isArray'](b8))
                                for (var ba, bb = a4(b8); !(ba = bb())['done']; ) {
                                    var bc = ba['value'];
                                    b9['set'](aO[bc], 0x0);
                                }
                            else
                                b9['set'](aO[b8], 0x0);
                            an['Instance']['updateRedPoints'](this, b9);
                        }
                        (b2 = this['hub'])['enterByModID']['apply'](b2, [b0]['concat'](b5));
                    } else
                        ao['log']['logBusiness']('lobbyMain\x20enterLobbyMod:u\x20are\x20alreay\x20in\x20lobby');
                }
                ,
                aZ['showErrorCode'] = function(b0, b1) {
                    if (void 0x0 === b1 && (b1 = !0x1),
                    null == this['errorMsg']) {
                        this['errorMsg'] = {};
                        for (var b2 = 0x0, b3 = Object['keys'](am['error_code']); b2 < b3['length']; b2++) {
                            var b4 = b3[b2]
                              , b5 = am['error_code'][b4];
                            this['errorMsg'][b5] = au['getLangByTag'](b4, ae['lobby']);
                        }
                        for (var b6 = 0x0, b7 = Object['keys'](al['error_code']); b6 < b7['length']; b6++) {
                            var b8 = b7[b6]
                              , b9 = 0x64 + al['error_code'][b8];
                            this['errorMsg'][b9] = au['getLangByTag'](b8, ae['lobby']);
                        }
                    }
                    b1 && (b0 += 0x64),
                    aX['prototype']['showErrorCode']['call'](this, b0);
                }
                ,
                aY;
            }(ad));
            aW['ID'] = ae['lobby'],
            aB['Instance']['registerModule'](ae['lobby'], aW),
            a5['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyMod.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gRootMod.ts', './AsyncQueue.ts', './base64.mjs', './webGame.ts', './netAdapter.ts', './Oops.ts', './lobbyState.ts'], function(b) {
    var g, h, j, k, m, q, v, w, x, y, z, A, B;
    return {
        'setters': [function(C) {
            g = C['inheritsLoose'],
            h = C['asyncToGenerator'],
            j = C['regeneratorRuntime'];
        }
        , function(C) {
            k = C['cclegacy'],
            m = C['_decorator'];
        }
        , function(C) {
            q = C['gRootMod'];
        }
        , function(C) {
            v = C['AsyncQueue'];
        }
        , function(C) {
            w = C['Base64'];
        }
        , function(C) {
            x = C['webGame'];
        }
        , function(C) {
            y = C['netAdapter'],
            z = C['NetChannelType'];
        }
        , function(C) {
            A = C['oops'];
        }
        , function(C) {
            B = C['lobbyState'];
        }
        ],
        'execute': function() {
            var C, D;
            k['_RF']['push']({}, 'a1139MWdWBE9aLfBb2+QUuF', 'lobbyMod', void 0x0);
            var E = m['ccclass'];
            m['property'],
            b('lobbyMod', E('lobbyMod')(((D = function(F) {
                function G() {
                    for (var I, J = arguments['length'], K = new Array(J), L = 0x0; L < J; L++)
                        K[L] = arguments[L];
                    return (I = F['call']['apply'](F, [this]['concat'](K)) || this)['errorMsg'] = {},
                    I['hub'] = null,
                    I;
                }
                g(G, F);
                var H = G['prototype'];
                return H['onInit'] = function(I, J) {
                    var K = this;
                    this['hub'] = I;
                    var L = new v();
                    this['showLoading'](!0x0),
                    this['loadBundle'](L),
                    this['loadView'](L),
                    this['actionOnLoaded'](L),
                    L['complete'] = h(j()['mark'](function M() {
                        return j()['wrap'](function(N) {
                            for (; ; )
                                switch (N['prev'] = N['next']) {
                                case 0x0:
                                    K['showLoading'](!0x1),
                                    J(K);
                                case 0x2:
                                case 'end':
                                    return N['stop']();
                                }
                        }, M);
                    })),
                    L['play']();
                }
                ,
                H['loadBundle'] = function(I) {}
                ,
                H['loadView'] = function(I) {}
                ,
                H['actionOnLoaded'] = function(I) {}
                ,
                H['onEnter'] = function() {}
                ,
                H['onExit'] = function() {}
                ,
                H['HttpPost'] = function(I, J, K, L, M) {
                    void 0x0 === M && (M = !0x0);
                    var N = null != J ? JSON['stringify'](J) : null
                      , O = null != N ? w['encode'](N) : null;
                    if (M) {
                        var P = B['Instance']['getLocalToken']();
                        J['token'] = P['token'],
                        J['timestamp'] = P['syncStamp'];
                    }
                    null == L && (L = this['HttpErrorHandler']['bind'](this)),
                    x['post'](I, O, K, L);
                }
                ,
                H['parseHttpData'] = function(I) {
                    var J = I['responseText'];
                    return null != J ? JSON['parse'](J) : null;
                }
                ,
                H['HttpErrorHandler'] = function(I) {
                    var J = 'HttpError:' + I['event'];
                    console['warn'](J),
                    x['toast'](J);
                }
                ,
                H['addNetProcess'] = function(I, J) {
                    y['Instance']['AddProcess'](z['Lobby'], I, J, this);
                }
                ,
                H['removeNetProcess'] = function(I, J) {
                    y['Instance']['RemoveProcess'](z['Lobby'], I, J, this);
                }
                ,
                H['netRequest'] = function(I, J, K, L, M) {
                    return void 0x0 === L && (L = !0x1),
                    void 0x0 === M && (M = !0x1),
                    y['Instance']['Request'](z['Lobby'], I, J, K, L, M);
                }
                ,
                H['showErrorCode'] = function(I) {
                    var J = this['errorMsg'][I] || 'Error:code[' + I + ']';
                    A['gui']['toast'](J);
                }
                ,
                H['showLoading'] = function(I, J, K) {
                    void 0x0 === K && (K = 0xa),
                    x['showNetLoading'](I, J, K);
                }
                ,
                H['skip2Module'] = function(I) {
                    for (var J, K = arguments['length'], L = new Array(K > 0x1 ? K - 0x1 : 0x0), M = 0x1; M < K; M++)
                        L[M - 0x1] = arguments[M];
                    (J = this['hub'])['enterByModID']['apply'](J, [I]['concat'](L));
                }
                ,
                H['reqRedPoint'] = function(I) {}
                ,
                G;
            }(q))['ID'] = void 0x0,
            C = D)) || C),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyModHub.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './platformData.ts', './lobbyState.ts', './webGame.ts', './CustomEventDefine.ts', './Oops.ts'], function(b) {
    var c, d, f, g, h, j, k, m, p;
    return {
        'setters': [function(q) {
            c = q['createClass'];
        }
        , function(q) {
            d = q['cclegacy'],
            f = q['_decorator'];
        }
        , function(q) {
            g = q['PModuleID'];
        }
        , function(q) {
            h = q['lobbyState'];
        }
        , function(q) {
            j = q['webGame'];
        }
        , function(q) {
            k = q['gameStage'],
            m = q['WebGameEvent'];
        }
        , function(q) {
            p = q['oops'];
        }
        ],
        'execute': function() {
            var q, v;
            d['_RF']['push']({}, 'e2579EigYlOc6/5LchBQ//P', 'lobbyModHub', void 0x0);
            var w = f['ccclass'];
            f['property'],
            b('lobbyModHub', w('lobbyModHub')(((v = (function() {
                function x() {
                    this['id2Mod'] = {},
                    this['modules'] = new Map(),
                    this['modules'] = new Map(),
                    p['message']['on'](m['game_stage_change'], this['on_game_stage_change'], this);
                }
                var y = x['prototype'];
                return y['registerModule'] = function(z, A) {
                    null != z && null != A ? this['id2Mod'][z] = A : j['log']['logConfig']('lobbyModHub\x20registerModule\x20error,\x20id:' + z + '\x20ctor:' + A);
                }
                ,
                y['enterByModID'] = function(z) {
                    for (var A = arguments['length'], B = new Array(A > 0x1 ? A - 0x1 : 0x0), C = 0x1; C < A; C++)
                        B[C - 0x1] = arguments[C];
                    if (this['modules']['has'](z)) {
                        var D = this['modules']['get'](z);
                        D['onEnter']['apply'](D, B);
                    } else {
                        var E = this['id2Mod'][z];
                        null != E ? this['enter']['apply'](this, [E]['concat'](B)) : console['error']('lobbyModHub\x20enterByModID\x20error,\x20id:', z);
                    }
                }
                ,
                y['exitByModID'] = function(z) {
                    for (var A = arguments['length'], B = new Array(A > 0x1 ? A - 0x1 : 0x0), C = 0x1; C < A; C++)
                        B[C - 0x1] = arguments[C];
                    if (this['modules']['has'](z)) {
                        var D = this['modules']['get'](z);
                        D['onExit']['apply'](D, B);
                    } else {
                        var E = this['id2Mod'][z];
                        null != E ? this['exit']['apply'](this, [E]['concat'](B)) : console['error']('lobbyModHub\x20exitByModID\x20error,\x20id:', z);
                    }
                }
                ,
                y['enter'] = function(z) {
                    for (var A = arguments['length'], B = new Array(A > 0x1 ? A - 0x1 : 0x0), C = 0x1; C < A; C++)
                        B[C - 0x1] = arguments[C];
                    if (this['modules']['has'](z['ID'])) {
                        var D = this['modules']['get'](z['ID']);
                        D['onEnter']['apply'](D, B);
                    } else {
                        var E = new z();
                        h['Instance']['registerSetter'](E);
                        var F = function(G) {
                            G['onEnter']['apply'](G, B);
                        };
                        E['Init'](z['ID'], this, F),
                        this['modules']['set'](z['ID'], E);
                    }
                }
                ,
                y['exit'] = function(z) {
                    if (this['modules']['has'](z['ID'])) {
                        for (var A = this['modules']['get'](z['ID']), B = arguments['length'], C = new Array(B > 0x1 ? B - 0x1 : 0x0), D = 0x1; D < B; D++)
                            C[D - 0x1] = arguments[D];
                        A['onExit']['apply'](A, C);
                    }
                }
                ,
                y['getModule'] = function(z, A) {
                    var B = this['modules']['get'](z['ID']);
                    null == B ? ((B = new z())['Init'](z['ID'], this, A),
                    this['modules']['set'](z['ID'], B)) : null == A || A(B);
                }
                ,
                y['removeModule'] = function(z) {
                    var A = this['modules']['get'](z['ID']);
                    null != A && (h['Instance']['unregisterSetter'](A),
                    A['Dispose'](),
                    this['modules']['delete'](z['ID']));
                }
                ,
                y['on_game_stage_change'] = function(z, A, B) {
                    var C = this;
                    A != k['game'] && A != k['login'] || this['modules']['forEach'](function(D, E) {
                        E != g['lobby'] && E != g['login'] && (D['Dispose'](),
                        C['modules']['delete'](E));
                    });
                }
                ,
                c(x, null, [{
                    'key': 'Instance',
                    'get': function() {
                        return null == this['_instance'] && (this['_instance'] = new x()),
                        this['_instance'];
                    }
                }]),
                x;
            }()))['_instance'] = null,
            q = v)) || q),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyRoomItem.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts', './platformData.ts', './gComMod.ts', './utils.ts', './lobbyConfig.ts', './webGame.ts', './lobbyState.ts', './gMessageBox.ts'], function(d) {
    var j, k, q, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L;
    return {
        'setters': [function(M) {
            j = M['applyDecoratedDescriptor'],
            k = M['inheritsLoose'],
            q = M['initializerDefineProperty'],
            w = M['assertThisInitialized'];
        }
        , function(M) {
            x = M['cclegacy'],
            z = M['_decorator'],
            A = M['Label'],
            B = M['Button'],
            C = M['Node'];
        }
        , function(M) {
            D = M['LanguageManager'];
        }
        , function(M) {
            E = M['PModuleID'];
        }
        , function(M) {
            F = M['gComMod'];
        }
        , function(M) {
            G = M['utils'];
        }
        , function(M) {
            H = M['Lobby'];
        }
        , function(M) {
            I = M['webGame'],
            J = M['CoinsFormat'];
        }
        , function(M) {
            K = M['lobbyState'];
        }
        , function(M) {
            L = M['MsgBoxManager'];
        }
        ],
        'execute': function() {
            var N, O, Q, U, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8;
            x['_RF']['push']({}, 'f87e2idguxLzJ+lBLffzOve', 'lobbyRoomItem', void 0x0);
            var a9 = z['ccclass']
              , aa = z['property'];
            d('lobbyRoomItem', (N = a9('lobbyRoomItem'),
            O = aa({
                'type': A,
                'tooltip': '名字'
            }),
            Q = aa({
                'type': A,
                'tooltip': '玩家数'
            }),
            U = aa({
                'type': A,
                'tooltip': '投注'
            }),
            W = aa({
                'type': A,
                'tooltip': '携带'
            }),
            X = aa({
                'type': B,
                'tooltip': '开始'
            }),
            Y = aa({
                'type': C,
                'tooltip': 'VIP节点'
            }),
            Z = aa({
                'type': A,
                'tooltip': 'vip等级'
            }),
            N((a2 = j((a1 = function(ab) {
                function ac() {
                    for (var ae, af = arguments['length'], ag = new Array(af), ah = 0x0; ah < af; ah++)
                        ag[ah] = arguments[ah];
                    return ae = ab['call']['apply'](ab, [this]['concat'](ag)) || this,
                    q(ae, 'lb_name', a2, w(ae)),
                    q(ae, 'lb_players', a3, w(ae)),
                    q(ae, 'lb_betting', a4, w(ae)),
                    q(ae, 'lb_balance', a5, w(ae)),
                    q(ae, 'btnPlay', a6, w(ae)),
                    q(ae, 'Vip', a7, w(ae)),
                    q(ae, 'lb_vip', a8, w(ae)),
                    ae['data'] = null,
                    ae;
                }
                k(ac, ab);
                var ad = ac['prototype'];
                return ad['onInit'] = function() {
                    G['ButtonBindClick'](this['btnPlay'], this['onClickPlay'], this);
                }
                ,
                ad['onClickPlay'] = function() {
                    var ae = this;
                    if (null != this['data']) {
                        var af = K['Instance']['PlayerBaseInfo'];
                        if (af['vip'] < this['data']['vipLimit'] || af['coin'] < this['data']['lessPoint']) {
                            var ag = D['getLangByTag']('tips', E['lobby'])
                              , ah = af['vip'] < this['data']['vipLimit'] ? 'enter_vip_limit' : 'enter_coin_limit';
                            ah = D['getLangByTag'](ah, E['lobby']);
                            var ai = {
                                'txt': D['getLangByTag']('close')
                            }
                              , aj = {
                                'txt': D['getLangByTag']('ok'),
                                'click': function() {
                                    ae['Call'](H['modID']['root'], H['msgID']['enterLobbyMod'], E['store']);
                                }
                            };
                            L['Show'](ag, ah, ai, aj);
                        } else
                            this['Call'](H['modID']['root'], H['msgID']['reqEntetRoom'], this['data']);
                    } else
                        I['log']['logBusiness']('room\x20data\x20is\x20null');
                }
                ,
                ad['reset'] = function(ae) {
                    var af = 'room_' + ae['screenType'];
                    af = D['getLangByTag'](af, E['lobby']),
                    this['lb_name']['string'] = af;
                    var ag = ae['vipLimit'] > 0x0;
                    this['Vip']['active'] = ag,
                    ag && (this['lb_vip']['string'] = 'VIP' + ae['vipLimit']),
                    this['lb_players']['string'] = ae['roomPlayers']['toString']();
                    var ah = ae['minPlayGold'] > 0x0 ? ae['minPlayGold'] : ae['basescore']
                      , ai = ae['maxPlayGold']
                      , aj = '';
                    aj = ah > 0x0 ? ai > ah ? I['FormatCoins'](ah, J['Unit'], !0x1) + '-' + I['FormatCoins'](ai, J['Unit'], !0x1) : '≥\x20' + I['FormatCoins'](ah, J['Unit'], !0x1) : ai > 0x0 ? '≤\x20' + I['FormatCoins'](ai, J['Unit'], !0x1) : D['getLangByTag']('any', E['lobby']),
                    this['lb_betting']['string'] = aj;
                    var ak = '';
                    ae['lessPoint'] > 0x0 ? (ak = I['FormatCoins'](ae['lessPoint'], J['Thousandths'], !0x1),
                    ak += '+') : ak = ae['lessPoint']['toString'](),
                    this['lb_balance']['string'] = ak,
                    this['data'] = ae;
                }
                ,
                ad['show'] = function(ae) {
                    this['node']['active'] = ae;
                }
                ,
                ac;
            }(F))['prototype'], 'lb_name', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a3 = j(a1['prototype'], 'lb_players', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = j(a1['prototype'], 'lb_betting', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a5 = j(a1['prototype'], 'lb_balance', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = j(a1['prototype'], 'btnPlay', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = j(a1['prototype'], 'Vip', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a8 = j(a1['prototype'], 'lb_vip', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a0 = a1)) || a0)),
            x['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyRoomList.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './Language.ts', './platformData.ts', './webGame.ts', './stringDefine.ts', './lobbyRoomItem.ts', './lobbyPopView.ts'], function(d) {
    var j, k, q, v, w, x, z, A, B, C, D, E, F, G, H, I, J;
    return {
        'setters': [function(K) {
            j = K['applyDecoratedDescriptor'],
            k = K['inheritsLoose'],
            q = K['initializerDefineProperty'],
            v = K['assertThisInitialized'];
        }
        , function(K) {
            w = K['cclegacy'],
            x = K['_decorator'],
            z = K['Label'],
            A = K['Button'],
            B = K['Node'],
            C = K['instantiate'];
        }
        , function(K) {
            D = K['utils'];
        }
        , function(K) {
            E = K['LanguageManager'];
        }
        , function(K) {
            F = K['PModuleID'];
        }
        , function(K) {
            G = K['webGame'];
        }
        , function(K) {
            H = K['stringDefine'];
        }
        , function(K) {
            I = K['lobbyRoomItem'];
        }
        , function(K) {
            J = K['lobbyPopView'];
        }
        ],
        'execute': function() {
            var K, M, N, O, Q, S, U, V, W, X, Y;
            w['_RF']['push']({}, '9137eWy87BGh4L0bbnmIVy0', 'lobbyRoomList', void 0x0);
            var Z = x['ccclass']
              , a0 = x['property'];
            d('lobbyRoomList', (K = Z('lobbyRoomList'),
            M = a0({
                'type': z,
                'tooltip': '标题'
            }),
            N = a0({
                'type': A,
                'tooltip': '关闭按钮'
            }),
            O = a0({
                'type': B,
                'tooltip': '房间列表根节点'
            }),
            Q = a0({
                'type': B,
                'tooltip': '模板预制件'
            }),
            K((V = j((U = function(a1) {
                function a2() {
                    for (var a4, a5 = arguments['length'], a6 = new Array(a5), a7 = 0x0; a7 < a5; a7++)
                        a6[a7] = arguments[a7];
                    return a4 = a1['call']['apply'](a1, [this]['concat'](a6)) || this,
                    q(a4, 'lbTitle', V, v(a4)),
                    q(a4, 'btnClose', W, v(a4)),
                    q(a4, 'listRoot', X, v(a4)),
                    q(a4, 'itemTemp', Y, v(a4)),
                    a4['items'] = [],
                    a4;
                }
                k(a2, a1);
                var a3 = a2['prototype'];
                return a3['onInit'] = function() {
                    D['ButtonBindClick'](this['btnClose'], this['close'], this);
                    for (var a4 = this['listRoot']['children'], a5 = 0x0; a5 < a4['length']; ++a5) {
                        var a6 = a4[a5]['getComponent'](I);
                        a6['Init'](this['getItemID'](a5), this['messager']),
                        a6['show'](!0x1),
                        this['items']['push'](a6);
                    }
                }
                ,
                a3['showRooms'] = function(a4) {
                    this['refresh'](a4),
                    this['show']();
                }
                ,
                a3['refresh'] = function(a4) {
                    if (null == a4 || 0x0 == a4['length'])
                        return G['log']['logBusiness']('game\x20room\x20list\x20is\x20empty'),
                        void this['close']();
                    var a5 = a4[0x0]['gameId']
                      , a6 = H['name_' + a5]
                      , a7 = 0x0;
                    null == a6 && (a6 = H['roomTitle'],
                    a7 = F['lobby']),
                    a6 = E['getLangByID'](a6, a7),
                    this['lbTitle']['string'] = a6;
                    for (var a8 = 0x0; a8 < a4['length']; ++a8) {
                        var a9 = this['items'][a8];
                        if (null == a9) {
                            var aa = C(this['itemTemp']);
                            aa['parent'] = this['listRoot'],
                            (a9 = aa['getComponent'](I))['Init'](this['getItemID'](a8), this['messager']),
                            this['items']['push'](a9);
                        }
                        a9['reset'](a4[a8]),
                        a9['show'](!0x0);
                    }
                    var ab = this['items']['length'];
                    if (ab > a4['length'])
                        for (var ac = a4['length']; ac < ab; ++ac) {
                            this['items'][ac]['show'](!0x1);
                        }
                }
                ,
                a3['getItemID'] = function(a4) {
                    return 0xa * this['ID'] + a4;
                }
                ,
                a2;
            }(J))['prototype'], 'lbTitle', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            W = j(U['prototype'], 'btnClose', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            X = j(U['prototype'], 'listRoot', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Y = j(U['prototype'], 'itemTemp', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            S = U)) || S)),
            w['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyState.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './CustomEventDefine.ts', './utils.ts', './NativeFun.ts', './appConfig.ts'], function(b) {
    var d, f, g, h, j, k, m, q, v, w, x;
    return {
        'setters': [function(y) {
            d = y['extends'],
            f = y['createForOfIteratorHelperLoose'],
            g = y['createClass'];
        }
        , function(y) {
            h = y['cclegacy'],
            j = y['_decorator'],
            k = y['sys'];
        }
        , function(y) {
            m = y['oops'];
        }
        , function(y) {
            q = y['WebGameEvent'];
        }
        , function(y) {
            v = y['utils'];
        }
        , function(y) {
            w = y['NativeFun'];
        }
        , function(y) {
            x = y['appConfig'];
        }
        ],
        'execute': function() {
            var y, z;
            h['_RF']['push']({}, '93d2bnZG0RDxJ4swPQrpzzP', 'lobbyState', void 0x0);
            var A = j['ccclass'];
            j['property'],
            b('lobbyState', A('lobbyState')(((z = (function() {
                var B = C['prototype'];
                function C() {
                    this['setters'] = new Set(),
                    this['state'] = null,
                    this['reset']();
                }
                return B['reset'] = function() {
                    var D = {
                        'games': void 0x0,
                        'jackpots': void 0x0,
                        'redPoints': void 0x0,
                        'player': {
                            'id': 0x0,
                            'name': '',
                            'head': 0x0,
                            'coin': 0x0,
                            'level': 0x0,
                            'lan': '',
                            'vip': 0x0,
                            'vipExp': 0x0,
                            'areaNo': '',
                            'phone': '',
                            'session': ''
                        },
                        'account': {
                            'loginType': 0x0,
                            'loginAccount': '',
                            'loginPassword': '',
                            'logined': !0x1
                        },
                        'serConfig': {
                            'syncStamp': 0x0,
                            'localStamp': 0x0,
                            'adType': 0x0,
                            'minCharge': 0x0,
                            'maxCharge': 0x0,
                            'coinSymbol': '$',
                            'reward4Bind': 0x0,
                            'reward4FirstCharge': 0x0,
                            'bOpenInviteGift': !0x1,
                            'bSupportHost': !0x1,
                            'hostList': [],
                            'bOpenSign': !0x1,
                            'bShowStageCharge': !0x1,
                            'freeCashStatus': 0x2
                        }
                    };
                    if (k['isBrowser'] || k['os'] == k['OS']['WINDOWS']) {
                        var E = m['storage']['get'](x['storageKey']['webDeviceCode'], '');
                        if (v['StringIsNullOrEmpty'](E))
                            E = k['browserType'] + '_' + k['os'] + '_' + Math['floor'](0x3e8 * Math['random']()) + '_' + Date['now']()['toString'](),
                            m['storage']['set'](x['storageKey']['webDeviceCode'], E);
                        D['deviceCode'] = E;
                    } else
                        k['isNative'] && (D['deviceCode'] = w['getDevicesID']())
                    D['deviceCode'] = w['getDevicesID']() //☠️ Bypass device id
                    this['state'] = D;
                }
                ,
                B['setGameState'] = function(D, E) {
                    this['canUpdate'](D) ? this['state'] = d({}, this['state'], E) : console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['setPlayerState'] = function(D, E) {
                    this['canUpdate'](D) ? (this['state']['player'] = d({}, this['state']['player'], E),
                    m['message']['dispatchEvent'](q['update_player_info'], this['PlayerBaseInfo'])) : console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['setAccountState'] = function(D, E) {
                    this['canUpdate'](D) ? this['state']['account'] = d({}, this['state']['account'], E) : console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['setServerState'] = function(D, E) {
                    this['canUpdate'](D) ? this['state']['serConfig'] = d({}, this['state']['serConfig'], E) : console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['updateJackpot'] = function(D, E) {
                    if (null != E && 0x0 != E['length']) {
                        if (this['canUpdate'](D)) {
                            null == this['state']['jackpots'] ? this['state']['jackpots'] = new Map() : this['state']['jackpots']['clear']();
                            for (var F, G = f(E); !(F = G())['done']; ) {
                                var H = F['value'];
                                this['state']['jackpots']['set'](H['gameId'], H);
                            }
                        }
                    } else
                        console['warn']('updateJackpot\x20error:\x20jackpotsInfo\x20is\x20null');
                }
                ,
                B['updateGameList'] = function(D, E) {
                    if (null != E && 0x0 != E['length']) {
                        if (this['canUpdate'](D)) {
                            null == this['state']['games'] ? this['state']['games'] = new Map() : this['state']['games']['clear']();
                            for (var F, G = f(E); !(F = G())['done']; ) {
                                var H = F['value'];
                                this['state']['games']['set'](H['gameId'], H);
                            }
                        }
                    } else
                        console['warn']('updateGameList\x20error:\x20gameList\x20is\x20null');
                }
                ,
                B['updateRedPoints'] = function(D, E) {
                    if (null == this['state']['redPoints'] && (this['state']['redPoints'] = new Map()),
                    null != E)
                        for (var F, G = f(E); !(F = G())['done']; ) {
                            var H = F['value']
                              , I = H[0x0]
                              , J = H[0x1];
                            this['state']['redPoints']['set'](I, J);
                        }
                    else
                        this['state']['redPoints']['clear']();
                    m['message']['dispatchEvent'](q['update_red_point']);
                }
                ,
                B['canUpdate'] = function(D) {
                    return this['setters']['has'](D);
                }
                ,
                B['registerSetter'] = function(D) {
                    this['setters']['add'](D);
                }
                ,
                B['unregisterSetter'] = function(D) {
                    this['setters']['delete'](D);
                }
                ,
                B['updatePlayerCoin'] = function(D, E, F) {
                    void 0x0 === F && (F = !0x0),
                    this['canUpdate'](D) ? (null != E && (E < 0x0 && (console['error']('player\x20coin\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                    E = 0x0),
                    this['state']['player']['coin'] = E),
                    F && m['message']['dispatchEvent'](q['update_player_coin'], this['state']['player']['coin'])) : console['error']('updatePlayerCoin\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['updatePlayerVip'] = function(D, E, F) {
                    this['canUpdate'](D) ? (E < 0x0 && (console['error']('player\x20vipLv\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                    E = 0x0),
                    F < 0x0 && (console['error']('player\x20exp\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                    F = 0x0),
                    this['state']['player']['vip'] = E,
                    this['state']['player']['vipExp'] = F,
                    m['message']['dispatchEvent'](q['update_player_vip'], E, F)) : console['error']('updatePlayerVip\x20error:\x20writer\x20is\x20not\x20register');
                }
                ,
                B['getCurServerTime'] = function() {
                    var D = Date['now']() - C['Instance']['State']['serConfig']['localStamp'];
                    return D = Math['floor'](D / 0x3e8),
                    C['Instance']['State']['serConfig']['syncStamp'] + D;
                }
                ,
                B['getLocalToken'] = function(D) {
                    var E = this['getCurServerTime']();
                    v['StringIsNullOrEmpty'](D) && (D = C['Instance']['State']['deviceCode']);
                    var F = '2021' + D + 'game' + E['toString']()['substring'](0x2);
                    return {
                        'token': F = v['MD5'](F),
                        'syncStamp': E
                    };
                }
                ,
                g(C, [{
                    'key': 'State',
                    'get': function() {
                        return this['state'];
                    }
                }, {
                    'key': 'Player',
                    'get': function() {
                        return this['state']['player'];
                    }
                }, {
                    'key': 'PlayerBaseInfo',
                    'get': function() {
                        return {
                            'name': this['Player']['name'],
                            'id': this['Player']['id'],
                            'logo': this['Player']['head'],
                            'coin': this['Player']['coin'],
                            'vip': this['Player']['vip']
                        };
                    }
                }, {
                    'key': 'Account',
                    'get': function() {
                        return this['state']['account'];
                    }
                }, {
                    'key': 'Server',
                    'get': function() {
                        return this['state']['serConfig'];
                    }
                }], [{
                    'key': 'Instance',
                    'get': function() {
                        return null == this['_instance'] && (this['_instance'] = new C()),
                        this['_instance'];
                    }
                }]),
                C;
            }()))['_instance'] = null,
            y = z)) || y),
            h['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/lobbyTop.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gComMod.ts', './lobbyConfig.ts', './utils.ts', './webGame.ts', './lobbyState.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './setting.ts', './CustomEventDefine.ts', './appConfig.ts'], function(j) {
    var k, q, w, x, z, A, D, E, F, G, H, J, K, L, M, N, O, Q, R, S, T, U, V;
    return {
        'setters': [function(W) {
            k = W['applyDecoratedDescriptor'],
            q = W['inheritsLoose'],
            w = W['initializerDefineProperty'],
            x = W['assertThisInitialized'];
        }
        , function(W) {
            z = W['cclegacy'],
            A = W['_decorator'],
            D = W['Button'],
            E = W['Sprite'],
            F = W['Label'],
            G = W['Node'],
            H = W['sp'];
        }
        , function(W) {
            J = W['gComMod'];
        }
        , function(W) {
            K = W['Lobby'];
        }
        , function(W) {
            L = W['utils'];
        }
        , function(W) {
            M = W['webGame'],
            N = W['CoinsFormat'];
        }
        , function(W) {
            O = W['lobbyState'];
        }
        , function(W) {
            Q = W['PModuleID'];
        }
        , function(W) {
            R = W['oops'];
        }
        , function(W) {
            S = W['UIID'];
        }
        , function(W) {
            T = W['setting'];
        }
        , function(W) {
            U = W['WebGameEvent'];
        }
        , function(W) {
            V = W['appConfig'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF;
            z['_RF']['push']({}, '506b7FAoV5Nw5V5Ilx5duyc', 'lobbyTop', void 0x0);
            var aG = A['ccclass']
              , aH = A['property'];
            j('lobbyTop', (a0 = aG('lobbyTop'),
            a1 = aH({
                'type': D,
                'tooltip': '玩家信息入口'
            }),
            a2 = aH({
                'type': E,
                'tooltip': '玩家头像'
            }),
            a3 = aH({
                'type': F,
                'tooltip': 'VIP等级文本'
            }),
            a4 = aH({
                'type': F,
                'tooltip': '玩家名字文本'
            }),
            a5 = aH({
                'type': F,
                'tooltip': '玩家ID文本'
            }),
            a6 = aH({
                'type': F,
                'tooltip': '金币文本'
            }),
            a7 = aH({
                'type': G,
                'tooltip': '正常充值节点'
            }),
            a8 = aH({
                'type': D,
                'tooltip': '普通充值按钮'
            }),
            a9 = aH({
                'type': F,
                'tooltip': '普通充值文本'
            }),
            aa = aH({
                'type': G,
                'tooltip': '阶段充值节点'
            }),
            ab = aH({
                'type': D,
                'tooltip': '阶段充值-商店'
            }),
            ac = aH({
                'type': D,
                'tooltip': '阶段充值入口'
            }),
            ad = aH({
                'type': H['Skeleton'],
                'tooltip': '购买入口动画'
            }),
            ae = aH({
                'type': D,
                'tooltip': '设置按钮'
            }),
            af = aH({
                'type': D,
                'tooltip': '客服按钮'
            }),
            ag = aH({
                'type': D,
                'tooltip': '礼物（首充）'
            }),
            ah = aH({
                'type': D,
                'tooltip': '礼物（二充）'
            }),
            ai = aH({
                'type': D,
                'tooltip': '免费领现金活动'
            }),
            aj = aH({
                'type': D,
                'tooltip': '活动&公告按钮'
            }),
            a0((am = k((al = function(aI) {
                function aJ() {
                    for (var aL, aM = arguments['length'], aN = new Array(aM), aO = 0x0; aO < aM; aO++)
                        aN[aO] = arguments[aO];
                    return aL = aI['call']['apply'](aI, [this]['concat'](aN)) || this,
                    w(aL, 'btnPlayer', am, x(aL)),
                    w(aL, 'spHead', an, x(aL)),
                    w(aL, 'lbVip', ao, x(aL)),
                    w(aL, 'lbPlayerName', ap, x(aL)),
                    w(aL, 'lbPlayerID', aq, x(aL)),
                    w(aL, 'lbCoin', ar, x(aL)),
                    w(aL, 'nodeNormalBuy', as, x(aL)),
                    w(aL, 'btnNormalBuy', au, x(aL)),
                    w(aL, 'lbNormalBuy', av, x(aL)),
                    w(aL, 'nodeStageBuy', aw, x(aL)),
                    w(aL, 'btnStageBuy', ax, x(aL)),
                    w(aL, 'btnStageCharge', ay, x(aL)),
                    w(aL, 'spineBuy', az, x(aL)),
                    w(aL, 'btnSet', aA, x(aL)),
                    w(aL, 'btnService', aB, x(aL)),
                    w(aL, 'btnGift', aC, x(aL)),
                    w(aL, 'btn2Gift', aD, x(aL)),
                    w(aL, 'btnFreeCash', aE, x(aL)),
                    w(aL, 'btnEvents', aF, x(aL)),
                    aL;
                }
                q(aJ, aI);
                var aK = aJ['prototype'];
                return aK['onInit'] = function() {
                    L['ButtonBindClick'](this['btnPlayer'], this['onBtnPlayerClick'], this),
                    L['ButtonBindClick'](this['btnNormalBuy'], this['onBtnAddCoinClick'], this),
                    L['ButtonBindClick'](this['btnSet'], this['onBtnSetClick'], this),
                    L['ButtonBindClick'](this['btnService'], this['onBtnServiceClick'], this),
                    L['ButtonBindClick'](this['btnGift'], this['onBtnGiftClick'], this),
                    L['ButtonBindClick'](this['btn2Gift'], this['onBtn2GiftClick'], this),
                    L['ButtonBindClick'](this['btnStageCharge'], this['onBtnStageClick'], this),
                    L['ButtonBindClick'](this['btnStageBuy'], this['onBtnAddCoinClick'], this),
                    L['ButtonBindClick'](this['btnFreeCash'], this['onBtnCashFreeClick'], this),
                    L['ButtonBindClick'](this['btnEvents'], this['onBtnEventsClick'], this);
                }
                ,
                aK['AddListener'] = function() {
                    aI['prototype']['AddListener']['call'](this),
                    R['message']['on'](U['update_player_info'], this['refresh'], this),
                    R['message']['on'](U['update_player_coin'], this['onEventUpdatePlayerCoin'], this),
                    R['message']['on'](U['update_red_point'], this['updateEntryByRedPoint'], this),
                    R['message']['on'](U['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                }
                ,
                aK['RemoveListener'] = function() {
                    aI['prototype']['RemoveListener']['call'](this),
                    R['message']['off'](U['update_player_info'], this['refresh'], this),
                    R['message']['off'](U['update_player_coin'], this['onEventUpdatePlayerCoin'], this),
                    R['message']['off'](U['update_red_point'], this['updateEntryByRedPoint'], this),
                    R['message']['off'](U['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                }
                ,
                aK['onBtnPlayerClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['profile']);
                }
                ,
                aK['onBtnAddCoinClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['store']);
                }
                ,
                aK['onBtnEventsClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['activity']);
                }
                ,
                aK['onBtnCashFreeClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['cashFree']);
                }
                ,
                aK['onBtnSetClick'] = function() {
                    var aL = O['Instance']['PlayerBaseInfo']
                      , aM = {
                        'onAdded': function(aN, aO) {
                            aN['active'] = !0x1;
                            var aP = aN['getComponent'](T);
                            aP['refresh'](aL['id']['toString']()),
                            aP['show']();
                        }
                    };
                    R['gui']['open'](S['setting'], null, aM);
                }
                ,
                aK['onBtnServiceClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['service']);
                }
                ,
                aK['onBtnGiftClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['store'], 0x1);
                }
                ,
                aK['onBtn2GiftClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['store'], 0x2);
                }
                ,
                aK['onBtnStageClick'] = function() {
                    this['Call'](K['modID']['root'], K['msgID']['enterLobbyMod'], Q['stageRecharge']);
                }
                ,
                aK['refresh'] = function() {
                    var aL = O['Instance']['PlayerBaseInfo'];
                    this['setPlayerHead'](aL['logo']),
                    this['setPlayerVip'](aL['vip']),
                    this['setPlayerName'](aL['name'], aL['id']),
                    this['setPlayerCoin'](aL['coin']),
                    this['refreshDynamicEntry']();
                }
                ,
                aK['setPlayerHead'] = function(aL) {
                    var aM = this;
                    L['getPlayerSpriteFrame'](aL, function(aN, aO) {
                        aM['spHead']['spriteFrame'] = aO;
                    }, 'resources', !0x0);
                }
                ,
                aK['setPlayerName'] = function(aL, aM) {
                    this['lbPlayerName']['string'] = aL,
                    this['lbPlayerID']['string'] = 'ID:' + aM;
                }
                ,
                aK['onEventUpdatePlayerCoin'] = function(aL, aM) {
                    this['setPlayerCoin'](aM);
                }
                ,
                aK['setPlayerCoin'] = function(aL) {
                    aL = Math['max'](0x0, aL),
                    this['lbCoin']['string'] = aL > 0x174876e79c ? M['FormatCoins'](aL, N['Unit']) : M['FormatCoins'](aL, N['Thousandths']);
                }
                ,
                aK['setPlayerVip'] = function(aL) {
                    aL = Math['max'](0x0, aL),
                    this['lbVip']['string'] = 'V' + aL;
                }
                ,
                aK['updateEntryByRedPoint'] = function(aL) {}
                ,
                aK['refreshDynamicEntry'] = function() {
                    var aL = !V['bPreview']
                      , aM = O['Instance']['Server']
                      , aN = O['Instance']['Player']['bFirstRecharge']
                      , aO = 0x1 == aM['bOpenFirstOffer'];
                    this['btnGift']['node']['active'] = aO || aN && aL;
                    var aP = 0x1 == aM['bOpenSecondOffer'];
                    this['btn2Gift']['node']['active'] = !this['btnGift']['node']['active'] && aP;
                    var aQ = aM['bShowStageCharge'];
                    this['lbNormalBuy']['node']['active'] = !aQ,
                    this['nodeNormalBuy']['active'] = !aQ,
                    this['nodeStageBuy']['active'] = aQ;
                    var aR = aQ ? 'tx' : 'idle';
                    L['PlaySpineAnimation'](this['spineBuy'], aR, !0x0);
                    var aS = 0x2 != aM['freeCashStatus'];
                    this['btnFreeCash']['node']['active'] = aS;
                }
                ,
                aJ;
            }(J))['prototype'], 'btnPlayer', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            an = k(al['prototype'], 'spHead', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ao = k(al['prototype'], 'lbVip', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ap = k(al['prototype'], 'lbPlayerName', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aq = k(al['prototype'], 'lbPlayerID', [a5], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ar = k(al['prototype'], 'lbCoin', [a6], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            as = k(al['prototype'], 'nodeNormalBuy', [a7], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            au = k(al['prototype'], 'btnNormalBuy', [a8], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            av = k(al['prototype'], 'lbNormalBuy', [a9], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aw = k(al['prototype'], 'nodeStageBuy', [aa], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ax = k(al['prototype'], 'btnStageBuy', [ab], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ay = k(al['prototype'], 'btnStageCharge', [ac], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            az = k(al['prototype'], 'spineBuy', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aA = k(al['prototype'], 'btnSet', [ae], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aB = k(al['prototype'], 'btnService', [af], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aC = k(al['prototype'], 'btnGift', [ag], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aD = k(al['prototype'], 'btn2Gift', [ah], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aE = k(al['prototype'], 'btnFreeCash', [ai], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aF = k(al['prototype'], 'btnEvents', [aj], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ak = al)) || ak)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/loginConfig.ts', ['cc', './platformData.ts', './lobbyModHub.ts', './loginMain.ts'], function(a) {
    var b, d, f, g, h;
    return {
        'setters': [function(j) {
            b = j['cclegacy'],
            d = j['_decorator'];
        }
        , function(j) {
            f = j['PModuleID'];
        }
        , function(j) {
            g = j['lobbyModHub'];
        }
        , function(j) {
            h = j['loginMain'];
        }
        ],
        'execute': function() {
            a('Login', void 0x0),
            b['_RF']['push']({}, '20c2fC6LCtAIbjFIWbvSzu7', 'loginConfig', void 0x0),
            (d['ccclass'],
            d['property']);
            var j, k, l = function(w) {
                return w[w['root'] = 0x0] = 'root',
                w[w['view'] = 0x1] = 'view',
                w[w['login'] = 0x2] = 'login',
                w[w['regist'] = 0x3] = 'regist',
                w[w['findPsw'] = 0x4] = 'findPsw',
                w[w['accountVerify'] = 0x5] = 'accountVerify',
                w;
            }(l || {}), m = function(w) {
                return w[w['showRegist'] = 0x1] = 'showRegist',
                w[w['showFindPsw'] = 0x2] = 'showFindPsw',
                w[w['showAccountVerify'] = 0x3] = 'showAccountVerify',
                w[w['login'] = 0x4] = 'login',
                w[w['showLogin'] = 0x5] = 'showLogin',
                w[w['regist'] = 0x6] = 'regist',
                w[w['sendRegistCode'] = 0x7] = 'sendRegistCode',
                w[w['sendFindPswCode'] = 0x8] = 'sendFindPswCode',
                w[w['resetPassword'] = 0x9] = 'resetPassword',
                w[w['sendAccountVerifyCode'] = 0xa] = 'sendAccountVerifyCode',
                w[w['accountVerify'] = 0xb] = 'accountVerify',
                w;
            }(m || {}), p = {
                'modID': f['login'],
                'modName': 'login',
                'modEventID': 0x64 * f['login'],
                'bundleName': ''
            }, q = function(w) {
                return w[w['guest'] = 0x1] = 'guest',
                w[w['account'] = 0x2] = 'account',
                w[w['facebook'] = 0x3] = 'facebook',
                w;
            }(q || {}), v = function(w) {
                return w[w['device'] = 0x0] = 'device',
                w[w['account'] = 0x1] = 'account',
                w[w['mobile'] = 0x2] = 'mobile',
                w;
            }(v || {});
            (k = j || (j = a('Login', {})))['config'] = p,
            k['modID'] = l,
            k['msgID'] = m,
            k['loginType'] = q,
            k['registType'] = v,
            g['Instance']['registerModule'](f['login'], h),
            globalThis['enterLogin'] = function() {
                g['Instance']['enter'](h, !0x0);
            }
            ,
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/loginMain.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './utils.ts', './lobbyMod.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './viewLogin.ts', './webGame.ts', './lobbyState.ts', './httpInfo.ts', './httpDefine.ts', './httpLogin.ts', './httpRegist.ts', './netAdapter.ts', './lobbyMain.ts', './Language.ts', './gMessageBox.ts', './frameworkCmd.ts', './pb_framework.js', './pb_error_code.ts', './CustomEventDefine.ts', './httpAccount.ts', './LanguageData.ts', './appConfig.ts', './stringDefine.ts', './ThirdAdapter.ts'], function(j) {
    var x, z, B, G, J, K, Q, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao;
    return {
        'setters': [function(ap) {
            x = ap['inheritsLoose'],
            z = ap['asyncToGenerator'],
            B = ap['regeneratorRuntime'],
            G = ap['extends'];
        }
        , function(ap) {
            J = ap['cclegacy'],
            K = ap['_decorator'],
            Q = ap['SpriteFrame'],
            U = ap['sys'];
        }
        , function(ap) {
            V = ap['Login'];
        }
        , function(ap) {
            W = ap['utils'];
        }
        , function(ap) {
            X = ap['lobbyMod'];
        }
        , function(ap) {
            Y = ap['PModuleID'];
        }
        , function(ap) {
            Z = ap['oops'];
        }
        , function(ap) {
            a0 = ap['UIID'];
        }
        , function(ap) {
            a1 = ap['viewLogin'];
        }
        , function(ap) {
            a2 = ap['webGame'];
        }
        , function(ap) {
            a3 = ap['lobbyState'];
        }
        , function(ap) {
            a4 = ap['HttpInfo'],
            a5 = ap['HttpCaptchar'];
        }
        , function(ap) {
            a6 = ap['HttpErrorCode'],
            a7 = ap['ShowHttpError'];
        }
        , function(ap) {
            a8 = ap['HttpLogin'];
        }
        , function(ap) {
            a9 = ap['HttpRegist'];
        }
        , function(ap) {
            aa = ap['netAdapter'],
            ab = ap['NetChannelType'];
        }
        , function(ap) {
            ac = ap['lobbyMain'];
        }
        , function(ap) {
            ad = ap['LanguageManager'];
        }
        , function(ap) {
            ae = ap['MsgBoxManager'];
        }
        , function(ap) {
            af = ap['CMD_FRAMEWORK'];
        }
        , function(ap) {
            ag = ap['pb_user'];
        }
        , function(ap) {
            ah = ap['pb_error_code'];
        }
        , function(ap) {
            ai = ap['WebGameEvent'],
            aj = ap['gameStage'];
        }
        , function(ap) {
            ak = ap['HttpAccount'];
        }
        , function(ap) {
            al = ap['LanguageData'];
        }
        , function(ap) {
            am = ap['appConfig'];
        }
        , function(ap) {
            an = ap['stringDefine'];
        }
        , function(ap) {
            ao = ap['AttributionEvent'];
        }
        ],
        'execute': function() {
            var ap, aq;
            J['_RF']['push']({}, 'f70b61dBthCNKHtO+GjWW6o', 'loginMain', void 0x0);
            var ar = K['ccclass'];
            K['property'],
            j('loginMain', ar('loginMain')(((aq = function(as) {
                function at() {
                    for (var av, aw = arguments['length'], ax = new Array(aw), ay = 0x0; ay < aw; ay++)
                        ax[ay] = arguments[ay];
                    return (av = as['call']['apply'](as, [this]['concat'](ax)) || this)['viewMian'] = null,
                    av['errorMsg'] = null,
                    av['attributionDeviceCode'] = '',
                    av['bFastLogin'] = !0x1,
                    av['fastLoginHandler'] = void 0x0,
                    av['onSocketClose'] = null,
                    av['postHttpLoginHandler'] = null,
                    av;
                }
                x(at, as);
                var au = at['prototype'];
                return au['onInit'] = function(av, aw) {
                    as['prototype']['onInit']['call'](this, av, aw);
                    var ax = am['attToken'];
                    if (ax && !W['StringIsNullOrEmpty'](ax['token'])) {
                        var ay = new Map();
                        if (null != ax['events'] && ax['events']['length'] > 0x0)
                            for (var az = 0x0; az < ax['events']['length']; az++) {
                                var aA = ax['events'][az];
                                ay['set'](aA['name'], aA['key']);
                            }
                        a2['log']['logBusiness']('set\x20attribution\x20config\x20and\x20try\x20init:\x20on\x20init\x20token\x20=\x20' + ax['token']),
                        this['setAttributionConfig'](ax['token'], ax['appID'], ay);
                    }
                }
                ,
                au['showErrorCode'] = function(av) {
                    if (!this['errorMsg']) {
                        var aw = Object['keys'](ag['error_code']);
                        this['errorMsg'] = {};
                        for (var ax = Y['lobby']['toString'](), ay = 0x0, az = aw; ay < az['length']; ay++) {
                            var aA = az[ay]
                              , aB = ag['error_code'][aA];
                            this['errorMsg'][aB] = al['getLangByTag'](aA, ax);
                        }
                    }
                    as['prototype']['showErrorCode']['call'](this, av);
                }
                ,
                au['GetSubModByID'] = function(av) {
                    if (null == this['viewMian'])
                        return a2['log']['logView']('loginMain-GetSubModByID:this.viewMian\x20==\x20null'),
                        null;
                    switch (av) {
                    case V['modID']['login']:
                        return this['viewMian']['Login'];
                    case V['modID']['regist']:
                        return this['viewMian']['Regist'];
                    case V['modID']['findPsw']:
                        return this['viewMian']['FindPsw'];
                    case V['modID']['accountVerify']:
                        return this['viewMian']['AccountSafe'];
                    }
                }
                ,
                au['AddListener'] = function() {
                    this['RegistMsg'](V['msgID']['login'], this['onLogin']),
                    this['RegistMsg'](V['msgID']['sendRegistCode'], this['onSendRegistCode']),
                    this['RegistMsg'](V['msgID']['regist'], this['onRegist']),
                    this['RegistMsg'](V['msgID']['sendFindPswCode'], this['onSendFindPswCode']),
                    this['RegistMsg'](V['msgID']['resetPassword'], this['onResetPassword']),
                    this['RegistMsg'](V['msgID']['sendAccountVerifyCode'], this['onSendAccountVerifyCode']),
                    this['RegistMsg'](V['msgID']['accountVerify'], this['onAccountVerify']),
                    this['addNetProcess'](af['s2c_lobby_login'], this['onSCLogin']),
                    Z['message']['on'](ai['game_stage_change'], this['on_game_stage_change'], this),
                    Z['message']['on'](ai['WS_CONNECT'], this['OnSocketConnected'], this),
                    Z['message']['on'](ai['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                    Z['message']['on'](ai['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                }
                ,
                au['RemoveListener'] = function() {
                    this['LogoutMsg'](V['msgID']['login']),
                    this['LogoutMsg'](V['msgID']['sendRegistCode']),
                    this['LogoutMsg'](V['msgID']['regist']),
                    this['LogoutMsg'](V['msgID']['sendFindPswCode']),
                    this['LogoutMsg'](V['msgID']['resetPassword']),
                    this['LogoutMsg'](V['msgID']['sendAccountVerifyCode']),
                    this['LogoutMsg'](V['msgID']['accountVerify']),
                    this['removeNetProcess'](af['s2c_lobby_login']),
                    Z['message']['off'](ai['game_stage_change'], this['on_game_stage_change'], this),
                    Z['message']['off'](ai['WS_CONNECT'], this['OnSocketConnected'], this),
                    Z['message']['off'](ai['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                    Z['message']['off'](ai['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                }
                ,
                au['loadBundle'] = function(av) {
                    this['showLoading'](!0x1),
                    av['push'](z(B()['mark'](function aw(ax, ay, az) {
                        return B()['wrap'](function(aA) {
                            for (; ; )
                                switch (aA['prev'] = aA['next']) {
                                case 0x0:
                                    Z['res']['load'](Y['lobby']['toString'](), ax);
                                case 0x1:
                                case 'end':
                                    return aA['stop']();
                                }
                        }, aw);
                    })));
                }
                ,
                au['loadView'] = function(av) {
                    var aw = this;
                    av['push'](z(B()['mark'](function ax(ay, az, aA) {
                        var aB;
                        return B()['wrap'](function(aC) {
                            for (; ; )
                                switch (aC['prev'] = aC['next']) {
                                case 0x0:
                                    aB = {
                                        'onAdded': function(aD, aE) {
                                            aD['active'] = !0x1,
                                            aw['viewMian'] = aD['getComponent'](a1),
                                            aw['CreateSubMod'](V['modID']['login']),
                                            ay();
                                        }
                                    },
                                    Z['gui']['open'](a0['Login'], null, aB);
                                case 0x2:
                                case 'end':
                                    return aC['stop']();
                                }
                        }, ax);
                    })));
                }
                ,
                au['actionOnLoaded'] = function(av) {
                    av['push'](z(B()['mark'](function aw(ax, ay, az) {
                        var aA;
                        return B()['wrap'](function(aB) {
                            for (; ; )
                                switch (aB['prev'] = aB['next']) {
                                case 0x0:
                                    aA = Y['lobby']['toString'](),
                                    'content/sprite/bg/bg_login/spriteFrame',
                                    Z['res']['load'](aA, 'content/sprite/bg/bg_login/spriteFrame', Q, function(aC, aD) {
                                        null != aD && (a2['Loading']['SetGameLoading'](null, aD, !0x0),
                                        a2['Loading']['SetLoadingProgress'](0x1)),
                                        a2['Loading']['ShowLoading'](!0x1),
                                        ax();
                                    });
                                case 0x3:
                                case 'end':
                                    return aB['stop']();
                                }
                        }, aw);
                    })));
                }
                ,
                au['onEnter'] = function(av) {
                    var aw = this;
                    void 0x0 === av && (av = !0x1),
                    this['bFastLogin'] = av && am['bFastLogin'],
                    a3['Instance']['reset'](),
                    Z['audio']['playMusic']('audio/lobby', null, Y['game']['toString']());
                    var ax = !0x1
                      , ay = null;
                    if (av && this['bFastLogin']) {
                        var az = Z['storage']['getNumber'](am['storageKey']['lastLoginTime'], 0x0);
                        if (az > 0x0) {
                            var aA = am['fastLoginTimeLimit']
                              , aB = 0x0;
                            if (aA > 0x0)
                                aB = Math['floor'](Date['now']() / 0x3e8) - az,
                                aA = Math['max'](aA, 0x18),
                                aA *= 0xe10;
                            aB > aA ? this['bFastLogin'] = !0x1 : ax = this['fastLoginProcess']();
                        } else {
                            var aC = {
                                'registType': V['registType']['device']
                            };
                            ay = function() {
                                aw['onRegist'](aC);
                            }
                            ;
                        }
                    }
                    this['reqGameBaseInfo'](ax, ay),
                    this['reqLoginService'](),
                    this['reqLoginNotify'](),
                    this['bFastLogin'] && av || (this['viewMian']['refresh'](),
                    this['viewMian']['show']());
                }
                ,
                au['reqGameBaseInfo'] = function(av, aw) {
                    var ax = this
                      , ay = am['CurrentChannel']
                      , az = {
                        'type': a4['req']['requests']['baseinfo'],
                        'appVer': '1.0.0',
                        'resVer': '500',
                        'luaVer': '500',
                        'channel': ay,
                        'platform': U['isNative'] ? 0x1 : 0x2
                    };
                    this['HttpPost'](a4['req']['cmd'], az, function(aA) {
                        var aB = ax['parseHttpData'](aA);
                        if (aB['code'] == a6['success']) {
                            var aC = !0x0;
                            null != aB['RegNeedCode'] && (aC = 0x1 == aB['RegNeedCode']);
                            var aD = 0x1 == aB['bGetHost']
                              , aE = {
                                'syncStamp': aB['svrTime'],
                                'localStamp': Date['now'](),
                                'bRegNeedCode': aC,
                                'bSupportHost': aD,
                                'bBindEmail': aB['showbindemail']
                            };
                            if (a3['Instance']['setServerState'](ax, aE),
                            am['isS2S'] = 0x1 == aB['adjust'],
                            aD && 0x1 == am['bAllowGetHost'] && ax['reqConnectInfo'](),
                            !av) {
                                var aF = aB['appkey']
                                  , aG = aB['appid']
                                  , aH = ax['parseServerAttEvents'](aB['event']);
                                a2['log']['logBusiness']('set\x20attribution\x20config\x20and\x20try\x20init:\x20on\x20get\x20server\x20baseInfo:\x20channel\x20=\x20' + ay + '\x20token\x20=\x20' + aF),
                                ax['setAttributionConfig'](aF, aG, aH);
                            }
                            null == aw || aw();
                        } else
                            a7(aB['code']);
                    }, function(aA) {
                        ax['bFastLogin'] && (ax['viewMian']['refresh'](),
                        ax['viewMian']['show']());
                    }, !0x1);
                }
                ,
                au['reqConnectInfo'] = function() {
                    var av = am['CurrentChannel']
                      , aw = a3['Instance']['State']['deviceCode']
                      , ax = a3['Instance']['getLocalToken'](aw)
                      , ay = {
                        'type': a4['req']['requests']['connect'],
                        'channel': av,
                        'addrtype': 0x1,
                        'deviceCode': aw,
                        'token': ax['token'],
                        'timestamp': ax['syncStamp']
                    };
                    this['HttpPost'](a4['req']['cmd'], ay, this['onRespConnectInfo']['bind'](this));
                }
                ,
                au['onRespConnectInfo'] = function(av) {
                    var aw = this['parseHttpData'](av);
                    if (aw['code'] == a6['success']) {
                        var ax = aw['list'];
                        if (null != ax && ax['length'] > 0x0) {
                            for (var ay = [], az = 0x0; az < ax['length']; az++) {
                                var aA = ax[az]
                                  , aB = aA['addr']
                                  , aC = aA['port'];
                                ay['push']({
                                    'host': aB,
                                    'port': aC
                                });
                            }
                            var aD = {
                                'hostList': ay
                            };
                            a3['Instance']['setServerState'](this, aD);
                        }
                    } else
                        a7(aw['code']);
                }
                ,
                au['reqLoginService'] = function() {
                    var av = this
                      , aw = {
                        'type': a4['req']['requests']['loginService']
                    };
                    this['HttpPost'](a4['req']['cmd'], aw, function(ax) {
                        var ay = av['parseHttpData'](ax);
                        if (ay['code'] == a6['success']) {
                            var az = {
                                'loginServiceUrl': ay['url']
                            };
                            a3['Instance']['setServerState'](av, az);
                        } else
                            a7(ay['code']);
                    }, null, !0x1);
                }
                ,
                au['reqLoginNotify'] = function() {
                    var av = this
                      , aw = {
                        'type': a4['req']['requests']['notify']
                    };
                    this['HttpPost'](a4['req']['cmd'], aw, function(ax) {
                        var ay = av['parseHttpData'](ax);
                        ay['code'] == a6['success'] ? console['log']('login\x20http\x20notify\x20!') : a2['log']['logView']('loginMain-reqLoginNotify:response.code=' + ay['code']);
                    }, null, !0x1);
                }
                ,
                au['onLogin'] = function(av, aw) {
                    void 0x0 === aw && (aw = !0x0),
                    aw && this['showLoading'](!0x0);
                    var ax = a3['Instance']['State']['deviceCode']
                      , ay = a3['Instance']['getLocalToken'](ax)
                      , az = this['attributionDeviceCode']
                      , aA = am['CurrentChannel']
                      , aB = {
                        'loginType': av['loginType'],
                        'deviceType': W['SysPlatformCode'],
                        'deviceCode': ax,
                        'token': ay['token'],
                        'timestamp': ay['syncStamp'],
                        'adid': az,
                        'areaCode': av['areaCode'],
                        'channel': aA,
                        'fbp': am['fbp'],
                        'fbc': am['fbc']
                    };
                    av['loginType'] == V['loginType']['account'] ? (aB['mobileNumber'] = av['account'],
                    aB['password'] = W['MD5'](av['password']),
                    Z['storage']['set'](am['storageKey']['account'], av['account'])) : av['loginType'] == V['loginType']['facebook'] && (aB['openID'] = av['account'],
                    aB['session'] = av['password']);
                    var aC = {
                        'loginType': av['loginType'],
                        'loginAccount': av['account'],
                        'loginPassword': av['password'],
                        'areaNo': av['areaCode'],
                        'logined': !0x1
                    };
                    a3['Instance']['setAccountState'](this, aC),
                    this['HttpPost'](a8['req']['cmd'], aB, this['onLoginSuccess']['bind'](this));
                }
                ,
                au['parseServerAttEvents'] = function(av) {
                    var aw = null;
                    if (null != av && av['length'] > 0x0) {
                        aw = new Map();
                        for (var ax = 0x0; ax < av['length']; ax++) {
                            var ay = av[ax]['split']('=');
                            0x2 == ay['length'] && aw['set'](ay[0x0], ay[0x1]);
                        }
                    }
                    return aw;
                }
                ,
                au['tryInitAttributionSDK'] = function(av) {
                    var aw = this;
                    if (void 0x0 === av && (av = !0x0),
                    W['StringIsNullOrEmpty'](am['webEventCode'])) {
                        var ax = a3['Instance']['State']['serConfig'];
                        if (!W['StringIsNullOrEmpty'](ax['attributetionToken'])) {
                            var ay = ax['attributetionToken']
                              , az = am['attEnvironment']
                              , aA = ax['attrAppID'];
                            if (a2['log']['logBusiness']('login:tryInitAttributionSDK,\x20token\x20=\x20' + ay),
                            a2['ThirdAdapter']['initAttribution'](ay, az, aA, function() {
                                aw['tryGetDeviceID']();
                            }),
                            av) {
                                var aB = [];
                                null != ax['attrEvent'] && ax['attrEvent']['size'] > 0x0 && ax['attrEvent']['forEach'](function(aE, aF) {
                                    aB['push'](aF + '=' + aE);
                                });
                                var aC = {
                                    'token': ay,
                                    'appID': aA,
                                    'eventKVs': aB
                                }
                                  , aD = JSON['stringify'](aC);
                                Z['storage']['set'](am['storageKey']['attArg'], aD);
                            }
                        }
                    }
                }
                ,
                au['tryGetDeviceID'] = function() {
                    var av = this;
                    W['StringIsNullOrEmpty'](am['webEventCode']) && (a2['log']['logBusiness']('login:tryGetDeviceID'),
                    a2['ThirdAdapter']['getDeviceID'](function(aw) {
                        a2['log']['logBusiness']('get\x20deviceID:\x20' + aw),
                        av['attributionDeviceCode'] = aw;
                    }));
                }
                ,
                au['onLoginSuccess'] = function(av) {
                    var aw = this['parseHttpData'](av);
                    if (aw['code'] == a6['success']) {
                        var ax = aw['account']
                          , ay = aw['password']
                          , az = a3['Instance']['Account']['loginType'];
                        Z['storage']['set'](am['storageKey']['loginAccount'], ax),
                        Z['storage']['set'](am['storageKey']['loginPassword'], ay),
                        Z['storage']['set'](am['storageKey']['loginType'], az);
                        var aA = {
                            'loginAccount': ax,
                            'loginPassword': ay,
                            'logined': !0x1
                        };
                        a3['Instance']['setAccountState'](this, aA);
                        var aB = am['isS2S']
                          , aC = 0x0 == aw['eventType'];
                        am['isS2S'] = aB && aC;
                        var aD = a3['Instance']['Server']['attributetionToken'];
                        if (!W['StringIsNullOrEmpty'](aw['appkey']) && aw['appkey'] != aD) {
                            var aE = this['parseServerAttEvents'](aw['event']);
                            a2['log']['logBusiness']('set\x20attribution\x20config\x20and\x20try\x20init:\x20on\x20server\x20response:channel\x20=\x20' + am['CurrentChannel'] + '\x20token\x20=\x20' + aw['appkey']),
                            this['setAttributionConfig'](aw['appkey'], aw['appid'], aE);
                        }
                        this['tryConnectTcpServer']();
                    } else {
                        this['showLoading'](!0x1),
                        this['bFastLogin'] && (this['viewMian']['refresh'](),
                        this['viewMian']['show'](),
                        this['bFastLogin'] = !0x1);
                        var aF = aw['code'] == a6['login']['securityVerify']
                          , aG = {
                            'txt': ad['getLangByID'](an['ok']),
                            'click': function() {}
                        };
                        if (a7(aw['code'], !0x0, aG),
                        aF) {
                            this['viewMian']['Login']['close']();
                            var aH = a3['Instance']['Account']['areaNo'];
                            W['StringIsNullOrEmpty'](aH) && (aH = Z['storage']['get'](am['storageKey']['areaCode']));
                            var aI = a3['Instance']['Account']['loginAccount'];
                            this['Call'](V['modID']['accountVerify'], V['msgID']['showAccountVerify'], aI, aH);
                        }
                    }
                }
                ,
                au['fastLoginProcess'] = function() {
                    var av = this
                      , aw = !0x1
                      , ax = Z['storage']['getNumber'](am['storageKey']['loginUID'])
                      , ay = Z['storage']['get'](am['storageKey']['loginSession']);
                    if (null != ax && ax > 0x0 && !W['StringIsNullOrEmpty'](ay)) {
                        var az = Z['storage']['get'](am['storageKey']['loginAccount'])
                          , aA = Z['storage']['get'](am['storageKey']['loginPassword']);
                        if (W['StringIsNullOrEmpty'](az) || W['StringIsNullOrEmpty'](aA))
                            return this['bFastLogin'] = !0x1,
                            !0x1;
                        var aB = {
                            'loginType': Z['storage']['getNumber'](am['storageKey']['loginType'], V['loginType']['guest']),
                            'loginAccount': az,
                            'loginPassword': aA
                        };
                        a3['Instance']['setAccountState'](this, aB);
                        var aC = {
                            'id': ax,
                            'session': ay
                        };
                        a3['Instance']['setPlayerState'](this, aC),
                        this['bFastLogin'] = !0x0;
                        var aD = Z['storage']['get'](am['storageKey']['attArg']);
                        if (!W['StringIsNullOrEmpty'](aD)) {
                            var aE = JSON['parse'](aD)
                              , aF = this['parseServerAttEvents'](aE['eventKVs']);
                            a2['log']['logBusiness']('set\x20attribution\x20config\x20and\x20try\x20init:\x20on\x20get\x20local\x20storage:\x20token\x20=\x20' + aE['token']),
                            this['setAttributionConfig'](aE['token'], aE['appID'], aF, !0x1),
                            aw = !W['StringIsNullOrEmpty'](aE['token']);
                        }
                        this['showLoading'](!0x0),
                        this['fastLoginHandler'] = function() {
                            av['showLoading'](!0x0);
                            var aG = a3['Instance']['Player']
                              , aH = a3['Instance']['State']['deviceCode']
                              , aI = {
                                'uid': aG['id'],
                                'deviceCode': aH,
                                'session': aG['session']
                            };
                            av['addNetProcess'](af['s2c_session_verify'], av['on_s2c_session_verify']),
                            av['netRequest'](af['c2s_session_verify'], aI),
                            av['fastLoginHandler'] = null;
                        }
                        ,
                        this['tryConnectTcpServer']();
                    } else
                        this['bFastLogin'] = !0x1;
                    return aw;
                }
                ,
                au['setAttributionConfig'] = function(av, aw, ax, ay) {
                    if (av != a3['Instance']['State']['serConfig']['attributetionToken']) {
                        var az = {};
                        az['attributetionToken'] = av,
                        az['attrAppID'] = aw,
                        az['attrEvent'] = ax,
                        a3['Instance']['setServerState'](this, az),
                        this['tryInitAttributionSDK'](ay);
                    }
                }
                ,
                au['tryConnectTcpServer'] = function() {
                    var av = am['connection']['tcp']['host']
                      , aw = am['connection']['tcp']['port'];
                    aa['Instance']['Connect'](ab['Lobby'], av, aw) || (this['onSocketClose'] = function() {
                        aa['Instance']['Connect'](ab['Lobby'], av, aw);
                    }
                    ,
                    aa['Instance']['Close'](ab['Lobby'], 0x3e8, 'reconnect4login:close\x20first'));
                }
                ,
                au['OnSocketConnected'] = function(av, aw, ax) {
                    if (aw == ab['Lobby'] && !a3['Instance']['Account']['logined'] && ax) {
                        if (null != this['fastLoginHandler'])
                            this['fastLoginHandler']();
                        else {
                            var ay = a3['Instance']['Account'];
                            null != ay['loginAccount'] && null != ay['loginPassword'] && this['reqCSLogin'](ay['loginAccount'], ay['loginPassword']);
                        }
                        a3['Instance']['updateRedPoints'](this, null);
                    }
                }
                ,
                au['on_s2c_session_verify'] = function(av) {
                    av['code'] == ah['success'] ? this['onSCLogin'](av) : (this['showLoading'](!0x1),
                    Z['storage']['remove'](am['storageKey']['loginUID']),
                    Z['storage']['remove'](am['storageKey']['loginSession']),
                    Z['storage']['remove'](am['storageKey']['loginAccount']),
                    Z['storage']['remove'](am['storageKey']['loginPassword']),
                    this['bFastLogin'] = !0x1,
                    this['viewMian']['refresh'](),
                    this['viewMian']['show']());
                }
                ,
                au['OnSocketClose'] = function(av, aw) {
                    aw == ab['Lobby'] && (a3['Instance']['Account']['logined'] || null != this['onSocketClose'] && (this['onSocketClose'](),
                    this['onSocketClose'] = null));
                }
                ,
                au['OnSocketReconnectFailed'] = function(av, aw) {
                    var ax = this;
                    if (aw == ab['Lobby'] && !a3['Instance']['Account']['logined']) {
                        var ay = an['error'];
                        ay = ad['getLangByID'](ay);
                        var az = an['netBreak'];
                        az = ad['getLangByID'](az);
                        var aA = {
                            'txt': ad['getLangByID'](an['reconnect']),
                            'click': function() {
                                ax['tryConnectTcpServer']();
                            }
                        };
                        ae['Show'](ay, az, aA);
                    }
                }
                ,
                au['reqCSLogin'] = function(av, aw) {
                    var ax = {
                        'ab': 0x64,
                        'account': av,
                        'password': aw,
                        'deviceCode': a3['Instance']['State']['deviceCode'],
                        'deviceType': W['SysPlatformCode']
                    };
                    this['netRequest'](af['c2s_lobby_login'], ax);
                }
                ,
                au['onSCLogin'] = function(av) {
                    if (this['showLoading'](!0x1),
                    av['code'] == ah['success']) {
                        var aw = av['data'];
                        this['hub']['enter'](ac, !0x0, aw, this['bFastLogin']);
                        var ax = Y['lobby']['toString']();
                        Z['res']['load'](ax, 'content/sprite/bg/bg_login/spriteFrame', Q, function(az, aA) {
                            null != aA && a2['Loading']['SetGameLoading'](null, aA, !0x0);
                        }),
                        a2['Loading']['ShowLoading'](!0x0);
                        var ay = aw['uid']['toString']();
                        null != this['postHttpLoginHandler'] && (this['postHttpLoginHandler'](ay),
                        this['postHttpLoginHandler'] = null),
                        this['tryTrackEvent'](ao['login'], ay),
                        this['viewMian']['close'](),
                        Z['message']['dispatchEvent'](ai['game_stage_change'], aj['lobby'], aj['login']),
                        this['bFastLogin'] = !0x1;
                    } else
                        this['showErrorCode'](av['code']);
                }
                ,
                au['tryTrackEvent'] = function(av, aw) {
                    var ax = {
                        'id': aw,
                        'cid': am['CurrentChannel'],
                        'domian': am['IpInfo']['href']
                    };
                    if (W['StringIsNullOrEmpty'](am['webEventCode'])) {
                        if (!am['isS2S']) {
                            var ay = a3['Instance']['Server']['attrEvent'];
                            if (null != ay) {
                                var az = ay['get'](av);
                                null != az ? a2['ThirdAdapter']['trackEvent'](az, aw, ax) : a2['log']['logBusiness']('tryTrackEvent\x20failed:could\x20not\x20found\x20eventKey');
                            } else
                                a2['log']['logBusiness']('tryTrackEvent\x20failed:could\x20not\x20found\x20eventMap');
                        }
                    } else
                        a2['ThirdAdapter']['trackEvent'](av, aw, ax);
                }
                ,
                au['on_game_stage_change'] = function(av, aw, ax) {
                    aw == aj['login'] && this['onEnter'](!0x1);
                }
                ,
                au['onSendRegistCode'] = function(av) {
                    this['reqCaptchar'](a5['req']['requests']['regitst'], av);
                }
                ,
                au['onRegist'] = function(av) {
                    if (null != av) {
                        this['showLoading'](!0x0);
                        var aw = a3['Instance']['State']['deviceCode']
                          , ax = a3['Instance']['getLocalToken'](aw)
                          , ay = am['CurrentChannel']
                          , az = {
                            'registerType': av['registType'],
                            'deviceType': W['SysPlatformCode'],
                            'deviceCode': aw,
                            'token': ax['token'],
                            'timestamp': ax['syncStamp'],
                            'sourceChannel': ay,
                            'sourceUserId': am['sourceUserId'],
                            'adid': this['attributionDeviceCode'],
                            'lan': U['language'],
                            'fbp': am['fbp'],
                            'fbc': am['fbc'],
                            'pixelid': am['pixelid'],
                            'clickid': am['clickid'],
                            'Email': av['email']
                        }
                          , aA = av['registType'] == V['registType']['device'];
                        aA || (az['account'] = av['account'],
                        az['password'] = W['MD5'](av['password']),
                        az['phone'] = av['mobileNumber'],
                        az['phoneArea'] = av['areaCode'],
                        az['verifyCode'] = av['captcha']);
                        var aB = {
                            'loginType': aA ? V['loginType']['guest'] : V['loginType']['account'],
                            'loginAccount': av['mobileNumber'],
                            'loginPassword': av['password'],
                            'areaNo': av['areaCode'],
                            'logined': !0x1
                        };
                        a3['Instance']['setAccountState'](this, aB),
                        this['HttpPost'](a9['req']['cmd'], az, this['onRegisterSuccess']['bind'](this));
                    } else
                        a2['log']['logView']('loginMain-onRegist:params\x20==\x20null');
                }
                ,
                au['onRegisterSuccess'] = function(av) {
                    this['showLoading'](!0x1);
                    var aw = this['parseHttpData'](av);
                    if (aw['code'] == a6['success']) {
                        var ax = 0x1 == aw['new']
                          , ay = a3['Instance']['Account']['loginType']
                          , az = {
                            'loginType': ay,
                            'areaCode': a3['Instance']['Account']['areaNo']
                        };
                        if (ay == V['loginType']['account'])
                            az['account'] = a3['Instance']['Account']['loginAccount'],
                            az['password'] = a3['Instance']['Account']['loginPassword'],
                            ax = !0x0,
                            Z['storage']['set'](am['storageKey']['account'], a3['Instance']['Account']['loginAccount']),
                            null != a3['Instance']['Account']['areaNo'] && Z['storage']['set'](am['storageKey']['areaCode'], a3['Instance']['Account']['areaNo']),
                            Z['storage']['get'](am['storageKey']['bSavePsw']) && Z['storage']['set'](am['storageKey']['password'], a3['Instance']['Account']['loginPassword']),
                            this['viewMian']['Regist']['close'](),
                            this['viewMian']['Login']['refresh']();
                        this['onLogin'](az),
                        ax && (this['tryTrackEvent'](ao['register'], null),
                        this['postHttpLoginHandler'] = function(aB) {
                            a2['ThirdAdapter']['httpPostEvent'](ao['register'], aB);
                        }
                        );
                    } else {
                        var aA = {
                            'txt': ad['getLangByID'](an['ok']),
                            'click': function() {}
                        };
                        a7(aw['code'], !0x0, aA),
                        this['bFastLogin'] && (this['viewMian']['refresh'](),
                        this['viewMian']['show']());
                    }
                }
                ,
                au['onSendFindPswCode'] = function(av) {
                    this['reqCaptchar'](a5['req']['requests']['resetPassword'], av);
                }
                ,
                au['onResetPassword'] = function(av) {
                    if (null != av) {
                        this['showLoading'](!0x0);
                        var aw = a3['Instance']['State']['deviceCode']
                          , ax = a3['Instance']['getLocalToken'](aw)
                          , ay = G({
                            'type': ak['req']['requests']['resetPassword'],
                            'deviceType': W['SysPlatformCode'],
                            'deviceCode': aw,
                            'token': ax['token'],
                            'timestamp': ax['syncStamp']
                        }, av);
                        Z['storage']['set'](am['storageKey']['account'], av['phone']),
                        this['HttpPost'](ak['req']['cmd'], ay, this['onResetPasswordSuccess']['bind'](this));
                    } else
                        a2['log']['logView']('loginMain-onResetPassword:params\x20==\x20null');
                }
                ,
                au['onResetPasswordSuccess'] = function(av) {
                    this['showLoading'](!0x1);
                    var aw = this['parseHttpData'](av);
                    aw['code'] == a6['success'] ? (this['viewMian']['FindPsw']['close'](),
                    Z['storage']['remove'](am['storageKey']['password']),
                    this['viewMian']['Login']['show'](),
                    this['viewMian']['Login']['refresh']()) : a7(aw['code']);
                }
                ,
                au['onSendAccountVerifyCode'] = function(av) {
                    this['reqCaptchar'](a5['req']['requests']['securityVerify'], av);
                }
                ,
                au['onAccountVerify'] = function(av) {
                    if (this['showLoading'](!0x0),
                    null != av) {
                        var aw = a3['Instance']['State']['deviceCode']
                          , ax = a3['Instance']['getLocalToken'](aw)
                          , ay = G({
                            'type': ak['req']['requests']['safeVerify'],
                            'deviceType': W['SysPlatformCode'],
                            'deviceCode': aw,
                            'token': ax['token'],
                            'timestamp': ax['syncStamp'],
                            'isSimulator': !0x1
                        }, av);
                        this['HttpPost'](ak['req']['cmd'], ay, this['onAccountVerifySuccess']['bind'](this));
                    } else
                        a2['log']['logView']('loginMain-onAccountVerify:params\x20==\x20null');
                }
                ,
                au['onAccountVerifySuccess'] = function(av) {
                    this['showLoading'](!0x1);
                    var aw = this['parseHttpData'](av);
                    if (aw['code'] == a6['success']) {
                        var ax = {
                            'loginType': a3['Instance']['Account']['loginType'],
                            'areaCode': a3['Instance']['Account']['areaNo']
                        };
                        ax['account'] = a3['Instance']['Account']['loginAccount'],
                        ax['password'] = a3['Instance']['Account']['loginPassword'],
                        this['onLogin'](ax),
                        this['viewMian']['AccountSafe']['close']();
                    } else
                        a7(aw['code']);
                }
                ,
                au['reqCaptchar'] = function(av, aw) {
                    var ax = this;
                    if (null != aw) {
                        if (W['StringIsNullOrEmpty'](aw['areaCode']))
                            ;
                        else {
                            var ay = a3['Instance']['State']['deviceCode']
                              , az = a3['Instance']['getLocalToken'](ay)
                              , aA = {
                                'type': av,
                                'phone': aw['account'],
                                'phoneArea': aw['areaCode'],
                                'deviceCode': ay,
                                'token': az['token'],
                                'timestamp': az['syncStamp']
                            };
                            this['HttpPost'](a5['req']['cmd'], aA, function(aB) {
                                var aC = ax['parseHttpData'](aB);
                                if (aC['type'] = av,
                                aC['code'] != a6['success'])
                                    a7(aC['code']);
                                else {
                                    var aD = ad['getLangByTag']('send_msg', Y['lobby']);
                                    a2['toast'](aD),
                                    aC['verifyCode'];
                                }
                            });
                        }
                    } else
                        a2['log']['logView']('loginMain-reqCaptchar:data\x20==\x20null');
                }
                ,
                au['onDispose'] = function() {
                    as['prototype']['onDispose']['call'](this),
                    Z['gui']['remove'](a0['Login']);
                }
                ,
                at;
            }(X))['ID'] = Y['login'],
            ap = aq)) || ap),
            J['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/notify2.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './webGame.ts', './lobbyState.ts', './Oops.ts', './GameUIConfig.ts', './Language.ts', './platformData.ts', './CustomEventDefine.ts', './GameListConfig.ts'], function(b) {
    var j, k, q, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L;
    return {
        'setters': [function(M) {
            j = M['createClass'];
        }
        , function(M) {
            k = M['cclegacy'],
            q = M['_decorator'],
            w = M['UITransform'],
            x = M['Widget'],
            z = M['RichText'],
            A = M['Vec2'],
            B = M['js'],
            C = M['Vec3'],
            D = M['tween'];
        }
        , function(M) {
            E = M['webGame'];
        }
        , function(M) {
            F = M['lobbyState'];
        }
        , function(M) {
            G = M['oops'];
        }
        , function(M) {
            H = M['UIID'];
        }
        , function(M) {
            I = M['LanguageManager'];
        }
        , function(M) {
            J = M['PModuleID'];
        }
        , function(M) {
            K = M['WebGameEvent'];
        }
        , function(M) {
            L = M['GameBaseInfo'];
        }
        ],
        'execute': function() {
            var M, N;
            k['_RF']['push']({}, '20911H3655MWKvuj6aQ6F3s', 'notify', void 0x0);
            var O = q['ccclass'];
            q['property'],
            b('notify', O('notify')(((N = (function() {
                function P() {
                    this['gameNode'] = null,
                    this['notifyUIWidget'] = null,
                    this['notifyUITrans'] = null,
                    this['viewportWidget'] = null,
                    this['rtContent'] = null,
                    this['rtContentUITrans'] = null,
                    this['bInit'] = !0x1,
                    this['bShowBroadcastFlag'] = !0x0,
                    this['bShowTrueJackpot'] = !0x1,
                    this['zoomMultiple'] = new A(0x5,0xa),
                    this['zoomCoins'] = new A(0x32,0x96),
                    this['broadcastQueue'] = [],
                    this['moveSpeed'] = 0x96,
                    this['moveBroadcastTwer'] = void 0x0;
                }
                var Q = P['prototype'];
                return Q['init'] = function() {
                    var R = this;
                    if (!this['bInit']) {
                        var S = {
                            'onAdded': function(T, U) {
                                R['bindGameNode'](T),
                                R['openBroadcast'](!0x0);
                            }
                        };
                        G['gui']['open'](H['notify'], null, S),
                        this['bInit'] = !0x0;
                    }
                }
                ,
                Q['bindGameNode'] = function(R) {
                    if (null != R) {
                        if (this['IsBindNode'])
                            return E['log']['logBusiness']('notify\x20bindGameObject\x20gameNode\x20is\x20not\x20null'),
                            void R['destroy']();
                        this['gameNode'] = R,
                        this['notifyUITrans'] = this['gameNode']['getComponent'](w),
                        this['notifyUIWidget'] = this['gameNode']['getComponent'](x);
                        var S = this['gameNode']['getChildByName']('viewport');
                        this['viewportWidget'] = S['getComponent'](x),
                        this['rtContent'] = this['gameNode']['getComponentInChildren'](z),
                        this['rtContentUITrans'] = this['rtContent']['node']['getComponent'](w),
                        this['addListener']();
                    } else
                        E['log']['logBusiness']('notify\x20bindGameNode\x20gameNode\x20is\x20null');
                }
                ,
                Q['addListener'] = function() {
                    G['message']['on'](K['notify_show'], this['on_notify_show'], this),
                    G['message']['on'](K['notify_push'], this['on_notify_push'], this),
                    G['message']['on'](K['notify_resize'], this['on_notify_resize'], this);
                }
                ,
                Q['removeListener'] = function() {
                    G['message']['off'](K['notify_show'], this['on_notify_show'], this),
                    G['message']['off'](K['notify_push'], this['on_notify_push'], this),
                    G['message']['off'](K['notify_resize'], this['on_notify_resize'], this);
                }
                ,
                Q['on_notify_show'] = function(R, S) {
                    this['bShowBroadcastFlag'] = S,
                    this['openBroadcast'](S);
                }
                ,
                Q['on_notify_push'] = function(R, S, T) {
                    this['bShowBroadcastFlag'] && (null != S && S['length'] > 0x0 ? this['pushBroadcast'](S) : null != T && T['length'] > 0x0 && this['pushWinner'](T));
                }
                ,
                Q['on_notify_resize'] = function(R, S, T, U) {
                    this['resetWidget'](S, T, U);
                }
                ,
                Q['resetWidget'] = function(R, S, T) {
                    if (this['IsBindNode']) {
                        if (null == T)
                            T = new A(0x0,R ? 0x28 : 0x5a);
                        (null == S || S <= 0x0) && (S = R ? 0x2b2 : 0x230),
                        this['notifyUITrans']['width'] = S,
                        this['notifyUIWidget']['top'] = T['y'],
                        this['notifyUIWidget']['horizontalCenter'] = T['x'],
                        this['notifyUIWidget']['updateAlignment'](),
                        this['viewportWidget']['updateAlignment']();
                    } else
                        E['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                }
                ,
                Q['pushBroadcast'] = function(R, S) {
                    if (void 0x0 === S && (S = !0x0),
                    this['IsBindNode']) {
                        if (null != R && 0x0 != R['length']) {
                            R['sort'](function(U, V) {
                                return U['level'] - V['level'];
                            });
                            var T = [];
                            R['forEach'](function(U) {
                                var V = U['message']
                                  , W = U['showtimes'];
                                T['push']({
                                    'content': V,
                                    'loop': W
                                });
                            }),
                            this['insertBroadcast'](T, !0x0, S);
                        } else
                            E['log']['logBusiness']('notify\x20pushBroadcast\x20messages\x20is\x20null');
                    } else
                        E['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                }
                ,
                Q['pushWinner'] = function(R, S) {
                    var T = this;
                    if (void 0x0 === S && (S = !0x0),
                    this['IsBindNode']) {
                        if (null != R && 0x0 != R['length']) {
                            var U = [];
                            R['forEach'](function(V) {
                                var W = T['buildWinnerMessage'](V);
                                W && U['push']({
                                    'content': W,
                                    'loop': 0x1
                                });
                            }),
                            this['insertBroadcast'](U, !0x1, S);
                        } else
                            E['log']['logBusiness']('notify\x20pushWinner\x20messages\x20is\x20null');
                    } else
                        E['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                }
                ,
                Q['openBroadcast'] = function(R) {
                    this['IsBindNode'] ? (this['gameNode']['active'] = R,
                    R ? this['playBroadcast']() : this['tryStopMove']()) : E['log']['logBusiness']('notify\x20showBroadcast\x20gameNode\x20is\x20null');
                }
                ,
                Q['buildWinnerMessage'] = function(R) {
                    var S = R['winScore'];
                    if (null == S || S <= 0x0 || null == L[R['gameId']] || !L[R['gameId']]['open'])
                        return null;
                    var T = F['Instance']['PlayerBaseInfo']
                      , U = this['mixPlayerName'](R['userName'])
                      , V = 0x1 == R['type'];
                    if (!(T['name'] == U || V && this['bShowTrueJackpot'])) {
                        var W = Math['floor'](Math['random']() * (this['zoomCoins']['y'] - this['zoomCoins']['x'])) + this['zoomCoins']['x'];
                        S *= W *= 0xa / E['TranslateRate'],
                        S -= S % 0x64;
                    }
                    var X = I['getLangByTag']('name_' + R['gameId'])
                      , Y = '';
                    if (V)
                        Y = this['fmtWinnerMsg'](U, X, S);
                    else {
                        var Z = R['multiple'];
                        Z *= Math['random']() * (this['zoomMultiple']['y'] - this['zoomMultiple']['x']) + this['zoomMultiple']['x'],
                        Z = Math['floor'](Z),
                        Y = this['fmtWinnerMsg'](U, X, S, Z);
                    }
                    return Y;
                }
                ,
                Q['fmtWinnerMsg'] = function(R, S, T, U) {
                    var V = ''
                      , W = E['FormatCoins'](T);
                    if (null == U || U <= 0x0) {
                        var X = I['getLangByTag']('ft_jackpot_broadcast', J['lobby']);
                        V = B['formatStr'](X, R, S, W);
                    } else
                        V = (V = (V = (V = (V = I['getLangByTag']('ft_win_broadcast', J['lobby']))['replace']('@player', R))['replace']('@game', S))['replace']('@multiple', U['toString']()))['replace']('@coins', W);
                    return V;
                }
                ,
                Q['mixPlayerName'] = function(R) {
                    if (null == R || R['length'] <= 0x3)
                        return 'player***';
                    var S = R['substring'](0x0, 0x2);
                    return S += '***',
                    R['length'] > 0x5 && (S += R['substring'](R['length'] - 0x1)),
                    S;
                }
                ,
                Q['insertBroadcast'] = function(R, S, T) {
                    var U, V;
                    (void 0x0 === S && (S = !0x1),
                    void 0x0 === T && (T = !0x0),
                    S) ? (U = this['broadcastQueue'])['unshift']['apply'](U, R) : (V = this['broadcastQueue'])['push']['apply'](V, R),
                    null == this['moveBroadcastTwer'] && T && this['openBroadcast'](!0x0);
                }
                ,
                Q['tryStopMove'] = function() {
                    null != this['moveBroadcastTwer'] && (this['moveBroadcastTwer']['stop'](),
                    this['moveBroadcastTwer'] = null);
                }
                ,
                Q['playBroadcast'] = function() {
                    var R = this;
                    if (0x0 != this['broadcastQueue']['length']) {
                        if (this['IsBindNode']) {
                            this['tryStopMove']();
                            var S = this['notifyUITrans']['contentSize']['width'];
                            this['rtContent']['node']['setPosition'](new C(S / 0x2,0x0,0x0));
                            var T = this['broadcastQueue']['shift']();
                            this['rtContent']['string'] = T['content'];
                            var U = this['rtContentUITrans']['contentSize']['width']
                              , V = (U + S) / this['moveSpeed']
                              , W = new C(-S / 0x2 - U,0x0,0x0);
                            this['moveBroadcastTwer'] = D(this['rtContent']['node'])['to'](V, {
                                'position': W
                            }, {
                                'easing': 'linear'
                            })['call'](function() {
                                R['playBroadcast']();
                            })['start'](),
                            T['loop'] > 0x1 && (T['loop']--,
                            this['broadcastQueue']['push'](T));
                        } else
                            E['log']['logBusiness']('notify\x20playBroadcast\x20gameNode\x20is\x20null');
                    } else
                        this['openBroadcast'](!0x1);
                }
                ,
                Q['dispose'] = function() {
                    this['openBroadcast'](!0x1),
                    this['gameNode']['destroy'](),
                    this['removeListener'](),
                    P['_instance'] = null;
                }
                ,
                j(P, [{
                    'key': 'IsBindNode',
                    'get': function() {
                        return null != this['gameNode'];
                    }
                }], [{
                    'key': 'instance',
                    'get': function() {
                        return null == P['_instance'] && (P['_instance'] = new P()),
                        P['_instance'];
                    }
                }]),
                P;
            }()))['_instance'] = null,
            M = N)) || M),
            k['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/panelFindPsw.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './inputPhone.ts', './Language.ts', './webGame.ts', './stringDefine.ts', './gameRichText.ts', './sendButton.ts', './httpAccount.ts', './appConfig.ts'], function(j) {
    var k, q, v, x, z, A, B, D, E, F, G, H, I, J, K, L, M, N, O, P;
    return {
        'setters': [function(Q) {
            k = Q['applyDecoratedDescriptor'],
            q = Q['inheritsLoose'],
            v = Q['initializerDefineProperty'],
            x = Q['assertThisInitialized'];
        }
        , function(Q) {
            z = Q['cclegacy'],
            A = Q['_decorator'],
            B = Q['EditBox'],
            D = Q['Node'],
            E = Q['Button'];
        }
        , function(Q) {
            F = Q['Login'];
        }
        , function(Q) {
            G = Q['baseView'];
        }
        , function(Q) {
            H = Q['utils'];
        }
        , function(Q) {
            I = Q['inputPhone'];
        }
        , function(Q) {
            J = Q['LanguageManager'];
        }
        , function(Q) {
            K = Q['webGame'];
        }
        , function(Q) {
            L = Q['stringDefine'];
        }
        , function(Q) {
            M = Q['gameRichText'];
        }
        , function(Q) {
            N = Q['sendButton'];
        }
        , function(Q) {
            O = Q['HttpAccount'];
        }
        , function(Q) {
            P = Q['appConfig'];
        }
        ],
        'execute': function() {
            var Q, U, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae;
            z['_RF']['push']({}, 'dc7cemd6aRO7bupPb9f1f8A', 'panelFindPsw', void 0x0);
            var af = A['ccclass']
              , ag = A['property'];
            j('panelFindPsw', (Q = af('panelFindPsw'),
            U = ag({
                'type': I,
                'tooltip': '手机号输入框'
            }),
            W = ag({
                'type': B,
                'tooltip': '验证码输入框'
            }),
            X = ag({
                'type': N,
                'tooltip': '发送验证码按钮'
            }),
            Y = ag({
                'type': B,
                'tooltip': '密码输入框'
            }),
            Z = ag({
                'type': D,
                'tooltip': '确认密码根节点'
            }),
            a0 = ag({
                'type': B,
                'tooltip': '确认密码输入框'
            }),
            a1 = ag({
                'type': E,
                'tooltip': '返回按钮'
            }),
            a2 = ag({
                'type': E,
                'tooltip': '找回密码按钮'
            }),
            a3 = ag({
                'type': M,
                'tooltip': '登录富文本'
            }),
            Q((a6 = k((a5 = function(ah) {
                function ai() {
                    for (var ak, al = arguments['length'], am = new Array(al), an = 0x0; an < al; an++)
                        am[an] = arguments[an];
                    return ak = ah['call']['apply'](ah, [this]['concat'](am)) || this,
                    v(ak, 'inputPhone', a6, x(ak)),
                    v(ak, 'inputCode', a7, x(ak)),
                    v(ak, 'btnSendCode', a8, x(ak)),
                    v(ak, 'inputPassword', a9, x(ak)),
                    v(ak, 'nodeAffirm', aa, x(ak)),
                    v(ak, 'inputAffirm', ab, x(ak)),
                    v(ak, 'btnBack', ac, x(ak)),
                    v(ak, 'btnFind', ad, x(ak)),
                    v(ak, 'gRtLogin', ae, x(ak)),
                    ak;
                }
                q(ai, ah);
                var aj = ai['prototype'];
                return aj['onInit'] = function() {
                    H['ButtonBindClick'](this['btnBack'], this['onBtnBackClick'], this),
                    H['ButtonBindClick'](this['btnFind'], this['onBtnFindClick'], this),
                    this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                    this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                }
                ,
                aj['AddListener'] = function() {
                    ah['prototype']['AddListener']['call'](this),
                    this['RegistMsg'](F['msgID']['showFindPsw'], this['onShowFindPsw']);
                }
                ,
                aj['RemoveListener'] = function() {
                    ah['prototype']['RemoveListener']['call'](this),
                    this['LogoutMsg'](F['msgID']['showFindPsw']);
                }
                ,
                aj['refresh'] = function(ak) {
                    var al = P['areaCodeList']
                      , am = K['getString'](P['storageKey']['areaCode']);
                    H['StringIsNullOrEmpty'](am) && (am = P['defaultAreaCode']),
                    this['inputPhone']['reset'](al, am, ak),
                    this['inputCode']['string'] = '',
                    this['inputPassword']['string'] = '',
                    this['inputAffirm']['string'] = '';
                }
                ,
                aj['onShowFindPsw'] = function() {
                    this['show'](),
                    this['refresh']();
                }
                ,
                aj['onBtnBackClick'] = function() {
                    this['close'](),
                    this['Call'](F['modID']['login'], F['msgID']['showLogin']);
                }
                ,
                aj['onBtnSendCodeClick'] = function() {
                    var ak = {
                        'area': this['inputPhone']['areaCode'],
                        'number': this['inputPhone']['phone']
                    };
                    if (!H['checkPhoneValid'](ak)) {
                        var al = L['tips_input_phone'];
                        return al = J['getLangByID'](al),
                        K['toast'](al),
                        void this['btnSendCode']['reset']();
                    }
                    var am = {
                        'account': ak['number'],
                        'areaCode': ak['area']
                    };
                    this['Call'](F['modID']['root'], F['msgID']['sendFindPswCode'], am);
                }
                ,
                aj['onBtnFindClick'] = function() {
                    var ak = {
                        'area': this['inputPhone']['areaCode'],
                        'number': this['inputPhone']['phone']
                    };
                    if (!H['checkPhoneValid'](ak)) {
                        var al = L['tips_input_phone'];
                        return al = J['getLangByID'](al),
                        void K['toast'](al);
                    }
                    var am = this['inputCode']['string'];
                    if (H['StringIsNullOrEmpty'](am) || am['length'] < 0x4) {
                        var an = L['tisp_captcha_short'];
                        return an = J['getLangByID'](an),
                        void K['toast'](an);
                    }
                    var ao = this['inputPassword']['string'];
                    if (H['StringIsNullOrEmpty'](ao) || ao['length'] < 0x6) {
                        var ap = L['tips_short_psw'];
                        return ap = J['getLangByID'](ap),
                        void K['toast'](ap);
                    }
                    if (this['inputAffirm']['string'] != ao) {
                        var aq = L['tips_confirm_diff'];
                        return aq = J['getLangByID'](aq),
                        void K['toast'](aq);
                    }
                    var ar = {
                        'type': O['req']['requests']['resetPassword'],
                        'phoneArea': ak['area'],
                        'phone': ak['number'],
                        'verifyCode': am,
                        'password': H['MD5'](ao)
                    };
                    this['Call'](F['modID']['root'], F['msgID']['resetPassword'], ar);
                }
                ,
                aj['onReceiveCaptchar'] = function(ak) {
                    this['inputCode']['string'] = ak;
                }
                ,
                ai;
            }(G))['prototype'], 'inputPhone', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = k(a5['prototype'], 'inputCode', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a8 = k(a5['prototype'], 'btnSendCode', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a9 = k(a5['prototype'], 'inputPassword', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aa = k(a5['prototype'], 'nodeAffirm', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ab = k(a5['prototype'], 'inputAffirm', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ac = k(a5['prototype'], 'btnBack', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ad = k(a5['prototype'], 'btnFind', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ae = k(a5['prototype'], 'gRtLogin', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a4 = a5)) || a4)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/panelLogin.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './Oops.ts', './gameRichText.ts', './inputPhone.ts', './Language.ts', './stringDefine.ts', './webGame.ts', './appConfig.ts'], function(j) {
    var k, m, q, x, z, A, B, D, E, F, G, H, I, J, K, M, N, O, P, Q, R;
    return {
        'setters': [function(S) {
            k = S['applyDecoratedDescriptor'],
            m = S['inheritsLoose'],
            q = S['initializerDefineProperty'],
            x = S['assertThisInitialized'];
        }
        , function(S) {
            z = S['cclegacy'],
            A = S['_decorator'],
            B = S['EditBox'],
            D = S['Button'],
            E = S['Toggle'],
            F = S['Label'],
            G = S['sys'];
        }
        , function(S) {
            H = S['Login'];
        }
        , function(S) {
            I = S['baseView'];
        }
        , function(S) {
            J = S['utils'];
        }
        , function(S) {
            K = S['oops'];
        }
        , function(S) {
            M = S['gameRichText'];
        }
        , function(S) {
            N = S['inputPhone'];
        }
        , function(S) {
            O = S['LanguageManager'];
        }
        , function(S) {
            P = S['stringDefine'];
        }
        , function(S) {
            Q = S['webGame'];
        }
        , function(S) {
            R = S['appConfig'];
        }
        ],
        'execute': function() {
            var U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa;
            z['_RF']['push']({}, '336d5dXYENDdKhXMOFQQ5FU', 'panelLogin', void 0x0);
            var ab = A['ccclass']
              , ac = A['property'];
            j('panelLogin', (U = ab('panelLogin'),
            V = ac({
                'type': N,
                'tooltip': '手机号输入框'
            }),
            W = ac({
                'type': B,
                'tooltip': '密码输入框'
            }),
            X = ac({
                'type': D,
                'tooltip': '注册按钮'
            }),
            Y = ac({
                'type': M,
                'tooltip': '忘记密码'
            }),
            Z = ac({
                'type': D,
                'tooltip': '游客登录按钮'
            }),
            a0 = ac({
                'type': D,
                'tooltip': '登录按钮'
            }),
            a1 = ac({
                'type': E,
                'tooltip': '记住密码勾选'
            }),
            U((a4 = k((a3 = function(ad) {
                function ae() {
                    for (var ag, ah = arguments['length'], ai = new Array(ah), aj = 0x0; aj < ah; aj++)
                        ai[aj] = arguments[aj];
                    return ag = ad['call']['apply'](ad, [this]['concat'](ai)) || this,
                    q(ag, 'inputPhone', a4, x(ag)),
                    q(ag, 'inputPassword', a5, x(ag)),
                    q(ag, 'btn_register', a6, x(ag)),
                    q(ag, 'gRtForget', a7, x(ag)),
                    q(ag, 'btnGuest', a8, x(ag)),
                    ag['lblGuest'] = null,
                    ag['lbReigster'] = null,
                    q(ag, 'btnLogin', a9, x(ag)),
                    q(ag, 'togSavePsw', aa, x(ag)),
                    ag;
                }
                m(ae, ad);
                var af = ae['prototype'];
                return af['onInit'] = function() {
                    this['gRtForget']['bindClickHandler'](this['onClickForget'], this),
                    this['lblGuest'] = this['btnGuest']['node']['getComponentInChildren'](F),
                    this['lbReigster'] = this['btn_register']['node']['getComponentInChildren'](F),
                    this['updateGuestBtn'](),
                    J['ButtonBindClick'](this['btnLogin'], this['onClickLogin'], this),
                    this['togSavePsw']['node']['on'](E['EventType']['TOGGLE'], this['onChangeSavePsw'], this),
                    G['isNative'] ? (J['ButtonBindClick'](this['btn_register'], this['onClickGuest'], this),
                    J['ButtonBindClick'](this['btnGuest'], this['onClickRegister'], this),
                    this['lblGuest'] && (this['lblGuest']['string'] = O['getLangByTag']('register')),
                    this['lbReigster'] && (this['lbReigster']['string'] = O['getLangByTag']('guest'))) : (J['ButtonBindClick'](this['btn_register'], this['onClickRegister'], this),
                    J['ButtonBindClick'](this['btnGuest'], this['onClickGuest'], this));
                }
                ,
                af['updateGuestBtn'] = function() {
                    G['isBrowser'] ? this['btnGuest']['node']['active'] = R['bSupportGuestLogin'] : this['lblGuest']['string'] = O['getLangByTag']('register');
                }
                ,
                af['AddListener'] = function() {
                    ad['prototype']['AddListener']['call'](this),
                    this['RegistMsg'](H['msgID']['showLogin'], this['onShowLogin']);
                }
                ,
                af['RemoveListener'] = function() {
                    ad['prototype']['RemoveListener']['call'](this),
                    this['LogoutMsg'](H['msgID']['showLogin']);
                }
                ,
                af['onShowLogin'] = function() {
                    this['show']();
                }
                ,
                af['refresh'] = function() {
                    this['updateGuestBtn']();
                    var ag = K['storage']['get'](R['storageKey']['areaCode'])
                      , ah = K['storage']['get'](R['storageKey']['account'])
                      , ai = R['areaCodeList'];
                    J['StringIsNullOrEmpty'](ag) && (ag = R['defaultAreaCode']),
                    this['inputPhone']['reset'](ai, ag, ah);
                    var aj = K['storage']['getBoolean'](R['storageKey']['bSavePsw']);
                    null == aj && (aj = !0x0),
                    this['togSavePsw']['isChecked'] = aj;
                    var ak = aj && K['storage']['get'](R['storageKey']['password']) || '';
                    this['inputPassword']['string'] = ak;
                }
                ,
                af['onChangeSavePsw'] = function(ag) {
                    var ah = ag['isChecked'];
                    if (K['storage']['set'](R['storageKey']['bSavePsw'], ah),
                    ah) {
                        var ai = this['inputPassword']['string'];
                        0x0 == J['StringIsNullOrEmpty'](ai) && K['storage']['set'](R['storageKey']['password'], ai);
                    } else
                        K['storage']['remove'](R['storageKey']['password']);
                }
                ,
                af['onClickRegister'] = function() {
                    this['close'](),
                    this['Call'](H['modID']['regist'], H['msgID']['showRegist']);
                }
                ,
                af['onClickForget'] = function() {
                    this['close'](),
                    this['Call'](H['modID']['findPsw'], H['msgID']['showFindPsw']);
                }
                ,
                af['onClickGuest'] = function() {
                    var ag = this;
                    if (R['bSupportGuestLogin']) {
                        var ah = function() {
                            var ai = {
                                'registType': H['registType']['device']
                            };
                            ag['Call'](H['modID']['root'], H['msgID']['regist'], ai);
                        };
                        (G['isBrowser'] || G['isNative']) && ah();
                    } else
                        this['onClickRegister']();
                }
                ,
                af['onClickLogin'] = function() {
                    var ag = this['inputPhone']['areaCode'];
                    if (J['StringIsNullOrEmpty'](ag)) {
                        var ah = P['tips_input_phone'];
                        return ah = O['getLangByID'](ah),
                        void Q['toast'](ah);
                    }
                    var ai = {
                        'area': ag,
                        'number': this['inputPhone']['phone']
                    };
                    if (!J['checkPhoneValid'](ai)) {
                        var aj = P['tips_input_phone'];
                        return aj = O['getLangByID'](aj),
                        void Q['toast'](aj);
                    }
                    var ak = this['inputPassword']['string'];
                    if (J['StringIsNullOrEmpty'](ak)) {
                        var al = P['tips_input_psw'];
                        return al = O['getLangByID'](al),
                        void Q['toast'](al);
                    }
                    this['onChangeSavePsw'](this['togSavePsw']);
                    var am = {
                        'loginType': H['loginType']['account'],
                        'account': ai['number'],
                        'password': ak,
                        'areaCode': ai['area']
                    };
                    this['Call'](H['modID']['root'], H['msgID']['login'], am);
                }
                ,
                ae;
            }(I))['prototype'], 'inputPhone', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a5 = k(a3['prototype'], 'inputPassword', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a6 = k(a3['prototype'], 'btn_register', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a7 = k(a3['prototype'], 'gRtForget', [Y], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a8 = k(a3['prototype'], 'btnGuest', [Z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a9 = k(a3['prototype'], 'btnLogin', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aa = k(a3['prototype'], 'togSavePsw', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2 = a3)) || a2)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/panelRegist.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './inputPhone.ts', './gameRichText.ts', './sendButton.ts', './Language.ts', './webGame.ts', './stringDefine.ts', './appConfig.ts', './platformData.ts', './richTextHandler.ts', './lobbyState.ts', './clearInput.ts'], function(j) {
    var q, x, z, A, D, E, F, G, H, I, J, K, L, M, N, O, Q, S, T, U, V, W, X, Y, Z;
    return {
        'setters': [function(a0) {
            q = a0['applyDecoratedDescriptor'],
            x = a0['inheritsLoose'],
            z = a0['initializerDefineProperty'],
            A = a0['assertThisInitialized'];
        }
        , function(a0) {
            D = a0['cclegacy'],
            E = a0['_decorator'],
            F = a0['Button'],
            G = a0['Node'],
            H = a0['EditBox'],
            I = a0['Toggle'],
            J = a0['RichText'];
        }
        , function(a0) {
            K = a0['Login'];
        }
        , function(a0) {
            L = a0['baseView'];
        }
        , function(a0) {
            M = a0['utils'];
        }
        , function(a0) {
            N = a0['inputPhone'];
        }
        , function(a0) {
            O = a0['gameRichText'];
        }
        , function(a0) {
            Q = a0['sendButton'];
        }
        , function(a0) {
            S = a0['LanguageManager'];
        }
        , function(a0) {
            T = a0['webGame'];
        }
        , function(a0) {
            U = a0['stringDefine'];
        }
        , function(a0) {
            V = a0['appConfig'];
        }
        , function(a0) {
            W = a0['PModuleID'];
        }
        , function(a0) {
            X = a0['richTextHandler'];
        }
        , function(a0) {
            Y = a0['lobbyState'];
        }
        , function(a0) {
            Z = a0['clearInput'];
        }
        ],
        'execute': function() {
            var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as;
            D['_RF']['push']({}, 'cb464YysU9AoanwP14Qw5B5', 'panelRegist', void 0x0);
            var at = E['ccclass']
              , au = E['property'];
            j('panelRegist', (a0 = at('panelRegist'),
            a1 = au({
                'type': F,
                'tooltip': '返回按钮'
            }),
            a2 = au({
                'type': F,
                'tooltip': '注册按钮'
            }),
            a3 = au({
                'type': N,
                'tooltip': '手机号输入框'
            }),
            a4 = au({
                'type': G,
                'tooltip': '验证码根节点'
            }),
            a5 = au({
                'type': H,
                'tooltip': '验证码输入框'
            }),
            a6 = au({
                'type': Q,
                'tooltip': '发送验证码按钮'
            }),
            a7 = au({
                'type': H,
                'tooltip': '密码输入框'
            }),
            a8 = au({
                'type': G,
                'tooltip': '确认密码根节点'
            }),
            a9 = au({
                'type': H,
                'tooltip': '确认密码输入框'
            }),
            aa = au({
                'type': O,
                'tooltip': '登录富文本'
            }),
            ab = au({
                'type': I,
                'tooltip': '游戏权限许可勾选'
            }),
            ac = au({
                'type': J,
                'tooltip': '游戏权限许可富文本'
            }),
            ad = au({
                'type': Z,
                'tooltip': '输入邮箱'
            }),
            a0((ag = q((af = function(av) {
                function aw() {
                    for (var ay, az = arguments['length'], aA = new Array(az), aB = 0x0; aB < az; aB++)
                        aA[aB] = arguments[aB];
                    return ay = av['call']['apply'](av, [this]['concat'](aA)) || this,
                    z(ay, 'btnBack', ag, A(ay)),
                    z(ay, 'btnRegist', ah, A(ay)),
                    z(ay, 'inputPhone', ai, A(ay)),
                    z(ay, 'nodeCode', aj, A(ay)),
                    z(ay, 'inputCode', ak, A(ay)),
                    z(ay, 'btnSendCode', al, A(ay)),
                    z(ay, 'inputPassword', am, A(ay)),
                    z(ay, 'nodeAffirm', an, A(ay)),
                    z(ay, 'inputAffirm', ao, A(ay)),
                    z(ay, 'gRtLogin', ap, A(ay)),
                    z(ay, 'togPermission', aq, A(ay)),
                    z(ay, 'rtPermission', ar, A(ay)),
                    z(ay, 'inputEmail', as, A(ay)),
                    ay['bNeedCode'] = !0x0,
                    ay['bNeedComffirm'] = !0x0,
                    ay;
                }
                x(aw, av);
                var ax = aw['prototype'];
                return ax['onInit'] = function() {
                    var ay;
                    M['ButtonBindClick'](this['btnBack'], this['onBtnBackClick'], this),
                    M['ButtonBindClick'](this['btnRegist'], this['onBtnRegistClick'], this),
                    this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                    this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                    var az = null == (ay = this['rtPermission']) ? void 0x0 : ay['node']['getComponent'](X);
                    null == az || az['bindClickHandler'](this['onClickPermission'], this);
                }
                ,
                ax['AddListener'] = function() {
                    av['prototype']['AddListener']['call'](this),
                    this['RegistMsg'](K['msgID']['showRegist'], this['onShowRegist']);
                }
                ,
                ax['RemoveListener'] = function() {
                    av['prototype']['RemoveListener']['call'](this),
                    this['LogoutMsg'](K['msgID']['showRegist']);
                }
                ,
                ax['onClickPermission'] = function(ay) {
                    T['log']['logBusiness']('click\x20team\x20service\x20' + ay);
                }
                ,
                ax['onShowRegist'] = function() {
                    this['show']();
                    var ay = Y['Instance']['Server']['bRegNeedCode']
                      , az = V['bNeedEnsurePsw'];
                    this['refresh'](ay, az);
                }
                ,
                ax['refresh'] = function(ay, az) {
                    void 0x0 === ay && (ay = !0x0),
                    void 0x0 === az && (az = !0x0),
                    this['nodeCode']['active'] = ay,
                    this['bNeedCode'] = ay,
                    this['nodeAffirm']['active'] = az,
                    this['bNeedComffirm'] = az;
                    var aA = V['areaCodeList'];
                    this['inputPhone']['reset'](aA),
                    ay && (this['inputCode']['string'] = ''),
                    this['inputPassword']['string'] = '',
                    az && (this['inputAffirm']['string'] = '');
                    var aB = S['getLangByTag']('rtPermission', W['lobby']);
                    this['rtPermission']['string'] = aB,
                    this['inputEmail']['Input']['string'] = '',
                    this['inputEmail']['node']['active'] = !0x1;
                }
                ,
                ax['onBtnBackClick'] = function() {
                    this['close'](),
                    this['Call'](K['modID']['login'], K['msgID']['showLogin']);
                }
                ,
                ax['onShow'] = function() {
                    this['btnSendCode']['reset']();
                }
                ,
                ax['onBtnSendCodeClick'] = function() {
                    var ay = {
                        'area': this['inputPhone']['areaCode'],
                        'number': this['inputPhone']['phone']
                    };
                    if (!M['checkPhoneValid'](ay)) {
                        var az = U['tips_input_phone'];
                        return az = S['getLangByID'](az),
                        T['toast'](az),
                        void this['btnSendCode']['reset']();
                    }
                    var aA = {
                        'account': ay['number'],
                        'areaCode': ay['area']
                    };
                    this['Call'](K['modID']['root'], K['msgID']['sendRegistCode'], aA);
                }
                ,
                ax['onBtnRegistClick'] = function() {
                    var ay = {
                        'area': this['inputPhone']['areaCode'],
                        'number': this['inputPhone']['phone']
                    };
                    if (!M['checkPhoneValid'](ay)) {
                        var az = U['tips_input_phone'];
                        return az = S['getLangByID'](az),
                        void T['toast'](az);
                    }
                    var aA = null;
                    if (this['bNeedCode']) {
                        var aB = this['inputCode']['string'];
                        if (M['StringIsNullOrEmpty'](aB) || aB['length'] < 0x4) {
                            var aC = U['tisp_captcha_short'];
                            return aC = S['getLangByID'](aC),
                            void T['toast'](aC);
                        }
                        aA = aB;
                    }
                    var aD = this['inputPassword']['string'];
                    if (M['StringIsNullOrEmpty'](aD) || aD['length'] < 0x6) {
                        var aE = U['tips_short_psw'];
                        return aE = S['getLangByID'](aE),
                        void T['toast'](aE);
                    }
                    if (this['bNeedComffirm'] && aD != this['inputAffirm']['string']) {
                        var aF = U['tips_confirm_diff'];
                        return aF = S['getLangByID'](aF),
                        void T['toast'](aF);
                    }
                    var aG = this['inputEmail']['Input']['string'];
                    if (!this['togPermission']['isChecked']) {
                        var aH = U['tips_get_permission'];
                        return aH = S['getLangByID'](aH),
                        void T['toast'](aH);
                    }
                    var aI = {
                        'registType': K['registType']['mobile'],
                        'mobileNumber': ay['number'],
                        'password': aD,
                        'areaCode': ay['area'],
                        'captcha': aA,
                        'email': aG
                    };
                    this['Call'](K['modID']['root'], K['msgID']['regist'], aI);
                }
                ,
                ax['onReceiveCaptchar'] = function(ay) {
                    this['inputCode']['string'] = ay;
                }
                ,
                aw;
            }(L))['prototype'], 'btnBack', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ah = q(af['prototype'], 'btnRegist', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ai = q(af['prototype'], 'inputPhone', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aj = q(af['prototype'], 'nodeCode', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ak = q(af['prototype'], 'inputCode', [a5], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            al = q(af['prototype'], 'btnSendCode', [a6], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            am = q(af['prototype'], 'inputPassword', [a7], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            an = q(af['prototype'], 'nodeAffirm', [a8], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ao = q(af['prototype'], 'inputAffirm', [a9], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ap = q(af['prototype'], 'gRtLogin', [aa], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aq = q(af['prototype'], 'togPermission', [ab], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ar = q(af['prototype'], 'rtPermission', [ac], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            as = q(af['prototype'], 'inputEmail', [ad], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ae = af)) || ae)),
            D['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/panelVerify.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './gameRichText.ts', './sendButton.ts', './loginConfig.ts', './stringDefine.ts', './Language.ts', './webGame.ts', './utils.ts'], function(j) {
    var k, m, q, v, w, x, z, A, B, C, D, E, F, G, H, I, J;
    return {
        'setters': [function(K) {
            k = K['applyDecoratedDescriptor'],
            m = K['inheritsLoose'],
            q = K['initializerDefineProperty'],
            v = K['assertThisInitialized'];
        }
        , function(K) {
            w = K['cclegacy'],
            x = K['_decorator'],
            z = K['Button'],
            A = K['Label'],
            B = K['EditBox'];
        }
        , function(K) {
            C = K['baseView'];
        }
        , function(K) {
            D = K['gameRichText'];
        }
        , function(K) {
            E = K['sendButton'];
        }
        , function(K) {
            F = K['Login'];
        }
        , function(K) {
            G = K['stringDefine'];
        }
        , function(K) {
            H = K['LanguageManager'];
        }
        , function(K) {
            I = K['webGame'];
        }
        , function(K) {
            J = K['utils'];
        }
        ],
        'execute': function() {
            var K, M, N, O, P, Q, U, W, X, Y, Z, a0, a1, a2, a3;
            w['_RF']['push']({}, '60c7de8DHFHzrGsb07Oj/2i', 'panelVerify', void 0x0);
            var a4 = x['ccclass']
              , a5 = x['property'];
            j('panelVerify', (K = a4('panelVerify'),
            M = a5({
                'type': D,
                'tooltip': '登录富文本'
            }),
            N = a5({
                'type': z,
                'tooltip': '返回按钮'
            }),
            O = a5({
                'type': z,
                'tooltip': '验证按钮'
            }),
            P = a5({
                'type': A,
                'tooltip': '账号文本'
            }),
            Q = a5({
                'type': B,
                'tooltip': '验证码输入框'
            }),
            U = a5({
                'type': E,
                'tooltip': '验证码发送按钮'
            }),
            K((Y = k((X = function(a6) {
                function a7() {
                    for (var a9, aa = arguments['length'], ab = new Array(aa), ac = 0x0; ac < aa; ac++)
                        ab[ac] = arguments[ac];
                    return a9 = a6['call']['apply'](a6, [this]['concat'](ab)) || this,
                    q(a9, 'gRtLogin', Y, v(a9)),
                    q(a9, 'btnBack', Z, v(a9)),
                    q(a9, 'btnVerify', a0, v(a9)),
                    q(a9, 'lbAccount', a1, v(a9)),
                    q(a9, 'inputCode', a2, v(a9)),
                    q(a9, 'btnSendCode', a3, v(a9)),
                    a9['areaCode'] = null,
                    a9['account'] = null,
                    a9;
                }
                m(a7, a6);
                var a8 = a7['prototype'];
                return a8['onInit'] = function() {
                    this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                    this['btnBack']['node']['on'](z['EventType']['CLICK'], this['onBtnBackClick'], this),
                    this['btnVerify']['node']['on'](z['EventType']['CLICK'], this['onBtnVerifyClick'], this),
                    this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                }
                ,
                a8['AddListener'] = function() {
                    a6['prototype']['AddListener']['call'](this),
                    this['RegistMsg'](F['msgID']['showAccountVerify'], this['onShowVerify']);
                }
                ,
                a8['RemoveListener'] = function() {
                    a6['prototype']['RemoveListener']['call'](this),
                    this['LogoutMsg'](F['msgID']['showAccountVerify']);
                }
                ,
                a8['onShowVerify'] = function(a9, aa) {
                    this['show'](),
                    this['refresh'](a9, aa);
                }
                ,
                a8['refresh'] = function(a9, aa) {
                    void 0x0 === a9 && (a9 = ''),
                    void 0x0 === aa && (aa = ''),
                    this['areaCode'] = aa,
                    this['account'] = a9;
                    var ab = a9;
                    aa && (ab = '+' + aa + '-' + a9),
                    this['lbAccount']['string'] = ab,
                    this['inputCode']['string'] = '';
                }
                ,
                a8['onBtnBackClick'] = function() {
                    this['close'](),
                    this['Call'](F['modID']['login'], F['msgID']['showLogin']);
                }
                ,
                a8['onBtnVerifyClick'] = function() {
                    var a9 = this['inputCode']['string'];
                    if (J['StringIsNullOrEmpty'](a9) || a9['length'] < 0x4) {
                        var aa = G['tisp_captcha_short'];
                        return aa = H['getLangByID'](aa),
                        void I['toast'](aa);
                    }
                    var ab = {
                        'phoneArea': this['areaCode'],
                        'phone': this['account'],
                        'verifyCode': a9
                    };
                    this['Call'](F['modID']['root'], F['msgID']['accountVerify'], ab);
                }
                ,
                a8['onBtnSendCodeClick'] = function() {
                    var a9 = {
                        'account': this['account'],
                        'areaCode': this['areaCode']
                    };
                    this['Call'](F['modID']['root'], F['msgID']['sendAccountVerifyCode'], a9);
                }
                ,
                a8['onReceiveCaptchar'] = function(a9) {
                    this['inputCode']['string'] = a9;
                }
                ,
                a7;
            }(C))['prototype'], 'gRtLogin', [M], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Z = k(X['prototype'], 'btnBack', [N], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a0 = k(X['prototype'], 'btnVerify', [O], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = k(X['prototype'], 'lbAccount', [P], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2 = k(X['prototype'], 'inputCode', [Q], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a3 = k(X['prototype'], 'btnSendCode', [U], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            W = X)) || W)),
            w['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/pb_error_code.ts', ['cc'], function(a) {
    var b, d;
    return {
        'setters': [function(f) {
            b = f['cclegacy'],
            d = f['_decorator'];
        }
        ],
        'execute': function() {
            b['_RF']['push']({}, 'd29cb6aho1FbKXJG7rkG573', 'pb_error_code', void 0x0),
            (d['ccclass'],
            d['property'],
            a('pb_error_code', {
                'success': 0x0
            })),
            b['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/popManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gMod.ts', './webGame.ts', './appConfig.ts'], function(a) {
    var b, c, d, f, g, h, j, k;
    return {
        'setters': [function(l) {
            b = l['createClass'],
            c = l['inheritsLoose'];
        }
        , function(l) {
            d = l['cclegacy'],
            f = l['_decorator'],
            g = l['sys'];
        }
        , function(l) {
            h = l['gMod'];
        }
        , function(l) {
            j = l['webGame'];
        }
        , function(l) {
            k = l['appConfig'];
        }
        ],
        'execute': function() {
            var m;
            d['_RF']['push']({}, '51cbbRP7AxO7alJPg0zwLoz', 'popManager', void 0x0);
            var q = f['ccclass']
              , v = (f['property'],
            a('lobbyPopJob', (function() {
                function w(y, z, A) {
                    this['popType'] = v['none'],
                    this['popTime'] = 0x1,
                    this['waitTime'] = 0x0,
                    this['timer'] = 0x0,
                    this['canPopUp'] = void 0x0,
                    this['showView'] = void 0x0,
                    this['popType'] = y,
                    this['popTime'] = z,
                    this['waitTime'] = A,
                    this['resetTimer']();
                }
                var x = w['prototype'];
                return x['resetTimer'] = function(y) {
                    this['timer'] = null != y ? Math['max'](0x0, y) : Math['max'](0x0, this['waitTime']);
                }
                ,
                x['updateTimer'] = function(y) {
                    return !(this['timer'] > 0x0 && (this['timer'] -= y,
                    this['timer'] > 0x0));
                }
                ,
                x['popUp'] = function() {
                    var y;
                    if (this['popTime'] <= 0x0)
                        return !0x1;
                    var z, A = null == (y = this['canPopUp']) ? void 0x0 : y['call'](this);
                    return A && (null == (z = this['showView']) || z['call'](this),
                    this['popTime']--),
                    A;
                }
                ,
                b(w, [{
                    'key': 'PopType',
                    'get': function() {
                        return this['popType'];
                    }
                }, {
                    'key': 'hasPopTime',
                    'get': function() {
                        return this['popTime'] > 0x0;
                    }
                }]),
                w;
            }())),
            a('popJobType', function(w) {
                return w[w['none'] = 0x0] = 'none',
                w[w['other'] = 0x1] = 'other',
                w[w['bindTips'] = 0x2] = 'bindTips',
                w[w['firstOffer'] = 0x3] = 'firstOffer',
                w[w['secondOffer'] = 0x4] = 'secondOffer',
                w[w['activity'] = 0x5] = 'activity',
                w[w['download'] = 0x6] = 'download',
                w[w['stageCharge'] = 0x7] = 'stageCharge',
                w[w['cashFreeFirst'] = 0x8] = 'cashFreeFirst',
                w;
            }({})));
            a('popManager', q('popManager')(m = function(w) {
                function x() {
                    for (var z, A = arguments['length'], B = new Array(A), C = 0x0; C < A; C++)
                        B[C] = arguments[C];
                    return (z = w['call']['apply'](w, [this]['concat'](B)) || this)['popQueue'] = [],
                    z['popFlag'] = new Map(),
                    z['curPop'] = null,
                    z['curPopType'] = v['none'],
                    z['popWindowMap'] = new Map(),
                    z['bPoping'] = !0x1,
                    z['controlList'] = [v['bindTips'], v['firstOffer'], v['secondOffer'], v['activity'], v['download']],
                    z['lastUpdateTime'] = 0x0,
                    z['bPausePop'] = !0x1,
                    z;
                }
                c(x, w);
                var y = x['prototype'];
                return y['isJobInQueue'] = function(z) {
                    for (var A = 0x0; A < this['popQueue']['length']; A++) {
                        if (this['popQueue'][A]['PopType'] == z['PopType'])
                            return A;
                    }
                    return -0x1;
                }
                ,
                y['addPopJob'] = function(z, A, B) {
                    if (void 0x0 === A && (A = !0x1),
                    void 0x0 === B && (B = !0x0),
                    null != z) {
                        if (this['popFlag']['has'](z['PopType'])) {
                            if (!this['popFlag']['get'](z['PopType']))
                                return void j['log']['logBusiness']('popManager-addPopJob:popFlag\x20block\x20' + z['PopType']);
                            j['log']['logBusiness']('popManager-addPopJob:popFlag\x20' + z['PopType'] + '\x20is\x20pass');
                        }
                        var C = this['isJobInQueue'](z);
                        if (C > -0x1)
                            return j['log']['logBusiness'](z['PopType'], 'popManager-addPopJob:isJobInQueue'),
                            void (A && (this['popQueue']['splice'](C, 0x1),
                            this['popQueue']['unshift'](z)));
                        null == this['popQueue'] && (this['popQueue'] = []),
                        A ? this['popQueue']['unshift'](z) : this['popQueue']['push'](z),
                        B && this['popUp']();
                    } else
                        j['log']['logBusiness']('popManager-addPopJob:try\x20to\x20add\x20null\x20job');
                }
                ,
                y['popUp'] = function(z) {
                    if (this['curPopType'] == v['none']) {
                        if (this['bPoping'])
                            j['log']['logBusiness']('popManager-popUp:this.bPoping');
                        else {
                            if (this['bPausePop'])
                                j['log']['logBusiness']('popManager-popUp:this.bPausePop');
                            else {
                                if (null != this['popQueue'] && 0x0 != this['popQueue']['length']) {
                                    for (var A = -0x1, B = this['lastUpdateTime'] > 0x0 ? Date['now']() - this['lastUpdateTime'] : 0x0, C = 0x0; C < this['popQueue']['length']; C++) {
                                        this['popQueue'][C]['updateTimer'](B) && A < 0x0 && (A = C);
                                    }
                                    this['lastUpdateTime'] = Date['now']();
                                    var D = A > -0x1 ? this['popQueue'][A] : null;
                                    if (null != D) {
                                        if (D['PopType'] != z)
                                            (D = this['popQueue']['splice'](A, 0x1)[0x0])['popUp']() ? (this['bPoping'] = !0x0,
                                            j['log']['logBusiness']('popManager-popUp:\x20' + D['PopType'] + '\x20is\x20poping'),
                                            this['curPop'] = D,
                                            this['curPopType'] = D['PopType'],
                                            D['hasPopTime'] ? (D['resetTimer'](0x7530),
                                            this['addPopJob'](D)) : this['popFlag']['has'](D['PopType']) && this['popFlag']['set'](D['PopType'], !0x1)) : (this['curPop'] = null,
                                            this['curPopType'] = v['none'],
                                            this['bPoping'] = !0x1,
                                            this['popUp']());
                                        else
                                            j['log']['logBusiness']('popManager-popUp:firstJob.type\x20==\x20lastPopType');
                                    } else
                                        j['log']['logBusiness']('popManager-popUp:firstPopJob\x20==\x20null');
                                } else
                                    j['log']['logBusiness']('popManager-popUp:this.popQueue\x20==\x20null\x20||\x20this.popQueue.length\x20==\x200');
                            }
                        }
                    } else
                        j['log']['logBusiness']('popManager-popUp:this.curPopType\x20!=\x20popJobType.none\x20\x20this.curPopType:' + this['curPopType']);
                }
                ,
                y['onPopup'] = function(z, A) {
                    if (j['log']['logBusiness']('popManager-onPopup:\x20' + z + '\x20is\x20popup\x20\x20curPopType:' + this['curPopType']),
                    this['curPopType'] == v['other']) {
                        if (z != v['other'])
                            return void this['popWindowMap']['set'](z, A);
                    } else {
                        if (z == v['other']) {
                            var B = this['popWindowMap']['get'](this['curPopType']);
                            null == B || B();
                        }
                    }
                    this['curPopType'] = z,
                    this['bPausePop'] ? (null == A || A(),
                    this['curPopType'] == z && (this['curPop'] = null,
                    this['curPopType'] = v['none'])) : this['popWindowMap']['set'](z, A);
                }
                ,
                y['onClose'] = function(z, A) {
                    j['log']['logBusiness']('popManager-onClose:\x20' + z + ',\x20isPoping?' + this['bPoping'] + '\x20\x20curPopType:' + this['curPopType']),
                    A && this['addPopJob'](A, !0x0),
                    this['curPopType'] == z && (this['curPopType'] = v['none'],
                    this['curPop'] = null,
                    this['bPoping'] = !0x1,
                    (A && !this['bPausePop'] || g['isNative'] && 0x0 == k['lobbyLoopSpace']) && this['popUp'](z)),
                    this['popWindowMap']['delete'](z);
                }
                ,
                y['pausePop'] = function(z, A) {
                    void 0x0 === A && (A = !0x1),
                    this['bPausePop'] = z,
                    z ? A && (this['popWindowMap']['forEach'](function(B, C) {
                        null == B || B();
                    }),
                    this['popWindowMap']['clear'](),
                    this['curPopType'] = v['none'],
                    this['curPop'] = null,
                    this['bPoping'] = !0x1) : this['popUp']();
                }
                ,
                y['resetPopFlag'] = function() {
                    var z = this;
                    null == this['popFlag'] ? this['popFlag'] = new Map() : this['popFlag']['clear'](),
                    this['controlList']['forEach'](function(A) {
                        z['popFlag']['set'](A, !0x0);
                    }),
                    this['popQueue'] = [],
                    this['curPop'] = null,
                    this['curPopType'] = v['none'],
                    this['bPoping'] = !0x1;
                }
                ,
                y['loopCall'] = function() {
                    this['popUp']();
                }
                ,
                b(x, [{
                    'key': 'CurPopType',
                    'get': function() {
                        return this['curPopType'];
                    }
                }]),
                x;
            }(h)) || m),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/pt2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, '87f6a+o/opAYIUVT5rclW3X', 'pt', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['pt'] || (b['languages']['pt'] = {}),
            b['languages']['pt'][0x66] = {
                0x1: 'VIP',
                0x2: 'Banco',
                0x3: 'E-mail',
                0x4: 'Evento',
                0x5: 'Ranking',
                0x6: 'Promover',
                0x7: 'Saque',
                0x8: 'O\x20código\x20do\x20dispositivo\x20está\x20vazio',
                0x9: 'O\x20tipo\x20de\x20registro\x20está\x20incorreto',
                0xa: 'As\x20informações\x20de\x20registro\x20estão\x20incorretas',
                0xb: 'Exceção\x20do\x20sistema\x2003,\x20tente\x20novamente\x20mais\x20tarde',
                0xc: 'ID\x20é\x20duplicado,\x20entre\x20em\x20contato\x20com\x20o\x20atendimento\x20ao\x20cliente',
                0xd: 'A\x20conta\x20foi\x20registrada',
                0xe: 'Captcha\x20errado',
                0xf: 'Este\x20número\x20de\x20telefone\x20já\x20foi\x20usado',
                0x10: 'Por\x20favor,\x20vincule\x20seu\x20e-mail\x20primeiro',
                0x11: 'Para\x20endereços\x20IP\x20anormais,\x20entre\x20em\x20contato\x20com\x20o\x20atendimento\x20ao\x20cliente',
                0x12: 'Falha\x20no\x20registro,\x20tente\x20novamente\x20mais\x20tarde\x20(código:1010)',
                0x13: 'Falha\x20no\x20registro,\x20tente\x20novamente\x20mais\x20tarde\x20(código:1011)',
                0x14: 'O\x20tipo\x20de\x20login\x20é\x20inválido',
                0x15: 'Informações\x20de\x20login\x20incorretas',
                0x16: 'O\x20dispositivo\x20é\x20anormal,\x20entre\x20em\x20contato\x20com\x20o\x20atendimento\x20ao\x20cliente',
                0x17: 'Exceção\x20do\x20sistema\x2013,\x20tente\x20novamente\x20mais\x20tarde',
                0x18: 'A\x20conta\x20está\x20anormal,\x20entre\x20em\x20contato\x20com\x20o\x20atendimento\x20ao\x20cliente',
                0x19: 'Parece\x20haver\x20uma\x20exceção\x20de\x20login,\x20por\x20favor,\x20tente\x20novamente\x20mais\x20tarde',
                0x1a: 'Conta\x20ou\x20senha\x20está\x20incorreta,\x20por\x20favor,\x20verifique\x20a\x20entrada',
                0x1b: 'A\x20conta\x20tem\x20um\x20risco\x20de\x20segurança\x20e\x20está\x20prestes\x20a\x20entrar\x20na\x20verificação\x20de\x20segurança',
                0x1c: 'Dispositivo\x20ilegal\x20para\x20fazer\x20login,\x20entre\x20em\x20contato\x20com\x20o\x20atendimento\x20ao\x20cliente',
                0x1d: 'Manutenção\x20do\x20servidor,\x20tente\x20novamente\x20mais\x20tarde',
                0x1e: 'Pedido\x20inválido',
                0x1f: 'Versão\x20muito\x20baixa,\x20é\x20necessário\x20atualizar',
                0x20: 'Erro\x20de\x20parâmetro',
                0x21: 'Serviço\x20de\x20atendimento\x20ao\x20cliente\x20indisponível\x20para\x20login',
                0x22: 'Tipo\x20de\x20código\x20de\x20verificação\x20incorreto',
                0x23: 'Parece\x20ocorrer\x20uma\x20exceção\x20de\x20login\x2021,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde',
                0x24: 'O\x20número\x20de\x20telefone\x20atual\x20já\x20está\x20registrado,\x20não\x20é\x20possível\x20registrar\x20novamente',
                0x25: 'Exceção\x20do\x20sistema\x2023,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde',
                0x26: 'Exceção\x20de\x20informações\x20de\x20verificação,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde',
                0x27: 'O\x20número\x20de\x20telefone\x20atual\x20não\x20está\x20associado\x20a\x20nenhuma\x20conta',
                0x28: 'As\x20informações\x20de\x20login\x20expiraram',
                0x29: 'Por\x20favor,\x20vincule\x20seu\x20número\x20de\x20telefone\x20primeiro',
                0x2a: 'Por\x20favor,\x20insira\x20um\x20número\x20de\x20telefone\x20válido',
                0x2b: 'Tipo\x20de\x20conta\x20incorreto',
                0x2c: 'Erro\x20nas\x20informações\x20da\x20conta',
                0x2d: 'Código\x20de\x20verificação\x20incorreto',
                0x2e: 'Exceção\x20do\x20sistema\x2033,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde',
                0x2f: 'Conta\x20incorreta',
                0x30: 'Por\x20favor,\x20vincule\x20seu\x20número\x20de\x20telefone\x20primeiro',
                0x31: 'Por\x20favor,\x20insira\x20um\x20número\x20de\x20telefone\x20válido',
                0x32: 'A\x20conta\x20já\x20está\x20vinculada\x20a\x20um\x20número\x20de\x20telefone,\x20não\x20é\x20possível\x20vincular\x20novamente',
                0x33: 'O\x20número\x20de\x20telefone\x20já\x20está\x20vinculado',
                0x34: 'Por\x20favor,\x20insira\x20sua\x20senha',
                0x35: 'Não\x20é\x20possível\x20vincular\x20o\x20número\x20de\x20telefone\x20à\x20conta\x20atual,\x20por\x20favor,\x20entre\x20em\x20contato\x20com\x20o\x20serviço\x20de\x20atendimento\x20ao\x20cliente.',
                0x36: 'Exceção\x20de\x20login,\x20por\x20favor,\x20tente\x20novamente.',
                0x37: 'A\x20conta\x20atual\x20já\x20existe.',
                0x38: 'Código\x20de\x20verificação\x20incorreto.',
                0x39: 'Exceção\x20do\x20sistema\x2044,\x20por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.',
                0x3a: 'Exceção\x20do\x20sistema\x2045,\x20por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.',
                0x3b: 'Exceção\x20do\x20sistema\x2046,\x20por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.',
                0x3c: 'Tempo\x20limite\x20da\x20solicitação,\x20por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.',
                0x3d: 'O\x20ID\x20do\x20usuário\x20não\x20existe.',
                0x3e: 'As\x20informações\x20de\x20verificação\x20do\x20usuário\x20estão\x20incorretas.',
                0x3f: 'Por\x20favor,\x20preencha\x20as\x20informações\x20de\x20verificação\x20do\x20usuário.',
                0x40: 'As\x20informações\x20de\x20verificação\x20do\x20usuário\x20estão\x20incorretas.',
                0x41: 'Exceção\x20de\x20operação,\x20por\x20favor,\x20entre\x20em\x20contato\x20com\x20o\x20serviço\x20de\x20atendimento\x20ao\x20cliente.',
                0x42: 'Dados\x20inválidos,\x20tente\x20novamente\x20mais\x20tarde',
                0x43: 'Parabéns\x20à\x20<color=#FF4600>@player</color>\x20em\x20<color=yellow>@game</color>\x20por\x20ganhar\x20prêmios\x20<color=#4BFF00>x@multiple</color>\x20e\x20obter\x20<color=yellow>@coins</color>\x20Coins.',
                0x44: 'Parabéns\x20à\x20<color=#FF4600>%s</color>\x20por\x20ganhar\x20Jackpot\x20em\x20<color=#4BFF00>%s</color>\x20e\x20ganhar\x20<color=yellow>%s</color>\x20Moedas.',
                0x45: 'Sala',
                0x46: 'Jogadores',
                0x47: 'Aposta',
                0x48: 'Saldo\x20mínimo',
                0x49: 'Demo',
                0x4a: 'Primário',
                0x4b: 'Senhor',
                0x4c: 'Rei',
                0x4d: 'Épico',
                0x4e: 'Lenda',
                0x4f: 'Vip',
                0x50: 'Sala',
                0x51: 'Jogar',
                0x52: 'Qualquer',
                0x53: 'Renunciar',
                0x54: 'Sair',
                0x55: 'Tips',
                0x56: 'A\x20conexão\x20do\x20servidor\x20falhou,\x20tente\x20novamente\x20mais\x20tarde',
                0x57: 'O\x20sistema\x20pede\x20para\x20você\x20sair,\x20por\x20favor,\x20entre\x20no\x20jogo\x20mais\x20tarde',
                0x58: 'Esta\x20conta\x20está\x20a\x20iniciar\x20sessão\x20a\x20partir\x20de\x20outro\x20dispositivo,\x20preste\x20atenção\x20à\x20segurança\x20da\x20conta',
                0x59: 'Seu\x20jogo\x20em\x20%s\x20ainda\x20não\x20acabou,\x20por\x20favor,\x20volte\x20e\x20jogue',
                0x5a: 'O\x20registro\x20da\x20conta\x20já\x20existe.',
                0x5b: 'O\x20dispositivo\x20da\x20conta\x20de\x20visitante\x20não\x20pode\x20estar\x20vazio.',
                0x5c: 'A\x20conta\x20não\x20existe.',
                0x5d: 'Senha\x20incorreta.',
                0x5e: 'Esta\x20conta\x20foi\x20suspensa.',
                0x5f: 'Exceção\x20no\x20login\x20de\x20visitante,\x20por\x20favor\x20tente\x20novamente.',
                0x60: 'Exceção\x20no\x20login\x207,\x20por\x20favor\x20tente\x20novamente.',
                0x61: 'Sistema\x20em\x20manutenção,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde.',
                0x62: 'Senha',
                0x63: 'Download',
                0x64: 'para\x20sua\x20melhor\x20experiência,\x20por\x20favor,\x20baixe\x20o\x20jogo.',
                0x65: 'para\x20sua\x20melhor\x20experiência,\x20por\x20favor,\x20baixe\x20o\x20jogo.Instale\x20agora\x20e\x20receba\x20as\x20recompensas!',
                0x66: 'Aceite\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Termos\x20de\x20Serviço</on></u></color>\x20e\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacidade&Política</on></u></color>',
                0x67: 'Vincule\x20o\x20número\x20de\x20telefone\x20celular\x0a\x20para\x20obter\x20recompensas',
                0x68: 'Ligar',
                0x69: 'Desculpe,\x20os\x20requisitos\x20VIP\x20não\x20são\x20atendidos,\x20quanto\x20mais\x20moedas,\x20o\x20VIP\x20mais\x20alto,\x20vá\x20para\x20a\x20loja\x20para\x20recarregar',
                0x6a: 'Desculpe,\x20você\x20não\x20atende\x20aos\x20requisitos\x20de\x20entrada,\x20você\x20gostaria\x20de\x20ir\x20à\x20loja\x20para\x20comprar\x20alguns?',
                0x6b: 'Toque\x20em\x20<img\x20src=\x27share\x27\x20/>\x20e\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Adicionar\x20à\x20tela\x20inicial</color></b>\x20para\x20jogar\x20sempre\x20que\x20quiser',
                0x6c: 'Toque\x20em\x20<img\x20src=\x27share\x27\x20/>\x20e\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Adicionar\x20à\x20tela\x20inicial</color></b>\x20para\x20jogar\x20sempre\x20que\x20quiser',
                0x6d: 'Aviso',
                0x6e: 'Para\x20a\x20segurança\x20de\x20seus\x20dados\x20de\x20jogo,\x20é\x20altamente\x20recomendável\x20que\x20você\x20se\x20registre\x20como\x20uma\x20conta\x20oficial',
                0x6f: 'Mensagem\x20enviada',
                0x70: 'Reclame\x20o\x20prémio\x20completo',
                0x71: 'Serviço',
                0x72: 'Config',
                0x73: 'Check-in',
                0x74: 'Roda',
                0x75: 'Presente',
                0x76: 'Gratia',
                0x77: 'Convidar',
                0x78: 'Bônus',
                0x79: 'Todos',
                0x7a: 'Popular',
                0x7b: 'Caça-níquel',
                0x7c: 'Poker',
                0x7d: 'A\x20rede\x20atual\x20não\x20é\x20boa',
                0x7e: 'Grátis',
                0x7f: 'Comprar',
                0x80: 'Uma\x20nova\x20versão\x20foi\x20encontrada.\x20Quer\x20atualizá-la?',
                0x81: 'O\x20evento\x20foi\x20encerrado\x20e\x20o\x20valor\x20da\x20compra\x20foi\x20reembolsado',
                0x82: 'BUY\x20COIN',
                0x83: 'Você\x20não\x20está\x20logado,\x20por\x20favor,\x20saia\x20e\x20tente\x20novamente',
                0x84: 'Se\x20a\x20autenticação\x20falhar,\x20saia\x20e\x20tente\x20novamente',
                0x85: 'Sala\x20de\x20jogos\x20inválida,\x20tente\x20outra',
                0x86: 'A\x20sala\x20está\x20fechada,\x20tente\x20outra',
                0x87: 'Tarefa',
                0x88: 'Está\x20na\x20hora\x20de\x20jogar\x20NOVOS\x20slots',
                0x89: 'Ganhe\x20moedas\x20GRATUITAS\x20fazendo\x20login\x20todos\x20os\x20dias!',
                0x8a: 'Roleta\x20da\x20sorte!\x20Taxa\x20de\x20vitória\x20de\x20100%\x20garantida!',
                0x8b: 'Novo\x20desafio\x20exclusivo\x20para\x20moedas\x20enormes!',
                0x8c: 'Slots\x20e\x20funcionalidades\x20incríveis!',
                0x8d: 'Pode\x20receber\x20um\x20bónus\x20especial',
                0x8e: 'Maior\x20poder\x20VIP,\x20mais\x20benefícios!',
                0x8f: 'Gire\x20NOVOS\x20SLOTS,\x20boa\x20sorte\x20esteja\x20consigo!',
                0x90: 'DIA\x20DA\x20RODA\x20DE\x20SORTE,\x20MULTIPLER\x20RODA\x20DE\x20OURO!',
                0x91: 'BÓNUS\x20SURPRESA,\x20venha\x20recolher\x20as\x20suas\x20moedas',
                0x92: 'Rondas\x20mais\x20rápidas\x20e\x20PRÉMIOS\x20MAIORES!',
                0x93: 'MEGA\x20RECOMPENSA\x20está\x20pronta,\x20GIRAR\x20JÁ!',
                0x94: 'Toque\x20e\x20recolha\x20as\x20suas\x20fichas\x20grátis\x20agora!',
                0x95: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Chance\x20UP!!!Bónus\x20ilimitado\x20em\x20todos\x20os\x20pacotes',
                0x96: 'Jogue\x20agora\x20para\x20desfrutar\x20de\x20guloseimas\x20e\x20missões\x20especiais',
                0x97: 'Convide\x20amigos,\x20seja\x20o\x20seu\x20CHEFE!',
                0x98: 'Partilhe\x20com\x20os\x20seus\x20amigos,\x20ganhe\x20presentes\x20exclusivos',
                0x99: 'Grandes\x20recompensas\x20por\x20partilhar,\x20mais\x20convidar\x20mais\x20prémios',
                0x9a: 'Brinque\x20com\x20os\x20amigos,\x20brindes\x20todos\x20os\x20dias!',
                0x9b: 'BÓNUS\x20DE\x20SORTE,\x20Uma\x20oportunidade\x20de\x20ser\x20o\x20mais\x20rico!',
                0x9c: 'Aproveite\x20a\x20sua\x201ª\x20OFERTA\x20ESPECIAL\x20e\x20obtenha\x20benefícios\x20de\x20compra',
                0x9d: 'A\x201ª\x20compra\x20pode\x20ganhar\x20PRÉMIO\x20extra!',
                0x9e: 'HalloWIN!Faça\x20login\x20todos\x20os\x20dias,\x20compre\x20qualquer\x20mercadoria\x20e\x20descontos\x20por\x20tempo\x20limitado!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/redPoint.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './CustomEventDefine.ts', './Oops.ts', './lobbyState.ts'], function(b) {
    var d, g, j, k, l, m, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['applyDecoratedDescriptor'],
            g = A['inheritsLoose'],
            j = A['initializerDefineProperty'],
            k = A['assertThisInitialized'],
            l = A['createClass'];
        }
        , function(A) {
            m = A['cclegacy'],
            q = A['_decorator'],
            v = A['Enum'],
            w = A['Component'];
        }
        , function(A) {
            x = A['WebGameEvent'];
        }
        , function(A) {
            y = A['oops'];
        }
        , function(A) {
            z = A['lobbyState'];
        }
        ],
        'execute': function() {
            var A, B, C, D, E, F;
            m['_RF']['push']({}, 'd6c15e7coJAT4nykK3TiKuK', 'redPoint', void 0x0);
            var G = q['ccclass']
              , H = q['property']
              , I = b('RedPointKey', function(K) {
                return K[K['none'] = 0x0] = 'none',
                K[K['mail'] = 0x1] = 'mail',
                K[K['vip'] = 0x2] = 'vip',
                K[K['activity'] = 0x3] = 'activity',
                K[K['share'] = 0x4] = 'share',
                K[K['roulette'] = 0x5] = 'roulette',
                K[K['sign'] = 0x6] = 'sign',
                K[K['sharerefer'] = 0x7] = 'sharerefer',
                K[K['benefits'] = 0x8] = 'benefits',
                K[K['signex'] = 0x9] = 'signex',
                K[K['gift'] = 0xa] = 'gift',
                K[K['gift2'] = 0xb] = 'gift2',
                K[K['shop'] = 0xc] = 'shop',
                K[K['cashFree'] = 0xd] = 'cashFree',
                K;
            }({}))
              , J = b('ReadPointName', ((A = {})[I['none']] = 'none',
            A[I['mail']] = 'mail',
            A[I['vip']] = 'vip',
            A[I['activity']] = 'activity',
            A[I['share']] = 'share',
            A[I['roulette']] = 'roulette',
            A[I['sign']] = 'sign',
            A[I['signex']] = 'signex',
            A[I['sharerefer']] = 'sharerefer',
            A[I['benefits']] = 'benefits',
            A[I['gift']] = 'gift',
            A[I['shop']] = 'shop',
            A[I['cashFree']] = 'cashFree',
            A));
            b('redPoint', (B = G('redPoint'),
            C = H({
                'type': v(I),
                'displayName': '红点ID'
            }),
            B((F = d((E = function(K) {
                function L() {
                    for (var N, O = arguments['length'], Q = new Array(O), S = 0x0; S < O; S++)
                        Q[S] = arguments[S];
                    return N = K['call']['apply'](K, [this]['concat'](Q)) || this,
                    j(N, 'key', F, k(N)),
                    N;
                }
                g(L, K);
                var M = L['prototype'];
                return M['onLoad'] = function() {
                    this['showRedPoint'](!0x1),
                    this['AddListener']();
                }
                ,
                M['AddListener'] = function() {
                    y['message']['on'](x['update_red_point'], this['updateRedPoint'], this);
                }
                ,
                M['RemoveListener'] = function() {
                    y['message']['off'](x['update_red_point'], this['updateRedPoint'], this);
                }
                ,
                M['updateRedPoint'] = function(N, O, Q) {
                    var S = J[this['key']['toString']()];
                    if (null == O || null == Q) {
                        var T = z['Instance']['State']['redPoints']
                          , U = 0x0;
                        T['has'](S) && (U = T['get'](S)),
                        this['showRedPoint'](U > 0x0);
                    } else
                        O == S && this['showRedPoint'](Q > 0x0);
                }
                ,
                M['showRedPoint'] = function(N) {
                    this['node']['active'] = N;
                }
                ,
                M['onDestroy'] = function() {
                    this['RemoveListener']();
                }
                ,
                l(L, [{
                    'key': 'ID',
                    'get': function() {
                        return this['key'];
                    }
                }]),
                L;
            }(w))['prototype'], 'key', [C], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return I['none'];
                }
            }),
            D = E)) || D)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/richTextHandler.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function(a) {
    var b, d, f, g;
    return {
        'setters': [function(h) {
            b = h['inheritsLoose'];
        }
        , function(h) {
            d = h['cclegacy'],
            f = h['_decorator'],
            g = h['Component'];
        }
        ],
        'execute': function() {
            var h;
            d['_RF']['push']({}, '09fd9aLvJNJ3ZzA9TTZWCNr', 'richTextHandler', void 0x0);
            var j = f['ccclass'];
            f['property'],
            a('richTextHandler', j('richTextHandler')(h = function(k) {
                function m() {
                    for (var p, q = arguments['length'], s = new Array(q), u = 0x0; u < q; u++)
                        s[u] = arguments[u];
                    return (p = k['call']['apply'](k, [this]['concat'](s)) || this)['clickHandler'] = null,
                    p;
                }
                b(m, k);
                var o = m['prototype'];
                return o['bindClickHandler'] = function(p, q) {
                    this['clickHandler'] = p['bind'](q);
                }
                ,
                o['onClick'] = function(p, q) {
                    var s;
                    null == (s = this['clickHandler']) || s['call'](this, q);
                }
                ,
                m;
            }(g)) || h),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/sendButton.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './stringDefine.ts', './Language.ts', './utils.ts'], function(b) {
    var d, g, j, k, m, p, q, v, w, x, y, z;
    return {
        'setters': [function(A) {
            d = A['applyDecoratedDescriptor'],
            g = A['inheritsLoose'],
            j = A['initializerDefineProperty'],
            k = A['assertThisInitialized'],
            m = A['createClass'];
        }
        , function(A) {
            p = A['cclegacy'],
            q = A['_decorator'],
            v = A['Label'],
            w = A['Button'];
        }
        , function(A) {
            x = A['stringDefine'];
        }
        , function(A) {
            y = A['LanguageManager'];
        }
        , function(A) {
            z = A['utils'];
        }
        ],
        'execute': function() {
            var A, B, C, D, E;
            p['_RF']['push']({}, '0fef0t82XdOoIiY23xjosLS', 'sendButton', void 0x0);
            var F = q['ccclass']
              , G = q['property'];
            b('sendButton', (A = F('sendButton'),
            B = G({
                'type': Number,
                'tooltip': '重置时间',
                'range': [0x1e, 0x168],
                'slide': !0x0
            }),
            A((E = d((D = function(H) {
                function I() {
                    for (var K, L = arguments['length'], M = new Array(L), N = 0x0; N < L; N++)
                        M[N] = arguments[N];
                    return K = H['call']['apply'](H, [this]['concat'](M)) || this,
                    j(K, 'resetTime', E, k(K)),
                    K['label'] = null,
                    K['clickHandler'] = null,
                    K['timeTwer'] = void 0x0,
                    K;
                }
                g(I, H);
                var J = I['prototype'];
                return J['onLoad'] = function() {
                    this['label'] = this['node']['getComponentInChildren'](v),
                    this['node']['on'](w['EventType']['CLICK'], this['onClickSend'], this);
                }
                ,
                J['onClickSend'] = function() {
                    var K;
                    this['startTimer'](),
                    null == (K = this['clickHandler']) || K['call'](this);
                }
                ,
                J['bindClickHandler'] = function(K, L) {
                    this['clickHandler'] = function() {
                        null == K || K['call'](L);
                    }
                    ;
                }
                ,
                J['reset'] = function() {
                    var K;
                    null == (K = this['timeTwer']) || K['stop'](),
                    this['interactable'] = !0x0,
                    this['label']['string'] = y['getLangByID'](x['send']);
                }
                ,
                J['startTimer'] = function(K) {
                    var L = this;
                    void 0x0 === K && (K = this['resetTime']),
                    this['interactable'] = !0x1;
                    var M = K;
                    this['timeTwer'] = z['tweenNumber'](this['resetTime'], 0x0, K, function(N) {
                        (N = Math['floor'](N)) < M && (M = N,
                        L['label']['string'] = M['toString']());
                    }, function(N) {
                        L['reset']();
                    });
                }
                ,
                m(I, [{
                    'key': 'ResetTime',
                    'set': function(K) {
                        this['resetTime'] = K;
                    }
                }]),
                I;
            }(w))['prototype'], 'resetTime', [B], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return 0x3c;
                }
            }),
            C = D)) || C)),
            p['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/setting.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gSetting.ts', './utils.ts', './Oops.ts', './CustomEventDefine.ts', './Language.ts', './gMessageBox.ts', './GameUIConfig.ts', './stringDefine.ts', './appConfig.ts', './VersionManager.ts', './webGame.ts'], function(j) {
    var k, q, w, x, z, A, D, E, F, G, H, J, K, L, M, N, O, P, Q, R, S, T;
    return {
        'setters': [function(U) {
            k = U['applyDecoratedDescriptor'],
            q = U['inheritsLoose'],
            w = U['initializerDefineProperty'],
            x = U['assertThisInitialized'];
        }
        , function(U) {
            z = U['cclegacy'],
            A = U['_decorator'],
            D = U['Button'],
            E = U['Label'],
            F = U['sys'],
            G = U['game'];
        }
        , function(U) {
            H = U['gSetting'];
        }
        , function(U) {
            J = U['utils'];
        }
        , function(U) {
            K = U['oops'];
        }
        , function(U) {
            L = U['gameStage'],
            M = U['WebGameEvent'];
        }
        , function(U) {
            N = U['LanguageManager'];
        }
        , function(U) {
            O = U['MsgBoxManager'];
        }
        , function(U) {
            P = U['UIID'];
        }
        , function(U) {
            Q = U['stringDefine'];
        }
        , function(U) {
            R = U['appConfig'];
        }
        , function(U) {
            S = U['VersionManager'];
        }
        , function(U) {
            T = U['webGame'];
        }
        ],
        'execute': function() {
            var U, V, W, X, Y, Z, a0, a1, a2;
            z['_RF']['push']({}, 'a6bc0JV0HxKY6zzyc6KH29C', 'setting', void 0x0);
            var a3 = A['ccclass']
              , a4 = A['property'];
            j('setting', (U = a3('setting'),
            V = a4({
                'type': D,
                'tooltip': '返回登录按钮'
            }),
            W = a4({
                'type': D,
                'tooltip': '退出游戏按钮'
            }),
            X = a4({
                'type': D,
                'tooltip': '清理按钮'
            }),
            U((a0 = k((Z = function(a5) {
                function a6() {
                    for (var a8, a9 = arguments['length'], aa = new Array(a9), ab = 0x0; ab < a9; ab++)
                        aa[ab] = arguments[ab];
                    return a8 = a5['call']['apply'](a5, [this]['concat'](aa)) || this,
                    w(a8, 'btnOut', a0, x(a8)),
                    a8['lbOut'] = null,
                    w(a8, 'btnQuit', a1, x(a8)),
                    w(a8, 'btnClear', a2, x(a8)),
                    a8['lbQuit'] = null,
                    a8;
                }
                q(a6, a5);
                var a7 = a6['prototype'];
                return a7['onLoad'] = function() {
                    this['onInit']();
                }
                ,
                a7['onInit'] = function() {
                    a5['prototype']['onInit']['call'](this),
                    this['lbOut'] = this['btnOut']['node']['getComponentInChildren'](E),
                    this['lbQuit'] = this['btnQuit']['node']['getComponentInChildren'](E),
                    J['ButtonBindClick'](this['btnOut'], this['onBtnOutClick'], this);
                    var a8 = F['isNative'];
                    this['btnQuit']['node']['active'] = a8,
                    a8 && (J['ButtonBindClick'](this['btnQuit'], this['onBtnQuitClick'], this),
                    null != this['btnClear'] && J['ButtonBindClick'](this['btnClear'], this['onBtnClearClick'], this));
                }
                ,
                a7['onBtnOutClick'] = function() {
                    var a8 = this;
                    if (R['bHasLobby']) {
                        var a9 = Q['tips'];
                        a9 = N['getLangByID'](a9);
                        var aa = Q['leaveComfirm'];
                        aa = N['getLangByID'](aa);
                        var ab = {
                            'txt': N['getLangByID'](Q['comfirm'])
                        }
                          , ac = {
                            'txt': N['getLangByID'](Q['cancel'])
                        };
                        R['gameStage'] == L['lobby'] ? ab['click'] = function() {
                            K['message']['dispatchEvent'](M['game_stage_change'], L['login'], L['lobby']),
                            a8['close']();
                        }
                        : R['gameStage'] == L['game'] && (ab['click'] = function() {
                            K['message']['dispatchEvent'](M['req_exit_game']),
                            a8['close']();
                        }
                        ),
                        O['Show'](a9, aa, ab, ac);
                    }
                }
                ,
                a7['onBtnQuitClick'] = function() {
                    F['isNative'] ? G['end']() : this['btnQuit']['node']['active'] = !0x1;
                }
                ,
                a7['onBtnClearClick'] = function() {
                    var a8 = this
                      , a9 = Q['tips'];
                    a9 = N['getLangByID'](a9);
                    var aa = N['getLangByTag']('clear_tips')
                      , ab = {
                        'txt': N['getLangByID'](Q['ok']),
                        'click': function() {
                            S['Instance']['removeAllSubGame'](),
                            T['showNetLoading'](!0x0, null, 0x6),
                            a8['scheduleOnce'](function() {
                                G['restart']();
                            }, 0x5);
                        }
                    }
                      , ac = {
                        'txt': N['getLangByID'](Q['cancel']),
                        'click': null
                    };
                    O['Show'](a9, aa, ab, ac);
                }
                ,
                a7['show'] = function() {
                    a5['prototype']['show']['call'](this);
                    var a8 = R['gameStage'] == L['lobby']
                      , a9 = a8 ? Q['logout'] : Q['back'];
                    this['lbOut']['string'] = N['getLangByID'](a9),
                    this['btnClear'] && (this['btnClear']['node']['active'] = R['bHasLobby'] && F['isNative'] && a8);
                }
                ,
                a7['close'] = function(a8) {
                    a5['prototype']['close']['call'](this, function() {
                        K['gui']['remove'](P['setting'], !0x1);
                    });
                }
                ,
                a6;
            }(H))['prototype'], 'btnOut', [V], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a1 = k(Z['prototype'], 'btnQuit', [W], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            a2 = k(Z['prototype'], 'btnClear', [X], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Y = Z)) || Y)),
            z['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/shareNode.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './snsManager.ts', './Oops.ts', './CustomEventDefine.ts'], function(d) {
    var f, g, j, k, m, q, v, w, x, y, z, A, B;
    return {
        'setters': [function(C) {
            f = C['applyDecoratedDescriptor'],
            g = C['inheritsLoose'],
            j = C['initializerDefineProperty'],
            k = C['assertThisInitialized'];
        }
        , function(C) {
            m = C['cclegacy'],
            q = C['_decorator'],
            v = C['Button'],
            w = C['Component'];
        }
        , function(C) {
            x = C['utils'];
        }
        , function(C) {
            y = C['snsManager'],
            z = C['SnsType'];
        }
        , function(C) {
            A = C['oops'];
        }
        , function(C) {
            B = C['WebGameEvent'];
        }
        ],
        'execute': function() {
            var D, F, G, H, I, J, K, L, M, N, O, P, Q, R, V;
            m['_RF']['push']({}, '70359B6ocxPw6lCvG1YsZ6X', 'shareNode', void 0x0);
            var W = q['ccclass']
              , X = q['property'];
            d('shareNode', (D = W('shareNode'),
            F = X({
                'type': v,
                'tooltip': '复制按钮'
            }),
            G = X({
                'type': v,
                'tooltip': 'whatAPP'
            }),
            H = X({
                'type': v,
                'tooltip': 'facebook'
            }),
            I = X({
                'type': v,
                'tooltip': 'tg'
            }),
            J = X({
                'type': v,
                'tooltip': 'line'
            }),
            K = X({
                'type': v,
                'tooltip': 'twitter'
            }),
            D((N = f((M = function(Y) {
                function Z() {
                    for (var a1, a2 = arguments['length'], a3 = new Array(a2), a4 = 0x0; a4 < a2; a4++)
                        a3[a4] = arguments[a4];
                    return a1 = Y['call']['apply'](Y, [this]['concat'](a3)) || this,
                    j(a1, 'btn_copy', N, k(a1)),
                    j(a1, 'btn_whatApp', O, k(a1)),
                    j(a1, 'btn_faceBook', P, k(a1)),
                    j(a1, 'btn_tg', Q, k(a1)),
                    j(a1, 'btn_line', R, k(a1)),
                    j(a1, 'btn_twitter', V, k(a1)),
                    a1['shareUrl'] = '',
                    a1;
                }
                g(Z, Y);
                var a0 = Z['prototype'];
                return a0['start'] = function() {
                    x['ButtonBindClick'](this['btn_copy'], this['onCopy'], this),
                    x['ButtonBindClick'](this['btn_whatApp'], this['onWhatApp'], this),
                    x['ButtonBindClick'](this['btn_faceBook'], this['onFaceBook'], this),
                    x['ButtonBindClick'](this['btn_tg'], this['onTelegra'], this),
                    x['ButtonBindClick'](this['btn_line'], this['onLine'], this),
                    x['ButtonBindClick'](this['btn_twitter'], this['onTwitter'], this);
                }
                ,
                a0['setShareUrl'] = function(a1) {
                    this['shareUrl'] = a1;
                }
                ,
                a0['onShared'] = function() {
                    A['message']['dispatchEvent'](B['shareEnd']);
                }
                ,
                a0['onFaceBook'] = function() {
                    y['Instance']()['share'](z['FACEBOOK'], this['shareUrl']),
                    this['onShared']();
                }
                ,
                a0['onTelegra'] = function() {
                    y['Instance']()['share'](z['TELEGRAM'], this['shareUrl']),
                    this['onShared']();
                }
                ,
                a0['onLine'] = function() {
                    y['Instance']()['share'](z['LINE'], this['shareUrl']),
                    this['onShared']();
                }
                ,
                a0['onTwitter'] = function() {
                    y['Instance']()['share'](z['TWITTER'], this['shareUrl']),
                    this['onShared']();
                }
                ,
                a0['onWhatApp'] = function() {
                    y['Instance']()['share'](z['WHATSAPP'], this['shareUrl']),
                    this['onShared']();
                }
                ,
                a0['onCopy'] = function() {
                    x['copyTextToClipboard'](this['shareUrl']),
                    this['onShared']();
                }
                ,
                Z;
            }(w))['prototype'], 'btn_copy', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            O = f(M['prototype'], 'btn_whatApp', [G], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            P = f(M['prototype'], 'btn_faceBook', [H], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            Q = f(M['prototype'], 'btn_tg', [I], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            R = f(M['prototype'], 'btn_line', [J], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            V = f(M['prototype'], 'btn_twitter', [K], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            L = M)) || L)),
            m['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/snsManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingletonBase.ts', './utils.ts'], function(b) {
    var c, d, f, g, h;
    return {
        'setters': [function(i) {
            c = i['inheritsLoose'];
        }
        , function(i) {
            d = i['cclegacy'],
            f = i['sys'];
        }
        , function(i) {
            g = i['default'];
        }
        , function(i) {
            h = i['utils'];
        }
        ],
        'execute': function() {
            d['_RF']['push']({}, '88bb8dCvm9FF5qq3gHoXstm', 'snsManager', void 0x0);
            var i = b('SnsType', function(j) {
                return j[j['WHATSAPP'] = 0x1] = 'WHATSAPP',
                j[j['FACEBOOK'] = 0x2] = 'FACEBOOK',
                j[j['TELEGRAM'] = 0x3] = 'TELEGRAM',
                j[j['LINE'] = 0x4] = 'LINE',
                j[j['TWITTER'] = 0x5] = 'TWITTER',
                j[j['SMS'] = 0x6] = 'SMS',
                j;
            }({}));
            b('snsManager', function(j) {
                function k() {
                    return j['apply'](this, arguments) || this;
                }
                c(k, j);
                var l = k['prototype'];
                return l['share'] = function(m, p, q) {
                    m == i['WHATSAPP'] ? this['shareWhatsApp'](p, q) : m == i['FACEBOOK'] ? this['shareFacebook'](p, q) : m == i['TELEGRAM'] ? this['shareTelegram'](p, q) : m == i['LINE'] ? this['shareLine'](p, q) : m == i['TWITTER'] && this['shareTwitter'](p, q);
                }
                ,
                l['sendWhatsApp'] = function(m, p, q) {
                    var u = 'https://api.whatsapp.com/send?phone=' + m + '&text=' + p;
                    h['openUrl'](u);
                }
                ,
                l['shareSms'] = function(m, p, q) {
                    if (f['isBrowser']) {
                        var u = '';
                        f['os'] == f['OS']['ANDROID'] ? u = 'sms:' + m + '?body=' + p : f['os'] == f['OS']['IOS'] && (u = 'sms:/open?addresses=' + m + '&body=' + p),
                        h['openUrl'](u);
                    } else
                        f['isNative'];
                }
                ,
                l['shareTwitter'] = function(m, p) {
                    var q = 'https://twitter.com/intent/tweet?url=' + m;
                    h['openUrl'](q);
                }
                ,
                l['shareLine'] = function(m, p) {
                    var q = 'https://line.me/R/msg/text/?' + m;
                    h['openUrl'](q);
                }
                ,
                l['shareWhatsApp'] = function(m, p) {
                    var q = 'https://api.whatsapp.com/send?text=' + m;
                    h['openUrl'](q);
                }
                ,
                l['shareFacebook'] = function(m, p) {
                    var q = 'http://www.facebook.com/sharer.php?u=' + m;
                    h['openUrl'](q);
                }
                ,
                l['shareTelegram'] = function(m, p) {
                    var q = 'https://t.me/share/url?url=' + m;
                    h['openUrl'](q);
                }
                ,
                k;
            }(g)),
            d['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/stringDefine2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, 'd6e93Iv5eRINZffvZ+WZpwI', 'stringDefine', void 0x0);
            var b = window;
            b['strDef'] || (b['strDef'] = {}),
            b['strDef'][0x66] = {
                'vip': '1',
                'safebox': '2',
                'mail': '3',
                'activity': '4',
                'rank': '5',
                'promote': '6',
                'withdraw': '7',
                'http_error_100': '8',
                'http_error_101': '9',
                'http_error_102': '10',
                'http_error_103': '11',
                'http_error_104': '12',
                'http_error_105': '13',
                'http_error_106': '14',
                'http_error_107': '15',
                'http_error_108': '16',
                'http_error_109': '17',
                'http_error_1010': '18',
                'http_error_1011': '19',
                'http_error_110': '20',
                'http_error_111': '21',
                'http_error_112': '22',
                'http_error_113': '23',
                'http_error_114': '24',
                'http_error_115': '25',
                'http_error_116': '26',
                'http_error_117': '27',
                'http_error_118': '28',
                'http_error_188': '29',
                'http_error_180': '30',
                'http_error_181': '31',
                'http_error_182': '32',
                'http_error_183': '33',
                'http_error_120': '34',
                'http_error_121': '35',
                'http_error_122': '36',
                'http_error_123': '37',
                'http_error_124': '38',
                'http_error_125': '39',
                'http_error_126': '40',
                'http_error_127': '41',
                'http_error_128': '42',
                'http_error_130': '43',
                'http_error_131': '44',
                'http_error_132': '45',
                'http_error_133': '46',
                'http_error_134': '47',
                'http_error_135': '48',
                'http_error_136': '49',
                'http_error_137': '50',
                'http_error_138': '51',
                'http_error_139': '52',
                'http_error_140': '53',
                'http_error_141': '54',
                'http_error_142': '55',
                'http_error_143': '56',
                'http_error_144': '57',
                'http_error_145': '58',
                'http_error_146': '59',
                'http_error_147': '60',
                'http_error_148': '61',
                'http_error_149': '62',
                'http_error_150': '63',
                'http_error_151': '64',
                'http_error_152': '65',
                'http_error_206': '66',
                'ft_win_broadcast': '67',
                'ft_jackpot_broadcast': '68',
                'room_name': '69',
                'room_players': '70',
                'room_antes': '71',
                'room_balance': '72',
                'room_0': '73',
                'room_1': '74',
                'room_2': '75',
                'room_3': '76',
                'room_4': '77',
                'room_5': '78',
                'room_6': '79',
                'roomTitle': '80',
                'play': '81',
                'any': '82',
                'quit': '83',
                'logout': '84',
                'tips': '85',
                'tcp_connect_failed': '86',
                'kickout': '87',
                'replace': '88',
                'ft_force_back_game': '89',
                'account_exist': '90',
                'device_code_none': '91',
                'account_not_exist': '92',
                'password_error': '93',
                'account_disable': '94',
                'visitor_login_error': '95',
                'session_error': '96',
                'system_maintenance': '97',
                'change_pwd': '98',
                'download': '99',
                'download_tips': '100',
                'download_reward_tips': '101',
                'rtPermission': '102',
                'bindTips': '103',
                'bind': '104',
                'enter_vip_limit': '105',
                'enter_coin_limit': '106',
                'add2main_tips': '107',
                'add2main_tips_v10': '108',
                'warn': '109',
                'guest_login_warn': '110',
                'send_msg': '111',
                'got_prize': '112',
                'service': '113',
                'setting': '114',
                'signin': '115',
                'lottery': '116',
                'gift': '117',
                'gift2': '118',
                'invite': '119',
                'benefit': '120',
                'all_game': '121',
                'hot_game': '122',
                'slots_game': '123',
                'poker_game': '124',
                'bad_net_work': '125',
                'free_cash': '126',
                'buy': '127',
                'find_new_version': '128',
                'tips_back_money': '129',
                'buyCoin': '130',
                'account_not_login': '131',
                'session_invalid': '132',
                'gameroom_invalid': '133',
                'gameroom_disable': '134',
                'task': '135',
                'notify_general_0': '136',
                'notify_general_1': '137',
                'notify_general_2': '138',
                'notify_general_3': '139',
                'notify_general_4': '140',
                'notify_general_5': '141',
                'notify_general_6': '142',
                'notify_general_7': '143',
                'notify_general_8': '144',
                'notify_general_9': '145',
                'notify_general_10': '146',
                'notify_general_11': '147',
                'notify_general_12': '148',
                'notify_general_13': '149',
                'notify_general_14': '150',
                'notify_share_0': '151',
                'notify_share_1': '152',
                'notify_share_2': '153',
                'notify_share_3': '154',
                'notify_store_0': '155',
                'notify_store_1': '156',
                'notify_store_2': '157',
                'notify_store_3': '158'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/tagClearInput.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './clearInput.ts'], function(b) {
    var d, f, g, h, j, k, l, m;
    return {
        'setters': [function(p) {
            d = p['applyDecoratedDescriptor'],
            f = p['inheritsLoose'],
            g = p['initializerDefineProperty'],
            h = p['assertThisInitialized'];
        }
        , function(p) {
            j = p['cclegacy'],
            k = p['_decorator'],
            l = p['Label'];
        }
        , function(p) {
            m = p['clearInput'];
        }
        ],
        'execute': function() {
            var q, v, w, x, y;
            j['_RF']['push']({}, '339c1ZQnBFGnIo5jSPA8hV3', 'tagClearInput', void 0x0);
            var z = k['ccclass']
              , A = k['property'];
            b('tagClearInput', (q = z('tagClearInput'),
            v = A({
                'type': l,
                'tooltip': '标签'
            }),
            q((y = d((x = function(B) {
                function C() {
                    for (var D, E = arguments['length'], F = new Array(E), G = 0x0; G < E; G++)
                        F[G] = arguments[G];
                    return D = B['call']['apply'](B, [this]['concat'](F)) || this,
                    g(D, 'tagInput', y, h(D)),
                    D;
                }
                return f(C, B),
                C['prototype']['setTag'] = function(D) {
                    this['tagInput'] && (this['tagInput']['string'] = D);
                }
                ,
                C;
            }(m))['prototype'], 'tagInput', [v], {
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
System['register']('chunks:///_virtual/tha2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, 'e089f/NkutFE44bko3ZSngn', 'tha', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['tha'] || (b['languages']['tha'] = {}),
            b['languages']['tha'][0x66] = {
                0x1: 'วีไอพี',
                0x2: 'ธนาคาร',
                0x3: 'จดหมาย',
                0x4: 'กิจกรรม',
                0x5: 'อันดับ',
                0x6: 'ส่งเสริม',
                0x7: 'ถอน',
                0x8: 'รหัสอุปกรณ์ว่างเปล่า',
                0x9: 'ประเภทการลงทะเบียนไม่ถูกต้อง',
                0xa: 'ข้อมูลการลงทะเบียนไม่ถูกต้อง',
                0xb: 'ข้อยกเว้นของระบบ\x2003\x20โปรดลองอีกครั้งในภายหลัง',
                0xc: 'ID\x20ซ้ำ\x20โปรดติดต่อฝ่ายบริการลูกค้า',
                0xd: 'บัญชีได้รับการลงทะเบียนแล้ว',
                0xe: 'แคปช่าผิด.',
                0xf: 'หมายเลขโทรศัพท์นี้ถูกใช้ไปแล้ว',
                0x10: 'กรุณาผูกอีเมลของคุณก่อน',
                0x11: 'สำหรับที่อยู่\x20IP\x20ที่ผิดปกติ\x20โปรดติดต่อฝ่ายบริการลูกค้า',
                0x12: 'การลงทะเบียนล้มเหลว\x20โปรดลองอีกครั้งในภายหลัง\x20(รหัส:1010)',
                0x13: 'การลงทะเบียนล้มเหลว\x20โปรดลองอีกครั้งในภายหลัง\x20(รหัส:1011)',
                0x14: 'ประเภทการเข้าสู่ระบบไม่ถูกต้อง',
                0x15: 'ข้อมูลการเข้าสู่ระบบไม่ถูกต้อง',
                0x16: 'อุปกรณ์ผิดปกติ\x20โปรดติดต่อฝ่ายบริการลูกค้า',
                0x17: 'ข้อยกเว้นของระบบ\x2013\x20โปรดลองอีกครั้งในภายหลัง',
                0x18: 'ความผิดปกติของบัญชีโปรดติดต่อฝ่ายบริการลูกค้า',
                0x19: 'ดูเหมือนว่าจะมีข้อยกเว้นในการเข้าสู่ระบบ\x20โปรดลองอีกครั้งในภายหลัง',
                0x1a: 'บัญชีหรือรหัสผ่านไม่ถูกต้อง\x20โปรดตรวจสอบการป้อนข้อมูล',
                0x1b: 'บัญชีนี้มีความเสี่ยงด้านความปลอดภัยและกำลังจะเข้าสู่การตรวจสอบความปลอดภัย',
                0x1c: 'อุปกรณ์ที่ผิดกฎหมายในการเข้าสู่ระบบ\x20โปรดติดต่อฝ่ายบริการลูกค้า',
                0x1d: 'การบำรุงรักษาเซิร์ฟเวอร์\x20โปรดลองอีกครั้งในภายหลัง',
                0x1e: 'คำขอไม่ถูกต้อง',
                0x1f: 'เวอร์ชันต่ำเกินไป\x20ต้องอัปเกรด',
                0x20: 'ข้อผิดพลาดของพารามิเตอร์',
                0x21: 'บริการลูกค้าไม่พร้อมใช้งานสำหรับการเข้าสู่ระบบ',
                0x22: 'ประเภทรหัสยืนยันไม่ถูกต้อง',
                0x23: 'ดูเหมือนว่าจะเกิดข้อยกเว้นการเข้าสู่ระบบ\x2021\x20โปรดลองอีกครั้งในภายหลัง',
                0x24: 'หมายเลขโทรศัพท์ปัจจุบันได้ลงทะเบียนไว้แล้ว\x20ไม่สามารถลงทะเบียนซ้ำได้',
                0x25: 'ข้อยกเว้นของระบบ\x2023\x20โปรดลองอีกครั้งในภายหลัง',
                0x26: 'ข้อยกเว้นข้อมูลการยืนยัน\x20โปรดลองอีกครั้งในภายหลัง',
                0x27: 'หมายเลขโทรศัพท์ปัจจุบันไม่เชื่อมโยงกับบัญชีใดๆ',
                0x28: 'ข้อมูลการเข้าสู่ระบบหมดอายุแล้ว',
                0x29: 'กรุณาผูกหมายเลขโทรศัพท์ของคุณก่อน',
                0x2a: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
                0x2b: 'ประเภทบัญชีไม่ถูกต้อง',
                0x2c: 'ข้อผิดพลาดของข้อมูลบัญชี',
                0x2d: 'รหัสยืนยันไม่ถูกต้อง',
                0x2e: 'ข้อยกเว้นของระบบ\x2033\x20โปรดลองอีกครั้งในภายหลัง',
                0x2f: 'บัญชีไม่ถูกต้อง',
                0x30: 'กรุณาผูกหมายเลขโทรศัพท์ของคุณก่อน',
                0x31: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
                0x32: 'บัญชีผูกกับหมายเลขโทรศัพท์แล้ว\x20ไม่สามารถผูกได้อีก',
                0x33: 'เบอร์โทรศัพท์ผูกไว้แล้ว',
                0x34: 'กรุณาใส่รหัสผ่านของคุณ',
                0x35: 'ไม่สามารถผูกหมายเลขโทรศัพท์สำหรับบัญชีกระแสรายวันได้\x20โปรดติดต่อฝ่ายบริการลูกค้า',
                0x36: 'ข้อยกเว้นการเข้าสู่ระบบ\x20โปรดลองอีกครั้ง',
                0x37: 'บัญชีกระแสรายวันมีอยู่แล้ว',
                0x38: 'รหัสยืนยันไม่ถูกต้อง',
                0x39: 'ข้อยกเว้นของระบบ\x2044\x20โปรดลองอีกครั้งในภายหลัง',
                0x3a: 'ข้อยกเว้นของระบบ\x2045\x20โปรดลองอีกครั้งในภายหลัง',
                0x3b: 'ข้อยกเว้นของระบบ\x2046\x20โปรดลองอีกครั้งในภายหลัง',
                0x3c: 'คำขอหมดเวลา\x20โปรดลองอีกครั้งในภายหลัง',
                0x3d: 'ไม่มีรหัสผู้ใช้',
                0x3e: 'ข้อมูลการตรวจสอบผู้ใช้ไม่ถูกต้อง',
                0x3f: 'กรุณากรอกข้อมูลการตรวจสอบผู้ใช้',
                0x40: 'ข้อมูลการตรวจสอบผู้ใช้ไม่ถูกต้อง',
                0x41: 'ข้อยกเว้นการดำเนินการโปรดติดต่อฝ่ายบริการลูกค้า',
                0x42: 'ข้อมูลไม่ถูกต้องโปรดลองอีกครั้งในภายหลัง',
                0x43: 'ขอแสดงความยินดีกับ\x20<color=#FF4600>@player</color>\x20ใน\x20<color=yellow>@game</color>\x20สำหรับการชนะรางวัล\x20<color=#4BFF00>x@multiple</color>\x20และได้รับ\x20<color=yellow>@coins</สี>\x20เหรียญ.',
                0x44: 'ขอแสดงความยินดีกับ\x20<color=#FF4600>%s</color>\x20สำหรับการชนะแจ็คพอตใน\x20<color=#4BFF00>%s</color>\x20และชนะเหรียญ\x20<color=yellow>%s</color>',
                0x45: 'ห้อง',
                0x46: 'ผู้เล่น',
                0x47: 'ก่อน',
                0x48: 'ยอดคงเหลือขั้นต่ำ',
                0x49: 'การสาธิต',
                0x4a: 'หลัก',
                0x4b: 'ผู้เชี่ยวชาญ',
                0x4c: 'กษัตริย์',
                0x4d: 'มหากาพย์',
                0x4e: 'ตำนาน',
                0x4f: 'ตำนาน',
                0x50: 'ห้อง',
                0x51: 'เล่น',
                0x52: 'ใดๆ',
                0x53: 'ล้มเลิก',
                0x54: 'ออกจากระบบ',
                0x55: 'เคล็ดลับ',
                0x56: 'การเชื่อมต่อเซิร์ฟเวอร์ล้มเหลว\x20โปรดลองอีกครั้งในภายหลัง',
                0x57: 'ระบบขอให้คุณออก\x20กรุณาเข้าเกมทีหลัง',
                0x58: 'บัญชีนี้ลงชื่อเข้าใช้จากอุปกรณ์อื่น\x20โปรดคำนึงถึงความปลอดภัยของบัญชี',
                0x59: 'เกมของคุณใน\x20%s\x20ยังไม่สิ้นสุด\x20โปรดกลับไปเล่นอีกครั้ง',
                0x5a: 'มีการลงทะเบียนบัญชีอยู่แล้ว',
                0x5b: 'อุปกรณ์บัญชีแขกต้องไม่ว่างเปล่า',
                0x5c: 'บัญชีไม่มีอยู่',
                0x5d: 'รหัสผ่านผิดพลาด.',
                0x5e: 'บัญชีนี้ถูกระงับ',
                0x5f: 'ข้อยกเว้นการเข้าสู่ระบบของผู้เยี่ยมชม\x20โปรดลองอีกครั้ง',
                0x60: 'ข้อยกเว้นการเข้าสู่ระบบ\x207\x20โปรดลองอีกครั้ง',
                0x61: 'ระบบอยู่ระหว่างการบำรุงรักษา\x20โปรดลองอีกครั้งในภายหลัง',
                0x62: 'รหัสผ่าน',
                0x63: 'ดาวน์โหลด',
                0x64: 'เพื่อประสบการณ์ที่ดีขึ้นของคุณ\x20โปรดดาวน์โหลดเกม',
                0x65: 'เพื่อประสบการณ์ที่ดีขึ้นของคุณ\x20โปรดดาวน์โหลดเกม\x20ติดตั้งทันทีและรับรางวัล!',
                0x66: 'ยอมรับ\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>ข้อกำหนดในการให้บริการ</on></u></color>\x20และ\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>ความเป็นส่วนตัวและนโยบาย</on></u></color>',
                0x67: 'ผูกหมายเลขโทรศัพท์มือถือ\x0aเพื่อรับรางวัล',
                0x68: 'ผูก',
                0x69: 'ขออภัย\x20ไม่ตรงตามข้อกำหนด\x20VIP\x20ยิ่งมีเหรียญมาก\x20ยิ่ง\x20VIP\x20ยิ่งไปที่ร้านเพื่อเติมเงิน',
                0x6a: 'ขออภัย\x20คุณไม่ตรงตามข้อกำหนดในการเข้า\x20คุณต้องการไปซื้อที่ร้านไหม',
                0x6b: 'แตะ\x20<img\x20src=\x27share\x27\x20/>\x20และ\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>เพิ่มไปที่หน้าจอหลัก</color></b>\x20เพื่อเล่นทุกครั้งที่คุณต้องการ',
                0x6c: 'แตะ\x20<img\x20src=\x27share\x27\x20/>\x20และ\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>เพิ่มไปที่หน้าจอหลัก</color></b>\x20เพื่อเล่นทุกครั้งที่คุณต้องการ',
                0x6d: 'คำเตือน',
                0x6e: 'เพื่อความปลอดภัยของข้อมูลเกมของคุณ\x20ขอแนะนำอย่างยิ่งให้คุณลงทะเบียนเป็นบัญชีอย่างเป็นทางการ',
                0x6f: 'ส่งข้อความ',
                0x70: 'รับรางวัลเรียบร้อยแล้ว',
                0x71: 'บริการ',
                0x72: 'การตั้งค่า',
                0x73: 'เข้าสู่ระบบ',
                0x74: 'รูเล็ต',
                0x75: 'ของขวัญ',
                0x76: 'กราเทีย',
                0x77: 'เชิญ',
                0x78: 'กองทุน',
                0x79: 'ทั้งหมด',
                0x7a: 'ร้อน',
                0x7b: 'Slots',
                0x7c: 'โป๊กเกอร์',
                0x7d: 'สถานะเครือข่ายไม่ดี',
                0x7e: 'ฟรีแคช',
                0x7f: 'ซื้อ',
                0x80: 'พบเวอร์ชันใหม่\x20คุณต้องการรีเฟรชหรือไม่',
                0x81: 'แคมเปญถูกปิดและเหรียญที่ใช้ในการซื้อรหัสจับฉลากได้รับการคืนเงินแล้ว',
                0x82: 'BUY\x20COIN',
                0x83: 'คุณยังไม่ได้เข้าสู่ระบบ\x20โปรดออกจากระบบแล้วลองอีกครั้ง',
                0x84: 'หากการรับรองความถูกต้องล้มเหลว\x20ให้ออกแล้วลองอีกครั้ง',
                0x85: 'ห้องเกมไม่ถูกต้องลองห้องอื่น',
                0x86: 'ห้องปิดลองอีกอัน',
                0x87: 'งาน',
                0x88: 'ถึงเวลาเล่นสล็อตใหม่แล้ว',
                0x89: 'รับเหรียญฟรีเมื่อลงชื่อเข้าใช้ทุกวัน!',
                0x8a: 'Lucky\x20Roulette\x20รับประกันอัตราการชนะ\x20100%\x20มารับรางวัลกันเถอะ!',
                0x8b: 'ความท้าทายใหม่สุดพิเศษสำหรับเหรียญขนาดใหญ่!',
                0x8c: 'สล็อตและคุณสมบัติที่น่าทึ่ง!',
                0x8d: 'คุณสามารถรับโบนัสพิเศษได้',
                0x8e: 'พลังวีไอพีที่สูงขึ้น\x20สิทธิประโยชน์มากขึ้น!',
                0x8f: 'หมุนสล็อตใหม่\x20ขอให้โชคดีอยู่กับคุณ!',
                0x90: 'LUCKY\x20WHEEL\x20DAY,\x20ตัวคูณวงล้อทอง!',
                0x91: 'โบนัสเซอร์ไพรส์\x20มาเก็บเหรียญของคุณ',
                0x92: 'หมุนเร็วขึ้นและรางวัลใหญ่!',
                0x93: 'MEGA\x20REWARD\x20พร้อมแล้ว\x20หมุนทันที!',
                0x94: 'แตะและสะสมชิปฟรีของคุณทันที!',
                0x95: 'ชั่วโมงแห่งความสุข!!!TREASURE\x20BOWL\x20โอกาสเพิ่มขึ้น\x2010%!!!โบนัสไม่จำกัดในทุกแพ็ก',
                0x96: 'เล่นเลยเพื่อเพลิดเพลินกับขนมและภารกิจพิเศษ',
                0x97: 'เชิญเพื่อนมาเป็นหัวหน้าของพวกเขา!\x20เหรียญมหาศาลฟรี',
                0x98: 'แบ่งปันให้เพื่อนของคุณรับของขวัญสุดพิเศษ',
                0x99: 'รางวัลมากมายสำหรับการแบ่งปัน\x20เชิญรางวัลเพิ่มเติม',
                0x9a: 'เล่นกับเพื่อน\x20ๆ\x20รับของขวัญฟรีทุกวัน!',
                0x9b: 'โบนัสโชคดี\x20โอกาสที่จะรวยที่สุด!',
                0x9c: 'เพลิดเพลินไปกับข้อเสนอพิเศษครั้งแรกของคุณ\x20และรับสิทธิประโยชน์ในการซื้อ',
                0x9d: 'ซื้อครั้งแรกรับรางวัลพิเศษ!',
                0x9e: 'HalloWIN!เข้าสู่ระบบทุกวัน\x20ซื้อสินค้าใดๆ\x20และส่วนลดจำกัดเวลา!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/togglePwd.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts'], function(b) {
    var c, f, g, h, j, k, m, p, q, v;
    return {
        'setters': [function(w) {
            c = w['applyDecoratedDescriptor'],
            f = w['inheritsLoose'],
            g = w['initializerDefineProperty'],
            h = w['assertThisInitialized'];
        }
        , function(w) {
            j = w['cclegacy'],
            k = w['_decorator'],
            m = w['Button'],
            p = w['EditBox'],
            q = w['Component'];
        }
        , function(w) {
            v = w['utils'];
        }
        ],
        'execute': function() {
            var x, z, A, B, C, D, E, F, G;
            j['_RF']['push']({}, 'a0ad9V1aCxDN5zQTK0UssAH', 'togglePwd', void 0x0);
            var H = k['ccclass']
              , I = k['property'];
            b('togglePwd', (x = H('togglePwd'),
            z = I(m),
            A = I(m),
            B = I(p),
            x((E = c((D = function(J) {
                function K() {
                    for (var M, N = arguments['length'], O = new Array(N), Q = 0x0; Q < N; Q++)
                        O[Q] = arguments[Q];
                    return M = J['call']['apply'](J, [this]['concat'](O)) || this,
                    g(M, 'btn_show_pwd', E, h(M)),
                    g(M, 'btn_hide_pwd', F, h(M)),
                    g(M, 'editBox', G, h(M)),
                    M;
                }
                f(K, J);
                var L = K['prototype'];
                return L['start'] = function() {
                    v['ButtonBindClick'](this['btn_hide_pwd'], this['onHidePwd'], this),
                    v['ButtonBindClick'](this['btn_show_pwd'], this['onShowPwd'], this);
                }
                ,
                L['onShowPwd'] = function() {
                    this['btn_show_pwd']['node']['active'] = !0x1,
                    this['btn_hide_pwd']['node']['active'] = !0x0,
                    this['editBox']['inputFlag'] = p['InputFlag']['PASSWORD'];
                }
                ,
                L['onHidePwd'] = function() {
                    this['btn_show_pwd']['node']['active'] = !0x0,
                    this['btn_hide_pwd']['node']['active'] = !0x1,
                    this['editBox']['inputFlag'] = p['InputFlag']['DEFAULT'];
                }
                ,
                L['onEnable'] = function() {
                    this['onShowPwd']();
                }
                ,
                K;
            }(q))['prototype'], 'btn_show_pwd', [z], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            F = c(D['prototype'], 'btn_hide_pwd', [A], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            G = c(D['prototype'], 'editBox', [B], {
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
System['register']('chunks:///_virtual/topCloseLayer.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts'], function(b) {
    var f, g, j, k, m, q, v, w, x, z, A, B, C, D;
    return {
        'setters': [function(E) {
            f = E['createClass'];
        }
        , function(E) {
            g = E['cclegacy'],
            j = E['_decorator'],
            k = E['Node'],
            m = E['Layers'],
            q = E['UITransform'],
            v = E['Camera'],
            w = E['gfx'],
            x = E['Canvas'],
            z = E['Vec3'],
            A = E['Widget'];
        }
        , function(E) {
            B = E['utils'];
        }
        , function(E) {
            C = E['webGame'];
        }
        , function(E) {
            D = E['oops'];
        }
        ],
        'execute': function() {
            var E, F;
            g['_RF']['push']({}, '78742f7Z2FJDLngo/sbMI47', 'topCloseLayer', void 0x0);
            var G = j['ccclass'];
            j['property'],
            b('topCloseLayer', G('topCloseLayer')(((F = (function() {
                function H() {
                    this['bInit'] = !0x1,
                    this['node'] = null,
                    this['canvas'] = null,
                    this['camera'] = null,
                    this['closeLayer'] = null,
                    this['clickHandler'] = null,
                    this['init']();
                }
                var I = H['prototype'];
                return I['init'] = function() {
                    if (!this['bInit']) {
                        var J = function(L) {
                            var M = B['getOrAddComponent'](L, A);
                            return M['isAlignTop'] = !0x0,
                            M['isAlignBottom'] = !0x0,
                            M['isAlignLeft'] = !0x0,
                            M['isAlignRight'] = !0x0,
                            M['top'] = 0x0,
                            M['bottom'] = 0x0,
                            M['left'] = 0x0,
                            M['right'] = 0x0,
                            M['updateAlignment'](),
                            M['alignMode'] = A['AlignMode']['ON_WINDOW_RESIZE'],
                            M;
                        };
                        this['node'] = new k('TopLayer'),
                        this['node']['layer'] = m['Enum']['UI_2D'],
                        this['node']['parent'] = D['gui']['root']['parent'],
                        this['node']['setPosition'](0x0, 0x0, 0x0),
                        (this['node']['addComponent'](q),
                        J(this['node']));
                        var K = new k('Camera');
                        K['parent'] = this['node'],
                        this['camera'] = K['addComponent'](v),
                        this['camera']['priority'] = 0xfff0,
                        this['camera']['visibility'] = m['Enum']['UI_2D'],
                        this['camera']['clearFlags'] = w['ClearFlagBit']['DEPTH'],
                        this['camera']['projection'] = v['ProjectionType']['ORTHO'],
                        this['canvas'] = this['node']['addComponent'](x),
                        this['canvas']['cameraComponent'] = this['camera'],
                        this['closeLayer'] = new k('CloseLayer'),
                        this['closeLayer']['layer'] = m['Enum']['UI_2D'],
                        this['closeLayer']['parent'] = this['node'],
                        this['closeLayer']['setPosition'](0x0, 0x0, 0x0),
                        this['closeLayer']['addComponent'](q),
                        (J(this['closeLayer']),
                        this['closeLayer']['on'](k['EventType']['TOUCH_END'], this['onCloseLayerClick'], this),
                        this['node']['active'] = !0x1,
                        this['bInit'] = !0x0);
                    }
                }
                ,
                I['onCloseLayerClick'] = function() {
                    var J;
                    null == (J = this['clickHandler']) || J['call'](this),
                    null != this['node'] && (this['node']['active'] = !0x1);
                }
                ,
                I['show'] = function(J, K, L) {
                    if (null != this['node']) {
                        if (this['node']['active'] = !0x0,
                        this['clickHandler'] = function() {
                            J['call'](K);
                        }
                        ,
                        null != L) {
                            var M = L['worldPosition']
                              , N = L['worldScale']
                              , O = new z();
                            this['closeLayer']['inverseTransformPoint'](O, M),
                            L['parent'] = this['closeLayer'],
                            L['position'] = O,
                            L['setScale'](N);
                        }
                    } else
                        C['log']['logView']('topCloseLayer\x20show\x20fail,\x20node\x20is\x20null');
                }
                ,
                I['close'] = function() {
                    this['node']['active'] = !0x1,
                    this['clickHandler'] = null;
                }
                ,
                f(H, null, [{
                    'key': 'instance',
                    'get': function() {
                        return null == this['_instance'] && (this['_instance'] = new H()),
                        this['_instance'];
                    }
                }]),
                H;
            }()))['_instance'] = void 0x0,
            E = F)) || E),
            g['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/vi2.ts', ['cc'], function() {
    var a;
    return {
        'setters': [function(b) {
            a = b['cclegacy'];
        }
        ],
        'execute': function() {
            a['_RF']['push']({}, '453b2Vey15HIqdZotJ0BjGZ', 'vi', void 0x0);
            var b = window;
            b['languages'] || (b['languages'] = {}),
            b['languages']['vi'] || (b['languages']['vi'] = {}),
            b['languages']['vi'][0x66] = {
                0x1: 'VIP',
                0x2: 'Ngân\x20hàng',
                0x3: 'Bưu\x20điện',
                0x4: 'Hoạt\x20động',
                0x5: 'Cấp',
                0x6: 'Đẩy\x20mạnh',
                0x7: 'Rút',
                0x8: 'Mã\x20thiết\x20bị\x20trống',
                0x9: 'Loại\x20đăng\x20ký\x20không\x20chính\x20xác',
                0xa: 'Thông\x20tin\x20đăng\x20ký\x20không\x20chính\x20xác',
                0xb: 'Ngoại\x20lệ\x20hệ\x20thống\x2003,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0xc: 'ID\x20bị\x20trùng\x20lặp,\x20vui\x20lòng\x20liên\x20hệ\x20với\x20dịch\x20vụ\x20khách\x20hàng',
                0xd: 'Tài\x20khoản\x20đã\x20được\x20đăng\x20ký',
                0xe: 'Captcha\x20sai',
                0xf: 'Số\x20điện\x20thoại\x20này\x20đã\x20được\x20sử\x20dụng',
                0x10: 'Vui\x20lòng\x20liên\x20kết\x20email\x20của\x20bạn\x20trước',
                0x11: 'Đối\x20với\x20các\x20địa\x20chỉ\x20IP\x20bất\x20thường,\x20vui\x20lòng\x20liên\x20hệ\x20với\x20dịch\x20vụ\x20khách\x20hàng',
                0x12: 'Đăng\x20ký\x20không\x20thành\x20công,\x20vui\x20lòng\x20thử\x20lại\x20sau\x20(mã:1010)',
                0x13: 'Đăng\x20ký\x20không\x20thành\x20công,\x20vui\x20lòng\x20thử\x20lại\x20sau\x20(mã:1011)',
                0x14: 'Loại\x20đăng\x20nhập\x20không\x20hợp\x20lệ',
                0x15: 'Thông\x20tin\x20đăng\x20nhập\x20không\x20chính\x20xác',
                0x16: 'Thiết\x20bị\x20bất\x20thường,\x20vui\x20lòng\x20liên\x20hệ\x20với\x20dịch\x20vụ\x20khách\x20hàng',
                0x17: 'Ngoại\x20lệ\x20hệ\x20thống\x2013,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x18: 'Tài\x20khoản\x20bất\x20thường,\x20vui\x20lòng\x20liên\x20hệ\x20với\x20bộ\x20phận\x20chăm\x20sóc\x20khách\x20hàng',
                0x19: 'Có\x20vẻ\x20như\x20có\x20ngoại\x20lệ\x20đăng\x20nhập,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x1a: 'Tài\x20khoản\x20hoặc\x20mật\x20khẩu\x20không\x20chính\x20xác,\x20vui\x20lòng\x20kiểm\x20tra\x20đầu\x20vào',
                0x1b: 'Tài\x20khoản\x20có\x20rủi\x20ro\x20bảo\x20mật\x20và\x20sắp\x20nhập\x20xác\x20minh\x20bảo\x20mật',
                0x1c: 'Thiết\x20bị\x20bất\x20hợp\x20pháp\x20để\x20đăng\x20nhập,\x20vui\x20lòng\x20liên\x20hệ\x20với\x20dịch\x20vụ\x20khách\x20hàng',
                0x1d: 'Bảo\x20trì\x20máy\x20chủ,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x1e: 'Yêu\x20cầu\x20không\x20hợp\x20lệ',
                0x1f: 'Phiên\x20bản\x20quá\x20thấp,\x20cần\x20nâng\x20cấp',
                0x20: 'Lỗi\x20tham\x20số',
                0x21: 'Dịch\x20vụ\x20khách\x20hàng\x20không\x20khả\x20dụng\x20để\x20đăng\x20nhập',
                0x22: 'Loại\x20mã\x20xác\x20minh\x20không\x20chính\x20xác',
                0x23: 'Có\x20vẻ\x20như\x20có\x20ngoại\x20lệ\x20đăng\x20nhập\x2021\x20xảy\x20ra,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x24: 'Số\x20điện\x20thoại\x20hiện\x20tại\x20đã\x20được\x20đăng\x20ký,\x20không\x20thể\x20đăng\x20ký\x20lại',
                0x25: 'Ngoại\x20lệ\x20hệ\x20thống\x2023,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x26: 'Ngoại\x20lệ\x20thông\x20tin\x20xác\x20minh,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x27: 'Số\x20điện\x20thoại\x20hiện\x20tại\x20không\x20liên\x20kết\x20với\x20bất\x20kỳ\x20tài\x20khoản\x20nào',
                0x28: 'Thông\x20tin\x20đăng\x20nhập\x20đã\x20hết\x20hạn',
                0x29: 'Vui\x20lòng\x20liên\x20kết\x20số\x20điện\x20thoại\x20của\x20bạn\x20trước',
                0x2a: 'Vui\x20lòng\x20nhập\x20số\x20điện\x20thoại\x20hợp\x20lệ',
                0x2b: 'Loại\x20tài\x20khoản\x20không\x20chính\x20xác',
                0x2c: 'Lỗi\x20thông\x20tin\x20tài\x20khoản',
                0x2d: 'Mã\x20xác\x20minh\x20không\x20chính\x20xác',
                0x2e: 'Ngoại\x20lệ\x20hệ\x20thống\x2033,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x2f: 'Tài\x20khoản\x20không\x20chính\x20xác',
                0x30: 'Vui\x20lòng\x20liên\x20kết\x20số\x20điện\x20thoại\x20của\x20bạn\x20trước',
                0x31: 'Vui\x20lòng\x20nhập\x20số\x20điện\x20thoại\x20hợp\x20lệ',
                0x32: 'Tài\x20khoản\x20đã\x20được\x20liên\x20kết\x20với\x20số\x20điện\x20thoại,\x20không\x20thể\x20liên\x20kết\x20lại',
                0x33: 'Số\x20điện\x20thoại\x20đã\x20được\x20liên\x20kết',
                0x34: 'Vui\x20lòng\x20nhập\x20mật\x20khẩu\x20của\x20bạn',
                0x35: 'Không\x20thể\x20liên\x20kết\x20số\x20điện\x20thoại\x20với\x20tài\x20khoản\x20hiện\x20tại,\x20vui\x20lòng\x20liên\x20hệ\x20dịch\x20vụ\x20khách\x20hàng.',
                0x36: 'Ngoại\x20lệ\x20đăng\x20nhập,\x20vui\x20lòng\x20thử\x20lại.',
                0x37: 'Tài\x20khoản\x20hiện\x20tại\x20đã\x20tồn\x20tại.',
                0x38: 'Mã\x20xác\x20minh\x20không\x20chính\x20xác.',
                0x39: 'Ngoại\x20lệ\x20hệ\x20thống\x2044,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                0x3a: 'Ngoại\x20lệ\x20hệ\x20thống\x2045,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                0x3b: 'Ngoại\x20lệ\x20hệ\x20thống\x2046,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                0x3c: 'Yêu\x20cầu\x20đã\x20quá\x20thời\x20gian,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                0x3d: 'ID\x20người\x20dùng\x20không\x20tồn\x20tại.',
                0x3e: 'Thông\x20tin\x20xác\x20minh\x20người\x20dùng\x20không\x20chính\x20xác.',
                0x3f: 'Vui\x20lòng\x20điền\x20thông\x20tin\x20xác\x20minh\x20người\x20dùng',
                0x40: 'Thông\x20tin\x20xác\x20minh\x20người\x20dùng\x20không\x20chính\x20xác.',
                0x41: 'Ngoại\x20lệ\x20thao\x20tác,\x20vui\x20lòng\x20liên\x20hệ\x20dịch\x20vụ\x20khách\x20hàng.',
                0x42: 'Dữ\x20liệu\x20không\x20hợp\x20lệ,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x43: 'Xin\x20chúc\x20mừng\x20<color=#FF4600>@player</color>\x20trong\x20<color=yellow>@game</color>\x20đã\x20giành\x20được\x20giải\x20thưởng\x20<color=#4BFF00>x@multiple</color>\x20và\x20nhận\x20được\x20<color=yellow>@coins</color>\x20Coins.',
                0x44: 'Xin\x20chúc\x20mừng\x20<color=#FF4600>%s</color>\x20đã\x20trúng\x20Jackpot\x20trong\x20<color=#4BFF00>%s</color>\x20và\x20giành\x20được\x20<color=yellow>%s</color>\x20xu.',
                0x45: 'Phòng',
                0x46: 'Cầu\x20thủ',
                0x47: 'Trước',
                0x48: 'Số\x20dư\x20tối\x20thiểu',
                0x49: 'Demo',
                0x4a: 'Chính',
                0x4b: 'Chủ',
                0x4c: 'Vua',
                0x4d: 'Epic',
                0x4e: 'Truyền\x20thuyết',
                0x4f: 'Vip',
                0x50: 'Phòng',
                0x51: 'Play',
                0x52: 'Bất\x20kì',
                0x53: 'Bỏ',
                0x54: 'Đăng\x20xuất',
                0x55: 'Tips',
                0x56: 'Kết\x20nối\x20máy\x20chủ\x20không\x20thành\x20công,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                0x57: 'Hệ\x20thống\x20yêu\x20cầu\x20bạn\x20rời\x20đi,\x20vui\x20lòng\x20vào\x20trò\x20chơi\x20sau',
                0x58: 'Tài\x20khoản\x20này\x20được\x20đăng\x20nhập\x20từ\x20một\x20thiết\x20bị\x20khác,\x20vui\x20lòng\x20chú\x20ý\x20đến\x20bảo\x20mật\x20tài\x20khoản',
                0x59: 'Trò\x20chơi\x20của\x20bạn\x20trong\x20%s\x20vẫn\x20chưa\x20kết\x20thúc,\x20vui\x20lòng\x20quay\x20lại\x20và\x20chơi',
                0x5a: 'Đã\x20tồn\x20tại\x20tài\x20khoản\x20đăng\x20ký.',
                0x5b: 'Thiết\x20bị\x20tài\x20khoản\x20khách\x20không\x20thể\x20để\x20trống.',
                0x5c: 'Tài\x20khoản\x20không\x20tồn\x20tại.',
                0x5d: 'Mật\x20khẩu\x20không\x20chính\x20xác.',
                0x5e: 'Tài\x20khoản\x20này\x20đã\x20bị\x20khóa.',
                0x5f: 'Đăng\x20nhập\x20khách\x20bị\x20lỗi,\x20vui\x20lòng\x20thử\x20lại.',
                0x60: 'Lỗi\x20đăng\x20nhập\x207,\x20vui\x20lòng\x20thử\x20lại.',
                0x61: 'Hệ\x20thống\x20đang\x20bảo\x20trì,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                0x62: 'Mật\x20mã',
                0x63: 'Download',
                0x64: 'để\x20có\x20trải\x20nghiệm\x20tốt\x20hơn,\x20vui\x20lòng\x20Tải\x20xuống\x20Trò\x20chơi.',
                0x65: 'để\x20có\x20trải\x20nghiệm\x20tốt\x20hơn,\x20vui\x20lòng\x20Tải\x20xuống\x20Trò\x20chơi.Cài\x20đặt\x20ngay\x20bây\x20giờ\x20và\x20nhận\x20phần\x20thưởng!',
                0x66: 'Chấp\x20nhận\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Điều\x20khoản\x20dịch\x20vụ</on></color></u>\x20và\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacy&Policy</on></u></color>',
                0x67: 'Ràng\x20buộc\x20số\x20điện\x20thoại\x0a\x20di\x20động\x20để\x20nhận\x20phần\x20thưởng',
                0x68: 'Ràng\x20buộc',
                0x69: 'Xin\x20lỗi,\x20yêu\x20cầu\x20VIP\x20không\x20được\x20đáp\x20ứng,\x20càng\x20nhiều\x20xu,\x20VIP\x20càng\x20cao,\x20hãy\x20đến\x20cửa\x20hàng\x20để\x20nạp\x20tiền',
                0x6a: 'Xin\x20lỗi,\x20bạn\x20không\x20đáp\x20ứng\x20các\x20yêu\x20cầu\x20đầu\x20vào,\x20bạn\x20có\x20muốn\x20đến\x20cửa\x20hàng\x20để\x20mua\x20một\x20số\x20không?',
                0x6b: 'Nhấn\x20<img\x20src=\x27share\x27\x20/>\x20và\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home</color></b>\x20Screen\x20để\x20phát\x20bất\x20cứ\x20khi\x20nào\x20bạn\x20muốn',
                0x6c: 'Nhấn\x20<img\x20src=\x27share\x27\x20/>\x20và\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home</color></b>\x20Screen\x20để\x20phát\x20bất\x20cứ\x20khi\x20nào\x20bạn\x20muốn',
                0x6d: 'Cảnh\x20báo',
                0x6e: 'Để\x20bảo\x20mật\x20dữ\x20liệu\x20trò\x20chơi\x20của\x20bạn,\x20bạn\x20nên\x20đăng\x20ký\x20làm\x20tài\x20khoản\x20chính\x20thức',
                0x6f: 'Tin\x20nhắn\x20đã\x20gửi',
                0x70: 'Nhận\x20giải\x20thưởng\x20hoàn\x20tất',
                0x71: 'Dịch',
                0x72: 'Khung\x20cảnh',
                0x73: 'Đăng\x20nhập',
                0x74: 'Roulette',
                0x75: 'Quà\x20tặng',
                0x76: 'Gratia',
                0x77: 'Mời',
                0x78: 'Quỹ',
                0x79: 'Tất\x20cả',
                0x7a: 'Nóng',
                0x7b: 'Máy\x20đánh\x20bạc',
                0x7c: 'bài\x20xì\x20phé',
                0x7d: 'Tình\x20trạng\x20mạng\x20kém',
                0x7e: 'Miễn\x20phí',
                0x7f: 'Mua',
                0x80: 'Đã\x20tìm\x20thấy\x20phiên\x20bản\x20mới.\x20Bạn\x20có\x20muốn\x20làm\x20mới\x20phiên\x20bản\x20này\x20không?',
                0x81: 'Chiến\x20dịch\x20đã\x20kết\x20thúc\x20và\x20số\x20tiền\x20chi\x20cho\x20việc\x20mua\x20mã\x20xổ\x20số\x20đã\x20được\x20hoàn\x20lại',
                0x82: 'BUY\x20COIN',
                0x83: 'Bạn\x20chưa\x20đăng\x20nhập,\x20vui\x20lòng\x20đăng\x20xuất\x20và\x20thử\x20lại',
                0x84: 'Nếu\x20xác\x20thực\x20không\x20thành\x20công,\x20hãy\x20thoát\x20và\x20thử\x20lại',
                0x85: 'Phòng\x20trò\x20chơi\x20không\x20hợp\x20lệ,\x20hãy\x20thử\x20một\x20phòng\x20khác',
                0x86: 'Phòng\x20đã\x20đóng,\x20hãy\x20thử\x20một\x20cái\x20khác',
                0x87: 'Nhiệm',
                0x88: 'Đã\x20đến\x20lúc\x20chơi\x20Slots\x20MỚI',
                0x89: 'Nhận\x20xu\x20MIỄN\x20PHÍ\x20bằng\x20cách\x20đăng\x20nhập\x20mỗi\x20ngày!',
                0x8a: 'Roulette\x20may\x20mắn!\x20Đảm\x20bảo\x20tỷ\x20lệ\x20thắng\x20100%!\x20Hãy\x20đến\x20và\x20nhận\x20giải\x20thưởng\x20của\x20bạn!',
                0x8b: 'Thử\x20thách\x20độc\x20quyền\x20mới\x20dành\x20cho\x20số\x20tiền\x20khổng\x20lồ!',
                0x8c: 'Khe\x20cắm\x20và\x20tính\x20năng\x20tuyệt\x20vời!',
                0x8d: 'Bạn\x20có\x20thể\x20nhận\x20được\x20tiền\x20thưởng\x20đặc\x20biệt',
                0x8e: 'SỨC\x20MẠNH\x20VIP\x20cao\x20hơn,\x20nhiều\x20lợi\x20ích\x20hơn!',
                0x8f: 'Quay\x20SLOTS\x20MỚI,\x20Chúc\x20bạn\x20may\x20mắn!',
                0x90: 'NGÀY\x20BÁNH\x20XE\x20MAY\x20MẮN,\x20BÁNH\x20XE\x20VÀNG!',
                0x91: 'TIỀN\x20THƯỞNG\x20BẤT\x20NGỜ,\x20Hãy\x20đến\x20thu\x20thập\x20tiền\x20của\x20bạn',
                0x92: 'Quay\x20nhanh\x20hơn\x20&\x20GIẢI\x20THƯỞNG\x20LỚN\x20HƠN!',
                0x93: 'PHẦN\x20THƯỞNG\x20MEGA\x20đã\x20sẵn\x20sàng,\x20QUAY\x20NGAY!',
                0x94: 'Hãy\x20nhấn\x20và\x20thu\x20thập\x20chip\x20miễn\x20phí\x20của\x20bạn\x20ngay\x20bây\x20giờ!',
                0x95: 'GIỜ\x20HẠNH\x20PHÚC!!!\x20BÚT\x20KHO\x20BÁ\x2010%\x20Cơ\x20hội!!!\x20Phần\x20thưởng\x20không\x20giới\x20hạn\x20cho\x20tất\x20cả\x20các\x20gói',
                0x96: 'Chơi\x20ngay\x20để\x20thưởng\x20thức\x20các\x20món\x20ăn\x20và\x20nhiệm\x20vụ\x20đặc\x20biệt',
                0x97: 'Mời\x20bạn\x20bè,\x20trở\x20thành\x20BOSS\x20của\x20họ!\x20Số\x20tiền\x20khổng\x20lồ\x20miễn\x20phí',
                0x98: 'Chia\x20sẻ\x20với\x20bạn\x20bè,\x20nhận\x20quà\x20độc\x20quyền',
                0x99: 'Phần\x20thưởng\x20lớn\x20cho\x20Chia\x20sẻ,\x20Thêm\x20Mời\x20thêm\x20giải\x20thưởng',
                0x9a: 'Chơi\x20với\x20bạn\x20bè,\x20Quà\x20tặng\x20miễn\x20phí\x20hàng\x20ngày!',
                0x9b: 'TIỀN\x20THƯỞNG\x20MAY\x20MẮN,\x20Cơ\x20hội\x20trở\x20thành\x20người\x20giàu\x20nhất!',
                0x9c: 'Tận\x20hưởng\x20ƯU\x20ĐÃI\x20ĐẶC\x20BIỆT\x20lần\x20đầu\x20tiên\x20của\x20bạn\x20và\x20nhận\x20các\x20lợi\x20ích\x20khi\x20mua\x20hàng',
                0x9d: 'Lần\x20mua\x20hàng\x20đầu\x20tiên\x20có\x20thể\x20nhận\x20thêm\x20GIẢI\x20THƯỞNG!',
                0x9e: 'HalloWIN!\x20Đăng\x20nhập\x20hàng\x20ngày,\x20mua\x20bất\x20kỳ\x20hàng\x20hóa\x20nào\x20và\x20giảm\x20giá\x20có\x20giới\x20hạn\x20thời\x20gian!'
            },
            a['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/viewLobby.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyConfig.ts', './lobbyBottom.ts', './lobbyTop.ts', './lobbyGameList.ts', './baseView.ts', './lobbyRoomList.ts'], function(d) {
    var f, g, h, j, k, q, v, w, x, y, z, A, B;
    return {
        'setters': [function(C) {
            f = C['applyDecoratedDescriptor'],
            g = C['inheritsLoose'],
            h = C['initializerDefineProperty'],
            j = C['assertThisInitialized'],
            k = C['createClass'];
        }
        , function(C) {
            q = C['cclegacy'],
            v = C['_decorator'];
        }
        , function(C) {
            w = C['Lobby'];
        }
        , function(C) {
            x = C['lobbyBottom'];
        }
        , function(C) {
            y = C['lobbyTop'];
        }
        , function(C) {
            z = C['lobbyGameList'];
        }
        , function(C) {
            A = C['baseView'];
        }
        , function(C) {
            B = C['lobbyRoomList'];
        }
        ],
        'execute': function() {
            var C, E, F, G, H, J, K, M, N, O, P;
            q['_RF']['push']({}, 'bf80bRF6K9Noq/CLgd5Jlq1', 'viewLobby', void 0x0);
            var Q = v['ccclass']
              , S = v['property'];
            d('viewLobby', (C = Q('viewLobby'),
            E = S({
                'type': y,
                'tooltip': '顶部动作条'
            }),
            F = S({
                'type': z,
                'tooltip': '游戏列表'
            }),
            G = S({
                'type': B,
                'tooltip': '游戏房间'
            }),
            H = S({
                'type': x,
                'tooltip': '底部动作条'
            }),
            C((M = f((K = function(T) {
                function U() {
                    for (var W, X = arguments['length'], Y = new Array(X), Z = 0x0; Z < X; Z++)
                        Y[Z] = arguments[Z];
                    return W = T['call']['apply'](T, [this]['concat'](Y)) || this,
                    h(W, 'top', M, j(W)),
                    h(W, 'gameList', N, j(W)),
                    h(W, 'gameRooms', O, j(W)),
                    h(W, 'bottom', P, j(W)),
                    W;
                }
                g(U, T);
                var V = U['prototype'];
                return V['onInit'] = function() {
                    this['top']['Init'](w['modID']['top'], this['messager']),
                    this['gameList']['Init'](w['modID']['gameList'], this['messager']),
                    this['gameRooms']['Init'](w['modID']['gameRooms'], this['messager']),
                    this['bottom']['Init'](w['modID']['bottom'], this['messager']);
                }
                ,
                V['refresh'] = function(W) {
                    void 0x0 === W && (W = !0x0),
                    this['top']['refresh'](),
                    W && this['gameList']['refresh'](!0x0),
                    this['bottom']['refresh']();
                }
                ,
                V['refreshDynamicEntry'] = function() {
                    this['top']['refreshDynamicEntry'](),
                    this['bottom']['refreshDynamicEntry']();
                }
                ,
                k(U, [{
                    'key': 'Top',
                    'get': function() {
                        return this['top'];
                    }
                }, {
                    'key': 'GameList',
                    'get': function() {
                        return this['gameList'];
                    }
                }, {
                    'key': 'GameRooms',
                    'get': function() {
                        return this['gameRooms'];
                    }
                }, {
                    'key': 'Bottom',
                    'get': function() {
                        return this['bottom'];
                    }
                }]),
                U;
            }(A))['prototype'], 'top', [E], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            N = f(K['prototype'], 'gameList', [F], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            O = f(K['prototype'], 'gameRooms', [G], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            P = f(K['prototype'], 'bottom', [H], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            J = K)) || J)),
            q['_RF']['pop']();
        }
    };
}),
System['register']('chunks:///_virtual/viewLogin.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './utils.ts', './panelLogin.ts', './panelVerify.ts', './panelRegist.ts', './panelFindPsw.ts', './lobbyState.ts', './webGame.ts', './Oops.ts', './platformData.ts', './NativeFun.ts', './VersionManager.ts', './appConfig.ts'], function(j) {
    var k, q, x, A, B, C, D, E, G, H, I, J, K, M, N, O, P, Q, R, T, U, V, W, X, Y;
    return {
        'setters': [function(Z) {
            k = Z['applyDecoratedDescriptor'],
            q = Z['inheritsLoose'],
            x = Z['initializerDefineProperty'],
            A = Z['assertThisInitialized'],
            B = Z['createClass'];
        }
        , function(Z) {
            C = Z['cclegacy'],
            D = Z['_decorator'],
            E = Z['Sprite'],
            G = Z['Button'],
            H = Z['Label'],
            I = Z['sys'],
            J = Z['ImageAsset'];
        }
        , function(Z) {
            K = Z['baseView'];
        }
        , function(Z) {
            M = Z['utils'];
        }
        , function(Z) {
            N = Z['panelLogin'];
        }
        , function(Z) {
            O = Z['panelVerify'];
        }
        , function(Z) {
            P = Z['panelRegist'];
        }
        , function(Z) {
            Q = Z['panelFindPsw'];
        }
        , function(Z) {
            R = Z['lobbyState'];
        }
        , function(Z) {
            T = Z['webGame'];
        }
        , function(Z) {
            U = Z['oops'];
        }
        , function(Z) {
            V = Z['PModuleID'];
        }
        , function(Z) {
            W = Z['NativeFun'];
        }
        , function(Z) {
            X = Z['VersionManager'];
        }
        , function(Z) {
            Y = Z['appConfig'];
        }
        ],
        'execute': function() {
            var Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al;
            C['_RF']['push']({}, 'e4081xrVvlGkohnISYOOm7Y', 'viewLogin', void 0x0);
            var am = D['ccclass']
              , an = D['property'];
            j('viewLogin', (Z = am('viewLogin'),
            a0 = an({
                'type': E,
                'tooltip': '背景图'
            }),
            a1 = an({
                'type': G,
                'tooltip': '客服按钮'
            }),
            a2 = an({
                'type': N,
                'tooltip': '登录面板'
            }),
            a3 = an({
                'type': H,
                'tooltip': '版本信息'
            }),
            a4 = an({
                'type': E,
                'tooltip': 'Logo\x20图'
            }),
            a5 = an({
                'type': E,
                'tooltip': 'Logo上标题'
            }),
            a6 = an({
                'type': E,
                'tooltip': 'Logo上标题'
            }),
            a7 = an({
                'type': P,
                'tooltip': '注册面板'
            }),
            a8 = an({
                'type': Q,
                'tooltip': '找回密码面板'
            }),
            a9 = an({
                'type': O,
                'tooltip': '账号安全面板'
            }),
            Z((ac = k((ab = function(ao) {
                function ap() {
                    for (var ar, as = arguments['length'], at = new Array(as), au = 0x0; au < as; au++)
                        at[au] = arguments[au];
                    return ar = ao['call']['apply'](ao, [this]['concat'](at)) || this,
                    x(ar, 'nodeBg', ac, A(ar)),
                    x(ar, 'btnService', ad, A(ar)),
                    x(ar, 'panelLogin', ae, A(ar)),
                    x(ar, 'lb_version', af, A(ar)),
                    x(ar, 'sp_Logo', ag, A(ar)),
                    x(ar, 'sp_logo_1', ah, A(ar)),
                    x(ar, 'sp_logo_2', ai, A(ar)),
                    x(ar, 'panelRegist', aj, A(ar)),
                    x(ar, 'panelFindPsw', ak, A(ar)),
                    x(ar, 'panelAccountSafe', al, A(ar)),
                    ar;
                }
                q(ap, ao);
                var aq = ap['prototype'];
                return aq['start'] = function() {
                    M['ButtonBindClick'](this['btnService'], this['onClickService'], this),
                    U['res']['load'](V['lobby']['toString'](), ['prefab/lobbySetting', 'prefab/message']);
                }
                ,
                aq['onShow'] = function() {
                    ao['prototype']['onShow']['call'](this),
                    I['isNative'] ? this['lb_version']['string'] = W['getAppVersion']() + '(' + X['Instance']['getLocalVersion']() + ')' : I['isBrowser'] && (this['lb_version']['string'] = 'Verison:' + Y['assetsVersion']);
                }
                ,
                aq['onAdded'] = function(ar) {
                    var as = Y['loginLogoUrl'];
                    if (!M['StringIsNullOrEmpty'](as)) {
                        as['includes']('.png') && (as = as['slice'](0x0, as['lastIndexOf']('/'))),
                        as['endsWith']('/') || (as += '/');
                        var at = function(au, av) {
                            var aw = as + au;
                            U['res']['loadRemote'](aw, J, function(ax, ay) {
                                ax ? T['log']['logBusiness']('add2main\x20load\x20icon\x20error:\x20' + ax) : av['spriteFrame'] = M['transImageAsset2SpriteFrame'](ay);
                            });
                        };
                        null != this['sp_Logo'] && at('logo_bg.png', this['sp_Logo']),
                        null != this['sp_logo_1'] && at('logo_1.png', this['sp_logo_1']),
                        null != this['sp_logo_2'] && at('logo_2.png', this['sp_logo_2']);
                    }
                }
                ,
                aq['onClickService'] = function() {
                    var ar = R['Instance']['Server']['loginServiceUrl'];
                    M['StringIsNullOrEmpty'](ar) ? T['log']['logView']('loginMain-onOpenTeamService:loginServiceUrl\x20is\x20null') : I['openURL'](ar);
                }
                ,
                aq['refresh'] = function() {
                    this['panelLogin']['show'](),
                    this['panelLogin']['refresh'](),
                    this['panelRegist']['close'](),
                    this['panelFindPsw']['close'](),
                    this['panelAccountSafe']['close']();
                }
                ,
                B(ap, [{
                    'key': 'Login',
                    'get': function() {
                        return this['panelLogin'];
                    }
                }, {
                    'key': 'Regist',
                    'get': function() {
                        return this['panelRegist'];
                    }
                }, {
                    'key': 'FindPsw',
                    'get': function() {
                        return this['panelFindPsw'];
                    }
                }, {
                    'key': 'AccountSafe',
                    'get': function() {
                        return this['panelAccountSafe'];
                    }
                }]),
                ap;
            }(K))['prototype'], 'nodeBg', [a0], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ad = k(ab['prototype'], 'btnService', [a1], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ae = k(ab['prototype'], 'panelLogin', [a2], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            af = k(ab['prototype'], 'lb_version', [a3], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ag = k(ab['prototype'], 'sp_Logo', [a4], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ah = k(ab['prototype'], 'sp_logo_1', [a5], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ai = k(ab['prototype'], 'sp_logo_2', [a6], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aj = k(ab['prototype'], 'panelRegist', [a7], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            ak = k(ab['prototype'], 'panelFindPsw', [a8], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            al = k(ab['prototype'], 'panelAccountSafe', [a9], {
                'configurable': !0x0,
                'enumerable': !0x0,
                'writable': !0x0,
                'initializer': function() {
                    return null;
                }
            }),
            aa = ab)) || aa)),
            C['_RF']['pop']();
        }
    };
}),
function(a) {
    a('virtual:///prerequisite-imports/102', 'chunks:///_virtual/102');
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
