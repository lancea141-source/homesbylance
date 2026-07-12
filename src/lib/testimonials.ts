export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  youtubeId?: string; // set once the video review is live
  role: "Buyer" | "Seller" | "Investor";
};

// Add real client testimonials here as they come in. Written quote is
// required; youtubeId is optional \u2014 leave it off for a text-only card
// until the video review exists.
export const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    location: "Traverse Mountain, Lehi",
    quote: "Add your first testimonial here \u2014 written quote now, video link once it's recorded.",
    role: "Buyer",
  },
];
