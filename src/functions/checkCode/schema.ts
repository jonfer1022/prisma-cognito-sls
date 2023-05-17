export default {
  type: "object",
  properties: {
    phone: { type: "string" },
    code: { type: "string" },
  },
  required: ["phone", "code"],
} as const;
