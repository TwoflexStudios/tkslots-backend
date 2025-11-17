import AccountsModel, { AccountsSchema } from "../schemas/accounts";

class Player {
    private accountId: string;
    private account: AccountsSchema | null = null;
    
    constructor(accountId: string){
        this.accountId = accountId;
    }

    async init(){
        this.account = await AccountsModel.findOne({_id: this.accountId});

        if(!this.account){
            throw new Error("Account not found");
        }
    }
}

export default Player;