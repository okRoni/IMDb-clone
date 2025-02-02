import Actor from '../models/actor.model.js'

export const getHello = async (req, res) => {
  res.send('Hello World!')
}

export const createActor = async (req, res) => {
  try {
    const actor = await Actor.create(req.body)
    res.status(201).json(actor)
  }
  catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getActors = async (req, res) => {
  try {
    const actors = await Actor.find()
    res.status(200).json(actors)
  }
  catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id)
    res.status(200).json(actor)
  }
  catch (error) {
    res.status(500).json({ error: error })
  }
}