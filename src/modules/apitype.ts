export type blogResponse = {
  id: string
  createdAt: string
  publishedAt: string
  revisedAt: string
  title: string
  eyecatch?: {
    url: string
    height: number
    width: number
  }
  introduction: string
  toc: boolean
  content: string
}

export type newsResponse = {
  id: string
  createdAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}
