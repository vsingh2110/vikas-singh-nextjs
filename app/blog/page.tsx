import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Blog | Vikas Singh',
  description: 'Read articles about web development, digital marketing, psychology, and technology by Vikas Singh',
}

// Redirect to English blog by default
export default function BlogPage() {
  redirect('/blog/en')
}
