import { HOST, SECRET_WORD } from '../variables'

export const post = async (
  endpoint: string,
  data?: unknown
): Promise<unknown> => {
  try {
    const URL = `${HOST}/${endpoint}`
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-secret-key': SECRET_WORD,
      },
      body: JSON.stringify(data as unknown),
    })
    return await res.json()
  } catch (error) {
    console.error(`post error`, error)
    return error
  }
}
