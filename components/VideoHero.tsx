"use client";

/**
 * Hero background video — plays on all screen sizes, including mobile.
 * Muted, autoplay, loop, and playsInline are all required for autoplay
 * to work reliably on mobile browsers (especially iOS Safari).
 */
const VIDEO_SRC = "/videos/hero-video.mp4";

export default function VideoHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
