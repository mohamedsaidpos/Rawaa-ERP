#!/usr/bin/env node
/**
 * Rawaa ERP - Standalone Executable Builder
 * يحول التطبيق لملف exe واحد بدون متطلبات
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔨 بناء Rawaa ERP Standalone...\n');

try {
  // 1. Build the app
  console.log('📦 بناء التطبيق...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 2. Install pkg globally if not present
  console.log('\n📥 تثبيت pkg...');
  try {
    execSync('pkg --version', { stdio: 'pipe' });
  } catch (e) {
    execSync('npm install -g pkg', { stdio: 'inherit' });
  }
  
  // 3. Create executable
  console.log('\n⚙️  إنشاء executable مستقل...');
  execSync('pkg . --targets win-x64 --output "Rawaa-ERP.exe"', { stdio: 'inherit' });
  
  console.log('\n✅ تم بنجاح!\n');
  console.log('📁 الملف: Rawaa-ERP.exe');
  console.log('📍 الموقع:', path.resolve('Rawaa-ERP.exe'));
  console.log('\n🚀 للتشغيل: اضغط على Rawaa-ERP.exe مباشرة\n');
  
} catch (error) {
  console.error('❌ خطأ:', error.message);
  process.exit(1);
}
