import { defineComponent, PropType } from "vue";
import { BlogPost } from "../interfaces/BlogData";

export default defineComponent({
  props: {
    post: { type: Object as PropType<BlogPost>, required: true },
  },
  data: () => ({
    showComments: false,
  }),
  methods: {
    toggleComments() {
      this.showComments = !this.showComments;
    },
  },
});
