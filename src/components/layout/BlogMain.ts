import { defineComponent, PropType } from "vue";
import { BlogPost } from "../../interfaces/BlogData";

export default defineComponent({
  name: "blog-main",
  props: {
    infiniteScroll: { type: Boolean, default: false },
    posts: {
      type: Array as PropType<BlogPost[]>,
      default: () => [] as BlogPost[],
    },
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    startIndex(): number {
      return (this.page - 1) * 5;
    },
    displayPosts(): BlogPost[] {
      return this.infiniteScroll
        ? this.posts
        : this.posts.slice(this.startIndex, this.startIndex + 5);
    },
  },
});
