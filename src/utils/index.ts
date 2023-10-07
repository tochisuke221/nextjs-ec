export const fetcher = async (
    resorce: RequestInfo,
    init?: RequestInit
): Promise<any> => {
    const res = await fetch(resorce, init)

    if(!res.ok){
        const errorRes = await res.json()
        const error = new Error (
            errorRes.message ?? 'APIリクエストに失敗'
        )

        throw error
    }

    return res.json()
}
