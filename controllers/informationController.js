const conn = require('../database/connection.js');
const InfoQuery = require('../database/infoQuery.js');

class InformationController {

    static async getBanners(req, res, next) {
        try {
            
            let rawData = await conn.query(InfoQuery.bannerQuery);
            let {rows} = rawData
            let data = rows.map((e) => {
                delete e['banner_id'];
                return e;
            });
            res.status(200).json({
                status: 0,
                message: 'Sukses',
                data: data
            })
        } catch(error) {
            console.log(error)
            next(error)
        }
    }

    
}

module.exports = InformationController;