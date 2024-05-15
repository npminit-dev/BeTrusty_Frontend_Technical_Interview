export type ApartHeaderProps = {
  owner: string,
}

export type ApartImgsProps = {
  imgnames: Array<string>
}

export type ApartType = {
  imgs: Array<string>,
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