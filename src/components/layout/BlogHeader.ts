import { defineComponent } from "vue";

export default defineComponent({
  props: {
    blogName: { type: String, default: "Name" },
  },
  data: () => ({
    headerSubtitle: "",
    imgSrc: "",
  }),
});
