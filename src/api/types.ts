export interface ApiError {
  data: null
  total?: null
  message: string
  status: boolean
}

export interface ApiOk<Data> {
  data: Data
  total?: number | null
  message: null
  status: boolean
}

export type Api<Data> = ApiOk<Data> | ApiError
