import { cls } from '@utils/classnames'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { InputProps } from '../Input'
import styles from './Searchbar.module.scss'

export interface SearchBarProps extends InputProps {}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className={cls(styles.bar)}>
      <input {...props} type={'search'} className={cls(styles.search)} />
      <button type="submit" className={styles.icon}>
        <BiSearch color="inherit" />
      </button>
    </div>
  )
}

export default SearchBar
