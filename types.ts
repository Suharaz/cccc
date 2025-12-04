import React from 'react';

export interface NavItem {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

export interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  description: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
}

export enum Tab {
  HOME = 'home',
  PRODUCTS = 'products',
  ABOUT = 'about',
  BLOG = 'blog',
  CONTACT = 'contact'
}