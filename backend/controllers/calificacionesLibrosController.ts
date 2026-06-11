
import { NextFunction, Request, Response } from 'express';
import { Libro } from '../models/Libro';
const { Op } = require('sequelize');

// PATCH libros/:id/calificación
export const actualizarCalificacion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const puntaje = parseFloat(req.body.puntaje);

  //Validacion puntaje
  if (isNaN(puntaje) || puntaje < 1 || puntaje > 5) {
  res.status(400).json({ error: 'La calificación debe ser un número entre 1 y 5' });
  return;
  }

    const libro = await Libro.findByPk(id);
    if (!libro) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }

    await libro.update({ puntaje });
    res.json({
      message: 'Calificación actualizada correctamente',
      libro
    });

  } catch (error) {
    next(error);
  }
};

// GET mejorCalificados
export const getMejorCalificados = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const books = await Libro.findAll({
      where: {
        puntaje: {
          [Op.not]: null
        }
      },
      order: [['puntaje', 'DESC']],
    });

    res.json({ libros: books });
  } catch (error) {
    next(error);
  }
};