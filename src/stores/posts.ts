import { defineStore } from "pinia";
import { reactive } from "vue";
import { BlogPost } from "../interfaces/BlogData";

export const useStore = defineStore("posts", () => {
    const posts = reactive([] as BlogPost[]);

    return { posts };
});
