import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid'


dotenv.config();

const app = express()
app.use(express.json())
const uri="mongodb://localhost:27017"
const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET);
    req.user = decoded; // includes email, sub (user id), etc.
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token verification failed' });
  }
};
await client.connect()
const db = client.db('local')

app.get('/genre',async (req,res)=>{
    const data = await db.collection('categories').find().toArray()
    res.json(data)
})
app.get('/songs',async (req,res)=>{
    const data = await db.collection('songs').find().toArray()
    res.json(data)
})
app.get('/artists',async (req,res)=>{
    const data = await db.collection('artists').find().toArray()
    res.json(data)
})
app.get('/playlists',authenticate,async (req,res)=>{
    const userEmail = req.user.email
    const data = await db.collection('playlists').find({"userid":userEmail}).toArray()
    res.json(data)
})
app.get('/createPlaylist/:playlistName',authenticate,async (req,res)=>{
    const userEmail = req.user.email
    const playlistName = req.params.playlistName
  

    const newPlaylist = {
      _id: uuidv4(),
      userid: userEmail,
      title: playlistName,
      songs: []
    }

    await db.collection('playlists').insertOne(newPlaylist)
    res.status(201).json({ message: 'Playlist created successfully'})

    
})
app.get('/songs/:search',async (req,res)=>{
  const search = req.params.search
  const data = await db.collection('songs').find({
      title: { $regex: search, $options: 'i' } 
    }).toArray()
  res.json(data)
})
app.get('/artists/:search',async (req,res)=>{
  const search = req.params.search
  const data = await db.collection('artists').find({
      title: { $regex: search, $options: 'i' } 
    }).toArray()
  res.json(data)
})

app.post('/artists',async (req,res)=>{
    const ids = req.body.ids
    const results = await db
      .collection('artists')
      .find({ _id: { $in: ids } })
      .toArray();
    res.json(results)
})

app.get('/songData/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const result = await db
      .collection('songs')
      .findOne({ _id: id });

    if (!result) {
      return res.status(404).json({ error: 'Song not found' });
    }

    res.json(result);
  } catch (error) {
    console.error('Error fetching song:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/albumData/:name', async (req, res) => {
  try {
    const id = req.params.name;

    const result = await db
      .collection('songs')
      .find({ "album": id }).toArray();

    if (!result) {
      return res.status(404).json({ error: 'album not found' });
    }

    res.json(result);
  } catch (error) {
    console.error('Error fetching album:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/artistData/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const result = await db.collection('artists').aggregate([
      {
        $match: { _id: id } // Match the specific artist
      },
      {
        $project: {
          _id: 1,
          title: 1,
          image: 1
        }
      },
      {
        $lookup: {
          from: 'songs',
          let: { artistId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$$artistId', '$artists']
                }
              }
            }
          ],
          as: 'list' // Nested list of matching songs
        }
      }
    ]).toArray();

    if (!result) {
      return res.status(404).json({ error: 'artist data not found' });
    }

    res.json(result);
  } catch (error) {
    console.error('Error fetching artist data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen('8000',()=>{
    console.log("Server listening at port 8000")
})