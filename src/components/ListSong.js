import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    //  console.log(idSong);
    setIdSong(idSong);
    handleSetSong(idSong);
  }
  useEffect(() => {
    setIdSong(song.id)
  }, [song])
  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full '>
        <thead className='text-white h-12'>
          <tr>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody>
          {
            DataSongs.map((song, index) => {
              return (
                <tr
                  key={index}
                  className={`bg-slate-800 h-12 text-slate-400 hover:bg-slate-700 hover:cursor-pointer ${idSong === song.id && 'bg-slate-600 text-cyan-400'}`}
                  onClick={() => { handlePlaySong(song.id) }}>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-left
                  '>{song.name}</td>
                  <td className='text-center'>{song.author}</td>
                  <td className='text-center'>
                    <a href={song.url}>
                      <i className='fa fa-download'></i>
                    </a>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
