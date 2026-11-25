"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Ctx = createContext({ open: () => { } });
export const usePlayer = () => useContext(Ctx);

// open({ title, note, video?, image?, bg? })
export default function PlayerProvider({ children }) {
  const [item, setItem] = useState(null);
  const [failed, setFailed] = useState(false);
  const open = useCallback((i) => { setFailed(false); setItem(i); }, []);
  const close = useCallback(() => setItem(null), []);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [close]);

  const showYouTube = item?.youtubeId;
  const showVideo = !showYouTube && item?.video && !failed;
  const showFallback = !showYouTube && !showVideo;
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <div id="vm" role="dialog" aria-label="Film player" className={item ? "open" : ""}
        onClick={(e) => e.target === e.currentTarget && close()}>
        <button id="vx" aria-label="Close" onClick={close}>×</button>
        <div id="vs">
          {item && showYouTube && (
            <LiteYouTubeEmbed
              id={item.youtubeId}
              title={item.title}
              thumbnail={item.poster}
              params={{ controls: 1, rel: 0, playsinline: 1 }}
              wrapperClass="vstage yt-lite"
              iframeClass="vstage"
              noscriptFallback={false}
            />
          )}
          {item && showVideo && (
            <video
              className="vstage"
              src={item.video}
              poster={item.poster || item.image}
              controls
              autoPlay
              playsInline
              preload="auto"
              controlsList="nodownload"
              onError={() => setFailed(true)}
            />
          )}
          {item && showFallback && (
            item.image
              // eslint-disable-next-line @next/next/no-img-element
              ? <img className="vstage" src={item.image} alt="" />
              : <div className="vstage" style={{ background: item.bg }} />
          )}
          {item && showFallback && <div className="vnote">{item.note}</div>}
        </div>
        <p id="vt">{item?.title}</p>
      </div>
    </Ctx.Provider>
  );
}
