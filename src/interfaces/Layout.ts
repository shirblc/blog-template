export interface BlogSidebarItem {
  rank: Number;
  text: String;
  link?: String;
}

export default interface BlogSidebarGroup {
  name: String;
  type: "select" | "scroll" | "regular";
  image?: String;
  items: BlogSidebarItem[];
}
