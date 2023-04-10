import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { startPlaylist, stopPlaylist } from '../store/audioPlayerSlice';
import { ReactComponent as StopIcon } from './stop.svg';
import { ReactComponent as PlayIcon } from './play.svg';
import song1 from './song1.mp3';
import song2 from './song2.mp3';

const songList = [song1, song2];
const audio = new Audio();

const AudioPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.audioPlayer.isPlaying);
  const currentSongIndex = useSelector((state: RootState) => state.audioPlayer.currentSongIndex);

  useEffect(() => {
    audio.loop = false;
    audio.addEventListener('ended', handleSongEnded);
    return () => {
      audio.removeEventListener('ended', handleSongEnded);
    };
  }, []);

  useEffect(() => {
    audio.src = songList[currentSongIndex];
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    const handleUnload = () => {
      dispatch(stopPlaylist());
      audio.pause();
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [dispatch]);

  const togglePlay = useCallback(() => {
    if (!isPlaying) {
      dispatch(startPlaylist(0));
      audio.play();
    } else {
      dispatch(stopPlaylist());
      audio.pause();
    }
  }, [isPlaying, dispatch]);

  const handleSongEnded = useCallback(() => {
    dispatch(stopPlaylist());
    const nextIndex = (currentSongIndex + 1) % songList.length;
    dispatch(startPlaylist(nextIndex));
  }, [currentSongIndex, dispatch]);

  return (
    <div onClick={togglePlay}>
      {isPlaying ? <StopIcon /> : <PlayIcon />}
      <audio src={songList[currentSongIndex]} />
    </div>
  );
};

export default AudioPlayer;