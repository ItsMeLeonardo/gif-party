const filterDataGif = (data) => {
  return {
    id: data.id,
    image: data.images.original.webp, 
    url: data.url,
    title: data.title,
    dateTime: data.import_datetime 
  }
}

export default filterDataGif;