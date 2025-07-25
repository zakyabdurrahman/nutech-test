const {Product, Category} = require('../models')
const {Op} = require('sequelize')
class PublicController {
    static async read(req, res, next) {
        try {
            let {page, limit, search, sort, filter} =  req.query;
            const pagedData = await PublicController.processQuery(page, limit, search, sort, filter);
            res.status(200).json(pagedData);
        } catch(error) {
            console.log(error)
            next(error)
        }
    }

    static async detail(req, res, next) {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw {name: 'NotFound'};
            res.status(200).json({
                message: 'success get product detail',
                product
            })
        } catch(error) {
            console.log(error)
            next(error);
        }
    }

    static async readCats(req, res, next) {
        try {
            const categories = await Category.findAll();

            res.status(200).json({
                message: 'success get categories',
                categories
            })
         } catch(error) {
            console.log(error)
            next(error)
        }
    }

    static async processQuery(page, limit, search = '', sort, filter) {
        //default page is 1
        if (!Number(page)) page = 1;
        if (!Number(limit)) limit = 5;

        let offset = (page - 1) * limit;

        let queryOption = {
            limit,
            offset,
            where: {
                name: {
                    [Op.iLike] : `%${search}%`
                }
            }
        }

        if (sort) {
            if (sort.charAt(0) !== "-") {
                queryOption.order = [[sort, 'ASC']];
            } else {
                 queryOption.order = [[sort.slice(1), 'DESC']];
            }
        }

        //logic fur filter
        if (filter) {
            const query = filter.split(',')

            queryOption.where = {
                categoryId: {
                    [Op.in]: query
                }
            }
        }

        const products = await Product.findAndCountAll(queryOption);

        const {count, rows} = products;

        const result = {
            message: 'success get products',
            total: count,
            size: limit,
            totalPage: Math.ceil(count/limit),
            currentPage: page,
            data: rows
        }

        return result;
    }
}

module.exports = PublicController