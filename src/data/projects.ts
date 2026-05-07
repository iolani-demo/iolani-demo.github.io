export interface Project {
  title: string
  description: string
  url?: string
  videoUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    title: 'Example Project',
    description: 'A short description of what this project does and why it matters.',
    url: 'https://github.com/iolani-demo/example-project',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['TypeScript', 'Node.js'],
  },
  {
    title: 'Another Project',
    description: 'Another project without a video demo — just a link.',
    url: 'https://github.com/iolani-demo/another-project',
    tags: ['Python', 'API'],
  },
]
