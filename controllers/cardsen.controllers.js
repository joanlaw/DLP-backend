import { truncateSync } from 'fs';
import Card from '../models/carden.model.js'
import { uploadImage, deleteImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'


//METODO GET 
export const getCardsen = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

//METODO POST
//METODO POST
export const createCardsen = async (req, res) => {
  try {
    const { nombre, name_english, tipo_de_carta, atributo, tipo, tipo_magica_trampa, nivel_rango_link, escala, rareza, limitacion, atk, def, materiales, descripcion, efecto_pendulo, caja, estructura, selection_box, lote, adicional, fecha_lanzamiento } = req.body;
    
    const cards = new Card({
      nombre,
      name_english,
      tipo_de_carta,
      atributo,
      tipo,
      tipo_magica_trampa,
      nivel_rango_link,
      escala,
      rareza,
      limitacion,
      atk,
      def,
      materiales,
      descripcion,
      efecto_pendulo,
      caja,
      estructura,
      selection_box,
      lote,
      adicional,
      fecha_lanzamiento,
      image: {} // Dejar el campo "image" inicialmente vacío
    });

    await cards.save();
    res.json(cards);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


//METODO DELETE
export const deleteCardsen = async (req, res) => {


  try {

    const cards = await
      Card.findByIdAndDelete(req.params.id)

    if (!cards) return res.status(404).json({
      message: 'La carta no existe'
    })

    if (cards.image?.public_id) {
      await deleteImage(product.image.public_id)
    }

    return res.json(cards)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


//METODO GET UNA CARTA
export const getCarden = async (req, res) => {


  try {

    const cards = await
      Card.findById(req.params.id)
     // Carta.findById(req.params.nombre)

    if (!cards) return res.status(404).json({
      message: 'La carta no existe'
    })

    return res.json(cards)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}



//METODO UPDATE
export const updateCardsen = async (req, res) => {

  try {

    const { id } = req.params;
    const cardsUpdate = await
      Card.findByIdAndUpdate(id, req.body, {
        new: true
      })

    return res.json(cardsUpdate)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

