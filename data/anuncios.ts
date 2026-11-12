type Anuncio = {
  texto: string;
  enlace?: string;
};

export const ANUNCIOS: Anuncio[] = [
  { texto: "Pan recién horneado todos los días a las 08:30 y 17:30" },
  {
    texto: "¿Quieres hacer un encargo? Escríbenos por WhatsApp",
    enlace: "https://wa.me/56912345678?text=Hola!%20Quiero%20hacer%20un%20encargo",
  },
  { texto: "Bienvenidos a Panadería El Sol" },
];
