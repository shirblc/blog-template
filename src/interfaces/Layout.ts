export interface BlogSidebarItem {
  rank: number;
  text: string;
  link?: string;
}

export default interface BlogSidebarGroup {
  name: string;
  type: "select" | "scroll" | "regular";
  image?: string;
  items: BlogSidebarItem[];
}
