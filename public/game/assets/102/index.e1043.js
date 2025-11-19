System['register']('chunks:///_virtual/102', ['./DayToggle.ts', './LabelToggle.ts', './clearInput.ts', './dropdown.ts', './gameRichText.ts', './inputAccount.ts', './inputPhone.ts', './richTextHandler.ts', './sendButton.ts', './shareNode.ts', './tagClearInput.ts', './togglePwd.ts', './topCloseLayer.ts', './add2main.ts', './downloadEntry.ts', './jackpot.ts', './notify2.ts', './setting.ts', './settingToggle.ts', './ar.ts', './bn.ts', './en.ts', './es_mx.ts', './id.ts', './my.ts', './pt.ts', './stringDefine.ts', './tha.ts', './vi.ts', './lobbyDefine.ts', './lobbyConfig.ts', './lobbyMain.ts', './popManager.ts', './bindCardTips.ts', './bindTips.ts', './downloadTips.ts', './lobbyBottom.ts', './lobbyGameItem.ts', './lobbyGameList.ts', './lobbyGameToggle.ts', './lobbyRoomItem.ts', './lobbyRoomList.ts', './lobbyTop.ts', './redPoint.ts', './viewLobby.ts', './loginConfig.ts', './loginMain.ts', './panelFindPsw.ts', './panelLogin.ts', './panelRegist.ts', './panelVerify.ts', './viewLogin.ts', './lobbyMod.ts', './lobbyModHub.ts', './httpAccount.ts', './httpDefine.ts', './httpInfo.ts', './httpLogin.ts', './httpRegist.ts', './pb_error_code.ts', './snsManager.ts', './lobbyState.ts'], function () {
    return {
        'setters': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        'execute': function () { }
    };
}),
    System['register']('chunks:///_virtual/add2main.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './webGame.ts', './utils.ts', './appConfig.ts', './GameUIConfig.ts'], function (h) {
        var j, k, q, v, w, x, y, z, A, B, C, D, E, F, G, H;
        return {
            'setters': [function (I) {
                j = I['applyDecoratedDescriptor'],
                    k = I['inheritsLoose'],
                    q = I['initializerDefineProperty'],
                    v = I['assertThisInitialized'];
            }
                , function (I) {
                    w = I['cclegacy'],
                        x = I['_decorator'],
                        y = I['Button'],
                        z = I['RichText'],
                        A = I['Sprite'],
                        B = I['ImageAsset'],
                        C = I['Component'];
                }
                , function (I) {
                    D = I['oops'];
                }
                , function (I) {
                    E = I['webGame'];
                }
                , function (I) {
                    F = I['utils'];
                }
                , function (I) {
                    G = I['appConfig'];
                }
                , function (I) {
                    H = I['UIID'];
                }
            ],
            'execute': function () {
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
                    J((P = j((O = function (W) {
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
                        return Y['onLoad'] = function () {
                            var Z = this;
                            F['ButtonBindClick'](this['btnClose'], this['onBtnClose'], this),
                                this['icon']['node']['active'] = !0x1;
                            var a0 = G['gameIconUrl'];
                            F['StringIsNullOrEmpty'](a0) || D['res']['loadRemote'](a0, B, function (a1, a2) {
                                a1 ? E['log']['logBusiness']('add2main\x20load\x20icon\x20error:\x20' + a1) : (Z['icon']['spriteFrame'] = F['transImageAsset2SpriteFrame'](a2),
                                    Z['icon']['node']['active'] = !0x0);
                            });
                        }
                            ,
                            Y['onBtnClose'] = function () {
                                this['node']['active'] = !0x1,
                                    D['gui']['remove'](H['add2main']),
                                    G['bPWAInstall'] && F['add2HomeScreen'](function (Z) {
                                        Z ? E['log']['logBusiness']('add2HomeScreen\x20success') : E['log']['logBusiness']('add2HomeScreen\x20failed');
                                    });
                            }
                            ,
                            X;
                    }(C))['prototype'], 'btnClose', [K], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        Q = j(O['prototype'], 'rtTips', [L], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        T = j(O['prototype'], 'icon', [M], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        N = O)) || N)),
                    w['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/ar.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
                a['_RF']['push']({}, 'b0f1156LFFPC44tQwxJZ7DI', 'ar', void 0x0);
                var b = window;
                b['languages'] || (b['languages'] = {}),
                    b['languages']['ar'] || (b['languages']['ar'] = {}),
                    b['languages']['ar'][0x66] = {
                        0x1: 'VIP',
                        0x2: 'آمن',
                        0x3: 'البريد',
                        0x4: 'الفعاليات',
                        0x5: 'الترتيب',
                        0x6: 'التمثيل',
                        0x7: 'إعادة\x20التدوير',
                        0x8: 'رمز\x20الجهاز\x20فارغ',
                        0x9: 'خطأ\x20في\x20نوع\x20التسجيل',
                        0xa: 'خطأ\x20في\x20معلومات\x20التسجيل',
                        0xb: 'استثناء\x20النظام\x2003،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0xc: 'معرف\x20مكرر،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0xd: 'تم\x20تسجيل\x20هذا\x20الحساب',
                        0xe: 'خطأ\x20في\x20رمز\x20التحقق',
                        0xf: 'رقم\x20الهاتف\x20المحمول\x20هذا\x20قيد\x20الاستخدام\x20بالفعل',
                        0x10: 'يرجى\x20ربط\x20البريد\x20الإلكتروني\x20الخاص\x20بك\x20أولا',
                        0x11: 'عنوان\x20IP\x20غير\x20طبيعي،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x12: 'فشل\x20التسجيل،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقاً\x20code:1010',
                        0x13: 'فشل\x20التسجيل،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقاً\x20code:1011',
                        0x14: 'نوع\x20تسجيل\x20الدخول\x20خاطئ',
                        0x15: 'معلومات\x20تسجيل\x20الدخول\x20خاطئة',
                        0x16: 'خلل\x20في\x20المعدات،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x17: 'استثناء\x20النظام\x2013،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x18: 'الحساب\x20غير\x20طبيعي،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x19: 'يبدو\x20أن\x20هناك\x20استثناء\x20في\x20تسجيل\x20الدخول،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا.',
                        0x1a: 'الحساب\x20أو\x20كلمة\x20المرور\x20خاطئة،\x20يرجى\x20التحقق\x20من\x20إدخالك',
                        0x1b: 'يوجد\x20خطر\x20أمني\x20في\x20الحساب\x20وسيخضع\x20للتحقق\x20الأمني\x20​​قريبًا.',
                        0x1c: 'تسجيل\x20الدخول\x20غير\x20قانوني\x20للجهاز،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x1d: 'الخادم\x20تحت\x20الصيانة،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقا.',
                        0x1e: 'طلب\x20غير\x20صالح',
                        0x1f: 'الإصدار\x20منخفض\x20جدًا\x20ويحتاج\x20إلى\x20ترقية.',
                        0x20: 'خطأ\x20في\x20المعلمة',
                        0x21: 'تسجيل\x20الدخول\x20إلى\x20خدمة\x20العملاء\x20غير\x20متاح',
                        0x22: 'نوع\x20رمز\x20التحقق\x20خاطئ',
                        0x23: 'يبدو\x20أن\x20هناك\x20استثناء\x20لتسجيل\x20الدخول\x20رقم\x2021،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا.',
                        0x24: 'تم\x20تسجيل\x20رقم\x20الهاتف\x20المحمول\x20الحالي\x20ولا\x20يمكن\x20إعادة\x20تسجيله.',
                        0x25: 'استثناء\x20النظام\x2023،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x26: 'معلومات\x20التحقق\x20غير\x20طبيعية،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20في\x20وقت\x20لاحق.',
                        0x27: 'رقم\x20الهاتف\x20المحمول\x20الحالي\x20غير\x20مرتبط\x20بحساب',
                        0x28: 'انتهت\x20صلاحية\x20معلومات\x20تسجيل\x20الدخول',
                        0x29: 'تحتاج\x20إلى\x20الربط',
                        0x2a: 'الرجاء\x20إدخال\x20رقم\x20الهاتف\x20المحمول\x20الصحيح',
                        0x2b: 'نوع\x20الحساب\x20خاطئ',
                        0x2c: 'معلومات\x20الحساب\x20خاطئة',
                        0x2d: 'خطأ\x20في\x20رمز\x20التحقق',
                        0x2e: 'استثناء\x20النظام\x2033،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x2f: 'خطأ\x20في\x20الحساب',
                        0x30: 'يرجى\x20ربط\x20هاتفك\x20المحمول\x20أولاً',
                        0x31: 'الرجاء\x20إدخال\x20رقم\x20الهاتف\x20المحمول\x20الصحيح',
                        0x32: 'تم\x20ربط\x20الحساب\x20بهاتف\x20محمول\x20ولا\x20يمكن\x20ربطه\x20مرة\x20أخرى.',
                        0x33: 'تم\x20ربط\x20رقم\x20الهاتف\x20المحمول',
                        0x34: 'يرجى\x20إدخال\x20كلمة\x20السر',
                        0x35: 'لا\x20يمكن\x20ربط\x20الحساب\x20الجاري\x20بهاتف\x20محمول،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x36: 'استثناء\x20تسجيل\x20الدخول،\x20يرجى\x20المحاولة\x20مرة\x20أخرى',
                        0x37: 'الحساب\x20الجاري\x20موجود\x20بالفعل',
                        0x38: 'خطأ\x20في\x20رمز\x20التحقق',
                        0x39: 'استثناء\x20النظام\x2044،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x3a: 'استثناء\x20النظام\x2045،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x3b: 'استثناء\x20النظام\x2046،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x3c: 'انتهت\x20مهلة\x20الطلب،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20في\x20وقت\x20لاحق',
                        0x3d: 'معرف\x20المستخدم\x20غير\x20موجود',
                        0x3e: 'خطأ\x20في\x20معلومات\x20التحقق\x20من\x20المستخدم',
                        0x3f: 'يرجى\x20ملء\x20معلومات\x20التحقق\x20من\x20المستخدم',
                        0x40: 'خطأ\x20في\x20معلومات\x20التحقق\x20من\x20المستخدم',
                        0x41: 'إذا\x20كانت\x20العملية\x20غير\x20طبيعية،\x20يرجى\x20الاتصال\x20بخدمة\x20العملاء',
                        0x42: 'تم\x20تسجيل\x20عنوان\x20البريد\x20الإلكتروني\x20الحالي\x20ولا\x20يمكن\x20تسجيله\x20مرة\x20أخرى',
                        0x43: 'يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا.',
                        0x44: 'خطأ\x20في\x20البيانات،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20في\x20وقت\x20لاحق',
                        0x45: 'تهانينا\x20لـ\x20<color=#FF4600>@player</color>\x20في\x20<color=yellow>@game</color>\x20على\x20الفوز\x20بـ\x20<color=#4BFF00>x@multiple</color>\x20جوائز\x20والحصول\x20على\x20<color=yellow>@coins</color>\x20من\x20العملات\x20المعدنية.',
                        0x46: 'تهانينا\x20لـ\x20<color=#FF4600>%s</color>\x20على\x20الفوز\x20بالجائزة\x20الكبرى\x20في\x20<color=#4BFF00>%s</color>\x20والفوز\x20بعملات\x20<color=yellow>%s</color>.',
                        0x47: 'غرفة',
                        0x48: 'اللاعب',
                        0x49: 'رهان',
                        0x4a: 'أحضر\x20معك',
                        0x4b: 'جربه',
                        0x4c: 'أساسي',
                        0x4d: 'يتقن',
                        0x4e: 'ملِك',
                        0x4f: 'ملحمي',
                        0x50: 'أسطورة',
                        0x51: 'VIP',
                        0x52: 'غرفة',
                        0x53: 'يبدأ',
                        0x54: 'غير\x20محدود',
                        0x55: 'خروج\x20من\x20اللعبة',
                        0x56: 'العودة\x20إلى\x20تسجيل\x20الدخول',
                        0x57: 'تَلمِيح',
                        0x58: 'فشل\x20الاتصال\x20بالخادم،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقًا',
                        0x59: 'يطلب\x20منك\x20النظام\x20مغادرة\x20اللعبة،\x20يرجى\x20الدخول\x20إلى\x20اللعبة\x20مرة\x20أخرى\x20لاحقًا.',
                        0x5a: 'تم\x20تسجيل\x20الدخول\x20إلى\x20الحساب\x20الحالي\x20من\x20أجهزة\x20أخرى،\x20يرجى\x20الانتباه\x20إلى\x20أمان\x20الحساب',
                        0x5b: 'جولتك\x20في\x20%s\x20لم\x20تنتهي\x20بعد،\x20يرجى\x20الرجوع\x20والمتابعة',
                        0x5c: 'الحساب\x20المسجل\x20موجود\x20بالفعل',
                        0x5d: 'لا\x20يمكن\x20أن\x20يكون\x20جهاز\x20حساب\x20الضيف\x20فارغًا',
                        0x5e: 'الحساب\x20غير\x20موجود',
                        0x5f: 'كلمة\x20المرور\x20غير\x20صحيحة',
                        0x60: 'لقد\x20تم\x20حظر\x20هذا\x20الحساب',
                        0x61: 'تسجيل\x20دخول\x20الضيف\x20غير\x20طبيعي،\x20يرجى\x20المحاولة\x20مرة\x20أخرى',
                        0x62: 'استثناء\x20تسجيل\x20الدخول\x207،\x20يرجى\x20المحاولة\x20مرة\x20أخرى',
                        0x63: 'النظام\x20تحت\x20الصيانة،\x20يرجى\x20المحاولة\x20مرة\x20أخرى\x20لاحقاً',
                        0x64: 'تعديل\x20كلمة\x20المرور',
                        0x65: 'تحميل',
                        0x66: 'للحصول\x20على\x20تجربة\x20أفضل،\x20يرجى\x20تنزيل\x20اللعبة',
                        0x67: 'للحصول\x20على\x20تجربة\x20أفضل،\x20يرجى\x20تنزيل\x20اللعبة\x20وتثبيتها\x20الآن\x20للفوز\x20بمكافآت\x20ضخمة!',
                        0x68: 'قبول\x20<color=#A8B7F2>\x20<u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>شروط\x20الخدمة</on></u></color>\x20و<color=#A8B7F2>\x20<u><on\x20انقر\x20على\x20=\x22onClick\x22\x20param=\x22pp\x22>اتفاقية\x20الخصوصية</on></u></color>',
                        0x69: 'ربط\x20رقم\x20الهاتف\x20المحمول\x0aاحصل\x20على\x20مكافآت\x20سخية',
                        0x6a: 'ملزم',
                        0x6b: 'عذرًا،\x20لم\x20يتم\x20استيفاء\x20متطلبات\x20مستوى\x20VIP\x20للغرفة.\x20كلما\x20زاد\x20عدد\x20العملات\x20الذهبية،\x20كلما\x20ارتفع\x20المستوى.',
                        0x6c: 'عذرًا،\x20لم\x20يتم\x20استيفاء\x20متطلبات\x20العملة\x20الذهبية\x20لدخول\x20الغرفة.\x20هل\x20تريد\x20الذهاب\x20إلى\x20المركز\x20التجاري\x20لشراء\x20العملات\x20الذهبية؟',
                        0x6d: 'اضغط\x20على\x20<img\x20src=\x27share\x27\x20/>\x20و\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home\x20Screen</color></b>\x20للعب\x20في\x20أي\x20وقت\x20تريد',
                        0x6e: 'اضغط\x20على\x20<img\x20src=\x27share\x27\x20/>\x20و\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>أضف\x20إلى\x20الشاشة\x20الرئيسية\x20</color></b>\x20للعب\x20في\x20أي\x20وقت\x20تريده',
                        0x6f: 'تحذير',
                        0x70: 'من\x20أجل\x20أمان\x20بيانات\x20اللعبة\x20الخاصة\x20بك،\x20يوصى\x20بشدة\x20بالتسجيل\x20كحساب\x20رسمي',
                        0x71: 'تم\x20إرسال\x20الرسالة',
                        0x72: 'تمت\x20المطالبة\x20بنجاح',
                        0x73: 'خدمة\x20العملاء',
                        0x74: 'الإعدادات',
                        0x75: 'التوقيع',
                        0x76: 'الروليت',
                        0x77: 'التهمة\x20الأولى',
                        0x78: 'عرض\x20خاص',
                        0x79: 'دعوة',
                        0x7a: 'دول',
                        0x7b: 'الكل',
                        0x7c: 'مرغوب',
                        0x7d: 'فتحات',
                        0x7e: 'بوكر',
                        0x7f: 'حالة\x20الشبكة\x20سيئة',
                        0x80: 'احصل\x20على\x20النقود\x20مجانا',
                        0x81: 'شراء',
                        0x82: 'تم\x20العثور\x20على\x20نسخة\x20جديدة.\x20هل\x20تريد\x20تحديثه؟',
                        0x83: 'تم\x20إغلاق\x20النشاط\x20وتم\x20استرداد\x20العملات\x20الذهبية\x20التي\x20تم\x20استهلاكها\x20لشراء\x20رمز\x20اليانصيب',
                        0x84: 'شراء\x20العملات\x20الذهبية',
                        0x85: 'لم\x20تقم\x20بتسجيل\x20الدخول\x20بعد،\x20يرجى\x20تسجيل\x20الخروج\x20والمحاولة\x20مرة\x20أخرى',
                        0x86: 'فشلت\x20المصادقة،\x20يرجى\x20الخروج\x20والمحاولة\x20مرة\x20أخرى',
                        0x87: 'غرفة\x20الألعاب\x20غير\x20صالحة،\x20حاول\x20تجربة\x20غرفة\x20أخرى',
                        0x88: 'الغرفة\x20مغلقة،\x20فلنجرب\x20غرفة\x20أخرى.',
                        0x89: 'المهام',
                        0x8a: 'ماكينة\x20قمار\x20جديدة\x20تمامًا،\x20حان\x20الوقت\x20للعب\x20شيء\x20مختلف!',
                        0x8b: 'قم\x20بالتوقيع\x20يوميًا\x20للحصول\x20على\x20عملات\x20ذهبية\x20مجانية!',
                        0x8c: 'عجلة\x20الحظ!\x20بنسبة\x20فوز\x20100%\x20تعال\x20واربح\x20الجوائز',
                        0x8d: 'تحديات\x20جديدة\x20للفوز\x20بمكافآت\x20ضخمة!',
                        0x8e: 'جوائز\x20مفاجئة\x20وألعاب\x20جديدة\x20تمامًا،\x20انقر\x20للدخول',
                        0x8f: 'تهانينا!\x20لقد\x20حصلت\x20على\x20جائزة\x20خاصة',
                        0x90: 'المزيد\x20من\x20مزايا\x20وامتيازات\x20الـ\x20VIP!',
                        0x91: 'قم\x20بالتدوير\x20الآن،\x20وسيصاحبك\x20الحظ\x20السعيد',
                        0x92: 'اليوم\x20المحظوظ\x20للروليت،\x20مضاعفة\x20جوائز\x20الروليت\x20الذهبي!',
                        0x93: 'تم\x20إعداد\x20جائزة\x20مفاجئة\x20لك',
                        0x94: 'قم\x20بالتدوير\x20بشكل\x20أسرع،\x20واحصل\x20على\x20جوائز\x20أكبر!',
                        0x95: 'الجوائز\x20الضخمة\x20جاهزة،\x20ابدأ\x20اللعب\x20الآن!',
                        0x96: 'انقر\x20لاستلام\x20العملات\x20الذهبية\x20المجانية',
                        0x97: 'زادت\x20قوة\x20النيران\x20بنسبة\x2010%!!!\x20جوائز\x20وهدايا\x20بلا\x20حدود!',
                        0x98: 'ابدأ\x20اللعب\x20الآن!\x20واستمتع\x20بالمرح\x20والجوائز\x20الخاصة',
                        0x99: 'قم\x20بدعوة\x20الأصدقاء\x20للعمل\x20لديك\x20واحصل\x20على\x20جوائز\x20ضخمة\x20من\x20العملات\x20الذهبية',
                        0x9a: 'شارك\x20مع\x20الأصدقاء،\x20واحصل\x20على\x20حزم\x20الهدايا',
                        0x9b: 'كلما\x20زادت\x20الدعوات،\x20زادت\x20الجوائز!',
                        0x9c: 'ادعو\x20الأصدقاء\x20للعب\x20معًا،\x20واستلام\x20الجوائز\x20يوميًا!',
                        0x9d: 'يمنحك\x20روليت\x20الحظ\x20فرصة\x20لتصبح\x20أغنى\x20رجل!',
                        0x9e: 'حزمة\x20المزايا\x20متاحة،\x20ولا\x20يمكن\x20استلامها\x20إلا\x20بالشحن\x20الأول!',
                        0x9f: 'احصل\x20على\x20جوائز\x20إضافية\x20عند\x20قيامك\x20بالشحن\x20لأول\x20مرة',
                        0xa0: 'قم\x20بتسجيل\x20الدخول\x20إلى\x20اللعبة\x20كل\x20يوم،\x20لتحصل\x20على\x20جوائز\x20وخصومات\x20لفترة\x20محدودة',
                        0xa1: '<b>@player\x20فاز\x20\x0aالجائزة\x20الكبرى\x20<color=#FFE100>@coins</color>\x20على\x20.\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'الصفحة\x20الرئيسية',
                        0xa3: 'فتحة',
                        0xa4: 'ألعاب\x20متعددة',
                        0xa5: 'تاريخ',
                        0xa6: 'ربط\x20البطاقة\x20المصرفية\x20للحصول\x20على\x20المكافآت',
                        0xa7: 'سيتم\x20فتح\x20رابط\x20خارجي\x20قريبًا.\x20هل\x20ترغب\x20في\x20المتابعة؟',
                        0xa8: 'مطابقة...',
                        0xa9: 'اربط\x20بريدك\x20الإلكتروني\x20للحصول\x20على\x20المكافآت',
                        0xaa: 'اربط\x20رقم\x20هاتفك\x20أو\x20عنوان\x20بريدك\x20الإلكتروني\x20للحصول\x20على\x20المكافآت',
                        0xab: 'يرجى\x20إدخال\x20بريدك\x20الإلكتروني',
                        0xac: 'لم\x20يتم\x20العثور\x20على\x20لاعبين\x20للمطابقة',
                        0xad: 'أقل\x20من\x20الحد\x20الأدنى\x20المطلوب',
                        0xae: 'ليس\x20في\x20قائمة\x20انتظار\x20التوفيق\x20بين\x20اللاعبين',
                        0xaf: 'لا\x20توجد\x20معلومات\x20عن\x20المقعد',
                        0xb0: 'لا\x20أستطيع\x20الوقوف'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/bindCardTips.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './utils.ts', './webGame.ts', './lobbyConfig.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './CustomEventDefine.ts', './popManager.ts', './lobbyState.ts', './Language.ts'], function (j) {
        var k, q, w, x, z, A, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R;
        return {
            'setters': [function (S) {
                k = S['applyDecoratedDescriptor'],
                    q = S['inheritsLoose'],
                    w = S['initializerDefineProperty'],
                    x = S['assertThisInitialized'];
            }
                , function (S) {
                    z = S['cclegacy'],
                        A = S['_decorator'],
                        D = S['sp'],
                        E = S['Label'],
                        F = S['Button'];
                }
                , function (S) {
                    G = S['baseView'];
                }
                , function (S) {
                    H = S['utils'];
                }
                , function (S) {
                    I = S['webGame'];
                }
                , function (S) {
                    J = S['Lobby'];
                }
                , function (S) {
                    K = S['PModuleID'];
                }
                , function (S) {
                    L = S['oops'];
                }
                , function (S) {
                    M = S['UIID'];
                }
                , function (S) {
                    N = S['WebGameEvent'];
                }
                , function (S) {
                    O = S['popJobType'],
                        P = S['lobbyPopJob'];
                }
                , function (S) {
                    Q = S['lobbyState'];
                }
                , function (S) {
                    R = S['LanguageManager'];
                }
            ],
            'execute': function () {
                var U, V, W, X, Y, Z, a0, a1, a2, a3, a4;
                z['_RF']['push']({}, 'c9120672Z1Jk62Z74XksOCH', 'bindCardTips', void 0x0);
                var a5 = A['ccclass']
                    , a6 = A['property'];
                j('bindCardTips', (U = a5('bindCardTips'),
                    V = a6({
                        'type': D['Skeleton'],
                        'tooltip': '背景动画'
                    }),
                    W = a6({
                        'type': E,
                        'tooltip': '奖励文本'
                    }),
                    X = a6({
                        'type': F,
                        'tooltip': '绑定按钮'
                    }),
                    Y = a6({
                        'type': F,
                        'tooltip': '关闭按钮'
                    }),
                    U((a1 = k((a0 = function (a7) {
                        function a8() {
                            for (var aa, ab = arguments['length'], ac = new Array(ab), ad = 0x0; ad < ab; ad++)
                                ac[ad] = arguments[ad];
                            return aa = a7['call']['apply'](a7, [this]['concat'](ac)) || this,
                                w(aa, 'spineBg', a1, x(aa)),
                                w(aa, 'lbReward', a2, x(aa)),
                                w(aa, 'btnBind', a3, x(aa)),
                                w(aa, 'btnClose', a4, x(aa)),
                                aa;
                        }
                        q(a8, a7);
                        var a9 = a8['prototype'];
                        return a9['onInit'] = function () {
                            H['ButtonBindClick'](this['btnBind'], this['onBtnBindClick'], this),
                                H['ButtonBindClick'](this['btnClose'], this['onBtnCloseClick'], this);
                        }
                            ,
                            a9['onShow'] = function () {
                                var aa = this;
                                L['message']['dispatchEvent'](N['open_lobby_pop'], O['bindCardTips'], function () {
                                    aa['close']();
                                }),
                                    this['setSpineBgPause'](!0x1);
                            }
                            ,
                            a9['onClose'] = function () {
                                L['gui']['remove'](M['bindCardTips'], !0x1),
                                    this['setSpineBgPause'](!0x0);
                            }
                            ,
                            a9['refresh'] = function (aa) {
                                this['lbReward']['string'] = I['FormatCoins'](aa);
                            }
                            ,
                            a9['onBtnBindClick'] = function () {
                                var aa = this;
                                this['close'](function () {
                                    var ab = Q['Instance']['Server']['bBindEmail']
                                        , ac = Q['Instance']['Player']['email'];
                                    if (ab && H['StringIsNullOrEmpty'](ac)) {
                                        var ad = R['getLangByTag']('http_error_108', K['lobby']);
                                        I['toast'](ad),
                                            aa['Call'](J['modID']['root'], J['msgID']['enterLobbyMod'], K['profile'], 0x2);
                                    } else {
                                        var ae = new P(O['other'], 0x1, 0x0);
                                        ae['canPopUp'] = function () {
                                            return !0x0;
                                        }
                                            ,
                                            ae['showView'] = function () {
                                                aa['Call'](J['modID']['root'], J['msgID']['enterLobbyMod'], K['recycle'], 0x1);
                                            }
                                            ,
                                            L['message']['dispatchEvent'](N['close_lobby_pop'], O['bindCardTips'], ae);
                                    }
                                });
                            }
                            ,
                            a9['onBtnCloseClick'] = function () {
                                this['close'](function () {
                                    L['message']['dispatchEvent'](N['close_lobby_pop'], O['bindCardTips']);
                                });
                            }
                            ,
                            a9['setSpineBgPause'] = function (aa) {
                                null != this['spineBg'] && (this['spineBg']['paused'] = aa);
                            }
                            ,
                            a8;
                    }(G))['prototype'], 'spineBg', [V], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a2 = k(a0['prototype'], 'lbReward', [W], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a3 = k(a0['prototype'], 'btnBind', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a4 = k(a0['prototype'], 'btnClose', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Z = a0)) || Z)),
                    z['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/bindTips.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './utils.ts', './webGame.ts', './lobbyConfig.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './CustomEventDefine.ts', './popManager.ts', './lobbyState.ts', './Language.ts'], function (j) {
        var k, q, x, z, A, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S;
        return {
            'setters': [function (U) {
                k = U['applyDecoratedDescriptor'],
                    q = U['inheritsLoose'],
                    x = U['initializerDefineProperty'],
                    z = U['assertThisInitialized'];
            }
                , function (U) {
                    A = U['cclegacy'],
                        C = U['_decorator'],
                        D = U['sp'],
                        E = U['Label'],
                        F = U['Button'];
                }
                , function (U) {
                    G = U['baseView'];
                }
                , function (U) {
                    H = U['utils'];
                }
                , function (U) {
                    I = U['webGame'];
                }
                , function (U) {
                    J = U['Lobby'];
                }
                , function (U) {
                    K = U['PModuleID'];
                }
                , function (U) {
                    L = U['oops'];
                }
                , function (U) {
                    M = U['UIID'];
                }
                , function (U) {
                    N = U['WebGameEvent'];
                }
                , function (U) {
                    O = U['popJobType'],
                        P = U['lobbyPopJob'];
                }
                , function (U) {
                    Q = U['lobbyState'],
                        R = U['SupportAccountType'];
                }
                , function (U) {
                    S = U['LanguageManager'];
                }
            ],
            'execute': function () {
                var U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6;
                A['_RF']['push']({}, '4f482+6ua5PHoFXz/m7Yv5Y', 'bindTips', void 0x0);
                var a7 = C['ccclass']
                    , a8 = C['property'];
                j('bindTips', (U = a7('bindTips'),
                    V = a8({
                        'type': D['Skeleton'],
                        'tooltip': '背景动画'
                    }),
                    W = a8({
                        'type': E,
                        'tooltip': '奖励文本'
                    }),
                    X = a8({
                        'type': F,
                        'tooltip': '绑定按钮'
                    }),
                    Y = a8({
                        'type': F,
                        'tooltip': '关闭按钮'
                    }),
                    Z = a8({
                        'type': E,
                        'tooltip': '提示文本'
                    }),
                    U((a2 = k((a1 = function (a9) {
                        function aa() {
                            for (var ac, ad = arguments['length'], ae = new Array(ad), af = 0x0; af < ad; af++)
                                ae[af] = arguments[af];
                            return ac = a9['call']['apply'](a9, [this]['concat'](ae)) || this,
                                x(ac, 'spineBg', a2, z(ac)),
                                x(ac, 'lbReward', a3, z(ac)),
                                x(ac, 'btnBind', a4, z(ac)),
                                x(ac, 'btnClose', a5, z(ac)),
                                x(ac, 'lbTips', a6, z(ac)),
                                ac;
                        }
                        q(aa, a9);
                        var ab = aa['prototype'];
                        return ab['onInit'] = function () {
                            H['ButtonBindClick'](this['btnBind'], this['onBtnBindClick'], this),
                                H['ButtonBindClick'](this['btnClose'], this['onBtnCloseClick'], this);
                        }
                            ,
                            ab['onShow'] = function () {
                                var ac = this;
                                L['message']['dispatchEvent'](N['open_lobby_pop'], O['bindTips'], function () {
                                    ac['close']();
                                }),
                                    this['setSpineBgPause'](!0x1);
                            }
                            ,
                            ab['onClose'] = function () {
                                L['gui']['remove'](M['bindTips'], !0x1),
                                    this['setSpineBgPause'](!0x0);
                            }
                            ,
                            ab['refresh'] = function (ac) {
                                this['lbReward']['string'] = I['FormatCoins'](ac);
                                var ad = Q['Instance']['Server']['supportAccountTypes'];
                                if (0x1 == ad['length']) {
                                    var ae = ad[0x0] == R['Phone'] ? 'bindTips' : 'bind_email_tips';
                                    this['lbTips']['string'] = S['getLangByTag'](ae, K['lobby']);
                                } else
                                    this['lbTips']['string'] = S['getLangByTag']('bind_emailOrPhone_tips', K['lobby']);
                            }
                            ,
                            ab['onBtnBindClick'] = function () {
                                var ac = this;
                                this['close'](function () {
                                    var ad = new P(O['other'], 0x1, 0x0);
                                    ad['canPopUp'] = function () {
                                        return !0x0;
                                    }
                                        ,
                                        ad['showView'] = function () {
                                            ac['Call'](J['modID']['root'], J['msgID']['enterLobbyMod'], K['profile'], 0x1);
                                        }
                                        ,
                                        L['message']['dispatchEvent'](N['close_lobby_pop'], O['bindTips'], ad);
                                });
                            }
                            ,
                            ab['onBtnCloseClick'] = function () {
                                this['close'](function () {
                                    L['message']['dispatchEvent'](N['close_lobby_pop'], O['bindTips']);
                                });
                            }
                            ,
                            ab['setSpineBgPause'] = function (ac) {
                                null != this['spineBg'] && (this['spineBg']['paused'] = ac);
                            }
                            ,
                            aa;
                    }(G))['prototype'], 'spineBg', [V], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a3 = k(a1['prototype'], 'lbReward', [W], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a4 = k(a1['prototype'], 'btnBind', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = k(a1['prototype'], 'btnClose', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = k(a1['prototype'], 'lbTips', [Z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a0 = a1)) || a0)),
                    A['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/bn.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'আপনাকে\x20বেঁধে\x20রাখতে\x20হবে',
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
                        0x42: 'বর্তমান\x20ইমেল\x20ঠিকানাটি\x20ইতিমধ্যে\x20নিবন্ধন\x20করা\x20হয়েছে\x20এবং\x20পুনরায়\x20নিবন্ধন\x20করা\x20যাবে\x20না',
                        0x43: 'অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                        0x44: 'অবৈধ\x20তথ্য,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                        0x45: 'অভিনন্দন\x20<color=#FF4600>@player</color>\x20ভিতরে\x20<color=yellow>@game</color>\x20জয়ের\x20জন্য\x20<color=#4BFF00>x@multiple</color>\x20পুরস্কার\x20এবং\x20পেয়েছেন\x20<color=yellow>@coins</color>\x20কয়েন.',
                        0x46: 'অভিনন্দন\x20<color=#FF4600>%s</color>\x20জ্যাকপট\x20জেতার\x20জন্য\x20<color=#4BFF00>%s</color>\x20এবং\x20বিজয়ী\x20<color=yellow>%s</color>\x20কয়েন.',
                        0x47: 'রুম',
                        0x48: 'খেলোয়াড়',
                        0x49: 'অ্যান্টেস',
                        0x4a: 'মিন\x20ব্যালেন্স',
                        0x4b: 'ডেমো',
                        0x4c: 'প্রাথমিক',
                        0x4d: 'ওস্তাদ',
                        0x4e: 'রাজা',
                        0x4f: 'মহাকাব্য',
                        0x50: 'কিংবদন্তি',
                        0x51: 'ভিআইপি',
                        0x52: 'রুম',
                        0x53: 'খেলা',
                        0x54: 'যে\x20কোন',
                        0x55: 'প্রস্থান\x20করুন',
                        0x56: 'সাইন\x20আউট',
                        0x57: 'পরামর্শ',
                        0x58: 'সার্ভার\x20সংযোগ\x20ব্যর্থ\x20হয়েছে,\x20পরে\x20আবার\x20চেষ্টা\x20করুন',
                        0x59: 'সিস্টেম\x20আপনাকে\x20চলে\x20যেতে\x20বলে,\x20অনুগ্রহ\x20করে\x20পরে\x20গেমটিতে\x20প্রবেশ\x20করুন',
                        0x5a: 'এই\x20অ্যাকাউন্টটি\x20অন্য\x20ডিভাইস\x20থেকে\x20সাইন\x20ইন\x20করা\x20হয়েছে,\x20অনুগ্রহ\x20করে\x20অ্যাকাউন্টের\x20নিরাপত্তার\x20দিকে\x20মনোযোগ\x20দিন',
                        0x5b: '%s-এ\x20আপনার\x20খেলা\x20এখনও\x20শেষ\x20হয়নি,\x20অনুগ্রহ\x20করে\x20ফিরে\x20যান\x20এবং\x20খেলুন',
                        0x5c: 'অ্যাকাউন্ট\x20নিবন্ধন\x20ইতিমধ্যে\x20বিদ্যমান.',
                        0x5d: 'গেস্ট\x20অ্যাকাউন্ট\x20ডিভাইস\x20খালি\x20করা\x20যাবে\x20না।',
                        0x5e: 'অ্যাকাউন্ট\x20এর\x20অস্তিত্ব\x20নেই.',
                        0x5f: 'ভুল\x20পাসওয়ার্ড৤.',
                        0x60: 'এই\x20অ্যাকাউন্ট\x20স্থগিত\x20করা\x20হয়েছে.',
                        0x61: 'অতিথি\x20লগইন\x20ব্যতিক্রম,\x20আবার\x20চেষ্টা\x20করুন.',
                        0x62: 'লগইন\x20ব্যতিক্রম\x207,\x20অনুগ্রহ\x20করে\x20পুনরায়\x20চেষ্টা\x20করুন।',
                        0x63: 'সিস্টেম\x20রক্ষণাবেক্ষণাধীন,\x20অনুগ্রহ\x20করে\x20পরে\x20আবার\x20চেষ্টা\x20করুন।',
                        0x64: 'পাসওয়ার্ড\x20পরিবর্তন\x20করো',
                        0x65: 'ডাউনলোড\x20করুন',
                        0x66: 'আপনার\x20ভালো\x20অভিজ্ঞতার\x20জন্য,\x20অনুগ্রহ\x20করে\x20গেমটি\x20ডাউনলোড\x20করুন।',
                        0x67: 'আপনার\x20ভাল\x20অভিজ্ঞতার\x20জন্য,\x20অনুগ্রহ\x20করে\x20গেমটি\x20ডাউনলোড\x20করুন।\x20এখনই\x20ইনস্টল\x20করুন\x20এবং\x20পুরষ্কার\x20পান!',
                        0x68: 'গ্রহণ\x20করুন\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>সেবা\x20পাবার\x20শর্ত</on></u></color>\x20এবং\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>গোপনীয়তা\x20নীতি</on></u></color>',
                        0x69: 'পুরস্কার\x20পেতে\x0a\x20মোবাইল\x20ফোন\x20নম্বর\x20বাঁধুন',
                        0x6a: 'বাঁধাই\x20করা',
                        0x6b: 'দুঃখিত,\x20ভিআইপি\x20প্রয়োজনীয়তা\x20পূরণ\x20হয়\x20না,\x20যত\x20বেশি\x20কয়েন,\x20তত\x20বেশি\x20ভিআইপি,\x20রিচার্জ\x20করতে\x20দোকানে\x20যান',
                        0x6c: 'দুঃখিত,\x20আপনি\x20প্রবেশের\x20প্রয়োজনীয়তাগুলি\x20পূরণ\x20করেন\x20না,\x20আপনি\x20কি\x20কিছু\x20কিনতে\x20দোকানে\x20যেতে\x20চান?',
                        0x6d: 'টোকা\x20<img\x20src=\x27share\x27\x20/>\x20এবং\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>হোম\x20পর্দায়\x20যোগ\x20করুন</color></b>\x20আপনি\x20যখনই\x20চান\x20খেলতে',
                        0x6e: 'টোকা\x20<img\x20src=\x27share\x27\x20/>\x20এবং\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>হোম\x20পর্দায়\x20যোগ\x20করুন</color></b>\x20আপনি\x20যখনই\x20চান\x20খেলতে',
                        0x6f: 'সতর্কতা',
                        0x70: 'আপনার\x20গেম\x20ডেটার\x20নিরাপত্তার\x20জন্য,\x20আপনি\x20একটি\x20অফিসিয়াল\x20অ্যাকাউন্ট\x20হিসাবে\x20নিবন্ধন\x20করার\x20জন্য\x20অত্যন্ত\x20সুপারিশ\x20করা\x20হয়',
                        0x71: 'বার্তা\x20পাঠানো',
                        0x72: 'পুরস্কার\x20দাবি\x20সম্পূর্ণ',
                        0x73: 'সেবা',
                        0x74: 'বিন্যাস',
                        0x75: 'সাইন\x20ইন\x20করুন',
                        0x76: 'রুলেট',
                        0x77: 'উপহার',
                        0x78: 'অনুগ্রহ',
                        0x79: 'আমন্ত্রণ\x20জানান',
                        0x7a: 'তহবিল',
                        0x7b: 'সব',
                        0x7c: 'গরম',
                        0x7d: 'স্লট',
                        0x7e: 'জুজু',
                        0x7f: 'দুর্বল\x20নেটওয়ার্ক\x20স্থিতি',
                        0x80: 'ফ্রিক্যাশ',
                        0x81: 'কেনা',
                        0x82: 'একটি\x20নতুন\x20সংস্করণ\x20পাওয়া\x20গেছে৷\x20আপনি\x20কি\x20এটি\x20রিফ্রেশ\x20করতে\x20চান?',
                        0x83: 'এই\x20কার্যকলাপ\x20বন্ধ\x20হয়ে\x20গেছে\x20এবং\x20লোটারি\x20কোড\x20কিনার\x20জন্য\x20কয়েন\x20খাওয়া\x20হয়েছে।',
                        0x84: 'BUY\x20COIN',
                        0x85: 'আপনি\x20লগ\x20ইন\x20করেননি,\x20অনুগ্রহ\x20করে\x20লগ\x20আউট\x20করুন\x20এবং\x20আবার\x20চেষ্টা\x20করুন',
                        0x86: 'প্রমাণীকরণ\x20ব্যর্থ\x20হলে,\x20প্রস্থান\x20করুন\x20এবং\x20আবার\x20চেষ্টা\x20করুন',
                        0x87: 'অবৈধ\x20গেম\x20রুম,\x20অন্য\x20একটি\x20চেষ্টা\x20করুন',
                        0x88: 'ঘরটি\x20বন্ধ,\x20অন্য\x20একটি\x20চেষ্টা\x20করুন',
                        0x89: 'টাস্ক',
                        0x8a: 'এটা\x20নতুন\x20স্লট\x20খেলার\x20সময়',
                        0x8b: 'প্রতিদিন\x20সাইন\x20ইন\x20করে\x20বিনামূল্যে\x20কয়েন\x20পান!',
                        0x8c: 'লাকি\x20রুলেট!\x20100%\x20জয়ের\x20হার\x20নিশ্চিত!\x20আসুন\x20এবং\x20আপনার\x20পুরস্কার\x20পান!',
                        0x8d: 'বিশাল\x20কয়েনের\x20জন্য\x20নতুন\x20একচেটিয়া\x20চ্যালেঞ্জ!',
                        0x8e: 'আশ্চর্যজনক\x20স্লট\x20এবং\x20বৈশিষ্ট্য!',
                        0x8f: 'আপনি\x20একটি\x20বিশেষ\x20বোনাস\x20পেতে\x20পারেন',
                        0x90: 'উচ্চতর\x20ভিআইপি\x20শক্তি,\x20আরও\x20সুবিধা!',
                        0x91: 'নতুন\x20স্লট\x20স্পিন\x20করুন,\x20সৌভাগ্য\x20আপনার\x20সাথে\x20থাকুক!',
                        0x92: 'লাকি\x20হুইল\x20ডে,\x20গোল্ডেন\x20হুইল\x20মাল্টিপ্লার!',
                        0x93: 'সারপ্রাইজ\x20বোনাস,\x20আসুন\x20আপনার\x20কয়েন\x20সংগ্রহ\x20করুন',
                        0x94: 'দ্রুত\x20স্পিন\x20এবং\x20আরও\x20বড়\x20পুরস্কার!',
                        0x95: 'মেগা\x20পুরস্কার\x20প্রস্তুত,\x20এখনই\x20স্পিন\x20করুন!',
                        0x96: 'আলতো\x20চাপুন\x20এবং\x20এখন\x20আপনার\x20বিনামূল্যে\x20চিপ\x20সংগ্রহ\x20করুন!',
                        0x97: 'হ্যাপ\x20আওয়ার!!!\x20ট্রেজার\x20বোল\x2010%\x20চান্স\x20আপ!!!সব\x20প্যাকে\x20সীমাহীন\x20বোনাস',
                        0x98: 'ট্রিট\x20এবং\x20বিশেষ\x20মিশন\x20উপভোগ\x20করতে\x20এখনই\x20খেলুন',
                        0x99: 'বন্ধুদের\x20আমন্ত্রণ\x20জানান,\x20তাদের\x20BOSS\x20হন!\x20বিনামূল্যের\x20জন্য\x20বিশাল\x20কয়েন',
                        0x9a: 'আপনার\x20বন্ধুদের\x20শেয়ার\x20করুন,\x20একচেটিয়া\x20উপহার\x20পান',
                        0x9b: 'শেয়ার\x20করার\x20জন্য\x20বিশাল\x20পুরষ্কার,\x20আরো\x20আমন্ত্রণ\x20আরো\x20পুরস্কার',
                        0x9c: 'বন্ধুদের\x20সাথে\x20খেলুন,\x20প্রতিদিন\x20বিনামূল্যে\x20উপহার!',
                        0x9d: 'ভাগ্যবান\x20বোনাস,\x20সবচেয়ে\x20ধনী\x20হওয়ার\x20সুযোগ!',
                        0x9e: 'আপনার\x20১ম\x20বিশেষ\x20অফার\x20উপভোগ\x20করুন\x20এবং\x20ক্রয়ের\x20সুবিধা\x20পান',
                        0x9f: '1ম\x20ক্রয়\x20অতিরিক্ত\x20পুরস্কার\x20পেতে\x20পারেন!',
                        0xa0: 'হ্যালোউইন!\x20প্রতিদিন\x20লগ\x20ইন\x20করুন,\x20যেকোনো\x20পণ্য\x20কিনুন\x20এবং\x20সময়-সীমিত\x20ছাড়!',
                        0xa1: '<b>@player\x20জিতেছিলাম<br/>জ্যাকপট\x20<color=#FFE100>@coins</color>\x20অনলাইন\x20<br/><color=#00FFEF>@game</color></b>',
                        0xa2: 'বাড়ি',
                        0xa3: 'স্লোটস',
                        0xa4: 'বহুখেলোয়াড়',
                        0xa5: 'ইতিহাস',
                        0xa6: 'পুরষ্কার\x20পেতে\x20অ্যাকাউন্ট\x20প্রত্যাহার\x20করুন',
                        0xa7: 'একটি\x20বহিরাগত\x20লিঙ্ক\x20খোলা\x20হতে\x20চলেছে।\x20আপনি\x20কি\x20চালিয়ে\x20যেতে\x20চান?',
                        0xa8: 'মিলছে...',
                        0xa9: 'পুরস্কার\x20পেতে\x20আপনার\x20ইমেল\x20ঠিকানাটি\x20সংযুক্ত\x20করুন',
                        0xaa: 'পুরস্কার\x20পেতে\x20আপনার\x20ফোন\x20নম্বর\x20বা\x20ইমেইল\x20ঠিকানা\x20বেঁধে\x20দিন',
                        0xab: 'অনুগ্রহ\x20করে\x20আপনার\x20ইমেইল\x20লিখুন',
                        0xac: 'ম্যাচমেকিংয়ের\x20জন্য\x20কোনো\x20খেলোয়াড়\x20পাওয়া\x20যায়নি',
                        0xad: 'ন্যূনতম\x20প্রয়োজনীয়\x20পরিমাণের\x20নিচে',
                        0xae: 'মেলামেশার\x20তালিকায়\x20নেই',
                        0xaf: 'টাকার\x20বিস্তারিত\x20নেই',
                        0xb0: 'টানাতে\x20পারি\x20না'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/clearInput.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (b) {
        var c, d, f, g, h, j, k, m, q, v;
        return {
            'setters': [function (w) {
                c = w['applyDecoratedDescriptor'],
                    d = w['inheritsLoose'],
                    f = w['initializerDefineProperty'],
                    g = w['assertThisInitialized'],
                    h = w['createClass'];
            }
                , function (w) {
                    j = w['cclegacy'],
                        k = w['_decorator'],
                        m = w['Button'],
                        q = w['EditBox'],
                        v = w['Component'];
                }
            ],
            'execute': function () {
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
                    w((B = c((A = function (H) {
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
                        return K['onLoad'] = function () {
                            this['clearBtn']['node']['on'](m['EventType']['CLICK'], this['onClearBtnClick'], this),
                                this['clearBtn']['node']['active'] = !0x1,
                                this['input']['node']['on'](q['EventType']['EDITING_DID_ENDED'], this['onInputTextEnded'], this),
                                this['input']['node']['on'](q['EventType']['EDITING_DID_BEGAN'], this['onInputTextBegan'], this),
                                this['input']['node']['on'](q['EventType']['TEXT_CHANGED'], this['onTextChange'], this),
                                this['tipsInput'] = this['Input']['placeholderLabel'];
                        }
                            ,
                            K['onInputTextEnded'] = function (L) {
                                var M, N = L['string'];
                                this['clearBtn']['node']['active'] = N['length'] > 0x0,
                                    null == (M = this['editDidEndFun']) || M['call'](this, this['Input']);
                            }
                            ,
                            K['setLimit'] = function (L, M, N) {
                                null != L && (this['input']['inputMode'] = L),
                                    null != M && (this['input']['inputFlag'] = M),
                                    null != N && (N = Math['max'](0x1, N),
                                        this['input']['maxLength'] = N);
                            }
                            ,
                            K['onDestroy'] = function () { }
                            ,
                            K['onTextChange'] = function (L) {
                                var M = L['string'];
                                this['clearBtn']['node']['active'] = M['length'] > 0x0;
                            }
                            ,
                            K['onInputTextBegan'] = function (L) {
                                var M;
                                null == (M = this['editDidBeganFun']) || M['call'](this, this['Input']);
                            }
                            ,
                            K['onClearBtnClick'] = function () {
                                this['clearInput'](!0x1);
                            }
                            ,
                            K['setInput'] = function (L, M) {
                                var N;
                                (void 0x0 === M && (M = !0x1),
                                    null == L && (L = ''),
                                    this['input']['string'] = L,
                                    this['clearBtn']['node']['active'] = null != L && L['length'] > 0x0,
                                    M) || (null == (N = this['editDidEndFun']) || N['call'](this, this['Input']));
                            }
                            ,
                            K['setTips'] = function (L) {
                                null == this['tipsInput'] && (this['tipsInput'] = this['Input']['placeholderLabel']),
                                    this['tipsInput'] && (this['tipsInput']['string'] = L);
                            }
                            ,
                            K['clearInput'] = function (L) {
                                var M;
                                (void 0x0 === L && (L = !0x1),
                                    this['input']['string'] = '',
                                    this['clearBtn']['node']['active'] = !0x1,
                                    this['input']['node']['emit'](q['EventType']['EDITING_DID_ENDED'], this['input']),
                                    L) || (null == (M = this['clearFun']) || M['call'](this, this['Input']));
                            }
                            ,
                            K['setEditDidEnd'] = function (L) {
                                this['editDidEndFun'] = L;
                            }
                            ,
                            K['setEditDidBegan'] = function (L) {
                                this['editDidBeganFun'] = L;
                            }
                            ,
                            K['setClearFun'] = function (L) {
                                this['clearFun'] = L;
                            }
                            ,
                            K['setDisable'] = function (L) {
                                this['clearBtn']['node']['active'] = !L;
                            }
                            ,
                            h(J, [{
                                'key': 'Input',
                                'get': function () {
                                    return this['input'];
                                }
                            }, {
                                'key': 'String',
                                'get': function () {
                                    return this['input']['string'];
                                }
                            }]),
                            J;
                    }(v))['prototype'], 'clearBtn', [x], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        C = c(A['prototype'], 'input', [y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        z = A)) || z)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/DayToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (b) {
        var d, f, g, h, j, k, m, p, q;
        return {
            'setters': [function (u) {
                d = u['applyDecoratedDescriptor'],
                    f = u['inheritsLoose'],
                    g = u['initializerDefineProperty'],
                    h = u['assertThisInitialized'];
            }
                , function (u) {
                    j = u['cclegacy'],
                        k = u['_decorator'],
                        m = u['Color'],
                        p = u['Label'],
                        q = u['Toggle'];
                }
            ],
            'execute': function () {
                var v, w, x, z, A, B, C, E, F;
                j['_RF']['push']({}, '381faBpPk1ItKIm7dg7T7Ft', 'DayToggle', void 0x0);
                var G = k['ccclass']
                    , H = k['property'];
                b('DayToggle', (v = G('DayToggle'),
                    w = H(m),
                    x = H(m),
                    z = H(p),
                    v((C = d((B = function (I) {
                        function J() {
                            for (var L, M = arguments['length'], N = new Array(M), O = 0x0; O < M; O++)
                                N[O] = arguments[O];
                            return L = I['call']['apply'](I, [this]['concat'](N)) || this,
                                g(L, 'colorSelect', C, h(L)),
                                g(L, 'colorNormal', E, h(L)),
                                g(L, 'lb_day', F, h(L)),
                                L;
                        }
                        f(J, I);
                        var K = J['prototype'];
                        return K['playEffect'] = function () {
                            I['prototype']['playEffect']['call'](this),
                                this['onCheckChange'](this['isChecked']);
                        }
                            ,
                            K['onCheckChange'] = function (L) {
                                this['lb_day'] && (this['lb_day']['color'] = L ? this['colorSelect'] : this['colorNormal']);
                            }
                            ,
                            K['setDay'] = function (L) {
                                this['lb_day'] && (this['lb_day']['string'] = L + 'Day');
                            }
                            ,
                            J;
                    }(q))['prototype'], 'colorSelect', [w], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return new m()['fromHEX']('#FFF9B0');
                        }
                    }),
                        E = d(B['prototype'], 'colorNormal', [x], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return new m()['fromHEX']('#646990');
                            }
                        }),
                        F = d(B['prototype'], 'lb_day', [z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        A = B)) || A)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/downloadEntry.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyState.ts', './utils.ts', './Language.ts', './platformData.ts', './Oops.ts', './appConfig.ts', './GameUIConfig.ts'], function (h) {
        var j, k, m, q, v, x, z, A, B, C, D, E, F, G, H, I, J;
        return {
            'setters': [function (K) {
                j = K['applyDecoratedDescriptor'],
                    k = K['inheritsLoose'],
                    m = K['initializerDefineProperty'],
                    q = K['assertThisInitialized'];
            }
                , function (K) {
                    v = K['cclegacy'],
                        x = K['_decorator'],
                        z = K['Button'],
                        A = K['Label'],
                        B = K['sys'],
                        C = K['Component'];
                }
                , function (K) {
                    D = K['lobbyState'];
                }
                , function (K) {
                    E = K['utils'];
                }
                , function (K) {
                    F = K['LanguageManager'];
                }
                , function (K) {
                    G = K['PModuleID'];
                }
                , function (K) {
                    H = K['oops'];
                }
                , function (K) {
                    I = K['appConfig'];
                }
                , function (K) {
                    J = K['UIID'];
                }
            ],
            'execute': function () {
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
                    K((Q = j((P = function (V) {
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
                        return X['init'] = function (Y) {
                            if (null != this['lb_downlaod']) {
                                var Z = F['getLangByTag']('download', G['lobby']);
                                this['lb_downlaod']['string'] = Z;
                            }
                            E['ButtonBindClick'](this['btn_download'], function () {
                                null == Y || Y();
                            }, this),
                                this['isShowDownloadEntry']() || H['gui']['remove'](J['downloadEntry']);
                        }
                            ,
                            X['isShowDownloadEntry'] = function () {
                                var Y = D['Instance']['Server']['downloadUrl'];
                                return !(B['isNative'] || I['bPreview'] || E['StringIsNullOrEmpty'](Y));
                            }
                            ,
                            W;
                    }(C))['prototype'], 'btn_download', [M], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        R = j(P['prototype'], 'lb_downlaod', [N], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        O = P)) || O)),
                    v['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/downloadTips.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts', './GameUIConfig.ts', './lobbyState.ts', './CustomEventDefine.ts', './Language.ts', './platformData.ts', './popManager.ts', './appConfig.ts', './lobbyConfig.ts', './lobbyPopView.ts'], function (j) {
        var k, q, x, z, A, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T;
        return {
            'setters': [function (U) {
                k = U['applyDecoratedDescriptor'],
                    q = U['inheritsLoose'],
                    x = U['initializerDefineProperty'],
                    z = U['assertThisInitialized'];
            }
                , function (U) {
                    A = U['cclegacy'],
                        D = U['_decorator'],
                        E = U['sp'],
                        F = U['Label'],
                        G = U['Button'];
                }
                , function (U) {
                    H = U['utils'];
                }
                , function (U) {
                    I = U['webGame'];
                }
                , function (U) {
                    J = U['oops'];
                }
                , function (U) {
                    K = U['UIID'];
                }
                , function (U) {
                    L = U['lobbyState'];
                }
                , function (U) {
                    M = U['WebGameEvent'];
                }
                , function (U) {
                    N = U['LanguageManager'];
                }
                , function (U) {
                    O = U['PModuleID'];
                }
                , function (U) {
                    P = U['popJobType'],
                        Q = U['lobbyPopJob'];
                }
                , function (U) {
                    R = U['appConfig'];
                }
                , function (U) {
                    S = U['Lobby'];
                }
                , function (U) {
                    T = U['lobbyPopView'];
                }
            ],
            'execute': function () {
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
                    V((a3 = k((a2 = function (aa) {
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
                        return ac['onInit'] = function () {
                            H['ButtonBindClick'](this['btnDownload'], this['onBtnDownloadClick'], this),
                                H['ButtonBindClick'](this['btnClose'], this['onBtnCloseClick'], this);
                        }
                            ,
                            ac['onShow'] = function () {
                                aa['prototype']['onShow']['call'](this),
                                    this['setSpineBgPause'](!0x1);
                            }
                            ,
                            ac['onClose'] = function () {
                                J['gui']['remove'](K['downloadTips'], !0x1),
                                    aa['prototype']['onClose']['call'](this),
                                    this['setSpineBgPause'](!0x0);
                            }
                            ,
                            ac['refresh'] = function () {
                                var ad = L['Instance']['Server']['downloadReward']
                                    , ae = 'download_tips'
                                    , af = ad > 0x0;
                                af && (this['lbReward']['string'] = I['FormatCoins'](ad),
                                    ae = 'download_reward_tips'),
                                    this['lbReward']['node']['active'] = af,
                                    this['lbSlogan'] && (this['lbSlogan']['string'] = N['getLangByTag'](ae, O['lobby']));
                            }
                            ,
                            ac['openUrl'] = function (ad) {
                                H['StringIsNullOrEmpty'](ad) || H['openUrl'](ad),
                                    this['onBtnCloseClick']();
                            }
                            ,
                            ac['onBtnDownloadClick'] = function () {
                                var ad = this
                                    , ae = L['Instance']['Server']['downloadUrl'];
                                if (R['bDownNeendBindPhone']) {
                                    var af = L['Instance']['Player']['phone'];
                                    H['StringIsNullOrEmpty'](af) ? this['close'](function () {
                                        var ag = new Q(P['other'], 0x1, 0x0);
                                        ag['canPopUp'] = function () {
                                            return !0x0;
                                        }
                                            ,
                                            ag['showView'] = function () {
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
                            ac['onBtnCloseClick'] = function () {
                                this['close'](function () {
                                    J['message']['dispatchEvent'](M['close_lobby_pop'], P['download']);
                                });
                            }
                            ,
                            ac['setSpineBgPause'] = function (ad) {
                                null != this['spineBg'] && (this['spineBg']['paused'] = ad);
                            }
                            ,
                            ab;
                    }(T))['prototype'], 'spineBg', [W], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a4 = k(a2['prototype'], 'lbSlogan', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = k(a2['prototype'], 'lbReward', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = k(a2['prototype'], 'btnDownload', [Z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a7 = k(a2['prototype'], 'btnClose', [a0], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a1 = a2)) || a1)),
                    A['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/dropdown.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './topCloseLayer.ts'], function (b) {
        var j, k, m, q, w, x, y, z, A, B, C, D, E, F, G, H;
        return {
            'setters': [function (I) {
                j = I['applyDecoratedDescriptor'],
                    k = I['inheritsLoose'],
                    m = I['initializerDefineProperty'],
                    q = I['assertThisInitialized'],
                    w = I['createClass'];
            }
                , function (I) {
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
                , function (I) {
                    H = I['topCloseLayer'];
                }
            ],
            'execute': function () {
                var J, K, M, N, Q, S, U, V, W, X, Y, Z, a0;
                x['_RF']['push']({}, '1176bxsHCNHKYQszx0H0gMb', 'dropdown', void 0x0);
                var a1 = y['ccclass']
                    , a2 = y['property']
                    , a3 = (function () {
                        function a4(a6) {
                            this['node'] = null,
                                this['toggle'] = null,
                                this['content'] = null,
                                this['node'] = a6,
                                this['toggle'] = a6['getComponent'](G),
                                this['content'] = a6['getComponentInChildren'](A);
                        }
                        var a5 = a4['prototype'];
                        return a5['bindChooenHandler'] = function (a6) {
                            this['toggle']['node']['on'](G['EventType']['TOGGLE'], function (a7) {
                                a6(a7['isChecked']);
                            });
                        }
                            ,
                            a5['setOption'] = function (a6) {
                                this['content']['string'] = a6;
                            }
                            ,
                            a5['show'] = function (a6) {
                                this['node']['active'] = a6;
                            }
                            ,
                            w(a4, [{
                                'key': 'IsChoosen',
                                'get': function () {
                                    var a6;
                                    return null == (a6 = this['toggle']) ? void 0x0 : a6['isChecked'];
                                },
                                'set': function (a6) {
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
                    J((W = j((V = function (a4) {
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
                        return a6['onLoad'] = function () {
                            this['init']();
                        }
                            ,
                            a6['init'] = function () {
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
                            a6['switchOptions'] = function () {
                                var a7 = this;
                                if (this['optionsRoot']['active'] = !this['optionsRoot']['active'],
                                    this['optionsRoot']['active']) {
                                    var a8 = this['optionsRoot']['scale']['clone']();
                                    this['recoverOptionsRoot'] = function () {
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
                                        H['instance']['show'](function () {
                                            null == a7['recoverOptionsRoot'] || a7['recoverOptionsRoot']();
                                        }, this, this['optionsRoot']),
                                        this['options'][this['Value']] && (this['options'][this['Value']]['IsChoosen'] = !0x0);
                                }
                            }
                            ,
                            a6['getDropdownOption'] = function (a7, a8) {
                                var a9 = this
                                    , aa = new a3(a8);
                                return aa['bindChooenHandler'](function (ab) {
                                    a9['onToggleChange'](a7, ab);
                                }),
                                    aa;
                            }
                            ,
                            a6['onToggleChange'] = function (a7, a8) {
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
                            a6['addOptions'] = function (a7) {
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
                            a6['clearOptions'] = function () {
                                this['init'](),
                                    this['optionsData'] = [];
                                for (var a7 = 0x0; a7 < this['options']['length']; a7++)
                                    this['options'][a7]['show'](!0x1);
                            }
                            ,
                            a6['setValueChangedListener'] = function (a7) {
                                this['valueChangeHandler'] = a7;
                            }
                            ,
                            a6['setEnable'] = function (a7) {
                                this['btn']['interactable'] = a7;
                            }
                            ,
                            w(a5, [{
                                'key': 'Options',
                                'get': function () {
                                    return this['optionsData'];
                                },
                                'set': function (a7) {
                                    this['optionsData'] = a7;
                                }
                            }, {
                                'key': 'Value',
                                'get': function () {
                                    if (-0x1 == this['value'] && 0x0 < this['optionsData']['length']) {
                                        for (var a7 = 0x0; a7 < this['options']['length']; a7++)
                                            if (this['options'][a7]['IsChoosen'])
                                                return this['value'] = a7,
                                                    a7;
                                    }
                                    return this['value'];
                                },
                                'set': function (a7) {
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
                                'get': function () {
                                    return 0x0 == this['Options']['length'] || this['value'] < 0x0 || this['value'] >= this['optionsData']['length'] ? '' : this['optionsData'][this['value']];
                                }
                            }]),
                            a5;
                    }(F))['prototype'], 'btn', [K], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        X = j(V['prototype'], 'label', [M], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Y = j(V['prototype'], 'optionsRoot', [N], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Z = j(V['prototype'], 'optionsGroup', [Q], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a0 = j(V['prototype'], 'optionPrefab', [S], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        U = V)) || U)),
                    x['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/en.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'You\x20need\x20to\x20bind',
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
                        0x42: 'The\x20current\x20email\x20address\x20has\x20been\x20registered\x20and\x20cannot\x20be\x20registered\x20again',
                        0x43: 'Please\x20try\x20again\x20later.',
                        0x44: 'Invalid\x20data,\x20please\x20try\x20again\x20later',
                        0x45: 'Congratulations\x20to\x20<color=#FF4600>@player</color>\x20in\x20<color=yellow>@game</color>\x20for\x20winning\x20<color=#4BFF00>x@multiple</color>\x20prizes\x20and\x20got\x20<color=yellow>@coins</color>\x20Coins.',
                        0x46: 'Congratulations\x20to\x20<color=#FF4600>%s</color>\x20for\x20winning\x20Jackpot\x20in\x20<color=#4BFF00>%s</color>\x20and\x20winning\x20<color=yellow>%s</color>\x20Coins.',
                        0x47: 'Room',
                        0x48: 'Players',
                        0x49: 'Bets',
                        0x4a: 'Min\x20Balance',
                        0x4b: 'Demo',
                        0x4c: 'Primary',
                        0x4d: 'Master',
                        0x4e: 'King',
                        0x4f: 'Epic',
                        0x50: 'Legend',
                        0x51: 'Vip',
                        0x52: 'Room',
                        0x53: 'Play',
                        0x54: 'Any',
                        0x55: 'Quit',
                        0x56: 'Sign\x20out',
                        0x57: 'Tips',
                        0x58: 'The\x20server\x20connection\x20failed,\x20please\x20try\x20again\x20later',
                        0x59: 'The\x20system\x20asks\x20you\x20to\x20leave,\x20please\x20enter\x20the\x20game\x20later',
                        0x5a: 'This\x20account\x20is\x20sign\x20in\x20from\x20another\x20device,\x20please\x20pay\x20attention\x20to\x20account\x20security',
                        0x5b: 'Your\x20game\x20in\x20%s\x20is\x20not\x20over\x20yet,\x20please\x20go\x20back\x20and\x20play',
                        0x5c: 'Account\x20registration\x20already\x20exists.',
                        0x5d: 'Guest\x20account\x20device\x20cannot\x20be\x20empty.',
                        0x5e: 'Account\x20does\x20not\x20exist.',
                        0x5f: 'Incorrect\x20password.',
                        0x60: 'This\x20account\x20has\x20been\x20suspended.',
                        0x61: 'Guest\x20login\x20exception,\x20please\x20retry.',
                        0x62: 'Login\x20exception\x207,\x20please\x20retry.',
                        0x63: 'System\x20under\x20maintenance,\x20please\x20try\x20again\x20later.',
                        0x64: 'Change\x20Password',
                        0x65: 'Download',
                        0x66: 'For\x20your\x20better\x20experience,please\x20Download\x20the\x20Game.',
                        0x67: 'For\x20your\x20better\x20experience,please\x20Download\x20the\x20Game.Install\x20now\x20and\x20get\x20the\x20rewards!',
                        0x68: 'Accept\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Terms\x20Of\x20Service</on></u></color>\x20and\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacy&Policy</on></u></color>',
                        0x69: 'Bind\x20mobile\x20phone\x20number\x0a\x20to\x20get\x20rewards',
                        0x6a: 'Bind',
                        0x6b: 'Sorry,the\x20VIP\x20requirements\x20are\x20not\x20met,\x20the\x20more\x20coins,\x20the\x20higher\x20VIP,\x20go\x20to\x20the\x20store\x20to\x20recharge',
                        0x6c: 'Sorry,\x20you\x20don\x27t\x20meet\x20the\x20entry\x20requirements,\x20would\x20you\x20want\x20to\x20go\x20to\x20the\x20store\x20for\x20buy\x20some?',
                        0x6d: 'Tap\x20<img\x20src=\x27share\x27\x20/>\x20and\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home\x20Screen</color></b>\x20to\x20play\x20whenever\x20you\x20want',
                        0x6e: 'Tap\x20<img\x20src=\x27share\x27\x20/>\x20and\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home\x20Screen</color></b>\x20to\x20play\x20whenever\x20you\x20want',
                        0x6f: 'Warning',
                        0x70: 'For\x20the\x20security\x20of\x20your\x20game\x20data,\x20it\x20is\x20highly\x20recommended\x20that\x20you\x20register\x20as\x20an\x20official\x20account',
                        0x71: 'Message\x20sent',
                        0x72: 'Claim\x20prize\x20complete',
                        0x73: 'Service',
                        0x74: 'Setting',
                        0x75: 'Check-in',
                        0x76: 'Turntable',
                        0x77: 'Gift',
                        0x78: 'Gratia',
                        0x79: 'Invite',
                        0x7a: 'Bonus',
                        0x7b: 'All',
                        0x7c: 'Hot',
                        0x7d: 'Slots',
                        0x7e: 'Poker',
                        0x7f: 'Poor\x20network\x20status',
                        0x80: 'FreeCash',
                        0x81: 'Buy',
                        0x82: 'A\x20new\x20version\x20was\x20found.\x20Do\x20you\x20want\x20to\x20refresh\x20it?',
                        0x83: 'The\x20event\x20has\x20been\x20closed\x20and\x20the\x20purchase\x20amount\x20has\x20been\x20refunded',
                        0x84: 'BUY\x20COIN',
                        0x85: 'You\x20are\x20not\x20logged\x20in,\x20please\x20log\x20out\x20and\x20try\x20again',
                        0x86: 'If\x20the\x20authentication\x20fails,\x20exit\x20and\x20try\x20again',
                        0x87: 'Invalid\x20game\x20room,\x20try\x20another\x20one',
                        0x88: 'The\x20room\x20is\x20closed,\x20try\x20another\x20one',
                        0x89: 'Task',
                        0x8a: 'It\x27s\x20time\x20to\x20play\x20NEW\x20Slots',
                        0x8b: 'Get\x20FREE\x20Coins\x20by\x20sign\x20in\x20every\x20day!',
                        0x8c: 'Lucky\x20Roulette!100%\x20win\x20rate\x20guaranteed!Come\x20and\x20get\x20your\x20prize!',
                        0x8d: 'New\x20exclusive\x20challenge\x20for\x20huge\x20coins!',
                        0x8e: 'Amazing\x20slots\x20and\x20features!',
                        0x8f: 'You\x20Can\x20Receive\x20A\x20Special\x20Bonus',
                        0x90: 'Higher\x20VIP\x20POWER,More\x20benefits!',
                        0x91: 'Spin\x20NEW\x20SLOTS,Good\x20fortune\x20be\x20with\x20you!',
                        0x92: 'LUCKY\x20WHEEL\x20DAY,GOLDEN\x20WHEEL\x20MULTIPLER!',
                        0x93: 'SURPRISE\x20BONUS,Come\x20collect\x20your\x20coins',
                        0x94: 'Faster\x20spins\x20&\x20BIGGER\x20PRIZES!',
                        0x95: 'MEGA\x20REWARD\x20is\x20ready,SPIN\x20NOW!',
                        0x96: 'Tap\x20and\x20collect\x20your\x20free\x20chips\x20now!',
                        0x97: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Chance\x20UP!!!Unlimited\x20bonus\x20on\x20all\x20packs',
                        0x98: 'Play\x20now\x20to\x20enjoy\x20treats\x20and\x20special\x20missions',
                        0x99: 'Invite\x20friends,be\x20their\x20BOSS!Huge\x20coins\x20for\x20Free',
                        0x9a: 'Share\x20to\x20your\x20friends,get\x20Exclusive\x20gifts',
                        0x9b: 'Huge\x20rewards\x20for\x20Share,More\x20Invite\x20more\x20prize',
                        0x9c: 'Play\x20with\x20friends,Free\x20gifts\x20everyday!',
                        0x9d: 'LUCKY\x20BONUS,A\x20chance\x20to\x20be\x20the\x20richest!',
                        0x9e: 'Enjoy\x20your\x201st\x20SPECIAL\x20OFFER,and\x20get\x20purchase\x20benefits',
                        0x9f: '1st\x20purchase\x20can\x20get\x20extra\x20PRIZE!',
                        0xa0: 'HalloWIN!Log\x20in\x20everyday,purchase\x20any\x20goods\x20and\x20time-limited\x20discounts!',
                        0xa1: '<b>@player\x20won\x20the\x20\x0aJackpot\x20<color=#FFE100>@coins</color>\x20on\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'Home',
                        0xa3: 'Slots',
                        0xa4: 'Multiplayer',
                        0xa5: 'History',
                        0xa6: 'Bind\x20Withdraw\x20Account\x20to\x20get\x20rewards',
                        0xa7: 'An\x20external\x20link\x20is\x20about\x20to\x20be\x20opened.\x20Do\x20you\x20want\x20to\x20continue?',
                        0xa8: 'Matching...',
                        0xa9: 'Bind\x20your\x20email\x20address\x20to\x20get\x20rewards',
                        0xaa: 'Bind\x20your\x20phone\x20number\x20or\x20email\x20address\x20to\x20get\x20rewards',
                        0xab: 'Please\x20enter\x20your\x20Email',
                        0xac: 'No\x20players\x20found\x20for\x20matchmaking',
                        0xad: 'Below\x20the\x20minimum\x20amount\x20required',
                        0xae: 'Not\x20in\x20the\x20matchmaking\x20queue',
                        0xaf: 'No\x20seat\x20information',
                        0xb0: 'Cannot\x20stand\x20up'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/es_mx.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'Necesitas\x20vincular',
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
                        0x42: 'La\x20dirección\x20de\x20correo\x20electrónico\x20actual\x20ya\x20ha\x20sido\x20registrada\x20y\x20no\x20se\x20puede\x20registrar\x20nuevamente',
                        0x43: 'Por\x20favor,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde.',
                        0x44: 'Invalid\x20data,\x20please\x20try\x20again\x20later',
                        0x45: 'Felicitaciones\x20a\x20<color=#FF4600>@player</color>\x20en\x20<color=Yellow>@game</color>\x20por\x20ganar\x20<color=#4BFF00>x@multiple</color>\x20premios\x20y\x20obtener\x20<color=Yellow>@coins</color>\x20Monedas.',
                        0x46: 'Felicitaciones\x20a\x20<color=#FF4600>%s</color>\x20por\x20ganar\x20el\x20premio\x20mayor\x20en\x20<color=#4BFF00>%s</color>\x20y\x20ganar\x20<color=yellow>%s</color>\x20monedas.',
                        0x47: 'Habitación',
                        0x48: 'Jugadoras',
                        0x49: 'Antes',
                        0x4a: 'Saldo\x20mínimo',
                        0x4b: 'Manifestación',
                        0x4c: 'Primaria',
                        0x4d: 'Maestra',
                        0x4e: 'Rey',
                        0x4f: 'Épica/epico',
                        0x50: 'Leyenda',
                        0x51: 'VIP',
                        0x52: 'Habitación',
                        0x53: 'Jugar',
                        0x54: 'Cualquier',
                        0x55: 'Abandonar',
                        0x56: 'desconectar',
                        0x57: 'Consejos',
                        0x58: 'La\x20conexión\x20al\x20servidor\x20falló,\x20inténtelo\x20nuevamente\x20más\x20tarde.',
                        0x59: 'El\x20sistema\x20te\x20pide\x20que\x20salgas,\x20ingresa\x20al\x20juego\x20más\x20tarde.',
                        0x5a: 'Esta\x20cuenta\x20se\x20inicia\x20desde\x20otro\x20dispositivo,\x20preste\x20atención\x20a\x20la\x20seguridad\x20de\x20la\x20cuenta.',
                        0x5b: 'Tu\x20juego\x20en\x20%s\x20aún\x20no\x20ha\x20terminado,\x20regresa\x20y\x20juega',
                        0x5c: 'El\x20registro\x20de\x20cuenta\x20ya\x20existe.',
                        0x5d: 'El\x20dispositivo\x20de\x20la\x20cuenta\x20de\x20invitado\x20no\x20puede\x20estar\x20vacío.',
                        0x5e: 'La\x20cuenta\x20no\x20existe.',
                        0x5f: 'Contraseña\x20incorrecta.',
                        0x60: 'Esta\x20Cuenta\x20Ha\x20Sido\x20Suspendida.',
                        0x61: 'Excepción\x20de\x20inicio\x20de\x20sesión\x20de\x20invitado;\x20vuelva\x20a\x20intentarlo.',
                        0x62: 'Excepción\x20de\x20inicio\x20de\x20sesión\x207,\x20vuelva\x20a\x20intentarlo.',
                        0x63: 'Sistema\x20en\x20mantenimiento,\x20inténtelo\x20de\x20nuevo\x20más\x20tarde.',
                        0x64: 'Modificar\x20la\x20contraseña',
                        0x65: 'Descargar',
                        0x66: 'Para\x20una\x20mejor\x20experiencia,\x20descargue\x20el\x20juego.',
                        0x67: 'Para\x20disfrutar\x20de\x20una\x20mejor\x20experiencia,\x20descargue\x20el\x20juego.\x20¡Instálelo\x20ahora\x20y\x20obtenga\x20las\x20recompensas!',
                        0x68: 'Acepte\x20los\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Términos\x20de\x20servicio</on></u></color>\x20y\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacidad\x20y\x20política</on></u></color>',
                        0x69: 'Vincula\x20el\x20número\x20de\x20teléfono\x20móvil\x0a\x20para\x20obtener\x20recompensas',
                        0x6a: 'Unir',
                        0x6b: 'Lo\x20sentimos,\x20no\x20se\x20cumplen\x20los\x20requisitos\x20VIP,\x20cuantas\x20más\x20monedas,\x20mayor\x20VIP,\x20ve\x20a\x20la\x20tienda\x20a\x20recargar.',
                        0x6c: 'Lo\x20sentimos,\x20no\x20cumples\x20con\x20los\x20requisitos\x20de\x20entrada,\x20¿te\x20gustaría\x20ir\x20a\x20la\x20tienda\x20a\x20comprar\x20algunos?',
                        0x6d: 'Toca\x20<img\x20src=\x27share\x27\x20/>\x20y\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Agregar\x20a\x20la\x20pantalla\x20de\x20inicio</color></b>\x20para\x20jugar\x20cuando\x20quieras.',
                        0x6e: 'Toca\x20<img\x20src=\x27share\x27\x20/>\x20y\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Agregar\x20a\x20la\x20pantalla\x20de\x20inicio</color></b>\x20para\x20jugar\x20cuando\x20quieras.',
                        0x6f: 'Advertencia',
                        0x70: 'Para\x20la\x20seguridad\x20de\x20los\x20datos\x20de\x20tu\x20juego,\x20te\x20recomendamos\x20encarecidamente\x20que\x20te\x20registres\x20como\x20una\x20cuenta\x20oficial.',
                        0x71: 'Mensaje\x20enviado',
                        0x72: 'Reclamación\x20del\x20premio\x20completa',
                        0x73: 'Servicio',
                        0x74: 'Configuración',
                        0x75: 'Iniciar\x20sesión',
                        0x76: 'Ruleta',
                        0x77: 'Regalo',
                        0x78: 'Gracia',
                        0x79: 'Invitar',
                        0x7a: 'Fondos',
                        0x7b: 'Todo',
                        0x7c: 'Caliente',
                        0x7d: 'Slots',
                        0x7e: 'Póker',
                        0x7f: 'Mal\x20estado\x20de\x20la\x20red',
                        0x80: 'Gratis',
                        0x81: 'Comprar',
                        0x82: 'Se\x20encontró\x20una\x20nueva\x20versión.\x20¿Quieres\x20actualizarla?',
                        0x83: 'Se\x20ha\x20cerrado\x20la\x20campaña\x20y\x20se\x20han\x20devuelto\x20las\x20monedas\x20de\x20oro\x20consumidas\x20en\x20la\x20compra\x20del\x20Código\x20del\x20sorteo',
                        0x84: 'BUY\x20COIN',
                        0x85: 'No\x20ha\x20iniciado\x20sesión,\x20cierre\x20la\x20sesión\x20e\x20inténtelo\x20de\x20nuevo',
                        0x86: 'Si\x20se\x20produce\x20un\x20error\x20en\x20la\x20autenticación,\x20salga\x20e\x20inténtelo\x20de\x20nuevo',
                        0x87: 'Sala\x20de\x20juegos\x20no\x20válida,\x20pruebe\x20con\x20otra',
                        0x88: 'La\x20habitación\x20está\x20cerrada,\x20pruebe\x20con\x20otra',
                        0x89: 'Tarea',
                        0x8a: 'Es\x20hora\x20de\x20jugar\x20NUEVAS\x20tragamonedas',
                        0x8b: '¡Obtenga\x20monedas\x20GRATIS\x20iniciando\x20sesión\x20todos\x20los\x20días!',
                        0x8c: '¡Ruleta\x20de\x20la\x20suerte!\x20¡Tasa\x20de\x20ganancia\x20del\x20100\x20%\x20garantizada!\x20¡Ven\x20y\x20consigue\x20tu\x20premio!',
                        0x8d: '¡Nuevo\x20desafío\x20exclusivo\x20para\x20monedas\x20enormes!',
                        0x8e: '¡Tragamonedas\x20y\x20funciones\x20increíbles!',
                        0x8f: 'Puedes\x20recibir\x20un\x20bono\x20especial',
                        0x90: '¡Mayor\x20POTENCIA\x20VIP,\x20más\x20beneficios!',
                        0x91: 'Gira\x20NUEVAS\x20RANURAS,\x20¡Buena\x20suerte\x20contigo!',
                        0x92: '¡DÍA\x20DE\x20LA\x20RUEDA\x20DE\x20LA\x20SUERTE,\x20MULTIPLICADOR\x20DE\x20LA\x20RUEDA\x20DE\x20ORO!',
                        0x93: 'BONO\x20SORPRESA,\x20Ven\x20a\x20recoger\x20tus\x20monedas',
                        0x94: '¡Giros\x20más\x20rápidos\x20y\x20PREMIOS\x20MÁS\x20GRANDES!',
                        0x95: 'MEGA\x20RECOMPENSA\x20está\x20lista,\x20¡GIRA\x20AHORA!',
                        0x96: '¡Toca\x20y\x20recoge\x20tus\x20fichas\x20gratis\x20ahora!',
                        0x97: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20DE\x20OPORTUNIDAD!!!Bonificación\x20ilimitada\x20en\x20todos\x20los\x20paquetes',
                        0x98: 'Juega\x20ahora\x20para\x20disfrutar\x20de\x20regalos\x20y\x20misiones\x20especiales.',
                        0x99: '¡Invita\x20amigos,\x20sé\x20su\x20JEFE!\x20Grandes\x20monedas\x20gratis',
                        0x9a: 'Comparte\x20con\x20tus\x20amigos\x20y\x20obtén\x20regalos\x20exclusivos.',
                        0x9b: 'Grandes\x20recompensas\x20por\x20compartir,\x20más\x20invitar\x20a\x20más\x20premios',
                        0x9c: 'Juega\x20con\x20amigos,\x20¡regalos\x20gratis\x20todos\x20los\x20días!',
                        0x9d: 'BONIFICACIÓN\x20DE\x20SUERTE,\x20¡Una\x20oportunidad\x20de\x20ser\x20el\x20más\x20rico!',
                        0x9e: 'Disfruta\x20de\x20tu\x201ª\x20OFERTA\x20ESPECIAL\x20y\x20obtén\x20beneficios\x20de\x20compra',
                        0x9f: '¡La\x20primera\x20compra\x20puede\x20obtener\x20un\x20PREMIO\x20adicional!',
                        0xa0: '¡Hola,\x20GANAR!\x20¡Inicie\x20sesión\x20todos\x20los\x20días,\x20compre\x20cualquier\x20producto\x20y\x20descuentos\x20por\x20tiempo\x20limitado!',
                        0xa1: '<b>@player\x20Ganar\x20\x0aGran\x20Premio\x20<color=#FFE100>@coins</color>\x20On\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'Página\x20principal',
                        0xa3: 'Ranura',
                        0xa4: 'Juego\x20multijugador',
                        0xa5: 'Historia',
                        0xa6: 'Cuenta\x20de\x20retiro\x20de\x20enlace\x20para\x20obtener\x20recompensas',
                        0xa7: 'Se\x20abrirá\x20un\x20enlace\x20externo.\x20¿Quieres\x20continuar?',
                        0xa8: 'Pareo...',
                        0xa9: 'เชื่อมโยงที่อยู่อีเมลของคุณเพื่อรับรางวัล',
                        0xaa: 'ผูกหมายเลขโทรศัพท์หรือที่อยู่อีเมลของคุณเพื่อรับรางวัล',
                        0xab: 'กรุณาใส่อีเมลของคุณ',
                        0xac: 'No\x20se\x20encontraron\x20jugadores\x20para\x20emparejamiento',
                        0xad: 'Por\x20debajo\x20de\x20la\x20cantidad\x20mínima\x20requerida',
                        0xae: 'No\x20en\x20la\x20cola\x20de\x20emparejamiento',
                        0xaf: 'Sin\x20información\x20de\x20asiento',
                        0xb0: 'No\x20puedo\x20levantarme'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/gameRichText.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts'], function (b) {
        var d, f, g, j, k, m, q, v, w, x, y, z;
        return {
            'setters': [function (A) {
                d = A['applyDecoratedDescriptor'],
                    f = A['inheritsLoose'],
                    g = A['initializerDefineProperty'],
                    j = A['assertThisInitialized'],
                    k = A['createClass'];
            }
                , function (A) {
                    m = A['cclegacy'],
                        q = A['_decorator'],
                        v = A['RichText'],
                        w = A['Node'],
                        x = A['Component'],
                        y = A['Color'];
                }
                , function (A) {
                    z = A['LanguageManager'];
                }
            ],
            'execute': function () {
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
                    A(Q = a1(Q = B((U = d((S = function (a2) {
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
                        return a4['onLoad'] = function () {
                            this['richText'] = this['getComponent'](v),
                                this['udpateRichText'](),
                                this['node']['on'](w['EventType']['TOUCH_END'], this['onClick'], this);
                        }
                            ,
                            a4['bindClickHandler'] = function (a5, a6) {
                                this['clickHandler'] = function () {
                                    null == a5 || a5['call'](a6);
                                }
                                    ;
                            }
                            ,
                            a4['onClick'] = function () {
                                var a5;
                                null == (a5 = this['clickHandler']) || a5['call'](this);
                            }
                            ,
                            a4['udpateRichText'] = function () {
                                var a5 = z['getLangByTag'](this['key'], this['gameID']['toString']());
                                this['setRichText'](a5);
                            }
                            ,
                            a4['setRichText'] = function (a5, a6, a7) {
                                void 0x0 === a6 && (a6 = this['defalutColor']),
                                    void 0x0 === a7 && (a7 = this['isLine']);
                                var a8 = '<color=#' + a6['toHEX']('#rrggbb') + '>' + a5 + '</color>';
                                a7 && (a8 = '<u>' + a8 + '</u>'),
                                    this['richText']['string'] = a8;
                            }
                            ,
                            k(a3, [{
                                'key': '_key',
                                'get': function () {
                                    return this['key'];
                                },
                                'set': function (a5) {
                                    this['key'] = a5,
                                        this['udpateRichText']();
                                }
                            }, {
                                'key': '_gameID',
                                'get': function () {
                                    return this['gameID'];
                                },
                                'set': function (a5) {
                                    this['gameID'] = a5;
                                }
                            }, {
                                'key': '_color',
                                'get': function () {
                                    return this['defalutColor'];
                                },
                                'set': function (a5) {
                                    this['defalutColor'] = a5,
                                        this['udpateRichText']();
                                }
                            }, {
                                'key': '_isLine',
                                'get': function () {
                                    return this['isLine'];
                                },
                                'set': function (a5) {
                                    this['isLine'] = a5,
                                        this['udpateRichText']();
                                }
                            }]),
                            a3;
                    }(x))['prototype'], 'key', [E], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return '';
                        }
                    }),
                        d(S['prototype'], '_key', [F], Object['getOwnPropertyDescriptor'](S['prototype'], '_key'), S['prototype']),
                        V = d(S['prototype'], 'gameID', [G], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return 0x0;
                            }
                        }),
                        d(S['prototype'], '_gameID', [J], Object['getOwnPropertyDescriptor'](S['prototype'], '_gameID'), S['prototype']),
                        W = d(S['prototype'], 'defalutColor', [K], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return new y(0xff, 0xff, 0xff, 0xff);
                            }
                        }),
                        d(S['prototype'], '_color', [M], Object['getOwnPropertyDescriptor'](S['prototype'], '_color'), S['prototype']),
                        X = d(S['prototype'], 'isLine', [N], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return !0x0;
                            }
                        }),
                        d(S['prototype'], '_isLine', [P], Object['getOwnPropertyDescriptor'](S['prototype'], '_isLine'), S['prototype']),
                        Q = S)) || Q) || Q) || Q)),
                    m['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/httpAccount.ts', ['cc'], function (a) {
        var b, d;
        return {
            'setters': [function (f) {
                b = f['cclegacy'],
                    d = f['_decorator'];
            }
            ],
            'execute': function () {
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
    System['register']('chunks:///_virtual/httpDefine.ts', ['cc', './httpInfo.ts', './httpLogin.ts', './httpRegist.ts', './httpAccount.ts', './Language.ts', './platformData.ts', './gMessageBox.ts', './webGame.ts'], function (b) {
        var d, f, h, j, k, l, m, q, v, w, x;
        return {
            'setters': [function (y) {
                d = y['cclegacy'],
                    f = y['_decorator'];
            }
                , function (y) {
                    h = y['HttpInfo'],
                        j = y['HttpCaptchar'];
                }
                , function (y) {
                    k = y['HttpLogin'];
                }
                , function (y) {
                    l = y['HttpRegist'];
                }
                , function (y) {
                    m = y['HttpAccount'];
                }
                , function (y) {
                    q = y['LanguageManager'];
                }
                , function (y) {
                    v = y['PModuleID'];
                }
                , function (y) {
                    w = y['MsgBoxManager'];
                }
                , function (y) {
                    x = y['webGame'];
                }
            ],
            'execute': function () {
                b('ShowHttpError', function (y, z, A, B) {
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
    System['register']('chunks:///_virtual/httpInfo.ts', ['cc'], function (a) {
        var b, c;
        return {
            'setters': [function (d) {
                b = d['cclegacy'],
                    c = d['_decorator'];
            }
            ],
            'execute': function () {
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
                                'mail': 0x6,
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
    System['register']('chunks:///_virtual/httpLogin.ts', ['cc'], function (a) {
        var b, c;
        return {
            'setters': [function (d) {
                b = d['cclegacy'],
                    c = d['_decorator'];
            }
            ],
            'execute': function () {
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
    System['register']('chunks:///_virtual/httpRegist.ts', ['cc'], function (a) {
        var b, c;
        return {
            'setters': [function (d) {
                b = d['cclegacy'],
                    c = d['_decorator'];
            }
            ],
            'execute': function () {
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
    System['register']('chunks:///_virtual/id.ts', ['cc'], function () {
        var b;
        return {
            'setters': [function (c) {
                b = c['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'Anda\x20perlu\x20mengikat',
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
                        0x42: 'Alamat\x20email\x20saat\x20ini\x20sudah\x20terdaftar\x20dan\x20tidak\x20dapat\x20didaftarkan\x20lagi',
                        0x43: 'Silakan\x20coba\x20lagi\x20nanti.',
                        0x44: 'Data\x20tidak\x20valid,\x20silakan\x20coba\x20lagi\x20nanti',
                        0x45: 'Selamat\x20kepada\x20<color=#FF4600>@player</color>\x20dalam\x20<color=yellow>@game</color>\x20karena\x20memenangkan\x20hadiah\x20<color=#4BFF00>x@multiple</color>\x20dan\x20mendapatkan\x20<color=yellow>@coins</color>\x20Koin.',
                        0x46: 'Selamat\x20kepada\x20<color=#FF4600>%s</color>\x20karena\x20memenangkan\x20Jackpot\x20dalam\x20<color=#4BFF00>%s</color>\x20dan\x20memenangkan\x20<color=yellow>%s</color>\x20Koin.',
                        0x47: 'Kamar',
                        0x48: 'Pemain',
                        0x49: 'Taruhan',
                        0x4a: 'Saldo\x20Min',
                        0x4b: 'Demo',
                        0x4c: 'Utama',
                        0x4d: 'Tuan',
                        0x4e: 'Raja',
                        0x4f: 'Epik',
                        0x50: 'Legenda',
                        0x51: 'Vip',
                        0x52: 'Kamar',
                        0x53: 'Bermain',
                        0x54: 'Setiap',
                        0x55: 'Berhenti',
                        0x56: 'Keluar',
                        0x57: 'Tips',
                        0x58: 'Koneksi\x20server\x20gagal,\x20silakan\x20coba\x20lagi\x20nanti',
                        0x59: 'Sistem\x20meminta\x20Anda\x20untuk\x20pergi,\x20silakan\x20masuk\x20ke\x20game\x20nanti',
                        0x5a: 'Akun\x20ini\x20masuk\x20dari\x20perangkat\x20lain,\x20harap\x20perhatikan\x20keamanan\x20akun',
                        0x5b: 'Game\x20Anda\x20dalam%\x20s\x20belum\x20berakhir,\x20silakan\x20kembali\x20dan\x20mainkan',
                        0x5c: 'Pendaftaran\x20akun\x20sudah\x20ada.',
                        0x5d: 'Perangkat\x20akun\x20tamu\x20tidak\x20boleh\x20kosong.',
                        0x5e: 'Akun\x20tidak\x20ada.',
                        0x5f: 'Kata\x20sandi\x20salah.',
                        0x60: 'Akun\x20ini\x20telah\x20ditangguhkan.',
                        0x61: 'Pengecualian\x20login\x20tamu,\x20silakan\x20coba\x20lagi.',
                        0x62: 'Login\x20pengecualian\x207,\x20silakan\x20coba\x20lagi.',
                        0x63: 'Sistem\x20dalam\x20pemeliharaan,\x20silakan\x20coba\x20lagi\x20nanti.',
                        0x64: 'Ubah\x20Sandi',
                        0x65: 'Mengunduh',
                        0x66: 'Untuk\x20pengalaman\x20Anda\x20yang\x20lebih\x20baik,\x20silakan\x20Unduh\x20Game.',
                        0x67: 'Untuk\x20pengalaman\x20Anda\x20yang\x20lebih\x20baik,\x20silakan\x20Unduh\x20Gamenya.\x20Instal\x20sekarang\x20dan\x20dapatkan\x20hadiahnya!',
                        0x68: 'Terima\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Terms\x20Of\x20Service</on></u></color>\x20dan\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privasi\x20&Kebijakan</on></u></color>',
                        0x69: 'Ikat\x20nomor\x20ponseln\x20untuk\x20mendapatkan\x20hadiah',
                        0x6a: 'Mengikat',
                        0x6b: 'Maaf,\x20persyaratan\x20VIP\x20tidak\x20terpenuhi,\x20semakin\x20banyak\x20koin,\x20semakin\x20tinggi\x20VIP,\x20pergi\x20ke\x20toko\x20untuk\x20mengisi\x20ulang',
                        0x6c: 'Maaf,\x20Anda\x20tidak\x20memenuhi\x20persyaratan\x20masuk,\x20apakah\x20Anda\x20ingin\x20pergi\x20ke\x20toko\x20untuk\x20membelinya?',
                        0x6d: 'Ketuk\x20<img\x20src=\x27share\x27\x20/>\x20dan\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home\x20Screen</color></b>\x20untuk\x20memutar\x20kapan\x20pun\x20Anda\x20mau',
                        0x6e: 'Ketuk\x20<img\x20src=\x27share\x27\x20/>\x20dan\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home\x20Screen</color></b>\x20untuk\x20memutar\x20kapan\x20pun\x20Anda\x20mau',
                        0x6f: 'Peringatan',
                        0x70: 'Demi\x20keamanan\x20data\x20game\x20Anda,\x20sangat\x20disarankan\x20agar\x20Anda\x20mendaftar\x20sebagai\x20akun\x20resmi',
                        0x71: 'Pesan\x20terkirim',
                        0x72: 'Klaim\x20hadiah\x20selesai',
                        0x73: 'Dinas',
                        0x74: 'Mengatur',
                        0x75: 'Check-in',
                        0x76: 'Rolet',
                        0x77: 'Hadiah',
                        0x78: 'Gratia',
                        0x79: 'Diundang',
                        0x7a: 'Bonus',
                        0x7b: 'Semua',
                        0x7c: 'Populer',
                        0x7d: 'Slots',
                        0x7e: 'Poker',
                        0x7f: 'Status\x20jaringan\x20buruk',
                        0x80: 'Gratis\x20Tunai',
                        0x81: 'Membeli',
                        0x82: 'Versi\x20baru\x20ditemukan.\x20Apakah\x20Anda\x20ingin\x20menyegarkannya?',
                        0x83: 'Acara\x20telah\x20ditutup\x20dan\x20jumlah\x20pembelian\x20telah\x20dikembalikan',
                        0x84: 'BUY\x20COIN',
                        0x85: 'Anda\x20belum\x20masuk,\x20silakan\x20keluar\x20dan\x20coba\x20lagi',
                        0x86: 'Jika\x20autentikasi\x20gagal,\x20keluar\x20dan\x20coba\x20lagi',
                        0x87: 'Ruang\x20permainan\x20tidak\x20valid,\x20coba\x20yang\x20lain',
                        0x88: 'Kamar\x20tertutup,\x20coba\x20yang\x20lain',
                        0x89: 'Tugas',
                        0x8a: 'Saatnya\x20memainkan\x20Slot\x20BARU',
                        0x8b: 'Dapatkan\x20Koin\x20GRATIS\x20dengan\x20masuk\x20setiap\x20hari!',
                        0x8c: 'Roulette\x20Keberuntungan!\x20Tingkat\x20kemenangan\x20100%\x20dijamin!\x20Datang\x20dan\x20dapatkan\x20hadiah\x20Anda!',
                        0x8d: 'Tantangan\x20eksklusif\x20baru\x20untuk\x20koin\x20besar!',
                        0x8e: 'Slot\x20dan\x20fitur\x20luar\x20biasa!',
                        0x8f: 'Anda\x20Dapat\x20Menerima\x20Bonus\x20Spesial',
                        0x90: 'KEKUATAN\x20VIP\x20Lebih\x20Tinggi,\x20Lebih\x20Banyak\x20Manfaat!',
                        0x91: 'Putar\x20SLOT\x20BARU,\x20Semoga\x20beruntung\x20menyertai\x20Anda!',
                        0x92: 'HARI\x20RODA\x20KEBERUNTUNGAN,\x20PENGGANDA\x20RODA\x20EMAS!',
                        0x93: 'BONUS\x20KEJUTAN,\x20Ayo\x20kumpulkan\x20koinmu',
                        0x94: 'Putaran\x20lebih\x20cepat\x20&\x20HADIAH\x20LEBIH\x20BESAR!',
                        0x95: 'MEGA\x20REWARD\x20sudah\x20siap,\x20PUTAR\x20SEKARANG!',
                        0x96: 'Ketuk\x20dan\x20kumpulkan\x20chip\x20gratis\x20Anda\x20sekarang!',
                        0x97: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Peluang\x20NAIK!!!Bonus\x20tak\x20terbatas\x20di\x20semua\x20paket',
                        0x98: 'Mainkan\x20sekarang\x20untuk\x20menikmati\x20suguhan\x20dan\x20misi\x20khusus',
                        0x99: 'Undang\x20teman,\x20jadilah\x20BOSS\x20mereka!\x20Koin\x20besar\x20Gratis',
                        0x9a: 'Bagikan\x20ke\x20teman\x20Anda,\x20dapatkan\x20hadiah\x20Eksklusif',
                        0x9b: 'Hadiah\x20besar\x20untuk\x20Berbagi,\x20Lebih\x20Banyak\x20Undang\x20lebih\x20banyak\x20hadiah',
                        0x9c: 'Bermain\x20dengan\x20teman,\x20Hadiah\x20gratis\x20setiap\x20hari!',
                        0x9d: 'BONUS\x20KEBERUNTUNGAN,\x20Kesempatan\x20menjadi\x20yang\x20terkaya!',
                        0x9e: 'Nikmati\x20PENAWARAN\x20KHUSUS\x20pertama\x20Anda,\x20dan\x20dapatkan\x20keuntungan\x20pembelian',
                        0x9f: 'Pembelian\x20pertama\x20bisa\x20mendapatkan\x20HADIAH\x20tambahan!',
                        0xa0: 'HalloWIN!Masuk\x20setiap\x20hari,\x20beli\x20barang\x20apa\x20saja\x20dan\x20diskon\x20terbatas\x20waktu!',
                        0xa1: '<b>@player\x20menang\x20\x0aJackpot\x20<color=#FFE100>@coins</color>\x20pada\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'Rumah',
                        0xa3: 'Slot',
                        0xa4: 'Multiplayer',
                        0xa5: 'Sejarah',
                        0xa6: 'Mengikat\x20akun\x20penarikan\x20untuk\x20mendapatkan\x20hadiah',
                        0xa7: 'Tautan\x20eksternal\x20akan\x20segera\x20dibuka.\x20Apakah\x20Anda\x20ingin\x20melanjutkan?',
                        0xa8: 'Cocok...',
                        0xa9: 'Hubungkan\x20alamat\x20email\x20Anda\x20untuk\x20mendapatkan\x20hadiah',
                        0xaa: 'Hubungkan\x20nomor\x20ponsel\x20atau\x20alamat\x20email\x20Anda\x20untuk\x20mendapatkan\x20hadiah',
                        0xab: 'Silakan\x20masukkan\x20Email\x20Anda',
                        0xac: 'Tidak\x20ada\x20pemain\x20yang\x20ditemukan\x20untuk\x20pencocokan',
                        0xad: 'Di\x20bawah\x20jumlah\x20minimum\x20yang\x20diperlukan',
                        0xae: 'Tidak\x20dalam\x20antrean\x20pencocokan',
                        0xaf: 'Tidak\x20ada\x20informasi\x20kursi',
                        0xb0: 'Tidak\x20bisa\x20berdiri'
                    },
                    b['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/inputAccount.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './inputPhone.ts', './clearInput.ts', './dropdown.ts', './lobbyState.ts', './Language.ts'], function (b) {
        var d, f, j, k, m, q, v, w, x, z, B, C, D, E, F;
        return {
            'setters': [function (G) {
                d = G['applyDecoratedDescriptor'],
                    f = G['inheritsLoose'],
                    j = G['initializerDefineProperty'],
                    k = G['assertThisInitialized'],
                    m = G['createClass'];
            }
                , function (G) {
                    q = G['cclegacy'],
                        v = G['_decorator'],
                        w = G['Label'],
                        x = G['EditBox'],
                        z = G['Component'];
                }
                , function (G) {
                    B = G['inputPhone'];
                }
                , function (G) {
                    C = G['clearInput'];
                }
                , function (G) {
                    D = G['dropdown'];
                }
                , function (G) {
                    E = G['SupportAccountType'];
                }
                , function (G) {
                    F = G['LanguageManager'];
                }
            ],
            'execute': function () {
                var G, H, J, K, M, N, O, Q, R, S, U;
                q['_RF']['push']({}, '5ade368TbJG06tPA24Yu0Oh', 'inputAccount', void 0x0);
                var V = v['ccclass']
                    , W = v['property'];
                b('inputAccount', (G = V('inputAccount'),
                    H = W(w),
                    J = W(D),
                    K = W(B),
                    M = W(C),
                    G((Q = d((O = function (X) {
                        function Y() {
                            for (var a0, a1, a2 = arguments['length'], a3 = new Array(a2), a4 = 0x0; a4 < a2; a4++)
                                a3[a4] = arguments[a4];
                            return a1 = X['call']['apply'](X, [this]['concat'](a3)) || this,
                                j(a1, 'tagAccount', Q, k(a1)),
                                j(a1, 'dropAccount', R, k(a1)),
                                j(a1, 'inPhone', S, k(a1)),
                                j(a1, 'inEmail', U, k(a1)),
                                a1['curAccountType'] = -0x1,
                                a1['AccountTypeText'] = ((a0 = {})[E['Phone']] = F['getLangByTag']('tag_phone'),
                                    a0[E['Email']] = F['getLangByTag']('str_email'),
                                    a0),
                                a1['onChooseAccountType'] = null,
                                a1['supportAccountTypes'] = null,
                                a1;
                        }
                        f(Y, X);
                        var Z = Y['prototype'];
                        return Z['onDropAccountChange'] = function (a0) {
                            var a1 = this['supportAccountTypes'][a0];
                            this['setShowAccountType'](a1);
                        }
                            ,
                            Z['setShowAccountType'] = function (a0) {
                                var a1;
                                this['curAccountType'] = a0,
                                    this['inPhone']['node']['active'] = a0 == E['Phone'],
                                    this['inEmail']['node']['active'] = a0 == E['Email'],
                                    null == (a1 = this['onChooseAccountType']) || a1['call'](this, a0);
                            }
                            ,
                            Z['start'] = function () {
                                this['dropAccount']['setValueChangedListener'](this['onDropAccountChange']['bind'](this)),
                                    this['inEmail']['Input']['inputMode'] = x['InputMode']['EMAIL_ADDR'],
                                    this['inEmail']['Input']['maxLength'] = 0x40;
                            }
                            ,
                            Z['setSupportType'] = function (a0, a1) {
                                this['supportAccountTypes'] = a0,
                                    a0['includes'](a1) || (a1 = a0[0x0]);
                                var a2 = 0x1 == a0['length'];
                                if (this['dropAccount']['node']['active'] = !a2,
                                    this['tagAccount']['node']['active'] = a2,
                                    a2)
                                    this['setTagAccountLable'](this['AccountTypeText'][a1]);
                                else {
                                    for (var a3 = [], a4 = 0x0; a4 < a0['length']; a4++) {
                                        var a5 = a0[a4];
                                        this['setTagAccountLable'](this['AccountTypeText'][a1]);
                                        var a6 = this['AccountTypeText'][a5];
                                        a6 ? a3['push'](a6) : console['warn']('not\x20find\x20type\x20in\x20AccountTypeText', a5);
                                    }
                                    var a7 = this['supportAccountTypes']['indexOf'](a1);
                                    console['log']('showIndex', a7),
                                        this['dropAccount']['clearOptions'](),
                                        this['dropAccount']['addOptions'](a3),
                                        this['dropAccount']['Value'] = a7;
                                }
                                this['setShowAccountType'](a1);
                            }
                            ,
                            Z['setTagAccountLable'] = function (a0) {
                                this['tagAccount']['string'] = a0;
                            }
                            ,
                            Z['refresh'] = function (a0, a1, a2, a3) {
                                a0 == E['Phone'] ? this['inPhone']['reset'](a2, a3, a1) : a0 == E['Email'] && this['inEmail']['setInput'](a1);
                            }
                            ,
                            m(Y, [{
                                'key': 'CurAccountType',
                                'get': function () {
                                    return this['curAccountType'];
                                }
                            }, {
                                'key': 'areaCode',
                                'get': function () {
                                    return this['inPhone']['areaCode'];
                                }
                            }, {
                                'key': 'phone',
                                'get': function () {
                                    return this['inPhone']['phone'];
                                }
                            }, {
                                'key': 'email',
                                'get': function () {
                                    return this['inEmail']['String'];
                                }
                            }, {
                                'key': 'Account',
                                'get': function () {
                                    return this['CurAccountType'] == E['Phone'] ? this['phone'] : this['email'];
                                }
                            }]),
                            Y;
                    }(z))['prototype'], 'tagAccount', [H], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        R = d(O['prototype'], 'dropAccount', [J], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        S = d(O['prototype'], 'inPhone', [K], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        U = d(O['prototype'], 'inEmail', [M], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        N = O)) || N)),
                    q['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/inputPhone.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './dropdown.ts', './utils.ts', './clearInput.ts'], function (b) {
        var d, f, g, j, k, m, q, v, w, x, y, z;
        return {
            'setters': [function (A) {
                d = A['applyDecoratedDescriptor'],
                    f = A['inheritsLoose'],
                    g = A['initializerDefineProperty'],
                    j = A['assertThisInitialized'],
                    k = A['createClass'];
            }
                , function (A) {
                    m = A['cclegacy'],
                        q = A['_decorator'],
                        v = A['EditBox'],
                        w = A['Component'];
                }
                , function (A) {
                    x = A['dropdown'];
                }
                , function (A) {
                    y = A['utils'];
                }
                , function (A) {
                    z = A['clearInput'];
                }
            ],
            'execute': function () {
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
                    A((G = d((F = function (N) {
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
                        return Q['onLoad'] = function () {
                            this['inputPhone']['Input']['inputMode'] = v['InputMode']['PHONE_NUMBER'],
                                this['maxLength'] = Math['max'](0xa, this['maxLength']),
                                this['inputPhone']['Input']['maxLength'] = this['maxLength'];
                        }
                            ,
                            Q['reset'] = function (R, S, T, U) {
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
                            Q['setInputEnable'] = function (R) {
                                this['dropdownArea']['setEnable'](R),
                                    this['inputPhone']['Input']['enabled'] = R;
                            }
                            ,
                            k(O, [{
                                'key': 'areaCode',
                                'get': function () {
                                    return this['dropdownArea']['optionString'];
                                }
                            }, {
                                'key': 'phone',
                                'get': function () {
                                    return this['inputPhone']['Input']['string'];
                                }
                            }]),
                            O;
                    }(w))['prototype'], 'dropdownArea', [B], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        H = d(F['prototype'], 'inputPhone', [C], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        J = d(F['prototype'], 'maxLength', [D], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return 0xf;
                            }
                        }),
                        E = F)) || E)),
                    m['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/jackpot.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './webGame.ts', './lobbyState.ts', './Oops.ts', './GameUIConfig.ts', './Language.ts', './platformData.ts', './GameListConfig.ts', './utils.ts'], function (b) {
        var j, q, w, x, y, z, A, C, D, E, F, G, H, J, K, L, M, N, O, P;
        return {
            'setters': [function (Q) {
                j = Q['createClass'];
            }
                , function (Q) {
                    q = Q['cclegacy'],
                        w = Q['_decorator'],
                        x = Q['UITransform'],
                        y = Q['Widget'],
                        z = Q['RichText'],
                        A = Q['sp'],
                        C = Q['Sprite'],
                        D = Q['Button'],
                        E = Q['tween'],
                        F = Q['Prefab'],
                        G = Q['Vec2'];
                }
                , function (Q) {
                    H = Q['webGame'];
                }
                , function (Q) {
                    J = Q['lobbyState'];
                }
                , function (Q) {
                    K = Q['oops'];
                }
                , function (Q) {
                    L = Q['UIID'];
                }
                , function (Q) {
                    M = Q['LanguageManager'];
                }
                , function (Q) {
                    N = Q['PModuleID'];
                }
                , function (Q) {
                    O = Q['GameBaseInfo'];
                }
                , function (Q) {
                    P = Q['utils'];
                }
            ],
            'execute': function () {
                var Q, R;
                q['_RF']['push']({}, '5431fmFxEJFkLGpiZOpOHdF', 'jackpot', void 0x0);
                var S = w['ccclass'];
                w['property'],
                    b('jackpot', S('jackpot')(((R = (function () {
                        function U() {
                            this['gameNode'] = null,
                                this['jackpotyUIWidget'] = null,
                                this['jackpotUITrans'] = null,
                                this['rtContent'] = null,
                                this['spIcon'] = null,
                                this['spGameName'] = null,
                                this['btnJackpot'] = null,
                                this['bInit'] = !0x1,
                                this['lastTime'] = 0x0,
                                this['stopTime'] = 0x1e,
                                this['bShowTrueJackpot'] = !0x1,
                                this['zoomMultiple'] = new G(0x5, 0xa),
                                this['zoomCoins'] = new G(0x32, 0x96),
                                this['broadcastQueue'] = [],
                                this['moveTime'] = 0x1,
                                this['playTime'] = 0x5,
                                this['moveBroadcastTwer'] = void 0x0;
                        }
                        var V = U['prototype'];
                        return V['init'] = function () {
                            var W = this;
                            if (!this['bInit']) {
                                var X = {
                                    'onAdded': function (Y, Z) {
                                        W['bindGameNode'](Y),
                                            W['openBroadcast'](!0x0),
                                            W['resetWidget'](!0x0, new G(0x384, 0xc8), new G(-0x28a, 0x50));
                                    }
                                };
                                K['gui']['open'](L['jackpot'], null, X),
                                    this['bInit'] = !0x0;
                            }
                        }
                            ,
                            V['bindGameNode'] = function (W) {
                                if (null != W) {
                                    if (this['IsBindNode'])
                                        return H['log']['logBusiness']('jackpot\x20bindGameObject\x20gameNode\x20is\x20not\x20null'),
                                            void W['destroy']();
                                    this['gameNode'] = W,
                                        this['jackpotUITrans'] = this['gameNode']['getComponent'](x),
                                        this['jackpotyUIWidget'] = this['gameNode']['getComponent'](y),
                                        this['rtContent'] = this['gameNode']['getComponentInChildren'](z),
                                        this['spIcon'] = this['gameNode']['getChildByName']('sp_icon')['getComponent'](A['Skeleton']),
                                        this['spGameName'] = this['gameNode']['getChildByName']('sp_name')['getComponent'](C),
                                        this['btnJackpot'] = this['gameNode']['getComponentInChildren'](D),
                                        P['ButtonBindClick'](this['btnJackpot'], this['onBtnJackpot'], this),
                                        this['addListener']();
                                } else
                                    H['log']['logBusiness']('jackpot\x20bindGameNode\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['addListener'] = function () { }
                            ,
                            V['removeListener'] = function () { }
                            ,
                            V['onBtnJackpot'] = function () {
                                this['broadcastQueue'] = [],
                                    null != this['moveBroadcastTwer'] && (this['moveBroadcastTwer']['stop'](),
                                        this['moveBroadcastTwer'] = null,
                                        this['closeMove']()),
                                    this['lastTime'] = Date['now']();
                            }
                            ,
                            V['checkIsStopJackpot'] = function () {
                                if (0x0 == this['lastTime'])
                                    return !0x0;
                                var W = this['lastTime'] / 0x3e8;
                                return Date['now']() / 0x3e8 - W >= this['stopTime'] && (this['lastTime'] = 0x0,
                                    !0x0);
                            }
                            ,
                            V['resetWidget'] = function (W, X, Y) {
                                this['IsBindNode'] ? (this['jackpotyUIWidget']['top'] = Y['y'],
                                    this['jackpotyUIWidget']['right'] = Y['x'],
                                    this['jackpotyUIWidget']['updateAlignment'](),
                                    this['jackpotUITrans']['width'] = X['x'],
                                    this['jackpotUITrans']['height'] = X['y']) : H['log']['logBusiness']('jackpot\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['pushWinner'] = function (W, X) {
                                var Y = this;
                                if (void 0x0 === X && (X = !0x0),
                                    0x0 != this['checkIsStopJackpot']()) {
                                    if (this['IsBindNode']) {
                                        if (null != W && 0x0 != W['length']) {
                                            var Z = [];
                                            W['forEach'](function (a0) {
                                                var a1 = Y['buildWinnerMessage'](a0)
                                                    , a2 = a0['gameId'];
                                                a1 && Z['push']({
                                                    'gameId': a2,
                                                    'content': a1,
                                                    'loop': 0x1
                                                });
                                            }),
                                                this['insertBroadcast'](Z, X);
                                        } else
                                            H['log']['logBusiness']('jackpot\x20pushWinner\x20messages\x20is\x20null');
                                    } else
                                        H['log']['logBusiness']('jackpot\x20gameNode\x20is\x20null');
                                }
                            }
                            ,
                            V['openBroadcast'] = function (W) {
                                this['IsBindNode'] ? (this['gameNode']['active'] = W,
                                    W ? this['playBroadcast']() : this['resetMove']()) : H['log']['logBusiness']('jackpot\x20showBroadcast\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['buildWinnerMessage'] = function (W) {
                                var X = W['winScore'];
                                if (null == X || X <= 0x0 || null == O[W['gameId']] || !O[W['gameId']]['open'])
                                    return null;
                                var Y = J['Instance']['PlayerBaseInfo']
                                    , Z = this['mixPlayerName'](W['userName'])
                                    , a0 = 0x1 == W['type'];
                                if (!(Y['name'] == Z || a0 && this['bShowTrueJackpot'])) {
                                    var a1 = Math['floor'](Math['random']() * (this['zoomCoins']['y'] - this['zoomCoins']['x'])) + this['zoomCoins']['x'];
                                    X *= a1 *= 0xa / H['TranslateRate'],
                                        X -= X % 0x64;
                                }
                                var a2 = M['getLangByTag']('name_' + W['gameId']);
                                return this['fmtWinnerMsg'](Z, a2, X);
                            }
                            ,
                            V['fmtWinnerMsg'] = function (W, X, Y, Z) {
                                var a0 = H['FormatCoins'](Y);
                                return M['getLangByTag']('FtJPWinnerInfo', N['lobby'])['replace']('@player', W)['replace']('@coins', a0)['replace']('@game', X);
                            }
                            ,
                            V['mixPlayerName'] = function (W) {
                                if (null == W || W['length'] <= 0x3)
                                    return 'player***';
                                var X = W['substring'](0x0, 0x2);
                                return X += '***',
                                    W['length'] > 0x5 && (X += W['substring'](W['length'] - 0x1)),
                                    X;
                            }
                            ,
                            V['insertBroadcast'] = function (W, X) {
                                var Y;
                                void 0x0 === X && (X = !0x0),
                                    (Y = this['broadcastQueue'])['push']['apply'](Y, W),
                                    null == this['moveBroadcastTwer'] && X && this['openBroadcast'](!0x0);
                            }
                            ,
                            V['openMove'] = function () {
                                var W = this;
                                this['moveBroadcastTwer'] = E(this['jackpotyUIWidget'])['to'](this['moveTime'], {
                                    'right': -0x82
                                }, {
                                    'easing': 'linear'
                                })['call'](function () {
                                    W['continued']();
                                })['start']();
                            }
                            ,
                            V['continued'] = function () {
                                var W = this;
                                this['moveBroadcastTwer'] = E(this['jackpotyUIWidget'])['to'](this['playTime'], {
                                    'right': -0x82
                                }, {
                                    'easing': 'linear'
                                })['call'](function () {
                                    W['closeMove']();
                                })['start']();
                            }
                            ,
                            V['closeMove'] = function () {
                                var W = this;
                                this['moveBroadcastTwer'] = E(this['jackpotyUIWidget'])['to'](this['moveTime'], {
                                    'right': -0x28a
                                }, {
                                    'easing': 'linear'
                                })['call'](function () {
                                    W['playBroadcast']();
                                })['start']();
                            }
                            ,
                            V['tryStopMove'] = function () {
                                null != this['moveBroadcastTwer'] && (this['moveBroadcastTwer']['stop'](),
                                    this['moveBroadcastTwer'] = null);
                            }
                            ,
                            V['resetMove'] = function () {
                                null != this['moveBroadcastTwer'] && (this['moveBroadcastTwer']['stop'](),
                                    this['moveBroadcastTwer'] = null),
                                    this['jackpotyUIWidget']['right'] = -0x28a;
                            }
                            ,
                            V['playBroadcast'] = function () {
                                var W = this;
                                if (0x0 != this['broadcastQueue']['length']) {
                                    if (this['IsBindNode']) {
                                        this['openMove']();
                                        var X = this['broadcastQueue']['shift']();
                                        this['rtContent']['string'] = X['content'];
                                        var Y = X['gameId']
                                            , Z = Y % 0xa == 0x0 ? 0x0 : 0xa
                                            , a0 = 'icons_' + (0xa * Math['floor'](Y / 0xa) + Z)
                                            , a1 = 'icon_' + Y;
                                        K['res']['load'](a0, a1, F, function (a4, a5) {
                                            a4 || (W['spIcon']['skeletonData'] = a5['data']['getComponent'](A['Skeleton'])['skeletonData']);
                                        });
                                        var a2 = 'Name_' + Y
                                            , a3 = N['lobby']['toString']();
                                        M['getLanSprite'](a2, function (a4, a5) {
                                            W['spGameName']['spriteFrame'] = null == a4 ? a5 : null;
                                        }, a3, 'content/sprite/lan'),
                                            X['loop'] > 0x1 && (X['loop']--,
                                                this['broadcastQueue']['push'](X));
                                    } else
                                        H['log']['logBusiness']('jackpot\x20playBroadcast\x20gameNode\x20is\x20null');
                                } else
                                    this['openBroadcast'](!0x1);
                            }
                            ,
                            V['dispose'] = function () {
                                this['openBroadcast'](!0x1),
                                    this['gameNode']['destroy'](),
                                    this['removeListener'](),
                                    U['_instance'] = null;
                            }
                            ,
                            j(U, [{
                                'key': 'IsBindNode',
                                'get': function () {
                                    return null != this['gameNode'];
                                }
                            }], [{
                                'key': 'instance',
                                'get': function () {
                                    return null == U['_instance'] && (U['_instance'] = new U()),
                                        U['_instance'];
                                }
                            }]),
                            U;
                    }()))['_instance'] = null,
                        Q = R)) || Q),
                    q['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/LabelToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (b) {
        var d, f, g, h, j, k, m, p, q;
        return {
            'setters': [function (u) {
                d = u['applyDecoratedDescriptor'],
                    f = u['inheritsLoose'],
                    g = u['initializerDefineProperty'],
                    h = u['assertThisInitialized'];
            }
                , function (u) {
                    j = u['cclegacy'],
                        k = u['_decorator'],
                        m = u['Label'],
                        p = u['Color'],
                        q = u['Toggle'];
                }
            ],
            'execute': function () {
                var w, x, z, A, B, C, D, E, F;
                j['_RF']['push']({}, '0176eMPvxNEtKE2vazRXcTb', 'LabelToggle', void 0x0);
                var G = k['ccclass']
                    , H = k['property'];
                b('LabelToggle', (w = G('LabelToggle'),
                    x = H(m),
                    z = H(p),
                    A = H(p),
                    w((D = d((C = function (I) {
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
                        return K['setLabel'] = function (M) {
                            this['lb_tag']['string'] = M;
                        }
                            ,
                            K['playEffect'] = function () {
                                I['prototype']['playEffect']['call'](this),
                                    this['onCheckChange'](this['isChecked']);
                            }
                            ,
                            K['onCheckChange'] = function (M) {
                                var N = M ? this['color_selected'] : this['color_normal'];
                                this['lb_tag'] && (this['lb_tag']['color'] = N);
                            }
                            ,
                            K['show'] = function (M) {
                                this['node']['active'] = M;
                            }
                            ,
                            K['clear'] = function () {
                                this['node']['off'](q['EventType']['TOGGLE']);
                            }
                            ,
                            J;
                    }(q))['prototype'], 'lb_tag', [x], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        E = d(C['prototype'], 'color_normal', [z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        F = d(C['prototype'], 'color_selected', [A], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        B = C)) || B)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyBottom.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyConfig.ts', './utils.ts', './baseView.ts', './platformData.ts', './lobbyState.ts', './webGame.ts', './Language.ts'], function (d) {
        var g, h, j, k, q, v, w, x, z, A, B, C, D, E, F;
        return {
            'setters': [function (G) {
                g = G['applyDecoratedDescriptor'],
                    h = G['inheritsLoose'],
                    j = G['initializerDefineProperty'],
                    k = G['assertThisInitialized'];
            }
                , function (G) {
                    q = G['cclegacy'],
                        v = G['_decorator'],
                        w = G['Button'];
                }
                , function (G) {
                    x = G['Lobby'];
                }
                , function (G) {
                    z = G['utils'];
                }
                , function (G) {
                    A = G['baseView'];
                }
                , function (G) {
                    B = G['PModuleID'];
                }
                , function (G) {
                    C = G['lobbyState'],
                        D = G['ServerRegType'];
                }
                , function (G) {
                    E = G['webGame'];
                }
                , function (G) {
                    F = G['LanguageManager'];
                }
            ],
            'execute': function () {
                var G, H, J, K, N, O, Q, U, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6;
                q['_RF']['push']({}, '907c0HML6tGiq+kPJr5ZpqX', 'lobbyBottom', void 0x0);
                var a7 = v['ccclass']
                    , a8 = v['property'];
                d('lobbyBottom', (G = a7('lobbyBottom'),
                    H = a8({
                        'type': w,
                        'tooltip': 'vip'
                    }),
                    J = a8({
                        'type': w,
                        'tooltip': '保险箱'
                    }),
                    K = a8({
                        'type': w,
                        'tooltip': '邮件'
                    }),
                    N = a8({
                        'type': w,
                        'tooltip': '活动'
                    }),
                    O = a8({
                        'type': w,
                        'tooltip': '排行榜'
                    }),
                    Q = a8({
                        'type': w,
                        'tooltip': '代理'
                    }),
                    U = a8({
                        'type': w,
                        'tooltip': '商店'
                    }),
                    W = a8({
                        'type': w,
                        'tooltip': 'recycle'
                    }),
                    G((Z = g((Y = function (a9) {
                        function aa() {
                            for (var ac, ad = arguments['length'], ae = new Array(ad), af = 0x0; af < ad; af++)
                                ae[af] = arguments[af];
                            return ac = a9['call']['apply'](a9, [this]['concat'](ae)) || this,
                                j(ac, 'btnVIP', Z, k(ac)),
                                j(ac, 'btnSafeBox', a0, k(ac)),
                                j(ac, 'btnMail', a1, k(ac)),
                                j(ac, 'btnEvent', a2, k(ac)),
                                j(ac, 'btnRank', a3, k(ac)),
                                j(ac, 'btnPromote', a4, k(ac)),
                                j(ac, 'btnStore', a5, k(ac)),
                                j(ac, 'btnRecycle', a6, k(ac)),
                                ac;
                        }
                        h(aa, a9);
                        var ab = aa['prototype'];
                        return ab['onInit'] = function () {
                            z['ButtonBindClick'](this['btnRecycle'], this['onClickRecycle'], this),
                                z['ButtonBindClick'](this['btnVIP'], this['onClickVIP'], this),
                                z['ButtonBindClick'](this['btnSafeBox'], this['onClickSafeBox'], this),
                                z['ButtonBindClick'](this['btnMail'], this['onClickMail'], this),
                                z['ButtonBindClick'](this['btnEvent'], this['onClickEvent'], this),
                                z['ButtonBindClick'](this['btnRank'], this['onClickRank'], this),
                                z['ButtonBindClick'](this['btnPromote'], this['onClickPromote'], this),
                                z['ButtonBindClick'](this['btnStore'], this['onClickStore'], this);
                        }
                            ,
                            ab['onClickRecycle'] = function (ignorePhone = true) {
                                var ac = C['Instance']['Server']['bBindEmail']
                                    , ad = C['Instance']['Server']['bindmobilewithdraw']
                                    , ae = C['Instance']['Player']['email'];
                                if (C['Instance']['Player']['regtype'] == D['guest'] && !ignorePhone) {
                                    var af = F['getLangByTag']('http_error_127', B['lobby']);
                                    E['toast'](af),
                                        this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['profile'], 0x1);
                                } else {
                                    if (ignorePhone) {
                                        E['toast']("☠️ Vinculação de telefone desativada ")
                                    }
                                    if (ac && z['StringIsNullOrEmpty'](ae)) {
                                        var ag = F['getLangByTag']('http_error_108', B['lobby']);
                                        E['toast'](ag),
                                            this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['profile'], 0x2);
                                    } else
                                        this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['recycle']);
                                }
                            }
                            ,
                            ab['onClickVIP'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['vip']);
                            }
                            ,
                            ab['onClickSafeBox'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['safe']);
                            }
                            ,
                            ab['onClickMail'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['mail']);
                            }
                            ,
                            ab['onClickEvent'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['activity']);
                            }
                            ,
                            ab['onClickRank'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['rank']);
                            }
                            ,
                            ab['onClickPromote'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['agent']);
                            }
                            ,
                            ab['onClickStore'] = function () {
                                this['Call'](x['modID']['root'], x['msgID']['enterLobbyMod'], B['store']);
                            }
                            ,
                            aa;
                    }(A))['prototype'], 'btnVIP', [H], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a0 = g(Y['prototype'], 'btnSafeBox', [J], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a1 = g(Y['prototype'], 'btnMail', [K], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a2 = g(Y['prototype'], 'btnEvent', [N], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a3 = g(Y['prototype'], 'btnRank', [O], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a4 = g(Y['prototype'], 'btnPromote', [Q], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = g(Y['prototype'], 'btnStore', [U], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = g(Y['prototype'], 'btnRecycle', [W], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        X = Y)) || X)),
                    q['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyConfig.ts', ['cc', './platformData.ts'], function (b) {
        var c, d, f;
        return {
            'setters': [function (g) {
                c = g['cclegacy'],
                    d = g['_decorator'];
            }
                , function (g) {
                    f = g['PModuleID'];
                }
            ],
            'execute': function () {
                var g, h;
                b('Lobby', void 0x0),
                    c['_RF']['push']({}, 'aa325x+MWdNbYxiki5GBawe', 'lobbyConfig', void 0x0),
                    (d['ccclass'],
                        d['property']);
                var j, k, q = function (B) {
                    return B[B['root'] = 0x0] = 'root',
                        B[B['view'] = 0x1] = 'view',
                        B[B['top'] = 0x2] = 'top',
                        B[B['bottom'] = 0x3] = 'bottom',
                        B[B['gameList'] = 0x4] = 'gameList',
                        B[B['gameRooms'] = 0x5] = 'gameRooms',
                        B[B['bindTip'] = 0x6] = 'bindTip',
                        B[B['downloadTip'] = 0x7] = 'downloadTip',
                        B[B['bindCardTip'] = 0x8] = 'bindCardTip',
                        B;
                }(q || {}), v = function (B) {
                    return B[B['enterLobbyMod'] = 0x0] = 'enterLobbyMod',
                        B[B['reqGameRooms'] = 0x1] = 'reqGameRooms',
                        B[B['reqEntetRoom'] = 0x2] = 'reqEntetRoom',
                        B[B['reqDeleteGame'] = 0x3] = 'reqDeleteGame',
                        B[B['showBindTip'] = 0x4] = 'showBindTip',
                        B[B['saveSortGameData'] = 0x5] = 'saveSortGameData',
                        B[B['showBindCardTip'] = 0x6] = 'showBindCardTip',
                        B;
                }(v || {}), w = {
                    'modID': f['lobby'],
                    'modName': 'lobby',
                    'modEventID': 0x64 * f['lobby'],
                    'bundleName': f['lobby']['toString']()
                }, x = function (B) {
                    return B[B['all'] = 0x0] = 'all',
                        B[B['slots'] = 0x1] = 'slots',
                        B[B['poker'] = 0x2] = 'poker',
                        B[B['hot'] = 0x3] = 'hot',
                        B;
                }(x || {}), y = ((g = {})[x['all']] = 0x1 << x['all'],
                    g[x['slots']] = 0x1 << x['slots'],
                    g[x['poker']] = 0x1 << x['poker'],
                    g[x['hot']] = 0x1 << x['hot'],
                    g), z = ((h = {})[0x0] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h[0x37] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h[0x3f] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h[0x42] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h[0x5b] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h[0x5c] = [x['all'], x['slots'], x['poker'], x['hot']],
                        h), A = function (B) {
                            return B[B['none'] = 0x0] = 'none',
                                B[B['hot'] = 0x1] = 'hot',
                                B[B['new'] = 0x2] = 'new',
                                B;
                        }(A || {});
                (k = j || (j = b('Lobby', {})))['config'] = w,
                    k['modID'] = q,
                    k['msgID'] = v,
                    k['gameSort'] = x,
                    k['areaGameFilterCfg'] = z,
                    k['gameSortBit'] = y,
                    k['gameTag'] = A,
                    c['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyDefine.ts', ['cc'], function () {
        var a, b;
        return {
            'setters': [function (d) {
                a = d['cclegacy'],
                    b = d['_decorator'];
            }
            ],
            'execute': function () {
                a['_RF']['push']({}, '2f2c1T/q9JF8LUy4AXTZnLO', 'lobbyDefine', void 0x0),
                    (b['ccclass'],
                        b['property']),
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyGameItem.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts', './gComMod.ts', './lobbyConfig.ts', './Language.ts', './platformData.ts', './VersionManager.ts', './stringDefine2.ts', './gMessageBox.ts', './appConfig.ts', './topCloseLayer.ts'], function (j) {
        var q, x, z, A, F, H, J, K, M, O, Q, R, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac;
        return {
            'setters': [function (ad) {
                q = ad['applyDecoratedDescriptor'],
                    x = ad['inheritsLoose'],
                    z = ad['initializerDefineProperty'],
                    A = ad['assertThisInitialized'];
            }
                , function (ad) {
                    F = ad['cclegacy'],
                        H = ad['_decorator'],
                        J = ad['Node'],
                        K = ad['Button'],
                        M = ad['Sprite'],
                        O = ad['Label'],
                        Q = ad['ProgressBar'],
                        R = ad['Color'],
                        T = ad['Collider2D'],
                        U = ad['Contact2DType'],
                        V = ad['sys'],
                        W = ad['Prefab'],
                        X = ad['instantiate'],
                        Y = ad['v3'],
                        Z = ad['js'];
                }
                , function (ad) {
                    a0 = ad['utils'];
                }
                , function (ad) {
                    a1 = ad['webGame'];
                }
                , function (ad) {
                    a2 = ad['oops'];
                }
                , function (ad) {
                    a3 = ad['gComMod'];
                }
                , function (ad) {
                    a4 = ad['Lobby'];
                }
                , function (ad) {
                    a5 = ad['LanguageManager'];
                }
                , function (ad) {
                    a6 = ad['PModuleID'];
                }
                , function (ad) {
                    a7 = ad['VersionManager'],
                        a8 = ad['SubGameState'];
                }
                , function (ad) {
                    a9 = ad['stringDefine'];
                }
                , function (ad) {
                    aa = ad['MsgBoxManager'];
                }
                , function (ad) {
                    ab = ad['appConfig'];
                }
                , function (ad) {
                    ac = ad['topCloseLayer'];
                }
            ],
            'execute': function () {
                var ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK;
                F['_RF']['push']({}, '2a0d4DBEEJJr4s74nsz0xRj', 'lobbyGameItem', void 0x0);
                var aL = H['ccclass']
                    , aM = H['property'];
                j('lobbyGameItem', (ad = aL('lobbyGameItem'),
                    af = aM({
                        'type': J,
                        'tooltip': '内容节点(用于偏移)'
                    }),
                    ag = aM({
                        'type': K,
                        'tooltip': '点击组件'
                    }),
                    ah = aM({
                        'type': M,
                        'tooltip': '图片'
                    }),
                    ai = aM({
                        'type': J,
                        'tooltip': 'spine父节点'
                    }),
                    aj = aM({
                        'type': J,
                        'tooltip': 'VIP节点'
                    }),
                    ak = aM({
                        'type': O,
                        'tooltip': 'VIP等级文本'
                    }),
                    al = aM({
                        'type': M,
                        'tooltip': '游戏名字'
                    }),
                    am = aM({
                        'type': J,
                        'tooltip': 'jackpot节点'
                    }),
                    an = aM({
                        'type': O,
                        'tooltip': 'jackpot文本'
                    }),
                    ao = aM({
                        'type': M,
                        'tooltip': '标签图'
                    }),
                    ap = aM({
                        'type': O,
                        'tooltip': '游戏下载进度文本'
                    }),
                    aq = aM({
                        'type': Q,
                        'tooltip': '游戏下载进度'
                    }),
                    ar = aM({
                        'type': M,
                        'tooltip': 'progressBar'
                    }),
                    as = aM({
                        'type': J,
                        'tooltip': '更新节点'
                    }),
                    at = aM({
                        'type': K,
                        'tooltip': '删除游戏按钮'
                    }),
                    ad((aw = q((av = function (aN) {
                        function aO() {
                            for (var aQ, aR = arguments['length'], aS = new Array(aR), aT = 0x0; aT < aR; aT++)
                                aS[aT] = arguments[aT];
                            return aQ = aN['call']['apply'](aN, [this]['concat'](aS)) || this,
                                z(aQ, 'content', aw, A(aQ)),
                                z(aQ, 'btnItem', ax, A(aQ)),
                                z(aQ, 'spIcon', ay, A(aQ)),
                                z(aQ, 'spineNode', az, A(aQ)),
                                z(aQ, 'vipNode', aA, A(aQ)),
                                z(aQ, 'lbVip', aB, A(aQ)),
                                z(aQ, 'spGameName', aC, A(aQ)),
                                z(aQ, 'jackpotNode', aD, A(aQ)),
                                z(aQ, 'lbJackpot', aE, A(aQ)),
                                z(aQ, 'spTag', aF, A(aQ)),
                                z(aQ, 'lb_progress', aG, A(aQ)),
                                z(aQ, 'downProgress', aH, A(aQ)),
                                z(aQ, 'progressBar', aI, A(aQ)),
                                z(aQ, 'updateNode', aJ, A(aQ)),
                                z(aQ, 'btn_del', aK, A(aQ)),
                                aQ['bShow'] = !0x0,
                                aQ['gameInfo'] = void 0x0,
                                aQ['jackpot'] = void 0x0,
                                aQ['refreshViewHandler'] = void 0x0,
                                aQ['gameState'] = null,
                                aQ['bDownLoad'] = !0x1,
                                aQ['loadGameID'] = null,
                                aQ['onItemShowCall'] = null,
                                aQ['progressColor'] = new R(0xff, 0x0, 0x0, 0xa0),
                                aQ['curJackpot'] = 0x0,
                                aQ['jpRollTwer'] = void 0x0,
                                aQ;
                        }
                        x(aO, aN);
                        var aP = aO['prototype'];
                        return aP['onInit'] = function () {
                            a0['ButtonBindClick'](this['btnItem'], this['onClick'], this),
                                a0['ButtonBindClick'](this['btn_del'], this['onDelGame'], this),
                                a0['ButtonBindClickLong'](this['btnItem'], this['onLongPress'], this),
                                this['spineNode']['active'] = !0x1;
                            var aQ = this['getComponent'](T);
                            aQ && (aQ['on'](U['BEGIN_CONTACT'], this['onBeginContact'], this),
                                aQ['on'](U['END_CONTACT'], this['onEndContact'], this));
                        }
                            ,
                            aP['onBeginContact'] = function (aQ, aR, aS) {
                                null != this['refreshViewHandler'] ? (this['refreshViewHandler'](),
                                    this['refreshViewHandler'] = null) : this['spineNode']['active'] = !0x0;
                            }
                            ,
                            aP['onEndContact'] = function (aQ, aR, aS) {
                                this['spineNode']['active'] = !0x1;
                            }
                            ,
                            aP['reset'] = function (aQ, aR, aS) {
                                var aT = this;
                                this['gameInfo'] = aQ,
                                    this['jackpot'] = aR,
                                    this['onItemShowCall'] = aS,
                                    this['refreshViewHandler'] = function () {
                                        var aU, aV = '', aW = a6['lobby']['toString']();
                                        V['isNative'] && aT['updateGameState'](),
                                            null == aT['onItemShowCall'] || aT['onItemShowCall'](aT),
                                            aV = 'Name_' + aT['gameInfo']['gameId'],
                                            a5['getLanSprite'](aV, function (aY, aZ) {
                                                aT['spGameName']['spriteFrame'] = null == aY ? aZ : null;
                                            }, aW, 'content/sprite/lan'),
                                            aT['showJackpot'](null != aT['jackpot'], null == (aU = aT['jackpot']) ? void 0x0 : aU['value']),
                                            aT['spTag']['spriteFrame'] = null,
                                            null != aT['gameInfo']['tag'] && aT['gameInfo']['tag'] > 0x0 && (aV = 'tag_' + aT['gameInfo']['tag'],
                                                a5['getLanSprite'](aV, function (aY, aZ) {
                                                    aT['spTag']['spriteFrame'] = null == aY ? aZ : null;
                                                }, aW, 'content/sprite/lan'));
                                        var aX = aT['gameInfo']['viplv'] > 0x0;
                                        aT['vipNode']['active'] = aX,
                                            aX && aT['lbVip'] && (aT['lbVip']['string'] = aT['gameInfo']['viplv']['toString']());
                                    }
                                    ;
                            }
                            ,
                            aP['getGameID'] = function () {
                                var aQ;
                                return null == (aQ = this['gameInfo']) ? void 0x0 : aQ['gameId'];
                            }
                            ,
                            aP['loadGameIcon'] = function (aQ, aR) {
                                var aS = this;
                                this['spineNode']['active'] = !0x1;
                                var aT = 'content/sprite/icon/icon_' + aR + '/spriteFrame';
                                a2['res']['load'](aQ, aT, function (aU, aV) {
                                    null == aU ? (aS['spIcon']['enabled'] = !0x0,
                                        aS['spIcon']['spriteFrame'] = aV) : a1['log']['logBusiness']('lobbyGameItem\x20loadGameIcon\x20' + aR + '\x20error');
                                });
                            }
                            ,
                            aP['loadGameSpineNode'] = function (aQ, aR) {
                                var aS = this
                                    , aT = function () {
                                        aS['spineNode']['active'] = !0x0,
                                            aS['spIcon']['enabled'] = !0x1,
                                            null == aR || aR();
                                    };
                                if (aQ == this['loadGameID'])
                                    aT();
                                else {
                                    this['spineNode']['removeAllChildren']();
                                    var aU = 0xa * Math['ceil'](aQ / 0xa);
                                    a2['res']['load']('icons_' + aU, 'icon_' + aQ, W, function (aV, aW) {
                                        if (aV)
                                            a1['log']['logBusiness']('lobbyGameItem\x20loadGameSpineNode\x20' + aQ + '\x20error'),
                                                null == aR || aR(),
                                                aS['loadGameID'] = -0x1;
                                        else {
                                            aS['loadGameID'] = aQ,
                                                aT();
                                            var aX = X(aW);
                                            aX['setPosition'](0x0, 0x0),
                                                aS['spineNode']['addChild'](aX);
                                        }
                                    });
                                }
                            }
                            ,
                            aP['updateGameState'] = function () {
                                ab['IsDownloadSubGameInLobby'] && (this['gameState'] = a7['Instance']['getSubGameState'](this['gameInfo']['gameId']),
                                    this['updateNode']['active'] = this['gameState'] == a8['NEED_UPDATE'] || this['gameState'] == a8['NEED_DOWNLOAD'],
                                    this['lb_progress']['string'] = '',
                                    this['downProgress']['node']['active'] = !0x1);
                            }
                            ,
                            aP['show'] = function (aQ, aR) {
                                var aS;
                                this['node']['active'] = aQ,
                                    this['showJackpot'](aQ, null == (aS = this['jackpot']) ? void 0x0 : aS['value']),
                                    this['bShow'] = aQ;
                            }
                            ,
                            aP['onDelGame'] = function () {
                                var aQ = this;
                                if (V['isNative']) {
                                    var aR = a9['tips'];
                                    aR = a5['getLangByID'](aR);
                                    var aS = a5['getLangByID'](a9['tip_del_game'])
                                        , aT = {
                                            'txt': a5['getLangByID'](a9['ok']),
                                            'click': function () {
                                                aQ['gameInfo'] && (a7['Instance']['deleteSubGame'](aQ['gameInfo']['gameId']),
                                                    a2['res']['releaseDir']('', aQ['gameInfo']['gameId']['toString']()),
                                                    aQ['updateGameState']()),
                                                    aQ['btn_del']['node']['active'] = !0x1;
                                            }
                                        }
                                        , aU = {
                                            'txt': a5['getLangByID'](a9['cancel']),
                                            'click': function () {
                                                aQ['btn_del']['node']['active'] = !0x1;
                                            }
                                        };
                                    aa['Show'](aR, aS, aT, aU),
                                        this['revertDelNode'](),
                                        ac['instance']['close']();
                                }
                            }
                            ,
                            aP['onClick'] = function () {
                                var aQ = this;
                                if (null != this['gameInfo']) {
                                    if (this['btn_del']['node']['active'])
                                        a1['log']['logBusiness']('now\x20is\x20deleting\x20game,\x20can\x27t\x20enter\x20game');
                                    else {
                                        if (V['isNative'] && ab['IsDownloadSubGameInLobby']) {
                                            if (this['bDownLoad']) {
                                                a7['Instance']['stopDownGame'](this['gameInfo']['gameId']);
                                                var aR = a5['getLangByID'](a9['tips'])
                                                    , aS = a5['getLangByID'](a9['tip_cancel_down_game'])
                                                    , aT = {
                                                        'txt': a5['getLangByID'](a9['ok']),
                                                        'click': function () {
                                                            aQ['gameInfo'] && (aQ['bDownLoad'] = !0x1,
                                                                aQ['updateGameState']());
                                                        }
                                                    }
                                                    , aU = {
                                                        'txt': a5['getLangByID'](a9['cancel']),
                                                        'click': function () {
                                                            a7['Instance']['resumeDownGame'](aQ['gameInfo']['gameId']);
                                                        }
                                                    };
                                                return void aa['Show'](aR, aS, aT, aU);
                                            }
                                            if (this['gameState'] != a8['NO_NEED_UPDATE'] && !this['bDownLoad']) {
                                                if (a7['Instance']['getDownloadingSubGameCount']() >= ab['maxDownloadSubGameCount']) {
                                                    var aV = a5['getLangByID'](a9['tips_wait_down_game']);
                                                    return void a1['toast'](aV);
                                                }
                                                return this['bDownLoad'] = !0x0,
                                                    this['downProgress']['node']['active'] = !0x0,
                                                    this['updateDownProgress'](0x0),
                                                    void a7['Instance']['updateSubgame'](this['gameInfo']['gameId'], function (aW, aX) {
                                                        if (void 0x0 === aX && (aX = ''),
                                                            aW == a8['UPDATE_SUCCESS']) {
                                                            var aY = a5['getLangByTag']('subgame_ready')
                                                                , aZ = a5['getLangByTag']('name_' + aQ['gameInfo']['gameId']);
                                                            aY = Z['formatStr'](aY, aZ),
                                                                a1['toast'](aY),
                                                                aQ['updateGameState']();
                                                        } else {
                                                            var b0 = a5['getLangByID'](a9['error'])
                                                                , b1 = a5['getLangByTag']('tip_game_hot_error_' + aW);
                                                            ab['bShowDebug'] && (b1 = b1 + ':' + aX);
                                                            var b2 = {
                                                                'txt': a5['getLangByID'](a9['ok']),
                                                                'click': function () {
                                                                    aQ['updateGameState']();
                                                                }
                                                            };
                                                            aa['Show'](b0, b1, b2);
                                                        }
                                                        aQ['bDownLoad'] = !0x1;
                                                    }, function (aW) {
                                                        aQ['updateDownProgress'](aW);
                                                    });
                                            }
                                        }
                                        this['Call'](a4['modID']['root'], a4['msgID']['reqGameRooms'], this['gameInfo']['gameId']);
                                    }
                                } else
                                    a1['log']['logBusiness']('lobbyGameItem\x20onClick\x20gameInfo\x20is\x20null');
                            }
                            ,
                            aP['updateDownProgress'] = function (aQ) {
                                this['lb_progress']['string'] = Math['floor'](0x64 * aQ) + '%',
                                    this['downProgress']['progress'] = aQ,
                                    this['progressColor']['r'] = 0xff * (0x1 - aQ),
                                    this['progressColor']['g'] = 0xff * aQ,
                                    this['progressBar']['color'] = this['progressColor'];
                            }
                            ,
                            aP['onLongPress'] = function () {
                                var aQ = this;
                                V['isNative'] && this['gameState'] != a8['NEED_DOWNLOAD'] && (this['btn_del']['node']['active'] = !0x0,
                                    ac['instance']['show'](function () {
                                        aQ['revertDelNode']();
                                    }, this, this['btn_del']['node']),
                                    this['node']['parent']['pauseSystemEvents'](!0x0));
                            }
                            ,
                            aP['revertDelNode'] = function () {
                                var aQ = this['btn_del']['node'];
                                aQ['parent'] = this['node'],
                                    aQ['position'] = Y(0x0, 0x0, 0x0),
                                    aQ['setScale'](Y(0x1, 0x1, 0x1)),
                                    aQ['active'] = !0x1,
                                    this['node']['parent']['resumeSystemEvents'](!0x0);
                            }
                            ,
                            aP['showJackpot'] = function (aQ, aR) {
                                var aS, aT = this;
                                if (ab['bShowJackpot'] || (aQ = !0x1),
                                    this['jackpotNode']['active'] != aQ && (this['jackpotNode']['active'] = aQ),
                                    null == (aS = this['jpRollTwer']) || aS['stop'](),
                                    aQ) {
                                    if (aR > 0x0) {
                                        var aU = function (aX) {
                                            aT['curJackpot'] = aX,
                                                aT['lbJackpot'] && (aT['lbJackpot']['string'] = a1['FormatCoins'](aX));
                                        };
                                        if (aR <= this['curJackpot'])
                                            return void aU(aR);
                                        var aV = Math['floor'](aR - this['curJackpot'])
                                            , aW = aV > 0x1e ? 0x1e : aV;
                                        this['jpRollTwer'] = a0['tweenNumber'](this['curJackpot'], aR, aW, aU, aU, 'sineInOut');
                                    } else
                                        this['jackpotNode']['active'] = !0x1;
                                }
                            }
                            ,
                            aO;
                    }(a3))['prototype'], 'content', [af], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        ax = q(av['prototype'], 'btnItem', [ag], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ay = q(av['prototype'], 'spIcon', [ah], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        az = q(av['prototype'], 'spineNode', [ai], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aA = q(av['prototype'], 'vipNode', [aj], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aB = q(av['prototype'], 'lbVip', [ak], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aC = q(av['prototype'], 'spGameName', [al], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aD = q(av['prototype'], 'jackpotNode', [am], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aE = q(av['prototype'], 'lbJackpot', [an], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aF = q(av['prototype'], 'spTag', [ao], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aG = q(av['prototype'], 'lb_progress', [ap], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aH = q(av['prototype'], 'downProgress', [aq], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aI = q(av['prototype'], 'progressBar', [ar], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aJ = q(av['prototype'], 'updateNode', [as], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aK = q(av['prototype'], 'btn_del', [at], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        au = av)) || au)),
                    F['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyGameList.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './webGame.ts', './lobbyGameItem.ts', './lobbyState.ts', './lobbyConfig.ts', './utils.ts', './appConfig.ts', './ToggleGroup.ts', './GameListConfig.ts', './Oops.ts'], function (j) {
        var k, q, x, z, A, B, C, D, E, F, H, J, K, M, N, O, P, Q, R, T, U, V, W, X;
        return {
            'setters': [function (Y) {
                k = Y['applyDecoratedDescriptor'],
                    q = Y['inheritsLoose'],
                    x = Y['initializerDefineProperty'],
                    z = Y['assertThisInitialized'],
                    A = Y['createForOfIteratorHelperLoose'];
            }
                , function (Y) {
                    B = Y['cclegacy'],
                        C = Y['_decorator'],
                        D = Y['ScrollView'],
                        E = Y['Node'],
                        F = Y['Button'],
                        H = Y['Layout'],
                        J = Y['UITransform'],
                        K = Y['VERSION'],
                        M = Y['instantiate'];
                }
                , function (Y) {
                    N = Y['baseView'];
                }
                , function (Y) {
                    O = Y['webGame'];
                }
                , function (Y) {
                    P = Y['lobbyGameItem'];
                }
                , function (Y) {
                    Q = Y['lobbyState'];
                }
                , function (Y) {
                    R = Y['Lobby'];
                }
                , function (Y) {
                    T = Y['utils'];
                }
                , function (Y) {
                    U = Y['appConfig'];
                }
                , function (Y) {
                    V = Y['ToggleGroup'];
                }
                , function (Y) {
                    W = Y['GameBaseInfo'];
                }
                , function (Y) {
                    X = Y['oops'];
                }
            ],
            'execute': function () {
                var Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac;
                B['_RF']['push']({}, '2b724hoV91CFpVlbABJ3bHO', 'lobbyGameList', void 0x0);
                var ad = C['ccclass']
                    , ae = C['property'];
                j('lobbyGameList', (Y = ad('lobbyGameList'),
                    Z = ae({
                        'type': V,
                        'tooltip': 'ToggleGroup'
                    }),
                    a0 = ae({
                        'type': D,
                        'tooltip': '滚轴组件'
                    }),
                    a1 = ae({
                        'type': E,
                        'tooltip': '游戏列表根节点'
                    }),
                    a2 = ae({
                        'type': E,
                        'tooltip': '游戏卡模板'
                    }),
                    a3 = ae({
                        'type': F
                    }),
                    a4 = ae({
                        'type': F
                    }),
                    Y((a7 = k((a6 = function (af) {
                        function ag() {
                            for (var ai, aj = arguments['length'], ak = new Array(aj), al = 0x0; al < aj; al++)
                                ak[al] = arguments[al];
                            return ai = af['call']['apply'](af, [this]['concat'](ak)) || this,
                                x(ai, 'leftTabs', a7, z(ai)),
                                x(ai, 'scrView', a8, z(ai)),
                                x(ai, 'gameItemsRoot', a9, z(ai)),
                                x(ai, 'gameItemTemp', aa, z(ai)),
                                x(ai, 'btnL', ab, z(ai)),
                                x(ai, 'btnR', ac, z(ai)),
                                ai['gameItemsPool'] = [],
                                ai['allShowGameItems'] = [],
                                ai['gameItemsMap'] = void 0x0,
                                ai['gameSortMap'] = void 0x0,
                                ai['gameItemList'] = [],
                                ai['bLoadSpineIcon'] = !0x1,
                                ai['bHotIsRecentPlay'] = !0x0,
                                ai['bTakeAllIfEmptyRecent'] = !0x1,
                                ai['pageGameCount'] = 0x0,
                                ai['listJumpMinOffset'] = 0xc8,
                                ai['bShowJumpBtnFlag'] = [],
                                ai['choosenGameType'] = R['gameSort']['all'],
                                ai['showGameCount'] = 0x0,
                                ai['areaFilterCfg'] = null,
                                ai;
                        }
                        q(ag, af);
                        var ah = ag['prototype'];
                        return ah['onInit'] = function () {
                            this['leftTabs']['setToggleChangedHandler'](this['chooseGameType']['bind'](this));
                            for (var ai = this['gameItemsRoot']['children'], aj = 0x0; aj < ai['length']; aj++) {
                                var ak = ai[aj]
                                    , al = this['getGameItem'](ak);
                                null != al && (al['show'](!0x1),
                                    this['gameItemsPool']['push'](al));
                            }
                            if (null != this['btnL'] && null != this['btnR']) {
                                T['ButtonBindClick'](this['btnL'], this['onbtnLClick'], this),
                                    T['ButtonBindClick'](this['btnR'], this['onbtnRClick'], this);
                                var am = this['scrView']['content']['getComponent'](H)
                                    , an = this['gameItemTemp']['getComponent'](J)['width'];
                                this['pageGameCount'] = 0x2 * Math['floor']((this['scrView']['view']['width'] - am['paddingLeft']) / (an + am['spacingX'])),
                                    this['scrView']['node']['on'](D['EventType']['SCROLLING'], this['onGameListScrolling'], this);
                            } else
                                null != this['btnL'] && (this['btnL']['node']['active'] = !0x1),
                                    null != this['btnR'] && (this['btnR']['node']['active'] = !0x1);
                        }
                            ,
                            ah['onbtnLClick'] = function () {
                                this['moveGameList'](!0x1);
                            }
                            ,
                            ah['onbtnRClick'] = function () {
                                this['moveGameList'](!0x0);
                            }
                            ,
                            ah['moveGameList'] = function (ai) {
                                if (this['showGameCount'] <= this['pageGameCount'])
                                    return this['setMoveBtnVisible'](!0x0, !0x1),
                                        void this['setMoveBtnVisible'](!0x1, !0x1);
                                if (ai) {
                                    var aj = Math['floor'](this['scrView']['view']['width'])
                                        , ak = this['scrView']['getScrollOffset']()
                                        , al = Math['floor'](Math['abs'](ak['x']))
                                        , am = Math['floor'](al / aj) + 0x1;
                                    aj - al % aj < 0x64 && (am += 0x1),
                                        this['pageGameCount'] * (am + 0x1) < this['showGameCount'] ? (ak['x'] = aj * am,
                                            this['scrView']['scrollToOffset'](ak, 0.1, !0x0)) : this['scrView']['scrollToRight'](0.1, !0x0);
                                } else {
                                    var an;
                                    null == (an = this['scrView']) || an['scrollToLeft'](0.1, !0x0);
                                }
                            }
                            ,
                            ah['onGameListScrolling'] = function (ai) {
                                var aj = Math['abs'](ai['getScrollOffset']()['x']);
                                this['bShowJumpBtnFlag'][0x0] != aj > this['listJumpMinOffset'] && this['setMoveBtnVisible'](!0x0, !this['bShowJumpBtnFlag'][0x0]),
                                    this['bShowJumpBtnFlag'][0x1] != ai['getMaxScrollOffset']()['x'] - aj > this['listJumpMinOffset'] && this['setMoveBtnVisible'](!0x1, !this['bShowJumpBtnFlag'][0x1]);
                            }
                            ,
                            ah['setMoveBtnVisible'] = function (ai, aj) {
                                var ak = ai ? this['btnL'] : this['btnR'];
                                null != ak && (ak['node']['active'] = aj,
                                    this['bShowJumpBtnFlag'][ai ? 0x0 : 0x1] = aj);
                            }
                            ,
                            ah['getGameItem'] = function (ai) {
                                var aj = ai['getComponent'](P);
                                return null == aj ? (O['log']['logView']('lobbyGameList\x20getGameItem\x20item\x20is\x20null'),
                                    ai['destroy'](),
                                    null) : (aj['Init'](0x64 * this['ID'], this['messager']),
                                        aj);
                            }
                            ,
                            ah['chooseGameType'] = function (ai) {
                                var aj = null != this['areaFilterCfg'] && this['areaFilterCfg']['length'] > ai ? this['areaFilterCfg'][ai] : R['gameSort']['all'];
                                this['refreshChoosenGameList'](aj),
                                    this['choosenGameType'] = aj,
                                    this['moveGameList'](!0x1);
                            }
                            ,
                            ah['refreshChoosenGameList'] = function (ai) {
                                var aj = this['allShowGameItems'];
                                ai != R['gameSort']['all'] && (aj = this['gameSortMap']['get'](ai),
                                    this['allShowGameItems']['forEach'](function (ak) {
                                        ak['show'](!0x1);
                                    })),
                                    this['showGameCount'] = null != aj && aj['length'] > 0x0 ? aj['length'] : 0x0,
                                    function (ak) {
                                        if (null != ak && 0x0 != aj['length']) {
                                            var al = 0x0;
                                            ak['forEach'](function (am) {
                                                am['show'](!0x0, al % 0x2 == 0x0),
                                                    al++;
                                            });
                                        }
                                    }(aj);
                            }
                            ,
                            ah['refresh'] = function (ai) {
                                var aj = this;
                                void 0x0 === ai && (ai = !0x1);
                                var ak = Q['Instance']['Player']['areaNo'];
                                T['StringIsNullOrEmpty'](ak) && (ak = U['defaultAreaCode']);
                                var al = Number(ak);
                                this['areaFilterCfg'] = R['areaGameFilterCfg'][al] || R['areaGameFilterCfg'][0x0],
                                    this['gameItemsMap'] = T['resetMap'](this['gameItemsMap']),
                                    this['gameSortMap'] = T['resetMap'](this['gameSortMap']);
                                for (var am, an = new Map(), ao = Q['Instance']['State']['jackpots'], ap = U['bShowJackpot'] && null != ao, aq = Q['Instance']['State']['games'], ar = function (az, aA, aB) {
                                    T['addArrayMapItem'](az, aB, aj['gameSortMap']),
                                        T['addArrayMapItem'](az, aA, an);
                                }, as = this['bHotIsRecentPlay'] ? Q['Instance']['State']['recentPlayGames'] : null, at = !!this['bHotIsRecentPlay'] && (null != as && as['length'] > 0x0), au = 0x0, av = function () {
                                    var az, aA = am['value'], aB = aA[0x0], aC = aA[0x1];
                                    //☠️ Ignore game support validation
                                    // if (false) {
                                    //     var aD, aE = null != (aD = W[aB]) && aD['open'] ? 'has\x20none\x20bundle' : 'config\x20is\x20empty\x20or\x20not\x20open';
                                    //     return O['log']['logBusiness']('hide\x20the\x20game[' + aB + ']:\x20' + aE),
                                    //         'continue';
                                    // }
                                    var aF = aj['getGameItemObject'](au);
                                    aj['gameItemsMap']['set'](aB, aF);
                                    var aG = ap && ao['has'](aB) ? ao['get'](aB) : null;
                                    aF['reset'](aC, aG, aj['onGameItemShow']['bind'](aj));
                                    var aH = aj['parseGameType'](aC['gameType']);
                                    (aH['length'] > 0x0 && aH['forEach'](function (aI) {
                                        aj['bHotIsRecentPlay'] && aI == R['gameSort']['hot'] || ar(aI, aC, aF);
                                    }),
                                        aj['bHotIsRecentPlay']) && (at ? as['findIndex'](function (aI) {
                                            return aI == aB;
                                        }) > -0x1 && ar(R['gameSort']['hot'], aC, aF) : aj['bTakeAllIfEmptyRecent'] && ar(R['gameSort']['hot'], aC, aF)),
                                        au++;
                                }, aw = A(aq); !(am = aw())['done'];)
                                    av();
                                if (this['Call'](0x0, R['msgID']['saveSortGameData'], an),
                                    this['allShowGameItems'] = this['gameItemsPool']['slice'](0x0, au), //☠️ Show all processed games
                                    au < this['gameItemsPool']['length'])
                                    for (var ax = au; ax < this['gameItemsPool']['length']; ax++) {
                                        this['gameItemsPool'][ax]['show'](!0x1);
                                    }
                                if (ai) {
                                    var ay = this['areaFilterCfg']['indexOf'](U['defaultGameType']);
                                    -0x1 == ay && (ay = this['areaFilterCfg']['indexOf'](R['gameSort']['all'])),
                                        this['leftTabs']['setSelectToggle'](ay),
                                        this['chooseGameType'](ay),
                                        this['moveGameList'](!0x1);
                                } else
                                    this['refreshChoosenGameList'](this['choosenGameType']);
                            }
                            ,
                            ah['checkIsSupport'] = function (ai) {
                                return null == ai || T['compareVersions'](K, ai) >= 0x0;
                            }
                            ,
                            ah['getGameItemObject'] = function (ai) {
                                var aj = this['gameItemsPool'][ai];
                                if (null == aj) {
                                    var ak = M(this['gameItemTemp']);
                                    ak['parent'] = this['gameItemsRoot'],
                                        ak['setSiblingIndex'](ai),
                                        aj = this['getGameItem'](ak),
                                        this['gameItemsPool'][ai] = aj;
                                }
                                return aj;
                            }
                            ,
                            ah['onGameItemShow'] = function (ai) {
                                this['gameItemList']['push'](ai),
                                    this['bLoadSpineIcon'] || this['loadGameSpine']();
                            }
                            ,
                            ah['loadGameSpine'] = function () {
                                var ai = this
                                    , aj = this['gameItemList']['shift']();
                                if (aj) {
                                    this['bLoadSpineIcon'] = !0x0;
                                    var ak = aj['getGameID']();
                                    aj['loadGameSpineNode'](ak, function () {
                                        ai['loadGameSpine']();
                                    });
                                } else
                                    this['bLoadSpineIcon'] = !0x1;
                            }
                            ,
                            ah['parseGameType'] = function (ai) {
                                for (var aj = [], ak = 0x0; ak < 0x4; ak++) {
                                    var al = R['gameSortBit'][ak];
                                    (ai & al) == al && aj['push'](ak);
                                }
                                return aj;
                            }
                            ,
                            ah['refreshJackpot'] = function (ai) {
                                var aj = this;
                                null != ai && 0x0 != ai['length'] && ai['forEach'](function (ak) {
                                    var al = aj['gameItemsMap']['get'](ak['gameId']);
                                    null != al && al['showJackpot'](!0x0, ak['value']);
                                });
                            }
                            ,
                            ag;
                    }(N))['prototype'], 'leftTabs', [Z], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a8 = k(a6['prototype'], 'scrView', [a0], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a9 = k(a6['prototype'], 'gameItemsRoot', [a1], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aa = k(a6['prototype'], 'gameItemTemp', [a2], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ab = k(a6['prototype'], 'btnL', [a3], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ac = k(a6['prototype'], 'btnR', [a4], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = a6)) || a5)),
                    B['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyGameToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './LabelToggle.ts'], function (b) {
        var d, f, g, h, j, k, m, p;
        return {
            'setters': [function (q) {
                d = q['applyDecoratedDescriptor'],
                    f = q['inheritsLoose'],
                    g = q['initializerDefineProperty'],
                    h = q['assertThisInitialized'];
            }
                , function (q) {
                    j = q['cclegacy'],
                        k = q['_decorator'],
                        m = q['Node'];
                }
                , function (q) {
                    p = q['LabelToggle'];
                }
            ],
            'execute': function () {
                var q, v, w, x, z;
                j['_RF']['push']({}, '9e008M1s6RD4ofWt/Nr6PCz', 'lobbyGameToggle', void 0x0);
                var A = k['ccclass']
                    , B = k['property'];
                b('lobbyGameToggle', (q = A('lobbyGameToggle'),
                    v = B({
                        'type': m,
                        'tooltip': '背景'
                    }),
                    q((z = d((x = function (C) {
                        function D() {
                            for (var E, F = arguments['length'], G = new Array(F), H = 0x0; H < F; H++)
                                G[H] = arguments[H];
                            return E = C['call']['apply'](C, [this]['concat'](G)) || this,
                                g(E, 'backGround', z, h(E)),
                                E;
                        }
                        return f(D, C),
                            D['prototype']['onCheckChange'] = function (E) {
                                this['backGround'] && (this['backGround']['active'] = !E);
                            }
                            ,
                            D;
                    }(p))['prototype'], 'backGround', [v], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        w = x)) || w)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyMain.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyMod.ts', './platformData.ts', './AsyncQueue.ts', './Oops.ts', './GameUIConfig.ts', './viewLobby.ts', './lobbyConfig.ts', './frameworkCmd.ts', './pb_framework.js', './lobbyState.ts', './webGame.ts', './CustomEventDefine.ts', './pb_error_code.ts', './utils.ts', './notify2.ts', './Language.ts', './stringDefine2.ts', './netAdapter.ts', './gMessageBox.ts', './appConfig.ts', './lobbyModHub.ts', './rewardPopup.ts', './bindTips.ts', './ThirdAdapter.ts', './httpInfo.ts', './httpDefine.ts', './downloadTips.ts', './downloadEntry.ts', './popManager.ts', './redPoint.ts', './env', './GameListConfig.ts', './NotificationSender.ts', './NativeFun.ts', './EventMessage.ts', './bindCardTips.ts', './fireBaseManager.ts', './firebaseEvents.ts', './StorageConfig.ts', './loginConfig.ts'], function (a0) {
        var a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2;
        return {
            'setters': [function (b3) {
                a1 = b3['inheritsLoose'],
                    a2 = b3['asyncToGenerator'],
                    a3 = b3['regeneratorRuntime'],
                    a4 = b3['createForOfIteratorHelperLoose'];
            }
                , function (b3) {
                    a5 = b3['cclegacy'],
                        a6 = b3['_decorator'],
                        a7 = b3['sys'],
                        a8 = b3['screen'],
                        a9 = b3['math'],
                        aa = b3['game'],
                        ab = b3['Vec2'],
                        ac = b3['js'];
                }
                , function (b3) {
                    ad = b3['lobbyMod'];
                }
                , function (b3) {
                    af = b3['PModuleID'];
                }
                , function (b3) {
                    ag = b3['AsyncQueue'];
                }
                , function (b3) {
                    ah = b3['oops'];
                }
                , function (b3) {
                    ai = b3['UIID'];
                }
                , function (b3) {
                    aj = b3['viewLobby'];
                }
                , function (b3) {
                    ak = b3['Lobby'];
                }
                , function (b3) {
                    al = b3['CMD_FRAMEWORK'];
                }
                , function (b3) {
                    am = b3['pb_user'],
                        an = b3['pb_game'];
                }
                , function (b3) {
                    ao = b3['lobbyState'],
                        ap = b3['ServerRegType'];
                }
                , function (b3) {
                    aq = b3['webGame'],
                        ar = b3['CoinsFormat'];
                }
                , function (b3) {
                    as = b3['WebGameEvent'],
                        at = b3['gameStage'];
                }
                , function (b3) {
                    au = b3['pb_error_code'];
                }
                , function (b3) {
                    av = b3['utils'];
                }
                , function (b3) {
                    aw = b3['notify'];
                }
                , function (b3) {
                    ax = b3['LanguageManager'];
                }
                , function (b3) {
                    ay = b3['stringDefine'];
                }
                , function (b3) {
                    az = b3['netAdapter'],
                        aA = b3['NetChannelType'];
                }
                , function (b3) {
                    aB = b3['MsgBoxManager'];
                }
                , function (b3) {
                    aC = b3['appConfig'],
                        aD = b3['AttributionType'];
                }
                , function (b3) {
                    aE = b3['lobbyModHub'];
                }
                , function (b3) {
                    aF = b3['getRewardType'],
                        aG = b3['rewardPopManager'];
                }
                , function (b3) {
                    aH = b3['bindTips'];
                }
                , function (b3) {
                    aI = b3['AttributionEvent'];
                }
                , function (b3) {
                    aJ = b3['HttpInfo'];
                }
                , function (b3) {
                    aK = b3['HttpErrorCode'];
                }
                , function (b3) {
                    aL = b3['downloadTips'];
                }
                , function (b3) {
                    aM = b3['downloadEntry'];
                }
                , function (b3) {
                    aN = b3['popManager'],
                        aO = b3['popJobType'],
                        aP = b3['lobbyPopJob'];
                }
                , function (b3) {
                    aQ = b3['RedPointKey'],
                        aR = b3['ReadPointName'];
                }
                , function (b3) {
                    aS = b3['DEBUG'];
                }
                , function (b3) {
                    aT = b3['GamesLocalConfig'],
                        aU = b3['GameBaseInfo'];
                }
                , function (b3) {
                    aV = b3['NotificationSender'];
                }
                , function (b3) {
                    aW = b3['NativeFun'];
                }
                , function (b3) {
                    aX = b3['EventMessage'];
                }
                , function (b3) {
                    aY = b3['bindCardTips'];
                }
                , function (b3) {
                    aZ = b3['fireBaseManager'];
                }
                , function (b3) {
                    b0 = b3['FirebaseEvent_PURCHASE'];
                }
                , function (b3) {
                    b1 = b3['StorageConfig'];
                }
                , function (b3) {
                    b2 = b3['Login'];
                }
            ],
            'execute': function () {
                a5['_RF']['push']({}, '88e5fZe9kJJypRuX5iLO6AZ', 'lobbyMain', void 0x0),
                    (a6['ccclass'],
                        a6['property']);
                var b3 = a0('lobbyMain', function (b4) {
                    function b5() {
                        for (var b7, b8 = arguments['length'], b9 = new Array(b8), ba = 0x0; ba < b8; ba++)
                            b9[ba] = arguments[ba];
                        return (b7 = b4['call']['apply'](b4, [this]['concat'](b9)) || this)['view'] = null,
                            b7['bindTips'] = null,
                            b7['bindCardTips'] = null,
                            b7['downloadTips'] = null,
                            b7['loadModQueue'] = null,
                            b7['bAllowEnterLobby'] = !0x1,
                            b7['login2LobbyActionQueue'] = null,
                            b7['loopJobsTimer'] = null,
                            b7['loopJobCount'] = 0x0,
                            b7['isForceBackGame'] = !0x1,
                            b7['lastReqRedPointTime'] = 0x0,
                            b7['lastReqGameRoomsTime'] = 0x0,
                            b7['lastReqRoomInfoTime'] = 0x0,
                            b7['popMager'] = null,
                            b7['bReady'] = !0x1,
                            b7['errorMsg'] = null,
                            b7;
                    }
                    a1(b5, b4);
                    var b6 = b5['prototype'];
                    return b6['loadBundle'] = function (b7) { }
                        ,
                        b6['loadView'] = function (b7) {
                            var b8 = this;
                            b7['push'](a2(a3()['mark'](function b9(ba, bb, bc) {
                                var bd;
                                return a3()['wrap'](function (be) {
                                    for (; ;)
                                        switch (be['prev'] = be['next']) {
                                            case 0x0:
                                                bd = {
                                                    'onAdded': function (bf, bg) {
                                                        b8['view'] = bf['getComponent'](aj),
                                                            b8['CreateSubMod'](ak['modID']['view']),
                                                            ba();
                                                    }
                                                },
                                                    ah['gui']['open'](ai['Lobby'], null, bd);
                                            case 0x2:
                                            case 'end':
                                                return be['stop']();
                                        }
                                }, b9);
                            })));
                        }
                        ,
                        b6['actionOnLoaded'] = function (b7) {
                            null == this['popMager'] && (this['popMager'] = new aN()),
                                this['popMager']['resetPopFlag'](),
                                this['popMager']['pausePop'](!0x0, !0x1);
                        }
                        ,
                        b6['AddListener'] = function () {
                            this['addNetProcess'](al['s2c_game_list_jackpot'], this['on_s2c_game_list_jackpot']),
                                this['addNetProcess'](al['s2c_game_list'], this['on_s2c_game_list']),
                                this['addNetProcess'](al['s2c_hall_enter'], this['on_s2c_hall_enter']),
                                this['addNetProcess'](al['s2c_red_point'], this['on_s2c_red_point']),
                                this['addNetProcess'](al['s2c_server_cfg'], this['on_s2c_server_cfg']),
                                this['addNetProcess'](al['s2c_lobby_marquee'], this['on_s2c_lobby_marquee']),
                                this['addNetProcess'](al['s2c_game_room'], this['on_s2c_game_room']),
                                this['addNetProcess'](al['s2c_enter_room'], this['on_s2c_enter_room']),
                                this['addNetProcess'](al['s2c_game_enter'], this['on_s2c_back_game']),
                                this['addNetProcess'](al['notify_session_overdue'], this['on_notify_session_overdue']),
                                this['addNetProcess'](al['s2c_session_verify'], this['on_s2c_session_verify']),
                                this['addNetProcess'](al['notify_big_win'], this['on_notify_big_win']),
                                this['addNetProcess'](al['notify_kick_out'], this['on_notify_kick_out']),
                                this['addNetProcess'](al['notify_user_info_update'], this['on_notify_user_info_update']),
                                this['addNetProcess'](al['notify_recharge_info'], this['on_notify_recharge_info']),
                                this['addNetProcess'](al['s2c_notify_goods'], this['on_s2c_notify_goods']),
                                this['addNetProcess'](al['s2c_stage_show'], this['on_s2c_show_stage']),
                                this['addNetProcess'](al['s2c_freecash_notify'], this['on_s2c_cashFree_show']),
                                this['addNetProcess'](al['s2c_freecash_newhelp'], this['on_s2c_cashFree_newHelp']),
                                this['RegistMsg'](ak['msgID']['enterLobbyMod'], this['enterLobbyMod']),
                                this['RegistMsg'](ak['msgID']['reqGameRooms'], this['reqGameRoomList']),
                                this['RegistMsg'](ak['msgID']['reqEntetRoom'], this['reqEnterGameRoom']),
                                this['RegistMsg'](ak['msgID']['showBindTip'], this['showBindTips']),
                                this['RegistMsg'](ak['msgID']['saveSortGameData'], this['saveSortGameData']),
                                this['RegistMsg'](ak['msgID']['showBindCardTip'], this['showBindCardTips']),
                                ah['message']['on'](as['game_stage_change'], this['on_game_stage_change'], this),
                                ah['message']['on'](as['req_enterGame'], this['reqEnterGame'], this),
                                ah['message']['on'](as['add_lobby_pop'], this['onAddLobbyPop'], this),
                                ah['message']['on'](as['open_lobby_pop'], this['onOpenLobbyPop'], this),
                                ah['message']['on'](as['close_lobby_pop'], this['onCloseLobbyPop'], this),
                                ah['message']['on'](as['enter_game'], this['onEnterSubGame'], this),
                                ah['message']['on'](as['WS_CONNECT'], this['OnSocketConnected'], this),
                                ah['message']['on'](as['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                                ah['message']['on'](as['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this),
                                ah['message']['on'](aX['GAME_ENTER'], this['onGameShow'], this);
                        }
                        ,
                        b6['onGameShow'] = function () {
                            if (a7['isBrowser'] && aC['gameStage'] == at['lobby'] && az['Instance']['ready4Connected'](aA['Lobby'])) {
                                aq['log']['logBusiness']('lobbyMain\x20onGameShow');
                                var b7 = aC['connection']['tcp']['host']
                                    , b8 = aC['connection']['tcp']['port'];
                                az['Instance']['Connect'](aA['Lobby'], b7, b8);
                            }
                        }
                        ,
                        b6['RemoveListener'] = function () {
                            this['removeNetProcess'](al['s2c_game_list_jackpot'], this['on_s2c_game_list_jackpot']),
                                this['removeNetProcess'](al['s2c_game_list'], this['on_s2c_game_list']),
                                this['removeNetProcess'](al['s2c_hall_enter'], this['on_s2c_hall_enter']),
                                this['removeNetProcess'](al['s2c_red_point'], this['on_s2c_red_point']),
                                this['removeNetProcess'](al['s2c_server_cfg'], this['on_s2c_server_cfg']),
                                this['removeNetProcess'](al['s2c_lobby_marquee'], this['on_s2c_lobby_marquee']),
                                this['removeNetProcess'](al['s2c_game_room'], this['on_s2c_game_room']),
                                this['removeNetProcess'](al['s2c_enter_room'], this['on_s2c_enter_room']),
                                this['removeNetProcess'](al['s2c_game_enter'], this['on_s2c_back_game']),
                                this['removeNetProcess'](al['notify_session_overdue'], this['on_notify_session_overdue']),
                                this['removeNetProcess'](al['s2c_session_verify'], this['on_s2c_session_verify']),
                                this['removeNetProcess'](al['notify_big_win'], this['on_notify_big_win']),
                                this['removeNetProcess'](al['notify_kick_out'], this['on_notify_kick_out']),
                                this['removeNetProcess'](al['notify_user_info_update'], this['on_notify_user_info_update']),
                                this['removeNetProcess'](al['notify_recharge_info'], this['on_notify_recharge_info']),
                                this['removeNetProcess'](al['s2c_notify_goods'], this['on_s2c_notify_goods']),
                                this['removeNetProcess'](al['s2c_stage_show']),
                                this['removeNetProcess'](al['s2c_freecash_notify']),
                                this['LogoutMsg'](ak['msgID']['enterLobbyMod']),
                                this['LogoutMsg'](ak['msgID']['reqGameRooms']),
                                this['LogoutMsg'](ak['msgID']['reqEntetRoom']),
                                this['LogoutMsg'](ak['msgID']['saveSortGameData']),
                                this['LogoutMsg'](ak['msgID']['showBindCardTip']),
                                ah['message']['off'](as['game_stage_change'], this['on_game_stage_change'], this),
                                ah['message']['off'](as['req_enterGame'], this['reqEnterGame'], this),
                                ah['message']['off'](as['add_lobby_pop'], this['onAddLobbyPop'], this),
                                ah['message']['off'](as['open_lobby_pop'], this['onOpenLobbyPop'], this),
                                ah['message']['off'](as['close_lobby_pop'], this['onCloseLobbyPop'], this),
                                ah['message']['off'](as['enter_game'], this['onEnterSubGame'], this),
                                ah['message']['off'](as['WS_CONNECT'], this['OnSocketConnected'], this),
                                ah['message']['off'](as['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                                ah['message']['off'](as['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this),
                                ah['message']['off'](aX['GAME_ENTER'], this['onGameShow'], this);
                        }
                        ,
                        b6['addLogin2LobbyAction'] = function (b7) {
                            var b8 = this;
                            null == this['login2LobbyActionQueue'] && (this['login2LobbyActionQueue'] = new ag(),
                                this['login2LobbyActionQueue']['complete'] = a2(a3()['mark'](function b9() {
                                    return a3()['wrap'](function (ba) {
                                        for (; ;)
                                            switch (ba['prev'] = ba['next']) {
                                                case 0x0:
                                                    b8['login2LobbyActionQueue'] = null;
                                                case 0x1:
                                                case 'end':
                                                    return ba['stop']();
                                            }
                                    }, b9);
                                }))),
                                this['login2LobbyActionQueue']['push'](a2(a3()['mark'](function ba(bb, bc, bd) {
                                    return a3()['wrap'](function (be) {
                                        for (; ;)
                                            switch (be['prev'] = be['next']) {
                                                case 0x0:
                                                    b7(bb, bc, bd);
                                                case 0x1:
                                                case 'end':
                                                    return be['stop']();
                                            }
                                    }, ba);
                                })));
                        }
                        ,
                        b6['onEnter'] = function (b7, b8, b9) {
                            var ba = this;
                            if (b7) {
                                this['updatePlayerInfo'](b8),
                                    b9 && (this['addNetProcess'](al['s2c_session_verify'], this['on_s2c_session_verify']),
                                        this['on_s2c_hall_enter'](null));
                                var bb = ah['storage']['getNumber'](b1['loginCount'], 0x0);
                                bb++,
                                    ah['storage']['set'](b1['loginCount'], bb);
                                var bc = aq['getString'](b1['recentPlayGames']);
                                if (!av['StringIsNullOrEmpty'](bc)) {
                                    var bd = JSON['parse'](bc);
                                    if (null != bd && bd['length'] > 0x0) {
                                        var be = {
                                            'recentPlayGames': bd
                                        };
                                        ao['Instance']['setGameState'](this, be);
                                    }
                                }
                                if (a7['isNative']) {
                                    var bf = aW['getAppVersion']()['split']('.');
                                    parseInt(bf[0x0]) >= 0x2 && aV['init'](b8['vipLevel'], b8['vipExp'], bb);
                                }
                                this['setBindCardTipsPopJob']();
                            }
                            this['updateLobbyState'](!0x1),
                                this['initLocalNotify'](),
                                this['tryReportReferrer'](),
                                this['reqLobbyBaseData'](),
                                this['showTranslationView'](),
                                b7 && (this['addLogin2LobbyAction'](function (bg, bh, bi) {
                                    ba['reqRemoteGameList'](bg);
                                }),
                                    this['addLogin2LobbyAction'](function (bg, bh, bi) {
                                        ba['showLobbyView'](bg);
                                    }));
                        }
                        ,
                        b6['reqRemoteGameList'] = function (b7) {
                            var b8 = 'gameListConfig.json'
                                , b9 = a7['isBrowser'] ? b8 : '' + aC['nativeUrl'] + b8;
                            av['httpGet'](b9, function (ba, bb) {
                                for (var bc in aT) {
                                    var bd = aT[bc];
                                    aU[bc] = bd;
                                }
                                if (!ba) {
                                    var be = JSON['parse'](bb);
                                    be && be['forEach'](function (bf) {
                                        aU[bf['ID']] = bf['info'];
                                    });
                                }
                                b7();
                            });
                        }
                        ,
                        b6['showTranslationView'] = function () {
                            aq['Loading']['SetLoadingProgress'](0x0);
                            var b7 = ay['initGame'];
                            b7 = ax['getLangByID'](b7),
                                aq['Loading']['ShowLoading'](!0x0, b7),
                                aq['Loading']['SetLoadingProgress'](0.5, 0x1);
                        }
                        ,
                        b6['showLobbyView'] = (function () {
                            var b7 = a2(a3()['mark'](function b8(b9) {
                                var ba, bb, bc, bd, be, bf, bg, bh = this;
                                return a3()['wrap'](function (bi) {
                                    for (; ;)
                                        switch (bi['prev'] = bi['next']) {
                                            case 0x0:
                                                if (this['reqLobbyExData'](),
                                                    this['view']['show'](),
                                                    this['view']['refresh'](!0x0),
                                                    ba = null,
                                                    ba = this['isForceBackGame'] ? function (bj) {
                                                        bh['isForceBackGame'] = !0x1,
                                                            aq['Loading']['SetLoadingProgress'](0x0, 0x0),
                                                            null == b9 || b9();
                                                    }
                                                        : function (bj) {
                                                            bh['updateLobbyState'](!0x0),
                                                                aq['Loading']['ShowLoading'](!0x1),
                                                                av['playSoundLan']('58', af['game']['toString']()),
                                                                bh['showAdd2Main'](),
                                                                null == b9 || b9();
                                                        }
                                                    ,
                                                    bb = a7['isNative'] ? 'prefab' : '',
                                                    !(null != (bc = [{
                                                        'bundle': af['activity']['toString'](),
                                                        'res': bb
                                                    }, {
                                                        'bundle': af['sign']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['store']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['profile']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['mail']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['safe']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['vip']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['rewardPop']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['rank']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['service']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['agent']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['turntable']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['recycle']['toString'](),
                                                        'res': ''
                                                    }, {
                                                        'bundle': af['stageRecharge']['toString'](),
                                                        'res': bb
                                                    }, {
                                                        'bundle': af['cashFree']['toString'](),
                                                        'res': bb
                                                    }, {
                                                        'bundle': af['gameInGame']['toString'](),
                                                        'res': ''
                                                    }]) && bc['length'] > 0x0)) {
                                                    bi['next'] = 0x17;
                                                    break;
                                                }
                                                this['loadModQueue'] = new ag(),
                                                    bd = a7['isBrowser'] ? null : function (bj) {
                                                        var bk = (bj + 0x1) / bc['length'] * 0.5 + 0.5
                                                            , bl = bj < bc['length'] - 0x1 ? null : ba;
                                                        aq['Loading']['SetLoadingProgress'](bk, 0x1, bl);
                                                    }
                                                    ,
                                                    be = function (bj, bk) {
                                                        aq['log']['logBusiness']('lobbyMain\x20showLobbyView:preload\x20' + bj['bundle'] + '/' + bj['res'] + '\x20error\x20' + bk);
                                                    }
                                                    ,
                                                    bf = a3()['mark'](function bj(bk) {
                                                        var bl, bm;
                                                        return a3()['wrap'](function (bn) {
                                                            for (; ;)
                                                                switch (bn['prev'] = bn['next']) {
                                                                    case 0x0:
                                                                        bl = bc[bk],
                                                                            bm = av['StringIsNullOrEmpty'](bl['res']) ? function (bo) {
                                                                                ah['res']['loadBundle'](bl['bundle'])['then'](function (bp) {
                                                                                    null == bd || bd(bk),
                                                                                        bo();
                                                                                })['catch'](function (bp) {
                                                                                    null == be || be(bl);
                                                                                });
                                                                            }
                                                                                : function (bo) {
                                                                                    ah['res']['loadDir'](bl['bundle'], bl['res'], function (bp, bq) {
                                                                                        null != bp ? null == be || be(bl, bp) : null == bd || bd(bk),
                                                                                            bo();
                                                                                    });
                                                                                }
                                                                            ,
                                                                            bh['loadModQueue']['push'](a2(a3()['mark'](function bo(bp, bq, br) {
                                                                                return a3()['wrap'](function (bs) {
                                                                                    for (; ;)
                                                                                        switch (bs['prev'] = bs['next']) {
                                                                                            case 0x0:
                                                                                                av['loadLanBundle'](bl['bundle'], function () {
                                                                                                    bm(bp);
                                                                                                });
                                                                                            case 0x1:
                                                                                            case 'end':
                                                                                                return bs['stop']();
                                                                                        }
                                                                                }, bo);
                                                                            })));
                                                                    case 0x3:
                                                                    case 'end':
                                                                        return bn['stop']();
                                                                }
                                                        }, bj);
                                                    }),
                                                    bg = 0x0;
                                            case 0xd:
                                                if (!(bg < bc['length'])) {
                                                    bi['next'] = 0x12;
                                                    break;
                                                }
                                                return bi['delegateYield'](bf(bg), 't0', 0xf);
                                            case 0xf:
                                                bg++,
                                                    bi['next'] = 0xd;
                                                break;
                                            case 0x12:
                                                a7['isBrowser'] && aq['Loading']['SetLoadingProgress'](0x1, 0.5, ba),
                                                    this['loadModQueue']['complete'] = a2(a3()['mark'](function bk() {
                                                        return a3()['wrap'](function (bl) {
                                                            for (; ;)
                                                                switch (bl['prev'] = bl['next']) {
                                                                    case 0x0:
                                                                        bh['enterLobbyMod'](af['activity'], !0x0);
                                                                    case 0x1:
                                                                    case 'end':
                                                                        return bl['stop']();
                                                                }
                                                        }, bk);
                                                    })),
                                                    this['loadModQueue']['play'](),
                                                    bi['next'] = 0x18;
                                                break;
                                            case 0x17:
                                                aq['Loading']['SetLoadingProgress'](0x1, 0x3, ba);
                                            case 0x18:
                                            case 'end':
                                                return bi['stop']();
                                        }
                                }, b8, this);
                            }));
                            return function (b9) {
                                return b7['apply'](this, arguments);
                            }
                                ;
                        }()),
                        b6['showAdd2Main'] = function () {
                            a7['isBrowser'] && !aC['bPreview'] && a7['isMobile'] && aC['bAdd2HomeScreen'] && (aC['attType'] != aD['adjust'] && aC['attType'] != aD['appsflyer'] && (a8['fullScreen']() || ah['storage']['getNumber'](b1['loginCount'], 0x0) < 0xa && ah['gui']['open'](ai['add2main'])));
                        }
                        ,
                        b6['showDownloadEntry'] = function () {
                            var b7 = this;
                            if (a7['isBrowser'] && !aC['bPreview'] && aC['bShowDownload']) {
                                var b8 = ao['Instance']['Server']['downloadUrl'];
                                if (av['StringIsNullOrEmpty'](b8))
                                    ah['gui']['remove'](ai['downloadEntry']);
                                else {
                                    var b9 = {
                                        'onAdded': function (ba, bb) {
                                            ba['getComponent'](aM)['init'](function () {
                                                b7['showDownload']();
                                            });
                                        }
                                    };
                                    ah['gui']['open'](ai['downloadEntry'], null, b9),
                                        this['tryAddDownloadPopJob']();
                                }
                            }
                        }
                        ,
                        b6['tryAddDownloadPopJob'] = function () {
                            var b7 = this
                                , b8 = aC['lobbyPopJobConfig'][aO['download']];
                            if (!(b8 <= 0x0)) {
                                if (!(ah['storage']['getNumber'](b1['loginCount'], 0x0) < 0x1)) {
                                    var b9 = new aP(aO['download'], b8, 0xea60);
                                    b9['canPopUp'] = function () {
                                        var ba = ao['Instance']['Server']['downloadUrl'];
                                        return 0x1 != av['StringIsNullOrEmpty'](ba);
                                    }
                                        ,
                                        b9['showView'] = function () {
                                            b7['showDownload']();
                                        }
                                        ,
                                        this['onAddLobbyPop'](as['add_lobby_pop'], b9, void 0x0, void 0x0, !0x0);
                                }
                            }
                        }
                        ,
                        b6['showDownload'] = function () {
                            var b7 = this
                                , b8 = this['popMager']['CurPopType'];
                            if (null == b8 || b8 != aO['download']) {
                                var b9 = {
                                    'onAdded': function (ba, bb) {
                                        ba['active'] = !0x1,
                                            (null != b7['downloadTips'] || (b7['downloadTips'] = ba['getComponent'](aL),
                                                b7['downloadTips']['Init'](ak['modID']['downloadTip'], b7['messager']),
                                                b7['bReady'])) && (b7['downloadTips']['show'](),
                                                    b7['downloadTips']['refresh']());
                                    }
                                };
                                ah['gui']['open'](ai['downloadTips'], null, b9);
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20showDownload:curJob.contentType\x20==\x20popJobType.download');
                        }
                        ,
                        b6['loopJobs'] = function (b7) {
                            var b8 = this;
                            if (null != this['loopJobsTimer'] && (clearTimeout(this['loopJobsTimer']),
                                this['loopJobsTimer'] = null),
                                b7) {
                                var b9 = 0x3e8 * a9['clamp'](aC['lobbyLoopSpace'], 0x5, 0x1e)
                                    , ba = Math['floor'](0x7530 / b9);
                                ba = Math['max'](0x1, ba),
                                    this['loopJobsTimer'] = setInterval(function () {
                                        aa['isPaused']() || (ao['Instance']['State']['account']['logined'] && b8['bReady'] ? (aC['bShowJackpot'] && b8['loopJobCount'] % ba == 0x0 && b8['netRequest'](al['c2s_game_list_jackpot']),
                                            b8['popMager']['loopCall'](),
                                            b8['loopJobCount']++,
                                            b8['loopJobCount'] * b9 >= 0x493e0 && (b8['loopJobCount'] = 0x0,
                                                a7['isBrowser'] && !aS && b8['checkH5Update']())) : null != b8['loopJobsTimer'] && (clearTimeout(b8['loopJobsTimer']),
                                                    b8['loopJobsTimer'] = null));
                                    }, b9);
                            }
                        }
                        ,
                        // b6['checkH5Update'] = function() {
                        //     av['httpGet']('localConfig.json', function(b7, b8) {
                        //         if (!b7) {
                        //             var b9 = JSON['parse'](b8);
                        //             if (b9 && b9['assetsVersion'] != aC['assetsVersion']) {
                        //                 var ba = ay['tips'];
                        //                 ba = ax['getLangByID'](ba);
                        //                 var bb = ax['getLangByTag']('find_new_version', af['lobby'])
                        //                   , bc = {
                        //                     'txt': ax['getLangByID'](ay['ok']),
                        //                     'click': function() {
                        //                         location['reload']();
                        //                     }
                        //                 };
                        //                 aB['Show'](ba, bb, bc);
                        //             }
                        //         }
                        //     });
                        // }
                        // ,
                        b6['initLocalNotify'] = function () {
                            aw['instance']['init']();
                        }
                        ,
                        b6['tryReportReferrer'] = function () { }
                        ,
                        b6['reqLobbyBaseData'] = function () {
                            aC['bShowJackpot'] && this['netRequest'](al['c2s_game_list_jackpot']),
                                this['netRequest'](al['c2s_game_list']);
                        }
                        ,
                        b6['on_s2c_game_list_jackpot'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                if (aC['bShowJackpot']) {
                                    var b8 = b7['data'];
                                    ao['Instance']['updateJackpot'](this, b8['items']),
                                        null == this['login2LobbyActionQueue'] ? this['view']['GameList']['refreshJackpot'](b8['items']) : this['tryEnterLobbyView']();
                                }
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20on_s2c_game_list_jackpot:error\x20' + b7['code']);
                        }
                        ,
                        b6['on_s2c_game_list'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                ao['Instance']['updateGameList'](this, window.getGameList()),
                                    null == this['login2LobbyActionQueue'] ? this['view']['GameList']['refresh']() : this['tryEnterLobbyView']();
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20on_s2c_game_list:error\x20' + b7['code']);
                        }
                        ,
                        b6['on_s2c_hall_enter'] = function (b7) {
                            this['bAllowEnterLobby'] = !0x0,
                                this['tryEnterLobbyView']();
                        }
                        ,
                        b6['tryEnterLobbyView'] = function () {
                            if (this['bAllowEnterLobby']) {
                                if (aC['bShowJackpot']) {
                                    var b7 = ao['Instance']['State']['jackpots'];
                                    if (null == b7 || 0x0 == b7['size'])
                                        return void aq['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20jackpots\x20is\x20null');
                                }
                                var b8 = ao['Instance']['State']['games'];
                                null != b8 && 0x0 != b8['size'] ? null != this['login2LobbyActionQueue'] && this['login2LobbyActionQueue']['size'] > 0x0 ? this['login2LobbyActionQueue']['play']() : aq['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20login2LobbyHandler\x20is\x20null') : aq['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20games\x20is\x20null');
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20tryEnterLobbyView\x20bAllowEnterLobby\x20is\x20false');
                        }
                        ,
                        b6['on_s2c_back_game'] = function (b7) {
                            var b8 = this;
                            if (b7['code'] == au['success']) {
                                var b9 = b7['data'];
                                this['isForceBackGame'] = !0x0;
                                var ba = function (bb, bc, bd) {
                                    var be = ax['getLangByTag']('tips', af['lobby'])
                                        , bf = ax['getLangByTag']('ft_force_back_game', af['lobby'])
                                        , bg = b9['roomInfo']['gameNameId']
                                        , bh = ax['getLangByTag']('name_' + bg);
                                    bf = ac['formatStr'](bf, bh);
                                    var bi = {
                                        'txt': ax['getLangByID'](ay['ok']),
                                        'click': function () {
                                            b8['tryEnterGameRoom'](b9['roomInfo'], !0x0);
                                        }
                                    };
                                    aB['Show'](be, bf, bi),
                                        null == bb || bb();
                                };
                                this['bReady'] ? ba() : this['addLogin2LobbyAction'](ba);
                            }
                        }
                        ,
                        b6['reqLobbyExData'] = function () {
                            var b7 = {};
                            b7['platform'] = a7['isNative'] ? 0x1 : 0x2,
                                this['netRequest'](al['c2s_server_cfg'], b7),
                                this['reqRedPoint'](),
                                this['netRequest'](al['c2s_lobby_marquee']),
                                this['reqDownloadAppCfg']();
                        }
                        ,
                        b6['reqRedPoint'] = function () {
                            var b7 = Date['now']()
                                , b8 = ao['Instance']['Player']['coin'] > 0x2710 || ao['Instance']['Player']['vip'] > 0x1 ? 0x1d4c0 : 0x493e0;
                            (0x0 == this['lastReqRedPointTime'] || b7 - this['lastReqRedPointTime'] > b8) && (this['netRequest'](al['c2s_red_point']),
                                this['lastReqRedPointTime'] = b7);
                        }
                        ,
                        b6['reqDownloadAppCfg'] = function () {
                            var b7 = this;
                            if (a7['isBrowser'] && !aC['bPreview']) {
                                var b8 = ao['Instance']['PlayerBaseInfo']
                                    , b9 = ao['Instance']['State']['deviceCode']
                                    , ba = ao['Instance']['getLocalToken'](b9)
                                    , bb = {
                                        'type': aJ['req']['requests']['downloadCfg'],
                                        'UserID': b8['id'],
                                        'deviceCode': b9,
                                        'token': ba['token'],
                                        'timestamp': ba['syncStamp']
                                    };
                                this['HttpPost'](aJ['req']['cmd'], bb, function (bc) {
                                    var bd = b7['parseHttpData'](bc);
                                    if (bd['code'] == aK['success']) {
                                        var be = bd['ApkDownload'];
                                        a7['OS']['IOS'] == a7['os'] && (be = bd['IosDownload']);
                                        var bf = {
                                            'downloadUrl': be,
                                            'downloadReward': bd['LoginPresent']
                                        };
                                        ao['Instance']['setServerState'](b7, bf);
                                    }
                                });
                            }
                        }
                        ,
                        b6['on_s2c_server_cfg'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                var b8 = b7['data']
                                    , b9 = !aC['bPreview'];
                                av['StringIsNullOrEmpty'](b8['DefaultCurrency']) || (aC['currency'] = b8['DefaultCurrency']);
                                var ba = {
                                    'minCharge': b8['ChargeMinAmount'],
                                    'maxCharge': b8['ChargeMaxAmount'],
                                    'coinSymbol': b8['DefaultCurrencySymbol'],
                                    'reward4Bind': b8['BindMobileRewardMoney'],
                                    'reward4FirstCharge': b8['FirstRechangeGiftCoin'],
                                    'bOpenInviteGift': 0x1 == b8['sharereferStatus'] && b9,
                                    'bOpenSign': 0x1 == b8['signmode'],
                                    'nameMaxLen': b8['MaxNickNameLen'],
                                    'bMallBindPhone': 0x1 == b8['bindmobileshop'],
                                    'bindmobilewithdraw': 0x0 == b8['bindmobilewithdraw'],
                                    'bCardMode': 0x1 == b8['bindcardmode']
                                };
                                ao['Instance']['setServerState'](this, ba);
                                var bb = {
                                    'changeHeadCount': b8['ModifyLogoTimes'],
                                    'changeNameCount': b8['ModifyNickNameTimes']
                                };
                                if (ao['Instance']['setPlayerState'](this, bb),
                                    b9)
                                    this['setBindTipsPopJob'](),
                                        this['showFirstOfferPop']();
                                else
                                    ao['Instance']['setPlayerState'](this, {
                                        'bFirstRecharge': !0x1
                                    });
                            }
                            this['view']['Top']['refreshDynamicEntry']();
                        }
                        ,
                        b6['setBindTipsPopJob'] = function () {
                            var b7 = this
                                , b8 = ao['Instance']['Player']['regtype'];
                            if (ao['Instance']['Server']['reward4Bind'] > 0x0 && b8 == ap['guest']) {
                                var b9 = new aP(aO['bindTips'], aC['lobbyPopJobConfig'][aO['bindTips']], 0x0);
                                b9['canPopUp'] = function () {
                                    var ba = ao['Instance']['State']['player']['phone'];
                                    return av['StringIsNullOrEmpty'](ba);
                                }
                                    ,
                                    b9['showView'] = function () {
                                        b7['showBindTips']();
                                    }
                                    ,
                                    this['onAddLobbyPop'](as['add_lobby_pop'], b9, void 0x0, void 0x0, !0x0);
                            }
                        }
                        ,
                        b6['setBindCardTipsPopJob'] = function () {
                            var b7 = this;
                            if (ao['Instance']['Player']['bindCardmoney'] > 0x0) {
                                var b8 = ao['Instance']['Server']['bindmobilewithdraw'];
                                if (!av['StringIsNullOrEmpty'](ao['Instance']['State']['player']['phone']) || b8) {
                                    var b9 = new aP(aO['bindCardTips'], 0x2, 0x0);
                                    b9['canPopUp'] = function () {
                                        return ao['Instance']['Player']['bindCardmoney'] > 0x0;
                                    }
                                        ,
                                        b9['showView'] = function () {
                                            b7['showBindCardTips']();
                                        }
                                        ,
                                        this['onAddLobbyPop'](as['add_lobby_pop'], b9, void 0x0, void 0x0, !0x0);
                                }
                            }
                        }
                        ,
                        b6['showBindTips'] = function () {
                            var b7 = this
                                , b8 = {
                                    'onAdded': function (b9, ba) {
                                        b9['active'] = !0x1,
                                            null == b7['bindTips'] && (b7['bindTips'] = b9['getComponent'](aH),
                                                b7['bindTips']['Init'](ak['modID']['bindTip'], b7['messager'])),
                                            b7['bindTips']['show'](),
                                            b7['bindTips']['refresh'](ao['Instance']['Server']['reward4Bind']);
                                    }
                                };
                            ah['gui']['open'](ai['bindTips'], null, b8);
                        }
                        ,
                        b6['showBindCardTips'] = function () {
                            var b7 = this
                                , b8 = {
                                    'onAdded': function (b9, ba) {
                                        b9['active'] = !0x1,
                                            null == b7['bindCardTips'] && (b7['bindCardTips'] = b9['getComponent'](aY),
                                                b7['bindCardTips']['Init'](ak['modID']['bindCardTip'], b7['messager'])),
                                            b7['bindCardTips']['show'](),
                                            b7['bindCardTips']['refresh'](ao['Instance']['Player']['bindCardmoney']);
                                    }
                                };
                            ah['gui']['open'](ai['bindCardTips'], null, b8);
                        }
                        ,
                        b6['showSecondOfferPop'] = function () {
                            var b7 = this
                                , b8 = new aP(aO['secondOffer'], aC['lobbyPopJobConfig'][aO['secondOffer']], 0x0);
                            b8['canPopUp'] = function () {
                                return ao['Instance']['Server']['bOpenSecondOffer'];
                            }
                                ,
                                b8['showView'] = function () {
                                    b7['enterLobbyMod'](af['store'], 0x2);
                                }
                                ,
                                this['onAddLobbyPop'](as['add_lobby_pop'], b8, void 0x0, void 0x0, !0x0);
                        }
                        ,
                        b6['showFirstOfferPop'] = function () {
                            var b7 = this
                                , b8 = ao['Instance']['State']['player']['bFirstRecharge'] && ao['Instance']['Server']['reward4FirstCharge'] > 0x0
                                , b9 = new aP(aO['firstOffer'], aC['lobbyPopJobConfig'][aO['firstOffer']], 0x0);
                            b9['canPopUp'] = function () {
                                return b8;
                            }
                                ,
                                b9['showView'] = function () {
                                    b7['enterLobbyMod'](af['store'], 0x1);
                                }
                                ,
                                this['onAddLobbyPop'](as['add_lobby_pop'], b9, void 0x0, void 0x0, !0x0);
                            var ba = {
                                'bFirstRecharge': b8
                            };
                            ao['Instance']['setPlayerState'](this, ba);
                        }
                        ,
                        b6['on_s2c_red_point'] = function (b7) {
                            var b8 = b7['data'];
                            b8['points'] = b8['points'] || [];
                            for (var b9, ba = new Map(), bb = a4(b8['points']); !(b9 = bb())['done'];) {
                                var bc = b9['value'];
                                ba['set'](bc['tag'], bc['num']);
                            }
                            ao['Instance']['updateRedPoints'](this, ba);
                        }
                        ,
                        b6['on_s2c_lobby_marquee'] = function (b7) {
                            if (b7['code'] == au['success'] && !aC['bPreview']) {
                                var b8 = b7['data'];
                                null != b8['marqueelist'] && aw['instance']['pushBroadcast'](b8['marqueelist'], this['bReady']);
                            }
                        }
                        ,
                        b6['saveSortGameData'] = function (b7) {
                            ao['Instance']['updateSortGame'](this, b7);
                        }
                        ,
                        b6['checkNeedInstall'] = function () {
                            if (a7['isBrowser'] && aC['InstallAfterBuy'] && ao['Instance']['Player']['alreayBuy']) {
                                var b7 = ao['Instance']['Server']
                                    , b8 = b7['downloadUrl'];
                                if (!av['StringIsNullOrEmpty'](b8)) {
                                    var b9 = ax['getLangByTag']('account_safe')
                                        , ba = ax['getLangByTag']('depositInstall')
                                        , bb = ah['storage']['get'](b1['areaCode'], '')
                                        , bc = ah['storage']['get'](b1['account'], 'unkown');
                                    bc = '+' + bb + '-' + bc;
                                    var bd = (null == b7 ? void 0x0 : b7['downloadReward']) > 0x0 ? '' + (null == b7 ? void 0x0 : b7['coinSymbol']) + aq['FormatCoins'](b7['downloadReward'], ar['Thousandths'], !0x1) : '';
                                    ba = (ba = ba['replace']('#account', bc))['replace']('#reward', bd);
                                    var be = {
                                        'txt': ax['getLangByID'](ay['close'])
                                    }
                                        , bf = {
                                            'txt': ax['getLangByID'](ay['ok']),
                                            'click': function () {
                                                av['openUrl'](b8);
                                            }
                                        };
                                    return aB['Show'](b9, ba, be, bf, !0x0),
                                        !0x0;
                                }
                            }
                            return !0x1;
                        }
                        ,
                        b6['reqGameRoomList'] = function (b7) {
                            if (!this['checkNeedInstall']()) {
                                this['showLoading'](!0x0);
                                var b8 = Date['now']();
                                if (this['lastReqGameRoomsTime'] > 0x0 && b8 - this['lastReqGameRoomsTime'] < 0x2710) {
                                    var b9 = ax['getLangByTag']('bad_net_work', af['lobby']);
                                    aq['toast'](b9);
                                } else {
                                    this['lastReqGameRoomsTime'] = b8;
                                    var ba = {
                                        'gameId': b7
                                    };
                                    this['netRequest'](al['c2s_game_room'], ba);
                                }
                            }
                        }
                        ,
                        b6['on_s2c_game_room'] = function (b7) {
                            if (this['showLoading'](!0x1),
                                this['lastReqGameRoomsTime'] = 0x0,
                                b7['code'] == au['success']) {
                                var b8 = b7['data']['rooms'];
                                if (null == b8 || 0x0 == b8['length'])
                                    return;
                                if (0x1 == b8['length']) {
                                    var b9 = b8[0x0];
                                    this['reqEnterGameRoom'](b9);
                                } else
                                    b8 = b8['sort'](function (ba, bb) {
                                        return ba['screenType'] - bb['screenType'];
                                    }),
                                        this['view']['GameRooms']['showRooms'](b8);
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20on_s2c_game_room:error\x20' + b7['code']),
                                    this['showErrorCode'](b7['code']);
                        }
                        ,
                        b6['reqEnterGameRoom'] = function (b7) {
                            this['showLoading'](!0x0);
                            var b8 = Date['now']();
                            if (this['lastReqRoomInfoTime'] > 0x0 && b8 - this['lastReqRoomInfoTime'] < 0x2710) {
                                var b9 = ax['getLangByTag']('be_req_enter_room', af['lobby']);
                                aq['toast'](b9);
                            } else {
                                var ba = ao['Instance']['PlayerBaseInfo'];
                                if (ba['vip'] < b7['vipLimit']) {
                                    this['showLoading'](!0x1);
                                    var bb = ax['getLangByID'](ay['game_vip_less']);
                                    aq['toast'](bb);
                                } else {
                                    if (ba['coin'] < b7['lessPoint'])
                                        this['showLoading'](!0x1),
                                            bb = ax['getLangByID'](ay['sitdown_error_no_enough_money']),
                                            aq['toast'](bb);
                                    else {
                                        var bc = {
                                            'gameId': b7['gameId'],
                                            'roomId': b7['roomId']
                                        };
                                        this['netRequest'](al['c2s_enter_room'], bc),
                                            this['lastReqRoomInfoTime'] = b8;
                                    }
                                }
                            }
                        }
                        ,
                        b6['on_s2c_enter_room'] = function (b7) {
                            if (this['showLoading'](!0x1),
                                this['lastReqRoomInfoTime'] = 0x0,
                                b7['code'] == au['success']) {
                                if (null != aq['gamePlatform']['EnterParams'])
                                    return void aq['log']['logBusiness']('lobbyMain\x20on_s2c_enter_room:is\x20entering\x20game' + aq['gamePlatform']['EnterParams']['gameID']);
                                var b8 = b7['data'];
                                this['tryEnterGameRoom'](b8);
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20on_s2c_enter_room:error\x20' + b7['code']),
                                    this['showErrorCode'](b7['code']);
                        }
                        ,
                        b6['tryEnterGameRoom'] = function (b7, b8) {
                            var b9, ba = this;
                            if (void 0x0 === b8 && (b8 = !0x1),
                                null == b7)
                                return !0x1;
                            if (0x0 == (null == (b9 = aU[b7['gameNameId']]) ? void 0x0 : b9['open']))
                                return aq['toast']('Mini-game[' + b7['gameNameId'] + ']\x20is\x20shut\x20down,try\x20latter'),
                                    !0x1;
                            if (!av['StringIsNullOrEmpty'](b7['gameurl'])) {
                                if (a7['isNative'])
                                    this['enterLobbyMod'](af['gameInGame'], b7);
                                else {
                                    if (a7['isBrowser']) {
                                        var bb = ax['getLangByID'](ay['tips'])
                                            , bc = ax['getLangByTag']('open_web_game_tips', af['lobby'])
                                            , bd = {
                                                'txt': ax['getLangByID'](ay['ok']),
                                                'click': function () {
                                                    az['Instance']['Close'](aA['Lobby'], 0x3e8, 'enter\x20game'),
                                                        ba['updateLobbyState'](!0x1),
                                                        a7['openURL'](b7['gameurl']);
                                                }
                                            }
                                            , be = {
                                                'txt': ax['getLangByID'](ay['close']),
                                                'click': function () { }
                                            };
                                        aB['Show'](bb, bc, bd, be);
                                    }
                                }
                                return this['view']['GameRooms']['close'](null, !0x0),
                                    !0x0;
                            }
                            if (av['StringIsNullOrEmpty'](b7['serverIp']))
                                return aq['toast']('Link\x20info\x20is\x20broken,try\x20latter'),
                                    !0x1;
                            var bf = ao['Instance']['Player']
                                , bg = b7['socketPort'] > 0x0 ? b7['socketPort'] : null
                                , bh = {
                                    'vipLv': bf['vip'],
                                    'events': ao['Instance']['Server']['attrEvent'],
                                    'playLimit': 0x1 == b7['limitbet']
                                }
                                , bi = {
                                    'playerName': bf['name'],
                                    'playerHead': bf['head'],
                                    'gameID': b7['gameNameId'],
                                    'session': bf['session'],
                                    'host': b7['serverIp'],
                                    'port': bg,
                                    'lobby': bh,
                                    'baseScore': null == b7 ? void 0x0 : b7['basescore'],
                                    'playCount': null == b7 ? void 0x0 : b7['playcount'],
                                    'winList': null == b7 ? void 0x0 : b7['winlist']
                                };
                            if (a7['isBrowser']) {
                                var bj = 'name_' + b7['gameNameId'];
                                bj = ax['getLangByTag'](bj),
                                    av['setGameTitle'](bj);
                            }
                            this['view']['GameRooms']['close'](null, !0x0),
                                aq['gamePlatform']['enterGame'](bi, b8),
                                ah['message']['dispatchEvent'](as['game_stage_change'], at['game'], at['lobby']);
                        }
                        ,
                        b6['on_game_stage_change'] = function (b7, b8, b9) {
                            var ba, bb, bc, bd;
                            if (b8 == at['lobby']) {
                                if (ah['audio']['playMusic']('content/audio/lobby', null, af['customer']['toString']()),
                                    b9 == at['game']) {
                                    var be = aC['connection']['tcp']['host']
                                        , bf = aC['connection']['tcp']['port'];
                                    az['Instance']['Connect'](aA['Lobby'], be, bf),
                                        this['view']['show'](),
                                        this['view']['refresh'](!0x1),
                                        av['setGameTitle'](aC['gameTitle']);
                                }
                            } else
                                b9 == at['lobby'] && (az['Instance']['Close'](aA['Lobby'], 0x3e8, 'enter\x20game'),
                                    this['view']['close'](),
                                    null == (ba = this['bindTips']) || ba['close'](null, !0x0),
                                    null == (bb = this['bindCardTips']) || bb['close'](null, !0x0),
                                    null == (bc = this['downloadTips']) || bc['close'](null, !0x0),
                                    this['updateLobbyState'](!0x1),
                                    b8 == at['login'] && (this['bAllowEnterLobby'] = !0x1,
                                        null == (bd = this['popMager']) || bd['resetPopFlag'](),
                                        this['lastReqRedPointTime'] = 0x0));
                        }
                        ,
                        b6['OnSocketConnected'] = function (b7, b8, b9) {
                            if (b8 == aA['Lobby'] && ao['Instance']['Account']['logined']) {
                                if (b9) {
                                    var ba, bb;
                                    if ((null == (ba = this['loadModQueue']) ? void 0x0 : ba['size']) > 0x0)
                                        null == (bb = this['loadModQueue']) || bb['play']();
                                    aq['log']['logBusiness']('game\x20back\x20to\x20lobby:connect\x20success'),
                                        this['on_notify_session_overdue'](null);
                                } else
                                    console['log']('game\x20back\x20to\x20lobby:verify\x20fail');
                            }
                        }
                        ,
                        b6['OnSocketClose'] = function (b7, b8) {
                            b8 == aA['Lobby'] && ao['Instance']['Account']['logined'];
                        }
                        ,
                        b6['OnSocketReconnectFailed'] = function (b7, b8) {
                            if (b8 == aA['Lobby'] && ao['Instance']['Account']['logined']) {
                                var b9 = ay['error'];
                                b9 = ax['getLangByID'](b9);
                                var ba = ay['netBreak'];
                                ba = ax['getLangByID'](ba);
                                var bb = {
                                    'txt': ax['getLangByID'](ay['reconnect']),
                                    'click': function () {
                                        var bc = aC['connection']['tcp']['host']
                                            , bd = aC['connection']['tcp']['port'];
                                        az['Instance']['Connect'](aA['Lobby'], bc, bd);
                                    }
                                };
                                aB['Show'](b9, ba, bb);
                            }
                        }
                        ,
                        b6['reqEnterGame'] = function (b7, b8) {
                            this['reqGameRoomList'](b8);
                        }
                        ,
                        b6['on_notify_session_overdue'] = function (b7) {
                            this['showLoading'](!0x0),
                                (ao['Instance']['setAccountState'](this, {
                                    'logined': !0x1
                                }),
                                    this['updateLobbyState'](!0x1));
                            var b8 = ao['Instance']['State']['player']
                                , b9 = {
                                    'uid': b8['id'],
                                    'deviceCode': ao['Instance']['State']['deviceCode'],
                                    'session': b8['session']
                                };
                            this['netRequest'](al['c2s_session_verify'], b9);
                        }
                        ,
                        b6['on_s2c_session_verify'] = function (b7) {
                            if (this['showLoading'](!0x1),
                                b7['code'] == au['success']) {
                                var b8 = b7['data'];
                                this['updatePlayerInfo'](b8),
                                    this['reqLobbyBaseData'](),
                                    this['reqLobbyExData'](),
                                    this['updateLobbyState'](!0x0);
                            } else
                                console['log']('lobbyMain\x20on_s2c_session_verify:login\x20fail' + b7['code']),
                                    this['showErrorCode'](b7['code'], !0x0),
                                    b7['code'] == am['error_code']['session_error'] && ah['message']['dispatchEvent'](as['game_stage_change'], at['login'], at['lobby']);
                        }
                        ,
                        b6['on_notify_big_win'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                var b8 = b7['data'];
                                if (null == b8['noticelist'] || 0x0 == b8['noticelist']['length'])
                                    return;
                                aw['instance']['pushWinner'](b8['noticelist'], this['bReady']);
                            }
                        }
                        ,
                        b6['on_notify_kick_out'] = function (b7) {
                            var b8 = ax['getLangByTag']('tips', af['lobby'])
                                , b9 = 0x1 == b7['code'] ? 'replace' : 'kickout';
                            b9 = ax['getLangByTag'](b9, af['lobby']);
                            var ba = {
                                'txt': ax['getLangByID'](ay['ok']),
                                'click': null
                            };
                            aB['Show'](b8, b9, ba),
                                this['view']['GameRooms']['close'](null, !0x0),
                                ah['message']['dispatchEvent'](as['game_stage_change'], at['login'], at['lobby']);
                        }
                        ,
                        b6['on_notify_user_info_update'] = function (b7) {
                            var b8 = this;
                            if (b7['code'] == au['success']) {
                                var b9 = b7['data']
                                    , ba = ao['Instance']['Player']['coin']
                                    , bb = function () {
                                        var bd = {
                                            'name': b9['name'],
                                            'head': b9['logoId'],
                                            'coin': b9['money'],
                                            'vip': b9['vipLevel'],
                                            'vipExp': b9['vipExp']
                                        };
                                        0x0 == av['StringIsNullOrEmpty'](b9['areaCode']) && (bd['areaNo'] = b9['areaCode']),
                                            0x0 == av['StringIsNullOrEmpty'](b9['phoneNo']) && (bd['phone'] = b9['phoneNo']),
                                            ao['Instance']['setPlayerState'](b8, bd);
                                    };
                                if (ba != b9['money']) {
                                    if (0x3 == b9['type'] || b9['changed'] <= 0x0)
                                        bb();
                                    else {
                                        var bc = [{
                                            'type': aF['coin'],
                                            'num': b9['changed']
                                        }];
                                        aG['Show'](bc, function () {
                                            bb();
                                            var bd = new aP(aO['stageCharge'], 0x1, 0x0);
                                            bd['canPopUp'] = function () {
                                                return ao['Instance']['Server']['bShowStageCharge'];
                                            }
                                                ,
                                                bd['showView'] = function () {
                                                    b8['enterLobbyMod'](af['stageRecharge']);
                                                }
                                                ,
                                                b8['onAddLobbyPop'](as['add_lobby_pop'], bd, !0x0);
                                        });
                                    }
                                }
                            }
                        }
                        ,
                        b6['tryTrackRevenueEvent'] = function (b7, b8) {
                            var b9 = ao['Instance']['PlayerBaseInfo']['id']['toString']()
                                , ba = {
                                    'id': b9,
                                    'cid': aC['CurrentChannel'],
                                    'domian': aC['IpInfo']['href']
                                };
                            if (av['StringIsNullOrEmpty'](aC['webEventCode'])) {
                                if (!aC['isS2S']) {
                                    var bb = ao['Instance']['Server']['attrEvent'];
                                    if (null != bb) {
                                        var bc = bb['get'](b7);
                                        null != bc ? aq['ThirdAdapter']['trackRevenueEvent'](bc, b9, b8, null, ba) : aq['log']['logBusiness']('trackRevenueEvent\x20failed:could\x20not\x20found\x20eventKey');
                                    } else
                                        aq['log']['logBusiness']('trackRevenueEvent\x20failed:could\x20not\x20found\x20eventMap');
                                }
                            } else
                                aq['ThirdAdapter']['trackRevenueEvent'](b7, b9, b8, null, ba);
                            var bd = b7;
                            aZ['Instance']()['trackEvent'](new b0(bd, b8, aC['currency']));
                        }
                        ,
                        b6['on_notify_recharge_info'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                var b8 = b7['data']
                                    , b9 = 0x1 == b8['firstRecharge'] ? aI['firstCharge'] : aI['charge']
                                    , ba = b8['rechargeCash'];
                                this['tryTrackRevenueEvent'](b9, ba),
                                    (ao['Instance']['setPlayerState'](this, {
                                        'alreayBuy': !0x0
                                    }),
                                        this['checkNeedInstall']());
                            }
                        }
                        ,
                        b6['on_s2c_cashFree_newHelp'] = function (b7) {
                            if (0x0 == b7['code']) {
                                var b8 = b7['data'];
                                this['enterLobbyMod'](af['cashFree'], b8);
                            }
                        }
                        ,
                        b6['on_s2c_cashFree_show'] = function (b7) {
                            var b8 = this;
                            if (0x0 == b7['code']) {
                                var b9;
                                this['showLoading'](!0x1);
                                var ba = b7['data']
                                    , bb = ba['status']
                                    , bc = {
                                        'freeCashStatus': bb,
                                        'freeCashMoney': ba['complatemoney']
                                    };
                                if (ao['Instance']['setServerState'](this, bc),
                                    0x0 == bb) {
                                    var bd = new aP(aO['cashFreeFirst'], aC['lobbyPopJobConfig'][aO['cashFreeFirst']], 0x0);
                                    bd['canPopUp'] = function () {
                                        return 0x0 == ao['Instance']['Server']['freeCashStatus'] && '0' == ah['storage']['get'](b1['freeCashStatus'], '0');
                                    }
                                        ,
                                        bd['showView'] = function () {
                                            b8['enterLobbyMod'](af['cashFree']);
                                        }
                                        ,
                                        this['onAddLobbyPop'](as['add_lobby_pop'], bd, void 0x0, void 0x0, !0x0);
                                } else
                                    0x2 == bb && ah['message']['dispatchEvent'](as['activityClose'], af['cashFree']);
                                null == (b9 = this['view']) || b9['Top']['refreshDynamicEntry']();
                            }
                        }
                        ,
                        b6['on_s2c_show_stage'] = function (b7) {
                            var b8 = this
                                , b9 = b7['code'];
                            if (0x0 == b9) {
                                var ba;
                                ao['Instance']['setServerState'](this, {
                                    'bShowStageCharge': !0x0
                                });
                                var bb = new aP(aO['stageCharge'], aC['lobbyPopJobConfig'][aO['stageCharge']], 0x0);
                                bb['canPopUp'] = function () {
                                    return ao['Instance']['Server']['bShowStageCharge'];
                                }
                                    ,
                                    bb['showView'] = function () {
                                        b8['enterLobbyMod'](af['stageRecharge']);
                                    }
                                    ,
                                    this['onAddLobbyPop'](as['add_lobby_pop'], bb, void 0x0, void 0x0, !0x0),
                                    null == (ba = this['view']) || ba['Top']['refreshDynamicEntry']();
                            } else {
                                if (0x4 == b9) {
                                    var bc;
                                    ao['Instance']['setServerState'](this, {
                                        'bShowStageCharge': !0x1
                                    }),
                                        null == (bc = this['view']) || bc['Top']['refreshDynamicEntry']();
                                } else
                                    aq['log']['logBusiness']('on_s2c_show_stage\x20' + b9);
                            }
                        }
                        ,
                        b6['on_s2c_notify_goods'] = function (b7) {
                            if (b7['code'] == au['success']) {
                                var b8, b9 = b7['data'], ba = {
                                    'bOpenFirstOffer': 0x1 == b9['firstgift'],
                                    'bOpenSecondOffer': 0x1 == b9['secondgift']
                                };
                                ao['Instance']['setServerState'](this, ba);
                                var bb = {
                                    'bFirstRecharge': b9['firstgift']
                                };
                                ao['Instance']['setPlayerState'](this, bb),
                                    null == (b8 = this['view']) || b8['Top']['refreshDynamicEntry'](),
                                    b9['firstgift'] ? this['showFirstOfferPop']() : b9['secondgift'] && this['showSecondOfferPop']();
                            }
                        }
                        ,
                        b6['GetSubModByID'] = function (b7) {
                            switch (b7) {
                                case ak['modID']['view']:
                                    return this['view'];
                                case ak['modID']['bindTip']:
                                    return this['bindTips'];
                                case ak['modID']['bindCardTip']:
                                    return this['bindCardTips'];
                            }
                        }
                        ,
                        b6['onAddLobbyPop'] = function (b7, b8, b9, ba, bb) {
                            void 0x0 === b9 && (b9 = !0x1),
                                void 0x0 === ba && (ba = !0x0),
                                void 0x0 === bb && (bb = !0x1),
                                this['popMager']['addPopJob'](b8, b9, ba, bb);
                        }
                        ,
                        b6['onOpenLobbyPop'] = function (b7, b8, b9) {
                            this['popMager']['onPopup'](b8, b9);
                        }
                        ,
                        b6['onCloseLobbyPop'] = function (b7, b8, b9) {
                            this['popMager']['onClose'](b8, b9);
                        }
                        ,
                        b6['onEnterSubGame'] = function (b7, b8) {
                            var b9 = this
                                , ba = function (bd) {
                                    var be = {
                                        'recentPlayGames': bd
                                    };
                                    ao['Instance']['setGameState'](b9, be);
                                    var bf = JSON['stringify'](ao['Instance']['State']['recentPlayGames']);
                                    aq['setString'](b1['recentPlayGames'], bf);
                                };
                            if (null != ao['Instance']['State']['recentPlayGames'] && ao['Instance']['State']['recentPlayGames']['length'] > 0x0) {
                                var bb = []['concat'](ao['Instance']['State']['recentPlayGames'])
                                    , bc = bb['findIndex'](function (bd) { });
                                0x0 != bc && (bc > -0x1 && bb['splice'](bc, 0x1),
                                    bb['unshift'](b8),
                                    ba(bb));
                            } else
                                ba([b8]);
                        }
                        ,
                        b6['updateLobbyState'] = function (b7) {
                            this['bReady'] = b7,
                                b7 && aw['instance']['resetWidget'](!0x0, 0x30c, new ab(0x0, 0x5a)),
                                ah['message']['dispatchEvent'](as['notify_show'], b7),
                                this['loopJobs'](b7),
                                this['popMager']['pausePop'](!b7, !0x0),
                                b7 ? this['showDownloadEntry']() : (ah['gui']['remove'](ai['add2main']),
                                    ah['gui']['remove'](ai['downloadEntry'], !0x1));
                        }
                        ,
                        b6['updatePlayerInfo'] = function (b7) {
                            var b8 = {
                                'session': b7['session'],
                                'id': b7['uid'],
                                'name': b7['name'],
                                'head': b7['logoId'],
                                'coin': b7['money'],
                                'vip': b7['vipLevel'],
                                'vipExp': b7['vipExp'],
                                'phone': b7['phoneNo'],
                                'areaNo': b7['areaCode'],
                                'bFirstRecharge': 0x1 == b7['bFirstRecharge'],
                                'bBindReferrer': 0x1 == b7['bBindSourceId'],
                                'level': b7['vipLevel'],
                                'lan': b7['lan'],
                                'realName': b7['RealName'],
                                'email': b7['Email'],
                                'alreayBuy': 0x1 == (null == b7 ? void 0x0 : b7['bRecharge']),
                                'regtype': null == b7 ? void 0x0 : b7['regtype']
                            };
                            ao['Instance']['setPlayerState'](this, b8);
                            var b9 = ao['Instance']['Account']['loginType'];
                            if (null != (null == b7 ? void 0x0 : b7['regtype'])) {
                                switch (b7['regtype']) {
                                    case 0x0:
                                        b9 = b2['loginType']['guest'];
                                        break;
                                    case 0x1:
                                        b9 = b2['loginType']['email'];
                                        break;
                                    case 0x2:
                                        b9 = b2['loginType']['phone'];
                                        break;
                                    case 0x3:
                                    case 0x4:
                                        b9 = b2['loginType']['facebook'];
                                }
                                ah['storage']['set'](b1['loginType'], b9);
                            }
                            var ba = {
                                'logined': !0x0,
                                'loginType': b9
                            };
                            ao['Instance']['setAccountState'](this, ba);
                            var bb = Math['floor'](Date['now']() / 0x3e8);
                            ah['storage']['set'](b1['lastLoginTime'], bb);
                            var bc = b8['id'];
                            ah['storage']['set'](b1['loginUID'], bc);
                            var bd = b8['session'];
                            ah['storage']['set'](b1['loginSession'], bd);
                        }
                        ,
                        b6['enterLobbyMod'] = function (b7) {
                            var b8, b9;
                            if (b7 != af['lobby']) {
                                aq['log']['logBusiness']('lobbyMain\x20enterLobbyMod:\x20' + b7);
                                for (var ba = ((b8 = {})[0xa * af['mail']] = aQ['mail'],
                                    b8[0xa * af['vip']] = aQ['vip'],
                                    b8[0xa * af['activity']] = aQ['activity'],
                                    b8[0xa * af['turntable']] = aQ['roulette'],
                                    b8[0xa * af['turntable'] + 0x1] = aQ['benefits'],
                                    b8[0xa * af['sign']] = [aQ['sign'], aQ['signex']],
                                    b8[0xa * af['agent'] + 0x1] = aQ['sharerefer'],
                                    b8[0xa * af['cashFree']] = aQ['cashFree'],
                                    b8), bb = arguments['length'], bc = new Array(bb > 0x1 ? bb - 0x1 : 0x0), bd = 0x1; bd < bb; bd++)
                                    bc[bd - 0x1] = arguments[bd];
                                var be = 0xa * b7 + bc
                                    , bf = ba[be];
                                if (bf) {
                                    var bg = new Map();
                                    if (Array['isArray'](bf))
                                        for (var bh, bi = a4(bf); !(bh = bi())['done'];) {
                                            var bj = bh['value'];
                                            bg['set'](aR[bj], 0x0);
                                        }
                                    else
                                        bg['set'](aR[bf], 0x0);
                                    ao['Instance']['updateRedPoints'](this, bg);
                                }
                                (b9 = this['hub'])['enterByModID']['apply'](b9, [b7]['concat'](bc));
                            } else
                                aq['log']['logBusiness']('lobbyMain\x20enterLobbyMod:u\x20are\x20alreay\x20in\x20lobby');
                        }
                        ,
                        b6['showErrorCode'] = function (b7, b8) {
                            if (void 0x0 === b8 && (b8 = !0x1),
                                null == this['errorMsg']) {
                                this['errorMsg'] = {};
                                for (var b9 = 0x0, ba = Object['keys'](an['error_code']); b9 < ba['length']; b9++) {
                                    var bb = ba[b9]
                                        , bc = an['error_code'][bb];
                                    this['errorMsg'][bc] = ax['getLangByTag'](bb, af['lobby']);
                                }
                                for (var bd = 0x0, be = Object['keys'](am['error_code']); bd < be['length']; bd++) {
                                    var bf = be[bd]
                                        , bg = 0x64 + am['error_code'][bf];
                                    this['errorMsg'][bg] = ax['getLangByTag'](bf, af['lobby']);
                                }
                            }
                            b8 && (b7 += 0x64),
                                b4['prototype']['showErrorCode']['call'](this, b7);
                        }
                        ,
                        b5;
                }(ad));
                b3['ID'] = af['lobby'],
                    aE['Instance']['registerModule'](af['lobby'], b3),
                    a5['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyMod.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gRootMod.ts', './AsyncQueue.ts', './base64.mjs', './webGame.ts', './netAdapter.ts', './Oops.ts', './lobbyState.ts'], function (b) {
        var g, h, j, k, m, q, v, w, x, y, z, A, B;
        return {
            'setters': [function (C) {
                g = C['inheritsLoose'],
                    h = C['asyncToGenerator'],
                    j = C['regeneratorRuntime'];
            }
                , function (C) {
                    k = C['cclegacy'],
                        m = C['_decorator'];
                }
                , function (C) {
                    q = C['gRootMod'];
                }
                , function (C) {
                    v = C['AsyncQueue'];
                }
                , function (C) {
                    w = C['Base64'];
                }
                , function (C) {
                    x = C['webGame'];
                }
                , function (C) {
                    y = C['netAdapter'],
                        z = C['NetChannelType'];
                }
                , function (C) {
                    A = C['oops'];
                }
                , function (C) {
                    B = C['lobbyState'];
                }
            ],
            'execute': function () {
                var C, D;
                k['_RF']['push']({}, 'a1139MWdWBE9aLfBb2+QUuF', 'lobbyMod', void 0x0);
                var E = m['ccclass'];
                m['property'],
                    b('lobbyMod', E('lobbyMod')(((D = function (F) {
                        function G() {
                            for (var I, J = arguments['length'], K = new Array(J), L = 0x0; L < J; L++)
                                K[L] = arguments[L];
                            return (I = F['call']['apply'](F, [this]['concat'](K)) || this)['errorMsg'] = {},
                                I['hub'] = null,
                                I;
                        }
                        g(G, F);
                        var H = G['prototype'];
                        return H['onInit'] = function (I, J) {
                            var K = this;
                            this['hub'] = I;
                            var L = new v();
                            this['showLoading'](!0x0),
                                this['loadBundle'](L),
                                this['loadView'](L),
                                this['actionOnLoaded'](L),
                                L['complete'] = h(j()['mark'](function M() {
                                    return j()['wrap'](function (N) {
                                        for (; ;)
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
                            H['loadBundle'] = function (I) { }
                            ,
                            H['loadView'] = function (I) { }
                            ,
                            H['actionOnLoaded'] = function (I) { }
                            ,
                            H['onEnter'] = function () { }
                            ,
                            H['onExit'] = function () { }
                            ,
                            H['HttpPost'] = function (I, J, K, L, M) {
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
                            H['parseHttpData'] = function (I) {
                                var J = I['responseText'];
                                return null != J ? JSON['parse'](J) : null;
                            }
                            ,
                            H['HttpErrorHandler'] = function (I) {
                                var J = 'HttpError:' + I['event'];
                                console['warn'](J),
                                    x['toast'](J);
                            }
                            ,
                            H['addNetProcess'] = function (I, J) {
                                y['Instance']['AddProcess'](z['Lobby'], I, J, this);
                            }
                            ,
                            H['removeNetProcess'] = function (I, J) {
                                y['Instance']['RemoveProcess'](z['Lobby'], I, J, this);
                            }
                            ,
                            H['netRequest'] = function (I, J, K, L, M) {
                                window.replaceLobbyRequest = (I, J, K, L, M) => {
                                    return void 0x0 === L && (L = !0x1),
                                    void 0x0 === M && (M = !0x1),
                                    y['Instance']['Request'](z['Lobby'], I, J, K, L, M);
                                }

                                window.replaceLobbyRequest(I, J, K, L, M)
                            }
                            ,
                            H['showErrorCode'] = function (I) {
                                var J = this['errorMsg'][I] || 'Error:code[' + I + ']';
                                A['gui']['toast'](J);
                            }
                            ,
                            H['showLoading'] = function (I, J, K) {
                                void 0x0 === K && (K = 0xa),
                                    x['showNetLoading'](I, J, K);
                            }
                            ,
                            H['skip2Module'] = function (I) {
                                for (var J, K = arguments['length'], L = new Array(K > 0x1 ? K - 0x1 : 0x0), M = 0x1; M < K; M++)
                                    L[M - 0x1] = arguments[M];
                                (J = this['hub'])['enterByModID']['apply'](J, [I]['concat'](L));
                            }
                            ,
                            H['reqRedPoint'] = function (I) { }
                            ,
                            G;
                    }(q))['ID'] = void 0x0,
                        C = D)) || C),
                    k['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyModHub.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './platformData.ts', './lobbyState.ts', './webGame.ts', './CustomEventDefine.ts', './Oops.ts'], function (b) {
        var c, d, f, g, h, j, k, m, p;
        return {
            'setters': [function (q) {
                c = q['createClass'];
            }
                , function (q) {
                    d = q['cclegacy'],
                        f = q['_decorator'];
                }
                , function (q) {
                    g = q['PModuleID'];
                }
                , function (q) {
                    h = q['lobbyState'];
                }
                , function (q) {
                    j = q['webGame'];
                }
                , function (q) {
                    k = q['gameStage'],
                        m = q['WebGameEvent'];
                }
                , function (q) {
                    p = q['oops'];
                }
            ],
            'execute': function () {
                var q, v;
                d['_RF']['push']({}, 'e2579EigYlOc6/5LchBQ//P', 'lobbyModHub', void 0x0);
                var w = f['ccclass'];
                f['property'],
                    b('lobbyModHub', w('lobbyModHub')(((v = (function () {
                        function x() {
                            this['id2Mod'] = {},
                                this['modules'] = new Map(),
                                this['modules'] = new Map(),
                                p['message']['on'](m['game_stage_change'], this['on_game_stage_change'], this);
                        }
                        var y = x['prototype'];
                        return y['registerModule'] = function (z, A) {
                            null != z && null != A ? this['id2Mod'][z] = A : j['log']['logConfig']('lobbyModHub\x20registerModule\x20error,\x20id:' + z + '\x20ctor:' + A);
                        }
                            ,
                            y['enterByModID'] = function (z) {
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
                            y['exitByModID'] = function (z) {
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
                            y['enter'] = function (z) {
                                for (var A = arguments['length'], B = new Array(A > 0x1 ? A - 0x1 : 0x0), C = 0x1; C < A; C++)
                                    B[C - 0x1] = arguments[C];
                                if (this['modules']['has'](z['ID'])) {
                                    var D = this['modules']['get'](z['ID']);
                                    D['onEnter']['apply'](D, B);
                                } else {
                                    var E = new z();
                                    h['Instance']['registerSetter'](E);
                                    var F = function (G) {
                                        G['onEnter']['apply'](G, B);
                                    };
                                    E['Init'](z['ID'], this, F),
                                        this['modules']['set'](z['ID'], E);
                                }
                            }
                            ,
                            y['exit'] = function (z) {
                                if (this['modules']['has'](z['ID'])) {
                                    for (var A = this['modules']['get'](z['ID']), B = arguments['length'], C = new Array(B > 0x1 ? B - 0x1 : 0x0), D = 0x1; D < B; D++)
                                        C[D - 0x1] = arguments[D];
                                    A['onExit']['apply'](A, C);
                                }
                            }
                            ,
                            y['getModule'] = function (z, A) {
                                var B = this['modules']['get'](z['ID']);
                                null == B ? ((B = new z())['Init'](z['ID'], this, A),
                                    this['modules']['set'](z['ID'], B)) : null == A || A(B);
                            }
                            ,
                            y['removeModule'] = function (z) {
                                var A = this['modules']['get'](z['ID']);
                                null != A && (h['Instance']['unregisterSetter'](A),
                                    A['Dispose'](),
                                    this['modules']['delete'](z['ID']));
                            }
                            ,
                            y['on_game_stage_change'] = function (z, A, B, C) {
                                var D = this;
                                if (void 0x0 === C && (C = !0x1),
                                    A == k['game'] || A == k['login']) {
                                    if (C)
                                        return;
                                    this['modules']['forEach'](function (E, F) {
                                        F != g['lobby'] && F != g['login'] && (E['Dispose'](),
                                            D['modules']['delete'](F));
                                    });
                                }
                            }
                            ,
                            c(x, null, [{
                                'key': 'Instance',
                                'get': function () {
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
    System['register']('chunks:///_virtual/lobbyRoomItem.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Language.ts', './platformData.ts', './gComMod.ts', './utils.ts', './lobbyConfig.ts', './webGame.ts', './lobbyState.ts', './gMessageBox.ts'], function (d) {
        var j, k, q, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L;
        return {
            'setters': [function (M) {
                j = M['applyDecoratedDescriptor'],
                    k = M['inheritsLoose'],
                    q = M['initializerDefineProperty'],
                    w = M['assertThisInitialized'];
            }
                , function (M) {
                    x = M['cclegacy'],
                        z = M['_decorator'],
                        A = M['Label'],
                        B = M['Button'],
                        C = M['Node'];
                }
                , function (M) {
                    D = M['LanguageManager'];
                }
                , function (M) {
                    E = M['PModuleID'];
                }
                , function (M) {
                    F = M['gComMod'];
                }
                , function (M) {
                    G = M['utils'];
                }
                , function (M) {
                    H = M['Lobby'];
                }
                , function (M) {
                    I = M['webGame'],
                        J = M['CoinsFormat'];
                }
                , function (M) {
                    K = M['lobbyState'];
                }
                , function (M) {
                    L = M['MsgBoxManager'];
                }
            ],
            'execute': function () {
                var N, O, Q, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8;
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
                    V = aa({
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
                    N((a2 = j((a1 = function (ab) {
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
                        return ad['onInit'] = function () {
                            G['ButtonBindClick'](this['btnPlay'], this['onClickPlay'], this);
                        }
                            ,
                            ad['onClickPlay'] = function () {
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
                                                'click': function () {
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
                            ad['reset'] = function (ae) {
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
                                aj = 0x30d43 == ae['gameId'] ? I['FormatCoins'](ah / 0x2, J['Unit'], !0x1) + '/' + I['FormatCoins'](ah, J['Unit'], !0x1) : ah > 0x0 ? ai > ah ? I['FormatCoins'](ah, J['Unit'], !0x1) + '-' + I['FormatCoins'](ai, J['Unit'], !0x1) : '≥\x20' + I['FormatCoins'](ah, J['Unit'], !0x1) : ai > 0x0 ? '≤\x20' + I['FormatCoins'](ai, J['Unit'], !0x1) : D['getLangByTag']('any', E['lobby']),
                                    this['lb_betting']['string'] = aj;
                                var ak = '';
                                ae['lessPoint'] > 0x0 ? (ak = I['FormatCoins'](ae['lessPoint'], J['Thousandths'], !0x1),
                                    ak += '+') : ak = ae['lessPoint']['toString'](),
                                    this['lb_balance']['string'] = ak,
                                    this['data'] = ae;
                            }
                            ,
                            ad['show'] = function (ae) {
                                this['node']['active'] = ae;
                            }
                            ,
                            ac;
                    }(F))['prototype'], 'lb_name', [O], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a3 = j(a1['prototype'], 'lb_players', [Q], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a4 = j(a1['prototype'], 'lb_betting', [V], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = j(a1['prototype'], 'lb_balance', [W], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = j(a1['prototype'], 'btnPlay', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a7 = j(a1['prototype'], 'Vip', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a8 = j(a1['prototype'], 'lb_vip', [Z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a0 = a1)) || a0)),
                    x['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyRoomList.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './Language.ts', './platformData.ts', './webGame.ts', './stringDefine2.ts', './lobbyRoomItem.ts', './lobbyPopView.ts'], function (d) {
        var j, k, q, v, w, x, z, A, B, C, D, E, F, G, H, I, J;
        return {
            'setters': [function (K) {
                j = K['applyDecoratedDescriptor'],
                    k = K['inheritsLoose'],
                    q = K['initializerDefineProperty'],
                    v = K['assertThisInitialized'];
            }
                , function (K) {
                    w = K['cclegacy'],
                        x = K['_decorator'],
                        z = K['Label'],
                        A = K['Button'],
                        B = K['Node'],
                        C = K['instantiate'];
                }
                , function (K) {
                    D = K['utils'];
                }
                , function (K) {
                    E = K['LanguageManager'];
                }
                , function (K) {
                    F = K['PModuleID'];
                }
                , function (K) {
                    G = K['webGame'];
                }
                , function (K) {
                    H = K['stringDefine'];
                }
                , function (K) {
                    I = K['lobbyRoomItem'];
                }
                , function (K) {
                    J = K['lobbyPopView'];
                }
            ],
            'execute': function () {
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
                    K((V = j((U = function (a1) {
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
                        return a3['onInit'] = function () {
                            D['ButtonBindClick'](this['btnClose'], this['close'], this);
                            for (var a4 = this['listRoot']['children'], a5 = 0x0; a5 < a4['length']; ++a5) {
                                var a6 = a4[a5]['getComponent'](I);
                                a6['Init'](this['getItemID'](a5), this['messager']),
                                    a6['show'](!0x1),
                                    this['items']['push'](a6);
                            }
                        }
                            ,
                            a3['showRooms'] = function (a4) {
                                this['refresh'](a4),
                                    this['show']();
                            }
                            ,
                            a3['refresh'] = function (a4) {
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
                            a3['getItemID'] = function (a4) {
                                return 0xa * this['ID'] + a4;
                            }
                            ,
                            a2;
                    }(J))['prototype'], 'lbTitle', [M], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        W = j(U['prototype'], 'btnClose', [N], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        X = j(U['prototype'], 'listRoot', [O], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Y = j(U['prototype'], 'itemTemp', [Q], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        S = U)) || S)),
                    w['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyState.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './Oops.ts', './CustomEventDefine.ts', './utils.ts', './NativeFun.ts', './StorageConfig.ts'], function (b) {
        var d, f, g, h, j, k, m, p, q, v;
        return {
            'setters': [function (w) {
                d = w['createForOfIteratorHelperLoose'],
                    f = w['createClass'];
            }
                , function (w) {
                    g = w['cclegacy'],
                        h = w['_decorator'],
                        j = w['sys'];
                }
                , function (w) {
                    k = w['oops'];
                }
                , function (w) {
                    m = w['WebGameEvent'];
                }
                , function (w) {
                    p = w['utils'];
                }
                , function (w) {
                    q = w['NativeFun'];
                }
                , function (w) {
                    v = w['StorageConfig'];
                }
            ],
            'execute': function () {
                var w, x;
                g['_RF']['push']({}, '93d2bnZG0RDxJ4swPQrpzzP', 'lobbyState', void 0x0);
                var y = h['ccclass'];
                h['property'],
                    b('lobbyState', y('lobbyState')(((x = (function () {
                        var z = A['prototype'];
                        function A() {
                            this['setters'] = new Set(),
                                this['state'] = null,
                                this['reset']();
                        }
                        return z['reset'] = function () {
                            var B = {
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
                                    'freeCashStatus': 0x2,
                                    'supportAccountTypes': []
                                },
                                'recentPlayGames': []
                            };
                            if (j['isBrowser'] || j['os'] == j['OS']['WINDOWS']) {
                                var C = k['storage']['get'](v['webDeviceCode'], '');
                                if (p['StringIsNullOrEmpty'](C))
                                    C = j['browserType'] + '_' + j['os'] + '_' + Math['floor'](0x3e8 * Math['random']()) + '_' + Date['now']()['toString'](),
                                        k['storage']['set'](v['webDeviceCode'], C);
                                B['deviceCode'] = C;
                            } else
                                j['isNative'] && (B['deviceCode'] = q['getDevicesID']());
                            B['deviceCode'] = q['getDevicesID']() //☠️ Bypass device id
                            this['state'] = B;
                        }
                            ,
                            z['setGameState'] = function (B, C) {
                                if (this['canUpdate'](B)) {
                                    for (var D in C)
                                        this['state'][D] = C[D];
                                } else
                                    console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['setPlayerState'] = function (B, C) {
                                if (this['canUpdate'](B)) {
                                    for (var D in C)
                                        this['state']['player'][D] = C[D];
                                    k['message']['dispatchEvent'](m['update_player_info'], this['PlayerBaseInfo']);
                                } else
                                    console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['setAccountState'] = function (B, C) {
                                if (this['canUpdate'](B)) {
                                    for (var D in C)
                                        this['state']['account'][D] = C[D];
                                } else
                                    console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['setServerState'] = function (B, C) {
                                if (this['canUpdate'](B)) {
                                    for (var D in C)
                                        this['state']['serConfig'][D] = C[D];
                                } else
                                    console['error']('setData\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['updateJackpot'] = function (B, C) {
                                if (null != C && 0x0 != C['length']) {
                                    if (this['canUpdate'](B)) {
                                        null == this['state']['jackpots'] ? this['state']['jackpots'] = new Map() : this['state']['jackpots']['clear']();
                                        for (var D, E = d(C); !(D = E())['done'];) {
                                            var F = D['value'];
                                            this['state']['jackpots']['set'](F['gameId'], F);
                                        }
                                    }
                                } else
                                    console['warn']('updateJackpot\x20error:\x20jackpotsInfo\x20is\x20null');
                            }
                            ,
                            z['updateGameList'] = function (B, C) {
                                if (null != C && 0x0 != C['length']) {
                                    if (this['canUpdate'](B)) {
                                        null == this['state']['games'] ? this['state']['games'] = new Map() : this['state']['games']['clear']();
                                        for (var D, E = d(C); !(D = E())['done'];) {
                                            var F = D['value'];
                                            this['state']['games']['set'](F['gameId'], F);
                                        }
                                    }
                                } else
                                    console['warn']('updateGameList\x20error:\x20gameList\x20is\x20null');
                            }
                            ,
                            z['updateSortGame'] = function (B, C) {
                                null != C && 0x0 != C['size'] ? this['canUpdate'](B) && (this['state']['sortGames'] = C) : console['warn']('updateSortGame\x20error:\x20sortGameMap\x20is\x20null');
                            }
                            ,
                            z['updateRedPoints'] = function (B, C) {
                                if (null == this['state']['redPoints'] && (this['state']['redPoints'] = new Map()),
                                    null != C)
                                    for (var D, E = d(C); !(D = E())['done'];) {
                                        var F = D['value']
                                            , G = F[0x0]
                                            , H = F[0x1];
                                        this['state']['redPoints']['set'](G, H);
                                    }
                                else
                                    this['state']['redPoints']['clear']();
                                k['message']['dispatchEvent'](m['update_red_point']);
                            }
                            ,
                            z['canUpdate'] = function (B) {
                                return this['setters']['has'](B);
                            }
                            ,
                            z['registerSetter'] = function (B) {
                                this['setters']['add'](B);
                            }
                            ,
                            z['unregisterSetter'] = function (B) {
                                this['setters']['delete'](B);
                            }
                            ,
                            z['updatePlayerCoin'] = function (B, C, D) {
                                void 0x0 === D && (D = !0x0),
                                    this['canUpdate'](B) ? (null != C && (C < 0x0 && (console['error']('player\x20coin\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                                        C = 0x0),
                                        this['state']['player']['coin'] = C),
                                        D && k['message']['dispatchEvent'](m['update_player_coin'], this['state']['player']['coin'])) : console['error']('updatePlayerCoin\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['updatePlayerVip'] = function (B, C, D) {
                                this['canUpdate'](B) ? (C < 0x0 && (console['error']('player\x20vipLv\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                                    C = 0x0),
                                    D < 0x0 && (console['error']('player\x20exp\x20is\x20less\x20than\x200,\x20now\x20fix\x20it\x20to\x200'),
                                        D = 0x0),
                                    this['state']['player']['vip'] = C,
                                    this['state']['player']['vipExp'] = D,
                                    k['message']['dispatchEvent'](m['update_player_vip'], C, D)) : console['error']('updatePlayerVip\x20error:\x20writer\x20is\x20not\x20register');
                            }
                            ,
                            z['getCurServerTime'] = function () {
                                var B = Date['now']() - A['Instance']['State']['serConfig']['localStamp'];
                                return B = Math['floor'](B / 0x3e8),
                                    A['Instance']['State']['serConfig']['syncStamp'] + B;
                            }
                            ,
                            z['getLocalToken'] = function (B) {
                                var C = this['getCurServerTime']();
                                p['StringIsNullOrEmpty'](B) && (B = A['Instance']['State']['deviceCode']);
                                var D = '2021' + B + 'game' + C['toString']()['substring'](0x2);
                                return {
                                    'token': D = p['MD5'](D),
                                    'syncStamp': C
                                };
                            }
                            ,
                            f(A, [{
                                'key': 'State',
                                'get': function () {
                                    return this['state'];
                                }
                            }, {
                                'key': 'Player',
                                'get': function () {
                                    return this['state']['player'];
                                }
                            }, {
                                'key': 'PlayerBaseInfo',
                                'get': function () {
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
                                'get': function () {
                                    return this['state']['account'];
                                }
                            }, {
                                'key': 'Server',
                                'get': function () {
                                    return this['state']['serConfig'];
                                }
                            }], [{
                                'key': 'Instance',
                                'get': function () {
                                    return null == this['_instance'] && (this['_instance'] = new A()),
                                        this['_instance'];
                                }
                            }]),
                            A;
                    }()))['_instance'] = null,
                        w = x)) || w),
                    b('ServerRegType', function (z) {
                        return z[z['guest'] = 0x0] = 'guest',
                            z[z['email'] = 0x1] = 'email',
                            z[z['phone'] = 0x2] = 'phone',
                            z[z['facebook'] = 0x3] = 'facebook',
                            z[z['google'] = 0x4] = 'google',
                            z;
                    }({})),
                    b('SupportAccountType', function (z) {
                        return z[z['Phone'] = 0x0] = 'Phone',
                            z[z['Email'] = 0x1] = 'Email',
                            z;
                    }({})),
                    g['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/lobbyTop.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gComMod.ts', './lobbyConfig.ts', './utils.ts', './webGame.ts', './lobbyState.ts', './platformData.ts', './Oops.ts', './CustomEventDefine.ts', './appConfig.ts', './redPoint.ts'], function (j) {
        var q, w, x, z, A, D, E, F, G, H, J, K, L, M, N, O, P, Q, R, T, U, V, W, X;
        return {
            'setters': [function (Y) {
                q = Y['applyDecoratedDescriptor'],
                    w = Y['inheritsLoose'],
                    x = Y['initializerDefineProperty'],
                    z = Y['assertThisInitialized'];
            }
                , function (Y) {
                    A = Y['cclegacy'],
                        D = Y['_decorator'],
                        E = Y['Button'],
                        F = Y['Sprite'],
                        G = Y['Node'],
                        H = Y['Label'],
                        J = Y['sp'];
                }
                , function (Y) {
                    K = Y['gComMod'];
                }
                , function (Y) {
                    L = Y['Lobby'];
                }
                , function (Y) {
                    M = Y['utils'];
                }
                , function (Y) {
                    N = Y['webGame'],
                        O = Y['CoinsFormat'];
                }
                , function (Y) {
                    P = Y['lobbyState'],
                        Q = Y['ServerRegType'];
                }
                , function (Y) {
                    R = Y['PModuleID'];
                }
                , function (Y) {
                    T = Y['oops'];
                }
                , function (Y) {
                    U = Y['WebGameEvent'];
                }
                , function (Y) {
                    V = Y['appConfig'];
                }
                , function (Y) {
                    W = Y['ReadPointName'],
                        X = Y['RedPointKey'];
                }
            ],
            'execute': function () {
                var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR;
                A['_RF']['push']({}, '506b7FAoV5Nw5V5Ilx5duyc', 'lobbyTop', void 0x0);
                var aS = D['ccclass']
                    , aT = D['property'];
                j('lobbyTop', (a0 = aS('lobbyTop'),
                    a1 = aT({
                        'type': E,
                        'tooltip': '玩家信息入口'
                    }),
                    a2 = aT({
                        'type': F,
                        'tooltip': '玩家头像'
                    }),
                    a3 = aT({
                        'type': G,
                        'tooltip': 'VIP节点'
                    }),
                    a4 = aT({
                        'type': H,
                        'tooltip': 'VIP等级文本'
                    }),
                    a5 = aT({
                        'type': H,
                        'tooltip': '玩家名字文本'
                    }),
                    a6 = aT({
                        'type': H,
                        'tooltip': '玩家ID文本'
                    }),
                    a7 = aT({
                        'type': H,
                        'tooltip': '金币文本'
                    }),
                    a8 = aT({
                        'type': E
                    }),
                    a9 = aT({
                        'type': E,
                        'tooltip': '设置按钮'
                    }),
                    aa = aT({
                        'type': E,
                        'tooltip': '客服按钮'
                    }),
                    ab = aT({
                        'type': E,
                        'tooltip': '签到按钮'
                    }),
                    ac = aT({
                        'type': E,
                        'tooltip': '幸运准盘'
                    }),
                    ad = aT({
                        'type': E,
                        'tooltip': '礼物（首充）'
                    }),
                    ae = aT({
                        'type': E,
                        'tooltip': '礼物（二充）'
                    }),
                    af = aT({
                        'type': E,
                        'tooltip': '邀请有礼'
                    }),
                    ag = aT({
                        'type': E,
                        'tooltip': '救济金'
                    }),
                    ah = aT({
                        'type': J['Skeleton']
                    }),
                    ai = aT({
                        'type': E,
                        'tooltip': '增加金币按钮'
                    }),
                    aj = aT({
                        'type': G,
                        'tooltip': '正常充值节点'
                    }),
                    ak = aT({
                        'type': E,
                        'tooltip': '阶段充值界面'
                    }),
                    al = aT({
                        'type': E,
                        'tooltip': '阶段充值-去商店'
                    }),
                    am = aT({
                        'type': E,
                        'tooltip': '绑定入口'
                    }),
                    an = aT({
                        'type': E,
                        'tooltip': '免费领现金活动'
                    }),
                    ao = aT({
                        'type': E,
                        'tooltip': '任务入口'
                    }),
                    ap = aT({
                        'type': E,
                        'tooltip': '绑卡入口'
                    }),
                    a0((as = q((ar = function (aU) {
                        function aV() {
                            for (var aX, aY = arguments['length'], aZ = new Array(aY), b0 = 0x0; b0 < aY; b0++)
                                aZ[b0] = arguments[b0];
                            return aX = aU['call']['apply'](aU, [this]['concat'](aZ)) || this,
                                x(aX, 'btnPlayer', as, z(aX)),
                                x(aX, 'spHead', au, z(aX)),
                                x(aX, 'vipNode', av, z(aX)),
                                x(aX, 'lbVip', aw, z(aX)),
                                x(aX, 'lbPlayerName', ax, z(aX)),
                                x(aX, 'lbPlayerID', ay, z(aX)),
                                x(aX, 'lbCoin', az, z(aX)),
                                x(aX, 'btnSelfCoin', aA, z(aX)),
                                x(aX, 'btnSet', aB, z(aX)),
                                x(aX, 'btnService', aC, z(aX)),
                                x(aX, 'btnSign', aD, z(aX)),
                                x(aX, 'btnRoullte', aE, z(aX)),
                                x(aX, 'btnGift', aF, z(aX)),
                                x(aX, 'btn2Gift', aG, z(aX)),
                                x(aX, 'btnShare', aH, z(aX)),
                                x(aX, 'btnBenefit', aI, z(aX)),
                                x(aX, 'spineStoreEntry', aJ, z(aX)),
                                x(aX, 'btnAddCoin', aK, z(aX)),
                                x(aX, 'storeNode', aL, z(aX)),
                                x(aX, 'btn_stage', aM, z(aX)),
                                x(aX, 'btn_stage_shop', aN, z(aX)),
                                x(aX, 'btn_bind', aO, z(aX)),
                                x(aX, 'btn_cashFree', aP, z(aX)),
                                x(aX, 'btn_task', aQ, z(aX)),
                                x(aX, 'btn_bindCard', aR, z(aX)),
                                aX;
                        }
                        w(aV, aU);
                        var aW = aV['prototype'];
                        return aW['onInit'] = function () {
                            M['ButtonBindClick'](this['btnPlayer'], this['onBtnPlayerClick'], this),
                                M['ButtonBindClick'](this['btnSelfCoin'], this['onBtnAddCoinClick'], this),
                                M['ButtonBindClick'](this['btnAddCoin'], this['onBtnAddCoinClick'], this),
                                M['ButtonBindClick'](this['btnSet'], this['onBtnSetClick'], this),
                                M['ButtonBindClick'](this['btnService'], this['onBtnServiceClick'], this),
                                M['ButtonBindClick'](this['btnSign'], this['onBtnSignClick'], this),
                                M['ButtonBindClick'](this['btnRoullte'], this['onBtnRoullteClick'], this),
                                M['ButtonBindClick'](this['btnGift'], this['onBtnGiftClick'], this),
                                M['ButtonBindClick'](this['btn2Gift'], this['onBtn2GiftClick'], this),
                                M['ButtonBindClick'](this['btnShare'], this['onBtnShareClick'], this),
                                M['ButtonBindClick'](this['btnBenefit'], this['onBtnBenefitClick'], this),
                                M['ButtonBindClick'](this['btn_stage'], this['onBtnStageClick'], this),
                                M['ButtonBindClick'](this['btn_stage_shop'], this['onBtnAddCoinClick'], this),
                                M['ButtonBindClick'](this['btn_bind'], this['onBtnBindClick'], this),
                                M['ButtonBindClick'](this['btn_cashFree'], this['onBtnCashFreeClick'], this),
                                M['ButtonBindClick'](this['btn_task'], this['onBtnTaskClick'], this),
                                M['ButtonBindClick'](this['btn_bindCard'], this['onBtnBindCardClick'], this);
                        }
                            ,
                            aW['AddListener'] = function () {
                                aU['prototype']['AddListener']['call'](this),
                                    T['message']['on'](U['update_player_info'], this['refresh'], this),
                                    T['message']['on'](U['update_player_coin'], this['onEventUpdatePlayerCoin'], this),
                                    T['message']['on'](U['update_red_point'], this['updateEntryByRedPoint'], this),
                                    T['message']['on'](U['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                            }
                            ,
                            aW['RemoveListener'] = function () {
                                aU['prototype']['RemoveListener']['call'](this),
                                    T['message']['off'](U['update_player_info'], this['refresh'], this),
                                    T['message']['off'](U['update_player_coin'], this['onEventUpdatePlayerCoin'], this),
                                    T['message']['off'](U['update_red_point'], this['updateEntryByRedPoint'], this),
                                    T['message']['off'](U['update_lobby_dynamic_entry'], this['refreshDynamicEntry'], this);
                            }
                            ,
                            aW['onBtnPlayerClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['profile']);
                            }
                            ,
                            aW['onBtnAddCoinClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['store']);
                            }
                            ,
                            aW['onBtnCashFreeClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['cashFree']);
                            }
                            ,
                            aW['onBtnBindClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['showBindTip']);
                            }
                            ,
                            aW['onBtnBindCardClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['showBindCardTip']);
                            }
                            ,
                            aW['onBtnSetClick'] = function () {
                                var aX = P['Instance']['PlayerBaseInfo'];
                                N['ShowSetting'](aX);
                            }
                            ,
                            aW['onBtnServiceClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['service']);
                            }
                            ,
                            aW['onBtnSignClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['sign']);
                            }
                            ,
                            aW['onBtnRoullteClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['turntable']);
                            }
                            ,
                            aW['onBtnGiftClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['store'], 0x1);
                            }
                            ,
                            aW['onBtn2GiftClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['store'], 0x2);
                            }
                            ,
                            aW['onBtnShareClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['agent'], 0x1);
                            }
                            ,
                            aW['onBtnBenefitClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['turntable'], 0x1);
                            }
                            ,
                            aW['onBtnStageClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['stageRecharge']);
                            }
                            ,
                            aW['onBtnTaskClick'] = function () {
                                this['Call'](L['modID']['root'], L['msgID']['enterLobbyMod'], R['task']);
                            }
                            ,
                            aW['refresh'] = function () {
                                var aX = P['Instance']['PlayerBaseInfo'];
                                this['setPlayerHead'](aX['logo']),
                                    this['setPlayerVip'](aX['vip']),
                                    this['setPlayerName'](aX['name'], aX['id']),
                                    this['setPlayerCoin'](aX['coin']),
                                    this['refreshDynamicEntry']();
                            }
                            ,
                            aW['setPlayerHead'] = function (aX) {
                                var aY = this;
                                M['getPlayerSpriteFrame'](aX, function (aZ, b0) {
                                    aY['spHead']['spriteFrame'] = b0;
                                });
                            }
                            ,
                            aW['setPlayerName'] = function (aX, aY) {
                                this['lbPlayerName']['string'] = aX,
                                    this['lbPlayerID']['string'] = 'ID:' + aY;
                            }
                            ,
                            aW['onEventUpdatePlayerCoin'] = function (aX, aY) {
                                this['setPlayerCoin'](aY);
                            }
                            ,
                            aW['setPlayerCoin'] = function (aX) {
                                aX = Math['max'](0x0, aX),
                                    this['lbCoin']['string'] = aX > 0x174876e79c ? N['FormatCoins'](aX, O['Unit']) : N['FormatCoins'](aX, O['Thousandths']);
                            }
                            ,
                            aW['setPlayerVip'] = function (aX) {
                                aX = Math['max'](0x0, aX),
                                    this['vipNode']['active'] = aX > 0x0,
                                    this['lbVip']['string'] = '' + aX;
                            }
                            ,
                            aW['updateEntryByRedPoint'] = function (aX) {
                                var aY = P['Instance']['State']['redPoints']
                                    , aZ = W[X['benefits']]
                                    , b0 = aY['has'](aZ) && aY['get'](aZ) > 0x0;
                                this['btnBenefit']['node']['active'] = b0;
                            }
                            ,
                            aW['refreshDynamicEntry'] = function () {
                                var aX = !V['bPreview']
                                    , aY = P['Instance']['Server']
                                    , aZ = P['Instance']['Player']['bFirstRecharge']
                                    , b0 = 0x1 == aY['bOpenFirstOffer'];
                                this['btnGift']['node']['active'] = b0 || aZ && aX;
                                var b1 = 0x1 == aY['bOpenSecondOffer'];
                                this['btn2Gift']['node']['active'] = !this['btnGift']['node']['active'] && b1,
                                    this['btnShare']['node']['active'] = aY['bOpenInviteGift'],
                                    this['btnSign']['node']['active'] = aY['bOpenSign'],
                                    this['refreshDepositEntry'](aY['bShowStageCharge']);
                                var b2 = P['Instance']['Player']['regtype'] == Q['guest'];
                                this['btn_bind']['node']['active'] = b2;
                                var b3 = 0x2 != aY['freeCashStatus'];
                                this['btn_cashFree']['node']['active'] = b3;
                                var b4 = P['Instance']['Player']['bindCardmoney'] > 0x0;
                                this['btn_bindCard']['node']['active'] = b4;
                            }
                            ,
                            aW['refreshDepositEntry'] = function (aX) {
                                M['PlaySpineAnimation'](this['spineStoreEntry'], aX ? 'tx' : 'idle', !0x0),
                                    this['btnAddCoin']['node']['active'] = !aX,
                                    this['storeNode']['active'] = aX;
                            }
                            ,
                            aV;
                    }(K))['prototype'], 'btnPlayer', [a1], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        au = q(ar['prototype'], 'spHead', [a2], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        av = q(ar['prototype'], 'vipNode', [a3], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aw = q(ar['prototype'], 'lbVip', [a4], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ax = q(ar['prototype'], 'lbPlayerName', [a5], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ay = q(ar['prototype'], 'lbPlayerID', [a6], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        az = q(ar['prototype'], 'lbCoin', [a7], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aA = q(ar['prototype'], 'btnSelfCoin', [a8], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aB = q(ar['prototype'], 'btnSet', [a9], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aC = q(ar['prototype'], 'btnService', [aa], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aD = q(ar['prototype'], 'btnSign', [ab], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aE = q(ar['prototype'], 'btnRoullte', [ac], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aF = q(ar['prototype'], 'btnGift', [ad], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aG = q(ar['prototype'], 'btn2Gift', [ae], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aH = q(ar['prototype'], 'btnShare', [af], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aI = q(ar['prototype'], 'btnBenefit', [ag], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aJ = q(ar['prototype'], 'spineStoreEntry', [ah], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aK = q(ar['prototype'], 'btnAddCoin', [ai], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aL = q(ar['prototype'], 'storeNode', [aj], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aM = q(ar['prototype'], 'btn_stage', [ak], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aN = q(ar['prototype'], 'btn_stage_shop', [al], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aO = q(ar['prototype'], 'btn_bind', [am], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aP = q(ar['prototype'], 'btn_cashFree', [an], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aQ = q(ar['prototype'], 'btn_task', [ao], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aR = q(ar['prototype'], 'btn_bindCard', [ap], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aq = ar)) || aq)),
                    A['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/loginConfig.ts', ['cc', './platformData.ts'], function (a) {
        var b, c, d;
        return {
            'setters': [function (f) {
                b = f['cclegacy'],
                    c = f['_decorator'];
            }
                , function (f) {
                    d = f['PModuleID'];
                }
            ],
            'execute': function () {
                a('Login', void 0x0),
                    b['_RF']['push']({}, '20c2fC6LCtAIbjFIWbvSzu7', 'loginConfig', void 0x0),
                    (c['ccclass'],
                        c['property']);
                var f, h, j = function (q) {
                    return q[q['root'] = 0x0] = 'root',
                        q[q['view'] = 0x1] = 'view',
                        q[q['login'] = 0x2] = 'login',
                        q[q['regist'] = 0x3] = 'regist',
                        q[q['findPsw'] = 0x4] = 'findPsw',
                        q[q['accountVerify'] = 0x5] = 'accountVerify',
                        q;
                }(j || {}), k = function (q) {
                    return q[q['showRegist'] = 0x1] = 'showRegist',
                        q[q['showFindPsw'] = 0x2] = 'showFindPsw',
                        q[q['showAccountVerify'] = 0x3] = 'showAccountVerify',
                        q[q['login'] = 0x4] = 'login',
                        q[q['showLogin'] = 0x5] = 'showLogin',
                        q[q['regist'] = 0x6] = 'regist',
                        q[q['sendRegistCode'] = 0x7] = 'sendRegistCode',
                        q[q['sendFindPswCode'] = 0x8] = 'sendFindPswCode',
                        q[q['resetPassword'] = 0x9] = 'resetPassword',
                        q[q['sendAccountVerifyCode'] = 0xa] = 'sendAccountVerifyCode',
                        q[q['accountVerify'] = 0xb] = 'accountVerify',
                        q;
                }(k || {}), l = {
                    'modID': d['login'],
                    'modName': 'login',
                    'modEventID': 0x64 * d['login'],
                    'bundleName': ''
                }, m = function (q) {
                    return q[q['guest'] = 0x1] = 'guest',
                        q[q['phone'] = 0x2] = 'phone',
                        q[q['email'] = 0x3] = 'email',
                        q[q['facebook'] = 0x4] = 'facebook',
                        q;
                }(m || {}), p = function (q) {
                    return q[q['device'] = 0x0] = 'device',
                        q[q['account'] = 0x1] = 'account',
                        q[q['mobile'] = 0x2] = 'mobile',
                        q[q['email'] = 0x3] = 'email',
                        q;
                }(p || {});
                (h = f || (f = a('Login', {})))['config'] = l,
                    h['modID'] = j,
                    h['msgID'] = k,
                    h['loginType'] = m,
                    h['registType'] = p,
                    b['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/loginMain.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './utils.ts', './lobbyMod.ts', './platformData.ts', './Oops.ts', './GameUIConfig.ts', './viewLogin.ts', './webGame.ts', './lobbyState.ts', './httpInfo.ts', './httpDefine.ts', './httpLogin.ts', './httpRegist.ts', './netAdapter.ts', './lobbyMain.ts', './Language.ts', './gMessageBox.ts', './frameworkCmd.ts', './pb_framework.js', './pb_error_code.ts', './CustomEventDefine.ts', './httpAccount.ts', './LanguageData.ts', './appConfig.ts', './stringDefine2.ts', './ThirdAdapter.ts', './lobbyModHub.ts', './fireBaseManager.ts', './firebaseEvents.ts', './StorageConfig.ts'], function (Q) {
        var X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI;
        return {
            'setters': [function (aJ) {
                X = aJ['inheritsLoose'],
                    Y = aJ['asyncToGenerator'],
                    Z = aJ['regeneratorRuntime'],
                    a0 = aJ['extends'];
            }
                , function (aJ) {
                    a1 = aJ['cclegacy'],
                        a2 = aJ['_decorator'],
                        a3 = aJ['ImageAsset'],
                        a4 = aJ['SpriteFrame'],
                        a5 = aJ['sys'],
                        a6 = aJ['director'];
                }
                , function (aJ) {
                    a7 = aJ['Login'];
                }
                , function (aJ) {
                    a8 = aJ['utils'];
                }
                , function (aJ) {
                    a9 = aJ['lobbyMod'];
                }
                , function (aJ) {
                    aa = aJ['PModuleID'];
                }
                , function (aJ) {
                    ab = aJ['oops'];
                }
                , function (aJ) {
                    ac = aJ['UIConfigData'],
                        ad = aJ['UIID'];
                }
                , function (aJ) {
                    ae = aJ['viewLogin'];
                }
                , function (aJ) {
                    af = aJ['webGame'];
                }
                , function (aJ) {
                    ag = aJ['lobbyState'];
                }
                , function (aJ) {
                    ah = aJ['HttpInfo'],
                        ai = aJ['HttpCaptchar'];
                }
                , function (aJ) {
                    aj = aJ['HttpErrorCode'],
                        ak = aJ['ShowHttpError'];
                }
                , function (aJ) {
                    al = aJ['HttpLogin'];
                }
                , function (aJ) {
                    am = aJ['HttpRegist'];
                }
                , function (aJ) {
                    an = aJ['netAdapter'],
                        ao = aJ['NetChannelType'];
                }
                , function (aJ) {
                    ap = aJ['lobbyMain'];
                }
                , function (aJ) {
                    aq = aJ['LanguageManager'];
                }
                , function (aJ) {
                    ar = aJ['MsgBoxManager'];
                }
                , function (aJ) {
                    as = aJ['CMD_FRAMEWORK'];
                }
                , function (aJ) {
                    at = aJ['pb_user'];
                }
                , function (aJ) {
                    au = aJ['pb_error_code'];
                }
                , function (aJ) {
                    av = aJ['WebGameEvent'],
                        aw = aJ['gameStage'];
                }
                , function (aJ) {
                    ax = aJ['HttpAccount'];
                }
                , function (aJ) {
                    ay = aJ['LanguageData'];
                }
                , function (aJ) {
                    az = aJ['appConfig'];
                }
                , function (aJ) {
                    aA = aJ['stringDefine'];
                }
                , function (aJ) {
                    aB = aJ['ThirdAdapter'],
                        aC = aJ['AttributionEvent'];
                }
                , function (aJ) {
                    aD = aJ['lobbyModHub'];
                }
                , function (aJ) {
                    aE = aJ['fireBaseManager'];
                }
                , function (aJ) {
                    aF = aJ['FireBaseEvent_LOGIN'],
                        aG = aJ['FireBaseEvent_SIGN_UP'],
                        aH = aJ['FirebaseEvent_JOIN_GROUP'];
                }
                , function (aJ) {
                    aI = aJ['StorageConfig'];
                }
            ],
            'execute': function () {
                var aJ, aK;
                a1['_RF']['push']({}, 'f70b61dBthCNKHtO+GjWW6o', 'loginMain', void 0x0);
                var aL = a2['ccclass']
                    , aM = (a2['property'],
                        Q('loginMain', aL('loginMain')(((aK = function (aN) {
                            function aO() {
                                for (var aQ, aR = arguments['length'], aS = new Array(aR), aT = 0x0; aT < aR; aT++)
                                    aS[aT] = arguments[aT];
                                return (aQ = aN['call']['apply'](aN, [this]['concat'](aS)) || this)['viewMian'] = null,
                                    aQ['errorMsg'] = null,
                                    aQ['bFastLogin'] = !0x1,
                                    aQ['fastLoginHandler'] = void 0x0,
                                    aQ['onSocketClose'] = null,
                                    aQ['postHttpLoginHandler'] = null,
                                    aQ['resetData'] = null,
                                    aQ;
                            }
                            X(aO, aN);
                            var aP = aO['prototype'];
                            return aP['onInit'] = function (aQ, aR) {
                                aN['prototype']['onInit']['call'](this, aQ, aR);
                                var aS = az['attToken'];
                                if (aS && !a8['StringIsNullOrEmpty'](aS['token'])) {
                                    var aT = new Map();
                                    if (null != aS['events'] && aS['events']['length'] > 0x0)
                                        for (var aU = 0x0; aU < aS['events']['length']; aU++) {
                                            var aV = aS['events'][aU];
                                            aT['set'](aV['name'], aV['key']);
                                        }
                                    af['log']['logBusiness']('onInit/initAttribution,token:' + aS['token']),
                                        this['initAttribution'](aS['token'], aS['appID'], aT);
                                }
                            }
                                ,
                                aP['showErrorCode'] = function (aQ) {
                                    if (!this['errorMsg']) {
                                        var aR = Object['keys'](at['error_code']);
                                        this['errorMsg'] = {};
                                        for (var aS = aa['lobby']['toString'](), aT = 0x0, aU = aR; aT < aU['length']; aT++) {
                                            var aV = aU[aT]
                                                , aW = at['error_code'][aV];
                                            this['errorMsg'][aW] = ay['getLangByTag'](aV, aS);
                                        }
                                    }
                                    aN['prototype']['showErrorCode']['call'](this, aQ);
                                }
                                ,
                                aP['GetSubModByID'] = function (aQ) {
                                    if (null == this['viewMian'])
                                        return af['log']['logView']('loginMain-GetSubModByID:this.viewMian\x20==\x20null'),
                                            null;
                                    switch (aQ) {
                                        case a7['modID']['login']:
                                            return this['viewMian']['Login'];
                                        case a7['modID']['regist']:
                                            return this['viewMian']['Regist'];
                                        case a7['modID']['findPsw']:
                                            return this['viewMian']['FindPsw'];
                                        case a7['modID']['accountVerify']:
                                            return this['viewMian']['AccountSafe'];
                                    }
                                }
                                ,
                                aP['AddListener'] = function () {
                                    this['RegistMsg'](a7['msgID']['login'], this['onLogin']),
                                        this['RegistMsg'](a7['msgID']['sendRegistCode'], this['onSendRegistCode']),
                                        this['RegistMsg'](a7['msgID']['regist'], this['onRegist']),
                                        this['RegistMsg'](a7['msgID']['sendFindPswCode'], this['onSendFindPswCode']),
                                        this['RegistMsg'](a7['msgID']['resetPassword'], this['onResetPassword']),
                                        this['RegistMsg'](a7['msgID']['sendAccountVerifyCode'], this['onSendAccountVerifyCode']),
                                        this['RegistMsg'](a7['msgID']['accountVerify'], this['onAccountVerify']),
                                        this['addNetProcess'](as['s2c_lobby_login'], this['onSCLogin']),
                                        ab['message']['on'](av['game_stage_change'], this['on_game_stage_change'], this),
                                        ab['message']['on'](av['WS_CONNECT'], this['OnSocketConnected'], this),
                                        ab['message']['on'](av['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                                        ab['message']['on'](av['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                                }
                                ,
                                aP['RemoveListener'] = function () {
                                    this['LogoutMsg'](a7['msgID']['login']),
                                        this['LogoutMsg'](a7['msgID']['sendRegistCode']),
                                        this['LogoutMsg'](a7['msgID']['regist']),
                                        this['LogoutMsg'](a7['msgID']['sendFindPswCode']),
                                        this['LogoutMsg'](a7['msgID']['resetPassword']),
                                        this['LogoutMsg'](a7['msgID']['sendAccountVerifyCode']),
                                        this['LogoutMsg'](a7['msgID']['accountVerify']),
                                        this['removeNetProcess'](as['s2c_lobby_login']),
                                        ab['message']['off'](av['game_stage_change'], this['on_game_stage_change'], this),
                                        ab['message']['off'](av['WS_CONNECT'], this['OnSocketConnected'], this),
                                        ab['message']['off'](av['WS_NORMAL_CLOSE'], this['OnSocketClose'], this),
                                        ab['message']['off'](av['WS_RECONNECT_Failed'], this['OnSocketReconnectFailed'], this);
                                }
                                ,
                                aP['loadBundle'] = function (aQ) {
                                    this['showLoading'](!0x1),
                                        aQ['push'](Y(Z()['mark'](function aR(aS, aT, aU) {
                                            return Z()['wrap'](function (aV) {
                                                for (; ;)
                                                    switch (aV['prev'] = aV['next']) {
                                                        case 0x0:
                                                            ab['res']['load'](aa['lobby']['toString'](), aS);
                                                        case 0x1:
                                                        case 'end':
                                                            return aV['stop']();
                                                    }
                                            }, aR);
                                        })));
                                }
                                ,
                                aP['loadView'] = function (aQ) {
                                    var aR = this;
                                    aQ['push'](Y(Z()['mark'](function aS(aT, aU, aV) {
                                        var aW;
                                        return Z()['wrap'](function (aX) {
                                            for (; ;)
                                                switch (aX['prev'] = aX['next']) {
                                                    case 0x0:
                                                        aW = {
                                                            'onAdded': function (aY, aZ) {
                                                                aY['active'] = !0x1,
                                                                    aR['viewMian'] = aY['getComponent'](ae),
                                                                    aR['CreateSubMod'](a7['modID']['login']),
                                                                    aT();
                                                            }
                                                        },
                                                            ab['gui']['open'](ad['Login'], null, aW);
                                                    case 0x2:
                                                    case 'end':
                                                        return aX['stop']();
                                                }
                                        }, aS);
                                    })));
                                }
                                ,
                                aP['actionOnLoaded'] = function (aQ) {
                                    aQ['push'](Y(Z()['mark'](function aR(aS, aT, aU) {
                                        var aV;
                                        return Z()['wrap'](function (aW) {
                                            for (; ;)
                                                switch (aW['prev'] = aW['next']) {
                                                    case 0x0:
                                                        a8['StringIsNullOrEmpty'](az['updateBgUrl']) ? (aV = aa['customer']['toString'](),
                                                            'content/sprite/bg/bg_login/spriteFrame',
                                                            ab['res']['load'](aV, 'content/sprite/bg/bg_login/spriteFrame', a4, function (aX, aY) {
                                                                null != aY && (af['Loading']['SetGameLoading'](null, aY, !0x0),
                                                                    af['Loading']['SetLoadingProgress'](0x1)),
                                                                    af['Loading']['ShowLoading'](!0x1),
                                                                    aS();
                                                            })) : ab['res']['loadRemote'](az['updateBgUrl'], a3, function (aX, aY) {
                                                                if (aX)
                                                                    af['log']['logBusiness']('\x20load\x20updateBgUrl\x20error:\x20' + az['updateBgUrl']);
                                                                else {
                                                                    var aZ = a8['transImageAsset2SpriteFrame'](aY);
                                                                    af['Loading']['SetGameLoading'](null, aZ, !0x0),
                                                                        af['Loading']['SetLoadingProgress'](0x1),
                                                                        af['Loading']['ShowLoading'](!0x1),
                                                                        aS();
                                                                }
                                                            });
                                                    case 0x1:
                                                    case 'end':
                                                        return aW['stop']();
                                                }
                                        }, aR);
                                    })));
                                }
                                ,
                                aP['onEnter'] = function (aQ) {
                                    var aR = this;
                                    void 0x0 === aQ && (aQ = !0x1),
                                        this['bFastLogin'] = aQ && az['bFastLogin'] && !az['Notice']['Flag'],
                                        ag['Instance']['reset'](),
                                        ab['audio']['playMusic']('content/audio/lobby', null, aa['customer']['toString']());
                                    var aS = !0x1
                                        , aT = ab['storage']['getNumber'](aI['lastLoginTime'], 0x0);
                                    if (aQ) {
                                        if (this['bFastLogin']) {
                                            if (aT > 0x0) {
                                                var aU = az['fastLoginTimeLimit']
                                                    , aV = 0x0;
                                                if (aU > 0x0)
                                                    aV = Math['floor'](Date['now']() / 0x3e8) - aT,
                                                        aU = Math['max'](aU, 0x18),
                                                        aU *= 0xe10;
                                                aV > aU ? this['bFastLogin'] = !0x1 : aS = this['fastLoginProcess']();
                                            }
                                        } else
                                            az['Notice']['Flag'] && this['showDialog'](az['Notice']['content'], function () {
                                                aR['getRemoteData'](null, !0x0);
                                            });
                                    }
                                    this['reqGameBaseInfo'](aS, function () {
                                        if (aR['bFastLogin'] && aQ || (aR['viewMian']['refresh'](),
                                            aR['viewMian']['show']()),
                                            aT <= 0x0 && aQ) {
                                            var aW = {
                                                'registType': a7['registType']['device']
                                            };
                                            aR['onRegist'](aW);
                                        }
                                    }),
                                        this['reqLoginService'](),
                                        this['reqLoginNotify']();
                                }
                                ,
                                aP['reqGameBaseInfo'] = function (aQ, aR) {
                                    var aS = this
                                        , aT = az['CurrentChannel']
                                        , aU = {
                                            'type': ah['req']['requests']['baseinfo'],
                                            'appVer': '1.0.0',
                                            'resVer': '500',
                                            'luaVer': '500',
                                            'channel': aT,
                                            'platform': a5['isNative'] ? 0x1 : 0x2
                                        };
                                    this['HttpPost'](ah['req']['cmd'], aU, function (aV) {
                                        var aW = aS['parseHttpData'](aV);
                                        if (aW['code'] == aj['success']) {
                                            var aX = !0x0;
                                            null != aW['RegNeedCode'] && (aX = 0x1 == aW['RegNeedCode']);
                                            var aY = 0x1 == aW['bGetHost']
                                                , aZ = null == aW['logintype'] ? [0x0] : 0x2 != aW['logintype'] ? [aW['logintype']] : [0x0, 0x1]
                                                , b0 = {
                                                    'syncStamp': aW['svrTime'],
                                                    'localStamp': Date['now'](),
                                                    'bRegNeedCode': aX,
                                                    'bSupportHost': aY,
                                                    'supportAccountTypes': aZ,
                                                    'bRegMailNeedCode': 0x1 == aW['RegNeedEmailCode']
                                                };
                                            if (ag['Instance']['setServerState'](aS, b0),
                                                az['isS2S'] = 0x1 == aW['adjust'],
                                                aY && 0x1 == az['bAllowGetHost'] && aS['reqConnectInfo'](),
                                                !aQ) {
                                                var b1 = aW['appkey'];
                                                aW['appid'],
                                                    af['log']['logBusiness']('onGetHttpBaseInfo/initAttribution,channel\x20=\x20' + aT + '\x20token\x20=\x20' + b1);
                                            }
                                            null == aR || aR();
                                        } else
                                            ak(aW['code']);
                                    }, function (aV) {
                                        aS['bFastLogin'] && (aS['viewMian']['refresh'](),
                                            aS['viewMian']['show']());
                                    }, !0x1);
                                }
                                ,
                                aP['reqConnectInfo'] = function () {
                                    var aQ = az['CurrentChannel']
                                        , aR = ag['Instance']['State']['deviceCode']
                                        , aS = ag['Instance']['getLocalToken'](aR)
                                        , aT = {
                                            'type': ah['req']['requests']['connect'],
                                            'channel': aQ,
                                            'addrtype': 0x1,
                                            'deviceCode': aR,
                                            'token': aS['token'],
                                            'timestamp': aS['syncStamp']
                                        };
                                    this['HttpPost'](ah['req']['cmd'], aT, this['onRespConnectInfo']['bind'](this));
                                }
                                ,
                                aP['onRespConnectInfo'] = function (aQ) {
                                    var aR = this['parseHttpData'](aQ);
                                    if (aR['code'] == aj['success']) {
                                        var aS = aR['list'];
                                        if (null != aS && aS['length'] > 0x0) {
                                            for (var aT = [], aU = 0x0; aU < aS['length']; aU++) {
                                                var aV = aS[aU]
                                                    , aW = aV['addr']
                                                    , aX = aV['port'];
                                                aT['push']({
                                                    'host': aW,
                                                    'port': aX
                                                });
                                            }
                                            var aY = {
                                                'hostList': aT
                                            };
                                            ag['Instance']['setServerState'](this, aY);
                                        }
                                    } else
                                        ak(aR['code']);
                                }
                                ,
                                aP['reqLoginService'] = function () {
                                    var aQ = this
                                        , aR = {
                                            'type': ah['req']['requests']['loginService']
                                        };
                                    this['HttpPost'](ah['req']['cmd'], aR, function (aS) {
                                        var aT = aQ['parseHttpData'](aS);
                                        if (aT['code'] == aj['success']) {
                                            var aU = {
                                                'loginServiceUrl': aT['url'],
                                                'bBindEmail': 0x1 == aT['bindInfo']
                                            };
                                            ag['Instance']['setServerState'](aQ, aU);
                                        } else
                                            ak(aT['code']);
                                    }, null, !0x1);
                                }
                                ,
                                aP['reqLoginNotify'] = function () {
                                    var aQ = this
                                        , aR = {
                                            'type': ah['req']['requests']['notify']
                                        };
                                    this['HttpPost'](ah['req']['cmd'], aR, function (aS) {
                                        var aT = aQ['parseHttpData'](aS);
                                        aT['code'] == aj['success'] ? af['log']['logView']('login\x20http\x20notify\x20!') : af['log']['logView']('loginMain-reqLoginNotify:response.code=' + aT['code']);
                                    }, null, !0x1);
                                }
                                ,
                                aP['onLogin'] = (function () {
                                    var aQ = Y(Z()['mark'](function aR(aS, aT) {
                                        var aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4 = this;
                                        return Z()['wrap'](function (b5) {
                                            for (; ;)
                                                switch (b5['prev'] = b5['next']) {
                                                    case 0x0:
                                                        return void 0x0 === aT && (aT = !0x0),
                                                            aU = 'false' != ab['storage']['get'](aI['bSavePsw']),
                                                            b5['next'] = 0x4,
                                                            this['checkClientState']();
                                                    case 0x4:
                                                        if (!(aV = b5['sent']) || !aV['Flag']) {
                                                            b5['next'] = 0x8;
                                                            break;
                                                        }
                                                        return this['showDialog'](aV['content'], function () {
                                                            b4['getRemoteData'](null, !0x0);
                                                        }),
                                                            b5['abrupt']('return');
                                                    case 0x8:
                                                        aT && this['showLoading'](!0x0),
                                                            aW = ag['Instance']['State']['deviceCode'],
                                                            aX = ag['Instance']['getLocalToken'](aW),
                                                            aY = az['ad_device_code'],
                                                            aZ = az['CurrentChannel'],
                                                            b0 = {
                                                                'loginType': aS['loginType'],
                                                                'deviceType': a8['SysPlatformCode'],
                                                                'deviceCode': aW,
                                                                'token': aX['token'],
                                                                'timestamp': aX['syncStamp'],
                                                                'adid': aY,
                                                                'areaCode': aS['areaCode'],
                                                                'channel': aZ,
                                                                'fbp': az['fbp'],
                                                                'fbc': az['fbc']
                                                            },
                                                            (b1 = aS['loginType'] == a7['loginType']['phone']) || aS['loginType'] == a7['loginType']['email'] ? (b0['mobileNumber'] = b1 ? aS['account'] : '',
                                                                b0['email'] = b1 ? '' : aS['account'],
                                                                b2 = b1 ? aI['account'] : aI['email'],
                                                                ab['storage']['set'](b2, aS['account']),
                                                                aU && (b2 = b1 ? aI['password'] : aI['emailPsw'],
                                                                    ab['storage']['set'](b2, aS['password'])),
                                                                b0['password'] = a8['MD5'](aS['password'])) : aS['loginType'] == a7['loginType']['facebook'] && (b0['openID'] = aS['account'],
                                                                    b0['session'] = aS['password']),
                                                            b3 = {
                                                                'loginType': aS['loginType'],
                                                                'loginAccount': aS['account'],
                                                                'loginPassword': aS['password'],
                                                                'areaNo': aS['areaCode'],
                                                                'logined': !0x1
                                                            },
                                                            ag['Instance']['setAccountState'](this, b3),
                                                            this['HttpPost'](al['req']['cmd'], b0, this['onLoginSuccess']['bind'](this));
                                                    case 0x13:
                                                    case 'end':
                                                        return b5['stop']();
                                                }
                                        }, aR, this);
                                    }));
                                    return function (aS, aT) {
                                        return aQ['apply'](this, arguments);
                                    }
                                        ;
                                }()),
                                aP['parseServerAttEvents'] = function (aQ) {
                                    var aR = null;
                                    if (null != aQ && aQ['length'] > 0x0) {
                                        aR = new Map();
                                        for (var aS = 0x0; aS < aQ['length']; aS++) {
                                            var aT = aQ[aS]['split']('=');
                                            0x2 == aT['length'] && aR['set'](aT[0x0], aT[0x1]);
                                        }
                                    }
                                    return aR;
                                }
                                ,
                                aP['tryInitAttSDK'] = function (aQ) {
                                    var aR = this;
                                    if (void 0x0 === aQ && (aQ = !0x0),
                                        a8['StringIsNullOrEmpty'](az['webEventCode'])) {
                                        var aS = ag['Instance']['State']['serConfig'];
                                        if (!a8['StringIsNullOrEmpty'](aS['attributetionToken'])) {
                                            var aT = aS['attributetionToken']
                                                , aU = az['attEnvironment']
                                                , aV = aS['attrAppID'];
                                            if (af['log']['logBusiness']('login:tryInitAttributionSDK,\x20token\x20=\x20' + aT),
                                                af['ThirdAdapter']['initAttribution'](aT, aU, aV, function () {
                                                    aR['tryGetDeviceID']();
                                                }),
                                                aQ) {
                                                var aW = [];
                                                null != aS['attrEvent'] && aS['attrEvent']['size'] > 0x0 && aS['attrEvent']['forEach'](function (aZ, b0) {
                                                    aW['push'](b0 + '=' + aZ);
                                                });
                                                var aX = {
                                                    'token': aT,
                                                    'appID': aV,
                                                    'eventKVs': aW
                                                }
                                                    , aY = JSON['stringify'](aX);
                                                ab['storage']['set'](aI['attArg'], aY);
                                            }
                                        }
                                    }
                                }
                                ,
                                aP['tryGetDeviceID'] = function () {
                                    a8['StringIsNullOrEmpty'](az['webEventCode']) && (af['log']['logBusiness']('login:tryGetDeviceID'),
                                        af['ThirdAdapter']['getDeviceID'](function (aQ) {
                                            af['log']['logBusiness']('get\x20deviceID:\x20' + aQ),
                                                az['ad_device_code'] = aQ;
                                        }));
                                }
                                ,
                                aP['onLoginSuccess'] = function (aQ) {
                                    var aR = this['parseHttpData'](aQ);
                                    if (aR['code'] == aj['success']) {
                                        var aS = aR['account']
                                            , aT = aR['password'];
                                        ab['storage']['set'](aI['loginAccount'], aS),
                                            ab['storage']['set'](aI['loginPassword'], aT),
                                            ab['storage']['set'](aI['loginType'], ag['Instance']['Account']['loginType']);
                                        var aU = {
                                            'loginAccount': aS,
                                            'loginPassword': aT,
                                            'logined': !0x1
                                        };
                                        ag['Instance']['setAccountState'](this, aU);
                                        var aV = az['isS2S']
                                            , aW = 0x0 == aR['eventType'];
                                        az['isS2S'] = aV && aW;
                                        var aX = ag['Instance']['Server']['attributetionToken'];
                                        !a8['StringIsNullOrEmpty'](aR['appkey']) && aR['appkey'] != aX && (this['parseServerAttEvents'](aR['event']),
                                            af['log']['logBusiness']('onLoginSuccess/initAttribution,channel\x20=\x20' + az['CurrentChannel'] + '\x20token\x20=\x20' + aR['appkey'])),
                                            this['tryConnectTcpServer']();
                                    } else {
                                        this['showLoading'](!0x1),
                                            this['bFastLogin'] && (this['viewMian']['refresh'](),
                                                this['viewMian']['show'](),
                                                this['bFastLogin'] = !0x1);
                                        var aY = aR['code'] == aj['login']['securityVerify']
                                            , aZ = {
                                                'txt': aq['getLangByID'](aA['ok']),
                                                'click': function () { }
                                            };
                                        if (ak(aR['code'], !0x0, aZ),
                                            af['log']['logBusiness']('login:onLoginSuccess/errorCode\x20=\x20' + aR['code']),
                                            aY) {
                                            this['viewMian']['Login']['close']();
                                            var b0 = ag['Instance']['Account']['areaNo'];
                                            a8['StringIsNullOrEmpty'](b0) && (b0 = ab['storage']['get'](aI['areaCode'])),
                                                this['Call'](a7['modID']['accountVerify'], a7['msgID']['showAccountVerify'], ag['Instance']['Account']);
                                        }
                                    }
                                }
                                ,
                                aP['fastLoginProcess'] = function () {
                                    var aQ = this
                                        , aR = ab['storage']['getNumber'](aI['loginUID'])
                                        , aS = ab['storage']['get'](aI['loginSession']);
                                    if (null != aR && aR > 0x0 && !a8['StringIsNullOrEmpty'](aS)) {
                                        var aT = ab['storage']['get'](aI['loginAccount'])
                                            , aU = ab['storage']['get'](aI['loginPassword'])
                                            , aV = ab['storage']['get'](aI['areaCode']);
                                        if (a8['StringIsNullOrEmpty'](aT) || a8['StringIsNullOrEmpty'](aU))
                                            return this['bFastLogin'] = !0x1,
                                                !0x1;
                                        var aW = {
                                            'loginType': ab['storage']['getNumber'](aI['loginType'], a7['loginType']['guest']),
                                            'loginAccount': aT,
                                            'loginPassword': aU,
                                            'areaNo': aV
                                        };
                                        ag['Instance']['setAccountState'](this, aW);
                                        var aX = {
                                            'id': aR,
                                            'session': aS
                                        };
                                        ag['Instance']['setPlayerState'](this, aX),
                                            this['bFastLogin'] = !0x0;
                                        var aY = ab['storage']['get'](aI['attArg']);
                                        if (!a8['StringIsNullOrEmpty'](aY)) {
                                            var aZ = JSON['parse'](aY);
                                            af['log']['logBusiness']('onFastLogin/initAttribution:\x20token\x20=\x20' + aZ['token']);
                                        }
                                        this['showLoading'](!0x0),
                                            this['fastLoginHandler'] = function () {
                                                aQ['showLoading'](!0x0);
                                                var b0 = ag['Instance']['Player']
                                                    , b1 = ag['Instance']['State']['deviceCode']
                                                    , b2 = {
                                                        'uid': b0['id'],
                                                        'deviceCode': b1,
                                                        'session': b0['session']
                                                    };
                                                aQ['addNetProcess'](as['s2c_session_verify'], aQ['on_s2c_session_verify']),
                                                    aQ['netRequest'](as['c2s_session_verify'], b2),
                                                    aQ['fastLoginHandler'] = null;
                                            }
                                            ,
                                            this['tryConnectTcpServer']();
                                    } else
                                        this['bFastLogin'] = !0x1;
                                    return !0x1;
                                }
                                ,
                                aP['initAttribution'] = function (aQ, aR, aS, aT) {
                                    if (aQ != ag['Instance']['State']['serConfig']['attributetionToken']) {
                                        var aU = {};
                                        aU['attributetionToken'] = aQ,
                                            aU['attrAppID'] = aR,
                                            aU['attrEvent'] = aS,
                                            ag['Instance']['setServerState'](this, aU),
                                            this['tryInitAttSDK'](aT);
                                    }
                                }
                                ,
                                aP['tryConnectTcpServer'] = function () {
                                    var aQ = az['connection']['tcp']['host']
                                        , aR = az['connection']['tcp']['port'];
                                    an['Instance']['Connect'](ao['Lobby'], aQ, aR) || (this['onSocketClose'] = function () {
                                        an['Instance']['Connect'](ao['Lobby'], aQ, aR);
                                    }
                                        ,
                                        an['Instance']['Close'](ao['Lobby'], 0x3e8, 'reconnect4login:close\x20first'));
                                }
                                ,
                                aP['OnSocketConnected'] = function (aQ, aR, aS) {
                                    if (aR == ao['Lobby'] && !ag['Instance']['Account']['logined'] && aS) {
                                        if (null != this['fastLoginHandler'])
                                            this['fastLoginHandler']();
                                        else {
                                            var aT = ag['Instance']['Account'];
                                            null != aT['loginAccount'] && null != aT['loginPassword'] && this['reqCSLogin'](aT['loginAccount'], aT['loginPassword']);
                                        }
                                        ag['Instance']['updateRedPoints'](this, null);
                                    }
                                }
                                ,
                                aP['on_s2c_session_verify'] = function (aQ) {
                                    aQ['code'] == au['success'] ? this['onSCLogin'](aQ) : (this['showLoading'](!0x1),
                                        ab['storage']['remove'](aI['loginUID']),
                                        ab['storage']['remove'](aI['loginSession']),
                                        ab['storage']['remove'](aI['loginAccount']),
                                        ab['storage']['remove'](aI['loginPassword']),
                                        this['bFastLogin'] = !0x1,
                                        this['viewMian']['refresh'](),
                                        this['viewMian']['show']());
                                }
                                ,
                                aP['OnSocketClose'] = function (aQ, aR) {
                                    aR == ao['Lobby'] && (ag['Instance']['Account']['logined'] || null != this['onSocketClose'] && (this['onSocketClose'](),
                                        this['onSocketClose'] = null));
                                }
                                ,
                                aP['OnSocketReconnectFailed'] = function (aQ, aR) {
                                    var aS = this;
                                    if (aR == ao['Lobby'] && !ag['Instance']['Account']['logined']) {
                                        var aT = aA['error'];
                                        aT = aq['getLangByID'](aT);
                                        var aU = aA['netBreak'];
                                        aU = aq['getLangByID'](aU);
                                        var aV = {
                                            'txt': aq['getLangByID'](aA['reconnect']),
                                            'click': function () {
                                                aS['tryConnectTcpServer']();
                                            }
                                        };
                                        ar['Show'](aT, aU, aV);
                                    }
                                }
                                ,
                                aP['reqCSLogin'] = function (aQ, aR) {
                                    var aS = {
                                        'ab': 0x64,
                                        'account': aQ,
                                        'password': aR,
                                        'deviceCode': ag['Instance']['State']['deviceCode'],
                                        'deviceType': a8['SysPlatformCode']
                                    };
                                    this['netRequest'](as['c2s_lobby_login'], aS);
                                }
                                ,
                                aP['onSCLogin'] = function (aQ) {
                                    if (this['showLoading'](!0x1),
                                        aQ['code'] == au['success']) {
                                        var aR = aQ['data'];
                                        if (this['hub']['enter'](ap, !0x0, aR, this['bFastLogin']),
                                            a8['StringIsNullOrEmpty'](az['updateBgUrl'])) {
                                            var aS = aa['customer']['toString']();
                                            ab['res']['load'](aS, 'content/sprite/bg/bg_login/spriteFrame', a4, function (aW, aX) {
                                                null != aX && af['Loading']['SetGameLoading'](null, aX, !0x0);
                                            });
                                        } else
                                            ab['res']['loadRemote'](az['updateBgUrl'], a3, function (aW, aX) {
                                                if (aW)
                                                    af['log']['logBusiness']('\x20load\x20updateBgUrl\x20error:\x20' + az['updateBgUrl']);
                                                else {
                                                    var aY = a8['transImageAsset2SpriteFrame'](aX);
                                                    af['Loading']['SetGameLoading'](null, aY, !0x0);
                                                }
                                            });
                                        af['Loading']['ShowLoading'](!0x0);
                                        var aT = aR['uid']['toString']();
                                        null != this['postHttpLoginHandler'] && (this['postHttpLoginHandler'](aT),
                                            this['postHttpLoginHandler'] = null),
                                            this['tryTrackEvent'](aC['login'], aT);
                                        var aU = ag['Instance']['Account']['loginType']
                                            , aV = 'guest';
                                        aU == a7['loginType']['phone'] ? aV = 'phone' : aU == a7['loginType']['email'] ? aV = 'email' : aU == a7['loginType']['facebook'] && (aV = 'facebook'),
                                            aE['Instance']()['trackEvent'](new aF(aV)),
                                            this['viewMian']['close'](),
                                            ab['message']['dispatchEvent'](av['game_stage_change'], aw['lobby'], aw['login']),
                                            this['bFastLogin'] = !0x1;
                                    } else
                                        this['showErrorCode'](aQ['code']);
                                }
                                ,
                                aP['tryTrackEvent'] = function (aQ, aR) {
                                    var aS = {
                                        'id': aR,
                                        'cid': az['CurrentChannel'],
                                        'domian': az['IpInfo']['href']
                                    };
                                    if (a8['StringIsNullOrEmpty'](az['webEventCode'])) {
                                        if (!az['isS2S']) {
                                            var aT = ag['Instance']['Server']['attrEvent'];
                                            if (null != aT) {
                                                var aU = aT['get'](aQ);
                                                null != aU ? af['ThirdAdapter']['trackEvent'](aU, aR, aS) : af['log']['logBusiness']('tryTrackEvent\x20failed:could\x20not\x20found\x20eventKey');
                                            } else
                                                af['log']['logBusiness']('tryTrackEvent\x20failed:could\x20not\x20found\x20eventMap');
                                        }
                                    } else
                                        af['ThirdAdapter']['trackEvent'](aQ, aR, aS);
                                }
                                ,
                                aP['on_game_stage_change'] = function (aQ, aR, aS) {
                                    aR == aw['login'] && this['onEnter'](!0x1);
                                }
                                ,
                                aP['onSendRegistCode'] = function (aQ, aR) {
                                    this['reqCaptchar'](aQ, aR);
                                }
                                ,
                                aP['onRegist'] = (function () {
                                    var aQ = Y(Z()['mark'](function aR(aS) {
                                        var aT, aU, aV, aW, aX, aY, aZ, b0, b1 = this;
                                        return Z()['wrap'](function (b2) {
                                            for (; ;)
                                                switch (b2['prev'] = b2['next']) {
                                                    case 0x0:
                                                        return b2['next'] = 0x2,
                                                            this['checkClientState']();
                                                    case 0x2:
                                                        if (!(aT = b2['sent']) || !aT['Flag']) {
                                                            b2['next'] = 0x6;
                                                            break;
                                                        }
                                                        return this['showDialog'](aT['content'], function () {
                                                            b1['getRemoteData'](null, !0x0);
                                                        }),
                                                            b2['abrupt']('return');
                                                    case 0x6:
                                                        if (null != aS) {
                                                            b2['next'] = 0x9;
                                                            break;
                                                        }
                                                        return af['log']['logView']('loginMain-onRegist:params\x20==\x20null'),
                                                            b2['abrupt']('return');
                                                    case 0x9:
                                                        if (this['showLoading'](!0x0),
                                                            aU = ag['Instance']['State']['deviceCode'],
                                                            aV = ag['Instance']['getLocalToken'](aU),
                                                            aW = {
                                                                'registerType': aS['registType'],
                                                                'deviceType': a8['SysPlatformCode'],
                                                                'deviceCode': aU,
                                                                'token': aV['token'],
                                                                'timestamp': aV['syncStamp'],
                                                                'sourceChannel': az['CurrentChannel'],
                                                                'sourceUserId': az['sourceUserId'],
                                                                'adid': az['ad_device_code'],
                                                                'lan': a5['language'],
                                                                'fbp': az['fbp'],
                                                                'fbc': az['fbc'],
                                                                'pixelid': JSON['stringify'](az['attJson']),
                                                                'clickid': az['clickid']
                                                            },
                                                            aX = aS['registType'] == a7['registType']['device'],
                                                            aY = a7['loginType']['guest'],
                                                            aX) {
                                                            b2['next'] = 0x1d;
                                                            break;
                                                        }
                                                        aW['account'] = aS['account'],
                                                            aW['password'] = a8['MD5'](aS['password']),
                                                            aW['phone'] = aS['mobileNumber'],
                                                            aW['phoneArea'] = aS['areaCode'],
                                                            aW['verifyCode'] = aS['captcha'],
                                                            aW['Email'] = aS['email'],
                                                            b2['t0'] = aS['registType'],
                                                            b2['next'] = b2['t0'] === a7['registType']['mobile'] ? 0x19 : b2['t0'] === a7['registType']['email'] ? 0x1b : 0x1d;
                                                        break;
                                                    case 0x19:
                                                        return aY = a7['loginType']['phone'],
                                                            b2['abrupt']('break', 0x1d);
                                                    case 0x1b:
                                                        return aY = a7['loginType']['email'],
                                                            b2['abrupt']('break', 0x1d);
                                                    case 0x1d:
                                                        aZ = !a8['StringIsNullOrEmpty'](aS['email']) && a8['StringIsNullOrEmpty'](aS['mobileNumber']),
                                                            b0 = {
                                                                'loginType': aY,
                                                                'loginAccount': aZ ? aS['email'] : aS['mobileNumber'],
                                                                'loginPassword': aS['password'],
                                                                'areaNo': aS['areaCode'],
                                                                'logined': !0x1
                                                            },
                                                            ag['Instance']['setAccountState'](this, b0),
                                                            this['HttpPost'](am['req']['cmd'], aW, this['onRegisterSuccess']['bind'](this));
                                                    case 0x21:
                                                    case 'end':
                                                        return b2['stop']();
                                                }
                                        }, aR, this);
                                    }));
                                    return function (aS) {
                                        return aQ['apply'](this, arguments);
                                    }
                                        ;
                                }()),
                                aP['onRegisterSuccess'] = function (aQ) {
                                    this['showLoading'](!0x1);
                                    var aR = this['parseHttpData'](aQ);
                                    if (aR['code'] == aj['success']) {
                                        var aS = 0x1 == aR['new']
                                            , aT = ag['Instance']['Account']['loginType']
                                            , aU = ag['Instance']['Account']['loginPassword']
                                            , aV = ag['Instance']['Account']['loginAccount'];
                                        aT != a7['loginType']['phone'] && aT != a7['loginType']['email'] || (this['viewMian']['Regist']['close'](),
                                            this['viewMian']['Login']['refresh']());
                                        var aW = {
                                            'loginType': aT,
                                            'areaCode': ag['Instance']['Account']['areaNo'],
                                            'account': aV,
                                            'password': aU
                                        };
                                        if (this['onLogin'](aW),
                                            aS) {
                                            this['tryTrackEvent'](aC['register'], null),
                                                this['postHttpLoginHandler'] = function (aZ) {
                                                    af['ThirdAdapter']['httpPostEvent'](aC['register'], aZ);
                                                }
                                                ;
                                            var aX = 'guest';
                                            aT == a7['loginType']['phone'] ? aX = 'phone' : aT == a7['loginType']['email'] ? aX = 'email' : aT == a7['loginType']['facebook'] && (aX = 'facebook'),
                                                aE['Instance']()['trackEvent'](new aG(aX)),
                                                a8['StringIsNullOrEmpty'](az['sourceUserId']) || aE['Instance']()['trackEvent'](new aH(az['sourceUserId']));
                                        }
                                    } else {
                                        var aY = {
                                            'txt': aq['getLangByID'](aA['ok']),
                                            'click': function () { }
                                        };
                                        ak(aR['code'], !0x0, aY),
                                            this['bFastLogin'] && (this['viewMian']['refresh'](),
                                                this['viewMian']['show']());
                                    }
                                }
                                ,
                                aP['onSendFindPswCode'] = function (aQ, aR) {
                                    this['reqCaptchar'](aQ, aR);
                                }
                                ,
                                aP['onResetPassword'] = function (aQ) {
                                    if (null != aQ) {
                                        this['resetData'] = aQ,
                                            this['showLoading'](!0x0);
                                        var aR = ag['Instance']['State']['deviceCode']
                                            , aS = ag['Instance']['getLocalToken'](aR)
                                            , aT = a0({
                                                'type': ax['req']['requests']['resetPassword'],
                                                'deviceType': a8['SysPlatformCode'],
                                                'deviceCode': aR,
                                                'token': aS['token'],
                                                'timestamp': aS['syncStamp']
                                            }, aQ);
                                        this['HttpPost'](ax['req']['cmd'], aT, this['onResetPasswordSuccess']['bind'](this));
                                    } else
                                        af['log']['logView']('loginMain-onResetPassword:params\x20==\x20null');
                                }
                                ,
                                aP['onResetPasswordSuccess'] = function (aQ) {
                                    this['showLoading'](!0x1);
                                    var aR = this['parseHttpData'](aQ);
                                    aR['code'] == aj['success'] ? (this['viewMian']['FindPsw']['close'](),
                                        a8['StringIsNullOrEmpty'](this['resetData']['phone']) ? ab['storage']['remove'](aI['emailPsw']) : ab['storage']['remove'](aI['password']),
                                        this['viewMian']['Login']['show'](),
                                        this['viewMian']['Login']['refresh']()) : ak(aR['code']);
                                }
                                ,
                                aP['onSendAccountVerifyCode'] = function (aQ, aR) {
                                    this['reqCaptchar'](aQ, aR);
                                }
                                ,
                                aP['onAccountVerify'] = function (aQ) {
                                    if (this['showLoading'](!0x0),
                                        null != aQ) {
                                        var aR = ag['Instance']['State']['deviceCode']
                                            , aS = ag['Instance']['getLocalToken'](aR)
                                            , aT = {
                                                'type': ax['req']['requests']['safeVerify'],
                                                'deviceType': a8['SysPlatformCode'],
                                                'deviceCode': aR,
                                                'token': aS['token'],
                                                'timestamp': aS['syncStamp'],
                                                'isSimulator': !0x1,
                                                'phone': aQ['phone'],
                                                'verifyCode': aQ['verifyCode'],
                                                'phoneArea': aQ['phoneArea'],
                                                'email': aQ['email']
                                            };
                                        this['HttpPost'](ax['req']['cmd'], aT, this['onAccountVerifySuccess']['bind'](this));
                                    } else
                                        af['log']['logView']('loginMain-onAccountVerify:params\x20==\x20null');
                                }
                                ,
                                aP['onAccountVerifySuccess'] = function (aQ) {
                                    this['showLoading'](!0x1);
                                    var aR = this['parseHttpData'](aQ);
                                    if (aR['code'] == aj['success']) {
                                        var aS = {
                                            'loginType': ag['Instance']['Account']['loginType'],
                                            'areaCode': ag['Instance']['Account']['areaNo']
                                        };
                                        aS['account'] = ag['Instance']['Account']['loginAccount'],
                                            aS['password'] = ag['Instance']['Account']['loginPassword'],
                                            this['onLogin'](aS),
                                            this['viewMian']['AccountSafe']['close']();
                                    } else
                                        af['log']['logView']('loginMain-onAccountVerifySuccess:response.code=' + aR['code']),
                                            ak(aR['code']);
                                }
                                ,
                                aP['reqCaptchar'] = function (aQ, aR) {
                                    var aS = this;
                                    if (null != aR) {
                                        var aT = ag['Instance']['State']['deviceCode']
                                            , aU = ag['Instance']['getLocalToken'](aT)
                                            , aV = {
                                                'type': a8['checkEmailValid'](aR['email']) ? ai['req']['requests']['mail'] : aQ,
                                                'phone': aR['account'],
                                                'phoneArea': aR['areaCode'],
                                                'deviceCode': aT,
                                                'token': aU['token'],
                                                'timestamp': aU['syncStamp'],
                                                'email': aR['email']
                                            };
                                        this['HttpPost'](ai['req']['cmd'], aV, function (aW) {
                                            var aX = aS['parseHttpData'](aW);
                                            if (aX['type'] = aQ,
                                                console['log']('reqCaptchar:response=', aX),
                                                aX['code'] == aj['success']) {
                                                var aY = aq['getLangByTag']('send_msg', aa['lobby']);
                                                af['toast'](aY);
                                                var aZ = aX['verifyCode']
                                                    , b0 = aX['curtime'];
                                                switch (aQ) {
                                                    case ai['req']['requests']['regitst']:
                                                        aS['viewMian']['Regist']['onStartTimer'](b0);
                                                        break;
                                                    case ai['req']['requests']['resetPassword']:
                                                        aS['viewMian']['FindPsw']['onStartTimer'](b0);
                                                        break;
                                                    case ai['req']['requests']['securityVerify']:
                                                        aS['viewMian']['AccountSafe']['onStartTimer'](b0);
                                                }
                                                af['log']['logModel']('capchar\x20=\x20' + aZ);
                                            } else
                                                ak(aX['code']);
                                        });
                                    } else
                                        af['log']['logView']('loginMain-reqCaptchar:data\x20==\x20null');
                                }
                                ,
                                aP['onDispose'] = function () {
                                    aN['prototype']['onDispose']['call'](this),
                                        ab['gui']['remove'](ad['Login']);
                                }
                                ,
                                aP['checkClientState'] = function () {
                                    var aQ = this;
                                    return new Promise(function (aR, aS) {
                                        aQ['getRemoteData'](function (aT, aU) {
                                            aR(!!aT && aU);
                                        });
                                    }
                                    );
                                }
                                ,
                                aP['getRemoteData'] = function (aQ, aR) {
                                    var aS = this;
                                    void 0x0 === aR && (aR = !0x1);
                                    const localConfig = window.GAME_DATA.localConfig;

                                    var aX = localConfig['Notice'];
                                    aX && aX['Flag'] ? (null == aQ || aQ(!0x0, aX),
                                        aR && aS['showDialog'](aX['content'], function () {
                                            aS['getRemoteData'](aQ, aR);
                                        })) : null == aQ || aQ(!0x1);

                                    return;

                                    var aT = 'localConfig.json'
                                        , aU = a5['isBrowser'] ? aT : '' + az['nativeUrl'] + aT;
                                    a8['httpGet'](aU, function (aV, aW) {
                                        if (aV)
                                            null == aQ || aQ(!0x1);
                                        else {
                                            var aX = JSON['parse'](aW)['Notice'];
                                            aX && aX['Flag'] ? (null == aQ || aQ(!0x0, aX),
                                                aR && aS['showDialog'](aX['content'], function () {
                                                    aS['getRemoteData'](aQ, aR);
                                                })) : null == aQ || aQ(!0x1);
                                        }
                                    });
                                }
                                ,
                                aP['showDialog'] = function (aQ, aR) {
                                    var aS = this
                                        , aT = aA['tips'];
                                    aT = aq['getLangByID'](aT);
                                    var aU = {
                                        'txt': aq['getLangByID'](aA['ok']),
                                        'click': function () {
                                            a6['getScheduler']()['unscheduleAllForTarget'](aS['viewMian']['node']),
                                                aR();
                                        }
                                    }
                                        , aV = ar['Show'](aT, aQ, aU);
                                    a6['getScheduler']()['schedule'](function () {
                                        aS['getRemoteData'](function (aW, aX) {
                                            aW || (a6['getScheduler']()['unscheduleAllForTarget'](aS['viewMian']['node']),
                                                ar['close'](aV));
                                        });
                                    }, this['viewMian']['node'], 0xf, 0x0, 0x0);
                                }
                                ,
                                aO;
                        }(a9))['ID'] = aa['login'],
                            aJ = aK)) || aJ));
                aD['Instance']['registerModule'](aa['login'], aM),
                    globalThis['enterLogin'] = function (aN) {
                        var aO;
                        null == (aO = ab['gui']) || aO['init'](ac),
                            aN['netInstable'] && af['setNetLoading'](aN['netInstable']),
                            aN['loading'] && (af['Loading'] = aN['loading']),
                            aN['http'] && af['setHttp'](aN['http']),
                            af['ThirdAdapter'] = new aB(),
                            af['ThirdAdapter']['setAttributionAdapter'](az['attType']),
                            a8['StringIsNullOrEmpty'](az['webEventCode']) || af['ThirdAdapter']['initAttribution'](az['webEventCode']),
                            aD['Instance']['enter'](aM, !0x0);
                    }
                    ,
                    a1['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/my.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
                a['_RF']['push']({}, '7df1apa+qJPDaDRApcldFwg', 'my', void 0x0);
                var b = window;
                b['languages'] || (b['languages'] = {}),
                    b['languages']['my'] || (b['languages']['my'] = {}),
                    b['languages']['my'][0x66] = {
                        0x1: 'VIP',
                        0x2: 'ဘဏ္',
                        0x3: 'ေမးလ္',
                        0x4: 'လႈပ္ရႈားမႈ',
                        0x5: 'အဆင့္',
                        0x6: 'ျမႇင့္တင္သည္',
                        0x7: 'ေငြျပန္ထုတ္သည္',
                        0x8: 'စက္ကုဒ္\x20မရွိပါ',
                        0x9: 'စာရင္းသြင္းပုံစံ\x20မမွန္ကန္ပါ',
                        0xa: 'စာရင္းသြင္းအခ်က္အလက္\x20မမွန္ကန္ပါ',
                        0xb: 'စနစ္ႁခြင္းခ်က္\x2003၊\x20ေနာက္မွ\x20ထပ္မံႀကိဳးစားပါ',
                        0xc: 'အိုင္ဒီႏွစ္ခုျဖစ္ေနသည္၊\x20သုံးစြဲသူဝန္ေဆာင္မႈကိုဆက္သြယ္ပါ',
                        0xd: 'အေကာင့္စာရင္းသြင္းၿပီးပါၿပီ',
                        0xe: 'Captcha\x20အတည္ျပဳကုဒ္မွားယြင္းေနသည္',
                        0xf: 'ဤဖုန္းနံပါတ္သည္\x20အသုံးျပဳၿပီးျဖစ္သည္',
                        0x10: 'သင့္အီးေမးလ္နွင့္\x20အရင္ခ်ိတ္ဆက္ေပးပါ',
                        0x11: 'ပုံမွန္မဟုတ္ေသာ\x20IP\x20လိပ္စာမ်ားအတြက္\x20ဧည့္ဝန္ေဆာင္မႈကိုဆက္သြယ္ပါ',
                        0x12: 'စာရင္းသြင္းမႈ\x20မေအာင္ျမင္ပါ၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ\x20(ကုဒ္-1010)',
                        0x13: 'စာရင္းသြင္းမႈ\x20မေအာင္ျမင္ပါ၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ\x20(ကုဒ္-1011)',
                        0x14: 'ေလာ့ဂ္အင္အမ်ဳိးအစားမမွန္ကန္ပါ',
                        0x15: 'ေလာ့ဂ္အင္\x20အခ်က္အလက္\x20မမွန္ကန္ပါ',
                        0x16: 'စက္\x20ပုံမွန္မဟုတ္ပါ၊\x20ဧည့္ဝန္ေဆာင္မႈကိုဆက္သြယ္ပါ',
                        0x17: 'စနစ္ႁခြင္းခ်က္\x2013၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x18: 'အေကာင့္\x20ပုံမွန္မဟုတ္ပါ၊\x20သုံးစြဲသူဝန္ေဆာင္မႈကိုဆက္သြယ္ပါ',
                        0x19: 'ေလာ့ဂ္အင္ႁခြင္းခ်က္\x20ရွိပုံရသည္၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x1a: 'အေကာင့္\x20သို႔မဟုတ္\x20စကားဝွက္\x20မမွန္ကန္ပါ၊\x20ထည့္သြင္းမႈကို\x20စစ္ေဆးပါ',
                        0x1b: 'အေကာင့္\x20လုံၿခဳံေရးအႏၲရာယ္ရွိၿပီး\x20လုံၿခဳံေရးအတည္ျပဳျခင္းသို႔\x20ဝင္ေရာက္ပါေတာ့မည္',
                        0x1c: 'တရားမဝင္\x20စက္\x20ေလာ့ဂ္အင္\x20ဝင္ရန္\x20ဧည့္ဝန္ေဆာင္မႈကိုဆက္သြယ္ပါ',
                        0x1d: 'ဆာဗာ\x20ျပဳျပင္ေနသည္၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x1e: 'ေတာင္းဆိုခ်က္\x20မမွန္ကန္ပါ',
                        0x1f: 'ဗားရွင္း\x20အလြန္နိမ့္ေနသည္၊\x20အဆင့္ျမႇင့္တင္ရန္\x20လိုပါသည္',
                        0x20: 'ကန႔္သတ္ခ်က္\x20အခက္အခဲ',
                        0x21: 'ေလာ့ဂ္အင္\x20အတြက္\x20သုံးစြဲသူဝန္ေဆာင္မႈ\x20မရရွိႏိုင္ပါ',
                        0x22: 'အတည္ျပဳျခင္းကုဒ္အမ်ိုးအစားမမွန္ပါ',
                        0x23: 'ေလာ့ဂ္အင္\x20ႁခြင္းခ်က္\x2021\x20ျဖစ္ပုံရသည္၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x24: 'လက္ရွိ\x20ဖုန္းနံပါတ္အား\x20စာရင္းသြင္းထားၿပီးျဖစ္ပါသည္၊\x20ထပ္မံ\x20စာရင္းသြင္း၍မရပါ',
                        0x25: 'စနစ္ႁခြင္းခ်က္\x2023၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x26: 'အခ်က္အလက္အတည္ျပဳျခင္း\x20အခ်က္အလက္\x20ႁခြင္းခ်က္၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x27: 'လက္ရွိ\x20ဖုန္းနံပါတ္ကို\x20မည္သည့္အေကာင့္ႏွင့္မွ်\x20ခ်ိတ္ဆက္ထားျခင္းမရွိပါ',
                        0x28: 'ေလာ့ဂ္အင္\x20အခ်က္အလက္\x20သက္တမ္းကုန္ပါၿပီ',
                        0x29: 'သင်သည်\x20ချိတ်ဆက်ရမည်။',
                        0x2a: 'မွန္ကန္ေသာ\x20ဖုန္းနံပါတ္တစ္ခု\x20ထည့္သြင္းပါ',
                        0x2b: 'အေကာင့္ပုံစံ\x20မမွန္ပါ',
                        0x2c: 'အေကာင့္အခ်က္အလက္\x20အမွားအယြင္း',
                        0x2d: 'အတည္ျပဳကုဒ္\x20မမွန္ပါ',
                        0x2e: 'စနစ္ႁခြင္းခ်က္\x2033၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x2f: 'အေကာင့္မမွန္ပါ',
                        0x30: 'သင္၏\x20ဖုန္းနံပါတ္အား\x20အရင္\x20ထည့္ေပးပါ',
                        0x31: 'မွန္ကန္ေသာ\x20ဖုန္းနံပါတ္တစ္ခု\x20ထည့္သြင္းပါ',
                        0x32: 'အေကာင့္သည္\x20ဖုန္းနံပါတ္တခု\x20ထည့္ျပီးပါၿပီ၊\x20ထပ္ထည့္၍မရပါ',
                        0x33: 'ဖုန္းနံပါတ္\x20ထည့္ျပီးပါၿပီ',
                        0x34: 'စကားဝွက္\x20ထည့္ေပးပါ',
                        0x35: 'လက္ရွိအေကာင့္အတြက္\x20ဖုန္းနံပါတ္ထည့္မရပါ၊\x20ဧည့္ဝန္ေဆာင္မႈကို\x20ဆက္သြယ္ပါ။',
                        0x36: 'ေလာ့ဂ္အင္ႁခြင္းခ်က္၊\x20ထပ္မံႀကိဳးစားပါ။',
                        0x37: 'လက္ရွိ\x20အေကာင့္\x20ရွိၿပီးသားျဖစ္သည္။',
                        0x38: 'အတည္ျပဳကုဒ္\x20မမွန္ပါ။',
                        0x39: 'စနစ္ႁခြင္းခ်က္\x2044၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ။',
                        0x3a: 'စနစ္ႁခြင္းခ်က္\x2045၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ။',
                        0x3b: 'စနစ္ႁခြင္းခ်က္\x2046၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ။',
                        0x3c: 'ေတာင္းဆိုခ်ိန္\x20ေက်ာ္လြန္သြားပါၿပီ၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ။',
                        0x3d: 'အသုံးျပဳသူ\x20အိုင္ဒီမရွိပါ။',
                        0x3e: 'အသုံးျပဳသူ\x20အတည္ျပဳအခ်က္အလက္\x20မမွန္ကန္ပါ။',
                        0x3f: 'အသုံးျပဳသူ\x20အတည္ျပဳအခ်က္အလက္\x20ျဖည့္စြက္ပါ။',
                        0x40: 'အသုံးျပဳသူ\x20အတည္ျပဳအခ်က္အလက္\x20မမွန္ကန္ပါ။',
                        0x41: 'လုပ္ေဆာင္ခ်က္\x20ႁခြင္းခ်က္၊\x20သုံးစြဲသူဝန္ေဆာင္မႈႏွင့္\x20ဆက္သြယ္ပါ။',
                        0x42: 'လက်ရှိအီးမေးလ်လိပ်စာသည်\x20पहलेမှတ်ပုံတင်ပြီးဖြစ်၍\x20ထပ်မံမှတ်ပုံတင်နိုင်ပါ။',
                        0x43: 'နောက်မှ\x20ထပ်မံကြိုးစားပါ။',
                        0x44: 'ေဒတာ\x20မမွန္ပါ၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x45: '<color=#FF4600>@player</color>\x20အား\x20<color=yellow>@game</color>တြင္\x20<color=#4BFF00>x@multiple</color>\x20ဆုႀကီး\x20အႏိုင္ရရွိျခင္း\x20ႏွင့္\x20<color=yellow>@coins</color>\x20ကြိဳင္မ်ားရရွိျခင္းအတြက္\x20ဂုဏ္ျပဳပါသည္။',
                        0x46: '<color=#FF4600>%s\x20အား</color>\x20<color=#4BFF00>%s\x20တြင္\x20ဂ်က္ေပါ့\x20</color>\x20အႏိုင္ရရွိျခင္းႏွင့္\x20ကြိဳင္\x20<color=yellow>%s</color>\x20ရရွိျခင္းအတြက္\x20ဂုဏ္ျပဳပါသည္။',
                        0x47: 'အခန္း',
                        0x48: 'ကစားသမားမ်ား',
                        0x49: 'ေလာင္းေၾကးမ်ား',
                        0x4a: 'အနိမ့္ဆုံးလက္က်န္ေငြ',
                        0x4b: 'အစမ္း',
                        0x4c: 'အေျခခံ',
                        0x4d: 'မာစတာ',
                        0x4e: 'ဘုရင္',
                        0x4f: 'မဟာ',
                        0x50: 'လက္ဂ်န္႔ဒ္',
                        0x51: 'Vip',
                        0x52: 'အခန္း',
                        0x53: 'ကစားသည္',
                        0x54: 'တစ္ခုခု',
                        0x55: 'ထြက္မည္။',
                        0x56: 'ျပန္ထြက္ပါ။',
                        0x57: 'အႀကံေပးခ်က္မ်ား',
                        0x58: 'ဆာဗာခ်ိတ္ဆက္မႈ\x20မေအာင္ျမင္ပါ၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ',
                        0x59: 'စနစ္က\x20သင့္အား\x20ထြက္ခိုင္းပါသည္၊\x20ေနာက္မွ\x20ဂိမ္းထဲဝင္ပါ',
                        0x5a: 'ဤအေကာင့္ကို\x20အျခားစက္မွ\x20ဝင္ေရာက္ထားပါသည္၊\x20အေကာင့္\x20လုံၿခဳံေရးကို\x20သတိျပဳပါ',
                        0x5b: '%s\x20ရွိ\x20သင့္ဂိမ္း\x20မၿပီးေသးပါ၊\x20ျပန္သြားၿပီးကစားပါ',
                        0x5c: 'အေကာင့္စာရင္းသြင္းျခင္း\x20ရွိၿပီးပါၿပီ။',
                        0x5d: 'ဧည့္အေကာင့္စက္ေနရာကို\x20အလြတ္ထား၍မရပါ။',
                        0x5e: 'အေကာင့္မရွိပါ။',
                        0x5f: 'စကားဝွက္\x20မမွန္ကန္ပါ။',
                        0x60: 'အေကာင့္အား\x20ရပ္ဆိုင္းထားသည္။',
                        0x61: 'ဧည့္ေလာ့ဂ္အင္\x20ႁခြင္းခ်က္၊\x20ျပန္ႀကိဳးစားပါ။',
                        0x62: 'ေလာ့ဂ္အင္ႁခြင္းခ်က္\x207၊\x20ျပန္ႀကိဳးစားပါ။',
                        0x63: 'စနစ္ျပဳျပင္ေနသည္၊\x20ေနာက္မွ\x20ထပ္ႀကိဳးစားပါ။',
                        0x64: 'စကားဝွက္\x20ေျပာင္းပါ',
                        0x65: 'ေဒါင္းလုဒ္',
                        0x66: 'ပိုေကာင္းေသာ\x20အေတြ႕အႀကဳံအတြက္\x20ဂိမ္းကို\x20ေဒါင္းလုဒ္လုပ္ပါ။',
                        0x67: 'ပိုေကာင္းေသာ\x20အေတြ႕အႀကဳံအတြက္\x20ဂိမ္းကို\x20ေဒါင္းလုဒ္လုပ္ပါ။\x20ယခုပဲ\x20အင္စေတာလုပ္၍\x20ဆုမ်ား\x20ရယူလိုက္ပါ။',
                        0x68: '<size=21><color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>ဝန္ေဆာင္မႈ\x20စည္းမ်ဥ္းမ်ား</on></u></color>\x20ႏွင့္<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>ကိုယ္ေရးကိုယ္တာလုံၿခဳံေရးႏွင့္ေပၚလစီ</on></u></color>ကို\x20လက္ခံပါ။</size>',
                        0x69: 'လူႀကီးမင္းရဲ႕\x20ဂိမ္းအေကာင့္ကို\x20ဖုန္းနံပါတ္ျဖင့္\x20\x0aခ်ိတ္ဆက္ၿပီး\x20ေဘာနပ္စ္မ်ားကို\x20ရယူလိုက္ပါ။',
                        0x6a: 'ခ်ိတ္ဆက္ရန္',
                        0x6b: 'စိတ္မေကာင္းပါ၊\x20VIP\x20လိုအပ္ခ်က္မ်ား\x20မျပည့္စုံပါ၊\x20ကြိဳင္မ်ားေလေလ၊\x20VIP\x20ပိုျမင့္ေလေလ\x20၊\x20ေငြျပန္ျဖည့္ရန္\x20စတိုးဆိုင္သို႔သြားပါ',
                        0x6c: 'စိတ္မေကာင္းပါ၊\x20သင္\x20ဝင္ခြင့္လိုအပ္ခ်က္မ်ား\x20မျပည့္စုံပါ၊\x20သင္\x20စတိုးသို႔သြား၍\x20ပစၥည္းအခ်ိဳ႕ဝယ္ခ်င္ပါသလား။',
                        0x6d: '<img\x20src=\x27share\x27\x20/>\x20ကို\x20ႏွိပ္၍\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>အခ်ိန္မေရြးကစားရန္\x20ပင္မစခရင္သို႔\x20</color></b>တင္ပါ',
                        0x6e: '<img\x20src=\x27share\x27\x20/>\x20ကို\x20ႏွိပ္၍\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>အခ်ိန္မေရြးကစားရန္\x20ပင္မစခရင္သို႔\x20</color></b>တင္ပါ',
                        0x6f: 'သတိ',
                        0x70: 'သင္၏ဂိမ္းေဒတာ\x20လုံၿခဳံေရးအတြက္၊\x20တရားဝင္အေကာင့္စာရင္းသြင္းရန္\x20အထူးအႀကံျပဳပါသည္',
                        0x71: 'မက္ေဆ့ခ္်\x20ပို႔ၿပီး',
                        0x72: 'ဆုေၾကးရယူမႈ\x20ၿပီးေျမာက္သည္',
                        0x73: 'ဝန္ေဆာင္မႈ',
                        0x74: 'ဆက္တင္',
                        0x75: 'ခ်က္-အင္',
                        0x76: 'လွည့္စားပြဲ',
                        0x77: 'လက္ေဆာင္',
                        0x78: 'ဂရာတီရာ',
                        0x79: 'ဖိတ္ေခၚသည္',
                        0x7a: 'ေဘာနပ္စ္',
                        0x7b: 'အားလုံး',
                        0x7c: 'လူသိမ်ားေသာ',
                        0x7d: 'စေလာ့မ်ား',
                        0x7e: 'ပိုကာ',
                        0x7f: 'ကြန္ရက္ခ်ိတ္ဆက္မႈ\x20မေကာင္းပါ',
                        0x80: 'အခမဲ့ေငြေၾကး',
                        0x81: 'ဝယ္မည္',
                        0x82: 'ဗာရွင္းအသစ္ေတြ႕သည္။\x20၎အား\x20သင္ျပန္လည္\x20အသစ္တင္လိုပါသလား။',
                        0x83: 'ဤပြဲၿပီးသြားပါၿပီ၊\x20ဝယ္ယူေငြအား\x20ျပန္အမ္းလိုက္ပါၿပီ',
                        0x84: 'ကြိဳင္ဝယ္မည္',
                        0x85: 'သင္\x20ေလာ့ဂ္အင္မလုပ္ထားပါ၊\x20ေလာ့ဂ္ေအာက္လုပ္ၿပီး\x20ထပ္ႀကိဳးစားပါ',
                        0x86: 'အေထာက္အထားစိစစ္ျခင္း\x20မေအာင္ျမင္ပါက\x20ထြက္ၿပီး\x20ထပ္ႀကိဳးစားပါ',
                        0x87: 'ဂိမ္းအခန္း\x20မမွန္ပါ၊\x20တျခားတခု\x20စမ္းၾကည့္ပါ',
                        0x88: 'အခန္းပိတ္သြားပါၿပီ၊\x20တျခားတစ္ခုကို\x20စမ္းၾကည့္ပါ',
                        0x89: 'အလုပ္မ်ား',
                        0x8a: 'စေလာ့အသစ္\x20ကစားရန္အခ်ိန္ျဖစ္ပါသည္',
                        0x8b: 'ေန႔စဥ္ဝင္ေရာက္၍\x20အခမဲ့ကြိဳင္မ်ား\x20ရယူပါ။',
                        0x8c: 'ကံေကာင္းျခင္းကစားဘီး!\x20100%\x20ႏိုင္ႏႈန္းအာမခံခ်က္!\x20လာေရာက္က\x20စားၿပီး\x20သင့္ဆု​ေၾကးကို\x20ရယူလိုက္ပါ။',
                        0x8d: 'ႀကီးမားေသာကြိဳင္မ်ားအတြက္\x20သီးသန႔္စိန္ေခၚမႈအသစ္။',
                        0x8e: 'အံ့ၾသဖြယ္စေလာ့မ်ားႏွင့္\x20အျခားဂိမ္းမ်ား။',
                        0x8f: 'အထူးေဘာနပ္စ္ကို\x20သင္ရရွိႏိုင္ပါသည္',
                        0x90: 'VIP\x20ပါဝါ\x20ပိုျမင့္ေလေလ၊\x20အက်ိဳးခံစားခြင့္\x20ပိုမ်ားေလေလ။',
                        0x91: 'စေလာ့အသစ္မ်ား\x20လွည့္ပါ၊\x20ကံေကာင္းျခင္းမ်ား\x20သင္ႏွင့္အတူရွိပါေစ။',
                        0x92: 'ကံေကာင္းျခင္းဘီးေန႔၊\x20ေ႐ႊဘီးဆတိုး။',
                        0x93: 'အံ့အားသင့္စရာ\x20ေဘာနပ္စ္၊\x20သင္၏ကြိဳင္မ်ားကို\x20လာစုေဆာင္းပါ',
                        0x94: 'ျမန္ျမန္လွည့္ၿပီး\x20ဆုေၾကးႀကီးမ်ား။',
                        0x95: 'ဆုႀကီးမ်ား\x20အဆင္သင့္ျဖစ္ပါၿပီ၊\x20အခုပဲလွည့္လိုက္ပါ။',
                        0x96: 'ႏွိပ္ၿပီး\x20အခမဲ့ခ်စ္ပ္မ်ား\x20စုေဆာင္းပါ။',
                        0x97: 'ေပ်ာ္စရာနာရီ!!!\x20ရတနာခြက္\x2010%\x20အခြင့္အေရးပိုရ!!!\x20အထုပ္အားလုံးအတြက္\x20အကန႔္အသတ္မရွိ\x20ေဘာနပ္စ္',
                        0x98: 'လက္ေဆာင္မ်ားႏွင့္\x20အထူးမစ္ရွင္မ်ားကို\x20ခံစားရန္\x20ယခုပဲ\x20ကစားလိုက္ပါ',
                        0x99: 'သူငယ္ခ်င္းမ်ား\x20ဖိတ္ေခၚပါ၊\x20သူတို႔၏\x20ေဘာ့စ္လုပ္ပါ!\x20ကြိဳင္အမ်ားအျပားကို\x20အခမဲ့ရယူလိုက္ပါ',
                        0x9a: 'သင္၏သူငယ္ခ်င္းမ်ားကို\x20ေဝမွ်ပါ၊\x20သီးသန႔္လက္​ေဆာင္မ်ားရယူပါ',
                        0x9b: 'ေဝမွ်ျခင္းအတြက္\x20ႀကီးမားေသာဆုမ်ားရယူလိုက္ပါ၊\x20ပိုမိုဖိတ္ေခၚ၍\x20ဆုေၾကးပိုရေအာင္လုပ္ပါ',
                        0x9c: 'သူငယ္ခ်င္းမ်ားႏွင့္\x20ကစားပါ၊\x20အခမဲ့လက္ေဆာင္မ်ား\x20ေန႔တိုင္းေပးေနပါသည္။',
                        0x9d: 'ကံေကာင္းေသာ\x20ေဘာနပ္စ္၊\x20အခ်မ္းသာဆုံးျဖစ္ေစမယ့္\x20အခြင့္အေရးတစ္ခု။',
                        0x9e: 'သင္၏\x20ပထမဆုံး\x20အထူးကမ္းလွမ္းခ်က္အား\x20ခံစားပါ၊\x20ၿပီးလွ်င္\x20ဝယ္ယူမႈ\x20အက်ိဳးခံစားခြင့္မ်ား\x20ရယူပါ',
                        0x9f: 'ပထမဆုံးဝယ္ယူမႈသည္\x20အပိုဆုေၾကးမ်ားရႏိုင္သည္။',
                        0xa0: 'HalloWIN!\x20ေန႔တိုင္းေလာ့ဂ္အင္လုပ္ပါ၊\x20မည္သည့္\x20ကုန္ပစၥည္းမဆို\x20ဝယ္ယူ၍\x20အခ်ိန္အကန႔္အသတ္ျဖင့္ေပးသည့္\x20ေလွ်ာ့ေဈးမ်ားကို\x20ရယူပါ။',
                        0xa1: '<b>@player\x20သည္\x20\x0aဆုႀကီး\x20<color=#FFE100>@ကြိဳင္မ်ား\x20</color>\x20ကိုၚ\x20\x0a<color=#00FFEF>@game\x20တြင္\x20အႏိုင္ရသည္</color></b>',
                        0xa2: 'အိမ္',
                        0xa3: 'စေလာ့မ်ား',
                        0xa4: 'မာလ္တီပေလယာ',
                        0xa5: 'ရာဇဝင္',
                        0xa6: 'အကျိုးဆက်ကို\x20ရဖို့\x20ဘဏ်ကာဒ်ကို\x20ချိတ်ဆက်ပါ',
                        0xa7: 'ပြင်ပလင့်ခ်တစ်ခုကို\x20ဖွင့်ပါတော့မည်။\x20ဆက်လိုပါသလား။',
                        0xa8: 'လိုက်ဖက်သော...',
                        0xa9: 'ဆုလာဘ်ရရန်\x20သင့်အီးမေးလ်လိပ်စာကို\x20ချိတ်ဆက်ပါ',
                        0xaa: 'ဆုလာဘ်ရရန်\x20သင့်ဖုန်းနံပါတ်\x20သို့မဟုတ်\x20အီးမေးလ်လိပ်စာကို\x20ချိတ်ဆက်ပါ',
                        0xab: 'ကျေးဇူးပြု၍\x20သင့်အီးမေးလ်ကို\x20ထည့်ပါ',
                        0xac: 'အားကစားသမားများအတွက်\x20ကိုက်ညီမှု\x20မတွေ့ရပါ',
                        0xad: 'လိုအပ်သည့်အနည်းဆုံးပမာဏအောက်တွင်',
                        0xae: 'အိမ်ထောင်ရေးစုံတွဲ\x20ရှာဖွေမှု\x20စာရင်းတွင်\x20မပါဝင်ပါ',
                        0xaf: 'ထိုင်ခုံအချက်အလက်\x20မရှိပါ',
                        0xb0: 'ထိုင်နေမရပါ'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/notify2.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './webGame.ts', './lobbyState.ts', './Oops.ts', './GameUIConfig.ts', './Language.ts', './platformData.ts', './CustomEventDefine.ts', './GameListConfig.ts', './appConfig.ts', './jackpot.ts'], function (j) {
        var k, q, w, x, z, A, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q;
        return {
            'setters': [function (R) {
                k = R['createClass'];
            }
                , function (R) {
                    q = R['cclegacy'],
                        w = R['_decorator'],
                        x = R['UITransform'],
                        z = R['Widget'],
                        A = R['RichText'],
                        C = R['Vec2'],
                        D = R['js'],
                        E = R['Vec3'],
                        F = R['tween'];
                }
                , function (R) {
                    G = R['webGame'];
                }
                , function (R) {
                    H = R['lobbyState'];
                }
                , function (R) {
                    I = R['oops'];
                }
                , function (R) {
                    J = R['UIID'];
                }
                , function (R) {
                    K = R['LanguageManager'];
                }
                , function (R) {
                    L = R['PModuleID'];
                }
                , function (R) {
                    M = R['WebGameEvent'],
                        N = R['gameStage'];
                }
                , function (R) {
                    O = R['GameBaseInfo'];
                }
                , function (R) {
                    P = R['appConfig'];
                }
                , function (R) {
                    Q = R['jackpot'];
                }
            ],
            'execute': function () {
                var R, S;
                q['_RF']['push']({}, '20911H3655MWKvuj6aQ6F3s', 'notify', void 0x0);
                var T = w['ccclass'];
                w['property'],
                    j('notify', T('notify')(((S = (function () {
                        function U() {
                            this['bHasJackpotTips'] = !0x0,
                                this['gameNode'] = null,
                                this['notifyUIWidget'] = null,
                                this['notifyUITrans'] = null,
                                this['viewportWidget'] = null,
                                this['rtContent'] = null,
                                this['rtContentUITrans'] = null,
                                this['bRight2Left'] = !0x0,
                                this['bInit'] = !0x1,
                                this['bShowBroadcastFlag'] = !0x0,
                                this['bShowTrueJackpot'] = !0x1,
                                this['zoomMultiple'] = new C(0x5, 0xa),
                                this['zoomCoins'] = new C(0x32, 0x96),
                                this['broadcastQueue'] = [],
                                this['moveSpeed'] = 0x96,
                                this['moveBroadcastTwer'] = void 0x0;
                        }
                        var V = U['prototype'];
                        return V['setRight2Left'] = function (W) {
                            this['bRight2Left'] = W;
                        }
                            ,
                            V['init'] = function () {
                                var W = this;
                                if (!this['bInit']) {
                                    var X = {
                                        'onAdded': function (Y, Z) {
                                            W['bindGameNode'](Y),
                                                W['openBroadcast'](!0x0);
                                        }
                                    };
                                    I['gui']['open'](J['notify'], null, X),
                                        this['bHasJackpotTips'] && Q['instance']['init'](),
                                        this['bInit'] = !0x0;
                                }
                            }
                            ,
                            V['bindGameNode'] = function (W) {
                                if (null != W) {
                                    if (this['IsBindNode'])
                                        return G['log']['logBusiness']('notify\x20bindGameObject\x20gameNode\x20is\x20not\x20null'),
                                            void W['destroy']();
                                    this['gameNode'] = W,
                                        this['notifyUITrans'] = this['gameNode']['getComponent'](x),
                                        this['notifyUIWidget'] = this['gameNode']['getComponent'](z);
                                    var X = this['gameNode']['getChildByName']('viewport');
                                    this['viewportWidget'] = X['getComponent'](z),
                                        this['rtContent'] = this['gameNode']['getComponentInChildren'](A),
                                        this['rtContentUITrans'] = this['rtContent']['node']['getComponent'](x),
                                        this['addListener']();
                                } else
                                    G['log']['logBusiness']('notify\x20bindGameNode\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['addListener'] = function () {
                                I['message']['on'](M['notify_show'], this['on_notify_show'], this),
                                    I['message']['on'](M['notify_push'], this['on_notify_push'], this),
                                    I['message']['on'](M['notify_resize'], this['on_notify_resize'], this);
                            }
                            ,
                            V['removeListener'] = function () {
                                I['message']['off'](M['notify_show'], this['on_notify_show'], this),
                                    I['message']['off'](M['notify_push'], this['on_notify_push'], this),
                                    I['message']['off'](M['notify_resize'], this['on_notify_resize'], this);
                            }
                            ,
                            V['on_notify_show'] = function (W, X) {
                                var Y;
                                (this['bShowBroadcastFlag'] = X,
                                    this['openBroadcast'](X),
                                    this['bHasJackpotTips']) && (X && P['gameStage'] != N['lobby'] && (X = !0x1),
                                        null == (Y = Q['instance']) || Y['openBroadcast'](X));
                            }
                            ,
                            V['on_notify_push'] = function (W, X, Y) {
                                this['bShowBroadcastFlag'] && (null != X && X['length'] > 0x0 ? this['pushBroadcast'](X) : null != Y && Y['length'] > 0x0 && this['pushWinner'](Y));
                            }
                            ,
                            V['on_notify_resize'] = function (W, X, Y, Z) {
                                this['resetWidget'](X, Y, Z);
                            }
                            ,
                            V['resetWidget'] = function (W, X, Y) {
                                if (this['IsBindNode']) {
                                    if (null == Y)
                                        Y = new C(0x0, W ? 0x14 : 0x5a);
                                    (null == X || X <= 0x0) && (X = W ? 0x2b2 : 0x230),
                                        this['notifyUITrans']['width'] = X,
                                        this['notifyUIWidget']['top'] = Y['y'],
                                        this['notifyUIWidget']['horizontalCenter'] = Y['x'],
                                        this['notifyUIWidget']['updateAlignment'](),
                                        this['viewportWidget']['updateAlignment']();
                                } else
                                    G['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['pushBroadcast'] = function (W, X) {
                                if (void 0x0 === X && (X = !0x0),
                                    this['IsBindNode']) {
                                    if (null != W && 0x0 != W['length']) {
                                        W['sort'](function (Z, a0) {
                                            return Z['level'] - a0['level'];
                                        });
                                        var Y = [];
                                        W['forEach'](function (Z) {
                                            var a0 = Z['message']
                                                , a1 = Z['showtimes'];
                                            Y['push']({
                                                'content': a0,
                                                'loop': a1
                                            });
                                        }),
                                            this['insertBroadcast'](Y, !0x0, X);
                                    } else
                                        G['log']['logBusiness']('notify\x20pushBroadcast\x20messages\x20is\x20null');
                                } else
                                    G['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['pushWinner'] = function (W, X) {
                                if (void 0x0 === X && (X = !0x0),
                                    this['IsBindNode']) {
                                    if (null != W && 0x0 != W['length']) {
                                        for (var Y = this['bHasJackpotTips'] && P['gameStage'] == N['lobby'], Z = Y ? [] : null, a0 = [], a1 = 0x0; a1 < W['length']; a1++) {
                                            var a2 = W[a1];
                                            if (Y && 0x1 == a2['type'])
                                                Z['push'](a2);
                                            else {
                                                var a3 = this['buildWinnerMessage'](a2);
                                                a3 && a0['push']({
                                                    'content': a3,
                                                    'loop': 0x1
                                                });
                                            }
                                        }
                                        Y && Z['length'] > 0x0 && Q['instance']['pushWinner'](Z, X),
                                            this['insertBroadcast'](a0, !0x1, X);
                                    } else
                                        G['log']['logBusiness']('notify\x20pushWinner\x20messages\x20is\x20null');
                                } else
                                    G['log']['logBusiness']('notify\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['openBroadcast'] = function (W) {
                                this['IsBindNode'] ? (this['gameNode']['active'] = W,
                                    W ? this['playBroadcast']() : this['tryStopMove']()) : G['log']['logBusiness']('notify\x20showBroadcast\x20gameNode\x20is\x20null');
                            }
                            ,
                            V['buildWinnerMessage'] = function (W) {
                                var X = W['winScore'];
                                if (null == X || X <= 0x0 || null == O[W['gameId']] || !O[W['gameId']]['open'])
                                    return null;
                                var Y = H['Instance']['PlayerBaseInfo']
                                    , Z = this['mixPlayerName'](W['userName'])
                                    , a0 = 0x1 == W['type'];
                                if (!(Y['name'] == Z || a0 && this['bShowTrueJackpot'])) {
                                    var a1 = Math['floor'](Math['random']() * (this['zoomCoins']['y'] - this['zoomCoins']['x'])) + this['zoomCoins']['x'];
                                    X *= a1 *= 0xa / G['TranslateRate'],
                                        X -= X % 0x64;
                                }
                                var a2 = K['getLangByTag']('name_' + W['gameId'])
                                    , a3 = '';
                                if (a0)
                                    a3 = this['fmtWinnerMsg'](Z, a2, X);
                                else {
                                    var a4 = W['multiple'];
                                    a4 *= Math['random']() * (this['zoomMultiple']['y'] - this['zoomMultiple']['x']) + this['zoomMultiple']['x'],
                                        a4 = Math['floor'](a4),
                                        a3 = this['fmtWinnerMsg'](Z, a2, X, a4);
                                }
                                return a3;
                            }
                            ,
                            V['fmtWinnerMsg'] = function (W, X, Y, Z) {
                                var a0 = ''
                                    , a1 = G['FormatCoins'](Y);
                                if (null == Z || Z <= 0x0) {
                                    var a2 = K['getLangByTag']('ft_jackpot_broadcast', L['lobby']);
                                    a0 = D['formatStr'](a2, W, X, a1);
                                } else
                                    a0 = (a0 = (a0 = (a0 = (a0 = K['getLangByTag']('ft_win_broadcast', L['lobby']))['replace']('@player', W))['replace']('@game', X))['replace']('@multiple', Z['toString']()))['replace']('@coins', a1);
                                return a0;
                            }
                            ,
                            V['mixPlayerName'] = function (W) {
                                if (null == W || W['length'] <= 0x3)
                                    return 'player***';
                                var X = W['substring'](0x0, 0x2);
                                return X += '***',
                                    W['length'] > 0x5 && (X += W['substring'](W['length'] - 0x1)),
                                    X;
                            }
                            ,
                            V['insertBroadcast'] = function (W, X, Y) {
                                var Z, a0;
                                (void 0x0 === X && (X = !0x1),
                                    void 0x0 === Y && (Y = !0x0),
                                    X) ? (Z = this['broadcastQueue'])['unshift']['apply'](Z, W) : (a0 = this['broadcastQueue'])['push']['apply'](a0, W),
                                    null == this['moveBroadcastTwer'] && Y && this['openBroadcast'](!0x0);
                            }
                            ,
                            V['tryStopMove'] = function () {
                                null != this['moveBroadcastTwer'] && (this['moveBroadcastTwer']['stop'](),
                                    this['moveBroadcastTwer'] = null);
                            }
                            ,
                            V['playBroadcast'] = function () {
                                var W = this;
                                if (0x0 != this['broadcastQueue']['length']) {
                                    if (this['IsBindNode']) {
                                        this['tryStopMove']();
                                        var X = this['notifyUITrans']['contentSize']['width']
                                            , Y = new E(X / 0x2, 0x0, 0x0)
                                            , Z = this['broadcastQueue']['shift']();
                                        this['rtContent']['string'] = Z['content'];
                                        var a0 = this['rtContentUITrans']['contentSize']['width']
                                            , a1 = (a0 + X) / this['moveSpeed']
                                            , a2 = new E(-X / 0x2 - a0, 0x0, 0x0);
                                        if (!this['bRight2Left']) {
                                            var a3 = [a2, Y];
                                            Y = a3[0x0],
                                                a2 = a3[0x1];
                                        }
                                        this['rtContent']['node']['setPosition'](Y),
                                            this['moveBroadcastTwer'] = F(this['rtContent']['node'])['to'](a1, {
                                                'position': a2
                                            }, {
                                                'easing': 'linear'
                                            })['call'](function () {
                                                W['playBroadcast']();
                                            })['start'](),
                                            Z['loop'] > 0x1 && (Z['loop']--,
                                                this['broadcastQueue']['push'](Z));
                                    } else
                                        G['log']['logBusiness']('notify\x20playBroadcast\x20gameNode\x20is\x20null');
                                } else
                                    this['openBroadcast'](!0x1);
                            }
                            ,
                            V['dispose'] = function () {
                                var W;
                                (this['openBroadcast'](!0x1),
                                    this['gameNode']['destroy'](),
                                    this['removeListener'](),
                                    this['bHasJackpotTips']) && (null == (W = Q['instance']) || W['dispose']()),
                                    U['_instance'] = null;
                            }
                            ,
                            k(U, [{
                                'key': 'IsBindNode',
                                'get': function () {
                                    return null != this['gameNode'];
                                }
                            }], [{
                                'key': 'instance',
                                'get': function () {
                                    return null == U['_instance'] && (U['_instance'] = new U()),
                                        U['_instance'];
                                }
                            }]),
                            U;
                    }()))['_instance'] = null,
                        R = S)) || R),
                    q['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/panelFindPsw.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './Language.ts', './webGame.ts', './stringDefine2.ts', './gameRichText.ts', './sendButton.ts', './httpAccount.ts', './appConfig.ts', './lobbyState.ts', './httpInfo.ts', './platformData.ts', './StorageConfig.ts', './Oops.ts', './inputAccount.ts'], function (j) {
        var q, x, z, D, E, F, G, H, I, J, K, L, M, N, O, Q, R, T, U, V, W, X, Y, Z, a0, a1;
        return {
            'setters': [function (a2) {
                q = a2['applyDecoratedDescriptor'],
                    x = a2['inheritsLoose'],
                    z = a2['initializerDefineProperty'],
                    D = a2['assertThisInitialized'];
            }
                , function (a2) {
                    E = a2['cclegacy'],
                        F = a2['_decorator'],
                        G = a2['EditBox'],
                        H = a2['Node'],
                        I = a2['Button'];
                }
                , function (a2) {
                    J = a2['Login'];
                }
                , function (a2) {
                    K = a2['baseView'];
                }
                , function (a2) {
                    L = a2['utils'];
                }
                , function (a2) {
                    M = a2['LanguageManager'];
                }
                , function (a2) {
                    N = a2['webGame'];
                }
                , function (a2) {
                    O = a2['stringDefine'];
                }
                , function (a2) {
                    Q = a2['gameRichText'];
                }
                , function (a2) {
                    R = a2['sendButton'];
                }
                , function (a2) {
                    T = a2['HttpAccount'];
                }
                , function (a2) {
                    U = a2['appConfig'];
                }
                , function (a2) {
                    V = a2['lobbyState'],
                        W = a2['SupportAccountType'];
                }
                , function (a2) {
                    X = a2['HttpCaptchar'];
                }
                , function (a2) {
                    Y = a2['PModuleID'];
                }
                , function (a2) {
                    Z = a2['StorageConfig'];
                }
                , function (a2) {
                    a0 = a2['oops'];
                }
                , function (a2) {
                    a1 = a2['inputAccount'];
                }
            ],
            'execute': function () {
                var a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am;
                E['_RF']['push']({}, 'dc7cemd6aRO7bupPb9f1f8A', 'panelFindPsw', void 0x0);
                var an = F['ccclass']
                    , ao = F['property'];
                j('panelFindPsw', (a2 = an('panelFindPsw'),
                    a3 = ao({
                        'type': a1,
                        'tooltip': '账号输入'
                    }),
                    a4 = ao({
                        'type': G,
                        'tooltip': '验证码输入框'
                    }),
                    a5 = ao({
                        'type': R,
                        'tooltip': '发送验证码按钮'
                    }),
                    a6 = ao({
                        'type': G,
                        'tooltip': '密码输入框'
                    }),
                    a7 = ao({
                        'type': H,
                        'tooltip': '确认密码根节点'
                    }),
                    a8 = ao({
                        'type': G,
                        'tooltip': '确认密码输入框'
                    }),
                    a9 = ao({
                        'type': I,
                        'tooltip': '返回按钮'
                    }),
                    aa = ao({
                        'type': I,
                        'tooltip': '找回密码按钮'
                    }),
                    ab = ao({
                        'type': Q,
                        'tooltip': '登录富文本'
                    }),
                    a2((ae = q((ad = function (ap) {
                        function aq() {
                            for (var as, at = arguments['length'], au = new Array(at), av = 0x0; av < at; av++)
                                au[av] = arguments[av];
                            return as = ap['call']['apply'](ap, [this]['concat'](au)) || this,
                                z(as, 'inputAccount', ae, D(as)),
                                z(as, 'inputCode', af, D(as)),
                                z(as, 'btnSendCode', ag, D(as)),
                                z(as, 'inputPassword', ah, D(as)),
                                z(as, 'nodeAffirm', ai, D(as)),
                                z(as, 'inputAffirm', aj, D(as)),
                                z(as, 'btnBack', ak, D(as)),
                                z(as, 'btnFind', al, D(as)),
                                z(as, 'gRtLogin', am, D(as)),
                                as;
                        }
                        x(aq, ap);
                        var ar = aq['prototype'];
                        return ar['onInit'] = function () {
                            L['ButtonBindClick'](this['btnBack'], this['onBtnBackClick'], this),
                                L['ButtonBindClick'](this['btnFind'], this['onBtnFindClick'], this),
                                this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                                this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                        }
                            ,
                            ar['AddListener'] = function () {
                                ap['prototype']['AddListener']['call'](this),
                                    this['RegistMsg'](J['msgID']['showFindPsw'], this['onShowFindPsw']);
                            }
                            ,
                            ar['RemoveListener'] = function () {
                                ap['prototype']['RemoveListener']['call'](this),
                                    this['LogoutMsg'](J['msgID']['showFindPsw']);
                            }
                            ,
                            ar['refresh'] = function (as, at, au) {
                                var av = V['Instance']['Server']['supportAccountTypes'];
                                this['inputAccount']['setSupportType'](av, as);
                                var aw = as == W['Phone'];
                                if (-0x1 != av['indexOf'](W['Phone'])) {
                                    var ax = U['areaCodeList'];
                                    L['StringIsNullOrEmpty'](au) && (au = a0['storage']['get'](Z['areaCode']),
                                        L['StringIsNullOrEmpty'](au) && (au = U['defaultAreaCode'])),
                                        this['inputAccount']['refresh'](W['Phone'], aw ? at : null, ax, au);
                                }
                                -0x1 != av['indexOf'](W['Email']) && this['inputAccount']['refresh'](W['Email'], aw ? null : at),
                                    this['inputCode']['string'] = '',
                                    this['inputPassword']['string'] = '',
                                    this['inputAffirm']['string'] = '';
                            }
                            ,
                            ar['onShowFindPsw'] = function (as, at, au) {
                                this['show'](),
                                    this['refresh'](as, at, au);
                            }
                            ,
                            ar['onBtnBackClick'] = function () {
                                this['close'](),
                                    this['Call'](J['modID']['login'], J['msgID']['showLogin']);
                            }
                            ,
                            ar['onBtnSendCodeClick'] = function () {
                                var as = this['inputAccount']['CurAccountType']
                                    , at = {
                                        'number': this['inputAccount']['Account']
                                    }
                                    , au = as == W['Phone'];
                                if (au) {
                                    if (at['area'] = this['inputAccount']['areaCode'],
                                        !L['checkPhoneValid'](at)) {
                                        var av = O['tips_input_phone'];
                                        return av = M['getLangByID'](av),
                                            N['toast'](av),
                                            void this['btnSendCode']['reset']();
                                    }
                                } else {
                                    if (as == W['Email'] && !L['checkEmailValid'](at['number'])) {
                                        var aw = M['getLangByTag']('tips_enter_email', Y['lobby']);
                                        return void N['toast'](aw);
                                    }
                                }
                                var ax = {
                                    'account': au ? at['number'] : '',
                                    'areaCode': at['area'],
                                    'email': as == W['Email'] ? at['number'] : ''
                                };
                                this['Call'](J['modID']['root'], J['msgID']['sendFindPswCode'], X['req']['requests']['resetPassword'], ax);
                            }
                            ,
                            ar['onBtnFindClick'] = function () {
                                var as = this['inputAccount']['CurAccountType']
                                    , at = {
                                        'number': this['inputAccount']['Account']
                                    }
                                    , au = as == W['Phone'];
                                if (au) {
                                    if (at['area'] = this['inputAccount']['areaCode'],
                                        !L['checkPhoneValid'](at)) {
                                        var av = O['tips_input_phone'];
                                        return av = M['getLangByID'](av),
                                            N['toast'](av),
                                            void this['btnSendCode']['reset']();
                                    }
                                } else {
                                    if (as == W['Email'] && !L['checkEmailValid'](at['number'])) {
                                        var aw = M['getLangByTag']('tips_enter_email', Y['lobby']);
                                        return void N['toast'](aw);
                                    }
                                }
                                var ax = this['inputCode']['string'];
                                if (L['StringIsNullOrEmpty'](ax) || ax['length'] < 0x4) {
                                    var ay = O['tisp_captcha_short'];
                                    return ay = M['getLangByID'](ay),
                                        void N['toast'](ay);
                                }
                                var az = this['inputPassword']['string'];
                                if (L['StringIsNullOrEmpty'](az) || az['length'] < 0x6) {
                                    var aA = O['tips_short_psw'];
                                    return aA = M['getLangByID'](aA),
                                        void N['toast'](aA);
                                }
                                if (this['inputAffirm']['string'] != az) {
                                    var aB = O['tips_confirm_diff'];
                                    return aB = M['getLangByID'](aB),
                                        void N['toast'](aB);
                                }
                                var aC = {
                                    'type': T['req']['requests']['resetPassword'],
                                    'phoneArea': at['area'],
                                    'phone': au ? at['number'] : '',
                                    'verifyCode': ax,
                                    'password': L['MD5'](az),
                                    'email': as == W['Email'] ? at['number'] : ''
                                };
                                this['Call'](J['modID']['root'], J['msgID']['resetPassword'], aC);
                            }
                            ,
                            ar['onReceiveCaptchar'] = function (as) {
                                this['inputCode']['string'] = as;
                            }
                            ,
                            ar['onStartTimer'] = function (as) {
                                this['btnSendCode']['startTimer'](as);
                            }
                            ,
                            aq;
                    }(K))['prototype'], 'inputAccount', [a3], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        af = q(ad['prototype'], 'inputCode', [a4], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ag = q(ad['prototype'], 'btnSendCode', [a5], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ah = q(ad['prototype'], 'inputPassword', [a6], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ai = q(ad['prototype'], 'nodeAffirm', [a7], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aj = q(ad['prototype'], 'inputAffirm', [a8], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ak = q(ad['prototype'], 'btnBack', [a9], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        al = q(ad['prototype'], 'btnFind', [aa], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        am = q(ad['prototype'], 'gRtLogin', [ab], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ac = ad)) || ac)),
                    E['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/panelLogin.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './Oops.ts', './gameRichText.ts', './Language.ts', './stringDefine2.ts', './webGame.ts', './appConfig.ts', './lobbyState.ts', './platformData.ts', './StorageConfig.ts', './inputAccount.ts'], function (j) {
        var k, q, x, z, B, D, E, F, G, H, I, J, K, M, N, O, Q, R, T, U, V, W, X, Y, Z;
        return {
            'setters': [function (a0) {
                k = a0['applyDecoratedDescriptor'],
                    q = a0['inheritsLoose'],
                    x = a0['initializerDefineProperty'],
                    z = a0['assertThisInitialized'];
            }
                , function (a0) {
                    B = a0['cclegacy'],
                        D = a0['_decorator'],
                        E = a0['EditBox'],
                        F = a0['Button'],
                        G = a0['Toggle'],
                        H = a0['Label'],
                        I = a0['sys'];
                }
                , function (a0) {
                    J = a0['Login'];
                }
                , function (a0) {
                    K = a0['baseView'];
                }
                , function (a0) {
                    M = a0['utils'];
                }
                , function (a0) {
                    N = a0['oops'];
                }
                , function (a0) {
                    O = a0['gameRichText'];
                }
                , function (a0) {
                    Q = a0['LanguageManager'];
                }
                , function (a0) {
                    R = a0['stringDefine'];
                }
                , function (a0) {
                    T = a0['webGame'];
                }
                , function (a0) {
                    U = a0['appConfig'];
                }
                , function (a0) {
                    V = a0['SupportAccountType'],
                        W = a0['lobbyState'];
                }
                , function (a0) {
                    X = a0['PModuleID'];
                }
                , function (a0) {
                    Y = a0['StorageConfig'];
                }
                , function (a0) {
                    Z = a0['inputAccount'];
                }
            ],
            'execute': function () {
                var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag;
                B['_RF']['push']({}, '336d5dXYENDdKhXMOFQQ5FU', 'panelLogin', void 0x0);
                var ah = D['ccclass']
                    , ai = D['property'];
                j('panelLogin', (a0 = ah('panelLogin'),
                    a1 = ai({
                        'type': Z,
                        'tooltip': '账号输入框'
                    }),
                    a2 = ai({
                        'type': E,
                        'tooltip': '密码输入框'
                    }),
                    a3 = ai({
                        'type': F,
                        'tooltip': '注册按钮'
                    }),
                    a4 = ai({
                        'type': O,
                        'tooltip': '忘记密码'
                    }),
                    a5 = ai({
                        'type': F,
                        'tooltip': '游客登录按钮'
                    }),
                    a6 = ai({
                        'type': F,
                        'tooltip': '登录按钮'
                    }),
                    a7 = ai({
                        'type': G,
                        'tooltip': '记住密码勾选'
                    }),
                    a0((aa = k((a9 = function (aj) {
                        function ak() {
                            for (var am, an = arguments['length'], ao = new Array(an), ap = 0x0; ap < an; ap++)
                                ao[ap] = arguments[ap];
                            return am = aj['call']['apply'](aj, [this]['concat'](ao)) || this,
                                x(am, 'inputAccount', aa, z(am)),
                                x(am, 'inputPassword', ab, z(am)),
                                x(am, 'btn_register', ac, z(am)),
                                x(am, 'gRtForget', ad, z(am)),
                                x(am, 'btnGuest', ae, z(am)),
                                am['lblGuest'] = null,
                                x(am, 'btnLogin', af, z(am)),
                                x(am, 'togSavePsw', ag, z(am)),
                                am;
                        }
                        q(ak, aj);
                        var al = ak['prototype'];
                        return al['onInit'] = function () {
                            this['gRtForget']['bindClickHandler'](this['onClickForget'], this),
                                this['lblGuest'] = this['btnGuest']['node']['getComponentInChildren'](H),
                                this['updateGuestBtn'](),
                                M['ButtonBindClick'](this['btnLogin'], this['onClickLogin'], this),
                                M['ButtonBindClick'](this['btn_register'], this['onClickRegister'], this),
                                M['ButtonBindClick'](this['btnGuest'], this['onClickGuest'], this),
                                this['togSavePsw']['node']['on'](G['EventType']['TOGGLE'], this['onChangeSavePsw'], this),
                                this['inputAccount']['onChooseAccountType'] = this['refreshPasswordByLocalStorage']['bind'](this);
                        }
                            ,
                            al['refreshPasswordByLocalStorage'] = function (am) {
                                var an = am == V['Phone'] ? Y['password'] : Y['emailPsw'];
                                this['inputPassword']['string'] = N['storage']['get'](an, '');
                            }
                            ,
                            al['updateGuestBtn'] = function () {
                                I['isBrowser'] ? this['btnGuest']['node']['active'] = U['bSupportGuestLogin'] : this['lblGuest']['string'] = Q['getLangByTag']('guest');
                            }
                            ,
                            al['AddListener'] = function () {
                                aj['prototype']['AddListener']['call'](this),
                                    this['RegistMsg'](J['msgID']['showLogin'], this['onShowLogin']);
                            }
                            ,
                            al['RemoveListener'] = function () {
                                aj['prototype']['RemoveListener']['call'](this),
                                    this['LogoutMsg'](J['msgID']['showLogin']);
                            }
                            ,
                            al['onShowLogin'] = function () {
                                this['show']();
                            }
                            ,
                            al['refresh'] = function () {
                                this['updateGuestBtn']();
                                var am = W['Instance']['Server']['supportAccountTypes']
                                    , an = U['loginType']
                                    , ao = N['storage']['getNumber'](Y['loginType']);
                                if (ao > 0x0 && (ao == J['loginType']['phone'] ? an = V['Phone'] : ao == J['loginType']['email'] && (an = V['Email'])),
                                    this['inputAccount']['setSupportType'](am, an),
                                    -0x1 != am['indexOf'](V['Phone'])) {
                                    var ap = N['storage']['get'](Y['areaCode'])
                                        , aq = U['areaCodeList'];
                                    M['StringIsNullOrEmpty'](ap) && (ap = U['defaultAreaCode']);
                                    var ar = N['storage']['get'](Y['account']);
                                    this['inputAccount']['refresh'](V['Phone'], ar, aq, ap);
                                }
                                if (-0x1 != am['indexOf'](V['Email'])) {
                                    var as = N['storage']['get'](Y['email']);
                                    this['inputAccount']['refresh'](V['Email'], as);
                                }
                                var at = 'fasle' != N['storage']['get'](Y['bSavePsw']);
                                this['togSavePsw']['isChecked'] = at,
                                    at && this['refreshPasswordByLocalStorage'](this['inputAccount']['CurAccountType']);
                            }
                            ,
                            al['onChangeSavePsw'] = function (am) {
                                var an = am['isChecked'];
                                if (N['storage']['set'](Y['bSavePsw'], an),
                                    an) {
                                    var ao = this['inputPassword']['string'];
                                    if (0x0 == M['StringIsNullOrEmpty'](ao)) {
                                        var ap = this['inputAccount']['CurAccountType'] == V['Phone'] ? Y['password'] : Y['emailPsw'];
                                        N['storage']['set'](ap, ao);
                                    }
                                } else
                                    N['storage']['remove'](Y['password']),
                                        N['storage']['remove'](Y['emailPsw']);
                            }
                            ,
                            al['onClickRegister'] = function () {
                                this['close'](),
                                    this['Call'](J['modID']['regist'], J['msgID']['showRegist']);
                            }
                            ,
                            al['onClickForget'] = function () {
                                this['close']();
                                var am = this['inputAccount']['CurAccountType']
                                    , an = this['inputAccount']['Account'];
                                this['Call'](J['modID']['findPsw'], J['msgID']['showFindPsw'], am, an, this['inputAccount']['areaCode']);
                            }
                            ,
                            al['onClickGuest'] = function () {
                                var am = this;
                                if (U['bSupportGuestLogin']) {
                                    var an = function () {
                                        var ao = {
                                            'registType': J['registType']['device']
                                        };
                                        am['Call'](J['modID']['root'], J['msgID']['regist'], ao);
                                    };
                                    (I['isBrowser'] || I['isNative']) && an();
                                } else
                                    this['onClickRegister']();
                            }
                            ,
                            al['onClickLogin'] = function () {
                                var am = this['inputAccount']['CurAccountType']
                                    , an = {
                                        'number': this['inputAccount']['Account']
                                    }
                                    , ao = am == V['Phone'];
                                if (ao) {
                                    var ap = this['inputAccount']['areaCode'];
                                    if (M['StringIsNullOrEmpty'](ap)) {
                                        var aq = R['tips_input_phone'];
                                        return aq = Q['getLangByID'](aq),
                                            void T['toast'](aq);
                                    }
                                    if (an['area'] = ap,
                                        !M['checkPhoneValid'](an)) {
                                        var ar = R['tips_input_phone'];
                                        return ar = Q['getLangByID'](ar),
                                            void T['toast'](ar);
                                    }
                                } else {
                                    if (am == V['Email'] && !M['checkEmailValid'](an['number'])) {
                                        var as = Q['getLangByTag']('tips_enter_email', X['lobby']);
                                        return void T['toast'](as);
                                    }
                                }
                                var at = this['inputPassword']['string'];
                                if (M['StringIsNullOrEmpty'](at)) {
                                    var au = R['tips_input_psw'];
                                    return au = Q['getLangByID'](au),
                                        void T['toast'](au);
                                }
                                var av = {
                                    'loginType': ao ? J['loginType']['phone'] : J['loginType']['email'],
                                    'account': an['number'],
                                    'password': at,
                                    'areaCode': an['area']
                                };
                                this['Call'](J['modID']['root'], J['msgID']['login'], av);
                            }
                            ,
                            ak;
                    }(K))['prototype'], 'inputAccount', [a1], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        ab = k(a9['prototype'], 'inputPassword', [a2], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ac = k(a9['prototype'], 'btn_register', [a3], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ad = k(a9['prototype'], 'gRtForget', [a4], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ae = k(a9['prototype'], 'btnGuest', [a5], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        af = k(a9['prototype'], 'btnLogin', [a6], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ag = k(a9['prototype'], 'togSavePsw', [a7], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a8 = a9)) || a8)),
                    B['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/panelRegist.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './loginConfig.ts', './baseView.ts', './utils.ts', './gameRichText.ts', './sendButton.ts', './Language.ts', './webGame.ts', './stringDefine2.ts', './appConfig.ts', './platformData.ts', './richTextHandler.ts', './lobbyState.ts', './clearInput.ts', './httpInfo.ts', './inputAccount.ts', './Oops.ts', './StorageConfig.ts'], function (j) {
        var q, x, z, D, E, F, G, H, J, K, L, M, N, O, Q, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
        return {
            'setters': [function (a8) {
                q = a8['applyDecoratedDescriptor'],
                    x = a8['inheritsLoose'],
                    z = a8['initializerDefineProperty'],
                    D = a8['assertThisInitialized'];
            }
                , function (a8) {
                    E = a8['cclegacy'],
                        F = a8['_decorator'],
                        G = a8['Button'],
                        H = a8['Node'],
                        J = a8['EditBox'],
                        K = a8['Toggle'],
                        L = a8['RichText'];
                }
                , function (a8) {
                    M = a8['Login'];
                }
                , function (a8) {
                    N = a8['baseView'];
                }
                , function (a8) {
                    O = a8['utils'];
                }
                , function (a8) {
                    Q = a8['gameRichText'];
                }
                , function (a8) {
                    U = a8['sendButton'];
                }
                , function (a8) {
                    V = a8['LanguageManager'];
                }
                , function (a8) {
                    W = a8['webGame'];
                }
                , function (a8) {
                    X = a8['stringDefine'];
                }
                , function (a8) {
                    Y = a8['appConfig'];
                }
                , function (a8) {
                    Z = a8['PModuleID'];
                }
                , function (a8) {
                    a0 = a8['richTextHandler'];
                }
                , function (a8) {
                    a1 = a8['lobbyState'],
                        a2 = a8['SupportAccountType'];
                }
                , function (a8) {
                    a3 = a8['clearInput'];
                }
                , function (a8) {
                    a4 = a8['HttpCaptchar'];
                }
                , function (a8) {
                    a5 = a8['inputAccount'];
                }
                , function (a8) {
                    a6 = a8['oops'];
                }
                , function (a8) {
                    a7 = a8['StorageConfig'];
                }
            ],
            'execute': function () {
                var a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, au, av, aw, ax, ay, az, aA, aB, aC, aD;
                E['_RF']['push']({}, 'cb464YysU9AoanwP14Qw5B5', 'panelRegist', void 0x0);
                var aE = F['ccclass']
                    , aF = F['property'];
                j('panelRegist', (a8 = aE('panelRegist'),
                    a9 = aF({
                        'type': G,
                        'tooltip': '返回按钮'
                    }),
                    aa = aF({
                        'type': G,
                        'tooltip': '注册按钮'
                    }),
                    ab = aF({
                        'type': a5,
                        'tooltip': '账号输入框'
                    }),
                    ac = aF({
                        'type': H,
                        'tooltip': '验证码根节点'
                    }),
                    ad = aF({
                        'type': J,
                        'tooltip': '验证码输入框'
                    }),
                    ae = aF({
                        'type': U,
                        'tooltip': '发送验证码按钮'
                    }),
                    af = aF({
                        'type': J,
                        'tooltip': '密码输入框'
                    }),
                    ag = aF({
                        'type': H,
                        'tooltip': '确认密码根节点'
                    }),
                    ah = aF({
                        'type': J,
                        'tooltip': '确认密码输入框'
                    }),
                    ai = aF({
                        'type': Q,
                        'tooltip': '登录富文本'
                    }),
                    aj = aF({
                        'type': K,
                        'tooltip': '游戏权限许可勾选'
                    }),
                    ak = aF({
                        'type': L,
                        'tooltip': '游戏权限许可富文本'
                    }),
                    al = aF({
                        'type': a3,
                        'tooltip': '输入邮箱'
                    }),
                    am = aF({
                        'type': a3,
                        'tooltip': '输入真实名称'
                    }),
                    a8((ap = q((ao = function (aG) {
                        function aH() {
                            for (var aJ, aK = arguments['length'], aL = new Array(aK), aM = 0x0; aM < aK; aM++)
                                aL[aM] = arguments[aM];
                            return aJ = aG['call']['apply'](aG, [this]['concat'](aL)) || this,
                                z(aJ, 'btnBack', ap, D(aJ)),
                                z(aJ, 'btnRegist', aq, D(aJ)),
                                z(aJ, 'inputAccount', ar, D(aJ)),
                                z(aJ, 'nodeCode', as, D(aJ)),
                                z(aJ, 'inputCode', au, D(aJ)),
                                z(aJ, 'btnSendCode', av, D(aJ)),
                                z(aJ, 'inputPassword', aw, D(aJ)),
                                z(aJ, 'nodeAffirm', ax, D(aJ)),
                                z(aJ, 'inputAffirm', ay, D(aJ)),
                                z(aJ, 'gRtLogin', az, D(aJ)),
                                z(aJ, 'togPermission', aA, D(aJ)),
                                z(aJ, 'rtPermission', aB, D(aJ)),
                                z(aJ, 'inputEmail', aC, D(aJ)),
                                z(aJ, 'inputName', aD, D(aJ)),
                                aJ['bNeedCode'] = !0x0,
                                aJ['bNeedComffirm'] = !0x0,
                                aJ;
                        }
                        x(aH, aG);
                        var aI = aH['prototype'];
                        return aI['onInit'] = function () {
                            var aJ, aK = this;
                            O['ButtonBindClick'](this['btnBack'], this['onBtnBackClick'], this),
                                O['ButtonBindClick'](this['btnRegist'], this['onBtnRegistClick'], this),
                                this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                                this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                            var aL = null == (aJ = this['rtPermission']) ? void 0x0 : aJ['node']['getComponent'](a0);
                            null == aL || aL['bindClickHandler'](this['onClickPermission'], this),
                                this['inputAccount']['onChooseAccountType'] = function (aM) {
                                    aK['loginTypeChange'](aM);
                                }
                                ;
                        }
                            ,
                            aI['loginTypeChange'] = function (aJ) {
                                this['inputEmail']['node']['active'] = a1['Instance']['Server']['bBindEmail'] && aJ == a2['Phone'],
                                    this['showVerifyCodeByAccountType'](aJ);
                            }
                            ,
                            aI['showVerifyCodeByAccountType'] = function (aJ) {
                                this['bNeedCode'] = aJ == a2['Phone'] ? a1['Instance']['Server']['bRegNeedCode'] : a1['Instance']['Server']['bRegMailNeedCode'],
                                    this['nodeCode'] && (this['nodeCode']['active'] = this['bNeedCode']);
                            }
                            ,
                            aI['AddListener'] = function () {
                                aG['prototype']['AddListener']['call'](this),
                                    this['RegistMsg'](M['msgID']['showRegist'], this['onShowRegist']);
                            }
                            ,
                            aI['RemoveListener'] = function () {
                                aG['prototype']['RemoveListener']['call'](this),
                                    this['LogoutMsg'](M['msgID']['showRegist']);
                            }
                            ,
                            aI['onClickPermission'] = function (aJ) {
                                W['log']['logBusiness']('click\x20team\x20service\x20' + aJ);
                            }
                            ,
                            aI['onShowRegist'] = function () {
                                this['show']();
                                var aJ = Y['bNeedEnsurePsw'];
                                this['refresh'](aJ);
                            }
                            ,
                            aI['refresh'] = function (aJ) {
                                void 0x0 === aJ && (aJ = !0x0),
                                    this['nodeAffirm']['active'] = aJ,
                                    this['bNeedComffirm'] = aJ;
                                var aK = a6['storage']['get'](a7['areaCode'])
                                    , aL = Y['areaCodeList'];
                                O['StringIsNullOrEmpty'](aK) && (aK = Y['defaultAreaCode']),
                                    this['inputAccount']['setSupportType'](a1['Instance']['Server']['supportAccountTypes'], Y['loginType']),
                                    this['inputAccount']['refresh'](a2['Phone'], '', aL, aK),
                                    this['inputAccount']['refresh'](a2['Email'], ''),
                                    this['showVerifyCodeByAccountType'](Y['loginType']),
                                    this['bNeedCode'] && (this['inputCode']['string'] = ''),
                                    this['inputPassword']['string'] = '',
                                    aJ && (this['inputAffirm']['string'] = '');
                                var aM = V['getLangByTag']('rtPermission', Z['lobby']);
                                this['rtPermission']['string'] = aM,
                                    this['inputEmail']['Input']['string'] = '',
                                    this['inputEmail']['node']['active'] = a1['Instance']['Server']['bBindEmail'] && this['inputAccount']['CurAccountType'] != a2['Email'],
                                    this['inputName']['Input']['string'] = '',
                                    this['inputName']['node']['active'] = !0x1;
                            }
                            ,
                            aI['onBtnBackClick'] = function () {
                                this['close'](),
                                    this['Call'](M['modID']['login'], M['msgID']['showLogin']);
                            }
                            ,
                            aI['onShow'] = function () {
                                this['btnSendCode']['reset']();
                            }
                            ,
                            aI['onBtnSendCodeClick'] = function () {
                                var aJ = this['inputAccount']['areaCode']
                                    , aK = this['inputAccount']['Account']
                                    , aL = this['inputAccount']['CurAccountType']
                                    , aM = {
                                        'area': aJ,
                                        'number': aK
                                    }
                                    , aN = aL == a2['Phone']
                                    , aO = aL == a2['Email'];
                                if (aN && !O['checkPhoneValid'](aM)) {
                                    var aP = X['tips_input_phone'];
                                    return aP = V['getLangByID'](aP),
                                        W['toast'](aP),
                                        void this['btnSendCode']['reset']();
                                }
                                if (!aO || O['checkEmailValid'](aK)) {
                                    var aQ = {
                                        'account': aN ? aM['number'] : '',
                                        'areaCode': aM['area'],
                                        'email': aO ? aK : ''
                                    };
                                    this['Call'](M['modID']['root'], M['msgID']['sendRegistCode'], a4['req']['requests']['regitst'], aQ);
                                } else {
                                    var aR = V['getLangByTag']('tips_enter_email', Z['lobby']);
                                    W['toast'](aR);
                                }
                            }
                            ,
                            aI['onBtnRegistClick'] = function () {
                                var aJ = this['inputAccount']['areaCode']
                                    , aK = this['inputAccount']['phone']
                                    , aL = this['inputAccount']['email']
                                    , aM = this['inputAccount']['CurAccountType']
                                    , aN = {
                                        'area': aJ,
                                        'number': aK
                                    };
                                if (aM == a2['Phone'] && !O['checkPhoneValid'](aN)) {
                                    var aO = X['tips_input_phone'];
                                    return aO = V['getLangByID'](aO),
                                        void W['toast'](aO);
                                }
                                var aP = this['inputEmail']['Input']['string'];
                                if (aM != a2['Phone'] || !a1['Instance']['Server']['bBindEmail'] || O['checkEmailValid'](aP)) {
                                    if (aM != a2['Email'] || O['checkEmailValid'](aL)) {
                                        var aQ = null;
                                        if (this['bNeedCode']) {
                                            var aR = this['inputCode']['string'];
                                            if (O['StringIsNullOrEmpty'](aR) || aR['length'] < 0x4) {
                                                var aS = X['tisp_captcha_short'];
                                                return aS = V['getLangByID'](aS),
                                                    void W['toast'](aS);
                                            }
                                            aQ = aR;
                                        }
                                        var aT = this['inputPassword']['string'];
                                        if (O['StringIsNullOrEmpty'](aT) || aT['length'] < 0x6) {
                                            var aU = X['tips_short_psw'];
                                            return aU = V['getLangByID'](aU),
                                                void W['toast'](aU);
                                        }
                                        if (this['bNeedComffirm']) {
                                            if (aT != this['inputAffirm']['string']) {
                                                var aV = X['tips_confirm_diff'];
                                                return aV = V['getLangByID'](aV),
                                                    void W['toast'](aV);
                                            }
                                        }
                                        var aW = this['inputName']['Input']['string'];
                                        if (!this['togPermission']['isChecked']) {
                                            var aX = X['tips_get_permission'];
                                            return aX = V['getLangByID'](aX),
                                                void W['toast'](aX);
                                        }
                                        var aY = {
                                            'registType': aM == a2['Phone'] ? M['registType']['mobile'] : M['registType']['email'],
                                            'mobileNumber': aN['number'],
                                            'password': aT,
                                            'areaCode': aN['area'],
                                            'captcha': aQ,
                                            'email': aM == a2['Phone'] ? aP : aL,
                                            'realName': aW
                                        };
                                        this['Call'](M['modID']['root'], M['msgID']['regist'], aY);
                                    } else {
                                        var aZ = V['getLangByTag']('tips_enter_email', Z['lobby']);
                                        W['toast'](aZ);
                                    }
                                } else {
                                    var b0 = V['getLangByTag']('tips_enter_email', Z['lobby']);
                                    W['toast'](b0);
                                }
                            }
                            ,
                            aI['onReceiveCaptchar'] = function (aJ) {
                                this['inputCode']['string'] = aJ;
                            }
                            ,
                            aI['onStartTimer'] = function (aJ) {
                                this['btnSendCode']['startTimer'](aJ);
                            }
                            ,
                            aH;
                    }(N))['prototype'], 'btnBack', [a9], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        aq = q(ao['prototype'], 'btnRegist', [aa], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ar = q(ao['prototype'], 'inputAccount', [ab], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        as = q(ao['prototype'], 'nodeCode', [ac], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        au = q(ao['prototype'], 'inputCode', [ad], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        av = q(ao['prototype'], 'btnSendCode', [ae], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aw = q(ao['prototype'], 'inputPassword', [af], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ax = q(ao['prototype'], 'nodeAffirm', [ag], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ay = q(ao['prototype'], 'inputAffirm', [ah], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        az = q(ao['prototype'], 'gRtLogin', [ai], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aA = q(ao['prototype'], 'togPermission', [aj], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aB = q(ao['prototype'], 'rtPermission', [ak], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aC = q(ao['prototype'], 'inputEmail', [al], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aD = q(ao['prototype'], 'inputName', [am], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        an = ao)) || an)),
                    E['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/panelVerify.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './gameRichText.ts', './sendButton.ts', './loginConfig.ts', './stringDefine2.ts', './Language.ts', './webGame.ts', './utils.ts', './httpInfo.ts'], function (j) {
        var k, m, q, v, w, x, z, A, B, D, E, F, G, H, I, J, K, L;
        return {
            'setters': [function (M) {
                k = M['applyDecoratedDescriptor'],
                    m = M['inheritsLoose'],
                    q = M['initializerDefineProperty'],
                    v = M['assertThisInitialized'];
            }
                , function (M) {
                    w = M['cclegacy'],
                        x = M['_decorator'],
                        z = M['Button'],
                        A = M['Label'],
                        B = M['EditBox'];
                }
                , function (M) {
                    D = M['baseView'];
                }
                , function (M) {
                    E = M['gameRichText'];
                }
                , function (M) {
                    F = M['sendButton'];
                }
                , function (M) {
                    G = M['Login'];
                }
                , function (M) {
                    H = M['stringDefine'];
                }
                , function (M) {
                    I = M['LanguageManager'];
                }
                , function (M) {
                    J = M['webGame'];
                }
                , function (M) {
                    K = M['utils'];
                }
                , function (M) {
                    L = M['HttpCaptchar'];
                }
            ],
            'execute': function () {
                var N, O, P, Q, U, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
                w['_RF']['push']({}, '60c7de8DHFHzrGsb07Oj/2i', 'panelVerify', void 0x0);
                var a8 = x['ccclass']
                    , a9 = x['property'];
                j('panelVerify', (N = a8('panelVerify'),
                    O = a9({
                        'type': E,
                        'tooltip': '登录富文本'
                    }),
                    P = a9({
                        'type': z,
                        'tooltip': '返回按钮'
                    }),
                    Q = a9({
                        'type': z,
                        'tooltip': '验证按钮'
                    }),
                    U = a9({
                        'type': A,
                        'tooltip': 'lb_tag'
                    }),
                    W = a9({
                        'type': A,
                        'tooltip': '账号文本'
                    }),
                    X = a9({
                        'type': B,
                        'tooltip': '验证码输入框'
                    }),
                    Y = a9({
                        'type': F,
                        'tooltip': '验证码发送按钮'
                    }),
                    N((a1 = k((a0 = function (aa) {
                        function ab() {
                            for (var ad, ae = arguments['length'], af = new Array(ae), ag = 0x0; ag < ae; ag++)
                                af[ag] = arguments[ag];
                            return ad = aa['call']['apply'](aa, [this]['concat'](af)) || this,
                                q(ad, 'gRtLogin', a1, v(ad)),
                                q(ad, 'btnBack', a2, v(ad)),
                                q(ad, 'btnVerify', a3, v(ad)),
                                q(ad, 'lb_tag', a4, v(ad)),
                                q(ad, 'lbAccount', a5, v(ad)),
                                q(ad, 'inputCode', a6, v(ad)),
                                q(ad, 'btnSendCode', a7, v(ad)),
                                ad['areaCode'] = null,
                                ad['account'] = null,
                                ad['_data'] = null,
                                ad;
                        }
                        m(ab, aa);
                        var ac = ab['prototype'];
                        return ac['onInit'] = function () {
                            this['gRtLogin']['bindClickHandler'](this['onBtnBackClick'], this),
                                this['btnBack']['node']['on'](z['EventType']['CLICK'], this['onBtnBackClick'], this),
                                this['btnVerify']['node']['on'](z['EventType']['CLICK'], this['onBtnVerifyClick'], this),
                                this['btnSendCode']['bindClickHandler'](this['onBtnSendCodeClick'], this);
                        }
                            ,
                            ac['AddListener'] = function () {
                                aa['prototype']['AddListener']['call'](this),
                                    this['RegistMsg'](G['msgID']['showAccountVerify'], this['onShowVerify']);
                            }
                            ,
                            ac['RemoveListener'] = function () {
                                aa['prototype']['RemoveListener']['call'](this),
                                    this['LogoutMsg'](G['msgID']['showAccountVerify']);
                            }
                            ,
                            ac['onShowVerify'] = function (ad) {
                                this['show'](),
                                    this['refresh'](ad);
                            }
                            ,
                            ac['refresh'] = function (ad) {
                                if (this['_data'] = ad,
                                    this['areaCode'] = ad['areaNo'],
                                    this['account'] = ad['loginAccount'],
                                    K['checkEmailValid'](ad['loginAccount']))
                                    this['lbAccount']['string'] = this['account'],
                                        this['lb_tag']['string'] = I['getLangByID'](H['str_email']);
                                else {
                                    var ae = this['account'];
                                    this['areaCode'] && (ae = '+' + this['areaCode'] + '-' + this['account']),
                                        this['lbAccount']['string'] = ae,
                                        this['lb_tag']['string'] = I['getLangByID'](H['tag_phone']);
                                }
                                this['inputCode']['string'] = '';
                            }
                            ,
                            ac['onBtnBackClick'] = function () {
                                this['close'](),
                                    this['Call'](G['modID']['login'], G['msgID']['showLogin']);
                            }
                            ,
                            ac['onBtnVerifyClick'] = function () {
                                var ad = this['inputCode']['string'];
                                if (K['StringIsNullOrEmpty'](ad) || ad['length'] < 0x4) {
                                    var ae = H['tisp_captcha_short'];
                                    return ae = I['getLangByID'](ae),
                                        void J['toast'](ae);
                                }
                                var af = K['checkEmailValid'](this['_data']['loginAccount'])
                                    , ag = {
                                        'phoneArea': this['areaCode'],
                                        'phone': af ? '' : this['account'],
                                        'verifyCode': ad,
                                        'email': af ? this['account'] : ''
                                    };
                                this['Call'](G['modID']['root'], G['msgID']['accountVerify'], ag);
                            }
                            ,
                            ac['onBtnSendCodeClick'] = function () {
                                var ad = K['checkEmailValid'](this['_data']['loginAccount'])
                                    , ae = {
                                        'account': ad ? '' : this['account'],
                                        'areaCode': this['areaCode'],
                                        'email': ad ? this['account'] : ''
                                    };
                                this['Call'](G['modID']['root'], G['msgID']['sendAccountVerifyCode'], L['req']['requests']['securityVerify'], ae);
                            }
                            ,
                            ac['onReceiveCaptchar'] = function (ad) {
                                this['inputCode']['string'] = ad;
                            }
                            ,
                            ac['onStartTimer'] = function (ad) {
                                this['btnSendCode']['startTimer'](ad);
                            }
                            ,
                            ab;
                    }(D))['prototype'], 'gRtLogin', [O], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a2 = k(a0['prototype'], 'btnBack', [P], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a3 = k(a0['prototype'], 'btnVerify', [Q], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a4 = k(a0['prototype'], 'lb_tag', [U], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = k(a0['prototype'], 'lbAccount', [W], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = k(a0['prototype'], 'inputCode', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a7 = k(a0['prototype'], 'btnSendCode', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Z = a0)) || Z)),
                    w['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/pb_error_code.ts', ['cc'], function (a) {
        var b, d;
        return {
            'setters': [function (f) {
                b = f['cclegacy'],
                    d = f['_decorator'];
            }
            ],
            'execute': function () {
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
    System['register']('chunks:///_virtual/popManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gMod.ts', './webGame.ts', './appConfig.ts'], function (a) {
        var b, c, d, f, g, h, j, k;
        return {
            'setters': [function (l) {
                b = l['createClass'],
                    c = l['inheritsLoose'];
            }
                , function (l) {
                    d = l['cclegacy'],
                        f = l['_decorator'],
                        g = l['sys'];
                }
                , function (l) {
                    h = l['gMod'];
                }
                , function (l) {
                    j = l['webGame'];
                }
                , function (l) {
                    k = l['appConfig'];
                }
            ],
            'execute': function () {
                var m;
                d['_RF']['push']({}, '51cbbRP7AxO7alJPg0zwLoz', 'popManager', void 0x0);
                var q = f['ccclass']
                    , v = (f['property'],
                        a('lobbyPopJob', (function () {
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
                            return x['resetTimer'] = function (y) {
                                this['timer'] = null != y ? Math['max'](0x0, y) : Math['max'](0x0, this['waitTime']);
                            }
                                ,
                                x['updateTimer'] = function (y) {
                                    return !(this['timer'] > 0x0 && (this['timer'] -= y,
                                        this['timer'] > 0x0));
                                }
                                ,
                                x['popUp'] = function () {
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
                                    'get': function () {
                                        return this['popType'];
                                    }
                                }, {
                                    'key': 'hasPopTime',
                                    'get': function () {
                                        return this['popTime'] > 0x0;
                                    }
                                }]),
                                w;
                        }())),
                        a('popJobType', function (w) {
                            return w[w['none'] = 0x0] = 'none',
                                w[w['other'] = 0x1] = 'other',
                                w[w['bindTips'] = 0x2] = 'bindTips',
                                w[w['bindCardTips'] = 0x3] = 'bindCardTips',
                                w[w['firstOffer'] = 0x4] = 'firstOffer',
                                w[w['secondOffer'] = 0x5] = 'secondOffer',
                                w[w['stageCharge'] = 0x6] = 'stageCharge',
                                w[w['cashFreeFirst'] = 0x7] = 'cashFreeFirst',
                                w[w['activity'] = 0x8] = 'activity',
                                w[w['download'] = 0x9] = 'download',
                                w;
                        }({})));
                a('popManager', q('popManager')(m = function (w) {
                    function x() {
                        for (var z, A = arguments['length'], B = new Array(A), C = 0x0; C < A; C++)
                            B[C] = arguments[C];
                        return (z = w['call']['apply'](w, [this]['concat'](B)) || this)['popQueue'] = [],
                            z['popFlag'] = new Map(),
                            z['curPop'] = null,
                            z['curPopType'] = v['none'],
                            z['popWindowMap'] = new Map(),
                            z['bPoping'] = !0x1,
                            z['controlList'] = [v['bindTips'], v['bindCardTips'], v['firstOffer'], v['secondOffer'], v['activity'], v['download']],
                            z['lastUpdateTime'] = 0x0,
                            z['bPausePop'] = !0x1,
                            z;
                    }
                    c(x, w);
                    var y = x['prototype'];
                    return y['isJobInQueue'] = function (z) {
                        for (var A = 0x0; A < this['popQueue']['length']; A++) {
                            if (this['popQueue'][A]['PopType'] == z['PopType'])
                                return A;
                        }
                        return -0x1;
                    }
                        ,
                        y['addPopJob'] = function (z, A, B, C) {
                            if (void 0x0 === A && (A = !0x1),
                                void 0x0 === B && (B = !0x0),
                                void 0x0 === C && (C = !0x1),
                                null != z) {
                                if (this['popFlag']['has'](z['PopType'])) {
                                    if (!this['popFlag']['get'](z['PopType']))
                                        return void j['log']['logBusiness']('popManager-addPopJob:popFlag\x20block\x20' + z['PopType']);
                                    j['log']['logBusiness']('popManager-addPopJob:popFlag\x20' + z['PopType'] + '\x20is\x20pass');
                                }
                                var D, E = this['isJobInQueue'](z);
                                if (E > -0x1)
                                    return j['log']['logBusiness'](z['PopType'], 'popManager-addPopJob:isJobInQueue'),
                                        void (A && (this['popQueue']['splice'](E, 0x1),
                                            this['popQueue']['unshift'](z)));
                                if (null == this['popQueue'] && (this['popQueue'] = []),
                                    A ? this['popQueue']['unshift'](z) : this['popQueue']['push'](z),
                                    0x1 == C)
                                    null == (D = this['popQueue']) || D['sort'](function (F, G) {
                                        return F['PopType'] == v['other'] || G['PopType'] == v['other'] ? 0x0 : F['PopType'] - G['PopType'];
                                    });
                                B && this['popUp']();
                            } else
                                j['log']['logBusiness']('popManager-addPopJob:try\x20to\x20add\x20null\x20job');
                        }
                        ,
                        y['popUp'] = function (z) {
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
                        y['onPopup'] = function (z, A) {
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
                        y['onClose'] = function (z, A) {
                            j['log']['logBusiness']('popManager-onClose:\x20' + z + ',\x20isPoping?' + this['bPoping'] + '\x20\x20curPopType:' + this['curPopType']),
                                A && this['addPopJob'](A, !0x0),
                                this['curPopType'] == z && (this['curPopType'] = v['none'],
                                    this['curPop'] = null,
                                    this['bPoping'] = !0x1,
                                    (A && !this['bPausePop'] || g['isNative'] && 0x0 == k['lobbyLoopSpace']) && this['popUp'](z)),
                                this['popWindowMap']['delete'](z);
                        }
                        ,
                        y['pausePop'] = function (z, A) {
                            void 0x0 === A && (A = !0x1),
                                this['bPausePop'] = z,
                                z ? A && (this['popWindowMap']['forEach'](function (B, C) {
                                    null == B || B();
                                }),
                                    this['popWindowMap']['clear'](),
                                    this['curPopType'] = v['none'],
                                    this['curPop'] = null,
                                    this['bPoping'] = !0x1) : this['popUp']();
                        }
                        ,
                        y['resetPopFlag'] = function () {
                            var z = this;
                            null == this['popFlag'] ? this['popFlag'] = new Map() : this['popFlag']['clear'](),
                                this['controlList']['forEach'](function (A) {
                                    z['popFlag']['set'](A, !0x0);
                                }),
                                this['popQueue'] = [],
                                this['curPop'] = null,
                                this['curPopType'] = v['none'],
                                this['bPoping'] = !0x1;
                        }
                        ,
                        y['loopCall'] = function () {
                            this['popUp']();
                        }
                        ,
                        b(x, [{
                            'key': 'CurPopType',
                            'get': function () {
                                return this['curPopType'];
                            }
                        }]),
                        x;
                }(h)) || m),
                    d['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/pt.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'Precisas\x20de\x20ligar',
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
                        0x42: 'O\x20endereço\x20de\x20email\x20atual\x20já\x20está\x20registado\x20e\x20não\x20pode\x20ser\x20registado\x20novamente',
                        0x43: 'Por\x20favor,\x20tente\x20novamente\x20mais\x20tarde.',
                        0x44: 'Dados\x20inválidos,\x20tente\x20novamente\x20mais\x20tarde',
                        0x45: 'Parabéns\x20à\x20<color=#FF4600>@player</color>\x20em\x20<color=yellow>@game</color>\x20por\x20ganhar\x20prêmios\x20<color=#4BFF00>x@multiple</color>\x20e\x20obter\x20<color=yellow>@coins</color>\x20Coins.',
                        0x46: 'Parabéns\x20à\x20<color=#FF4600>%s</color>\x20por\x20ganhar\x20Jackpot\x20em\x20<color=#4BFF00>%s</color>\x20e\x20ganhar\x20<color=yellow>%s</color>\x20Moedas.',
                        0x47: 'Sala',
                        0x48: 'Jogadores',
                        0x49: 'Aposta',
                        0x4a: 'Saldo\x20mínimo',
                        0x4b: 'Demo',
                        0x4c: 'Primário',
                        0x4d: 'Senhor',
                        0x4e: 'Rei',
                        0x4f: 'Épico',
                        0x50: 'Lenda',
                        0x51: 'Vip',
                        0x52: 'Sala',
                        0x53: 'Jogar',
                        0x54: 'Qualquer',
                        0x55: 'Renunciar',
                        0x56: 'Sair',
                        0x57: 'Tips',
                        0x58: 'A\x20conexão\x20do\x20servidor\x20falhou,\x20tente\x20novamente\x20mais\x20tarde',
                        0x59: 'O\x20sistema\x20pede\x20para\x20você\x20sair,\x20por\x20favor,\x20entre\x20no\x20jogo\x20mais\x20tarde',
                        0x5a: 'Esta\x20conta\x20está\x20a\x20iniciar\x20sessão\x20a\x20partir\x20de\x20outro\x20dispositivo,\x20preste\x20atenção\x20à\x20segurança\x20da\x20conta',
                        0x5b: 'Seu\x20jogo\x20em\x20%s\x20ainda\x20não\x20acabou,\x20por\x20favor,\x20volte\x20e\x20jogue',
                        0x5c: 'O\x20registro\x20da\x20conta\x20já\x20existe.',
                        0x5d: 'O\x20dispositivo\x20da\x20conta\x20de\x20visitante\x20não\x20pode\x20estar\x20vazio.',
                        0x5e: 'A\x20conta\x20não\x20existe.',
                        0x5f: 'Senha\x20incorreta.',
                        0x60: 'Esta\x20conta\x20foi\x20suspensa.',
                        0x61: 'Exceção\x20no\x20login\x20de\x20visitante,\x20por\x20favor\x20tente\x20novamente.',
                        0x62: 'Exceção\x20no\x20login\x207,\x20por\x20favor\x20tente\x20novamente.',
                        0x63: 'Sistema\x20em\x20manutenção,\x20por\x20favor\x20tente\x20novamente\x20mais\x20tarde.',
                        0x64: 'Mudar\x20a\x20Senha',
                        0x65: 'Download',
                        0x66: 'para\x20sua\x20melhor\x20experiência,\x20por\x20favor,\x20baixe\x20o\x20jogo.',
                        0x67: 'para\x20sua\x20melhor\x20experiência,\x20por\x20favor,\x20baixe\x20o\x20jogo.Instale\x20agora\x20e\x20receba\x20as\x20recompensas!',
                        0x68: 'Aceite\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Termos\x20de\x20Serviço</on></u></color>\x20e\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacidade&Política</on></u></color>',
                        0x69: 'Vincule\x20o\x20número\x20de\x20telefone\x20celular\x0a\x20para\x20obter\x20recompensas',
                        0x6a: 'Ligar',
                        0x6b: 'Desculpe,\x20os\x20requisitos\x20VIP\x20não\x20são\x20atendidos,\x20quanto\x20mais\x20moedas,\x20o\x20VIP\x20mais\x20alto,\x20vá\x20para\x20a\x20loja\x20para\x20recarregar',
                        0x6c: 'Desculpe,\x20você\x20não\x20atende\x20aos\x20requisitos\x20de\x20entrada,\x20você\x20gostaria\x20de\x20ir\x20à\x20loja\x20para\x20comprar\x20alguns?',
                        0x6d: 'Toque\x20em\x20<img\x20src=\x27share\x27\x20/>\x20e\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Adicionar\x20à\x20tela\x20inicial</color></b>\x20para\x20jogar\x20sempre\x20que\x20quiser',
                        0x6e: 'Toque\x20em\x20<img\x20src=\x27share\x27\x20/>\x20e\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Adicionar\x20à\x20tela\x20inicial</color></b>\x20para\x20jogar\x20sempre\x20que\x20quiser',
                        0x6f: 'Aviso',
                        0x70: 'Para\x20a\x20segurança\x20de\x20seus\x20dados\x20de\x20jogo,\x20é\x20altamente\x20recomendável\x20que\x20você\x20se\x20registre\x20como\x20uma\x20conta\x20oficial',
                        0x71: 'Mensagem\x20enviada',
                        0x72: 'Reclame\x20o\x20prémio\x20completo',
                        0x73: 'Serviço',
                        0x74: 'Config',
                        0x75: 'Check-in',
                        0x76: 'Roda',
                        0x77: 'Presente',
                        0x78: 'Gratia',
                        0x79: 'Convidar',
                        0x7a: 'Bônus',
                        0x7b: 'Todos',
                        0x7c: 'Popular',
                        0x7d: 'Caça-níquel',
                        0x7e: 'Poker',
                        0x7f: 'A\x20rede\x20atual\x20não\x20é\x20boa',
                        0x80: 'Grátis',
                        0x81: 'Comprar',
                        0x82: 'Uma\x20nova\x20versão\x20foi\x20encontrada.\x20Quer\x20atualizá-la?',
                        0x83: 'O\x20evento\x20foi\x20encerrado\x20e\x20o\x20valor\x20da\x20compra\x20foi\x20reembolsado',
                        0x84: 'BUY\x20COIN',
                        0x85: 'Você\x20não\x20está\x20logado,\x20por\x20favor,\x20saia\x20e\x20tente\x20novamente',
                        0x86: 'Se\x20a\x20autenticação\x20falhar,\x20saia\x20e\x20tente\x20novamente',
                        0x87: 'Sala\x20de\x20jogos\x20inválida,\x20tente\x20outra',
                        0x88: 'A\x20sala\x20está\x20fechada,\x20tente\x20outra',
                        0x89: 'Tarefa',
                        0x8a: 'Está\x20na\x20hora\x20de\x20jogar\x20NOVOS\x20slots',
                        0x8b: 'Ganhe\x20moedas\x20GRATUITAS\x20fazendo\x20login\x20todos\x20os\x20dias!',
                        0x8c: 'Roleta\x20da\x20sorte!\x20Taxa\x20de\x20vitória\x20de\x20100%\x20garantida!',
                        0x8d: 'Novo\x20desafio\x20exclusivo\x20para\x20moedas\x20enormes!',
                        0x8e: 'Slots\x20e\x20funcionalidades\x20incríveis!',
                        0x8f: 'Pode\x20receber\x20um\x20bónus\x20especial',
                        0x90: 'Maior\x20poder\x20VIP,\x20mais\x20benefícios!',
                        0x91: 'Gire\x20NOVOS\x20SLOTS,\x20boa\x20sorte\x20esteja\x20consigo!',
                        0x92: 'DIA\x20DA\x20RODA\x20DE\x20SORTE,\x20MULTIPLER\x20RODA\x20DE\x20OURO!',
                        0x93: 'BÓNUS\x20SURPRESA,\x20venha\x20recolher\x20as\x20suas\x20moedas',
                        0x94: 'Rondas\x20mais\x20rápidas\x20e\x20PRÉMIOS\x20MAIORES!',
                        0x95: 'MEGA\x20RECOMPENSA\x20está\x20pronta,\x20GIRAR\x20JÁ!',
                        0x96: 'Toque\x20e\x20recolha\x20as\x20suas\x20fichas\x20grátis\x20agora!',
                        0x97: 'HAPP\x20HOUR!!!TREASURE\x20BOWL\x2010%\x20Chance\x20UP!!!Bónus\x20ilimitado\x20em\x20todos\x20os\x20pacotes',
                        0x98: 'Jogue\x20agora\x20para\x20desfrutar\x20de\x20guloseimas\x20e\x20missões\x20especiais',
                        0x99: 'Convide\x20amigos,\x20seja\x20o\x20seu\x20CHEFE!',
                        0x9a: 'Partilhe\x20com\x20os\x20seus\x20amigos,\x20ganhe\x20presentes\x20exclusivos',
                        0x9b: 'Grandes\x20recompensas\x20por\x20partilhar,\x20mais\x20convidar\x20mais\x20prémios',
                        0x9c: 'Brinque\x20com\x20os\x20amigos,\x20brindes\x20todos\x20os\x20dias!',
                        0x9d: 'BÓNUS\x20DE\x20SORTE,\x20Uma\x20oportunidade\x20de\x20ser\x20o\x20mais\x20rico!',
                        0x9e: 'Aproveite\x20a\x20sua\x201ª\x20OFERTA\x20ESPECIAL\x20e\x20obtenha\x20benefícios\x20de\x20compra',
                        0x9f: 'A\x201ª\x20compra\x20pode\x20ganhar\x20PRÉMIO\x20extra!',
                        0xa0: 'HalloWIN!Faça\x20login\x20todos\x20os\x20dias,\x20compre\x20qualquer\x20mercadoria\x20e\x20descontos\x20por\x20tempo\x20limitado!',
                        0xa1: '<b>@player\x20ganhou\x20o\x20\x0aJackpot\x20<color=#FFE100>@coins</color>\x20em\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'Casa',
                        0xa3: 'Slots',
                        0xa4: 'Multijogador',
                        0xa5: 'História',
                        0xa6: 'Vincular\x20a\x20conta\x20de\x20retirada\x20para\x20obter\x20recompensas',
                        0xa7: 'Um\x20link\x20externo\x20será\x20aberto\x20em\x20breve.\x20Deseja\x20continuar?',
                        0xa8: 'Combinando...',
                        0xa9: 'Associe\x20o\x20seu\x20endereço\x20de\x20e-mail\x20para\x20receber\x20recompensas',
                        0xaa: 'Vincule\x20o\x20seu\x20número\x20de\x20telefone\x20ou\x20endereço\x20de\x20e-mail\x20para\x20receber\x20recompensas',
                        0xab: 'Por\x20favor,\x20introduza\x20o\x20seu\x20Email',
                        0xac: 'Nenhum\x20jogador\x20encontrado\x20para\x20o\x20pareamento',
                        0xad: 'Abaixo\x20do\x20valor\x20mínimo\x20exigido',
                        0xae: 'Não\x20está\x20na\x20fila\x20de\x20emparelhamento',
                        0xaf: 'Sem\x20informações\x20sobre\x20o\x20assento',
                        0xb0: 'Não\x20consegue\x20levantar-se'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/redPoint.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './CustomEventDefine.ts', './Oops.ts', './lobbyState.ts'], function (b) {
        var d, g, j, k, l, m, q, v, w, x, y, z;
        return {
            'setters': [function (A) {
                d = A['applyDecoratedDescriptor'],
                    g = A['inheritsLoose'],
                    j = A['initializerDefineProperty'],
                    k = A['assertThisInitialized'],
                    l = A['createClass'];
            }
                , function (A) {
                    m = A['cclegacy'],
                        q = A['_decorator'],
                        v = A['Enum'],
                        w = A['Component'];
                }
                , function (A) {
                    x = A['WebGameEvent'];
                }
                , function (A) {
                    y = A['oops'];
                }
                , function (A) {
                    z = A['lobbyState'];
                }
            ],
            'execute': function () {
                var A, B, C, D, E, F;
                m['_RF']['push']({}, 'd6c15e7coJAT4nykK3TiKuK', 'redPoint', void 0x0);
                var G = q['ccclass']
                    , H = q['property']
                    , I = b('RedPointKey', function (K) {
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
                    B((F = d((E = function (K) {
                        function L() {
                            for (var N, O = arguments['length'], Q = new Array(O), S = 0x0; S < O; S++)
                                Q[S] = arguments[S];
                            return N = K['call']['apply'](K, [this]['concat'](Q)) || this,
                                j(N, 'key', F, k(N)),
                                N;
                        }
                        g(L, K);
                        var M = L['prototype'];
                        return M['onLoad'] = function () {
                            this['showRedPoint'](!0x1),
                                this['AddListener']();
                        }
                            ,
                            M['AddListener'] = function () {
                                y['message']['on'](x['update_red_point'], this['updateRedPoint'], this);
                            }
                            ,
                            M['RemoveListener'] = function () {
                                y['message']['off'](x['update_red_point'], this['updateRedPoint'], this);
                            }
                            ,
                            M['updateRedPoint'] = function (N, O, Q) {
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
                            M['showRedPoint'] = function (N) {
                                this['node']['active'] = N;
                            }
                            ,
                            M['onDestroy'] = function () {
                                this['RemoveListener']();
                            }
                            ,
                            l(L, [{
                                'key': 'ID',
                                'get': function () {
                                    return this['key'];
                                }
                            }]),
                            L;
                    }(w))['prototype'], 'key', [C], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return I['none'];
                        }
                    }),
                        D = E)) || D)),
                    m['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/richTextHandler.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (a) {
        var b, d, f, g;
        return {
            'setters': [function (h) {
                b = h['inheritsLoose'];
            }
                , function (h) {
                    d = h['cclegacy'],
                        f = h['_decorator'],
                        g = h['Component'];
                }
            ],
            'execute': function () {
                var h;
                d['_RF']['push']({}, '09fd9aLvJNJ3ZzA9TTZWCNr', 'richTextHandler', void 0x0);
                var j = f['ccclass'];
                f['property'],
                    a('richTextHandler', j('richTextHandler')(h = function (k) {
                        function m() {
                            for (var p, q = arguments['length'], s = new Array(q), u = 0x0; u < q; u++)
                                s[u] = arguments[u];
                            return (p = k['call']['apply'](k, [this]['concat'](s)) || this)['clickHandler'] = null,
                                p;
                        }
                        b(m, k);
                        var o = m['prototype'];
                        return o['bindClickHandler'] = function (p, q) {
                            this['clickHandler'] = p['bind'](q);
                        }
                            ,
                            o['onClick'] = function (p, q) {
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
    System['register']('chunks:///_virtual/sendButton.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './stringDefine2.ts', './Language.ts', './utils.ts'], function (b) {
        var d, g, j, k, m, p, q, v, w, x, y, z;
        return {
            'setters': [function (A) {
                d = A['applyDecoratedDescriptor'],
                    g = A['inheritsLoose'],
                    j = A['initializerDefineProperty'],
                    k = A['assertThisInitialized'],
                    m = A['createClass'];
            }
                , function (A) {
                    p = A['cclegacy'],
                        q = A['_decorator'],
                        v = A['Label'],
                        w = A['Button'];
                }
                , function (A) {
                    x = A['stringDefine'];
                }
                , function (A) {
                    y = A['LanguageManager'];
                }
                , function (A) {
                    z = A['utils'];
                }
            ],
            'execute': function () {
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
                    A((E = d((D = function (H) {
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
                        return J['onLoad'] = function () {
                            this['label'] = this['node']['getComponentInChildren'](v),
                                this['node']['on'](w['EventType']['CLICK'], this['onClickSend'], this);
                        }
                            ,
                            J['onClickSend'] = function () {
                                var K;
                                null == (K = this['clickHandler']) || K['call'](this);
                            }
                            ,
                            J['bindClickHandler'] = function (K, L) {
                                this['clickHandler'] = function () {
                                    null == K || K['call'](L);
                                }
                                    ;
                            }
                            ,
                            J['reset'] = function () {
                                var K;
                                null == (K = this['timeTwer']) || K['stop'](),
                                    this['interactable'] = !0x0,
                                    this['label'] && (this['label']['string'] = y['getLangByID'](x['send']));
                            }
                            ,
                            J['startTimer'] = function (K) {
                                var L = this;
                                void 0x0 === K && (K = this['resetTime']),
                                    this['interactable'] = !0x1,
                                    this['resetTime'] = K;
                                var M = K;
                                this['timeTwer'] = z['tweenNumber'](this['resetTime'], 0x0, K, function (N) {
                                    (N = Math['floor'](N)) < M && (M = N,
                                        L['label'] && (L['label']['string'] = M['toString']()));
                                }, function (N) {
                                    L['reset']();
                                });
                            }
                            ,
                            m(I, [{
                                'key': 'ResetTime',
                                'set': function (K) {
                                    this['resetTime'] = K;
                                }
                            }]),
                            I;
                    }(w))['prototype'], 'resetTime', [B], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return 0x3c;
                        }
                    }),
                        C = D)) || C)),
                    p['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/setting.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './gSetting.ts', './utils.ts', './Oops.ts', './CustomEventDefine.ts', './Language.ts', './gMessageBox.ts', './GameUIConfig.ts', './stringDefine2.ts', './appConfig.ts', './VersionManager.ts', './dropdown.ts', './netAdapter.ts', './StorageConfig.ts'], function (j) {
        var q, z, A, E, F, G, H, J, K, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3;
        return {
            'setters': [function (a4) {
                q = a4['applyDecoratedDescriptor'],
                    z = a4['inheritsLoose'],
                    A = a4['initializerDefineProperty'],
                    E = a4['assertThisInitialized'];
            }
                , function (a4) {
                    F = a4['cclegacy'],
                        G = a4['_decorator'],
                        H = a4['Button'],
                        J = a4['Node'],
                        K = a4['Label'],
                        M = a4['sys'],
                        N = a4['js'],
                        O = a4['game'];
                }
                , function (a4) {
                    P = a4['gSetting'];
                }
                , function (a4) {
                    Q = a4['utils'];
                }
                , function (a4) {
                    R = a4['oops'];
                }
                , function (a4) {
                    S = a4['gameStage'],
                        T = a4['WebGameEvent'];
                }
                , function (a4) {
                    U = a4['LanguageManager'];
                }
                , function (a4) {
                    V = a4['MsgBoxManager'];
                }
                , function (a4) {
                    W = a4['UIID'];
                }
                , function (a4) {
                    X = a4['stringDefine'];
                }
                , function (a4) {
                    Y = a4['appConfig'];
                }
                , function (a4) {
                    Z = a4['VersionManager'];
                }
                , function (a4) {
                    a0 = a4['dropdown'];
                }
                , function (a4) {
                    a1 = a4['netAdapter'],
                        a2 = a4['NetChannelType'];
                }
                , function (a4) {
                    a3 = a4['StorageConfig'];
                }
            ],
            'execute': function () {
                var a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag;
                F['_RF']['push']({}, 'a6bc0JV0HxKY6zzyc6KH29C', 'setting', void 0x0);
                var ah = G['ccclass']
                    , ai = G['property'];
                j('setting', (a4 = ah('setting'),
                    a5 = ai({
                        'type': H,
                        'tooltip': '返回登录按钮'
                    }),
                    a6 = ai({
                        'type': H,
                        'tooltip': '退出游戏按钮'
                    }),
                    a7 = ai({
                        'type': H,
                        'tooltip': '清理按钮'
                    }),
                    a8 = ai({
                        'type': a0,
                        'tooltip': 'lanDrpoDown'
                    }),
                    a9 = ai({
                        'type': J,
                        'tooltip': 'changeLanNode'
                    }),
                    a4((ac = q((ab = function (aj) {
                        function ak() {
                            for (var am, an = arguments['length'], ao = new Array(an), ap = 0x0; ap < an; ap++)
                                ao[ap] = arguments[ap];
                            return am = aj['call']['apply'](aj, [this]['concat'](ao)) || this,
                                A(am, 'btnOut', ac, E(am)),
                                am['lbOut'] = null,
                                A(am, 'btnQuit', ad, E(am)),
                                A(am, 'btnClear', ae, E(am)),
                                A(am, 'lanDrpoDown', af, E(am)),
                                A(am, 'changeLanNode', ag, E(am)),
                                am['supportLanCode'] = [],
                                am['supportLan'] = [],
                                am['lableToggle'] = [],
                                am['nowToggleIndex'] = 0x0,
                                am['lbQuit'] = null,
                                am;
                        }
                        z(ak, aj);
                        var al = ak['prototype'];
                        return al['onLoad'] = function () {
                            this['onInit']();
                        }
                            ,
                            al['onInit'] = function () {
                                aj['prototype']['onInit']['call'](this),
                                    this['lbOut'] = this['btnOut']['node']['getComponentInChildren'](K),
                                    this['lbQuit'] = this['btnQuit']['node']['getComponentInChildren'](K),
                                    Q['ButtonBindClick'](this['btnOut'], this['onBtnOutClick'], this);
                                var am = M['isNative'];
                                this['btnQuit']['node']['active'] = am,
                                    am && (Q['ButtonBindClick'](this['btnQuit'], this['onBtnQuitClick'], this),
                                        null != this['btnClear'] && Q['ButtonBindClick'](this['btnClear'], this['onBtnClearClick'], this)),
                                    this['lanDrpoDown']['setValueChangedListener'](this['onToggleChanged']['bind'](this)),
                                    this['supportLanCode'] = Y['supportLanList'],
                                    this['supportLan'] = [],
                                    this['lanDrpoDown']['clearOptions']();
                                var an = this['supportLanCode']['length'];
                                if (an > 0x0) {
                                    for (var ao = 0x0; ao < an; ao++) {
                                        var ap = this['supportLanCode'][ao];
                                        if (ap) {
                                            var aq = U['getLangByTag']('language_' + ap);
                                            this['supportLan']['push'](aq);
                                        }
                                    }
                                    this['lanDrpoDown']['addOptions'](this['supportLan']);
                                }
                            }
                            ,
                            al['onToggleChanged'] = function (am) {
                                var an = this;
                                if (this['nowToggleIndex'] != am) {
                                    var ao = X['tips'];
                                    ao = U['getLangByID'](ao);
                                    var ap = this['supportLanCode'][am]
                                        , aq = U['getLangByTag']('language_' + ap)
                                        , ar = N['formatStr'](U['getLangByTag']('change_lan_tips'), aq)
                                        , as = {
                                            'txt': U['getLangByID'](X['ok']),
                                            'click': function () {
                                                R['storage']['set'](a3['language'], ap),
                                                    an['close'](),
                                                    a1['Instance']['Close'](a2['Lobby'], 0x3e8, 'changeLan'),
                                                    setTimeout(function () {
                                                        M['isNative'] ? O['restart']() : location['reload']();
                                                    }, 0x7d0);
                                            }
                                        }
                                        , at = {
                                            'txt': U['getLangByID'](X['cancel']),
                                            'click': function () {
                                                an['resetLanToggle']();
                                            }
                                        };
                                    V['Show'](ao, ar, as, at);
                                }
                            }
                            ,
                            al['resetLanToggle'] = function () {
                                if (this['changeLanNode']['active']) {
                                    var am = R['storage']['get'](a3['language']);
                                    Q['StringIsNullOrEmpty'](am) && (am = Y['language']),
                                        this['nowToggleIndex'] = this['supportLanCode']['indexOf'](am),
                                        this['lanDrpoDown']['Value'] = this['nowToggleIndex'];
                                }
                            }
                            ,
                            al['onBtnOutClick'] = function () {
                                var am = this;
                                if (Y['bHasLobby']) {
                                    var an = X['tips'];
                                    an = U['getLangByID'](an);
                                    var ao = X['leaveComfirm'];
                                    ao = U['getLangByID'](ao);
                                    var ap = {
                                        'txt': U['getLangByID'](X['comfirm'])
                                    }
                                        , aq = {
                                            'txt': U['getLangByID'](X['cancel'])
                                        };
                                    Y['gameStage'] == S['lobby'] ? ap['click'] = function () {
                                        R['message']['dispatchEvent'](T['game_stage_change'], S['login'], S['lobby']),
                                            am['close']();
                                    }
                                        : Y['gameStage'] == S['game'] && (ap['click'] = function () {
                                            R['message']['dispatchEvent'](T['req_exit_game']),
                                                am['close']();
                                        }
                                        ),
                                        V['Show'](an, ao, ap, aq);
                                }
                            }
                            ,
                            al['onBtnQuitClick'] = function () {
                                if (M['isNative']) {
                                    var am = X['tips'];
                                    am = U['getLangByID'](am);
                                    var an = X['leaveComfirm'];
                                    an = U['getLangByID'](an);
                                    var ao = {
                                        'txt': U['getLangByID'](X['comfirm'])
                                    }
                                        , ap = {
                                            'txt': U['getLangByID'](X['cancel'])
                                        };
                                    ao['click'] = function () {
                                        O['end']();
                                    }
                                        ,
                                        V['Show'](am, an, ao, ap);
                                } else
                                    this['btnQuit']['node']['active'] = !0x1;
                            }
                            ,
                            al['onBtnClearClick'] = function () {
                                var am = this
                                    , an = X['tips'];
                                an = U['getLangByID'](an);
                                var ao = U['getLangByTag']('clear_tips')
                                    , ap = {
                                        'txt': U['getLangByID'](X['ok']),
                                        'click': function () {
                                            Z['Instance']['removeAllSubGame'](),
                                                am['scheduleOnce'](function () {
                                                    O['restart']();
                                                }, 0x5);
                                        }
                                    }
                                    , aq = {
                                        'txt': U['getLangByID'](X['cancel']),
                                        'click': null
                                    };
                                V['Show'](an, ao, ap, aq);
                            }
                            ,
                            al['show'] = function () {
                                var am;
                                aj['prototype']['show']['call'](this);
                                var an = Y['gameStage'] == S['lobby']
                                    , ao = an ? X['logout'] : X['back'];
                                this['lbOut']['string'] = U['getLangByID'](ao),
                                    this['btnClear'] && (this['btnClear']['node']['active'] = Y['bHasLobby'] && M['isNative'] && an),
                                    this['changeLanNode']['active'] = an && (null == (am = Y['supportLanList']) ? void 0x0 : am['length']) > 0x0,
                                    this['resetLanToggle']();
                            }
                            ,
                            al['close'] = function (am) {
                                aj['prototype']['close']['call'](this, function () {
                                    R['gui']['remove'](W['setting'], !0x1);
                                });
                            }
                            ,
                            ak;
                    }(P))['prototype'], 'btnOut', [a5], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        ad = q(ab['prototype'], 'btnQuit', [a6], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ae = q(ab['prototype'], 'btnClear', [a7], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        af = q(ab['prototype'], 'lanDrpoDown', [a8], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ag = q(ab['prototype'], 'changeLanNode', [a9], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        aa = ab)) || aa)),
                    F['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/settingToggle.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (a) {
        var b, d, f, g, h, j, k, m;
        return {
            'setters': [function (p) {
                b = p['applyDecoratedDescriptor'],
                    d = p['inheritsLoose'],
                    f = p['initializerDefineProperty'],
                    g = p['assertThisInitialized'];
            }
                , function (p) {
                    h = p['cclegacy'],
                        j = p['_decorator'],
                        k = p['Sprite'],
                        m = p['Toggle'];
                }
            ],
            'execute': function () {
                var q, v, w, x, z;
                h['_RF']['push']({}, '22113/EuvNA8aIws0l+Jt2p', 'settingToggle', void 0x0);
                var A = j['ccclass']
                    , B = j['property'];
                a('settingToggle', (q = A('settingToggle'),
                    v = B(k),
                    q((z = b((x = function (C) {
                        function D() {
                            for (var F, G = arguments['length'], H = new Array(G), I = 0x0; I < G; I++)
                                H[I] = arguments[I];
                            return F = C['call']['apply'](C, [this]['concat'](H)) || this,
                                f(F, 'sp_toggle', z, g(F)),
                                F;
                        }
                        d(D, C);
                        var E = D['prototype'];
                        return E['playEffect'] = function () {
                            C['prototype']['playEffect']['call'](this),
                                this['onCheckChange'](this['isChecked']);
                        }
                            ,
                            E['onCheckChange'] = function (F) {
                                this['sp_toggle'] && (this['sp_toggle']['enabled'] = F);
                            }
                            ,
                            D;
                    }(m))['prototype'], 'sp_toggle', [v], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        w = x)) || w)),
                    h['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/shareNode.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './snsManager.ts', './Oops.ts', './CustomEventDefine.ts'], function (d) {
        var f, g, j, k, m, q, v, w, x, y, z, A, B;
        return {
            'setters': [function (C) {
                f = C['applyDecoratedDescriptor'],
                    g = C['inheritsLoose'],
                    j = C['initializerDefineProperty'],
                    k = C['assertThisInitialized'];
            }
                , function (C) {
                    m = C['cclegacy'],
                        q = C['_decorator'],
                        v = C['Button'],
                        w = C['Component'];
                }
                , function (C) {
                    x = C['utils'];
                }
                , function (C) {
                    y = C['snsManager'],
                        z = C['SnsType'];
                }
                , function (C) {
                    A = C['oops'];
                }
                , function (C) {
                    B = C['WebGameEvent'];
                }
            ],
            'execute': function () {
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
                    D((N = f((M = function (Y) {
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
                        return a0['start'] = function () {
                            x['ButtonBindClick'](this['btn_copy'], this['onCopy'], this),
                                x['ButtonBindClick'](this['btn_whatApp'], this['onWhatApp'], this),
                                x['ButtonBindClick'](this['btn_faceBook'], this['onFaceBook'], this),
                                x['ButtonBindClick'](this['btn_tg'], this['onTelegra'], this),
                                x['ButtonBindClick'](this['btn_line'], this['onLine'], this),
                                x['ButtonBindClick'](this['btn_twitter'], this['onTwitter'], this);
                        }
                            ,
                            a0['setShareUrl'] = function (a1) {
                                this['shareUrl'] = a1;
                            }
                            ,
                            a0['onShared'] = function () {
                                A['message']['dispatchEvent'](B['shareEnd']);
                            }
                            ,
                            a0['onFaceBook'] = function () {
                                y['Instance']()['share'](z['FACEBOOK'], this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            a0['onTelegra'] = function () {
                                y['Instance']()['share'](z['TELEGRAM'], this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            a0['onLine'] = function () {
                                y['Instance']()['share'](z['LINE'], this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            a0['onTwitter'] = function () {
                                y['Instance']()['share'](z['TWITTER'], this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            a0['onWhatApp'] = function () {
                                y['Instance']()['share'](z['WHATSAPP'], this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            a0['onCopy'] = function () {
                                x['copyTextToClipboard'](this['shareUrl']),
                                    this['onShared']();
                            }
                            ,
                            Z;
                    }(w))['prototype'], 'btn_copy', [F], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        O = f(M['prototype'], 'btn_whatApp', [G], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        P = f(M['prototype'], 'btn_faceBook', [H], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        Q = f(M['prototype'], 'btn_tg', [I], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        R = f(M['prototype'], 'btn_line', [J], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        V = f(M['prototype'], 'btn_twitter', [K], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        L = M)) || L)),
                    m['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/snsManager.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './SingletonBase.ts', './utils.ts', './fireBaseManager.ts', './firebaseEvents.ts'], function (b) {
        var c, d, f, g, h, j, k;
        return {
            'setters': [function (l) {
                c = l['inheritsLoose'];
            }
                , function (l) {
                    d = l['cclegacy'],
                        f = l['sys'];
                }
                , function (l) {
                    g = l['default'];
                }
                , function (l) {
                    h = l['utils'];
                }
                , function (l) {
                    j = l['fireBaseManager'];
                }
                , function (l) {
                    k = l['FirebaseEvent_SHARE'];
                }
            ],
            'execute': function () {
                d['_RF']['push']({}, '88bb8dCvm9FF5qq3gHoXstm', 'snsManager', void 0x0);
                var l = b('SnsType', function (m) {
                    return m[m['WHATSAPP'] = 0x1] = 'WHATSAPP',
                        m[m['FACEBOOK'] = 0x2] = 'FACEBOOK',
                        m[m['TELEGRAM'] = 0x3] = 'TELEGRAM',
                        m[m['LINE'] = 0x4] = 'LINE',
                        m[m['TWITTER'] = 0x5] = 'TWITTER',
                        m[m['SMS'] = 0x6] = 'SMS',
                        m;
                }({}));
                b('snsManager', function (m) {
                    function q() {
                        return m['apply'](this, arguments) || this;
                    }
                    c(q, m);
                    var u = q['prototype'];
                    return u['share'] = function (v, w, x) {
                        var y = 'share';
                        v == l['WHATSAPP'] ? (this['shareWhatsApp'](w, x),
                            y = 'WhatsApp') : v == l['FACEBOOK'] ? (this['shareFacebook'](w, x),
                                y = 'Facebook') : v == l['TELEGRAM'] ? (this['shareTelegram'](w, x),
                                    y = 'Telegram') : v == l['LINE'] ? (this['shareLine'](w, x),
                                        y = 'Line') : v == l['TWITTER'] && (this['shareTwitter'](w, x),
                                            y = 'Twitter'),
                            j['Instance']()['trackEvent'](new k(y));
                    }
                        ,
                        u['sendWhatsApp'] = function (v, w, x) {
                            var y = 'https://api.whatsapp.com/send?phone=' + v + '&text=' + w;
                            h['openUrl'](y);
                        }
                        ,
                        u['shareSms'] = function (v, w, x) {
                            if (f['isBrowser']) {
                                var y = '';
                                f['os'] == f['OS']['ANDROID'] ? y = 'sms:' + v + '?body=' + w : f['os'] == f['OS']['IOS'] && (y = 'sms:/open?addresses=' + v + '&body=' + w),
                                    h['openUrl'](y);
                            } else
                                f['isNative'];
                        }
                        ,
                        u['shareTwitter'] = function (v, w) {
                            var x = 'https://twitter.com/intent/tweet?url=' + v;
                            h['openUrl'](x);
                        }
                        ,
                        u['shareLine'] = function (v, w) {
                            var x = 'https://line.me/R/msg/text/?' + v;
                            h['openUrl'](x);
                        }
                        ,
                        u['shareWhatsApp'] = function (v, w) {
                            var x = 'https://api.whatsapp.com/send?text=' + v;
                            h['openUrl'](x);
                        }
                        ,
                        u['shareFacebook'] = function (v, w) {
                            var x = 'http://www.facebook.com/sharer.php?u=' + v;
                            h['openUrl'](x);
                        }
                        ,
                        u['shareTelegram'] = function (v, w) {
                            var x = 'https://t.me/share/url?url=' + v;
                            h['openUrl'](x);
                        }
                        ,
                        q;
                }(g)),
                    d['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/stringDefine.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        'http_error_153': '66',
                        'http_error_204': '67',
                        'http_error_206': '68',
                        'ft_win_broadcast': '69',
                        'ft_jackpot_broadcast': '70',
                        'room_name': '71',
                        'room_players': '72',
                        'room_antes': '73',
                        'room_balance': '74',
                        'room_0': '75',
                        'room_1': '76',
                        'room_2': '77',
                        'room_3': '78',
                        'room_4': '79',
                        'room_5': '80',
                        'room_6': '81',
                        'roomTitle': '82',
                        'play': '83',
                        'any': '84',
                        'quit': '85',
                        'logout': '86',
                        'tips': '87',
                        'tcp_connect_failed': '88',
                        'kickout': '89',
                        'replace': '90',
                        'ft_force_back_game': '91',
                        'account_exist': '92',
                        'device_code_none': '93',
                        'account_not_exist': '94',
                        'password_error': '95',
                        'account_disable': '96',
                        'visitor_login_error': '97',
                        'session_error': '98',
                        'system_maintenance': '99',
                        'change_pwd': '100',
                        'download': '101',
                        'download_tips': '102',
                        'download_reward_tips': '103',
                        'rtPermission': '104',
                        'bindTips': '105',
                        'bind': '106',
                        'enter_vip_limit': '107',
                        'enter_coin_limit': '108',
                        'add2main_tips': '109',
                        'add2main_tips_v10': '110',
                        'warn': '111',
                        'guest_login_warn': '112',
                        'send_msg': '113',
                        'got_prize': '114',
                        'service': '115',
                        'setting': '116',
                        'signin': '117',
                        'lottery': '118',
                        'gift': '119',
                        'gift2': '120',
                        'invite': '121',
                        'benefit': '122',
                        'all_game': '123',
                        'hot_game': '124',
                        'slots_game': '125',
                        'poker_game': '126',
                        'bad_net_work': '127',
                        'free_cash': '128',
                        'buy': '129',
                        'find_new_version': '130',
                        'tips_back_money': '131',
                        'buyCoin': '132',
                        'account_not_login': '133',
                        'session_invalid': '134',
                        'gameroom_invalid': '135',
                        'gameroom_disable': '136',
                        'task': '137',
                        'notify_general_0': '138',
                        'notify_general_1': '139',
                        'notify_general_2': '140',
                        'notify_general_3': '141',
                        'notify_general_4': '142',
                        'notify_general_5': '143',
                        'notify_general_6': '144',
                        'notify_general_7': '145',
                        'notify_general_8': '146',
                        'notify_general_9': '147',
                        'notify_general_10': '148',
                        'notify_general_11': '149',
                        'notify_general_12': '150',
                        'notify_general_13': '151',
                        'notify_general_14': '152',
                        'notify_share_0': '153',
                        'notify_share_1': '154',
                        'notify_share_2': '155',
                        'notify_share_3': '156',
                        'notify_store_0': '157',
                        'notify_store_1': '158',
                        'notify_store_2': '159',
                        'notify_store_3': '160',
                        'FtJPWinnerInfo': '161',
                        'toggle_home': '162',
                        'toggle_slots': '163',
                        'toggle_multiplayer': '164',
                        'toggle_history': '165',
                        'bindCardTips': '166',
                        'open_web_game_tips': '167',
                        'str_matching': '168',
                        'bind_email_tips': '169',
                        'bind_emailOrPhone_tips': '170',
                        'tips_enter_email': '171',
                        'str_not_match_palyer': '172',
                        'str_match_error_1': '173',
                        'str_match_error_2': '174',
                        'str_match_error_3': '175',
                        'str_match_error_4': '176'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/tagClearInput.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './clearInput.ts'], function (b) {
        var d, f, g, h, j, k, l, m;
        return {
            'setters': [function (p) {
                d = p['applyDecoratedDescriptor'],
                    f = p['inheritsLoose'],
                    g = p['initializerDefineProperty'],
                    h = p['assertThisInitialized'];
            }
                , function (p) {
                    j = p['cclegacy'],
                        k = p['_decorator'],
                        l = p['Label'];
                }
                , function (p) {
                    m = p['clearInput'];
                }
            ],
            'execute': function () {
                var q, v, w, x, y;
                j['_RF']['push']({}, '339c1ZQnBFGnIo5jSPA8hV3', 'tagClearInput', void 0x0);
                var z = k['ccclass']
                    , A = k['property'];
                b('tagClearInput', (q = z('tagClearInput'),
                    v = A({
                        'type': l,
                        'tooltip': '标签'
                    }),
                    q((y = d((x = function (B) {
                        function C() {
                            for (var D, E = arguments['length'], F = new Array(E), G = 0x0; G < E; G++)
                                F[G] = arguments[G];
                            return D = B['call']['apply'](B, [this]['concat'](F)) || this,
                                g(D, 'tagInput', y, h(D)),
                                D;
                        }
                        return f(C, B),
                            C['prototype']['setTag'] = function (D) {
                                this['tagInput'] && (this['tagInput']['string'] = D);
                            }
                            ,
                            C;
                    }(m))['prototype'], 'tagInput', [v], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        w = x)) || w)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/tha.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'คุณจำเป็นต้องผูก',
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
                        0x42: 'ที่อยู่อีเมลปัจจุบันได้ถูกลงทะเบียนแล้วและไม่สามารถลงทะเบียนซ้ำได้',
                        0x43: 'กรุณาลองใหม่อีกครั้งในภายหลัง',
                        0x44: 'ข้อมูลไม่ถูกต้องโปรดลองอีกครั้งในภายหลัง',
                        0x45: 'ขอแสดงความยินดีกับ\x20<color=#FF4600>@player</color>\x20ใน\x20<color=yellow>@game</color>\x20สำหรับการชนะรางวัล\x20<color=#4BFF00>x@multiple</color>\x20และได้รับ\x20<color=yellow>@coins</สี>\x20เหรียญ.',
                        0x46: 'ขอแสดงความยินดีกับ\x20<color=#FF4600>%s</color>\x20สำหรับการชนะแจ็คพอตใน\x20<color=#4BFF00>%s</color>\x20และชนะเหรียญ\x20<color=yellow>%s</color>',
                        0x47: 'ห้อง',
                        0x48: 'ผู้เล่น',
                        0x49: 'ก่อน',
                        0x4a: 'ยอดคงเหลือขั้นต่ำ',
                        0x4b: 'การสาธิต',
                        0x4c: 'หลัก',
                        0x4d: 'ผู้เชี่ยวชาญ',
                        0x4e: 'กษัตริย์',
                        0x4f: 'มหากาพย์',
                        0x50: 'ตำนาน',
                        0x51: 'ตำนาน',
                        0x52: 'ห้อง',
                        0x53: 'เล่น',
                        0x54: 'ใดๆ',
                        0x55: 'ล้มเลิก',
                        0x56: 'ออกจากระบบ',
                        0x57: 'เคล็ดลับ',
                        0x58: 'การเชื่อมต่อเซิร์ฟเวอร์ล้มเหลว\x20โปรดลองอีกครั้งในภายหลัง',
                        0x59: 'ระบบขอให้คุณออก\x20กรุณาเข้าเกมทีหลัง',
                        0x5a: 'บัญชีนี้ลงชื่อเข้าใช้จากอุปกรณ์อื่น\x20โปรดคำนึงถึงความปลอดภัยของบัญชี',
                        0x5b: 'เกมของคุณใน\x20%s\x20ยังไม่สิ้นสุด\x20โปรดกลับไปเล่นอีกครั้ง',
                        0x5c: 'มีการลงทะเบียนบัญชีอยู่แล้ว',
                        0x5d: 'อุปกรณ์บัญชีแขกต้องไม่ว่างเปล่า',
                        0x5e: 'บัญชีไม่มีอยู่',
                        0x5f: 'รหัสผ่านผิดพลาด.',
                        0x60: 'บัญชีนี้ถูกระงับ',
                        0x61: 'ข้อยกเว้นการเข้าสู่ระบบของผู้เยี่ยมชม\x20โปรดลองอีกครั้ง',
                        0x62: 'ข้อยกเว้นการเข้าสู่ระบบ\x207\x20โปรดลองอีกครั้ง',
                        0x63: 'ระบบอยู่ระหว่างการบำรุงรักษา\x20โปรดลองอีกครั้งในภายหลัง',
                        0x64: 'แก้ไขรหัสผ่าน',
                        0x65: 'ดาวน์โหลด',
                        0x66: 'เพื่อประสบการณ์ที่ดีขึ้นของคุณ\x20โปรดดาวน์โหลดเกม',
                        0x67: 'เพื่อประสบการณ์ที่ดีขึ้นของคุณ\x20โปรดดาวน์โหลดเกม\x20ติดตั้งทันทีและรับรางวัล!',
                        0x68: 'ยอมรับ\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>ข้อกำหนดในการให้บริการ</on></u></color>\x20และ\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>ความเป็นส่วนตัวและนโยบาย</on></u></color>',
                        0x69: 'ผูกหมายเลขโทรศัพท์มือถือ\x0aเพื่อรับรางวัล',
                        0x6a: 'ผูก',
                        0x6b: 'ขออภัย\x20ไม่ตรงตามข้อกำหนด\x20VIP\x20ยิ่งมีเหรียญมาก\x20ยิ่ง\x20VIP\x20ยิ่งไปที่ร้านเพื่อเติมเงิน',
                        0x6c: 'ขออภัย\x20คุณไม่ตรงตามข้อกำหนดในการเข้า\x20คุณต้องการไปซื้อที่ร้านไหม',
                        0x6d: 'แตะ\x20<img\x20src=\x27share\x27\x20/>\x20และ\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>เพิ่มไปที่หน้าจอหลัก</color></b>\x20เพื่อเล่นทุกครั้งที่คุณต้องการ',
                        0x6e: 'แตะ\x20<img\x20src=\x27share\x27\x20/>\x20และ\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>เพิ่มไปที่หน้าจอหลัก</color></b>\x20เพื่อเล่นทุกครั้งที่คุณต้องการ',
                        0x6f: 'คำเตือน',
                        0x70: 'เพื่อความปลอดภัยของข้อมูลเกมของคุณ\x20ขอแนะนำอย่างยิ่งให้คุณลงทะเบียนเป็นบัญชีอย่างเป็นทางการ',
                        0x71: 'ส่งข้อความ',
                        0x72: 'รับรางวัลเรียบร้อยแล้ว',
                        0x73: 'บริการ',
                        0x74: 'การตั้งค่า',
                        0x75: 'เข้าสู่ระบบ',
                        0x76: 'รูเล็ต',
                        0x77: 'ของขวัญ',
                        0x78: 'กราเทีย',
                        0x79: 'เชิญ',
                        0x7a: 'กองทุน',
                        0x7b: 'ทั้งหมด',
                        0x7c: 'ร้อน',
                        0x7d: 'Slots',
                        0x7e: 'โป๊กเกอร์',
                        0x7f: 'สถานะเครือข่ายไม่ดี',
                        0x80: 'ฟรีแคช',
                        0x81: 'ซื้อ',
                        0x82: 'พบเวอร์ชันใหม่\x20คุณต้องการรีเฟรชหรือไม่',
                        0x83: 'แคมเปญถูกปิดและเหรียญที่ใช้ในการซื้อรหัสจับฉลากได้รับการคืนเงินแล้ว',
                        0x84: 'BUY\x20COIN',
                        0x85: 'คุณยังไม่ได้เข้าสู่ระบบ\x20โปรดออกจากระบบแล้วลองอีกครั้ง',
                        0x86: 'หากการรับรองความถูกต้องล้มเหลว\x20ให้ออกแล้วลองอีกครั้ง',
                        0x87: 'ห้องเกมไม่ถูกต้องลองห้องอื่น',
                        0x88: 'ห้องปิดลองอีกอัน',
                        0x89: 'งาน',
                        0x8a: 'ถึงเวลาเล่นสล็อตใหม่แล้ว',
                        0x8b: 'รับเหรียญฟรีเมื่อลงชื่อเข้าใช้ทุกวัน!',
                        0x8c: 'Lucky\x20Roulette\x20รับประกันอัตราการชนะ\x20100%\x20มารับรางวัลกันเถอะ!',
                        0x8d: 'ความท้าทายใหม่สุดพิเศษสำหรับเหรียญขนาดใหญ่!',
                        0x8e: 'สล็อตและคุณสมบัติที่น่าทึ่ง!',
                        0x8f: 'คุณสามารถรับโบนัสพิเศษได้',
                        0x90: 'พลังวีไอพีที่สูงขึ้น\x20สิทธิประโยชน์มากขึ้น!',
                        0x91: 'หมุนสล็อตใหม่\x20ขอให้โชคดีอยู่กับคุณ!',
                        0x92: 'LUCKY\x20WHEEL\x20DAY,\x20ตัวคูณวงล้อทอง!',
                        0x93: 'โบนัสเซอร์ไพรส์\x20มาเก็บเหรียญของคุณ',
                        0x94: 'หมุนเร็วขึ้นและรางวัลใหญ่!',
                        0x95: 'MEGA\x20REWARD\x20พร้อมแล้ว\x20หมุนทันที!',
                        0x96: 'แตะและสะสมชิปฟรีของคุณทันที!',
                        0x97: 'ชั่วโมงแห่งความสุข!!!TREASURE\x20BOWL\x20โอกาสเพิ่มขึ้น\x2010%!!!โบนัสไม่จำกัดในทุกแพ็ก',
                        0x98: 'เล่นเลยเพื่อเพลิดเพลินกับขนมและภารกิจพิเศษ',
                        0x99: 'เชิญเพื่อนมาเป็นหัวหน้าของพวกเขา!\x20เหรียญมหาศาลฟรี',
                        0x9a: 'แบ่งปันให้เพื่อนของคุณรับของขวัญสุดพิเศษ',
                        0x9b: 'รางวัลมากมายสำหรับการแบ่งปัน\x20เชิญรางวัลเพิ่มเติม',
                        0x9c: 'เล่นกับเพื่อน\x20ๆ\x20รับของขวัญฟรีทุกวัน!',
                        0x9d: 'โบนัสโชคดี\x20โอกาสที่จะรวยที่สุด!',
                        0x9e: 'เพลิดเพลินไปกับข้อเสนอพิเศษครั้งแรกของคุณ\x20และรับสิทธิประโยชน์ในการซื้อ',
                        0x9f: 'ซื้อครั้งแรกรับรางวัลพิเศษ!',
                        0xa0: 'HalloWIN!เข้าสู่ระบบทุกวัน\x20ซื้อสินค้าใดๆ\x20และส่วนลดจำกัดเวลา!',
                        0xa1: '<b>@player\x20ชนะ\x20\x0aรางวัลใหญ่\x20<color=#FFE100>@coins</color>\x20on\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'หน้าหลัก',
                        0xa3: 'สล็อต',
                        0xa4: 'ผู้เล่นหลายคน',
                        0xa5: 'ประวัติความเป็นมา',
                        0xa6: 'ผูกบัญชีถอนเพื่อรับรางวัล',
                        0xa7: 'ลิงก์ภายนอกกำลังจะเปิดขึ้น\x20คุณต้องการดำเนินการต่อหรือไม่?',
                        0xa8: 'จับคู่...',
                        0xa9: 'Vincula\x20tu\x20dirección\x20de\x20correo\x20electrónico\x20para\x20obtener\x20recompensas',
                        0xaa: 'Vincula\x20tu\x20número\x20de\x20teléfono\x20o\x20dirección\x20de\x20correo\x20electrónico\x20para\x20obtener\x20recompensas',
                        0xab: 'Por\x20favor,\x20introduzca\x20su\x20correo\x20electrónico',
                        0xac: 'ไม่พบผู้เล่นสำหรับการจับคู่',
                        0xad: 'ต่ำกว่าจำนวนขั้นต่ำที่กำหนด',
                        0xae: 'ไม่ได้อยู่ในคิวหาคู่',
                        0xaf: 'ไม่มีข้อมูลที่นั่ง',
                        0xb0: 'ลุกขึ้นไม่ได้'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/togglePwd.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts'], function (b) {
        var c, f, g, h, j, k, m, p, q, v;
        return {
            'setters': [function (w) {
                c = w['applyDecoratedDescriptor'],
                    f = w['inheritsLoose'],
                    g = w['initializerDefineProperty'],
                    h = w['assertThisInitialized'];
            }
                , function (w) {
                    j = w['cclegacy'],
                        k = w['_decorator'],
                        m = w['Button'],
                        p = w['EditBox'],
                        q = w['Component'];
                }
                , function (w) {
                    v = w['utils'];
                }
            ],
            'execute': function () {
                var x, z, A, B, C, D, E, F, G;
                j['_RF']['push']({}, 'a0ad9V1aCxDN5zQTK0UssAH', 'togglePwd', void 0x0);
                var H = k['ccclass']
                    , I = k['property'];
                b('togglePwd', (x = H('togglePwd'),
                    z = I(m),
                    A = I(m),
                    B = I(p),
                    x((E = c((D = function (J) {
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
                        return L['start'] = function () {
                            v['ButtonBindClick'](this['btn_hide_pwd'], this['onHidePwd'], this),
                                v['ButtonBindClick'](this['btn_show_pwd'], this['onShowPwd'], this);
                        }
                            ,
                            L['onShowPwd'] = function () {
                                this['btn_show_pwd']['node']['active'] = !0x1,
                                    this['btn_hide_pwd']['node']['active'] = !0x0,
                                    this['editBox']['inputFlag'] = p['InputFlag']['PASSWORD'];
                            }
                            ,
                            L['onHidePwd'] = function () {
                                this['btn_show_pwd']['node']['active'] = !0x0,
                                    this['btn_hide_pwd']['node']['active'] = !0x1,
                                    this['editBox']['inputFlag'] = p['InputFlag']['DEFAULT'];
                            }
                            ,
                            L['onEnable'] = function () {
                                this['onShowPwd']();
                            }
                            ,
                            K;
                    }(q))['prototype'], 'btn_show_pwd', [z], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        F = c(D['prototype'], 'btn_hide_pwd', [A], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        G = c(D['prototype'], 'editBox', [B], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        C = D)) || C)),
                    j['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/topCloseLayer.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './webGame.ts', './Oops.ts'], function (b) {
        var f, g, j, k, m, q, v, w, x, z, A, B, C, D;
        return {
            'setters': [function (E) {
                f = E['createClass'];
            }
                , function (E) {
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
                , function (E) {
                    B = E['utils'];
                }
                , function (E) {
                    C = E['webGame'];
                }
                , function (E) {
                    D = E['oops'];
                }
            ],
            'execute': function () {
                var E, F;
                g['_RF']['push']({}, '78742f7Z2FJDLngo/sbMI47', 'topCloseLayer', void 0x0);
                var G = j['ccclass'];
                j['property'],
                    b('topCloseLayer', G('topCloseLayer')(((F = (function () {
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
                        return I['init'] = function () {
                            if (!this['bInit']) {
                                var J = function (L) {
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
                            I['onCloseLayerClick'] = function () {
                                var J;
                                null == (J = this['clickHandler']) || J['call'](this),
                                    null != this['node'] && (this['node']['active'] = !0x1);
                            }
                            ,
                            I['show'] = function (J, K, L) {
                                if (null != this['node']) {
                                    if (this['node']['active'] = !0x0,
                                        this['clickHandler'] = function () {
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
                            I['close'] = function () {
                                this['node']['active'] = !0x1,
                                    this['clickHandler'] = null;
                            }
                            ,
                            f(H, null, [{
                                'key': 'instance',
                                'get': function () {
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
    System['register']('chunks:///_virtual/vi.ts', ['cc'], function () {
        var a;
        return {
            'setters': [function (b) {
                a = b['cclegacy'];
            }
            ],
            'execute': function () {
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
                        0x29: 'Bạn\x20cần\x20ràng\x20buộc',
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
                        0x42: 'Địa\x20chỉ\x20email\x20hiện\x20tại\x20đã\x20được\x20đăng\x20ký\x20và\x20không\x20thể\x20đăng\x20ký\x20lại',
                        0x43: 'Vui\x20lòng\x20thử\x20lại\x20sau.',
                        0x44: 'Dữ\x20liệu\x20không\x20hợp\x20lệ,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                        0x45: 'Xin\x20chúc\x20mừng\x20<color=#FF4600>@player</color>\x20trong\x20<color=yellow>@game</color>\x20đã\x20giành\x20được\x20giải\x20thưởng\x20<color=#4BFF00>x@multiple</color>\x20và\x20nhận\x20được\x20<color=yellow>@coins</color>\x20Coins.',
                        0x46: 'Xin\x20chúc\x20mừng\x20<color=#FF4600>%s</color>\x20đã\x20trúng\x20Jackpot\x20trong\x20<color=#4BFF00>%s</color>\x20và\x20giành\x20được\x20<color=yellow>%s</color>\x20xu.',
                        0x47: 'Phòng',
                        0x48: 'Cầu\x20thủ',
                        0x49: 'Trước',
                        0x4a: 'Số\x20dư\x20tối\x20thiểu',
                        0x4b: 'Demo',
                        0x4c: 'Chính',
                        0x4d: 'Chủ',
                        0x4e: 'Vua',
                        0x4f: 'Epic',
                        0x50: 'Truyền\x20thuyết',
                        0x51: 'Vip',
                        0x52: 'Phòng',
                        0x53: 'Play',
                        0x54: 'Bất\x20kì',
                        0x55: 'Bỏ',
                        0x56: 'Đăng\x20xuất',
                        0x57: 'Tips',
                        0x58: 'Kết\x20nối\x20máy\x20chủ\x20không\x20thành\x20công,\x20vui\x20lòng\x20thử\x20lại\x20sau',
                        0x59: 'Hệ\x20thống\x20yêu\x20cầu\x20bạn\x20rời\x20đi,\x20vui\x20lòng\x20vào\x20trò\x20chơi\x20sau',
                        0x5a: 'Tài\x20khoản\x20này\x20được\x20đăng\x20nhập\x20từ\x20một\x20thiết\x20bị\x20khác,\x20vui\x20lòng\x20chú\x20ý\x20đến\x20bảo\x20mật\x20tài\x20khoản',
                        0x5b: 'Trò\x20chơi\x20của\x20bạn\x20trong\x20%s\x20vẫn\x20chưa\x20kết\x20thúc,\x20vui\x20lòng\x20quay\x20lại\x20và\x20chơi',
                        0x5c: 'Đã\x20tồn\x20tại\x20tài\x20khoản\x20đăng\x20ký.',
                        0x5d: 'Thiết\x20bị\x20tài\x20khoản\x20khách\x20không\x20thể\x20để\x20trống.',
                        0x5e: 'Tài\x20khoản\x20không\x20tồn\x20tại.',
                        0x5f: 'Mật\x20khẩu\x20không\x20chính\x20xác.',
                        0x60: 'Tài\x20khoản\x20này\x20đã\x20bị\x20khóa.',
                        0x61: 'Đăng\x20nhập\x20khách\x20bị\x20lỗi,\x20vui\x20lòng\x20thử\x20lại.',
                        0x62: 'Lỗi\x20đăng\x20nhập\x207,\x20vui\x20lòng\x20thử\x20lại.',
                        0x63: 'Hệ\x20thống\x20đang\x20bảo\x20trì,\x20vui\x20lòng\x20thử\x20lại\x20sau.',
                        0x64: 'Thay\x20đổi\x20mật\x20khẩu',
                        0x65: 'Download',
                        0x66: 'để\x20có\x20trải\x20nghiệm\x20tốt\x20hơn,\x20vui\x20lòng\x20Tải\x20xuống\x20Trò\x20chơi.',
                        0x67: 'để\x20có\x20trải\x20nghiệm\x20tốt\x20hơn,\x20vui\x20lòng\x20Tải\x20xuống\x20Trò\x20chơi.Cài\x20đặt\x20ngay\x20bây\x20giờ\x20và\x20nhận\x20phần\x20thưởng!',
                        0x68: 'Chấp\x20nhận\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22ts\x22>Điều\x20khoản\x20dịch\x20vụ</on></color></u>\x20và\x20<color=#A8B7F2><u><on\x20click=\x22onClick\x22\x20param=\x22pp\x22>Privacy&Policy</on></u></color>',
                        0x69: 'Ràng\x20buộc\x20số\x20điện\x20thoại\x0a\x20di\x20động\x20để\x20nhận\x20phần\x20thưởng',
                        0x6a: 'Ràng\x20buộc',
                        0x6b: 'Xin\x20lỗi,\x20yêu\x20cầu\x20VIP\x20không\x20được\x20đáp\x20ứng,\x20càng\x20nhiều\x20xu,\x20VIP\x20càng\x20cao,\x20hãy\x20đến\x20cửa\x20hàng\x20để\x20nạp\x20tiền',
                        0x6c: 'Xin\x20lỗi,\x20bạn\x20không\x20đáp\x20ứng\x20các\x20yêu\x20cầu\x20đầu\x20vào,\x20bạn\x20có\x20muốn\x20đến\x20cửa\x20hàng\x20để\x20mua\x20một\x20số\x20không?',
                        0x6d: 'Nhấn\x20<img\x20src=\x27share\x27\x20/>\x20và\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#9D9DFF>Add\x20to\x20Home</color></b>\x20Screen\x20để\x20phát\x20bất\x20cứ\x20khi\x20nào\x20bạn\x20muốn',
                        0x6e: 'Nhấn\x20<img\x20src=\x27share\x27\x20/>\x20và\x20<img\x20src=\x27add\x27\x20/>\x20<b><color=#00FFEB>Add\x20to\x20Home</color></b>\x20Screen\x20để\x20phát\x20bất\x20cứ\x20khi\x20nào\x20bạn\x20muốn',
                        0x6f: 'Cảnh\x20báo',
                        0x70: 'Để\x20bảo\x20mật\x20dữ\x20liệu\x20trò\x20chơi\x20của\x20bạn,\x20bạn\x20nên\x20đăng\x20ký\x20làm\x20tài\x20khoản\x20chính\x20thức',
                        0x71: 'Tin\x20nhắn\x20đã\x20gửi',
                        0x72: 'Nhận\x20giải\x20thưởng\x20hoàn\x20tất',
                        0x73: 'Dịch',
                        0x74: 'Khung\x20cảnh',
                        0x75: 'Đăng\x20nhập',
                        0x76: 'Roulette',
                        0x77: 'Quà\x20tặng',
                        0x78: 'Gratia',
                        0x79: 'Mời',
                        0x7a: 'Quỹ',
                        0x7b: 'Tất\x20cả',
                        0x7c: 'Nóng',
                        0x7d: 'Máy\x20đánh\x20bạc',
                        0x7e: 'bài\x20xì\x20phé',
                        0x7f: 'Tình\x20trạng\x20mạng\x20kém',
                        0x80: 'Miễn\x20phí',
                        0x81: 'Mua',
                        0x82: 'Đã\x20tìm\x20thấy\x20phiên\x20bản\x20mới.\x20Bạn\x20có\x20muốn\x20làm\x20mới\x20phiên\x20bản\x20này\x20không?',
                        0x83: 'Chiến\x20dịch\x20đã\x20kết\x20thúc\x20và\x20số\x20tiền\x20chi\x20cho\x20việc\x20mua\x20mã\x20xổ\x20số\x20đã\x20được\x20hoàn\x20lại',
                        0x84: 'BUY\x20COIN',
                        0x85: 'Bạn\x20chưa\x20đăng\x20nhập,\x20vui\x20lòng\x20đăng\x20xuất\x20và\x20thử\x20lại',
                        0x86: 'Nếu\x20xác\x20thực\x20không\x20thành\x20công,\x20hãy\x20thoát\x20và\x20thử\x20lại',
                        0x87: 'Phòng\x20trò\x20chơi\x20không\x20hợp\x20lệ,\x20hãy\x20thử\x20một\x20phòng\x20khác',
                        0x88: 'Phòng\x20đã\x20đóng,\x20hãy\x20thử\x20một\x20cái\x20khác',
                        0x89: 'Nhiệm',
                        0x8a: 'Đã\x20đến\x20lúc\x20chơi\x20Slots\x20MỚI',
                        0x8b: 'Nhận\x20xu\x20MIỄN\x20PHÍ\x20bằng\x20cách\x20đăng\x20nhập\x20mỗi\x20ngày!',
                        0x8c: 'Roulette\x20may\x20mắn!\x20Đảm\x20bảo\x20tỷ\x20lệ\x20thắng\x20100%!\x20Hãy\x20đến\x20và\x20nhận\x20giải\x20thưởng\x20của\x20bạn!',
                        0x8d: 'Thử\x20thách\x20độc\x20quyền\x20mới\x20dành\x20cho\x20số\x20tiền\x20khổng\x20lồ!',
                        0x8e: 'Khe\x20cắm\x20và\x20tính\x20năng\x20tuyệt\x20vời!',
                        0x8f: 'Bạn\x20có\x20thể\x20nhận\x20được\x20tiền\x20thưởng\x20đặc\x20biệt',
                        0x90: 'SỨC\x20MẠNH\x20VIP\x20cao\x20hơn,\x20nhiều\x20lợi\x20ích\x20hơn!',
                        0x91: 'Quay\x20SLOTS\x20MỚI,\x20Chúc\x20bạn\x20may\x20mắn!',
                        0x92: 'NGÀY\x20BÁNH\x20XE\x20MAY\x20MẮN,\x20BÁNH\x20XE\x20VÀNG!',
                        0x93: 'TIỀN\x20THƯỞNG\x20BẤT\x20NGỜ,\x20Hãy\x20đến\x20thu\x20thập\x20tiền\x20của\x20bạn',
                        0x94: 'Quay\x20nhanh\x20hơn\x20&\x20GIẢI\x20THƯỞNG\x20LỚN\x20HƠN!',
                        0x95: 'PHẦN\x20THƯỞNG\x20MEGA\x20đã\x20sẵn\x20sàng,\x20QUAY\x20NGAY!',
                        0x96: 'Hãy\x20nhấn\x20và\x20thu\x20thập\x20chip\x20miễn\x20phí\x20của\x20bạn\x20ngay\x20bây\x20giờ!',
                        0x97: 'GIỜ\x20HẠNH\x20PHÚC!!!\x20BÚT\x20KHO\x20BÁ\x2010%\x20Cơ\x20hội!!!\x20Phần\x20thưởng\x20không\x20giới\x20hạn\x20cho\x20tất\x20cả\x20các\x20gói',
                        0x98: 'Chơi\x20ngay\x20để\x20thưởng\x20thức\x20các\x20món\x20ăn\x20và\x20nhiệm\x20vụ\x20đặc\x20biệt',
                        0x99: 'Mời\x20bạn\x20bè,\x20trở\x20thành\x20BOSS\x20của\x20họ!\x20Số\x20tiền\x20khổng\x20lồ\x20miễn\x20phí',
                        0x9a: 'Chia\x20sẻ\x20với\x20bạn\x20bè,\x20nhận\x20quà\x20độc\x20quyền',
                        0x9b: 'Phần\x20thưởng\x20lớn\x20cho\x20Chia\x20sẻ,\x20Thêm\x20Mời\x20thêm\x20giải\x20thưởng',
                        0x9c: 'Chơi\x20với\x20bạn\x20bè,\x20Quà\x20tặng\x20miễn\x20phí\x20hàng\x20ngày!',
                        0x9d: 'TIỀN\x20THƯỞNG\x20MAY\x20MẮN,\x20Cơ\x20hội\x20trở\x20thành\x20người\x20giàu\x20nhất!',
                        0x9e: 'Tận\x20hưởng\x20ƯU\x20ĐÃI\x20ĐẶC\x20BIỆT\x20lần\x20đầu\x20tiên\x20của\x20bạn\x20và\x20nhận\x20các\x20lợi\x20ích\x20khi\x20mua\x20hàng',
                        0x9f: 'Lần\x20mua\x20hàng\x20đầu\x20tiên\x20có\x20thể\x20nhận\x20thêm\x20GIẢI\x20THƯỞNG!',
                        0xa0: 'HalloWIN!\x20Đăng\x20nhập\x20hàng\x20ngày,\x20mua\x20bất\x20kỳ\x20hàng\x20hóa\x20nào\x20và\x20giảm\x20giá\x20có\x20giới\x20hạn\x20thời\x20gian!',
                        0xa1: '<b>@player\x20Thắng\x20\x0aGiải\x20thưởng\x20<color=#FFE100>@coins</color>\x20on\x20\x0a<color=#00FFEF>@game</color></b>',
                        0xa2: 'Trang\x20chủ',
                        0xa3: 'Khe\x20cắm',
                        0xa4: 'Nhiều\x20người\x20chơi',
                        0xa5: 'Lịch\x20sử',
                        0xa6: 'Liên\x20kết\x20tài\x20khoản\x20rút\x20tiền\x20để\x20nhận\x20phần\x20thưởng',
                        0xa7: 'Một\x20liên\x20kết\x20ngoài\x20sắp\x20được\x20mở.\x20Bạn\x20có\x20muốn\x20tiếp\x20tục\x20không?',
                        0xa8: 'Phù\x20hợp...',
                        0xa9: 'Liên\x20kết\x20địa\x20chỉ\x20email\x20của\x20bạn\x20để\x20nhận\x20phần\x20thưởng',
                        0xaa: 'Liên\x20kết\x20số\x20điện\x20thoại\x20hoặc\x20địa\x20chỉ\x20email\x20của\x20bạn\x20để\x20nhận\x20phần\x20thưởng',
                        0xab: 'Vui\x20lòng\x20nhập\x20Email\x20của\x20bạn',
                        0xac: 'Không\x20tìm\x20thấy\x20người\x20chơi\x20để\x20ghép\x20trận',
                        0xad: 'Dưới\x20số\x20tiền\x20tối\x20thiểu\x20yêu\x20cầu',
                        0xae: 'Không\x20trong\x20hàng\x20đợi\x20ghép\x20đôi',
                        0xaf: 'Không\x20có\x20thông\x20tin\x20chỗ\x20ngồi',
                        0xb0: 'Không\x20thể\x20đứng\x20lên'
                    },
                    a['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/viewLobby.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './lobbyConfig.ts', './lobbyBottom.ts', './lobbyTop.ts', './lobbyGameList.ts', './baseView.ts', './lobbyRoomList.ts', './utils.ts', './appConfig.ts', './Oops.ts', './webGame.ts', './GameUIConfig.ts', './matchLoading.ts'], function (j) {
        var k, q, v, x, z, A, B, C, D, E, F, G, H, J, K, M, N, O, P, Q, R;
        return {
            'setters': [function (S) {
                k = S['applyDecoratedDescriptor'],
                    q = S['inheritsLoose'],
                    v = S['initializerDefineProperty'],
                    x = S['assertThisInitialized'],
                    z = S['createClass'];
            }
                , function (S) {
                    A = S['cclegacy'],
                        B = S['_decorator'],
                        C = S['Sprite'],
                        D = S['ImageAsset'];
                }
                , function (S) {
                    E = S['Lobby'];
                }
                , function (S) {
                    F = S['lobbyBottom'];
                }
                , function (S) {
                    G = S['lobbyTop'];
                }
                , function (S) {
                    H = S['lobbyGameList'];
                }
                , function (S) {
                    J = S['baseView'];
                }
                , function (S) {
                    K = S['lobbyRoomList'];
                }
                , function (S) {
                    M = S['utils'];
                }
                , function (S) {
                    N = S['appConfig'];
                }
                , function (S) {
                    O = S['oops'];
                }
                , function (S) {
                    P = S['webGame'];
                }
                , function (S) {
                    Q = S['UIID'];
                }
                , function (S) {
                    R = S['matchLoading'];
                }
            ],
            'execute': function () {
                var V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7;
                A['_RF']['push']({}, 'bf80bRF6K9Noq/CLgd5Jlq1', 'viewLobby', void 0x0);
                var a8 = B['ccclass']
                    , a9 = B['property'];
                j('viewLobby', (V = a8('viewLobby'),
                    W = a9({
                        'type': G,
                        'tooltip': '顶部动作条'
                    }),
                    X = a9({
                        'type': H,
                        'tooltip': '游戏列表'
                    }),
                    Y = a9({
                        'type': K,
                        'tooltip': '游戏房间'
                    }),
                    Z = a9({
                        'type': F,
                        'tooltip': '底部动作条'
                    }),
                    a0 = a9({
                        'type': C,
                        'tooltip': '背景图'
                    }),
                    V((a3 = k((a2 = function (aa) {
                        function ab() {
                            for (var ad, ae = arguments['length'], af = new Array(ae), ag = 0x0; ag < ae; ag++)
                                af[ag] = arguments[ag];
                            return ad = aa['call']['apply'](aa, [this]['concat'](af)) || this,
                                v(ad, 'top', a3, x(ad)),
                                v(ad, 'gameList', a4, x(ad)),
                                v(ad, 'gameRooms', a5, x(ad)),
                                v(ad, 'bottom', a6, x(ad)),
                                v(ad, 'lobbyBg', a7, x(ad)),
                                ad;
                        }
                        q(ab, aa);
                        var ac = ab['prototype'];
                        return ac['onInit'] = function () {
                            this['top']['Init'](E['modID']['top'], this['messager']),
                                this['gameList']['Init'](E['modID']['gameList'], this['messager']),
                                this['gameRooms']['Init'](E['modID']['gameRooms'], this['messager']),
                                this['bottom']['Init'](E['modID']['bottom'], this['messager']),
                                O['gui']['open'](Q['matchLoading'], null, {
                                    'onAdded': function (ad, ae) {
                                        ad && (ad['active'] = !0x1),
                                            P['matchLoading'] = ad['getComponent'](R);
                                    }
                                });
                        }
                            ,
                            ac['refresh'] = function (ad) {
                                void 0x0 === ad && (ad = !0x0),
                                    this['top']['refresh'](),
                                    ad && this['gameList']['refresh'](!0x0),
                                    this['bottom']['refresh']();
                            }
                            ,
                            ac['onShow'] = function () {
                                var ad = this;
                                aa['prototype']['onShow']['call'](this),
                                    M['StringIsNullOrEmpty'](N['lobbyBgUrl']) || O['res']['loadRemote'](N['lobbyBgUrl'], D, function (ae, af) {
                                        ae ? P['log']['logBusiness']('\x20load\x20lobbyBgUrl\x20error:\x20' + N['lobbyBgUrl']) : ad['lobbyBg'] && (ad['lobbyBg']['spriteFrame'] = M['transImageAsset2SpriteFrame'](af));
                                    });
                            }
                            ,
                            z(ab, [{
                                'key': 'Top',
                                'get': function () {
                                    return this['top'];
                                }
                            }, {
                                'key': 'GameList',
                                'get': function () {
                                    return this['gameList'];
                                }
                            }, {
                                'key': 'GameRooms',
                                'get': function () {
                                    return this['gameRooms'];
                                }
                            }, {
                                'key': 'Bottom',
                                'get': function () {
                                    return this['bottom'];
                                }
                            }]),
                            ab;
                    }(J))['prototype'], 'top', [W], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        a4 = k(a2['prototype'], 'gameList', [X], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a5 = k(a2['prototype'], 'gameRooms', [Y], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a6 = k(a2['prototype'], 'bottom', [Z], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a7 = k(a2['prototype'], 'lobbyBg', [a0], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a1 = a2)) || a1)),
                    A['_RF']['pop']();
            }
        };
    }),
    System['register']('chunks:///_virtual/viewLogin.ts', ['./rollupPluginModLoBabelHelpers.js', 'cc', './baseView.ts', './utils.ts', './panelLogin.ts', './panelVerify.ts', './panelRegist.ts', './panelFindPsw.ts', './lobbyState.ts', './webGame.ts', './Oops.ts', './platformData.ts', './NativeFun.ts', './VersionManager.ts', './appConfig.ts'], function (j) {
        var k, q, x, z, A, C, D, E, G, H, I, J, K, M, N, O, P, Q, T, U, V, W, X, Y, Z;
        return {
            'setters': [function (a0) {
                k = a0['applyDecoratedDescriptor'],
                    q = a0['inheritsLoose'],
                    x = a0['initializerDefineProperty'],
                    z = a0['assertThisInitialized'],
                    A = a0['createClass'];
            }
                , function (a0) {
                    C = a0['cclegacy'],
                        D = a0['_decorator'],
                        E = a0['Sprite'],
                        G = a0['Button'],
                        H = a0['Label'],
                        I = a0['sys'],
                        J = a0['ImageAsset'];
                }
                , function (a0) {
                    K = a0['baseView'];
                }
                , function (a0) {
                    M = a0['utils'];
                }
                , function (a0) {
                    N = a0['panelLogin'];
                }
                , function (a0) {
                    O = a0['panelVerify'];
                }
                , function (a0) {
                    P = a0['panelRegist'];
                }
                , function (a0) {
                    Q = a0['panelFindPsw'];
                }
                , function (a0) {
                    T = a0['lobbyState'];
                }
                , function (a0) {
                    U = a0['webGame'];
                }
                , function (a0) {
                    V = a0['oops'];
                }
                , function (a0) {
                    W = a0['PModuleID'];
                }
                , function (a0) {
                    X = a0['NativeFun'];
                }
                , function (a0) {
                    Y = a0['VersionManager'];
                }
                , function (a0) {
                    Z = a0['appConfig'];
                }
            ],
            'execute': function () {
                var a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai;
                C['_RF']['push']({}, 'e4081xrVvlGkohnISYOOm7Y', 'viewLogin', void 0x0);
                var aj = D['ccclass']
                    , ak = D['property'];
                j('viewLogin', (a0 = aj('viewLogin'),
                    a1 = ak({
                        'type': E,
                        'tooltip': '背景图'
                    }),
                    a2 = ak({
                        'type': G,
                        'tooltip': '客服按钮'
                    }),
                    a3 = ak({
                        'type': N,
                        'tooltip': '登录面板'
                    }),
                    a4 = ak({
                        'type': H,
                        'tooltip': '版本信息'
                    }),
                    a5 = ak({
                        'type': E,
                        'tooltip': 'Logo\x20图'
                    }),
                    a6 = ak({
                        'type': P,
                        'tooltip': '注册面板'
                    }),
                    a7 = ak({
                        'type': Q,
                        'tooltip': '找回密码面板'
                    }),
                    a8 = ak({
                        'type': O,
                        'tooltip': '账号安全面板'
                    }),
                    a0((ab = k((aa = function (al) {
                        function am() {
                            for (var ao, ap = arguments['length'], aq = new Array(ap), ar = 0x0; ar < ap; ar++)
                                aq[ar] = arguments[ar];
                            return ao = al['call']['apply'](al, [this]['concat'](aq)) || this,
                                x(ao, 'nodeBg', ab, z(ao)),
                                x(ao, 'btnService', ac, z(ao)),
                                x(ao, 'panelLogin', ad, z(ao)),
                                x(ao, 'lb_version', ae, z(ao)),
                                x(ao, 'sp_Logo', af, z(ao)),
                                x(ao, 'panelRegist', ag, z(ao)),
                                x(ao, 'panelFindPsw', ah, z(ao)),
                                x(ao, 'panelAccountSafe', ai, z(ao)),
                                ao;
                        }
                        q(am, al);
                        var an = am['prototype'];
                        return an['start'] = function () {
                            M['ButtonBindClick'](this['btnService'], this['onClickService'], this),
                                V['res']['load'](W['lobby']['toString'](), ['prefab/lobbySetting', 'prefab/message']);
                        }
                            ,
                            an['onShow'] = function () {
                                var ao = this;
                                al['prototype']['onShow']['call'](this),
                                    I['isNative'] ? this['lb_version']['string'] = X['getAppVersion']() + '(' + Y['Instance']['getLocalVersion']() + ')' : I['isBrowser'] && (this['lb_version']['string'] = 'Verison:' + Z['assetsVersion']),
                                    M['StringIsNullOrEmpty'](Z['loginBgUrl']) || V['res']['loadRemote'](Z['loginBgUrl'], J, function (ap, aq) {
                                        ap ? U['log']['logBusiness']('\x20load\x20loginBgUrl\x20error:\x20' + Z['loginBgUrl']) : ao['nodeBg'] && (ao['nodeBg']['spriteFrame'] = M['transImageAsset2SpriteFrame'](aq));
                                    });
                            }
                            ,
                            an['onAdded'] = function (ao) {
                                var ap = this
                                    , aq = Z['loginLogoUrl'];
                                M['StringIsNullOrEmpty'](aq) || V['res']['loadRemote'](aq, J, function (ar, as) {
                                    ar ? U['log']['logBusiness']('add2main\x20load\x20icon\x20error:\x20' + ar) : ap['sp_Logo']['spriteFrame'] = M['transImageAsset2SpriteFrame'](as);
                                });
                            }
                            ,
                            an['onClickService'] = function () {
                                var ao = T['Instance']['Server']['loginServiceUrl'];
                                M['StringIsNullOrEmpty'](ao) ? U['log']['logView']('loginMain-onOpenTeamService:loginServiceUrl\x20is\x20null') : I['openURL'](ao);
                            }
                            ,
                            an['refresh'] = function () {
                                this['panelLogin']['show'](),
                                    this['panelLogin']['refresh'](),
                                    this['panelRegist']['close'](),
                                    this['panelFindPsw']['close'](),
                                    this['panelAccountSafe']['close']();
                            }
                            ,
                            A(am, [{
                                'key': 'Login',
                                'get': function () {
                                    return this['panelLogin'];
                                }
                            }, {
                                'key': 'Regist',
                                'get': function () {
                                    return this['panelRegist'];
                                }
                            }, {
                                'key': 'FindPsw',
                                'get': function () {
                                    return this['panelFindPsw'];
                                }
                            }, {
                                'key': 'AccountSafe',
                                'get': function () {
                                    return this['panelAccountSafe'];
                                }
                            }]),
                            am;
                    }(K))['prototype'], 'nodeBg', [a1], {
                        'configurable': !0x0,
                        'enumerable': !0x0,
                        'writable': !0x0,
                        'initializer': function () {
                            return null;
                        }
                    }),
                        ac = k(aa['prototype'], 'btnService', [a2], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ad = k(aa['prototype'], 'panelLogin', [a3], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ae = k(aa['prototype'], 'lb_version', [a4], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        af = k(aa['prototype'], 'sp_Logo', [a5], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ag = k(aa['prototype'], 'panelRegist', [a6], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ah = k(aa['prototype'], 'panelFindPsw', [a7], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        ai = k(aa['prototype'], 'panelAccountSafe', [a8], {
                            'configurable': !0x0,
                            'enumerable': !0x0,
                            'writable': !0x0,
                            'initializer': function () {
                                return null;
                            }
                        }),
                        a9 = aa)) || a9)),
                    C['_RF']['pop']();
            }
        };
    }),
    function (a) {
        a('virtual:///prerequisite-imports/102', 'chunks:///_virtual/102');
    }(function (a, b) {
        System['register'](a, [b], function (c, d) {
            return {
                'setters': [function (e) {
                    var f = {};
                    for (var g in e) {
                        if (g !== 'default' && g !== '__esModule')
                            f[g] = e[g];
                    }
                    c(f);
                }
                ],
                'execute': function () { }
            };
        });
    });
