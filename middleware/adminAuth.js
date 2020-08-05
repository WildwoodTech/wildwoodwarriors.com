const adminAuth = async (req, res, next) => {
  try {
    if (
      req.body.secret !== process.env.ADMIN_SECRET &&
      req.body.pin !== process.env.ADMIN_PIN
    ) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = adminAuth;
