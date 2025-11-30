"before"

//@TK METHOD
function TKGetGameList() {
    try {
        const gameList = tkDirectorRef.getScene().children[0].children[1].children[4].children[1].children[1].children[1].children[0].children[0].children;
        return gameList;
    } catch {
        const gameList = tkDirectorRef.getScene().children[0].children[1].children[4].children[1].children[2].children[1].children[0].children[0].children[1].children;
        return gameList;
    }
}

//@TK METHOD
function TKGetGameById(id) {
    const gameList = TKGetGameList();
    const game = gameList.find(item => item._components[1].gameInfo.gameId == id);
    return game;
}

//@TK METHOD
function TKOpenGame(id, replace) {
    const game = TKGetGameById(replace || id);
    if (replace) {
        const gm = game.getComponent("lobbyGameItem");

        if (gm) {
            gm.loadGameID = id;
            gm.gameInfo.gameId = id;
        }
    }
    game.children[0].emit("click");
}

function TKFindNodeById(id) {
    const nodes = TKTravelAllNode();
    const node = nodes.find(item => item._id === id);
    return node;
}

function TKFindNodeByName(name, scene, onlyActivated = false) {
    const nodes = TKTravelAllNode(scene === "game" ? 0 : 1);
    const node = onlyActivated ? nodes.find(item => item._name === name && item.active && item._parent.active) : nodes.find(item => item._name === name);
    return node;
}

function TKFindNodeByIncludes(name, scene, onlyActivated = false) {
    const nodes = TKTravelAllNode(scene === "game" ? 0 : 1);
    const node = onlyActivated ? nodes.find(item => item._name.includes(name) && item.active && item._parent.active) : nodes.find(item => item._name === name);
    return node;
}


function TKFindInChildrenByName(nodeId, name) {
    const node = TKFindNodeById(nodeId);
    if (!node || !node.children) return null;

    function searchRecursive(children) {
        for (const child of children) {
            if (child._name === name) {
                return child;
            }
            if (child.children && child.children.length > 0) {
                const found = searchRecursive(child.children);
                if (found) return found;
            }
        }
        return null;
    }

    return searchRecursive(node.children);
}

function TKFindNodeByPath(path, scene) {
    const currentNode = cc.director.getScene().children[scene === "game" ? 0 : 1];
    return _TKFindNodeByPath(path, currentNode);
}


function TKGetNodeLabels(node) {
    let labels = [];

    // Tenta pegar o Label no node atual
    const label = node.getComponent("cc.Label");
    if (label) {
        labels.push({
            nodeId: node.name,   // Nome do node
            message: label.string // Texto da label
        });
    }

    // Procura nos filhos também
    for (const child of node.children) {
        labels = labels.concat(TKGetNodeLabels(child));
    }

    return labels;
}

function TKGetNodeButtons(node) {
    let buttons = [];

    // Tenta pegar o Label no node atual
    const button = node.getComponent("cc.Button");
    if (button) {
        buttons.push({
            nodeId: node.id || node._id,
        });
    }

    // Procura nos filhos também
    for (const child of node.children) {
        buttons = buttons.concat(TKGetNodeButtons(child));
    }

    return buttons;
}


function TKGetAlertMessages() {
    const dialogNode = TKFindNodeByName("LayerDialog", "gui", true);
    const messageChildren = dialogNode.children.filter(item => item.name.includes("message"));

    const notifyNode = TKFindNodeByName("lab_content", "gui", true)?.getComponent("cc.Label")?.string || "Notify node emtpy";

    const messages = [{message: notifyNode}];

    for (const message of messageChildren) {
        const labels = TKGetNodeLabels(message);
        messages.push(...labels);
    }

    return messages;
}

function TKRemoveAlertMessages() {
    const dialogNode = TKFindNodeByName("LayerDialog", "gui", true);
    const children = [...dialogNode.children];
    for (const child of children) {
        child.destroy(); // Destroi o child
    }
}

function TKInjectNodeProperty(nodeId, property, value) {
    const node = TKFindNodeById(nodeId);
    node[property] = value;
    return true;
}

let GMRerefence = null;

function TKGetConfig() {

    let gm;

    if (!GMRerefence) {
        const node = TKFindNodeByName("game", "game");
        if (node.children.length > 0) {
            const subNode = node.children[0];
            const gm = subNode._components.find(item => item.GM);

            if (gm) {
                GMRerefence = gm;
            }
        }
    } else {
        gm = GMRerefence;
    }

    if (gm) {
        const SUPERGM = gm.GM;
        return {
            gameConfig: {
                IsPortrait: SUPERGM.gameConfig.IsPortrait,
                slotsGameCfg: {
                    autoStopTime: SUPERGM.gameConfig.slotsGameCfg.autoStopTime,
                    linkBlinkTime: SUPERGM.gameConfig.slotsGameCfg.linkBlinkTime,
                    minSpinTime: SUPERGM.gameConfig.slotsGameCfg.minSpinTime,
                    winCoinFlashTime: SUPERGM.gameConfig.slotsGameCfg.winCoinFlashTime,
                }
            },
            gameState: {
                bFirstEnterGame: SUPERGM.gameState.bFirstEnterGame,
                playerState: {
                    playerInfo: SUPERGM.gameState.playerState.playerInfo
                }
            }
        };
    }

    return false;
}

function TKGameState() {
    try {
        const state = tkDirectorRef?._scene?._children[0]?._children[0]?._components[1]?.node._children[0]?._components[3]?.GM?.fsm?.curState ||
            tkDirectorRef?._scene?._children[0]?._children[0]?._components[1]?.node._children[0]?._components[2]?.GM?.fsm?.curState ||
            tkDirectorRef?._scene?._children[0]?._children[0]?._components[1]?.node?._children[0]?._components[1]?.GM?.fsm?.curState
        return state
    } catch {
        return 4
    }
}


function TKSetConfig(config) {
    const node = TKFindNodeByName("game", "game");
    if (!node || node.children.length === 0) return false;

    const subNode = node.children[0];
    const gm = subNode._components.find(item => item.GM)?.GM;

    if (gm) {
        // Copia apenas as propriedades que existem no gm
        Object.keys(config).forEach(key => {
            if (gm.hasOwnProperty(key)) {
                if (typeof config[key] === "object" && config[key] !== null) {
                    // Se for um objeto, mescla recursivamente
                    Object.assign(gm[key], config[key]);
                } else {
                    // Se for um valor simples, atribui diretamente
                    gm[key] = config[key];
                }
            }
        });

        return true;
    }

    return false;
}



function _TKFindNodeByPath(path, currentNode = cc.director.getScene()) {
    if (!currentNode) {
        return null;
    }

    const parts = path.split(" > ");

    function search(node, index) {
        if (index >= parts.length) return node;

        const nextNode = node.children.find(child => child._name === parts[index]);
        if (!nextNode) {
            return null;
        }

        return search(nextNode, index + 1);
    }

    const result = search(currentNode, 0);

    return result;
}


//EXPOSE
function TKTravelAllNode(sceneId) {
    let scene = sceneId ? tkDirectorRef.getScene().children[0].children[sceneId] : tkDirectorRef.getScene().children[0];
    let nodes = [];

    function traverseNode(node) {
        nodes.push(node);
        node.children.forEach(child => traverseNode(child));
    }

    traverseNode(scene);

    return nodes;
}

//@METHOD
function TKGetBetList() {
    //first load panel
    const btnBetList = TKFindNodeByName("btn_bet_list", "game", true);
    if (!btnBetList) return;

    btnBetList.emit("click")

    const listOfBetsPanel = TKFindNodeByName("betListPanel", "game");
    if (!listOfBetsPanel) return;

    const allBets = TKFindInChildrenByName(listOfBetsPanel._id, "ToggleGroup");

    return allBets.children;
}

function GetMinesBetList() {
    //first load panel
    const root = cc.director.getScene();
    const btnBetList = "root/game/game/scaleNode/box/betOptions/ScrollView/view/content".split('/').reduce((node, name) => node?.getChildByName(name) || null, root);
    if (!btnBetList) return;
    return btnBetList.children;
}

//@METHOD
function TKSetBet(newBet, mines = false) {
    if (!mines) {
        const list = TKGetBetList();

        list.forEach(bet => {
            const lb = TKFindInChildrenByName(bet._id, "lb_bet")._components[1];
            if (lb.string == newBet) {
                bet.emit("click")
            }
        });

        return;
    }

    //Mines
    const list = GetMinesBetList();

    list.forEach(bet => {
        const lb = bet.getChildByName("lb_count").getComponent("cc.Label").string;
        if (parseInt(lb) == parseInt(newBet)) {
            bet.emit("click")
        }
    });

    return;
}

function GetBombBetList() {
    //first load panel
    const root = cc.director.getScene();
    const btnBetList = "root/game/game/scaleNode/box/bombOptions/ScrollView/view/content".split('/').reduce((node, name) => node?.getChildByName(name) || null, root);
    if (!btnBetList) return;
    return btnBetList.children;
}

function TKSetBomb(bombs) {
    //Mines
    const list = GetBombBetList();

    list.forEach(bet => {
        const lb = bet.getChildByName("lb_count").getComponent("cc.Label").string;
        if (lb == bombs) {
            bet.emit("click")
        }
    });

    return;
}
