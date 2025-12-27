export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;   // optional
  message: string;
  video?: string;     // optional – only if video exists
  poster?: string;    // optional – video thumbnail
}
