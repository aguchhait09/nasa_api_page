export const endpoints = {
    epicAllDate: '/EPIC/api/natural/all',
    epicDateWiseData: '/EPIC/api/natural/date/2019-05-30',
    epicImages: (img: string)=> `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${img}.png`,
    imgGalery: '/mars-photos/api/v1/rovers/curiosity/photos?sol=1000',
    apoData: 'https://api.nasa.gov/planetary/apod',
}