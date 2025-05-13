import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

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