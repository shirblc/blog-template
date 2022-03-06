import { defineComponent, PropType } from "vue";
import { BlogPost as BlogPostType } from "../../interfaces/BlogData";
import BlogPost from "../BlogPost.vue";

export default defineComponent({
  name: "BlogMain",
  components: { BlogPost },
  props: {
    infiniteScroll: { type: Boolean, default: false },
    posts: {
      type: Array as PropType<BlogPostType[]>,
      default: () => [] as BlogPostType[],
    },
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    startIndex(): number {
      return (this.page - 1) * 5;
    },
    displayPosts(): BlogPostType[] {
      return this.infiniteScroll
        ? this.posts
        : this.posts.slice(this.startIndex, this.startIndex + 5);
    },
  },
});
