"use client"
import React from 'react'
import styles from './menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({item, key}: {item: any, key: string}) => {
  const pathName = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
