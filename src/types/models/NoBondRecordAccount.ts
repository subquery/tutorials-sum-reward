// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class NoBondRecordAccount implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public firstRewardAt: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save NoBondRecordAccount entity without an ID");
        await store.set('NoBondRecordAccount', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove NoBondRecordAccount entity without an ID");
        await store.remove('NoBondRecordAccount', id.toString());
    }

    static async get(id:string): Promise<NoBondRecordAccount | undefined>{
        assert((id !== null && id !== undefined), "Cannot get NoBondRecordAccount entity without an ID");
        const record = await store.get('NoBondRecordAccount', id.toString());
        if (record){
            return NoBondRecordAccount.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new NoBondRecordAccount(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
