export default {
  schema: {
    title: "Blog Post",
    type: "object",
    properties: {
      body: {
        type: "string",
        title: "Body",
      },
    },
  },
  uiSchema: {
    body: {
      "ui:widget": "RichTextWidget",
    },
  },
  formData: {
    body: "",
  },
};
