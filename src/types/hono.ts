import { Session } from "hono-sessions"

export type HonoApp = {
  Variables: {
    session: Session<Record<string, any>>,
    session_key_rotation: boolean
  }
}