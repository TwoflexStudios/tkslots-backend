export const Server2ClientCommands = {
    "user-logged": {
        'name': '',
        'mainID': -1,
        'aID': -1,
        'pak': '',
        'file': '',
        'command': -1
    },
    "connectVerified": {
        "name": "s2c_heart",
        "mainID": 1,
        "aID": 1,
        "file": "",
        "pak": "",
        "command": 100011,
        "listen": "CMD:1:1"
    },
    "s2c_heart": {
        "name": "s2c_heart",
        "mainID": 1,
        "aID": 1,
        "file": "",
        "pak": "",
        "command": 100011,
        "listen": "CMD:1:1"
    },
    "s2c_g_login_ok": {
        "name": "s2c_g_login_ok",
        "mainID": 100,
        "aID": 2,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_room_logon_result",
        "command": 10000021,
        "listen": "CMD:100:2"
    },
    "s2c_g_login_err": {
        "name": "s2c_g_login_err",
        "mainID": 100,
        "aID": 3,
        "file": "pb_game_manage",
        "pak": "",
        "command": 10000031,
        "listen": "CMD:100:3"
    },
    "s2c_g_login_finish": {
        "name": "s2c_g_login_finish",
        "mainID": 100,
        "aID": 4,
        "file": "pb_game_manage",
        "pak": "",
        "command": 10000041,
        "listen": "CMD:100:4"
    },
    "s2c_g_logout_rep": {
        "name": "s2c_g_logout_rep",
        "mainID": 100,
        "aID": 22,
        "file": "pb_cmd",
        "pak": "",
        "command": 10000221,
        "listen": "CMD:100:22"
    },
    "s2c_session_verify": {
        "name": "s2c_session_verify",
        "mainID": 100,
        "aID": 102,
        "file": "pb_user",
        "pak": "pb_user.sc_user_login_hall",
        "command": 10001021,
        "listen": "CMD:100:102"
    },
    "notify_kick_out": {
        "name": "notify_kick_out",
        "mainID": 101,
        "aID": 1,
        "file": "pb_game",
        "pak": "",
        "command": 10100011,
        "listen": "CMD:101:1"
    },
    "notify_user_info_update": {
        "name": "notify_user_info_update",
        "mainID": 101,
        "aID": 2,
        "file": "pb_user",
        "pak": "pb_user.notify_userinfo_update",
        "command": 10100021,
        "listen": "CMD:101:2"
    },
    "notify_recharge_info": {
        "name": "notify_recharge_info",
        "mainID": 101,
        "aID": 3,
        "file": "pb_user",
        "pak": "pb_user.notify_user_recharge_result_info",
        "command": 10100031,
        "listen": "CMD:101:3"
    },
    "s2c_up": {
        "name": "s2c_up",
        "mainID": 102,
        "aID": 1,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_other_userSit",
        "command": 10200011,
        "listen": "CMD:102:1"
    },
    "s2c_sit": {
        "name": "s2c_sit",
        "mainID": 102,
        "aID": 2,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_other_userSit",
        "command": 10200021,
        "listen": "CMD:102:2"
    },
    "s2c_g_player_in": {
        "name": "s2c_g_player_in",
        "mainID": 102,
        "aID": 5,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_user_info",
        "command": 10200051,
        "listen": "CMD:102:5"
    },
    "s2c_g_player_out": {
        "name": "s2c_g_player_out",
        "mainID": 102,
        "aID": 6,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_other_userSit",
        "command": 10200061,
        "listen": "CMD:102:6"
    },
    "s2c_g_player_off": {
        "name": "s2c_g_player_off",
        "mainID": 102,
        "aID": 7,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_other_userCut",
        "command": 10200071,
        "listen": "CMD:102:7"
    },
    "s2c_sit_err": {
        "name": "s2c_sit_err",
        "mainID": 102,
        "aID": 8,
        "file": "pb_game_manage",
        "pak": "",
        "command": 10200081,
        "listen": "CMD:102:8"
    },
    "s2c_change_table": {
        "name": "s2c_change_table",
        "mainID": 102,
        "aID": 28,
        "file": "pb_game_manage",
        "pak": "",
        "command": 10200281,
        "listen": "CMD:102:28"
    },
    "s2c_g_exit": {
        "name": "s2c_g_exit",
        "mainID": 102,
        "aID": 31,
        "file": "pb_cmd",
        "pak": "",
        "command": 10200311,
        "listen": "CMD:102:31"
    },
    "s2c_up_err": {
        "name": "s2c_up_err",
        "mainID": 102,
        "aID": 35,
        "file": "pb_game_manage",
        "pak": "",
        "command": 10200351,
        "listen": "CMD:102:35"
    },
    "s2c_table_player": {
        "name": "s2c_table_player",
        "mainID": 102,
        "aID": 36,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_desk_players",
        "command": 10200361,
        "listen": "CMD:102:36"
    },
    "s2c_g_base": {
        "name": "s2c_g_base",
        "mainID": 150,
        "aID": 1,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_game_info",
        "command": 15000011,
        "listen": "CMD:150:1"
    },
    "s2c_jp": {
        "name": "s2c_jp",
        "mainID": 150,
        "aID": 3,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_game_jackpot",
        "command": 15000031,
        "listen": "CMD:150:3"
    },
    "s2c_notice": {
        "name": "s2c_notice",
        "mainID": 150,
        "aID": 4,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_game_win_score_notice_msg",
        "command": 15000041,
        "listen": "CMD:150:4"
    },
    "s2c_bet_list": {
        "name": "s2c_bet_list",
        "mainID": 150,
        "aID": 5,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_game_grade_info",
        "command": 15000051,
        "listen": "CMD:150:5"
    },
    "s2c_change_bet": {
        "name": "s2c_change_bet",
        "mainID": 150,
        "aID": 7,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_game_switch_bet",
        "command": 15000071,
        "listen": "CMD:150:7"
    },
    "s2c_profile_update": {
        "name": "s2c_profile_update",
        "mainID": 150,
        "aID": 8,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_userinfo_update",
        "command": 15000081,
        "listen": "CMD:150:8"
    },
    "s2c_winner": {
        "name": "s2c_winner",
        "mainID": 150,
        "aID": 10,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_jackpot_winner_list",
        "command": 15000101,
        "listen": "CMD:150:10"
    },
    "s2c_forbid": {
        "name": "s2c_forbid",
        "mainID": 150,
        "aID": 11,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_bet_forbid_msg",
        "command": 15000111,
        "listen": "CMD:150:11"
    },
    "s2c_kick_warn": {
        "name": "s2c_kick_warn",
        "mainID": 150,
        "aID": 12,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_kick_warn_msg",
        "command": 15000121,
        "listen": "CMD:150:12"
    },
    "s2c_g_charge": {
        "name": "s2c_g_charge",
        "mainID": 150,
        "aID": 13,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.notify_user_recharge_result_info",
        "command": 15000131,
        "listen": "CMD:150:13"
    },
    "notify_notice": {
        "name": "notify_notice",
        "mainID": 150,
        "aID": 15,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.sc_notice_marquee",
        "command": 15000151,
        "listen": "CMD:150:15"
    },
    "s2c_table_info": {
        "name": "s2c_table_info",
        "mainID": 150,
        "aID": 16,
        "file": "",
        "pak": "",
        "command": 15000161,
        "listen": "CMD:150:16"
    },
    "s2c_modify_nickname": {
        "name": "s2c_modify_nickname",
        "mainID": 151,
        "aID": 101,
        "file": "pb_lobby_personal",
        "pak": "pb_lobby_personal.cs_modify_nikename_msg",
        "command": 15101011,
        "listen": "CMD:151:101"
    },
    "s2c_modify_head": {
        "name": "s2c_modify_head",
        "mainID": 151,
        "aID": 102,
        "file": "pb_lobby_personal",
        "pak": "pb_lobby_personal.cs_modify_logo_msg",
        "command": 15101021,
        "listen": "CMD:151:102"
    },
    "s2c_profile_base_info": {
        "name": "s2c_profile_base_info",
        "mainID": 151,
        "aID": 104,
        "file": "pb_lobby_personal",
        "pak": "pb_lobby_personal.sc_base_info",
        "command": 15101041,
        "listen": "CMD:151:104"
    },
    "s2c_signin_info": {
        "name": "s2c_signin_info",
        "mainID": 152,
        "aID": 101,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.sc_signin_list",
        "command": 15201011,
        "listen": "CMD:152:101"
    },
    "s2c_signin_signin": {
        "name": "s2c_signin_signin",
        "mainID": 152,
        "aID": 102,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.sc_sigin_result",
        "command": 15201021,
        "listen": "CMD:152:102"
    },
    "s2c_signin_info_28": {
        "name": "s2c_signin_info_28",
        "mainID": 152,
        "aID": 103,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.sc_signin_base",
        "command": 15201031,
        "listen": "CMD:152:103"
    },
    "s2c_signin_signin_28": {
        "name": "s2c_signin_signin_28",
        "mainID": 152,
        "aID": 104,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.sc_signin_result_ex",
        "command": 15201041,
        "listen": "CMD:152:104"
    },
    "s2c_signin_week_award": {
        "name": "s2c_signin_week_award",
        "mainID": 152,
        "aID": 105,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.sc_week_reward",
        "command": 15201051,
        "listen": "CMD:152:105"
    },
    "s2c_goods_list": {
        "name": "s2c_goods_list",
        "mainID": 153,
        "aID": 102,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_payitem_list",
        "command": 15301021,
        "listen": "CMD:153:102"
    },
    "s2c_buy_goods": {
        "name": "s2c_buy_goods",
        "mainID": 153,
        "aID": 104,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_pay_item",
        "command": 15301041,
        "listen": "CMD:153:104"
    },
    "s2c_notify_goods": {
        "name": "s2c_notify_goods",
        "mainID": 153,
        "aID": 105,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.notify_falsh_sale",
        "command": 15301051,
        "listen": "CMD:153:105"
    },
    "s2c_custom_charge_ask": {
        "name": "s2c_custom_charge_ask",
        "mainID": 153,
        "aID": 107,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_charge_for_coin",
        "command": 15301071,
        "listen": "CMD:153:107"
    },
    "s2c_custom_charge_buy": {
        "name": "s2c_custom_charge_buy",
        "mainID": 153,
        "aID": 109,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_charge_buy_coin",
        "command": 15301091,
        "listen": "CMD:153:109"
    },
    "s2c_charge_record": {
        "name": "s2c_charge_record",
        "mainID": 153,
        "aID": 111,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_charge_histroy",
        "command": 15301111,
        "listen": "CMD:153:111"
    },
    "s2c_first_charge_get": {
        "name": "s2c_first_charge_get",
        "mainID": 153,
        "aID": 113,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_get_first_gift",
        "command": 15301131,
        "listen": "CMD:153:113"
    },
    "s2c_goods_channel": {
        "name": "s2c_goods_channel",
        "mainID": 153,
        "aID": 115,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_payitem_base_info_msg",
        "command": 15301151,
        "listen": "CMD:153:115"
    },
    "s2c_multi_first_gist": {
        "name": "s2c_multi_first_gist",
        "mainID": 153,
        "aID": 116,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_first_gift_info_msg",
        "command": 15301161,
        "listen": "CMD:153:116"
    },
    "s2c_second_charge": {
        "name": "s2c_second_charge",
        "mainID": 153,
        "aID": 117,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_first_gift_info_msg",
        "command": 15301171,
        "listen": "CMD:153:117"
    },
    "s2c_second_charge_get": {
        "name": "s2c_second_charge_get",
        "mainID": 153,
        "aID": 118,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.sc_get_first_gift",
        "command": 15301181,
        "listen": "CMD:153:118"
    },
    "s2c_custom_service_info": {
        "name": "s2c_custom_service_info",
        "mainID": 154,
        "aID": 101,
        "file": "pb_lobby_support",
        "pak": "pb_lobby_support.sc_support",
        "command": 15401011,
        "listen": "CMD:154:101"
    },
    "s2c_verify_password": {
        "name": "s2c_verify_password",
        "mainID": 155,
        "aID": 101,
        "file": "pb_lobby_safebox",
        "pak": "",
        "command": 15501011,
        "listen": "CMD:155:101"
    },
    "s2c_safebox_base_info": {
        "name": "s2c_safebox_base_info",
        "mainID": 155,
        "aID": 102,
        "file": "pb_lobby_safebox",
        "pak": "pb_lobby_safebox.sc_safebox_info",
        "command": 15501021,
        "listen": "CMD:155:102"
    },
    "s2c_safebox_operation": {
        "name": "s2c_safebox_operation",
        "mainID": 155,
        "aID": 103,
        "file": "pb_lobby_safebox",
        "pak": "pb_lobby_safebox.sc_safebox_operation",
        "command": 15501031,
        "listen": "CMD:155:103"
    },
    "s2c_safebox_change_password": {
        "name": "s2c_safebox_change_password",
        "mainID": 155,
        "aID": 104,
        "file": "pb_lobby_safebox",
        "pak": "",
        "command": 15501041,
        "listen": "CMD:155:104"
    },
    "s2c_banner": {
        "name": "s2c_banner",
        "mainID": 200,
        "aID": 1,
        "file": "pb_lobby_activity",
        "pak": "pb_lobby_activity.sc_banner_list",
        "command": 20000011,
        "listen": "CMD:200:1"
    },
    "s2c_activity_list": {
        "name": "s2c_activity_list",
        "mainID": 200,
        "aID": 2,
        "file": "pb_lobby_activity",
        "pak": "pb_lobby_activity.sc_activity_list",
        "command": 20000021,
        "listen": "CMD:200:2"
    },
    "s2c_mail_list": {
        "name": "s2c_mail_list",
        "mainID": 201,
        "aID": 1,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.lobby_mail_list_msg",
        "command": 20100011,
        "listen": "CMD:201:1"
    },
    "s2c_mail_open": {
        "name": "s2c_mail_open",
        "mainID": 201,
        "aID": 2,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.sc_mail_open",
        "command": 20100021,
        "listen": "CMD:201:2"
    },
    "s2c_mail_delete": {
        "name": "s2c_mail_delete",
        "mainID": 201,
        "aID": 3,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.sc_mail_delete",
        "command": 20100031,
        "listen": "CMD:201:3"
    },
    "s2c_mail_get": {
        "name": "s2c_mail_get",
        "mainID": 201,
        "aID": 4,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.sc_mail_getprop",
        "command": 20100041,
        "listen": "CMD:201:4"
    },
    "s2c_mail_sys_ids": {
        "name": "s2c_mail_sys_ids",
        "mainID": 201,
        "aID": 5,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.sc_mail_sysmailid",
        "command": 20100051,
        "listen": "CMD:201:5"
    },
    "s2c_profit_rank": {
        "name": "s2c_profit_rank",
        "mainID": 202,
        "aID": 1,
        "file": "pb_lobby_rank",
        "pak": "pb_lobby_rank.sc_rank_profit",
        "command": 20200011,
        "listen": "CMD:202:1"
    },
    "s2c_lucky_rank": {
        "name": "s2c_lucky_rank",
        "mainID": 202,
        "aID": 2,
        "file": "pb_lobby_rank",
        "pak": "pb_lobby_rank.sc_rank_luck",
        "command": 20200021,
        "listen": "CMD:202:2"
    },
    "s2c_vip_base_info": {
        "name": "s2c_vip_base_info",
        "mainID": 203,
        "aID": 1,
        "file": "pb_lobby_vip",
        "pak": "pb_lobby_vip.sc_vip_rules",
        "command": 20300011,
        "listen": "CMD:203:1"
    },
    "s2c_player_vip_info": {
        "name": "s2c_player_vip_info",
        "mainID": 203,
        "aID": 2,
        "file": "pb_lobby_vip",
        "pak": "pb_lobby_vip.sc_vip_status",
        "command": 20300021,
        "listen": "CMD:203:2"
    },
    "s2c_get_vip_reward": {
        "name": "s2c_get_vip_reward",
        "mainID": 203,
        "aID": 3,
        "file": "pb_lobby_vip",
        "pak": "pb_lobby_vip.sc_get_result",
        "command": 20300031,
        "listen": "CMD:203:3"
    },
    "s2c_server_cfg": {
        "name": "s2c_server_cfg",
        "mainID": 204,
        "aID": 2,
        "file": "pb_config",
        "pak": "pb_config.sc_server_cfg_msg",
        "command": 20400021,
        "listen": "CMD:204:2"
    },
    "notify_big_win": {
        "name": "notify_big_win",
        "mainID": 205,
        "aID": 1,
        "file": "pb_lobby_broadcast",
        "pak": "pb_lobby_broadcast.notify_notice_list_msg",
        "command": 20500011,
        "listen": "CMD:205:1"
    },
    "s2c_jackpot_winner": {
        "name": "s2c_jackpot_winner",
        "mainID": 205,
        "aID": 3,
        "file": "pb_lobby_broadcast",
        "pak": "pb_lobby_broadcast.sc_jackpot_winner_msg",
        "command": 20500031,
        "listen": "CMD:205:3"
    },
    "s2c_red_point": {
        "name": "s2c_red_point",
        "mainID": 205,
        "aID": 4,
        "file": "pb_lobby_broadcast",
        "pak": "pb_lobby_broadcast.sc_red_points",
        "command": 20500041,
        "listen": "CMD:205:4"
    },
    "s2c_lobby_marquee": {
        "name": "s2c_lobby_marquee",
        "mainID": 206,
        "aID": 1,
        "file": "pb_lobby_notice",
        "pak": "pb_lobby_notice.sc_notice_marquee",
        "command": 20600011,
        "listen": "CMD:206:1"
    },
    "s2c_lobby_notice": {
        "name": "s2c_lobby_notice",
        "mainID": 206,
        "aID": 2,
        "file": "pb_lobby_notice",
        "pak": "pb_lobby_notice.sc_notice_window",
        "command": 20600021,
        "listen": "CMD:206:2"
    },
    "s2c_order_histroy": {
        "name": "s2c_order_histroy",
        "mainID": 207,
        "aID": 8,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.sc_bank_withdraw_history",
        "command": 20700081,
        "listen": "CMD:207:8"
    },
    "s2c_card_bind_info": {
        "name": "s2c_card_bind_info",
        "mainID": 207,
        "aID": 102,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.sc_bank_card_info_msg",
        "command": 20701021,
        "listen": "CMD:207:102"
    },
    "s2c_card_bind": {
        "name": "s2c_card_bind",
        "mainID": 207,
        "aID": 104,
        "file": "pb_lobby_withdraw",
        "pak": "",
        "command": 20701041,
        "listen": "CMD:207:104"
    },
    "s2c_order_submit": {
        "name": "s2c_order_submit",
        "mainID": 207,
        "aID": 106,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.sc_bank_card_withdraw_msg",
        "command": 20701061,
        "listen": "CMD:207:106"
    },
    "s2c_online_account": {
        "name": "s2c_online_account",
        "mainID": 207,
        "aID": 108,
        "file": "pb_lobby_withdraw",
        "pak": "",
        "command": 20701081,
        "listen": "CMD:207:108"
    },
    "s2c_roulette_base_info": {
        "name": "s2c_roulette_base_info",
        "mainID": 208,
        "aID": 1,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.roulette_base",
        "command": 20800011,
        "listen": "CMD:208:1"
    },
    "s2c_roulette_go": {
        "name": "s2c_roulette_go",
        "mainID": 208,
        "aID": 2,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.sc_roulette_spin",
        "command": 20800021,
        "listen": "CMD:208:2"
    },
    "s2c_roulette_history": {
        "name": "s2c_roulette_history",
        "mainID": 208,
        "aID": 3,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.sc_roulette_record",
        "command": 20800031,
        "listen": "CMD:208:3"
    },
    "s2c_benefits_base_info": {
        "name": "s2c_benefits_base_info",
        "mainID": 208,
        "aID": 4,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.sc_benefits_base",
        "command": 20800041,
        "listen": "CMD:208:4"
    },
    "s2c_benefits_get": {
        "name": "s2c_benefits_get",
        "mainID": 208,
        "aID": 5,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.sc_get_benefits",
        "command": 20800051,
        "listen": "CMD:208:5"
    },
    "s2c_share_base_info": {
        "name": "s2c_share_base_info",
        "mainID": 210,
        "aID": 2,
        "file": "pb_share",
        "pak": "pb_share.sc_share_info_msg",
        "command": 21000021,
        "listen": "CMD:210:2"
    },
    "s2c_share_player_list": {
        "name": "s2c_share_player_list",
        "mainID": 210,
        "aID": 4,
        "file": "pb_share",
        "pak": "pb_share.sc_share_sub_info_msg",
        "command": 21000041,
        "listen": "CMD:210:4"
    },
    "s2c_share_reward_histroy": {
        "name": "s2c_share_reward_histroy",
        "mainID": 210,
        "aID": 6,
        "file": "pb_share",
        "pak": "pb_share.sc_share_receive_history_msg",
        "command": 21000061,
        "listen": "CMD:210:6"
    },
    "s2c_share_reward_rank": {
        "name": "s2c_share_reward_rank",
        "mainID": 210,
        "aID": 8,
        "file": "pb_share",
        "pak": "pb_share.sc_share_rank_msg",
        "command": 21000081,
        "listen": "CMD:210:8"
    },
    "s2c_share_reward": {
        "name": "s2c_share_reward",
        "mainID": 210,
        "aID": 10,
        "file": "pb_share",
        "pak": "pb_share.sc_receive_reward_msg",
        "command": 21000101,
        "listen": "CMD:210:10"
    },
    "s2c_share_player_query": {
        "name": "s2c_share_player_query",
        "mainID": 210,
        "aID": 12,
        "file": "pb_share",
        "pak": "pb_share.sc_query_sub_info_by_id_msg",
        "command": 21000121,
        "listen": "CMD:210:12"
    },
    "s2c_share_activity_info": {
        "name": "s2c_share_activity_info",
        "mainID": 210,
        "aID": 13,
        "file": "pb_share",
        "pak": "pb_share.sc_query_share_gift",
        "command": 21000131,
        "listen": "CMD:210:13"
    },
    "s2c_share_activity_reward": {
        "name": "s2c_share_activity_reward",
        "mainID": 210,
        "aID": 14,
        "file": "pb_share",
        "pak": "pb_share.sc_get_share_gift",
        "command": 21000141,
        "listen": "CMD:210:14"
    },
    "notify_redpacket_entry": {
        "name": "notify_redpacket_entry",
        "mainID": 300,
        "aID": 1,
        "file": "pb_lobby_redpacket",
        "pak": "pb_lobby_redpacket.sc_showbefore_msg",
        "command": 30000011,
        "listen": "CMD:300:1"
    },
    "s2c_redpacket_start": {
        "name": "s2c_redpacket_start",
        "mainID": 300,
        "aID": 2,
        "file": "pb_lobby_redpacket",
        "pak": "pb_lobby_redpacket.sc_redpacket",
        "command": 30000021,
        "listen": "CMD:300:2"
    },
    "s2c_redpacket_result": {
        "name": "s2c_redpacket_result",
        "mainID": 300,
        "aID": 3,
        "file": "pb_lobby_redpacket",
        "pak": "pb_lobby_redpacket.sc_redpacket_over",
        "command": 30000031,
        "listen": "CMD:300:3"
    },
    "s2c_redpacket_sync": {
        "name": "s2c_redpacket_sync",
        "mainID": 300,
        "aID": 4,
        "file": "pb_lobby_redpacket",
        "pak": "pb_lobby_redpacket.sc_showbefore_msg",
        "command": 30000041,
        "listen": "CMD:300:4"
    },
    "s2c_stage_show": {
        "name": "s2c_stage_show",
        "mainID": 301,
        "aID": 1,
        "file": "pb_lobby_stagedrechagre",
        "pak": "",
        "command": 30100011,
        "listen": "CMD:301:1"
    },
    "s2c_stage_get": {
        "name": "s2c_stage_get",
        "mainID": 301,
        "aID": 2,
        "file": "pb_lobby_stagedrechagre",
        "pak": "pb_lobby_stagedrechagre.sc_stagedrechagre_get",
        "command": 30100021,
        "listen": "CMD:301:2"
    },
    "s2c_stage_getinfo": {
        "name": "s2c_stage_getinfo",
        "mainID": 301,
        "aID": 3,
        "file": "pb_lobby_stagedrechagre",
        "pak": "pb_lobby_stagedrechagre.sc_showbefore_msg",
        "command": 30100031,
        "listen": "CMD:301:3"
    },
    "s2c_freecash_notify": {
        "name": "s2c_freecash_notify",
        "mainID": 302,
        "aID": 1,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_showbefore_msg",
        "command": 30200011,
        "listen": "CMD:302:1"
    },
    "s2c_freecash_info": {
        "name": "s2c_freecash_info",
        "mainID": 302,
        "aID": 2,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_getfree_msg",
        "command": 30200021,
        "listen": "CMD:302:2"
    },
    "s2c_freecash_spin": {
        "name": "s2c_freecash_spin",
        "mainID": 302,
        "aID": 3,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_rota_msg",
        "command": 30200031,
        "listen": "CMD:302:3"
    },
    "s2c_freecash_selfrecord": {
        "name": "s2c_freecash_selfrecord",
        "mainID": 302,
        "aID": 4,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_my_recode_msg",
        "command": 30200041,
        "listen": "CMD:302:4"
    },
    "s2c_freecash_getmoney": {
        "name": "s2c_freecash_getmoney",
        "mainID": 302,
        "aID": 5,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_get_all_money_msg",
        "command": 30200051,
        "listen": "CMD:302:5"
    },
    "s2c_freecash_newhelp": {
        "name": "s2c_freecash_newhelp",
        "mainID": 302,
        "aID": 6,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_new_help_msg",
        "command": 30200061,
        "listen": "CMD:302:6"
    },
    "s2c_freecash_cashrecord": {
        "name": "s2c_freecash_cashrecord",
        "mainID": 302,
        "aID": 7,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_get_my_money_recode_msg",
        "command": 30200071,
        "listen": "CMD:302:7"
    },
    "s2c_freecash_getphone": {
        "name": "s2c_freecash_getphone",
        "mainID": 302,
        "aID": 8,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.sc_get_sharephone",
        "command": 30200081,
        "listen": "CMD:302:8"
    },
    "notify_session_overdue": {
        "name": "notify_session_overdue",
        "mainID": 1000,
        "aID": 101,
        "file": "pb_game",
        "pak": "",
        "command": 100001011,
        "listen": "CMD:1000:101"
    },
    "s2c_lobby_login": {
        "name": "s2c_lobby_login",
        "mainID": 1000,
        "aID": 1002,
        "file": "pb_user",
        "pak": "pb_user.sc_user_login_hall",
        "command": 100010021,
        "listen": "CMD:1000:1002"
    },
    "s2c_game_list": {
        "name": "s2c_game_list",
        "mainID": 2000,
        "aID": 2001,
        "file": "pb_game",
        "pak": "pb_game.sc_game_list",
        "command": 200020011,
        "listen": "CMD:2000:2001"
    },
    "s2c_hall_enter": {
        "name": "s2c_hall_enter",
        "mainID": 2000,
        "aID": 2002,
        "file": "pb_game",
        "pak": "",
        "command": 200020021,
        "listen": "CMD:2000:2002"
    },
    "s2c_game_room": {
        "name": "s2c_game_room",
        "mainID": 2000,
        "aID": 2003,
        "file": "pb_game",
        "pak": "pb_game.sc_gameroom_list",
        "command": 200020031,
        "listen": "CMD:2000:2003"
    },
    "s2c_enter_room": {
        "name": "s2c_enter_room",
        "mainID": 2000,
        "aID": 2004,
        "file": "pb_game",
        "pak": "pb_game.sc_askenterroom",
        "command": 200020041,
        "listen": "CMD:2000:2004"
    },
    "s2c_game_list_jackpot": {
        "name": "s2c_game_list_jackpot",
        "mainID": 2000,
        "aID": 2006,
        "file": "pb_game",
        "pak": "pb_game.notify_game_jackport",
        "command": 200020061,
        "listen": "CMD:2000:2006"
    },
    "s2c_game_enter": {
        "name": "s2c_game_enter",
        "mainID": 2000,
        "aID": 2007,
        "file": "pb_game",
        "pak": "pb_game.notify_need_enter_game",
        "command": 200020071,
        "listen": "CMD:2000:2007"
    }
}

export const Client2ServerCommands = {
    "c2s_ass_update_card_info": {
        'name': 'c2s_ass_update_card_info',
        'mainID': 0xcf,
        'aID': 0x6f,
        'pak': 'pb_lobby_withdraw.cs_update_card_info',
        'file': 'pb_lobby_withdraw',
        'command': 0
    },
    "c2s_heart": {
        "name": "c2s_heart",
        "mainID": 1,
        "aID": 1,
        "file": "",
        "pak": "",
        "command": 0,
        "listen": "CMD:1:1"
    },
    "c2s_g_login": {
        "name": "c2s_g_login",
        "mainID": 100,
        "aID": 5,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.cs_room_logon",
        "command": 10000050,
        "listen": "CMD:100:5"
    },
    "c2s_session_verify": {
        "name": "c2s_session_verify",
        "mainID": 100,
        "aID": 102,
        "file": "pb_user",
        "pak": "pb_user.cs_user_session_login",
        "command": 10001020,
        "listen": "CMD:100:102"
    },
    "c2s_g_exit": {
        "name": "c2s_g_exit",
        "mainID": 102,
        "aID": 1,
        "file": "pb_cmd",
        "pak": "",
        "command": 10200010,
        "listen": "CMD:102:1"
    },
    "c2s_sit": {
        "name": "c2s_sit",
        "mainID": 102,
        "aID": 2,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.cs_user_sitDesk",
        "command": 10200020,
        "listen": "CMD:102:2"
    },
    "c2s_auto_sit": {
        "name": "c2s_auto_sit",
        "mainID": 102,
        "aID": 27,
        "file": "pb_cmd",
        "pak": "",
        "command": 10200270,
        "listen": "CMD:102:27"
    },
    "c2s_change_table": {
        "name": "c2s_change_table",
        "mainID": 102,
        "aID": 28,
        "file": "pb_cmd",
        "pak": "",
        "command": 10200280,
        "listen": "CMD:102:28"
    },
    // "c2s_g_exit": {
    //     "name": "c2s_g_exit",
    //     "mainID": 102,
    //     "aID": 31,
    //     "file": "pb_cmd",
    //     "pak": "",
    //     "command": 10200310,
    //     "listen": "CMD:102:31"
    // },
    "c2s_change_bet": {
        "name": "c2s_change_bet",
        "mainID": 150,
        "aID": 6,
        "file": "pb_game_manage",
        "pak": "pb_game_manage.cs_game_switch_bet",
        "command": 15000060,
        "listen": "CMD:150:6"
    },
    "c2s_winner": {
        "name": "c2s_winner",
        "mainID": 150,
        "aID": 9,
        "file": "pb_cmd",
        "pak": "",
        "command": 15000090,
        "listen": "CMD:150:9"
    },
    "c2s_table_player": {
        "name": "c2s_table_player",
        "mainID": 150,
        "aID": 14,
        "file": "pb_cmd",
        "pak": "",
        "command": 15000140,
        "listen": "CMD:150:14"
    },
    "c2s_modify_nickname": {
        "name": "c2s_modify_nickname",
        "mainID": 151,
        "aID": 101,
        "file": "pb_lobby_personal",
        "pak": "pb_lobby_personal.cs_modify_nikename_msg",
        "command": 15101010,
        "listen": "CMD:151:101"
    },
    "c2s_modify_head": {
        "name": "c2s_modify_head",
        "mainID": 151,
        "aID": 102,
        "file": "pb_lobby_personal",
        "pak": "pb_lobby_personal.cs_modify_logo_msg",
        "command": 15101020,
        "listen": "CMD:151:102"
    },
    "connectVerify": {
        "name": "connectVerify",
        "mainID": 0x1,
        "aID": 0x3,
        "file": "",
        "pak": "",
        "command": 0,
        "listen": "CMD:0:0"
    },
    "c2s_profile_base_info": {
        "name": "c2s_profile_base_info",
        "mainID": 151,
        "aID": 103,
        "file": "pb_lobby_personal",
        "pak": "",
        "command": 15101030,
        "listen": "CMD:151:103"
    },
    "c2s_signin_info": {
        "name": "c2s_signin_info",
        "mainID": 152,
        "aID": 101,
        "file": "pb_lobby_signin",
        "pak": "",
        "command": 15201010,
        "listen": "CMD:152:101"
    },
    "c2s_signin_signin": {
        "name": "c2s_signin_signin",
        "mainID": 152,
        "aID": 102,
        "file": "pb_lobby_signin",
        "pak": "",
        "command": 15201020,
        "listen": "CMD:152:102"
    },
    "c2s_signin_info_28": {
        "name": "c2s_signin_info_28",
        "mainID": 152,
        "aID": 103,
        "file": "pb_lobby_signin",
        "pak": "",
        "command": 15201030,
        "listen": "CMD:152:103"
    },
    "c2s_signin_signin_28": {
        "name": "c2s_signin_signin_28",
        "mainID": 152,
        "aID": 104,
        "file": "pb_lobby_signin",
        "pak": "",
        "command": 15201040,
        "listen": "CMD:152:104"
    },
    "c2s_signin_week_award": {
        "name": "c2s_signin_week_award",
        "mainID": 152,
        "aID": 105,
        "file": "pb_lobby_signin",
        "pak": "pb_lobby_signin.cs_week_reward",
        "command": 15201050,
        "listen": "CMD:152:105"
    },
    "c2s_goods_list": {
        "name": "c2s_goods_list",
        "mainID": 153,
        "aID": 101,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.cs_payitem_list",
        "command": 15301010,
        "listen": "CMD:153:101"
    },
    "c2s_buy_goods": {
        "name": "c2s_buy_goods",
        "mainID": 153,
        "aID": 103,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.cs_pay_item",
        "command": 15301030,
        "listen": "CMD:153:103"
    },
    "c2s_custom_charge_ask": {
        "name": "c2s_custom_charge_ask",
        "mainID": 153,
        "aID": 106,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.cs_charge_for_coin",
        "command": 15301060,
        "listen": "CMD:153:106"
    },
    "c2s_custom_charge_buy": {
        "name": "c2s_custom_charge_buy",
        "mainID": 153,
        "aID": 108,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.cs_charge_for_coin",
        "command": 15301080,
        "listen": "CMD:153:108"
    },
    "c2s_charge_record": {
        "name": "c2s_charge_record",
        "mainID": 153,
        "aID": 110,
        "file": "pb_lobby_mall",
        "pak": "pb_lobby_mall.cs_charge_histroy",
        "command": 15301100,
        "listen": "CMD:153:110"
    },
    "c2s_first_charge_get": {
        "name": "c2s_first_charge_get",
        "mainID": 153,
        "aID": 112,
        "file": "pb_lobby_mall",
        "pak": "",
        "command": 15301120,
        "listen": "CMD:153:112"
    },
    "c2s_goods_channel": {
        "name": "c2s_goods_channel",
        "mainID": 153,
        "aID": 114,
        "file": "pb_lobby_mall",
        "pak": "",
        "command": 15301140,
        "listen": "CMD:153:114"
    },
    "c2s_second_charge": {
        "name": "c2s_second_charge",
        "mainID": 153,
        "aID": 117,
        "file": "pb_lobby_mall",
        "pak": "",
        "command": 15301170,
        "listen": "CMD:153:117"
    },
    "c2s_second_charge_get": {
        "name": "c2s_second_charge_get",
        "mainID": 153,
        "aID": 118,
        "file": "pb_lobby_mall",
        "pak": "",
        "command": 15301180,
        "listen": "CMD:153:118"
    },
    "c2s_custom_service_info": {
        "name": "c2s_custom_service_info",
        "mainID": 154,
        "aID": 101,
        "file": "pb_lobby_support",
        "pak": "",
        "command": 15401010,
        "listen": "CMD:154:101"
    },
    "c2s_verify_password": {
        "name": "c2s_verify_password",
        "mainID": 155,
        "aID": 101,
        "file": "pb_lobby_safebox",
        "pak": "pb_lobby_safebox.cs_check_safebox_password",
        "command": 15501010,
        "listen": "CMD:155:101"
    },
    "c2s_safebox_base_info": {
        "name": "c2s_safebox_base_info",
        "mainID": 155,
        "aID": 102,
        "file": "pb_lobby_safebox",
        "pak": "",
        "command": 15501020,
        "listen": "CMD:155:102"
    },
    "c2s_safebox_operation": {
        "name": "c2s_safebox_operation",
        "mainID": 155,
        "aID": 103,
        "file": "pb_lobby_safebox",
        "pak": "pb_lobby_safebox.cs_safebox_operation",
        "command": 15501030,
        "listen": "CMD:155:103"
    },
    "c2s_safebox_change_password": {
        "name": "c2s_safebox_change_password",
        "mainID": 155,
        "aID": 104,
        "file": "pb_lobby_safebox",
        "pak": "pb_lobby_safebox.cs_modify_password",
        "command": 15501040,
        "listen": "CMD:155:104"
    },
    "c2s_banner": {
        "name": "c2s_banner",
        "mainID": 200,
        "aID": 1,
        "file": "pb_lobby_activity",
        "pak": "",
        "command": 20000010,
        "listen": "CMD:200:1"
    },
    "c2s_activity_list": {
        "name": "c2s_activity_list",
        "mainID": 200,
        "aID": 2,
        "file": "pb_lobby_activity",
        "pak": "",
        "command": 20000020,
        "listen": "CMD:200:2"
    },
    "c2s_mail_list": {
        "name": "c2s_mail_list",
        "mainID": 201,
        "aID": 1,
        "file": "pb_lobby_mail",
        "pak": "",
        "command": 20100010,
        "listen": "CMD:201:1"
    },
    "c2s_mail_open": {
        "name": "c2s_mail_open",
        "mainID": 201,
        "aID": 2,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.cs_mail_open",
        "command": 20100020,
        "listen": "CMD:201:2"
    },
    "c2s_mail_delete": {
        "name": "c2s_mail_delete",
        "mainID": 201,
        "aID": 3,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.cs_mail_delete",
        "command": 20100030,
        "listen": "CMD:201:3"
    },
    "c2s_mail_get": {
        "name": "c2s_mail_get",
        "mainID": 201,
        "aID": 4,
        "file": "pb_lobby_mail",
        "pak": "pb_lobby_mail.cs_mail_getprop",
        "command": 20100040,
        "listen": "CMD:201:4"
    },
    "c2s_mail_sys_ids": {
        "name": "c2s_mail_sys_ids",
        "mainID": 201,
        "aID": 5,
        "file": "pb_lobby_mail",
        "pak": "",
        "command": 20100050,
        "listen": "CMD:201:5"
    },
    "c2s_profit_rank": {
        "name": "c2s_profit_rank",
        "mainID": 202,
        "aID": 1,
        "file": "pb_lobby_rank",
        "pak": "",
        "command": 20200010,
        "listen": "CMD:202:1"
    },
    "c2s_lucky_rank": {
        "name": "c2s_lucky_rank",
        "mainID": 202,
        "aID": 2,
        "file": "pb_lobby_rank",
        "pak": "",
        "command": 20200020,
        "listen": "CMD:202:2"
    },
    "c2s_vip_base_info": {
        "name": "c2s_vip_base_info",
        "mainID": 203,
        "aID": 1,
        "file": "pb_lobby_vip",
        "pak": "",
        "command": 20300010,
        "listen": "CMD:203:1"
    },
    "c2s_player_vip_info": {
        "name": "c2s_player_vip_info",
        "mainID": 203,
        "aID": 2,
        "file": "pb_lobby_vip",
        "pak": "",
        "command": 20300020,
        "listen": "CMD:203:2"
    },
    "c2s_get_vip_reward": {
        "name": "c2s_get_vip_reward",
        "mainID": 203,
        "aID": 3,
        "file": "pb_lobby_vip",
        "pak": "pb_lobby_vip.cs_get_gift",
        "command": 20300030,
        "listen": "CMD:203:3"
    },
    "c2s_server_cfg": {
        "name": "c2s_server_cfg",
        "mainID": 204,
        "aID": 1,
        "file": "pb_config",
        "pak": "pb_config.cs_server_cfg_msg",
        "command": 20400010,
        "listen": "CMD:204:1"
    },
    "c2s_jackpot_winner": {
        "name": "c2s_jackpot_winner",
        "mainID": 205,
        "aID": 2,
        "file": "pb_lobby_broadcast",
        "pak": "",
        "command": 20500020,
        "listen": "CMD:205:2"
    },
    "c2s_red_point": {
        "name": "c2s_red_point",
        "mainID": 205,
        "aID": 4,
        "file": "pb_lobby_broadcast",
        "pak": "",
        "command": 20500040,
        "listen": "CMD:205:4"
    },
    "c2s_lobby_marquee": {
        "name": "c2s_lobby_marquee",
        "mainID": 206,
        "aID": 1,
        "file": "pb_lobby_notice",
        "pak": "",
        "command": 20600010,
        "listen": "CMD:206:1"
    },
    "c2s_lobby_notice": {
        "name": "c2s_lobby_notice",
        "mainID": 206,
        "aID": 2,
        "file": "pb_lobby_notice",
        "pak": "",
        "command": 20600020,
        "listen": "CMD:206:2"
    },
    "c2s_order_histroy": {
        "name": "c2s_order_histroy",
        "mainID": 207,
        "aID": 7,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.cs_bank_withdraw_history",
        "command": 20700070,
        "listen": "CMD:207:7"
    },
    "c2s_card_bind_info": {
        "name": "c2s_card_bind_info",
        "mainID": 207,
        "aID": 101,
        "file": "pb_lobby_withdraw",
        "pak": "",
        "command": 20701010,
        "listen": "CMD:207:101"
    },
    "c2s_card_bind": {
        "name": "c2s_card_bind",
        "mainID": 207,
        "aID": 103,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.cs_bank_card_bind_msg",
        "command": 20701030,
        "listen": "CMD:207:103"
    },
    "c2s_order_submit": {
        "name": "c2s_order_submit",
        "mainID": 207,
        "aID": 105,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.cs_bank_card_withdraw_msg",
        "command": 20701050,
        "listen": "CMD:207:105"
    },
    "c2s_online_account": {
        "name": "c2s_online_account",
        "mainID": 207,
        "aID": 107,
        "file": "pb_lobby_withdraw",
        "pak": "pb_lobby_withdraw.cs_query_upiaccount",
        "command": 20701070,
        "listen": "CMD:207:107"
    },
    "c2s_roulette_base_info": {
        "name": "c2s_roulette_base_info",
        "mainID": 208,
        "aID": 1,
        "file": "pb_lobby_roulette",
        "pak": "",
        "command": 20800010,
        "listen": "CMD:208:1"
    },
    "c2s_roulette_go": {
        "name": "c2s_roulette_go",
        "mainID": 208,
        "aID": 2,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.cs_roulette_spin",
        "command": 20800020,
        "listen": "CMD:208:2"
    },
    "c2s_roulette_history": {
        "name": "c2s_roulette_history",
        "mainID": 208,
        "aID": 3,
        "file": "pb_lobby_roulette",
        "pak": "pb_lobby_roulette.cs_roulette_record",
        "command": 20800030,
        "listen": "CMD:208:3"
    },
    "c2s_benefits_base_info": {
        "name": "c2s_benefits_base_info",
        "mainID": 208,
        "aID": 4,
        "file": "pb_lobby_roulette",
        "pak": "",
        "command": 20800040,
        "listen": "CMD:208:4"
    },
    "c2s_benefits_get": {
        "name": "c2s_benefits_get",
        "mainID": 208,
        "aID": 5,
        "file": "pb_lobby_roulette",
        "pak": "",
        "command": 20800050,
        "listen": "CMD:208:5"
    },
    "c2s_share_base_info": {
        "name": "c2s_share_base_info",
        "mainID": 210,
        "aID": 1,
        "file": "pb_share",
        "pak": "pb_share.cs_share_info_msg",
        "command": 21000010,
        "listen": "CMD:210:1"
    },
    "c2s_share_player_list": {
        "name": "c2s_share_player_list",
        "mainID": 210,
        "aID": 3,
        "file": "pb_share",
        "pak": "pb_share.cs_share_sub_info_msg",
        "command": 21000030,
        "listen": "CMD:210:3"
    },
    "c2s_share_reward_histroy": {
        "name": "c2s_share_reward_histroy",
        "mainID": 210,
        "aID": 5,
        "file": "pb_share",
        "pak": "",
        "command": 21000050,
        "listen": "CMD:210:5"
    },
    "c2s_share_reward_rank": {
        "name": "c2s_share_reward_rank",
        "mainID": 210,
        "aID": 7,
        "file": "pb_share",
        "pak": "",
        "command": 21000070,
        "listen": "CMD:210:7"
    },
    "c2s_share_reward": {
        "name": "c2s_share_reward",
        "mainID": 210,
        "aID": 9,
        "file": "pb_share",
        "pak": "",
        "command": 21000090,
        "listen": "CMD:210:9"
    },
    "c2s_share_player_query": {
        "name": "c2s_share_player_query",
        "mainID": 210,
        "aID": 11,
        "file": "pb_share",
        "pak": "pb_share.cs_query_sub_info_by_id_msg",
        "command": 21000110,
        "listen": "CMD:210:11"
    },
    "c2s_share_activity_info": {
        "name": "c2s_share_activity_info",
        "mainID": 210,
        "aID": 13,
        "file": "pb_share",
        "pak": "",
        "command": 21000130,
        "listen": "CMD:210:13"
    },
    "c2s_share_activity_reward": {
        "name": "c2s_share_activity_reward",
        "mainID": 210,
        "aID": 14,
        "file": "pb_share",
        "pak": "pb_share.cs_get_share_gift",
        "command": 21000140,
        "listen": "CMD:210:14"
    },
    "c2s_redpacket_start": {
        "name": "c2s_redpacket_start",
        "mainID": 300,
        "aID": 2,
        "file": "pb_lobby_redpacket",
        "pak": "",
        "command": 30000020,
        "listen": "CMD:300:2"
    },
    "c2s_redpacket_result": {
        "name": "c2s_redpacket_result",
        "mainID": 300,
        "aID": 3,
        "file": "pb_lobby_redpacket",
        "pak": "pb_lobby_redpacket.cs_redpacket_over",
        "command": 30000030,
        "listen": "CMD:300:3"
    },
    "c2s_redpacket_sync": {
        "name": "c2s_redpacket_sync",
        "mainID": 300,
        "aID": 4,
        "file": "pb_lobby_redpacket",
        "pak": "",
        "command": 30000040,
        "listen": "CMD:300:4"
    },
    "c2s_stage_get": {
        "name": "c2s_stage_get",
        "mainID": 301,
        "aID": 2,
        "file": "pb_lobby_stagedrechagre",
        "pak": "pb_lobby_stagedrechagre.cs_stagedrechagre_get",
        "command": 30100020,
        "listen": "CMD:301:2"
    },
    "c2s_stage_getinfo": {
        "name": "c2s_stage_getinfo",
        "mainID": 301,
        "aID": 3,
        "file": "pb_lobby_stagedrechagre",
        "pak": "",
        "command": 30100030,
        "listen": "CMD:301:3"
    },
    "c2s_freecash_info": {
        "name": "c2s_freecash_info",
        "mainID": 302,
        "aID": 2,
        "file": "pb_lobby_freerechagre",
        "pak": "",
        "command": 30200020,
        "listen": "CMD:302:2"
    },
    "c2s_freecash_spin": {
        "name": "c2s_freecash_spin",
        "mainID": 302,
        "aID": 3,
        "file": "pb_lobby_freerechagre",
        "pak": "",
        "command": 30200030,
        "listen": "CMD:302:3"
    },
    "c2s_freecash_selfrecord": {
        "name": "c2s_freecash_selfrecord",
        "mainID": 302,
        "aID": 4,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.cs_my_recode_msg",
        "command": 30200040,
        "listen": "CMD:302:4"
    },
    "c2s_freecash_getmoney": {
        "name": "c2s_freecash_getmoney",
        "mainID": 302,
        "aID": 5,
        "file": "pb_lobby_freerechagre",
        "pak": "",
        "command": 30200050,
        "listen": "CMD:302:5"
    },
    "c2s_freecash_cashrecord": {
        "name": "c2s_freecash_cashrecord",
        "mainID": 302,
        "aID": 7,
        "file": "pb_lobby_freerechagre",
        "pak": "pb_lobby_freerechagre.cs_get_my_money_recode_msg",
        "command": 30200070,
        "listen": "CMD:302:7"
    },
    "c2s_freecash_getphone": {
        "name": "c2s_freecash_getphone",
        "mainID": 302,
        "aID": 8,
        "file": "pb_lobby_freerechagre",
        "pak": "",
        "command": 30200080,
        "listen": "CMD:302:8"
    },
    "c2s_lobby_login": {
        "name": "c2s_lobby_login",
        "mainID": 1000,
        "aID": 1002,
        "file": "pb_user",
        "pak": "pb_user.cs_user_login_hall",
        "command": 100010020,
        "listen": "CMD:1000:1002"
    },
    "c2s_game_list": {
        "name": "c2s_game_list",
        "mainID": 2000,
        "aID": 2001,
        "file": "pb_game",
        "pak": "",
        "command": 200020010,
        "listen": "CMD:2000:2001"
    },
    "c2s_game_room": {
        "name": "c2s_game_room",
        "mainID": 2000,
        "aID": 2003,
        "file": "pb_game",
        "pak": "pb_game.cs_gameroom_list",
        "command": 200020030,
        "listen": "CMD:2000:2003"
    },
    "c2s_enter_room": {
        "name": "c2s_enter_room",
        "mainID": 2000,
        "aID": 2004,
        "file": "pb_game",
        "pak": "pb_game.cs_askenterroom",
        "command": 200020040,
        "listen": "CMD:2000:2004"
    },
    "c2s_game_list_jackpot": {
        "name": "c2s_game_list_jackpot",
        "mainID": 2000,
        "aID": 2005,
        "file": "pb_game",
        "pak": "",
        "command": 200020050,
        "listen": "CMD:2000:2005"
    }
}

export const PushCommands = (scope: "client" | "server", commands: any) => {
    if(scope === "client"){
        Object.keys(commands).map(command => {
            //@ts-expect-error
            Client2ServerCommands[command] = commands[command];
        })
    }

    if(scope === "server"){
        Object.keys(commands).map(command => {
            //@ts-expect-error
            Server2ClientCommands[command] = commands[command];
        })
    }


    //console.log(`${Object.keys(commands).length} Commands pushed in ${scope} Scope`)
}

/**
 * Função pra obter uma template (Packet Header) vindo do servidor pelo Comando (CMD)
 * @param cmd 
 * @returns 
 * @deprecated Use GetServerCommandByMainIdAndAssistantId
 */
export const GetServerCommandByCmd = (cmd: number) => {
    const serverCommand = cmd + "1";
    //console.log(`Pesquisando por ${serverCommand}`)
    const entries = Object.values(Server2ClientCommands);
    const command = entries.find((item: any) => item.command === Number(serverCommand));
    return command;
}

export const GetServerCommandByMainIdAndAssistantId = (mainId: number, assistantId: number) => {
    const entries = Object.values(Server2ClientCommands);
    const command = entries.find((item: any) => item.mainID === mainId && item.aID === assistantId);
    return command;
}