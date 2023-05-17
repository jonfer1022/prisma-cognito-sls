export default {
  type: "object",
  properties: {
    name: { type: "string" },
    fullName: { type: "string" },
    lastName: { type: "number" },
  },
  required: ["name"],
} as const;
