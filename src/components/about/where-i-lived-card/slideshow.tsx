import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { cities } from "utils/data/images";

const delay = 4000;

const Slideshow = () => {
  const [index, setIndex] = useState<number>(0);
  const [wasBtnClicked, setWasBtnClicked] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < cities.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }, delay);

    if (wasBtnClicked) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [index, wasBtnClicked]);

  return (
    <>
      <div
        className="c-slideshow"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {cities.map(
          ({
            id,
            name,
            years,
            imgUrl
          }: {
            id: number;
            name: string;
            years: string;
            imgUrl: string;
          }) => (
            <div className="c-slideshow__slide" key={id}>
              <div className="c-slideshow__img">
                <img src={imgUrl} alt={name} />
              </div>
              <div className="c-slideshow__overlay">
                {index > 0 ? (
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="xl"
                    className="c-slideshow__angle c-slideshow__angle--left"
                    onClick={() => {
                      setIndex((prev) => prev - 1);
                      setWasBtnClicked(true);
                    }}
                  />
                ) : (
                  <div className="empty-angle empty-angle--left"></div>
                )}

                <div>
                  <p className="c-slideshow__city">{name}</p>
                  <p className="c-slideshow__years">{years}</p>
                </div>

                {index < cities.length - 1 ? (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="xl"
                    className="c-slideshow__angle c-slideshow__angle--right"
                    onClick={() => {
                      setIndex((prev) => prev + 1);
                      setWasBtnClicked(true);
                    }}
                  />
                ) : (
                  <div className="empty-angle empty-angle--right"></div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Slideshow;