import { useEffect, useState } from 'react'
import './style/SliderImgs.css'

const SliderImgs = ({ product }) => {

    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [index, setindex] = useState()
    const totalItems = product?.images.length;
    console.log(currentIndex)

    const styleSliderMovable = {
        transform: `translateX(calc(-${currentIndex}/${totalItems} * 100%))`,
        width: `${totalItems}00%`
    }

    const styleSliderImgContainer = {
        width: `calc(100%/${totalItems})`
    }

    const handlePrev = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(totalItems - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex >= totalItems - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }
    const idArray = []
    product?.images.filter(img => idArray.push(img.id))

    useEffect(() => {
        setCurrentIndex(idArray.indexOf(index))
    }, [index])
    console.log(currentIndex)

    return (
        <div className='slider'>
            <div className='slider__div'>
                <button className='slider__btn slider__prev' onClick={handlePrev}>
                    <i className='bx bxs-chevron-left' ></i>
                </button>
                <div className="slider__movable" style={styleSliderMovable}>
                    {
                        product?.images.map(infoImg => (
                            <div className="slider__img--container" key={infoImg.id} style={styleSliderImgContainer}>
                                <img className="slider__img" src={infoImg.url} alt="" />
                            </div>
                        ))
                    }
                </div>
                <button className='slider__btn slider__next' onClick={handleNext}>
                    <i className='bx bxs-chevron-right' ></i>
                </button>

            </div>
            <div className="slider__static" >
                {
                    product?.images.map(infoImg => (
                        <div className="slider__img--cont" key={infoImg.id} onClick={() => {
                            setindex(infoImg.id)
                        }}>
                            <img className="slider__imgs" src={infoImg.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SliderImgs