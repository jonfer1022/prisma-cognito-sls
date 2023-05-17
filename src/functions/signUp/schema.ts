export default {
  type: "object",
  properties: {
    phone: { type: "string" },
    password: { type: "string" },
  },
  required: ["phone", "password"],
} as const;
