export default {
  type: "object",
  properties: {
    phone: { type: "string" },
    code: { type: "string" },
    password: { type: "string" },
  },
  required: ["phone", "code", "password"],
} as const;
