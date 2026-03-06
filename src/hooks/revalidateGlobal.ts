import { revalidateTag } from 'next/cache'
import type { GlobalAfterChangeHook } from 'payload'

export const revalidateGlobal: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
    payload.logger.info(`Revalidating global: ${doc.globalType}`)
    try {
        revalidateTag(`global_${doc.globalType}`)
    } catch (err) {
        payload.logger.warn(`Skipping revalidation: ${err}`)
    }
    return doc
}
