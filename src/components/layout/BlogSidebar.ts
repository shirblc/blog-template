import { defineComponent } from "vue";
import BlogSidebarGroup from "../../interfaces/Layout";

const displayGroups: BlogSidebarGroup[] = [
  { name: "Me", type: "regular", image: "", items: [] },
];

export default defineComponent({
  data: () => ({
    displayGroups,
  }),
});
