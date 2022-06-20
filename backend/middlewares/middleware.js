import jwt from "jsonwebtoken";

function checkAuth(req, res, next) {
  if (
    req.headers.token == "Bearer null" ||
    req.headers.token == null ||
    req.headers.Oauth == "" ||
    req.headers.Oauth == null ||
    req.headers.aliveToken == "" ||
    req.headers.aliveToken == null
  ) {
    res.json({ success: false, message: "Not Authenticated." });
  } else if (
    !req.headers.token ||
    !req.headers.Oauth ||
    !req.headers.aliveToken
  ) {
    res.json({ success: false, message: "No Token" });
  } else {
    let jwt_token = req.headers.Oauth;
    jwt.verify(jwt_token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.json({
          statusCode: 401,
          success: false,
          message: "Token Expired",
        });
      } else {
        req.data = decoded;
        next();
      }
    });
  }
}

export default checkAuth;
