const { escapeRegExp } = require("lodash")
const nearByLocation = require("../../models/NearByLocation/nearByLocation")
const { default: mongoose } = require("mongoose")

class NearByLocationServices {
    constructor(){}

    async addNearByLocation(payload,image=null){
        const {name,description,stationId} = payload
        const result = await nearByLocation.create({
            stationId,
            name,
            description,
            image:image?.filename
        })
        return result
    }
    async updateNearByLocation(id,payload){
        const data = await nearByLocation.findByIdAndUpdate({_id:id},payload,{new:true})
        return data
    }

    async getNearByLocation(payload){
        let {search,page,sortBy,sortedF,limit} = payload
        
        if(sortedF ==='' || sortedF === undefined){
            sortedF = "createdAt"
        }
        let options ={
            page : page ? page :1,
            limit : limit ? limit :10,
            sort : {[sortedF]: sortBy === "asc" ? 1  : -1}
        };
        const searchQuery = search ? search :"";
        const escapedSearchQuery = escapeRegExp(searchQuery);
        let query ={isDelete:false}

        if (searchQuery !== '') {
            const searchRegex = new RegExp(escapedSearchQuery, 'i');
            query.$or = [
                { name: searchRegex },
                {description:searchRegex},
            ];
        }
        const data = await nearByLocation.paginate(query, options)
        return data

        
    }
    async deleteNearByLocation(id){
        const data = await nearByLocation.findByIdAndUpdate({_id:id},{isDelete:true},{new:true})
        return data
    }

    async getNearByLocationByStationId(stationId){
        const data = await nearByLocation.find({stationId: new mongoose.Types.ObjectId(stationId)})
        return data
    }
}

module.exports = new NearByLocationServices()