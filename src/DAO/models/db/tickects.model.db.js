import { ticketsModel as TicketsMongoose  } from '../mongoose/tickects.model.js';
import { selectedLogger as logger } from '../../../utils/logger.js';

class TicketsModel {
  async readById(code) {
    try {
      const ticket = await TicketsMongoose.findOne({ code });
      return ticket;
    } catch (e) {
      logger.error(e);
    }
  }

  async readAll(cartId) {
    try {
      const tickets = await TicketsMongoose.find({ cartId });
      return tickets;
    } catch (e) {
      logger.error(e);
    }
  }

  async create(purchase) {
    try {
      const newTicket = await TicketsMongoose.create(purchase);
      return newTicket;
    } catch (e) {
      logger.error(e);
    }
  }
}

export const ticketsModel = new TicketsModel();
