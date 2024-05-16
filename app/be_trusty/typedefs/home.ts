export type ApartHeaderProps = {
  owner: string,
}
export type ApartImagesType = {
  imgname: string,
  description: string,
  alt: string
}

export type ApartImgsProps = {
  images: Array<ApartImagesType>
}

export type ApartType = {
  imgs: Array<ApartImagesType>,
  description: string,
  pricePerNight: number,
  owner: {
    name: string,
    img: string
  }
  data: ApartData
}

export type ApartData = {
  dir: string,
  type: 'departamento',
  bedrooms: number,
  bathrooms: number,
  wifi: boolean,
  freeParking: boolean
}

export type ApartReserveProps = {
  pricePerNight: number
}