import jwt from 'jsonwebtoken';
import authconfig from '../../config/auth.js';

function authMiddleware(request, response, next) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const token = authToken.split(' ').at(1);

  try {
    jwt.verify(token, authconfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }

      request.userId = decoded.id;
      request.userName = decoded.name;
    });
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return response.status(401).json({ error: 'Token invalid' });
  }
  return next();
}

export default authMiddleware;
