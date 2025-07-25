const {Product, User} = require('../models');
const imagekit = require('../utils/imagekit');
class ProductController {
    static async add(req, res, next) {
        try {
            const authorId = req.loginData.userId;
            const {name, description, price, stock, imgUrl, categoryId} = req.body;
            const product = await Product.create({
                name, 
                description,
                price,
                stock,
                imgUrl,
                categoryId,
                authorId
            });



            res.status(201).json({
                message: "Success create new product",
                product
            });
        } catch(error) {
            console.log(error)
            next(error);
        }
    }

    static async read(req, res, next) {
        try {
            const products = await Product.findAll({
                include: {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                }
            })

            res.status(200).json({
                message: 'Success get products',
                products
            })
        } catch(error) {
            console.log(error);
            next(error);
        }
    }

    static async readOne(req, res, next) {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);

            if (!product) throw {name: "NotFound"};

            res.status(200).json({
                message: 'Success get product',
                product
            })
        } catch(error) {
            console.log(error)
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const {id} = req.params;
            let product = await Product.findByPk(id);
            if (!product) throw {name: 'NotFound'};

            const {name, description, price, stock, imgUrl, categoryId} = req.body;
            const newProduct = await Product.update({
                name,
                description, 
                price, 
                stock, 
                imgUrl,
                categoryId
            }, {
                where: {
                    id: id
                }
            });
            product = await Product.findByPk(id);

            res.status(200).json({
                message: "Success edit product",
                product: product
            })

        } catch(error) {
            console.log(error)
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw {name: 'NotFound'};
            await Product.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: `success to delete ${product.name}`
            })

        } catch(error) {
            console.log(error);
            next(error);
        }
    }

    static async updateImage(req, res, next) {
        try {
            console.log(req.file)
            const image64 = req.file.buffer.toString('base64');

            const {id} = req.params;
            const product = await Product.findByPk(id);
            if (!product) throw {name: 'NotFound'};

            //upload then get the url
            const result = await imagekit.upload({
                file: image64,
                fileName: req.file.originalname,
            })
            
            await Product.update({
                imgUrl: result.url
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({
                message: `Image ${product.name} success to update`
            });

        } catch(error) {
            console.log(error);
            next(error);
        }
    }

}

module.exports = ProductController;