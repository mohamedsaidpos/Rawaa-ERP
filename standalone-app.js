#!/usr/bin/env node

/**
 * Rawaa ERP - Standalone Executable
 * يشتغل بدون محتاجات، كل بيانات محفوظة محليا
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const { randomUUID } = require('crypto');

const app = express();
app.use(express.json());

// In-memory storage (بيبقى في الرام لحد ما تغلق البرنامج)
const storage = {
  products: [
    { id: '1', name: 'آيفون 15 برو', barcode: '123456789', sku: 'iPhone15PRO', salePrice: 45000, costPrice: 38000, currentStock: 15, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', name: 'سامسونج S24 Ultra', barcode: '123456790', sku: 'S24ULTRA', salePrice: 42000, costPrice: 35000, currentStock: 12, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', name: 'آيباد برو 12.9', barcode: '123456791', sku: 'IPADPRO129', salePrice: 35000, costPrice: 29000, currentStock: 8, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '4', name: 'ماك بوك برو M3', barcode: '123456792', sku: 'MBPROM3', salePrice: 75000, costPrice: 62000, currentStock: 5, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '5', name: 'إير بودز برو 2', barcode: '123456793', sku: 'AIRPODS2', salePrice: 8500, costPrice: 7000, currentStock: 25, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '6', name: 'أبل ووتش سيريس 9', barcode: '123456794', sku: 'WATCH9', salePrice: 18000, costPrice: 15000, currentStock: 10, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '7', name: 'كابل شحن USB-C', barcode: '123456795', sku: 'CABLE-C', salePrice: 250, costPrice: 150, currentStock: 100, isActive: true, isTaxable: false, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '8', name: 'حافظة آيفون 15', barcode: '123456796', sku: 'CASE-15', salePrice: 450, costPrice: 250, currentStock: 50, isActive: true, isTaxable: false, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '9', name: 'شاحن سريع 20W', barcode: '123456797', sku: 'CHARGER20', salePrice: 650, costPrice: 450, currentStock: 40, isActive: true, isTaxable: false, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '10', name: 'لابتوب ديل XPS', barcode: '123456798', sku: 'XPSLAP', salePrice: 55000, costPrice: 46000, currentStock: 7, isActive: true, isTaxable: true, hasExpiry: false, hasSerial: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ],
  invoices: [],
  users: [],
};

// APIs
app.get('/api/products', (_req, res) => {
  res.json(storage.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = storage.products.find(p => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.json(product);
});

app.post('/api/products', (req, res) => {
  const product = { ...req.body, id: randomUUID(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  storage.products.push(product);
  res.status(201).json(product);
});

app.patch('/api/products/:id', (req, res) => {
  const idx = storage.products.findIndex(p => p.id === req.params.id);
  if (idx === -1) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  storage.products[idx] = { ...storage.products[idx], ...req.body, updatedAt: new Date().toISOString() };
  res.json(storage.products[idx]);
});

app.delete('/api/products/:id', (req, res) => {
  const idx = storage.products.findIndex(p => p.id === req.params.id);
  if (idx === -1) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  storage.products.splice(idx, 1);
  res.json({ success: true });
});

app.get('/api/invoices', (_req, res) => {
  res.json(storage.invoices);
});

app.post('/api/invoices', (req, res) => {
  const invoice = { ...req.body, id: randomUUID(), createdAt: new Date().toISOString() };
  storage.invoices.push(invoice);
  res.status(201).json(invoice);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n✅ Rawaa ERP تشتغل على: http://localhost:${PORT}`);
  console.log(`\n👤 البيانات:`);
  console.log(`   Username: admin`);
  console.log(`   Password: admin123\n`);
});

process.on('SIGINT', () => {
  console.log('\nتم إغلاق التطبيق');
  process.exit(0);
});
