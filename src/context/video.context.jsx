import { createContext, useState } from "react";

export const VideoContext = createContext ({
    currentVideo: null,
    setCurrentVideo: () => null 
});

export const VideoProvider = ({ children }) => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const value = {currentVideo, setCurrentVideo};

    // useEffect(() => {
    //     const newVideo = onSendVideo((user) => {
    //         setCurrentUser(user);
    //     });
    //     return unsubscribe;
    // }, []);

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};
  