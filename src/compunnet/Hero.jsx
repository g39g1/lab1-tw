import React from 'react'


const Images = [
    {
        img : "https://i.pinimg.com/736x/35/ca/31/35ca31f437a69b569a786e3bacf1972f.jpg",
        title:"ُElectronics",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },
     {
        img : "https://i.pinimg.com/736x/f5/0d/4b/f50d4be1b04d36f8f6c9d0e1b7850f66.jpg",
        title:"Clothings",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },
     {
        img : "https://i.pinimg.com/736x/dd/26/36/dd26362775c1eca472e909f61e10ea09.jpg",
        title:"Computer",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },
     {
        img : "https://i.pinimg.com/736x/e1/f4/a7/e1f4a79042779c970d1a16e3ce0f1471.jpg",
        title:"Home & Kitchen",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },
     {
        img : "https://i.pinimg.com/736x/9b/8b/98/9b8b985980af533cd4f3221eb6d91c36.jpg",
        title:"Hralthy & Beauty",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },
     {
        img : "https://i.pinimg.com/736x/b7/df/fe/b7dffe7ca80d87fe3ee989e387cd306f.jpg",
        title:"JEWELRY & WATCH",
        desction:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio delectus iusto temporibus harum eligendi iure ipsum, minus ex vitae,"
    },

];












function Hero() {
  return (
    <
        
    >
    <h1 className='ml-6'>Top CATEGORIES of the month</h1>
    <hr className='mt-4'></hr>
<div className='grid grid-cols-3 gap-4'>
      {Images.map((item, index) => (
        <div className=' border-x-orange-50 p-4 border-1 w-full grid-cols-3 ' key={index}>
          <img src={item.img} alt={item.title} width={150} />
          <h3>{item.title}</h3>
          <p>{item.desction}</p>
        </div>
      ))}
    </div> 
    </>
  )
}

export default Hero
