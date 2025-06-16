import { promises as fs } from 'fs';
import { join, extname, basename } from 'path';

// 递归遍历目录
async function walkDir(dir, callback) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = join(dir, file.name);
    
    if (file.isDirectory()) {
      await walkDir(fullPath, callback);
    } else if (file.isFile() && extname(file.name).toLowerCase() === '.md') {
      await callback(fullPath, file.name);
    }
  }
}

// 处理 Markdown 文件
async function processMarkdownFile(filePath, fileName) {
  try {
    // 读取文件内容
    let content = await fs.readFile(filePath, 'utf8');
    
    // 检查和移除现有 frontmatter
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    content = content.replace(frontmatterRegex, '');
    
    // 创建新的 frontmatter
    const title = basename(fileName, '.md');
    const newFrontmatter = `---
title: ${title}
---
`;
    
    // 写入新内容
    await fs.writeFile(filePath, `${newFrontmatter}\n${content.trim()}`);
    console.log(`已处理: ${filePath}`);
  } catch (error) {
    console.error(`处理文件 ${filePath} 时出错:`, error);
  }
}

// 主函数
async function main() {
  try {
    const currentDir = process.cwd();
    console.log(`开始处理目录: ${currentDir}`);
    
    await walkDir(currentDir, processMarkdownFile);
    console.log('所有 Markdown 文件处理完成');
  } catch (error) {
    console.error('发生错误:', error);
  }
}

// 执行
main();