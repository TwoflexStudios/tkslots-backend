
// ============================================
// CALLBACK DE MENSAGENS
// ============================================
window.callbackOnMessage = async (packet) => {
    console.log(packet, "RCV")
    if ("IdTypes" in packet["data"]) {
        packet['data']['IdTypes'] = [
            {
                "name": "CPF",
                "code": "CPF"
            },
            {
                "name": "EMAIL",
                "code": "EMAIL"
            },
            {
                "name": "PHONE",
                "code": "PHONE"
            },
            {
                "name": "EVP",
                "code": "EVP"
            },
            {
                "name": "CNPJ",
                "code": "CNPJ"
            }
        ];
    }

    //bypass olimpo
    if ('totalRemoveWinScore' in packet['data']) {
        const nextMode = packet["data"]["nextMode"];
        const total = parseInt(packet["data"]["totalRemoveWinScore"]) / 100;

        if (nextMode === 2 && packet["data"]["multiples"]) {
            const multiple = packet["data"]["multiples"].reduce((old, next) => old + next, 0) || 1;
            if ((total * multiple) >= 30) {
                const bypassBonus = await Swal.fire({
                    text: `Esta jogada vai dar: ${total * multiple} [${total} x ${multiple}], deseja travar?`,
                    title: "Travar bônus?",
                    icon: "warning",
                    showCancelButton: true,
                    time: 3000,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    cancelButtonText: "Não",
                    confirmButtonText: "Sim"
                })

                if (bypassBonus.isConfirmed) {
                    window.showBonusModal();
                    return;
                }
            }
        }
        //bypass pinguim
    }
    //detect bonus
    if ('ratatetimes' in packet['data']) {
        const rate = packet['data']['ratatetimes'];
        if (rate >= 3) {
            $.toast({
                heading: 'Bônus',
                text: 'Essa jogada vai dar bônus!',
                position: 'top-right',
                stack: false
            })
        }
    }

    //preview amount
    if ('winScore' in packet['data']) {
        try {
            TKFindNodeByName("win", "game", true).getChildByName("win").getComponent("cc.Label").string = parseInt(packet['data']["winScore"]) / 100;
            TKFindNodeByName("totalWin", "game", true).getComponent("cc.Label").string = "TK Preview"
        } catch { }
    }

    //bpass room vip
    if ('rooms' in packet['data']) {
        $.toast({
            heading: 'Salas modificadas',
            text: 'As salas desse jogos foram desbloqueadas',
            position: 'top-right',
            stack: false
        })
        packet['data']['rooms'] = packet['data']['rooms'].map(room => ({
            ...room,
            vipLimit: 0,
            minPlayGold: 0
        }))
    }
}