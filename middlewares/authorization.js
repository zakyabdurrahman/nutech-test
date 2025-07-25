const {User, Product} = require('../models');

async function authorization(req, res, next) {
    try {
        const {userId} = req.loginData;
        console.log(`REQUEST OBJ: ${req}`);
        const user = await User.findByPk(userId);
        if (!user) throw {name: 'Unauthorized'};
        
        if (user.role === 'Staff') {
            //only can access his stuff
            const {id} = req.params;
            //if not looking to edit/delete product

            if (!id) throw {name: 'Forbidden'};

            const product = await Product.findByPk(id);

            if (!product) throw {name: 'NotFound'};
            

            if (product.authorId !== userId) throw {name: 'Forbidden'};

        }


        next();
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports = authorization;