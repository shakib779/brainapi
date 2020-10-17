const BaseService = require('./base.service')

class UserService extends BaseService {
  constructor() {
    super('user');
  }
}

module.exports = UserService;
