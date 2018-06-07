const BaseController = require('./Base');
const toolkit = require('../common/toolkit.js');

class DefaultController extends BaseController {
  constructor(){
    super();
  }
  
  index() {
    return async (ctx, next) => { 
      if(toolkit.isMobileClient(ctx.request.header['user-agent'])){
        return ctx.render('index/index-mobile.twig', {});
      }
      return ctx.render('index/index.twig', {});
    };
  }
}

module.exports = DefaultController;