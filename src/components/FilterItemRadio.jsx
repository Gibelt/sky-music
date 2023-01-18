import s from './FilterItemRadio.module.css'

export default function FilterItemRadio() {
    return (
      <>
        <label className={s.item} htmlFor="newer">
          <input
            className="radio-input"
            type="radio"
            name="year-filter"
            id="newer"
            value="newer"
          />
          более новые
        </label>
        <label className={s.item} htmlFor="older">
          <input
            className="radio-input"
            type="radio"
            name="year-filter"
            id="older"
            value="older"
          />
          более старые
        </label>
      </>
    )
  }