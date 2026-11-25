"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

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

  const showVideo = item?.video && !failed;
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      <div id="vm" role="dialog" aria-label="Film player" className={item ? "open" : ""}
        onClick={(e) => e.target === e.currentTarget && close()}>
        <button id="vx" aria-label="Close" onClick={close}>×</button>
        <div id="vs">
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
          {item && !showVideo && (
            item.image
              // eslint-disable-next-line @next/next/no-img-element
              ? <img className="vstage" src={item.image} alt="" />
              : <div className="vstage" style={{ background: item.bg }} />
          )}
          {item && !showVideo && <div className="vnote">{item.note}</div>}
        </div>
        <p id="vt">{item?.title}</p>
      </div>
    </Ctx.Provider>
  );
}
