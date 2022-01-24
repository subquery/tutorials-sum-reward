// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class StakingSlash implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public accountId: string;

    public balance: bigint;

    public date: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingSlash entity without an ID");
        await store.set('StakingSlash', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingSlash entity without an ID");
        await store.remove('StakingSlash', id.toString());
    }

    static async get(id:string): Promise<StakingSlash | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingSlash entity without an ID");
        const record = await store.get('StakingSlash', id.toString());
        if (record){
            return StakingSlash.create(record);
        }else{
            return;
        }
    }


    static async getByAccountId(accountId: string): Promise<StakingSlash[] | undefined>{
      
      const records = await store.getByField('StakingSlash', 'accountId', accountId);
      return records.map(record => StakingSlash.create(record));
      
    }


    static create(record: Partial<Omit<StakingSlash, FunctionPropertyNames<StakingSlash>>> & Entity): StakingSlash {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new StakingSlash(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
