# Navigation Layout Guidelines

## 问题描述
当使用固定导航栏 (`fixed`) 时，页面内容会被导航栏遮挡，需要为内容区域添加顶部间距。

## 解决方案
所有使用 `<Navigation />` 组件的页面，其 `<main>` 元素必须包含 `pt-20` 类：

```tsx
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
```

## 技术细节
- `pt-20` = `padding-top: 5rem` (80px)
- 导航栏高度约为 64px，80px 提供足够的缓冲空间
- 使用 Tailwind CSS 的响应式设计

## 检查清单
在创建新页面时，确保：
1. ✅ 如果使用 `<Navigation />` 组件
2. ✅ `<main>` 元素包含 `pt-20` 类
3. ✅ 测试页面标题不被导航栏遮挡

## 已修复的页面
- ✅ app/map/page.tsx
- ✅ app/news/page.tsx  
- ✅ app/guides/bosses/page.tsx
- ✅ app/guides/collectibles/page.tsx
- ✅ app/guides/areas/page.tsx
- ✅ app/contact/page.tsx
- ✅ app/terms/page.tsx
- ✅ app/privacy/page.tsx
- ✅ app/guides/page.tsx
- ✅ app/about/page.tsx

## 不需要修复的页面
- app/page.tsx (主页使用内联导航，不是固定定位)
