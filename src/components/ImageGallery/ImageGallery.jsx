import React,{useState} from 'react';
import './ImageGallery.css'

const ImageGallery = () => {
    const items = [
        {
          id: 0,
          date: "22 Dec 2022",
          title: "Autobiography of a Yogi: Chapter 34",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 1,
          date: "22 Dec 2022",
          title: "Autobiography of Yogi: Chapter 33",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 2,
          date: "22 Dec 2022",
          title: "Food at Dunagiri Retreat: Ayurvedic",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 3,
          date: "22 Dec 2022",
          title: "What Is Dunagiri Known For?",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 4,
          date: "22 Dec 2022",
          title: "What Is Kriya Yoga: A Journey of Self-",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEnQyStlkt1Khcb2k6E3-5hs2i_S6lWfznA&usqp=CAU",
        },
        {
          id: 5,
          date: "22 Dec 2022",
          title: "Autobiography of a Yogi's Influence on",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 6,
          date: "22 Dec 2022",
          title: "Mahavatar Babaji: The Eternal Yogi o",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ELXZSKEbi4V07O48kPZ4ySXouVLY5jxzA&usqp=CAU",
        },
        {
          id: 7,
          date: "22 Dec 2022",
          title: "How to Reach Dunagiri Retreat",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoJ40cW1T4A2fLvQIhLsV_LhEek-ug5sZcg4MO5AGy-oFKx1bu-OH3Vafyan4MIYiKuk&usqp=CAU",
        },
        {
          id: 8,
          date: "22 Dec 2022",
          title: "Mahavatar Babaji Cave: A Spiritual",
          url: "https://static.wixstatic.com/media/9c6671_8bac7a15b7f84dfb94df9ee3e8e96ae8.jpg/v1/fill/w_285,h_285,q_90/9c6671_8bac7a15b7f84dfb94df9ee3e8e96ae8.webp",
        },
      ];
    
      const [startIndex, setStartIndex] = useState(0);
    
      const handleButtonClick = (index) => {
        setStartIndex(index * 3);
      };
  return (
    <div className="image-gallery-container">
      <div className="image-container">
        {items.slice(startIndex, startIndex + 3).map((item) => (
          <div key={item.id} className="image-wrapper">
          
            <img src={item.url} alt='img' />
            <div className="image-info">
              <p className='image-date'>{item.date}</p>
              <h3 className='image-title'>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        {[0, 1, 2].map((index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
             {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
