"use client";

/**
 * Hero background video.
 *
 * Desktop/tablet (md and up): fills the entire hero section, cropped
 * with object-cover as normal — the hero is wide enough that this looks
 * natural.
 *
 * Mobile: the hero section is tall and narrow (portrait), so filling it
 * completely with a landscape video crops far too much off the sides.
 * Instead, the video keeps its natural 16:9 shape and sits at the top,
 * capped at 50% of the viewport height. The remaining space below it is
 * solid black, so the dark overlay and hero text (which sit on top of
 * this component) still read clearly either way.
 */
const VIDEO_SRC = "/videos/hero-video.mp4";

export default function VideoHero() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
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
