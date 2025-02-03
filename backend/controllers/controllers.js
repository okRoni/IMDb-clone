import Actor from '../models/actor.model.js'
import Movie from '../models/movie.model.js'
import User from '../models/user.model.js'

export const getHello = async (req, res) => {
  res.send('Hello World!')
}

export const registerUser = async (req, res) => {
  try {
    if (await User.exists({ user: req.body.user })) {
      res.status(400).send('User already exists')
      return
    }

    const user = await User.create(req.body)
    res.status(201).json(user)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ user: req.body.user })

    if (!user) {
      res.status(404).send('User not found')
      return
    }

    if (user.password !== req.body.password) {
      res.status(401).send('Invalid password')
      return
    }

    res.status(200).json(user)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const createActor = async (req, res) => {
  try {
    const actor = await Actor.create(req.body)
    res.status(201).json(actor)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const getActors = async (req, res) => {
  try {
    const actors = await Actor.find()
    res.status(200).json(actors)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id)

    if (!actor) {
      res.status(404).send('Actor not found')
      return
    }

    res.status(200).json(actor)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const updateActor = async (req, res) => {
  try {
    const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(actor)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const deleteActor = async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id)
    
    await deleteActorFromMovies(req.params.id)
    
    res.status(204).send()
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

const deleteActorFromMovies = async (actorId) => {
  await Movie.updateMany(
    { "cast.actor": actorId },
    { $pull: { cast: { actor: actorId } } }
  )
}

export const addCastToMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    if (!movie) {
      res.status(404).send('Movie not found')
      return
    }

    const actor = await Actor.findById(req.body.actor)

    if (!actor) {
      res.status(404).send('Actor not found')
      return
    }

    movie.cast.push({ actor: actor._id, role: req.body.role })
    await movie.save()

    res.status(200).json(movie)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const removeCastFromMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    if (!movie) {
      res.status(404).send('Movie not found')
      return
    }

    const actor = await Actor.findById(req.body.actor)

    if (!actor) {
      res.status(404).send('Actor not found')
      return
    }
    
    movie.cast = movie.cast.filter(cast => cast.actor.toString() !== actor._id.toString())
    await movie.save()

    res.status(200).json(movie)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('cast.actor')
    res.status(200).json(movies)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('cast.actor')

    if (!movie) {
      res.status(404).send('Movie not found')
      return
    }

    res.status(200).json(movie)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const createMovie = async (req, res) => {
  try {
    const movie = await (await Movie.create(req.body)).populate('cast.actor')
    res.status(201).json(movie)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id)
    res.status(204).send()
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('cast.actor')
    res.status(200).json(movie)
  }
  catch (error) {
    res.status(500).json({ error : error.message })
  }
}

