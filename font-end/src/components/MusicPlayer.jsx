import { createContext, useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playAudio = async () => {
            try {
                if (audioRef.current) {
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        };

        playAudio();
    }, []);

    const playAudio = async () => {
        try {
            if (audioRef.current) {
                await audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error('Error playing audio:', error);
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <AudioContext.Provider value={{ audioRef, isPlaying, playAudio, pauseAudio }}>
            {children}
            <audio ref={audioRef} src="../src/assets/music/nhac.mp3" loop />
        </AudioContext.Provider>
    );
};

AudioProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useAudio = () => useContext(AudioContext);
