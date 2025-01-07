const adminAuthMiddleware = (req, res, next) => {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (req.headers['x-admin-password'] === adminPassword) {
        next();
    } else {
        res.status(403).json({ error: "Unauthorized" });
    }
};

module.exports = adminAuthMiddleware;
