import { ApartType } from "../typedefs/home"

const imgnames = ['apart1_img1', 'apart1_img2', 'apart1_img3', 'apart1_img4']

export const apart: ApartType = {
  imgs: imgnames,
  pricePerNight: 60,
  owner: {
    name: 'Elon Musk',
    img: 'musk'
  },
  description: `Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.`,
  data: {
    bathrooms: 1,
    bedrooms: 3,
    dir: 'Av. San Martín 315, Mendoza, Argentina',
    type: 'departamento',
    freeParking: true,
    wifi: true
  }
}