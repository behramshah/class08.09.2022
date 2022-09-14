import HouseItem from './ItemHouse';

const Houses = () => {
    const urls = [
        'https://www.w3schools.com/w3images/house2.jpg',
        'https://www.w3schools.com/w3images/house3.jpg',
        'https://www.w3schools.com/w3images/house4.jpg',
        'https://www.w3schools.com/w3images/house5.jpg',
      ]

      return(
        <>
            {
                urls.map(url => <HouseItem key={url} imgUrl={url}/>)
            }
        </>
      )


}

export default Houses;