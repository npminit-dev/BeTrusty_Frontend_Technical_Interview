import { ApartImagesType, ApartType } from "../typedefs/home"

const imgnames: Array<ApartImagesType> = [
  {
    imgname: 'apart1_img1',
    description: 'Elegante y acogedora sala de estar con sofá, mesa de centro, alfombra, sillón y TV. La habitación está decorada con tonos cálidos y cuenta con una iluminación natural.',
    alt: 'Room one image'
  },
  {
    imgname: 'apart1_img2',
    description: 'Una minimalista y moderna habitación, cuenta con una amplia sala de estar, una cocina totalmente equipada y un dormitorio con una cama queen.',
    alt: 'Room two image'
  },
  {
    imgname: 'apart1_img3',
    description: 'Moderna y elegante habitacion con un toque acogedor. Cuenta con una amplia sala de estar con sofá, mesa de centro y TV, una cocina totalmente equipada, con cama de matrimonio y un baño completo.',
    alt: 'Room three image'
  },
  {
    imgname: 'apart1_img4',
    description: 'Un hermoso patio con una piscina cristalina y exuberantes plantas tropicales, con cómodas tumbonas perfectas para tomar sol. Cuenta con una zona de estar cubierta, con una mesa y sillas, ideal para relajarse.',
    alt: 'Room four image'
  }]

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