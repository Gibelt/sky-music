import { useState } from 'react'
import FilterList from '../filterList/FilterList'
import s from './Filter.module.css'

const performers = [
  'Michael Jackson',
  'Frank Sinatra',
  'Calvin Harris',
  'Zhu',
  'Arctic Monkeys',
  'Sia',
  'Rob Thomas',
  'Beatles',
]

const genres = [
  'Рок',
  'Хип-хоп',
  'Поп-музыка',
  'Техно',
  'Инди',
  'Рэп',
  'Панк',
  'Дип-хаус',
]

export default function Filter() {
  const [performerVisible, setPerformerVisible] = useState(false)
  const togglePerformerVisibility = () => setPerformerVisible(!performerVisible)

  const [yearVisible, setYearVisible] = useState(false)
  const toggleYearVisibility = () => setYearVisible(!yearVisible)

  const [genreVisible, setGenreVisible] = useState(false)
  const toggleGenreVisibility = () => setGenreVisible(!genreVisible)

  function performerFilterActive() {
    setYearVisible(false)
    setGenreVisible(false)
    togglePerformerVisibility()
  }

  function yearFilterActive() {
    setGenreVisible(false)
    setPerformerVisible(false)
    toggleYearVisibility()
  }

  function genreFilterActive() {
    setPerformerVisible(false)
    setYearVisible(false)
    toggleGenreVisibility()
  }

  return (
    <div className={s.filter}>
      <div className={s.title}>Искать по:</div>
      <div
        role="presentation"
        onKeyDown={performerFilterActive}
        onClick={performerFilterActive}
        className={`${s.button} ${performerVisible ? s.active : ''}`}
      >
        {performerVisible && (
          <FilterList
            list={performers}
            mode="normal"
            class={`${s.list} ${s.performers}`}
          />
        )}
        исполнителю
      </div>
      <div
        role="presentation"
        onKeyDown={yearFilterActive}
        onClick={yearFilterActive}
        className={`${s.button} ${yearVisible ? s.active : ''}`}
      >
        {yearVisible && (
          <FilterList class={`${s.list} ${s.year}`} mode="radio" />
        )}
        году выпуска
      </div>
      <div
        role="presentation"
        onKeyDown={genreFilterActive}
        onClick={genreFilterActive}
        className={`${s.button} ${genreVisible ? s.active : ''}`}
      >
        {genreVisible && (
          <FilterList
            list={genres}
            mode="normal"
            class={`${s.list} ${s.genre}`}
          />
        )}
        жанру
      </div>
    </div>
  )
}
