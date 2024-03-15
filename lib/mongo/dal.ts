import mongoose from "mongoose"
import { Academy, PartnerRegistrationRequests, Partners, PlayerRanks } from "./schema"

class DB {
    private static instance: DB
    partners: typeof Partners
    partnerRegistrationRequests: typeof PartnerRegistrationRequests
    playerRanks:typeof PlayerRanks
    academy: typeof Academy
    constructor() {
        this.partners = Partners
        this.partnerRegistrationRequests = PartnerRegistrationRequests
        this.playerRanks = PlayerRanks
        this.academy = Academy
        this.connect()
    }

    private async connect() {
        const connectionUrl = process.env.MONGODB_URI
        if(!connectionUrl){
            throw Error("Mongo DB url missing")
        }
        mongoose.connect(connectionUrl)
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new DB()
        }
        return this.instance
    }
}

export const db = DB.getInstance()
