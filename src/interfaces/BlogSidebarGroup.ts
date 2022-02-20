import BlogListItem from './BlogSidebarItem';

export default interface BlogSidebarGroup {
  name: String,
  type: 'select' | 'scroll' | 'regular',
  image?: String,
  items: BlogListItem[]
}
