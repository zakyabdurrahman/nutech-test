async function errorHandler(err, req, res, next) {
    let status = 500
    let message = 'Internal Server Error';

    if (err.name === "SequelizeForeignKeyConstraintError") {
        status = 400;
        message = 'Invalid Input';
    }

    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400;
        message = err.errors[0].message;
    }
    
    if (err.name === 'InvalidLoginData') {
        status = 400;
        message = 'Please input email and pasword'
    }

    if (err.name === 'InvalidLogin') {
        status = 401;
        message = 'Wrong email or password';
    }

    if (err.name === 'Unauthorized' || err.name === 'JsonWebTokenError') {
        status = 401,
        message = 'Please login first'
    }

    if (err.name === 'Forbidden') {
        status = 403,
        message = 'You have no access';
    }
    
    if (err.name === "NotFound") {
        status = 404;
        message = 'Product not found';
    }




    res.status(status).json({
        message 
    });
    
}

module.exports = errorHandler;