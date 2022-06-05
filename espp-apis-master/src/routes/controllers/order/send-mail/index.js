import { body, param } from 'express-validator';
import errorMessages from '~/routes/constants/error-messages';
import { notFound, successResponse } from '~/routes/utils/response';
import { isObjectId } from '~/routes/utils/validator';
import types from './type';
import ROLES from '~/routes/constants/roles';
import validate from './validate';
import getEmailConfig from './get-email-config';

const rules = [
  param('orderId')
    .custom(isObjectId)
    .withMessage(errorMessages.ORDER_ID_INVALID),
  body('type').isIn(Object.values(types)),
];

export default (deps, authenticate, validator) => [
  authenticate(ROLES.ORDER_SENDEMAIL),
  rules,
  validator,
  async (req, res) => {
    const { models, notificationHandler, config } = deps;

    const order = await models.Order.findById(req.params.orderId)
      .populate('customer')
      .populate('orderProducts')
      .exec();

    const { errors } = validate(order);
    if (errors) {
      return notFound(res, errors);
    }

    const { type } = req.body;

    const { email, title } = getEmailConfig(order, config, type);

    // send email
    await notificationHandler.publish(type, {
      data: order,
      sendTo: email,
      title,
    });

    return successResponse(res, order);
  },
];
