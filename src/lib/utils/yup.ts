export const ignoreVazio = (v: unknown, orig: unknown) =>
    typeof orig === "string" && orig.trim() === "" ? undefined : v

export const moedaParaNumero = (v: unknown) => {
    if (typeof v !== "string") return v
    const limpo = v.replace(/[^\d,.-]/g, "")
    const normalizado = limpo.replace(/\./g, "").replace(",", ".")
    const n = Number(normalizado)
    return Number.isFinite(n) ? n : undefined
}

export function parseMoedaFlex(valor: unknown) {
    if (valor == null) return undefined
    const s = String(valor).replace(/[^\d.,-]/g, "")

    if (!s) return undefined

    const lastComma = s.lastIndexOf(",")
    const lastDot = s.lastIndexOf(".")
    let decimalSep = ""

    if (lastComma !== -1 || lastDot !== -1) {
        decimalSep = lastComma > lastDot ? "," : "."
    }

    let normalizado = s
    if (decimalSep) {
        const milharSep = decimalSep === "," ? "." : ","
        normalizado = normalizado.split(milharSep).join("")
        normalizado = normalizado.replace(decimalSep, ".")
    } else {
        normalizado = normalizado.replace(/[.,]/g, "")
    }

    const n = Number(normalizado)
    return Number.isFinite(n) ? n : undefined
}

export const toNumberBR = (original: unknown) => {
    if (typeof original !== "string") return original as number | undefined
    // remove tudo que não for dígito, ponto, vírgula ou hífen
    const only = original.replace(/[^\d.,-]/g, "")
    // remove pontos de milhar e troca vírgula por ponto
    const normalized = only.replace(/\./g, "").replace(",", ".")
    const n = Number(normalized)
    return Number.isNaN(n) ? undefined : n
  }
