const fs = require('fs');
const path = require('path');

// 图片配置
const imageConfig = {
  bosses: [
    { name: 'weaver-queen', keywords: 'fantasy boss, dark knight, battle' },
    { name: 'moss-knight', keywords: 'nature warrior, green armor, forest' },
    { name: 'clockwork-knight', keywords: 'mechanical knight, steampunk, gears' },
    { name: 'shadow-weaver', keywords: 'shadow magic, dark sorcerer, mysterious' },
    { name: 'crystal-guardian', keywords: 'crystal warrior, gemstone, guardian' },
    { name: 'void-knight', keywords: 'void warrior, dark energy, final boss' }
  ],
  collectibles: [
    { name: 'mask-shards', keywords: 'ancient mask, fragments, health' },
    { name: 'spools', keywords: 'silk thread, weaving, needle' },
    { name: 'memory-charms', keywords: 'magical charms, memory, pendant' },
    { name: 'lost-jumpfleas', keywords: 'small creatures, rescue, quest' },
    { name: 'shakra-maps', keywords: 'ancient maps, scrolls, navigation' },
    { name: 'hidden-relics', keywords: 'ancient artifacts, treasures, relics' }
  ],
  areas: [
    { name: 'moss-grotto', keywords: 'lush forest, green cave, nature' },
    { name: 'greymoor', keywords: 'misty moorland, mysterious, fog' },
    { name: 'deep-docks', keywords: 'harbor, mechanical, industrial' },
    { name: 'crystal-peak', keywords: 'mountain peak, crystals, heights' },
    { name: 'weavers-den', keywords: 'spider lair, silk webs, dark cave' },
    { name: 'void-sanctum', keywords: 'dark temple, void, final area' }
  ],
  news: [
    { name: 'release-date', keywords: 'game announcement, excitement, release' },
    { name: 'weaver-queen', keywords: 'boss reveal, character design, battle' },
    { name: 'mask-shards', keywords: 'collectibles, items, gameplay' },
    { name: 'hidden-areas', keywords: 'secrets, exploration, discovery' }
  ]
};

// 生成Unsplash图片URL
function generateUnsplashUrl(keywords, width = 800, height = 450) {
  const encodedKeywords = encodeURIComponent(keywords);
  // 使用Unsplash的搜索API
  return `https://source.unsplash.com/${width}x${height}/?${encodedKeywords}`;
}

// 创建图片目录
function createDirectories() {
  Object.keys(imageConfig).forEach(category => {
    const dir = path.join(__dirname, '..', 'public', 'images', category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// 生成图片URL映射
function generateImageUrls() {
  const imageUrls = {};
  
  Object.entries(imageConfig).forEach(([category, items]) => {
    imageUrls[category] = {};
    items.forEach(item => {
      imageUrls[category][item.name] = generateUnsplashUrl(item.keywords);
    });
  });
  
  return imageUrls;
}

// 主函数
function main() {
  console.log('🎮 Silksong Maps - Image URL Generator');
  console.log('=====================================');
  
  createDirectories();
  const imageUrls = generateImageUrls();
  
  // 保存图片URL到文件
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'image-urls.json');
  fs.writeFileSync(outputPath, JSON.stringify(imageUrls, null, 2));
  
  console.log('✅ Generated image URLs:');
  Object.entries(imageUrls).forEach(([category, items]) => {
    console.log(`\n📁 ${category}:`);
    Object.entries(items).forEach(([name, url]) => {
      console.log(`   ${name}: ${url}`);
    });
  });
  
  console.log(`\n💾 Saved to: ${outputPath}`);
  console.log('\n🚀 Next steps:');
  console.log('1. Update page components to use these URLs');
  console.log('2. Test image loading in browser');
  console.log('3. Replace with actual game screenshots if needed');
}

main();
