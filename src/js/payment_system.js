const PAYMENT_SYSTEM = {
  MIR: 'MIR',
  AMERICAN_EXPRESS: 'American Express',
  VISA: 'VISA',
  MAESTRO: 'Maestro',
  MASTERCARD: 'Mastercard',
  CHINA_UNIONPAY: 'China UnionPay',
  DISCOVER: 'Discover',
  JCB_INTERNATIONAL: 'JCB International',
  DINERS_CLUB: 'Diners Club',
};

const PAYMENT_SYSTEM_NUMBER_CHECK_LENGTH = {
  [PAYMENT_SYSTEM.MIR]: (length) => length === 16,
  [PAYMENT_SYSTEM.VISA]: (length) => length === 16 || length === 13,
  [PAYMENT_SYSTEM.MAESTRO]: (length) => length >= 12 && length <= 19,
  [PAYMENT_SYSTEM.CHINA_UNIONPAY]: (length) => length === 16,
  [PAYMENT_SYSTEM.JCB_INTERNATIONAL]: (length) =>
    length === 15 || length === 16,

  [PAYMENT_SYSTEM.DISCOVER]: (length) => length === 16,
  [PAYMENT_SYSTEM.DINERS_CLUB]: (length) => length === 14,
  [PAYMENT_SYSTEM.MASTERCARD]: (length) => length === 16,
  [PAYMENT_SYSTEM.AMERICAN_EXPRESS]: (length) => length === 15,
};

const PAYMENT_SYSTEM_NUMBER = {
  2: PAYMENT_SYSTEM.MIR,
  30: PAYMENT_SYSTEM.DINERS_CLUB,
  36: PAYMENT_SYSTEM.DINERS_CLUB,
  38: PAYMENT_SYSTEM.DINERS_CLUB,
  31: PAYMENT_SYSTEM.JCB_INTERNATIONAL,
  35: PAYMENT_SYSTEM.JCB_INTERNATIONAL,
  34: PAYMENT_SYSTEM.AMERICAN_EXPRESS,
  37: PAYMENT_SYSTEM.AMERICAN_EXPRESS,
  4: PAYMENT_SYSTEM.VISA,
  50: PAYMENT_SYSTEM.MAESTRO,
  56: PAYMENT_SYSTEM.MAESTRO,
  57: PAYMENT_SYSTEM.MAESTRO,
  58: PAYMENT_SYSTEM.MAESTRO,
  51: PAYMENT_SYSTEM.MASTERCARD,
  52: PAYMENT_SYSTEM.MASTERCARD,
  53: PAYMENT_SYSTEM.MASTERCARD,
  54: PAYMENT_SYSTEM.MASTERCARD,
  55: PAYMENT_SYSTEM.MASTERCARD,
  63: PAYMENT_SYSTEM.MAESTRO,
  67: PAYMENT_SYSTEM.MAESTRO,
  60: PAYMENT_SYSTEM.DISCOVER,
  62: PAYMENT_SYSTEM.CHINA_UNIONPAY,
};

export {
  PAYMENT_SYSTEM,
  PAYMENT_SYSTEM_NUMBER,
  PAYMENT_SYSTEM_NUMBER_CHECK_LENGTH,
};
