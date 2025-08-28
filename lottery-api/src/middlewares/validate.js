export function validate(schema, pick = "body") {
  return (req, res, next) => {
    const data =
      pick === "query" ? req.query : pick === "params" ? req.params : req.body;

    const result = schema.safeParse(data);

    if (!result.success) {
      const first = result.error.issues?.[0];
      return res.status(400).json({
        success: false,
        message: first?.message || "Validation error",
        details: result.error.issues,
      });
    }

    // ✅ Không gán lại nguyên object (req.query = ...)
    if (pick === "query") {
      Object.assign(req.query, result.data);
    } else if (pick === "params") {
      Object.assign(req.params, result.data);
    } else {
      req.body = result.data;
    }

    next();
  };
}
