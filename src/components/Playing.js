import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';
export default function Playing() {
    const {song,handleSetSong} = useContext(Songs);
    const handleNext = () => {
        handleSetSong(song.id+1)
        console.log('next');
    }

    const handlePre = () => {
        handleSetSong(song.id-1)
        console.log('pre');
    }
    return (
        <div>
            <AudioPlayer
                // autoPlay={true}
                className='player-music'
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePre} />
        </div>
    )
}
