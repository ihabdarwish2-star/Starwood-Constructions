"use client";

/**
 * Hero background video.
 *
 * Mobile: renders as a normal block element at the top of the hero,
 * taking up real space (up to 50% of viewport height, keeping its
 * natural 16:9 shape). Because it's in normal document flow here
 * (not absolutely positioned), whatever content follows it in the
 * hero section is automatically pushed below it — no manual padding
 * guesswork needed.
 *
 * Desktop/tablet (md and up): switches to a full-bleed absolute
 * background behind the hero text, same as before.
 */
const VIDEO_SRC = "/videos/hero-video.mp4";

export default function VideoHero() {
  return (
    <div className="relative w-full md:absolute md:inset-0 overflow-hidden bg-black">
      <div className="w-full aspect-video max-h-[50vh] md:max-h-none md:aspect-auto md:h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
