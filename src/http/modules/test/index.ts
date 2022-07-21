import { get } from '@/http/request'

export const fetchTestApi = (params: string) => get<ISearch>('/search', { keywords: params })
