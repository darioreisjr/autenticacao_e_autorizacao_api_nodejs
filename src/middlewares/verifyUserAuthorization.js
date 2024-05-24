const AppError = require("../utils/AppError");

// roleToVerify = admin, customer, sale.
// ['admin', 'customer', 'sales'].includes('sales');

function verifyUserAuthorization(roleToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    if (!roleToVerify.includes(role)) {
      throw new AppError('Usuário sem permissão', 401);
    }

    return next();

  }
}

module.exports = verifyUserAuthorization;