async function errorHandler(err, req, res, next) {
    let status = 500;
    let message = 'Internal Server Error';
    let statusText  = 102;

    if (err.name == "JsonWebTokenError") {
      status = 401;
      statusText = 108;
      message = "Token tidak tidak valid atau kadaluwarsa";
    } else if (err.message) {
      if (err.message == "401") {
        status = 401;
        statusText = 103;
        message = "Username atau password salah";
      } else {
        status = 400;
        (statusText = 102),
          (message = err.message.replace("ValidationError: ", ""));
      }
    }



    res.status(status).json({
        message,
        status: statusText,
        data: null 
    });
    
}

module.exports = errorHandler;