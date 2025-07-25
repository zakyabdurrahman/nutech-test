const {Category} = require('../models');

class CategoryController {
    static async add(req, res, next) {
        try {
            const {name} = req.body;
            const category = await Category.create({
                name
            });

            res.status(201).json({
                message: 'success create category',
                category
            });
        } catch(error) {
            console.log(error);
            next(error);
        }
    }

    static async read(req, res, next) {
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

    static async edit(req, res, next) {
        try {
            const {id} = req.params;
            let category = await Category.findByPk(id);
            if (!category) throw {name: 'NotFound'};
            
            const {name} = req.body;

            await Category.update(
                {name},
                {
                    where: {
                        id: id
                    }
                }
            )

            category = await Category.findByPk(id);
            res.status(200).json({
                message: 'Success edit category',
                category
            })

        } catch(error) {
            console.log(error)
            next(error)
        }
        
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const category = await Category.findByPk(id);

            if (!category) throw {name: 'NotFound'};

            await Category.destroy({
                where: {
                    id: id
                }
            })

            res.status(200).json({
                message: `success delete ${category.name}`
            });

        } catch(error) {
            console.log(error);
            next(error);
        }
    }
    
}

module.exports = CategoryController;