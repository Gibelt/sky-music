function SkeletonTrackList() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image" />
          <div className="track__title-skeleton" />
        </div>
        <div className="track__author-skeleton" />
        <div className="track__album-skeleton" />
        <div className="track__time" />
      </div>
    </div>
  );
}

export default SkeletonTrackList
